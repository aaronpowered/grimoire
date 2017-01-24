(ns clj-reload
 "Middleware that reloads modified namespaces on each request.
 This middleware should be limited to use in development environments."
  (:require [taoensso.timbre :as log :include-macros true]
            [ns-tracker.core :refer [ns-tracker]]
;            [user :as user]
            ))

(defn- reloader [dirs retry?]
  (let [modified-namespaces (ns-tracker dirs)
        load-queue (java.util.concurrent.LinkedBlockingQueue.)]
    (fn []
      (locking load-queue
        (doseq [ns-sym (modified-namespaces)]
          (.offer load-queue ns-sym))
        (loop []
          (when-let [ns-sym (.peek load-queue)]
            (if retry?
              (do (require ns-sym :reload) (.remove load-queue))
              (do (.remove load-queue) (require ns-sym :reload)))
            (log/info "Namespace changed:")
            (log/info ns-sym)
;            (user/reset)
;            (log/info "Server reseted.")
            (recur)))))))

(defn wrap-reload
  "Reload namespaces of modified files before
   the request is passed to the supplied handler."
  ([handler]
   (wrap-reload handler {}))
  ([handler options]
   (let [reload! (reloader (:dirs options ["src"])
                           (:reload-compile-errors? options true))]
     (fn
       ([request]
        (reload!)
        (handler request))
       ([request respond raise]
        (reload!)
        (handler request respond raise))))))

