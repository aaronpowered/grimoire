// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36613_36627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36614_36628 = null;
var count__36615_36629 = (0);
var i__36616_36630 = (0);
while(true){
if((i__36616_36630 < count__36615_36629)){
var f_36631 = cljs.core._nth.call(null,chunk__36614_36628,i__36616_36630);
cljs.core.println.call(null,"  ",f_36631);

var G__36632 = seq__36613_36627;
var G__36633 = chunk__36614_36628;
var G__36634 = count__36615_36629;
var G__36635 = (i__36616_36630 + (1));
seq__36613_36627 = G__36632;
chunk__36614_36628 = G__36633;
count__36615_36629 = G__36634;
i__36616_36630 = G__36635;
continue;
} else {
var temp__4657__auto___36636 = cljs.core.seq.call(null,seq__36613_36627);
if(temp__4657__auto___36636){
var seq__36613_36637__$1 = temp__4657__auto___36636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36613_36637__$1)){
var c__26807__auto___36638 = cljs.core.chunk_first.call(null,seq__36613_36637__$1);
var G__36639 = cljs.core.chunk_rest.call(null,seq__36613_36637__$1);
var G__36640 = c__26807__auto___36638;
var G__36641 = cljs.core.count.call(null,c__26807__auto___36638);
var G__36642 = (0);
seq__36613_36627 = G__36639;
chunk__36614_36628 = G__36640;
count__36615_36629 = G__36641;
i__36616_36630 = G__36642;
continue;
} else {
var f_36643 = cljs.core.first.call(null,seq__36613_36637__$1);
cljs.core.println.call(null,"  ",f_36643);

var G__36644 = cljs.core.next.call(null,seq__36613_36637__$1);
var G__36645 = null;
var G__36646 = (0);
var G__36647 = (0);
seq__36613_36627 = G__36644;
chunk__36614_36628 = G__36645;
count__36615_36629 = G__36646;
i__36616_36630 = G__36647;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36648 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26004__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36648);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36648)))?cljs.core.second.call(null,arglists_36648):arglists_36648));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36617 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36618 = null;
var count__36619 = (0);
var i__36620 = (0);
while(true){
if((i__36620 < count__36619)){
var vec__36621 = cljs.core._nth.call(null,chunk__36618,i__36620);
var name = cljs.core.nth.call(null,vec__36621,(0),null);
var map__36622 = cljs.core.nth.call(null,vec__36621,(1),null);
var map__36622__$1 = ((((!((map__36622 == null)))?((((map__36622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36622):map__36622);
var doc = cljs.core.get.call(null,map__36622__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36622__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36649 = seq__36617;
var G__36650 = chunk__36618;
var G__36651 = count__36619;
var G__36652 = (i__36620 + (1));
seq__36617 = G__36649;
chunk__36618 = G__36650;
count__36619 = G__36651;
i__36620 = G__36652;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36617);
if(temp__4657__auto__){
var seq__36617__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36617__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__36617__$1);
var G__36653 = cljs.core.chunk_rest.call(null,seq__36617__$1);
var G__36654 = c__26807__auto__;
var G__36655 = cljs.core.count.call(null,c__26807__auto__);
var G__36656 = (0);
seq__36617 = G__36653;
chunk__36618 = G__36654;
count__36619 = G__36655;
i__36620 = G__36656;
continue;
} else {
var vec__36624 = cljs.core.first.call(null,seq__36617__$1);
var name = cljs.core.nth.call(null,vec__36624,(0),null);
var map__36625 = cljs.core.nth.call(null,vec__36624,(1),null);
var map__36625__$1 = ((((!((map__36625 == null)))?((((map__36625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36625):map__36625);
var doc = cljs.core.get.call(null,map__36625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36657 = cljs.core.next.call(null,seq__36617__$1);
var G__36658 = null;
var G__36659 = (0);
var G__36660 = (0);
seq__36617 = G__36657;
chunk__36618 = G__36658;
count__36619 = G__36659;
i__36620 = G__36660;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map