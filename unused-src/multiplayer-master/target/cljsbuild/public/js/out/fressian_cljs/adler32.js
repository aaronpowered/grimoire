// Compiled by ClojureScript 1.7.228 {}
goog.provide('fressian_cljs.adler32');
goog.require('cljs.core');
fressian_cljs.adler32._STAR_BASE_STAR_ = (65521);

/**
 * @interface
 */
fressian_cljs.adler32.Adler32Protocol = function(){};

fressian_cljs.adler32.update_BANG_ = (function fressian_cljs$adler32$update_BANG_(var_args){
var args27901 = [];
var len__27062__auto___27904 = arguments.length;
var i__27063__auto___27905 = (0);
while(true){
if((i__27063__auto___27905 < len__27062__auto___27904)){
args27901.push((arguments[i__27063__auto___27905]));

var G__27906 = (i__27063__auto___27905 + (1));
i__27063__auto___27905 = G__27906;
continue;
} else {
}
break;
}

var G__27903 = args27901.length;
switch (G__27903) {
case 2:
return fressian_cljs.adler32.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return fressian_cljs.adler32.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27901.length)].join('')));

}
});

fressian_cljs.adler32.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,b){
if((!((_ == null))) && (!((_.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$2 == null)))){
return _.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$2(_,b);
} else {
var x__26659__auto__ = (((_ == null))?null:_);
var m__26660__auto__ = (fressian_cljs.adler32.update_BANG_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,_,b);
} else {
var m__26660__auto____$1 = (fressian_cljs.adler32.update_BANG_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,_,b);
} else {
throw cljs.core.missing_protocol.call(null,"Adler32Protocol.update!",_);
}
}
}
});

fressian_cljs.adler32.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,bs,off,len){
if((!((_ == null))) && (!((_.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$4 == null)))){
return _.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$4(_,bs,off,len);
} else {
var x__26659__auto__ = (((_ == null))?null:_);
var m__26660__auto__ = (fressian_cljs.adler32.update_BANG_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,_,bs,off,len);
} else {
var m__26660__auto____$1 = (fressian_cljs.adler32.update_BANG_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,_,bs,off,len);
} else {
throw cljs.core.missing_protocol.call(null,"Adler32Protocol.update!",_);
}
}
}
});

fressian_cljs.adler32.update_BANG_.cljs$lang$maxFixedArity = 4;

fressian_cljs.adler32.get_value = (function fressian_cljs$adler32$get_value(_){
if((!((_ == null))) && (!((_.fressian_cljs$adler32$Adler32Protocol$get_value$arity$1 == null)))){
return _.fressian_cljs$adler32$Adler32Protocol$get_value$arity$1(_);
} else {
var x__26659__auto__ = (((_ == null))?null:_);
var m__26660__auto__ = (fressian_cljs.adler32.get_value[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,_);
} else {
var m__26660__auto____$1 = (fressian_cljs.adler32.get_value["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Adler32Protocol.get-value",_);
}
}
}
});

fressian_cljs.adler32.reset = (function fressian_cljs$adler32$reset(_){
if((!((_ == null))) && (!((_.fressian_cljs$adler32$Adler32Protocol$reset$arity$1 == null)))){
return _.fressian_cljs$adler32$Adler32Protocol$reset$arity$1(_);
} else {
var x__26659__auto__ = (((_ == null))?null:_);
var m__26660__auto__ = (fressian_cljs.adler32.reset[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,_);
} else {
var m__26660__auto____$1 = (fressian_cljs.adler32.reset["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Adler32Protocol.reset",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {fressian_cljs.adler32.Adler32Protocol}
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
fressian_cljs.adler32.Adler32 = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fressian_cljs.adler32.Adler32.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26618__auto__,k__26619__auto__){
var self__ = this;
var this__26618__auto____$1 = this;
return cljs.core._lookup.call(null,this__26618__auto____$1,k__26619__auto__,null);
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26620__auto__,k27909,else__26621__auto__){
var self__ = this;
var this__26620__auto____$1 = this;
var G__27911 = (((k27909 instanceof cljs.core.Keyword))?k27909.fqn:null);
switch (G__27911) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27909,else__26621__auto__);

}
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26632__auto__,writer__26633__auto__,opts__26634__auto__){
var self__ = this;
var this__26632__auto____$1 = this;
var pr_pair__26635__auto__ = ((function (this__26632__auto____$1){
return (function (keyval__26636__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26633__auto__,cljs.core.pr_writer,""," ","",opts__26634__auto__,keyval__26636__auto__);
});})(this__26632__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26633__auto__,pr_pair__26635__auto__,"#fressian-cljs.adler32.Adler32{",", ","}",opts__26634__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IIterable$ = true;

fressian_cljs.adler32.Adler32.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27908){
var self__ = this;
var G__27908__$1 = this;
return (new cljs.core.RecordIter((0),G__27908__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26616__auto__){
var self__ = this;
var this__26616__auto____$1 = this;
return self__.__meta;
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26612__auto__){
var self__ = this;
var this__26612__auto____$1 = this;
return (new fressian_cljs.adler32.Adler32(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26622__auto__){
var self__ = this;
var this__26622__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26613__auto__){
var self__ = this;
var this__26613__auto____$1 = this;
var h__26439__auto__ = self__.__hash;
if(!((h__26439__auto__ == null))){
return h__26439__auto__;
} else {
var h__26439__auto____$1 = cljs.core.hash_imap.call(null,this__26613__auto____$1);
self__.__hash = h__26439__auto____$1;

return h__26439__auto____$1;
}
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26614__auto__,other__26615__auto__){
var self__ = this;
var this__26614__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25992__auto__ = other__26615__auto__;
if(cljs.core.truth_(and__25992__auto__)){
var and__25992__auto____$1 = (this__26614__auto____$1.constructor === other__26615__auto__.constructor);
if(and__25992__auto____$1){
return cljs.core.equiv_map.call(null,this__26614__auto____$1,other__26615__auto__);
} else {
return and__25992__auto____$1;
}
} else {
return and__25992__auto__;
}
})())){
return true;
} else {
return false;
}
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26627__auto__,k__26628__auto__){
var self__ = this;
var this__26627__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__26628__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26627__auto____$1),self__.__meta),k__26628__auto__);
} else {
return (new fressian_cljs.adler32.Adler32(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26628__auto__)),null));
}
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26625__auto__,k__26626__auto__,G__27908){
var self__ = this;
var this__26625__auto____$1 = this;
var pred__27912 = cljs.core.keyword_identical_QMARK_;
var expr__27913 = k__26626__auto__;
if(cljs.core.truth_(pred__27912.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__27913))){
return (new fressian_cljs.adler32.Adler32(G__27908,self__.__meta,self__.__extmap,null));
} else {
return (new fressian_cljs.adler32.Adler32(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26626__auto__,G__27908),null));
}
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26630__auto__){
var self__ = this;
var this__26630__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26617__auto__,G__27908){
var self__ = this;
var this__26617__auto____$1 = this;
return (new fressian_cljs.adler32.Adler32(self__.value,G__27908,self__.__extmap,self__.__hash));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26623__auto__,entry__26624__auto__){
var self__ = this;
var this__26623__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26624__auto__)){
return cljs.core._assoc.call(null,this__26623__auto____$1,cljs.core._nth.call(null,entry__26624__auto__,(0)),cljs.core._nth.call(null,entry__26624__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26623__auto____$1,entry__26624__auto__);
}
});

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$ = true;

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$2 = (function (_,b){
var self__ = this;
var ___$1 = this;
var s1 = ((cljs.core.deref.call(null,self__.value) & (65535)) + (b & (255)));
var s2 = (((cljs.core.deref.call(null,self__.value) >> (16)) & (65535)) + s1);
return cljs.core.reset_BANG_.call(null,self__.value,((cljs.core.mod.call(null,s2,fressian_cljs.adler32._STAR_BASE_STAR_) << (16)) | cljs.core.mod.call(null,s1,fressian_cljs.adler32._STAR_BASE_STAR_)));
});

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$4 = (function (_,bs,off,len){
var self__ = this;
var ___$1 = this;
var seq__27915 = cljs.core.seq.call(null,cljs.core.range.call(null,off,(off + len)));
var chunk__27916 = null;
var count__27917 = (0);
var i__27918 = (0);
while(true){
if((i__27918 < count__27917)){
var i = cljs.core._nth.call(null,chunk__27916,i__27918);
fressian_cljs.adler32.update_BANG_.call(null,___$1,(bs[i]));

var G__27920 = seq__27915;
var G__27921 = chunk__27916;
var G__27922 = count__27917;
var G__27923 = (i__27918 + (1));
seq__27915 = G__27920;
chunk__27916 = G__27921;
count__27917 = G__27922;
i__27918 = G__27923;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27915);
if(temp__4657__auto__){
var seq__27915__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27915__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__27915__$1);
var G__27924 = cljs.core.chunk_rest.call(null,seq__27915__$1);
var G__27925 = c__26807__auto__;
var G__27926 = cljs.core.count.call(null,c__26807__auto__);
var G__27927 = (0);
seq__27915 = G__27924;
chunk__27916 = G__27925;
count__27917 = G__27926;
i__27918 = G__27927;
continue;
} else {
var i = cljs.core.first.call(null,seq__27915__$1);
fressian_cljs.adler32.update_BANG_.call(null,___$1,(bs[i]));

var G__27928 = cljs.core.next.call(null,seq__27915__$1);
var G__27929 = null;
var G__27930 = (0);
var G__27931 = (0);
seq__27915 = G__27928;
chunk__27916 = G__27929;
count__27917 = G__27930;
i__27918 = G__27931;
continue;
}
} else {
return null;
}
}
break;
}
});

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$get_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.call(null,self__.value) & (4294967295));
});

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$reset$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.value,(1));
});

fressian_cljs.adler32.Adler32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

fressian_cljs.adler32.Adler32.cljs$lang$type = true;

fressian_cljs.adler32.Adler32.cljs$lang$ctorPrSeq = (function (this__26652__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"fressian-cljs.adler32/Adler32");
});

fressian_cljs.adler32.Adler32.cljs$lang$ctorPrWriter = (function (this__26652__auto__,writer__26653__auto__){
return cljs.core._write.call(null,writer__26653__auto__,"fressian-cljs.adler32/Adler32");
});

fressian_cljs.adler32.__GT_Adler32 = (function fressian_cljs$adler32$__GT_Adler32(value){
return (new fressian_cljs.adler32.Adler32(value,null,null,null));
});

fressian_cljs.adler32.map__GT_Adler32 = (function fressian_cljs$adler32$map__GT_Adler32(G__27910){
return (new fressian_cljs.adler32.Adler32(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__27910),null,cljs.core.dissoc.call(null,G__27910,new cljs.core.Keyword(null,"value","value",305978217)),null));
});

fressian_cljs.adler32.make_adler32 = (function fressian_cljs$adler32$make_adler32(){
return fressian_cljs.adler32.map__GT_Adler32.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.atom.call(null,(1))], null));
});

//# sourceMappingURL=adler32.js.map