(ns infinitelives.utils.dom)

(defn as-str
  "Coerces strings and keywords to strings, while preserving namespace of
   namespaced keywords"
  [s]
  (if (keyword? s)
    (str (some-> (namespace s) (str "/")) (name s))
    s))

(defn parent [elem]
  (.-parentNode elem))

(defn children [elem]
  (.-children elem))

(defn set-style!
  "Set the style of `elem` using key-value pairs:
      (set-style! elem :display \"block\" :color \"red\")"
  [elem & kvs]
  (assert (even? (count kvs)))
  (let [style (.-style elem)]
    (doseq [[k v] (partition 2 kvs)]
      (.setProperty style (as-str k) v))
    elem))

(defn append!
  "Append `child` to `parent`"
  ([parent child]
     (doto parent
       (.appendChild child))))

(defn remove!
  "Remove `elem` from `parent`, return `parent`"
  ([elem]
     (let [p (parent elem)]
       (assert p "Target element must have a parent")
       (remove! p elem)))

  ([p elem]
     (doto p (.removeChild elem))))

(defn create-element
  ([tag]
     (.createElement js/document (as-str tag)))
  ([tag-ns tag]
     (.createElementNS
      js/document (as-str tag-ns) (as-str tag))))

(defn insert-before!
  "Insert `elem` before `other`, `other` must have a parent"
  [elem other]
  (let [p (parent other)]
    (assert p "Target element must have a parent")
    (.insertBefore p elem other)
    elem))

(defn set-attr!
  "Sets dom attributes on and returns `elem`.
   Attributes without values will be set to their name:
       (set-attr! elem :disabled)
   With values, the function takes variadic kv pairs:
       (set-attr! elem :id \"some-id\"
                       :name \"some-name\")"
  ([elem k] (set-attr! elem k (as-str k)))
  ([elem k v]
     (let [k (as-str k)]
       (when v
         (if (fn? v)
           (doto elem (aset k v))
           (doto elem (.setAttribute k v))))))
  ([elem k v & kvs]
     (assert (even? (count kvs)))
     (doseq [[k v] (->> kvs (partition 2) (cons [k v]))]
       (set-attr! elem k v))
     elem))

(defn set-text!
  "Set the textContent of `elem` to `text`, fall back to innerText"
  [elem text]
  (if-not (undefined? (.-textContent elem))
    (set! (.-textContent elem) text)
    (set! (.-innerText elem) text))
  elem)

(defn set-html!
  "Set the innerHTML of `elem` to `html`"
  [elem html]
  (set! (.-innerHTML elem) html)
  elem)

(defn get-bounds [id]
  "Get a dom entity's bounding rect by id, using getBoundingClientRect."
  (.getBoundingClientRect (js/document.getElementById id)))

(defn collision-test-by-id [id-a id-b]
  "Test whether two dom elements are overlapping by id."
  (let [bounds-a (get-bounds id-a)
        bounds-b (get-bounds id-b)]
    (not (or (< bounds-a.right bounds-b.left)
             (> bounds-a.left bounds-b.right)
             (< bounds-a.bottom bounds-b.top)
             (> bounds-a.top bounds-b.bottom)))))

