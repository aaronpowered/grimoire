(ns holy-grail.core
  (:require 
    [cljs.reader :as reader]
    [potpuri.core :refer [map-of]]
    [rum.core :as rum]
    [citrus.core :as citrus]
    [chronoid.core :as c]
    [taoensso.sente :as sente]
    [mantra.core :as m]))

(defn console! [& s] (js/console.log (apply str s)))

(def nick-collection ["savage" "bobo" "aaron" "viri" "Anonimus" "Pajti" "ESCOBAR" "WINNIETHEPOOH" "EATYOU" "keksz" "Darius"])
(def cards {0 {:title "Stab"}
            1 {:title "Slash"}
            2 {:title "Kick"}
            3 {:title "Flee"}
            4 {:title "Backflip"}
            5 {:title "Stun"}})

(def client-id (str (rand-nth nick-collection) (rand-nth ["" 0 1 2 3 4 5 6 7 8 9 007 113 227 366 420 565 666 768 810 930])))

;//////\\\\\\\\ CONTROLLERS

(defmulti game (fn [event] event))

(defmethod game :init []
  {:local-storage
   {:method :get
    :key :game
    :on-read :init-ready}})

(defmethod game :init-ready [_ [state]]
  (if-not (nil? state)
    (map-of state)
    {:state (hash-map :x 0 :y 0 
             :nick client-id
             :uid client-id
             :direction :up
             :role (rand-nth ["tradesman" "priest" "barbarian"])
             :environment nil
             :chat nil
             :hand [0 1 2 3 4 5])}))

(defmethod game :update [_ new-state state]
  (let [state (merge state (first new-state))
        local-storage {:method :set :data state :key :game}]
    (map-of state local-storage)))

(defmethod game :move-up [_ _ state]
  (let [state (if (= (:direction state) :up)
                (update state :y dec)
                (assoc (update state :y dec) :direction :up))
        local-storage {:method :set :data state :key :game}]
    (map-of state local-storage)))

(defmethod game :move-down [_ _ state]
  (let [state (if (= (:direction state) :down)
                (update state :y inc)
                (assoc (update state :y inc) :direction :down))
        local-storage {:method :set :data state :key :game}]
    (map-of state local-storage)))

(defmethod game :move-right [_ _ state]
  (let [state (if (= (:direction state) :right)
                (update state :x inc)
                (assoc (update state :x inc) :direction :right))
        local-storage {:method :set :data state :key :game}]
    (map-of state local-storage)))

(defmethod game :move-left [_ _ state]
  (let [state (if (= (:direction state) :left)
                (update state :x dec)
                (assoc (update state :x dec) :direction :left))
        local-storage {:method :set :data state :key :game}]
    (map-of state local-storage)))



(defmulti party (fn [event] event))

(defmethod party :init []
  {:local-storage
   {:method :get
    :key :party
    :on-read :init-ready}})

(defmethod party :init-ready [_ [state]]
  (if-not (nil? state)
    (map-of state)
    {:state {}}))

(defmethod party :update [_ new-state state]
  (let [state (first new-state)
        local-storage {:method :set :data state :key :party}]
    (map-of state local-storage)))



(defmulti engine (fn [event] event))

(defmethod engine :init []
  {:local-storage
   {:method :get
    :key :engine
    :on-read :init-ready}})

(defmethod engine :init-ready [_ [state]]
  (if-not (nil? state)
    (map-of state)
    {:state {:width 1000 :height 1000
             :x 25 :y 25
             :animation-time 0.7
             :animation-easing "ease"}}))

(defmethod engine :edit [_ new-state state]
  (let [state (merge state (first new-state))
        local-storage {:method :set :data state :key :engine}]
    (map-of state local-storage)))



;//////\\\\\\\\ SYSTEM

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/ws/network" {:type :auto :client-id client-id})]
    (def chsk       chsk)
    (def ch-chsk    ch-recv)
    (def chsk-send! send-fn)
    (def chsk-state state))

(defn cloud-storage [reconciler controller-name effect]
  (let [{:keys [method data key on-read]} effect]
    (case method
      :set (chsk-send! [:data/save (map-of key data)])
      :get (chsk-send! [:data/load key] 1000 (fn [data] (citrus/dispatch! reconciler controller-name on-read data)))
      nil)))

(defn local-storage [reconciler controller-name effect]
  (let [{:keys [method data key on-read]} effect]
    (case method
      :set (js/localStorage.setItem (name key) data)
      :get (->> (js/localStorage.getItem (name key))
                (cljs.reader/read-string)
                (citrus/dispatch! reconciler controller-name on-read))
      nil)))

(defonce reconciler
  (citrus/reconciler
    {:state (atom {})
     :controllers (map-of game party engine)
     :effect-handlers (map-of cloud-storage local-storage)}))

(defonce init-ctrl (citrus/broadcast-sync! reconciler :init))


(defmulti event-msg-handler :id)
(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event]}] (console! "Unhandled event: " event))
(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (console! "First opened connection.")))
(defmethod event-msg-handler :chsk/ping
  [{:as ev-msg :keys [?data]}]
  (console! "Server ping."))
(defmethod event-msg-handler :chsk/ws-ping
  [{:as ev-msg :keys [?data uid]}] 
  (let [[?uid ?csrf-token ?handshake-data] ?data] 
    (console! "Websocket ping: " ?uid)))

(def router_ (atom nil))
(defn stop-router! [] (when-let [stop-f @router_] (do (stop-f) (console! "Router stopped."))))
(defn start-router! []
  (do
    (when @router_ (stop-router!)) 
    (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler))
    (console! "Router started.")))

(start-router!)



(defn action [id opt]
  (case id
    :move (chsk-send! [:game/action {:id :move :opt opt}])
    :chat (chsk-send! [:game/action {:id :chat :opt opt}])
    nil))

;//////////\\\\\\\\\ UI

(rum/defc Party < rum/static [r rx ry party game-chat tile-width tile-height animation-time animation-easing]
  [:div.party 
   (when (keys party)
     (map-indexed 
     (fn [index [uid state]]
       (let [{:keys [nick uid role direction x y]} state
             x (- x rx)
             y (- y ry)]
       [:div.person {:key index
                     :style 
                 {:position "absolute"
                  :left (str (* (+ x 12) tile-width)"px")
                  :top (str (* (+ y 12) tile-height)"px")
                  :height (str (/ tile-height 2.0) "px")
                  :width (str tile-width "px")
                  :zIndex (+ y 101)
                  :transform "rotateX(-90deg)"
                  :transform-style "preserve-3d"
                  :transition (str "all "animation-time"s "animation-easing)
                  :transform-origin "center center"
                  :text-align "center"}}
        [:div {:style 
               {:position "absolute"
                :top (str "-" (* tile-height 2)"px")
                :left (str "-" (/ tile-width 4.0)"px")
                :width (str (/ tile-width 2.0)"px")
                :text-align "left"
                :font-size "11px"
                }}
         (map
           (fn [m]
             [:div.fading-message (:content m)])
           (filterv (fn [m] (= (:uid m) uid))
                    game-chat))]
        
        [:div {:style 
          {:position "absolute"
           :top (str "-"(* tile-height 2)"px")
           :left (str "-"(/ tile-width 4.0)"px")
           :width (str tile-width "px")
           :text-align "center"}} nick]
   [:img {:style {:width "100%"
                  :position "absolute"
                  :bottom 0 :left 0}
          :src (str "/css/" role "/" (apply str (rest (str direction))) ".png")}]
        ])) 
     party))
   ])

(rum/defc Cube < rum/static [r tile-width tile-height x y z color]
  (let 
    [style   
     {:boxShadow "inset 0 0 0 .25em hsla(0,0%,0%,.1)"
      :transformStyle "preserve-3d"
      :transition ".25s"
      :position "absolute"
      :width (str tile-width"px")
      :height (str tile-height"px")
      }]
    [:.cube 
     {:style 
      {:position "absolute" 
       :zIndex (+ 100 y 1)
       :left (str (* (+ x 5) tile-width)"px")
       :top (str (* (+ y 5) tile-height)"px")}}
     [:.side 
      {:style;back
       (merge style 
         {:backgroundColor "#d44"
          :transform (str "rotateY(90deg) translateZ(-"tile-width"px)")
          :transformOrigin "100% 0"})}]
     [:.side 
      {:style;left
       (merge style 
         {:backgroundColor "#e55"
          :transform (str "rotateX(-90deg) translateZ(-"tile-height"px)")
          :transformOrigin "100% 100%"})}]
     [:.side;top 
      {:style 
       (merge style 
         {:backgroundColor "#f66"
          :zIndex 10
          :transform (str "rotateZ(0deg) translateZ("tile-height"px)")})}]
     [:.side 
      {:style;front
       (merge style 
         {:backgroundColor "#e55"
          :transform "rotateX(-90deg) translateY(0px)"
          :zIndex 10
          :transformOrigin "100% 100%"})}]
     [:.side 
      {:style;right
       (merge style 
         {:backgroundColor "#d44"
          :transform "rotateY(90deg) translateX(0px)"
          :transformOrigin "100% 0"})}]]))




(rum/defc Image < rum/static [path r [rotateX rotateY rotateZ] width zindex [transX transY transZ]
                              tile-width tile-height x y z color
                              animation-time animation-easing]
  (let 
    [style   
     {:boxShadow "inset 0 0 0 .25em hsla(0,0%,0%,.1)"
      :transformStyle "preserve-3d"
      :transition ".25s"
      :position "absolute"
      :width (str tile-width"px")
      :height (str tile-height"px")
      }]
    [:.cube 
     {:style 
      {:position "absolute" 
      :transition (str "all "animation-time"s "animation-easing)
       :zIndex (+ zindex y)
       :transform-origin "top"
       :transform (str "rotateX("rotateX"deg) rotateY("rotateY"deg) rotateZ("rotateZ"deg) 
                      translateX("transX"px)
                      translateY("transY"px)
                      translateZ("transZ"px)
                                        ")
       :left (str (* (+ x 6) tile-width)"px")
       :top (str (* (+ y 6) tile-height)"px")
       }}
     [:.side 
      {:style;back
       (merge style 
         {:background (str "url('""')")
          :transform (str "rotateY(90deg) translateZ(-"tile-width"px)")
          :transformOrigin "100% 0"})}]
     
   [:img {:style {:width (str (* width tile-width) "px")}
          :src (str "/css/inn/" (name path) ".png")}]
     ]))
 

(rum/defc Tiles < rum/static [r rx ry environment party game-chat tile-width tile-height animation-time animation-easing]
  [:div.tiles {:style 
               {:position "relative"
                :width "100%"
                :height "100%"
                :display "flex"
                :flex-direction "row"
                :flex-wrap "wrap"}}
   (map
     (fn [[coord m]]
       (let [[x y z] coord
             {:keys [id color]} m
             x (- x rx)
             y (- y ry)
             z z
             ]
       (case id
         :floor (Image :floor r [0 0 0] 6 81 [0 0 0] tile-width tile-height x y z color animation-time animation-easing)
         :window (Image :window r [-90 0 0] 6 81 [0 -280 0] tile-width tile-height x y z color animation-time animation-easing)
         :out (Image :out r [-90 0 0] 6 101 [0 -280 0] tile-width tile-height x y z color animation-time animation-easing)
         :curtain (Image :curtain r [-90 0 0] 6 81 [0 -280 30] tile-width tile-height x y z color animation-time animation-easing)
         :window2 (Image :window r [0 90 -90] 6 81 [120 -280 -120] tile-width tile-height x y z color animation-time animation-easing)
         :tapestry (Image :tapestry r [0 90 -90] 3 81 [-60 -200 -20] tile-width tile-height x y z color animation-time animation-easing)
         :cube (Cube r tile-width tile-height x y z color)
         :woodenbox (Cube r tile-width tile-height x y z color)
         :stonebox (Cube r tile-width tile-height x y z color)
         :stonechest (Cube r tile-width tile-height x y z color)
         )
       ))
     environment)
   (Party r rx ry party game-chat tile-width tile-height animation-time animation-easing)
   ])

(defn obj->clj
  [obj]
  (-> (fn [result key]
        (let [v (aget obj key)]
          (if (= "function" (goog/typeOf v))
            result
            (assoc result key v))))
      (reduce {} (.getKeys goog/object obj))))

(rum/defc Character < rum/static [{:keys [nickname role direction
                                          z-index left bottom height width animation-time animation-easing messages
                                          mtop mleft mwidth
                                          ctop cleft cwidth]}]
[:div.centrum {:style 
                 {:position "absolute"
                  :zIndex z-index 
                  :left (str left "px")
                  :bottom (str bottom"px")
                  :height (str height"px")
                  :width (str width"px")
                  :transition (str "all " animation-time"s "animation-easing)
                  :transform-style "preserve-3d"
                  :transform-origin "bottom"}}
   [:div {:style 
          {:position "absolute"
           :top (str "-" mtop "px")
           :left (str "-" mleft "px")
           :width (str mwidth"px")
           :text-align "left"
           :font-size "11px"
           }}
    (map
      (fn [m]
        [:div.fading-message (:content m)]) messages)]
   [:div {:style 
          {:position "absolute"
           :top (str "-" ctop "px")
           :left (str "-" cleft "px")
           :width (str cwidth"px")
           :text-align "center"}} nickname]
   [:img {:style {:width "100%"
                  :position "absolute"
                  :bottom 0
                      :box-shadow "0px 0px 30px rgba(255,255,255,1)"
    :background "rgba(255,255,255,0.5)"
    :border-top-left-radius "40px"
    :border-top-right-radius "40px"
                  }
          :src (str "/css/" role "/"(apply str (rest (str direction))) ".png")}]
    ])

(rum/defc Environment < rum/reactive [r]
  (let [engine-width (rum/react (citrus/subscription r [:engine :width]))
        engine-x (rum/react (citrus/subscription r [:engine :x]))
        engine-height (rum/react (citrus/subscription r [:engine :height]))
        engine-y (rum/react (citrus/subscription r [:engine :y]))
        tile-width (double (/ engine-width engine-x))
        tile-height (double (/ engine-height engine-y))
        environment (rum/react (citrus/subscription r [:game :environment]))
        game-chat (rum/react (citrus/subscription r [:game :chat]))
        party (rum/react (citrus/subscription r [:party]))
        animation-time (rum/react (citrus/subscription r [:engine :animation-time]))
        animation-easing (rum/react (citrus/subscription r [:engine :animation-easing]))
        rx (- (rum/react (citrus/subscription r [:game :x])) 0)
        ry (- (rum/react (citrus/subscription r [:game :y])) 0)
        right (* rx tile-width)
        bottom (* ry tile-height)
        click-coordinates 
        (fn [event]
          (let [emap (obj->clj event)
                pos-x (get emap "clientX");event.offsetX?(event.offsetX):event.pageX-document.getElementById("env").offsetLeft;
	            pos-y (get emap "clientY");event.offsetY?(event.offsetY):event.pageY-document.getElementById("env").offsetTop;
                p-x (get emap "pageX");event.offsetX?(event.offsetX):event.pageX-document.getElementById("env").offsetLeft;
	            p-y (get emap "pageY");event.offsetY?(event.offsetY):event.pageY-document.getElementById("env").offsetTop;
                ]
            ))
        initial-style 
        {:position "absolute"
         :transition (str "all "animation-time"s "animation-easing)
         :width "100%" :height "100%"
         :backgroundSize (str tile-width"px "tile-height"px")}
        style ;(assoc 
                initial-style
                     ;:right (str right "px")
                     ;:bottom (str bottom "px")
        ;             )
        ]

[:div.perspective 
   {:style 
    {:width (str engine-width"px")
     :height (str engine-height"px")
     :transform (str "perspective("engine-height"px) rotateX(45deg)")
     :transform-style "preserve-3d"
     :transition "1s"}} 
    [:div#env.environment {:style style :on-click click-coordinates}
     (Tiles r rx ry environment party game-chat tile-width tile-height animation-time animation-easing)
     
   (Character 
  {:nickname (rum/react (citrus/subscription r [:game :nick]))
   :role (rum/react (citrus/subscription r [:game :role]))
   :direction (rum/react (citrus/subscription r [:game :direction]))
   :z-index (+ 100 (rum/react (citrus/subscription r [:game :y])))
   :left (/ (- engine-width tile-width) 2.0)
   :bottom (+ (/ (- engine-height tile-height) 2.0)
              (/ tile-height 4.0))
   :height (* 2 tile-height) 
   :width tile-width 
   :animation-time animation-time  
   :animation-easing animation-easing 
   :mtop tile-height 
   :mleft (/ tile-width 4.0) 
   :mwidth tile-width 
   :messages (filterv (fn [m] (= (:uid m) (rum/react (citrus/subscription r [:game :uid]))))
              (rum/react (citrus/subscription r [:game :chat])))
   :ctop (/ tile-height 2.0) 
   :cleft (/ tile-width 4.0) 
   :cwidth tile-width})

     ]]))
 

(rum/defc OnlinePlayers < rum/static [r party]
  [:div
   [:h5 "Online Paraszt: "(inc (count party))] 
   (map-indexed 
     (fn [index [k member]]
       [:div {:key index
              :style {:border "1px solid #ddd"
                      :padding "5px"
                      :margin "5px"}}
        [:span (:nick member) 
         " x:"(:x member) 
         " y:"(:y member)]])
    party)])

(rum/defc input < rum/reactive [r major minor function]
  [:input {:value (rum/react (citrus/subscription r [major minor]))
           :on-change #(citrus/dispatch! r major function {minor (.. % -target -value)})}])

(rum/defc Panel < rum/reactive [r]
   [:div {:style 
          {:position "absolute"
           :top 10
           :right 10
           :width "200px"
           :z-index 4000
           :background "cornsilk"
           :border "2px solid white"
           :padding "17px"
           :border-radius "17px"}}
    [:h4 (str (rum/react (citrus/subscription r [:game :nick])))]
    [:span (str 
             " x:" (rum/react (citrus/subscription r [:game :x]))
             " y:" (rum/react (citrus/subscription r [:game :y]))
                )]
    [:br]
    [:input {:type "text" :name "form_x" :size 4}]
    [:input {:type "text" :name "form_y" :size 4}]
    ;(input r :game :nick :update)
    (input r :game :role :update)
    ;[:span (str (rum/react (citrus/subscription r [:game])))]
    [:h5 "Game engine:"]
    (input r :engine :width :edit)
    (input r :engine :height :edit)
    (input r :engine :x :edit)
    (input r :engine :y :edit)
    (input r :engine :animation-time :edit)
    (input r :engine :animation-easing :edit)
    (OnlinePlayers r (rum/react (citrus/subscription r [:party])))
    
    [:input {:id "chat-message"
             :placeholder "Chat!"
             :on-key-down (fn [e] (if (= (.-key e) "Enter")
                                    (do
                                      (action :chat (.-value (js/document.getElementById "chat-message")))
                                      (set! (.-value (js/document.getElementById "chat-message")) ""))
                                    (do)))}]
    
    ])

(rum/defc Cards < rum/reactive [r]
  (let [hand (rum/react (citrus/subscription r [:game :hand]))]
    [:div.cards
     {:style {:position "absolute"
              :bottom "10px"}}
     (map-indexed 
       (fn [index card-id]
         (let [card (get cards card-id)]
           [:div.card 
            {:key index}
            (:title card)]))
       hand)]))

(rum/defc World < rum/static [r]
  [:div.world 
[:input {:type "radio", :id "left", :name "rotate"}]
[:label {:for "left"} "Left"]
[:input {:type "radio", :id "reset", :name "rotate"}]
[:label {:for "reset"} "Reset"]
[:input {:type "radio", :id "right", :name "rotate"}]
[:label {:for "right"} "Right"]
[:input {:type "radio", :id "up", :name "rotate"}]
[:label {:for "up"} "Up"]
[:input {:type "radio", :id "down", :name "rotate"}]
[:label {:for "down"} "Down"]

[:input {:type "radio", :id "zoom", :name "rotate"}]
[:label {:for "zoom"} "Zoom"]
[:input {:type "radio", :id "far", :name "rotate"}]
[:label {:for "far"} "Far"]
   
   (Panel r)
   (Environment r)
   (Cards r)
   ])


(rum/mount (World reconciler)
           (. js/document (getElementById "container")))




(def clock (c/clock)) (c/start! clock)

(defn blop-blop [] 
  (let [sine (m/osc :type :sine)
        steps-delay (rand-nth [150 160 170 180 190 200])]
    (m/play-note sine {:pitch 220 :duration 250})
    (c/set-timeout! clock #(m/play-note sine {:pitch 220 :duration 250}) steps-delay)))

(defn tada []
  (m/play-chord 
    (m/osc :type :sine)
    [{:pitch "D6" :duration :crotchet-quintuplet}]))

(.addEventListener
  js/document
  "keydown" (fn [event]
              (let [k (.-key event)]
              (cond
                (contains? #{"ArrowRight" \d} k) (action :move :right)
                (contains? #{"ArrowLeft" \a} k) (action :move :left)
                (contains? #{"ArrowUp" \w} k) (action :move :up)
                (contains? #{"ArrowDown" \s} k) (action :move :down)
                :else (js/console.log (str "Unhandled key event: "k))))))

(defmethod event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data uid]}] 
  (let [[?uid ?csrf-token ?handshake-data] ?data] 
    (console! "Joined server.")
    (chsk-send! [:player/state @(citrus/subscription reconciler [:game])])))

(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}] 
  (let [[event-key event-data] ?data]
    (case event-key
      :game/action 
      (do 
        (blop-blop)
        (citrus/dispatch! reconciler :game event-data))
      :player/state (citrus/dispatch! reconciler :game :update event-data)
      :party/state (citrus/dispatch! reconciler :party :update event-data)
      (console! event-key": "event-data))))



