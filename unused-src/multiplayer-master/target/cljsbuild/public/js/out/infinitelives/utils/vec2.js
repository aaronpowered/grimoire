// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.utils.vec2');
goog.require('cljs.core');
goog.require('goog.vec.Vec2');
/**
 * The fuzzy zone size for the almost comparitor
 */
infinitelives.utils.vec2._STAR_almost_delta_STAR_ = 1.0E-14;
/**
 * Create a two dimensional vector #<x,y>
 */
infinitelives.utils.vec2.vec2 = goog.vec.Vec2.createFloat64FromValues;
/**
 * Return the zero two dimensional vector #<0,0>
 */
infinitelives.utils.vec2.make = goog.vec.Vec2.createFloat64;
/**
 * Return the zero two dimensional vector #<0,0>
 */
infinitelives.utils.vec2.zero = goog.vec.Vec2.createFloat64;
/**
 * Return the length of vector v
 */
infinitelives.utils.vec2.magnitude = goog.vec.Vec2.magnitude;
/**
 * Return the length squared of vector v
 */
infinitelives.utils.vec2.magnitude_squared = goog.vec.Vec2.magnitudeSquared;
/**
 * Return the distance between the tip of v0 and the tip of v1
 */
infinitelives.utils.vec2.distance = goog.vec.Vec2.distance;
/**
 * Return the distance squared between the tip of v0 and the tip of v1
 */
infinitelives.utils.vec2.distance_squared = goog.vec.Vec2.distanceSquared;
/**
 * Returns true is both v0 and v1 point in the same direction
 *   and are of the same length
 */
infinitelives.utils.vec2.equals = goog.vec.Vec2.equals;
/**
 * Returns true if all the vectors passed in are so close they
 *   are almost equal. This is for dealing with precision problems
 *   in comparison.
 */
infinitelives.utils.vec2.almost = (function infinitelives$utils$vec2$almost(var_args){
var args33059 = [];
var len__27062__auto___33073 = arguments.length;
var i__27063__auto___33074 = (0);
while(true){
if((i__27063__auto___33074 < len__27062__auto___33073)){
args33059.push((arguments[i__27063__auto___33074]));

var G__33075 = (i__27063__auto___33074 + (1));
i__27063__auto___33074 = G__33075;
continue;
} else {
}
break;
}

var G__33064 = args33059.length;
switch (G__33064) {
case 2:
return infinitelives.utils.vec2.almost.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27081__auto__ = (new cljs.core.IndexedSeq(args33059.slice((2)),(0)));
return infinitelives.utils.vec2.almost.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27081__auto__);

}
});

infinitelives.utils.vec2.almost.cljs$core$IFn$_invoke$arity$2 = (function (v0,v1){
return ((Math.abs(((v0[(0)]) - (v1[(0)]))) < infinitelives.utils.vec2._STAR_almost_delta_STAR_)) && ((Math.abs(((v0[(1)]) - (v1[(1)]))) < infinitelives.utils.vec2._STAR_almost_delta_STAR_));
});

infinitelives.utils.vec2.almost.cljs$core$IFn$_invoke$arity$variadic = (function (v0,v1,args){
var vecs = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null),args);
var xs = (function (){var iter__26776__auto__ = ((function (vecs){
return (function infinitelives$utils$vec2$iter__33065(s__33066){
return (new cljs.core.LazySeq(null,((function (vecs){
return (function (){
var s__33066__$1 = s__33066;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33066__$1);
if(temp__4657__auto__){
var s__33066__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33066__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__33066__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__33068 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__33067 = (0);
while(true){
if((i__33067 < size__26775__auto__)){
var v = cljs.core._nth.call(null,c__26774__auto__,i__33067);
cljs.core.chunk_append.call(null,b__33068,(v[(0)]));

var G__33077 = (i__33067 + (1));
i__33067 = G__33077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33068),infinitelives$utils$vec2$iter__33065.call(null,cljs.core.chunk_rest.call(null,s__33066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33068),null);
}
} else {
var v = cljs.core.first.call(null,s__33066__$2);
return cljs.core.cons.call(null,(v[(0)]),infinitelives$utils$vec2$iter__33065.call(null,cljs.core.rest.call(null,s__33066__$2)));
}
} else {
return null;
}
break;
}
});})(vecs))
,null,null));
});})(vecs))
;
return iter__26776__auto__.call(null,vecs);
})();
var ys = (function (){var iter__26776__auto__ = ((function (vecs,xs){
return (function infinitelives$utils$vec2$iter__33069(s__33070){
return (new cljs.core.LazySeq(null,((function (vecs,xs){
return (function (){
var s__33070__$1 = s__33070;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33070__$1);
if(temp__4657__auto__){
var s__33070__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33070__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__33070__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__33072 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__33071 = (0);
while(true){
if((i__33071 < size__26775__auto__)){
var v = cljs.core._nth.call(null,c__26774__auto__,i__33071);
cljs.core.chunk_append.call(null,b__33072,(v[(1)]));

var G__33078 = (i__33071 + (1));
i__33071 = G__33078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33072),infinitelives$utils$vec2$iter__33069.call(null,cljs.core.chunk_rest.call(null,s__33070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33072),null);
}
} else {
var v = cljs.core.first.call(null,s__33070__$2);
return cljs.core.cons.call(null,(v[(1)]),infinitelives$utils$vec2$iter__33069.call(null,cljs.core.rest.call(null,s__33070__$2)));
}
} else {
return null;
}
break;
}
});})(vecs,xs))
,null,null));
});})(vecs,xs))
;
return iter__26776__auto__.call(null,vecs);
})();
var min_x = cljs.core.reduce.call(null,cljs.core.min,xs);
var max_x = cljs.core.reduce.call(null,cljs.core.max,xs);
var min_y = cljs.core.reduce.call(null,cljs.core.min,ys);
var max_y = cljs.core.reduce.call(null,cljs.core.max,ys);
return (((max_x - min_x) < infinitelives.utils.vec2._STAR_almost_delta_STAR_)) && (((max_y - min_y) < infinitelives.utils.vec2._STAR_almost_delta_STAR_));
});

infinitelives.utils.vec2.almost.cljs$lang$applyTo = (function (seq33060){
var G__33061 = cljs.core.first.call(null,seq33060);
var seq33060__$1 = cljs.core.next.call(null,seq33060);
var G__33062 = cljs.core.first.call(null,seq33060__$1);
var seq33060__$2 = cljs.core.next.call(null,seq33060__$1);
return infinitelives.utils.vec2.almost.cljs$core$IFn$_invoke$arity$variadic(G__33061,G__33062,seq33060__$2);
});

infinitelives.utils.vec2.almost.cljs$lang$maxFixedArity = (2);
/**
 * Returns a new vec2 which is v0 + v1
 */
infinitelives.utils.vec2.add = (function infinitelives$utils$vec2$add(v0,v1){
return goog.vec.Vec2.add(v0,v1,infinitelives.utils.vec2.make.call(null));
});
/**
 * Passed one arg, returns a vector that is equal and
 *   opposite to v, 180 degrees around. Passed two args,
 *   returns a vector that is equal to v0 - v1
 */
infinitelives.utils.vec2.sub = (function infinitelives$utils$vec2$sub(var_args){
var args33079 = [];
var len__27062__auto___33082 = arguments.length;
var i__27063__auto___33083 = (0);
while(true){
if((i__27063__auto___33083 < len__27062__auto___33082)){
args33079.push((arguments[i__27063__auto___33083]));

var G__33084 = (i__27063__auto___33083 + (1));
i__27063__auto___33083 = G__33084;
continue;
} else {
}
break;
}

var G__33081 = args33079.length;
switch (G__33081) {
case 1:
return infinitelives.utils.vec2.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return infinitelives.utils.vec2.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33079.length)].join('')));

}
});

infinitelives.utils.vec2.sub.cljs$core$IFn$_invoke$arity$1 = (function (v){
return goog.vec.Vec2.negate(v,infinitelives.utils.vec2.make.call(null));
});

infinitelives.utils.vec2.sub.cljs$core$IFn$_invoke$arity$2 = (function (v0,v1){
return goog.vec.Vec2.subtract(v0,v1,infinitelives.utils.vec2.make.call(null));
});

infinitelives.utils.vec2.sub.cljs$lang$maxFixedArity = 2;
/**
 * Returns the dot product of v0 and v1
 */
infinitelives.utils.vec2.dot = (function infinitelives$utils$vec2$dot(v0,v1){
return goog.vec.Vec2.dot(v0,v1);
});
/**
 * Returns a vector that is v, multiplied by the scalar.
 */
infinitelives.utils.vec2.scale = (function infinitelives$utils$vec2$scale(v,scalar){
return goog.vec.Vec2.scale(v,scalar,infinitelives.utils.vec2.make.call(null));
});
/**
 * Returns a vector that is v, divided by the scalar.
 */
infinitelives.utils.vec2.scale_div = (function infinitelives$utils$vec2$scale_div(v,scalar){
return goog.vec.Vec2.scale(v,((1) / scalar),infinitelives.utils.vec2.make.call(null));
});
/**
 * Returns a unit vector that points in the same direction as v
 */
infinitelives.utils.vec2.unit = (function infinitelives$utils$vec2$unit(v){
return goog.vec.Vec2.normalize(v,infinitelives.utils.vec2.make.call(null));
});
/**
 * Returns a vector that is a flipped and mirrored
 *   version of v, such that it appears in the positive quadrant
 */
infinitelives.utils.vec2.abs = (function infinitelives$utils$vec2$abs(v){
return goog.vec.Vec2.abs(v,infinitelives.utils.vec2.make.call(null));
});
/**
 * returns a unit vector indicating the direction
 *   from the tip of v0, to the tip of v1
 */
infinitelives.utils.vec2.direction = (function infinitelives$utils$vec2$direction(v0,v1){
return goog.vec.Vec2.direction(v0,v1,infinitelives.utils.vec2.make.call(null));
});
/**
 * return a vector identical to v but rotated ang radians. On a maths
 *   axis (+ve y points up) +ve ang rotation is anticlockwise. On a
 *   screen axis (+ve y points down) +ve ang rotation is clockwise.
 */
infinitelives.utils.vec2.rotate = (function infinitelives$utils$vec2$rotate(v,ang){
var cos = Math.cos(ang);
var sin = Math.sin(ang);
return infinitelives.utils.vec2.vec2.call(null,((cos * (v[(0)])) - (sin * (v[(1)]))),((cos * (v[(1)])) + (sin * (v[(0)]))));
});
/**
 * calls rotate but is hardcoded 90 degrees. Avoids calling cos and
 *   sin
 */
infinitelives.utils.vec2.rotate_90 = (function infinitelives$utils$vec2$rotate_90(v){
return infinitelives.utils.vec2.vec2.call(null,(- (v[(1)])),(v[(0)]));
});
/**
 * Return a vector pointing in a random direction, but of exactly unit
 *   length
 */
infinitelives.utils.vec2.random_unit = (function infinitelives$utils$vec2$random_unit(){
var ang = ((cljs.core.rand.call(null) * Math.PI) * (2));
return infinitelives.utils.vec2.vec2.call(null,Math.cos(ang),Math.sin(ang));
});
/**
 * return a random vector that fits entirely in the unit circle, that
 *   is, whose length is always less than or equal to one.
 */
infinitelives.utils.vec2.random = (function infinitelives$utils$vec2$random(){
var mag = Math.sqrt(cljs.core.rand.call(null));
var ang = ((cljs.core.rand.call(null) * Math.PI) * (2));
return infinitelives.utils.vec2.vec2.call(null,(mag * Math.cos(ang)),(mag * Math.sin(ang)));
});
/**
 * linearly interperet a vector between v0 and v1. f is the factor
 *   along the interpolation. f=0 is v0. f=1 is v1. f can extend outside
 *   0 and 1
 */
infinitelives.utils.vec2.lerp = (function infinitelives$utils$vec2$lerp(v0,v1,f){
return goog.vec.Vec2.lerp(v0,v1,f,infinitelives.utils.vec2.make.call(null));
});
/**
 * horrible function you shouldn't really use. Just keep working with
 *   vectors directly. Returns the angle of the vector. Answers always
 *   between 0 and 2*PI
 */
infinitelives.utils.vec2.heading = (function infinitelives$utils$vec2$heading(v){
var pi_on_2 = (Math.PI / (2));
var x = (v[(0)]);
var y = (v[(1)]);
if(cljs.core._EQ_.call(null,(0),x)){
if((y < (0))){
return ((3) * pi_on_2);
} else {
return pi_on_2;
}
} else {
if(cljs.core._EQ_.call(null,(0),y)){
if((x < (0))){
return Math.PI;
} else {
return (0);
}
} else {
if((x > (0))){
if((y > (0))){
return Math.atan((y / x));
} else {
return ((Math.PI + Math.PI) + Math.atan((y / x)));
}
} else {
return (Math.PI + Math.atan((y / x)));
}
}
}
});
infinitelives.utils.vec2.truncate = (function infinitelives$utils$vec2$truncate(v,scalar){
var len = infinitelives.utils.vec2.magnitude.call(null,v);
if((len > scalar)){
return infinitelives.utils.vec2.scale.call(null,infinitelives.utils.vec2.unit.call(null,v),scalar);
} else {
return v;
}
});
infinitelives.utils.vec2.as_vector = (function infinitelives$utils$vec2$as_vector(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(v[(0)]),(v[(1)])], null);
});
infinitelives.utils.vec2.get_x = (function infinitelives$utils$vec2$get_x(v){
return (v[(0)]);
});
infinitelives.utils.vec2.get_y = (function infinitelives$utils$vec2$get_y(v){
return (v[(1)]);
});
/**
 * Placing the tails of the two vectors together,
 * return the angle between them in radians
 */
infinitelives.utils.vec2.angle_between = (function infinitelives$utils$vec2$angle_between(v1,v2){
return Math.acos((infinitelives.utils.vec2.dot.call(null,v1,v2) / (infinitelives.utils.vec2.magnitude.call(null,v1) * infinitelives.utils.vec2.magnitude.call(null,v2))));
});
/**
 * return true if the second vector is angled as if rotated to the
 *   positive side of the first vector. Good for finding out which side
 *   of something another thing is on. In a maths axis (+ve y), 'pos' is
 *   to the left of v1. On a screen axis, 'pos' is to the right of v1.
 */
infinitelives.utils.vec2.rotated_pos_QMARK_ = (function infinitelives$utils$vec2$rotated_pos_QMARK_(v1,v2){
return (infinitelives.utils.vec2.angle_between.call(null,infinitelives.utils.vec2.rotate_90.call(null,v1),v2) < (Math.PI / (2)));
});

//# sourceMappingURL=vec2.js.map