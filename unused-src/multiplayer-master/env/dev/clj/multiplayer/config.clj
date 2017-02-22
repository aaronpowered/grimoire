(ns multiplayer.config
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [multiplayer.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[multiplayer started successfully using the development profile]=-"))
   :middleware wrap-dev})
