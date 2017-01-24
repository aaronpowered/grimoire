(defproject peak "0.0.1-alpha1"
  :description ""
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0-alpha7"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.clojure/tools.reader "1.0.0-beta3"]
                 [org.clojure/core.async "0.2.395"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/core.typed "0.3.23"]

                 [cljs-ajax "0.5.8"]
                 [com.cognitect/transit-clj "0.8.285"]

                 [datsync "0.0.1-alpha1-SNAPSHOT"]
                 [datview "0.0.1-alpha2-SNAPSHOT"]
                 [datspec "0.0.1-alpha1-SNAPSHOT"]
                 [datreactor "0.0.1-alpha1-SNAPSHOT"]

                 [com.stuartsierra/component "0.3.2"]
                 [environ "1.1.0"]
                 [slingshot "0.12.2"]

                 [ring/ring-core "1.5.0"]
                 [ring/ring-defaults "0.2.1"]
                 [ring-transit-middleware "0.1.3"]
                 [bk/ring-gzip "0.1.1"]
                 [ns-tracker "0.3.1"]

                 [aleph "0.4.2-alpha10"]
                 [http-kit "2.2.0"]

                 [compojure "1.5.1"]
                 [bidi "2.0.16"]
                 [com.cognitect/transit-clj "0.8.288"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [testdouble/clojurescript.csv "0.2.0"]

                 [datascript "0.15.5"]
                 [posh "0.5.5"]

                 [reagent "0.6.0-SNAPSHOT"]
                 ;:exclusions [cljsjs/react]]
                 ;[cljsjs/react-with-addons "15.4.0-0"]
                 [reanimated "0.5.0"]
                 [reagent-utils "0.2.0"]
                 [secretary "1.2.3"]
                 [hiccup "1.0.5"]
                 [data-frisk-reagent "0.3.5" :exclusions [reagent]]
                 [re-com "0.8.3"]

                 [org.webjars/bootstrap "3.3.5"]
                 [prismatic/schema "1.1.3"]
                 [io.rkn/conformity "0.4.0"]
                 [ch.qos.logback/logback-classic "1.1.8"]
                 [venantius/accountant "0.1.7"
                           :exclusions [org.clojure/tools.reader]]

                 [com.taoensso/timbre "4.8.0"]
                 [com.taoensso/encore "2.88.2"]
                 [com.taoensso/sente "1.8.0"
                  :exclusions [org.clojure/tools.reader]]
                 [com.taoensso/touchstone "2.0.2"]

                 [yogthos/config "0.8"]
                 ;; MongoDB wrapper
                 [com.novemberain/monger "3.1.0"]
                 ;; Mail server
                 [com.draines/postal "2.0.0"]
                 ;; Authentication
                 [buddy "1.0.0"]
                 [buddy/buddy-sign "1.1.0"]

                 ;; scraping
                 [enlive "1.1.6"]
                 ;; for parsing json data
                 [cheshire "5.6.3"]

                 ;;For the free version of Datomic
                 [com.datomic/datomic-free "0.9.5544"
                  :exclusions [joda-time org.slf4j/slf4j-nop]]

                 ;; libraries to suppress warnings until upstream
                 ;; libraries get sorted with clojure 1.9 alpha
                 [org.clojure/tools.analyzer "0.6.9"]
                 [medley "0.8.4"]]

  :plugins [[lein-cljsbuild "1.1.1" :exclusions [org.clojure/clojure]]]

  ;; For Datomic Pro uncomment the following and set the DATOMIC_USERNAME and DATAOMIC_PASSWORD environment
  ;; variables of the process in which you run this program to those matching your Datomic Pro account. You'll
  ;; have to start your own transactor separately from this process as well. More instructions on how to do
  ;; that in the Wiki (I think... bug us if you can't find them).
  ;:repositories {"my.datomic.com" {:url
  ;                               "https://my.datomic.com/repo"
  ;                                 :username
  ;                                [:env/datomic_username]
  ;                                 :password
  ;                                 [:env/datomic_password]}}
  :source-paths ["src"]
  :resource-paths ["resources"]
  :target-path "target/%s"

  :clean-targets ^{:protect false}
     [:target-path :compile-path "resources/public/js/compiled"]

  :main ^:skip-aot peak.run
  :cljsbuild {:builds
              {:client
               {:source-paths ["src/peak/client"
                               "dev"]

                :compiler {:main peak.client.start-prod
                           :asset-path "js/compiled/out"
                       :output-to "resources/public/js/compiled/app.js"
                       :output-dir "resources/public/js/compiled/out"
                           :optimizations :none
                           :source-map-timestamp true}}}} 
  :repl-options {:init-ns user
                 :timeout 240000}

  :figwheel {:css-dirs ["resources/public/css"]
             :server-logfile "dev/logs/figwheel.log"}


  :profiles {:dev-config {}
             :dev [:dev-config
                   {:dependencies [[alembic "0.3.2"]
                                   [figwheel "0.5.8"]
                                   [figwheel-sidecar "0.5.8"]
                                   [com.cemerick/piggieback "0.2.1"]
                                   [org.clojure/tools.nrepl "0.2.12"]
                                   ;[devcards "0.2.1"]
                                   ]
                    :repl-options {:nrepl-middleware
                              [cemerick.piggieback/wrap-cljs-repl]}
                    :cljsbuild {:builds {:client {:figwheel {
                                :on-jsload "start/on-js-reload"}}}}
                    :plugins [[lein-figwheel "0.5.8"]
                              [com.palletops/lein-shorthand "0.4.0"]
                              [lein-environ "1.0.1"]]
                    :shorthand {. [clojure.pprint/pprint
                                   alembic.still/distill
                                   alembic.still/lein
                                   taoensso.timbre/trace
                                   taoensso.timbre/spy]}
                    :source-paths ["dev"]
                    :resource-paths ^:replace ["resources"]}]
             :prod {:cljsbuild
                    {:builds
                     {:client {:source-paths ^:replace
                                             ["src/peak/client"]
                               :compiler {:optimizations :advanced
                                          :pretty-print false}}}}}

             :uberjar [:prod
                       {:omit-source true
                        :aot :all}]}

  :aliases {"package"
            ["with-profile" "prod" "do"
             "clean" ["cljsbuild" "once"]]
            "run-prod"
            ["with-profile" "prod" "do"
             "package" "run"]})

