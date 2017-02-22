(ns multiplayer.core
  (:require
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]

            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close! timeout]]
            [chord.format.fressian :as fression]
            [cljs-time.local :as local]
            [cljs-time.coerce :as coerce]

            [infinitelives.pixi.canvas :as c]
            [infinitelives.pixi.events :as e]
            [infinitelives.pixi.resources :as r]
            [infinitelives.pixi.texture :as t]
            [infinitelives.pixi.sprite :as s]

            [infinitelives.utils.events :as events]

            [cljs.core.async :refer [<!]]
            )
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [infinitelives.pixi.macros :as m])
  (:import goog.History))

(defonce canvas
  (c/init
   {:expand true
    :engine :auto
    :layers [:bg :world :float :ui]
    :background 0x303030
    }))

(defonce game-state (atom {:angle 0}))

;; how fast the network game pump goes in frames
;; a state update is sent once in this number of frames
(def network-update-frames 20)

(defn compress [state]
  (-> state
      (update-in [:angle] #(.toFixed % 2))
      (dissoc :reflection))
)

(defn receive-message
  "receive the nework `message` use it to update the `state` and
  return the next state"
  [state message rec-num]
  (let [{[comm {:keys [reflection-angle]}] :message} message
        f-ang (when reflection-angle (js/parseFloat reflection-angle))]
    ;(js/console.log "fang=" (str f-ang) (str message))
    (-> state
        (assoc-in [:reflection :old :angle]
                  (get-in state [:reflection :new :angle] nil))
        (assoc-in [:reflection :new :angle] f-ang))))

(defn receiver [ch]
  (go
    (loop [rec-num 0]
      (swap! game-state receive-message (<! ch) rec-num)
      (recur (inc rec-num)))))

(defn reporter-game-state []
  (go
    (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/ws" {:format :transit-json}))]
      (if-not error
        (do
          ;; start reciever go loop
          (receiver ws-channel)
          (>! ws-channel [:login :test])

          (loop [fnum 0]
            (when (zero? (mod fnum network-update-frames))
              (>! ws-channel [:state (compress @game-state)]))
            (<! (e/next-frame))
            (recur (inc fnum))
            )

          ;; (let [{response :message} (<! ws-channel)]

          ;;   (js/console.log "response:" (str response))
          ;;   )
          )
        (js/console.log "Error:" (pr-str error))))
)
)

(def assets
  {:ship-blue
   {:pos [0 0]
    :size [32 32]}
   :ship-green
   {:pos [32 0]
    :size [32 32]}
   :ship-violet
   {:pos [64 0]
    :size [32 32]}
   :ship-yellow
   {:pos [96 0]
    :size [32 32]}
   })

(defn left? []
  (events/is-pressed? :left))

(defn right? []
  (events/is-pressed? :right))

(defonce main-thread
  (go
    (<! (r/load-resources canvas :bg ["img/spritesheet.png"]))

    (reporter-game-state)

    (t/load-sprite-sheet! (r/get-texture :spritesheet :nearest) assets)

    (m/with-sprite canvas :bg
      [ship (s/make-sprite :ship-yellow :scale 3 :x -200)
       reflection (s/make-sprite :ship-blue :scale 3 :x 200)]
      (loop [fnum 0
             angle 0
             old-angle (get-in @game-state [:reflection :old :angle])
             new-angle (get-in @game-state [:reflection :new :angle])]
        (s/set-rotation! ship angle)

        (swap! game-state assoc :angle angle)
        ;(js/console.log "state=" (str @game-state))

        ;; lerp the reflection
        (when (and old-angle new-angle)
          (let [off (mod (dec fnum) network-update-frames)
                m (/ (- new-angle old-angle) network-update-frames)]
            (s/set-rotation! reflection
                             (+ old-angle (* m off)))))

        (<! (e/next-frame))
        (let [update? (zero? (mod fnum network-update-frames))]
          (recur (inc fnum)
                 (+
                  (cond
                    (left?) -0.05
                    (right?) 0.05
                    :default 0.00)
                  angle)
                 (if update? (get-in @game-state [:reflection :old :angle]) old-angle)
                 (if update? (get-in @game-state [:reflection :new :angle]) new-angle)))))))
