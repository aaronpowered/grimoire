(ns rpg.handler
  (:require 
    [clojure.core.async :as async
                        :refer (<! <!! >! >!! put! chan go go-loop)]

    [compojure.core :refer [ANY GET PUT POST routes defroutes]]
    [compojure.route :refer [not-found resources]]
    [compojure.response :refer [render Renderable]]

    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.keyword-params :refer [wrap-keyword-params]]
    [ring.middleware.session :refer [wrap-session]]
    [ring.util.response :refer [redirect]]
    [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
    [ring.middleware.reload :refer [wrap-reload]]
;    [ring.middleware.transit :refer [wrap-transit]]
    [ring.middleware.gzip :refer [wrap-gzip]]
    [ring.middleware.logger :refer [wrap-with-logger]]
;    [ring.middleware.cookies :refer [wrap-cookies]]

    [aleph.http :as http]
    [manifold.stream :as s]
    [manifold.deferred :as d]
;    [manifold.bus :as bus]
;    [byte-streams :as bs]

	;;A/B split test based on multi-armed bandit
;    [taoensso.touchstone :as touchstone :refer (*ts-id*)]
;    [taoensso.touchstone.ring :refer [wrap-test-subject-id]]
	;;for websockets
    [taoensso.sente :as sente]
    [taoensso.sente.server-adapters.aleph :refer (get-sch-adapter)]
	;;Logging Library
    [taoensso.timbre :as timbre
      :refer [log  trace  debug  info  warn  error  fatal  report
              logf tracef debugf infof warnf errorf fatalf reportf
              spy get-env]]

    [monger.core :as mg]
    [monger.collection :as mc]
    [monger.operators :refer :all]
    [monger.query :as qu]
    [monger.conversion :refer [from-db-object]]

    [buddy.auth :refer [authenticated? throw-unauthorized]]
    [buddy.auth.backends.session :refer [session-backend]]
    [buddy.auth.middleware
            :refer [wrap-authentication wrap-authorization]]

    [postal.core :refer [send-message]]

    [rpg.world :as world]
    [rpg.middleware :refer [wrap-middleware]]

    [hiccup.page :refer [include-js include-css html5]]
    [clojure.java.io :as io]
    [config.core :refer [env]])

 (:gen-class)
 (:import org.bson.types.ObjectId
           org.bson.types.BSONTimestamp))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;          Email Handling                          ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def pass "")
(def server-email "@gmail.com")

(defn welcome-mail [name] (str 
      "<h1>Kedves " name "!</h1>
       <p>Regisztrációd megerősítéséhez kattints ide:</p>
       <p>Üdvözlettel:</p>
       <p>Király</p>"))

(def conn {:host "smtp.gmail.com"
           :ssl true
           :user server-email
           :pass pass})

(defn mail [email name] (send-message conn {
           :from server-email
           :to email
           :subject "Levél a királytól"
           :body [{
               :type "text/html; charset=utf-8"
               :content (welcome-mail name)}]}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Database Handlers                                ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [db (mg/get-db (mg/connect) "rpg")]

(def success {:body "Siker!"})

(defn delete-coll [collection]
  (mc/remove db collection)
  success)

(defn insert-into [collection a]
  (mc/insert db collection {:_id (ObjectId.) :name a})
  success)

(defn registration [email password profile]
  (let [oid (ObjectId.)]
    (do
      (mc/insert db "accounts" {
                  :_id oid
                  :password password
                  :email email
                  :profile profile
                  })
    ;  (mail email name)
    )(str oid)))

(defn accounts []
  (read-string (str (vec (map #(update % :_id str)
       (mc/find-maps db "accounts"))))))

(defn get-account [id]
  (let [oid (ObjectId. id)]
    (str (vec (map #(update % :_id str)
         (mc/find-maps db "accounts" {:_id oid}))))))

(defn chat! [uid date message]
  (let [oid (ObjectId.)]
    (do
      (mc/insert db "globalchat" {
                  :_id oid
                  :uid uid
                  :date date
                  :message message
                  })
    )(str oid)))

(defn chat-messages []
  (read-string (str (vec (map #(update % :_id str)
       (mc/find-maps db "globalchat"))))))

)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Request Handlers                                 ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn password? [email]
  (:password (first (filter #(= (:email %) email) (accounts)))))

(defn id? [email]
  (:_id (first (filter #(= (:email %) email) (accounts)))))

(defn profile? [id]
  (:profile (first (filter #(= (:_id %) id) (accounts)))))

(def profile (atom {}))

(def data (read-string (slurp (io/resource "public/edn/basics.edn"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;     A/B tests                                    ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;(touchstone/mab-select
;  {:conn-opts {} ; Optional, as per Carmine's `wcar` conn-opts
;   }
;  *ts-id* ; Dynamic test-subject-id (assigned by middleware)
;  :my-app/landing.buttons.sign-up ; Test id
;  :sign-up  "Sign-up!"   ; Named variation #1
;  :join     "Join!"      ; Named variation #2
;  :join-now "Join now!"  ; Named variation #3
;)

;(defn sign-up-button-1 []
;[:button {:on-click
;; On sign-up button click, etc.:
;(touchstone/mab-commit!
;  {} ; Same opts as given to `mab-select`
;  *ts-id* :my-app/landing.buttons.sign-up 1)}])


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Hiccup Components                                ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def power-cards [
	{:title "Mecénás"
	 :desc "Egy gazdag mecénás felfigyelt a találmányaidra,
                elég bátor vagy, hogy pénzt csinálj belőlük?"
	 :options ["Küldök galambot"
	           "Majd keres más is"
	           "A pokolba vele"]}
	{:title "Halászhajó"
	 :desc "Egy régi barátod jó áron ajánlja fel kihasználatlan
                halászhajóját, ez kiváló bevételi
                forráshoz juttathat egy időre."
	 :options ["Találkozóra hívom"
	           "Nem bízom benne"
	           "Nem emlékszem ki ez"]}
	{:title "Szivesség"
	 :desc "Tartoznak neked egyel a kapuőrök, emlékszel?"
	 :options ["Kérek tőlük valamit"
	           "Nem emlékszem"
	           "Hagyjuk inkább"]}
	{:title "Ismerkedés"
	 :desc "A helyiek bizalmatlanok veled szemben,
                 itt az idő, hogy bemutatkozz pár embernek."
	 :options ["Kik a helyiek?"
	           "Nem hagyhatok nyomot"
	           "Nem érdekel"]}
	{:title "Mecénás"
	 :desc "Egy ideje mintha azt tapasztalnád véletlenszerű
                gondolataid uralhatatlan módon valóra válnak."
	 :options ["Erősen koncentrálok"
	           "Gondolkozom ezen"
	           "Nem hiszem el"]}
])

(def loading-message
  [:div#app
      [:h3 "Table & Dice"]
      [:p "Üdvözöllek "
       [:b "a játék"]
       " igen csak kezdeti szakaszában." [:br]
       "Az alfa verzió megjelenésének időpontja: "
       [:b "2017 február 25."] [:br]
       "Jelenlegi verzió: "[:b "0.3"]]])

(def mount-game
 [:div.wrap
  [:div.inner.js-parallax]
  [:h2 "Easy Peasy Parallax"]
  [:h4 "Only 10 lines of JS"]])
;    (include-css "/css/loading-parallax.css")
;    (include-js "/externs/loading-parallax.js")

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css "/css/animate.css")
   (include-css "/css/hover.css")
   (include-css "/css/dices.css")
   (include-css "/css/market.css")
   (include-css "/css/custom-buttons.css")
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn landing-page [req]
  (html5
    (head)
    [:body.body-container
     loading-message
     [:p
     [:hr]
      [:h4 "Üdv a játékban " (:uid req) "!"]
      [:textarea#chat-msgs {:style "width: 100%; height: 150px;"
                            :readonly true}]
     [:hr]
      [:input#chat-input {:type :text :placeholder "Chat Message"}]
      [:button#chat-button {:type "button"} "Send!"]]
      [:p "(Press enter)"]
     [:hr]
     [:p
      [:button#btn1 {:type "button"} "chsk-send! (w/o reply)"]
      [:button#btn2 {:type "button"} "chsk-send! (with reply)"]]
     [:p
      [:button#btn3 {:type "button"} "Test rapid server pushes"]
      [:button#btn4 {:type "button"} "Toggle server broadcast loop"]]
     [:p
      [:button#btn5 {:type "button"} "Disconnect"]
      [:button#btn6 {:type "button"} "Reconnect"]]
     [:hr]
     [:textarea#output {:style "width: 100%; height: 150px;"}]
     [:hr]
    [:p
     [:input#login-uid {:type :text :placeholder "Username"}]
     [:input#login-password {:type :text :placeholder "Password"}]
     [:button#btn-login {:type "button"} "Registration!"]
     [:hr]]
     (include-js "/js/app.js")]))

(defn login-page [req]
  (html5
    [:body.body-container
     [:div.login-form
     [:a {:href "/"} "Vissza"]
     [:h3 "Bejelentkezés"]
    [:form {:method "post"}
    [:input {:type "text" :placeholder "Név:" :name "username"}]
    [:input {:type "password" :placeholder "Jelszó:" :name "password"}]
    [:input.button {:type "submit" :value "Belépés"}]]]
      [:p "Identity: " (str (:identity req))]
      [:p "Cookie: " (str (:value ((:cookies req) "JSESSIONID")))]
      [:p "Session: " (str (:value ((:cookies req) "ring-session")))]
      [:p "User Agent: " (str ((:headers req) "user-agent"))]
      [:p "Referer: " (str ((:headers req) "referer"))]
      [:p "Language: " (str ((:headers req) "accept-language"))]
      [:p "Cookies: " (str req)]
    ]))

(defn gameplay [id]
(let []
 (reset! profile (profile? id))
  (html5
    (head)
    [:body.body-container
     [:a {:href "/"} "Kilépés"]
     [:p (str id)]
     [:h1 "Üdv a játékban!"]
     (world/character-sheet profile (:skill data) (:profession data))
     (world/dice)
     (world/notes)
     (world/power "Hatalomkártyák" power-cards)
    (include-js "/externs/wowpanel.js")
    (include-js "/externs/dices.js")
    ])))

(def message403
  (html5
    [:div#app
      [:h3 "Engedély nélküli behatolás."]
      [:p "Először "
       [:a {:href "/login"} "jelentkezz be."]]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Controllers                                      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- signin [request]
  (if-not (authenticated? request)
      (throw-unauthorized)
      (render (gameplay (:identity (:session request))) request)))

(defn- login [request]
  (render (login-page request) request))

(defn- logout [request]
  (-> (redirect "/login") (assoc :session {})))

(defn- add-cookie [request]
  (-> (redirect "/login") (assoc :cookies {"secret"
      {:value "foobar", :secure true, :max-age 3600}})))

(defn- delete-cookie [request]
  (-> (redirect "/login") (assoc :cookies {})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;      Authentication      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn login-authenticate [request]
  (let [username (get-in request [:form-params "username"])
        password (get-in request [:form-params "password"])
        session (:session request)
        id (id? username)
        found-password (password? username)]
  (if (and found-password (= found-password password))
      (let [
        next-url (get-in request [:query-params :next] "/w0")
        updated-session (assoc session :identity id)]
        (-> (redirect next-url)
            (assoc :session updated-session)))
      (render message403 request))))


(defn unauthorized-handler [request metadata]
  (cond (authenticated? request)
    (-> (render message403 request)
        (assoc :status 403))
    :else (let [current-url (:uri request)]
      (render message403 request))))


(def auth-backend
  (session-backend {:unauthorized-handler unauthorized-handler}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;      Experimental        ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn current-time []
  (.format
    (java.text.SimpleDateFormat. "yyyy/MM/dd - HH:mm:ss")
      (new java.util.Date)))

(extend-protocol Renderable
  manifold.deferred.Deferred
  (render [d _] d))


(defn hello-world-handler
  [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello world!"})


(defn delayed-hello-core-async
  [req]
  (s/take!
    (s/->source
      (go
        (let [_ (<! (async/timeout 5000))]
          (hello-world-handler req))))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;      Sente Config        ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;(timbre/set-level! :trace) ; Uncomment for more logging
(reset! sente/debug-mode?_ true)


(let [packer :edn
      {:keys [ch-recv
              send-fn
              connected-uids
              ajax-post-fn
              ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! (get-sch-adapter) {:packer packer})]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv)
  (def chsk-send!                    send-fn)
  (def connected-uids                connected-uids) ;;This is an atom
  )


;; Watch connected users
(add-watch connected-uids :connected-uids
  (fn [_ _ old new]
    (when (not= old new)
      (infof "Connected uids change: %s" new)
	;;Notify clients
      (doseq [uid (:any @connected-uids)]
        (chsk-send! uid [:server/uids (:any @connected-uids)])))))


(defn login-handler [ring-req]
(let [{:keys [session params]} ring-req
      {:keys [user-id user-pass]} params
      id (id? user-id)
      found-password (password? user-id)]
  (if (and found-password (= found-password user-pass))
    (let [] 
    (debugf "Login request: %s" params)
    {:status 200 :session (assoc session
                                 :uid user-id
                                 :identity id)})
    (println "Hibás jelszó!"))))



(defn test-fast-server>user-pushes
  "Quickly pushes 100 events to all connected users.
  Note that this'll be fast+reliable even over Ajax!"
  []
  (doseq [uid (:any @connected-uids)]
    (doseq [i (range 100)]
      (chsk-send! uid [:fast-push/is-fast
                  (str "hello " uid " for " i "!!")]))))

;(comment (test-fast-server>user-pushes))


(defonce broadcast-enabled?_ (atom false))

(defn start-example-broadcaster! []
  (let [broadcast!
        (fn [i]
          (let [uids (:any @connected-uids)]
            (debugf "Broadcasting to %s uids" (count uids))
            (doseq [uid uids]
              (chsk-send! uid
                [:some/broadcast
                 {:message "Every 10 seconds"
                  :to-whom uid
                  :i i}
                ]))))]
    (go-loop [i 0]
      (<! (async/timeout 10000))
      (when @broadcast-enabled?_ (broadcast! i))
      (recur (inc i)))))

;;;; Sente event handlers

(defmulti -event-msg-handler :id)

(defn event-msg-handler [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (debugf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod -event-msg-handler :chsk/ws-ping
  [ev-msg] (print nil))

;;Chat
(defn push-back-chat-message [who date message]
  (doseq [uid (:any @connected-uids)]
      (chsk-send! uid [:chat/push-back
              (str "[" date "] " who ": " message)])))

(defmethod -event-msg-handler :chat/new-message
  [ev-msg] (let [uid (:uid ev-msg)
                 msg (:msg (:?data ev-msg))
                 ;date (:date (:?data ev-msg))
                 date (current-time)]
                   (chat! uid date msg)
                   (push-back-chat-message uid date msg)))

;;Tests
(defmethod -event-msg-handler :example/test-rapid-push
  [ev-msg] (test-fast-server>user-pushes))

(defmethod -event-msg-handler :example/toggle-broadcast
  [{:as ev-msg :keys [?reply-fn]}]
  (let [loop-enabled? (swap! broadcast-enabled?_ not)]
    (?reply-fn loop-enabled?)))

;;;; Sente event router (our `event-msg-handler` loop)

(defonce router_ (atom nil))
(defn stop-router!  [] (when-let [stop-fn @router_] (stop-fn)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-server-chsk-router!
      ch-chsk event-msg-handler)))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;         Routes           ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defroutes server-routes
  (GET "/" req (landing-page req))
  (GET "/new" [] (landing-page))
  (GET "/market" [] (landing-page))
  (GET "/info" [] (landing-page))

;;;;;;;;Experimental only
  (GET "/hello" [] hello-world-handler)
  (GET "/delayed_hello" [] delayed-hello-core-async)
;;;;;;;;;;;;;;
 
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req)) 
  (POST "/auth" req (login-handler                 req))  

  (GET "/login" [] login)
  (GET "/logout" [] logout)
  (POST "/login" [] login-authenticate)

  (GET "/add-cookie" [] add-cookie)
  (GET "/delete-cookie" [] delete-cookie)

  (POST "/registration" req 
           (let [data (get-in req [:params])]
           (registration (:email data)(:password data)(:profile data))
           ))

  (GET "/w0" [] signin)

  (GET "/accounts" [] (str (accounts)))
  (GET "/chat" [] (str (chat-messages)))
  (GET "/user/:id" [id] (get-account id))
  (GET "/password/:email" [email] (password? email))

  (resources "/")
  (not-found "<center><h1>You have lost.</h1></center>"))

(def app
  (-> server-routes
	;Split test
;     (wrap-test-subject-id)
	;Buddy:
     (wrap-authorization auth-backend)
     (wrap-authentication auth-backend)
	;Ring:
     (wrap-params)
     (wrap-session)
     (wrap-keyword-params)
     (wrap-defaults api-defaults)
;     (wrap-transit)
;     (wrap-cookies)
     (wrap-with-logger)
     (wrap-gzip)
     (wrap-reload)
  ))
