(ns infinitelives.utils.console)

(defn log [& args]
  "Logs arguments to the js console and returns the last argument (passthrough)."
  (js/console.log.apply js/console (clj->js (into [] args)))
  (last args))

