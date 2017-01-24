(ns peak.db
  (:require [taoensso.timbre :as log :include-macros true]
    [monger.core :as mg]
    [monger.collection :as mc]
    [monger.operators :refer :all]
    [monger.query :as qu]
    [monger.conversion :refer [from-db-object]])
 (:import org.bson.types.ObjectId
           org.bson.types.BSONTimestamp))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Database Handlers                                ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [db (mg/get-db (mg/connect) "rpg")]

(def success {:body "Siker!"})

(defn delete-coll [collection]
  (mc/remove db collection)
  success)

(defn insert-into [collection a]
  (mc/insert db collection {:_id (ObjectId.) :name a})
  success)

(defn registration [email password profile]
  (let [oid (ObjectId.)]
    (do
      (mc/insert db "accounts" {
                  :_id oid
                  :password password
                  :email email
                  :profile profile
                  })
    ;  (mail email name)
    )(str oid)))

(defn accounts []
  (read-string (str (vec (map #(update % :_id str)
       (mc/find-maps db "accounts"))))))

(defn get-account [id]
  (let [oid (ObjectId. id)]
    (str (vec (map #(update % :_id str)
         (mc/find-maps db "accounts" {:_id oid}))))))

(defn chat! [uid date message]
  (let [oid (ObjectId.)]
    (do
      (mc/insert db "globalchat" {
                  :_id oid
                  :uid uid
                  :date date
                  :message message
                  })
    )(str oid)))

(defn chat-messages []
  (read-string (str (vec (map #(update % :_id str)
       (mc/find-maps db "globalchat"))))))

)



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Request Handlers                                 ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn password? [email]
  (:password (first (filter #(= (:email %) email) (accounts)))))

(defn id? [email]
  (:_id (first (filter #(= (:email %) email) (accounts)))))

(defn profile? [id]
  (:profile (first (filter #(= (:_id %) id) (accounts)))))






