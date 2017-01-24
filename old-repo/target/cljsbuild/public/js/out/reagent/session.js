// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__43727__auto__ = [];
var len__43720__auto___51665 = arguments.length;
var i__43721__auto___51666 = (0);
while(true){
if((i__43721__auto___51666 < len__43720__auto___51665)){
args__43727__auto__.push((arguments[i__43721__auto___51666]));

var G__51667 = (i__43721__auto___51666 + (1));
i__43721__auto___51666 = G__51667;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__51661){
var vec__51662 = p__51661;
var default$ = cljs.core.nth.call(null,vec__51662,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq51659){
var G__51660 = cljs.core.first.call(null,seq51659);
var seq51659__$1 = cljs.core.next.call(null,seq51659);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__51660,seq51659__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__43727__auto__ = [];
var len__43720__auto___51674 = arguments.length;
var i__43721__auto___51675 = (0);
while(true){
if((i__43721__auto___51675 < len__43720__auto___51674)){
args__43727__auto__.push((arguments[i__43721__auto___51675]));

var G__51676 = (i__43721__auto___51675 + (1));
i__43721__auto___51675 = G__51676;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__51670){
var vec__51671 = p__51670;
var default$ = cljs.core.nth.call(null,vec__51671,(0),null);
var or__42645__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq51668){
var G__51669 = cljs.core.first.call(null,seq51668);
var seq51668__$1 = cljs.core.next.call(null,seq51668);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__51669,seq51668__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___51679 = arguments.length;
var i__43721__auto___51680 = (0);
while(true){
if((i__43721__auto___51680 < len__43720__auto___51679)){
args__43727__auto__.push((arguments[i__43721__auto___51680]));

var G__51681 = (i__43721__auto___51680 + (1));
i__43721__auto___51680 = G__51681;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq51677){
var G__51678 = cljs.core.first.call(null,seq51677);
var seq51677__$1 = cljs.core.next.call(null,seq51677);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51678,seq51677__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___51688 = arguments.length;
var i__43721__auto___51689 = (0);
while(true){
if((i__43721__auto___51689 < len__43720__auto___51688)){
args__43727__auto__.push((arguments[i__43721__auto___51689]));

var G__51690 = (i__43721__auto___51689 + (1));
i__43721__auto___51689 = G__51690;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__51684){
var vec__51685 = p__51684;
var default$ = cljs.core.nth.call(null,vec__51685,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq51682){
var G__51683 = cljs.core.first.call(null,seq51682);
var seq51682__$1 = cljs.core.next.call(null,seq51682);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51683,seq51682__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___51697 = arguments.length;
var i__43721__auto___51698 = (0);
while(true){
if((i__43721__auto___51698 < len__43720__auto___51697)){
args__43727__auto__.push((arguments[i__43721__auto___51698]));

var G__51699 = (i__43721__auto___51698 + (1));
i__43721__auto___51698 = G__51699;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__51693){
var vec__51694 = p__51693;
var default$ = cljs.core.nth.call(null,vec__51694,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq51691){
var G__51692 = cljs.core.first.call(null,seq51691);
var seq51691__$1 = cljs.core.next.call(null,seq51691);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51692,seq51691__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___51704 = arguments.length;
var i__43721__auto___51705 = (0);
while(true){
if((i__43721__auto___51705 < len__43720__auto___51704)){
args__43727__auto__.push((arguments[i__43721__auto___51705]));

var G__51706 = (i__43721__auto___51705 + (1));
i__43721__auto___51705 = G__51706;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((2) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__43728__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__51700_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__51700_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq51701){
var G__51702 = cljs.core.first.call(null,seq51701);
var seq51701__$1 = cljs.core.next.call(null,seq51701);
var G__51703 = cljs.core.first.call(null,seq51701__$1);
var seq51701__$2 = cljs.core.next.call(null,seq51701__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51702,G__51703,seq51701__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___51711 = arguments.length;
var i__43721__auto___51712 = (0);
while(true){
if((i__43721__auto___51712 < len__43720__auto___51711)){
args__43727__auto__.push((arguments[i__43721__auto___51712]));

var G__51713 = (i__43721__auto___51712 + (1));
i__43721__auto___51712 = G__51713;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((2) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__43728__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__51707_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__51707_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq51708){
var G__51709 = cljs.core.first.call(null,seq51708);
var seq51708__$1 = cljs.core.next.call(null,seq51708);
var G__51710 = cljs.core.first.call(null,seq51708__$1);
var seq51708__$2 = cljs.core.next.call(null,seq51708__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51709,G__51710,seq51708__$2);
});


//# sourceMappingURL=session.js.map