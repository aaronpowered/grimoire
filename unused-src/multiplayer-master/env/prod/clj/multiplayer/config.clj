(ns multiplayer.config
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[multiplayer started successfully]=-"))
   :middleware identity})
