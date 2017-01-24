(ns peak.handler
  (:require [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]
            [compojure.core :refer [routes GET POST]]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer
                               [site-defaults wrap-defaults]]
            [ring.middleware.resource :refer (wrap-resource)]
            [buddy.auth.middleware
                 :refer [wrap-authentication wrap-authorization]]

            [postal.core :refer [send-message]]
            [clojure.java.io :as io]
            [clj-reload :refer (wrap-reload)]
            [peak.ws :as ws]
            [peak.db :as db]
            [peak.auth :as auth]
            [peak.html :as html]
            ))


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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;      Experimental        ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn current-time []
  (.format
    (java.text.SimpleDateFormat. "yyyy/MM/dd - HH:mm:ss")
      (new java.util.Date)))

;(extend-protocol Renderable
;  manifold.deferred.Deferred
;  (render [d _] d))


(defn hello-world-handler
  [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello world!"})


;(defn delayed-hello-core-async
;  [req]
;  (s/take!
;    (s/->source
;      (go
;        (let [_ (<! (async/timeout 5000))]
;          (hello-world-handler req))))))






;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Handlers                                         ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn fallbacks [handlers]
  (apply routes
         (map
           #(GET "*" _ %)
           handlers)))

(defn main-handler [ajax-post-fn
                    ajax-get-or-ws-handshake-fn
                    fallback-handlers]
  (routes

  (GET "/landing" req (html/landing-page req))
  (GET "/new" [] (html/landing-page))
  (GET "/market" [] (html/landing-page))
  (GET "/info" [] (html/landing-page))

;;;;;;;;Experimental only
  (GET "/hello" [] hello-world-handler)
;  (GET "/delayed_hello" [] delayed-hello-core-async)
;;;;;;;;;;;;;;

  (GET "/login" [] auth/login)
  (GET "/logout" [] auth/logout)
  (POST "/login" [] auth/login-authenticate)

  (GET "/add-cookie" [] auth/add-cookie)
  (GET "/delete-cookie" [] auth/delete-cookie)

  (POST "/registration" req
           (let [params (get-in req [:params])]
           (db/registration
                (:email params)
                (:password params)
                (:profile params))
           ))

  (GET "/w0" [] auth/signin)

  (GET "/accounts" [] (str (db/accounts)))
  (GET "/chat" [] (str (db/chat-messages)))
  (GET "/user/:id" [id] (db/get-account id))
  (GET "/password/:email" [email] (db/password? email))


   (GET  "/"     _   (io/resource "index.html"))
   (GET  "/chsk" req (ajax-get-or-ws-handshake-fn req))
   (POST "/chsk" req (ajax-post-fn req))
   (GET "*" _ (fallbacks fallback-handlers))
   (route/not-found "<h1>No more party in L.A.</h1>")))


(def ring-defaults-config
  (-> site-defaults
   (assoc-in
     [:security :anti-forgery]
     {:read-token (fn [req] (-> req :params :csrf-token))})
   (assoc-in [:static :resources] "public")))


(defn app [handler]
  (-> handler
     (wrap-reload)
        ;Split test
;     (wrap-test-subject-id)
        ;Buddy:
     (wrap-authorization auth/auth-backend)
     (wrap-authentication auth/auth-backend)
        ;Ring:
;     (wrap-params)
;     (wrap-session)
;     (wrap-keyword-params)
;     (wrap-defaults api-defaults)
;     (wrap-transit)
;     (wrap-cookies)
;     (wrap-with-logger)
;     (wrap-gzip)
     (wrap-defaults ring-defaults-config)
     (wrap-resource "/META-INF/resources")))


(defrecord RingHandler [config ws-connection routes handler]
  component/Lifecycle
  (start [component]
      component
      (let [component (component/stop component)
            {:keys [ajax-post-fn ajax-get-or-ws-handshake-fn]}
                   (ws/ring-handlers ws-connection)
            handler (app (main-handler
                          ajax-post-fn
                          ajax-get-or-ws-handshake-fn
                          (:handlers routes)))]
        (assoc component :handler handler)))
  (stop [component]
    (assoc component :handler nil)))

(defn new-ring-handler []
  (map->RingHandler {}))



(defn test-routes []
  (routes
        (GET  "/a" _  "a")))

(defn test-routes-two []
  (routes
        (GET "/a" _ "never a")
        (GET  "/b" _  "b")))


(defrecord Routes [config handlers]
  component/Lifecycle
  (start [component]
         component
         (assoc component :handlers [(test-routes) (test-routes-two)]))
  (stop [component]
        (assoc component :handlers nil)))


(defn new-routes []
  (map->Routes {}))


