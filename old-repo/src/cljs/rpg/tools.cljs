(ns rpg.tools
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [ajax.core :refer [GET POST DELETE]]
              [cljs.reader :refer [read-string]]))


(defn round [x & {p :precision}]
  (if p
    (let [scale (Math/pow 10 p)]
         (-> x (* scale) Math/round (/ scale)))
         (Math/round x)))


(defn timer []
  (let [seconds-elapsed (reagent/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       (round (/ @seconds-elapsed 60) :precision 1)
       " percet töltöttél eddig ezen az oldalon."])))

(defn container
(
[actual key-name edn]
[:div.container
  (map-indexed (fn [key a] (-> ^{:key key}
           [:p (str (:name a) ": ")
           [:b ((keyword (:key a)) ((keyword key-name) @actual))]]))
   edn)
  [:p "Átlag: " (round (/ (reduce + (map (fn [a]
  ((keyword (:key a)) ((keyword key-name) @actual))) edn)) 10))]])
(
[actual key-name]
[:div.container
  (map-indexed (fn [key a] (-> ^{:key key} [:p a]))
                 ((keyword key-name) @actual))]))


(defn atom-input
([value]
  [:input {:type "text"
           :value (:name @value)
           :on-change #(swap! value assoc
                                    :name (-> % .-target .-value))}])
([tinput value]
  [:input {:type "text"
           :value @value
           :placeholder tinput
           :on-change #(reset! value (-> % .-target .-value))}]))
