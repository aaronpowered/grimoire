(ns holy-grail.handler
  (:require
   [holy-grail.api :refer :all]
   [cheshire.core :refer :all]
   [clojure.java.io :as io]
   [system.repl :refer [system]]
   [hara.io.scheduler :as hara]
   [hara.time :as t]

   [compojure.core :refer [defroutes GET POST]]
   [compojure.route :as route :refer [resources]]
   [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   [ring.util.response :refer [response content-type resource-response]]
  
   [taoensso.sente :as sente]))

(def knowledge (parse-string (slurp "resources/data.json")))

(def destruction
  (into (sorted-map) 
        (mapv (fn [[k v]] [k (mapv second v)]) 
              (group-by first 
                        (map (fn [a] [(get-in a ["data" "target"]) 
                                      (get-in a ["data" "source"])]) 
                             (get-in knowledge ["elements" "edges"]))))))
(def construction
  (into (sorted-map) 
        (mapv (fn [[k v]] [k (mapv second v)]) 
              (group-by first 
                        (map (fn [a] [(get-in a ["data" "source"])
                                      (get-in a ["data" "target"])]) 
                             (get-in knowledge ["elements" "edges"]))))))


(defn drop-nth [n coll] (keep-indexed #(if (not= %1 n) %2) coll))

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
     [-12 12 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-12 6 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-12 0 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-12 -6 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-12 -12 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [18 12 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [18 6 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [18 0 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [18 -6 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [18 -12 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}

     [18 18 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [12 18 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [6 18 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [0 18 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-6 18 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-12 18 -1] {:id :dirt :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}

     [-6 12 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [0 12 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [6 12 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [12 12 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-6 6 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [0 6 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [6 6 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [12 6 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-6 0 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [0 0 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [6 0 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [12 0 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-6 -6 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [0 -6 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [6 -6 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [12 -6 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [-6 -12 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [0 -12 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [6 -12 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}
     [12 -12 -1] {:id :floor :comp [] :rotate [0 0 -90] :width 6 :height 6 :transition [-6 0 1]}

     [-6 -7 2] {:id :curtain :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 1]}
     [0 -7 2] {:id :curtain :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 1]}
     [6 -7 2] {:id :curtain :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 1]}
     [12 -7 2] {:id :curtain :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 1]}
     [-6 -6 0] {:id :window :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 0]}
     [0 -6 0] {:id :window :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 0]}
     [6 -6 0] {:id :window :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 0]}
     [12 -6 0] {:id :window :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 0]}
     [-6 12 0] {:id :out :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 0]}
     [0 12 0] {:id :out :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 0]}
     [6 12 0] {:id :out :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 0]}
     [12 12 0] {:id :out :comp [] :rotate [90 0 0] :width 6 :height 6 :transition [0 0 0]}
     [-6 0 0] {:id :window :comp [] :rotate [90 -90 0] :width 6 :height 6 :transition [0 0 0]}
     [-6 6 0] {:id :window :comp [] :rotate [90 -90 0] :width 6 :height 6 :transition [0 0 0]}
     [-6 9 0] {:id :window :comp [] :rotate [90 -90 0] :width 6 :height 6 :transition [0 0 0]}
     [-7 -6 0] {:id :tapestry :comp [] :rotate [90 -90 0] :width 3 :height 3 :transition [0 0 0]}
     [-7 -3 0] {:id :tapestry :comp [] :rotate [90 -90 0] :width 3 :height 3 :transition [0 0 0]}
     [-7 0 0] {:id :tapestry :comp [] :rotate [90 -90 0] :width 3 :height 3 :transition [0 0 0]}
     [-7 3 0] {:id :tapestry :comp [] :rotate [90 -90 0] :width 3 :height 3 :transition [0 0 0]}
     [-7 6 0] {:id :tapestry :comp [] :rotate [90 -90 0] :width 3 :height 3 :transition [0 0 0]}
     [-7 9 0] {:id :tapestry :comp [] :rotate [90 -90 0] :width 3 :height 3 :transition [0 0 0]}
     }))

(def cards-state 
  (atom 
    {0 {:title "Punch" :role "barbarian" :chance 0.85 :destruct [""]}
     1 {:title "Rage" :role "barbarian" :chance 0.7 :destruct []}
     2 {:title "Warcry" :role "barbarian" :chance 0.8 :construct []}
     3 {:title "Shot" :role "tradesman" :chance 0.3 :destruct []}
     4 {:title "Bribe" :role "tradesman" :chance 0.2 :construct []}
     5 {:title "Swindle" :role "tradesman" :chance 0.6 :destruct []}
     6 {:title "Pray" :role "priest" :chance 0.9 :construct []}
     7 {:title "Chant" :role "priest" :chance 0.5 :destruct [] :construct []}
     8 {:title "Miracle" :role "priest" :chance 0.1 :construct []}
     }))

(def game-state (atom {}))

(def game-time (atom 0))

(def future-state (atom {}))

(def report-state (atom []))

(defn report! [data] (swap! report-state conj {:time @game-time :data data}))

(defmethod event-msg-handler :chsk/uidport-open
  [ev-msg] 
  (let [uid (:uid ev-msg)]
    (swap! game-state assoc uid true)
    (when-not (get @knowledge-state uid) 
      (swap! knowledge-state assoc uid {:id uid}))
    (report! {:uid uid :id :uidport-open})))

(defmethod event-msg-handler :chsk/uidport-close
  [ev-msg] 
  (let [uid (:uid ev-msg)]
    (swap! game-state dissoc uid)
    (report! {:uid uid :id :uidport-close})))

(defmethod event-msg-handler :player/state
  [{:keys [uid ?data]}] 
  (swap! game-state assoc uid ?data))

(defmethod event-msg-handler :game/action
  [{:keys [uid ?data]}] 
    (when-not (= ?data (get @future-state uid))
      (do
        (report! {:uid uid :id :action :data ?data})
        (swap! future-state assoc uid ?data)
        )))

(defn action-resolver [uid {:as act :keys [id opt]}]
  (let [uid-state (get @game-state uid)
        {:keys [x y z]} uid-state]
  (case id
    :play (swap! game-state update-in [uid :hand] (fn [hand] (vec (drop-nth (:index opt) hand))))
    :chat (swap! social-state conj {:id :chat :uid uid :content opt :date (t/now)})
    :move  (do (when-not (or
                         (contains? @environment-state 
                                  (case opt 
                                    :right [(inc x) y z]
                                    :left [(dec x) y z]
                                    :up [x (dec y) z]
                                    :down [x (inc y) z]))
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

(defn draw-resolver [player-state]
  (let [hand (:hand player-state)
        hand-count (count hand)
        min-hand-size 3
        to-draw (- min-hand-size hand-count)]
    (if (< hand-count min-hand-size)
      (vec
        (concat
          hand 
          (vec (map 
                 (fn [a] (rand-nth (vec (keep (fn [[id card]] (if (= (:role card) (:role player-state)) card nil)) (vec @cards-state)))))
                 (range to-draw)))))
      hand)))

(defn action-handler [t] 
  (do
    (swap! game-time inc)
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
                (println (str player-state))
                (send! uid :player/state 
                       (assoc player-state
                              :environment 
                              (let [{:keys [x y]} player-state
                                    seen-state 
                                    (into (hash-map) 
                                          (keep (fn [[k v]] 
                                                  (when (and 
                                                          (<= (- x (dec (:width v)))
                                                              (first k) 
                                                              (+ x 24)) 
                                                          (<= (- y (dec (:height v))) 
                                                              (second k) 
                                                              (+ y 24))) 
                                                    [k v])) 
                                                @environment-state))]
                                seen-state)
                              :hand (draw-resolver player-state) 
                              :chat (take-last 10 @social-state)))
                (send! uid :party/state (dissoc next-game-state uid))))))))))

(defn time-handler [t]
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
                   (Thread/sleep 200)
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

(defn report-handler [t]

(println (str "


    |          ,` \r\n    |\\        // \r\n    |\\\\      //(\r\n    | \\\\    //  '\r\n    '  \\\\  //  /\r\n     \\  )\\((  /\r\n      )`    `/\r\n     /   __  \\\r\n    /   (_O)  \\\r\n   /           \\________\r\n_.(_)           )      /\r\n   (__,        /      / \r\n    \\         /      /  \r\n     \\_______/      ( \r\n      \\    /         \\\r\n       \\  /           \\\r\n        \\/             \\\r\n        /               )    \r\n       /               /   \r\n      / _     o__     /      \r\n     ( (_)   //\\,\\   (   \r\n      \\    ``~---~`   ) \r\n\\      \\             /\r\n \\      \\           /   \r\n  \\      \\         /    \r\n   \\____/ \\_______/ 
"))

  (println "_______________________")
  (println (str "Game time: " @game-time))
  (println (str "Real time: " (let [{:keys [second minute hour day month year timezone]} (dissoc t :type :millisecond)]
                                (str year"/"month"/"day " " hour":"minute":"second))))
  (println (str "Report:")) 
  (doseq [report (map (fn [{:keys [time data] :as report}]
                                             (let [{:keys [id uid data]} data]
                                             (case id
                                               :action (let [{:keys [id opt]} data]
                                                         (case id
                                                           :move (str "["time" "opt" "uid"]")
                                                           :play (str "["time" played "(get-in opt [:card :title])" "uid"]")
                                                           (str data)))
                                               (apply str (map str data)))
                                               )) @report-state)]
    (println report))
  (reset! report-state [])
  (println (str "State: " (apply str (map (fn [{:keys [x y nick role]}] (str "["nick" "role" ("x", "y")]")) 
               (map (fn [[id player]] (dissoc player :environment :chat :uid :hand :location :direction)) @game-state)))))
  )

(def scheduler 
  (hara/scheduler 
    {
     :game-actions {:handler time-handler :schedule "/1 * * * * * *"}
     :game-report {:handler report-handler :schedule "/3 * * * * * *"}
     }
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
