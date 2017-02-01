(ns grimoire.admin.core
  (:require [posh.reagent :as p]
            [grimoire.admin.db :as db :refer [conn]]
            [grimoire.admin.categories :as cats]))


;;Admin Panel
;(p/pull conn '[*] [:task/name "Mop Floors"])
(defn testdog [conn]
  (let [floors @(p/pull conn '[*] [:task/name "Mop Floors"])]
    [:div
     {:on-click
      #(p/transact! conn [[:db/add (:db/id floors) :task/done (not (:task/done floors))]])}
     "Test: "
     (pr-str floors)
     ]))

(defn admin [conn todo-id]
  (let [todo @(p/pull conn '[:todo/name] [:todo/name "Matt's List"])]
    [:div
     [testdog conn]
     [:a {:href "/"} "Vissza"]
     [:h1 (:todo/name todo)]
     [dashboard-button conn todo-id]
     [cats/category-menu conn todo-id]
     [cats/add-new-category conn todo-id]
     [cats/category-panel conn todo-id]
     ]))

