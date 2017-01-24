// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$(x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
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
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k13455,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__13457 = (((k13455 instanceof cljs.core.Keyword))?k13455.fqn:null);
switch (G__13457) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13455,else__7039__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$splicing_QMARK_,self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$ = true;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13454){
var self__ = this;
var G__13454__$1 = this;
return (new cljs.core.RecordIter((0),G__13454__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splicing_QMARK_,cljs.core.cst$kw$form], null),cljs.core._iterator(self__.__extmap)));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
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

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
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

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$splicing_QMARK_,null,cljs.core.cst$kw$form,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__13454){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__13458 = cljs.core.keyword_identical_QMARK_;
var expr__13459 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__13461 = cljs.core.cst$kw$splicing_QMARK_;
var G__13462 = expr__13459;
return (pred__13458.cljs$core$IFn$_invoke$arity$2 ? pred__13458.cljs$core$IFn$_invoke$arity$2(G__13461,G__13462) : pred__13458.call(null,G__13461,G__13462));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__13454,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13463 = cljs.core.cst$kw$form;
var G__13464 = expr__13459;
return (pred__13458.cljs$core$IFn$_invoke$arity$2 ? pred__13458.cljs$core$IFn$_invoke$arity$2(G__13463,G__13464) : pred__13458.call(null,G__13463,G__13464));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__13454,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__13454),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$splicing_QMARK_,self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__13454){
var self__ = this;
var this__7035__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__13454,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$splicing_QMARK_,cljs.core.cst$sym$form], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__13456){
return (new cljs.tools.reader.impl.utils.ReaderConditional(cljs.core.cst$kw$splicing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13456),cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(G__13456),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13456,cljs.core.cst$kw$splicing_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$form], 0)),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write(writer,[cljs.core.str("#?"),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$splicing_QMARK_.cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__7194__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__13484(s__13485){
return (new cljs.core.LazySeq(null,(function (){
var s__13485__$1 = s__13485;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13485__$1);
if(temp__4657__auto__){
var s__13485__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13485__$2)){
var c__7192__auto__ = cljs.core.chunk_first(s__13485__$2);
var size__7193__auto__ = cljs.core.count(c__7192__auto__);
var b__13487 = cljs.core.chunk_buffer(size__7193__auto__);
if((function (){var i__13486 = (0);
while(true){
if((i__13486 < size__7193__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7192__auto__,i__13486);
cljs.core.chunk_append(b__13487,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__13496 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13496,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13496,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key));

var G__13502 = (i__13486 + (1));
i__13486 = G__13502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13487),cljs$tools$reader$impl$utils$namespace_keys_$_iter__13484(cljs.core.chunk_rest(s__13485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13487),null);
}
} else {
var key = cljs.core.first(s__13485__$2);
return cljs.core.cons(((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__13499 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13499,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13499,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__13484(cljs.core.rest(s__13485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7194__auto__(keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__13503){
var vec__13507 = p__13503;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13507,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13507,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});
