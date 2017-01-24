// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(88),(1)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args25904 = [];
var len__7489__auto___25913 = arguments.length;
var i__7490__auto___25914 = (0);
while(true){
if((i__7490__auto___25914 < len__7489__auto___25913)){
args25904.push((arguments[i__7490__auto___25914]));

var G__25915 = (i__7490__auto___25914 + (1));
i__7490__auto___25914 = G__25915;
continue;
} else {
}
break;
}

var G__25906 = args25904.length;
switch (G__25906) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25904.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__25907 = (((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25907,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25907,(1),null);
var vec__25910 = (((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args25917 = [];
var len__7489__auto___25926 = arguments.length;
var i__7490__auto___25927 = (0);
while(true){
if((i__7490__auto___25927 < len__7489__auto___25926)){
args25917.push((arguments[i__7490__auto___25927]));

var G__25928 = (i__7490__auto___25927 + (1));
i__7490__auto___25927 = G__25928;
continue;
} else {
}
break;
}

var G__25919 = args25917.length;
switch (G__25919) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25917.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = (cljs.core.truth_((function (){var G__25920 = readers;
var G__25921 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25920,G__25921) : taoensso.encore.kw_identical_QMARK_.call(null,G__25920,G__25921));
})())?(function (){var G__25922 = cljs.core.symbol;
var G__25923 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_));
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__25922,G__25923) : taoensso.encore.map_keys.call(null,G__25922,G__25923));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__25924 = default$;
var G__25925 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25924,G__25925) : taoensso.encore.kw_identical_QMARK_.call(null,G__25924,G__25925));
})())?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.array_seq([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args25930 = [];
var len__7489__auto___25935 = arguments.length;
var i__7490__auto___25936 = (0);
while(true){
if((i__7490__auto___25936 < len__7489__auto___25935)){
args25930.push((arguments[i__7490__auto___25936]));

var G__25937 = (i__7490__auto___25936 + (1));
i__7490__auto___25936 = G__25937;
continue;
} else {
}
break;
}

var G__25932 = args25930.length;
switch (G__25932) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25930.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_25933 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_25934 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_25934;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_25933;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__24369__auto__ = (function (){var or__6414__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__24369__auto__)){
var data_map = b2__24369__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || (x.cljs$core$IIndexed$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || (x.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__6402__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__6402__auto__){
var and__6402__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__6402__auto____$1)){
return true;
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__6402__auto__ = (x instanceof cljs.core.Symbol);
if(and__6402__auto__){
var and__6402__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__6402__auto____$1)){
return true;
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__6402__auto__ = (x instanceof cljs.core.Keyword);
if(and__6402__auto__){
var and__6402__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__6402__auto____$1)){
return true;
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__6402__auto__ = typeof x === 'number';
if(and__6402__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__6402__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__24369__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__24369__auto__)){
var ns = b2__24369__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__24369__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__24369__auto__)){
var n = b2__24369__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__24369__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__24369__auto__)){
var n = b2__24369__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__24369__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__24369__auto__)){
var n = b2__24369__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__24369__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__24369__auto__)){
var n = b2__24369__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__24369__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__24369__auto__)){
var n = b2__24369__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__24369__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__24369__auto__)){
var f = b2__24369__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__24369__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(b2__24369__auto__)){
var email = b2__24369__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e25948){if((e25948 instanceof Error)){
var _ = e25948;
return false;
} else {
throw e25948;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args25949 = [];
var len__7489__auto___25952 = arguments.length;
var i__7490__auto___25953 = (0);
while(true){
if((i__7490__auto___25953 < len__7489__auto___25952)){
args25949.push((arguments[i__7490__auto___25953]));

var G__25954 = (i__7490__auto___25953 + (1));
i__7490__auto___25953 = G__25954;
continue;
} else {
}
break;
}

var G__25951 = args25949.length;
switch (G__25951) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25949.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("`as-"),cljs.core.str(cljs.core.name(as_name)),cljs.core.str("` failed against: `"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))),cljs.core.str("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__6414__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pval,x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args25956 = [];
var len__7489__auto___25959 = arguments.length;
var i__7490__auto___25960 = (0);
while(true){
if((i__7490__auto___25960 < len__7489__auto___25959)){
args25956.push((arguments[i__7490__auto___25960]));

var G__25961 = (i__7490__auto___25960 + (1));
i__7490__auto___25960 = G__25961;
continue;
} else {
}
break;
}

var G__25958 = args25956.length;
switch (G__25958) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25956.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__25969){
var vec__25970 = p__25969;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25970,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
var inc_25979 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_25979){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,inc_25979){
return (function (acc,in$){
var G__25976 = acc;
var G__25977 = cljs.core._vreset_BANG_(i,inc_25979(cljs.core._deref(i)));
var G__25978 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__25976,G__25977,G__25978) : rf.call(null,G__25976,G__25977,G__25978));
});})(i,inc_25979))
,init,coll);
});})(inc_25979))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__25983 = acc;
var G__25984 = k;
var G__25985 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25983,G__25984,G__25985) : f.call(null,G__25983,G__25984,G__25985));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25987_SHARP_,p2__25986_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__25986_SHARP_) : proc.call(null,p2__25986_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__25990_SHARP_,p2__25988_SHARP_,p3__25989_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__25988_SHARP_,p3__25989_SHARP_) : proc.call(null,p2__25988_SHARP_,p3__25989_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__25993_SHARP_,p2__25991_SHARP_,p3__25992_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__25991_SHARP_,p3__25992_SHARP_) : proc.call(null,p2__25991_SHARP_,p3__25992_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__25996_SHARP_,p2__25994_SHARP_,p3__25995_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__25994_SHARP_,p3__25995_SHARP_) : proc.call(null,p2__25994_SHARP_,p3__25995_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__24369__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__24369__auto__)){
var p = b2__24369__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__24369__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__24369__auto__)){
var p = b2__24369__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
var inc_25998 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_25998){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_((-1));
return ((function (idx_,inc_25998){
return (function (){
return cljs.core._vreset_BANG_(idx_,inc_25998(cljs.core._deref(idx_)));
});
;})(idx_,inc_25998))
});})(inc_25998))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var args25999 = [];
var len__7489__auto___26004 = arguments.length;
var i__7490__auto___26005 = (0);
while(true){
if((i__7490__auto___26005 < len__7489__auto___26004)){
args25999.push((arguments[i__7490__auto___26005]));

var G__26006 = (i__7490__auto___26005 + (1));
i__7490__auto___26005 = G__26006;
continue;
} else {
}
break;
}

var G__26001 = args25999.length;
switch (G__26001) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25999.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((function (){var G__26002 = (x - y);
return Math.abs(G__26002);
})() < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__26003 = (x - y);
return Math.abs(G__26003);
})() < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args26008 = [];
var len__7489__auto___26012 = arguments.length;
var i__7490__auto___26013 = (0);
while(true){
if((i__7490__auto___26013 < len__7489__auto___26012)){
args26008.push((arguments[i__7490__auto___26013]));

var G__26014 = (i__7490__auto___26013 + (1));
i__7490__auto___26013 = G__26014;
continue;
} else {
}
break;
}

var G__26010 = args26008.length;
switch (G__26010) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26008.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__26011 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26011) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
var G__26018 = n;
return Math.round(G__26018);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__26020 = (n * 10.0);
return Math.round(G__26020);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__26022 = (n * 100.0);
return Math.round(G__26022);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args26023 = [];
var len__7489__auto___26029 = arguments.length;
var i__7490__auto___26030 = (0);
while(true){
if((i__7490__auto___26030 < len__7489__auto___26029)){
args26023.push((arguments[i__7490__auto___26030]));

var G__26031 = (i__7490__auto___26030 + (1));
i__7490__auto___26030 = G__26031;
continue;
} else {
}
break;
}

var G__26025 = args26023.length;
switch (G__26025) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26023.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__26026){
var map__26027 = p__26026;
var map__26027__$1 = ((((!((map__26027 == null)))?((((map__26027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26027):map__26027);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26027__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26027__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26027__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__26035 = cljs.core.meta(x);
var G__26036 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__26035,G__26036) : taoensso.encore.merge.call(null,G__26035,G__26036));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args26038 = [];
var len__7489__auto___26044 = arguments.length;
var i__7490__auto___26045 = (0);
while(true){
if((i__7490__auto___26045 < len__7489__auto___26044)){
args26038.push((arguments[i__7490__auto___26045]));

var G__26046 = (i__7490__auto___26045 + (1));
i__7490__auto___26045 = G__26046;
continue;
} else {
}
break;
}

var G__26043 = args26038.length;
switch (G__26043) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26038.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7508__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__6402__auto__ = taoensso.encore.some_QMARK_(x);
if(and__6402__auto__){
var and__6402__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__6402__auto____$1){
return taoensso.encore.revery_QMARK_(((function (and__6402__auto____$1,and__6402__auto__){
return (function (p1__26037_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26037_SHARP_,x);
});})(and__6402__auto____$1,and__6402__auto__))
,more);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq26039){
var G__26040 = cljs.core.first(seq26039);
var seq26039__$1 = cljs.core.next(seq26039);
var G__26041 = cljs.core.first(seq26039__$1);
var seq26039__$2 = cljs.core.next(seq26039__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__26040,G__26041,seq26039__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args26048 = [];
var len__7489__auto___26055 = arguments.length;
var i__7490__auto___26056 = (0);
while(true){
if((i__7490__auto___26056 < len__7489__auto___26055)){
args26048.push((arguments[i__7490__auto___26056]));

var G__26057 = (i__7490__auto___26056 + (1));
i__7490__auto___26056 = G__26057;
continue;
} else {
}
break;
}

var G__26054 = args26048.length;
switch (G__26054) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26048.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7508__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq26049){
var G__26050 = cljs.core.first(seq26049);
var seq26049__$1 = cljs.core.next(seq26049);
var G__26051 = cljs.core.first(seq26049__$1);
var seq26049__$2 = cljs.core.next(seq26049__$1);
var G__26052 = cljs.core.first(seq26049__$2);
var seq26049__$3 = cljs.core.next(seq26049__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__26050,G__26051,G__26052,seq26049__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__26062 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26062,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26062,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__24369__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__24369__auto__)){
var s = b2__24369__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var b2__24369__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__24369__auto__)){
var s = b2__24369__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__26075 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(2),null);
var vec__26078 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26078,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26078,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26078,(2),null);
var vec__26081 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__26075,xc,yc,zc,vec__26078,xm,ym,zm){
return (function (p1__26065_SHARP_){
var or__6414__auto__ = p1__26065_SHARP_;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (0);
}
});})(vec__26075,xc,yc,zc,vec__26078,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args26084 = [];
var len__7489__auto___26087 = arguments.length;
var i__7490__auto___26088 = (0);
while(true){
if((i__7490__auto___26088 < len__7489__auto___26087)){
args26084.push((arguments[i__7490__auto___26088]));

var G__26089 = (i__7490__auto___26088 + (1));
i__7490__auto___26088 = G__26089;
continue;
} else {
}
break;
}

var G__26086 = args26084.length;
switch (G__26086) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26084.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26092 = arguments.length;
var i__7490__auto___26093 = (0);
while(true){
if((i__7490__auto___26093 < len__7489__auto___26092)){
args__7496__auto__.push((arguments[i__7490__auto___26093]));

var G__26094 = (i__7490__auto___26093 + (1));
i__7490__auto___26093 = G__26094;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq26091){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26091));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args26095 = [];
var len__7489__auto___26098 = arguments.length;
var i__7490__auto___26099 = (0);
while(true){
if((i__7490__auto___26099 < len__7489__auto___26098)){
args26095.push((arguments[i__7490__auto___26099]));

var G__26100 = (i__7490__auto___26099 + (1));
i__7490__auto___26099 = G__26100;
continue;
} else {
}
break;
}

var G__26097 = args26095.length;
switch (G__26097) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26095.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_26110 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_26110){
return (function taoensso$encore$oget_in(var_args){
var args26104 = [];
var len__7489__auto___26111 = arguments.length;
var i__7490__auto___26112 = (0);
while(true){
if((i__7490__auto___26112 < len__7489__auto___26111)){
args26104.push((arguments[i__7490__auto___26112]));

var G__26113 = (i__7490__auto___26112 + (1));
i__7490__auto___26112 = G__26113;
continue;
} else {
}
break;
}

var G__26106 = args26104.length;
switch (G__26106) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26104.length)].join('')));

}
});})(sentinel_26110))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_26110){
return (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
});})(sentinel_26110))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_26110){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = (function (){var G__26107 = o__$1;
var G__26108 = cljs.core.first(ks__$1);
var G__26109 = sentinel_26110;
return goog.object.get(G__26107,G__26108,G__26109);
})();
if((o__$2 === sentinel_26110)){
return not_found;
} else {
var G__26115 = o__$2;
var G__26116 = cljs.core.next(ks__$1);
o__$1 = G__26115;
ks__$1 = G__26116;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_26110))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args26117 = [];
var len__7489__auto___26129 = arguments.length;
var i__7490__auto___26130 = (0);
while(true){
if((i__7490__auto___26130 < len__7489__auto___26129)){
args26117.push((arguments[i__7490__auto___26130]));

var G__26131 = (i__7490__auto___26130 + (1));
i__7490__auto___26130 = G__26131;
continue;
} else {
}
break;
}

var G__26122 = args26117.length;
switch (G__26122) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26117.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7508__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq26118){
var G__26119 = cljs.core.first(seq26118);
var seq26118__$1 = cljs.core.next(seq26118);
var G__26120 = cljs.core.first(seq26118__$1);
var seq26118__$2 = cljs.core.next(seq26118__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__26119,G__26120,seq26118__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var args26123 = [];
var len__7489__auto___26133 = arguments.length;
var i__7490__auto___26134 = (0);
while(true){
if((i__7490__auto___26134 < len__7489__auto___26133)){
args26123.push((arguments[i__7490__auto___26134]));

var G__26135 = (i__7490__auto___26134 + (1));
i__7490__auto___26134 = G__26135;
continue;
} else {
}
break;
}

var G__26128 = args26123.length;
switch (G__26128) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26123.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7508__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq26124){
var G__26125 = cljs.core.first(seq26124);
var seq26124__$1 = cljs.core.next(seq26124);
var G__26126 = cljs.core.first(seq26124__$1);
var seq26124__$2 = cljs.core.next(seq26124__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__26125,G__26126,seq26124__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args26137 = [];
var len__7489__auto___26158 = arguments.length;
var i__7490__auto___26159 = (0);
while(true){
if((i__7490__auto___26159 < len__7489__auto___26158)){
args26137.push((arguments[i__7490__auto___26159]));

var G__26160 = (i__7490__auto___26159 + (1));
i__7490__auto___26159 = G__26160;
continue;
} else {
}
break;
}

var G__26143 = args26137.length;
switch (G__26143) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26137.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7508__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq26138){
var G__26139 = cljs.core.first(seq26138);
var seq26138__$1 = cljs.core.next(seq26138);
var G__26140 = cljs.core.first(seq26138__$1);
var seq26138__$2 = cljs.core.next(seq26138__$1);
var G__26141 = cljs.core.first(seq26138__$2);
var seq26138__$3 = cljs.core.next(seq26138__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__26139,G__26140,G__26141,seq26138__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args26144 = [];
var len__7489__auto___26162 = arguments.length;
var i__7490__auto___26163 = (0);
while(true){
if((i__7490__auto___26163 < len__7489__auto___26162)){
args26144.push((arguments[i__7490__auto___26163]));

var G__26164 = (i__7490__auto___26163 + (1));
i__7490__auto___26163 = G__26164;
continue;
} else {
}
break;
}

var G__26150 = args26144.length;
switch (G__26150) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26144.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7508__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq26145){
var G__26146 = cljs.core.first(seq26145);
var seq26145__$1 = cljs.core.next(seq26145);
var G__26147 = cljs.core.first(seq26145__$1);
var seq26145__$2 = cljs.core.next(seq26145__$1);
var G__26148 = cljs.core.first(seq26145__$2);
var seq26145__$3 = cljs.core.next(seq26145__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__26146,G__26147,G__26148,seq26145__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var args26151 = [];
var len__7489__auto___26166 = arguments.length;
var i__7490__auto___26167 = (0);
while(true){
if((i__7490__auto___26167 < len__7489__auto___26166)){
args26151.push((arguments[i__7490__auto___26167]));

var G__26168 = (i__7490__auto___26167 + (1));
i__7490__auto___26167 = G__26168;
continue;
} else {
}
break;
}

var G__26157 = args26151.length;
switch (G__26157) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26151.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7508__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq26152){
var G__26153 = cljs.core.first(seq26152);
var seq26152__$1 = cljs.core.next(seq26152);
var G__26154 = cljs.core.first(seq26152__$1);
var seq26152__$2 = cljs.core.next(seq26152__$1);
var G__26155 = cljs.core.first(seq26152__$2);
var seq26152__$3 = cljs.core.next(seq26152__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__26153,G__26154,G__26155,seq26152__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var args26170 = [];
var len__7489__auto___26173 = arguments.length;
var i__7490__auto___26174 = (0);
while(true){
if((i__7490__auto___26174 < len__7489__auto___26173)){
args26170.push((arguments[i__7490__auto___26174]));

var G__26175 = (i__7490__auto___26174 + (1));
i__7490__auto___26174 = G__26175;
continue;
} else {
}
break;
}

var G__26172 = args26170.length;
switch (G__26172) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26170.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var args26177 = [];
var len__7489__auto___26180 = arguments.length;
var i__7490__auto___26181 = (0);
while(true){
if((i__7490__auto___26181 < len__7489__auto___26180)){
args26177.push((arguments[i__7490__auto___26181]));

var G__26182 = (i__7490__auto___26181 + (1));
i__7490__auto___26181 = G__26182;
continue;
} else {
}
break;
}

var G__26179 = args26177.length;
switch (G__26179) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26177.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__26187 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26187,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__26193 = xs__$1;
var seq__26194 = cljs.core.seq(vec__26193);
var first__26195 = cljs.core.first(seq__26194);
var seq__26194__$1 = cljs.core.next(seq__26194);
var x1 = first__26195;
var xn = seq__26194__$1;
if(xn){
var G__26196 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__26197 = xn;
butlast = G__26196;
xs__$1 = G__26197;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26200 = arguments.length;
var i__7490__auto___26201 = (0);
while(true){
if((i__7490__auto___26201 < len__7489__auto___26200)){
args__7496__auto__.push((arguments[i__7490__auto___26201]));

var G__26202 = (i__7490__auto___26201 + (1));
i__7490__auto___26201 = G__26202;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq26198){
var G__26199 = cljs.core.first(seq26198);
var seq26198__$1 = cljs.core.next(seq26198);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__26199,seq26198__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args26203 = [];
var len__7489__auto___26209 = arguments.length;
var i__7490__auto___26210 = (0);
while(true){
if((i__7490__auto___26210 < len__7489__auto___26209)){
args26203.push((arguments[i__7490__auto___26210]));

var G__26211 = (i__7490__auto___26210 + (1));
i__7490__auto___26210 = G__26211;
continue;
} else {
}
break;
}

var G__26208 = args26203.length;
switch (G__26208) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26203.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7508__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq26204){
var G__26205 = cljs.core.first(seq26204);
var seq26204__$1 = cljs.core.next(seq26204);
var G__26206 = cljs.core.first(seq26204__$1);
var seq26204__$2 = cljs.core.next(seq26204__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__26205,G__26206,seq26204__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args26213 = [];
var len__7489__auto___26216 = arguments.length;
var i__7490__auto___26217 = (0);
while(true){
if((i__7490__auto___26217 < len__7489__auto___26216)){
args26213.push((arguments[i__7490__auto___26217]));

var G__26218 = (i__7490__auto___26217 + (1));
i__7490__auto___26217 = G__26218;
continue;
} else {
}
break;
}

var G__26215 = args26213.length;
switch (G__26215) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26213.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args26220 = [];
var len__7489__auto___26223 = arguments.length;
var i__7490__auto___26224 = (0);
while(true){
if((i__7490__auto___26224 < len__7489__auto___26223)){
args26220.push((arguments[i__7490__auto___26224]));

var G__26225 = (i__7490__auto___26224 + (1));
i__7490__auto___26224 = G__26225;
continue;
} else {
}
break;
}

var G__26222 = args26220.length;
switch (G__26222) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26220.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__26227 = null;
var G__26227__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__26227__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__26227__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen_) : cljs.core.deref.call(null,seen_)),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__26227 = function(acc,input){
switch(arguments.length){
case 0:
return G__26227__0.call(this);
case 1:
return G__26227__1.call(this,acc);
case 2:
return G__26227__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26227.cljs$core$IFn$_invoke$arity$0 = G__26227__0;
G__26227.cljs$core$IFn$_invoke$arity$1 = G__26227__1;
G__26227.cljs$core$IFn$_invoke$arity$2 = G__26227__2;
return G__26227;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__26228_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__26228_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var args26229 = [];
var len__7489__auto___26237 = arguments.length;
var i__7490__auto___26238 = (0);
while(true){
if((i__7490__auto___26238 < len__7489__auto___26237)){
args26229.push((arguments[i__7490__auto___26238]));

var G__26239 = (i__7490__auto___26238 + (1));
i__7490__auto___26238 = G__26239;
continue;
} else {
}
break;
}

var G__26231 = args26229.length;
switch (G__26231) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26229.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__24369__auto__ = cljs.core.seq(ks);
if(b2__24369__auto__){
var ks_seq = b2__24369__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__24369__auto____$1 = cljs.core.next(ks_seq);
if(b2__24369__auto____$1){
var ks__$1 = b2__24369__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__26232 = f;
var G__26233 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26232,G__26233) : taoensso.encore.kw_identical_QMARK_.call(null,G__26232,G__26233));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__26234 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26234) : f.call(null,G__26234));
})();
if(cljs.core.truth_((function (){var G__26235 = v;
var G__26236 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26235,G__26236) : taoensso.encore.kw_identical_QMARK_.call(null,G__26235,G__26236));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var args26241 = [];
var len__7489__auto___26244 = arguments.length;
var i__7490__auto___26245 = (0);
while(true){
if((i__7490__auto___26245 < len__7489__auto___26244)){
args26241.push((arguments[i__7490__auto___26245]));

var G__26246 = (i__7490__auto___26245 + (1));
i__7490__auto___26245 = G__26246;
continue;
} else {
}
break;
}

var G__26243 = args26241.length;
switch (G__26243) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26241.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args26248 = [];
var len__7489__auto___26255 = arguments.length;
var i__7490__auto___26256 = (0);
while(true){
if((i__7490__auto___26256 < len__7489__auto___26255)){
args26248.push((arguments[i__7490__auto___26256]));

var G__26257 = (i__7490__auto___26256 + (1));
i__7490__auto___26256 = G__26257;
continue;
} else {
}
break;
}

var G__26254 = args26248.length;
switch (G__26254) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26248.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7508__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq26249){
var G__26250 = cljs.core.first(seq26249);
var seq26249__$1 = cljs.core.next(seq26249);
var G__26251 = cljs.core.first(seq26249__$1);
var seq26249__$2 = cljs.core.next(seq26249__$1);
var G__26252 = cljs.core.first(seq26249__$2);
var seq26249__$3 = cljs.core.next(seq26249__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__26250,G__26251,G__26252,seq26249__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args26259 = [];
var len__7489__auto___26265 = arguments.length;
var i__7490__auto___26266 = (0);
while(true){
if((i__7490__auto___26266 < len__7489__auto___26265)){
args26259.push((arguments[i__7490__auto___26266]));

var G__26267 = (i__7490__auto___26266 + (1));
i__7490__auto___26266 = G__26267;
continue;
} else {
}
break;
}

var G__26264 = args26259.length;
switch (G__26264) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26259.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7508__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq26260){
var G__26261 = cljs.core.first(seq26260);
var seq26260__$1 = cljs.core.next(seq26260);
var G__26262 = cljs.core.first(seq26260__$1);
var seq26260__$2 = cljs.core.next(seq26260__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__26261,G__26262,seq26260__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if((s1) && (s2)){
var G__26269 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__26270 = cljs.core.next(s1);
var G__26271 = cljs.core.next(s2);
v = G__26269;
s1 = G__26270;
s2 = G__26271;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var not_found_26290 = {};
taoensso.encore._merge_with = ((function (not_found_26290){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (not_found_26290){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv(((function (not_found_26290){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_26290);
if((lv === not_found_26290)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__26286 = rv;
var G__26287 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26286,G__26287) : taoensso.encore.kw_identical_QMARK_.call(null,G__26286,G__26287));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__6402__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__6402__auto__)){
return (cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv));
} else {
return and__6402__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((function (){var G__26288 = new_rv;
var G__26289 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26288,G__26289) : taoensso.encore.kw_identical_QMARK_.call(null,G__26288,G__26289));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
});})(not_found_26290))
,(function (){var or__6414__auto__ = acc;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_26290))
,null,maps);
});})(not_found_26290))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26297 = arguments.length;
var i__7490__auto___26298 = (0);
while(true){
if((i__7490__auto___26298 < len__7489__auto___26297)){
args__7496__auto__.push((arguments[i__7490__auto___26298]));

var G__26299 = (i__7490__auto___26298 + (1));
i__7490__auto___26298 = G__26299;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq26291){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26291));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26300 = arguments.length;
var i__7490__auto___26301 = (0);
while(true){
if((i__7490__auto___26301 < len__7489__auto___26300)){
args__7496__auto__.push((arguments[i__7490__auto___26301]));

var G__26302 = (i__7490__auto___26301 + (1));
i__7490__auto___26301 = G__26302;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq26292){
var G__26293 = cljs.core.first(seq26292);
var seq26292__$1 = cljs.core.next(seq26292);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__26293,seq26292__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26303 = arguments.length;
var i__7490__auto___26304 = (0);
while(true){
if((i__7490__auto___26304 < len__7489__auto___26303)){
args__7496__auto__.push((arguments[i__7490__auto___26304]));

var G__26305 = (i__7490__auto___26304 + (1));
i__7490__auto___26304 = G__26305;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq26294){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26294));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26306 = arguments.length;
var i__7490__auto___26307 = (0);
while(true){
if((i__7490__auto___26307 < len__7489__auto___26306)){
args__7496__auto__.push((arguments[i__7490__auto___26307]));

var G__26308 = (i__7490__auto___26307 + (1));
i__7490__auto___26307 = G__26308;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq26295){
var G__26296 = cljs.core.first(seq26295);
var seq26295__$1 = cljs.core.next(seq26295);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__26296,seq26295__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
})

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newv,cljs.core.cst$sym$returnv], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = cljs.core.cst$sym$clojure$lang$IAtom;
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var v1 = (function (){var G__26310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26310) : f.call(null,G__26310));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,v1) : cljs.core.reset_BANG_.call(null,atom_,v1));

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,v1) : cljs.core.reset_BANG_.call(null,atom_,v1));

return true;
})()
){
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((function (){var G__26317 = f;
var G__26318 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26317,G__26318) : taoensso.encore.kw_identical_QMARK_.call(null,G__26317,G__26318));
})())){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
var G__26319 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__26320 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__26319,G__26320) : return$.call(null,G__26319,G__26320));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__26321 = v1;
var G__26322 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26321,G__26322) : taoensso.encore.kw_identical_QMARK_.call(null,G__26321,G__26322));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
var G__26325 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__26326 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__26325,G__26326) : return$.call(null,G__26325,G__26326));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__24369__auto__ = cljs.core.seq(ks);
if(b2__24369__auto__){
var ks_seq = b2__24369__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__26333 = f;
var G__26334 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26333,G__26334) : taoensso.encore.kw_identical_QMARK_.call(null,G__26333,G__26334));
})())){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__24369__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__24369__auto__))
,ks);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
var G__26335 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__26336 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__26335,G__26336) : return$.call(null,G__26335,G__26336));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__26337 = v1;
var G__26338 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26337,G__26338) : taoensso.encore.kw_identical_QMARK_.call(null,G__26337,G__26338));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__24369__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__24369__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__24369__auto__ = cljs.core.seq(ks);
if(b2__24369__auto__){
var ks_seq = b2__24369__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var m1 = cljs.core.assoc_in(m0,ks,v1);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
var G__26341 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__26342 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__26341,G__26342) : return$.call(null,G__26341,G__26342));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_26346 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_26346){
return (function taoensso$encore$swap_val_BANG_(var_args){
var args26343 = [];
var len__7489__auto___26347 = arguments.length;
var i__7490__auto___26348 = (0);
while(true){
if((i__7490__auto___26348 < len__7489__auto___26347)){
args26343.push((arguments[i__7490__auto___26348]));

var G__26349 = (i__7490__auto___26348 + (1));
i__7490__auto___26348 = G__26349;
continue;
} else {
}
break;
}

var G__26345 = args26343.length;
switch (G__26345) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26343.length)].join('')));

}
});})(return_26346))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_26346){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_26346,atom_,k,null,f);
});})(return_26346))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_26346){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_26346,atom_,k,not_found,f);
});})(return_26346))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_26354 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_26354){
return (function taoensso$encore$reset_val_BANG_(var_args){
var args26351 = [];
var len__7489__auto___26355 = arguments.length;
var i__7490__auto___26356 = (0);
while(true){
if((i__7490__auto___26356 < len__7489__auto___26355)){
args26351.push((arguments[i__7490__auto___26356]));

var G__26357 = (i__7490__auto___26356 + (1));
i__7490__auto___26356 = G__26357;
continue;
} else {
}
break;
}

var G__26353 = args26351.length;
switch (G__26353) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26351.length)].join('')));

}
});})(return_26354))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_26354){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_26354,atom_,k,null,val);
});})(return_26354))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_26354){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_26354,atom_,k,not_found,val);
});})(return_26354))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_26362 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_26362){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var args26359 = [];
var len__7489__auto___26363 = arguments.length;
var i__7490__auto___26364 = (0);
while(true){
if((i__7490__auto___26364 < len__7489__auto___26363)){
args26359.push((arguments[i__7490__auto___26364]));

var G__26365 = (i__7490__auto___26364 + (1));
i__7490__auto___26364 = G__26365;
continue;
} else {
}
break;
}

var G__26361 = args26359.length;
switch (G__26361) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26359.length)].join('')));

}
});})(return_26362))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_26362){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_26362,atom_,k,null,f);
});})(return_26362))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_26362){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_26362,atom_,k,not_found,f);
});})(return_26362))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var args26367 = [];
var len__7489__auto___26373 = arguments.length;
var i__7490__auto___26374 = (0);
while(true){
if((i__7490__auto___26374 < len__7489__auto___26373)){
args26367.push((arguments[i__7490__auto___26374]));

var G__26375 = (i__7490__auto___26374 + (1));
i__7490__auto___26374 = G__26375;
continue;
} else {
}
break;
}

var G__26369 = args26367.length;
switch (G__26369) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26367.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__26370 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26370,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_26379 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_26379){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_26379,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_26379))
;
var return_26383 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_26383){
return (function taoensso$encore$swap_in_BANG_(var_args){
var args26380 = [];
var len__7489__auto___26384 = arguments.length;
var i__7490__auto___26385 = (0);
while(true){
if((i__7490__auto___26385 < len__7489__auto___26384)){
args26380.push((arguments[i__7490__auto___26385]));

var G__26386 = (i__7490__auto___26385 + (1));
i__7490__auto___26385 = G__26386;
continue;
} else {
}
break;
}

var G__26382 = args26380.length;
switch (G__26382) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26380.length)].join('')));

}
});})(return_26383))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_26383){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_26383,atom_,f);
});})(return_26383))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_26383){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_26383,atom_,ks,null,f);
});})(return_26383))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_26383){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_26383,atom_,ks,not_found,f);
});})(return_26383))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_26391 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_26391){
return (function taoensso$encore$reset_in_BANG_(var_args){
var args26388 = [];
var len__7489__auto___26392 = arguments.length;
var i__7490__auto___26393 = (0);
while(true){
if((i__7490__auto___26393 < len__7489__auto___26392)){
args26388.push((arguments[i__7490__auto___26393]));

var G__26394 = (i__7490__auto___26393 + (1));
i__7490__auto___26393 = G__26394;
continue;
} else {
}
break;
}

var G__26390 = args26388.length;
switch (G__26390) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26388.length)].join('')));

}
});})(return_26391))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_26391){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_26391,atom_,val);
});})(return_26391))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_26391){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_26391,atom_,ks,null,val);
});})(return_26391))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_26391){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_26391,atom_,ks,not_found,val);
});})(return_26391))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_26399 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_26399){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var args26396 = [];
var len__7489__auto___26400 = arguments.length;
var i__7490__auto___26401 = (0);
while(true){
if((i__7490__auto___26401 < len__7489__auto___26400)){
args26396.push((arguments[i__7490__auto___26401]));

var G__26402 = (i__7490__auto___26401 + (1));
i__7490__auto___26401 = G__26402;
continue;
} else {
}
break;
}

var G__26398 = args26396.length;
switch (G__26398) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26396.length)].join('')));

}
});})(return_26399))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_26399){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_26399,atom_,f);
});})(return_26399))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_26399){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_26399,atom_,ks,null,f);
});})(return_26399))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_26399){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_26399,atom_,ks,not_found,f);
});})(return_26399))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__24369__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__24369__auto__)){
var perf = b2__24369__auto__;
var b2__24369__auto____$1 = (function (){var or__6414__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
var or__6414__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__6414__auto____$2)){
return or__6414__auto____$2;
} else {
var or__6414__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__6414__auto____$3)){
return or__6414__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__24369__auto____$1)){
var f = b2__24369__auto____$1;
return ((function (f,b2__24369__auto____$1,perf,b2__24369__auto__){
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
;})(f,b2__24369__auto____$1,perf,b2__24369__auto__))
} else {
return ((function (b2__24369__auto____$1,perf,b2__24369__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__24369__auto____$1,perf,b2__24369__auto__))
}
} else {
return ((function (b2__24369__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__24369__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__26420__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__26414 = x1;
var G__26415 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26414,G__26415) : taoensso.encore.kw_identical_QMARK_.call(null,G__26414,G__26415));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__26416 = x2;
var G__26417 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26416,G__26417) : taoensso.encore.kw_identical_QMARK_.call(null,G__26416,G__26417));
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cache_),xn));
}

return null;
} else {
if(cljs.core.truth_((function (){var G__26418 = x1;
var G__26419 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26418,G__26419) : taoensso.encore.kw_identical_QMARK_.call(null,G__26418,G__26419));
})())){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__26420 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__26421__i = 0, G__26421__a = new Array(arguments.length -  0);
while (G__26421__i < G__26421__a.length) {G__26421__a[G__26421__i] = arguments[G__26421__i + 0]; ++G__26421__i;}
  xs = new cljs.core.IndexedSeq(G__26421__a,0);
} 
return G__26420__delegate.call(this,xs);};
G__26420.cljs$lang$maxFixedArity = 0;
G__26420.cljs$lang$applyTo = (function (arglist__26422){
var xs = cljs.core.seq(arglist__26422);
return G__26420__delegate(xs);
});
G__26420.cljs$core$IFn$_invoke$arity$variadic = G__26420__delegate;
return G__26420;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = (function (){var G__26425 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26425) : cljs.core.atom.call(null,G__26425));
})();
return ((function (cache_){
return (function() { 
var G__26427__delegate = function (args){
var G__26426 = (function (){var or__6414__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),args);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__6414__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__6414__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__6414__auto__,cache_))
,null))], true, false);
}
});})(or__6414__auto__,cache_))
),args);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26426) : cljs.core.deref.call(null,G__26426));
};
var G__26427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26428__i = 0, G__26428__a = new Array(arguments.length -  0);
while (G__26428__i < G__26428__a.length) {G__26428__a[G__26428__i] = arguments[G__26428__i + 0]; ++G__26428__i;}
  args = new cljs.core.IndexedSeq(G__26428__a,0);
} 
return G__26427__delegate.call(this,args);};
G__26427.cljs$lang$maxFixedArity = 0;
G__26427.cljs$lang$applyTo = (function (arglist__26429){
var args = cljs.core.seq(arglist__26429);
return G__26427__delegate(args);
});
G__26427.cljs$core$IFn$_invoke$arity$variadic = G__26427__delegate;
return G__26427;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
})

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
})

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lru,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lfu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args26430 = [];
var len__7489__auto___26452 = arguments.length;
var i__7490__auto___26453 = (0);
while(true){
if((i__7490__auto___26453 < len__7489__auto___26452)){
args26430.push((arguments[i__7490__auto___26453]));

var G__26454 = (i__7490__auto___26453 + (1));
i__7490__auto___26453 = G__26454;
continue;
} else {
}
break;
}

var G__26432 = args26430.length;
switch (G__26432) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26430.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_26456 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e26433){if((e26433 instanceof Error)){
var e = e26433;
return e;
} else {
throw e26433;

}
}})();
if((e_26456 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1717,"(pos-int? ttl-ms)",ttl_ms,e_26456,null);
}

var cache_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var latch_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__26457__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__26434 = a1;
var G__26435 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26434,G__26435) : taoensso.encore.kw_identical_QMARK_.call(null,G__26434,G__26435));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__26436 = a2;
var G__26437 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26436,G__26437) : taoensso.encore.kw_identical_QMARK_.call(null,G__26436,G__26437));
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,null) : cljs.core.reset_BANG_.call(null,cache_,null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_26458 = null;
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(latch_,latch_26458) : cljs.core.reset_BANG_.call(null,latch_,latch_26458));

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_26458,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_26458,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_26458,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$((function (){var or__6414__auto__ = m;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_26458,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__26438 = a1;
var G__26439 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26438,G__26439) : taoensso.encore.kw_identical_QMARK_.call(null,G__26438,G__26439));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__6414__auto__ = (_QMARK_e == null);
if(or__6414__auto__){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
var G__26440 = e.delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26440) : cljs.core.deref.call(null,G__26440));
}
};
var G__26457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26459__i = 0, G__26459__a = new Array(arguments.length -  0);
while (G__26459__i < G__26459__a.length) {G__26459__a[G__26459__i] = arguments[G__26459__i + 0]; ++G__26459__i;}
  args = new cljs.core.IndexedSeq(G__26459__a,0);
} 
return G__26457__delegate.call(this,args);};
G__26457.cljs$lang$maxFixedArity = 0;
G__26457.cljs$lang$applyTo = (function (arglist__26460){
var args = cljs.core.seq(arglist__26460);
return G__26457__delegate(args);
});
G__26457.cljs$core$IFn$_invoke$arity$variadic = G__26457__delegate;
return G__26457;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__6414__auto__ = (x == null);
if(or__6414__auto__){
return or__6414__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1768,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_26461 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e26441){if((e26441 instanceof Error)){
var e = e26441;
return e;
} else {
throw e26441;

}
}})();
if((e_26461 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1769,"(pos-int? cache-size)",cache_size,e_26461,null);
}

var tick_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var cache_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var latch_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var ttl_ms__$1 = cljs.core.long$((function (){var or__6414__auto__ = ttl_ms;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$(cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__26462__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__26442 = a1;
var G__26443 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26442,G__26443) : taoensso.encore.kw_identical_QMARK_.call(null,G__26442,G__26443));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__26444 = a2;
var G__26445 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26444,G__26445) : taoensso.encore.kw_identical_QMARK_.call(null,G__26444,G__26445));
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,null) : cljs.core.reset_BANG_.call(null,cache_,null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_26463 = null;
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(latch_,latch_26463) : cljs.core.reset_BANG_.call(null,latch_,latch_26463));

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__6414__auto__ = m;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_26464 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_));
var n_to_gc_26465 = (cljs.core.count(snapshot_26464) - cache_size__$1);
if((n_to_gc_26465 > (64))){
var ks_to_gc_26466 = (function (){var G__26446 = n_to_gc_26465;
var G__26447 = ((function (G__26446,snapshot_26464,n_to_gc_26465,latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_26464,k);
return (e.tick_lru + e.tick_lfu);
});})(G__26446,snapshot_26464,n_to_gc_26465,latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
;
var G__26448 = cljs.core.keys(snapshot_26464);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__26446,G__26447,G__26448) : taoensso.encore.top.call(null,G__26446,G__26447,G__26448));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (ks_to_gc_26466,snapshot_26464,n_to_gc_26465,latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_26466,snapshot_26464,n_to_gc_26465,latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_26466,snapshot_26464,n_to_gc_26465,latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__6414__auto__ = m;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_26466));
});})(ks_to_gc_26466,snapshot_26464,n_to_gc_26465,latch_26463,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__26449 = a1;
var G__26450 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26449,G__26450) : taoensso.encore.kw_identical_QMARK_.call(null,G__26449,G__26450));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__6414__auto__ = (_QMARK_e == null);
if(or__6414__auto__){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var G__26451 = e.delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26451) : cljs.core.deref.call(null,G__26451));
}
};
var G__26462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26467__i = 0, G__26467__a = new Array(arguments.length -  0);
while (G__26467__i < G__26467__a.length) {G__26467__a[G__26467__i] = arguments[G__26467__i + 0]; ++G__26467__i;}
  args = new cljs.core.IndexedSeq(G__26467__a,0);
} 
return G__26462__delegate.call(this,args);};
G__26462.cljs$lang$maxFixedArity = 0;
G__26462.cljs$lang$applyTo = (function (arglist__26468){
var args = cljs.core.seq(arglist__26468);
return G__26462__delegate(args);
});
G__26462.cljs$core$IFn$_invoke$arity$variadic = G__26462__delegate;
return G__26462;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
})

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
})

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$udt0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
})

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$worst_DASH_sid,cljs.core.with_meta(cljs.core.cst$sym$worst_DASH_ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_26487 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e26469){if((e26469 instanceof Error)){
var e = e26469;
return e;
} else {
throw e26469;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1869,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e26470){if((e26470 instanceof Error)){
var e = e26470;
return e;
} else {
throw e26470;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1869,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_26487){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(((function (limit_spec_26487){
return (function (acc,sid,p__26479){
var vec__26480 = p__26479;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26480,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26480,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_26487(n,ms));
});})(limit_spec_26487))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,limit_spec_26487){
return (function (acc,p__26483){
var vec__26484 = p__26483;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26484,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26484,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26484,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__6414__auto__ = _QMARK_id;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core._vreset_BANG_(i,((function (or__6414__auto__,vec__26484,n,ms,_QMARK_id,i,limit_spec_26487){
return (function (i__$1){
return (i__$1 + (1));
});})(or__6414__auto__,vec__26484,n,ms,_QMARK_id,i,limit_spec_26487))
.call(null,cljs.core._deref(i)));
}
})(),limit_spec_26487(n,ms));
});})(i,limit_spec_26487))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_26487))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reqs_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_26516 = null;
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(latch_,latch_26516) : cljs.core.reset_BANG_.call(null,latch_,latch_26516));

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,((function (latch_26516,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_26516,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv(((function (latch_26516,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__24369__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__24369__auto__)){
var s = b2__24369__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
});})(latch_26516,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
});})(latch_26516,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$((function (){var or__6414__auto__ = reqs;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_26516,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reqs_) : cljs.core.deref.call(null,reqs_));
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__24369__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__24369__auto__)){
var s = b2__24369__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.fromArray([sid,tdelta], true, false),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__6414__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__24369__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__24369__auto__)){
var h = b2__24369__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__24369__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(latch_) : cljs.core.deref.call(null,latch_));
if(cljs.core.truth_(b2__24369__auto__)){
var l = b2__24369__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__24369__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__24369__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__24369__auto____$1)){
var e = b2__24369__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__24369__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
var G__26502_26517 = reqs_;
var G__26503_26518 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26502_26517,G__26503_26518) : cljs.core.reset_BANG_.call(null,G__26502_26517,G__26503_26518));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((function (){var G__26510 = cmd;
var G__26511 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26510,G__26511) : taoensso.encore.kw_identical_QMARK_.call(null,G__26510,G__26511));
})())){
if(cljs.core.truth_((function (){var G__26512 = req_id;
var G__26513 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26512,G__26513) : taoensso.encore.kw_identical_QMARK_.call(null,G__26512,G__26513));
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,null) : cljs.core.reset_BANG_.call(null,reqs_,null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((function (){var G__26514 = cmd;
var G__26515 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26514,G__26515) : taoensso.encore.kw_identical_QMARK_.call(null,G__26514,G__26515));
})())){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,cmd,cljs.core.cst$kw$req_DASH_id,req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__26522 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26522,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26522,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args26525 = [];
var len__7489__auto___26531 = arguments.length;
var i__7490__auto___26532 = (0);
while(true){
if((i__7490__auto___26532 < len__7489__auto___26531)){
args26525.push((arguments[i__7490__auto___26532]));

var G__26533 = (i__7490__auto___26532 + (1));
i__7490__auto___26532 = G__26533;
continue;
} else {
}
break;
}

var G__26530 = args26525.length;
switch (G__26530) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7508__auto__ = (new cljs.core.IndexedSeq(args26525.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7508__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq26526){
var G__26527 = cljs.core.first(seq26526);
var seq26526__$1 = cljs.core.next(seq26526);
var G__26528 = cljs.core.first(seq26526__$1);
var seq26526__$2 = cljs.core.next(seq26526__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__26527,G__26528,seq26526__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args26535 = [];
var len__7489__auto___26538 = arguments.length;
var i__7490__auto___26539 = (0);
while(true){
if((i__7490__auto___26539 < len__7489__auto___26538)){
args26535.push((arguments[i__7490__auto___26539]));

var G__26540 = (i__7490__auto___26539 + (1));
i__7490__auto___26539 = G__26540;
continue;
} else {
}
break;
}

var G__26537 = args26535.length;
switch (G__26537) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26535.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__6402__auto__ = separator;
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__6402__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args26542 = [];
var len__7489__auto___26545 = arguments.length;
var i__7490__auto___26546 = (0);
while(true){
if((i__7490__auto___26546 < len__7489__auto___26545)){
args26542.push((arguments[i__7490__auto___26546]));

var G__26547 = (i__7490__auto___26546 + (1));
i__7490__auto___26546 = G__26547;
continue;
} else {
}
break;
}

var G__26544 = args26542.length;
switch (G__26544) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26542.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var args26549 = [];
var len__7489__auto___26552 = arguments.length;
var i__7490__auto___26553 = (0);
while(true){
if((i__7490__auto___26553 < len__7489__auto___26552)){
args26549.push((arguments[i__7490__auto___26553]));

var G__26554 = (i__7490__auto___26553 + (1));
i__7490__auto___26553 = G__26554;
continue;
} else {
}
break;
}

var G__26551 = args26549.length;
switch (G__26551) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26549.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var args26556 = [];
var len__7489__auto___26559 = arguments.length;
var i__7490__auto___26560 = (0);
while(true){
if((i__7490__auto___26560 < len__7489__auto___26559)){
args26556.push((arguments[i__7490__auto___26560]));

var G__26561 = (i__7490__auto___26560 + (1));
i__7490__auto___26560 = G__26561;
continue;
} else {
}
break;
}

var G__26558 = args26556.length;
switch (G__26558) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26556.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__26565__delegate = function (args){
var G__26564 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__26564) : replacement.call(null,G__26564));
};
var G__26565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26566__i = 0, G__26566__a = new Array(arguments.length -  0);
while (G__26566__i < G__26566__a.length) {G__26566__a[G__26566__i] = arguments[G__26566__i + 0]; ++G__26566__i;}
  args = new cljs.core.IndexedSeq(G__26566__a,0);
} 
return G__26565__delegate.call(this,args);};
G__26565.cljs$lang$maxFixedArity = 0;
G__26565.cljs$lang$applyTo = (function (arglist__26567){
var args = cljs.core.seq(arglist__26567);
return G__26565__delegate(args);
});
G__26565.cljs$core$IFn$_invoke$arity$variadic = G__26565__delegate;
return G__26565;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__6414__auto__ = fmt;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26570 = arguments.length;
var i__7490__auto___26571 = (0);
while(true){
if((i__7490__auto___26571 < len__7489__auto___26570)){
args__7496__auto__.push((arguments[i__7490__auto___26571]));

var G__26572 = (i__7490__auto___26571 + (1));
i__7490__auto___26571 = G__26572;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq26568){
var G__26569 = cljs.core.first(seq26568);
var seq26568__$1 = cljs.core.next(seq26568);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__26569,seq26568__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc_ends_with_sep_QMARK__) : cljs.core.deref.call(null,acc_ends_with_sep_QMARK__));
var acc_empty_QMARK_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc_empty_QMARK__) : cljs.core.deref.call(null,acc_empty_QMARK__));
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__6414__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26574 = arguments.length;
var i__7490__auto___26575 = (0);
while(true){
if((i__7490__auto___26575 < len__7489__auto___26574)){
args__7496__auto__.push((arguments[i__7490__auto___26575]));

var G__26576 = (i__7490__auto___26575 + (1));
i__7490__auto___26575 = G__26576;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq26573){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26573));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args26577 = [];
var len__7489__auto___26580 = arguments.length;
var i__7490__auto___26581 = (0);
while(true){
if((i__7490__auto___26581 < len__7489__auto___26580)){
args26577.push((arguments[i__7490__auto___26581]));

var G__26582 = (i__7490__auto___26581 + (1));
i__7490__auto___26581 = G__26582;
continue;
} else {
}
break;
}

var G__26579 = args26577.length;
switch (G__26579) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26577.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26585 = arguments.length;
var i__7490__auto___26586 = (0);
while(true){
if((i__7490__auto___26586 < len__7489__auto___26585)){
args__7496__auto__.push((arguments[i__7490__auto___26586]));

var G__26587 = (i__7490__auto___26586 + (1));
i__7490__auto___26586 = G__26587;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str(in$)].join(''));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq26584){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26584));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
var sentinel_26593 = {};
var nil__GT_sentinel_26594 = ((function (sentinel_26593){
return (function (x){
if((x == null)){
return sentinel_26593;
} else {
return x;
}
});})(sentinel_26593))
;
var sentinel__GT_nil_26595 = ((function (sentinel_26593,nil__GT_sentinel_26594){
return (function (x){
if((x === sentinel_26593)){
return null;
} else {
return x;
}
});})(sentinel_26593,nil__GT_sentinel_26594))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_26593,nil__GT_sentinel_26594,sentinel__GT_nil_26595){
return (function taoensso$encore$reduce_top(var_args){
var args26590 = [];
var len__7489__auto___26596 = arguments.length;
var i__7490__auto___26597 = (0);
while(true){
if((i__7490__auto___26597 < len__7489__auto___26596)){
args26590.push((arguments[i__7490__auto___26597]));

var G__26598 = (i__7490__auto___26597 + (1));
i__7490__auto___26597 = G__26598;
continue;
} else {
}
break;
}

var G__26592 = args26590.length;
switch (G__26592) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26590.length)].join('')));

}
});})(sentinel_26593,nil__GT_sentinel_26594,sentinel__GT_nil_26595))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_26593,nil__GT_sentinel_26594,sentinel__GT_nil_26595){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_26593,nil__GT_sentinel_26594,sentinel__GT_nil_26595))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_26593,nil__GT_sentinel_26594,sentinel__GT_nil_26595){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_26593,nil__GT_sentinel_26594,sentinel__GT_nil_26595))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_26593,nil__GT_sentinel_26594,sentinel__GT_nil_26595){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__6752__auto__ = coll_size;
var y__6753__auto__ = cljs.core.long$(n);
return ((x__6752__auto__ < y__6753__auto__) ? x__6752__auto__ : y__6753__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_26593,nil__GT_sentinel_26594,sentinel__GT_nil_26595))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var args26600 = [];
var len__7489__auto___26603 = arguments.length;
var i__7490__auto___26604 = (0);
while(true){
if((i__7490__auto___26604 < len__7489__auto___26603)){
args26600.push((arguments[i__7490__auto___26604]));

var G__26605 = (i__7490__auto___26604 + (1));
i__7490__auto___26604 = G__26605;
continue;
} else {
}
break;
}

var G__26602 = args26600.length;
switch (G__26602) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26600.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args26607 = [];
var len__7489__auto___26610 = arguments.length;
var i__7490__auto___26611 = (0);
while(true){
if((i__7490__auto___26611 < len__7489__auto___26610)){
args26607.push((arguments[i__7490__auto___26611]));

var G__26612 = (i__7490__auto___26611 + (1));
i__7490__auto___26611 = G__26612;
continue;
} else {
}
break;
}

var G__26609 = args26607.length;
switch (G__26609) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26607.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26630 = arguments.length;
var i__7490__auto___26631 = (0);
while(true){
if((i__7490__auto___26631 < len__7489__auto___26630)){
args__7496__auto__.push((arguments[i__7490__auto___26631]));

var G__26632 = (i__7490__auto___26631 + (1));
i__7490__auto___26631 = G__26632;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__26627){
var map__26628 = p__26627;
var map__26628__$1 = ((((!((map__26628 == null)))?((((map__26628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26628):map__26628);
var opts = map__26628__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,cljs.core.cst$kw$ms);
taoensso.truss.impl.revery_QMARK_(((function (map__26628,map__26628__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null).call(null,__in))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2372,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__26628,map__26628__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq26626){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26626));
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__26647__delegate = function (xs){
var b2__24369__auto__ = console.log;
if(cljs.core.truth_(b2__24369__auto__)){
var f = b2__24369__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__26647 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__26648__i = 0, G__26648__a = new Array(arguments.length -  0);
while (G__26648__i < G__26648__a.length) {G__26648__a[G__26648__i] = arguments[G__26648__i + 0]; ++G__26648__i;}
  xs = new cljs.core.IndexedSeq(G__26648__a,0);
} 
return G__26647__delegate.call(this,xs);};
G__26647.cljs$lang$maxFixedArity = 0;
G__26647.cljs$lang$applyTo = (function (arglist__26649){
var xs = cljs.core.seq(arglist__26649);
return G__26647__delegate(xs);
});
G__26647.cljs$core$IFn$_invoke$arity$variadic = G__26647__delegate;
return G__26647;
})()
:(function() { 
var G__26650__delegate = function (xs){
return null;
};
var G__26650 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__26651__i = 0, G__26651__a = new Array(arguments.length -  0);
while (G__26651__i < G__26651__a.length) {G__26651__a[G__26651__i] = arguments[G__26651__i + 0]; ++G__26651__i;}
  xs = new cljs.core.IndexedSeq(G__26651__a,0);
} 
return G__26650__delegate.call(this,xs);};
G__26650.cljs$lang$maxFixedArity = 0;
G__26650.cljs$lang$applyTo = (function (arglist__26652){
var xs = cljs.core.seq(arglist__26652);
return G__26650__delegate(xs);
});
G__26650.cljs$core$IFn$_invoke$arity$variadic = G__26650__delegate;
return G__26650;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26653 = arguments.length;
var i__7490__auto___26654 = (0);
while(true){
if((i__7490__auto___26654 < len__7489__auto___26653)){
args__7496__auto__.push((arguments[i__7490__auto___26654]));

var G__26655 = (i__7490__auto___26654 + (1));
i__7490__auto___26654 = G__26655;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__26638 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__26638) : taoensso.encore.console_log.call(null,G__26638));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq26637){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26637));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26656 = arguments.length;
var i__7490__auto___26657 = (0);
while(true){
if((i__7490__auto___26657 < len__7489__auto___26656)){
args__7496__auto__.push((arguments[i__7490__auto___26657]));

var G__26658 = (i__7490__auto___26657 + (1));
i__7490__auto___26657 = G__26658;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__26640 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return alert(G__26640);
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq26639){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26639));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26659 = arguments.length;
var i__7490__auto___26660 = (0);
while(true){
if((i__7490__auto___26660 < len__7489__auto___26659)){
args__7496__auto__.push((arguments[i__7490__auto___26660]));

var G__26661 = (i__7490__auto___26660 + (1));
i__7490__auto___26660 = G__26661;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__26643 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__26643) : taoensso.encore.console_log.call(null,G__26643));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq26641){
var G__26642 = cljs.core.first(seq26641);
var seq26641__$1 = cljs.core.next(seq26641);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__26642,seq26641__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26662 = arguments.length;
var i__7490__auto___26663 = (0);
while(true){
if((i__7490__auto___26663 < len__7489__auto___26662)){
args__7496__auto__.push((arguments[i__7490__auto___26663]));

var G__26664 = (i__7490__auto___26663 + (1));
i__7490__auto___26663 = G__26664;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__26646 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__26646);
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq26644){
var G__26645 = cljs.core.first(seq26644);
var seq26644__$1 = cljs.core.next(seq26644);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__26645,seq26644__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__24369__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__24369__auto__)){
var js_win = b2__24369__auto__;
var b2__24369__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__24369__auto____$1)){
var loc = b2__24369__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return (function (){var G__26666 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__26666);
})().toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_26679 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e26667){if((e26667 instanceof Error)){
var e = e26667;
return e;
} else {
throw e26667;

}
}})();
if((e_26679 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2675,"(map? params)",params,e_26679,null);
}

if(cljs.core.truth_((function (){var and__6402__auto__ = typeof FormData !== 'undefined';
if(and__6402__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__6402__auto__;
}
})())){
var form_data = (new FormData());
var seq__26668_26680 = cljs.core.seq(params);
var chunk__26669_26681 = null;
var count__26670_26682 = (0);
var i__26671_26683 = (0);
while(true){
if((i__26671_26683 < count__26670_26682)){
var vec__26672_26684 = chunk__26669_26681.cljs$core$IIndexed$_nth$arity$2(null,i__26671_26683);
var k_26685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26672_26684,(0),null);
var v_26686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26672_26684,(1),null);
form_data.append(cljs.core.name(k_26685),v_26686);

var G__26687 = seq__26668_26680;
var G__26688 = chunk__26669_26681;
var G__26689 = count__26670_26682;
var G__26690 = (i__26671_26683 + (1));
seq__26668_26680 = G__26687;
chunk__26669_26681 = G__26688;
count__26670_26682 = G__26689;
i__26671_26683 = G__26690;
continue;
} else {
var temp__4657__auto___26691 = cljs.core.seq(seq__26668_26680);
if(temp__4657__auto___26691){
var seq__26668_26692__$1 = temp__4657__auto___26691;
if(cljs.core.chunked_seq_QMARK_(seq__26668_26692__$1)){
var c__7225__auto___26693 = cljs.core.chunk_first(seq__26668_26692__$1);
var G__26694 = cljs.core.chunk_rest(seq__26668_26692__$1);
var G__26695 = c__7225__auto___26693;
var G__26696 = cljs.core.count(c__7225__auto___26693);
var G__26697 = (0);
seq__26668_26680 = G__26694;
chunk__26669_26681 = G__26695;
count__26670_26682 = G__26696;
i__26671_26683 = G__26697;
continue;
} else {
var vec__26675_26698 = cljs.core.first(seq__26668_26692__$1);
var k_26699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26675_26698,(0),null);
var v_26700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26675_26698,(1),null);
form_data.append(cljs.core.name(k_26699),v_26700);

var G__26701 = cljs.core.next(seq__26668_26692__$1);
var G__26702 = null;
var G__26703 = (0);
var G__26704 = (0);
seq__26668_26680 = G__26701;
chunk__26669_26681 = G__26702;
count__26670_26682 = G__26703;
i__26671_26683 = G__26704;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_(((function (url_encode,adaptive_encode){
return (function (x){
var or__6414__auto__ = (x == null);
if(or__6414__auto__){
return or__6414__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_).call(null,x);
}
});})(url_encode,adaptive_encode))
.call(null,params))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2687,"([:or nil? map?] params)",params,null,null);
}

var G__26678 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__26678) {
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__26707,callback_fn){
var map__26740 = p__26707;
var map__26740__$1 = ((((!((map__26740 == null)))?((((map__26740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26740):map__26740);
var opts = map__26740__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26740__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26740__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26740__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26740__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26740__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26740__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_(((function (map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__6414__auto__ = (x == null);
if(or__6414__auto__){
return or__6414__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
.call(null,timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2719,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__24369__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__24369__auto__)){
var xhr = b2__24369__auto__;
try{var timeout_ms__$1 = (function (){var or__6414__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__26747 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__26747) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var vec__26744 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26744,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26744,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys(((function (timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__26706_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__26706_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var G__26748_26773 = xhr;
var G__26749_26774 = G__26748_26773;
var G__26750_26775 = goog.net.EventType.READY;
var G__26751_26776 = ((function (G__26749_26774,G__26750_26775,G__26748_26773,timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);
});})(G__26749_26774,G__26750_26775,G__26748_26773,timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__26749_26774,G__26750_26775,G__26751_26776);

var G__26752_26777 = G__26748_26773;
var G__26753_26778 = goog.net.EventType.COMPLETE;
var G__26754_26779 = ((function (G__26752_26777,G__26753_26778,G__26748_26773,timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__26761 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case([cljs.core.str(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__26752_26777,G__26753_26778,G__26748_26773,timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__26752_26777,G__26753_26778,G__26748_26773,timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_("/edn"))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(match_QMARK_("/json"))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(match_QMARK_("/xml"))){
return cljs.core.cst$kw$xml;
} else {
return cljs.core.cst$kw$text;
}
}
}
})()));
try{var G__26765 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__26765) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e26764){if((e26764 instanceof Error)){
var _e = e26764;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e26764;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(2),null);
var G__26766 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout], true, false),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__26766) : callback_fn.call(null,G__26766));
});})(G__26752_26777,G__26753_26778,G__26748_26773,timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__26752_26777,G__26753_26778,G__26754_26779);


var b2__24369__auto___26781__$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__24369__auto___26781__$1)){
var pf_26782 = b2__24369__auto___26781__$1;
var G__26767_26783 = xhr;
var G__26768_26784 = goog.net.EventType.PROGRESS;
var G__26769_26785 = ((function (G__26767_26783,G__26768_26784,pf_26782,b2__24369__auto___26781__$1,timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__6402__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__6402__auto__;
}
})())?(loaded / total):null);
var G__26770 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_26782.cljs$core$IFn$_invoke$arity$1 ? pf_26782.cljs$core$IFn$_invoke$arity$1(G__26770) : pf_26782.call(null,G__26770));
});})(G__26767_26783,G__26768_26784,pf_26782,b2__24369__auto___26781__$1,timeout_ms__$1,xhr_method,vec__26744,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24369__auto__,map__26740,map__26740__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listen(G__26767_26783,G__26768_26784,G__26769_26785);
} else {
}

xhr.setTimeoutInterval((function (){var or__6414__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e26742){if((e26742 instanceof Error)){
var e = e26742;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);

var G__26743_26786 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__26743_26786) : callback_fn.call(null,G__26743_26786));

return null;
} else {
throw e26742;

}
}} else {
var G__26771_26787 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__26771_26787) : callback_fn.call(null,G__26771_26787));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__26790 = [cljs.core.str(s)].join('');
var G__26791 = s;
return encodeURIComponent(G__26790,G__26791);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26798 = arguments.length;
var i__7490__auto___26799 = (0);
while(true){
if((i__7490__auto___26799 < len__7489__auto___26798)){
args__7496__auto__.push((arguments[i__7490__auto___26799]));

var G__26800 = (i__7490__auto___26799 + (1));
i__7490__auto___26799 = G__26800;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__26794){
var vec__26795 = p__26794;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26795,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq26792){
var G__26793 = cljs.core.first(seq26792);
var seq26792__$1 = cljs.core.next(seq26792);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__26793,seq26792__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode((function (){var or__6414__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__7194__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__26819(s__26820){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__26820__$1 = s__26820;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26820__$1);
if(temp__4657__auto__){
var s__26820__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26820__$2)){
var c__7192__auto__ = cljs.core.chunk_first(s__26820__$2);
var size__7193__auto__ = cljs.core.count(c__7192__auto__);
var b__26822 = cljs.core.chunk_buffer(size__7193__auto__);
if((function (){var i__26821 = (0);
while(true){
if((i__26821 < size__7193__auto__)){
var vec__26831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7192__auto__,i__26821);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__26822,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__6414__auto__ = cljs.core.seq(v);
if(or__6414__auto__){
return or__6414__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__26837 = (i__26821 + (1));
i__26821 = G__26837;
continue;
} else {
var G__26838 = (i__26821 + (1));
i__26821 = G__26838;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26822),taoensso$encore$format_query_string_$_iter__26819(cljs.core.chunk_rest(s__26820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26822),null);
}
} else {
var vec__26834 = cljs.core.first(s__26820__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26834,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26834,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__6414__auto__ = cljs.core.seq(v);
if(or__6414__auto__){
return or__6414__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__26819(cljs.core.rest(s__26820__$2)));
} else {
var G__26839 = cljs.core.rest(s__26820__$2);
s__26820__$1 = G__26839;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__7194__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__24369__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__24369__auto__)){
var cur = b2__24369__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__7496__auto__ = [];
var len__7489__auto___26849 = arguments.length;
var i__7490__auto___26850 = (0);
while(true){
if((i__7490__auto___26850 < len__7489__auto___26849)){
args__7496__auto__.push((arguments[i__7490__auto___26850]));

var G__26851 = (i__7490__auto___26850 + (1));
i__7490__auto___26850 = G__26851;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__26842){
var vec__26843 = p__26842;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26843,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26843,(1),null);
if((clojure.string.blank_QMARK_(s)) || (!(taoensso.encore.str_contains_QMARK_(s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__26843,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__24369__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__24369__auto__)){
var vec__26846 = b2__24369__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26846,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__26843,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq26840){
var G__26841 = cljs.core.first(seq26840);
var seq26840__$1 = cljs.core.next(seq26840);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__26841,seq26840__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__26855 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__24369__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__24369__auto__)){
var qstr = b2__24369__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__26858__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__26858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26859__i = 0, G__26859__a = new Array(arguments.length -  0);
while (G__26859__i < G__26859__a.length) {G__26859__a[G__26859__i] = arguments[G__26859__i + 0]; ++G__26859__i;}
  args = new cljs.core.IndexedSeq(G__26859__a,0);
} 
return G__26858__delegate.call(this,args);};
G__26858.cljs$lang$maxFixedArity = 0;
G__26858.cljs$lang$applyTo = (function (arglist__26860){
var args = cljs.core.seq(arglist__26860);
return G__26858__delegate(args);
});
G__26858.cljs$core$IFn$_invoke$arity$variadic = G__26858__delegate;
return G__26858;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,f,cljs.core.cst$kw$type,cljs.core.type(f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_(x)){
return (function (ns_str){
return cljs.core.re_find(x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_(x,"*")){
var re = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace([cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find(re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,x);
});
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_(x)){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$whitelist.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$blacklist.cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_(x)) || (cljs.core.set_QMARK_(x))){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(x,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1(x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__26874 = [cljs.core.str(_QMARK_ns)].join('');
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26874) : match_QMARK_.call(null,G__26874));
})())){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq(whitelist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,whitelist);
var vec__26875 = match_fns;
var seq__26876 = cljs.core.seq(vec__26875);
var first__26877 = cljs.core.first(seq__26876);
var seq__26876__$1 = cljs.core.next(seq__26876);
var m1 = first__26877;
var mn = seq__26876__$1;
if(mn){
return ((function (match_fns,vec__26875,seq__26876,first__26877,seq__26876__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__26875,seq__26876,first__26877,seq__26876__$1,m1,mn,compile1){
return (function (p1__26861_SHARP_){
return (p1__26861_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26861_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__26861_SHARP_.call(null,ns_str));
});})(match_fns,vec__26875,seq__26876,first__26877,seq__26876__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__26875,seq__26876,first__26877,seq__26876__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__26875,seq__26876,first__26877,seq__26876__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__26875,seq__26876,first__26877,seq__26876__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__26878 = match_fns;
var seq__26879 = cljs.core.seq(vec__26878);
var first__26880 = cljs.core.first(seq__26879);
var seq__26879__$1 = cljs.core.next(seq__26879);
var m1 = first__26880;
var mn = seq__26879__$1;
if(mn){
return ((function (match_fns,vec__26878,seq__26879,first__26880,seq__26879__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__26878,seq__26879,first__26880,seq__26879__$1,m1,mn,white,compile1){
return (function (p1__26862_SHARP_){
return (p1__26862_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26862_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__26862_SHARP_.call(null,ns_str));
});})(match_fns,vec__26878,seq__26879,first__26880,seq__26879__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__26878,seq__26879,first__26880,seq__26879__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__26878,seq__26879,first__26880,seq__26879__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__26878,seq__26879,first__26880,seq__26879__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__6402__auto__ = white;
if(cljs.core.truth_(and__6402__auto__)){
return black;
} else {
return and__6402__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str(_QMARK_ns)].join('');
if(cljs.core.truth_((white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(ns_str) : white.call(null,ns_str)))){
if(cljs.core.truth_((black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(ns_str) : black.call(null,ns_str)))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__26881 = [cljs.core.str(_QMARK_ns)].join('');
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__26881) : white.call(null,G__26881));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__26882 = [cljs.core.str(_QMARK_ns)].join('');
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__26882) : black.call(null,G__26882));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__7077__auto__ = (((_ == null))?null:_);
var m__7078__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__7078__auto__.call(null,_,msecs,f));
} else {
var m__7078__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__7078__auto____$1.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
})
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = true;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return cljs.core.cst$kw$timeout_SLASH_pending;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return cljs.core.cst$kw$timeout_SLASH_cancelled;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result_) : cljs.core.deref.call(null,result_));
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__7077__auto__ = (((_ == null))?null:_);
var m__7078__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto__.call(null,_));
} else {
var m__7078__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__7077__auto__ = (((_ == null))?null:_);
var m__7078__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto__.call(null,_));
} else {
var m__7078__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__7077__auto__ = (((_ == null))?null:_);
var m__7078__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto__.call(null,_));
} else {
var m__7078__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__7077__auto__ = (((_ == null))?null:_);
var m__7078__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto__.call(null,_));
} else {
var m__7078__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__7077__auto__ = (((_ == null))?null:_);
var m__7078__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto__.call(null,_));
} else {
var m__7078__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__7077__auto__ = (((_ == null))?null:_);
var m__7078__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto__.call(null,_));
} else {
var m__7078__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = true;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,self__.f,cljs.core.cst$kw$udt,self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.result__) : cljs.core.deref.call(null,self__.result__)));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__26887 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.result__) : cljs.core.deref.call(null,self__.result__));
var G__26888 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26887,G__26888) : taoensso.encore.kw_identical_QMARK_.call(null,G__26887,G__26888));
})());
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__26889 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.result__) : cljs.core.deref.call(null,self__.result__));
var G__26890 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26889,G__26890) : taoensso.encore.kw_identical_QMARK_.call(null,G__26889,G__26890));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__26891 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.result__) : cljs.core.deref.call(null,self__.result__));
var G__26892 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26891,G__26892) : taoensso.encore.kw_identical_QMARK_.call(null,G__26891,G__26892));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_done_QMARK_(t__$1);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_poll(t__$1);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$result__,cljs.core.cst$sym$udt], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var args26893 = [];
var len__7489__auto___26896 = arguments.length;
var i__7490__auto___26897 = (0);
while(true){
if((i__7490__auto___26897 < len__7489__auto___26896)){
args26893.push((arguments[i__7490__auto___26897]));

var G__26898 = (i__7490__auto___26897 + (1));
i__7490__auto___26897 = G__26898;
continue;
} else {
}
break;
}

var G__26895 = args26893.length;
switch (G__26895) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26893.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending) : cljs.core.atom.call(null,taoensso.encore._tout_pending));
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result_) : cljs.core.deref.call(null,result_));
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_26900 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_26900,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__26902){
var map__26905 = p__26902;
var map__26905__$1 = ((((!((map__26905 == null)))?((((map__26905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26905):map__26905);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26905__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26905__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7248__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__26901__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7248__auto__);
})(),cljs.core.array_seq([(function (){var x__7248__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7248__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__7248__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7248__auto__);
})(),(function (){var x__7248__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__26901__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7248__auto__);
})(),(function (){var x__7248__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7248__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__7248__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7248__auto__);
})()], 0))));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27060 = arguments.length;
var i__7490__auto___27061 = (0);
while(true){
if((i__7490__auto___27061 < len__7489__auto___27060)){
args__7496__auto__.push((arguments[i__7490__auto___27061]));

var G__27062 = (i__7490__auto___27061 + (1));
i__7490__auto___27061 = G__27062;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__26920){
var vec__26921 = p__26920;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26921,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26921,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__6414__auto__ = type;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq26918){
var G__26919 = cljs.core.first(seq26918);
var seq26918__$1 = cljs.core.next(seq26918);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__26919,seq26918__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args26924 = [];
var len__7489__auto___27063 = arguments.length;
var i__7490__auto___27064 = (0);
while(true){
if((i__7490__auto___27064 < len__7489__auto___27063)){
args26924.push((arguments[i__7490__auto___27064]));

var G__27065 = (i__7490__auto___27064 + (1));
i__7490__auto___27064 = G__27065;
continue;
} else {
}
break;
}

var G__26926 = args26924.length;
switch (G__26926) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26924.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27067 = arguments.length;
var i__7490__auto___27068 = (0);
while(true){
if((i__7490__auto___27068 < len__7489__auto___27067)){
args__7496__auto__.push((arguments[i__7490__auto___27068]));

var G__27069 = (i__7490__auto___27068 + (1));
i__7490__auto___27068 = G__27069;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq26927){
var G__26928 = cljs.core.first(seq26927);
var seq26927__$1 = cljs.core.next(seq26927);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__26928,seq26927__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome((function (p__26936){
var vec__26937 = p__26936;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26937,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26937,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26937,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__27070__delegate = function (args){
var b2__24369__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__24369__auto__)){
var vec__26940 = b2__24369__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26940,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26940,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__27070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27071__i = 0, G__27071__a = new Array(arguments.length -  0);
while (G__27071__i < G__27071__a.length) {G__27071__a[G__27071__i] = arguments[G__27071__i + 0]; ++G__27071__i;}
  args = new cljs.core.IndexedSeq(G__27071__a,0);
} 
return G__27070__delegate.call(this,args);};
G__27070.cljs$lang$maxFixedArity = 0;
G__27070.cljs$lang$applyTo = (function (arglist__27072){
var args = cljs.core.seq(arglist__27072);
return G__27070__delegate(args);
});
G__27070.cljs$core$IFn$_invoke$arity$variadic = G__27070__delegate;
return G__27070;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__27073__delegate = function (args){
var b2__24369__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__24369__auto__)){
var backoff = b2__24369__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__27073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27074__i = 0, G__27074__a = new Array(arguments.length -  0);
while (G__27074__i < G__27074__a.length) {G__27074__a[G__27074__i] = arguments[G__27074__i + 0]; ++G__27074__i;}
  args = new cljs.core.IndexedSeq(G__27074__a,0);
} 
return G__27073__delegate.call(this,args);};
G__27073.cljs$lang$maxFixedArity = 0;
G__27073.cljs$lang$applyTo = (function (arglist__27075){
var args = cljs.core.seq(arglist__27075);
return G__27073__delegate(args);
});
G__27073.cljs$core$IFn$_invoke$arity$variadic = G__27073__delegate;
return G__27073;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__27076__delegate = function (args){
var b2__24369__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__24369__auto__)){
var backoff_ms = b2__24369__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__27076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27077__i = 0, G__27077__a = new Array(arguments.length -  0);
while (G__27077__i < G__27077__a.length) {G__27077__a[G__27077__i] = arguments[G__27077__i + 0]; ++G__27077__i;}
  args = new cljs.core.IndexedSeq(G__27077__a,0);
} 
return G__27076__delegate.call(this,args);};
G__27076.cljs$lang$maxFixedArity = 0;
G__27076.cljs$lang$applyTo = (function (arglist__27078){
var args = cljs.core.seq(arglist__27078);
return G__27076__delegate(args);
});
G__27076.cljs$core$IFn$_invoke$arity$variadic = G__27076__delegate;
return G__27076;
})()
;
;})(rl))
});

taoensso.encore.logging_level = (function (){var G__26943 = cljs.core.cst$kw$debug;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26943) : cljs.core.atom.call(null,G__26943));
})();

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27079 = arguments.length;
var i__7490__auto___27080 = (0);
while(true){
if((i__7490__auto___27080 < len__7489__auto___27079)){
args__7496__auto__.push((arguments[i__7490__auto___27080]));

var G__27081 = (i__7490__auto___27080 + (1));
i__7490__auto___27080 = G__27081;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__26946){
var vec__26947 = p__26946;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26947,(0),null);
var b2__24369__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__24369__auto__)){
var js_win = b2__24369__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__6414__auto__ = nattempt;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq26944){
var G__26945 = cljs.core.first(seq26944);
var seq26944__$1 = cljs.core.next(seq26944);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26945,seq26944__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27082 = arguments.length;
var i__7490__auto___27083 = (0);
while(true){
if((i__7490__auto___27083 < len__7489__auto___27082)){
args__7496__auto__.push((arguments[i__7490__auto___27083]));

var G__27084 = (i__7490__auto___27083 + (1));
i__7490__auto___27083 = G__27084;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__26952 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26952) : taoensso.encore.log_QMARK_.call(null,G__26952));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq26950){
var G__26951 = cljs.core.first(seq26950);
var seq26950__$1 = cljs.core.next(seq26950);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__26951,seq26950__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27085 = arguments.length;
var i__7490__auto___27086 = (0);
while(true){
if((i__7490__auto___27086 < len__7489__auto___27085)){
args__7496__auto__.push((arguments[i__7490__auto___27086]));

var G__27087 = (i__7490__auto___27086 + (1));
i__7490__auto___27086 = G__27087;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__26955 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26955) : taoensso.encore.log_QMARK_.call(null,G__26955));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq26953){
var G__26954 = cljs.core.first(seq26953);
var seq26953__$1 = cljs.core.next(seq26953);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__26954,seq26953__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27088 = arguments.length;
var i__7490__auto___27089 = (0);
while(true){
if((i__7490__auto___27089 < len__7489__auto___27088)){
args__7496__auto__.push((arguments[i__7490__auto___27089]));

var G__27090 = (i__7490__auto___27089 + (1));
i__7490__auto___27089 = G__27090;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__26958 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26958) : taoensso.encore.log_QMARK_.call(null,G__26958));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq26956){
var G__26957 = cljs.core.first(seq26956);
var seq26956__$1 = cljs.core.next(seq26956);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__26957,seq26956__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27091 = arguments.length;
var i__7490__auto___27092 = (0);
while(true){
if((i__7490__auto___27092 < len__7489__auto___27091)){
args__7496__auto__.push((arguments[i__7490__auto___27092]));

var G__27093 = (i__7490__auto___27092 + (1));
i__7490__auto___27092 = G__27093;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__26961 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26961) : taoensso.encore.log_QMARK_.call(null,G__26961));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq26959){
var G__26960 = cljs.core.first(seq26959);
var seq26959__$1 = cljs.core.next(seq26959);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__26960,seq26959__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27094 = arguments.length;
var i__7490__auto___27095 = (0);
while(true){
if((i__7490__auto___27095 < len__7489__auto___27094)){
args__7496__auto__.push((arguments[i__7490__auto___27095]));

var G__27096 = (i__7490__auto___27095 + (1));
i__7490__auto___27095 = G__27096;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__26964 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26964) : taoensso.encore.log_QMARK_.call(null,G__26964));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq26962){
var G__26963 = cljs.core.first(seq26962);
var seq26962__$1 = cljs.core.next(seq26962);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__26963,seq26962__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27097 = arguments.length;
var i__7490__auto___27098 = (0);
while(true){
if((i__7490__auto___27098 < len__7489__auto___27097)){
args__7496__auto__.push((arguments[i__7490__auto___27098]));

var G__27099 = (i__7490__auto___27098 + (1));
i__7490__auto___27098 = G__27099;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__26967 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26967) : taoensso.encore.log_QMARK_.call(null,G__26967));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq26965){
var G__26966 = cljs.core.first(seq26965);
var seq26965__$1 = cljs.core.next(seq26965);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__26966,seq26965__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27100 = arguments.length;
var i__7490__auto___27101 = (0);
while(true){
if((i__7490__auto___27101 < len__7489__auto___27100)){
args__7496__auto__.push((arguments[i__7490__auto___27101]));

var G__27102 = (i__7490__auto___27101 + (1));
i__7490__auto___27101 = G__27102;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__26970 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26970) : taoensso.encore.log_QMARK_.call(null,G__26970));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq26968){
var G__26969 = cljs.core.first(seq26968);
var seq26968__$1 = cljs.core.next(seq26968);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__26969,seq26968__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27103 = arguments.length;
var i__7490__auto___27104 = (0);
while(true){
if((i__7490__auto___27104 < len__7489__auto___27103)){
args__7496__auto__.push((arguments[i__7490__auto___27104]));

var G__27105 = (i__7490__auto___27104 + (1));
i__7490__auto___27104 = G__27105;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__26973){
var vec__26974 = p__26973;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26974,(0),null);
var comparator = (function (){var or__6414__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__26974,_QMARK_comparator){
return (function (p1__26907_SHARP_,p2__26908_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__26907_SHARP_,p2__26908_SHARP_) : comparator.call(null,p1__26907_SHARP_,p2__26908_SHARP_)) > (0))){
return p2__26908_SHARP_;
} else {
return p1__26907_SHARP_;
}
});})(comparator,vec__26974,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq26971){
var G__26972 = cljs.core.first(seq26971);
var seq26971__$1 = cljs.core.next(seq26971);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__26972,seq26971__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27106 = arguments.length;
var i__7490__auto___27107 = (0);
while(true){
if((i__7490__auto___27107 < len__7489__auto___27106)){
args__7496__auto__.push((arguments[i__7490__auto___27107]));

var G__27108 = (i__7490__auto___27107 + (1));
i__7490__auto___27107 = G__27108;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__26979){
var vec__26980 = p__26979;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26980,(0),null);
var comparator = (function (){var or__6414__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__26980,_QMARK_comparator){
return (function (p1__26909_SHARP_,p2__26910_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__26909_SHARP_,p2__26910_SHARP_) : comparator.call(null,p1__26909_SHARP_,p2__26910_SHARP_)) < (0))){
return p2__26910_SHARP_;
} else {
return p1__26909_SHARP_;
}
});})(comparator,vec__26980,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq26977){
var G__26978 = cljs.core.first(seq26977);
var seq26977__$1 = cljs.core.next(seq26977);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__26978,seq26977__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__6414__auto__ = x;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__26999,seen__$1){
while(true){
var vec__27000 = p__26999;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27000,(0),null);
var xs__$1 = vec__27000;
var b2__24369__auto__ = cljs.core.seq(xs__$1);
if(b2__24369__auto__){
var s = b2__24369__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__27109 = cljs.core.rest(s);
var G__27110 = seen__$1;
p__26999 = G__27109;
seen__$1 = G__27110;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args27003 = [];
var len__7489__auto___27111 = arguments.length;
var i__7490__auto___27112 = (0);
while(true){
if((i__7490__auto___27112 < len__7489__auto___27111)){
args27003.push((arguments[i__7490__auto___27112]));

var G__27113 = (i__7490__auto___27112 + (1));
i__7490__auto___27112 = G__27113;
continue;
} else {
}
break;
}

var G__27005 = args27003.length;
switch (G__27005) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27003.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27006,in$){
var vec__27007 = p__27006;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27007,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27007,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_((function (){var G__27012 = kf;
var G__27013 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27012,G__27013) : taoensso.encore.kw_identical_QMARK_.call(null,G__27012,G__27013));
})())?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27115 = arguments.length;
var i__7490__auto___27116 = (0);
while(true){
if((i__7490__auto___27116 < len__7489__auto___27115)){
args__7496__auto__.push((arguments[i__7490__auto___27116]));

var G__27117 = (i__7490__auto___27116 + (1));
i__7490__auto___27116 = G__27117;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__27016){
var vec__27017 = p__27016;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27017,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27017,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__27017,kf,vf){
return (function (_,v){
return v;
});})(vec__27017,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__27017,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__27017,kf,vf))
:(cljs.core.truth_((function (){var G__27020 = kf;
var G__27021 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27020,G__27021) : taoensso.encore.kw_identical_QMARK_.call(null,G__27020,G__27021));
})())?((function (vf__$1,vec__27017,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__27017,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__27017,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__27017,kf,vf))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq27014){
var G__27015 = cljs.core.first(seq27014);
var seq27014__$1 = cljs.core.next(seq27014);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__27015,seq27014__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27118 = arguments.length;
var i__7490__auto___27119 = (0);
while(true){
if((i__7490__auto___27119 < len__7489__auto___27118)){
args__7496__auto__.push((arguments[i__7490__auto___27119]));

var G__27120 = (i__7490__auto___27119 + (1));
i__7490__auto___27119 = G__27120;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
var G__27025 = taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
}));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27025) : cljs.core.deref.call(null,G__27025));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq27022){
var G__27023 = cljs.core.first(seq27022);
var seq27022__$1 = cljs.core.next(seq27022);
var G__27024 = cljs.core.first(seq27022__$1);
var seq27022__$2 = cljs.core.next(seq27022__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__27023,G__27024,seq27022__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__6752__auto__ = signed_idx;
var y__6753__auto__ = max_idx;
return ((x__6752__auto__ < y__6753__auto__) ? x__6752__auto__ : y__6753__auto__);
} else {
var x__6745__auto__ = (0);
var y__6746__auto__ = (signed_idx + max_idx);
return ((x__6745__auto__ > y__6746__auto__) ? x__6745__auto__ : y__6746__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27121 = arguments.length;
var i__7490__auto___27122 = (0);
while(true){
if((i__7490__auto___27122 < len__7489__auto___27121)){
args__7496__auto__.push((arguments[i__7490__auto___27122]));

var G__27123 = (i__7490__auto___27122 + (1));
i__7490__auto___27122 = G__27123;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__27029){
var map__27030 = p__27029;
var map__27030__$1 = ((((!((map__27030 == null)))?((((map__27030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27030):map__27030);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__24805__auto__ = (start_idx_STAR_ + max_len);
var n2__24806__auto__ = xlen;
if((n1__24805__auto__ > n2__24806__auto__)){
return n2__24806__auto__;
} else {
return n1__24805__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq27026){
var G__27027 = cljs.core.first(seq27026);
var seq27026__$1 = cljs.core.next(seq27026);
var G__27028 = cljs.core.first(seq27026__$1);
var seq27026__$2 = cljs.core.next(seq27026__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__27027,G__27028,seq27026__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27124 = arguments.length;
var i__7490__auto___27125 = (0);
while(true){
if((i__7490__auto___27125 < len__7489__auto___27124)){
args__7496__auto__.push((arguments[i__7490__auto___27125]));

var G__27126 = (i__7490__auto___27125 + (1));
i__7490__auto___27125 = G__27126;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__27035){
var vec__27036 = p__27035;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27036,(0),null);
var vec__27039 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27039,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27039,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq27032){
var G__27033 = cljs.core.first(seq27032);
var seq27032__$1 = cljs.core.next(seq27032);
var G__27034 = cljs.core.first(seq27032__$1);
var seq27032__$2 = cljs.core.next(seq27032__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__27033,G__27034,seq27032__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27127 = arguments.length;
var i__7490__auto___27128 = (0);
while(true){
if((i__7490__auto___27128 < len__7489__auto___27127)){
args__7496__auto__.push((arguments[i__7490__auto___27128]));

var G__27129 = (i__7490__auto___27128 + (1));
i__7490__auto___27128 = G__27129;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__27045){
var vec__27046 = p__27045;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27046,(0),null);
var vec__27049 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27049,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27049,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq27042){
var G__27043 = cljs.core.first(seq27042);
var seq27042__$1 = cljs.core.next(seq27042);
var G__27044 = cljs.core.first(seq27042__$1);
var seq27042__$2 = cljs.core.next(seq27042__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27043,G__27044,seq27042__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
var vec__27057 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27057,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__27130 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__27131 = cljs.core.next(ks__$1);
var G__27132 = cljs.core.next(vs__$1);
m = G__27130;
ks__$1 = G__27131;
vs__$1 = G__27132;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27133 = arguments.length;
var i__7490__auto___27134 = (0);
while(true){
if((i__7490__auto___27134 < len__7489__auto___27133)){
args__7496__auto__.push((arguments[i__7490__auto___27134]));

var G__27135 = (i__7490__auto___27134 + (1));
i__7490__auto___27134 = G__27135;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__26913 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26913,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26913,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26913,(2),null);
var f = (cljs.core.truth_((function (){var G__26916 = type;
var G__26917 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26916,G__26917) : taoensso.encore.kw_identical_QMARK_.call(null,G__26916,G__26917));
})())?((function (vec__26913,type,ks,valf){
return (function (_){
return valf;
});})(vec__26913,type,ks,valf))
:valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq26911){
var G__26912 = cljs.core.first(seq26911);
var seq26911__$1 = cljs.core.next(seq26911);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__26912,seq26911__$1);
});

