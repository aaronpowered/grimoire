(defproject rpg "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [
    [org.clojure/clojure "1.8.0"]
    [org.clojure/core.async "0.2.395"]
    [org.clojure/core.match "0.3.0-alpha4"]
    [com.cognitect/transit-clj "0.8.285"]
    [org.clojure/clojurescript "1.9.229" :scope "provided"]
    [cljs-ajax "0.5.8"]

    [reagent "0.6.0"]
    [reagent-utils "0.2.0"]
    [secretary "1.2.3"]
    [hiccup "1.0.5"]

    [aleph "0.4.2-alpha10"]
    [manifold "0.1.5"]
;    [byte-streams "0.2.2"]

    [ring-server "0.4.0"]
    [ring "1.5.0"]
    [ring/ring-defaults "0.2.1"]
    [ring.middleware.logger "0.5.0"]
    [ring-transit-middleware "0.1.3"]
    [bk/ring-gzip "0.1.1"]

    [compojure "1.5.1"]

    [com.taoensso/encore "2.88.1"]
    [com.taoensso/sente "1.11.0"]
    [com.taoensso/timbre "4.7.4"]
    [com.taoensso/touchstone "2.0.2"]

    [yogthos/config "0.8"]
    [com.draines/postal "2.0.0"]
    [buddy "1.0.0"]
    [buddy/buddy-sign "1.1.0"]
    [com.novemberain/monger "3.1.0"]
    [environ "1.0.2"]
    [venantius/accountant "0.1.7" :exclusions
                                  [org.clojure/tools.reader]]]

  :plugins [[lein-environ "1.0.2"]
            [lein-cljsbuild "1.1.1"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]

  :ring {:handler rpg.handler/app
         :uberwar-name "rpg.war"}

  :min-lein-version "2.5.0"

  :uberjar-name "rpg.jar"

  :main rpg.server

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :cljsbuild
  {:builds {:min
            {:source-paths ["src/cljs" "src/cljc" "env/prod/cljs"]
             :compiler
             {:output-to "target/cljsbuild/public/js/app.js"
              :output-dir "target/uberjar"
              :optimizations :advanced
              :pretty-print  false}}
            :app
            {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
             :compiler
             {:main "rpg.dev"
              :asset-path "/js/out"
              :output-to "target/cljsbuild/public/js/app.js"
              :output-dir "target/cljsbuild/public/js/out"
              :source-map true
              :optimizations :none
              :pretty-print  true}}
            }
   }

  :figwheel {
     :http-server-root "public"
     :server-port 3449
     :nrepl-port 7002
     :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
     :css-dirs ["resources/public/css"]
     :ring-handler rpg.handler/app
}

  :profiles {

     :dev
	{:repl-options
          {:init-ns rpg.server
           :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
           :timeout 240000}

         :dependencies [[ring/ring-mock "0.3.0"]
                        [ring/ring-devel "1.5.0"]
                        [prone "1.1.2"]
                        [figwheel-sidecar "0.5.8"]
                        [org.clojure/tools.nrepl "0.2.12"]
                        [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                        [pjstadig/humane-test-output "0.8.1"]]

         :source-paths ["env/dev/clj"]
         :plugins [[lein-figwheel "0.5.8"]]

         :injections [(require 'pjstadig.humane-test-output)
                     (pjstadig.humane-test-output/activate!)]

         :env {:dev true}}

     :uberjar
        {:hooks [minify-assets.plugin/hooks]
         :source-paths ["env/prod/clj"]
         :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
         :env {:production true}
         :aot :all
         :omit-source true}})
