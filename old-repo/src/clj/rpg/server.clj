(ns rpg.server
  (:require [rpg.handler :refer [app
            start-router! start-example-broadcaster!]]
            [config.core :refer [env]]
            [aleph.http :as http]
            [aleph.netty :as netty]
            [taoensso.timbre :refer (infof)])
  (:gen-class))


 (defn -main [& args]
   (let [port (Integer/parseInt (or (env :port) "3000"))
         uri (format "http://localhost:%s/" port)]
     (do
     (start-router!)
     (start-example-broadcaster!)
     (try
       (.browse (java.awt.Desktop/getDesktop) (java.net.URI. uri))
       (catch java.awt.HeadlessException _))
     (netty/wait-for-close
          (http/start-server app {:port port :join? false}))
     (print "Aleph is booting up.")
     (infof "Web server is running at `%s`" uri)
     )))
