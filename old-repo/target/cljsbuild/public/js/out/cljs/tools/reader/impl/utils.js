// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$.call(null,x);
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
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k50569,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__50571 = (((k50569 instanceof cljs.core.Keyword))?k50569.fqn:null);
switch (G__50571) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50569,else__43270__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$ = true;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50568){
var self__ = this;
var G__50568__$1 = this;
return (new cljs.core.RecordIter((0),G__50568__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
var self__ = this;
var this__43262__auto____$1 = this;
var h__43080__auto__ = self__.__hash;
if(!((h__43080__auto__ == null))){
return h__43080__auto__;
} else {
var h__43080__auto____$1 = cljs.core.hash_imap.call(null,this__43262__auto____$1);
self__.__hash = h__43080__auto____$1;

return h__43080__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
var self__ = this;
var this__43263__auto____$1 = this;
if(cljs.core.truth_((function (){var and__42633__auto__ = other__43264__auto__;
if(cljs.core.truth_(and__42633__auto__)){
var and__42633__auto____$1 = (this__43263__auto____$1.constructor === other__43264__auto__.constructor);
if(and__42633__auto____$1){
return cljs.core.equiv_map.call(null,this__43263__auto____$1,other__43264__auto__);
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__50568){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__50572 = cljs.core.keyword_identical_QMARK_;
var expr__50573 = k__43275__auto__;
if(cljs.core.truth_(pred__50572.call(null,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),expr__50573))){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__50568,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50572.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__50573))){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__50568,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__50568),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__50568){
var self__ = this;
var this__43266__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__50568,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"splicing?","splicing?",1211935161,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__50570){
return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__50570),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__50570),null,cljs.core.dissoc.call(null,G__50570,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)),null));
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
cljs.core._write.call(null,writer,[cljs.core.str("#?"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.call(null,(0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.call(null,cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__43425__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__50592(s__50593){
return (new cljs.core.LazySeq(null,(function (){
var s__50593__$1 = s__50593;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50593__$1);
if(temp__4657__auto__){
var s__50593__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50593__$2)){
var c__43423__auto__ = cljs.core.chunk_first.call(null,s__50593__$2);
var size__43424__auto__ = cljs.core.count.call(null,c__43423__auto__);
var b__50595 = cljs.core.chunk_buffer.call(null,size__43424__auto__);
if((function (){var i__50594 = (0);
while(true){
if((i__50594 < size__43424__auto__)){
var key = cljs.core._nth.call(null,c__43423__auto__,i__50594);
cljs.core.chunk_append.call(null,b__50595,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__50602 = cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.call(null,vec__50602,(0),null);
var key_name = cljs.core.nth.call(null,vec__50602,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return __GT_key.call(null,ns,key_name);
} else {
if(cljs.core._EQ_.call(null,"_",key_ns)){
return __GT_key.call(null,key_name);
} else {
return key;

}
}
})():key));

var G__50608 = (i__50594 + (1));
i__50594 = G__50608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50595),cljs$tools$reader$impl$utils$namespace_keys_$_iter__50592.call(null,cljs.core.chunk_rest.call(null,s__50593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50595),null);
}
} else {
var key = cljs.core.first.call(null,s__50593__$2);
return cljs.core.cons.call(null,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__50605 = cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.call(null,vec__50605,(0),null);
var key_name = cljs.core.nth.call(null,vec__50605,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return __GT_key.call(null,ns,key_name);
} else {
if(cljs.core._EQ_.call(null,"_",key_ns)){
return __GT_key.call(null,key_name);
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__50592.call(null,cljs.core.rest.call(null,s__50593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43425__auto__.call(null,keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__50609){
var vec__50613 = p__50609;
var a = cljs.core.nth.call(null,vec__50613,(0),null);
var b = cljs.core.nth.call(null,vec__50613,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});

//# sourceMappingURL=utils.js.map