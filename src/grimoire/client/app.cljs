(ns grimoire.client.app
  (:require-macros [cljs.core.async.macros :refer [go-loop]]
                   [reagent.ratom :refer [reaction]])
  (:require [dat.sync.client :refer [new-datsync]]
            [dat.reactor.dispatcher :as dispatcher]
            [reagent.core :as reagent :refer [render-component]]
            [reagent.session :as session]
            [posh.reagent :as p]
            [posh.lib.update :as u]
            [datascript.core :as d]
            [cljs.core.async :as async :refer (<! >! put! chan)] 
            [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]
            [clojure.string  :as str]
            [cljs.reader :refer [read-string]]
            [ajax.core :refer [GET POST DELETE]]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [grimoire.client.views :as views]
;            [grimoire.client.transition :as transition]
            [grimoire.shared.sente :as sente]
            [grimoire.client.scroll-demo :refer [scroll-demo-page]]
            [grimoire.client.game :refer [gametable]]
            [grimoire.client.utils.draggable :refer [draggable-button]]
            [grimoire.client.utils.data-table :refer [data-table]]
            [grimoire.client.utils.svg-anim :refer [svg-page]]
            [grimoire.client.registration :refer [create-character]]
            [grimoire.client.db :as db :refer [conn]]
            [grimoire.client.tools :as util :refer [tempid]]
            [grimoire.client.components :as comp]
            ))



(def data (reagent/atom {}))

(GET "/edn/basics.edn" {
	:handler #(reset! data (read-string %))})

(def profile (reagent/atom {
	:name "Neved?"
	:origin ""
	:personality ""
	:role ""
	:theory []
	:property [""]
	:inventory [""]
	:skills {}
	:profs {}
}))



;; -------------------------
;; Routes

(defn admin-panel [] 
  (let [todo-id (d/q '[:find ?todo .
                       :where [?todo :todo/name _]] @conn)]
  (views/admin conn todo-id)))

(defn registration [] (create-character profile data))
(defn tabletop [] (gametable data profile))

(secretary/defroute "/" []
  (session/put! :current-page #'views/home-page))
;  (session/put! :current-page #'transition/home-page))

;(secretary/defroute "/about" []
;  (session/put! :current-page #'views/about-page))

(secretary/defroute "/new" []
  (session/put! :current-page #'registration))

(secretary/defroute "/world" []
  (session/put! :current-page #'tabletop))

(secretary/defroute "/admin" []
  (session/put! :current-page #'admin-panel))

(secretary/defroute "/scroll-demo" []
  (session/put! :current-page #'scroll-demo-page))

(secretary/defroute "/svg-demo" []
  (session/put! :current-page #'svg-page))

(secretary/defroute "/draggable-demo" []
  (session/put! :current-page #'draggable-button))

(secretary/defroute "/data-table-demo" []
  (session/put! :current-page #'data-table))

(secretary/defroute "/market" []
  (session/put! :current-page #'views/market))

(secretary/defroute "/info" []
  (session/put! :current-page #'views/info-page))

;; -------------------------
;; Initialize app


;(defn new-system []
;  (-> (component/system-map
;     :remote     (sente/new-sente-remote)
;     :dispatcher (dispatcher/new-strictly-ordered-dispatcher)
;     :datsync    (component/using (new-datsync) [:remote :dispatcher])
;     )))



(defn ^:export main []
  (log/merge-config! {:level :debug})
  (db/populate! conn)
  (p/posh! conn)

 ; (component/start (new-system))

  (accountant/configure-navigation!
    {:nav-handler (fn [path] (secretary/dispatch! path))
     :path-exists? (fn [path] (secretary/locate-route path))})
  (accountant/dispatch-current!)

  (when-let [root (.getElementById js/document "app")]
    (render-component [views/root profile data] root))
   ; (render-component [transition/current-page] root))
  (log/info "WebApp is running."))




