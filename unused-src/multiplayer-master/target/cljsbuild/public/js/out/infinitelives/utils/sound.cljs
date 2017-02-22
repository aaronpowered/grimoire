(ns infinitelives.utils.sound
  (:require [cljs.core.async :refer [put! chan <! >! alts! timeout close!]]
            [infinitelives.utils.string :as string]
            )
  (:require-macros [cljs.core.async.macros :refer [go]])
)

(def audio-context (if js/window.AudioContext (js/window.AudioContext.) (js/window.webkitAudioContext.)))

(def default-gain 0.7)

;; where we store all the loaded sounds
(defonce !sounds (atom {}))

(defn load-sound
  "Initiates a download of the url as a sound. Returns a channel.
  When loaded and decoded, sends a decoded buffer object down the
  channel. This buffer can be used directly as a sound source"
  [url]
  (let [req (js/XMLHttpRequest.)
        c (chan)]
    (.open req "GET" url true)
    (set! (.-responseType req) "arraybuffer")
    (set! (.-onload req) (fn [] (.decodeAudioData audio-context (.-response req) #(put! c %))))
    (.send req)
    c))

(defn register-sound!
  [url obj]
  (swap! !sounds
         assoc (string/url-keyword url)
         obj)
)

(defn get-sound [key]
  (key @!sounds))

(defn play-sound
  "pass this a buffer, and an optional gain parameter, and the
  sound will be played to the speakers"
  ([buff g & [loop-flag]]
   (let [source (.createBufferSource audio-context)
         gain (.createGain audio-context)]
     (if loop-flag
       (set! (.-loop source) true)
       (set! (.-loop source) false))
     (set! (.-buffer source)
           (if (keyword? buff) (get-sound buff) buff))
     (.connect source gain)
     (.connect gain (.-destination audio-context))
     (set! (.-gain.value gain) g)
     (.start source 0)
     [source gain]))
  ([buff]
   (play-sound buff default-gain)))
