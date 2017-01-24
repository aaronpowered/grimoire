// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version(2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
}
taoensso.sente.expected = (function taoensso$sente$expected(expected__$1,x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expected,expected__$1,cljs.core.cst$kw$actual,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$value,x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$vector,x)], null);
} else {
if(cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__32728 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32728,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32728,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_id_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$keyword,ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$unnamespaced_DASH_id,taoensso.sente.expected(cljs.core.cst$kw$namespaced_DASH_keyword,ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__4657__auto__)){
var errs = temp__4657__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$errors,errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__4655__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__4655__auto__)){
var errs = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_event,x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__6402__auto__ = cljs.core.map_QMARK_(x);
if(and__6402__auto__){
var and__6402__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__6402__auto____$1){
var map__32741 = x;
var map__32741__$1 = ((((!((map__32741 == null)))?((((map__32741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32741):map__32741);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32741__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32741__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32741__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32741__$1,cljs.core.cst$kw$event);
var and__6402__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(and__6402__auto____$2){
var and__6402__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__6402__auto____$3){
var and__6402__auto____$4 = taoensso.encore.atom_QMARK_(state);
if(and__6402__auto____$4){
return taoensso.sente.event_QMARK_(event);
} else {
return and__6402__auto____$4;
}
} else {
return and__6402__auto____$3;
}
} else {
return and__6402__auto____$2;
}
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__6402__auto__ = cljs.core.map_QMARK_(x);
if(and__6402__auto__){
var and__6402__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$_QMARK_reply_DASH_fn,null,cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$connected_DASH_uids,null,cljs.core.cst$kw$uid,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$ring_DASH_req,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__6402__auto____$1){
var map__32753 = x;
var map__32753__$1 = ((((!((map__32753 == null)))?((((map__32753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32753):map__32753);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var and__6402__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(and__6402__auto____$2){
var and__6402__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__6402__auto____$3){
var and__6402__auto____$4 = taoensso.encore.atom_QMARK_(connected_uids);
if(and__6402__auto____$4){
var and__6402__auto____$5 = cljs.core.map_QMARK_(ring_req);
if(and__6402__auto____$5){
var and__6402__auto____$6 = taoensso.encore.nblank_str_QMARK_(client_id);
if(and__6402__auto____$6){
var and__6402__auto____$7 = taoensso.sente.event_QMARK_(event);
if(cljs.core.truth_(and__6402__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn));
} else {
return and__6402__auto____$7;
}
} else {
return and__6402__auto____$6;
}
} else {
return and__6402__auto____$5;
}
} else {
return and__6402__auto____$4;
}
} else {
return and__6402__auto____$3;
}
} else {
return and__6402__auto____$2;
}
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__32755){
var map__32761 = p__32755;
var map__32761__$1 = ((((!((map__32761 == null)))?((((map__32761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32761):map__32761);
var ev_msg = map__32761__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32761__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32761__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__32763 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32763,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32763,(1),null);
var valid_event = vec__32763;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if(cljs.core.not(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__32763,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__32761,map__32761__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__32763,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__32761,map__32761__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-661239731);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e32773){var t = e32773;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init7447384388010150061.clj",208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-684510286);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__32770 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32770,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32770,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__32770,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__32770,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,1960058434);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq(_QMARK_m)){
return cljs.core.with_meta(x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args32774 = [];
var len__7489__auto___32777 = arguments.length;
var i__7490__auto___32778 = (0);
while(true){
if((i__7490__auto___32778 < len__7489__auto___32777)){
args32774.push((arguments[i__7490__auto___32778]));

var G__32779 = (i__7490__auto___32778 + (1));
i__7490__auto___32778 = G__32779;
continue;
} else {
}
break;
}

var G__32776 = args32774.length;
switch (G__32776) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32774.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack(packer,taoensso.sente.with__QMARK_meta(clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",224,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,-1819709597);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack(packer,taoensso.sente.with__QMARK_meta(wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",234,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1911948869);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$edn)){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__32781_SHARP_){
if(!((p1__32781_SHARP_ == null))){
if((false) || (p1__32781_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__32781_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__32781_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__32781_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32784){if((e32784 instanceof Error)){
var e = e32784;
return e;
} else {
throw e32784;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",247,"((fn* [p1__32781#] (satisfies? interfaces/IPacker p1__32781#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___33099 = arguments.length;
var i__7490__auto___33100 = (0);
while(true){
if((i__7490__auto___33100 < len__7489__auto___33099)){
args__7496__auto__.push((arguments[i__7490__auto___33100]));

var G__33101 = (i__7490__auto___33100 + (1));
i__7490__auto___33100 = G__33101;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__32789){
var vec__32790 = p__32789;
var map__32793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(0),null);
var map__32793__$1 = ((((!((map__32793 == null)))?((((map__32793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32793):map__32793);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$secs,(25)], 0)));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$secs,(20)], 0)));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__6414__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$csrf_DASH_token], null));
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$ring$middleware$anti_DASH_forgery_SLASH_anti_DASH_forgery_DASH_token], null));
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,"__anti-forgery-token"], null));
}
}
});})(vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32793__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32795){if((e32795 instanceof Error)){
var e = e32795;
return e;
} else {
throw e32795;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",317,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32796){if((e32796 instanceof Error)){
var e = e32796;
return e;
} else {
throw e32796;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",317,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_33102 = (function (){try{if(((function (vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__32786_SHARP_){
if(!((p1__32786_SHARP_ == null))){
if((false) || (p1__32786_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__32786_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__32786_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__32786_SHARP_);
}
});})(vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32797){if((e32797 instanceof Error)){
var e = e32797;
return e;
} else {
throw e32797;

}
}})();
if((e_33102 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",318,"((fn* [p1__32786#] (satisfies? interfaces/IServerChanAdapter p1__32786#)) web-server-ch-adapter)",web_server_ch_adapter,e_33102,null);
}

var max_ms_33103 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_33103)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_33103)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_33103], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__6414__auto__ = (function (){var G__32800 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__32800) : user_id_fn.call(null,G__32800));
})();
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = (function (){var G__32801 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32801) : cljs.core.atom.call(null,G__32801));
})();
var send_buffers_ = (function (){var G__32802 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32802) : cljs.core.atom.call(null,G__32802));
})();
var connected_uids_ = (function (){var G__32803 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32803) : cljs.core.atom.call(null,G__32803));
})();
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__33104 = null;
var G__33104__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__32804 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32804,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32804,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__33104__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__33104 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__33104__3.call(this,conn_type,uid,client_id);
case 4:
return G__33104__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33104.cljs$core$IFn$_invoke$arity$3 = G__33104__3;
G__33104.cljs$core$IFn$_invoke$arity$4 = G__33104__4;
return G__33104;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32807){if((e32807 instanceof Error)){
var e = e32807;
return e;
} else {
throw e32807;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",362,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__32808){
var map__32809 = p__32808;
var map__32809__$1 = ((((!((map__32809 == null)))?((((map__32809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32809):map__32809);
var old_m = map__32809__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__32811 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__32811) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_(old_any,uid))) && (cljs.core.contains_QMARK_(new_any,uid))){
return cljs.core.cst$kw$newly_DASH_connected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32812){if((e32812 instanceof Error)){
var e = e32812;
return e;
} else {
throw e32812;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",379,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__32813){
var map__32814 = p__32813;
var map__32814__$1 = ((((!((map__32814 == null)))?((((map__32814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32814):map__32814);
var old_m = map__32814__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$any);
var conns_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ws.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ajax.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),cljs.core.cst$kw$ajax,((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid)),cljs.core.cst$kw$any,((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_(old_any,uid)) && (!(cljs.core.contains_QMARK_(new_any,uid)))){
return cljs.core.cst$kw$newly_DASH_disconnected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__33106__delegate = function (user_id,ev,p__32816){
var vec__32817 = p__32816;
var map__32820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32817,(0),null);
var map__32820__$1 = ((((!((map__32820 == null)))?((((map__32820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32820):map__32820);
var opts = map__32820__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32820__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_33107 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __33108 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",405,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_33107,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_33107,ev], null);
});})(uid_33107,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,543684614);
var __33109__$1 = (cljs.core.truth_(uid_33107)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __33110__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_33111 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__33112 = ((function (uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__32822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_33107);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32822,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32822,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_33111)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_33107),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_33107));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__32825 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",432,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",433,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",441,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__32825,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__32825,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2038462178);

var G__32828 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__32828) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_33107,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_33107,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_33107,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_33107,buffered_evs_ppstr));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init7447384388010150061.clj",452,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_33107], null);
});})(uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1922433327);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__33112(cljs.core.cst$kw$ws);

flush_buffer_BANG__33112(cljs.core.cst$kw$ajax);
} else {
}

var seq__32829_33114 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_33107], null))));
var chunk__32830_33115 = null;
var count__32831_33116 = (0);
var i__32832_33117 = (0);
while(true){
if((i__32832_33117 < count__32831_33116)){
var vec__32833_33118 = chunk__32830_33115.cljs$core$IIndexed$_nth$arity$2(null,i__32832_33117);
var _QMARK_sch_33119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32833_33118,(0),null);
var _udt_33120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32833_33118,(1),null);
var temp__4657__auto___33121 = _QMARK_sch_33119;
if(cljs.core.truth_(temp__4657__auto___33121)){
var sch_33122 = temp__4657__auto___33121;
taoensso.sente.interfaces.sch_close_BANG_(sch_33122);
} else {
}

var G__33123 = seq__32829_33114;
var G__33124 = chunk__32830_33115;
var G__33125 = count__32831_33116;
var G__33126 = (i__32832_33117 + (1));
seq__32829_33114 = G__33123;
chunk__32830_33115 = G__33124;
count__32831_33116 = G__33125;
i__32832_33117 = G__33126;
continue;
} else {
var temp__4657__auto___33127 = cljs.core.seq(seq__32829_33114);
if(temp__4657__auto___33127){
var seq__32829_33128__$1 = temp__4657__auto___33127;
if(cljs.core.chunked_seq_QMARK_(seq__32829_33128__$1)){
var c__7225__auto___33129 = cljs.core.chunk_first(seq__32829_33128__$1);
var G__33130 = cljs.core.chunk_rest(seq__32829_33128__$1);
var G__33131 = c__7225__auto___33129;
var G__33132 = cljs.core.count(c__7225__auto___33129);
var G__33133 = (0);
seq__32829_33114 = G__33130;
chunk__32830_33115 = G__33131;
count__32831_33116 = G__33132;
i__32832_33117 = G__33133;
continue;
} else {
var vec__32836_33134 = cljs.core.first(seq__32829_33128__$1);
var _QMARK_sch_33135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836_33134,(0),null);
var _udt_33136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836_33134,(1),null);
var temp__4657__auto___33137__$1 = _QMARK_sch_33135;
if(cljs.core.truth_(temp__4657__auto___33137__$1)){
var sch_33138 = temp__4657__auto___33137__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_33138);
} else {
}

var G__33139 = cljs.core.next(seq__32829_33128__$1);
var G__33140 = null;
var G__33141 = (0);
var G__33142 = (0);
seq__32829_33114 = G__33139;
chunk__32830_33115 = G__33140;
count__32831_33116 = G__33141;
i__32832_33117 = G__33142;
continue;
}
} else {
}
}
break;
}

var seq__32839_33143 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_33107], null))));
var chunk__32840_33144 = null;
var count__32841_33145 = (0);
var i__32842_33146 = (0);
while(true){
if((i__32842_33146 < count__32841_33145)){
var vec__32843_33147 = chunk__32840_33144.cljs$core$IIndexed$_nth$arity$2(null,i__32842_33146);
var _QMARK_sch_33148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32843_33147,(0),null);
var _udt_33149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32843_33147,(1),null);
var temp__4657__auto___33150 = _QMARK_sch_33148;
if(cljs.core.truth_(temp__4657__auto___33150)){
var sch_33151 = temp__4657__auto___33150;
taoensso.sente.interfaces.sch_close_BANG_(sch_33151);
} else {
}

var G__33152 = seq__32839_33143;
var G__33153 = chunk__32840_33144;
var G__33154 = count__32841_33145;
var G__33155 = (i__32842_33146 + (1));
seq__32839_33143 = G__33152;
chunk__32840_33144 = G__33153;
count__32841_33145 = G__33154;
i__32842_33146 = G__33155;
continue;
} else {
var temp__4657__auto___33156 = cljs.core.seq(seq__32839_33143);
if(temp__4657__auto___33156){
var seq__32839_33157__$1 = temp__4657__auto___33156;
if(cljs.core.chunked_seq_QMARK_(seq__32839_33157__$1)){
var c__7225__auto___33158 = cljs.core.chunk_first(seq__32839_33157__$1);
var G__33159 = cljs.core.chunk_rest(seq__32839_33157__$1);
var G__33160 = c__7225__auto___33158;
var G__33161 = cljs.core.count(c__7225__auto___33158);
var G__33162 = (0);
seq__32839_33143 = G__33159;
chunk__32840_33144 = G__33160;
count__32841_33145 = G__33161;
i__32842_33146 = G__33162;
continue;
} else {
var vec__32846_33163 = cljs.core.first(seq__32839_33157__$1);
var _QMARK_sch_33164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32846_33163,(0),null);
var _udt_33165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32846_33163,(1),null);
var temp__4657__auto___33166__$1 = _QMARK_sch_33164;
if(cljs.core.truth_(temp__4657__auto___33166__$1)){
var sch_33167 = temp__4657__auto___33166__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_33167);
} else {
}

var G__33168 = cljs.core.next(seq__32839_33157__$1);
var G__33169 = null;
var G__33170 = (0);
var G__33171 = (0);
seq__32839_33143 = G__33168;
chunk__32840_33144 = G__33169;
count__32841_33145 = G__33170;
i__32842_33146 = G__33171;
continue;
}
} else {
}
}
break;
}
} else {
var seq__32849_33172 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__32850_33173 = null;
var count__32851_33174 = (0);
var i__32852_33175 = (0);
while(true){
if((i__32852_33175 < count__32851_33174)){
var conn_type_33176 = chunk__32850_33173.cljs$core$IIndexed$_nth$arity$2(null,i__32852_33175);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_33176,uid_33107], null),((function (seq__32849_33172,chunk__32850_33173,count__32851_33174,i__32852_33175,conn_type_33176,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_33111], true)], null);
} else {
var vec__32853 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32853,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32853,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_33111)], null);
}
});})(seq__32849_33172,chunk__32850_33173,count__32851_33174,i__32852_33175,conn_type_33176,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__33177 = seq__32849_33172;
var G__33178 = chunk__32850_33173;
var G__33179 = count__32851_33174;
var G__33180 = (i__32852_33175 + (1));
seq__32849_33172 = G__33177;
chunk__32850_33173 = G__33178;
count__32851_33174 = G__33179;
i__32852_33175 = G__33180;
continue;
} else {
var temp__4657__auto___33181 = cljs.core.seq(seq__32849_33172);
if(temp__4657__auto___33181){
var seq__32849_33182__$1 = temp__4657__auto___33181;
if(cljs.core.chunked_seq_QMARK_(seq__32849_33182__$1)){
var c__7225__auto___33183 = cljs.core.chunk_first(seq__32849_33182__$1);
var G__33184 = cljs.core.chunk_rest(seq__32849_33182__$1);
var G__33185 = c__7225__auto___33183;
var G__33186 = cljs.core.count(c__7225__auto___33183);
var G__33187 = (0);
seq__32849_33172 = G__33184;
chunk__32850_33173 = G__33185;
count__32851_33174 = G__33186;
i__32852_33175 = G__33187;
continue;
} else {
var conn_type_33188 = cljs.core.first(seq__32849_33182__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_33188,uid_33107], null),((function (seq__32849_33172,chunk__32850_33173,count__32851_33174,i__32852_33175,conn_type_33188,seq__32849_33182__$1,temp__4657__auto___33181,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_33111], true)], null);
} else {
var vec__32856 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32856,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32856,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_33111)], null);
}
});})(seq__32849_33172,chunk__32850_33173,count__32851_33174,i__32852_33175,conn_type_33188,seq__32849_33182__$1,temp__4657__auto___33181,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__33189 = cljs.core.next(seq__32849_33182__$1);
var G__33190 = null;
var G__33191 = (0);
var G__33192 = (0);
seq__32849_33172 = G__33189;
chunk__32850_33173 = G__33190;
count__32851_33174 = G__33191;
i__32852_33175 = G__33192;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__33112(cljs.core.cst$kw$ws);

flush_buffer_BANG__33112(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_33193 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_33194 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__28167__auto___33195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___33195,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___33195,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32863){
var state_val_32864 = (state_32863[(1)]);
if((state_val_32864 === (1))){
var state_32863__$1 = state_32863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32863__$1,(2),ws_timeout_33193);
} else {
if((state_val_32864 === (2))){
var inst_32860 = (state_32863[(2)]);
var inst_32861 = flush_buffer_BANG__33112(cljs.core.cst$kw$ws);
var state_32863__$1 = (function (){var statearr_32865 = state_32863;
(statearr_32865[(7)] = inst_32860);

return statearr_32865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32863__$1,inst_32861);
} else {
return null;
}
}
});})(c__28167__auto___33195,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28043__auto__,c__28167__auto___33195,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28044__auto__ = null;
var taoensso$sente$state_machine__28044__auto____0 = (function (){
var statearr_32869 = [null,null,null,null,null,null,null,null];
(statearr_32869[(0)] = taoensso$sente$state_machine__28044__auto__);

(statearr_32869[(1)] = (1));

return statearr_32869;
});
var taoensso$sente$state_machine__28044__auto____1 = (function (state_32863){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_32863);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e32870){if((e32870 instanceof Object)){
var ex__28047__auto__ = e32870;
var statearr_32871_33196 = state_32863;
(statearr_32871_33196[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32863);

return cljs.core.cst$kw$recur;
} else {
throw e32870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33197 = state_32863;
state_32863 = G__33197;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$state_machine__28044__auto__ = function(state_32863){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28044__auto____1.call(this,state_32863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28044__auto____0;
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28044__auto____1;
return taoensso$sente$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___33195,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28169__auto__ = (function (){var statearr_32872 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_32872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___33195);

return statearr_32872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___33195,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__28167__auto___33198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___33198,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___33198,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32877){
var state_val_32878 = (state_32877[(1)]);
if((state_val_32878 === (1))){
var state_32877__$1 = state_32877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32877__$1,(2),ajax_timeout_33194);
} else {
if((state_val_32878 === (2))){
var inst_32874 = (state_32877[(2)]);
var inst_32875 = flush_buffer_BANG__33112(cljs.core.cst$kw$ajax);
var state_32877__$1 = (function (){var statearr_32879 = state_32877;
(statearr_32879[(7)] = inst_32874);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32877__$1,inst_32875);
} else {
return null;
}
}
});})(c__28167__auto___33198,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28043__auto__,c__28167__auto___33198,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28044__auto__ = null;
var taoensso$sente$state_machine__28044__auto____0 = (function (){
var statearr_32883 = [null,null,null,null,null,null,null,null];
(statearr_32883[(0)] = taoensso$sente$state_machine__28044__auto__);

(statearr_32883[(1)] = (1));

return statearr_32883;
});
var taoensso$sente$state_machine__28044__auto____1 = (function (state_32877){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_32877);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e32884){if((e32884 instanceof Object)){
var ex__28047__auto__ = e32884;
var statearr_32885_33199 = state_32877;
(statearr_32885_33199[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32877);

return cljs.core.cst$kw$recur;
} else {
throw e32884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33200 = state_32877;
state_32877 = G__33200;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$state_machine__28044__auto__ = function(state_32877){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28044__auto____1.call(this,state_32877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28044__auto____0;
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28044__auto____1;
return taoensso$sente$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___33198,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28169__auto__ = (function (){var statearr_32886 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_32886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___33198);

return statearr_32886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___33198,ws_timeout_33193,ajax_timeout_33194,uid_33107,__33108,__33109__$1,__33110__$2,ev_uuid_33111,flush_buffer_BANG__33112,vec__32817,map__32820,map__32820__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__33106 = function (user_id,ev,var_args){
var p__32816 = null;
if (arguments.length > 2) {
var G__33201__i = 0, G__33201__a = new Array(arguments.length -  2);
while (G__33201__i < G__33201__a.length) {G__33201__a[G__33201__i] = arguments[G__33201__i + 2]; ++G__33201__i;}
  p__32816 = new cljs.core.IndexedSeq(G__33201__a,0);
} 
return G__33106__delegate.call(this,user_id,ev,p__32816);};
G__33106.cljs$lang$maxFixedArity = 2;
G__33106.cljs$lang$applyTo = (function (arglist__33202){
var user_id = cljs.core.first(arglist__33202);
arglist__33202 = cljs.core.next(arglist__33202);
var ev = cljs.core.first(arglist__33202);
var p__32816 = cljs.core.rest(arglist__33202);
return G__33106__delegate(user_id,ev,p__32816);
});
G__33106.cljs$core$IFn$_invoke$arity$variadic = G__33106__delegate;
return G__33106;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__32887 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32887,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32887,(1),null);
var reply_fn = (function (){var replied_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
return ((function (replied_QMARK__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",521,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1254663773);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,cljs.core.meta(resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32895){
var state_val_32896 = (state_32895[(1)]);
if((state_val_32896 === (1))){
var inst_32890 = cljs.core.async.timeout(ms);
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32895__$1,(2),inst_32890);
} else {
if((state_val_32896 === (2))){
var inst_32892 = (state_32895[(2)]);
var inst_32893 = (function (){var G__32897 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__32897) : reply_fn.call(null,G__32897));
})();
var state_32895__$1 = (function (){var statearr_32898 = state_32895;
(statearr_32898[(7)] = inst_32892);

return statearr_32898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32895__$1,inst_32893);
} else {
return null;
}
}
});})(c__28167__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28043__auto__,c__28167__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28044__auto__ = null;
var taoensso$sente$state_machine__28044__auto____0 = (function (){
var statearr_32902 = [null,null,null,null,null,null,null,null];
(statearr_32902[(0)] = taoensso$sente$state_machine__28044__auto__);

(statearr_32902[(1)] = (1));

return statearr_32902;
});
var taoensso$sente$state_machine__28044__auto____1 = (function (state_32895){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_32895);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e32903){if((e32903 instanceof Object)){
var ex__28047__auto__ = e32903;
var statearr_32904_33203 = state_32895;
(statearr_32904_33203[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32895);

return cljs.core.cst$kw$recur;
} else {
throw e32903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33204 = state_32895;
state_32895 = G__33204;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$state_machine__28044__auto__ = function(state_32895){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28044__auto____1.call(this,state_32895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28044__auto____0;
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28044__auto____1;
return taoensso$sente$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28169__auto__ = (function (){var statearr_32905 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_32905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_32905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__32887,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28167__auto__;
} else {
return null;
}
} else {
var G__32906 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__32906) : reply_fn.call(null,G__32906));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$uid,uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",566,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1444355212);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init7447384388010150061.clj",577,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,751641684);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",586,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,911006519);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ws,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ws,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32942){
var state_val_32943 = (state_32942[(1)]);
if((state_val_32943 === (7))){
var inst_32938 = (state_32942[(2)]);
var state_32942__$1 = state_32942;
var statearr_32944_33205 = state_32942__$1;
(statearr_32944_33205[(2)] = inst_32938);

(statearr_32944_33205[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (1))){
var inst_32907 = udt_open;
var state_32942__$1 = (function (){var statearr_32945 = state_32942;
(statearr_32945[(7)] = inst_32907);

return statearr_32945;
})();
var statearr_32946_33206 = state_32942__$1;
(statearr_32946_33206[(2)] = null);

(statearr_32946_33206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (4))){
var inst_32916 = (state_32942[(8)]);
var inst_32911 = (state_32942[(2)]);
var inst_32912 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var inst_32913 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32914 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_32915 = (new cljs.core.PersistentVector(null,3,(5),inst_32913,inst_32914,null));
var inst_32916__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_32912,inst_32915);
var state_32942__$1 = (function (){var statearr_32947 = state_32942;
(statearr_32947[(9)] = inst_32911);

(statearr_32947[(8)] = inst_32916__$1);

return statearr_32947;
})();
if(cljs.core.truth_(inst_32916__$1)){
var statearr_32948_33207 = state_32942__$1;
(statearr_32948_33207[(1)] = (5));

} else {
var statearr_32949_33208 = state_32942__$1;
(statearr_32949_33208[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (13))){
var inst_32922 = (state_32942[(10)]);
var inst_32931 = (state_32942[(2)]);
var inst_32907 = inst_32922;
var state_32942__$1 = (function (){var statearr_32950 = state_32942;
(statearr_32950[(11)] = inst_32931);

(statearr_32950[(7)] = inst_32907);

return statearr_32950;
})();
var statearr_32951_33209 = state_32942__$1;
(statearr_32951_33209[(2)] = null);

(statearr_32951_33209[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (6))){
var state_32942__$1 = state_32942;
var statearr_32952_33210 = state_32942__$1;
(statearr_32952_33210[(2)] = null);

(statearr_32952_33210[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (3))){
var inst_32940 = (state_32942[(2)]);
var state_32942__$1 = state_32942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32942__$1,inst_32940);
} else {
if((state_val_32943 === (12))){
var state_32942__$1 = state_32942;
var statearr_32953_33211 = state_32942__$1;
(statearr_32953_33211[(2)] = null);

(statearr_32953_33211[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (2))){
var inst_32909 = cljs.core.async.timeout(ms);
var state_32942__$1 = state_32942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32942__$1,(4),inst_32909);
} else {
if((state_val_32943 === (11))){
var inst_32927 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,null,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_32928 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_32927);
var state_32942__$1 = state_32942;
var statearr_32954_33212 = state_32942__$1;
(statearr_32954_33212[(2)] = inst_32928);

(statearr_32954_33212[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (9))){
var state_32942__$1 = state_32942;
var statearr_32955_33213 = state_32942__$1;
(statearr_32955_33213[(2)] = null);

(statearr_32955_33213[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (5))){
var inst_32916 = (state_32942[(8)]);
var inst_32921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32916,(0),null);
var inst_32922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32916,(1),null);
var inst_32923 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_32942__$1 = (function (){var statearr_32956 = state_32942;
(statearr_32956[(12)] = inst_32921);

(statearr_32956[(10)] = inst_32922);

return statearr_32956;
})();
if(cljs.core.truth_(inst_32923)){
var statearr_32957_33214 = state_32942__$1;
(statearr_32957_33214[(1)] = (8));

} else {
var statearr_32958_33215 = state_32942__$1;
(statearr_32958_33215[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (10))){
var inst_32935 = (state_32942[(2)]);
var state_32942__$1 = state_32942;
var statearr_32959_33216 = state_32942__$1;
(statearr_32959_33216[(2)] = inst_32935);

(statearr_32959_33216[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32943 === (8))){
var inst_32922 = (state_32942[(10)]);
var inst_32907 = (state_32942[(7)]);
var inst_32925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32922,inst_32907);
var state_32942__$1 = state_32942;
if(inst_32925){
var statearr_32960_33217 = state_32942__$1;
(statearr_32960_33217[(1)] = (11));

} else {
var statearr_32961_33218 = state_32942__$1;
(statearr_32961_33218[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28043__auto__,c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28044__auto__ = null;
var taoensso$sente$state_machine__28044__auto____0 = (function (){
var statearr_32965 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32965[(0)] = taoensso$sente$state_machine__28044__auto__);

(statearr_32965[(1)] = (1));

return statearr_32965;
});
var taoensso$sente$state_machine__28044__auto____1 = (function (state_32942){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_32942);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e32966){if((e32966 instanceof Object)){
var ex__28047__auto__ = e32966;
var statearr_32967_33219 = state_32942;
(statearr_32967_33219[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32942);

return cljs.core.cst$kw$recur;
} else {
throw e32966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33220 = state_32942;
state_32942 = G__33220;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$state_machine__28044__auto__ = function(state_32942){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28044__auto____1.call(this,state_32942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28044__auto____0;
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28044__auto____1;
return taoensso$sente$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28169__auto__ = (function (){var statearr_32968 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_32968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_32968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28167__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",615,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,977914848);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ajax,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__6414__auto__ = cljs.core.cst$kw$init_QMARK_.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.cst$kw$handshake_QMARK_.cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ajax,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_32994){
var state_val_32995 = (state_32994[(1)]);
if((state_val_32995 === (1))){
var inst_32969 = cljs.core.async.timeout(ms);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32994__$1,(2),inst_32969);
} else {
if((state_val_32995 === (2))){
var inst_32976 = (state_32994[(7)]);
var inst_32971 = (state_32994[(2)]);
var inst_32972 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var inst_32973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32974 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_32975 = (new cljs.core.PersistentVector(null,3,(5),inst_32973,inst_32974,null));
var inst_32976__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_32972,inst_32975);
var state_32994__$1 = (function (){var statearr_32996 = state_32994;
(statearr_32996[(7)] = inst_32976__$1);

(statearr_32996[(8)] = inst_32971);

return statearr_32996;
})();
if(cljs.core.truth_(inst_32976__$1)){
var statearr_32997_33221 = state_32994__$1;
(statearr_32997_33221[(1)] = (3));

} else {
var statearr_32998_33222 = state_32994__$1;
(statearr_32998_33222[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32995 === (3))){
var inst_32976 = (state_32994[(7)]);
var inst_32981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32976,(0),null);
var inst_32982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32976,(1),null);
var inst_32983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32982,udt_open);
var state_32994__$1 = (function (){var statearr_32999 = state_32994;
(statearr_32999[(9)] = inst_32981);

return statearr_32999;
})();
if(inst_32983){
var statearr_33000_33223 = state_32994__$1;
(statearr_33000_33223[(1)] = (6));

} else {
var statearr_33001_33224 = state_32994__$1;
(statearr_33001_33224[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32995 === (4))){
var state_32994__$1 = state_32994;
var statearr_33002_33225 = state_32994__$1;
(statearr_33002_33225[(2)] = null);

(statearr_33002_33225[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32995 === (5))){
var inst_32992 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32994__$1,inst_32992);
} else {
if((state_val_32995 === (6))){
var inst_32985 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,null,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_32986 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_32985);
var state_32994__$1 = state_32994;
var statearr_33003_33226 = state_32994__$1;
(statearr_33003_33226[(2)] = inst_32986);

(statearr_33003_33226[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32995 === (7))){
var state_32994__$1 = state_32994;
var statearr_33004_33227 = state_32994__$1;
(statearr_33004_33227[(2)] = null);

(statearr_33004_33227[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32995 === (8))){
var inst_32989 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_33005_33228 = state_32994__$1;
(statearr_33005_33228[(2)] = inst_32989);

(statearr_33005_33228[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28043__auto__,c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28044__auto__ = null;
var taoensso$sente$state_machine__28044__auto____0 = (function (){
var statearr_33009 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33009[(0)] = taoensso$sente$state_machine__28044__auto__);

(statearr_33009[(1)] = (1));

return statearr_33009;
});
var taoensso$sente$state_machine__28044__auto____1 = (function (state_32994){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_32994);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e33010){if((e33010 instanceof Object)){
var ex__28047__auto__ = e33010;
var statearr_33011_33229 = state_32994;
(statearr_33011_33229[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32994);

return cljs.core.cst$kw$recur;
} else {
throw e33010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33230 = state_32994;
state_32994 = G__33230;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$state_machine__28044__auto__ = function(state_32994){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28044__auto____1.call(this,state_32994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28044__auto____0;
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28044__auto____1;
return taoensso$sente$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28169__auto__ = (function (){var statearr_33012 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_33012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_33012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28167__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__33013 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33013,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33013,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__33013,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",645,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__33013,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__33013,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-309965999);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4(packer__$1,cljs.core.meta(resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__33013,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",654,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-685338521);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_33067){
var state_val_33068 = (state_33067[(1)]);
if((state_val_33068 === (7))){
var state_33067__$1 = state_33067;
var statearr_33069_33231 = state_33067__$1;
(statearr_33069_33231[(2)] = null);

(statearr_33069_33231[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (1))){
var inst_33016 = cljs.core.async.timeout((5000));
var state_33067__$1 = state_33067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33067__$1,(2),inst_33016);
} else {
if((state_val_33068 === (4))){
var state_33067__$1 = state_33067;
var statearr_33070_33232 = state_33067__$1;
(statearr_33070_33232[(2)] = null);

(statearr_33070_33232[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (13))){
var state_33067__$1 = state_33067;
var statearr_33071_33233 = state_33067__$1;
(statearr_33071_33233[(2)] = null);

(statearr_33071_33233[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (6))){
var inst_33026 = (state_33067[(7)]);
var inst_33028 = (state_33067[(8)]);
var inst_33044 = (state_33067[(9)]);
var inst_33027 = (state_33067[(10)]);
var inst_33039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33040 = [conn_type,uid,client_id];
var inst_33041 = (new cljs.core.PersistentVector(null,3,(5),inst_33039,inst_33040,null));
var inst_33043 = (function (){var vec__33019 = inst_33026;
var __QMARK_sch = inst_33027;
var udt_t1 = inst_33028;
return ((function (vec__33019,__QMARK_sch,udt_t1,inst_33026,inst_33028,inst_33044,inst_33027,inst_33039,inst_33040,inst_33041,state_val_33068,c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__33042){
var vec__33072 = p__33042;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__33019,__QMARK_sch,udt_t1,inst_33026,inst_33028,inst_33044,inst_33027,inst_33039,inst_33040,inst_33041,state_val_33068,c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_33044__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_33041,inst_33043);
var state_33067__$1 = (function (){var statearr_33075 = state_33067;
(statearr_33075[(9)] = inst_33044__$1);

return statearr_33075;
})();
if(cljs.core.truth_(inst_33044__$1)){
var statearr_33076_33234 = state_33067__$1;
(statearr_33076_33234[(1)] = (9));

} else {
var statearr_33077_33235 = state_33067__$1;
(statearr_33077_33235[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (3))){
var inst_33026 = (state_33067[(7)]);
var inst_33028 = (state_33067[(8)]);
var inst_33027 = (state_33067[(10)]);
var inst_33031 = (function (){var vec__33019 = inst_33026;
var __QMARK_sch = inst_33027;
var udt_t1 = inst_33028;
return ((function (vec__33019,__QMARK_sch,udt_t1,inst_33026,inst_33028,inst_33027,state_val_33068,c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__33019,__QMARK_sch,udt_t1,inst_33026,inst_33028,inst_33027,state_val_33068,c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_33032 = (new cljs.core.Delay(inst_33031,null));
var inst_33033 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init7447384388010150061.clj",668,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_33032,null,-1952791707);
var state_33067__$1 = state_33067;
var statearr_33078_33236 = state_33067__$1;
(statearr_33078_33236[(2)] = inst_33033);

(statearr_33078_33236[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (12))){
var inst_33053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33054 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_33055 = (new cljs.core.PersistentVector(null,2,(5),inst_33053,inst_33054,null));
var inst_33056 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_33055);
var state_33067__$1 = state_33067;
var statearr_33079_33237 = state_33067__$1;
(statearr_33079_33237[(2)] = inst_33056);

(statearr_33079_33237[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (2))){
var inst_33026 = (state_33067[(7)]);
var inst_33018 = (state_33067[(2)]);
var inst_33022 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var inst_33023 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33024 = [conn_type,uid,client_id];
var inst_33025 = (new cljs.core.PersistentVector(null,3,(5),inst_33023,inst_33024,null));
var inst_33026__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_33022,inst_33025);
var inst_33027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33026__$1,(0),null);
var inst_33028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33026__$1,(1),null);
var inst_33029 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.sente.debug_mode_QMARK__) : cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__));
var state_33067__$1 = (function (){var statearr_33080 = state_33067;
(statearr_33080[(7)] = inst_33026__$1);

(statearr_33080[(8)] = inst_33028);

(statearr_33080[(11)] = inst_33018);

(statearr_33080[(10)] = inst_33027);

return statearr_33080;
})();
if(cljs.core.truth_(inst_33029)){
var statearr_33081_33238 = state_33067__$1;
(statearr_33081_33238[(1)] = (3));

} else {
var statearr_33082_33239 = state_33067__$1;
(statearr_33082_33239[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (11))){
var inst_33062 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
var statearr_33083_33240 = state_33067__$1;
(statearr_33083_33240[(2)] = inst_33062);

(statearr_33083_33240[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (9))){
var inst_33026 = (state_33067[(7)]);
var inst_33028 = (state_33067[(8)]);
var inst_33044 = (state_33067[(9)]);
var inst_33027 = (state_33067[(10)]);
var inst_33046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33047 = [conn_type,uid];
var inst_33048 = (new cljs.core.PersistentVector(null,2,(5),inst_33046,inst_33047,null));
var inst_33049 = (function (){var vec__33019 = inst_33026;
var __QMARK_sch = inst_33027;
var udt_t1 = inst_33028;
var disconnect_QMARK_ = inst_33044;
return ((function (vec__33019,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_33026,inst_33028,inst_33044,inst_33027,inst_33046,inst_33047,inst_33048,state_val_33068,c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__33019,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_33026,inst_33028,inst_33044,inst_33027,inst_33046,inst_33047,inst_33048,state_val_33068,c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_33050 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_33048,inst_33049);
var inst_33051 = upd_connected_uid_BANG_(uid);
var state_33067__$1 = (function (){var statearr_33084 = state_33067;
(statearr_33084[(12)] = inst_33050);

return statearr_33084;
})();
if(cljs.core.truth_(inst_33051)){
var statearr_33085_33241 = state_33067__$1;
(statearr_33085_33241[(1)] = (12));

} else {
var statearr_33086_33242 = state_33067__$1;
(statearr_33086_33242[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (5))){
var inst_33028 = (state_33067[(8)]);
var inst_33036 = (state_33067[(2)]);
var inst_33037 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33028,udt_close);
var state_33067__$1 = (function (){var statearr_33087 = state_33067;
(statearr_33087[(13)] = inst_33036);

return statearr_33087;
})();
if(inst_33037){
var statearr_33088_33243 = state_33067__$1;
(statearr_33088_33243[(1)] = (6));

} else {
var statearr_33089_33244 = state_33067__$1;
(statearr_33089_33244[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (14))){
var inst_33059 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
var statearr_33090_33245 = state_33067__$1;
(statearr_33090_33245[(2)] = inst_33059);

(statearr_33090_33245[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (10))){
var state_33067__$1 = state_33067;
var statearr_33091_33246 = state_33067__$1;
(statearr_33091_33246[(2)] = null);

(statearr_33091_33246[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33068 === (8))){
var inst_33065 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33067__$1,inst_33065);
} else {
return null;
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
});})(c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28043__auto__,c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28044__auto__ = null;
var taoensso$sente$state_machine__28044__auto____0 = (function (){
var statearr_33095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33095[(0)] = taoensso$sente$state_machine__28044__auto__);

(statearr_33095[(1)] = (1));

return statearr_33095;
});
var taoensso$sente$state_machine__28044__auto____1 = (function (state_33067){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_33067);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e33096){if((e33096 instanceof Object)){
var ex__28047__auto__ = e33096;
var statearr_33097_33247 = state_33067;
(statearr_33097_33247[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33067);

return cljs.core.cst$kw$recur;
} else {
throw e33096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33248 = state_33067;
state_33067 = G__33248;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$state_machine__28044__auto__ = function(state_33067){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28044__auto____1.call(this,state_33067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28044__auto____0;
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28044__auto____1;
return taoensso$sente$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28169__auto__ = (function (){var statearr_33098 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_33098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_33098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28167__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init7447384388010150061.clj",690,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,479052834);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__32790,map__32793,map__32793__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq32787){
var G__32788 = cljs.core.first(seq32787);
var seq32787__$1 = cljs.core.next(seq32787);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32788,seq32787__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",696,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1313383616);

var seq__33271 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__33272 = null;
var count__33273 = (0);
var i__33274 = (0);
while(true){
if((i__33274 < count__33273)){
var vec__33275 = chunk__33272.cljs$core$IIndexed$_nth$arity$2(null,i__33274);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33275,(0),null);
var vec__33278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33275,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33278,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33278,(1),null);
var temp__4657__auto___33293 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___33293)){
var sch_33294 = temp__4657__auto___33293;
var G__33281_33295 = cljs.core.cst$kw$ws;
var G__33282_33296 = uid;
var G__33283_33297 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__33281_33295,G__33282_33296,G__33283_33297) : upd_conn_BANG_.call(null,G__33281_33295,G__33282_33296,G__33283_33297));

taoensso.sente.interfaces.sch_send_BANG_(sch_33294,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}

var G__33298 = seq__33271;
var G__33299 = chunk__33272;
var G__33300 = count__33273;
var G__33301 = (i__33274 + (1));
seq__33271 = G__33298;
chunk__33272 = G__33299;
count__33273 = G__33300;
i__33274 = G__33301;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__33271);
if(temp__4657__auto__){
var seq__33271__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33271__$1)){
var c__7225__auto__ = cljs.core.chunk_first(seq__33271__$1);
var G__33302 = cljs.core.chunk_rest(seq__33271__$1);
var G__33303 = c__7225__auto__;
var G__33304 = cljs.core.count(c__7225__auto__);
var G__33305 = (0);
seq__33271 = G__33302;
chunk__33272 = G__33303;
count__33273 = G__33304;
i__33274 = G__33305;
continue;
} else {
var vec__33284 = cljs.core.first(seq__33271__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33284,(0),null);
var vec__33287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33284,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33287,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33287,(1),null);
var temp__4657__auto___33306__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___33306__$1)){
var sch_33307 = temp__4657__auto___33306__$1;
var G__33290_33308 = cljs.core.cst$kw$ws;
var G__33291_33309 = uid;
var G__33292_33310 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__33290_33308,G__33291_33309,G__33292_33310) : upd_conn_BANG_.call(null,G__33290_33308,G__33291_33309,G__33292_33310));

taoensso.sente.interfaces.sch_send_BANG_(sch_33307,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}

var G__33311 = cljs.core.next(seq__33271__$1);
var G__33312 = null;
var G__33313 = (0);
var G__33314 = (0);
seq__33271 = G__33311;
chunk__33272 = G__33312;
count__33273 = G__33313;
i__33274 = G__33314;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",706,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,416178909);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_33445){
var state_val_33446 = (state_33445[(1)]);
if((state_val_33446 === (7))){
var inst_33401 = (state_33445[(7)]);
var inst_33407 = (state_33445[(8)]);
var inst_33400 = (state_33445[(9)]);
var inst_33417 = (function (){var n = inst_33400;
var client_ids_satisfied = inst_33401;
var _QMARK_pulled = inst_33407;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_33401,inst_33407,inst_33400,state_val_33446,c__28167__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__33416){
var vec__33447 = p__33416;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(cljs.core.cst$kw$websocket),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_33401,inst_33407,inst_33400,state_val_33446,c__28167__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_33418 = cljs.core.PersistentHashSet.EMPTY;
var inst_33419 = cljs.core.reduce_kv(inst_33417,inst_33418,inst_33407);
var state_33445__$1 = state_33445;
var statearr_33450_33483 = state_33445__$1;
(statearr_33450_33483[(2)] = inst_33419);

(statearr_33450_33483[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (1))){
var inst_33399 = cljs.core.PersistentHashSet.EMPTY;
var inst_33400 = (0);
var inst_33401 = inst_33399;
var state_33445__$1 = (function (){var statearr_33451 = state_33445;
(statearr_33451[(7)] = inst_33401);

(statearr_33451[(9)] = inst_33400);

return statearr_33451;
})();
var statearr_33452_33484 = state_33445__$1;
(statearr_33452_33484[(2)] = null);

(statearr_33452_33484[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (4))){
var state_33445__$1 = state_33445;
var statearr_33453_33485 = state_33445__$1;
(statearr_33453_33485[(2)] = true);

(statearr_33453_33485[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (15))){
var inst_33438 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33454_33486 = state_33445__$1;
(statearr_33454_33486[(2)] = inst_33438);

(statearr_33454_33486[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (13))){
var inst_33424 = (state_33445[(10)]);
var inst_33429 = cljs.core.rand_int(inst_33424);
var inst_33430 = (inst_33424 + inst_33429);
var inst_33431 = cljs.core.async.timeout(inst_33430);
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33445__$1,(16),inst_33431);
} else {
if((state_val_33446 === (6))){
var inst_33407 = (state_33445[(8)]);
var inst_33414 = (state_33445[(2)]);
var state_33445__$1 = (function (){var statearr_33455 = state_33445;
(statearr_33455[(11)] = inst_33414);

return statearr_33455;
})();
if(cljs.core.truth_(inst_33407)){
var statearr_33456_33487 = state_33445__$1;
(statearr_33456_33487[(1)] = (7));

} else {
var statearr_33457_33488 = state_33445__$1;
(statearr_33457_33488[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (3))){
var inst_33443 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33445__$1,inst_33443);
} else {
if((state_val_33446 === (12))){
var inst_33441 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33458_33489 = state_33445__$1;
(statearr_33458_33489[(2)] = inst_33441);

(statearr_33458_33489[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (2))){
var inst_33401 = (state_33445[(7)]);
var inst_33407 = (state_33445[(8)]);
var inst_33400 = (state_33445[(9)]);
var inst_33403 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33404 = [cljs.core.cst$kw$ajax,uid];
var inst_33405 = (new cljs.core.PersistentVector(null,2,(5),inst_33403,inst_33404,null));
var inst_33406 = (function (){var n = inst_33400;
var client_ids_satisfied = inst_33401;
return ((function (n,client_ids_satisfied,inst_33401,inst_33407,inst_33400,inst_33403,inst_33404,inst_33405,state_val_33446,c__28167__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_33401,inst_33407,inst_33400,inst_33403,inst_33404,inst_33405,state_val_33446,c__28167__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__33459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33459,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33459,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_33401,inst_33407,inst_33400,inst_33403,inst_33404,inst_33405,state_val_33446,c__28167__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_33401,inst_33407,inst_33400,inst_33403,inst_33404,inst_33405,state_val_33446,c__28167__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_33407__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_33405,inst_33406);
var inst_33408 = (function (){var n = inst_33400;
var client_ids_satisfied = inst_33401;
var _QMARK_pulled = inst_33407__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_33401,inst_33407,inst_33400,inst_33403,inst_33404,inst_33405,inst_33406,inst_33407__$1,state_val_33446,c__28167__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__6414__auto__ = (x == null);
if(or__6414__auto__){
return or__6414__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_33401,inst_33407,inst_33400,inst_33403,inst_33404,inst_33405,inst_33406,inst_33407__$1,state_val_33446,c__28167__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_33409 = (inst_33408.cljs$core$IFn$_invoke$arity$1 ? inst_33408.cljs$core$IFn$_invoke$arity$1(inst_33407__$1) : inst_33408.call(null,inst_33407__$1));
var state_33445__$1 = (function (){var statearr_33462 = state_33445;
(statearr_33462[(8)] = inst_33407__$1);

return statearr_33462;
})();
if(cljs.core.truth_(inst_33409)){
var statearr_33463_33490 = state_33445__$1;
(statearr_33463_33490[(1)] = (4));

} else {
var statearr_33464_33491 = state_33445__$1;
(statearr_33464_33491[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (11))){
var state_33445__$1 = state_33445;
var statearr_33465_33492 = state_33445__$1;
(statearr_33465_33492[(2)] = null);

(statearr_33465_33492[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (9))){
var inst_33401 = (state_33445[(7)]);
var inst_33400 = (state_33445[(9)]);
var inst_33424 = (state_33445[(10)]);
var inst_33422 = (state_33445[(2)]);
var inst_33423 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_33401,inst_33422);
var inst_33424__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_33400);
var state_33445__$1 = (function (){var statearr_33466 = state_33445;
(statearr_33466[(10)] = inst_33424__$1);

(statearr_33466[(12)] = inst_33423);

return statearr_33466;
})();
if(cljs.core.truth_(inst_33424__$1)){
var statearr_33467_33493 = state_33445__$1;
(statearr_33467_33493[(1)] = (10));

} else {
var statearr_33468_33494 = state_33445__$1;
(statearr_33468_33494[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (5))){
var inst_33407 = (state_33445[(8)]);
var inst_33412 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",733,"([:or nil? map?] ?pulled)",inst_33407,null,null);
var state_33445__$1 = state_33445;
var statearr_33469_33495 = state_33445__$1;
(statearr_33469_33495[(2)] = inst_33412);

(statearr_33469_33495[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (14))){
var state_33445__$1 = state_33445;
var statearr_33470_33496 = state_33445__$1;
(statearr_33470_33496[(2)] = null);

(statearr_33470_33496[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (16))){
var inst_33400 = (state_33445[(9)]);
var inst_33423 = (state_33445[(12)]);
var inst_33433 = (state_33445[(2)]);
var inst_33434 = (inst_33400 + (1));
var inst_33400__$1 = inst_33434;
var inst_33401 = inst_33423;
var state_33445__$1 = (function (){var statearr_33471 = state_33445;
(statearr_33471[(13)] = inst_33433);

(statearr_33471[(7)] = inst_33401);

(statearr_33471[(9)] = inst_33400__$1);

return statearr_33471;
})();
var statearr_33472_33497 = state_33445__$1;
(statearr_33472_33497[(2)] = null);

(statearr_33472_33497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (10))){
var inst_33423 = (state_33445[(12)]);
var inst_33426 = cljs.core.complement(inst_33423);
var inst_33427 = taoensso.encore.rsome(inst_33426,client_ids_unsatisfied);
var state_33445__$1 = state_33445;
if(cljs.core.truth_(inst_33427)){
var statearr_33473_33498 = state_33445__$1;
(statearr_33473_33498[(1)] = (13));

} else {
var statearr_33474_33499 = state_33445__$1;
(statearr_33474_33499[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33446 === (8))){
var state_33445__$1 = state_33445;
var statearr_33475_33500 = state_33445__$1;
(statearr_33475_33500[(2)] = null);

(statearr_33475_33500[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__28167__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__28043__auto__,c__28167__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto____0 = (function (){
var statearr_33479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33479[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto__);

(statearr_33479[(1)] = (1));

return statearr_33479;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto____1 = (function (state_33445){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_33445);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e33480){if((e33480 instanceof Object)){
var ex__28047__auto__ = e33480;
var statearr_33481_33501 = state_33445;
(statearr_33481_33501[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33445);

return cljs.core.cst$kw$recur;
} else {
throw e33480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33502 = state_33445;
state_33445 = G__33502;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto__ = function(state_33445){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto____1.call(this,state_33445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__28169__auto__ = (function (){var statearr_33482 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_33482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_33482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__28167__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__7077__auto__ = (((chsk == null))?null:chsk);
var m__7078__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__7078__auto__.call(null,chsk));
} else {
var m__7078__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__7078__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__7077__auto__ = (((chsk == null))?null:chsk);
var m__7078__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__7078__auto__.call(null,chsk,reason));
} else {
var m__7078__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__7078__auto____$1.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__7077__auto__ = (((chsk == null))?null:chsk);
var m__7078__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__7078__auto__.call(null,chsk));
} else {
var m__7078__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__7078__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__7077__auto__ = (((chsk == null))?null:chsk);
var m__7078__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__7078__auto__.call(null,chsk,ev,opts));
} else {
var m__7078__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__7078__auto____$1.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,cljs.core.cst$kw$requested_DASH_disconnect);
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args33503 = [];
var len__7489__auto___33506 = arguments.length;
var i__7490__auto___33507 = (0);
while(true){
if((i__7490__auto___33507 < len__7489__auto___33506)){
args33503.push((arguments[i__7490__auto___33507]));

var G__33508 = (i__7490__auto___33507 + (1));
i__7490__auto___33507 = G__33508;
continue;
} else {
}
break;
}

var G__33505 = args33503.length;
switch (G__33505) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33503.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$timeout_DASH_ms,_QMARK_timeout_ms,cljs.core.cst$kw$cb,_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",783,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1454435669);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",788,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,433402995);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__33511_33512 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__33511_33512) : _QMARK_cb_fn.call(null,G__33511_33512));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type(_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__33516 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33516,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33516,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_33525 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33522){if((e33522 instanceof Error)){
var e = e33522;
return e;
} else {
throw e33522;

}
}})();
if((e_33525 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",835,"(map? state)",state,e_33525,null);
}

var e_33526 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__33524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__33524) : taoensso.truss.impl.set_STAR_.call(null,G__33524));
})(),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33523){if((e33523 instanceof Error)){
var e = e33523;
return e;
} else {
throw e33523;

}
}})();
if((e_33526 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",836,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_33526,null);
}

if(cljs.core.truth_((function (){var or__6414__auto__ = cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,cljs.core.cst$kw$unexpected);
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect),cljs.core.cst$kw$open_QMARK_,false,cljs.core.array_seq([cljs.core.cst$kw$last_DASH_close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$reason,reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb))){
return _QMARK_cb;
} else {
var e_33535 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33531){if((e33531 instanceof Error)){
var e = e33531;
return e;
} else {
throw e33531;

}
}})();
if((e_33535 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",857,"(enc/chan? ?cb)",_QMARK_cb,e_33535,null);
}

taoensso.sente.assert_event(ev);

var vec__33532 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33532,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33532,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__33532,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(taoensso.encore.as_qname(ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__33532,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",868,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,670212067);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",869,"(vector? clj)",clj,null,null));
var seq__33546 = cljs.core.seq(buffered_evs);
var chunk__33547 = null;
var count__33548 = (0);
var i__33549 = (0);
while(true){
if((i__33549 < count__33548)){
var ev = chunk__33547.cljs$core$IIndexed$_nth$arity$2(null,i__33549);
taoensso.sente.assert_event(ev);

var vec__33550_33556 = ev;
var id_33557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33550_33556,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_33557),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__33558 = seq__33546;
var G__33559 = chunk__33547;
var G__33560 = count__33548;
var G__33561 = (i__33549 + (1));
seq__33546 = G__33558;
chunk__33547 = G__33559;
count__33548 = G__33560;
i__33549 = G__33561;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__33546);
if(temp__4657__auto__){
var seq__33546__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33546__$1)){
var c__7225__auto__ = cljs.core.chunk_first(seq__33546__$1);
var G__33562 = cljs.core.chunk_rest(seq__33546__$1);
var G__33563 = c__7225__auto__;
var G__33564 = cljs.core.count(c__7225__auto__);
var G__33565 = (0);
seq__33546 = G__33562;
chunk__33547 = G__33563;
count__33548 = G__33564;
i__33549 = G__33565;
continue;
} else {
var ev = cljs.core.first(seq__33546__$1);
taoensso.sente.assert_event(ev);

var vec__33553_33566 = ev;
var id_33567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33553_33566,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_33567),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__33568 = cljs.core.next(seq__33546__$1);
var G__33569 = null;
var G__33570 = (0);
var G__33571 = (0);
seq__33546 = G__33568;
chunk__33547 = G__33569;
count__33548 = G__33570;
i__33549 = G__33571;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__6402__auto__ = cljs.core.vector_QMARK_(x);
if(and__6402__auto__){
var vec__33581 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33581,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__6402__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_33607 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__33597 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__33597) : taoensso.truss.impl.set_STAR_.call(null,G__33597));
})(),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33596){if((e33596 instanceof Error)){
var e = e33596;
return e;
} else {
throw e33596;

}
}})();
if((e_33607 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",883,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_33607,null);
}

var e_33608 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_(clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33598){if((e33598 instanceof Error)){
var e = e33598;
return e;
} else {
throw e33598;

}
}})();
if((e_33608 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",884,"(handshake? clj)",clj,e_33608,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",885,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-1046924923);

var vec__33599 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599,(0),null);
var vec__33602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(2),null);
var map__33605 = chsk;
var map__33605__$1 = ((((!((map__33605 == null)))?((((map__33605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33605):map__33605);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",904,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__33599,_,vec__33602,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__33605,map__33605__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__33599,_,vec__33602,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__33605,map__33605__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-2128512543);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__33599,_,vec__33602,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__33605,map__33605__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__33584_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__33584_SHARP_,new_state], 0));
});})(vec__33599,_,vec__33602,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__33605,map__33605__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return cljs.core.cst$kw$handled;
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(cljs.core.truth_((function (){var and__6402__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__6402__auto__)){
return typeof require !== 'undefined';
} else {
return and__6402__auto__;
}
})())){
try{return require("websocket");
}catch (e33609){var e = e33609;
return null;
}} else {
return null;
}
}),null));

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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k33616,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__33618 = (((k33616 instanceof cljs.core.Keyword))?k33616.fqn:null);
switch (G__33618) {
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33616,else__7039__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33615){
var self__ = this;
var G__33615__$1 = this;
return (new cljs.core.RecordIter((0),G__33615__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$udt_DASH_last_DASH_comms_,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$retry_DASH_count_,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$socket_,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$cbs_DASH_waiting_,null,cljs.core.cst$kw$state_,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__33615){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__33619 = cljs.core.keyword_identical_QMARK_;
var expr__33620 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__33622 = cljs.core.cst$kw$client_DASH_id;
var G__33623 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33622,G__33623) : pred__33619.call(null,G__33622,G__33623));
})())){
return (new taoensso.sente.ChWebSocket(G__33615,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33624 = cljs.core.cst$kw$chs;
var G__33625 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33624,G__33625) : pred__33619.call(null,G__33624,G__33625));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__33615,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33626 = cljs.core.cst$kw$params;
var G__33627 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33626,G__33627) : pred__33619.call(null,G__33626,G__33627));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__33615,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33628 = cljs.core.cst$kw$packer;
var G__33629 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33628,G__33629) : pred__33619.call(null,G__33628,G__33629));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__33615,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33630 = cljs.core.cst$kw$url;
var G__33631 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33630,G__33631) : pred__33619.call(null,G__33630,G__33631));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__33615,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33632 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__33633 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33632,G__33633) : pred__33619.call(null,G__33632,G__33633));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__33615,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33634 = cljs.core.cst$kw$state_;
var G__33635 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33634,G__33635) : pred__33619.call(null,G__33634,G__33635));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__33615,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33636 = cljs.core.cst$kw$instance_DASH_handle_;
var G__33637 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33636,G__33637) : pred__33619.call(null,G__33636,G__33637));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__33615,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33638 = cljs.core.cst$kw$retry_DASH_count_;
var G__33639 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33638,G__33639) : pred__33619.call(null,G__33638,G__33639));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__33615,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33640 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__33641 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33640,G__33641) : pred__33619.call(null,G__33640,G__33641));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__33615,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33642 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__33643 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33642,G__33643) : pred__33619.call(null,G__33642,G__33643));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__33615,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33644 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__33645 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33644,G__33645) : pred__33619.call(null,G__33644,G__33645));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__33615,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33646 = cljs.core.cst$kw$socket_;
var G__33647 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33646,G__33647) : pred__33619.call(null,G__33646,G__33647));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__33615,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33648 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__33649 = expr__33620;
return (pred__33619.cljs$core$IFn$_invoke$arity$2 ? pred__33619.cljs$core$IFn$_invoke$arity$2(G__33648,G__33649) : pred__33619.call(null,G__33648,G__33649));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__33615,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__33615),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__33615){
var self__ = this;
var this__7035__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__33615,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.instance_handle_,null) : cljs.core.reset_BANG_.call(null,self__.instance_handle_,null));

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__33610_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__33610_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.socket_) : cljs.core.deref.call(null,self__.socket_));
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_(chsk__$1,cljs.core.cst$kw$requested_DASH_reconnect);

return taoensso.sente._chsk_connect_BANG_(chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__33650 = opts;
var map__33650__$1 = ((((!((map__33650 == null)))?((((map__33650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33650):map__33650);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33650__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33650__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33650__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4(self__.packer,cljs.core.meta(ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___33755 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___33755)){
var cb_uuid_33756 = temp__4657__auto___33755;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_33756], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33652){if((e33652 instanceof Error)){
var e = e33652;
return e;
} else {
throw e33652;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",974,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___33757__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___33757__$1)){
var timeout_ms_33758 = temp__4657__auto___33757__$1;
var c__28167__auto___33759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___33759,timeout_ms_33758,temp__4657__auto___33757__$1,cb_uuid_33756,temp__4657__auto___33755,_QMARK_cb_uuid,ppstr,map__33650,map__33650__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___33759,timeout_ms_33758,temp__4657__auto___33757__$1,cb_uuid_33756,temp__4657__auto___33755,_QMARK_cb_uuid,ppstr,map__33650,map__33650__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_33663){
var state_val_33664 = (state_33663[(1)]);
if((state_val_33664 === (1))){
var inst_33653 = cljs.core.async.timeout(timeout_ms_33758);
var state_33663__$1 = state_33663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33663__$1,(2),inst_33653);
} else {
if((state_val_33664 === (2))){
var inst_33656 = (state_33663[(7)]);
var inst_33655 = (state_33663[(2)]);
var inst_33656__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_33663__$1 = (function (){var statearr_33665 = state_33663;
(statearr_33665[(7)] = inst_33656__$1);

(statearr_33665[(8)] = inst_33655);

return statearr_33665;
})();
if(cljs.core.truth_(inst_33656__$1)){
var statearr_33666_33760 = state_33663__$1;
(statearr_33666_33760[(1)] = (3));

} else {
var statearr_33667_33761 = state_33663__$1;
(statearr_33667_33761[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33664 === (3))){
var inst_33656 = (state_33663[(7)]);
var inst_33658 = (function (){var G__33668 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_33656.cljs$core$IFn$_invoke$arity$1 ? inst_33656.cljs$core$IFn$_invoke$arity$1(G__33668) : inst_33656.call(null,G__33668));
})();
var state_33663__$1 = state_33663;
var statearr_33669_33762 = state_33663__$1;
(statearr_33669_33762[(2)] = inst_33658);

(statearr_33669_33762[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33664 === (4))){
var state_33663__$1 = state_33663;
var statearr_33670_33763 = state_33663__$1;
(statearr_33670_33763[(2)] = null);

(statearr_33670_33763[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33664 === (5))){
var inst_33661 = (state_33663[(2)]);
var state_33663__$1 = state_33663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33663__$1,inst_33661);
} else {
return null;
}
}
}
}
}
});})(c__28167__auto___33759,timeout_ms_33758,temp__4657__auto___33757__$1,cb_uuid_33756,temp__4657__auto___33755,_QMARK_cb_uuid,ppstr,map__33650,map__33650__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__28043__auto__,c__28167__auto___33759,timeout_ms_33758,temp__4657__auto___33757__$1,cb_uuid_33756,temp__4657__auto___33755,_QMARK_cb_uuid,ppstr,map__33650,map__33650__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__28044__auto__ = null;
var taoensso$sente$state_machine__28044__auto____0 = (function (){
var statearr_33674 = [null,null,null,null,null,null,null,null,null];
(statearr_33674[(0)] = taoensso$sente$state_machine__28044__auto__);

(statearr_33674[(1)] = (1));

return statearr_33674;
});
var taoensso$sente$state_machine__28044__auto____1 = (function (state_33663){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_33663);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e33675){if((e33675 instanceof Object)){
var ex__28047__auto__ = e33675;
var statearr_33676_33764 = state_33663;
(statearr_33676_33764[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33663);

return cljs.core.cst$kw$recur;
} else {
throw e33675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33765 = state_33663;
state_33663 = G__33765;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$state_machine__28044__auto__ = function(state_33663){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28044__auto____1.call(this,state_33663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28044__auto____0;
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28044__auto____1;
return taoensso$sente$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___33759,timeout_ms_33758,temp__4657__auto___33757__$1,cb_uuid_33756,temp__4657__auto___33755,_QMARK_cb_uuid,ppstr,map__33650,map__33650__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__28169__auto__ = (function (){var statearr_33677 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_33677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___33759);

return statearr_33677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___33759,timeout_ms_33758,temp__4657__auto___33757__$1,cb_uuid_33756,temp__4657__auto___33755,_QMARK_cb_uuid,ppstr,map__33650,map__33650__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.socket_) : cljs.core.deref.call(null,self__.socket_)).send(ppstr);

var G__33681_33766 = self__.udt_last_comms_;
var G__33682_33767 = taoensso.encore.now_udt();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33681_33766,G__33682_33767) : cljs.core.reset_BANG_.call(null,G__33681_33766,G__33682_33767));

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e33678){var e = e33678;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init7447384388010150061.clj",986,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__33650,map__33650__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__33650,map__33650__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1746756137);

var temp__4657__auto___33768 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___33768)){
var cb_uuid_33769 = temp__4657__auto___33768;
var cb_fn_STAR__33770 = (function (){var or__6414__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_33769);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33679){if((e33679 instanceof Error)){
var e__$1 = e33679;
return e__$1;
} else {
throw e33679;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",989,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__33680_33771 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__33770.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__33770.cljs$core$IFn$_invoke$arity$1(G__33680_33771) : cb_fn_STAR__33770.call(null,G__33680_33771));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__6414__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.sente._QMARK_node_npm_websocket_) : cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_)),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = (function (){var G__33683 = self__.instance_handle_;
var G__33684 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33683,G__33684) : cljs.core.reset_BANG_.call(null,G__33683,G__33684));
})();
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.instance_handle_) : cljs.core.deref.call(null,self__.instance_handle_)),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1011,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1999389373);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__33611_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33611_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e33695){var e = e33695;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1025,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-401305954);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
var G__33696 = self__.socket_;
var G__33697 = (function (){var G__33698 = _QMARK_socket;
(G__33698["onerror"] = ((function (G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1035,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e33699){var _ = e33699;
return ws_ev;
}})()], null);
});})(G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,299408832);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__33612_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33612_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__33698["onmessage"] = ((function (G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__33700 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(1),null);
var G__33703_33772 = self__.udt_last_comms_;
var G__33704_33773 = taoensso.encore.now_udt();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33703_33772,G__33704_33773) : cljs.core.reset_BANG_.call(null,G__33703_33772,G__33704_33773));

var or__6414__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ws,chsk__$1,clj);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,(0)) : cljs.core.reset_BANG_.call(null,self__.retry_count_,(0)));

return cljs.core.cst$kw$handshake;
})()
:null);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping], null));

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1071,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6414__auto____$1,or__6414__auto__,ppstr,vec__33700,clj,_QMARK_cb_uuid,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6414__auto____$1,or__6414__auto__,ppstr,vec__33700,clj,_QMARK_cb_uuid,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1629072873);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__33698["onclose"] = ((function (G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1093,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1344913080);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__33613_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33613_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__33614_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__33614_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__33698,G__33696,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__33698;
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33696,G__33697) : cljs.core.reset_BANG_.call(null,G__33696,G__33697));
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___33774__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___33774__$1)){
var ms_33775 = temp__4657__auto___33774__$1;
var c__28167__auto___33776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___33776,ms_33775,temp__4657__auto___33774__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___33776,ms_33775,temp__4657__auto___33774__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_33732){
var state_val_33733 = (state_33732[(1)]);
if((state_val_33733 === (7))){
var inst_33728 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33734_33777 = state_33732__$1;
(statearr_33734_33777[(2)] = inst_33728);

(statearr_33734_33777[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33733 === (1))){
var state_33732__$1 = state_33732;
var statearr_33735_33778 = state_33732__$1;
(statearr_33735_33778[(2)] = null);

(statearr_33735_33778[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33733 === (4))){
var inst_33709 = (state_33732[(2)]);
var inst_33710 = have_handle_QMARK_();
var state_33732__$1 = (function (){var statearr_33736 = state_33732;
(statearr_33736[(7)] = inst_33709);

return statearr_33736;
})();
if(cljs.core.truth_(inst_33710)){
var statearr_33737_33779 = state_33732__$1;
(statearr_33737_33779[(1)] = (5));

} else {
var statearr_33738_33780 = state_33732__$1;
(statearr_33738_33780[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33733 === (6))){
var state_33732__$1 = state_33732;
var statearr_33739_33781 = state_33732__$1;
(statearr_33739_33781[(2)] = null);

(statearr_33739_33781[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33733 === (3))){
var inst_33730 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33732__$1,inst_33730);
} else {
if((state_val_33733 === (2))){
var inst_33706 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.udt_last_comms_) : cljs.core.deref.call(null,self__.udt_last_comms_));
var inst_33707 = cljs.core.async.timeout(ms_33775);
var state_33732__$1 = (function (){var statearr_33740 = state_33732;
(statearr_33740[(8)] = inst_33706);

return statearr_33740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33732__$1,(4),inst_33707);
} else {
if((state_val_33733 === (9))){
var state_33732__$1 = state_33732;
var statearr_33741_33782 = state_33732__$1;
(statearr_33741_33782[(2)] = null);

(statearr_33741_33782[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33733 === (5))){
var inst_33706 = (state_33732[(8)]);
var inst_33712 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.udt_last_comms_) : cljs.core.deref.call(null,self__.udt_last_comms_));
var inst_33713 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33706,inst_33712);
var state_33732__$1 = state_33732;
if(inst_33713){
var statearr_33742_33783 = state_33732__$1;
(statearr_33742_33783[(1)] = (8));

} else {
var statearr_33743_33784 = state_33732__$1;
(statearr_33743_33784[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33733 === (10))){
var inst_33724 = (state_33732[(2)]);
var state_33732__$1 = (function (){var statearr_33744 = state_33732;
(statearr_33744[(9)] = inst_33724);

return statearr_33744;
})();
var statearr_33745_33785 = state_33732__$1;
(statearr_33745_33785[(2)] = null);

(statearr_33745_33785[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33733 === (8))){
var inst_33715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33716 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_33717 = (new cljs.core.PersistentVector(null,1,(5),inst_33715,inst_33716,null));
var inst_33718 = [cljs.core.cst$kw$flush_QMARK_];
var inst_33719 = [true];
var inst_33720 = cljs.core.PersistentHashMap.fromArrays(inst_33718,inst_33719);
var inst_33721 = taoensso.sente._chsk_send_BANG_(chsk__$1,inst_33717,inst_33720);
var state_33732__$1 = state_33732;
var statearr_33746_33786 = state_33732__$1;
(statearr_33746_33786[(2)] = inst_33721);

(statearr_33746_33786[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__28167__auto___33776,ms_33775,temp__4657__auto___33774__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__28043__auto__,c__28167__auto___33776,ms_33775,temp__4657__auto___33774__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__28044__auto__ = null;
var taoensso$sente$state_machine__28044__auto____0 = (function (){
var statearr_33750 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33750[(0)] = taoensso$sente$state_machine__28044__auto__);

(statearr_33750[(1)] = (1));

return statearr_33750;
});
var taoensso$sente$state_machine__28044__auto____1 = (function (state_33732){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_33732);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e33751){if((e33751 instanceof Object)){
var ex__28047__auto__ = e33751;
var statearr_33752_33787 = state_33732;
(statearr_33752_33787[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33732);

return cljs.core.cst$kw$recur;
} else {
throw e33751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__33788 = state_33732;
state_33732 = G__33788;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$state_machine__28044__auto__ = function(state_33732){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28044__auto____1.call(this,state_33732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28044__auto____0;
taoensso$sente$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28044__auto____1;
return taoensso$sente$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___33776,ms_33775,temp__4657__auto___33774__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__28169__auto__ = (function (){var statearr_33753 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_33753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___33776);

return statearr_33753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___33776,ms_33775,temp__4657__auto___33774__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,(0)) : cljs.core.reset_BANG_.call(null,self__.retry_count_,(0)));

connect_fn();

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$ws_DASH_kalive_DASH_ms,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$retry_DASH_count_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$cbs_DASH_waiting_,cljs.core.cst$sym$socket_,cljs.core.cst$sym$udt_DASH_last_DASH_comms_], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__33617){
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__33617),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__33617),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33617,cljs.core.cst$kw$client_DASH_id,cljs.core.array_seq([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$state_,(function (){var G__33791 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ws,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33791) : cljs.core.atom.call(null,G__33791));
})(),cljs.core.cst$kw$instance_DASH_handle_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),cljs.core.cst$kw$retry_DASH_count_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),cljs.core.cst$kw$ever_DASH_opened_QMARK__,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),cljs.core.cst$kw$cbs_DASH_waiting_,(function (){var G__33792 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33792) : cljs.core.atom.call(null,G__33792));
})(),cljs.core.cst$kw$socket_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),cljs.core.cst$kw$udt_DASH_last_DASH_comms_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$secs,(60)], 0));

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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k33800,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__33802 = (((k33800 instanceof cljs.core.Keyword))?k33800.fqn:null);
switch (G__33802) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33800,else__7039__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33799){
var self__ = this;
var G__33799__$1 = this;
return (new cljs.core.RecordIter((0),G__33799__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$curr_DASH_xhr_,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$ajax_DASH_opts,null,cljs.core.cst$kw$state_,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__33799){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__33803 = cljs.core.keyword_identical_QMARK_;
var expr__33804 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__33806 = cljs.core.cst$kw$client_DASH_id;
var G__33807 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33806,G__33807) : pred__33803.call(null,G__33806,G__33807));
})())){
return (new taoensso.sente.ChAjaxSocket(G__33799,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33808 = cljs.core.cst$kw$chs;
var G__33809 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33808,G__33809) : pred__33803.call(null,G__33808,G__33809));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__33799,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33810 = cljs.core.cst$kw$params;
var G__33811 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33810,G__33811) : pred__33803.call(null,G__33810,G__33811));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__33799,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33812 = cljs.core.cst$kw$packer;
var G__33813 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33812,G__33813) : pred__33803.call(null,G__33812,G__33813));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__33799,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33814 = cljs.core.cst$kw$url;
var G__33815 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33814,G__33815) : pred__33803.call(null,G__33814,G__33815));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__33799,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33816 = cljs.core.cst$kw$state_;
var G__33817 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33816,G__33817) : pred__33803.call(null,G__33816,G__33817));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__33799,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33818 = cljs.core.cst$kw$instance_DASH_handle_;
var G__33819 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33818,G__33819) : pred__33803.call(null,G__33818,G__33819));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__33799,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33820 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__33821 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33820,G__33821) : pred__33803.call(null,G__33820,G__33821));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__33799,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33822 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__33823 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33822,G__33823) : pred__33803.call(null,G__33822,G__33823));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__33799,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33824 = cljs.core.cst$kw$ajax_DASH_opts;
var G__33825 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33824,G__33825) : pred__33803.call(null,G__33824,G__33825));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__33799,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33826 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__33827 = expr__33804;
return (pred__33803.cljs$core$IFn$_invoke$arity$2 ? pred__33803.cljs$core$IFn$_invoke$arity$2(G__33826,G__33827) : pred__33803.call(null,G__33826,G__33827));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__33799,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__33799),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__33799){
var self__ = this;
var this__7035__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__33799,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.instance_handle_,null) : cljs.core.reset_BANG_.call(null,self__.instance_handle_,null));

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__33793_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__33793_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.curr_xhr_) : cljs.core.deref.call(null,self__.curr_xhr_));
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_(chsk__$1,cljs.core.cst$kw$requested_DASH_reconnect);

return taoensso.sente._chsk_connect_BANG_(chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__33828 = opts;
var map__33828__$1 = ((((!((map__33828 == null)))?((((map__33828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33828):map__33828);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33828__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33828__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33828__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_)));
var G__33830_33883 = self__.url;
var G__33831_33884 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__6414__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$headers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,csrf_token], null)], 0)),cljs.core.cst$kw$params,(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4(self__.packer,cljs.core.meta(ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?cljs.core.cst$kw$ajax_DASH_cb:null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$csrf_DASH_token,csrf_token,cljs.core.cst$kw$client_DASH_id,self__.client_id,cljs.core.cst$kw$ppstr,ppstr], null)], 0));
})()], null)], 0));
var G__33832_33885 = ((function (G__33830_33883,G__33831_33884,csrf_token,map__33828,map__33828__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__33833){
var map__33841 = p__33833;
var map__33841__$1 = ((((!((map__33841 == null)))?((((map__33841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33841):map__33841);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33841__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33841__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__33843 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__33843) : _QMARK_cb_fn.call(null,G__33843));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__33841,map__33841__$1,_QMARK_error,_QMARK_content,G__33830_33883,G__33831_33884,csrf_token,map__33828,map__33828__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__33794_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__33794_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__33841,map__33841__$1,_QMARK_error,_QMARK_content,G__33830_33883,G__33831_33884,csrf_token,map__33828,map__33828__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__33844 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__33844) : _QMARK_cb_fn.call(null,G__33844));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__33845 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33845,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33845,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1213,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__33845,resp_clj,___$1,map__33841,map__33841__$1,_QMARK_error,_QMARK_content,G__33830_33883,G__33831_33884,csrf_token,map__33828,map__33828__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__33845,resp_clj,___$1,map__33841,map__33841__$1,_QMARK_error,_QMARK_content,G__33830_33883,G__33831_33884,csrf_token,map__33828,map__33828__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-926565117);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__33845,resp_clj,___$1,map__33841,map__33841__$1,_QMARK_error,_QMARK_content,G__33830_33883,G__33831_33884,csrf_token,map__33828,map__33828__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__33795_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33795_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__33845,resp_clj,___$1,map__33841,map__33841__$1,_QMARK_error,_QMARK_content,G__33830_33883,G__33831_33884,csrf_token,map__33828,map__33828__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__33830_33883,G__33831_33884,csrf_token,map__33828,map__33828__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__33830_33883,G__33831_33884,G__33832_33885) : taoensso.sente.ajax_lite.call(null,G__33830_33883,G__33831_33884,G__33832_33885));

return cljs.core.cst$kw$apparent_DASH_success;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = (function (){var G__33848 = self__.instance_handle_;
var G__33849 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33848,G__33849) : cljs.core.reset_BANG_.call(null,G__33848,G__33849));
})();
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.instance_handle_) : cljs.core.deref.call(null,self__.instance_handle_)),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1223,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-602676256);

if(cljs.core.truth_(have_handle_QMARK_())){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1231,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-724105689);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__33796_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33796_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
var G__33866 = self__.curr_xhr_;
var G__33867 = (function (){var G__33868 = self__.url;
var G__33869 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__6414__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__33870 = ((function (G__33868,G__33869,G__33866,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__33871){
var map__33877 = p__33871;
var map__33877__$1 = ((((!((map__33877 == null)))?((((map__33877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33877):map__33877);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33877__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33877__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__33877,map__33877__$1,_QMARK_error,_QMARK_content,G__33868,G__33869,G__33866,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__33797_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__33797_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__33877,map__33877__$1,_QMARK_error,_QMARK_content,G__33868,G__33869,G__33866,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__33879 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33879,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__33879,clj,handshake_QMARK_,map__33877,map__33877__$1,_QMARK_error,_QMARK_content,G__33868,G__33869,G__33866,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__33798_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33798_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__33879,clj,handshake_QMARK_,map__33877,map__33877__$1,_QMARK_error,_QMARK_content,G__33868,G__33869,G__33866,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn((0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__6414__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_timeout))?(function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.sente.debug_mode_QMARK__) : cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__)))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$debug_SLASH_timeout], null)], null));
} else {
}

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__33868,G__33869,G__33866,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__33868,G__33869,G__33870) : taoensso.sente.ajax_lite.call(null,G__33868,G__33869,G__33870));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33866,G__33867) : cljs.core.reset_BANG_.call(null,G__33866,G__33867));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn((0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$ajax_DASH_opts,cljs.core.cst$sym$curr_DASH_xhr_], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__33801){
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__33801),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__33801),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33801,cljs.core.cst$kw$client_DASH_id,cljs.core.array_seq([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_,(function (){var G__33887 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ajax,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33887) : cljs.core.atom.call(null,G__33887));
})(),cljs.core.cst$kw$instance_DASH_handle_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),cljs.core.cst$kw$ever_DASH_opened_QMARK__,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),cljs.core.cst$kw$curr_DASH_xhr_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null),opts], 0)));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k33889,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__33891 = (((k33889 instanceof cljs.core.Keyword))?k33889.fqn:null);
switch (G__33891) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33889,else__7039__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33888){
var self__ = this;
var G__33888__$1 = this;
return (new cljs.core.RecordIter((0),G__33888__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$impl_,null,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,null,cljs.core.cst$kw$state_,null,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__33888){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__33892 = cljs.core.keyword_identical_QMARK_;
var expr__33893 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__33895 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__33896 = expr__33893;
return (pred__33892.cljs$core$IFn$_invoke$arity$2 ? pred__33892.cljs$core$IFn$_invoke$arity$2(G__33895,G__33896) : pred__33892.call(null,G__33895,G__33896));
})())){
return (new taoensso.sente.ChAutoSocket(G__33888,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33897 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__33898 = expr__33893;
return (pred__33892.cljs$core$IFn$_invoke$arity$2 ? pred__33892.cljs$core$IFn$_invoke$arity$2(G__33897,G__33898) : pred__33892.call(null,G__33897,G__33898));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__33888,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33899 = cljs.core.cst$kw$state_;
var G__33900 = expr__33893;
return (pred__33892.cljs$core$IFn$_invoke$arity$2 ? pred__33892.cljs$core$IFn$_invoke$arity$2(G__33899,G__33900) : pred__33892.call(null,G__33899,G__33900));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__33888,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33901 = cljs.core.cst$kw$impl_;
var G__33902 = expr__33893;
return (pred__33892.cljs$core$IFn$_invoke$arity$2 ? pred__33892.cljs$core$IFn$_invoke$arity$2(G__33901,G__33902) : pred__33892.call(null,G__33901,G__33902));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__33888,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__33888),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__33888){
var self__ = this;
var this__7035__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__33888,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.impl_) : cljs.core.deref.call(null,self__.impl_));
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.impl_) : cljs.core.deref.call(null,self__.impl_));
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$requested_DASH_reconnect);

return taoensso.sente._chsk_connect_BANG_(chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.impl_) : cljs.core.deref.call(null,self__.impl_));
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__33903 = opts;
var map__33903__$1 = ((((!((map__33903 == null)))?((((map__33903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33903):map__33903);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33903__$1,cljs.core.cst$kw$cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade);

return taoensso.sente._chsk_connect_BANG_(taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___33910 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___33910,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.impl_) : cljs.core.deref.call(null,self__.impl_));
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ever_opened_QMARK__) : cljs.core.deref.call(null,ever_opened_QMARK__)))){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$last_DASH_error.cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(downgraded_QMARK___33910,false,true))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1359,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___33910,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___33910,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,1396116058);

taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax);

var G__33905 = self__.impl_;
var G__33906 = ajax_conn_BANG_();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33905,G__33906) : cljs.core.reset_BANG_.call(null,G__33905,G__33906));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___33910,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_(taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
var G__33907_33911 = self__.impl_;
var G__33908_33912 = (function (){var or__6414__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return ajax_conn_BANG_();
}
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33907_33911,G__33908_33912) : cljs.core.reset_BANG_.call(null,G__33907_33911,G__33908_33912));

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ws_DASH_chsk_DASH_opts,cljs.core.cst$sym$ajax_DASH_chsk_DASH_opts,cljs.core.cst$sym$state_,cljs.core.cst$sym$impl_], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__33890){
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__33890),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__33890),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__33890),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__33890),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33890,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.array_seq([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,(function (){var G__33914 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33914) : cljs.core.atom.call(null,G__33914));
})(),cljs.core.cst$kw$impl_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__33920 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__33920) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__33922 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__33922) : taoensso.truss.impl.set_STAR_.call(null,G__33922));
})(),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33921){if((e33921 instanceof Error)){
var e = e33921;
return e;
} else {
throw e33921;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1379,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__33923 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33923) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__33924 = protocol__$2;
switch (G__33924) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(protocol__$2)].join('')));

}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$3),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([host,path], 0)))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___33952 = arguments.length;
var i__7490__auto___33953 = (0);
while(true){
if((i__7490__auto___33953 < len__7489__auto___33952)){
args__7496__auto__.push((arguments[i__7490__auto___33953]));

var G__33954 = (i__7490__auto___33953 + (1));
i__7490__auto___33953 = G__33954;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__33930){
var vec__33931 = p__33930;
var map__33934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33931,(0),null);
var map__33934__$1 = ((((!((map__33934 == null)))?((((map__33934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33934):map__33934);
var opts = map__33934__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33934__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33934__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33934__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__6414__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33934__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33934__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33934__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33934__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33934__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33934__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33934__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33934__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33931,(1),null);
var e_33955 = (function (){try{if(((function (vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__33937 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__33937) : taoensso.truss.impl.set_STAR_.call(null,G__33937));
})(),x);
});})(vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33936){if((e33936 instanceof Error)){
var e = e33936;
return e;
} else {
throw e33936;

}
}})();
if((e_33955 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1421,"([:in #{:ws :ajax :auto}] type)",type,e_33955,null);
}

var e_33956 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33938){if((e33938 instanceof Error)){
var e = e33938;
return e;
} else {
throw e33938;

}
}})();
if((e_33956 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1422,"(enc/nblank-str? client-id)",client_id,e_33956,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1424,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1173458326);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1425,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,686019736);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__33939 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__6414__auto__ = path;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.cst$kw$pathname.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = cljs.core.cst$kw$chsk_DASH_url_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33942 = path__$1;
var G__33943 = win_loc;
var G__33944 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33942,G__33943,G__33944) : f.call(null,G__33942,G__33943,G__33944));
})(),(function (){var G__33945 = path__$1;
var G__33946 = win_loc;
var G__33947 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33945,G__33946,G__33947) : f.call(null,G__33945,G__33946,G__33947));
})()], null);
} else {
var protocol__$1 = (function (){var or__6414__auto__ = protocol;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
var or__6414__auto____$1 = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__6414__auto____$1)){
return or__6414__auto____$1;
} else {
return cljs.core.cst$kw$http;
}
}
})();
var host__$1 = (function (){var or__6414__auto__ = host;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ws),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ajax)], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__33939,ws_url,ajax_url,vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__33939,ws_url,ajax_url,vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__33948 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33948) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__33939,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__33949 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33949,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33949,(1),null);
var ev__$1 = vec__33949;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__33939,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1513,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__33939,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__33939,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__33931,map__33934,map__33934__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1389076381);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq33928){
var G__33929 = cljs.core.first(seq33928);
var seq33928__$1 = cljs.core.next(seq33928);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33929,seq33928__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__34038 = opts;
var map__34038__$1 = ((((!((map__34038 == null)))?((((map__34038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34038):map__34038);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34038__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34038__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34038__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__28167__auto___34118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_34084){
var state_val_34085 = (state_34084[(1)]);
if((state_val_34085 === (7))){
var inst_34080 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34086_34119 = state_34084__$1;
(statearr_34086_34119[(2)] = inst_34080);

(statearr_34086_34119[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (1))){
var state_34084__$1 = state_34084;
var statearr_34087_34120 = state_34084__$1;
(statearr_34087_34120[(2)] = null);

(statearr_34087_34120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (4))){
var inst_34051 = (state_34084[(7)]);
var inst_34048 = (state_34084[(8)]);
var inst_34050 = (state_34084[(9)]);
var inst_34048__$1 = (state_34084[(2)]);
var inst_34049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34048__$1,(0),null);
var inst_34050__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34048__$1,(1),null);
var inst_34051__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34050__$1,ch_ctrl);
var state_34084__$1 = (function (){var statearr_34088 = state_34084;
(statearr_34088[(7)] = inst_34051__$1);

(statearr_34088[(10)] = inst_34049);

(statearr_34088[(8)] = inst_34048__$1);

(statearr_34088[(9)] = inst_34050__$1);

return statearr_34088;
})();
if(inst_34051__$1){
var statearr_34089_34121 = state_34084__$1;
(statearr_34089_34121[(1)] = (5));

} else {
var statearr_34090_34122 = state_34084__$1;
(statearr_34090_34122[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (15))){
var inst_34049 = (state_34084[(10)]);
var state_34084__$1 = state_34084;
var statearr_34091_34123 = state_34084__$1;
(statearr_34091_34123[(2)] = inst_34049);

(statearr_34091_34123[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (13))){
var inst_34066 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34092_34124 = state_34084__$1;
(statearr_34092_34124[(2)] = inst_34066);

(statearr_34092_34124[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (6))){
var inst_34049 = (state_34084[(10)]);
var inst_34056 = (inst_34049 == null);
var inst_34057 = cljs.core.not(inst_34056);
var state_34084__$1 = state_34084;
if(inst_34057){
var statearr_34093_34125 = state_34084__$1;
(statearr_34093_34125[(1)] = (8));

} else {
var statearr_34094_34126 = state_34084__$1;
(statearr_34094_34126[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (3))){
var inst_34082 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34084__$1,inst_34082);
} else {
if((state_val_34085 === (12))){
var state_34084__$1 = state_34084;
var statearr_34095_34127 = state_34084__$1;
(statearr_34095_34127[(2)] = false);

(statearr_34095_34127[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (2))){
var inst_34044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34045 = [ch_recv,ch_ctrl];
var inst_34046 = (new cljs.core.PersistentVector(null,2,(5),inst_34044,inst_34045,null));
var state_34084__$1 = state_34084;
return cljs.core.async.ioc_alts_BANG_(state_34084__$1,(4),inst_34046);
} else {
if((state_val_34085 === (11))){
var state_34084__$1 = state_34084;
var statearr_34096_34128 = state_34084__$1;
(statearr_34096_34128[(2)] = true);

(statearr_34096_34128[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (9))){
var state_34084__$1 = state_34084;
var statearr_34097_34129 = state_34084__$1;
(statearr_34097_34129[(2)] = false);

(statearr_34097_34129[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (5))){
var state_34084__$1 = state_34084;
var statearr_34098_34130 = state_34084__$1;
(statearr_34098_34130[(2)] = null);

(statearr_34098_34130[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (14))){
var inst_34049 = (state_34084[(10)]);
var inst_34071 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34049);
var state_34084__$1 = state_34084;
var statearr_34099_34131 = state_34084__$1;
(statearr_34099_34131[(2)] = inst_34071);

(statearr_34099_34131[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (16))){
var inst_34051 = (state_34084[(7)]);
var inst_34049 = (state_34084[(10)]);
var inst_34048 = (state_34084[(8)]);
var inst_34050 = (state_34084[(9)]);
var inst_34074 = (state_34084[(2)]);
var inst_34075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34074,cljs.core.cst$kw$event);
var inst_34076 = (function (){var vec__34041 = inst_34048;
var v = inst_34049;
var p = inst_34050;
var stop_QMARK_ = inst_34051;
var map__34054 = inst_34074;
var event_msg = inst_34074;
var event = inst_34075;
return ((function (vec__34041,v,p,stop_QMARK_,map__34054,event_msg,event,inst_34051,inst_34049,inst_34048,inst_34050,inst_34074,inst_34075,state_val_34085,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1540,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__34041,v,p,stop_QMARK_,map__34054,event_msg,event,inst_34051,inst_34049,inst_34048,inst_34050,inst_34074,inst_34075,state_val_34085,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__34041,v,p,stop_QMARK_,map__34054,event_msg,event,inst_34051,inst_34049,inst_34048,inst_34050,inst_34074,inst_34075,state_val_34085,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1747816467);
} else {
}

var G__34102 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34103){if((e34103 instanceof Error)){
var e = e34103;
return e;
} else {
throw e34103;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1543,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34104){if((e34104 instanceof Error)){
var e = e34104;
return e;
} else {
throw e34104;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1544,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__34102) : event_msg_handler.call(null,G__34102));
}catch (e34100){if((e34100 instanceof Error)){
var e1 = e34100;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1549,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__34041,v,p,stop_QMARK_,map__34054,event_msg,event,inst_34051,inst_34049,inst_34048,inst_34050,inst_34074,inst_34075,state_val_34085,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__34041,v,p,stop_QMARK_,map__34054,event_msg,event,inst_34051,inst_34049,inst_34048,inst_34050,inst_34074,inst_34075,state_val_34085,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1925191263);
}
}catch (e34101){if((e34101 instanceof Error)){
var e2 = e34101;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/tmp/form-init7447384388010150061.clj",1550,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__34041,v,p,stop_QMARK_,map__34054,event_msg,event,inst_34051,inst_34049,inst_34048,inst_34050,inst_34074,inst_34075,state_val_34085,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__34041,v,p,stop_QMARK_,map__34054,event_msg,event,inst_34051,inst_34049,inst_34048,inst_34050,inst_34074,inst_34075,state_val_34085,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1076230755);
} else {
throw e34101;

}
}} else {
throw e34100;

}
}});
;})(vec__34041,v,p,stop_QMARK_,map__34054,event_msg,event,inst_34051,inst_34049,inst_34048,inst_34050,inst_34074,inst_34075,state_val_34085,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_34077 = execute1(inst_34076);
var state_34084__$1 = (function (){var statearr_34105 = state_34084;
(statearr_34105[(11)] = inst_34077);

return statearr_34105;
})();
var statearr_34106_34132 = state_34084__$1;
(statearr_34106_34132[(2)] = null);

(statearr_34106_34132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (10))){
var inst_34069 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34069)){
var statearr_34107_34133 = state_34084__$1;
(statearr_34107_34133[(1)] = (14));

} else {
var statearr_34108_34134 = state_34084__$1;
(statearr_34108_34134[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34085 === (8))){
var inst_34049 = (state_34084[(10)]);
var inst_34059 = inst_34049.cljs$lang$protocol_mask$partition0$;
var inst_34060 = (inst_34059 & (64));
var inst_34061 = inst_34049.cljs$core$ISeq$;
var inst_34062 = (inst_34060) || (inst_34061);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34062)){
var statearr_34109_34135 = state_34084__$1;
(statearr_34109_34135[(1)] = (11));

} else {
var statearr_34110_34136 = state_34084__$1;
(statearr_34110_34136[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__28043__auto__,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto____0 = (function (){
var statearr_34114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34114[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto__);

(statearr_34114[(1)] = (1));

return statearr_34114;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto____1 = (function (state_34084){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_34084);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e34115){if((e34115 instanceof Object)){
var ex__28047__auto__ = e34115;
var statearr_34116_34137 = state_34084;
(statearr_34116_34137[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34084);

return cljs.core.cst$kw$recur;
} else {
throw e34115;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__34138 = state_34084;
state_34084 = G__34138;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto__ = function(state_34084){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto____1.call(this,state_34084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__28169__auto__ = (function (){var statearr_34117 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_34117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___34118);

return statearr_34117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___34118,map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__34038,map__34038__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___34148 = arguments.length;
var i__7490__auto___34149 = (0);
while(true){
if((i__7490__auto___34149 < len__7489__auto___34148)){
args__7496__auto__.push((arguments[i__7490__auto___34149]));

var G__34150 = (i__7490__auto___34149 + (1));
i__7490__auto___34149 = G__34150;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__34142){
var vec__34143 = p__34142;
var map__34146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143,(0),null);
var map__34146__$1 = ((((!((map__34146 == null)))?((((map__34146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34146):map__34146);
var opts = map__34146__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34146__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34146__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34146__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq34139){
var G__34140 = cljs.core.first(seq34139);
var seq34139__$1 = cljs.core.next(seq34139);
var G__34141 = cljs.core.first(seq34139__$1);
var seq34139__$2 = cljs.core.next(seq34139__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34140,G__34141,seq34139__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___34160 = arguments.length;
var i__7490__auto___34161 = (0);
while(true){
if((i__7490__auto___34161 < len__7489__auto___34160)){
args__7496__auto__.push((arguments[i__7490__auto___34161]));

var G__34162 = (i__7490__auto___34161 + (1));
i__7490__auto___34161 = G__34162;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((2) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7497__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__34154){
var vec__34155 = p__34154;
var map__34158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34155,(0),null);
var map__34158__$1 = ((((!((map__34158 == null)))?((((map__34158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34158):map__34158);
var opts = map__34158__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34158__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34158__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq34151){
var G__34152 = cljs.core.first(seq34151);
var seq34151__$1 = cljs.core.next(seq34151);
var G__34153 = cljs.core.first(seq34151__$1);
var seq34151__$2 = cljs.core.next(seq34151__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34152,G__34153,seq34151__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__34165 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__34166 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__34165,G__34166) : event_handler.call(null,G__34165,G__34166));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__34167,websocket_QMARK_){
var map__34170 = p__34167;
var map__34170__$1 = ((((!((map__34170 == null)))?((((map__34170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34170):map__34170);
var location = map__34170__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34170__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34170__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34170__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__6414__auto__ = path;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return pathname;
}
})())].join('');
});
