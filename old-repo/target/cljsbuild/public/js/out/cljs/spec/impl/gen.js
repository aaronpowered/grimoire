// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52856 = arguments.length;
var i__43721__auto___52857 = (0);
while(true){
if((i__43721__auto___52857 < len__43720__auto___52856)){
args__43727__auto__.push((arguments[i__43721__auto___52857]));

var G__52858 = (i__43721__auto___52857 + (1));
i__43721__auto___52857 = G__52858;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq52855){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52855));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52860 = arguments.length;
var i__43721__auto___52861 = (0);
while(true){
if((i__43721__auto___52861 < len__43720__auto___52860)){
args__43727__auto__.push((arguments[i__43721__auto___52861]));

var G__52862 = (i__43721__auto___52861 + (1));
i__43721__auto___52861 = G__52862;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq52859){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52859));
});

var g_QMARK__52863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_52864 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52863){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52863))
,null));
var mkg_52865 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52863,g_52864){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52863,g_52864))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__52863,g_52864,mkg_52865){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__52863).call(null,x);
});})(g_QMARK__52863,g_52864,mkg_52865))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__52863,g_52864,mkg_52865){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_52865).call(null,gfn);
});})(g_QMARK__52863,g_52864,mkg_52865))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__52863,g_52864,mkg_52865){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_52864).call(null,generator);
});})(g_QMARK__52863,g_52864,mkg_52865))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__52827__auto___52884 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__52827__auto___52884){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52885 = arguments.length;
var i__43721__auto___52886 = (0);
while(true){
if((i__43721__auto___52886 < len__43720__auto___52885)){
args__43727__auto__.push((arguments[i__43721__auto___52886]));

var G__52887 = (i__43721__auto___52886 + (1));
i__43721__auto___52886 = G__52887;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52884))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52884){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52884),args);
});})(g__52827__auto___52884))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__52827__auto___52884){
return (function (seq52866){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52866));
});})(g__52827__auto___52884))
;


var g__52827__auto___52888 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__52827__auto___52888){
return (function cljs$spec$impl$gen$list(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52889 = arguments.length;
var i__43721__auto___52890 = (0);
while(true){
if((i__43721__auto___52890 < len__43720__auto___52889)){
args__43727__auto__.push((arguments[i__43721__auto___52890]));

var G__52891 = (i__43721__auto___52890 + (1));
i__43721__auto___52890 = G__52891;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52888))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52888){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52888),args);
});})(g__52827__auto___52888))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__52827__auto___52888){
return (function (seq52867){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52867));
});})(g__52827__auto___52888))
;


var g__52827__auto___52892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__52827__auto___52892){
return (function cljs$spec$impl$gen$map(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52893 = arguments.length;
var i__43721__auto___52894 = (0);
while(true){
if((i__43721__auto___52894 < len__43720__auto___52893)){
args__43727__auto__.push((arguments[i__43721__auto___52894]));

var G__52895 = (i__43721__auto___52894 + (1));
i__43721__auto___52894 = G__52895;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52892))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52892){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52892),args);
});})(g__52827__auto___52892))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__52827__auto___52892){
return (function (seq52868){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52868));
});})(g__52827__auto___52892))
;


var g__52827__auto___52896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__52827__auto___52896){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52897 = arguments.length;
var i__43721__auto___52898 = (0);
while(true){
if((i__43721__auto___52898 < len__43720__auto___52897)){
args__43727__auto__.push((arguments[i__43721__auto___52898]));

var G__52899 = (i__43721__auto___52898 + (1));
i__43721__auto___52898 = G__52899;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52896))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52896),args);
});})(g__52827__auto___52896))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__52827__auto___52896){
return (function (seq52869){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52869));
});})(g__52827__auto___52896))
;


var g__52827__auto___52900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__52827__auto___52900){
return (function cljs$spec$impl$gen$set(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52901 = arguments.length;
var i__43721__auto___52902 = (0);
while(true){
if((i__43721__auto___52902 < len__43720__auto___52901)){
args__43727__auto__.push((arguments[i__43721__auto___52902]));

var G__52903 = (i__43721__auto___52902 + (1));
i__43721__auto___52902 = G__52903;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52900))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52900){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52900),args);
});})(g__52827__auto___52900))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__52827__auto___52900){
return (function (seq52870){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52870));
});})(g__52827__auto___52900))
;


var g__52827__auto___52904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__52827__auto___52904){
return (function cljs$spec$impl$gen$vector(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52905 = arguments.length;
var i__43721__auto___52906 = (0);
while(true){
if((i__43721__auto___52906 < len__43720__auto___52905)){
args__43727__auto__.push((arguments[i__43721__auto___52906]));

var G__52907 = (i__43721__auto___52906 + (1));
i__43721__auto___52906 = G__52907;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52904))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52904){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52904),args);
});})(g__52827__auto___52904))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__52827__auto___52904){
return (function (seq52871){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52871));
});})(g__52827__auto___52904))
;


var g__52827__auto___52908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__52827__auto___52908){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52909 = arguments.length;
var i__43721__auto___52910 = (0);
while(true){
if((i__43721__auto___52910 < len__43720__auto___52909)){
args__43727__auto__.push((arguments[i__43721__auto___52910]));

var G__52911 = (i__43721__auto___52910 + (1));
i__43721__auto___52910 = G__52911;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52908))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52908){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52908),args);
});})(g__52827__auto___52908))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__52827__auto___52908){
return (function (seq52872){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52872));
});})(g__52827__auto___52908))
;


var g__52827__auto___52912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__52827__auto___52912){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52913 = arguments.length;
var i__43721__auto___52914 = (0);
while(true){
if((i__43721__auto___52914 < len__43720__auto___52913)){
args__43727__auto__.push((arguments[i__43721__auto___52914]));

var G__52915 = (i__43721__auto___52914 + (1));
i__43721__auto___52914 = G__52915;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52912))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52912){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52912),args);
});})(g__52827__auto___52912))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__52827__auto___52912){
return (function (seq52873){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52873));
});})(g__52827__auto___52912))
;


var g__52827__auto___52916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__52827__auto___52916){
return (function cljs$spec$impl$gen$elements(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52917 = arguments.length;
var i__43721__auto___52918 = (0);
while(true){
if((i__43721__auto___52918 < len__43720__auto___52917)){
args__43727__auto__.push((arguments[i__43721__auto___52918]));

var G__52919 = (i__43721__auto___52918 + (1));
i__43721__auto___52918 = G__52919;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52916))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52916){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52916),args);
});})(g__52827__auto___52916))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__52827__auto___52916){
return (function (seq52874){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52874));
});})(g__52827__auto___52916))
;


var g__52827__auto___52920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__52827__auto___52920){
return (function cljs$spec$impl$gen$bind(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52921 = arguments.length;
var i__43721__auto___52922 = (0);
while(true){
if((i__43721__auto___52922 < len__43720__auto___52921)){
args__43727__auto__.push((arguments[i__43721__auto___52922]));

var G__52923 = (i__43721__auto___52922 + (1));
i__43721__auto___52922 = G__52923;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52920))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52920),args);
});})(g__52827__auto___52920))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__52827__auto___52920){
return (function (seq52875){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52875));
});})(g__52827__auto___52920))
;


var g__52827__auto___52924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__52827__auto___52924){
return (function cljs$spec$impl$gen$choose(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52925 = arguments.length;
var i__43721__auto___52926 = (0);
while(true){
if((i__43721__auto___52926 < len__43720__auto___52925)){
args__43727__auto__.push((arguments[i__43721__auto___52926]));

var G__52927 = (i__43721__auto___52926 + (1));
i__43721__auto___52926 = G__52927;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52924))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52924),args);
});})(g__52827__auto___52924))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__52827__auto___52924){
return (function (seq52876){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52876));
});})(g__52827__auto___52924))
;


var g__52827__auto___52928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__52827__auto___52928){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52929 = arguments.length;
var i__43721__auto___52930 = (0);
while(true){
if((i__43721__auto___52930 < len__43720__auto___52929)){
args__43727__auto__.push((arguments[i__43721__auto___52930]));

var G__52931 = (i__43721__auto___52930 + (1));
i__43721__auto___52930 = G__52931;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52928))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52928),args);
});})(g__52827__auto___52928))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__52827__auto___52928){
return (function (seq52877){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52877));
});})(g__52827__auto___52928))
;


var g__52827__auto___52932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__52827__auto___52932){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52933 = arguments.length;
var i__43721__auto___52934 = (0);
while(true){
if((i__43721__auto___52934 < len__43720__auto___52933)){
args__43727__auto__.push((arguments[i__43721__auto___52934]));

var G__52935 = (i__43721__auto___52934 + (1));
i__43721__auto___52934 = G__52935;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52932))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52932),args);
});})(g__52827__auto___52932))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__52827__auto___52932){
return (function (seq52878){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52878));
});})(g__52827__auto___52932))
;


var g__52827__auto___52936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__52827__auto___52936){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52937 = arguments.length;
var i__43721__auto___52938 = (0);
while(true){
if((i__43721__auto___52938 < len__43720__auto___52937)){
args__43727__auto__.push((arguments[i__43721__auto___52938]));

var G__52939 = (i__43721__auto___52938 + (1));
i__43721__auto___52938 = G__52939;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52936))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52936),args);
});})(g__52827__auto___52936))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__52827__auto___52936){
return (function (seq52879){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52879));
});})(g__52827__auto___52936))
;


var g__52827__auto___52940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__52827__auto___52940){
return (function cljs$spec$impl$gen$sample(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52941 = arguments.length;
var i__43721__auto___52942 = (0);
while(true){
if((i__43721__auto___52942 < len__43720__auto___52941)){
args__43727__auto__.push((arguments[i__43721__auto___52942]));

var G__52943 = (i__43721__auto___52942 + (1));
i__43721__auto___52942 = G__52943;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52940))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52940),args);
});})(g__52827__auto___52940))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__52827__auto___52940){
return (function (seq52880){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52880));
});})(g__52827__auto___52940))
;


var g__52827__auto___52944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__52827__auto___52944){
return (function cljs$spec$impl$gen$return(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52945 = arguments.length;
var i__43721__auto___52946 = (0);
while(true){
if((i__43721__auto___52946 < len__43720__auto___52945)){
args__43727__auto__.push((arguments[i__43721__auto___52946]));

var G__52947 = (i__43721__auto___52946 + (1));
i__43721__auto___52946 = G__52947;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52944))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52944),args);
});})(g__52827__auto___52944))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__52827__auto___52944){
return (function (seq52881){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52881));
});})(g__52827__auto___52944))
;


var g__52827__auto___52948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__52827__auto___52948){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52949 = arguments.length;
var i__43721__auto___52950 = (0);
while(true){
if((i__43721__auto___52950 < len__43720__auto___52949)){
args__43727__auto__.push((arguments[i__43721__auto___52950]));

var G__52951 = (i__43721__auto___52950 + (1));
i__43721__auto___52950 = G__52951;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52948))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52948),args);
});})(g__52827__auto___52948))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__52827__auto___52948){
return (function (seq52882){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52882));
});})(g__52827__auto___52948))
;


var g__52827__auto___52952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__52827__auto___52952){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52953 = arguments.length;
var i__43721__auto___52954 = (0);
while(true){
if((i__43721__auto___52954 < len__43720__auto___52953)){
args__43727__auto__.push((arguments[i__43721__auto___52954]));

var G__52955 = (i__43721__auto___52954 + (1));
i__43721__auto___52954 = G__52955;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52827__auto___52952))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52827__auto___52952){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52827__auto___52952),args);
});})(g__52827__auto___52952))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__52827__auto___52952){
return (function (seq52883){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52883));
});})(g__52827__auto___52952))
;

var g__52840__auto___52977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__52840__auto___52977){
return (function cljs$spec$impl$gen$any(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52978 = arguments.length;
var i__43721__auto___52979 = (0);
while(true){
if((i__43721__auto___52979 < len__43720__auto___52978)){
args__43727__auto__.push((arguments[i__43721__auto___52979]));

var G__52980 = (i__43721__auto___52979 + (1));
i__43721__auto___52979 = G__52980;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___52977))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___52977){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___52977);
});})(g__52840__auto___52977))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__52840__auto___52977){
return (function (seq52956){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52956));
});})(g__52840__auto___52977))
;


var g__52840__auto___52981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__52840__auto___52981){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52982 = arguments.length;
var i__43721__auto___52983 = (0);
while(true){
if((i__43721__auto___52983 < len__43720__auto___52982)){
args__43727__auto__.push((arguments[i__43721__auto___52983]));

var G__52984 = (i__43721__auto___52983 + (1));
i__43721__auto___52983 = G__52984;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___52981))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___52981){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___52981);
});})(g__52840__auto___52981))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__52840__auto___52981){
return (function (seq52957){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52957));
});})(g__52840__auto___52981))
;


var g__52840__auto___52985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__52840__auto___52985){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52986 = arguments.length;
var i__43721__auto___52987 = (0);
while(true){
if((i__43721__auto___52987 < len__43720__auto___52986)){
args__43727__auto__.push((arguments[i__43721__auto___52987]));

var G__52988 = (i__43721__auto___52987 + (1));
i__43721__auto___52987 = G__52988;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___52985))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___52985){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___52985);
});})(g__52840__auto___52985))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__52840__auto___52985){
return (function (seq52958){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52958));
});})(g__52840__auto___52985))
;


var g__52840__auto___52989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__52840__auto___52989){
return (function cljs$spec$impl$gen$char(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52990 = arguments.length;
var i__43721__auto___52991 = (0);
while(true){
if((i__43721__auto___52991 < len__43720__auto___52990)){
args__43727__auto__.push((arguments[i__43721__auto___52991]));

var G__52992 = (i__43721__auto___52991 + (1));
i__43721__auto___52991 = G__52992;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___52989))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___52989){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___52989);
});})(g__52840__auto___52989))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__52840__auto___52989){
return (function (seq52959){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52959));
});})(g__52840__auto___52989))
;


var g__52840__auto___52993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__52840__auto___52993){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52994 = arguments.length;
var i__43721__auto___52995 = (0);
while(true){
if((i__43721__auto___52995 < len__43720__auto___52994)){
args__43727__auto__.push((arguments[i__43721__auto___52995]));

var G__52996 = (i__43721__auto___52995 + (1));
i__43721__auto___52995 = G__52996;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___52993))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___52993){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___52993);
});})(g__52840__auto___52993))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__52840__auto___52993){
return (function (seq52960){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52960));
});})(g__52840__auto___52993))
;


var g__52840__auto___52997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__52840__auto___52997){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__43727__auto__ = [];
var len__43720__auto___52998 = arguments.length;
var i__43721__auto___52999 = (0);
while(true){
if((i__43721__auto___52999 < len__43720__auto___52998)){
args__43727__auto__.push((arguments[i__43721__auto___52999]));

var G__53000 = (i__43721__auto___52999 + (1));
i__43721__auto___52999 = G__53000;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___52997))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___52997){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___52997);
});})(g__52840__auto___52997))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__52840__auto___52997){
return (function (seq52961){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52961));
});})(g__52840__auto___52997))
;


var g__52840__auto___53001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__52840__auto___53001){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53002 = arguments.length;
var i__43721__auto___53003 = (0);
while(true){
if((i__43721__auto___53003 < len__43720__auto___53002)){
args__43727__auto__.push((arguments[i__43721__auto___53003]));

var G__53004 = (i__43721__auto___53003 + (1));
i__43721__auto___53003 = G__53004;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53001))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53001){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53001);
});})(g__52840__auto___53001))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__52840__auto___53001){
return (function (seq52962){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52962));
});})(g__52840__auto___53001))
;


var g__52840__auto___53005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__52840__auto___53005){
return (function cljs$spec$impl$gen$double(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53006 = arguments.length;
var i__43721__auto___53007 = (0);
while(true){
if((i__43721__auto___53007 < len__43720__auto___53006)){
args__43727__auto__.push((arguments[i__43721__auto___53007]));

var G__53008 = (i__43721__auto___53007 + (1));
i__43721__auto___53007 = G__53008;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53005))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53005){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53005);
});})(g__52840__auto___53005))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__52840__auto___53005){
return (function (seq52963){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52963));
});})(g__52840__auto___53005))
;


var g__52840__auto___53009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__52840__auto___53009){
return (function cljs$spec$impl$gen$int(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53010 = arguments.length;
var i__43721__auto___53011 = (0);
while(true){
if((i__43721__auto___53011 < len__43720__auto___53010)){
args__43727__auto__.push((arguments[i__43721__auto___53011]));

var G__53012 = (i__43721__auto___53011 + (1));
i__43721__auto___53011 = G__53012;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53009))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53009){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53009);
});})(g__52840__auto___53009))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__52840__auto___53009){
return (function (seq52964){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52964));
});})(g__52840__auto___53009))
;


var g__52840__auto___53013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__52840__auto___53013){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53014 = arguments.length;
var i__43721__auto___53015 = (0);
while(true){
if((i__43721__auto___53015 < len__43720__auto___53014)){
args__43727__auto__.push((arguments[i__43721__auto___53015]));

var G__53016 = (i__43721__auto___53015 + (1));
i__43721__auto___53015 = G__53016;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53013))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53013){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53013);
});})(g__52840__auto___53013))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__52840__auto___53013){
return (function (seq52965){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52965));
});})(g__52840__auto___53013))
;


var g__52840__auto___53017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__52840__auto___53017){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53018 = arguments.length;
var i__43721__auto___53019 = (0);
while(true){
if((i__43721__auto___53019 < len__43720__auto___53018)){
args__43727__auto__.push((arguments[i__43721__auto___53019]));

var G__53020 = (i__43721__auto___53019 + (1));
i__43721__auto___53019 = G__53020;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53017))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53017){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53017);
});})(g__52840__auto___53017))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__52840__auto___53017){
return (function (seq52966){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52966));
});})(g__52840__auto___53017))
;


var g__52840__auto___53021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__52840__auto___53021){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53022 = arguments.length;
var i__43721__auto___53023 = (0);
while(true){
if((i__43721__auto___53023 < len__43720__auto___53022)){
args__43727__auto__.push((arguments[i__43721__auto___53023]));

var G__53024 = (i__43721__auto___53023 + (1));
i__43721__auto___53023 = G__53024;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53021))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53021){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53021);
});})(g__52840__auto___53021))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__52840__auto___53021){
return (function (seq52967){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52967));
});})(g__52840__auto___53021))
;


var g__52840__auto___53025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__52840__auto___53025){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53026 = arguments.length;
var i__43721__auto___53027 = (0);
while(true){
if((i__43721__auto___53027 < len__43720__auto___53026)){
args__43727__auto__.push((arguments[i__43721__auto___53027]));

var G__53028 = (i__43721__auto___53027 + (1));
i__43721__auto___53027 = G__53028;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53025))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53025){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53025);
});})(g__52840__auto___53025))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__52840__auto___53025){
return (function (seq52968){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52968));
});})(g__52840__auto___53025))
;


var g__52840__auto___53029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__52840__auto___53029){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53030 = arguments.length;
var i__43721__auto___53031 = (0);
while(true){
if((i__43721__auto___53031 < len__43720__auto___53030)){
args__43727__auto__.push((arguments[i__43721__auto___53031]));

var G__53032 = (i__43721__auto___53031 + (1));
i__43721__auto___53031 = G__53032;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53029))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53029){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53029);
});})(g__52840__auto___53029))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__52840__auto___53029){
return (function (seq52969){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52969));
});})(g__52840__auto___53029))
;


var g__52840__auto___53033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__52840__auto___53033){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53034 = arguments.length;
var i__43721__auto___53035 = (0);
while(true){
if((i__43721__auto___53035 < len__43720__auto___53034)){
args__43727__auto__.push((arguments[i__43721__auto___53035]));

var G__53036 = (i__43721__auto___53035 + (1));
i__43721__auto___53035 = G__53036;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53033))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53033){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53033);
});})(g__52840__auto___53033))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__52840__auto___53033){
return (function (seq52970){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52970));
});})(g__52840__auto___53033))
;


var g__52840__auto___53037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__52840__auto___53037){
return (function cljs$spec$impl$gen$string(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53038 = arguments.length;
var i__43721__auto___53039 = (0);
while(true){
if((i__43721__auto___53039 < len__43720__auto___53038)){
args__43727__auto__.push((arguments[i__43721__auto___53039]));

var G__53040 = (i__43721__auto___53039 + (1));
i__43721__auto___53039 = G__53040;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53037))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53037){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53037);
});})(g__52840__auto___53037))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__52840__auto___53037){
return (function (seq52971){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52971));
});})(g__52840__auto___53037))
;


var g__52840__auto___53041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__52840__auto___53041){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53042 = arguments.length;
var i__43721__auto___53043 = (0);
while(true){
if((i__43721__auto___53043 < len__43720__auto___53042)){
args__43727__auto__.push((arguments[i__43721__auto___53043]));

var G__53044 = (i__43721__auto___53043 + (1));
i__43721__auto___53043 = G__53044;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53041))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53041){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53041);
});})(g__52840__auto___53041))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__52840__auto___53041){
return (function (seq52972){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52972));
});})(g__52840__auto___53041))
;


var g__52840__auto___53045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__52840__auto___53045){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53046 = arguments.length;
var i__43721__auto___53047 = (0);
while(true){
if((i__43721__auto___53047 < len__43720__auto___53046)){
args__43727__auto__.push((arguments[i__43721__auto___53047]));

var G__53048 = (i__43721__auto___53047 + (1));
i__43721__auto___53047 = G__53048;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53045))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53045){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53045);
});})(g__52840__auto___53045))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__52840__auto___53045){
return (function (seq52973){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52973));
});})(g__52840__auto___53045))
;


var g__52840__auto___53049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__52840__auto___53049){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53050 = arguments.length;
var i__43721__auto___53051 = (0);
while(true){
if((i__43721__auto___53051 < len__43720__auto___53050)){
args__43727__auto__.push((arguments[i__43721__auto___53051]));

var G__53052 = (i__43721__auto___53051 + (1));
i__43721__auto___53051 = G__53052;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53049))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53049){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53049);
});})(g__52840__auto___53049))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__52840__auto___53049){
return (function (seq52974){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52974));
});})(g__52840__auto___53049))
;


var g__52840__auto___53053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__52840__auto___53053){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53054 = arguments.length;
var i__43721__auto___53055 = (0);
while(true){
if((i__43721__auto___53055 < len__43720__auto___53054)){
args__43727__auto__.push((arguments[i__43721__auto___53055]));

var G__53056 = (i__43721__auto___53055 + (1));
i__43721__auto___53055 = G__53056;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53053))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53053){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53053);
});})(g__52840__auto___53053))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__52840__auto___53053){
return (function (seq52975){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52975));
});})(g__52840__auto___53053))
;


var g__52840__auto___53057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__52840__auto___53057){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53058 = arguments.length;
var i__43721__auto___53059 = (0);
while(true){
if((i__43721__auto___53059 < len__43720__auto___53058)){
args__43727__auto__.push((arguments[i__43721__auto___53059]));

var G__53060 = (i__43721__auto___53059 + (1));
i__43721__auto___53059 = G__53060;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});})(g__52840__auto___53057))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52840__auto___53057){
return (function (args){
return cljs.core.deref.call(null,g__52840__auto___53057);
});})(g__52840__auto___53057))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__52840__auto___53057){
return (function (seq52976){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52976));
});})(g__52840__auto___53057))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53063 = arguments.length;
var i__43721__auto___53064 = (0);
while(true){
if((i__43721__auto___53064 < len__43720__auto___53063)){
args__43727__auto__.push((arguments[i__43721__auto___53064]));

var G__53065 = (i__43721__auto___53064 + (1));
i__43721__auto___53064 = G__53065;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__53061_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__53061_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq53062){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53062));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__53066_SHARP_){
return (new Date(p1__53066_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map