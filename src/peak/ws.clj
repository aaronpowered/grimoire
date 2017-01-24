(ns peak.ws
  (:require
            [peak.datomic :as datomic]
            [peak.db :as db]
            [datomic.api :as d]
            [dat.sync.server :as dat.sync]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as log :include-macros true]
            [clojure.core.async :as async]
            [slingshot.slingshot :as slingshot :refer [throw+ try+]]
            [taoensso.sente.server-adapters.http-kit :as sente-http]
            [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]))


(defrecord WSRingHandlers [ajax-post-fn
                           ajax-get-or-ws-handshake-fn])

(defrecord WSConnection [ch-recv connected-uids send-fn ring-handlers]
  component/Lifecycle
  (start [component]
    (if (and ch-recv connected-uids send-fn ring-handlers)
      component
      (let [component (component/stop component)
            packer (sente-transit/get-flexi-packer :edn)
            {:keys [ch-recv
                    send-fn
                    connected-uids
                    ajax-post-fn
                    ajax-get-or-ws-handshake-fn]}
            (sente/make-channel-socket!
             sente-http/http-kit-adapter {:packer packer})]
        (log/info "WebSocket connection started")
        (assoc component
          :ch-recv		ch-recv
          :connected-uids	connected-uids
          :send-fn		send-fn
          :ring-handlers     (->WSRingHandlers
                                  ajax-post-fn
                                  ajax-get-or-ws-handshake-fn)))))

  (stop [component]
    (when ch-recv (async/close! ch-recv))
    (log/info "WebSocket connection stopped")
    (assoc component
      :ch-recv nil
      :connected-uids nil
      :send-fn nil
      :ring-handlers nil)))



(defn send! [ws-connection user-id event]
  (log/info "sending message to client: " (first event))
  ((:send-fn ws-connection) user-id event))

(defn broadcast! [ws-connection event]
  (let [uids (:connected-uids ws-connection)]
    (doseq [uid (:any @uids)] (send! ws-connection uid event))))

(defn ring-handlers [ws-connection]
  (:ring-handlers ws-connection))

(defn new-ws-connection []
  (map->WSConnection {}))



;; Watch connected users
;(add-watch connected-uids :connected-uids
;  (fn [_ _ old new]
;    (when (not= old new)
;      (log/info "Connected uids change: %s" new)
;        ;;Notify clients
;      (doseq [uid (:any @connected-uids)]
;       (send! uid [:server/uids (:any @connected-uids)])))))


(defn login-handler [ring-req]
(let [{:keys [session params]} ring-req
      {:keys [user-id user-pass]} params
      id (db/id? user-id)
      found-password (db/password? user-id)]
  (if (and found-password (= found-password user-pass))
    (let []
    (log/debug "Login request: %s" params)
    {:status 200 :session (assoc session
                                 :uid user-id
                                 :identity id)})
    (println "Hibás jelszó!"))))


;(defn test-fast-server>user-pushes
;  "Quickly pushes 100 events to all connected users.
;  Note that this'll be fast+reliable even over Ajax!"
;  []
;  (doseq [uid (:any @connected-uids)]
;    (doseq [i (range 100)]
;      (send! uid [:fast-push/is-fast
;                  (str "hello " uid " for " i "!!")]))))


;;Example broadcaster
(defonce broadcast-enabled?_ (atom false))

;(defn start-example-broadcaster! []
;  (let [broadcast!
;        (fn [i]
;          (let [uids (:any @connected-uids)]
;            (log/debug "Broadcasting to %s uids" (count uids))
;            (doseq [uid uids]
;              (send! uid
;                [:some/broadcast
;                 {:message "Every 10 seconds"
;                  :to-whom uid
;                  :i i}
;                ]))))]
;    (go-loop [i 0]
;      (<! (async/timeout 10000))
;      (when @broadcast-enabled?_ (broadcast! i))
;      (recur (inc i)))))








;;;; Sente event handlers

(defmulti -event-msg-handler :id)

(defn event-msg-handler [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (log/debug "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod -event-msg-handler :chsk/ws-ping
  [ev-msg] (print nil))

;;Chat
;(defn push-back-chat-message [who date message]
;  (doseq [uid (:any @connected-uids)]
;      (send! uid [:chat/push-back
;              (str "[" date "] " who ": " message)])))

;(defmethod -event-msg-handler :chat/new-message
;  [ev-msg] (let [uid (:uid ev-msg)
;                 msg (:msg (:?data ev-msg))
;                 ;date (:date (:?data ev-msg))
;                 date (current-time)]
;                   (chat! uid date msg)
;                   (push-back-chat-message uid date msg)))

;;Tests
;(defmethod -event-msg-handler :example/test-rapid-push
;  [ev-msg] (test-fast-server>user-pushes))
;
;(defmethod -event-msg-handler :example/toggle-broadcast
;  [{:as ev-msg :keys [?reply-fn]}]
;  (let [loop-enabled? (swap! broadcast-enabled?_ not)]
;    (?reply-fn loop-enabled?)))






;;;;App

(defmulti event-msg-handler
  ; Dispatch on event-id
  (fn [app {:as event-msg :keys [id]}] id))


;; ## Event handlers

(defmethod event-msg-handler :chsk/ws-ping
  [_ _]
  (log/debug "Ping"))




;; General purpose transaction handler
;(defmethod event-msg-handler :dat.sync.remote/tx
;  [{:as app :keys [datomic]} {:as event-msg :keys [id ?data]}]
;  (log/info "tx recieved from client: " id)
;  (let [tx-report @(dat.sync/apply-remote-tx! (:conn datomic) ?data)]
;    (log/info "Client did something with: " tx-report)))

;; We handle the bootstrap message by simply sending back the bootstrap data
;(defmethod event-msg-handler :dat.sync.client/bootstrap
;  [{:as app :keys [datomic ws-connection]}
;   {:as event-msg :keys [id uid send-fn]}]
;  (log/info "Sending bootstrap message")
;  (send! ws-connection uid
;          [:dat.sync.client/bootstrap
;           (datomic/bootstrap (d/db (:conn datomic)))]))

;(defmethod event-msg-handler :default ; Fallback
;  [app {:as event-msg :keys
;        [event id ?data ring-req ?reply-fn send-fn]}]
;  (log/warn "Unhandled event:" id))


;; ## Transaction report handler

;(declare filter-tx-deltas)
;(def filter-tx-deltas identity)
;
;(defn handle-transaction-report!
;  [ws-connection tx-deltas]
;  ;; This handler is where you would eventually set up subscriptions
;  (try
;    (let [tx-deltas (filter-tx-deltas tx-deltas)]
;      (broadcast! ws-connection
;                   [:dat.sync.client/recv-remote-tx tx-deltas]))
;    (catch Exception e
;      (log/error "Failed to send transaction report to clients!")
;      (.printStackTrace e))))


;; ## The actual app component, which starts sente's chsk router and hooks up the msg handler

(defrecord App [config datomic ws-connection sente-stop-fn]
  component/Lifecycle
  (start [component]
    (log/info "Starting websocket router and transaction listener")
    (let [sente-stop-fn (sente/start-chsk-router!
                          (:ch-recv ws-connection)
                          (partial event-msg-handler component))]
;      (dat.sync/start-transaction-listener!
;               (:tx-report-queue datomic)
;               (partial handle-transaction-report! ws-connection))
      (assoc component :sente-stop-fn sente-stop-fn)))
  (stop [component]
    (log/debug "Stopping websocket router")
    (sente-stop-fn)
    component))

(defn new-app []
  (map->App {}))


(comment
  (require 'user)
  (let [ws-connection (:ws-connection user/system)]
    (send-tx!)))




