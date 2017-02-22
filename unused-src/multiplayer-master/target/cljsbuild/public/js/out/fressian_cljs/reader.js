// Compiled by ClojureScript 1.7.228 {}
goog.provide('fressian_cljs.reader');
goog.require('cljs.core');
goog.require('fressian_cljs.defs');
goog.require('fressian_cljs.fns');
goog.require('goog.string');
goog.require('goog.string.format');

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
fressian_cljs.reader.FressianReader = (function (buffer,index,handlers,priority_cache,struct_cache,__meta,__extmap,__hash){
this.buffer = buffer;
this.index = index;
this.handlers = handlers;
this.priority_cache = priority_cache;
this.struct_cache = struct_cache;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fressian_cljs.reader.FressianReader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26618__auto__,k__26619__auto__){
var self__ = this;
var this__26618__auto____$1 = this;
return cljs.core._lookup.call(null,this__26618__auto____$1,k__26619__auto__,null);
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26620__auto__,k27712,else__26621__auto__){
var self__ = this;
var this__26620__auto____$1 = this;
var G__27714 = (((k27712 instanceof cljs.core.Keyword))?k27712.fqn:null);
switch (G__27714) {
case "buffer":
return self__.buffer;

break;
case "index":
return self__.index;

break;
case "handlers":
return self__.handlers;

break;
case "priority-cache":
return self__.priority_cache;

break;
case "struct-cache":
return self__.struct_cache;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27712,else__26621__auto__);

}
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26632__auto__,writer__26633__auto__,opts__26634__auto__){
var self__ = this;
var this__26632__auto____$1 = this;
var pr_pair__26635__auto__ = ((function (this__26632__auto____$1){
return (function (keyval__26636__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26633__auto__,cljs.core.pr_writer,""," ","",opts__26634__auto__,keyval__26636__auto__);
});})(this__26632__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26633__auto__,pr_pair__26635__auto__,"#fressian-cljs.reader.FressianReader{",", ","}",opts__26634__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),self__.priority_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),self__.struct_cache],null))], null),self__.__extmap));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IIterable$ = true;

fressian_cljs.reader.FressianReader.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27711){
var self__ = this;
var G__27711__$1 = this;
return (new cljs.core.RecordIter((0),G__27711__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26616__auto__){
var self__ = this;
var this__26616__auto____$1 = this;
return self__.__meta;
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26612__auto__){
var self__ = this;
var this__26612__auto____$1 = this;
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,self__.__hash));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26622__auto__){
var self__ = this;
var this__26622__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26613__auto__){
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

fressian_cljs.reader.FressianReader.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26614__auto__,other__26615__auto__){
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

fressian_cljs.reader.FressianReader.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26627__auto__,k__26628__auto__){
var self__ = this;
var this__26627__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),null,new cljs.core.Keyword(null,"handlers","handlers",79528781),null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),null,new cljs.core.Keyword(null,"buffer","buffer",617295198),null], null), null),k__26628__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26627__auto____$1),self__.__meta),k__26628__auto__);
} else {
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26628__auto__)),null));
}
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26625__auto__,k__26626__auto__,G__27711){
var self__ = this;
var this__26625__auto____$1 = this;
var pred__27715 = cljs.core.keyword_identical_QMARK_;
var expr__27716 = k__26626__auto__;
if(cljs.core.truth_(pred__27715.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198),expr__27716))){
return (new fressian_cljs.reader.FressianReader(G__27711,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27715.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__27716))){
return (new fressian_cljs.reader.FressianReader(self__.buffer,G__27711,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27715.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781),expr__27716))){
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,G__27711,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27715.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),expr__27716))){
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,G__27711,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27715.call(null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),expr__27716))){
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,G__27711,self__.__meta,self__.__extmap,null));
} else {
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26626__auto__,G__27711),null));
}
}
}
}
}
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26630__auto__){
var self__ = this;
var this__26630__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),self__.priority_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),self__.struct_cache],null))], null),self__.__extmap));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26617__auto__,G__27711){
var self__ = this;
var this__26617__auto____$1 = this;
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,G__27711,self__.__extmap,self__.__hash));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26623__auto__,entry__26624__auto__){
var self__ = this;
var this__26623__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26624__auto__)){
return cljs.core._assoc.call(null,this__26623__auto____$1,cljs.core._nth.call(null,entry__26624__auto__,(0)),cljs.core._nth.call(null,entry__26624__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26623__auto____$1,entry__26624__auto__);
}
});

fressian_cljs.reader.FressianReader.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"handlers","handlers",1720060308,null),new cljs.core.Symbol(null,"priority-cache","priority-cache",593583771,null),new cljs.core.Symbol(null,"struct-cache","struct-cache",-232850960,null)], null);
});

fressian_cljs.reader.FressianReader.cljs$lang$type = true;

fressian_cljs.reader.FressianReader.cljs$lang$ctorPrSeq = (function (this__26652__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"fressian-cljs.reader/FressianReader");
});

fressian_cljs.reader.FressianReader.cljs$lang$ctorPrWriter = (function (this__26652__auto__,writer__26653__auto__){
return cljs.core._write.call(null,writer__26653__auto__,"fressian-cljs.reader/FressianReader");
});

fressian_cljs.reader.__GT_FressianReader = (function fressian_cljs$reader$__GT_FressianReader(buffer,index,handlers,priority_cache,struct_cache){
return (new fressian_cljs.reader.FressianReader(buffer,index,handlers,priority_cache,struct_cache,null,null,null));
});

fressian_cljs.reader.map__GT_FressianReader = (function fressian_cljs$reader$map__GT_FressianReader(G__27713){
return (new fressian_cljs.reader.FressianReader(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(G__27713),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__27713),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(G__27713),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(G__27713),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487).cljs$core$IFn$_invoke$arity$1(G__27713),null,cljs.core.dissoc.call(null,G__27713,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487)),null));
});

fressian_cljs.reader.standard_extension_hadlers = cljs.core.PersistentHashMap.fromArrays(["map","inst","bigdec","long[]","uri","regex","uuid","int[]","boolean[]","float[]","Object[]","set","double[]","bigint"],[(function (r,tag,component_count){
return cljs.core.apply.call(null,cljs.core.hash_map,fressian_cljs.reader.read_object.call(null,r));
}),(function (r,tag,component_count){
var d = (new Date());
var tm = fressian_cljs.reader.read_int.call(null,r);
d.setTime(tm);

return d;
}),(function (r,tag,component_count){
return cljs.core.List.EMPTY;
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__27719_27743 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__27720_27744 = null;
var count__27721_27745 = (0);
var i__27722_27746 = (0);
while(true){
if((i__27722_27746 < count__27721_27745)){
var n_27747 = cljs.core._nth.call(null,chunk__27720_27744,i__27722_27746);
(result[n_27747] = fressian_cljs.reader.read_int.call(null,r));

var G__27748 = seq__27719_27743;
var G__27749 = chunk__27720_27744;
var G__27750 = count__27721_27745;
var G__27751 = (i__27722_27746 + (1));
seq__27719_27743 = G__27748;
chunk__27720_27744 = G__27749;
count__27721_27745 = G__27750;
i__27722_27746 = G__27751;
continue;
} else {
var temp__4657__auto___27752 = cljs.core.seq.call(null,seq__27719_27743);
if(temp__4657__auto___27752){
var seq__27719_27753__$1 = temp__4657__auto___27752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27719_27753__$1)){
var c__26807__auto___27754 = cljs.core.chunk_first.call(null,seq__27719_27753__$1);
var G__27755 = cljs.core.chunk_rest.call(null,seq__27719_27753__$1);
var G__27756 = c__26807__auto___27754;
var G__27757 = cljs.core.count.call(null,c__26807__auto___27754);
var G__27758 = (0);
seq__27719_27743 = G__27755;
chunk__27720_27744 = G__27756;
count__27721_27745 = G__27757;
i__27722_27746 = G__27758;
continue;
} else {
var n_27759 = cljs.core.first.call(null,seq__27719_27753__$1);
(result[n_27759] = fressian_cljs.reader.read_int.call(null,r));

var G__27760 = cljs.core.next.call(null,seq__27719_27753__$1);
var G__27761 = null;
var G__27762 = (0);
var G__27763 = (0);
seq__27719_27743 = G__27760;
chunk__27720_27744 = G__27761;
count__27721_27745 = G__27762;
i__27722_27746 = G__27763;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
return fressian_cljs.reader.read_object.call(null,r);
}),(function (r,tag,component_count){
return cljs.core.re_pattern.call(null,fressian_cljs.reader.read_object.call(null,r));
}),(function (r,tag,component_count){
var buf = fressian_cljs.reader.read_object.call(null,r);
if(cljs.core._EQ_.call(null,buf.length,(16))){
} else {
throw [cljs.core.str("Invalid uuid buffer size: "),cljs.core.str(cljs.core.count.call(null,buf))].join('');
}

return fressian_cljs.fns.byte_array_to_uuid.call(null,buf);
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__27723_27764 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__27724_27765 = null;
var count__27725_27766 = (0);
var i__27726_27767 = (0);
while(true){
if((i__27726_27767 < count__27725_27766)){
var n_27768 = cljs.core._nth.call(null,chunk__27724_27765,i__27726_27767);
(result[n_27768] = fressian_cljs.reader.read_int.call(null,r));

var G__27769 = seq__27723_27764;
var G__27770 = chunk__27724_27765;
var G__27771 = count__27725_27766;
var G__27772 = (i__27726_27767 + (1));
seq__27723_27764 = G__27769;
chunk__27724_27765 = G__27770;
count__27725_27766 = G__27771;
i__27726_27767 = G__27772;
continue;
} else {
var temp__4657__auto___27773 = cljs.core.seq.call(null,seq__27723_27764);
if(temp__4657__auto___27773){
var seq__27723_27774__$1 = temp__4657__auto___27773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27723_27774__$1)){
var c__26807__auto___27775 = cljs.core.chunk_first.call(null,seq__27723_27774__$1);
var G__27776 = cljs.core.chunk_rest.call(null,seq__27723_27774__$1);
var G__27777 = c__26807__auto___27775;
var G__27778 = cljs.core.count.call(null,c__26807__auto___27775);
var G__27779 = (0);
seq__27723_27764 = G__27776;
chunk__27724_27765 = G__27777;
count__27725_27766 = G__27778;
i__27726_27767 = G__27779;
continue;
} else {
var n_27780 = cljs.core.first.call(null,seq__27723_27774__$1);
(result[n_27780] = fressian_cljs.reader.read_int.call(null,r));

var G__27781 = cljs.core.next.call(null,seq__27723_27774__$1);
var G__27782 = null;
var G__27783 = (0);
var G__27784 = (0);
seq__27723_27764 = G__27781;
chunk__27724_27765 = G__27782;
count__27725_27766 = G__27783;
i__27726_27767 = G__27784;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__27727_27785 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__27728_27786 = null;
var count__27729_27787 = (0);
var i__27730_27788 = (0);
while(true){
if((i__27730_27788 < count__27729_27787)){
var n_27789 = cljs.core._nth.call(null,chunk__27728_27786,i__27730_27788);
(result[n_27789] = fressian_cljs.reader.read_boolean.call(null,r));

var G__27790 = seq__27727_27785;
var G__27791 = chunk__27728_27786;
var G__27792 = count__27729_27787;
var G__27793 = (i__27730_27788 + (1));
seq__27727_27785 = G__27790;
chunk__27728_27786 = G__27791;
count__27729_27787 = G__27792;
i__27730_27788 = G__27793;
continue;
} else {
var temp__4657__auto___27794 = cljs.core.seq.call(null,seq__27727_27785);
if(temp__4657__auto___27794){
var seq__27727_27795__$1 = temp__4657__auto___27794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27727_27795__$1)){
var c__26807__auto___27796 = cljs.core.chunk_first.call(null,seq__27727_27795__$1);
var G__27797 = cljs.core.chunk_rest.call(null,seq__27727_27795__$1);
var G__27798 = c__26807__auto___27796;
var G__27799 = cljs.core.count.call(null,c__26807__auto___27796);
var G__27800 = (0);
seq__27727_27785 = G__27797;
chunk__27728_27786 = G__27798;
count__27729_27787 = G__27799;
i__27730_27788 = G__27800;
continue;
} else {
var n_27801 = cljs.core.first.call(null,seq__27727_27795__$1);
(result[n_27801] = fressian_cljs.reader.read_boolean.call(null,r));

var G__27802 = cljs.core.next.call(null,seq__27727_27795__$1);
var G__27803 = null;
var G__27804 = (0);
var G__27805 = (0);
seq__27727_27785 = G__27802;
chunk__27728_27786 = G__27803;
count__27729_27787 = G__27804;
i__27730_27788 = G__27805;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__27731_27806 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__27732_27807 = null;
var count__27733_27808 = (0);
var i__27734_27809 = (0);
while(true){
if((i__27734_27809 < count__27733_27808)){
var n_27810 = cljs.core._nth.call(null,chunk__27732_27807,i__27734_27809);
(result[n_27810] = fressian_cljs.reader.read_float.call(null,r));

var G__27811 = seq__27731_27806;
var G__27812 = chunk__27732_27807;
var G__27813 = count__27733_27808;
var G__27814 = (i__27734_27809 + (1));
seq__27731_27806 = G__27811;
chunk__27732_27807 = G__27812;
count__27733_27808 = G__27813;
i__27734_27809 = G__27814;
continue;
} else {
var temp__4657__auto___27815 = cljs.core.seq.call(null,seq__27731_27806);
if(temp__4657__auto___27815){
var seq__27731_27816__$1 = temp__4657__auto___27815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27731_27816__$1)){
var c__26807__auto___27817 = cljs.core.chunk_first.call(null,seq__27731_27816__$1);
var G__27818 = cljs.core.chunk_rest.call(null,seq__27731_27816__$1);
var G__27819 = c__26807__auto___27817;
var G__27820 = cljs.core.count.call(null,c__26807__auto___27817);
var G__27821 = (0);
seq__27731_27806 = G__27818;
chunk__27732_27807 = G__27819;
count__27733_27808 = G__27820;
i__27734_27809 = G__27821;
continue;
} else {
var n_27822 = cljs.core.first.call(null,seq__27731_27816__$1);
(result[n_27822] = fressian_cljs.reader.read_float.call(null,r));

var G__27823 = cljs.core.next.call(null,seq__27731_27816__$1);
var G__27824 = null;
var G__27825 = (0);
var G__27826 = (0);
seq__27731_27806 = G__27823;
chunk__27732_27807 = G__27824;
count__27733_27808 = G__27825;
i__27734_27809 = G__27826;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__27735_27827 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__27736_27828 = null;
var count__27737_27829 = (0);
var i__27738_27830 = (0);
while(true){
if((i__27738_27830 < count__27737_27829)){
var n_27831 = cljs.core._nth.call(null,chunk__27736_27828,i__27738_27830);
(result[n_27831] = fressian_cljs.reader.read_object.call(null,r));

var G__27832 = seq__27735_27827;
var G__27833 = chunk__27736_27828;
var G__27834 = count__27737_27829;
var G__27835 = (i__27738_27830 + (1));
seq__27735_27827 = G__27832;
chunk__27736_27828 = G__27833;
count__27737_27829 = G__27834;
i__27738_27830 = G__27835;
continue;
} else {
var temp__4657__auto___27836 = cljs.core.seq.call(null,seq__27735_27827);
if(temp__4657__auto___27836){
var seq__27735_27837__$1 = temp__4657__auto___27836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27735_27837__$1)){
var c__26807__auto___27838 = cljs.core.chunk_first.call(null,seq__27735_27837__$1);
var G__27839 = cljs.core.chunk_rest.call(null,seq__27735_27837__$1);
var G__27840 = c__26807__auto___27838;
var G__27841 = cljs.core.count.call(null,c__26807__auto___27838);
var G__27842 = (0);
seq__27735_27827 = G__27839;
chunk__27736_27828 = G__27840;
count__27737_27829 = G__27841;
i__27738_27830 = G__27842;
continue;
} else {
var n_27843 = cljs.core.first.call(null,seq__27735_27837__$1);
(result[n_27843] = fressian_cljs.reader.read_object.call(null,r));

var G__27844 = cljs.core.next.call(null,seq__27735_27837__$1);
var G__27845 = null;
var G__27846 = (0);
var G__27847 = (0);
seq__27735_27827 = G__27844;
chunk__27736_27828 = G__27845;
count__27737_27829 = G__27846;
i__27738_27830 = G__27847;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
return cljs.core.set.call(null,fressian_cljs.reader.read_object.call(null,r));
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__27739_27848 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__27740_27849 = null;
var count__27741_27850 = (0);
var i__27742_27851 = (0);
while(true){
if((i__27742_27851 < count__27741_27850)){
var n_27852 = cljs.core._nth.call(null,chunk__27740_27849,i__27742_27851);
(result[n_27852] = fressian_cljs.reader.read_double.call(null,r));

var G__27853 = seq__27739_27848;
var G__27854 = chunk__27740_27849;
var G__27855 = count__27741_27850;
var G__27856 = (i__27742_27851 + (1));
seq__27739_27848 = G__27853;
chunk__27740_27849 = G__27854;
count__27741_27850 = G__27855;
i__27742_27851 = G__27856;
continue;
} else {
var temp__4657__auto___27857 = cljs.core.seq.call(null,seq__27739_27848);
if(temp__4657__auto___27857){
var seq__27739_27858__$1 = temp__4657__auto___27857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27739_27858__$1)){
var c__26807__auto___27859 = cljs.core.chunk_first.call(null,seq__27739_27858__$1);
var G__27860 = cljs.core.chunk_rest.call(null,seq__27739_27858__$1);
var G__27861 = c__26807__auto___27859;
var G__27862 = cljs.core.count.call(null,c__26807__auto___27859);
var G__27863 = (0);
seq__27739_27848 = G__27860;
chunk__27740_27849 = G__27861;
count__27741_27850 = G__27862;
i__27742_27851 = G__27863;
continue;
} else {
var n_27864 = cljs.core.first.call(null,seq__27739_27858__$1);
(result[n_27864] = fressian_cljs.reader.read_double.call(null,r));

var G__27865 = cljs.core.next.call(null,seq__27739_27858__$1);
var G__27866 = null;
var G__27867 = (0);
var G__27868 = (0);
seq__27739_27848 = G__27865;
chunk__27740_27849 = G__27866;
count__27741_27850 = G__27867;
i__27742_27851 = G__27868;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
return cljs.core.List.EMPTY;
})]);
fressian_cljs.reader.core_handlers = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list","list",765357683),(function (p1__27869_SHARP_){
return cljs.core.apply.call(null,cljs.core.list,p1__27869_SHARP_);
}),new cljs.core.Keyword(null,"bytes","bytes",1175866680),cljs.core.identity,new cljs.core.Keyword(null,"double","double",884886883),cljs.core.identity,new cljs.core.Keyword(null,"float","float",-1732389368),cljs.core.identity], null);
fressian_cljs.reader.under_construction = (new Object());
fressian_cljs.reader.read_and_cache_object = (function fressian_cljs$reader$read_and_cache_object(reader){
var o = fressian_cljs.reader.read_object.call(null,reader);
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756)], null),cljs.core.conj,o);

return o;
});
fressian_cljs.reader.lookup_cache = (function fressian_cljs$reader$lookup_cache(cache,index){
if((index < cljs.core.count.call(null,cache))){
var result = cljs.core.nth.call(null,cache,index);
if(cljs.core._EQ_.call(null,result,fressian_cljs.reader.under_construction)){
throw (new Error("Unable to resolve circular reference in cache"));
} else {
return result;
}
} else {
throw (new Error([cljs.core.str("Requested object beyond end of cache at "),cljs.core.str(index)].join('')));
}
});
fressian_cljs.reader.reset_caches = (function fressian_cljs$reader$reset_caches(reader){
cljs.core.swap_BANG_.call(null,reader,cljs.core.assoc,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),null);

return cljs.core.swap_BANG_.call(null,reader,cljs.core.assoc,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),null);
});
fressian_cljs.reader.read_next_code = (function fressian_cljs$reader$read_next_code(reader){
var code = (new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),(1)));
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core.inc);

return (code[(0)]);
});
fressian_cljs.reader.read_fully = (function fressian_cljs$reader$read_fully(reader,length){
var buf = (new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),length));
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core._PLUS_,length);

return buf;
});
fressian_cljs.reader.read_raw_byte = (function fressian_cljs$reader$read_raw_byte(reader){
var result = (function (){var G__27871 = (new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),(1)));
if((G__27871 == null)){
return null;
} else {
return (G__27871[(0)]);
}
})();
if((result < (0))){
throw (new Error("EOF"));
} else {
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core.inc);

return result;
}
});
fressian_cljs.reader._LT__LT_ = (function fressian_cljs$reader$_LT__LT_(x,y){
return (x * Math.pow((2),y));
});
fressian_cljs.reader.read_raw_int8 = (function fressian_cljs$reader$read_raw_int8(reader){
return fressian_cljs.reader.read_raw_byte.call(null,reader);
});
fressian_cljs.reader.read_raw_int16 = (function fressian_cljs$reader$read_raw_int16(reader){
return (fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(8)) + fressian_cljs.reader.read_raw_byte.call(null,reader));
});
fressian_cljs.reader.read_raw_int24 = (function fressian_cljs$reader$read_raw_int24(reader){
return ((fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(16)) + fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(8))) + fressian_cljs.reader.read_raw_byte.call(null,reader));
});
fressian_cljs.reader.read_raw_int32 = (function fressian_cljs$reader$read_raw_int32(reader){
return (((fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(24)) + fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(16))) + fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(8))) + fressian_cljs.reader.read_raw_byte.call(null,reader));
});
fressian_cljs.reader.read_raw_int40 = (function fressian_cljs$reader$read_raw_int40(reader){
return (fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(32)) + fressian_cljs.reader.read_raw_int32.call(null,reader));
});
fressian_cljs.reader.read_raw_int48 = (function fressian_cljs$reader$read_raw_int48(reader){
return (fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(40)) + fressian_cljs.reader.read_raw_int40.call(null,reader));
});
fressian_cljs.reader.read_raw_int64 = (function fressian_cljs$reader$read_raw_int64(reader){
return ((fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(56)) + fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(48))) + fressian_cljs.reader.read_raw_int48.call(null,reader));
});
fressian_cljs.reader.read_raw_float = (function fressian_cljs$reader$read_raw_float(reader){
var f32buf = (new Float32Array((1)));
var u8buf = (new Uint8Array(f32buf.buffer));
var n__26907__auto___27872 = (4);
var i_27873 = (0);
while(true){
if((i_27873 < n__26907__auto___27872)){
var b_27874 = fressian_cljs.reader.read_raw_byte.call(null,reader);
(u8buf[i_27873] = b_27874);

var G__27875 = (i_27873 + (1));
i_27873 = G__27875;
continue;
} else {
}
break;
}

return (f32buf[(0)]);
});
fressian_cljs.reader.read_raw_double = (function fressian_cljs$reader$read_raw_double(reader){
var buf = (new ArrayBuffer((8)));
var h = fressian_cljs.reader.read_raw_int32.call(null,reader);
var l = fressian_cljs.reader.read_raw_int32.call(null,reader);
((new Int32Array(buf))[(0)] = h);

((new Int32Array(buf))[(1)] = l);

return ((new Float64Array(buf))[(0)]);
});
fressian_cljs.reader.internal_read_int32 = (function fressian_cljs$reader$internal_read_int32(reader){
return fressian_cljs.reader.internal_read_int.call(null,reader);
});
fressian_cljs.reader.internal_read_double = (function fressian_cljs$reader$internal_read_double(reader,code){
var pred__27879 = cljs.core._EQ_;
var expr__27880 = code;
if(cljs.core.truth_(pred__27879.call(null,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double","double",884886883)),expr__27880))){
return fressian_cljs.reader.read_raw_double.call(null,reader);
} else {
if(cljs.core.truth_(pred__27879.call(null,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-0","double-0",-1217811359)),expr__27880))){
return 0.0;
} else {
if(cljs.core.truth_(pred__27879.call(null,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-1","double-1",1958675496)),expr__27880))){
return 1.0;
} else {
var o = fressian_cljs.reader.read.call(null,reader,code);
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,o),Number)){
return o;
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"double",code,o)));
}
}
}
}
});
fressian_cljs.reader.read_boolean = (function fressian_cljs$reader$read_boolean(reader){
var code = fressian_cljs.reader.read_next_code.call(null,reader);
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"true","true",-1114210334)))){
return true;
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"false","false",1277713805)))){
return false;
} else {
var res = fressian_cljs.reader.read.call(null,reader,code);
if(cljs.core._EQ_.call(null,Boolean,cljs.core.type.call(null,res))){
return res;
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"boolean",code,res)));
}

}
}
});
fressian_cljs.reader.read_int = (function fressian_cljs$reader$read_int(reader){
return fressian_cljs.reader.internal_read_int.call(null,reader);
});
fressian_cljs.reader.read_double = (function fressian_cljs$reader$read_double(reader){
var code = fressian_cljs.reader.read_next_code.call(null,reader);
return fressian_cljs.reader.internal_read_double.call(null,reader,code);
});
fressian_cljs.reader.read_float = (function fressian_cljs$reader$read_float(reader){
var code = fressian_cljs.reader.read_next_code.call(null,reader);
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"float","float",-1732389368)))){
return fressian_cljs.reader.read_raw_float.call(null,reader);
} else {
var o = fressian_cljs.reader.read.call(null,reader,code);
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,o),Number)){
return o;
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"float",code,o)));
}

}
});
fressian_cljs.reader.read_int32 = (function fressian_cljs$reader$read_int32(reader){
return fressian_cljs.reader.read_int.call(null,reader);
});
fressian_cljs.reader.read_count = (function fressian_cljs$reader$read_count(reader){
return fressian_cljs.reader.read_int32.call(null,reader);
});
fressian_cljs.reader.internal_read_string = (function fressian_cljs$reader$internal_read_string(reader,length){
var buf = fressian_cljs.reader.read_fully.call(null,reader,length);
return fressian_cljs.fns.read_utf8_chars.call(null,buf,(0),length);
});
fressian_cljs.reader.internal_read_chunked_string = (function fressian_cljs$reader$internal_read_chunked_string(reader,length){
var buf = cljs.core.atom.call(null,fressian_cljs.reader.internal_read_string.call(null,reader,length));
var code = fressian_cljs.reader.read_next_code.call(null,reader);
while(true){
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) + (7))))){
return fressian_cljs.reader.internal_read_string.call(null,reader,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400))));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string","string",-1989541586)))){
return fressian_cljs.reader.internal_read_string.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-chunk","string-chunk",1505929923)))){
return fressian_cljs.reader.internal_read_string.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
return null;
}
}
}
break;
}
});
fressian_cljs.reader.internal_read_bytes = (function fressian_cljs$reader$internal_read_bytes(reader,length){
return fressian_cljs.reader.read_fully.call(null,reader,length);
});
fressian_cljs.reader.internal_read_chunked_bytes = (function fressian_cljs$reader$internal_read_chunked_bytes(reader){
return null;
});
fressian_cljs.reader.read_closed_list = (function fressian_cljs$reader$read_closed_list(reader){
var objects = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var code_27882 = fressian_cljs.reader.read_next_code.call(null,reader);
while(true){
if(!(cljs.core._EQ_.call(null,code_27882,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"end-collection","end-collection",1938577755))))){
cljs.core.swap_BANG_.call(null,objects,cljs.core.conj,fressian_cljs.reader.read.call(null,reader,code_27882));
} else {
var G__27883 = fressian_cljs.reader.read_next_code.call(null,reader);
code_27882 = G__27883;
continue;
}
break;
}

return cljs.core.deref.call(null,objects);
});
fressian_cljs.reader.read_open_list = (function fressian_cljs$reader$read_open_list(reader){
var objects = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
try{var code_27886 = fressian_cljs.reader.read_next_code.call(null,reader);
while(true){
if(!(cljs.core._EQ_.call(null,code_27886,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"end-collection","end-collection",1938577755))))){
cljs.core.swap_BANG_.call(null,objects,cljs.core.conj,fressian_cljs.reader.read.call(null,reader,code_27886));
} else {
var G__27887 = fressian_cljs.reader.read_next_code.call(null,reader);
code_27886 = G__27887;
continue;
}
break;
}
}catch (e27885){if((e27885 instanceof Error)){
var ex_27888 = e27885;
} else {
throw e27885;

}
}
return cljs.core.deref.call(null,objects);
});
fressian_cljs.reader.read_objects = (function fressian_cljs$reader$read_objects(reader,length){
var iter__26776__auto__ = (function fressian_cljs$reader$read_objects_$_iter__27893(s__27894){
return (new cljs.core.LazySeq(null,(function (){
var s__27894__$1 = s__27894;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27894__$1);
if(temp__4657__auto__){
var s__27894__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27894__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__27894__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__27896 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__27895 = (0);
while(true){
if((i__27895 < size__26775__auto__)){
var x = cljs.core._nth.call(null,c__26774__auto__,i__27895);
cljs.core.chunk_append.call(null,b__27896,fressian_cljs.reader.read_object.call(null,reader));

var G__27897 = (i__27895 + (1));
i__27895 = G__27897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27896),fressian_cljs$reader$read_objects_$_iter__27893.call(null,cljs.core.chunk_rest.call(null,s__27894__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27896),null);
}
} else {
var x = cljs.core.first.call(null,s__27894__$2);
return cljs.core.cons.call(null,fressian_cljs.reader.read_object.call(null,reader),fressian_cljs$reader$read_objects_$_iter__27893.call(null,cljs.core.rest.call(null,s__27894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26776__auto__.call(null,cljs.core.range.call(null,(0),length));
});
fressian_cljs.reader.internal_read_list = (function fressian_cljs$reader$internal_read_list(reader,length){
return fressian_cljs.reader.core_handlers.call(null,new cljs.core.Keyword(null,"list","list",765357683)).call(null,fressian_cljs.reader.read_objects.call(null,reader,length));
});
fressian_cljs.reader.handle_struct = (function fressian_cljs$reader$handle_struct(reader,tag,fields){
var temp__4655__auto__ = (function (){var or__26004__auto__ = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,reader),new cljs.core.Keyword(null,"handlers","handlers",79528781)),tag);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return cljs.core.get.call(null,fressian_cljs.reader.standard_extension_hadlers,tag);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
return h.call(null,reader,tag,fields);
} else {
return (new fressian_cljs.defs.TaggedObject(tag,fressian_cljs.reader.read_objects.call(null,reader,fields),null,null,null,null));
}
});
fressian_cljs.reader.validate_footer = (function fressian_cljs$reader$validate_footer(reader,length,magic_from_stream){
if(cljs.core._EQ_.call(null,magic_from_stream,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"footer-magic","footer-magic",-1426554286)))){
} else {
throw (new Error(goog.string.format("Invalid footer magic, expected %d got %d",fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"footer-magic","footer-magic",-1426554286)),magic_from_stream)));
}

var length_from_stream_27898 = fressian_cljs.reader.read_raw_int32.call(null,reader);
if(cljs.core._EQ_.call(null,length,length_from_stream_27898)){
} else {
throw (new Error(goog.string.format("Invalid footer length, expected %d got %d",length,length_from_stream_27898)));
}

return fressian_cljs.reader.reset_caches.call(null,reader);
});
fressian_cljs.reader.read = (function fressian_cljs$reader$read(reader,code){
if(cljs.core._EQ_.call(null,code,(255))){
return (-1);
} else {
if((((0) <= code)) && ((code <= (63)))){
return (code & (255));
} else {
if((((64) <= code)) && ((code <= (95)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-2-zero","int-packed-2-zero",1071077944))),(8)) + fressian_cljs.reader.read_raw_int8.call(null,reader));
} else {
if((((96) <= code)) && ((code <= (111)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-3-zero","int-packed-3-zero",-1069270840))),(16)) + fressian_cljs.reader.read_raw_int16.call(null,reader));
} else {
if((((112) <= code)) && ((code <= (115)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-4-zero","int-packed-4-zero",1146756965))),(24)) + fressian_cljs.reader.read_raw_int24.call(null,reader));
} else {
if((((116) <= code)) && ((code <= (119)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-5-zero","int-packed-5-zero",103558722))),(32)) + fressian_cljs.reader.read_raw_int32.call(null,reader));
} else {
if((((120) <= code)) && ((code <= (123)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-6-zero","int-packed-6-zero",1172771066))),(40)) + fressian_cljs.reader.read_raw_int40.call(null,reader));
} else {
if((((124) <= code)) && ((code <= (127)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-7-zero","int-packed-7-zero",-909757732))),(48)) + fressian_cljs.reader.read_raw_int48.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"put-priority-cache","put-priority-cache",-1626100040)))){
return fressian_cljs.reader.read_and_cache_object.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"get-priority-cache","get-priority-cache",409460466)))){
return fressian_cljs.reader.lookup_cache.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),fressian_cljs.reader.read_int32.call(null,reader));
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"priority-cache-packed-start","priority-cache-packed-start",-733080283)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"priority-cache-packed-start","priority-cache-packed-start",-733080283)) + (31))))){
return fressian_cljs.reader.lookup_cache.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"priority-cache-packed-start","priority-cache-packed-start",-733080283))));
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct-cache-packed-start","struct-cache-packed-start",-1769478714)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct-cache-packed-start","struct-cache-packed-start",-1769478714)) + (15))))){
var st = fressian_cljs.reader.lookup_cache.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct-cache-packed-start","struct-cache-packed-start",-1769478714))));
return fressian_cljs.reader.handle_struct.call(null,reader,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(st),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(st));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"map","map",1371690461)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"map",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"set","set",304602554)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"set",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"uuid",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"regex","regex",939488856)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"regex",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"uri",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bigint","bigint",-1710937017)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"bigint",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bigdec","bigdec",1019443956)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"bigdec",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"inst","inst",645962501)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"inst",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"sym",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"key",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-array","int-array",-1181354911)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"int[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"long-array","long-array",-1422952337)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"long[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"float-array","float-array",402506738)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"float[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"boolean-array","boolean-array",2014081856)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"boolean[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-array","double-array",-1383495801)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"double[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"object-array","object-array",-1434096880)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"Object[]",(2));
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-packed-length-start","bytes-packed-length-start",1640199646)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-packed-length-start","bytes-packed-length-start",1640199646)) + (7))))){
return fressian_cljs.reader.internal_read_bytes.call(null,reader,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-packed-length-start","bytes-packed-length-start",1640199646))));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes","bytes",1175866680)))){
return fressian_cljs.reader.internal_read_bytes.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-chunk","bytes-chunk",58155330)))){
return fressian_cljs.reader.internal_read_chunked_bytes.call(null,reader);
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) + (7))))){
return fressian_cljs.reader.internal_read_string.call(null,reader,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400))));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string","string",-1989541586)))){
return fressian_cljs.reader.internal_read_string.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-chunk","string-chunk",1505929923)))){
return fressian_cljs.reader.internal_read_chunked_string.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list-packed-length-start","list-packed-length-start",-170807054)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list-packed-length-start","list-packed-length-start",-170807054)) + (7))))){
return fressian_cljs.reader.internal_read_list.call(null,reader,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list-packed-length-start","list-packed-length-start",-170807054))));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list","list",765357683)))){
return fressian_cljs.reader.internal_read_list.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"begin-closed-list","begin-closed-list",968601935)))){
return fressian_cljs.reader.core_handlers.call(null,new cljs.core.Keyword(null,"list","list",765357683)).call(null,fressian_cljs.reader.read_closed_list.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"begin-open-list","begin-open-list",-1218035346)))){
return fressian_cljs.reader.core_handlers.call(null,new cljs.core.Keyword(null,"list","list",765357683)).call(null,fressian_cljs.reader.read_open_list.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"true","true",-1114210334)))){
return true;
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"false","false",1277713805)))){
return false;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double","double",884886883)),fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-1","double-1",1958675496)),fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-0","double-0",-1217811359))], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [code], null)))){
return fressian_cljs.reader.internal_read_double.call(null,reader,code);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"float","float",-1732389368)))){
return fressian_cljs.reader.core_handlers.call(null,new cljs.core.Keyword(null,"float","float",-1732389368)).call(null,fressian_cljs.reader.read_raw_float.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int","int",-1741416922)))){
return fressian_cljs.reader.read_raw_int64.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"null","null",-180137709)))){
return null;
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390)))){
var length = (reader.call(null,new cljs.core.Keyword(null,"index","index",-1531685915)) - (1));
var magic_from_stream = ((code << (24)) + fressian_cljs.reader.read_raw_int24.call(null,reader));
fressian_cljs.reader.validate_footer.call(null,reader,length,magic_from_stream);

return fressian_cljs.reader.read_object.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"structtype","structtype",112563241)))){
var tag = fressian_cljs.reader.read_object.call(null,reader);
var fields = fressian_cljs.reader.read_int32.call(null,reader);
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487)], null),cljs.core.conj,(new fressian_cljs.defs.StructType(tag,fields,null,null,null)));

return fressian_cljs.reader.handle_struct.call(null,reader,tag,fields);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct","struct",-1314558596)))){
var st = fressian_cljs.reader.lookup_cache.call(null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),fressian_cljs.reader.read_int32.call(null,reader));
return fressian_cljs.reader.handle_struct.call(null,reader,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(st),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(st));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"reset-caches","reset-caches",1572788555)))){
fressian_cljs.reader.reset_caches.call(null,reader);

return fressian_cljs.reader.read_object.call(null,reader);
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"any",code)));

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
}
}
}
}
}
}
}
}
});
fressian_cljs.reader.internal_read_int = (function fressian_cljs$reader$internal_read_int(reader){
var code = fressian_cljs.reader.read_next_code.call(null,reader);
if(cljs.core._EQ_.call(null,code,(255))){
return (-1);
} else {
if((((0) <= code)) && ((code <= (63)))){
return (code & (255));
} else {
if((((64) <= code)) && ((code <= (95)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-2-zero","int-packed-2-zero",1071077944))),(8)) + fressian_cljs.reader.read_raw_int8.call(null,reader));
} else {
if((((96) <= code)) && ((code <= (111)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-3-zero","int-packed-3-zero",-1069270840))),(16)) + fressian_cljs.reader.read_raw_int16.call(null,reader));
} else {
if((((112) <= code)) && ((code <= (115)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-4-zero","int-packed-4-zero",1146756965))),(24)) + fressian_cljs.reader.read_raw_int24.call(null,reader));
} else {
if((((116) <= code)) && ((code <= (119)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-5-zero","int-packed-5-zero",103558722))),(32)) + fressian_cljs.reader.read_raw_int32.call(null,reader));
} else {
if((((120) <= code)) && ((code <= (123)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-6-zero","int-packed-6-zero",1172771066))),(40)) + fressian_cljs.reader.read_raw_int40.call(null,reader));
} else {
if((((124) <= code)) && ((code <= (127)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-7-zero","int-packed-7-zero",-909757732))),(48)) + fressian_cljs.reader.read_raw_int48.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int","int",-1741416922)))){
return fressian_cljs.reader.read_raw_int64.call(null,reader);
} else {
var o = fressian_cljs.reader.read.call(null,reader,code);
if(cljs.core._EQ_.call(null,Number,cljs.core.type.call(null,o))){
return o;
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"int64",code,o)));
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
fressian_cljs.reader.read_object = (function fressian_cljs$reader$read_object(reader){
return fressian_cljs.reader.read.call(null,reader,fressian_cljs.reader.read_next_code.call(null,reader));
});

//# sourceMappingURL=reader.js.map