(ns grimoire.client.start
   (:require [grimoire.client.app :as app]
             [taoensso.timbre :as log :include-macros true]))
 
(defn on-js-reload []
  (log/info "------ Reload ------")
  (do
    (app/main)))
 
  (log/info "------ Cljs Load ------")
  (app/main)
