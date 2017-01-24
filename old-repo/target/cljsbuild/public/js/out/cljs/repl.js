// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54102){
var map__54127 = p__54102;
var map__54127__$1 = ((((!((map__54127 == null)))?((((map__54127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54127):map__54127);
var m = map__54127__$1;
var n = cljs.core.get.call(null,map__54127__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__54127__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__54129_54151 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54130_54152 = null;
var count__54131_54153 = (0);
var i__54132_54154 = (0);
while(true){
if((i__54132_54154 < count__54131_54153)){
var f_54155 = cljs.core._nth.call(null,chunk__54130_54152,i__54132_54154);
cljs.core.println.call(null,"  ",f_54155);

var G__54156 = seq__54129_54151;
var G__54157 = chunk__54130_54152;
var G__54158 = count__54131_54153;
var G__54159 = (i__54132_54154 + (1));
seq__54129_54151 = G__54156;
chunk__54130_54152 = G__54157;
count__54131_54153 = G__54158;
i__54132_54154 = G__54159;
continue;
} else {
var temp__4657__auto___54160 = cljs.core.seq.call(null,seq__54129_54151);
if(temp__4657__auto___54160){
var seq__54129_54161__$1 = temp__4657__auto___54160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54129_54161__$1)){
var c__43456__auto___54162 = cljs.core.chunk_first.call(null,seq__54129_54161__$1);
var G__54163 = cljs.core.chunk_rest.call(null,seq__54129_54161__$1);
var G__54164 = c__43456__auto___54162;
var G__54165 = cljs.core.count.call(null,c__43456__auto___54162);
var G__54166 = (0);
seq__54129_54151 = G__54163;
chunk__54130_54152 = G__54164;
count__54131_54153 = G__54165;
i__54132_54154 = G__54166;
continue;
} else {
var f_54167 = cljs.core.first.call(null,seq__54129_54161__$1);
cljs.core.println.call(null,"  ",f_54167);

var G__54168 = cljs.core.next.call(null,seq__54129_54161__$1);
var G__54169 = null;
var G__54170 = (0);
var G__54171 = (0);
seq__54129_54151 = G__54168;
chunk__54130_54152 = G__54169;
count__54131_54153 = G__54170;
i__54132_54154 = G__54171;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54172 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__42645__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_54172);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_54172)))?cljs.core.second.call(null,arglists_54172):arglists_54172));
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
var seq__54133_54173 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54134_54174 = null;
var count__54135_54175 = (0);
var i__54136_54176 = (0);
while(true){
if((i__54136_54176 < count__54135_54175)){
var vec__54137_54177 = cljs.core._nth.call(null,chunk__54134_54174,i__54136_54176);
var name_54178 = cljs.core.nth.call(null,vec__54137_54177,(0),null);
var map__54140_54179 = cljs.core.nth.call(null,vec__54137_54177,(1),null);
var map__54140_54180__$1 = ((((!((map__54140_54179 == null)))?((((map__54140_54179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54140_54179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54140_54179):map__54140_54179);
var doc_54181 = cljs.core.get.call(null,map__54140_54180__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54182 = cljs.core.get.call(null,map__54140_54180__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54178);

cljs.core.println.call(null," ",arglists_54182);

if(cljs.core.truth_(doc_54181)){
cljs.core.println.call(null," ",doc_54181);
} else {
}

var G__54183 = seq__54133_54173;
var G__54184 = chunk__54134_54174;
var G__54185 = count__54135_54175;
var G__54186 = (i__54136_54176 + (1));
seq__54133_54173 = G__54183;
chunk__54134_54174 = G__54184;
count__54135_54175 = G__54185;
i__54136_54176 = G__54186;
continue;
} else {
var temp__4657__auto___54187 = cljs.core.seq.call(null,seq__54133_54173);
if(temp__4657__auto___54187){
var seq__54133_54188__$1 = temp__4657__auto___54187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54133_54188__$1)){
var c__43456__auto___54189 = cljs.core.chunk_first.call(null,seq__54133_54188__$1);
var G__54190 = cljs.core.chunk_rest.call(null,seq__54133_54188__$1);
var G__54191 = c__43456__auto___54189;
var G__54192 = cljs.core.count.call(null,c__43456__auto___54189);
var G__54193 = (0);
seq__54133_54173 = G__54190;
chunk__54134_54174 = G__54191;
count__54135_54175 = G__54192;
i__54136_54176 = G__54193;
continue;
} else {
var vec__54142_54194 = cljs.core.first.call(null,seq__54133_54188__$1);
var name_54195 = cljs.core.nth.call(null,vec__54142_54194,(0),null);
var map__54145_54196 = cljs.core.nth.call(null,vec__54142_54194,(1),null);
var map__54145_54197__$1 = ((((!((map__54145_54196 == null)))?((((map__54145_54196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54145_54196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54145_54196):map__54145_54196);
var doc_54198 = cljs.core.get.call(null,map__54145_54197__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54199 = cljs.core.get.call(null,map__54145_54197__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54195);

cljs.core.println.call(null," ",arglists_54199);

if(cljs.core.truth_(doc_54198)){
cljs.core.println.call(null," ",doc_54198);
} else {
}

var G__54200 = cljs.core.next.call(null,seq__54133_54188__$1);
var G__54201 = null;
var G__54202 = (0);
var G__54203 = (0);
seq__54133_54173 = G__54200;
chunk__54134_54174 = G__54201;
count__54135_54175 = G__54202;
i__54136_54176 = G__54203;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__54147 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54148 = null;
var count__54149 = (0);
var i__54150 = (0);
while(true){
if((i__54150 < count__54149)){
var role = cljs.core._nth.call(null,chunk__54148,i__54150);
var temp__4657__auto___54204__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54204__$1)){
var spec_54205 = temp__4657__auto___54204__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_54205));
} else {
}

var G__54206 = seq__54147;
var G__54207 = chunk__54148;
var G__54208 = count__54149;
var G__54209 = (i__54150 + (1));
seq__54147 = G__54206;
chunk__54148 = G__54207;
count__54149 = G__54208;
i__54150 = G__54209;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__54147);
if(temp__4657__auto____$1){
var seq__54147__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54147__$1)){
var c__43456__auto__ = cljs.core.chunk_first.call(null,seq__54147__$1);
var G__54210 = cljs.core.chunk_rest.call(null,seq__54147__$1);
var G__54211 = c__43456__auto__;
var G__54212 = cljs.core.count.call(null,c__43456__auto__);
var G__54213 = (0);
seq__54147 = G__54210;
chunk__54148 = G__54211;
count__54149 = G__54212;
i__54150 = G__54213;
continue;
} else {
var role = cljs.core.first.call(null,seq__54147__$1);
var temp__4657__auto___54214__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54214__$2)){
var spec_54215 = temp__4657__auto___54214__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_54215));
} else {
}

var G__54216 = cljs.core.next.call(null,seq__54147__$1);
var G__54217 = null;
var G__54218 = (0);
var G__54219 = (0);
seq__54147 = G__54216;
chunk__54148 = G__54217;
count__54149 = G__54218;
i__54150 = G__54219;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map