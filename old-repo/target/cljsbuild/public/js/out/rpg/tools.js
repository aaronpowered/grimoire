// Compiled by ClojureScript 1.9.229 {}
goog.provide('rpg.tools');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('ajax.core');
goog.require('cljs.reader');
rpg.tools.round = (function rpg$tools$round(var_args){
var args__43727__auto__ = [];
var len__43720__auto___55073 = arguments.length;
var i__43721__auto___55074 = (0);
while(true){
if((i__43721__auto___55074 < len__43720__auto___55073)){
args__43727__auto__.push((arguments[i__43721__auto___55074]));

var G__55075 = (i__43721__auto___55074 + (1));
i__43721__auto___55074 = G__55075;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return rpg.tools.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

rpg.tools.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__55070){
var map__55071 = p__55070;
var map__55071__$1 = ((((!((map__55071 == null)))?((((map__55071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55071):map__55071);
var p = cljs.core.get.call(null,map__55071__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478));
if(cljs.core.truth_(p)){
var scale = Math.pow((10),p);
return (Math.round((x * scale)) / scale);
} else {
return Math.round(x);
}
});

rpg.tools.round.cljs$lang$maxFixedArity = (1);

rpg.tools.round.cljs$lang$applyTo = (function (seq55068){
var G__55069 = cljs.core.first.call(null,seq55068);
var seq55068__$1 = cljs.core.next.call(null,seq55068);
return rpg.tools.round.cljs$core$IFn$_invoke$arity$variadic(G__55069,seq55068__$1);
});

rpg.tools.timer = (function rpg$tools$timer(){
var seconds_elapsed = reagent.core.atom.call(null,(0));
return ((function (seconds_elapsed){
return (function (){
setTimeout(((function (seconds_elapsed){
return (function (){
return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
});})(seconds_elapsed))
,(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),rpg.tools.round.call(null,(cljs.core.deref.call(null,seconds_elapsed) / (60)),new cljs.core.Keyword(null,"precision","precision",-1175707478),(1))," percet t\u00F6lt\u00F6tt\u00E9l eddig ezen az oldalon."], null);
});
;})(seconds_elapsed))
});
rpg.tools.container = (function rpg$tools$container(var_args){
var args55076 = [];
var len__43720__auto___55079 = arguments.length;
var i__43721__auto___55080 = (0);
while(true){
if((i__43721__auto___55080 < len__43720__auto___55079)){
args55076.push((arguments[i__43721__auto___55080]));

var G__55081 = (i__43721__auto___55080 + (1));
i__43721__auto___55080 = G__55081;
continue;
} else {
}
break;
}

var G__55078 = args55076.length;
switch (G__55078) {
case 3:
return rpg.tools.container.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return rpg.tools.container.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55076.length)].join('')));

}
});

rpg.tools.container.cljs$core$IFn$_invoke$arity$3 = (function (actual,key_name,edn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),cljs.core.map_indexed.call(null,(function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)),cljs.core.str(": ")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(a)).call(null,cljs.core.keyword.call(null,key_name).call(null,cljs.core.deref.call(null,actual)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}),edn),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u00C1tlag: ",rpg.tools.round.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (a){
return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(a)).call(null,cljs.core.keyword.call(null,key_name).call(null,cljs.core.deref.call(null,actual)));
}),edn)) / (10)))], null)], null);
});

rpg.tools.container.cljs$core$IFn$_invoke$arity$2 = (function (actual,key_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),cljs.core.map_indexed.call(null,(function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),a], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}),cljs.core.keyword.call(null,key_name).call(null,cljs.core.deref.call(null,actual)))], null);
});

rpg.tools.container.cljs$lang$maxFixedArity = 3;

rpg.tools.atom_input = (function rpg$tools$atom_input(var_args){
var args55085 = [];
var len__43720__auto___55088 = arguments.length;
var i__43721__auto___55089 = (0);
while(true){
if((i__43721__auto___55089 < len__43720__auto___55088)){
args55085.push((arguments[i__43721__auto___55089]));

var G__55090 = (i__43721__auto___55089 + (1));
i__43721__auto___55089 = G__55090;
continue;
} else {
}
break;
}

var G__55087 = args55085.length;
switch (G__55087) {
case 1:
return rpg.tools.atom_input.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rpg.tools.atom_input.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55085.length)].join('')));

}
});

rpg.tools.atom_input.cljs$core$IFn$_invoke$arity$1 = (function (value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,value)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55083_SHARP_){
return cljs.core.swap_BANG_.call(null,value,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__55083_SHARP_.target.value);
})], null)], null);
});

rpg.tools.atom_input.cljs$core$IFn$_invoke$arity$2 = (function (tinput,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),tinput,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55084_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__55084_SHARP_.target.value);
})], null)], null);
});

rpg.tools.atom_input.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=tools.js.map