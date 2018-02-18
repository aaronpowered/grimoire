(ns holy-grail.handler
  (:require
   [holy-grail.api :refer :all]
   [clojure.java.io :as io]
   [system.repl :refer [system]]

   [hara.io.scheduler :as hara]
   [hara.time :as t]

   [compojure.core :refer [defroutes GET POST]]
   [compojure.route :as route :refer [resources]]
   [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   [ring.util.response :refer [response content-type resource-response]]
  
   [taoensso.sente :as sente]))

(defmulti event-msg-handler :id)

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
     (event-msg-handler ev-msg))

(defmethod event-msg-handler :default ; Fallback
[{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
(let [session (:session ring-req)
      uid     (:uid     session)]
 (println (str "Unhandled event: " event))
 (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod event-msg-handler :chsk/ws-ping
  [ev-msg] (let [uid (:uid ev-msg)]
             ))
(defn all-connected-uids [] (:any @(:connected-uids (:sente system))))

(defn send! [uid path content] ((:chsk-send! (:sente system)) uid [path content]))
(defn send-all! [path content] (doseq [uid (all-connected-uids)] (send! uid path content)))

(def knowledge-state (atom {}))

(def social-state 
  (atom 
    []))

(def environment-state 
  (atom 
    {
     [-12 12 -1] {:id :floor :comp []}
     [-6 12 -1] {:id :floor :comp []}
     [0 12 -1] {:id :floor :comp []}
     [6 12 -1] {:id :floor :comp []}
     [12 12 -1] {:id :floor :comp []}
     [-12 6 -1] {:id :floor :comp []}
     [-6 6 -1] {:id :floor :comp []}
     [0 6 -1] {:id :floor :comp []}
     [6 6 -1] {:id :floor :comp []}
     [12 6 -1] {:id :floor :comp []}
     [-12 0 -1] {:id :floor :comp []}
     [-6 0 -1] {:id :floor :comp []}
     [0 0 -1] {:id :floor :comp []}
     [6 0 -1] {:id :floor :comp []}
     [12 0 -1] {:id :floor :comp []}
     [-12 -6 -1] {:id :floor :comp []}
     [-6 -6 -1] {:id :floor :comp []}
     [0 -6 -1] {:id :floor :comp []}
     [6 -6 -1] {:id :floor :comp []}
     [12 -6 -1] {:id :floor :comp []}
     [-12 -12 -1] {:id :floor :comp []}
     [-6 -12 -1] {:id :floor :comp []}
     [0 -12 -1] {:id :floor :comp []}
     [6 -12 -1] {:id :floor :comp []}
     [12 -12 -1] {:id :floor :comp []}
     [-6 -7 2] {:id :curtain :comp []}
     [0 -7 2] {:id :curtain :comp []}
     [6 -7 2] {:id :curtain :comp []}
     [12 -7 2] {:id :curtain :comp []}
     [-6 -6 0] {:id :window :comp []}
     [0 -6 0] {:id :window :comp []}
     [6 -6 0] {:id :window :comp []}
     [12 -6 0] {:id :window :comp []}
     [-6 12 0] {:id :out :comp []}
     [0 12 0] {:id :out :comp []}
     [6 12 0] {:id :out :comp []}
     [12 12 0] {:id :out :comp []}
     [-6 0 0] {:id :window2 :comp []}
     [-6 6 0] {:id :window2 :comp []}
     [-6 9 0] {:id :window2 :comp []}
     [-7 -6 0] {:id :tapestry :comp []}
     [-7 -3 0] {:id :tapestry :comp []}
     [-7 0 0] {:id :tapestry :comp []}
     [-7 3 0] {:id :tapestry :comp []}
     [-7 6 0] {:id :tapestry :comp []}
     [-7 9 0] {:id :tapestry :comp []}
     }))

(def game-state (atom {}))

(def future-state (atom {}))

(defmethod event-msg-handler :chsk/uidport-open
  [ev-msg] 
  (let [uid (:uid ev-msg)]
    (swap! game-state assoc uid true)
    (when-not (get @knowledge-state uid) 
      (swap! knowledge-state assoc uid {:id uid}))
    (println (str uid " joined the game."))
    ))

(defmethod event-msg-handler :chsk/uidport-close
  [ev-msg] 
  (let [uid (:uid ev-msg)]
    (swap! game-state dissoc uid)
    (println (str uid " left the game."))
    ))

(defmethod event-msg-handler :player/state
  [{:keys [uid ?data]}] 
  (do
    (swap! game-state assoc uid ?data)
    (println (str "Synced player state for " uid": " ?data))
    ))

(defmethod event-msg-handler :game/action
  [{:keys [uid ?data]}] 
    (when-not (= ?data (get @future-state uid))
      (do
        (println (str uid": " ?data))
        (swap! future-state assoc uid ?data)
        )))

(defn action-resolver [uid {:as act :keys [id opt]}]
  (let [uid-state (get @game-state uid)
        {:keys [x y]} uid-state]
  (case id
    :chat (swap! social-state conj {:id :chat :uid uid :content opt :date (t/now)})
    :move  (do (when-not (or
                         (contains? @environment-state 
                                  (case opt 
                                    :right [(inc x) y 0]
                                    :left [(dec x) y 0]
                                    :up [x (dec y) 0]
                                    :down [x (inc y) 0]))
                         (case opt
                           :right (< 18 (inc x))
                           :left (> -18 (dec x))
                           :up (> -18 (dec y))
                           :down (< 18 (inc y))
                           ))
                 (case opt
                   :right (swap! game-state update-in [uid :x] inc)
                   :left (swap! game-state update-in [uid :x] dec)
                   :up (swap! game-state update-in [uid :y] dec)
                   :down (swap! game-state update-in [uid :y] inc)
                   nil))
               (swap! game-state assoc-in [uid :direction] opt))
    (println (str "Action resolver catched an unknown act: " act)))))

(defn action-handler [t] 
  (let [actions @future-state]
    (when (keys actions)
      (do
        (doseq [action actions]
          (let [[uid act] action]
            (action-resolver uid act)
            (swap! future-state dissoc uid)
            ))
        (let [next-game-state @game-state]
          (doseq [player next-game-state]
            (let [[uid player-state] player]
              (send! uid :player/state (assoc player-state
                                              :environment @environment-state
                                              :chat (take-last 10 @social-state)))
              (send! uid :party/state (dissoc next-game-state uid))
              )))))))

(def scheduler 
  (hara/scheduler 
    {:game-actions 
     {:handler (fn [t]
                 (do
                   (action-handler t)
                   (Thread/sleep 200)
                   (action-handler t)
                   (Thread/sleep 200)
                   (action-handler t)
                   (Thread/sleep 200)
                   (action-handler t)
                   (Thread/sleep 200)
                   (action-handler t)
                   ))
      :schedule "/1 * * * * * *"}}
    {}
    {:clock {:type "clojure.lang.PersistentArrayMap"
             :timezone "CET"
             :interval 1
             :truncate :millisecond}}))





;(defmethod event-msg-handler :data/save
;  [{:as ev-msg :keys [uid ?data ?reply-fn]}]
;  (println (str uid": " ?data)))

;(defmethod event-msg-handler :data/load
;  [{:as ev-msg :keys [uid ?reply-fn]}]
;  (do (println (str "Reply to " uid))
;  (?reply-fn "COOL")))

(defn login [request]
  (let [{:keys [session params]} request
        new-session session]
      {:status 200 :session new-session}))

(defroutes routes
  (resources "/js" {:root "js"})
  (resources "/css" {:root "css"})
  (GET "/" [] (-> (resource-response "index.html")
                  (content-type "text/html")))

  (GET  "/ws/network"  req ((:ring-ajax-get-or-ws-handshake (:sente system)) req))
  (POST "/ws/network"  req ((:ring-ajax-post (:sente system)) req))
  (POST "/api/request" req (login req))

  (route/not-found "Not Found"))

(def middleware (-> site-defaults
                 (assoc-in [:security :anti-forgery] false)))

(def app
  (-> routes
      ring.middleware.keyword-params/wrap-keyword-params
      (wrap-defaults middleware)))
