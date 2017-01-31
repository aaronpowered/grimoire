(ns grimoire.client.chat
    (:require-macros
              [cljs.core.async.macros :as asyncm :refer (go go-loop)])
    (:require [reagent.core :as reagent :refer [atom]]
              [grimoire.client.tools :refer [getValueById getElementById changeValueById on-key-press on-click]]
              [grimoire.client.ws :as ws]
              [cljs.core.async :as async :refer (<! >! put! chan)]
              [taoensso.timbre :as log] 
              [taoensso.encore :as encore :refer-macros (have have?)]
    ))


(def chat-output (getElementById "chat-msgs"))

(defn ->chat! [fmt & args]
  (let [msg (apply encore/format fmt args)]
    (log/debug msg)
    (aset chat-output "value" (str "• "(.-value chat-output) "\n" msg))
    (aset chat-output "scrollTop" (.-scrollHeight chat-output))))

(defn send-chat-message [ev]
  (let [message (getValueById "chat-input")]
       (log/info "A chat message sent to the server.")
       (ws/chsk-send! [:chat/new-message {:msg message
                                       :date (.Date js/window)}])
       (changeValueById "chat-input" "")))

(on-key-press "chat-input"
    (fn [ev]
    ;(->output! "On chat-input a key pressed: " (.-charCode ev))
      (if (= 13 (.-charCode ev))
          (send-chat-message ev))))

(on-click "chat-button"
    (fn [ev]
      (send-chat-message ev)))

