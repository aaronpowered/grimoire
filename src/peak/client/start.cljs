(ns peak.client.start
   (:require [peak.client.app :as app]
             [taoensso.timbre :as log :include-macros true]))
 
(defn on-js-reload []
  (log/info "------ Reload ------")
  (do
    (app/main)))
 
(app/main)
