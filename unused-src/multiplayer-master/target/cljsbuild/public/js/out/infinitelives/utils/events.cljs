(ns
    ^{:doc "Browser events"}
  infinitelives.utils.events
  (:require
   [cljs.core.async :refer [put! chan <! >! alts! timeout close!]])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

;; a dynamic var that passes through ctrl+shift+key events
;; to the root event handler
(defonce ^:dynamic *devtools-passthrough* true)

;;
;; an atom which holds the present state of a key
;; true meaning pressed, and false or nil meaning raised
;;
(def key-state (atom {}))

;; configuration of event handling behavoir.
;; this is because interoperating with other libraries on a
;; html page could require event to propagate, but gamejams
;; you want that stuff automatically set up and configured
;; to sane defaults
(defonce key-config
  (atom {:prevent-defaults true}))

(defn set-prevent-key-defaults [b]
  (swap! key-config assoc :prevent-defaults b))

(def prevent-key-defaults (partial set-prevent-key-defaults true))
(def allow-key-defaults (partial set-prevent-key-defaults false))

(defn ascii
  "A clojurescript version of ascii value of. javascript doesn't have
  a char type, but uses a string of length 1 to represent"
  [c]
  (.charCodeAt c 0))

(def
  ^{:doc "A hashmap with a variety of keys (strings, keywords).
mapping to browser key codes. Use the is-pressed? function to test
keys directly.

Keycodes can be any string of length 1 representing a key (lowercase).
Keycodes can also be any of the following keywords

:backspace :tab :enter :shift :control :alt :pause :capslock :esc :space
:pageup :pagedown :end :home :left :up :right :down :insert :delete :f1
:f2 :f3 :f4 :f5 :f6 :f7 :f8 :f9 :f10 :f11 :f12 :numlock :scrolllock :comma
:. :/ :backtick :squareleft :backslash :squareright :quote

or any of the single alphanumeric lowercase characters as keywords

eg.
:w :a :s :d :1 :5 etc."}
  key-codes
  (merge
   {
    ;; lookup by code
    :backspace 8
    :tab 9
    :enter 13
    :shift 16
    :control 17
    :alt 18
    :pause 19
    :capslock 20
    :esc 27
    :space 32
    :pageup 33
    :pagedown 34
    :end 35
    :home 36
    :left 37
    :up 38
    :right 39
    :down 40
    :insert 45
    :delete 46
    :f1 112
    :f2 113
    :f3 114
    :f4 115
    :f5 116
    :f6 117
    :f7 118
    :f8 119
    :f9 120
    :f10 121
    :f11 122
    :f12 123
    :numlock 144
    :scrolllock 145
    :comma 188
    :. 190
    :/ 191
    :backtick 192
    :squareleft 219
    :backslash 220
    :squareright 221
    :quote 222
    }

   ;; lookup by keyword of char
   (for [c "0123456789abcdefghijklmnopqrstuvwxyz"]
     [(keyword (str c)) (- (ascii c) 32)])

   ;; lookup by char
   (for [c "0123456789abcdefghijklmnopqrstuvwxyz,.;'[]-=`/\\"]
     [c (- (ascii c) 32)])))

(defn handle-keydown-event
  "the base event handler for key down events. Takes the keycode
  and sets that key in the key-state dictionary to true"
  [ev]
  (swap! key-state (fn [old] (assoc old (.-keyCode ev) true)))

  ;; if debug, we should passthrough ctrl-shift keys for dev tools
  (if (and *devtools-passthrough* (.-ctrlKey ev) (.-shiftKey ev))
    ;; pass through keypress
    false

    ;; else prevent event propagation (cursor keys scroll body on mozilla)
    (if (:prevent-defaults @key-config)
      (.preventDefault ev)
      false)
    ))

(defn handle-keyup-event
  "the basic event handler for key up events. Takes the keycode
  and removes it as a key from the key-state dictionary"
  [ev]
  (swap! key-state (fn [old] (dissoc old (.-keyCode ev))))

  ;; stop event propagation on mozilla
  (if (:prevent-defaults @key-config)
      (.preventDefault ev)
      true))

(defn install-key-handler!
  "install the keyup and keydown event handlers"
  []
  (.addEventListener js/window "keydown" handle-keydown-event)
  (.addEventListener js/window "keyup" handle-keyup-event))

(defn is-pressed?
  "returns true if the key is pressently down. code is a keyword,
  or a string of length 1. Examples:

  ```
  ;; test if keys are down by keyword
  (is-pressed? :backspace)
  (is-pressed? :f10)
  (is-pressed? :left)
  (is-pressed? :space)
  (is-pressed? :w)
  (is-pressed? :a)

  ;; test if keys are down by string
  (is-pressed? \" \")
  (is-pressed? \"w\")
  (is-pressed? \"a\")
  (is-pressed? \"d\")
  (is-pressed? \"s\")
  ```

  See key-codes for a list of keyword keys.
"
  [code]
  (@key-state (key-codes code)))

(defn any-pressed?
  "Is any key on the keyboard pressed?"
  []
  (-> key-state deref keys count zero? not))

;;
;; Animation handler
;;
(def fallback-fps 60)

(defn make-request-animation-frame
  "compose a function that is the r-a-f func. returns a function. This returned function takes a callback and ensures
  its called next frame"
  []
  (cond
   (.-requestAnimationFrame js/window)
   #(.requestAnimationFrame js/window %)

   (.-webkitRequestAnimationFrame js/window)
   #(.webkitRequestAnimationFrame js/window %)

   (.-mozRequestAnimationFrame js/window)
   #(.mozRequestAnimationFrame js/window %)

   (.-oRequestAnimationFrame js/window)
   #(.oRequestAnimationFrame js/window %)

   (.-msRequestAnimationFrame js/window)
   #(.msRequestAnimationFrame js/window %)

   :else
   #(.setTimeout js/window % (/ 1000 fallback-fps))))

;; build the actual function
(def
  ^{:arglist '([callback])
    :doc "schedules the passed in callback to be fired once, next animation frame."}
  request-animation-frame (make-request-animation-frame))

(defn next-frame
  "returns a single use channel which closes on next frame callback.
  pulling from it waits exactly one frame. eg

  ```
  ;; wait one frame
  (<! (next-frame))
  ```"
  []
  (let [c (chan)]
    (request-animation-frame #(close! c))
    c))

(defn wait-frames
  "returns a channel which closes when a certain number
  of frames have passed. eg

  ```
  ;; wait 10 frames
  (<! (wait-frames 10))
  ```"
  [frames]
  (go
    (loop [i frames]
      (when (pos? i)
        (<! (next-frame))
        (recur (dec i))))))

(defn wait-time
  "returns a channel which closes when a certain amount of
  time in milliseconds has passed, but determines that time by counting
  the requestAnimationFrame callbacks, so that when tab focus is lost,
  the callback, and thus this wait is suspended.

  ```
  ;; wait one seconds worth of frames
  (<! (wait-time 1000))
  ```"
  [delay]
  (wait-frames (* 60 (/ delay 1000))))


;;
;; Resize Channel
;; --------------
;; resize channels receive [width height]
;;
(def *resize-chans* (atom #{}))

(defn new-resize-chan []
  (let [c (chan)]
    (swap! *resize-chans* conj c)
    c))

(defn del-resize-chan [c]
  (swap! *resize-chans* disj c))

(defn clear-resize-chans! []
  (swap! *resize-chans* #{}))

(defn resize-event-chan-handler [ev]
  (let [size [(.-innerWidth js/window) (.-innerHeight js/window)]]
    (doseq [c @*resize-chans*] (put! c size))))

(defn install-resize-handler!
  "install the resize callback to resize the main canvas renderer"
  []
  (.addEventListener js/window "resize" resize-event-chan-handler))


;;
;; Frame Channel
;; -------------
;; frame channel receives a true every frame paint
;;
(def *frame-chans* (atom #{}))

(defn new-frame-chan []
  (let [c (chan)]
    (swap! *frame-chans* conj c)
    c))

(defn del-frame-chan! [c]
  (swap! *frame-chans* disj c))

(defn clear-frame-chans! []
  (swap! *frame-chans* #{}))

(defn frame-event-chan-handler [ev]
  (request-animation-frame frame-event-chan-handler)
  (doseq [c @*frame-chans*] (put! c true)))

(defn install-frame-handler!
  "install the frame callback to send frame chan messages"
  []
  (request-animation-frame frame-event-chan-handler))

;;
;; gamepad wrapper
;;

;; define game controller functions
(defn make-get-gamepads []
  (cond
   (aget js/navigator "getGamepads")
   (fn [&args] (.apply (aget js/navigator "getGamepads") js/navigator []))

   (aget js/navigator "wegkitGetGamepads")
   (fn [&args] (.apply (aget js/navigator "webkitGetGamepads") js/navigator []))

   :default
   #()))

(def get-gamepads (make-get-gamepads))

; keep a list of gamepads and their connection state - when connected this is the gamepad state datastruct
(def !gamepads {0 (atom nil) 1 (atom nil) 2 (atom nil) 3 (atom nil)})

; list of functions listening for gamepad connect events
(def !gamepad-connected-callbacks (atom []))

(defn initiate-gamepad-callbacks [gamepad-index gamepad-data]
  ; run the callbacks
  (doseq [g @!gamepad-connected-callbacks] (g gamepad-index (get !gamepads gamepad-index))))

; set a particular gamepad's connected atom state
(defn set-gamepad-atom! [gamepad-index value]
  (let [g (get !gamepads gamepad-index)]
    (reset! g value)))

; make the gamepad handler a singleton
(def gamepad-handler-installed (atom false))

; extract the javascripty bits from gamepad events
(defn get-gamepad-event-index [ev] (aget (aget ev "gamepad") "index"))

; singleton function for initiating the listeners and polling loop
(defn install-gamepad-handler! []
  (when (compare-and-set! gamepad-handler-installed false true)
    ; make sure the initial atoms are set and call the callback if it's already connected
    (let [gamepads (get-gamepads)]
      (doseq [gamepad-index (range 4)]
        (let [gamepad-data (aget gamepads gamepad-index)]
          (when gamepad-data
            (set-gamepad-atom! gamepad-index gamepad-data)))))
    ; catch gamepad connect events and fire the callback
    (js/window.addEventListener "gamepadconnected" (fn [ev] (set-gamepad-atom! (get-gamepad-event-index ev) (aget ev "gamepad")) (initiate-gamepad-callbacks (get-gamepad-event-index ev) (aget ev "gamepad"))))
    ; catch gamepad disconnect events and reset the relevant atom
    (js/window.addEventListener "gamepaddisconnected" (fn [ev] (set-gamepad-atom! (get-gamepad-event-index ev) nil) (initiate-gamepad-callbacks (get-gamepad-event-index ev) nil)))
    ; start the polling loop that will continuously query gamepads for updated data
    ; because the API does not include events except for connect and disconnect
    (js/setInterval get-gamepads 25)))

; listen out for gamepads connecting and disconnecting
; any time a new gamepad connects the callback will be called
; the callback is passed [gamepad-index gamepad-data] whenever a gamepad connects or disconnects
; gamepad-data is an atom that will contain the js datastructure of gamepad data
; if will become nil if the gamepad disconnects (the callback will also be called)
(defn install-gamepad-listener [callback]
  ; kick off the background polling interval singleton if not started already
  (install-gamepad-handler!)
  ; add this callback to our list of listeners
  (swap! !gamepad-connected-callbacks conj callback)
  ; fire a callback for any gamepads that are already connected
  (doseq [c (range 4)]
    (let [g (get !gamepads c)]
      (when @g (callback c g)))))

;;
;; touch wrapper (hammer.js)
;;
(comment
  (defn touch-channel
    [el]
    (let [c (chan)]
      (doto (js/Hammer. el)
        (.on "pan" #(put! c [:pan ^js/Event %]))
                                        ;(.on "tap" #(put! c [:tap ^js/Event %]))
        (.on "doubletap" #(put! c [:doubletap %]))
                                        ;(.on "pinch" #(put! c [:pinch %]))
                                        ;(.on "rotate" #(put! c [:rotate %]))
                                        ;(.on "swipe" #(put! c [:swipe %]))
        )
      c)))



;; install handlers

;; install all the event channel handlers
(install-key-handler!)
(install-frame-handler!)
(install-resize-handler!)
