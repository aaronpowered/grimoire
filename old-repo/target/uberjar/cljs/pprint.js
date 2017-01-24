// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14992 = arguments.length;
var i__7490__auto___14993 = (0);
while(true){
if((i__7490__auto___14993 < len__7489__auto___14992)){
args__7496__auto__.push((arguments[i__7490__auto___14993]));

var G__14994 = (i__7490__auto___14993 + (1));
i__7490__auto___14993 = G__14994;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq14991){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14991));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__7496__auto__ = [];
var len__7489__auto___14996 = arguments.length;
var i__7490__auto___14997 = (0);
while(true){
if((i__7490__auto___14997 < len__7489__auto___14996)){
args__7496__auto__.push((arguments[i__7490__auto___14997]));

var G__14998 = (i__7490__auto___14997 + (1));
i__7490__auto___14997 = G__14998;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq14995){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14995));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__15016 = cljs.core._EQ_;
var expr__15017 = c;
if(cljs.core.truth_((function (){var G__15019 = "\b";
var G__15020 = expr__15017;
return (pred__15016.cljs$core$IFn$_invoke$arity$2 ? pred__15016.cljs$core$IFn$_invoke$arity$2(G__15019,G__15020) : pred__15016.call(null,G__15019,G__15020));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__15021 = "\t";
var G__15022 = expr__15017;
return (pred__15016.cljs$core$IFn$_invoke$arity$2 ? pred__15016.cljs$core$IFn$_invoke$arity$2(G__15021,G__15022) : pred__15016.call(null,G__15021,G__15022));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__15023 = "\n";
var G__15024 = expr__15017;
return (pred__15016.cljs$core$IFn$_invoke$arity$2 ? pred__15016.cljs$core$IFn$_invoke$arity$2(G__15023,G__15024) : pred__15016.call(null,G__15023,G__15024));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__15025 = "\f";
var G__15026 = expr__15017;
return (pred__15016.cljs$core$IFn$_invoke$arity$2 ? pred__15016.cljs$core$IFn$_invoke$arity$2(G__15025,G__15026) : pred__15016.call(null,G__15025,G__15026));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__15027 = "\r";
var G__15028 = expr__15017;
return (pred__15016.cljs$core$IFn$_invoke$arity$2 ? pred__15016.cljs$core$IFn$_invoke$arity$2(G__15027,G__15028) : pred__15016.call(null,G__15027,G__15028));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__15029 = "\"";
var G__15030 = expr__15017;
return (pred__15016.cljs$core$IFn$_invoke$arity$2 ? pred__15016.cljs$core$IFn$_invoke$arity$2(G__15029,G__15030) : pred__15016.call(null,G__15029,G__15030));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__15031 = "\\";
var G__15032 = expr__15017;
return (pred__15016.cljs$core$IFn$_invoke$arity$2 ? pred__15016.cljs$core$IFn$_invoke$arity$2(G__15031,G__15032) : pred__15016.call(null,G__15031,G__15032));
})())){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__7496__auto__ = [];
var len__7489__auto___15034 = arguments.length;
var i__7490__auto___15035 = (0);
while(true){
if((i__7490__auto___15035 < len__7489__auto___15034)){
args__7496__auto__.push((arguments[i__7490__auto___15035]));

var G__15036 = (i__7490__auto___15035 + (1));
i__7490__auto___15035 = G__15036;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq15033){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15033));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__7496__auto__ = [];
var len__7489__auto___15038 = arguments.length;
var i__7490__auto___15039 = (0);
while(true){
if((i__7490__auto___15039 < len__7489__auto___15038)){
args__7496__auto__.push((arguments[i__7490__auto___15039]));

var G__15040 = (i__7490__auto___15039 + (1));
i__7490__auto___15039 = G__15040;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq15037){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15037));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__15044 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15044,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15044,(1),null);
var G__15047 = new_context;
var G__15048 = remainder;
var G__15049 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__15047;
lis__$1 = G__15048;
acc = G__15049;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__15053 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__15056 = new_context;
var G__15057 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__15056;
acc = G__15057;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__15061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15061,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15061,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15061,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__15064 = new_context;
var G__15065 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__15064;
acc = G__15065;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7194__auto__ = (function cljs$pprint$unzip_map_$_iter__15126(s__15127){
return (new cljs.core.LazySeq(null,(function (){
var s__15127__$1 = s__15127;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15127__$1);
if(temp__4657__auto__){
var s__15127__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15127__$2)){
var c__7192__auto__ = cljs.core.chunk_first(s__15127__$2);
var size__7193__auto__ = cljs.core.count(c__7192__auto__);
var b__15129 = cljs.core.chunk_buffer(size__7193__auto__);
if((function (){var i__15128 = (0);
while(true){
if((i__15128 < size__7193__auto__)){
var vec__15144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7192__auto__,i__15128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(0),null);
var vec__15147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(1),null);
cljs.core.chunk_append(b__15129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__15186 = (i__15128 + (1));
i__15128 = G__15186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15129),cljs$pprint$unzip_map_$_iter__15126(cljs.core.chunk_rest(s__15127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15129),null);
}
} else {
var vec__15150 = cljs.core.first(s__15127__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15150,(0),null);
var vec__15153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15150,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__15126(cljs.core.rest(s__15127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7194__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7194__auto__ = (function cljs$pprint$unzip_map_$_iter__15156(s__15157){
return (new cljs.core.LazySeq(null,(function (){
var s__15157__$1 = s__15157;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15157__$1);
if(temp__4657__auto__){
var s__15157__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15157__$2)){
var c__7192__auto__ = cljs.core.chunk_first(s__15157__$2);
var size__7193__auto__ = cljs.core.count(c__7192__auto__);
var b__15159 = cljs.core.chunk_buffer(size__7193__auto__);
if((function (){var i__15158 = (0);
while(true){
if((i__15158 < size__7193__auto__)){
var vec__15174 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7192__auto__,i__15158);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(0),null);
var vec__15177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177,(1),null);
cljs.core.chunk_append(b__15159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__15187 = (i__15158 + (1));
i__15158 = G__15187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15159),cljs$pprint$unzip_map_$_iter__15156(cljs.core.chunk_rest(s__15157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15159),null);
}
} else {
var vec__15180 = cljs.core.first(s__15157__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(0),null);
var vec__15183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15183,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15183,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__15156(cljs.core.rest(s__15157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7194__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7194__auto__ = (function cljs$pprint$tuple_map_$_iter__15206(s__15207){
return (new cljs.core.LazySeq(null,(function (){
var s__15207__$1 = s__15207;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15207__$1);
if(temp__4657__auto__){
var s__15207__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15207__$2)){
var c__7192__auto__ = cljs.core.chunk_first(s__15207__$2);
var size__7193__auto__ = cljs.core.count(c__7192__auto__);
var b__15209 = cljs.core.chunk_buffer(size__7193__auto__);
if((function (){var i__15208 = (0);
while(true){
if((i__15208 < size__7193__auto__)){
var vec__15218 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7192__auto__,i__15208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15218,(1),null);
cljs.core.chunk_append(b__15209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__15224 = (i__15208 + (1));
i__15208 = G__15224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15209),cljs$pprint$tuple_map_$_iter__15206(cljs.core.chunk_rest(s__15207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15209),null);
}
} else {
var vec__15221 = cljs.core.first(s__15207__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15221,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__15206(cljs.core.rest(s__15207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7194__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__15225 = (n - (1));
n = G__15225;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__15226 = (n + (1));
n = G__15226;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__15230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__15230) : test.call(null,G__15230));
})()))){
return pos;
} else {
var G__15231 = (pos + (1));
pos = G__15231;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__7077__auto__ = (((pp == null))?null:pp);
var m__7078__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__7078__auto__.call(null,pp));
} else {
var m__7078__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__7078__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__15234 = (function (){var G__15235 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15235) : cljs.core.deref.call(null,G__15235));
})();
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__15234) : sym.call(null,G__15234));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var args15237 = [];
var len__7489__auto___15247 = arguments.length;
var i__7490__auto___15248 = (0);
while(true){
if((i__7490__auto___15248 < len__7489__auto___15247)){
args15237.push((arguments[i__7490__auto___15248]));

var G__15249 = (i__7490__auto___15248 + (1));
i__7490__auto___15248 = G__15249;
continue;
} else {
}
break;
}

var G__15239 = args15237.length;
switch (G__15239) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15237.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = (function (){var G__15240 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15240) : cljs.core.atom.call(null,G__15240));
})();
if(typeof cljs.pprint.t_cljs$pprint15241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15241 = (function (writer,max_columns,fields,meta15242){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta15242 = meta15242;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint15241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_15243,meta15242__$1){
var self__ = this;
var _15243__$1 = this;
return (new cljs.pprint.t_cljs$pprint15241(self__.writer,self__.max_columns,self__.fields,meta15242__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint15241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_15243){
var self__ = this;
var _15243__$1 = this;
return self__.meta15242;
});})(fields))
;

cljs.pprint.t_cljs$pprint15241.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint15241.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint15241.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15244 = cljs.core._EQ_;
var expr__15245 = cljs.core.type(x);
if(cljs.core.truth_((pred__15244.cljs$core$IFn$_invoke$arity$2 ? pred__15244.cljs$core$IFn$_invoke$arity$2(String,expr__15245) : pred__15244.call(null,String,expr__15245)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__15244,expr__15245,this$__$1,fields){
return (function (p1__15236_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15236_SHARP_,"\n");
});})(s,nl,pred__15244,expr__15245,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__15244.cljs$core$IFn$_invoke$arity$2 ? pred__15244.cljs$core$IFn$_invoke$arity$2(Number,expr__15245) : pred__15244.call(null,Number,expr__15245)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15245)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint15241.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta15242], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint15241.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15241.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15241";

cljs.pprint.t_cljs$pprint15241.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.pprint/t_cljs$pprint15241");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint15241 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint15241(writer__$1,max_columns__$1,fields__$1,meta15242){
return (new cljs.pprint.t_cljs$pprint15241(writer__$1,max_columns__$1,fields__$1,meta15242));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint15241(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k15252,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__15254 = (((k15252 instanceof cljs.core.Keyword))?k15252.fqn:null);
switch (G__15254) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15252,else__7039__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.pprint.logical-block{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = true;

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15251){
var self__ = this;
var G__15251__$1 = this;
return (new cljs.core.RecordIter((0),G__15251__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__15251){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__15255 = cljs.core.keyword_identical_QMARK_;
var expr__15256 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__15258 = cljs.core.cst$kw$parent;
var G__15259 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15258,G__15259) : pred__15255.call(null,G__15258,G__15259));
})())){
return (new cljs.pprint.logical_block(G__15251,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15260 = cljs.core.cst$kw$section;
var G__15261 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15260,G__15261) : pred__15255.call(null,G__15260,G__15261));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__15251,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15262 = cljs.core.cst$kw$start_DASH_col;
var G__15263 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15262,G__15263) : pred__15255.call(null,G__15262,G__15263));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__15251,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15264 = cljs.core.cst$kw$indent;
var G__15265 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15264,G__15265) : pred__15255.call(null,G__15264,G__15265));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__15251,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15266 = cljs.core.cst$kw$done_DASH_nl;
var G__15267 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15266,G__15267) : pred__15255.call(null,G__15266,G__15267));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__15251,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15268 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__15269 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15268,G__15269) : pred__15255.call(null,G__15268,G__15269));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__15251,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15270 = cljs.core.cst$kw$prefix;
var G__15271 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15270,G__15271) : pred__15255.call(null,G__15270,G__15271));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__15251,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15272 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__15273 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15272,G__15273) : pred__15255.call(null,G__15272,G__15273));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__15251,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15274 = cljs.core.cst$kw$suffix;
var G__15275 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15274,G__15275) : pred__15255.call(null,G__15274,G__15275));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__15251,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15276 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__15277 = expr__15256;
return (pred__15255.cljs$core$IFn$_invoke$arity$2 ? pred__15255.cljs$core$IFn$_invoke$arity$2(G__15276,G__15277) : pred__15255.call(null,G__15276,G__15277));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__15251,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__15251),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__15251){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__15251,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__15253){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__15253),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__15253),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15253,cljs.core.cst$kw$parent,cljs.core.array_seq([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__15279 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__15279;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k15281,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__15283 = (((k15281 instanceof cljs.core.Keyword))?k15281.fqn:null);
switch (G__15283) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15281,else__7039__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = true;

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15280){
var self__ = this;
var G__15280__$1 = this;
return (new cljs.core.RecordIter((0),G__15280__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__15280){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__15284 = cljs.core.keyword_identical_QMARK_;
var expr__15285 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__15287 = cljs.core.cst$kw$type_DASH_tag;
var G__15288 = expr__15285;
return (pred__15284.cljs$core$IFn$_invoke$arity$2 ? pred__15284.cljs$core$IFn$_invoke$arity$2(G__15287,G__15288) : pred__15284.call(null,G__15287,G__15288));
})())){
return (new cljs.pprint.buffer_blob(G__15280,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15289 = cljs.core.cst$kw$data;
var G__15290 = expr__15285;
return (pred__15284.cljs$core$IFn$_invoke$arity$2 ? pred__15284.cljs$core$IFn$_invoke$arity$2(G__15289,G__15290) : pred__15284.call(null,G__15289,G__15290));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__15280,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15291 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__15292 = expr__15285;
return (pred__15284.cljs$core$IFn$_invoke$arity$2 ? pred__15284.cljs$core$IFn$_invoke$arity$2(G__15291,G__15292) : pred__15284.call(null,G__15291,G__15292));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__15280,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15293 = cljs.core.cst$kw$start_DASH_pos;
var G__15294 = expr__15285;
return (pred__15284.cljs$core$IFn$_invoke$arity$2 ? pred__15284.cljs$core$IFn$_invoke$arity$2(G__15293,G__15294) : pred__15284.call(null,G__15293,G__15294));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__15280,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15295 = cljs.core.cst$kw$end_DASH_pos;
var G__15296 = expr__15285;
return (pred__15284.cljs$core$IFn$_invoke$arity$2 ? pred__15284.cljs$core$IFn$_invoke$arity$2(G__15295,G__15296) : pred__15284.call(null,G__15295,G__15296));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__15280,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__15280),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__15280){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__15280,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__15282){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15282),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__15282),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__15282),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15282),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15282),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15282,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__14926__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14926__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k15299,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__15301 = (((k15299 instanceof cljs.core.Keyword))?k15299.fqn:null);
switch (G__15301) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15299,else__7039__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.pprint.nl-t{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15298){
var self__ = this;
var G__15298__$1 = this;
return (new cljs.core.RecordIter((0),G__15298__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__15298){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__15302 = cljs.core.keyword_identical_QMARK_;
var expr__15303 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__15305 = cljs.core.cst$kw$type_DASH_tag;
var G__15306 = expr__15303;
return (pred__15302.cljs$core$IFn$_invoke$arity$2 ? pred__15302.cljs$core$IFn$_invoke$arity$2(G__15305,G__15306) : pred__15302.call(null,G__15305,G__15306));
})())){
return (new cljs.pprint.nl_t(G__15298,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15307 = cljs.core.cst$kw$type;
var G__15308 = expr__15303;
return (pred__15302.cljs$core$IFn$_invoke$arity$2 ? pred__15302.cljs$core$IFn$_invoke$arity$2(G__15307,G__15308) : pred__15302.call(null,G__15307,G__15308));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__15298,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15309 = cljs.core.cst$kw$logical_DASH_block;
var G__15310 = expr__15303;
return (pred__15302.cljs$core$IFn$_invoke$arity$2 ? pred__15302.cljs$core$IFn$_invoke$arity$2(G__15309,G__15310) : pred__15302.call(null,G__15309,G__15310));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__15298,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15311 = cljs.core.cst$kw$start_DASH_pos;
var G__15312 = expr__15303;
return (pred__15302.cljs$core$IFn$_invoke$arity$2 ? pred__15302.cljs$core$IFn$_invoke$arity$2(G__15311,G__15312) : pred__15302.call(null,G__15311,G__15312));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__15298,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15313 = cljs.core.cst$kw$end_DASH_pos;
var G__15314 = expr__15303;
return (pred__15302.cljs$core$IFn$_invoke$arity$2 ? pred__15302.cljs$core$IFn$_invoke$arity$2(G__15313,G__15314) : pred__15302.call(null,G__15313,G__15314));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__15298,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__15298),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__15298){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__15298,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__15300){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15300),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__15300),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15300),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15300),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15300),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15300,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__14926__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14926__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k15317,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__15319 = (((k15317 instanceof cljs.core.Keyword))?k15317.fqn:null);
switch (G__15319) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15317,else__7039__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15316){
var self__ = this;
var G__15316__$1 = this;
return (new cljs.core.RecordIter((0),G__15316__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__15316){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__15320 = cljs.core.keyword_identical_QMARK_;
var expr__15321 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__15323 = cljs.core.cst$kw$type_DASH_tag;
var G__15324 = expr__15321;
return (pred__15320.cljs$core$IFn$_invoke$arity$2 ? pred__15320.cljs$core$IFn$_invoke$arity$2(G__15323,G__15324) : pred__15320.call(null,G__15323,G__15324));
})())){
return (new cljs.pprint.start_block_t(G__15316,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15325 = cljs.core.cst$kw$logical_DASH_block;
var G__15326 = expr__15321;
return (pred__15320.cljs$core$IFn$_invoke$arity$2 ? pred__15320.cljs$core$IFn$_invoke$arity$2(G__15325,G__15326) : pred__15320.call(null,G__15325,G__15326));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__15316,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15327 = cljs.core.cst$kw$start_DASH_pos;
var G__15328 = expr__15321;
return (pred__15320.cljs$core$IFn$_invoke$arity$2 ? pred__15320.cljs$core$IFn$_invoke$arity$2(G__15327,G__15328) : pred__15320.call(null,G__15327,G__15328));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__15316,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15329 = cljs.core.cst$kw$end_DASH_pos;
var G__15330 = expr__15321;
return (pred__15320.cljs$core$IFn$_invoke$arity$2 ? pred__15320.cljs$core$IFn$_invoke$arity$2(G__15329,G__15330) : pred__15320.call(null,G__15329,G__15330));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__15316,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__15316),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__15316){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__15316,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__15318){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15318),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15318),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15318),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15318),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15318,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__14926__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14926__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k15333,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__15335 = (((k15333 instanceof cljs.core.Keyword))?k15333.fqn:null);
switch (G__15335) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15333,else__7039__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15332){
var self__ = this;
var G__15332__$1 = this;
return (new cljs.core.RecordIter((0),G__15332__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__15332){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__15336 = cljs.core.keyword_identical_QMARK_;
var expr__15337 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__15339 = cljs.core.cst$kw$type_DASH_tag;
var G__15340 = expr__15337;
return (pred__15336.cljs$core$IFn$_invoke$arity$2 ? pred__15336.cljs$core$IFn$_invoke$arity$2(G__15339,G__15340) : pred__15336.call(null,G__15339,G__15340));
})())){
return (new cljs.pprint.end_block_t(G__15332,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15341 = cljs.core.cst$kw$logical_DASH_block;
var G__15342 = expr__15337;
return (pred__15336.cljs$core$IFn$_invoke$arity$2 ? pred__15336.cljs$core$IFn$_invoke$arity$2(G__15341,G__15342) : pred__15336.call(null,G__15341,G__15342));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__15332,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15343 = cljs.core.cst$kw$start_DASH_pos;
var G__15344 = expr__15337;
return (pred__15336.cljs$core$IFn$_invoke$arity$2 ? pred__15336.cljs$core$IFn$_invoke$arity$2(G__15343,G__15344) : pred__15336.call(null,G__15343,G__15344));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__15332,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15345 = cljs.core.cst$kw$end_DASH_pos;
var G__15346 = expr__15337;
return (pred__15336.cljs$core$IFn$_invoke$arity$2 ? pred__15336.cljs$core$IFn$_invoke$arity$2(G__15345,G__15346) : pred__15336.call(null,G__15345,G__15346));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__15332,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__15332),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__15332){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__15332,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__15334){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15334),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15334),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15334),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15334),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15334,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__14926__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14926__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k15349,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__15351 = (((k15349 instanceof cljs.core.Keyword))?k15349.fqn:null);
switch (G__15351) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15349,else__7039__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.pprint.indent-t{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15348){
var self__ = this;
var G__15348__$1 = this;
return (new cljs.core.RecordIter((0),G__15348__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__15348){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__15352 = cljs.core.keyword_identical_QMARK_;
var expr__15353 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__15355 = cljs.core.cst$kw$type_DASH_tag;
var G__15356 = expr__15353;
return (pred__15352.cljs$core$IFn$_invoke$arity$2 ? pred__15352.cljs$core$IFn$_invoke$arity$2(G__15355,G__15356) : pred__15352.call(null,G__15355,G__15356));
})())){
return (new cljs.pprint.indent_t(G__15348,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15357 = cljs.core.cst$kw$logical_DASH_block;
var G__15358 = expr__15353;
return (pred__15352.cljs$core$IFn$_invoke$arity$2 ? pred__15352.cljs$core$IFn$_invoke$arity$2(G__15357,G__15358) : pred__15352.call(null,G__15357,G__15358));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__15348,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15359 = cljs.core.cst$kw$relative_DASH_to;
var G__15360 = expr__15353;
return (pred__15352.cljs$core$IFn$_invoke$arity$2 ? pred__15352.cljs$core$IFn$_invoke$arity$2(G__15359,G__15360) : pred__15352.call(null,G__15359,G__15360));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__15348,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15361 = cljs.core.cst$kw$offset;
var G__15362 = expr__15353;
return (pred__15352.cljs$core$IFn$_invoke$arity$2 ? pred__15352.cljs$core$IFn$_invoke$arity$2(G__15361,G__15362) : pred__15352.call(null,G__15361,G__15362));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__15348,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15363 = cljs.core.cst$kw$start_DASH_pos;
var G__15364 = expr__15353;
return (pred__15352.cljs$core$IFn$_invoke$arity$2 ? pred__15352.cljs$core$IFn$_invoke$arity$2(G__15363,G__15364) : pred__15352.call(null,G__15363,G__15364));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__15348,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15365 = cljs.core.cst$kw$end_DASH_pos;
var G__15366 = expr__15353;
return (pred__15352.cljs$core$IFn$_invoke$arity$2 ? pred__15352.cljs$core$IFn$_invoke$arity$2(G__15365,G__15366) : pred__15352.call(null,G__15365,G__15366));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__15348,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__15348),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__15348){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__15348,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__15350){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15350),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15350),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__15350),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__15350),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15350),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15350),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15350,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__14926__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14926__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__7339__auto__ = (function (){var G__15370 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15370) : cljs.core.atom.call(null,G__15370));
})();
var prefer_table__7340__auto__ = (function (){var G__15371 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15371) : cljs.core.atom.call(null,G__15371));
})();
var method_cache__7341__auto__ = (function (){var G__15372 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15372) : cljs.core.atom.call(null,G__15372));
})();
var cached_hierarchy__7342__auto__ = (function (){var G__15373 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15373) : cljs.core.atom.call(null,G__15373));
})();
var hierarchy__7343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__,hierarchy__7343__auto__){
return (function (p1__15369_SHARP_,p2__15368_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__15368_SHARP_);
});})(method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__,hierarchy__7343__auto__))
,cljs.core.cst$kw$default,hierarchy__7343__auto__,method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__4657__auto___15382 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__15374 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15374) : cljs.core.deref.call(null,G__15374));
})());
if(cljs.core.truth_(temp__4657__auto___15382)){
var cb_15383 = temp__4657__auto___15382;
var G__15375_15384 = cljs.core.cst$kw$start;
(cb_15383.cljs$core$IFn$_invoke$arity$1 ? cb_15383.cljs$core$IFn$_invoke$arity$1(G__15375_15384) : cb_15383.call(null,G__15375_15384));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__4657__auto___15385 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4657__auto___15385)){
var prefix_15386 = temp__4657__auto___15385;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15376 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15376) : cljs.core.deref.call(null,G__15376));
})()),prefix_15386);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15377 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15377) : cljs.core.deref.call(null,G__15377));
})()));
var G__15378_15387 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__15379_15388 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15378_15387,G__15379_15388) : cljs.core.reset_BANG_.call(null,G__15378_15387,G__15379_15388));

var G__15380 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__15381 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15380,G__15381) : cljs.core.reset_BANG_.call(null,G__15380,G__15381));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__4657__auto___15392 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__15389 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15389) : cljs.core.deref.call(null,G__15389));
})());
if(cljs.core.truth_(temp__4657__auto___15392)){
var cb_15393 = temp__4657__auto___15392;
var G__15390_15394 = cljs.core.cst$kw$end;
(cb_15393.cljs$core$IFn$_invoke$arity$1 ? cb_15393.cljs$core$IFn$_invoke$arity$1(G__15390_15394) : cb_15393.call(null,G__15390_15394));
} else {
}

var temp__4657__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4657__auto__)){
var suffix = temp__4657__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15391 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15391) : cljs.core.deref.call(null,G__15391));
})()),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var G__15395 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__15396 = (cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__15397 = cljs.core._EQ_;
var expr__15398 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__15400 = cljs.core.cst$kw$block;
var G__15401 = expr__15398;
return (pred__15397.cljs$core$IFn$_invoke$arity$2 ? pred__15397.cljs$core$IFn$_invoke$arity$2(G__15400,G__15401) : pred__15397.call(null,G__15400,G__15401));
})())){
var G__15402 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15402) : cljs.core.deref.call(null,G__15402));
} else {
if(cljs.core.truth_((function (){var G__15403 = cljs.core.cst$kw$current;
var G__15404 = expr__15398;
return (pred__15397.cljs$core$IFn$_invoke$arity$2 ? pred__15397.cljs$core$IFn$_invoke$arity$2(G__15403,G__15404) : pred__15397.call(null,G__15403,G__15404));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15405 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15405) : cljs.core.deref.call(null,G__15405));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15398)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15395,G__15396) : cljs.core.reset_BANG_.call(null,G__15395,G__15396));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15406 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15406) : cljs.core.deref.call(null,G__15406));
})()),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__6414__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__6414__auto__){
return or__6414__auto__;
} else {
var and__6402__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__6402__auto__){
var G__15410 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15410) : cljs.core.deref.call(null,G__15410));
} else {
return and__6402__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__4655__auto___15413 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__15411 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15411) : cljs.core.deref.call(null,G__15411));
})());
if(cljs.core.truth_(temp__4655__auto___15413)){
var tws_15414 = temp__4655__auto___15413;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15412 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15412) : cljs.core.deref.call(null,G__15412));
})()),tws_15414);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__15427 = cljs.core.seq(tokens);
var chunk__15428 = null;
var count__15429 = (0);
var i__15430 = (0);
while(true){
if((i__15430 < count__15429)){
var token = chunk__15428.cljs$core$IIndexed$_nth$arity$2(null,i__15430);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4655__auto___15439 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__15431 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15431) : cljs.core.deref.call(null,G__15431));
})());
if(cljs.core.truth_(temp__4655__auto___15439)){
var tws_15440 = temp__4655__auto___15439;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15432 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15432) : cljs.core.deref.call(null,G__15432));
})()),tws_15440);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_15441 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__15433 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15433) : cljs.core.deref.call(null,G__15433));
})());
if(cljs.core.truth_((function (){var and__6402__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__6402__auto__)){
return tws_15441;
} else {
return and__6402__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15434 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15434) : cljs.core.deref.call(null,G__15434));
})()),tws_15441);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__15442 = seq__15427;
var G__15443 = chunk__15428;
var G__15444 = count__15429;
var G__15445 = (i__15430 + (1));
seq__15427 = G__15442;
chunk__15428 = G__15443;
count__15429 = G__15444;
i__15430 = G__15445;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15427);
if(temp__4657__auto__){
var seq__15427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15427__$1)){
var c__7225__auto__ = cljs.core.chunk_first(seq__15427__$1);
var G__15446 = cljs.core.chunk_rest(seq__15427__$1);
var G__15447 = c__7225__auto__;
var G__15448 = cljs.core.count(c__7225__auto__);
var G__15449 = (0);
seq__15427 = G__15446;
chunk__15428 = G__15447;
count__15429 = G__15448;
i__15430 = G__15449;
continue;
} else {
var token = cljs.core.first(seq__15427__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4655__auto___15450 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__15435 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15435) : cljs.core.deref.call(null,G__15435));
})());
if(cljs.core.truth_(temp__4655__auto___15450)){
var tws_15451 = temp__4655__auto___15450;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15436 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15436) : cljs.core.deref.call(null,G__15436));
})()),tws_15451);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_15452 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__15437 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15437) : cljs.core.deref.call(null,G__15437));
})());
if(cljs.core.truth_((function (){var and__6402__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__6402__auto__)){
return tws_15452;
} else {
return and__6402__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15438 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15438) : cljs.core.deref.call(null,G__15438));
})()),tws_15452);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__15453 = cljs.core.next(seq__15427__$1);
var G__15454 = null;
var G__15455 = (0);
var G__15456 = (0);
seq__15427 = G__15453;
chunk__15428 = G__15454;
count__15429 = G__15455;
i__15430 = G__15456;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15460 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15460) : cljs.core.deref.call(null,G__15460));
})()));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15462 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15462) : cljs.core.deref.call(null,G__15462));
})())) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__6414__auto__ = (function (){var G__15466 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15466) : cljs.core.deref.call(null,G__15466));
})();
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15470 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15470) : cljs.core.deref.call(null,G__15470));
})()));
var and__6402__auto__ = miser_width;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = maxcol;
if(cljs.core.truth_(and__6402__auto____$1)){
var and__6402__auto____$2 = ((function (){var G__15472 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15472) : cljs.core.deref.call(null,G__15472));
})() >= (maxcol - miser_width));
if(and__6402__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__6402__auto____$2;
}
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__7339__auto__ = (function (){var G__15473 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15473) : cljs.core.atom.call(null,G__15473));
})();
var prefer_table__7340__auto__ = (function (){var G__15474 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15474) : cljs.core.atom.call(null,G__15474));
})();
var method_cache__7341__auto__ = (function (){var G__15475 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15475) : cljs.core.atom.call(null,G__15475));
})();
var cached_hierarchy__7342__auto__ = (function (){var G__15476 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15476) : cljs.core.atom.call(null,G__15476));
})();
var hierarchy__7343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__,hierarchy__7343__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__,hierarchy__7343__auto__))
,cljs.core.cst$kw$default,hierarchy__7343__auto__,method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__6414__auto__ = (function (){var G__15478 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15478) : cljs.core.deref.call(null,G__15478));
})();
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__6414__auto____$1){
return or__6414__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__15479_SHARP_){
return cljs.core.not((function (){var and__6402__auto__ = cljs.pprint.nl_t_QMARK_(p1__15479_SHARP_);
if(cljs.core.truth_(and__6402__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__15479_SHARP_),lb);
} else {
return and__6402__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__15480_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__15480_SHARP_);
return cljs.core.not((function (){var and__6402__auto__ = cljs.pprint.nl_t_QMARK_(p1__15480_SHARP_);
if(cljs.core.truth_(and__6402__auto__)){
var or__6414__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__6414__auto__){
return or__6414__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__6402__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
var G__15489_15497 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__15490_15498 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15489_15497,G__15490_15498) : cljs.core.reset_BANG_.call(null,G__15489_15497,G__15490_15498));

var G__15491_15499 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__15492_15500 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15491_15499,G__15492_15500) : cljs.core.reset_BANG_.call(null,G__15491_15499,G__15492_15500));

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
var G__15493_15501 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__15494_15502 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15493_15501,G__15494_15502) : cljs.core.reset_BANG_.call(null,G__15493_15501,G__15494_15502));

var G__15495_15503 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__15496_15504 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15495_15503,G__15496_15504) : cljs.core.reset_BANG_.call(null,G__15495_15503,G__15496_15504));

var G__15505 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__15505;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15510 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15510) : cljs.core.deref.call(null,G__15510));
})()),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15511 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15511) : cljs.core.deref.call(null,G__15511));
})()),prefix);
} else {
}

var istr_15514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var G__15512 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15512) : cljs.core.deref.call(null,G__15512));
})() - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15513 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15513) : cljs.core.deref.call(null,G__15513));
})()),istr_15514);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15515_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__15515_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__15526 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15526,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15526,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__15529 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15529,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15529,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__15532 = newl;
var G__15533 = this$;
var G__15534 = section;
var G__15535 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__15532,G__15533,G__15534,G__15535) : cljs.pprint.emit_nl_QMARK_.call(null,G__15532,G__15533,G__15534,G__15535));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs$pprint$write_token_string(this$,section);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__15537 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15537) : cljs.core.deref.call(null,G__15537));
})());
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__15538 = new_buffer;
buffer = G__15538;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__15541 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15541) : cljs.core.deref.call(null,G__15541));
})()),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__15542 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15542) : cljs.core.deref.call(null,G__15542));
})())))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__4655__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__15544 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15544) : cljs.core.deref.call(null,G__15544));
})());
if(cljs.core.truth_(temp__4655__auto__)){
var buf = temp__4655__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4657__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__15547 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15547) : cljs.core.deref.call(null,G__15547));
})());
if(cljs.core.truth_(temp__4657__auto__)){
var tws = temp__4657__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15548 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15548) : cljs.core.deref.call(null,G__15548));
})()),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__15564 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15564) : cljs.core.deref.call(null,G__15564));
})())));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__15565 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15565) : cljs.core.deref.call(null,G__15565));
})()))){
var oldpos_15579 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__15566 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15566) : cljs.core.deref.call(null,G__15566));
})());
var newpos_15580 = (oldpos_15579 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_15580);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_15579,newpos_15580));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15567 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15567) : cljs.core.deref.call(null,G__15567));
})()),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15568 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15568) : cljs.core.deref.call(null,G__15568));
})()),"\n");

var seq__15569_15581 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__15570_15582 = null;
var count__15571_15583 = (0);
var i__15572_15584 = (0);
while(true){
if((i__15572_15584 < count__15571_15583)){
var l_15585__$1 = chunk__15570_15582.cljs$core$IIndexed$_nth$arity$2(null,i__15572_15584);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15573 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15573) : cljs.core.deref.call(null,G__15573));
})()),l_15585__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15574 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15574) : cljs.core.deref.call(null,G__15574));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15575 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15575) : cljs.core.deref.call(null,G__15575));
})()),prefix);
} else {
}

var G__15586 = seq__15569_15581;
var G__15587 = chunk__15570_15582;
var G__15588 = count__15571_15583;
var G__15589 = (i__15572_15584 + (1));
seq__15569_15581 = G__15586;
chunk__15570_15582 = G__15587;
count__15571_15583 = G__15588;
i__15572_15584 = G__15589;
continue;
} else {
var temp__4657__auto___15590 = cljs.core.seq(seq__15569_15581);
if(temp__4657__auto___15590){
var seq__15569_15591__$1 = temp__4657__auto___15590;
if(cljs.core.chunked_seq_QMARK_(seq__15569_15591__$1)){
var c__7225__auto___15592 = cljs.core.chunk_first(seq__15569_15591__$1);
var G__15593 = cljs.core.chunk_rest(seq__15569_15591__$1);
var G__15594 = c__7225__auto___15592;
var G__15595 = cljs.core.count(c__7225__auto___15592);
var G__15596 = (0);
seq__15569_15581 = G__15593;
chunk__15570_15582 = G__15594;
count__15571_15583 = G__15595;
i__15572_15584 = G__15596;
continue;
} else {
var l_15597__$1 = cljs.core.first(seq__15569_15591__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15576 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15576) : cljs.core.deref.call(null,G__15576));
})()),l_15597__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15577 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15577) : cljs.core.deref.call(null,G__15577));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15578 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15578) : cljs.core.deref.call(null,G__15578));
})()),prefix);
} else {
}

var G__15598 = cljs.core.next(seq__15569_15591__$1);
var G__15599 = null;
var G__15600 = (0);
var G__15601 = (0);
seq__15569_15581 = G__15598;
chunk__15570_15582 = G__15599;
count__15571_15583 = G__15600;
i__15572_15584 = G__15601;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__15605 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15605) : cljs.core.deref.call(null,G__15605));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15606 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15606) : cljs.core.deref.call(null,G__15606));
})()),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__15607 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15607) : cljs.core.deref.call(null,G__15607));
})());
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),null,null,null,null,null,null,null));
var fields = (function (){var G__15621 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15621) : cljs.core.atom.call(null,G__15621));
})();
if(typeof cljs.pprint.t_cljs$pprint15622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15622 = (function (pretty_writer,writer,max_columns,miser_width,lb,fields,meta15623){
this.pretty_writer = pretty_writer;
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta15623 = meta15623;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint15622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_15624,meta15623__$1){
var self__ = this;
var _15624__$1 = this;
return (new cljs.pprint.t_cljs$pprint15622(self__.pretty_writer,self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta15623__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_15624){
var self__ = this;
var _15624__$1 = this;
return self__.meta15623;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15622.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15622.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15625 = cljs.core._EQ_;
var expr__15626 = cljs.core.type(x);
if(cljs.core.truth_((pred__15625.cljs$core$IFn$_invoke$arity$2 ? pred__15625.cljs$core$IFn$_invoke$arity$2(String,expr__15626) : pred__15625.call(null,String,expr__15626)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__15628 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15628) : cljs.core.deref.call(null,G__15628));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15629 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15629) : cljs.core.deref.call(null,G__15629));
})()),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__15630 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15630) : cljs.core.deref.call(null,G__15630));
})());
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__15625.cljs$core$IFn$_invoke$arity$2 ? pred__15625.cljs$core$IFn$_invoke$arity$2(Number,expr__15626) : pred__15625.call(null,Number,expr__15626)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15626)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15622.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush(this$__$1);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15631 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15631) : cljs.core.deref.call(null,G__15631));
})()));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15622.prototype.cljs$pprint$IPrettyFlush$ = true;

cljs.pprint.t_cljs$pprint15622.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__15632 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15632) : cljs.core.deref.call(null,G__15632));
})()),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__15633 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15633) : cljs.core.deref.call(null,G__15633));
})()),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15622.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$pretty_DASH_writer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width], null)))], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta15623], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15622.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15622.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15622";

cljs.pprint.t_cljs$pprint15622.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.pprint/t_cljs$pprint15622");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint15622 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint15622(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta15623){
return (new cljs.pprint.t_cljs$pprint15622(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta15623));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint15622(cljs$pprint$pretty_writer,writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__15645 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15645) : cljs.core.deref.call(null,G__15645));
})()),null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__15646 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15646) : cljs.core.deref.call(null,G__15646));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__4657__auto___15656 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__15647 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15647) : cljs.core.deref.call(null,G__15647));
})());
if(cljs.core.truth_(temp__4657__auto___15656)){
var cb_15657 = temp__4657__auto___15656;
var G__15648_15658 = cljs.core.cst$kw$start;
(cb_15657.cljs$core$IFn$_invoke$arity$1 ? cb_15657.cljs$core$IFn$_invoke$arity$1(G__15648_15658) : cb_15657.call(null,G__15648_15658));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15649 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15649) : cljs.core.deref.call(null,G__15649));
})()),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15650 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15650) : cljs.core.deref.call(null,G__15650));
})()));
var G__15651_15659 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__15652_15660 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15651_15659,G__15652_15660) : cljs.core.reset_BANG_.call(null,G__15651_15659,G__15652_15660));

var G__15653 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__15654 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15653,G__15654) : cljs.core.reset_BANG_.call(null,G__15653,G__15654));
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__15655 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15655) : cljs.core.deref.call(null,G__15655));
})());
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__15667 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15667) : cljs.core.deref.call(null,G__15667));
})());
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__15668 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15668) : cljs.core.deref.call(null,G__15668));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15669 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15669) : cljs.core.deref.call(null,G__15669));
})()),suffix);
} else {
}

var temp__4657__auto___15673 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__15670 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15670) : cljs.core.deref.call(null,G__15670));
})());
if(cljs.core.truth_(temp__4657__auto___15673)){
var cb_15674 = temp__4657__auto___15673;
var G__15671_15675 = cljs.core.cst$kw$end;
(cb_15674.cljs$core$IFn$_invoke$arity$1 ? cb_15674.cljs$core$IFn$_invoke$arity$1(G__15671_15675) : cb_15674.call(null,G__15671_15675));
} else {
}
} else {
var oldpos_15676 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__15672 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15672) : cljs.core.deref.call(null,G__15672));
})());
var newpos_15677 = (oldpos_15676 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_15677);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_15676,newpos_15677));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__15680 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15680) : cljs.core.deref.call(null,G__15680));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__15681 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15681) : cljs.core.deref.call(null,G__15681));
})()),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__15696 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15696) : cljs.core.deref.call(null,G__15696));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__15697 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15697) : cljs.core.deref.call(null,G__15697));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var G__15698 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__15699 = (offset + (function (){var pred__15700 = cljs.core._EQ_;
var expr__15701 = relative_to;
if(cljs.core.truth_((function (){var G__15703 = cljs.core.cst$kw$block;
var G__15704 = expr__15701;
return (pred__15700.cljs$core$IFn$_invoke$arity$2 ? pred__15700.cljs$core$IFn$_invoke$arity$2(G__15703,G__15704) : pred__15700.call(null,G__15703,G__15704));
})())){
var G__15705 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15705) : cljs.core.deref.call(null,G__15705));
} else {
if(cljs.core.truth_((function (){var G__15706 = cljs.core.cst$kw$current;
var G__15707 = expr__15701;
return (pred__15700.cljs$core$IFn$_invoke$arity$2 ? pred__15700.cljs$core$IFn$_invoke$arity$2(G__15706,G__15707) : pred__15700.call(null,G__15706,G__15707));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__15708 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15708) : cljs.core.deref.call(null,G__15708));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15701)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15698,G__15699) : cljs.core.reset_BANG_.call(null,G__15698,G__15699));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__15709 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15709) : cljs.core.deref.call(null,G__15709));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1((function (){var G__15711 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15711) : cljs.core.deref.call(null,G__15711));
})());
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$right_DASH_margin,cljs.core.cst$kw$circle,cljs.core.cst$kw$lines,cljs.core.cst$kw$suppress_DASH_namespaces,cljs.core.cst$kw$radix,cljs.core.cst$kw$level,cljs.core.cst$kw$readably,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$length,cljs.core.cst$kw$pretty,cljs.core.cst$kw$base],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_miser_DASH_width_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_miser_DASH_width_STAR_,"target/uberjar/cljs/pprint.cljs",21,1,true,632,637,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_right_DASH_margin_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_right_DASH_margin_STAR_,"target/uberjar/cljs/pprint.cljs",22,1,true,625,630,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_circle_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_circle_STAR_,"target/uberjar/cljs/pprint.cljs",15,1,true,646,649,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_lines_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_lines_STAR_,"target/uberjar/cljs/pprint.cljs",14,1,true,640,643,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_suppress_DASH_namespaces_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_suppress_DASH_namespaces_STAR_,"target/uberjar/cljs/pprint.cljs",28,1,true,657,661,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_radix_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_radix_STAR_,"target/uberjar/cljs/pprint.cljs",14,1,true,665,670,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_level_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_level_STAR_,"cljs/core.cljs",16,1,true,119,130,cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_readably_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_readably_STAR_,"cljs/core.cljs",19,1,true,83,89,cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_pprint_DASH_dispatch_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_pprint_DASH_dispatch_STAR_,"target/uberjar/cljs/pprint.cljs",25,1,true,619,623,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_length_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_length_STAR_,"cljs/core.cljs",17,1,true,107,117,cljs.core.List.EMPTY,"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_pretty_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_pretty_STAR_,"target/uberjar/cljs/pprint.cljs",16,1,true,615,617,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_base_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_base_STAR_,"target/uberjar/cljs/pprint.cljs",13,1,true,672,675,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__15712_SHARP_){
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__15712_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__15712_SHARP_)], null);
} else {
return null;
}
}),cljs.core.array_seq([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__6402__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__6402__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1((function (){var G__15718 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15718) : cljs.core.deref.call(null,G__15718));
})());
} else {
return and__6402__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__6402__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__6402__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__7496__auto__ = [];
var len__7489__auto___15735 = arguments.length;
var i__7490__auto___15736 = (0);
while(true){
if((i__7490__auto___15736 < len__7489__auto___15735)){
args__7496__auto__.push((arguments[i__7490__auto___15736]));

var G__15737 = (i__7490__auto___15736 + (1));
i__7490__auto___15736 = G__15737;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_15721 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_15722 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_15723 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_15724 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_15725 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_15726 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_15727 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_15728 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_15729 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_15730 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_15731 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_15732 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__14909__auto___15738 = base_writer;
var new_writer__14910__auto___15739 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__14909__auto___15738));
var _STAR_out_STAR_15733_15740 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__14910__auto___15739)?cljs.pprint.make_pretty_writer(base_writer__14909__auto___15738,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__14909__auto___15738);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15733_15740;
}} else {
var _STAR_out_STAR_15734_15741 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15734_15741;
}}

if(optval === true){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_15732;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_15731;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_15730;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_15729;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_15728;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_15727;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_15726;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_15725;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15724;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_15723;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_15722;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_15721;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq15719){
var G__15720 = cljs.core.first(seq15719);
var seq15719__$1 = cljs.core.next(seq15719);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__15720,seq15719__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var args15742 = [];
var len__7489__auto___15748 = arguments.length;
var i__7490__auto___15749 = (0);
while(true){
if((i__7490__auto___15749 < len__7489__auto___15748)){
args15742.push((arguments[i__7490__auto___15749]));

var G__15750 = (i__7490__auto___15749 + (1));
i__7490__auto___15749 = G__15750;
continue;
} else {
}
break;
}

var G__15744 = args15742.length;
switch (G__15744) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15742.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_15745 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15745;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__14909__auto__ = writer;
var new_writer__14910__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__14909__auto__));
var _STAR_out_STAR_15746 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__14910__auto__)?cljs.pprint.make_pretty_writer(base_writer__14909__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__14909__auto__);

try{var _STAR_print_pretty_STAR_15747_15752 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_15747_15752;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15746;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__6402__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__6402__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__6402__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__7496__auto__ = [];
var len__7489__auto___15756 = arguments.length;
var i__7490__auto___15757 = (0);
while(true){
if((i__7490__auto___15757 < len__7489__auto___15756)){
args__7496__auto__.push((arguments[i__7490__auto___15757]));

var G__15758 = (i__7490__auto___15757 + (1));
i__7490__auto___15757 = G__15758;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq15753){
var G__15754 = cljs.core.first(seq15753);
var seq15753__$1 = cljs.core.next(seq15753);
var G__15755 = cljs.core.first(seq15753__$1);
var seq15753__$2 = cljs.core.next(seq15753__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__15754,G__15755,seq15753__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k15760,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__15762 = (((k15760 instanceof cljs.core.Keyword))?k15760.fqn:null);
switch (G__15762) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15760,else__7039__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = true;

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15759){
var self__ = this;
var G__15759__$1 = this;
return (new cljs.core.RecordIter((0),G__15759__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__15759){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__15763 = cljs.core.keyword_identical_QMARK_;
var expr__15764 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__15766 = cljs.core.cst$kw$seq;
var G__15767 = expr__15764;
return (pred__15763.cljs$core$IFn$_invoke$arity$2 ? pred__15763.cljs$core$IFn$_invoke$arity$2(G__15766,G__15767) : pred__15763.call(null,G__15766,G__15767));
})())){
return (new cljs.pprint.arg_navigator(G__15759,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15768 = cljs.core.cst$kw$rest;
var G__15769 = expr__15764;
return (pred__15763.cljs$core$IFn$_invoke$arity$2 ? pred__15763.cljs$core$IFn$_invoke$arity$2(G__15768,G__15769) : pred__15763.call(null,G__15768,G__15769));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__15759,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15770 = cljs.core.cst$kw$pos;
var G__15771 = expr__15764;
return (pred__15763.cljs$core$IFn$_invoke$arity$2 ? pred__15763.cljs$core$IFn$_invoke$arity$2(G__15770,G__15771) : pred__15763.call(null,G__15770,G__15771));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__15759,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__15759),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__15759){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__15759,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__15761){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__15761),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__15761),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__15761),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15761,cljs.core.cst$kw$seq,cljs.core.array_seq([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__15776 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__15781 = navigator;
var G__15782 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__15781,G__15782) : cljs.pprint.relative_reposition.call(null,G__15781,G__15782));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k15784,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__15786 = (((k15784 instanceof cljs.core.Keyword))?k15784.fqn:null);
switch (G__15786) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15784,else__7039__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = true;

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15783){
var self__ = this;
var G__15783__$1 = this;
return (new cljs.core.RecordIter((0),G__15783__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__15783){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__15787 = cljs.core.keyword_identical_QMARK_;
var expr__15788 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__15790 = cljs.core.cst$kw$func;
var G__15791 = expr__15788;
return (pred__15787.cljs$core$IFn$_invoke$arity$2 ? pred__15787.cljs$core$IFn$_invoke$arity$2(G__15790,G__15791) : pred__15787.call(null,G__15790,G__15791));
})())){
return (new cljs.pprint.compiled_directive(G__15783,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15792 = cljs.core.cst$kw$def;
var G__15793 = expr__15788;
return (pred__15787.cljs$core$IFn$_invoke$arity$2 ? pred__15787.cljs$core$IFn$_invoke$arity$2(G__15792,G__15793) : pred__15787.call(null,G__15792,G__15793));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__15783,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15794 = cljs.core.cst$kw$params;
var G__15795 = expr__15788;
return (pred__15787.cljs$core$IFn$_invoke$arity$2 ? pred__15787.cljs$core$IFn$_invoke$arity$2(G__15794,G__15795) : pred__15787.call(null,G__15794,G__15795));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__15783,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15796 = cljs.core.cst$kw$offset;
var G__15797 = expr__15788;
return (pred__15787.cljs$core$IFn$_invoke$arity$2 ? pred__15787.cljs$core$IFn$_invoke$arity$2(G__15796,G__15797) : pred__15787.call(null,G__15796,G__15797));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__15783,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__15783),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__15783){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__15783,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__15785){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__15785),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__15785),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__15785),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__15785),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15785,cljs.core.cst$kw$func,cljs.core.array_seq([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__15799,navigator){
var vec__15809 = p__15799;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15809,(0),null);
var vec__15812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15809,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(1),null);
var vec__15815 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15815,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15815,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__15821 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15821,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15821,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__6414__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__15827 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15827,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15827,(1),null);
var base_output = (function (){var or__6414__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(chars),cljs.core.str(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(base_output),cljs.core.str(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__15830_SHARP_){
if((p1__15830_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__15830_SHARP_,base),cljs.core.quot(p1__15830_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__15831_SHARP_){
if((p1__15831_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__15831_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__15831_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__15836 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15836,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15836,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_15839 = (arg < (0));
var pos_arg_15840 = ((neg_15839)?(- arg):arg);
var raw_str_15841 = cljs.pprint.opt_base_str(base,pos_arg_15840);
var group_str_15842 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_15839,pos_arg_15840,raw_str_15841,vec__15836,arg,arg_navigator__$1){
return (function (p1__15832_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__15832_SHARP_);
});})(neg_15839,pos_arg_15840,raw_str_15841,vec__15836,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_15841));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_15841);
var signed_str_15843 = ((neg_15839)?[cljs.core.str("-"),cljs.core.str(group_str_15842)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_15842)].join(''):group_str_15842
));
var padded_str_15844 = (((signed_str_15843.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_15843.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_15843)].join(''):signed_str_15843);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([padded_str_15844], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__15845 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__15846 = (pos - (1));
var G__15847 = cljs.core.first(remainder);
var G__15848 = cljs.core.next(remainder);
acc = G__15845;
pos = G__15846;
this$ = G__15847;
remainder = G__15848;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__15852 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zero"], 0));
} else {
var abs_arg_15855 = (((arg < (0)))?(- arg):arg);
var parts_15856 = cljs.pprint.remainders((1000),abs_arg_15855);
if((cljs.core.count(parts_15856) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_15857 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_15856);
var full_str_15858 = cljs.pprint.add_english_scales(parts_strs_15857,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_15858)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__15862 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15862,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15862,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zeroth"], 0));
} else {
var abs_arg_15865 = (((arg < (0)))?(- arg):arg);
var parts_15866 = cljs.pprint.remainders((1000),abs_arg_15865);
if((cljs.core.count(parts_15866) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_15867 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_15866));
var head_str_15868 = cljs.pprint.add_english_scales(parts_strs_15867,(1));
var tail_str_15869 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_15866));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_(head_str_15868))) && (!(cljs.core.empty_QMARK_(tail_str_15869))))?[cljs.core.str(head_str_15868),cljs.core.str(", "),cljs.core.str(tail_str_15869)].join(''):((!(cljs.core.empty_QMARK_(head_str_15868)))?[cljs.core.str(head_str_15868),cljs.core.str("th")].join(''):tail_str_15869
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_15870 = cljs.core.rem(arg,(100));
var not_teens_15871 = (((11) < low_two_digits_15870)) || (((19) > low_two_digits_15870));
var low_digit_15872 = cljs.core.rem(low_two_digits_15870,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((low_digit_15872 === (1))) && (not_teens_15871))?"st":((((low_digit_15872 === (2))) && (not_teens_15871))?"nd":((((low_digit_15872 === (3))) && (not_teens_15871))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__15876 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15876,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15876,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_15879 = cljs.pprint.remainders((10),arg);
var acc_15880 = cljs.core.PersistentVector.EMPTY;
var pos_15881 = (cljs.core.count(digits_15879) - (1));
var digits_15882__$1 = digits_15879;
while(true){
if(cljs.core.empty_QMARK_(digits_15882__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_15880)], 0));
} else {
var digit_15883 = cljs.core.first(digits_15882__$1);
var G__15884 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_15883))?acc_15880:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_15880,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_15881),(digit_15883 - (1)))));
var G__15885 = (pos_15881 - (1));
var G__15886 = cljs.core.next(digits_15882__$1);
acc_15880 = G__15884;
pos_15881 = G__15885;
digits_15882__$1 = G__15886;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__15890 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15890,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15890,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__15903 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15903,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15903,(1),null);
var pred__15906_15913 = cljs.core._EQ_;
var expr__15907_15914 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__15909 = "o";
var G__15910 = expr__15907_15914;
return (pred__15906_15913.cljs$core$IFn$_invoke$arity$2 ? pred__15906_15913.cljs$core$IFn$_invoke$arity$2(G__15909,G__15910) : pred__15906_15913.call(null,G__15909,G__15910));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__15911 = "u";
var G__15912 = expr__15907_15914;
return (pred__15906_15913.cljs$core$IFn$_invoke$arity$2 ? pred__15906_15913.cljs$core$IFn$_invoke$arity$2(G__15911,G__15912) : pred__15906_15913.call(null,G__15911,G__15912));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__15906_15913.cljs$core$IFn$_invoke$arity$2 ? pred__15906_15913.cljs$core$IFn$_invoke$arity$2(null,expr__15907_15914) : pred__15906_15913.call(null,null,expr__15907_15914)))){
cljs.pprint.print_char(c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15907_15914)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__15918 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__15927 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15927,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15927,(1),null);
var vec__15930 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15930,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15930,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__15936 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__15939 = (i - (1));
i = G__15939;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__6414__auto__ = d;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__6745__auto__ = (2);
var y__6746__auto__ = w;
return ((x__6745__auto__ > y__6746__auto__) ? x__6745__auto__ : y__6746__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__6745__auto__ = (e + (1));
var y__6746__auto__ = (w__$1 - (1));
return ((x__6745__auto__ > y__6746__auto__) ? x__6745__auto__ : y__6746__auto__);
})():(w__$1 + e)
));
var vec__15943 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__15949 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15949,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15949,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__15964 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15964,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15964,(1),null);
var vec__15967 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__15970 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__6414__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__15973 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__6402__auto__ = w;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = d;
if(cljs.core.truth_(and__6402__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_15976 = cljs.core.count(fixed_repr__$1);
var signed_len_15977 = (cljs.core.truth_(add_sign)?(len_15976 + (1)):len_15976);
var prepend_zero_15978__$1 = (prepend_zero) && (!((signed_len_15977 >= w)));
var append_zero_15979__$1 = (append_zero) && (!((signed_len_15977 >= w)));
var full_len_15980 = (((prepend_zero_15978__$1) || (append_zero_15979__$1))?(signed_len_15977 + (1)):signed_len_15977);
if(cljs.core.truth_((function (){var and__6402__auto__ = (full_len_15980 > w);
if(and__6402__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6402__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_15980),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_15978__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_15979__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__15997 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__16003_16013 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__16004_16014 = G__16003_16013;
var mantissa_16015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16004_16014,(0),null);
var exp_16016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16004_16014,(1),null);
var G__16003_16017__$1 = G__16003_16013;
while(true){
var vec__16007_16018 = G__16003_16017__$1;
var mantissa_16019__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007_16018,(0),null);
var exp_16020__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007_16018,(1),null);
var w_16021 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_16022 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_16023 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_16024 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_16025 = (function (){var or__6414__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return "E";
}
})();
var add_sign_16026 = (function (){var or__6414__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_16027 = (k_16024 <= (0));
var scaled_exp_16028 = (exp_16020__$1 - (k_16024 - (1)));
var scaled_exp_str_16029 = [cljs.core.str(Math.abs(scaled_exp_16028))].join('');
var scaled_exp_str_16030__$1 = [cljs.core.str(expchar_16025),cljs.core.str((((scaled_exp_16028 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_16023)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_16023 - cljs.core.count(scaled_exp_str_16029)),"0")):null)),cljs.core.str(scaled_exp_str_16029)].join('');
var exp_width_16031 = cljs.core.count(scaled_exp_str_16030__$1);
var base_mantissa_width_16032 = cljs.core.count(mantissa_16019__$1);
var scaled_mantissa_16033 = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_16024),"0"))),cljs.core.str(mantissa_16019__$1),cljs.core.str((cljs.core.truth_(d_16022)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_16022 - (base_mantissa_width_16032 - (1))) - (((k_16024 < (0)))?(- k_16024):(0))),"0")):null))].join('');
var w_mantissa_16034 = (cljs.core.truth_(w_16021)?(w_16021 - exp_width_16031):null);
var vec__16010_16035 = cljs.pprint.round_str(scaled_mantissa_16033,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_16024,(0)))?(d_16022 - (1)):(((k_16024 > (0)))?d_16022:(((k_16024 < (0)))?(d_16022 - (1)):null))),(cljs.core.truth_(w_mantissa_16034)?(w_mantissa_16034 - (cljs.core.truth_(add_sign_16026)?(1):(0))):null));
var rounded_mantissa_16036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010_16035,(0),null);
var __16037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010_16035,(1),null);
var incr_exp_16038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010_16035,(2),null);
var full_mantissa_16039 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_16036,k_16024);
var append_zero_16040 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_16024,cljs.core.count(rounded_mantissa_16036))) && ((d_16022 == null));
if(cljs.core.not(incr_exp_16038)){
if(cljs.core.truth_(w_16021)){
var len_16041 = (cljs.core.count(full_mantissa_16039) + exp_width_16031);
var signed_len_16042 = (cljs.core.truth_(add_sign_16026)?(len_16041 + (1)):len_16041);
var prepend_zero_16043__$1 = (prepend_zero_16027) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_16042,w_16021)));
var full_len_16044 = ((prepend_zero_16043__$1)?(signed_len_16042 + (1)):signed_len_16042);
var append_zero_16045__$1 = (append_zero_16040) && ((full_len_16044 < w_16021));
if(cljs.core.truth_((function (){var and__6402__auto__ = (function (){var or__6414__auto__ = (full_len_16044 > w_16021);
if(or__6414__auto__){
return or__6414__auto__;
} else {
var and__6402__auto__ = e_16023;
if(cljs.core.truth_(and__6402__auto__)){
return ((exp_width_16031 - (2)) > e_16023);
} else {
return and__6402__auto__;
}
}
})();
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6402__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_16021,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_16021 - full_len_16044) - ((append_zero_16045__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_16026)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_16043__$1)?"0":null)),cljs.core.str(full_mantissa_16039),cljs.core.str(((append_zero_16045__$1)?"0":null)),cljs.core.str(scaled_exp_str_16030__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign_16026)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_16027)?"0":null)),cljs.core.str(full_mantissa_16039),cljs.core.str(((append_zero_16040)?"0":null)),cljs.core.str(scaled_exp_str_16030__$1)].join('')], 0));
}
} else {
var G__16046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_16036,(exp_16020__$1 + (1))], null);
G__16003_16017__$1 = G__16046;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__16053 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16053,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16053,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__16056 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16056,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16056,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__6745__auto__ = cljs.core.count(mantissa);
var y__6746__auto__ = (function (){var x__6752__auto__ = n;
var y__6753__auto__ = (7);
return ((x__6752__auto__ < y__6753__auto__) ? x__6752__auto__ : y__6753__auto__);
})();
return ((x__6745__auto__ > y__6746__auto__) ? x__6745__auto__ : y__6746__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__16068 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16068,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16068,(1),null);
var vec__16071 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16071,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16071,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__6414__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (arg < (0));
}
})();
var vec__16074 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16074,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16074,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16074,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__6402__auto__)){
return add_sign;
} else {
return and__6402__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__6402__auto__){
return add_sign;
} else {
return and__6402__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__16080 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16080,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16080,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__16086 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16086,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16086,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__16092 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16101 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(1),null);
var vec__16104 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16104,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16104,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__6414__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__6414__auto__){
return or__6414__auto__;
} else {
var and__6402__auto__ = max_count;
if(cljs.core.truth_(and__6402__auto__)){
return (count >= max_count);
} else {
return and__6402__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__16107 = (count + (1));
var G__16108 = iter_result;
var G__16109 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__16107;
args__$1 = G__16108;
last_pos = G__16109;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16116 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16116,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16116,(1),null);
var vec__16119 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16119,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16119,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__6414__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__6414__auto__){
return or__6414__auto__;
} else {
var and__6402__auto__ = max_count;
if(cljs.core.truth_(and__6402__auto__)){
return (count >= max_count);
} else {
return and__6402__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__16122 = (count + (1));
var G__16123 = cljs.core.next(arg_list__$1);
count = G__16122;
arg_list__$1 = G__16123;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16127 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16127,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16127,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__6414__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__6414__auto__){
return or__6414__auto__;
} else {
var and__6402__auto__ = max_count;
if(cljs.core.truth_(and__6402__auto__)){
return (count >= max_count);
} else {
return and__6402__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__16130 = (count + (1));
var G__16131 = iter_result;
var G__16132 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__16130;
navigator__$2 = G__16131;
last_pos = G__16132;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16139 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16139,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16139,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__6414__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__6414__auto__){
return or__6414__auto__;
} else {
var and__6402__auto__ = max_count;
if(cljs.core.truth_(and__6402__auto__)){
return (count >= max_count);
} else {
return and__6402__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__16142 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16142,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16142,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__16145 = (count + (1));
var G__16146 = navigator__$3;
count = G__16145;
navigator__$2 = G__16146;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__16151 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_16154 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16154;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16151,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16151,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__16155 = cljs.core.next(clauses__$1);
var G__16156 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__16157 = iter_result;
clauses__$1 = G__16155;
acc = G__16156;
navigator__$1 = G__16157;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__16171 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var else$ = temp__4657__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__16174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(1),null);
var navigator__$1 = (function (){var or__6414__auto__ = new_navigator;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return navigator;
}
})();
var vec__16177 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16177,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16177,(1),null);
var navigator__$2 = (function (){var or__6414__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__6414__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__6414__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__16180 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(1),null);
var slots = (function (){var x__6745__auto__ = (1);
var y__6746__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__6745__auto__ > y__6746__auto__) ? x__6745__auto__ : y__6746__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__6745__auto__ = minpad;
var y__6746__auto__ = cljs.core.quot(total_pad,slots);
return ((x__6745__auto__ > y__6746__auto__) ? x__6745__auto__ : y__6746__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__6402__auto__ = eol_str;
if(cljs.core.truth_(and__6402__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__16183 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16183) : cljs.core.deref.call(null,G__16183));
})())) + min_remaining) + result_columns) > max_columns);
} else {
return and__6402__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eol_str], 0));
} else {
}

var slots_16184__$1 = slots;
var extra_pad_16185__$1 = extra_pad;
var strs_16186__$1 = strs;
var pad_only_16187 = (function (){var or__6414__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_16186__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_16186__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(((cljs.core.not(pad_only_16187))?cljs.core.first(strs_16186__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__6414__auto__ = pad_only_16187;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = cljs.core.next(strs_16186__$1);
if(or__6414__auto____$1){
return or__6414__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_16185__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__16188 = (slots_16184__$1 - (1));
var G__16189 = (extra_pad_16185__$1 - (1));
var G__16190 = (cljs.core.truth_(pad_only_16187)?strs_16186__$1:cljs.core.next(strs_16186__$1));
var G__16191 = false;
slots_16184__$1 = G__16188;
extra_pad_16185__$1 = G__16189;
strs_16186__$1 = G__16190;
pad_only_16187 = G__16191;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint16198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16198 = (function (downcase_writer,writer,meta16199){
this.downcase_writer = downcase_writer;
this.writer = writer;
this.meta16199 = meta16199;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint16198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16200,meta16199__$1){
var self__ = this;
var _16200__$1 = this;
return (new cljs.pprint.t_cljs$pprint16198(self__.downcase_writer,self__.writer,meta16199__$1));
});

cljs.pprint.t_cljs$pprint16198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16200){
var self__ = this;
var _16200__$1 = this;
return self__.meta16199;
});

cljs.pprint.t_cljs$pprint16198.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint16198.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16201 = cljs.core._EQ_;
var expr__16202 = cljs.core.type(x);
if(cljs.core.truth_((pred__16201.cljs$core$IFn$_invoke$arity$2 ? pred__16201.cljs$core$IFn$_invoke$arity$2(String,expr__16202) : pred__16201.call(null,String,expr__16202)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__16201.cljs$core$IFn$_invoke$arity$2 ? pred__16201.cljs$core$IFn$_invoke$arity$2(Number,expr__16202) : pred__16201.call(null,Number,expr__16202)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16202)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint16198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$downcase_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, converting all characters to lower case"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$meta16199], null);
});

cljs.pprint.t_cljs$pprint16198.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16198.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16198";

cljs.pprint.t_cljs$pprint16198.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.pprint/t_cljs$pprint16198");
});

cljs.pprint.__GT_t_cljs$pprint16198 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint16198(downcase_writer__$1,writer__$1,meta16199){
return (new cljs.pprint.t_cljs$pprint16198(downcase_writer__$1,writer__$1,meta16199));
});

}

return (new cljs.pprint.t_cljs$pprint16198(cljs$pprint$downcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint16210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16210 = (function (upcase_writer,writer,meta16211){
this.upcase_writer = upcase_writer;
this.writer = writer;
this.meta16211 = meta16211;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint16210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16212,meta16211__$1){
var self__ = this;
var _16212__$1 = this;
return (new cljs.pprint.t_cljs$pprint16210(self__.upcase_writer,self__.writer,meta16211__$1));
});

cljs.pprint.t_cljs$pprint16210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16212){
var self__ = this;
var _16212__$1 = this;
return self__.meta16211;
});

cljs.pprint.t_cljs$pprint16210.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint16210.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16213 = cljs.core._EQ_;
var expr__16214 = cljs.core.type(x);
if(cljs.core.truth_((pred__16213.cljs$core$IFn$_invoke$arity$2 ? pred__16213.cljs$core$IFn$_invoke$arity$2(String,expr__16214) : pred__16213.call(null,String,expr__16214)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__16213.cljs$core$IFn$_invoke$arity$2 ? pred__16213.cljs$core$IFn$_invoke$arity$2(Number,expr__16214) : pred__16213.call(null,Number,expr__16214)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16214)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint16210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$upcase_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, converting all characters to upper case"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$meta16211], null);
});

cljs.pprint.t_cljs$pprint16210.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16210.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16210";

cljs.pprint.t_cljs$pprint16210.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.pprint/t_cljs$pprint16210");
});

cljs.pprint.__GT_t_cljs$pprint16210 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint16210(upcase_writer__$1,writer__$1,meta16211){
return (new cljs.pprint.t_cljs$pprint16210(upcase_writer__$1,writer__$1,meta16211));
});

}

return (new cljs.pprint.t_cljs$pprint16210(cljs$pprint$upcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__6402__auto__ = first_QMARK_;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = f;
if(cljs.core.truth_(and__6402__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case(f)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__6402__auto__ = m;
if(cljs.core.truth_(and__6402__auto__)){
return (m.index + (1));
} else {
return and__6402__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.pprint.t_cljs$pprint16227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16227 = (function (capitalize_word_writer,writer,last_was_whitespace_QMARK_,meta16228){
this.capitalize_word_writer = capitalize_word_writer;
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta16228 = meta16228;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint16227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_16229,meta16228__$1){
var self__ = this;
var _16229__$1 = this;
return (new cljs.pprint.t_cljs$pprint16227(self__.capitalize_word_writer,self__.writer,self__.last_was_whitespace_QMARK_,meta16228__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_16229){
var self__ = this;
var _16229__$1 = this;
return self__.meta16228;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16227.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16227.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16230 = cljs.core._EQ_;
var expr__16231 = cljs.core.type(x);
if(cljs.core.truth_((pred__16230.cljs$core$IFn$_invoke$arity$2 ? pred__16230.cljs$core$IFn$_invoke$arity$2(String,expr__16231) : pred__16230.call(null,String,expr__16231)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))));

if((s.length > (0))){
var G__16233 = self__.last_was_whitespace_QMARK_;
var G__16234 = (function (){var G__16235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__16235);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16233,G__16234) : cljs.core.reset_BANG_.call(null,G__16233,G__16234));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__16230.cljs$core$IFn$_invoke$arity$2 ? pred__16230.cljs$core$IFn$_invoke$arity$2(Number,expr__16231) : pred__16230.call(null,Number,expr__16231)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

var G__16236 = self__.last_was_whitespace_QMARK_;
var G__16237 = goog.string.isEmptyOrWhitespace(c);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16236,G__16237) : cljs.core.reset_BANG_.call(null,G__16236,G__16237));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16231)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16227.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$capitalize_DASH_word_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, capitalizing all words"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta16228], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16227.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16227.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16227";

cljs.pprint.t_cljs$pprint16227.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.pprint/t_cljs$pprint16227");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint16227 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint16227(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta16228){
return (new cljs.pprint.t_cljs$pprint16227(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta16228));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint16227(cljs$pprint$capitalize_word_writer,writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
if(typeof cljs.pprint.t_cljs$pprint16244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16244 = (function (init_cap_writer,writer,capped,meta16245){
this.init_cap_writer = init_cap_writer;
this.writer = writer;
this.capped = capped;
this.meta16245 = meta16245;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint16244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_16246,meta16245__$1){
var self__ = this;
var _16246__$1 = this;
return (new cljs.pprint.t_cljs$pprint16244(self__.init_cap_writer,self__.writer,self__.capped,meta16245__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint16244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_16246){
var self__ = this;
var _16246__$1 = this;
return self__.meta16245;
});})(capped))
;

cljs.pprint.t_cljs$pprint16244.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint16244.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16247 = cljs.core._EQ_;
var expr__16248 = cljs.core.type(x);
if(cljs.core.truth_((pred__16247.cljs$core$IFn$_invoke$arity$2 ? pred__16247.cljs$core$IFn$_invoke$arity$2(String,expr__16248) : pred__16247.call(null,String,expr__16248)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__6402__auto__ = m;
if(cljs.core.truth_(and__6402__auto__)){
return m.index;
} else {
return and__6402__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__16247.cljs$core$IFn$_invoke$arity$2 ? pred__16247.cljs$core$IFn$_invoke$arity$2(Number,expr__16248) : pred__16247.call(null,Number,expr__16248)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)));
if(and__6402__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__6402__auto__;
}
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16248)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint16244.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$init_DASH_cap_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, capitalizing the first word"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta16245], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint16244.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16244.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16244";

cljs.pprint.t_cljs$pprint16244.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.pprint/t_cljs$pprint16244");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint16244 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint16244(init_cap_writer__$1,writer__$1,capped__$1,meta16245){
return (new cljs.pprint.t_cljs$pprint16244(init_cap_writer__$1,writer__$1,capped__$1,meta16245));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint16244(cljs$pprint$init_cap_writer,writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_16251 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16251;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || (cljs.core._STAR_out_STAR_.cljs$core$IDeref$))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__16255 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16255) : cljs.core.deref.call(null,G__16255));
})()))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_16258 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_16259 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_16260 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__16257 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16257) : cljs.core.deref.call(null,G__16257));
})()));
var space_count_16261 = (((current_16260 < colnum_16258))?(colnum_16258 - current_16260):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_16259,(0)))?(0):(colinc_16259 - cljs.core.rem((current_16260 - colnum_16258),colinc_16259))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_16261," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_16264 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_16265 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_16266 = (colrel_16264 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__16263 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16263) : cljs.core.deref.call(null,G__16263));
})())));
var offset_16267 = (((colinc_16265 > (0)))?cljs.core.rem(start_col_16266,colinc_16265):(0));
var space_count_16268 = (colrel_16264 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_16267))?(0):(colinc_16265 - offset_16267)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_16268," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__16274 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16274,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16274,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16277_16279 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16278_16280 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16278_16280;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16277_16279;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16281_SHARP_,p2__16282_SHARP_,p3__16283_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__16281_SHARP_,p2__16282_SHARP_,p3__16283_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16284_SHARP_,p2__16285_SHARP_,p3__16286_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__16284_SHARP_,p2__16285_SHARP_,p3__16286_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16287_SHARP_,p2__16288_SHARP_,p3__16289_SHARP_){
return cljs.pprint.format_integer((10),p1__16287_SHARP_,p2__16288_SHARP_,p3__16289_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16290_SHARP_,p2__16291_SHARP_,p3__16292_SHARP_){
return cljs.pprint.format_integer((2),p1__16290_SHARP_,p2__16291_SHARP_,p3__16292_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16293_SHARP_,p2__16294_SHARP_,p3__16295_SHARP_){
return cljs.pprint.format_integer((8),p1__16293_SHARP_,p2__16294_SHARP_,p3__16295_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__16296_SHARP_,p2__16297_SHARP_,p3__16298_SHARP_){
return cljs.pprint.format_integer((16),p1__16296_SHARP_,p2__16297_SHARP_,p3__16298_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__16299_SHARP_,p2__16300_SHARP_,p3__16301_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__16299_SHARP_),p1__16299_SHARP_,p2__16300_SHARP_,p3__16301_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6402__auto__;
}
})())){
return (function (p1__16302_SHARP_,p2__16303_SHARP_,p3__16304_SHARP_){
return cljs.pprint.format_old_roman(p1__16302_SHARP_,p2__16303_SHARP_,p3__16304_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__16305_SHARP_,p2__16306_SHARP_,p3__16307_SHARP_){
return cljs.pprint.format_new_roman(p1__16305_SHARP_,p2__16306_SHARP_,p3__16307_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__16308_SHARP_,p2__16309_SHARP_,p3__16310_SHARP_){
return cljs.pprint.format_ordinal_english(p1__16308_SHARP_,p2__16309_SHARP_,p3__16310_SHARP_);
});
} else {
return (function (p1__16311_SHARP_,p2__16312_SHARP_,p3__16313_SHARP_){
return cljs.pprint.format_cardinal_english(p1__16311_SHARP_,p2__16312_SHARP_,p3__16313_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__16323 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16323,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16323,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__7329__auto___16341 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_16342 = (0);
while(true){
if((i_16342 < n__7329__auto___16341)){
cljs.pprint.prn();

var G__16343 = (i_16342 + (1));
i_16342 = G__16343;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_16344 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_16344 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__7329__auto___16345 = (cnt_16344 - (1));
var i_16346 = (0);
while(true){
if((i_16346 < n__7329__auto___16345)){
cljs.pprint.prn();

var G__16347 = (i_16346 + (1));
i_16346 = G__16347;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__7329__auto___16348 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_16349 = (0);
while(true){
if((i_16349 < n__7329__auto___16348)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\f"], 0));

var G__16350 = (i_16349 + (1));
i_16349 = G__16350;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__16314_SHARP_,p2__16315_SHARP_,p3__16316_SHARP_){
return cljs.pprint.relative_tabulation(p1__16314_SHARP_,p2__16315_SHARP_,p3__16316_SHARP_);
});
} else {
return (function (p1__16317_SHARP_,p2__16318_SHARP_,p3__16319_SHARP_){
return cljs.pprint.absolute_tabulation(p1__16317_SHARP_,p2__16318_SHARP_,p3__16319_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__16326 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16326,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16326,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__16329 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16329,(1),null);
var vec__16332 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16332,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16332,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6402__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__16320_SHARP_,p2__16321_SHARP_,p3__16322_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__16320_SHARP_,p2__16321_SHARP_,p3__16322_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__6402__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__6402__auto__ = arg1;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = arg2;
if(cljs.core.truth_(and__6402__auto____$1)){
return arg3;
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__6402__auto__ = arg1;
if(cljs.core.truth_(and__6402__auto__)){
return arg2;
} else {
return and__6402__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__6414__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__16335 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16335,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16335,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__16338 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16338,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16338,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__16351){
var vec__16355 = p__16351;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16355,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16355,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16355,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__16358){
var vec__16362 = p__16358;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__16369){
var vec__16370 = p__16369;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16370,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16370,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16370,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error([cljs.core.str("Flag \""),cljs.core.str(cljs.core.first(s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__6402__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__6402__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__6402__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__6402__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__6402__auto__){
var and__6402__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__6402__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return cljs.pprint.format_error([cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__6752__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__6753__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__6752__auto__ < y__6753__auto__) ? x__6752__auto__ : y__6753__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.array_seq([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__16373_SHARP_,p2__16374_SHARP_){
var val = cljs.core.first(p1__16373_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__16374_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error([cljs.core.str("Parameter "),cljs.core.str(cljs.core.name(cljs.core.first(p2__16374_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type(val))].join(''),cljs.core.second(p1__16373_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__7194__auto__ = (function cljs$pprint$map_params_$_iter__16408(s__16409){
return (new cljs.core.LazySeq(null,(function (){
var s__16409__$1 = s__16409;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16409__$1);
if(temp__4657__auto__){
var s__16409__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16409__$2)){
var c__7192__auto__ = cljs.core.chunk_first(s__16409__$2);
var size__7193__auto__ = cljs.core.count(c__7192__auto__);
var b__16411 = cljs.core.chunk_buffer(size__7193__auto__);
if((function (){var i__16410 = (0);
while(true){
if((i__16410 < size__7193__auto__)){
var vec__16426 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7192__auto__,i__16410);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16426,(0),null);
var vec__16429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16426,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16429,(0),null);
cljs.core.chunk_append(b__16411,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__16438 = (i__16410 + (1));
i__16410 = G__16438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16411),cljs$pprint$map_params_$_iter__16408(cljs.core.chunk_rest(s__16409__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16411),null);
}
} else {
var vec__16432 = cljs.core.first(s__16409__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16432,(0),null);
var vec__16435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16432,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16435,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__16408(cljs.core.rest(s__16409__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7194__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16375_SHARP_,p2__16376_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__16375_SHARP_,p2__16376_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16377_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__16377_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__16451 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16451,(0),null);
var vec__16454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16451,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16454,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16454,(1),null);
var vec__16457 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(0),null);
var vec__16460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16460,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16460,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16460,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error([cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__6402__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__6402__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__16469 = (function (){var G__16472 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__16473 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__16474 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__16472,G__16473,G__16474) : cljs.pprint.collect_clauses.call(null,G__16472,G__16473,G__16474));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16469,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16469,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__16485){
var vec__16486 = p__16485;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(2),null);
var vec__16489 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16489,(0),null);
var vec__16492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16489,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16492,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16492,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16492,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16492,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params], true, false)], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_16500 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_16500){
return (function (p__16501){
var vec__16502 = p__16501;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16502,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16502,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_16500))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_16500;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__6414__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
return cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__16505 = cljs.core.next(format__$1);
format__$1 = G__16505;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var args16506 = [];
var len__7489__auto___16516 = arguments.length;
var i__7490__auto___16517 = (0);
while(true){
if((i__7490__auto___16517 < len__7489__auto___16516)){
args16506.push((arguments[i__7490__auto___16517]));

var G__16518 = (i__7490__auto___16517 + (1));
i__7490__auto___16517 = G__16518;
continue;
} else {
}
break;
}

var G__16508 = args16506.length;
switch (G__16508) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16506.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__6402__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__6402__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_16509 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16509;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__16510 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16510,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16510,(1),null);
var vec__16513 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__16521 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__16521) : cljs.pprint.reader_macros.call(null,G__16521));
})();
if(cljs.core.truth_((function (){var and__6402__auto__ = macro_char;
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__6402__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16525_16528 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16526_16529 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count16527_16530 = (0);
var alis_16531__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16527_16530 < cljs.core._STAR_print_length_STAR_))){
if(alis_16531__$1){
cljs.pprint.write_out(cljs.core.first(alis_16531__$1));

if(cljs.core.next(alis_16531__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16532 = (length_count16527_16530 + (1));
var G__16533 = cljs.core.next(alis_16531__$1);
length_count16527_16530 = G__16532;
alis_16531__$1 = G__16533;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16526_16529;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16525_16528;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16537_16540 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16538_16541 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count16539_16542 = (0);
var aseq_16543 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16539_16542 < cljs.core._STAR_print_length_STAR_))){
if(aseq_16543){
cljs.pprint.write_out(cljs.core.first(aseq_16543));

if(cljs.core.next(aseq_16543)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16544 = (length_count16539_16542 + (1));
var G__16545 = cljs.core.next(aseq_16543);
length_count16539_16542 = G__16544;
aseq_16543 = G__16545;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16538_16541;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16537_16540;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__14970__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16546__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16546 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16547__i = 0, G__16547__a = new Array(arguments.length -  0);
while (G__16547__i < G__16547__a.length) {G__16547__a[G__16547__i] = arguments[G__16547__i + 0]; ++G__16547__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16547__a,0);
} 
return G__16546__delegate.call(this,args__14972__auto__);};
G__16546.cljs$lang$maxFixedArity = 0;
G__16546.cljs$lang$applyTo = (function (arglist__16548){
var args__14972__auto__ = cljs.core.seq(arglist__16548);
return G__16546__delegate(args__14972__auto__);
});
G__16546.cljs$core$IFn$_invoke$arity$variadic = G__16546__delegate;
return G__16546;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16554_16559 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16555_16560 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"{",null,"}");

var length_count16556_16561 = (0);
var aseq_16562 = cljs.core.seq(amap);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16556_16561 < cljs.core._STAR_print_length_STAR_))){
if(aseq_16562){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16557_16563 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16558_16564 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_16562));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_16562)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16558_16564;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16557_16563;
}}


if(cljs.core.next(aseq_16562)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16565 = (length_count16556_16561 + (1));
var G__16566 = cljs.core.next(aseq_16562);
length_count16556_16561 = G__16565;
aseq_16562 = G__16566;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16555_16560;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16554_16559;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__14970__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16567__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16567 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16568__i = 0, G__16568__a = new Array(arguments.length -  0);
while (G__16568__i < G__16568__a.length) {G__16568__a[G__16568__i] = arguments[G__16568__i + 0]; ++G__16568__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16568__a,0);
} 
return G__16567__delegate.call(this,args__14972__auto__);};
G__16567.cljs$lang$maxFixedArity = 0;
G__16567.cljs$lang$applyTo = (function (arglist__16569){
var args__14972__auto__ = cljs.core.seq(arglist__16569);
return G__16567__delegate(args__14972__auto__);
});
G__16567.cljs$core$IFn$_invoke$arity$variadic = G__16567__delegate;
return G__16567;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__6414__auto__ = (function (){var temp__4657__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type(cljs.core.type(o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16574_16578 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16575_16579 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__6402__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || (o.cljs$core$IPending$))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__6402__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__6402__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.deref.call(null,o))));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16575_16579;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16574_16578;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__14970__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16580__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16580 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16581__i = 0, G__16581__a = new Array(arguments.length -  0);
while (G__16581__i < G__16581__a.length) {G__16581__a[G__16581__i] = arguments[G__16581__i + 0]; ++G__16581__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16581__a,0);
} 
return G__16580__delegate.call(this,args__14972__auto__);};
G__16580.cljs$lang$maxFixedArity = 0;
G__16580.cljs$lang$applyTo = (function (arglist__16582){
var args__14972__auto__ = cljs.core.seq(arglist__16582);
return G__16580__delegate(args__14972__auto__);
});
G__16580.cljs$core$IFn$_invoke$arity$variadic = G__16580__delegate;
return G__16580;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (obj.cljs$core$IDeref$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__7339__auto__ = (function (){var G__16585 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16585) : cljs.core.atom.call(null,G__16585));
})();
var prefer_table__7340__auto__ = (function (){var G__16586 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16586) : cljs.core.atom.call(null,G__16586));
})();
var method_cache__7341__auto__ = (function (){var G__16587 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16587) : cljs.core.atom.call(null,G__16587));
})();
var cached_hierarchy__7342__auto__ = (function (){var G__16588 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16588) : cljs.core.atom.call(null,G__16588));
})();
var hierarchy__7343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__7343__auto__,method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__16605 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16605,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16605,(1),null);
var vec__16608 = reference;
var seq__16609 = cljs.core.seq(vec__16608);
var first__16610 = cljs.core.first(seq__16609);
var seq__16609__$1 = cljs.core.next(seq__16609);
var keyw = first__16610;
var args = seq__16609__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16611_16621 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16612_16622 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__14970__auto__ = "~w~:i";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args){
return (function() { 
var G__16623__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16623 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16624__i = 0, G__16624__a = new Array(arguments.length -  0);
while (G__16624__i < G__16624__a.length) {G__16624__a[G__16624__i] = arguments[G__16624__i + 0]; ++G__16624__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16624__a,0);
} 
return G__16623__delegate.call(this,args__14972__auto__);};
G__16623.cljs$lang$maxFixedArity = 0;
G__16623.cljs$lang$applyTo = (function (arglist__16625){
var args__14972__auto__ = cljs.core.seq(arglist__16625);
return G__16623__delegate(args__14972__auto__);
});
G__16623.cljs$core$IFn$_invoke$arity$variadic = G__16623__delegate;
return G__16623;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args))
})().call(null,keyw);

var args_16626__$1 = args;
while(true){
if(cljs.core.seq(args_16626__$1)){
(function (){var format_in__14970__auto__ = " ";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (args_16626__$1,format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args){
return (function() { 
var G__16627__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16627 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16628__i = 0, G__16628__a = new Array(arguments.length -  0);
while (G__16628__i < G__16628__a.length) {G__16628__a[G__16628__i] = arguments[G__16628__i + 0]; ++G__16628__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16628__a,0);
} 
return G__16627__delegate.call(this,args__14972__auto__);};
G__16627.cljs$lang$maxFixedArity = 0;
G__16627.cljs$lang$applyTo = (function (arglist__16629){
var args__14972__auto__ = cljs.core.seq(arglist__16629);
return G__16627__delegate(args__14972__auto__);
});
G__16627.cljs$core$IFn$_invoke$arity$variadic = G__16627__delegate;
return G__16627;
})()
;
;})(args_16626__$1,format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args))
})().call(null);

var arg_16630 = cljs.core.first(args_16626__$1);
if(cljs.core.sequential_QMARK_(arg_16630)){
var vec__16613_16631 = cljs.pprint.brackets(arg_16630);
var start_16632__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613_16631,(0),null);
var end_16633__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613_16631,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16616_16634 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16617_16635 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_16632__$1,null,end_16633__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_16630),(3))) && ((cljs.core.second(arg_16630) instanceof cljs.core.Keyword))){
var vec__16618_16636 = arg_16630;
var ns_16637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16618_16636,(0),null);
var kw_16638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16618_16636,(1),null);
var lis_16639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16618_16636,(2),null);
(function (){var format_in__14970__auto__ = "~w ~w ";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (args_16626__$1,format_in__14970__auto__,cf__14971__auto__,vec__16618_16636,ns_16637,kw_16638,lis_16639,_STAR_current_level_STAR_16616_16634,_STAR_current_length_STAR_16617_16635,vec__16613_16631,start_16632__$1,end_16633__$1,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args){
return (function() { 
var G__16640__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16640 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16641__i = 0, G__16641__a = new Array(arguments.length -  0);
while (G__16641__i < G__16641__a.length) {G__16641__a[G__16641__i] = arguments[G__16641__i + 0]; ++G__16641__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16641__a,0);
} 
return G__16640__delegate.call(this,args__14972__auto__);};
G__16640.cljs$lang$maxFixedArity = 0;
G__16640.cljs$lang$applyTo = (function (arglist__16642){
var args__14972__auto__ = cljs.core.seq(arglist__16642);
return G__16640__delegate(args__14972__auto__);
});
G__16640.cljs$core$IFn$_invoke$arity$variadic = G__16640__delegate;
return G__16640;
})()
;
;})(args_16626__$1,format_in__14970__auto__,cf__14971__auto__,vec__16618_16636,ns_16637,kw_16638,lis_16639,_STAR_current_level_STAR_16616_16634,_STAR_current_length_STAR_16617_16635,vec__16613_16631,start_16632__$1,end_16633__$1,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args))
})().call(null,ns_16637,kw_16638);

if(cljs.core.sequential_QMARK_(lis_16639)){
(function (){var format_in__14970__auto__ = ((cljs.core.vector_QMARK_(lis_16639))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (args_16626__$1,format_in__14970__auto__,cf__14971__auto__,vec__16618_16636,ns_16637,kw_16638,lis_16639,_STAR_current_level_STAR_16616_16634,_STAR_current_length_STAR_16617_16635,vec__16613_16631,start_16632__$1,end_16633__$1,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args){
return (function() { 
var G__16643__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16643 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16644__i = 0, G__16644__a = new Array(arguments.length -  0);
while (G__16644__i < G__16644__a.length) {G__16644__a[G__16644__i] = arguments[G__16644__i + 0]; ++G__16644__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16644__a,0);
} 
return G__16643__delegate.call(this,args__14972__auto__);};
G__16643.cljs$lang$maxFixedArity = 0;
G__16643.cljs$lang$applyTo = (function (arglist__16645){
var args__14972__auto__ = cljs.core.seq(arglist__16645);
return G__16643__delegate(args__14972__auto__);
});
G__16643.cljs$core$IFn$_invoke$arity$variadic = G__16643__delegate;
return G__16643;
})()
;
;})(args_16626__$1,format_in__14970__auto__,cf__14971__auto__,vec__16618_16636,ns_16637,kw_16638,lis_16639,_STAR_current_level_STAR_16616_16634,_STAR_current_length_STAR_16617_16635,vec__16613_16631,start_16632__$1,end_16633__$1,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args))
})().call(null,lis_16639);
} else {
cljs.pprint.write_out(lis_16639);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__14970__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (args_16626__$1,format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16616_16634,_STAR_current_length_STAR_16617_16635,vec__16613_16631,start_16632__$1,end_16633__$1,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args){
return (function() { 
var G__16646__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16646 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16647__i = 0, G__16647__a = new Array(arguments.length -  0);
while (G__16647__i < G__16647__a.length) {G__16647__a[G__16647__i] = arguments[G__16647__i + 0]; ++G__16647__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16647__a,0);
} 
return G__16646__delegate.call(this,args__14972__auto__);};
G__16646.cljs$lang$maxFixedArity = 0;
G__16646.cljs$lang$applyTo = (function (arglist__16648){
var args__14972__auto__ = cljs.core.seq(arglist__16648);
return G__16646__delegate(args__14972__auto__);
});
G__16646.cljs$core$IFn$_invoke$arity$variadic = G__16646__delegate;
return G__16646;
})()
;
;})(args_16626__$1,format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16616_16634,_STAR_current_length_STAR_16617_16635,vec__16613_16631,start_16632__$1,end_16633__$1,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args))
})(),arg_16630);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16617_16635;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16616_16634;
}}


if(cljs.core.next(args_16626__$1)){
(function (){var format_in__14970__auto__ = "~_";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (args_16626__$1,format_in__14970__auto__,cf__14971__auto__,vec__16613_16631,start_16632__$1,end_16633__$1,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args){
return (function() { 
var G__16649__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16649 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16650__i = 0, G__16650__a = new Array(arguments.length -  0);
while (G__16650__i < G__16650__a.length) {G__16650__a[G__16650__i] = arguments[G__16650__i + 0]; ++G__16650__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16650__a,0);
} 
return G__16649__delegate.call(this,args__14972__auto__);};
G__16649.cljs$lang$maxFixedArity = 0;
G__16649.cljs$lang$applyTo = (function (arglist__16651){
var args__14972__auto__ = cljs.core.seq(arglist__16651);
return G__16649__delegate(args__14972__auto__);
});
G__16649.cljs$core$IFn$_invoke$arity$variadic = G__16649__delegate;
return G__16649;
})()
;
;})(args_16626__$1,format_in__14970__auto__,cf__14971__auto__,vec__16613_16631,start_16632__$1,end_16633__$1,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out(arg_16630);

if(cljs.core.next(args_16626__$1)){
(function (){var format_in__14970__auto__ = "~:_";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (args_16626__$1,format_in__14970__auto__,cf__14971__auto__,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args){
return (function() { 
var G__16652__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16652 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16653__i = 0, G__16653__a = new Array(arguments.length -  0);
while (G__16653__i < G__16653__a.length) {G__16653__a[G__16653__i] = arguments[G__16653__i + 0]; ++G__16653__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16653__a,0);
} 
return G__16652__delegate.call(this,args__14972__auto__);};
G__16652.cljs$lang$maxFixedArity = 0;
G__16652.cljs$lang$applyTo = (function (arglist__16654){
var args__14972__auto__ = cljs.core.seq(arglist__16654);
return G__16652__delegate(args__14972__auto__);
});
G__16652.cljs$core$IFn$_invoke$arity$variadic = G__16652__delegate;
return G__16652;
})()
;
;})(args_16626__$1,format_in__14970__auto__,cf__14971__auto__,arg_16630,_STAR_current_level_STAR_16611_16621,_STAR_current_length_STAR_16612_16622,vec__16605,start,end,vec__16608,seq__16609,first__16610,seq__16609__$1,keyw,args))
})().call(null);
} else {
}
}

var G__16655 = cljs.core.next(args_16626__$1);
args_16626__$1 = G__16655;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16612_16622;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16611_16621;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__16667 = alis;
var seq__16668 = cljs.core.seq(vec__16667);
var first__16669 = cljs.core.first(seq__16668);
var seq__16668__$1 = cljs.core.next(seq__16668);
var ns_sym = first__16669;
var first__16669__$1 = cljs.core.first(seq__16668__$1);
var seq__16668__$2 = cljs.core.next(seq__16668__$1);
var ns_name = first__16669__$1;
var stuff = seq__16668__$2;
var vec__16670 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16670,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16670,(1),null);
var vec__16673 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16673,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16673,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16676_16678 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16677_16679 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__14970__auto__ = "~w ~1I~@_~w";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16676_16678,_STAR_current_length_STAR_16677_16679,vec__16667,seq__16668,first__16669,seq__16668__$1,ns_sym,first__16669__$1,seq__16668__$2,ns_name,stuff,vec__16670,doc_str,stuff__$1,vec__16673,attr_map,references){
return (function() { 
var G__16680__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16680 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16681__i = 0, G__16681__a = new Array(arguments.length -  0);
while (G__16681__i < G__16681__a.length) {G__16681__a[G__16681__i] = arguments[G__16681__i + 0]; ++G__16681__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16681__a,0);
} 
return G__16680__delegate.call(this,args__14972__auto__);};
G__16680.cljs$lang$maxFixedArity = 0;
G__16680.cljs$lang$applyTo = (function (arglist__16682){
var args__14972__auto__ = cljs.core.seq(arglist__16682);
return G__16680__delegate(args__14972__auto__);
});
G__16680.cljs$core$IFn$_invoke$arity$variadic = G__16680__delegate;
return G__16680;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16676_16678,_STAR_current_length_STAR_16677_16679,vec__16667,seq__16668,first__16669,seq__16668__$1,ns_sym,first__16669__$1,seq__16668__$2,ns_name,stuff,vec__16670,doc_str,stuff__$1,vec__16673,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__6414__auto__ = doc_str;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = attr_map;
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__14970__auto__ = "~@:_";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16676_16678,_STAR_current_length_STAR_16677_16679,vec__16667,seq__16668,first__16669,seq__16668__$1,ns_sym,first__16669__$1,seq__16668__$2,ns_name,stuff,vec__16670,doc_str,stuff__$1,vec__16673,attr_map,references){
return (function() { 
var G__16683__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16683 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16684__i = 0, G__16684__a = new Array(arguments.length -  0);
while (G__16684__i < G__16684__a.length) {G__16684__a[G__16684__i] = arguments[G__16684__i + 0]; ++G__16684__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16684__a,0);
} 
return G__16683__delegate.call(this,args__14972__auto__);};
G__16683.cljs$lang$maxFixedArity = 0;
G__16683.cljs$lang$applyTo = (function (arglist__16685){
var args__14972__auto__ = cljs.core.seq(arglist__16685);
return G__16683__delegate(args__14972__auto__);
});
G__16683.cljs$core$IFn$_invoke$arity$variadic = G__16683__delegate;
return G__16683;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16676_16678,_STAR_current_length_STAR_16677_16679,vec__16667,seq__16668,first__16669,seq__16668__$1,ns_sym,first__16669__$1,seq__16668__$2,ns_name,stuff,vec__16670,doc_str,stuff__$1,vec__16673,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.array_seq([doc_str,(function (){var or__6414__auto__ = attr_map;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__14970__auto__ = "~w~:[~;~:@_~]";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16676_16678,_STAR_current_length_STAR_16677_16679,vec__16667,seq__16668,first__16669,seq__16668__$1,ns_sym,first__16669__$1,seq__16668__$2,ns_name,stuff,vec__16670,doc_str,stuff__$1,vec__16673,attr_map,references){
return (function() { 
var G__16686__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16686 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16687__i = 0, G__16687__a = new Array(arguments.length -  0);
while (G__16687__i < G__16687__a.length) {G__16687__a[G__16687__i] = arguments[G__16687__i + 0]; ++G__16687__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16687__a,0);
} 
return G__16686__delegate.call(this,args__14972__auto__);};
G__16686.cljs$lang$maxFixedArity = 0;
G__16686.cljs$lang$applyTo = (function (arglist__16688){
var args__14972__auto__ = cljs.core.seq(arglist__16688);
return G__16686__delegate(args__14972__auto__);
});
G__16686.cljs$core$IFn$_invoke$arity$variadic = G__16686__delegate;
return G__16686;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16676_16678,_STAR_current_length_STAR_16677_16679,vec__16667,seq__16668,first__16669,seq__16668__$1,ns_sym,first__16669__$1,seq__16668__$2,ns_name,stuff,vec__16670,doc_str,stuff__$1,vec__16673,attr_map,references))
})().call(null,attr_map,cljs.core.seq(references));
} else {
}

var references_16689__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_16689__$1));

var temp__4657__auto___16690 = cljs.core.next(references_16689__$1);
if(temp__4657__auto___16690){
var references_16691__$2 = temp__4657__auto___16690;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16692 = references_16691__$2;
references_16689__$1 = G__16692;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16677_16679;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16676_16678;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__14970__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16693__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16693 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16694__i = 0, G__16694__a = new Array(arguments.length -  0);
while (G__16694__i < G__16694__a.length) {G__16694__a[G__16694__i] = arguments[G__16694__i + 0]; ++G__16694__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16694__a,0);
} 
return G__16693__delegate.call(this,args__14972__auto__);};
G__16693.cljs$lang$maxFixedArity = 0;
G__16693.cljs$lang$applyTo = (function (arglist__16695){
var args__14972__auto__ = cljs.core.seq(arglist__16695);
return G__16693__delegate(args__14972__auto__);
});
G__16693.cljs$core$IFn$_invoke$arity$variadic = G__16693__delegate;
return G__16693;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__14970__auto__ = " ~_";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16696__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16696 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16697__i = 0, G__16697__a = new Array(arguments.length -  0);
while (G__16697__i < G__16697__a.length) {G__16697__a[G__16697__i] = arguments[G__16697__i + 0]; ++G__16697__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16697__a,0);
} 
return G__16696__delegate.call(this,args__14972__auto__);};
G__16696.cljs$lang$maxFixedArity = 0;
G__16696.cljs$lang$applyTo = (function (arglist__16698){
var args__14972__auto__ = cljs.core.seq(arglist__16698);
return G__16696__delegate(args__14972__auto__);
});
G__16696.cljs$core$IFn$_invoke$arity$variadic = G__16696__delegate;
return G__16696;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})().call(null);
} else {
(function (){var format_in__14970__auto__ = " ~@_";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16699__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16699 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16700__i = 0, G__16700__a = new Array(arguments.length -  0);
while (G__16700__i < G__16700__a.length) {G__16700__a[G__16700__i] = arguments[G__16700__i + 0]; ++G__16700__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16700__a,0);
} 
return G__16699__delegate.call(this,args__14972__auto__);};
G__16699.cljs$lang$maxFixedArity = 0;
G__16699.cljs$lang$applyTo = (function (arglist__16701){
var args__14972__auto__ = cljs.core.seq(arglist__16701);
return G__16699__delegate(args__14972__auto__);
});
G__16699.cljs$core$IFn$_invoke$arity$variadic = G__16699__delegate;
return G__16699;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})().call(null);
}

return (function (){var format_in__14970__auto__ = "~{~w~^ ~_~}";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16702__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16702 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16703__i = 0, G__16703__a = new Array(arguments.length -  0);
while (G__16703__i < G__16703__a.length) {G__16703__a[G__16703__i] = arguments[G__16703__i + 0]; ++G__16703__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16703__a,0);
} 
return G__16702__delegate.call(this,args__14972__auto__);};
G__16702.cljs$lang$maxFixedArity = 0;
G__16702.cljs$lang$applyTo = (function (arglist__16704){
var args__14972__auto__ = cljs.core.seq(arglist__16704);
return G__16702__delegate(args__14972__auto__);
});
G__16702.cljs$core$IFn$_invoke$arity$variadic = G__16702__delegate;
return G__16702;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__14970__auto__ = " ~_~{~w~^ ~_~}";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16705__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16705 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16706__i = 0, G__16706__a = new Array(arguments.length -  0);
while (G__16706__i < G__16706__a.length) {G__16706__a[G__16706__i] = arguments[G__16706__i + 0]; ++G__16706__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16706__a,0);
} 
return G__16705__delegate.call(this,args__14972__auto__);};
G__16705.cljs$lang$maxFixedArity = 0;
G__16705.cljs$lang$applyTo = (function (arglist__16707){
var args__14972__auto__ = cljs.core.seq(arglist__16707);
return G__16705__delegate(args__14972__auto__);
});
G__16705.cljs$core$IFn$_invoke$arity$variadic = G__16705__delegate;
return G__16705;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__16719 = alis;
var seq__16720 = cljs.core.seq(vec__16719);
var first__16721 = cljs.core.first(seq__16720);
var seq__16720__$1 = cljs.core.next(seq__16720);
var defn_sym = first__16721;
var first__16721__$1 = cljs.core.first(seq__16720__$1);
var seq__16720__$2 = cljs.core.next(seq__16720__$1);
var defn_name = first__16721__$1;
var stuff = seq__16720__$2;
var vec__16722 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(1),null);
var vec__16725 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16725,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16725,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16728_16730 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16729_16731 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__14970__auto__ = "~w ~1I~@_~w";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16728_16730,_STAR_current_length_STAR_16729_16731,vec__16719,seq__16720,first__16721,seq__16720__$1,defn_sym,first__16721__$1,seq__16720__$2,defn_name,stuff,vec__16722,doc_str,stuff__$1,vec__16725,attr_map,stuff__$2){
return (function() { 
var G__16732__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16732 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16733__i = 0, G__16733__a = new Array(arguments.length -  0);
while (G__16733__i < G__16733__a.length) {G__16733__a[G__16733__i] = arguments[G__16733__i + 0]; ++G__16733__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16733__a,0);
} 
return G__16732__delegate.call(this,args__14972__auto__);};
G__16732.cljs$lang$maxFixedArity = 0;
G__16732.cljs$lang$applyTo = (function (arglist__16734){
var args__14972__auto__ = cljs.core.seq(arglist__16734);
return G__16732__delegate(args__14972__auto__);
});
G__16732.cljs$core$IFn$_invoke$arity$variadic = G__16732__delegate;
return G__16732;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16728_16730,_STAR_current_length_STAR_16729_16731,vec__16719,seq__16720,first__16721,seq__16720__$1,defn_sym,first__16721__$1,seq__16720__$2,defn_name,stuff,vec__16722,doc_str,stuff__$1,vec__16725,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__14970__auto__ = " ~_~w";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16728_16730,_STAR_current_length_STAR_16729_16731,vec__16719,seq__16720,first__16721,seq__16720__$1,defn_sym,first__16721__$1,seq__16720__$2,defn_name,stuff,vec__16722,doc_str,stuff__$1,vec__16725,attr_map,stuff__$2){
return (function() { 
var G__16735__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16735 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16736__i = 0, G__16736__a = new Array(arguments.length -  0);
while (G__16736__i < G__16736__a.length) {G__16736__a[G__16736__i] = arguments[G__16736__i + 0]; ++G__16736__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16736__a,0);
} 
return G__16735__delegate.call(this,args__14972__auto__);};
G__16735.cljs$lang$maxFixedArity = 0;
G__16735.cljs$lang$applyTo = (function (arglist__16737){
var args__14972__auto__ = cljs.core.seq(arglist__16737);
return G__16735__delegate(args__14972__auto__);
});
G__16735.cljs$core$IFn$_invoke$arity$variadic = G__16735__delegate;
return G__16735;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16728_16730,_STAR_current_length_STAR_16729_16731,vec__16719,seq__16720,first__16721,seq__16720__$1,defn_sym,first__16721__$1,seq__16720__$2,defn_name,stuff,vec__16722,doc_str,stuff__$1,vec__16725,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__14970__auto__ = " ~_~w";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16728_16730,_STAR_current_length_STAR_16729_16731,vec__16719,seq__16720,first__16721,seq__16720__$1,defn_sym,first__16721__$1,seq__16720__$2,defn_name,stuff,vec__16722,doc_str,stuff__$1,vec__16725,attr_map,stuff__$2){
return (function() { 
var G__16738__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16738 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16739__i = 0, G__16739__a = new Array(arguments.length -  0);
while (G__16739__i < G__16739__a.length) {G__16739__a[G__16739__i] = arguments[G__16739__i + 0]; ++G__16739__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16739__a,0);
} 
return G__16738__delegate.call(this,args__14972__auto__);};
G__16738.cljs$lang$maxFixedArity = 0;
G__16738.cljs$lang$applyTo = (function (arglist__16740){
var args__14972__auto__ = cljs.core.seq(arglist__16740);
return G__16738__delegate(args__14972__auto__);
});
G__16738.cljs$core$IFn$_invoke$arity$variadic = G__16738__delegate;
return G__16738;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16728_16730,_STAR_current_length_STAR_16729_16731,vec__16719,seq__16720,first__16721,seq__16720__$1,defn_sym,first__16721__$1,seq__16720__$2,defn_name,stuff,vec__16722,doc_str,stuff__$1,vec__16725,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__6414__auto__ = doc_str;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__6414__auto__ = doc_str;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16729_16731;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16728_16730;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16746_16751 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16747_16752 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count16748_16753 = (0);
var binding_16754 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16748_16753 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_16754)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16749_16755 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16750_16756 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_16754));

if(cljs.core.next(binding_16754)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_16754));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16750_16756;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16749_16755;
}}


if(cljs.core.next(cljs.core.rest(binding_16754))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16757 = (length_count16748_16753 + (1));
var G__16758 = cljs.core.next(cljs.core.rest(binding_16754));
length_count16748_16753 = G__16757;
binding_16754 = G__16758;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16747_16752;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16746_16751;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16761_16763 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16762_16764 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
(function (){var format_in__14970__auto__ = "~w ~1I~@_";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16761_16763,_STAR_current_length_STAR_16762_16764,base_sym){
return (function() { 
var G__16765__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16765 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16766__i = 0, G__16766__a = new Array(arguments.length -  0);
while (G__16766__i < G__16766__a.length) {G__16766__a[G__16766__i] = arguments[G__16766__i + 0]; ++G__16766__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16766__a,0);
} 
return G__16765__delegate.call(this,args__14972__auto__);};
G__16765.cljs$lang$maxFixedArity = 0;
G__16765.cljs$lang$applyTo = (function (arglist__16767){
var args__14972__auto__ = cljs.core.seq(arglist__16767);
return G__16765__delegate(args__14972__auto__);
});
G__16765.cljs$core$IFn$_invoke$arity$variadic = G__16765__delegate;
return G__16765;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16761_16763,_STAR_current_length_STAR_16762_16764,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__14970__auto__ = " ~_~{~w~^ ~_~}";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16761_16763,_STAR_current_length_STAR_16762_16764,base_sym){
return (function() { 
var G__16768__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16768 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16769__i = 0, G__16769__a = new Array(arguments.length -  0);
while (G__16769__i < G__16769__a.length) {G__16769__a[G__16769__i] = arguments[G__16769__i + 0]; ++G__16769__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16769__a,0);
} 
return G__16768__delegate.call(this,args__14972__auto__);};
G__16768.cljs$lang$maxFixedArity = 0;
G__16768.cljs$lang$applyTo = (function (arglist__16770){
var args__14972__auto__ = cljs.core.seq(arglist__16770);
return G__16768__delegate(args__14972__auto__);
});
G__16768.cljs$core$IFn$_invoke$arity$variadic = G__16768__delegate;
return G__16768;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16761_16763,_STAR_current_length_STAR_16762_16764,base_sym))
})().call(null,cljs.core.next(cljs.core.rest(alis)));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16762_16764;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16761_16763;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__14970__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__){
return (function() { 
var G__16771__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16771 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16772__i = 0, G__16772__a = new Array(arguments.length -  0);
while (G__16772__i < G__16772__a.length) {G__16772__a[G__16772__i] = arguments[G__16772__i + 0]; ++G__16772__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16772__a,0);
} 
return G__16771__delegate.call(this,args__14972__auto__);};
G__16771.cljs$lang$maxFixedArity = 0;
G__16771.cljs$lang$applyTo = (function (arglist__16773){
var args__14972__auto__ = cljs.core.seq(arglist__16773);
return G__16771__delegate(args__14972__auto__);
});
G__16771.cljs$core$IFn$_invoke$arity$variadic = G__16771__delegate;
return G__16771;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16779_16784 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16780_16785 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count16781_16786 = (0);
var alis_16787__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16781_16786 < cljs.core._STAR_print_length_STAR_))){
if(alis_16787__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16782_16788 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16783_16789 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_16787__$1));

if(cljs.core.next(alis_16787__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_16787__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16783_16789;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16782_16788;
}}


if(cljs.core.next(cljs.core.rest(alis_16787__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16790 = (length_count16781_16786 + (1));
var G__16791 = cljs.core.next(cljs.core.rest(alis_16787__$1));
length_count16781_16786 = G__16790;
alis_16787__$1 = G__16791;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16780_16785;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16779_16784;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16797_16802 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16798_16803 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__14970__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16797_16802,_STAR_current_length_STAR_16798_16803){
return (function() { 
var G__16804__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16804 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16805__i = 0, G__16805__a = new Array(arguments.length -  0);
while (G__16805__i < G__16805__a.length) {G__16805__a[G__16805__i] = arguments[G__16805__i + 0]; ++G__16805__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16805__a,0);
} 
return G__16804__delegate.call(this,args__14972__auto__);};
G__16804.cljs$lang$maxFixedArity = 0;
G__16804.cljs$lang$applyTo = (function (arglist__16806){
var args__14972__auto__ = cljs.core.seq(arglist__16806);
return G__16804__delegate(args__14972__auto__);
});
G__16804.cljs$core$IFn$_invoke$arity$variadic = G__16804__delegate;
return G__16804;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_current_level_STAR_16797_16802,_STAR_current_length_STAR_16798_16803))
})(),alis);

var length_count16799_16807 = (0);
var alis_16808__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16799_16807 < cljs.core._STAR_print_length_STAR_))){
if(alis_16808__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16800_16809 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16801_16810 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_16808__$1));

if(cljs.core.next(alis_16808__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_16808__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16801_16810;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16800_16809;
}}


if(cljs.core.next(cljs.core.rest(alis_16808__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16811 = (length_count16799_16807 + (1));
var G__16812 = cljs.core.next(cljs.core.rest(alis_16808__$1));
length_count16799_16807 = G__16811;
alis_16808__$1 = G__16812;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16798_16803;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16797_16802;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_16816 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first(args),"%"], true, false):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_16816,args,nlis){
return (function (p1__16813_SHARP_,p2__16814_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__16813_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__16814_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_16816,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{return (function (){var format_in__14970__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__14971__auto__ = ((typeof format_in__14970__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14970__auto__) : cljs.pprint.cached_compile.call(null,format_in__14970__auto__)):format_in__14970__auto__);
return ((function (format_in__14970__auto__,cf__14971__auto__,_STAR_symbol_map_STAR_16816,args,nlis){
return (function() { 
var G__16817__delegate = function (args__14972__auto__){
var navigator__14973__auto__ = cljs.pprint.init_navigator(args__14972__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14971__auto__,navigator__14973__auto__);
};
var G__16817 = function (var_args){
var args__14972__auto__ = null;
if (arguments.length > 0) {
var G__16818__i = 0, G__16818__a = new Array(arguments.length -  0);
while (G__16818__i < G__16818__a.length) {G__16818__a[G__16818__i] = arguments[G__16818__i + 0]; ++G__16818__i;}
  args__14972__auto__ = new cljs.core.IndexedSeq(G__16818__a,0);
} 
return G__16817__delegate.call(this,args__14972__auto__);};
G__16817.cljs$lang$maxFixedArity = 0;
G__16817.cljs$lang$applyTo = (function (arglist__16819){
var args__14972__auto__ = cljs.core.seq(arglist__16819);
return G__16817__delegate(args__14972__auto__);
});
G__16817.cljs$core$IFn$_invoke$arity$variadic = G__16817__delegate;
return G__16817;
})()
;
;})(format_in__14970__auto__,cf__14971__auto__,_STAR_symbol_map_STAR_16816,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_16816;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16823_16826 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16824_16827 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count16825_16828 = (0);
var alis_16829__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16825_16828 < cljs.core._STAR_print_length_STAR_))){
if(alis_16829__$1){
cljs.pprint.write_out(cljs.core.first(alis_16829__$1));

if(cljs.core.next(alis_16829__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16830 = (length_count16825_16828 + (1));
var G__16831 = cljs.core.next(alis_16829__$1);
length_count16825_16828 = G__16830;
alis_16829__$1 = G__16831;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16824_16827;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16823_16826;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([(function (){var iter__7194__auto__ = (function cljs$pprint$two_forms_$_iter__16838(s__16839){
return (new cljs.core.LazySeq(null,(function (){
var s__16839__$1 = s__16839;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16839__$1);
if(temp__4657__auto__){
var s__16839__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16839__$2)){
var c__7192__auto__ = cljs.core.chunk_first(s__16839__$2);
var size__7193__auto__ = cljs.core.count(c__7192__auto__);
var b__16841 = cljs.core.chunk_buffer(size__7193__auto__);
if((function (){var i__16840 = (0);
while(true){
if((i__16840 < size__7193__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7192__auto__,i__16840);
cljs.core.chunk_append(b__16841,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__16844 = (i__16840 + (1));
i__16840 = G__16844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16841),cljs$pprint$two_forms_$_iter__16838(cljs.core.chunk_rest(s__16839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16841),null);
}
} else {
var x = cljs.core.first(s__16839__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__16838(cljs.core.rest(s__16839__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7194__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__16845_SHARP_){
var vec__16849 = p1__16845_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849,(1),null);
if(cljs.core.not((function (){var or__6414__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__16845_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__4655__auto__ = (function (){var G__16853 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__16853) : cljs.pprint._STAR_code_table_STAR_.call(null,G__16853));
})();
if(cljs.core.truth_(temp__4655__auto__)){
var special_form = temp__4655__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4655__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__4655__auto__)){
var arg_num = temp__4655__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__7339__auto__ = (function (){var G__16854 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16854) : cljs.core.atom.call(null,G__16854));
})();
var prefer_table__7340__auto__ = (function (){var G__16855 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16855) : cljs.core.atom.call(null,G__16855));
})();
var method_cache__7341__auto__ = (function (){var G__16856 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16856) : cljs.core.atom.call(null,G__16856));
})();
var cached_hierarchy__7342__auto__ = (function (){var G__16857 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16857) : cljs.core.atom.call(null,G__16857));
})();
var hierarchy__7343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__7343__auto__,method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__6745__auto__ = (0);
var y__6746__auto__ = (width - cljs.core.count(s));
return ((x__6745__auto__ > y__6746__auto__) ? x__6745__auto__ : y__6746__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var args16861 = [];
var len__7489__auto___16887 = arguments.length;
var i__7490__auto___16888 = (0);
while(true){
if((i__7490__auto___16888 < len__7489__auto___16887)){
args16861.push((arguments[i__7490__auto___16888]));

var G__16889 = (i__7490__auto___16888 + (1));
i__7490__auto___16888 = G__16889;
continue;
} else {
}
break;
}

var G__16863 = args16861.length;
switch (G__16863) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16861.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_16864 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_16864){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_16864){
return (function (p1__16858_SHARP_){
return cljs.core.count([cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16858_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_16864))
,rows));
});})(_STAR_print_newline_STAR_16864))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_16864){
return (function (p1__16859_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__16859_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_16864))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_16864){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__7194__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_16864){
return (function cljs$pprint$iter__16865(s__16866){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_16864){
return (function (){
var s__16866__$1 = s__16866;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16866__$1);
if(temp__4657__auto__){
var s__16866__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16866__$2)){
var c__7192__auto__ = cljs.core.chunk_first(s__16866__$2);
var size__7193__auto__ = cljs.core.count(c__7192__auto__);
var b__16868 = cljs.core.chunk_buffer(size__7193__auto__);
if((function (){var i__16867 = (0);
while(true){
if((i__16867 < size__7193__auto__)){
var vec__16877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7192__auto__,i__16867);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16877,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16877,(1),null);
cljs.core.chunk_append(b__16868,cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')));

var G__16891 = (i__16867 + (1));
i__16867 = G__16891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16868),cljs$pprint$iter__16865(cljs.core.chunk_rest(s__16866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16868),null);
}
} else {
var vec__16880 = cljs.core.first(s__16866__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16880,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16880,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')),cljs$pprint$iter__16865(cljs.core.rest(s__16866__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_16864))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_16864))
;
return iter__7194__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__7194__auto__,widths,spacers,_STAR_print_newline_STAR_16864){
return (function (p1__16860_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__16860_SHARP_);
});})(iter__7194__auto__,widths,spacers,_STAR_print_newline_STAR_16864))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_16864))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__16883 = cljs.core.seq(rows);
var chunk__16884 = null;
var count__16885 = (0);
var i__16886 = (0);
while(true){
if((i__16886 < count__16885)){
var row = chunk__16884.cljs$core$IIndexed$_nth$arity$2(null,i__16886);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__16892 = seq__16883;
var G__16893 = chunk__16884;
var G__16894 = count__16885;
var G__16895 = (i__16886 + (1));
seq__16883 = G__16892;
chunk__16884 = G__16893;
count__16885 = G__16894;
i__16886 = G__16895;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16883);
if(temp__4657__auto__){
var seq__16883__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16883__$1)){
var c__7225__auto__ = cljs.core.chunk_first(seq__16883__$1);
var G__16896 = cljs.core.chunk_rest(seq__16883__$1);
var G__16897 = c__7225__auto__;
var G__16898 = cljs.core.count(c__7225__auto__);
var G__16899 = (0);
seq__16883 = G__16896;
chunk__16884 = G__16897;
count__16885 = G__16898;
i__16886 = G__16899;
continue;
} else {
var row = cljs.core.first(seq__16883__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__16900 = cljs.core.next(seq__16883__$1);
var G__16901 = null;
var G__16902 = (0);
var G__16903 = (0);
seq__16883 = G__16900;
chunk__16884 = G__16901;
count__16885 = G__16902;
i__16886 = G__16903;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16864;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

