(ns peak.shared.world
  (:require 
   [hiccup.page :refer [include-js include-css html5]]
  ))



(defn notes []
  [:div.notes
    [:h1 "Küldetések"]
    [:ul
      [:li "Az aranylábú őz meséje"]
      [:li "Hajléktalan költő"]
      [:li "A szárnyas kecskebak"]
      [:li "Zöld legelők"]
    ]
  [:a.short {:href "/quest"} "12 elvarratlan szál"]]
)


(defn birthday []
  (print "A játék Február 25.-én indul"))


(defn power [title content]
  [:div.origin-core
    [:ul
      (map-indexed
      (fn [key quest] (-> ^{:key key}
         [:li.wowpanel [:div.content
           [:h4 (:title quest)]
           [:p (:desc quest)]
           (map-indexed (fn [key a] (-> ^{:key key}
              [:a {:on-click birthday} a])) (:options quest))
        ]]))
      content)]
    [:h1 title]])



(defn dice []
[:div
  [:div.dice-wrapper
    (map-indexed
     (fn [key a] (-> ^{:key key}
       [:div.cubic
        [:div.front][:div.right][:div.bottom]
        [:div.top][:div.left][:div.back]]))
     (range 6))]
  [:footer {:id "ctrl"}
      [:button#roll "Dobás"]
      [:label "Speed(s):"
      [:input {:type "number" :value "3" :step "1"
               :id "speed" :on-change #()}]]]])



(defn character-sheet [actual skills professions]
  [:div.sheet
    [:h3 (:name @actual)]
    [:h4 (str (:personality @actual) " " (:role @actual))]
    (if (not= (:origin @actual) "")
                [:h4 (str " ("(:origin @actual)" származás)")])
    [:h4 "Képességek:"]
    [:div.container
    (map-indexed (fn [key a] (-> ^{:key key}
                   [:p (str (:name a) ": ")
                   [:b ((keyword (:key a)) (:skills @actual))]]))
      skills)
;	FIX IT
;    [:p "Átlag: " (/ (reduce + (map (fn [a]
;        ((keyword (:key a)) (:skills @actual))) skills)) 10)]
    ]
    [:h4 "Cuccok:"]
    [:div.container
    (map-indexed (fn [key a] (-> ^{:key key} [:p a]))
                   (:inventory @actual))]
    [:h4 "Tulajdon:"]
    [:div.container
    (map-indexed (fn [key a] (-> ^{:key key} [:p a]))
                   (:property @actual))]
    [:h4 "Tehetség:"]
    [:div.container
    (map-indexed (fn [key a] (-> ^{:key key}
                   [:p (str (:name a) ": ")
                   [:b ((keyword (:key a)) (:profs @actual))]]))
      professions)]])

