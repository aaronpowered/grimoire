// Compiled by ClojureScript 1.9.229 {}
goog.provide('rpg.registration');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('rpg.tools');
goog.require('ajax.core');
goog.require('cljs.reader');
rpg.registration.reskill = (function rpg$registration$reskill(profile,origin,o1,o2,o3,o4,o5,o6,theory,p1,p2,p3,p4,p5){
return (((((((5) + (function (){var G__55095 = origin.call(null,cljs.core.deref.call(null,profile));
switch (G__55095) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(origin.call(null,cljs.core.deref.call(null,profile)))].join('')));

}
})()) + ((cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.take.call(null,(1),theory.call(null,cljs.core.deref.call(null,profile)))),p1))?(3):(-1))) + ((cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.take.call(null,(2),theory.call(null,cljs.core.deref.call(null,profile)))),p2))?(3):(-1))) + ((cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.take.call(null,(3),theory.call(null,cljs.core.deref.call(null,profile)))),p3))?(3):(-1))) + ((cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.take.call(null,(4),theory.call(null,cljs.core.deref.call(null,profile)))),p4))?(3):(-1))) + ((cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.take.call(null,(5),theory.call(null,cljs.core.deref.call(null,profile)))),p5))?(3):(-1)));
});
rpg.registration.update_skills = (function rpg$registration$update_skills(profile){
return cljs.core.swap_BANG_.call(null,profile,cljs.core.assoc,new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"KTR","KTR",1886245986),new cljs.core.Keyword(null,"HAT","HAT",-2013437821),new cljs.core.Keyword(null,"UGY","UGY",1056584965),new cljs.core.Keyword(null,"OSZ","OSZ",-1861501563),new cljs.core.Keyword(null,"ERT","ERT",-91471922),new cljs.core.Keyword(null,"BAT","BAT",1398765906),new cljs.core.Keyword(null,"GYR","GYR",-1689989451),new cljs.core.Keyword(null,"IZM","IZM",610709723),new cljs.core.Keyword(null,"BOL","BOL",-1524604261),new cljs.core.Keyword(null,"SZE","SZE",120596382)],[rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(0),(2),(1),(0),(-1),(0),new cljs.core.Keyword(null,"theory","theory",-602870044),(1),(0),(0),(1),(0)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(4),(1),(0),(1),(0),(0),new cljs.core.Keyword(null,"theory","theory",-602870044),(1),(1),(0),(1),(0)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(0),(1),(1),(1),(1),(0),new cljs.core.Keyword(null,"theory","theory",-602870044),(1),(0),(1),(0),(1)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(1),(0),(0),(2),(1),(0),new cljs.core.Keyword(null,"theory","theory",-602870044),(1),(0),(1),(1),(0)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(1),(0),(0),(3),(2),(1),new cljs.core.Keyword(null,"theory","theory",-602870044),(1),(1),(1),(1),(1)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(1),(0),(0),(0),(-1),(2),new cljs.core.Keyword(null,"theory","theory",-602870044),(0),(1),(1),(0),(1)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(2),(0),(1),(0),(0),(1),new cljs.core.Keyword(null,"theory","theory",-602870044),(0),(1),(0),(0),(0)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(0),(1),(2),(-1),(0),(0),new cljs.core.Keyword(null,"theory","theory",-602870044),(0),(0),(0),(1),(1)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(0),(1),(0),(3),(0),(2),new cljs.core.Keyword(null,"theory","theory",-602870044),(0),(0),(0),(0),(0)),rpg.registration.reskill.call(null,profile,new cljs.core.Keyword(null,"origin","origin",1037372088),(1),(3),(0),(1),(1),(-1),new cljs.core.Keyword(null,"theory","theory",-602870044),(0),(1),(1),(0),(1))]));
});
rpg.registration.update_inventory = (function rpg$registration$update_inventory(profile,data){
return cljs.core.swap_BANG_.call(null,profile,cljs.core.assoc,new cljs.core.Keyword(null,"inventory","inventory",860201871),cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55097_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55097_SHARP_),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,profile)));
}),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))),new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55098_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55098_SHARP_),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,profile)));
}),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))))),new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55099_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55099_SHARP_),new cljs.core.Keyword(null,"personality","personality",1044414103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,profile)));
}),new cljs.core.Keyword(null,"personality","personality",1044414103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Csodaszer"], null)));
});
rpg.registration.registration_sheet = (function rpg$registration$registration_sheet(){
var toggle = reagent.core.atom.call(null,false);
return ((function (toggle){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.toggle-rsheet","button.toggle-rsheet",-1677427280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,toggle))){
return cljs.core.reset_BANG_.call(null,toggle,false);
} else {
return cljs.core.reset_BANG_.call(null,toggle,true);
}
});})(toggle))
], null),(cljs.core.truth_(cljs.core.deref.call(null,toggle))?"m\u00E9gsem":"Regisztr\u00E1ci\u00F3")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,toggle))?"rsheet":"rsheet opacity0")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str("Regisztr\u00E1ci\u00F3"),cljs.core.str(cljs.core.deref.call(null,toggle))].join('')], null)], null)], null);
});
;})(toggle))
});
rpg.registration.create_character = (function rpg$registration$create_character(actual,data){
var skills = new cljs.core.Keyword(null,"skill","skill",155065636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var origins = new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var personalities = new cljs.core.Keyword(null,"personality","personality",1044414103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var roles = new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var professions = new cljs.core.Keyword(null,"profession","profession",1614227160).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var id = reagent.core.atom.call(null,null);
var email = reagent.core.atom.call(null,null);
var password = reagent.core.atom.call(null,null);
var theory = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mind","mind",-1995532497),(1),new cljs.core.Keyword(null,"energy","energy",129856526),(1),new cljs.core.Keyword(null,"nature","nature",-1552821299),(1),new cljs.core.Keyword(null,"tactics","tactics",-1243327521),(1),new cljs.core.Keyword(null,"identity","identity",1647396035),(1)], null));
return ((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.persoinfo","p.persoinfo",-924410722),[cljs.core.str(new cljs.core.Keyword(null,"personality","personality",1044414103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual))),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Vissza"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u00C1ll\u00EDtsd \u00F6ssze karaktered!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.registration.registration_sheet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.origins.container","div.origins.container",954142206),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Honnan sz\u00E1rmazol?"], null),cljs.core.map_indexed.call(null,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.origin","div.origin",-701024129),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual))))?"choosen":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
cljs.core.swap_BANG_.call(null,actual,cljs.core.assoc,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a));

rpg.registration.update_inventory.call(null,actual,data);

return rpg.registration.update_skills.call(null,actual);
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,origins)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.personalities.container","div.personalities.container",276986574),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Szem\u00E9lyis\u00E9ged: ",new cljs.core.Keyword(null,"personality","personality",1044414103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual))], null),cljs.core.map_indexed.call(null,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.personality","div.personality",683802422),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.last.call(null,a),cljs.core.second.call(null,a).call(null,cljs.core.deref.call(null,theory))))?"choosen":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
cljs.core.swap_BANG_.call(null,theory,cljs.core.assoc,cljs.core.second.call(null,a),cljs.core.last.call(null,a));

cljs.core.swap_BANG_.call(null,actual,cljs.core.assoc,new cljs.core.Keyword(null,"theory","theory",-602870044),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mind","mind",-1995532497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,theory)),new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,theory)),new cljs.core.Keyword(null,"nature","nature",-1552821299).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,theory)),new cljs.core.Keyword(null,"tactics","tactics",-1243327521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,theory)),new cljs.core.Keyword(null,"identity","identity",1647396035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,theory))], null));

cljs.core.swap_BANG_.call(null,actual,cljs.core.assoc,new cljs.core.Keyword(null,"personality","personality",1044414103),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (i){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"theory","theory",-602870044).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"theory","theory",-602870044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual)));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,personalities))));

rpg.registration.update_inventory.call(null,actual,data);

return rpg.registration.update_skills.call(null,actual);
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null),cljs.core.first.call(null,a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Le\u00EDr\u00E1s"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mag\u00E1nyos h\u0151s",new cljs.core.Keyword(null,"mind","mind",-1995532497),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T\u00E1rsas\u00E1gkedvel\u0151",new cljs.core.Keyword(null,"mind","mind",-1995532497),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Intuit\u00EDv",new cljs.core.Keyword(null,"energy","energy",129856526),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Gyakorlatias",new cljs.core.Keyword(null,"energy","energy",129856526),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esz\u00E9t k\u00F6veti",new cljs.core.Keyword(null,"nature","nature",-1552821299),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sz\u00EDv\u00E9re hallgat",new cljs.core.Keyword(null,"nature","nature",-1552821299),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Megfontolt",new cljs.core.Keyword(null,"tactics","tactics",-1243327521),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Laza",new cljs.core.Keyword(null,"tactics","tactics",-1243327521),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00D6ntudatos",new cljs.core.Keyword(null,"identity","identity",1647396035),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00D3vatos",new cljs.core.Keyword(null,"identity","identity",1647396035),(0)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roles.container","div.roles.container",1659517636),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Harcnemek"], null),cljs.core.map_indexed.call(null,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (key,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.role.hvr-float","div.role.hvr-float",1941857751),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual))))?"choosen":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
cljs.core.swap_BANG_.call(null,actual,cljs.core.assoc,new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a));

return rpg.registration.update_inventory.call(null,actual,data);
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.map.call(null,((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (p1__55100_SHARP_){
return [cljs.core.str(p1__55100_SHARP_),cljs.core.str(", ")].join('');
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(a))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,roles)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.tools.timer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.tools.atom_input,actual], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.tools.atom_input,"Email",email], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.tools.atom_input,"Jelsz\u00F3",password], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (){
return ajax.core.POST.call(null,"/registration",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref.call(null,email),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref.call(null,password),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.deref.call(null,actual)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (a){
return cljs.core.reset_BANG_.call(null,id,[cljs.core.str(a)].join(''));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (skills,origins,personalities,roles,professions,id,email,password,theory){
return (function (a){
return window.alert([cljs.core.str("Sikertelen regisztr\u00E1ci\u00F3: "),cljs.core.str(a)].join(''));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null));
});})(skills,origins,personalities,roles,professions,id,email,password,theory))
], null),"Regisztr\u00E1ci\u00F3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/login",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref.call(null,id))?(1):(0))], null)], null),"Bel\u00E9p\u00E9s"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null);
});
;})(skills,origins,personalities,roles,professions,id,email,password,theory))
});

//# sourceMappingURL=registration.js.map