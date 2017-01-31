(ns grimoire.config
  (:require [environ.core :as environ]
            [grimoire.shared.utils :refer [deep-merge]]
            [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]))


(log/merge-config! {:level :debug})

(defn ?->int [x]
  (try (Integer/parseInt x)
       (catch Exception e nil)))

(defn ?->boolean [x]
  (case x
    (true "true" :true "TRUE" :TRUE) true
    :else false))

(def web-server-port 3000)

(def config-rules
  {:port        {:path [:server :port]
                 :parse ?->int
                 :generator {
                    :init   web-server-port
                    :gen-fn (fn [last-value] (inc last-value))
                    :test-fn (fn [value] "Test if port is bound")}}
   :datomic-url          {:path [:datomic :url]}
   :datomic-seed-data    {:path [:datomic :seed-data]}
   :datomic-reset-schema {:path [:datomic :reset-db] :parse ?->boolean}
  })

(def defaults
  {:server {:port web-server-port}
   :datomic {:url "datomic:mem://base"}})


(defn get-environ-config [rules env]
  (reduce
    (fn [config [name {:keys [parse path] :or {parse identity}}]]
      (if-let [env-var-val (get env name)]
        (assoc-in config (or path [name]) (parse env-var-val))
        config))
    {}
    rules))

(defn get-config
  ([overrides]
   (deep-merge defaults
               ;; Should move defaults into a config file eventually...
               ;(read-string (slurp "config.edn"))
               (get-environ-config config-rules environ/env)
               overrides))
  ([] (get-config {})))

(defrecord Config [overrides]
  component/Lifecycle
  (start [component]
    (log/info "Starting config component")
    (into component (get-config overrides)))
  (stop [component]
    component))

(defn create-config
  "Create a new instance of a Config component, with config-overrides."
  ([config-overrides]
   (Config. config-overrides))
  ([] (create-config {})))

:ok

