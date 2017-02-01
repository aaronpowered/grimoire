(ns peak.client.transition
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            ))

(declare animation-container)

;; CSS Transitions

(def css-transition-group
  (reagent/adapt-react-class js/React.addons.CSSTransitionGroup))

;; -----------------------------
;; Views

(defn no-page []
  [:div])

(defn home-page []
  ;^{:key "hp"}
  [:div.HomePage
   [:h2 "Welcome to Udemy"]
   [:a {:href "/about"} "go to about page"]
   [animation-container]])

(defn about-page []
  ;^{:key "ap"}
  [:div.AboutPage
   [:h2 "About udemy"]
   [:a {:href "/udemy"} "go to the home page"]])

(defn current-page []
  (let []
    (fn []
      [:div
        [css-transition-group {:transition-name "pageChange"
                              :component "div"}

         ^{:key (session/get :current-page)}
          [(session/get :current-page)]]]
      )))

(defn animation-container []
  (let [items (atom ["hello" "world" "click" "me"])
        remove (fn [item]
                 (swap! items (fn [xs] (filter #(not= item %) xs))))

        add    (fn []
                 (reset! items (conj @items "another item")))

        item (fn [item]
               ^{:key item}
               [:div {:on-click #(remove item)} item])
        ]

    (fn []
      [:div
       [:button {:on-click #(add)} "Add another item"]
       [css-transition-group {:transition-name "example"}
        (doall
          (map item @items))]])))
