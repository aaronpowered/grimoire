// Compiled by ClojureScript 1.7.228 {}
goog.provide('fressian_cljs.writer');
goog.require('cljs.core');
goog.require('fressian_cljs.defs');
goog.require('fressian_cljs.fns');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('fressian_cljs.adler32');

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
fressian_cljs.writer.FressianWriter = (function (buffer,index,handlers,checksum,priority_cache,struct_cache,__meta,__extmap,__hash){
this.buffer = buffer;
this.index = index;
this.handlers = handlers;
this.checksum = checksum;
this.priority_cache = priority_cache;
this.struct_cache = struct_cache;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fressian_cljs.writer.FressianWriter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26618__auto__,k__26619__auto__){
var self__ = this;
var this__26618__auto____$1 = this;
return cljs.core._lookup.call(null,this__26618__auto____$1,k__26619__auto__,null);
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26620__auto__,k27935,else__26621__auto__){
var self__ = this;
var this__26620__auto____$1 = this;
var G__27937 = (((k27935 instanceof cljs.core.Keyword))?k27935.fqn:null);
switch (G__27937) {
case "buffer":
return self__.buffer;

break;
case "index":
return self__.index;

break;
case "handlers":
return self__.handlers;

break;
case "checksum":
return self__.checksum;

break;
case "priority-cache":
return self__.priority_cache;

break;
case "struct-cache":
return self__.struct_cache;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27935,else__26621__auto__);

}
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26632__auto__,writer__26633__auto__,opts__26634__auto__){
var self__ = this;
var this__26632__auto____$1 = this;
var pr_pair__26635__auto__ = ((function (this__26632__auto____$1){
return (function (keyval__26636__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26633__auto__,cljs.core.pr_writer,""," ","",opts__26634__auto__,keyval__26636__auto__);
});})(this__26632__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26633__auto__,pr_pair__26635__auto__,"#fressian-cljs.writer.FressianWriter{",", ","}",opts__26634__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checksum","checksum",549736371),self__.checksum],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),self__.priority_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),self__.struct_cache],null))], null),self__.__extmap));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IIterable$ = true;

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27934){
var self__ = this;
var G__27934__$1 = this;
return (new cljs.core.RecordIter((0),G__27934__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"checksum","checksum",549736371),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26616__auto__){
var self__ = this;
var this__26616__auto____$1 = this;
return self__.__meta;
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26612__auto__){
var self__ = this;
var this__26612__auto____$1 = this;
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,self__.__hash));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26622__auto__){
var self__ = this;
var this__26622__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26613__auto__){
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

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26614__auto__,other__26615__auto__){
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

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26627__auto__,k__26628__auto__){
var self__ = this;
var this__26627__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),null,new cljs.core.Keyword(null,"handlers","handlers",79528781),null,new cljs.core.Keyword(null,"checksum","checksum",549736371),null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),null,new cljs.core.Keyword(null,"buffer","buffer",617295198),null], null), null),k__26628__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26627__auto____$1),self__.__meta),k__26628__auto__);
} else {
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26628__auto__)),null));
}
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26625__auto__,k__26626__auto__,G__27934){
var self__ = this;
var this__26625__auto____$1 = this;
var pred__27938 = cljs.core.keyword_identical_QMARK_;
var expr__27939 = k__26626__auto__;
if(cljs.core.truth_(pred__27938.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198),expr__27939))){
return (new fressian_cljs.writer.FressianWriter(G__27934,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27938.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__27939))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,G__27934,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27938.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781),expr__27939))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,G__27934,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27938.call(null,new cljs.core.Keyword(null,"checksum","checksum",549736371),expr__27939))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,G__27934,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27938.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),expr__27939))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,G__27934,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27938.call(null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),expr__27939))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,G__27934,self__.__meta,self__.__extmap,null));
} else {
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26626__auto__,G__27934),null));
}
}
}
}
}
}
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26630__auto__){
var self__ = this;
var this__26630__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checksum","checksum",549736371),self__.checksum],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),self__.priority_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),self__.struct_cache],null))], null),self__.__extmap));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26617__auto__,G__27934){
var self__ = this;
var this__26617__auto____$1 = this;
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,G__27934,self__.__extmap,self__.__hash));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26623__auto__,entry__26624__auto__){
var self__ = this;
var this__26623__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26624__auto__)){
return cljs.core._assoc.call(null,this__26623__auto____$1,cljs.core._nth.call(null,entry__26624__auto__,(0)),cljs.core._nth.call(null,entry__26624__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26623__auto____$1,entry__26624__auto__);
}
});

fressian_cljs.writer.FressianWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"handlers","handlers",1720060308,null),new cljs.core.Symbol(null,"checksum","checksum",-2104699398,null),new cljs.core.Symbol(null,"priority-cache","priority-cache",593583771,null),new cljs.core.Symbol(null,"struct-cache","struct-cache",-232850960,null)], null);
});

fressian_cljs.writer.FressianWriter.cljs$lang$type = true;

fressian_cljs.writer.FressianWriter.cljs$lang$ctorPrSeq = (function (this__26652__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"fressian-cljs.writer/FressianWriter");
});

fressian_cljs.writer.FressianWriter.cljs$lang$ctorPrWriter = (function (this__26652__auto__,writer__26653__auto__){
return cljs.core._write.call(null,writer__26653__auto__,"fressian-cljs.writer/FressianWriter");
});

fressian_cljs.writer.__GT_FressianWriter = (function fressian_cljs$writer$__GT_FressianWriter(buffer,index,handlers,checksum,priority_cache,struct_cache){
return (new fressian_cljs.writer.FressianWriter(buffer,index,handlers,checksum,priority_cache,struct_cache,null,null,null));
});

fressian_cljs.writer.map__GT_FressianWriter = (function fressian_cljs$writer$map__GT_FressianWriter(G__27936){
return (new fressian_cljs.writer.FressianWriter(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(G__27936),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__27936),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(G__27936),new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(G__27936),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(G__27936),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487).cljs$core$IFn$_invoke$arity$1(G__27936),null,cljs.core.dissoc.call(null,G__27936,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"checksum","checksum",549736371),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487)),null));
});



fressian_cljs.writer.notify_bytes_written = (function fressian_cljs$writer$notify_bytes_written(wtr,cnt){
return cljs.core.swap_BANG_.call(null,wtr,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core._PLUS_,cnt);
});
fressian_cljs.writer.write_raw_byte = (function fressian_cljs$writer$write_raw_byte(wtr,b){
((new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr))))[new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr))] = b);

fressian_cljs.adler32.update_BANG_.call(null,new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)),b);

fressian_cljs.writer.notify_bytes_written.call(null,wtr,(1));

return wtr;
});
fressian_cljs.writer.write_raw_bytes = (function fressian_cljs$writer$write_raw_bytes(wtr,b,off,len){
var i8array = (new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr))));
i8array.set(b.subarray(off,(off + len)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)));

fressian_cljs.adler32.update_BANG_.call(null,new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)),b,off,len);

fressian_cljs.writer.notify_bytes_written.call(null,wtr,len);

return wtr;
});
fressian_cljs.writer.reset = (function fressian_cljs$writer$reset(wtr){
cljs.core.swap_BANG_.call(null,wtr,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),(0));

return fressian_cljs.adler32.reset.call(null,new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)));
});
fressian_cljs.writer.write_code = (function fressian_cljs$writer$write_code(wtr,code){
return fressian_cljs.writer.write_raw_byte.call(null,wtr,code);
});
fressian_cljs.writer.write_tag = (function fressian_cljs$writer$write_tag(wtr,tag,component_count){
var temp__4655__auto___27942 = fressian_cljs.defs.tag_to_code.call(null,tag);
if(cljs.core.truth_(temp__4655__auto___27942)){
var shortcut_code_27943 = temp__4655__auto___27942;
fressian_cljs.writer.write_code.call(null,wtr,shortcut_code_27943);
} else {
var index_27944 = fressian_cljs.defs.old_index.call(null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)),tag);
if(cljs.core._EQ_.call(null,index_27944,(-1))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"structtype","structtype",112563241)));

fressian_cljs.writer.write_object.call(null,wtr,tag);

fressian_cljs.writer.write_int.call(null,wtr,component_count);
} else {
if((index_27944 < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"struct-cache-packed-end","struct-cache-packed-end",1499051160)))){
fressian_cljs.writer.write_code.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct-cache-packed-start","struct-cache-packed-start",-1769478714)) + index_27944));
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct","struct",-1314558596)));

fressian_cljs.writer.write_int.call(null,wtr,index_27944);

}
}
}

return wtr;
});
fressian_cljs.writer._GT__GT__GT_ = (function fressian_cljs$writer$_GT__GT__GT_(n,s){
return Math.floor((n / Math.pow((2),s)));
});
fressian_cljs.writer.write_named = (function fressian_cljs$writer$write_named(tag,wtr,s){
fressian_cljs.writer.write_tag.call(null,wtr,tag,(2));

fressian_cljs.writer.write_object.call(null,wtr,cljs.core.namespace.call(null,s),true);

return fressian_cljs.writer.write_object.call(null,wtr,cljs.core.name.call(null,s),true);
});
fressian_cljs.writer.write_raw_int16 = (function fressian_cljs$writer$write_raw_int16(wtr,s){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,s,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(s & (255)));
});
fressian_cljs.writer.write_raw_int24 = (function fressian_cljs$writer$write_raw_int24(wtr,i){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(16)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(i & (255)));
});
fressian_cljs.writer.write_raw_int32 = (function fressian_cljs$writer$write_raw_int32(wtr,i){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(24)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(16)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(i & (255)));
});
fressian_cljs.writer.write_raw_int40 = (function fressian_cljs$writer$write_raw_int40(wtr,i){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(32)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(24)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(16)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(i & (255)));
});
fressian_cljs.writer.write_raw_int48 = (function fressian_cljs$writer$write_raw_int48(wtr,i){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(40)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(32)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(24)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(16)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(i & (255)));
});
fressian_cljs.writer.write_raw_int64 = (function fressian_cljs$writer$write_raw_int64(wtr,i){
cljs.core.doall.call(null,(function (){var iter__26776__auto__ = (function fressian_cljs$writer$write_raw_int64_$_iter__27949(s__27950){
return (new cljs.core.LazySeq(null,(function (){
var s__27950__$1 = s__27950;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27950__$1);
if(temp__4657__auto__){
var s__27950__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27950__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__27950__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__27952 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__27951 = (0);
while(true){
if((i__27951 < size__26775__auto__)){
var x = cljs.core._nth.call(null,c__26774__auto__,i__27951);
cljs.core.chunk_append.call(null,b__27952,fressian_cljs.writer.write_raw_byte.call(null,wtr,fressian_cljs.writer._GT__GT__GT_.call(null,i,(((7) - x) * (8)))));

var G__27953 = (i__27951 + (1));
i__27951 = G__27953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27952),fressian_cljs$writer$write_raw_int64_$_iter__27949.call(null,cljs.core.chunk_rest.call(null,s__27950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27952),null);
}
} else {
var x = cljs.core.first.call(null,s__27950__$2);
return cljs.core.cons.call(null,fressian_cljs.writer.write_raw_byte.call(null,wtr,fressian_cljs.writer._GT__GT__GT_.call(null,i,(((7) - x) * (8)))),fressian_cljs$writer$write_raw_int64_$_iter__27949.call(null,cljs.core.rest.call(null,s__27950__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26776__auto__.call(null,cljs.core.range.call(null,(0),(8)));
})());

return wtr;
});
fressian_cljs.writer.write_raw_float = (function fressian_cljs$writer$write_raw_float(wtr,f){
var f32array_27954 = (new Float32Array((1)));
(f32array_27954[(0)] = f);

var bytes_27955 = (new Uint8Array(f32array_27954.buffer));
var n__26907__auto___27956 = (4);
var i_27957 = (0);
while(true){
if((i_27957 < n__26907__auto___27956)){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(bytes_27955[i_27957]));

var G__27958 = (i_27957 + (1));
i_27957 = G__27958;
continue;
} else {
}
break;
}

return wtr;
});
fressian_cljs.writer.write_raw_double = (function fressian_cljs$writer$write_raw_double(wtr,f){
var f64array_27959 = (new Float64Array((1)));
(f64array_27959[(0)] = f);

var bytes_27960 = (new Uint8Array(f64array_27959.buffer));
var n__26907__auto___27961 = (8);
var i_27962 = (0);
while(true){
if((i_27962 < n__26907__auto___27961)){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(bytes_27960[i_27962]));

var G__27963 = (i_27962 + (1));
i_27962 = G__27963;
continue;
} else {
}
break;
}

return wtr;
});
fressian_cljs.writer.bit_switch = (function fressian_cljs$writer$bit_switch(l){
return ((64) - Math.abs(l).toString((2)).length);
});
fressian_cljs.writer.write_int = (function fressian_cljs$writer$write_int(wtr,n){
var s = fressian_cljs.writer.bit_switch.call(null,n);
if((((1) <= s)) && ((s <= (14)))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int","int",-1741416922)));

return fressian_cljs.writer.write_raw_int64.call(null,wtr,n);
} else {
if((((15) <= s)) && ((s <= (22)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-7-zero","int-packed-7-zero",-909757732)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(48))));

return fressian_cljs.writer.write_raw_int48.call(null,wtr,n);
} else {
if((((23) <= s)) && ((s <= (30)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-6-zero","int-packed-6-zero",1172771066)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(40))));

return fressian_cljs.writer.write_raw_int40.call(null,wtr,n);
} else {
if((((31) <= s)) && ((s <= (38)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-5-zero","int-packed-5-zero",103558722)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(32))));

return fressian_cljs.writer.write_raw_int32.call(null,wtr,n);
} else {
if((((39) <= s)) && ((s <= (44)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-4-zero","int-packed-4-zero",1146756965)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(24))));

return fressian_cljs.writer.write_raw_int24.call(null,wtr,n);
} else {
if((((45) <= s)) && ((s <= (51)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-3-zero","int-packed-3-zero",-1069270840)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(16))));

return fressian_cljs.writer.write_raw_int16.call(null,wtr,n);
} else {
if((((52) <= s)) && ((s <= (57)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-2-zero","int-packed-2-zero",1071077944)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(8))));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,n);
} else {
if((((58) <= s)) && ((s <= (64)))){
if((n < (-1))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed_2_zero","int-packed_2_zero",914365607)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(8))));
} else {
}

return fressian_cljs.writer.write_raw_byte.call(null,wtr,n);
} else {
throw (new Error("more than 64 bits in a long!"));

}
}
}
}
}
}
}
}
});
fressian_cljs.writer.write_float = (function fressian_cljs$writer$write_float(wtr,f){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"float","float",-1732389368)));

return fressian_cljs.writer.write_raw_float.call(null,wtr,f);
});
fressian_cljs.writer.write_double = (function fressian_cljs$writer$write_double(wtr,d){
var G__27965 = d;
switch (G__27965) {
case 0.0:
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"doulbe-0","doulbe-0",-1668698487)));

break;
case 1.0:
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-1","double-1",1958675496)));

break;
default:
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double","double",884886883)));

return fressian_cljs.writer.write_raw_double.call(null,wtr,d);

}
});
fressian_cljs.writer.write_count = (function fressian_cljs$writer$write_count(wtr,cnt){
return fressian_cljs.writer.write_int.call(null,wtr,cnt);
});
fressian_cljs.writer.write_string = (function fressian_cljs$writer$write_string(wtr,s){
var max_buf_needed_27975 = (function (){var x__26342__auto__ = (cljs.core.count.call(null,s) * (3));
var y__26343__auto__ = (65536);
return ((x__26342__auto__ < y__26343__auto__) ? x__26342__auto__ : y__26343__auto__);
})();
var string_buffer_27976 = (new Int8Array((new ArrayBuffer(max_buf_needed_27975))));
var G__27972_27977 = fressian_cljs.fns.buffer_string_chunk_utf8.call(null,s,(0),string_buffer_27976);
var vec__27973_27978 = G__27972_27977;
var string_pos_27979 = cljs.core.nth.call(null,vec__27973_27978,(0),null);
var buf_pos_27980 = cljs.core.nth.call(null,vec__27973_27978,(1),null);
var G__27972_27981__$1 = G__27972_27977;
while(true){
var vec__27974_27982 = G__27972_27981__$1;
var string_pos_27983__$1 = cljs.core.nth.call(null,vec__27974_27982,(0),null);
var buf_pos_27984__$1 = cljs.core.nth.call(null,vec__27974_27982,(1),null);
if((buf_pos_27984__$1 < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"string-packed-length-end","string-packed-length-end",-358232148)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) + buf_pos_27984__$1));
} else {
if(cljs.core._EQ_.call(null,string_pos_27983__$1,cljs.core.count.call(null,s))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string","string",-1989541586)));

fressian_cljs.writer.write_code.call(null,wtr,buf_pos_27984__$1);
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-chunk","string-chunk",1505929923)));

fressian_cljs.writer.write_count.call(null,wtr,buf_pos_27984__$1);

}
}

fressian_cljs.writer.write_raw_bytes.call(null,wtr,string_buffer_27976,(0),buf_pos_27984__$1);

if((string_pos_27983__$1 < cljs.core.count.call(null,s))){
var G__27985 = fressian_cljs.fns.buffer_string_chunk_utf8.call(null,s,string_pos_27983__$1,string_buffer_27976);
G__27972_27981__$1 = G__27985;
continue;
} else {
}
break;
}

return wtr;
});
fressian_cljs.writer.write_bytes = (function fressian_cljs$writer$write_bytes(var_args){
var args27986 = [];
var len__27062__auto___27989 = arguments.length;
var i__27063__auto___27990 = (0);
while(true){
if((i__27063__auto___27990 < len__27062__auto___27989)){
args27986.push((arguments[i__27063__auto___27990]));

var G__27991 = (i__27063__auto___27990 + (1));
i__27063__auto___27990 = G__27991;
continue;
} else {
}
break;
}

var G__27988 = args27986.length;
switch (G__27988) {
case 2:
return fressian_cljs.writer.write_bytes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return fressian_cljs.writer.write_bytes.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27986.length)].join('')));

}
});

fressian_cljs.writer.write_bytes.cljs$core$IFn$_invoke$arity$2 = (function (wtr,b){
return fressian_cljs.writer.write_bytes.call(null,wtr,b,(0),b.length);
});

fressian_cljs.writer.write_bytes.cljs$core$IFn$_invoke$arity$4 = (function (wtr,b,offset,length){
if((length < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"bytes-packed-length-end","bytes-packed-length-end",-2089240276)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-packed-length-start","bytes-packed-length-start",1640199646)) + length));

fressian_cljs.writer.write_raw_bytes.call(null,wtr,b,offset,length);
} else {
var len_27993 = length;
var off_27994 = offset;
while(true){
if((len_27993 > fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-chunk","bytes-chunk",58155330)));

fressian_cljs.writer.write_count.call(null,wtr,fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)));

fressian_cljs.writer.write_raw_bytes.call(null,wtr,b,off_27994,fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)));

var G__27995 = (len_27993 - fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)));
var G__27996 = (off_27994 + fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)));
len_27993 = G__27995;
off_27994 = G__27996;
continue;
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes","bytes",1175866680)));

fressian_cljs.writer.write_count.call(null,wtr,len_27993);

fressian_cljs.writer.write_raw_bytes.call(null,wtr,b,off_27994,len_27993);
}
break;
}
}

return wtr;
});

fressian_cljs.writer.write_bytes.cljs$lang$maxFixedArity = 4;
fressian_cljs.writer.write_list = (function fressian_cljs$writer$write_list(wtr,l){
var length = cljs.core.count.call(null,l);
if((length < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"list-packed-length-end","list-packed-length-end",1171518200)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(length + fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list-packed-length-start","list-packed-length-start",-170807054))));
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list","list",765357683)));

fressian_cljs.writer.write_count.call(null,wtr,length);
}

return cljs.core.doall.call(null,(function (){var seq__28001 = cljs.core.seq.call(null,l);
var chunk__28002 = null;
var count__28003 = (0);
var i__28004 = (0);
while(true){
if((i__28004 < count__28003)){
var item = cljs.core._nth.call(null,chunk__28002,i__28004);
fressian_cljs.writer.write_object.call(null,wtr,item);

var G__28005 = seq__28001;
var G__28006 = chunk__28002;
var G__28007 = count__28003;
var G__28008 = (i__28004 + (1));
seq__28001 = G__28005;
chunk__28002 = G__28006;
count__28003 = G__28007;
i__28004 = G__28008;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28001);
if(temp__4657__auto__){
var seq__28001__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28001__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__28001__$1);
var G__28009 = cljs.core.chunk_rest.call(null,seq__28001__$1);
var G__28010 = c__26807__auto__;
var G__28011 = cljs.core.count.call(null,c__26807__auto__);
var G__28012 = (0);
seq__28001 = G__28009;
chunk__28002 = G__28010;
count__28003 = G__28011;
i__28004 = G__28012;
continue;
} else {
var item = cljs.core.first.call(null,seq__28001__$1);
fressian_cljs.writer.write_object.call(null,wtr,item);

var G__28013 = cljs.core.next.call(null,seq__28001__$1);
var G__28014 = null;
var G__28015 = (0);
var G__28016 = (0);
seq__28001 = G__28013;
chunk__28002 = G__28014;
count__28003 = G__28015;
i__28004 = G__28016;
continue;
}
} else {
return null;
}
}
break;
}
})());
});
fressian_cljs.writer.write_map = (function fressian_cljs$writer$write_map(wtr,m){
fressian_cljs.writer.write_tag.call(null,wtr,"map",(1));

return fressian_cljs.writer.write_list.call(null,wtr,cljs.core.flatten.call(null,cljs.core.seq.call(null,m)));
});
fressian_cljs.writer.write_set = (function fressian_cljs$writer$write_set(wtr,s){
fressian_cljs.writer.write_tag.call(null,wtr,"set",(1));

return fressian_cljs.writer.write_list.call(null,wtr,cljs.core.seq.call(null,s));
});
fressian_cljs.writer.clear_caches = (function fressian_cljs$writer$clear_caches(wtr){
return null;
});
fressian_cljs.writer.internal_write_footer = (function fressian_cljs$writer$internal_write_footer(wtr,length){
fressian_cljs.writer.write_raw_int32.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"footer-magic","footer-magic",-1426554286)));

fressian_cljs.writer.write_raw_int32.call(null,wtr,length);

return fressian_cljs.writer.reset.call(null,wtr);
});
fressian_cljs.writer.write_footer = (function fressian_cljs$writer$write_footer(wtr){
fressian_cljs.writer.internal_write_footer.call(null,wtr,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)));

fressian_cljs.writer.clear_caches.call(null,wtr);

return wtr;
});
if(typeof fressian_cljs.writer.internal_write !== 'undefined'){
} else {
fressian_cljs.writer.internal_write = (function (){var method_table__26917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26921__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fressian-cljs.writer","internal-write"),((function (method_table__26917__auto__,prefer_table__26918__auto__,method_cache__26919__auto__,cached_hierarchy__26920__auto__,hierarchy__26921__auto__){
return (function (_,o){
return cljs.core.type.call(null,o);
});})(method_table__26917__auto__,prefer_table__26918__auto__,method_cache__26919__auto__,cached_hierarchy__26920__auto__,hierarchy__26921__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26921__auto__,method_table__26917__auto__,prefer_table__26918__auto__,method_cache__26919__auto__,cached_hierarchy__26920__auto__));
})();
}
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Number,(function (wtr,n){
if(cljs.core._EQ_.call(null,Math.ceil(n),n)){
return fressian_cljs.writer.write_int.call(null,wtr,n);
} else {
if(((Math.pow((2),(-126)) < n)) && ((n < Math.pow((2),(128))))){
return fressian_cljs.writer.write_float.call(null,wtr,n);
} else {
return fressian_cljs.writer.write_double.call(null,wtr,n);

}
}
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Boolean,(function (wtr,b){
if(cljs.core.truth_(b)){
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"true","true",-1114210334)));
} else {
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"false","false",1277713805)));
}
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,String,(function (wtr,s){
if((s instanceof cljs.core.Keyword)){
return fressian_cljs.writer.write_named.call(null,"key",wtr,s);
} else {
return fressian_cljs.writer.write_string.call(null,wtr,s);

}
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Date,(function (wtr,d){
fressian_cljs.writer.write_tag.call(null,wtr,"inst",(1));

return fressian_cljs.writer.write_int.call(null,wtr,d.getTime());
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Array,(function (wtr,arr){
return fressian_cljs.writer.write_list.call(null,wtr,arr);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.ObjMap,(function (wtr,m){
return fressian_cljs.writer.write_map.call(null,wtr,m);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.PersistentHashMap,(function (wtr,m){
return fressian_cljs.writer.write_map.call(null,wtr,m);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.PersistentArrayMap,(function (wtr,m){
return fressian_cljs.writer.write_map.call(null,wtr,m);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.PersistentVector,(function (wtr,v){
return fressian_cljs.writer.write_list.call(null,wtr,v);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.ChunkedSeq,(function (wtr,s){
return fressian_cljs.writer.write_list.call(null,wtr,s);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.PersistentHashSet,(function (wtr,s){
return fressian_cljs.writer.write_set.call(null,wtr,s);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.Keyword,(function (wtr,k){
return fressian_cljs.writer.write_named.call(null,"key",wtr,k);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.Symbol,(function (wtr,s){
return fressian_cljs.writer.write_named.call(null,"sym",wtr,s);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.UUID,(function (wtr,uuid){
fressian_cljs.writer.write_tag.call(null,wtr,"uuid",(1));

return fressian_cljs.writer.write_bytes.call(null,wtr,(new Uint8Array(fressian_cljs.fns.uuid_to_byte_array.call(null,uuid))));
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,null,(function (wtr,null_ref){
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"null","null",-180137709)));
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Object,(function (wtr,o){
return fressian_cljs.writer.write_map.call(null,wtr,cljs.core.js__GT_clj.call(null,o));
}));
fressian_cljs.writer.should_skip_cache_QMARK_ = (function fressian_cljs$writer$should_skip_cache_QMARK_(o){
if(((o == null)) || (cljs.core._EQ_.call(null,cljs.core.type.call(null,o),Boolean))){
return true;
} else {
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,o),String)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,o),(0));
} else {
return false;

}
}
});
fressian_cljs.writer.do_write = (function fressian_cljs$writer$do_write(wtr,tag,o,handler,cache_QMARK_){
if(cljs.core.truth_(cache_QMARK_)){
if(cljs.core.truth_(fressian_cljs.writer.should_skip_cache_QMARK_.call(null,o))){
return fressian_cljs$writer$do_write.call(null,wtr,tag,o,handler,false);
} else {
var index = fressian_cljs.defs.old_index.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)),o);
if(cljs.core._EQ_.call(null,index,(-1))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"put-priority-cache","put-priority-cache",-1626100040)));

return fressian_cljs$writer$do_write.call(null,wtr,tag,o,handler,false);
} else {
if((index < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"priority-cache-packed-end","priority-cache-packed-end",1123343205)))){
return fressian_cljs.writer.write_code.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"priority-cache-packed-start","priority-cache-packed-start",-733080283)) + index));
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"get-priority-cache","get-priority-cache",409460466)));

return fressian_cljs.writer.write_int.call(null,wtr,index);
}
}
}
} else {
return handler.call(null,wtr,o);
}
});
fressian_cljs.writer.lookup_handler = (function fressian_cljs$writer$lookup_handler(wtr,tag,o){
if(cljs.core.truth_(tag)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,wtr),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.type.call(null,o),tag], null));
} else {
var G__28018 = cljs.core.get_in.call(null,cljs.core.deref.call(null,wtr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.type.call(null,o)], null));
var G__28018__$1 = (((G__28018 == null))?null:cljs.core.first.call(null,G__28018));
if((G__28018__$1 == null)){
return null;
} else {
return cljs.core.val.call(null,G__28018__$1);
}
}
});
fressian_cljs.writer.write_as = (function fressian_cljs$writer$write_as(var_args){
var args28019 = [];
var len__27062__auto___28022 = arguments.length;
var i__27063__auto___28023 = (0);
while(true){
if((i__27063__auto___28023 < len__27062__auto___28022)){
args28019.push((arguments[i__27063__auto___28023]));

var G__28024 = (i__27063__auto___28023 + (1));
i__27063__auto___28023 = G__28024;
continue;
} else {
}
break;
}

var G__28021 = args28019.length;
switch (G__28021) {
case 3:
return fressian_cljs.writer.write_as.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fressian_cljs.writer.write_as.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28019.length)].join('')));

}
});

fressian_cljs.writer.write_as.cljs$core$IFn$_invoke$arity$3 = (function (wtr,tag,o){
return fressian_cljs.writer.write_as.call(null,wtr,null,o,false);
});

fressian_cljs.writer.write_as.cljs$core$IFn$_invoke$arity$4 = (function (wtr,tag,o,cache_QMARK_){
var temp__4655__auto__ = (function (){var or__26004__auto__ = fressian_cljs.writer.lookup_handler.call(null,wtr,tag,o);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return cljs.core.get_method.call(null,fressian_cljs.writer.internal_write,cljs.core.type.call(null,o));
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var handler = temp__4655__auto__;
return fressian_cljs.writer.do_write.call(null,wtr,tag,o,handler,cache_QMARK_);
} else {
throw (new Error([cljs.core.str("Cannot write "),cljs.core.str(o),cljs.core.str(" as tag "),cljs.core.str(tag)].join('')));
}
});

fressian_cljs.writer.write_as.cljs$lang$maxFixedArity = 4;
fressian_cljs.writer.write_object = (function fressian_cljs$writer$write_object(var_args){
var args28026 = [];
var len__27062__auto___28029 = arguments.length;
var i__27063__auto___28030 = (0);
while(true){
if((i__27063__auto___28030 < len__27062__auto___28029)){
args28026.push((arguments[i__27063__auto___28030]));

var G__28031 = (i__27063__auto___28030 + (1));
i__27063__auto___28030 = G__28031;
continue;
} else {
}
break;
}

var G__28028 = args28026.length;
switch (G__28028) {
case 3:
return fressian_cljs.writer.write_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fressian_cljs.writer.write_object.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28026.length)].join('')));

}
});

fressian_cljs.writer.write_object.cljs$core$IFn$_invoke$arity$3 = (function (wtr,o,cache_QMARK_){
return fressian_cljs.writer.write_as.call(null,wtr,null,o,cache_QMARK_);
});

fressian_cljs.writer.write_object.cljs$core$IFn$_invoke$arity$2 = (function (wtr,o){
return fressian_cljs.writer.write_as.call(null,wtr,null,o);
});

fressian_cljs.writer.write_object.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=writer.js.map