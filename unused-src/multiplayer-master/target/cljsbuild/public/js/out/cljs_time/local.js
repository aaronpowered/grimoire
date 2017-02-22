// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs_time.local');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('goog.date.DateTime');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34763){
var vec__34764 = p__34763;
var k = cljs.core.nth.call(null,vec__34764,(0),null);
var f = cljs.core.nth.call(null,vec__34764,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f)),new cljs.core.Keyword("fmt","formatter","fmt/formatter",-483947944)))?cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),((function (vec__34764,k,f){
return (function (p1__34762_SHARP_){
return cljs_time.core.to_default_time_zone.call(null,p1__34762_SHARP_);
});})(vec__34764,k,f))
):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now.call(null);
});

/**
 * @interface
 */
cljs_time.local.ILocalCoerce = function(){};

/**
 * convert `obj` to a local goog.date
 *                           DateTime instance retaining time fields.
 */
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 == null)))){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
var x__26659__auto__ = (((obj == null))?null:obj);
var m__26660__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,obj);
} else {
var m__26660__auto____$1 = (cljs_time.local.to_local_date_time["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalCoerce.to-local-date-time",obj);
}
}
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first.call(null,(function (){var iter__26776__auto__ = (function cljs_time$local$from_local_string_$_iter__34773(s__34774){
return (new cljs.core.LazySeq(null,(function (){
var s__34774__$1 = s__34774;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34774__$1);
if(temp__4657__auto__){
var s__34774__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34774__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__34774__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__34776 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__34775 = (0);
while(true){
if((i__34775 < size__26775__auto__)){
var f = cljs.core._nth.call(null,c__26774__auto__,i__34775);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e34779){if((e34779 instanceof Error)){
var _ = e34779;
return null;
} else {
throw e34779;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__34776,d);

var G__34781 = (i__34775 + (1));
i__34775 = G__34781;
continue;
} else {
var G__34782 = (i__34775 + (1));
i__34775 = G__34782;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34776),cljs_time$local$from_local_string_$_iter__34773.call(null,cljs.core.chunk_rest.call(null,s__34774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34776),null);
}
} else {
var f = cljs.core.first.call(null,s__34774__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e34780){if((e34780 instanceof Error)){
var _ = e34780;
return null;
} else {
throw e34780;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$local$from_local_string_$_iter__34773.call(null,cljs.core.rest.call(null,s__34774__$2)));
} else {
var G__34783 = cljs.core.rest.call(null,s__34774__$2);
s__34774__$1 = G__34783;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26776__auto__.call(null,cljs.core.vals.call(null,cljs_time.local._STAR_local_formatters_STAR_));
})());
});
(cljs_time.local.ILocalCoerce["null"] = true);

(cljs_time.local.to_local_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$local$ILocalCoerce$ = true;

Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,date__$1));
});

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = true;

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,date_time__$1);
});

(cljs_time.local.ILocalCoerce["number"] = true);

(cljs_time.local.to_local_date_time["number"] = (function (long$){
return cljs_time.local.as_local_date_time_from_time_zone.call(null,long$);
}));

(cljs_time.local.ILocalCoerce["string"] = true);

(cljs_time.local.to_local_date_time["string"] = (function (string){
return cljs_time.local.from_local_string.call(null,string);
}));
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__4657__auto__ = cljs_time.local.to_local_date_time.call(null,obj);
if(cljs.core.truth_(temp__4657__auto__)){
var dt = temp__4657__auto__;
var temp__4657__auto____$1 = format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_);
if(cljs.core.truth_(temp__4657__auto____$1)){
var fmt = temp__4657__auto____$1;
return cljs_time.format.unparse.call(null,fmt,dt);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=local.js.map