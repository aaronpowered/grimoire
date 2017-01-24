// Compiled by ClojureScript 1.9.229 {}
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
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
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
return cljs.core._equiv.call(null,other,this$__$1);
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
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__49943_49947 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__49944_49948 = null;
var count__49945_49949 = (0);
var i__49946_49950 = (0);
while(true){
if((i__49946_49950 < count__49945_49949)){
var k_49951 = cljs.core._nth.call(null,chunk__49944_49948,i__49946_49950);
var v_49952 = (b[k_49951]);
(a[k_49951] = v_49952);

var G__49953 = seq__49943_49947;
var G__49954 = chunk__49944_49948;
var G__49955 = count__49945_49949;
var G__49956 = (i__49946_49950 + (1));
seq__49943_49947 = G__49953;
chunk__49944_49948 = G__49954;
count__49945_49949 = G__49955;
i__49946_49950 = G__49956;
continue;
} else {
var temp__4657__auto___49957 = cljs.core.seq.call(null,seq__49943_49947);
if(temp__4657__auto___49957){
var seq__49943_49958__$1 = temp__4657__auto___49957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49943_49958__$1)){
var c__43456__auto___49959 = cljs.core.chunk_first.call(null,seq__49943_49958__$1);
var G__49960 = cljs.core.chunk_rest.call(null,seq__49943_49958__$1);
var G__49961 = c__43456__auto___49959;
var G__49962 = cljs.core.count.call(null,c__43456__auto___49959);
var G__49963 = (0);
seq__49943_49947 = G__49960;
chunk__49944_49948 = G__49961;
count__49945_49949 = G__49962;
i__49946_49950 = G__49963;
continue;
} else {
var k_49964 = cljs.core.first.call(null,seq__49943_49958__$1);
var v_49965 = (b[k_49964]);
(a[k_49964] = v_49965);

var G__49966 = cljs.core.next.call(null,seq__49943_49958__$1);
var G__49967 = null;
var G__49968 = (0);
var G__49969 = (0);
seq__49943_49947 = G__49966;
chunk__49944_49948 = G__49967;
count__49945_49949 = G__49968;
i__49946_49950 = G__49969;
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
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/MapBuilder");
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
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/VectorBuilder");
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
var args49970 = [];
var len__43720__auto___49973 = arguments.length;
var i__43721__auto___49974 = (0);
while(true){
if((i__43721__auto___49974 < len__43720__auto___49973)){
args49970.push((arguments[i__43721__auto___49974]));

var G__49975 = (i__43721__auto___49974 + (1));
i__43721__auto___49974 = G__49975;
continue;
} else {
}
break;
}

var G__49972 = args49970.length;
switch (G__49972) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49970.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__49977 = (i + (2));
var G__49978 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__49977;
ret = G__49978;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/SymbolHandler");
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
var seq__49979_49983 = cljs.core.seq.call(null,v);
var chunk__49980_49984 = null;
var count__49981_49985 = (0);
var i__49982_49986 = (0);
while(true){
if((i__49982_49986 < count__49981_49985)){
var x_49987 = cljs.core._nth.call(null,chunk__49980_49984,i__49982_49986);
ret.push(x_49987);

var G__49988 = seq__49979_49983;
var G__49989 = chunk__49980_49984;
var G__49990 = count__49981_49985;
var G__49991 = (i__49982_49986 + (1));
seq__49979_49983 = G__49988;
chunk__49980_49984 = G__49989;
count__49981_49985 = G__49990;
i__49982_49986 = G__49991;
continue;
} else {
var temp__4657__auto___49992 = cljs.core.seq.call(null,seq__49979_49983);
if(temp__4657__auto___49992){
var seq__49979_49993__$1 = temp__4657__auto___49992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49979_49993__$1)){
var c__43456__auto___49994 = cljs.core.chunk_first.call(null,seq__49979_49993__$1);
var G__49995 = cljs.core.chunk_rest.call(null,seq__49979_49993__$1);
var G__49996 = c__43456__auto___49994;
var G__49997 = cljs.core.count.call(null,c__43456__auto___49994);
var G__49998 = (0);
seq__49979_49983 = G__49995;
chunk__49980_49984 = G__49996;
count__49981_49985 = G__49997;
i__49982_49986 = G__49998;
continue;
} else {
var x_49999 = cljs.core.first.call(null,seq__49979_49993__$1);
ret.push(x_49999);

var G__50000 = cljs.core.next.call(null,seq__49979_49993__$1);
var G__50001 = null;
var G__50002 = (0);
var G__50003 = (0);
seq__49979_49983 = G__50000;
chunk__49980_49984 = G__50001;
count__49981_49985 = G__50002;
i__49982_49986 = G__50003;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/MapHandler");
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
var seq__50004_50008 = cljs.core.seq.call(null,v);
var chunk__50005_50009 = null;
var count__50006_50010 = (0);
var i__50007_50011 = (0);
while(true){
if((i__50007_50011 < count__50006_50010)){
var x_50012 = cljs.core._nth.call(null,chunk__50005_50009,i__50007_50011);
ret.push(x_50012);

var G__50013 = seq__50004_50008;
var G__50014 = chunk__50005_50009;
var G__50015 = count__50006_50010;
var G__50016 = (i__50007_50011 + (1));
seq__50004_50008 = G__50013;
chunk__50005_50009 = G__50014;
count__50006_50010 = G__50015;
i__50007_50011 = G__50016;
continue;
} else {
var temp__4657__auto___50017 = cljs.core.seq.call(null,seq__50004_50008);
if(temp__4657__auto___50017){
var seq__50004_50018__$1 = temp__4657__auto___50017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50004_50018__$1)){
var c__43456__auto___50019 = cljs.core.chunk_first.call(null,seq__50004_50018__$1);
var G__50020 = cljs.core.chunk_rest.call(null,seq__50004_50018__$1);
var G__50021 = c__43456__auto___50019;
var G__50022 = cljs.core.count.call(null,c__43456__auto___50019);
var G__50023 = (0);
seq__50004_50008 = G__50020;
chunk__50005_50009 = G__50021;
count__50006_50010 = G__50022;
i__50007_50011 = G__50023;
continue;
} else {
var x_50024 = cljs.core.first.call(null,seq__50004_50018__$1);
ret.push(x_50024);

var G__50025 = cljs.core.next.call(null,seq__50004_50018__$1);
var G__50026 = null;
var G__50027 = (0);
var G__50028 = (0);
seq__50004_50008 = G__50025;
chunk__50005_50009 = G__50026;
count__50006_50010 = G__50027;
i__50007_50011 = G__50028;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/SetHandler");
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
var seq__50029_50033 = cljs.core.seq.call(null,v);
var chunk__50030_50034 = null;
var count__50031_50035 = (0);
var i__50032_50036 = (0);
while(true){
if((i__50032_50036 < count__50031_50035)){
var x_50037 = cljs.core._nth.call(null,chunk__50030_50034,i__50032_50036);
ret.push(x_50037);

var G__50038 = seq__50029_50033;
var G__50039 = chunk__50030_50034;
var G__50040 = count__50031_50035;
var G__50041 = (i__50032_50036 + (1));
seq__50029_50033 = G__50038;
chunk__50030_50034 = G__50039;
count__50031_50035 = G__50040;
i__50032_50036 = G__50041;
continue;
} else {
var temp__4657__auto___50042 = cljs.core.seq.call(null,seq__50029_50033);
if(temp__4657__auto___50042){
var seq__50029_50043__$1 = temp__4657__auto___50042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50029_50043__$1)){
var c__43456__auto___50044 = cljs.core.chunk_first.call(null,seq__50029_50043__$1);
var G__50045 = cljs.core.chunk_rest.call(null,seq__50029_50043__$1);
var G__50046 = c__43456__auto___50044;
var G__50047 = cljs.core.count.call(null,c__43456__auto___50044);
var G__50048 = (0);
seq__50029_50033 = G__50045;
chunk__50030_50034 = G__50046;
count__50031_50035 = G__50047;
i__50032_50036 = G__50048;
continue;
} else {
var x_50049 = cljs.core.first.call(null,seq__50029_50043__$1);
ret.push(x_50049);

var G__50050 = cljs.core.next.call(null,seq__50029_50043__$1);
var G__50051 = null;
var G__50052 = (0);
var G__50053 = (0);
seq__50029_50033 = G__50050;
chunk__50030_50034 = G__50051;
count__50031_50035 = G__50052;
i__50032_50036 = G__50053;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/UUIDHandler");
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
var args50054 = [];
var len__43720__auto___50069 = arguments.length;
var i__43721__auto___50070 = (0);
while(true){
if((i__43721__auto___50070 < len__43720__auto___50069)){
args50054.push((arguments[i__43721__auto___50070]));

var G__50071 = (i__43721__auto___50070 + (1));
i__43721__auto___50070 = G__50071;
continue;
} else {
}
break;
}

var G__50056 = args50054.length;
switch (G__50056) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50054.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__50057 = obj;
G__50057.push(kfn.call(null,k),vfn.call(null,v));

return G__50057;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x50058 = cljs.core.clone.call(null,handlers);
x50058.forEach = ((function (x50058,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__50059 = cljs.core.seq.call(null,coll);
var chunk__50060 = null;
var count__50061 = (0);
var i__50062 = (0);
while(true){
if((i__50062 < count__50061)){
var vec__50063 = cljs.core._nth.call(null,chunk__50060,i__50062);
var k = cljs.core.nth.call(null,vec__50063,(0),null);
var v = cljs.core.nth.call(null,vec__50063,(1),null);
f.call(null,v,k);

var G__50073 = seq__50059;
var G__50074 = chunk__50060;
var G__50075 = count__50061;
var G__50076 = (i__50062 + (1));
seq__50059 = G__50073;
chunk__50060 = G__50074;
count__50061 = G__50075;
i__50062 = G__50076;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50059);
if(temp__4657__auto__){
var seq__50059__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50059__$1)){
var c__43456__auto__ = cljs.core.chunk_first.call(null,seq__50059__$1);
var G__50077 = cljs.core.chunk_rest.call(null,seq__50059__$1);
var G__50078 = c__43456__auto__;
var G__50079 = cljs.core.count.call(null,c__43456__auto__);
var G__50080 = (0);
seq__50059 = G__50077;
chunk__50060 = G__50078;
count__50061 = G__50079;
i__50062 = G__50080;
continue;
} else {
var vec__50066 = cljs.core.first.call(null,seq__50059__$1);
var k = cljs.core.nth.call(null,vec__50066,(0),null);
var v = cljs.core.nth.call(null,vec__50066,(1),null);
f.call(null,v,k);

var G__50081 = cljs.core.next.call(null,seq__50059__$1);
var G__50082 = null;
var G__50083 = (0);
var G__50084 = (0);
seq__50059 = G__50081;
chunk__50060 = G__50082;
count__50061 = G__50083;
i__50062 = G__50084;
continue;
}
} else {
return null;
}
}
break;
}
});})(x50058,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x50058;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
var args50085 = [];
var len__43720__auto___50091 = arguments.length;
var i__43721__auto___50092 = (0);
while(true){
if((i__43721__auto___50092 < len__43720__auto___50091)){
args50085.push((arguments[i__43721__auto___50092]));

var G__50093 = (i__43721__auto___50092 + (1));
i__43721__auto___50092 = G__50093;
continue;
} else {
}
break;
}

var G__50087 = args50085.length;
switch (G__50087) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50085.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit50088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit50088 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta50089){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta50089 = meta50089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit50088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50090,meta50089__$1){
var self__ = this;
var _50090__$1 = this;
return (new cognitect.transit.t_cognitect$transit50088(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta50089__$1));
});

cognitect.transit.t_cognitect$transit50088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50090){
var self__ = this;
var _50090__$1 = this;
return self__.meta50089;
});

cognitect.transit.t_cognitect$transit50088.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit50088.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit50088.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit50088.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit50088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta50089","meta50089",672129606,null)], null);
});

cognitect.transit.t_cognitect$transit50088.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit50088.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit50088";

cognitect.transit.t_cognitect$transit50088.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cognitect.transit/t_cognitect$transit50088");
});

cognitect.transit.__GT_t_cognitect$transit50088 = (function cognitect$transit$__GT_t_cognitect$transit50088(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta50089){
return (new cognitect.transit.t_cognitect$transit50088(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta50089));
});

}

return (new cognitect.transit.t_cognitect$transit50088(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__42645__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map