(ns grimoire.client.registration
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [grimoire.utils.tools :refer [round timer atom-input]]
              [ajax.core :refer [GET POST DELETE]]
              [cljs.reader :refer [read-string]]))

(defn reskill [profile
	origin o1 o2 o3 o4 o5 o6
	theory p1 p2 p3 p4 p5] 
(+ 5
	(case (origin @profile)
          "" 0
	  "Ismeretlen" o1
	  "Koldus" o2
	  "Falusi" o3
	  "Polgári" o4
	  "Nemesi" o5
	  "Időutazó" o6)

	(if (= (last (take 1 (theory @profile))) p1) 3 -1)
	;(nth (theory @atom) 1) vagy ((theory @atom) 1)
	(if (= (last (take 2 (theory @profile))) p2) 3 -1)
	(if (= (last (take 3 (theory @profile))) p3) 3 -1)
	(if (= (last (take 4 (theory @profile))) p4) 3 -1)
	(if (= (last (take 5 (theory @profile))) p5) 3 -1)
))

(defn update-skills [profile]
(swap! profile assoc :skills
{
	:KTR (reskill profile :origin 0 2 1 0 -1 0
			      :theory 1 0 0 1 0)
	:IZM (reskill profile :origin 0 1 2 -1 0 0
			      :theory 0 0 0 1 1)
	:GYR (reskill profile :origin 2 0 1 0 0 1
			      :theory 0 1 0 0 0)
	:UGY (reskill profile :origin 0 1 1 1 1 0
			      :theory 1 0 1 0 1)
	:ERT (reskill profile :origin 1 0 0 3 2 1
			      :theory 1 1 1 1 1)
	:BOL (reskill profile :origin 0 1 0 3 0 2
			      :theory 0 0 0 0 0)
	:BAT (reskill profile :origin 1 0 0 0 -1 2
			      :theory 0 1 1 0 1)
	:SZE (reskill profile :origin 1 3 0 1 1 -1
			      :theory 0 1 1 0 1)
	:OSZ (reskill profile :origin 1 0 0 2 1 0
			      :theory 1 0 1 1 0)
	:HAT (reskill profile :origin 4 1 0 1 0 0
			      :theory 1 1 0 1 0)
}))

(defn update-inventory [profile data]
(swap! profile assoc :inventory 
(into (into (into
;vszeg concatat kell csinalni
(:inventory (first (filter
	#(= (:name %) (:origin @profile)) (:origin @data))))

(:inventory (first (filter
	#(= (:name %) (:role @profile)) (:role @data))))
)
(:inventory (first (filter
	#(= (:name %) (:personality @profile)) (:personality @data))))
)
["Csodaszer"]
)
))

;; -------------------------
;; Views

(defn registration-sheet []
(let [toggle (reagent/atom false)]
(fn []
[:div {:style {:display "none"}}
  [:button.toggle-rsheet
	{:on-click
	#(if @toggle
		(reset! toggle false)
		(reset! toggle true))}
		(if @toggle "mégsem" "Regisztráció")]
  [:div {:class (if @toggle "rsheet" "rsheet opacity0")}
    [:h3 (str "Regisztráció" @toggle)]
  ]])))



(defn create-character [actual data]
(let [skills		(:skill @data)
      origins		(:origin @data)
      personalities	(:personality @data)
      perso-rules	(:perso-rules @data)
      roles		(:role @data)
      professions	(:profession @data)
      id		(reagent/atom nil)
      email		(reagent/atom nil)
      password		(reagent/atom nil)
      theory		(reagent/atom
	  {:mind 1 :energy 1 :nature 1 :tactics 1 :identity 1})]
(fn []
  [:div
    [:p.persoinfo (str (:personality @actual) " " (:role @actual))]
   [:a {:href "/"} "Vissza"][:br]
   [:h2 "Ki vagy te az új világban?"]
[registration-sheet]
   [:div.origins.container
	[:h3 "Honnan származol?"]
     (doall (map-indexed (fn [key a] (-> ^{:key key}
       [:div.origin
	[:button
          {:class (if (= (:name a) (:origin @actual)) "choosen")
           :on-click #(do
                        (swap! actual assoc :origin (:name a))
                        (update-inventory actual data)
                        (update-skills actual))}
          (:name a)]
        [:p (:description a)]])) origins))]

   [:div.personalities.container
	[:h3 "Személyiséged: " (:personality @actual)]
     (doall (map-indexed (fn [key a] (-> ^{:key key}
       [:div.personality
	[:button
          {:class (if (= (last a) ((second a) @theory)) "choosen")
	   :on-click #(do
			(swap! theory assoc (second a) (last a))
                        (swap! actual assoc :theory [
				(:mind @theory)
				(:energy @theory)
				(:nature @theory)
				(:tactics @theory)
				(:identity @theory)])
			(swap! actual assoc :personality
			  (:name (first (filter
			  (fn [i] (= (:theory i)(:theory @actual)))
				personalities))))
                        (update-inventory actual data)
                        (update-skills actual))}
          (first a)] [:p "Leírás"]])) perso-rules))]

   [:div.roles.container [:h3 "Harcnemek"]
     (doall (map-indexed (fn [key a] (-> ^{:key key}
       [:div.role.hvr-float
	[:button
          {:class (if (= (:name a) (:role @actual)) "choosen")
           :on-click #(do
                        (swap! actual assoc :role (:name a))
                        (update-inventory actual data))}
          (:name a)]
        [:h5 [:b (map #(str % ", ") (:skills a))]]
        [:p (:description a)]])) roles))]

   [:div
     [timer][:br]
     [atom-input actual][:br]
     [atom-input "Email" email][:br]
     [atom-input "Jelszó" password][:br]
     [:button {:on-click #(POST "/registration"
              {:params {
                 :email @email
                 :password @password
                 :profile @actual}
      :handler (fn [a] (do
                   (reset! id (str a))))
      :error-handler (fn [a] (.alert js/window
                     (str "Sikertelen regisztráció: " a)))})}
      "Regisztráció"][:br]
     [:a {:href "/login"
          :style {:opacity (if @id 1 0)}} "Belépés"][:br]]

]
)))
