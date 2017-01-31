(ns grimoire.client.game
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [ajax.core :refer [GET POST DELETE]]
              [cljs.reader :refer [read-string]]))


(defn random-dices [n k]
  (vec (take n (repeatedly #(rand-int k)))))

(defn roll-dices [] (random-dices 6 4))

(defn rgba [r g b a] (str "rgba(" r "," g "," b "," a ")"))

(defn gametable [data profile]
(let [x-view (reagent/atom 7)
      y-view (reagent/atom 7)
      ux-view (reagent/atom {:padding "2"
                             :transition "All 0.7s ease"})
      ]
  (fn []
  [:div.gametable-view {:style {:width "calc(100% - 20px)" :height "calc(100vh - 20px)"
                        :background "rgba(170,225,200,1)"
                        :position "absolute"
                        :left 0 :top 0
                        :margin (str (:padding @ux-view) "vh")}}
  [:style (str ".card-state:hover {
                              width: "(- 100 (/ 200 @x-view))"% !important;
                              height: "(- 100 (/ 200 @y-view))"vh !important;
                              left: "(/ 100 @x-view)"% !important;
                              top: "(/ 100 @y-view)"vh !important;
                              ;}")]
    [:div.gametable
      (map (fn [data] [:div.card-state
                      {:style {:width (str (/ (- 100 (:padding @ux-view)) @x-view) "%")
                               :height (str (/ (- 100 (:padding @ux-view)) @y-view) "%")
                               :left (str (* (:x data) (/ (- 100 (:padding @ux-view)) @x-view)) "%")
                               :top (str (* (:y data) (/ (- 100 (:padding @ux-view)) @y-view)) "%")
                               :position "fixed"
                               :z-index (:z data)
                               :-webkit-transition (:transition @ux-view)
                               :-moz-transition (:transition @ux-view)
                               :-o-transition (:transition @ux-view)
                                       }}
                        [:div.card {:style {
                               :background (:c data)
                               :border "1px solid grey"
                               :width "100%"
                               :height "100%"
                               }}
                          [:label {:style {
                                   :width "10vh" :line-height "10vh"
                                   :position "absolute"
                                   :text-align "center"
                                   :background "rgba(0,0,0,0.07)"
                                   :color "black"
                                   :margin-top 0
                                   :border-bottom-right-radius "5vh"}} (:id data)]
                          [:h2 {:style {:text-align "center"
                                        :font-size "2vh"
                                        :border-bottom "1px solid black;"
                                        :margin-top "5px"}} (:title data)]
                        ]])
                                         [ {:x "0" :y "0" :z 1 :c (rgba 255 255 255 0.9) :id 0 :title "Zenélő szökőkút"}
                                           {:x "1" :y "0" :z 1 :c (rgba 255 255 255 0.9) :id 1 :title "Halandók temploma"}
                                           {:x "2" :y "0" :z 1 :c (rgba 255 255 255 0.9) :id 2 :title "Szent Szilveszter termálfürdő"}
                                           {:x "3" :y "0" :z 1 :c (rgba 255 255 255 0.9) :id 3 :title "Birodalmi színház"}
                                           {:x "4" :y "0" :z 1 :c (rgba 255 255 255 0.9) :id 4 :title "Birodalmi színház"}
                                           {:x "5" :y "0" :z 1 :c (rgba 255 255 255 0.9) :id 5 :title "Birodalmi színház"}
                                           {:x "6" :y "0" :z 1 :c (rgba 255 255 255 0.9) :id 6 :title "Birodalmi színház"}
                                           {:x "6" :y "1" :z 1 :c (rgba 255 255 255 0.9) :id 7 :title "Sötét sikátorok"}
                                           {:x "6" :y "2" :z 1 :c (rgba 255 255 255 0.9) :id 8 :title "Fogadó a holt nyúlhoz"}
                                           {:x "6" :y "3" :z 1 :c (rgba 255 255 255 0.9) :id 9 :title "Furmány kereskedőház"}
                                           {:x "6" :y "4" :z 1 :c (rgba 255 255 255 0.9) :id 10 :title "Furmány kereskedőház"}
                                           {:x "6" :y "5" :z 1 :c (rgba 255 255 255 0.9) :id 11 :title "Furmány kereskedőház"}
                                           {:x "6" :y "6" :z 1 :c (rgba 255 255 255 0.9) :id 12 :title "Furmány kereskedőház"}
                                           {:x "5" :y "6" :z 1 :c (rgba 255 255 255 0.9) :id 13 :title "Furmány kereskedőház"}
                                           {:x "4" :y "6" :z 1 :c (rgba 255 255 255 0.9) :id 14 :title "Városháza"}
                                           {:x "3" :y "6" :z 1 :c (rgba 255 255 255 0.9) :id 15 :title "Városháza"}
                                           {:x "2" :y "6" :z 1 :c (rgba 255 255 255 0.9) :id 16 :title "Városháza"}
                                           {:x "1" :y "6" :z 1 :c (rgba 255 255 255 0.9) :id 17 :title "Halandók temploma"}
                                           {:x "0" :y "6" :z 1 :c (rgba 255 255 255 0.9) :id 18 :title "Szent Szilveszter termálfürdő"}
                                           {:x "0" :y "5" :z 1 :c (rgba 255 255 255 0.9) :id 19 :title "Birodalmi színház"}
                                           {:x "0" :y "4" :z 1 :c (rgba 255 255 255 0.9) :id 21 :title "Birodalmi színház"}
                                           {:x "0" :y "3" :z 1 :c (rgba 255 255 255 0.9) :id 22 :title "Birodalmi színház"}
                                           {:x "0" :y "2" :z 1 :c (rgba 255 255 255 0.9) :id 23 :title "Sötét sikátorok"}
                                           {:x "0" :y "1" :z 1 :c (rgba 255 255 255 0.9) :id 24 :title "Fogadó a holt nyúlhoz"}
                                           ;;Hidden:
                                           {:x "5" :y "5" :z -1 :c (rgba 255 255 255 0.9) :id 8 :title "Várbörtön"}
                                         ])

    ]

  ]


  ))

)

