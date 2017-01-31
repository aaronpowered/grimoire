(ns grimoire.auth
    (:require
    [compojure.response :refer [render Renderable]]
    [ring.util.response :refer [redirect]]
    [buddy.auth :refer [authenticated? throw-unauthorized]]
    [buddy.auth.backends.session :refer [session-backend]]
    [buddy.auth.middleware :refer [wrap-authentication
                                   wrap-authorization]]
    [grimoire.html :as html]
    [grimoire.db :as db]
    ))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Controllers                                      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn signin [request]
  (if-not (authenticated? request)
      (throw-unauthorized)
      (render (html/gameplay (:identity (:session request))) request)))

(defn login [request]
  (render (html/login-page request) request))

(defn logout [request]
  (-> (redirect "/login") (assoc :session {})))

(defn add-cookie [request]
  (-> (redirect "/login") (assoc :cookies {"secret"
      {:value "foobar", :secure true, :max-age 3600}})))

(defn delete-cookie [request]
  (-> (redirect "/login") (assoc :cookies {})))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;      Authentication      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn login-authenticate [request]
  (let [username (get-in request [:form-params "username"])
        password (get-in request [:form-params "password"])
        session (:session request)
        id (db/id? username)
        found-password (db/password? username)]
  (if (and found-password (= found-password password))
      (let [
        next-url (get-in request [:query-params :next] "/w0")
        updated-session (assoc session :identity id)]
        (-> (redirect next-url)
            (assoc :session updated-session)))
      (render html/message403 request))))


(defn unauthorized-handler [request metadata]
  (cond (authenticated? request)
    (-> (render html/message403 request)
        (assoc :status 403))
    :else (let [current-url (:uri request)]
      (render html/message403 request))))


(def auth-backend
  (session-backend {:unauthorized-handler unauthorized-handler}))




