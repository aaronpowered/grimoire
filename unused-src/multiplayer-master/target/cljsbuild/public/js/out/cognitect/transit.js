// Compiled by ClojureScript 1.7.228 {}
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
var seq__28122_28126 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__28123_28127 = null;
var count__28124_28128 = (0);
var i__28125_28129 = (0);
while(true){
if((i__28125_28129 < count__28124_28128)){
var k_28130 = cljs.core._nth.call(null,chunk__28123_28127,i__28125_28129);
var v_28131 = (b[k_28130]);
(a[k_28130] = v_28131);

var G__28132 = seq__28122_28126;
var G__28133 = chunk__28123_28127;
var G__28134 = count__28124_28128;
var G__28135 = (i__28125_28129 + (1));
seq__28122_28126 = G__28132;
chunk__28123_28127 = G__28133;
count__28124_28128 = G__28134;
i__28125_28129 = G__28135;
continue;
} else {
var temp__4657__auto___28136 = cljs.core.seq.call(null,seq__28122_28126);
if(temp__4657__auto___28136){
var seq__28122_28137__$1 = temp__4657__auto___28136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28122_28137__$1)){
var c__26807__auto___28138 = cljs.core.chunk_first.call(null,seq__28122_28137__$1);
var G__28139 = cljs.core.chunk_rest.call(null,seq__28122_28137__$1);
var G__28140 = c__26807__auto___28138;
var G__28141 = cljs.core.count.call(null,c__26807__auto___28138);
var G__28142 = (0);
seq__28122_28126 = G__28139;
chunk__28123_28127 = G__28140;
count__28124_28128 = G__28141;
i__28125_28129 = G__28142;
continue;
} else {
var k_28143 = cljs.core.first.call(null,seq__28122_28137__$1);
var v_28144 = (b[k_28143]);
(a[k_28143] = v_28144);

var G__28145 = cljs.core.next.call(null,seq__28122_28137__$1);
var G__28146 = null;
var G__28147 = (0);
var G__28148 = (0);
seq__28122_28126 = G__28145;
chunk__28123_28127 = G__28146;
count__28124_28128 = G__28147;
i__28125_28129 = G__28148;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/VectorBuilder");
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
var args28149 = [];
var len__27062__auto___28152 = arguments.length;
var i__27063__auto___28153 = (0);
while(true){
if((i__27063__auto___28153 < len__27062__auto___28152)){
args28149.push((arguments[i__27063__auto___28153]));

var G__28154 = (i__27063__auto___28153 + (1));
i__27063__auto___28153 = G__28154;
continue;
} else {
}
break;
}

var G__28151 = args28149.length;
switch (G__28151) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28149.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
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
var G__28156 = (i + (2));
var G__28157 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__28156;
ret = G__28157;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/SymbolHandler");
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
var seq__28158_28162 = cljs.core.seq.call(null,v);
var chunk__28159_28163 = null;
var count__28160_28164 = (0);
var i__28161_28165 = (0);
while(true){
if((i__28161_28165 < count__28160_28164)){
var x_28166 = cljs.core._nth.call(null,chunk__28159_28163,i__28161_28165);
ret.push(x_28166);

var G__28167 = seq__28158_28162;
var G__28168 = chunk__28159_28163;
var G__28169 = count__28160_28164;
var G__28170 = (i__28161_28165 + (1));
seq__28158_28162 = G__28167;
chunk__28159_28163 = G__28168;
count__28160_28164 = G__28169;
i__28161_28165 = G__28170;
continue;
} else {
var temp__4657__auto___28171 = cljs.core.seq.call(null,seq__28158_28162);
if(temp__4657__auto___28171){
var seq__28158_28172__$1 = temp__4657__auto___28171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28158_28172__$1)){
var c__26807__auto___28173 = cljs.core.chunk_first.call(null,seq__28158_28172__$1);
var G__28174 = cljs.core.chunk_rest.call(null,seq__28158_28172__$1);
var G__28175 = c__26807__auto___28173;
var G__28176 = cljs.core.count.call(null,c__26807__auto___28173);
var G__28177 = (0);
seq__28158_28162 = G__28174;
chunk__28159_28163 = G__28175;
count__28160_28164 = G__28176;
i__28161_28165 = G__28177;
continue;
} else {
var x_28178 = cljs.core.first.call(null,seq__28158_28172__$1);
ret.push(x_28178);

var G__28179 = cljs.core.next.call(null,seq__28158_28172__$1);
var G__28180 = null;
var G__28181 = (0);
var G__28182 = (0);
seq__28158_28162 = G__28179;
chunk__28159_28163 = G__28180;
count__28160_28164 = G__28181;
i__28161_28165 = G__28182;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/MapHandler");
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
var seq__28183_28187 = cljs.core.seq.call(null,v);
var chunk__28184_28188 = null;
var count__28185_28189 = (0);
var i__28186_28190 = (0);
while(true){
if((i__28186_28190 < count__28185_28189)){
var x_28191 = cljs.core._nth.call(null,chunk__28184_28188,i__28186_28190);
ret.push(x_28191);

var G__28192 = seq__28183_28187;
var G__28193 = chunk__28184_28188;
var G__28194 = count__28185_28189;
var G__28195 = (i__28186_28190 + (1));
seq__28183_28187 = G__28192;
chunk__28184_28188 = G__28193;
count__28185_28189 = G__28194;
i__28186_28190 = G__28195;
continue;
} else {
var temp__4657__auto___28196 = cljs.core.seq.call(null,seq__28183_28187);
if(temp__4657__auto___28196){
var seq__28183_28197__$1 = temp__4657__auto___28196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28183_28197__$1)){
var c__26807__auto___28198 = cljs.core.chunk_first.call(null,seq__28183_28197__$1);
var G__28199 = cljs.core.chunk_rest.call(null,seq__28183_28197__$1);
var G__28200 = c__26807__auto___28198;
var G__28201 = cljs.core.count.call(null,c__26807__auto___28198);
var G__28202 = (0);
seq__28183_28187 = G__28199;
chunk__28184_28188 = G__28200;
count__28185_28189 = G__28201;
i__28186_28190 = G__28202;
continue;
} else {
var x_28203 = cljs.core.first.call(null,seq__28183_28197__$1);
ret.push(x_28203);

var G__28204 = cljs.core.next.call(null,seq__28183_28197__$1);
var G__28205 = null;
var G__28206 = (0);
var G__28207 = (0);
seq__28183_28187 = G__28204;
chunk__28184_28188 = G__28205;
count__28185_28189 = G__28206;
i__28186_28190 = G__28207;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/SetHandler");
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
var seq__28208_28212 = cljs.core.seq.call(null,v);
var chunk__28209_28213 = null;
var count__28210_28214 = (0);
var i__28211_28215 = (0);
while(true){
if((i__28211_28215 < count__28210_28214)){
var x_28216 = cljs.core._nth.call(null,chunk__28209_28213,i__28211_28215);
ret.push(x_28216);

var G__28217 = seq__28208_28212;
var G__28218 = chunk__28209_28213;
var G__28219 = count__28210_28214;
var G__28220 = (i__28211_28215 + (1));
seq__28208_28212 = G__28217;
chunk__28209_28213 = G__28218;
count__28210_28214 = G__28219;
i__28211_28215 = G__28220;
continue;
} else {
var temp__4657__auto___28221 = cljs.core.seq.call(null,seq__28208_28212);
if(temp__4657__auto___28221){
var seq__28208_28222__$1 = temp__4657__auto___28221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28208_28222__$1)){
var c__26807__auto___28223 = cljs.core.chunk_first.call(null,seq__28208_28222__$1);
var G__28224 = cljs.core.chunk_rest.call(null,seq__28208_28222__$1);
var G__28225 = c__26807__auto___28223;
var G__28226 = cljs.core.count.call(null,c__26807__auto___28223);
var G__28227 = (0);
seq__28208_28212 = G__28224;
chunk__28209_28213 = G__28225;
count__28210_28214 = G__28226;
i__28211_28215 = G__28227;
continue;
} else {
var x_28228 = cljs.core.first.call(null,seq__28208_28222__$1);
ret.push(x_28228);

var G__28229 = cljs.core.next.call(null,seq__28208_28222__$1);
var G__28230 = null;
var G__28231 = (0);
var G__28232 = (0);
seq__28208_28212 = G__28229;
chunk__28209_28213 = G__28230;
count__28210_28214 = G__28231;
i__28211_28215 = G__28232;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/UUIDHandler");
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
var args28233 = [];
var len__27062__auto___28244 = arguments.length;
var i__27063__auto___28245 = (0);
while(true){
if((i__27063__auto___28245 < len__27062__auto___28244)){
args28233.push((arguments[i__27063__auto___28245]));

var G__28246 = (i__27063__auto___28245 + (1));
i__27063__auto___28245 = G__28246;
continue;
} else {
}
break;
}

var G__28235 = args28233.length;
switch (G__28235) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28233.length)].join('')));

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
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__28236 = obj;
G__28236.push(kfn.call(null,k),vfn.call(null,v));

return G__28236;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x28237 = cljs.core.clone.call(null,handlers);
x28237.forEach = ((function (x28237,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__28238 = cljs.core.seq.call(null,coll);
var chunk__28239 = null;
var count__28240 = (0);
var i__28241 = (0);
while(true){
if((i__28241 < count__28240)){
var vec__28242 = cljs.core._nth.call(null,chunk__28239,i__28241);
var k = cljs.core.nth.call(null,vec__28242,(0),null);
var v = cljs.core.nth.call(null,vec__28242,(1),null);
f.call(null,v,k);

var G__28248 = seq__28238;
var G__28249 = chunk__28239;
var G__28250 = count__28240;
var G__28251 = (i__28241 + (1));
seq__28238 = G__28248;
chunk__28239 = G__28249;
count__28240 = G__28250;
i__28241 = G__28251;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28238);
if(temp__4657__auto__){
var seq__28238__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28238__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__28238__$1);
var G__28252 = cljs.core.chunk_rest.call(null,seq__28238__$1);
var G__28253 = c__26807__auto__;
var G__28254 = cljs.core.count.call(null,c__26807__auto__);
var G__28255 = (0);
seq__28238 = G__28252;
chunk__28239 = G__28253;
count__28240 = G__28254;
i__28241 = G__28255;
continue;
} else {
var vec__28243 = cljs.core.first.call(null,seq__28238__$1);
var k = cljs.core.nth.call(null,vec__28243,(0),null);
var v = cljs.core.nth.call(null,vec__28243,(1),null);
f.call(null,v,k);

var G__28256 = cljs.core.next.call(null,seq__28238__$1);
var G__28257 = null;
var G__28258 = (0);
var G__28259 = (0);
seq__28238 = G__28256;
chunk__28239 = G__28257;
count__28240 = G__28258;
i__28241 = G__28259;
continue;
}
} else {
return null;
}
}
break;
}
});})(x28237,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x28237;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
var args28260 = [];
var len__27062__auto___28266 = arguments.length;
var i__27063__auto___28267 = (0);
while(true){
if((i__27063__auto___28267 < len__27062__auto___28266)){
args28260.push((arguments[i__27063__auto___28267]));

var G__28268 = (i__27063__auto___28267 + (1));
i__27063__auto___28267 = G__28268;
continue;
} else {
}
break;
}

var G__28262 = args28260.length;
switch (G__28262) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28260.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit28263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit28263 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta28264){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta28264 = meta28264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit28263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28265,meta28264__$1){
var self__ = this;
var _28265__$1 = this;
return (new cognitect.transit.t_cognitect$transit28263(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta28264__$1));
});

cognitect.transit.t_cognitect$transit28263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28265){
var self__ = this;
var _28265__$1 = this;
return self__.meta28264;
});

cognitect.transit.t_cognitect$transit28263.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28263.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28263.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28263.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta28264","meta28264",1838108385,null)], null);
});

cognitect.transit.t_cognitect$transit28263.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit28263.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit28263";

cognitect.transit.t_cognitect$transit28263.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cognitect.transit/t_cognitect$transit28263");
});

cognitect.transit.__GT_t_cognitect$transit28263 = (function cognitect$transit$__GT_t_cognitect$transit28263(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28264){
return (new cognitect.transit.t_cognitect$transit28263(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28264));
});

}

return (new cognitect.transit.t_cognitect$transit28263(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__26004__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
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