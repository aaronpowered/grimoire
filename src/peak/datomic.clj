(ns peak.datomic
  (:require [taoensso.timbre :as log :include-macros true]
            [datomic.api :as d]
            [clojure.java.io :as io]
            [io.rkn.conformity :as conformity]
            [com.stuartsierra.component :as component]))

(def base-schema
  (->> "datview-schema.edn"
       io/resource
       slurp
       read-string))

(defn ensure-schema!
  [conn]
  (let [schema-data
        (merge base-schema
              (-> "schema.edn" io/resource slurp read-string))]
    (try
      (conformity/ensure-conforms conn schema-data)
      (catch Exception e
        (.printStackTrace e)))))


(defn load-data!
  [conn filename]
  (let [data (-> filename slurp read-string)]
    (d/transact conn data)))


(defrecord Datomic [config conn tx-report-queue]
  component/Lifecycle
  (start [component]
    (let [url (-> config :datomic :url)
          deleted? (d/delete-database url)
          created? (d/create-database url)
          conn (d/connect url)
          tx-report-queue (d/tx-report-queue conn)
          component (assoc component :conn conn
                                     :tx-report-queue tx-report-queue)]
      (log/info "Datomic Starting")
      (ensure-schema! conn)
      component))
  (stop [component]
    (d/release conn)
    (assoc component :conn nil)))

(defn create-datomic []
  (map->Datomic {}))

(defn bootstrap [db]
  (log/info "Calculating bootstrap data...")
  (->> (d/datoms db :eavt)
       (map (fn [[e a v t]] e))
       (distinct)
       (d/pull-many db '[*])
       (filter #(not (:db/fn %)))))

;;; Importer

(defrecord Importer [config datomic]
  component/Lifecycle
  (start [component]
    (log/info "Importering data")
    (let [data (-> "resources/test-data.edn" slurp read-string)]
      @(d/transact (:conn datomic) data)))
  (stop [component]
       component))


(defn new-importer []
  (map->Importer {}))

