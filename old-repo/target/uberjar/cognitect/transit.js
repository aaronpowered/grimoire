// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash(this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__12771_12775 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__12772_12776 = null;
var count__12773_12777 = (0);
var i__12774_12778 = (0);
while(true){
if((i__12774_12778 < count__12773_12777)){
var k_12779 = chunk__12772_12776.cljs$core$IIndexed$_nth$arity$2(null,i__12774_12778);
var v_12780 = (b[k_12779]);
(a[k_12779] = v_12780);

var G__12781 = seq__12771_12775;
var G__12782 = chunk__12772_12776;
var G__12783 = count__12773_12777;
var G__12784 = (i__12774_12778 + (1));
seq__12771_12775 = G__12781;
chunk__12772_12776 = G__12782;
count__12773_12777 = G__12783;
i__12774_12778 = G__12784;
continue;
} else {
var temp__4657__auto___12785 = cljs.core.seq(seq__12771_12775);
if(temp__4657__auto___12785){
var seq__12771_12786__$1 = temp__4657__auto___12785;
if(cljs.core.chunked_seq_QMARK_(seq__12771_12786__$1)){
var c__7225__auto___12787 = cljs.core.chunk_first(seq__12771_12786__$1);
var G__12788 = cljs.core.chunk_rest(seq__12771_12786__$1);
var G__12789 = c__7225__auto___12787;
var G__12790 = cljs.core.count(c__7225__auto___12787);
var G__12791 = (0);
seq__12771_12775 = G__12788;
chunk__12772_12776 = G__12789;
count__12773_12777 = G__12790;
i__12774_12778 = G__12791;
continue;
} else {
var k_12792 = cljs.core.first(seq__12771_12786__$1);
var v_12793 = (b[k_12792]);
(a[k_12792] = v_12793);

var G__12794 = cljs.core.next(seq__12771_12786__$1);
var G__12795 = null;
var G__12796 = (0);
var G__12797 = (0);
seq__12771_12775 = G__12794;
chunk__12772_12776 = G__12795;
count__12773_12777 = G__12796;
i__12774_12778 = G__12797;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args12798 = [];
var len__7489__auto___12803 = arguments.length;
var i__7490__auto___12804 = (0);
while(true){
if((i__7490__auto___12804 < len__7489__auto___12803)){
args12798.push((arguments[i__7490__auto___12804]));

var G__12805 = (i__7490__auto___12804 + (1));
i__7490__auto___12804 = G__12805;
continue;
} else {
}
break;
}

var G__12800 = args12798.length;
switch (G__12800) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12798.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__12801 = cljs.core.name(type);
var G__12802 = cognitect.transit.opts_merge(({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__12801){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12801))
,":",((function (G__12801){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12801))
,"set",((function (G__12801){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__12801))
,"list",((function (G__12801){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__12801))
,"cmap",((function (G__12801){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12807 = (i + (2));
var G__12808 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__12807;
ret = G__12808;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__12801))
], null),cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$handlers)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__12801,G__12802) : com.cognitect.transit.reader.call(null,G__12801,G__12802));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12809_12813 = cljs.core.seq(v);
var chunk__12810_12814 = null;
var count__12811_12815 = (0);
var i__12812_12816 = (0);
while(true){
if((i__12812_12816 < count__12811_12815)){
var x_12817 = chunk__12810_12814.cljs$core$IIndexed$_nth$arity$2(null,i__12812_12816);
ret.push(x_12817);

var G__12818 = seq__12809_12813;
var G__12819 = chunk__12810_12814;
var G__12820 = count__12811_12815;
var G__12821 = (i__12812_12816 + (1));
seq__12809_12813 = G__12818;
chunk__12810_12814 = G__12819;
count__12811_12815 = G__12820;
i__12812_12816 = G__12821;
continue;
} else {
var temp__4657__auto___12822 = cljs.core.seq(seq__12809_12813);
if(temp__4657__auto___12822){
var seq__12809_12823__$1 = temp__4657__auto___12822;
if(cljs.core.chunked_seq_QMARK_(seq__12809_12823__$1)){
var c__7225__auto___12824 = cljs.core.chunk_first(seq__12809_12823__$1);
var G__12825 = cljs.core.chunk_rest(seq__12809_12823__$1);
var G__12826 = c__7225__auto___12824;
var G__12827 = cljs.core.count(c__7225__auto___12824);
var G__12828 = (0);
seq__12809_12813 = G__12825;
chunk__12810_12814 = G__12826;
count__12811_12815 = G__12827;
i__12812_12816 = G__12828;
continue;
} else {
var x_12829 = cljs.core.first(seq__12809_12823__$1);
ret.push(x_12829);

var G__12830 = cljs.core.next(seq__12809_12823__$1);
var G__12831 = null;
var G__12832 = (0);
var G__12833 = (0);
seq__12809_12813 = G__12830;
chunk__12810_12814 = G__12831;
count__12811_12815 = G__12832;
i__12812_12816 = G__12833;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12834_12838 = cljs.core.seq(v);
var chunk__12835_12839 = null;
var count__12836_12840 = (0);
var i__12837_12841 = (0);
while(true){
if((i__12837_12841 < count__12836_12840)){
var x_12842 = chunk__12835_12839.cljs$core$IIndexed$_nth$arity$2(null,i__12837_12841);
ret.push(x_12842);

var G__12843 = seq__12834_12838;
var G__12844 = chunk__12835_12839;
var G__12845 = count__12836_12840;
var G__12846 = (i__12837_12841 + (1));
seq__12834_12838 = G__12843;
chunk__12835_12839 = G__12844;
count__12836_12840 = G__12845;
i__12837_12841 = G__12846;
continue;
} else {
var temp__4657__auto___12847 = cljs.core.seq(seq__12834_12838);
if(temp__4657__auto___12847){
var seq__12834_12848__$1 = temp__4657__auto___12847;
if(cljs.core.chunked_seq_QMARK_(seq__12834_12848__$1)){
var c__7225__auto___12849 = cljs.core.chunk_first(seq__12834_12848__$1);
var G__12850 = cljs.core.chunk_rest(seq__12834_12848__$1);
var G__12851 = c__7225__auto___12849;
var G__12852 = cljs.core.count(c__7225__auto___12849);
var G__12853 = (0);
seq__12834_12838 = G__12850;
chunk__12835_12839 = G__12851;
count__12836_12840 = G__12852;
i__12837_12841 = G__12853;
continue;
} else {
var x_12854 = cljs.core.first(seq__12834_12848__$1);
ret.push(x_12854);

var G__12855 = cljs.core.next(seq__12834_12848__$1);
var G__12856 = null;
var G__12857 = (0);
var G__12858 = (0);
seq__12834_12838 = G__12855;
chunk__12835_12839 = G__12856;
count__12836_12840 = G__12857;
i__12837_12841 = G__12858;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12859_12863 = cljs.core.seq(v);
var chunk__12860_12864 = null;
var count__12861_12865 = (0);
var i__12862_12866 = (0);
while(true){
if((i__12862_12866 < count__12861_12865)){
var x_12867 = chunk__12860_12864.cljs$core$IIndexed$_nth$arity$2(null,i__12862_12866);
ret.push(x_12867);

var G__12868 = seq__12859_12863;
var G__12869 = chunk__12860_12864;
var G__12870 = count__12861_12865;
var G__12871 = (i__12862_12866 + (1));
seq__12859_12863 = G__12868;
chunk__12860_12864 = G__12869;
count__12861_12865 = G__12870;
i__12862_12866 = G__12871;
continue;
} else {
var temp__4657__auto___12872 = cljs.core.seq(seq__12859_12863);
if(temp__4657__auto___12872){
var seq__12859_12873__$1 = temp__4657__auto___12872;
if(cljs.core.chunked_seq_QMARK_(seq__12859_12873__$1)){
var c__7225__auto___12874 = cljs.core.chunk_first(seq__12859_12873__$1);
var G__12875 = cljs.core.chunk_rest(seq__12859_12873__$1);
var G__12876 = c__7225__auto___12874;
var G__12877 = cljs.core.count(c__7225__auto___12874);
var G__12878 = (0);
seq__12859_12863 = G__12875;
chunk__12860_12864 = G__12876;
count__12861_12865 = G__12877;
i__12862_12866 = G__12878;
continue;
} else {
var x_12879 = cljs.core.first(seq__12859_12873__$1);
ret.push(x_12879);

var G__12880 = cljs.core.next(seq__12859_12873__$1);
var G__12881 = null;
var G__12882 = (0);
var G__12883 = (0);
seq__12859_12863 = G__12880;
chunk__12860_12864 = G__12881;
count__12861_12865 = G__12882;
i__12862_12866 = G__12883;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args12884 = [];
var len__7489__auto___12901 = arguments.length;
var i__7490__auto___12902 = (0);
while(true){
if((i__7490__auto___12902 < len__7489__auto___12901)){
args12884.push((arguments[i__7490__auto___12902]));

var G__12903 = (i__7490__auto___12902 + (1));
i__7490__auto___12902 = G__12903;
continue;
} else {
}
break;
}

var G__12886 = args12884.length;
switch (G__12886) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12884.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__12887 = cljs.core.name(type);
var G__12888 = cognitect.transit.opts_merge(({"objectBuilder": ((function (G__12887,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__12887,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12889 = obj;
G__12889.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__12889;
});})(G__12887,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__12887,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12890 = cljs.core.clone(handlers);
x12890.forEach = ((function (x12890,G__12887,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12891 = cljs.core.seq(coll);
var chunk__12892 = null;
var count__12893 = (0);
var i__12894 = (0);
while(true){
if((i__12894 < count__12893)){
var vec__12895 = chunk__12892.cljs$core$IIndexed$_nth$arity$2(null,i__12894);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12895,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__12905 = seq__12891;
var G__12906 = chunk__12892;
var G__12907 = count__12893;
var G__12908 = (i__12894 + (1));
seq__12891 = G__12905;
chunk__12892 = G__12906;
count__12893 = G__12907;
i__12894 = G__12908;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12891);
if(temp__4657__auto__){
var seq__12891__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12891__$1)){
var c__7225__auto__ = cljs.core.chunk_first(seq__12891__$1);
var G__12909 = cljs.core.chunk_rest(seq__12891__$1);
var G__12910 = c__7225__auto__;
var G__12911 = cljs.core.count(c__7225__auto__);
var G__12912 = (0);
seq__12891 = G__12909;
chunk__12892 = G__12910;
count__12893 = G__12911;
i__12894 = G__12912;
continue;
} else {
var vec__12898 = cljs.core.first(seq__12891__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12898,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__12913 = cljs.core.next(seq__12891__$1);
var G__12914 = null;
var G__12915 = (0);
var G__12916 = (0);
seq__12891 = G__12913;
chunk__12892 = G__12914;
count__12893 = G__12915;
i__12894 = G__12916;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12890,G__12887,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12890;
})(), "unpack": ((function (G__12887,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__12887,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$handlers)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__12887,G__12888) : com.cognitect.transit.writer.call(null,G__12887,G__12888));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args12917 = [];
var len__7489__auto___12923 = arguments.length;
var i__7490__auto___12924 = (0);
while(true){
if((i__7490__auto___12924 < len__7489__auto___12923)){
args12917.push((arguments[i__7490__auto___12924]));

var G__12925 = (i__7490__auto___12924 + (1));
i__7490__auto___12924 = G__12925;
continue;
} else {
}
break;
}

var G__12919 = args12917.length;
switch (G__12919) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12917.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit12920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit12920 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12921){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12921 = meta12921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit12920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12922,meta12921__$1){
var self__ = this;
var _12922__$1 = this;
return (new cognitect.transit.t_cognitect$transit12920(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12921__$1));
});

cognitect.transit.t_cognitect$transit12920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12922){
var self__ = this;
var _12922__$1 = this;
return self__.meta12921;
});

cognitect.transit.t_cognitect$transit12920.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit12920.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit12920.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12920.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag_DASH_fn,cljs.core.cst$sym$rep_DASH_fn,cljs.core.cst$sym$str_DASH_rep_DASH_fn,cljs.core.cst$sym$verbose_DASH_handler_DASH_fn,cljs.core.cst$sym$meta12921], null);
});

cognitect.transit.t_cognitect$transit12920.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit12920.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit12920";

cognitect.transit.t_cognitect$transit12920.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cognitect.transit/t_cognitect$transit12920");
});

cognitect.transit.__GT_t_cognitect$transit12920 = (function cognitect$transit$__GT_t_cognitect$transit12920(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12921){
return (new cognitect.transit.t_cognitect$transit12920(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12921));
});

}

return (new cognitect.transit.t_cognitect$transit12920(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(tag,rep) : com.cognitect.transit.types.taggedValue.call(null,tag,rep));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isTaggedValue.call(null,x));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return (com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.intValue.call(null,s));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isInteger.call(null,x));
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigInteger.call(null,s));
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigInteger.call(null,x));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigDecimalValue.call(null,s));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigDecimal.call(null,x));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uri.call(null,s));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isURI.call(null,x));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uuid.call(null,s));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6414__auto__ = (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isUUID.call(null,x));
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.binary.call(null,s));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBinary.call(null,x));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.quoted.call(null,x));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isQuoted.call(null,x));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.link.call(null,x));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isLink.call(null,x));
});
