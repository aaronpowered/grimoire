// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rpg.tools');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('ajax.core');
goog.require('cljs.reader');
rpg.tools.round = (function rpg$tools$round(var_args){
var args__7496__auto__ = [];
var len__7489__auto___31028 = arguments.length;
var i__7490__auto___31029 = (0);
while(true){
if((i__7490__auto___31029 < len__7489__auto___31028)){
args__7496__auto__.push((arguments[i__7490__auto___31029]));

var G__31030 = (i__7490__auto___31029 + (1));
i__7490__auto___31029 = G__31030;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return rpg.tools.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

rpg.tools.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__31024){
var map__31025 = p__31024;
var map__31025__$1 = ((((!((map__31025 == null)))?((((map__31025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31025):map__31025);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31025__$1,cljs.core.cst$kw$precision);
if(cljs.core.truth_(p)){
var scale = Math.pow((10),p);
return ((function (){var G__31027 = (x * scale);
return Math.round(G__31027);
})() / scale);
} else {
return Math.round(x);
}
});

rpg.tools.round.cljs$lang$maxFixedArity = (1);

rpg.tools.round.cljs$lang$applyTo = (function (seq31022){
var G__31023 = cljs.core.first(seq31022);
var seq31022__$1 = cljs.core.next(seq31022);
return rpg.tools.round.cljs$core$IFn$_invoke$arity$variadic(G__31023,seq31022__$1);
});

rpg.tools.timer = (function rpg$tools$timer(){
var seconds_elapsed = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (seconds_elapsed){
return (function (){
var G__31033_31035 = ((function (seconds_elapsed){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds_elapsed,cljs.core.inc);
});})(seconds_elapsed))
;
var G__31034_31036 = (1000);
setTimeout(G__31033_31035,G__31034_31036);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,rpg.tools.round.cljs$core$IFn$_invoke$arity$variadic(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seconds_elapsed) : cljs.core.deref.call(null,seconds_elapsed)) / (60)),cljs.core.array_seq([cljs.core.cst$kw$precision,(1)], 0))," percet t\u00F6lt\u00F6tt\u00E9l eddig ezen az oldalon."], null);
});
;})(seconds_elapsed))
});
rpg.tools.container = (function rpg$tools$container(var_args){
var args31037 = [];
var len__7489__auto___31040 = arguments.length;
var i__7490__auto___31041 = (0);
while(true){
if((i__7490__auto___31041 < len__7489__auto___31040)){
args31037.push((arguments[i__7490__auto___31041]));

var G__31042 = (i__7490__auto___31041 + (1));
i__7490__auto___31041 = G__31042;
continue;
} else {
}
break;
}

var G__31039 = args31037.length;
switch (G__31039) {
case 3:
return rpg.tools.container.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return rpg.tools.container.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31037.length)].join('')));

}
});

rpg.tools.container.cljs$core$IFn$_invoke$arity$3 = (function (actual,key_name,edn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(a)),cljs.core.str(": ")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(a)).call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key_name).call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual))))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
}),edn),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\u00C1tlag: ",rpg.tools.round((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(a)).call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key_name).call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual))));
}),edn)) / (10)))], null)], null);
});

rpg.tools.container.cljs$core$IFn$_invoke$arity$2 = (function (actual,key_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,a], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
}),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key_name).call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual))))], null);
});

rpg.tools.container.cljs$lang$maxFixedArity = 3;

rpg.tools.atom_input = (function rpg$tools$atom_input(var_args){
var args31046 = [];
var len__7489__auto___31051 = arguments.length;
var i__7490__auto___31052 = (0);
while(true){
if((i__7490__auto___31052 < len__7489__auto___31051)){
args31046.push((arguments[i__7490__auto___31052]));

var G__31053 = (i__7490__auto___31052 + (1));
i__7490__auto___31052 = G__31053;
continue;
} else {
}
break;
}

var G__31048 = args31046.length;
switch (G__31048) {
case 1:
return rpg.tools.atom_input.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rpg.tools.atom_input.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31046.length)].join('')));

}
});

rpg.tools.atom_input.cljs$core$IFn$_invoke$arity$1 = (function (value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value))),cljs.core.cst$kw$on_DASH_change,(function (p1__31044_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,cljs.core.cst$kw$name,p1__31044_SHARP_.target.value);
})], null)], null);
});

rpg.tools.atom_input.cljs$core$IFn$_invoke$arity$2 = (function (tinput,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),cljs.core.cst$kw$placeholder,tinput,cljs.core.cst$kw$on_DASH_change,(function (p1__31045_SHARP_){
var G__31049 = value;
var G__31050 = p1__31045_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31049,G__31050) : cljs.core.reset_BANG_.call(null,G__31049,G__31050));
})], null)], null);
});

rpg.tools.atom_input.cljs$lang$maxFixedArity = 2;

