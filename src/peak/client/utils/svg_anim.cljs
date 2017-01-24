(ns peak.client.utils.svg-anim
  (:require 
    [reagent.core :as reagent]
    [reagent.ratom :as ratom]
    [reanimated.core :as anim]
    
    [clojure.string :as string]))



(println (str "pi: " (aget js/Math "PI")))

(defn get-circumference [radius]
  (* (aget js/Math "PI") (* radius 2)))

(println (str "thing 100: " (get-circumference 100)))

;; -------------------------
;; Views


(defn svg-page []
  (let [radius (reagent/atom 100)
        spacing (reagent/atom 5)
        strkwdth (reagent/atom 10)
        xPos (anim/spring radius)
        loaded (reagent/atom 10)
        outerTotalLength (get-circumference radius)
        outerProg (anim/spring loaded)
        neutralColor (reagent/atom "#ddd")]
    (fn a-spring-example2-component []
      [:div#ring-holder
       [:div.btn-holder
        [:button {:on-click (fn [e] (swap! radius - 10))} "<"]
        [:button {:on-click (fn [e] (swap! radius + 10))} ">"]]
       [:svg {:view-box (str "0 0 " (+ (* @radius 2) @strkwdth) " " (+ (* @radius 2) @strkwdth))
              :background-color "yellow" :style {:background-color "#eee"}}
        [:circle#outerring {
                  :r @xPos 
                  :cx (+ @xPos (/ @strkwdth 2))
                  :cy (+ @xPos (/ @strkwdth 2)) 
                  :fill "none"
                  :stroke @neutralColor
                  :stroke-width @strkwdth}]
        [:circle#outerprogress {
                  :r @xPos 
                  :cx (+ @xPos (/ @strkwdth 2))
                  :cy (+ @xPos (/ @strkwdth 2)) 
                  :fill "none"
                  :stroke "lemonchiffon"
                  :stroke-width @strkwdth
                  :stroke-dasharray 628.3
                  :stroke-dashoffset -300                  
                  }]
        [:circle#middlering {
                  :r (- @xPos @strkwdth @spacing) 
                  :cx (+ @xPos (/ @strkwdth 2))
                  :cy (+ @xPos (/ @strkwdth 2)) 
                  :fill "none"
                  :stroke @neutralColor
                  :stroke-width @strkwdth}]
        [:circle#innerring {
                  :r (- @xPos (* @strkwdth 2) (* @spacing 2)) 
                  :cx (+ @xPos (/ @strkwdth 2))
                  :cy (+ @xPos (/ @strkwdth 2)) 
                  :fill "none"
                  :stroke @neutralColor
                  :stroke-width @strkwdth}]]])))


