(ns
    ^{:doc "Vectors with 2 Dimensions. Utilises underlying google vector code."}
  infinitelives.utils.vec2
  (:require
   [goog.vec.Vec2 :as Vec2]))

(def ^{:dynamic true
       :doc "The fuzzy zone size for the almost comparitor"}
  *almost-delta* 1e-14)

(def
  ^{:arglist '([x y])
    :doc "Create a two dimensional vector #<x,y>"}
  vec2 Vec2/createFloat64FromValues)

(def
  ^{:arglist '([])
   :doc "Return the zero two dimensional vector #<0,0>"}
  make Vec2/createFloat64)

(def
  ^{:arglist '([])
   :doc "Return the zero two dimensional vector #<0,0>"}
  zero Vec2/createFloat64)

(def
  ^{:arglist '([v])
    :doc "Return the length of vector v"}
  magnitude Vec2/magnitude)

(def
  ^{:arglist '([v])
    :doc "Return the length squared of vector v"}
  magnitude-squared Vec2/magnitudeSquared)

(def
  ^{:arglist '([v0 v1])
    :doc "Return the distance between the tip of v0 and the tip of v1"}
  distance Vec2/distance)

(def
  ^{:arglist '([v0 v1])
    :doc "Return the distance squared between the tip of v0 and the tip of v1"
    }
  distance-squared Vec2/distanceSquared)

(def
  ^{:arglist '([v0 v1])
    :doc "Returns true is both v0 and v1 point in the same direction
     and are of the same length"}
  equals Vec2/equals)

(defn almost
  "Returns true if all the vectors passed in are so close they
  are almost equal. This is for dealing with precision problems
  in comparison."
  ([v0 v1]
   (and
    (< (Math/abs (- (aget v0 0) (aget v1 0))) *almost-delta*)
    (< (Math/abs (- (aget v0 1) (aget v1 1))) *almost-delta*)))

  ([v0 v1 & args]
   (let [vecs (concat [v0 v1] args)
         xs (for [v vecs] (aget v 0))
         ys (for [v vecs] (aget v 1))
         min-x (reduce min xs)
         max-x (reduce max xs)
         min-y (reduce min ys)
         max-y (reduce max ys)]
     (and (< (- max-x min-x) *almost-delta*)
          (< (- max-y min-y) *almost-delta*)))))

(defn add
  "Returns a new vec2 which is v0 + v1"
  [v0 v1]
  (Vec2/add v0 v1 (make)))

(defn sub
  "Passed one arg, returns a vector that is equal and
  opposite to v, 180 degrees around. Passed two args,
  returns a vector that is equal to v0 - v1"
  ([v]
   (Vec2/negate v (make)))
  ([v0 v1]
   (Vec2/subtract v0 v1 (make))))

(defn dot
  "Returns the dot product of v0 and v1"
  [v0 v1]
  (Vec2/dot v0 v1))

(defn scale
  "Returns a vector that is v, multiplied by the scalar."
  [v scalar]
  (Vec2/scale v scalar (make)))

(defn scale-div
  "Returns a vector that is v, divided by the scalar."
  [v scalar]
  (Vec2/scale v (/ 1 scalar) (make)))

(defn unit
  "Returns a unit vector that points in the same direction as v"
  [v]
  (Vec2/normalize v (make)))

(defn abs
  "Returns a vector that is a flipped and mirrored
  version of v, such that it appears in the positive quadrant"
  [v]
  (Vec2/abs v (make)))

(defn direction
  "returns a unit vector indicating the direction
  from the tip of v0, to the tip of v1"
  [v0 v1]
  (Vec2/direction v0 v1 (make)))

(defn rotate
  "return a vector identical to v but rotated ang radians. On a maths
  axis (+ve y points up) +ve ang rotation is anticlockwise. On a
  screen axis (+ve y points down) +ve ang rotation is clockwise."
 [v ang]
  (let [cos (Math/cos ang)
        sin (Math/sin ang)]
    (vec2 (- (* cos (aget v 0)) (* sin (aget v 1)))
          (+ (* cos (aget v 1)) (* sin (aget v 0))))))

(defn rotate-90
  "calls rotate but is hardcoded 90 degrees. Avoids calling cos and
  sin"
  [v]
  (vec2 (- (aget v 1))
        (aget v 0)))

(defn random-unit
  "Return a vector pointing in a random direction, but of exactly unit
  length"
  []
  (let [ang (* (rand) Math/PI 2)]
    (vec2 (Math/cos ang)
          (Math/sin ang))))

(defn random
  "return a random vector that fits entirely in the unit circle, that
  is, whose length is always less than or equal to one."
  []
  (let [mag (Math/sqrt (rand))
        ang (* (rand) Math/PI 2)]
    (vec2 (* mag (Math/cos ang))
          (* mag (Math/sin ang)))))

(defn lerp
  "linearly interperet a vector between v0 and v1. f is the factor
  along the interpolation. f=0 is v0. f=1 is v1. f can extend outside
  0 and 1"
  [v0 v1 f]
  (Vec2/lerp v0 v1 f (make)))

(defn heading
  "horrible function you shouldn't really use. Just keep working with
  vectors directly. Returns the angle of the vector. Answers always
  between 0 and 2*PI"
  [v]
  (let [pi-on-2 (/ Math/PI 2)
        x (aget v 0)
        y (aget v 1)]
    (if (= 0 x)
      ;; vertical
      (if (neg? y)
        (* 3 pi-on-2)
        pi-on-2)

      (if (= 0 y)
        ;; horizontal
        (if (neg? x)
          Math/PI
          0)

        ;; calculable angle
        (if (pos? x)
          (if (pos? y)
            (Math/atan (/ y x))
            (+ Math/PI Math/PI (Math/atan (/ y x))))
          (+ Math/PI (Math/atan (/ y x))))))))

(defn truncate
  [v scalar]
  (let [len (magnitude v)]
    (if (> len scalar)
      (scale (unit v) scalar)
      v)))

(defn as-vector [v]
  [(aget v 0) (aget v 1)])

(defn get-x [v]
  (aget v 0))

(defn get-y [v]
  (aget v 1))

(defn angle-between
  "Placing the tails of the two vectors together,
return the angle between them in radians"
  [v1 v2]
  (-> (dot v1 v2)
      (/ (* (magnitude v1) (magnitude v2)))
      Math/acos))

(defn rotated-pos?
  "return true if the second vector is angled as if rotated to the
  positive side of the first vector. Good for finding out which side
  of something another thing is on. In a maths axis (+ve y), 'pos' is
  to the left of v1. On a screen axis, 'pos' is to the right of v1."
  [v1 v2]
  (-> v1
      rotate-90
      (angle-between v2)
      (< (/ Math/PI 2))))
