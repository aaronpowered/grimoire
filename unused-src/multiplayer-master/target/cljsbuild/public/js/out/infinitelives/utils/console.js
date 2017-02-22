// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.utils.console');
goog.require('cljs.core');
infinitelives.utils.console.log = (function infinitelives$utils$console$log(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33054 = arguments.length;
var i__27063__auto___33055 = (0);
while(true){
if((i__27063__auto___33055 < len__27062__auto___33054)){
args__27069__auto__.push((arguments[i__27063__auto___33055]));

var G__33056 = (i__27063__auto___33055 + (1));
i__27063__auto___33055 = G__33056;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((0) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((0)),(0))):null);
return infinitelives.utils.console.log.cljs$core$IFn$_invoke$arity$variadic(argseq__27070__auto__);
});

infinitelives.utils.console.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){

console.log.apply(console,cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,args)));

return cljs.core.last.call(null,args);
});

infinitelives.utils.console.log.cljs$lang$maxFixedArity = (0);

infinitelives.utils.console.log.cljs$lang$applyTo = (function (seq33053){
return infinitelives.utils.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33053));
});

//# sourceMappingURL=console.js.map