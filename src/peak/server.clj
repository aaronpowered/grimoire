(ns peak.server
  (:gen-class)
  (:require [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :refer
               [system-map using start] :as component]
            [org.httpkit.server :refer (run-server)]
            [peak.ws :refer [new-ws-connection new-app]]
            [peak.config :refer [create-config]]
            [peak.datomic :refer [create-datomic new-importer]]
            [peak.handler :refer [new-ring-handler new-routes]]))


(defrecord HttpServer [config ring-handler server-stop]
  component/Lifecycle
  (start [component]
    (if server-stop
     component
     (let [component (component/stop component)
           port {:port (-> config :server :port)}
           server-stop (run-server
                         (:handler ring-handler) {:port port})]
       (log/info "HTTP server started on port: " port)
       (assoc component :server-stop server-stop))))
  (stop [component]
    (when server-stop (server-stop))
    (log/debug "HTTP server stopped")
    (assoc component :server-stop nil)))

(defn new-http-server []
  (map->HttpServer {}))




(defn core-system
  ([config-overrides]
   (system-map
     :config            (create-config config-overrides)
     :datomic           (using (create-datomic) [:config])
     :importer          (using (new-importer) [:config :datomic])
     :ws-connection     (using (new-ws-connection) [:config])
     :routes            (using (new-routes) [:config])
     :ring-handler      (using (new-ring-handler)
                               [:config :routes :ws-connection])
     :http-server       (using (new-http-server)
                               [:datomic :config :ring-handler])
     :app               (using (new-app)
                               [:config :ws-connection :datomic])))
  ([] (core-system {})))



(defn -main [& args]
  (start (core-system))
  (println "--------------[\"System started.\"]--------------"))

