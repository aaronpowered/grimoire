// Compiled by ClojureScript 1.7.228 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__26659__auto__ = (((_ == null))?null:_);
var m__26660__auto__ = (chord.format.freeze[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,_,obj);
} else {
var m__26660__auto____$1 = (chord.format.freeze["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__26659__auto__ = (((_ == null))?null:_);
var m__26660__auto__ = (chord.format.thaw[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,_,s);
} else {
var m__26660__auto____$1 = (chord.format.thaw["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__26917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26921__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26921__auto__,method_table__26917__auto__,prefer_table__26918__auto__,method_cache__26919__auto__,cached_hierarchy__26920__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t_chord$format33636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33636 = (function (_,meta33637){
this._ = _;
this.meta33637 = meta33637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33638,meta33637__$1){
var self__ = this;
var _33638__$1 = this;
return (new chord.format.t_chord$format33636(self__._,meta33637__$1));
});

chord.format.t_chord$format33636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33638){
var self__ = this;
var _33638__$1 = this;
return self__.meta33637;
});

chord.format.t_chord$format33636.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format33636.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format33636.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format33636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33637","meta33637",-499928669,null)], null);
});

chord.format.t_chord$format33636.cljs$lang$type = true;

chord.format.t_chord$format33636.cljs$lang$ctorStr = "chord.format/t_chord$format33636";

chord.format.t_chord$format33636.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"chord.format/t_chord$format33636");
});

chord.format.__GT_t_chord$format33636 = (function chord$format$__GT_t_chord$format33636(___$1,meta33637){
return (new chord.format.t_chord$format33636(___$1,meta33637));
});

}

return (new chord.format.t_chord$format33636(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t_chord$format33639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33639 = (function (_,meta33640){
this._ = _;
this.meta33640 = meta33640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33641,meta33640__$1){
var self__ = this;
var _33641__$1 = this;
return (new chord.format.t_chord$format33639(self__._,meta33640__$1));
});

chord.format.t_chord$format33639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33641){
var self__ = this;
var _33641__$1 = this;
return self__.meta33640;
});

chord.format.t_chord$format33639.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format33639.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format33639.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format33639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33640","meta33640",-1367641448,null)], null);
});

chord.format.t_chord$format33639.cljs$lang$type = true;

chord.format.t_chord$format33639.cljs$lang$ctorStr = "chord.format/t_chord$format33639";

chord.format.t_chord$format33639.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"chord.format/t_chord$format33639");
});

chord.format.__GT_t_chord$format33639 = (function chord$format$__GT_t_chord$format33639(___$1,meta33640){
return (new chord.format.t_chord$format33639(___$1,meta33640));
});

}

return (new chord.format.t_chord$format33639(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t_chord$format33642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33642 = (function (opts,json_formatter,meta33643){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta33643 = meta33643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_33644,meta33643__$1){
var self__ = this;
var _33644__$1 = this;
return (new chord.format.t_chord$format33642(self__.opts,self__.json_formatter,meta33643__$1));
});})(json_formatter))
;

chord.format.t_chord$format33642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_33644){
var self__ = this;
var _33644__$1 = this;
return self__.meta33643;
});})(json_formatter))
;

chord.format.t_chord$format33642.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format33642.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format33642.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format33642.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta33643","meta33643",1402163517,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format33642.cljs$lang$type = true;

chord.format.t_chord$format33642.cljs$lang$ctorStr = "chord.format/t_chord$format33642";

chord.format.t_chord$format33642.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"chord.format/t_chord$format33642");
});})(json_formatter))
;

chord.format.__GT_t_chord$format33642 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format33642(opts__$1,json_formatter__$1,meta33643){
return (new chord.format.t_chord$format33642(opts__$1,json_formatter__$1,meta33643));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format33642(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t_chord$format33645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33645 = (function (_,meta33646){
this._ = _;
this.meta33646 = meta33646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33647,meta33646__$1){
var self__ = this;
var _33647__$1 = this;
return (new chord.format.t_chord$format33645(self__._,meta33646__$1));
});

chord.format.t_chord$format33645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33647){
var self__ = this;
var _33647__$1 = this;
return self__.meta33646;
});

chord.format.t_chord$format33645.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format33645.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format33645.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format33645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33646","meta33646",-314948612,null)], null);
});

chord.format.t_chord$format33645.cljs$lang$type = true;

chord.format.t_chord$format33645.cljs$lang$ctorStr = "chord.format/t_chord$format33645";

chord.format.t_chord$format33645.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"chord.format/t_chord$format33645");
});

chord.format.__GT_t_chord$format33645 = (function chord$format$__GT_t_chord$format33645(___$1,meta33646){
return (new chord.format.t_chord$format33645(___$1,meta33646));
});

}

return (new chord.format.t_chord$format33645(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t_chord$format33648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33648 = (function (_,meta33649){
this._ = _;
this.meta33649 = meta33649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33650,meta33649__$1){
var self__ = this;
var _33650__$1 = this;
return (new chord.format.t_chord$format33648(self__._,meta33649__$1));
});

chord.format.t_chord$format33648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33650){
var self__ = this;
var _33650__$1 = this;
return self__.meta33649;
});

chord.format.t_chord$format33648.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format33648.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format33648.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format33648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33649","meta33649",637761193,null)], null);
});

chord.format.t_chord$format33648.cljs$lang$type = true;

chord.format.t_chord$format33648.cljs$lang$ctorStr = "chord.format/t_chord$format33648";

chord.format.t_chord$format33648.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"chord.format/t_chord$format33648");
});

chord.format.__GT_t_chord$format33648 = (function chord$format$__GT_t_chord$format33648(___$1,meta33649){
return (new chord.format.t_chord$format33648(___$1,meta33649));
});

}

return (new chord.format.t_chord$format33648(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__33652,p__33653){
var map__33662 = p__33652;
var map__33662__$1 = ((((!((map__33662 == null)))?((((map__33662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33662):map__33662);
var read_ch = cljs.core.get.call(null,map__33662__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__33662__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__33663 = p__33653;
var map__33663__$1 = ((((!((map__33663 == null)))?((((map__33663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33663):map__33663);
var opts = map__33663__$1;
var format = cljs.core.get.call(null,map__33663__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__33662,map__33662__$1,read_ch,write_ch,map__33663,map__33663__$1,opts,format){
return (function (p__33666){
var map__33667 = p__33666;
var map__33667__$1 = ((((!((map__33667 == null)))?((((map__33667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33667):map__33667);
var message = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e33669){if((e33669 instanceof Error)){
var e = e33669;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e33669;

}
}});})(fmtr,map__33662,map__33662__$1,read_ch,write_ch,map__33663,map__33663__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__33662,map__33662__$1,read_ch,write_ch,map__33663,map__33663__$1,opts,format){
return (function (p1__33651_SHARP_){
if(cljs.core.truth_(p1__33651_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__33651_SHARP_);
} else {
return null;
}
});})(fmtr,map__33662,map__33662__$1,read_ch,write_ch,map__33663,map__33663__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map