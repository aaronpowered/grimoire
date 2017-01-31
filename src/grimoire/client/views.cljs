(ns grimoire.client.views
  (:require [reagent.core :as reagent]
            [reagent.session :as session]
;            [grimoire.client.ws :refer [online-players]]
            [posh.reagent :as p]
            [grimoire.utils.tools :refer [container]]
  ))

(defonce online-players (reagent/atom 0))

;; -------------------------
;; Views

(defn character-sheet [actual skills professions]
  [:div.sheet
    [:h3 (:name @actual)]
    [:h4 (str (:personality @actual) " " (:role @actual))]
    (if (not= (:origin @actual) "")
    [:h4 (str " ("(:origin @actual)" származás)")])
    [:h4 "Képességek:"]
      (container actual "skills" skills)
    [:h4 "Cuccok:"]
      (container actual "inventory")
    [:h4 "Tulajdon:"]
      (container actual "property")
    [:h4 "Tehetség:"]
      (container actual "profs" professions)
  ])


(defn home-page [profile data]
 [:div
  [:h2 "Welcome to RPG"]
   [:div [:a {:href "/new"} "Regisztráció"]]
   [:div [:a {:href "/world"} "Világ"]][:br]
   [:div [:a {:href "/admin"} "Admin felület TODO"]]
   [:div [:a {:href "/scroll-demo"} "Görgetés demo"]]
   [:div [:a {:href "/svg-demo"} "SVG demo"]]
   [:div [:a {:href "/draggable-demo"} "Draggable demo"]]
   [:div [:a {:href "/data-table-demo"} "Data-table demo"]]
   [:div [:a {:href "/info"} "Szabálykönyv"]][:br]
   [:div [:a {:href "/market"} "Piac"]]
  [:h4 "Belépés:"]
;   [:div [:a {:href "/w0"} "Szerver 0 "]
;         [:a {:href "/who-is-online"}
;             (str "(" (count @online-players) "/50 játékos)")]]
;   [:ul (map #(do [:li %]) @online-players)]
 ])


(defn info-page [profile data]
[:div
 [:div [:a {:href "/"} "Vissza"]][:br]
   [:div.skills.container
    [:h3 "Képességek"]
     (map-indexed (fn [key item] (-> ^{:key key}
       [:div.skill
        [:h4 (str (:name item) " ("(:key item)")")]
        [:p (:description item)]])) (:skill @data))]
   [:div.professions.container
    [:h3 "Szakértelmek"]
     (map-indexed (fn [key item] (-> ^{:key key}
       [:div.profession
        [:h4 (:name item)]
        [:p (:description item)]])) (:profession @data))]])


(defn market-card [style]
    [:details.card
      [:summary {:class (str "property " style)}
        [:span.eyebrow "Django Freeman"]
        "Eladó cuccai"]
    [:p "7 Nyersanyag, 2 Fegyver, 1 Értéktárgy"]
    [:br]
    [:ul
      [:li.hotel "A hatalom szerencsés acélökle"]
      [:li.hotel "Filozófia könyv (nyersanyag)"]]
    [:p "3 aranypénz 50 ezüstpénz"]
    [:button "Megvásárolom"]
    [:p.disclaimer
     "A tárgyak listáját az eladó nem tette nyilvánossá" [:br]
     "Becsült összértékük: 472 ezüstpénz"]])

(defn market [profile data]
[:div.market
 [:div [:a {:href "/"} "Vissza"]][:br]
  [:div.table
  [:section
	(market-card "lightblue")
	(market-card "lightblue")
	(market-card "lightblue")
  ]
  [:section
	(market-card "yellow")
	(market-card "yellow")
  ]
  [:section
	(market-card "darkblue")
	(market-card "darkblue")
	(market-card "darkblue")
	(market-card "darkblue")
  ]]])


(defn root [profile data]
  [:div
   [(session/get :current-page) profile data]
   (character-sheet profile (:skill @data) (:professions @data))])

