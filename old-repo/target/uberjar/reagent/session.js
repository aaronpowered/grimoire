// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14844 = arguments.length;
var i__7490__auto___14845 = (0);
while(true){
if((i__7490__auto___14845 < len__7489__auto___14844)){
args__7496__auto__.push((arguments[i__7490__auto___14845]));

var G__14846 = (i__7490__auto___14845 + (1));
i__7490__auto___14845 = G__14846;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14840){
var vec__14841 = p__14840;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14841,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a)) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14838){
var G__14839 = cljs.core.first(seq14838);
var seq14838__$1 = cljs.core.next(seq14838);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14839,seq14838__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14855 = arguments.length;
var i__7490__auto___14856 = (0);
while(true){
if((i__7490__auto___14856 < len__7489__auto___14855)){
args__7496__auto__.push((arguments[i__7490__auto___14856]));

var G__14857 = (i__7490__auto___14856 + (1));
i__7490__auto___14856 = G__14857;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14849){
var vec__14850 = p__14849;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14850,(0),null);
var or__6414__auto__ = (function (){var G__14854 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14854) : cljs.core.deref.call(null,G__14854));
})();
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14847){
var G__14848 = cljs.core.first(seq14847);
var seq14847__$1 = cljs.core.next(seq14847);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14848,seq14847__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14860 = arguments.length;
var i__7490__auto___14861 = (0);
while(true){
if((i__7490__auto___14861 < len__7489__auto___14860)){
args__7496__auto__.push((arguments[i__7490__auto___14861]));

var G__14862 = (i__7490__auto___14861 + (1));
i__7490__auto___14861 = G__14862;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14858){
var G__14859 = cljs.core.first(seq14858);
var seq14858__$1 = cljs.core.next(seq14858);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14859,seq14858__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__14865 = reagent.session.state;
var G__14866 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14865,G__14866) : cljs.core.reset_BANG_.call(null,G__14865,G__14866));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14873 = arguments.length;
var i__7490__auto___14874 = (0);
while(true){
if((i__7490__auto___14874 < len__7489__auto___14873)){
args__7496__auto__.push((arguments[i__7490__auto___14874]));

var G__14875 = (i__7490__auto___14874 + (1));
i__7490__auto___14874 = G__14875;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14869){
var vec__14870 = p__14869;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14870,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14867){
var G__14868 = cljs.core.first(seq14867);
var seq14867__$1 = cljs.core.next(seq14867);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14868,seq14867__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14882 = arguments.length;
var i__7490__auto___14883 = (0);
while(true){
if((i__7490__auto___14883 < len__7489__auto___14882)){
args__7496__auto__.push((arguments[i__7490__auto___14883]));

var G__14884 = (i__7490__auto___14883 + (1));
i__7490__auto___14883 = G__14884;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14878){
var vec__14879 = p__14878;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14879,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq14876){
var G__14877 = cljs.core.first(seq14876);
var seq14876__$1 = cljs.core.next(seq14876);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14877,seq14876__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14889 = arguments.length;
var i__7490__auto___14890 = (0);
while(true){
if((i__7490__auto___14890 < len__7489__auto___14889)){
args__7496__auto__.push((arguments[i__7490__auto___14890]));

var G__14891 = (i__7490__auto___14890 + (1));
i__7490__auto___14890 = G__14891;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14885_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__14885_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq14886){
var G__14887 = cljs.core.first(seq14886);
var seq14886__$1 = cljs.core.next(seq14886);
var G__14888 = cljs.core.first(seq14886__$1);
var seq14886__$2 = cljs.core.next(seq14886__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14887,G__14888,seq14886__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14896 = arguments.length;
var i__7490__auto___14897 = (0);
while(true){
if((i__7490__auto___14897 < len__7489__auto___14896)){
args__7496__auto__.push((arguments[i__7490__auto___14897]));

var G__14898 = (i__7490__auto___14897 + (1));
i__7490__auto___14897 = G__14898;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14892_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__14892_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq14893){
var G__14894 = cljs.core.first(seq14893);
var seq14893__$1 = cljs.core.next(seq14893);
var G__14895 = cljs.core.first(seq14893__$1);
var seq14893__$2 = cljs.core.next(seq14893__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14894,G__14895,seq14893__$2);
});

