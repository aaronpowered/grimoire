(ns multiplayer.routes.home
  (:require [multiplayer.layout :as layout]
            [compojure.core :refer [defroutes GET]]

            [ring.util.http-response :refer [ok]]
            [clojure.java.io :as io]

            [chord.format.fressian :as fressian]
            [clj-time.core :as time]
            [clj-time.coerce :as coerce]
            [clojure.tools.logging :as log]
         ;[chord.http-kit :refer [wrap-websocket-handler]]
         [chord.http-kit :refer [with-channel wrap-websocket-handler]]
          [clojure.core.async :refer [<! >! put! close! go] :as a]
))

(defn home-page []
  (layout/render "home.html"))


(defonce next-uid (atom 0))

(defn ws-handler [{:keys [ws-channel] :as req}]
  (go
    (loop []
        (let [{msg :message} (<! ws-channel)]
          (println "message was" (str msg))
          (let [[_ {:keys [angle]}] msg]
            (>! ws-channel [:state {:reflection-angle angle}]))
          (when msg
            (recur))
          )))
  )


(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/docs" [] (ok (-> "docs/docs.md" io/resource slurp)))
  (GET "/str" [request] str)
  (GET "/ws" []
       (wrap-websocket-handler ws-handler {:format :transit-json}))

)
