(ns holy-grail.systems
  (:require 
   [holy-grail.handler :refer [app event-msg-handler* scheduler]]
   [environ.core :refer [env]]
   [system.core :refer [defsystem]]
   (system.components
    [http-kit :refer [new-web-server]] 
    [sente :refer [new-channel-socket-server]]
    [repl-server :refer [new-repl-server]]
    [hara-io-scheduler :refer [new-scheduler]]
   )
   [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)]
))

(defsystem dev-system
  [:web (new-web-server (Integer. (env :http-port)) app)
   :sente (new-channel-socket-server event-msg-handler* sente-web-server-adapter 
          {:user-id-fn (fn [{:keys [client-id]}] client-id)})
   :scheduler (new-scheduler scheduler)])

(defsystem prod-system
  [:web (new-web-server (Integer. (env :http-port)) app)
   :repl-server (new-repl-server (Integer. (env :repl-port)))
   ])
