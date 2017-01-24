// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__49851__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49852__i = 0, G__49852__a = new Array(arguments.length -  0);
while (G__49852__i < G__49852__a.length) {G__49852__a[G__49852__i] = arguments[G__49852__i + 0]; ++G__49852__i;}
  args = new cljs.core.IndexedSeq(G__49852__a,0);
} 
return G__49851__delegate.call(this,args);};
G__49851.cljs$lang$maxFixedArity = 0;
G__49851.cljs$lang$applyTo = (function (arglist__49853){
var args = cljs.core.seq(arglist__49853);
return G__49851__delegate(args);
});
G__49851.cljs$core$IFn$_invoke$arity$variadic = G__49851__delegate;
return G__49851;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49854__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49855__i = 0, G__49855__a = new Array(arguments.length -  0);
while (G__49855__i < G__49855__a.length) {G__49855__a[G__49855__i] = arguments[G__49855__i + 0]; ++G__49855__i;}
  args = new cljs.core.IndexedSeq(G__49855__a,0);
} 
return G__49854__delegate.call(this,args);};
G__49854.cljs$lang$maxFixedArity = 0;
G__49854.cljs$lang$applyTo = (function (arglist__49856){
var args = cljs.core.seq(arglist__49856);
return G__49854__delegate(args);
});
G__49854.cljs$core$IFn$_invoke$arity$variadic = G__49854__delegate;
return G__49854;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map