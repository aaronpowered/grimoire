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

(def client-id (str (rand-nth nick-collection) (rand-nth ["" 0 1 2 3 4 5 6 7 8 9 007 113 227 366 420 512 666 768 810 930])))

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
    {:state (hash-map :x 0 :y 0 :z 0 
             :nick client-id
             :uid client-id
             :direction :up
             :location {:id 0 :title "Dead Hare"}
             :role (rand-nth ["tradesman" "priest" "barbarian"])
             :select nil
             :environment nil
             :chat nil
             :hand [])}))

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
    {:state {:perspective 1
             :scape "dots"
             :rotateX 45 :rotateZ 0
             :width 1000 :height 1000
             :x 25 :y 25
             :animation-time 0.3
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
    :play (chsk-send! [:game/action {:id :play :opt {:index opt :card (get (vec @(citrus/subscription reconciler [:game :hand])) opt)}}])
    :move (chsk-send! [:game/action {:id :move :opt opt}])
    :chat (chsk-send! [:game/action {:id :chat :opt opt}])
    nil))

;//////////\\\\\\\\\ UI


(rum/defc Character < rum/static
  [{:keys [nickname role direction index 
           engine-height engine-perspective rotateX rotateZ
           z-index left bottom height width animation-time animation-easing messages
           mtop mleft mwidth
           ctop cleft cwidth]}]
[:div.person
 {:key index
  :style 
  {:-webkit-transform (str "perspective("(* engine-perspective engine-height)") rotateX(-90deg) rotateY("rotateZ"deg)")
   :position "absolute"
   :zIndex z-index 
   :left (str left "px")
   :bottom (str bottom"px")
   :height (str height"px")
   :width (str width"px")
   :transition (str "all " animation-time"s "animation-easing)
   :transform-style "preserve-3d"
   :transformOrigin "bottom"}}
 [:div 
  {:style 
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
 [:div 
  {:style 
   {:position "absolute"
    :bottom (str "-" ctop "px")
    :left (str "-" cleft "px")
    :width (str cwidth"px")
    :text-align "center"}} nickname]
 [:img 
  {:style 
   {:width "100%"
    :position "absolute"
    :bottom 0
    ;:box-shadow "0px 0px 30px rgba(255,255,255,1)"
    ;:background "rgba(255,255,255,0.5)"
    :border-top-left-radius "40px"
    :border-top-right-radius "40px"
    }
   :src (str "/css/" role "/"(apply str (rest (str direction))) ".png")}]
 ])

(rum/defc Party < rum/static 
  [{:keys [r rx ry party game-chat tile-width tile-height 
           engine-perspective rotateX rotateZ engine-height animation-time animation-easing]}]
  [:div.party 
   (when (keys party)
     (map-indexed 
     (fn [index [uid state]]
       (let [{:keys [nick uid role direction x y]} state
             x (- x rx)
             y (- y ry)]
       (Character 
  {:nickname nick
   :index index 
   :role role 
   :direction direction 
   :z-index (+ 100 y)
   :left (* (+ x 12) tile-width)
   :bottom (* (+ y 12) tile-height)
   :height (/ tile-height 2.0)
   :width tile-width 
   :engine-perspective engine-perspective
   :rotateX rotateX
   :rotateZ rotateZ
   :engine-height engine-height
   :animation-time animation-time  
   :animation-easing animation-easing 
   :mtop tile-height 
   :mleft (/ tile-width 4.0) 
   :mwidth tile-width 
   :messages (filterv (fn [m] (= (:uid m) uid)) game-chat)
   :ctop (/ tile-height 2.0) 
   :cleft (/ tile-width 4.0) 
   :cwidth tile-width})
         )) 
     party))
   ])

(rum/defc Image < rum/static 
[path r selected? [rotateX rotateY rotateZ] width height [transX transY transZ]
 tile-width tile-height coord x y z scape
 animation-time animation-easing]
  (let 
    [style   
     (if (not (and (= rotateX 0) (= rotateY 0) (= rotateZ 0)))
       {:position "absolute" 
      :transition (str "all "animation-time"s "animation-easing)
       :zIndex (+ 100 y)
       :transformOrigin "top"
       :WebkitTransform (str "rotateX("rotateX"deg) rotateY("rotateY"deg) rotateZ("rotateZ"deg) 
                      translateX("(* transX tile-width)"px)
                      translateY("(* transY tile-height)"px)
                      translateZ("(* (+ transZ z) tile-width)"px)
                                        ")
       :left (str (* x tile-width)"px")
       :top (str (* y tile-height)"px")}
       {:position "absolute" 
      :transition (str "all "animation-time"s "animation-easing)
       :zIndex (+ 100 y)
       :transformOrigin "top"
       :WebkitTransform (str "translateX("(+ (* transX tile-width) (* x tile-width))"px)
                              translateY("(+ (* transY tile-height) (* y tile-height))"px)
                              translateZ("(+ (* (+ transZ z) tile-width) (if selected? 10 0))"px)
                                        ")
        :left 0
        :top 0})
     select-trigger #(if selected?
                       (citrus/dispatch! r :game :update {:select nil})
                       (citrus/dispatch! r :game :update {:select coord}))
     ]
    [:.image
     {:style style}
     (case scape
    "dots"
     [:a {:on-click select-trigger}
     (when (< -2 z) 
       [:div {:style {:position "absolute" :left (str "calc("tile-width"px * "(dec width)")") :top 0
                      :width (str tile-width "px")
                      :height (str tile-height "px")
                      :background (if selected? "rgba(255,255,255,0.6)" "rgba(0,0,0,1)")}}])
     [:div {:style {:position "absolute" :top 0
                    :width (str (* width tile-width) "px")
                    :height (str (* height tile-height) "px")
                    :background (if selected? "rgba(0,0,0,0.6)" "rgba(0,0,0,0.3)") 
                    :border "1px solid black"}}
      [:center [:h3 (name path)]
       [:p (str "x:"x" y:"y" z:"z)]
       [:p (str width "x"height)]
     [:img {:style {:width (str tile-width "px")}
            :src (str "/css/inn/" (name path) ".png")}]
       ]
      ]]
    "mockup"
     [:a {:on-click select-trigger}
     [:div {:style {:width (str (* width tile-width) "px")
                    :height (str (* height tile-height) "px")
                    :background (if selected? "rgba(0,0,0,0.6)" "rgba(0,0,0,0.3)") :border "1px solid black"}}]]
     "montage"
     [:img {:style {:width (str (* width tile-width) "px")}
            :src (str "/css/inn/" (name path) ".png")}]
     )]))


(rum/defc Tiles < rum/static [{:keys [r rx ry rz environment selected scape party game-chat tile-width tile-height
                              engine-perspective rotateX rotateZ
                              engine-height animation-time animation-easing]
                               :as params}]
  [:div.tiles {:style 
               {:position "relative"
                :width "100%"
                :height "100%"
                :display "flex"
                :flex-direction "row"
                :flex-wrap "wrap"}}
   (map-indexed
     (fn [index [coord m]]
       (let [[x y z] coord
             {:keys [id rotate width height transition]} m
             relative-x (- x rx)
             relative-y (- y ry)
             relative-z (- z rz)
             selected? (if (= coord selected) true false)]
        (rum/with-key
          (Image id r selected? rotate width height transition tile-width tile-height 
                 coord
                 relative-x relative-y relative-z scape animation-time animation-easing)
          (str "coord"x y z))))
     (vec environment))
   (Party params)])

(defn obj->clj
  [obj]
  (-> (fn [result key]
        (let [v (aget obj key)]
          (if (= "function" (goog/typeOf v))
            result
            (assoc result key v))))
      (reduce {} (.getKeys goog/object obj))))


(rum/defc Environment < rum/reactive [r]
  (let [
        engine-perspective (rum/react (citrus/subscription r [:engine :perspective]))
        rotateX (rum/react (citrus/subscription r [:engine :rotateX]))
        rotateZ (rum/react (citrus/subscription r [:engine :rotateZ]))
        engine-width (rum/react (citrus/subscription r [:engine :width]))
        engine-x (rum/react (citrus/subscription r [:engine :x]))
        engine-height (rum/react (citrus/subscription r [:engine :height]))
        engine-y (rum/react (citrus/subscription r [:engine :y]))
        scape (rum/react (citrus/subscription r [:engine :scape]))
        tile-width (double (/ engine-width engine-x))
        tile-height (double (/ engine-height engine-y))
        environment (rum/react (citrus/subscription r [:game :environment]))
        game-chat (rum/react (citrus/subscription r [:game :chat]))
        selected (rum/react (citrus/subscription r [:game :select]))
        party (rum/react (citrus/subscription r [:party]))
        animation-time (rum/react (citrus/subscription r [:engine :animation-time]))
        animation-easing (rum/react (citrus/subscription r [:engine :animation-easing]))
        rx (- (rum/react (citrus/subscription r [:game :x])) 0)
        ry (- (rum/react (citrus/subscription r [:game :y])) 0)
        rz (- (rum/react (citrus/subscription r [:game :z])) 0)
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
        {:boxShadow 
         ;(case engine-view
         ;              :left "-20px 30px 50px -20px rgba(0,0,0,0.3)"
         ;              :right "20px 30px 50px -20px rgba(0,0,0,0.3)"
         ;              :down "0px 0px 10px -20px rgba(0,0,0,0.3)"
         ;              :far "0px 0px 10px -20px rgba(0,0,0,0.3)"
                       "0px 30px 50px -20px rgba(0,0,0,0.3)"
                       ;)
         :position "absolute"
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
     :margin-top (str "-" (double (/ engine-height 4))"px")
     :height (str engine-height"px")
     :transform-style "preserve-3d"
     :transition "1s"
     :-webkit-transform (str "perspective("(* engine-perspective engine-height)") rotateX("rotateX"deg) rotateZ("rotateZ"deg)")
     }} 
    [:div#env.environment {:style style :on-click click-coordinates}
     (Tiles (map-of r rx ry rz environment selected scape party game-chat tile-width tile-height
                    engine-perspective rotateX rotateZ
                    engine-height animation-time animation-easing))
     
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
   :engine-perspective engine-perspective
   :rotateX rotateX
   :rotateZ rotateZ
   :engine-height engine-height
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
   [:div.panel
    {:style 
     {:position "absolute"
      :top 10
      :right "-208px"
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
    (input r :game :role :update)
    [:div
     (input r :game :select :update)
      (str (get (rum/react (citrus/subscription r [:game :environment]))
                (rum/react (citrus/subscription r [:game :select]))))]
    [:h5 "Game engine:"]
    (map-indexed
      (fn [index kw] 
        (rum/with-key
          (apply input (concat [r :engine] [kw] [:edit]))
          index))
      (keys (rum/react (citrus/subscription r [:engine]))))
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
     {:style {:position "absolute" :bottom "0px"}}
     (map-indexed 
       (fn [index card]
           [:a.card {:on-click #() 
                     :key index}
            [:span index]
            [:h2 (:title card)]
            [:p (:role card)]
            ])
       hand)]))

(rum/defc ViewControl < rum/static [r]
  [:div.view-control 
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
   ])

(rum/defc World < rum/static [r]
  [:div.world 
   (ViewControl r)
   (Panel r)
   (Environment r)
   (Cards r)])

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

                (contains? #{"ArrowRight" \d} k)  (action :move :right)
                (contains? #{"ArrowLeft" \a} k)   (action :move :left)
                (contains? #{"ArrowUp" \w} k)     (action :move :up)
                (contains? #{"ArrowDown" \s} k)   (action :move :down)
                (contains? #{\0} k)                (action :play 0)
                (contains? #{\1} k)                (action :play 0)
                (contains? #{\2} k)                (action :play 0)
                (contains? #{\3} k)                (action :play 0)
                (contains? #{\4} k)                (action :play 0)
                (contains? #{\5} k)                (action :play 0)

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



