// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33465 = arguments.length;
var i__27063__auto___33466 = (0);
while(true){
if((i__27063__auto___33466 < len__27062__auto___33465)){
args__27069__auto__.push((arguments[i__27063__auto___33466]));

var G__33467 = (i__27063__auto___33466 + (1));
i__27063__auto___33466 = G__33467;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33463){
var vec__33464 = p__33463;
var default$ = cljs.core.nth.call(null,vec__33464,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq33461){
var G__33462 = cljs.core.first.call(null,seq33461);
var seq33461__$1 = cljs.core.next.call(null,seq33461);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__33462,seq33461__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33472 = arguments.length;
var i__27063__auto___33473 = (0);
while(true){
if((i__27063__auto___33473 < len__27062__auto___33472)){
args__27069__auto__.push((arguments[i__27063__auto___33473]));

var G__33474 = (i__27063__auto___33473 + (1));
i__27063__auto___33473 = G__33474;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33470){
var vec__33471 = p__33470;
var default$ = cljs.core.nth.call(null,vec__33471,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq33468){
var G__33469 = cljs.core.first.call(null,seq33468);
var seq33468__$1 = cljs.core.next.call(null,seq33468);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__33469,seq33468__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33477 = arguments.length;
var i__27063__auto___33478 = (0);
while(true){
if((i__27063__auto___33478 < len__27062__auto___33477)){
args__27069__auto__.push((arguments[i__27063__auto___33478]));

var G__33479 = (i__27063__auto___33478 + (1));
i__27063__auto___33478 = G__33479;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq33475){
var G__33476 = cljs.core.first.call(null,seq33475);
var seq33475__$1 = cljs.core.next.call(null,seq33475);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33476,seq33475__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33480_SHARP_){
return cljs.core.assoc_in.call(null,p1__33480_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33485 = arguments.length;
var i__27063__auto___33486 = (0);
while(true){
if((i__27063__auto___33486 < len__27062__auto___33485)){
args__27069__auto__.push((arguments[i__27063__auto___33486]));

var G__33487 = (i__27063__auto___33486 + (1));
i__27063__auto___33486 = G__33487;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33483){
var vec__33484 = p__33483;
var default$ = cljs.core.nth.call(null,vec__33484,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq33481){
var G__33482 = cljs.core.first.call(null,seq33481);
var seq33481__$1 = cljs.core.next.call(null,seq33481);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33482,seq33481__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33492 = arguments.length;
var i__27063__auto___33493 = (0);
while(true){
if((i__27063__auto___33493 < len__27062__auto___33492)){
args__27069__auto__.push((arguments[i__27063__auto___33493]));

var G__33494 = (i__27063__auto___33493 + (1));
i__27063__auto___33493 = G__33494;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33490){
var vec__33491 = p__33490;
var default$ = cljs.core.nth.call(null,vec__33491,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq33488){
var G__33489 = cljs.core.first.call(null,seq33488);
var seq33488__$1 = cljs.core.next.call(null,seq33488);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33489,seq33488__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33499 = arguments.length;
var i__27063__auto___33500 = (0);
while(true){
if((i__27063__auto___33500 < len__27062__auto___33499)){
args__27069__auto__.push((arguments[i__27063__auto___33500]));

var G__33501 = (i__27063__auto___33500 + (1));
i__27063__auto___33500 = G__33501;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((2) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27070__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33495_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__33495_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq33496){
var G__33497 = cljs.core.first.call(null,seq33496);
var seq33496__$1 = cljs.core.next.call(null,seq33496);
var G__33498 = cljs.core.first.call(null,seq33496__$1);
var seq33496__$2 = cljs.core.next.call(null,seq33496__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33497,G__33498,seq33496__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33506 = arguments.length;
var i__27063__auto___33507 = (0);
while(true){
if((i__27063__auto___33507 < len__27062__auto___33506)){
args__27069__auto__.push((arguments[i__27063__auto___33507]));

var G__33508 = (i__27063__auto___33507 + (1));
i__27063__auto___33507 = G__33508;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((2) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27070__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33502_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__33502_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq33503){
var G__33504 = cljs.core.first.call(null,seq33503);
var seq33503__$1 = cljs.core.next.call(null,seq33503);
var G__33505 = cljs.core.first.call(null,seq33503__$1);
var seq33503__$2 = cljs.core.next.call(null,seq33503__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33504,G__33505,seq33503__$2);
});

//# sourceMappingURL=session.js.map