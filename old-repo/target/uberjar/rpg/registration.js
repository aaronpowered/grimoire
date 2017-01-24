// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rpg.registration');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('rpg.tools');
goog.require('ajax.core');
goog.require('cljs.reader');
rpg.registration.reskill = (function rpg$registration$reskill(profile,origin,o1,o2,o3,o4,o5,o6,theory,p1,p2,p3,p4,p5){
return (((((((5) + (function (){var G__31065 = (function (){var G__31066 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile));
return (origin.cljs$core$IFn$_invoke$arity$1 ? origin.cljs$core$IFn$_invoke$arity$1(G__31066) : origin.call(null,G__31066));
})();
switch (G__31065) {
case "":
return (0);

break;
case "Ismeretlen":
return o1;

break;
case "Koldus":
return o2;

break;
case "Falusi":
return o3;

break;
case "Polg\u00E1ri":
return o4;

break;
case "Nemesi":
return o5;

break;
case "Id\u0151utaz\u00F3":
return o6;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((function (){var G__31067 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile));
return (origin.cljs$core$IFn$_invoke$arity$1 ? origin.cljs$core$IFn$_invoke$arity$1(G__31067) : origin.call(null,G__31067));
})())].join('')));

}
})()) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),(function (){var G__31068 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile));
return (theory.cljs$core$IFn$_invoke$arity$1 ? theory.cljs$core$IFn$_invoke$arity$1(G__31068) : theory.call(null,G__31068));
})())),p1))?(3):(-1))) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),(function (){var G__31069 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile));
return (theory.cljs$core$IFn$_invoke$arity$1 ? theory.cljs$core$IFn$_invoke$arity$1(G__31069) : theory.call(null,G__31069));
})())),p2))?(3):(-1))) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),(function (){var G__31070 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile));
return (theory.cljs$core$IFn$_invoke$arity$1 ? theory.cljs$core$IFn$_invoke$arity$1(G__31070) : theory.call(null,G__31070));
})())),p3))?(3):(-1))) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),(function (){var G__31071 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile));
return (theory.cljs$core$IFn$_invoke$arity$1 ? theory.cljs$core$IFn$_invoke$arity$1(G__31071) : theory.call(null,G__31071));
})())),p4))?(3):(-1))) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),(function (){var G__31072 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile));
return (theory.cljs$core$IFn$_invoke$arity$1 ? theory.cljs$core$IFn$_invoke$arity$1(G__31072) : theory.call(null,G__31072));
})())),p5))?(3):(-1)));
});
rpg.registration.update_skills = (function rpg$registration$update_skills(profile){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile,cljs.core.assoc,cljs.core.cst$kw$skills,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$KTR,cljs.core.cst$kw$HAT,cljs.core.cst$kw$UGY,cljs.core.cst$kw$OSZ,cljs.core.cst$kw$ERT,cljs.core.cst$kw$BAT,cljs.core.cst$kw$GYR,cljs.core.cst$kw$IZM,cljs.core.cst$kw$BOL,cljs.core.cst$kw$SZE],[rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(0),(2),(1),(0),(-1),(0),cljs.core.cst$kw$theory,(1),(0),(0),(1),(0)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(4),(1),(0),(1),(0),(0),cljs.core.cst$kw$theory,(1),(1),(0),(1),(0)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(0),(1),(1),(1),(1),(0),cljs.core.cst$kw$theory,(1),(0),(1),(0),(1)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(1),(0),(0),(2),(1),(0),cljs.core.cst$kw$theory,(1),(0),(1),(1),(0)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(1),(0),(0),(3),(2),(1),cljs.core.cst$kw$theory,(1),(1),(1),(1),(1)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(1),(0),(0),(0),(-1),(2),cljs.core.cst$kw$theory,(0),(1),(1),(0),(1)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(2),(0),(1),(0),(0),(1),cljs.core.cst$kw$theory,(0),(1),(0),(0),(0)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(0),(1),(2),(-1),(0),(0),cljs.core.cst$kw$theory,(0),(0),(0),(1),(1)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(0),(1),(0),(3),(0),(2),cljs.core.cst$kw$theory,(0),(0),(0),(0),(0)),rpg.registration.reskill(profile,cljs.core.cst$kw$origin,(1),(3),(0),(1),(1),(-1),cljs.core.cst$kw$theory,(0),(1),(1),(0),(1))]));
});
rpg.registration.update_inventory = (function rpg$registration$update_inventory(profile,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile,cljs.core.assoc,cljs.core.cst$kw$inventory,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inventory.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31074_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__31074_SHARP_),cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile))));
}),cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)))))),cljs.core.cst$kw$inventory.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31075_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__31075_SHARP_),cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile))));
}),cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data))))))),cljs.core.cst$kw$inventory.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31076_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__31076_SHARP_),cljs.core.cst$kw$personality.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(profile) : cljs.core.deref.call(null,profile))));
}),cljs.core.cst$kw$personality.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data))))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Csodaszer"], null)));
});
rpg.registration.registration_sheet = (function rpg$registration$registration_sheet(){
var toggle = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (toggle){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$toggle_DASH_rsheet,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (toggle){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(toggle) : cljs.core.deref.call(null,toggle)))){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(toggle,false) : cljs.core.reset_BANG_.call(null,toggle,false));
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(toggle,true) : cljs.core.reset_BANG_.call(null,toggle,true));
}
});})(toggle))
], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(toggle) : cljs.core.deref.call(null,toggle)))?"m\u00E9gsem":"Regisztr\u00E1ci\u00F3")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(toggle) : cljs.core.deref.call(null,toggle)))?"rsheet":"rsheet opacity0")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,[cljs.core.str("Regisztr\u00E1ci\u00F3"),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(toggle) : cljs.core.deref.call(null,toggle)))].join('')], null)], null)], null);
});
;})(toggle))
});
rpg.registration.create_character = (function rpg$registration$create_character(actual,data){
var skills = cljs.core.cst$kw$skill.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var origins = cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var personalities = cljs.core.cst$kw$personality.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var roles = cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var professions = cljs.core.cst$kw$profession.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var theory = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mind,(1),cljs.core.cst$kw$energy,(1),cljs.core.cst$kw$nature,(1),cljs.core.cst$kw$tactics,(1),cljs.core.cst$kw$identity,(1)], null));
return ((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$persoinfo,[cljs.core.str(cljs.core.cst$kw$personality.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual)))),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"Vissza"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"\u00C1ll\u00EDtsd \u00F6ssze karaktered!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.registration.registration_sheet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$origins$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Honnan sz\u00E1rmazol?"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$origin,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual)))))?"choosen":null),cljs.core.cst$kw$on_DASH_click,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(actual,cljs.core.assoc,cljs.core.cst$kw$origin,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(a));

rpg.registration.update_inventory(actual,data);

return rpg.registration.update_skills(actual);
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(a)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,origins)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$personalities$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Szem\u00E9lyis\u00E9ged: ",cljs.core.cst$kw$personality.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual)))], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$personality,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(a),cljs.core.second(a).call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(theory) : cljs.core.deref.call(null,theory)))))?"choosen":null),cljs.core.cst$kw$on_DASH_click,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(theory,cljs.core.assoc,cljs.core.second(a),cljs.core.last(a));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(actual,cljs.core.assoc,cljs.core.cst$kw$theory,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mind.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(theory) : cljs.core.deref.call(null,theory))),cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(theory) : cljs.core.deref.call(null,theory))),cljs.core.cst$kw$nature.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(theory) : cljs.core.deref.call(null,theory))),cljs.core.cst$kw$tactics.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(theory) : cljs.core.deref.call(null,theory))),cljs.core.cst$kw$identity.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(theory) : cljs.core.deref.call(null,theory)))], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(actual,cljs.core.assoc,cljs.core.cst$kw$personality,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (i){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$theory.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$theory.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual))));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,personalities))));

rpg.registration.update_inventory(actual,data);

return rpg.registration.update_skills(actual);
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null),cljs.core.first(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Le\u00EDr\u00E1s"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mag\u00E1nyos h\u0151s",cljs.core.cst$kw$mind,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T\u00E1rsas\u00E1gkedvel\u0151",cljs.core.cst$kw$mind,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Kreat\u00EDv",cljs.core.cst$kw$energy,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Gyakorlatias",cljs.core.cst$kw$energy,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esz\u00E9t k\u00F6veti",cljs.core.cst$kw$nature,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sz\u00EDv\u00E9re hallgat",cljs.core.cst$kw$nature,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Megfontolt",cljs.core.cst$kw$tactics,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Laza",cljs.core.cst$kw$tactics,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Domin\u00E1ns",cljs.core.cst$kw$identity,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Al\u00E1zatos",cljs.core.cst$kw$identity,(0)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$roles$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Harcnemek"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$role$hvr_DASH_float,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual)))))?"choosen":null),cljs.core.cst$kw$on_DASH_click,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(actual,cljs.core.assoc,cljs.core.cst$kw$role,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(a));

return rpg.registration.update_inventory(actual,data);
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (p1__31077_SHARP_){
return [cljs.core.str(p1__31077_SHARP_),cljs.core.str(", ")].join('');
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,cljs.core.cst$kw$skills.cljs$core$IFn$_invoke$arity$1(a))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(a)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,roles)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.tools.timer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.tools.atom_input,actual], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.tools.atom_input,"Email",email], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.tools.atom_input,"Jelsz\u00F3",password], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/registration",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$email,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email) : cljs.core.deref.call(null,email)),cljs.core.cst$kw$password,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(password) : cljs.core.deref.call(null,password)),cljs.core.cst$kw$profile,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual))], null),cljs.core.cst$kw$handler,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (a){
var G__31080 = id;
var G__31081 = [cljs.core.str(a)].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31080,G__31081) : cljs.core.reset_BANG_.call(null,G__31080,G__31081));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,cljs.core.cst$kw$error_DASH_handler,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (a){
return window.alert([cljs.core.str("Sikertelen regisztr\u00E1ci\u00F3: "),cljs.core.str(a)].join(''));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null)], 0));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null),"Regisztr\u00E1ci\u00F3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/login",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(id) : cljs.core.deref.call(null,id)))?(1):(0))], null)], null),"Bel\u00E9p\u00E9s"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)], null)], null);
});
;})(skills,origins,personalities,roles,professions,id,email,password,theory))
});
