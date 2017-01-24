(ns peak.html
    (:require
        [hiccup.page :refer [include-js include-css html5]]
        [config.core :refer [env]]
        [compojure.response :refer [render Renderable]]
        [clojure.java.io :as io]
        [peak.shared.world :as world]
        [peak.db :as db]
        ))

(def profile (atom {}))

(def data (read-string (slurp (io/resource "public/edn/basics.edn"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Hiccup Components                                ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def power-cards [
        {:title "Mecénás"
         :desc "Egy gazdag mecénás felfigyelt a találmányaidra,
                elég bátor vagy, hogy pénzt csinálj belőlük?"
         :options ["Küldök galambot"
                   "Majd keres más is"
                   "A pokolba vele"]}
        {:title "Halászhajó"
         :desc "Egy régi barátod jó áron ajánlja fel kihasználatlan
                halászhajóját, ez kiváló bevételi
                forráshoz juttathat egy időre."
         :options ["Találkozóra hívom"
                   "Nem bízom benne"
                   "Nem emlékszem ki ez"]}
        {:title "Szivesség"
         :desc "Tartoznak neked egyel a kapuőrök, emlékszel?"
         :options ["Kérek tőlük valamit"
                   "Nem emlékszem"
                   "Hagyjuk inkább"]}
        {:title "Ismerkedés"
         :desc "A helyiek bizalmatlanok veled szemben,
                 itt az idő, hogy bemutatkozz pár embernek."
         :options ["Kik a helyiek?"
                   "Nem hagyhatok nyomot"
                   "Nem érdekel"]}
        {:title "Mecénás"
         :desc "Egy ideje mintha azt tapasztalnád véletlenszerű
                gondolataid uralhatatlan módon valóra válnak."
         :options ["Erősen koncentrálok"
                   "Gondolkozom ezen"
                   "Nem hiszem el"]}
])


(def loading-message
  [:div#app
      [:h3 "Table & Dice"]
      [:p "Üdvözöllek "
       [:b "a játék"]
       " igen csak kezdeti szakaszában." [:br]
       "Az alfa verzió megjelenésének időpontja: "
       [:b "2017 február 25."] [:br]
       "Jelenlegi verzió: "[:b "0.3"]]])

(def mount-game
 [:div.wrap
  [:div.inner.js-parallax]
  [:h2 "Easy Peasy Parallax"]
  [:h4 "Only 10 lines of JS"]])
;    (include-css "/css/loading-parallax.css")
;    (include-js "/externs/loading-parallax.js")

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css "/css/animate.css")
   (include-css "/css/hover.css")
   (include-css "/css/dices.css")
   (include-css "/css/market.css")
   (include-css "/css/custom-buttons.css")
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])


(defn landing-page [req]
  (html5
    (head)
    [:body.body-container
     loading-message
     [:p
     [:hr] 
      [:h4 "Üdv a játékban " (:uid req) "!"]
      [:textarea#chat-msgs {:style "width: 100%; height: 150px;"
                            :readonly true}]
     [:hr]
      [:input#chat-input {:type :text :placeholder "Chat Message"}]
      [:button#chat-button {:type "button"} "Send!"]]
      [:p "(Press enter)"]
     [:hr]
     [:p
      [:button#btn1 {:type "button"} "chsk-send! (w/o reply)"]
      [:button#btn2 {:type "button"} "chsk-send! (with reply)"]]
     [:p
      [:button#btn3 {:type "button"} "Test rapid server pushes"]
      [:button#btn4 {:type "button"} "Toggle server broadcast loop"]]
     [:p
      [:button#btn5 {:type "button"} "Disconnect"]
      [:button#btn6 {:type "button"} "Reconnect"]]
     [:hr]
     [:textarea#output {:style "width: 100%; height: 150px;"}]
     [:hr]
    [:p
     [:input#login-uid {:type :text :placeholder "Username"}]
     [:input#login-password {:type :text :placeholder "Password"}]
     [:button#btn-login {:type "button"} "Registration!"]
     [:hr]]
     (include-js "/js/compiled/app.js")]))


(defn login-page [req]
  (html5
    [:body.body-container
     [:div.login-form
     [:a {:href "/"} "Vissza"]
     [:h3 "Bejelentkezés"]
    [:form {:method "post"}
    [:input {:type "text" :placeholder "Név:" :name "username"}]
    [:input {:type "password" :placeholder "Jelszó:" :name "password"}]
    [:input.button {:type "submit" :value "Belépés"}]]]
      [:p "Identity: " (str (:identity req))]
      [:p "Cookie: " (str (:value ((:cookies req) "JSESSIONID")))]
      [:p "Session: " (str (:value ((:cookies req) "ring-session")))]
      [:p "User Agent: " (str ((:headers req) "user-agent"))]
      [:p "Referer: " (str ((:headers req) "referer"))]
      [:p "Language: " (str ((:headers req) "accept-language"))]
      [:p "Cookies: " (str req)]
    ]))


(defn gameplay [id]
(let []
 (reset! profile (db/profile? id))
  (html5
    (head)
    [:body.body-container
     [:a {:href "/"} "Kilépés"]
     [:p (str id)]
     [:h1 "Üdv a játékban!"]
     (world/character-sheet profile (:skill data) (:profession data))
     (world/dice)
     (world/notes)
     (world/power "Hatalomkártyák" power-cards)
    (include-js "/externs/wowpanel.js")
    (include-js "/externs/dices.js")
    ])))

(def message403
  (html5
    [:div#app
      [:h3 "Engedély nélküli behatolás."]
      [:p "Először "
       [:a {:href "/login"} "jelentkezz be."]]]))

