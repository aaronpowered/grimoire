// Compiled by ClojureScript 1.9.229 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected__$1,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected__$1,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__56463 = x;
var ev_id = cljs.core.nth.call(null,vec__56463,(0),null);
var _ = cljs.core.nth.call(null,vec__56463,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
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
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var errs = temp__4657__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__4655__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var errs = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__42633__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__42633__auto__){
var and__42633__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__42633__auto____$1){
var map__56476 = x;
var map__56476__$1 = ((((!((map__56476 == null)))?((((map__56476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56476):map__56476);
var ch_recv = cljs.core.get.call(null,map__56476__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__56476__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__56476__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__56476__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__42633__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__42633__auto____$2){
var and__42633__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__42633__auto____$3){
var and__42633__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__42633__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__42633__auto____$4;
}
} else {
return and__42633__auto____$3;
}
} else {
return and__42633__auto____$2;
}
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__42633__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__42633__auto__){
var and__42633__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__42633__auto____$1){
var map__56488 = x;
var map__56488__$1 = ((((!((map__56488 == null)))?((((map__56488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56488):map__56488);
var ch_recv = cljs.core.get.call(null,map__56488__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__56488__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__56488__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__56488__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__56488__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__56488__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__56488__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__42633__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__42633__auto____$2){
var and__42633__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__42633__auto____$3){
var and__42633__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__42633__auto____$4){
var and__42633__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__42633__auto____$5){
var and__42633__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__42633__auto____$6){
var and__42633__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__42633__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__42633__auto____$7;
}
} else {
return and__42633__auto____$6;
}
} else {
return and__42633__auto____$5;
}
} else {
return and__42633__auto____$4;
}
} else {
return and__42633__auto____$3;
}
} else {
return and__42633__auto____$2;
}
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__56490){
var map__56496 = p__56490;
var map__56496__$1 = ((((!((map__56496 == null)))?((((map__56496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56496):map__56496);
var ev_msg = map__56496__$1;
var event = cljs.core.get.call(null,map__56496__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__56496__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__56498 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__56498,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__56498,(1),null);
var valid_event = vec__56498;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__56498,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__56496,map__56496__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__56498,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__56496,map__56496__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-415607427);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e56508){var t = e56508;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init6251334600088777945.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-2032669054);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__56505 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__56505,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__56505,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__56505,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__56505,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,424659519);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args56509 = [];
var len__43720__auto___56512 = arguments.length;
var i__43721__auto___56513 = (0);
while(true){
if((i__43721__auto___56513 < len__43720__auto___56512)){
args56509.push((arguments[i__43721__auto___56513]));

var G__56514 = (i__43721__auto___56513 + (1));
i__43721__auto___56513 = G__56514;
continue;
} else {
}
break;
}

var G__56511 = args56509.length;
switch (G__56511) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56509.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,-1760861761);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,771614763);

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
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__56516_SHARP_){
if(!((p1__56516_SHARP_ == null))){
if((false) || (p1__56516_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__56516_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__56516_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__56516_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e56519){if((e56519 instanceof Error)){
var e = e56519;
return e;
} else {
throw e56519;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",247,"((fn* [p1__56516#] (satisfies? interfaces/IPacker p1__56516#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


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
var args__43727__auto__ = [];
var len__43720__auto___56827 = arguments.length;
var i__43721__auto___56828 = (0);
while(true){
if((i__43721__auto___56828 < len__43720__auto___56827)){
args__43727__auto__.push((arguments[i__43721__auto___56828]));

var G__56829 = (i__43721__auto___56828 + (1));
i__43721__auto___56828 = G__56829;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__56524){
var vec__56525 = p__56524;
var map__56528 = cljs.core.nth.call(null,vec__56525,(0),null);
var map__56528__$1 = ((((!((map__56528 == null)))?((((map__56528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56528):map__56528);
var recv_buf_or_n = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__42645__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__56528__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e56530){if((e56530 instanceof Error)){
var e = e56530;
return e;
} else {
throw e56530;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",317,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e56531){if((e56531 instanceof Error)){
var e = e56531;
return e;
} else {
throw e56531;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",317,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_56830 = (function (){try{if(((function (vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__56521_SHARP_){
if(!((p1__56521_SHARP_ == null))){
if((false) || (p1__56521_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__56521_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__56521_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__56521_SHARP_);
}
});})(vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e56532){if((e56532 instanceof Error)){
var e = e56532;
return e;
} else {
throw e56532;

}
}})();
if((e_56830 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",318,"((fn* [p1__56521#] (satisfies? interfaces/IServerChanAdapter p1__56521#)) web-server-ch-adapter)",web_server_ch_adapter,e_56830,null);
}

var max_ms_56831 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_56831)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_56831)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_56831], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__42645__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__56832 = null;
var G__56832__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__56534 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__56534,(0),null);
var _udt = cljs.core.nth.call(null,vec__56534,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__56832__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__56832 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__56832__3.call(this,conn_type,uid,client_id);
case 4:
return G__56832__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56832.cljs$core$IFn$_invoke$arity$3 = G__56832__3;
G__56832.cljs$core$IFn$_invoke$arity$4 = G__56832__4;
return G__56832;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e56537){if((e56537 instanceof Error)){
var e = e56537;
return e;
} else {
throw e56537;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",362,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__56538){
var map__56539 = p__56538;
var map__56539__$1 = ((((!((map__56539 == null)))?((((map__56539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56539):map__56539);
var old_m = map__56539__$1;
var ws = cljs.core.get.call(null,map__56539__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__56539__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__56539__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__56541 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__56541) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e56542){if((e56542 instanceof Error)){
var e = e56542;
return e;
} else {
throw e56542;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",379,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__56543){
var map__56544 = p__56543;
var map__56544__$1 = ((((!((map__56544 == null)))?((((map__56544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56544):map__56544);
var old_m = map__56544__$1;
var ws = cljs.core.get.call(null,map__56544__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__56544__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__56544__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax__$1,uid):cljs.core.disj.call(null,ajax__$1,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__56834__delegate = function (user_id,ev,p__56546){
var vec__56547 = p__56546;
var map__56550 = cljs.core.nth.call(null,vec__56547,(0),null);
var map__56550__$1 = ((((!((map__56550 == null)))?((((map__56550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56550):map__56550);
var opts = map__56550__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__56550__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_56835 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __56836 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_56835,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_56835,ev], null);
});})(uid_56835,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1910564997);
var __56837__$1 = (cljs.core.truth_(uid_56835)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __56838__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_56839 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__56840 = ((function (uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__56552 = cljs.core.get.call(null,m,uid_56835);
var ___$3 = cljs.core.nth.call(null,vec__56552,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__56552,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_56839)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_56835),cljs.core.get.call(null,m,uid_56835));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__56555 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__56555,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__56555,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",432,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",433,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__56555,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__56555,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1276598877);

var G__56558 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__56558) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_56835,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_56835,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init6251334600088777945.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_56835], null);
});})(uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1045428432);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__56840.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__56840.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__56559_56842 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_56835], null))));
var chunk__56560_56843 = null;
var count__56561_56844 = (0);
var i__56562_56845 = (0);
while(true){
if((i__56562_56845 < count__56561_56844)){
var vec__56563_56846 = cljs.core._nth.call(null,chunk__56560_56843,i__56562_56845);
var _QMARK_sch_56847 = cljs.core.nth.call(null,vec__56563_56846,(0),null);
var _udt_56848 = cljs.core.nth.call(null,vec__56563_56846,(1),null);
var temp__4657__auto___56849 = _QMARK_sch_56847;
if(cljs.core.truth_(temp__4657__auto___56849)){
var sch_56850 = temp__4657__auto___56849;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_56850);
} else {
}

var G__56851 = seq__56559_56842;
var G__56852 = chunk__56560_56843;
var G__56853 = count__56561_56844;
var G__56854 = (i__56562_56845 + (1));
seq__56559_56842 = G__56851;
chunk__56560_56843 = G__56852;
count__56561_56844 = G__56853;
i__56562_56845 = G__56854;
continue;
} else {
var temp__4657__auto___56855 = cljs.core.seq.call(null,seq__56559_56842);
if(temp__4657__auto___56855){
var seq__56559_56856__$1 = temp__4657__auto___56855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56559_56856__$1)){
var c__43456__auto___56857 = cljs.core.chunk_first.call(null,seq__56559_56856__$1);
var G__56858 = cljs.core.chunk_rest.call(null,seq__56559_56856__$1);
var G__56859 = c__43456__auto___56857;
var G__56860 = cljs.core.count.call(null,c__43456__auto___56857);
var G__56861 = (0);
seq__56559_56842 = G__56858;
chunk__56560_56843 = G__56859;
count__56561_56844 = G__56860;
i__56562_56845 = G__56861;
continue;
} else {
var vec__56566_56862 = cljs.core.first.call(null,seq__56559_56856__$1);
var _QMARK_sch_56863 = cljs.core.nth.call(null,vec__56566_56862,(0),null);
var _udt_56864 = cljs.core.nth.call(null,vec__56566_56862,(1),null);
var temp__4657__auto___56865__$1 = _QMARK_sch_56863;
if(cljs.core.truth_(temp__4657__auto___56865__$1)){
var sch_56866 = temp__4657__auto___56865__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_56866);
} else {
}

var G__56867 = cljs.core.next.call(null,seq__56559_56856__$1);
var G__56868 = null;
var G__56869 = (0);
var G__56870 = (0);
seq__56559_56842 = G__56867;
chunk__56560_56843 = G__56868;
count__56561_56844 = G__56869;
i__56562_56845 = G__56870;
continue;
}
} else {
}
}
break;
}

var seq__56569_56871 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_56835], null))));
var chunk__56570_56872 = null;
var count__56571_56873 = (0);
var i__56572_56874 = (0);
while(true){
if((i__56572_56874 < count__56571_56873)){
var vec__56573_56875 = cljs.core._nth.call(null,chunk__56570_56872,i__56572_56874);
var _QMARK_sch_56876 = cljs.core.nth.call(null,vec__56573_56875,(0),null);
var _udt_56877 = cljs.core.nth.call(null,vec__56573_56875,(1),null);
var temp__4657__auto___56878 = _QMARK_sch_56876;
if(cljs.core.truth_(temp__4657__auto___56878)){
var sch_56879 = temp__4657__auto___56878;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_56879);
} else {
}

var G__56880 = seq__56569_56871;
var G__56881 = chunk__56570_56872;
var G__56882 = count__56571_56873;
var G__56883 = (i__56572_56874 + (1));
seq__56569_56871 = G__56880;
chunk__56570_56872 = G__56881;
count__56571_56873 = G__56882;
i__56572_56874 = G__56883;
continue;
} else {
var temp__4657__auto___56884 = cljs.core.seq.call(null,seq__56569_56871);
if(temp__4657__auto___56884){
var seq__56569_56885__$1 = temp__4657__auto___56884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56569_56885__$1)){
var c__43456__auto___56886 = cljs.core.chunk_first.call(null,seq__56569_56885__$1);
var G__56887 = cljs.core.chunk_rest.call(null,seq__56569_56885__$1);
var G__56888 = c__43456__auto___56886;
var G__56889 = cljs.core.count.call(null,c__43456__auto___56886);
var G__56890 = (0);
seq__56569_56871 = G__56887;
chunk__56570_56872 = G__56888;
count__56571_56873 = G__56889;
i__56572_56874 = G__56890;
continue;
} else {
var vec__56576_56891 = cljs.core.first.call(null,seq__56569_56885__$1);
var _QMARK_sch_56892 = cljs.core.nth.call(null,vec__56576_56891,(0),null);
var _udt_56893 = cljs.core.nth.call(null,vec__56576_56891,(1),null);
var temp__4657__auto___56894__$1 = _QMARK_sch_56892;
if(cljs.core.truth_(temp__4657__auto___56894__$1)){
var sch_56895 = temp__4657__auto___56894__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_56895);
} else {
}

var G__56896 = cljs.core.next.call(null,seq__56569_56885__$1);
var G__56897 = null;
var G__56898 = (0);
var G__56899 = (0);
seq__56569_56871 = G__56896;
chunk__56570_56872 = G__56897;
count__56571_56873 = G__56898;
i__56572_56874 = G__56899;
continue;
}
} else {
}
}
break;
}
} else {
var seq__56579_56900 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__56580_56901 = null;
var count__56581_56902 = (0);
var i__56582_56903 = (0);
while(true){
if((i__56582_56903 < count__56581_56902)){
var conn_type_56904 = cljs.core._nth.call(null,chunk__56580_56901,i__56582_56903);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_56904,uid_56835], null),((function (seq__56579_56900,chunk__56580_56901,count__56581_56902,i__56582_56903,conn_type_56904,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_56839], true)], null);
} else {
var vec__56583 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__56583,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__56583,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_56839)], null);
}
});})(seq__56579_56900,chunk__56580_56901,count__56581_56902,i__56582_56903,conn_type_56904,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__56905 = seq__56579_56900;
var G__56906 = chunk__56580_56901;
var G__56907 = count__56581_56902;
var G__56908 = (i__56582_56903 + (1));
seq__56579_56900 = G__56905;
chunk__56580_56901 = G__56906;
count__56581_56902 = G__56907;
i__56582_56903 = G__56908;
continue;
} else {
var temp__4657__auto___56909 = cljs.core.seq.call(null,seq__56579_56900);
if(temp__4657__auto___56909){
var seq__56579_56910__$1 = temp__4657__auto___56909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56579_56910__$1)){
var c__43456__auto___56911 = cljs.core.chunk_first.call(null,seq__56579_56910__$1);
var G__56912 = cljs.core.chunk_rest.call(null,seq__56579_56910__$1);
var G__56913 = c__43456__auto___56911;
var G__56914 = cljs.core.count.call(null,c__43456__auto___56911);
var G__56915 = (0);
seq__56579_56900 = G__56912;
chunk__56580_56901 = G__56913;
count__56581_56902 = G__56914;
i__56582_56903 = G__56915;
continue;
} else {
var conn_type_56916 = cljs.core.first.call(null,seq__56579_56910__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_56916,uid_56835], null),((function (seq__56579_56900,chunk__56580_56901,count__56581_56902,i__56582_56903,conn_type_56916,seq__56579_56910__$1,temp__4657__auto___56909,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_56839], true)], null);
} else {
var vec__56586 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__56586,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__56586,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_56839)], null);
}
});})(seq__56579_56900,chunk__56580_56901,count__56581_56902,i__56582_56903,conn_type_56916,seq__56579_56910__$1,temp__4657__auto___56909,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__56917 = cljs.core.next.call(null,seq__56579_56910__$1);
var G__56918 = null;
var G__56919 = (0);
var G__56920 = (0);
seq__56579_56900 = G__56917;
chunk__56580_56901 = G__56918;
count__56581_56902 = G__56919;
i__56582_56903 = G__56920;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__56840.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__56840.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_56921 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_56922 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__44817__auto___56923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___56923,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___56923,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_56593){
var state_val_56594 = (state_56593[(1)]);
if((state_val_56594 === (1))){
var state_56593__$1 = state_56593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56593__$1,(2),ws_timeout_56921);
} else {
if((state_val_56594 === (2))){
var inst_56590 = (state_56593[(2)]);
var inst_56591 = flush_buffer_BANG__56840.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_56593__$1 = (function (){var statearr_56595 = state_56593;
(statearr_56595[(7)] = inst_56590);

return statearr_56595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56593__$1,inst_56591);
} else {
return null;
}
}
});})(c__44817__auto___56923,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__44705__auto__,c__44817__auto___56923,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__44706__auto__ = null;
var taoensso$sente$state_machine__44706__auto____0 = (function (){
var statearr_56599 = [null,null,null,null,null,null,null,null];
(statearr_56599[(0)] = taoensso$sente$state_machine__44706__auto__);

(statearr_56599[(1)] = (1));

return statearr_56599;
});
var taoensso$sente$state_machine__44706__auto____1 = (function (state_56593){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_56593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e56600){if((e56600 instanceof Object)){
var ex__44709__auto__ = e56600;
var statearr_56601_56924 = state_56593;
(statearr_56601_56924[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56925 = state_56593;
state_56593 = G__56925;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$state_machine__44706__auto__ = function(state_56593){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__44706__auto____1.call(this,state_56593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__44706__auto____0;
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__44706__auto____1;
return taoensso$sente$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___56923,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__44819__auto__ = (function (){var statearr_56602 = f__44818__auto__.call(null);
(statearr_56602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___56923);

return statearr_56602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___56923,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__44817__auto___56926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___56926,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___56926,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_56607){
var state_val_56608 = (state_56607[(1)]);
if((state_val_56608 === (1))){
var state_56607__$1 = state_56607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56607__$1,(2),ajax_timeout_56922);
} else {
if((state_val_56608 === (2))){
var inst_56604 = (state_56607[(2)]);
var inst_56605 = flush_buffer_BANG__56840.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_56607__$1 = (function (){var statearr_56609 = state_56607;
(statearr_56609[(7)] = inst_56604);

return statearr_56609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56607__$1,inst_56605);
} else {
return null;
}
}
});})(c__44817__auto___56926,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__44705__auto__,c__44817__auto___56926,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__44706__auto__ = null;
var taoensso$sente$state_machine__44706__auto____0 = (function (){
var statearr_56613 = [null,null,null,null,null,null,null,null];
(statearr_56613[(0)] = taoensso$sente$state_machine__44706__auto__);

(statearr_56613[(1)] = (1));

return statearr_56613;
});
var taoensso$sente$state_machine__44706__auto____1 = (function (state_56607){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_56607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e56614){if((e56614 instanceof Object)){
var ex__44709__auto__ = e56614;
var statearr_56615_56927 = state_56607;
(statearr_56615_56927[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56928 = state_56607;
state_56607 = G__56928;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$state_machine__44706__auto__ = function(state_56607){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__44706__auto____1.call(this,state_56607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__44706__auto____0;
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__44706__auto____1;
return taoensso$sente$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___56926,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__44819__auto__ = (function (){var statearr_56616 = f__44818__auto__.call(null);
(statearr_56616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___56926);

return statearr_56616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___56926,ws_timeout_56921,ajax_timeout_56922,uid_56835,__56836,__56837__$1,__56838__$2,ev_uuid_56839,flush_buffer_BANG__56840,vec__56547,map__56550,map__56550__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__56834 = function (user_id,ev,var_args){
var p__56546 = null;
if (arguments.length > 2) {
var G__56929__i = 0, G__56929__a = new Array(arguments.length -  2);
while (G__56929__i < G__56929__a.length) {G__56929__a[G__56929__i] = arguments[G__56929__i + 2]; ++G__56929__i;}
  p__56546 = new cljs.core.IndexedSeq(G__56929__a,0);
} 
return G__56834__delegate.call(this,user_id,ev,p__56546);};
G__56834.cljs$lang$maxFixedArity = 2;
G__56834.cljs$lang$applyTo = (function (arglist__56930){
var user_id = cljs.core.first(arglist__56930);
arglist__56930 = cljs.core.next(arglist__56930);
var ev = cljs.core.first(arglist__56930);
var p__56546 = cljs.core.rest(arglist__56930);
return G__56834__delegate(user_id,ev,p__56546);
});
G__56834.cljs$core$IFn$_invoke$arity$variadic = G__56834__delegate;
return G__56834;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__56617 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__56617,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__56617,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1960575737);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_56625){
var state_val_56626 = (state_56625[(1)]);
if((state_val_56626 === (1))){
var inst_56620 = cljs.core.async.timeout.call(null,ms);
var state_56625__$1 = state_56625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56625__$1,(2),inst_56620);
} else {
if((state_val_56626 === (2))){
var inst_56622 = (state_56625[(2)]);
var inst_56623 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_56625__$1 = (function (){var statearr_56627 = state_56625;
(statearr_56627[(7)] = inst_56622);

return statearr_56627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56625__$1,inst_56623);
} else {
return null;
}
}
});})(c__44817__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__44705__auto__,c__44817__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__44706__auto__ = null;
var taoensso$sente$state_machine__44706__auto____0 = (function (){
var statearr_56631 = [null,null,null,null,null,null,null,null];
(statearr_56631[(0)] = taoensso$sente$state_machine__44706__auto__);

(statearr_56631[(1)] = (1));

return statearr_56631;
});
var taoensso$sente$state_machine__44706__auto____1 = (function (state_56625){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_56625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e56632){if((e56632 instanceof Object)){
var ex__44709__auto__ = e56632;
var statearr_56633_56931 = state_56625;
(statearr_56633_56931[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56932 = state_56625;
state_56625 = G__56932;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$state_machine__44706__auto__ = function(state_56625){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__44706__auto____1.call(this,state_56625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__44706__auto____0;
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__44706__auto____1;
return taoensso$sente$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__44819__auto__ = (function (){var statearr_56634 = f__44818__auto__.call(null);
(statearr_56634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_56634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__56617,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__44817__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1034472326);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6251334600088777945.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1061783212);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1037564464);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_56670){
var state_val_56671 = (state_56670[(1)]);
if((state_val_56671 === (7))){
var inst_56666 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
var statearr_56672_56933 = state_56670__$1;
(statearr_56672_56933[(2)] = inst_56666);

(statearr_56672_56933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (1))){
var inst_56635 = udt_open;
var state_56670__$1 = (function (){var statearr_56673 = state_56670;
(statearr_56673[(7)] = inst_56635);

return statearr_56673;
})();
var statearr_56674_56934 = state_56670__$1;
(statearr_56674_56934[(2)] = null);

(statearr_56674_56934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (4))){
var inst_56644 = (state_56670[(8)]);
var inst_56639 = (state_56670[(2)]);
var inst_56640 = cljs.core.deref.call(null,conns_);
var inst_56641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56642 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_56643 = (new cljs.core.PersistentVector(null,3,(5),inst_56641,inst_56642,null));
var inst_56644__$1 = cljs.core.get_in.call(null,inst_56640,inst_56643);
var state_56670__$1 = (function (){var statearr_56675 = state_56670;
(statearr_56675[(9)] = inst_56639);

(statearr_56675[(8)] = inst_56644__$1);

return statearr_56675;
})();
if(cljs.core.truth_(inst_56644__$1)){
var statearr_56676_56935 = state_56670__$1;
(statearr_56676_56935[(1)] = (5));

} else {
var statearr_56677_56936 = state_56670__$1;
(statearr_56677_56936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (13))){
var inst_56650 = (state_56670[(10)]);
var inst_56659 = (state_56670[(2)]);
var inst_56635 = inst_56650;
var state_56670__$1 = (function (){var statearr_56678 = state_56670;
(statearr_56678[(7)] = inst_56635);

(statearr_56678[(11)] = inst_56659);

return statearr_56678;
})();
var statearr_56679_56937 = state_56670__$1;
(statearr_56679_56937[(2)] = null);

(statearr_56679_56937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (6))){
var state_56670__$1 = state_56670;
var statearr_56680_56938 = state_56670__$1;
(statearr_56680_56938[(2)] = null);

(statearr_56680_56938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (3))){
var inst_56668 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56670__$1,inst_56668);
} else {
if((state_val_56671 === (12))){
var state_56670__$1 = state_56670;
var statearr_56681_56939 = state_56670__$1;
(statearr_56681_56939[(2)] = null);

(statearr_56681_56939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (2))){
var inst_56637 = cljs.core.async.timeout.call(null,ms);
var state_56670__$1 = state_56670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56670__$1,(4),inst_56637);
} else {
if((state_val_56671 === (11))){
var inst_56655 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_56656 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_56655);
var state_56670__$1 = state_56670;
var statearr_56682_56940 = state_56670__$1;
(statearr_56682_56940[(2)] = inst_56656);

(statearr_56682_56940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (9))){
var state_56670__$1 = state_56670;
var statearr_56683_56941 = state_56670__$1;
(statearr_56683_56941[(2)] = null);

(statearr_56683_56941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (5))){
var inst_56644 = (state_56670[(8)]);
var inst_56649 = cljs.core.nth.call(null,inst_56644,(0),null);
var inst_56650 = cljs.core.nth.call(null,inst_56644,(1),null);
var inst_56651 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_56670__$1 = (function (){var statearr_56684 = state_56670;
(statearr_56684[(12)] = inst_56649);

(statearr_56684[(10)] = inst_56650);

return statearr_56684;
})();
if(cljs.core.truth_(inst_56651)){
var statearr_56685_56942 = state_56670__$1;
(statearr_56685_56942[(1)] = (8));

} else {
var statearr_56686_56943 = state_56670__$1;
(statearr_56686_56943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (10))){
var inst_56663 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
var statearr_56687_56944 = state_56670__$1;
(statearr_56687_56944[(2)] = inst_56663);

(statearr_56687_56944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (8))){
var inst_56635 = (state_56670[(7)]);
var inst_56650 = (state_56670[(10)]);
var inst_56653 = cljs.core._EQ_.call(null,inst_56650,inst_56635);
var state_56670__$1 = state_56670;
if(inst_56653){
var statearr_56688_56945 = state_56670__$1;
(statearr_56688_56945[(1)] = (11));

} else {
var statearr_56689_56946 = state_56670__$1;
(statearr_56689_56946[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__44705__auto__,c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__44706__auto__ = null;
var taoensso$sente$state_machine__44706__auto____0 = (function (){
var statearr_56693 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56693[(0)] = taoensso$sente$state_machine__44706__auto__);

(statearr_56693[(1)] = (1));

return statearr_56693;
});
var taoensso$sente$state_machine__44706__auto____1 = (function (state_56670){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_56670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e56694){if((e56694 instanceof Object)){
var ex__44709__auto__ = e56694;
var statearr_56695_56947 = state_56670;
(statearr_56695_56947[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56948 = state_56670;
state_56670 = G__56948;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$state_machine__44706__auto__ = function(state_56670){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__44706__auto____1.call(this,state_56670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__44706__auto____0;
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__44706__auto____1;
return taoensso$sente$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__44819__auto__ = (function (){var statearr_56696 = f__44818__auto__.call(null);
(statearr_56696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_56696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__44817__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2027607608);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__42645__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_56722){
var state_val_56723 = (state_56722[(1)]);
if((state_val_56723 === (1))){
var inst_56697 = cljs.core.async.timeout.call(null,ms);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(2),inst_56697);
} else {
if((state_val_56723 === (2))){
var inst_56704 = (state_56722[(7)]);
var inst_56699 = (state_56722[(2)]);
var inst_56700 = cljs.core.deref.call(null,conns_);
var inst_56701 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56702 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_56703 = (new cljs.core.PersistentVector(null,3,(5),inst_56701,inst_56702,null));
var inst_56704__$1 = cljs.core.get_in.call(null,inst_56700,inst_56703);
var state_56722__$1 = (function (){var statearr_56724 = state_56722;
(statearr_56724[(8)] = inst_56699);

(statearr_56724[(7)] = inst_56704__$1);

return statearr_56724;
})();
if(cljs.core.truth_(inst_56704__$1)){
var statearr_56725_56949 = state_56722__$1;
(statearr_56725_56949[(1)] = (3));

} else {
var statearr_56726_56950 = state_56722__$1;
(statearr_56726_56950[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (3))){
var inst_56704 = (state_56722[(7)]);
var inst_56709 = cljs.core.nth.call(null,inst_56704,(0),null);
var inst_56710 = cljs.core.nth.call(null,inst_56704,(1),null);
var inst_56711 = cljs.core._EQ_.call(null,inst_56710,udt_open);
var state_56722__$1 = (function (){var statearr_56727 = state_56722;
(statearr_56727[(9)] = inst_56709);

return statearr_56727;
})();
if(inst_56711){
var statearr_56728_56951 = state_56722__$1;
(statearr_56728_56951[(1)] = (6));

} else {
var statearr_56729_56952 = state_56722__$1;
(statearr_56729_56952[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (4))){
var state_56722__$1 = state_56722;
var statearr_56730_56953 = state_56722__$1;
(statearr_56730_56953[(2)] = null);

(statearr_56730_56953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (5))){
var inst_56720 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56722__$1,inst_56720);
} else {
if((state_val_56723 === (6))){
var inst_56713 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_56714 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_56713);
var state_56722__$1 = state_56722;
var statearr_56731_56954 = state_56722__$1;
(statearr_56731_56954[(2)] = inst_56714);

(statearr_56731_56954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (7))){
var state_56722__$1 = state_56722;
var statearr_56732_56955 = state_56722__$1;
(statearr_56732_56955[(2)] = null);

(statearr_56732_56955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (8))){
var inst_56717 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56733_56956 = state_56722__$1;
(statearr_56733_56956[(2)] = inst_56717);

(statearr_56733_56956[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__44705__auto__,c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__44706__auto__ = null;
var taoensso$sente$state_machine__44706__auto____0 = (function (){
var statearr_56737 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56737[(0)] = taoensso$sente$state_machine__44706__auto__);

(statearr_56737[(1)] = (1));

return statearr_56737;
});
var taoensso$sente$state_machine__44706__auto____1 = (function (state_56722){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_56722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e56738){if((e56738 instanceof Object)){
var ex__44709__auto__ = e56738;
var statearr_56739_56957 = state_56722;
(statearr_56739_56957[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56958 = state_56722;
state_56722 = G__56958;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$state_machine__44706__auto__ = function(state_56722){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__44706__auto____1.call(this,state_56722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__44706__auto____0;
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__44706__auto____1;
return taoensso$sente$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__44819__auto__ = (function (){var statearr_56740 = f__44818__auto__.call(null);
(statearr_56740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_56740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__44817__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__56741 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__56741,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__56741,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__56741,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__56741,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__56741,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1869820496);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__56741,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1623020939);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_56795){
var state_val_56796 = (state_56795[(1)]);
if((state_val_56796 === (7))){
var state_56795__$1 = state_56795;
var statearr_56797_56959 = state_56795__$1;
(statearr_56797_56959[(2)] = null);

(statearr_56797_56959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (1))){
var inst_56744 = cljs.core.async.timeout.call(null,(5000));
var state_56795__$1 = state_56795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56795__$1,(2),inst_56744);
} else {
if((state_val_56796 === (4))){
var state_56795__$1 = state_56795;
var statearr_56798_56960 = state_56795__$1;
(statearr_56798_56960[(2)] = null);

(statearr_56798_56960[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (13))){
var state_56795__$1 = state_56795;
var statearr_56799_56961 = state_56795__$1;
(statearr_56799_56961[(2)] = null);

(statearr_56799_56961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (6))){
var inst_56755 = (state_56795[(7)]);
var inst_56756 = (state_56795[(8)]);
var inst_56772 = (state_56795[(9)]);
var inst_56754 = (state_56795[(10)]);
var inst_56767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56768 = [conn_type,uid,client_id];
var inst_56769 = (new cljs.core.PersistentVector(null,3,(5),inst_56767,inst_56768,null));
var inst_56771 = (function (){var vec__56747 = inst_56754;
var __QMARK_sch = inst_56755;
var udt_t1 = inst_56756;
return ((function (vec__56747,__QMARK_sch,udt_t1,inst_56755,inst_56756,inst_56772,inst_56754,inst_56767,inst_56768,inst_56769,state_val_56796,c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__56770){
var vec__56800 = p__56770;
var _sch = cljs.core.nth.call(null,vec__56800,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__56800,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__56747,__QMARK_sch,udt_t1,inst_56755,inst_56756,inst_56772,inst_56754,inst_56767,inst_56768,inst_56769,state_val_56796,c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_56772__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_56769,inst_56771);
var state_56795__$1 = (function (){var statearr_56803 = state_56795;
(statearr_56803[(9)] = inst_56772__$1);

return statearr_56803;
})();
if(cljs.core.truth_(inst_56772__$1)){
var statearr_56804_56962 = state_56795__$1;
(statearr_56804_56962[(1)] = (9));

} else {
var statearr_56805_56963 = state_56795__$1;
(statearr_56805_56963[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (3))){
var inst_56755 = (state_56795[(7)]);
var inst_56756 = (state_56795[(8)]);
var inst_56754 = (state_56795[(10)]);
var inst_56759 = (function (){var vec__56747 = inst_56754;
var __QMARK_sch = inst_56755;
var udt_t1 = inst_56756;
return ((function (vec__56747,__QMARK_sch,udt_t1,inst_56755,inst_56756,inst_56754,state_val_56796,c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__56747,__QMARK_sch,udt_t1,inst_56755,inst_56756,inst_56754,state_val_56796,c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_56760 = (new cljs.core.Delay(inst_56759,null));
var inst_56761 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init6251334600088777945.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_56760,null,1062172243);
var state_56795__$1 = state_56795;
var statearr_56806_56964 = state_56795__$1;
(statearr_56806_56964[(2)] = inst_56761);

(statearr_56806_56964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (12))){
var inst_56781 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56782 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_56783 = (new cljs.core.PersistentVector(null,2,(5),inst_56781,inst_56782,null));
var inst_56784 = receive_event_msg_BANG_.call(null,inst_56783);
var state_56795__$1 = state_56795;
var statearr_56807_56965 = state_56795__$1;
(statearr_56807_56965[(2)] = inst_56784);

(statearr_56807_56965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (2))){
var inst_56754 = (state_56795[(10)]);
var inst_56746 = (state_56795[(2)]);
var inst_56750 = cljs.core.deref.call(null,conns_);
var inst_56751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56752 = [conn_type,uid,client_id];
var inst_56753 = (new cljs.core.PersistentVector(null,3,(5),inst_56751,inst_56752,null));
var inst_56754__$1 = cljs.core.get_in.call(null,inst_56750,inst_56753);
var inst_56755 = cljs.core.nth.call(null,inst_56754__$1,(0),null);
var inst_56756 = cljs.core.nth.call(null,inst_56754__$1,(1),null);
var inst_56757 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_56795__$1 = (function (){var statearr_56808 = state_56795;
(statearr_56808[(7)] = inst_56755);

(statearr_56808[(8)] = inst_56756);

(statearr_56808[(11)] = inst_56746);

(statearr_56808[(10)] = inst_56754__$1);

return statearr_56808;
})();
if(cljs.core.truth_(inst_56757)){
var statearr_56809_56966 = state_56795__$1;
(statearr_56809_56966[(1)] = (3));

} else {
var statearr_56810_56967 = state_56795__$1;
(statearr_56810_56967[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (11))){
var inst_56790 = (state_56795[(2)]);
var state_56795__$1 = state_56795;
var statearr_56811_56968 = state_56795__$1;
(statearr_56811_56968[(2)] = inst_56790);

(statearr_56811_56968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (9))){
var inst_56755 = (state_56795[(7)]);
var inst_56756 = (state_56795[(8)]);
var inst_56772 = (state_56795[(9)]);
var inst_56754 = (state_56795[(10)]);
var inst_56774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56775 = [conn_type,uid];
var inst_56776 = (new cljs.core.PersistentVector(null,2,(5),inst_56774,inst_56775,null));
var inst_56777 = (function (){var vec__56747 = inst_56754;
var __QMARK_sch = inst_56755;
var udt_t1 = inst_56756;
var disconnect_QMARK_ = inst_56772;
return ((function (vec__56747,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_56755,inst_56756,inst_56772,inst_56754,inst_56774,inst_56775,inst_56776,state_val_56796,c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__56747,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_56755,inst_56756,inst_56772,inst_56754,inst_56774,inst_56775,inst_56776,state_val_56796,c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_56778 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_56776,inst_56777);
var inst_56779 = upd_connected_uid_BANG_.call(null,uid);
var state_56795__$1 = (function (){var statearr_56812 = state_56795;
(statearr_56812[(12)] = inst_56778);

return statearr_56812;
})();
if(cljs.core.truth_(inst_56779)){
var statearr_56813_56969 = state_56795__$1;
(statearr_56813_56969[(1)] = (12));

} else {
var statearr_56814_56970 = state_56795__$1;
(statearr_56814_56970[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (5))){
var inst_56756 = (state_56795[(8)]);
var inst_56764 = (state_56795[(2)]);
var inst_56765 = cljs.core._EQ_.call(null,inst_56756,udt_close);
var state_56795__$1 = (function (){var statearr_56815 = state_56795;
(statearr_56815[(13)] = inst_56764);

return statearr_56815;
})();
if(inst_56765){
var statearr_56816_56971 = state_56795__$1;
(statearr_56816_56971[(1)] = (6));

} else {
var statearr_56817_56972 = state_56795__$1;
(statearr_56817_56972[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (14))){
var inst_56787 = (state_56795[(2)]);
var state_56795__$1 = state_56795;
var statearr_56818_56973 = state_56795__$1;
(statearr_56818_56973[(2)] = inst_56787);

(statearr_56818_56973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (10))){
var state_56795__$1 = state_56795;
var statearr_56819_56974 = state_56795__$1;
(statearr_56819_56974[(2)] = null);

(statearr_56819_56974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56796 === (8))){
var inst_56793 = (state_56795[(2)]);
var state_56795__$1 = state_56795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56795__$1,inst_56793);
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
});})(c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__44705__auto__,c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__44706__auto__ = null;
var taoensso$sente$state_machine__44706__auto____0 = (function (){
var statearr_56823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56823[(0)] = taoensso$sente$state_machine__44706__auto__);

(statearr_56823[(1)] = (1));

return statearr_56823;
});
var taoensso$sente$state_machine__44706__auto____1 = (function (state_56795){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_56795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e56824){if((e56824 instanceof Object)){
var ex__44709__auto__ = e56824;
var statearr_56825_56975 = state_56795;
(statearr_56825_56975[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56976 = state_56795;
state_56795 = G__56976;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$state_machine__44706__auto__ = function(state_56795){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__44706__auto____1.call(this,state_56795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__44706__auto____0;
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__44706__auto____1;
return taoensso$sente$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__44819__auto__ = (function (){var statearr_56826 = f__44818__auto__.call(null);
(statearr_56826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_56826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__44817__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6251334600088777945.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,329342150);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__56525,map__56528,map__56528__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq56522){
var G__56523 = cljs.core.first.call(null,seq56522);
var seq56522__$1 = cljs.core.next.call(null,seq56522);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56523,seq56522__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1952461240);

var seq__56993 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__56994 = null;
var count__56995 = (0);
var i__56996 = (0);
while(true){
if((i__56996 < count__56995)){
var vec__56997 = cljs.core._nth.call(null,chunk__56994,i__56996);
var client_id = cljs.core.nth.call(null,vec__56997,(0),null);
var vec__57000 = cljs.core.nth.call(null,vec__56997,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__57000,(0),null);
var _udt = cljs.core.nth.call(null,vec__57000,(1),null);
var temp__4657__auto___57009 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___57009)){
var sch_57010 = temp__4657__auto___57009;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_57010,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__57011 = seq__56993;
var G__57012 = chunk__56994;
var G__57013 = count__56995;
var G__57014 = (i__56996 + (1));
seq__56993 = G__57011;
chunk__56994 = G__57012;
count__56995 = G__57013;
i__56996 = G__57014;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56993);
if(temp__4657__auto__){
var seq__56993__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56993__$1)){
var c__43456__auto__ = cljs.core.chunk_first.call(null,seq__56993__$1);
var G__57015 = cljs.core.chunk_rest.call(null,seq__56993__$1);
var G__57016 = c__43456__auto__;
var G__57017 = cljs.core.count.call(null,c__43456__auto__);
var G__57018 = (0);
seq__56993 = G__57015;
chunk__56994 = G__57016;
count__56995 = G__57017;
i__56996 = G__57018;
continue;
} else {
var vec__57003 = cljs.core.first.call(null,seq__56993__$1);
var client_id = cljs.core.nth.call(null,vec__57003,(0),null);
var vec__57006 = cljs.core.nth.call(null,vec__57003,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__57006,(0),null);
var _udt = cljs.core.nth.call(null,vec__57006,(1),null);
var temp__4657__auto___57019__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___57019__$1)){
var sch_57020 = temp__4657__auto___57019__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_57020,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__57021 = cljs.core.next.call(null,seq__56993__$1);
var G__57022 = null;
var G__57023 = (0);
var G__57024 = (0);
seq__56993 = G__57021;
chunk__56994 = G__57022;
count__56995 = G__57023;
i__56996 = G__57024;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1996377808);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_57155){
var state_val_57156 = (state_57155[(1)]);
if((state_val_57156 === (7))){
var inst_57111 = (state_57155[(7)]);
var inst_57110 = (state_57155[(8)]);
var inst_57117 = (state_57155[(9)]);
var inst_57127 = (function (){var n = inst_57110;
var client_ids_satisfied = inst_57111;
var _QMARK_pulled = inst_57117;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_57111,inst_57110,inst_57117,state_val_57156,c__44817__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__57126){
var vec__57157 = p__57126;
var _QMARK_sch = cljs.core.nth.call(null,vec__57157,(0),null);
var _udt = cljs.core.nth.call(null,vec__57157,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_57111,inst_57110,inst_57117,state_val_57156,c__44817__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_57128 = cljs.core.PersistentHashSet.EMPTY;
var inst_57129 = cljs.core.reduce_kv.call(null,inst_57127,inst_57128,inst_57117);
var state_57155__$1 = state_57155;
var statearr_57160_57193 = state_57155__$1;
(statearr_57160_57193[(2)] = inst_57129);

(statearr_57160_57193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (1))){
var inst_57109 = cljs.core.PersistentHashSet.EMPTY;
var inst_57110 = (0);
var inst_57111 = inst_57109;
var state_57155__$1 = (function (){var statearr_57161 = state_57155;
(statearr_57161[(7)] = inst_57111);

(statearr_57161[(8)] = inst_57110);

return statearr_57161;
})();
var statearr_57162_57194 = state_57155__$1;
(statearr_57162_57194[(2)] = null);

(statearr_57162_57194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (4))){
var state_57155__$1 = state_57155;
var statearr_57163_57195 = state_57155__$1;
(statearr_57163_57195[(2)] = true);

(statearr_57163_57195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (15))){
var inst_57148 = (state_57155[(2)]);
var state_57155__$1 = state_57155;
var statearr_57164_57196 = state_57155__$1;
(statearr_57164_57196[(2)] = inst_57148);

(statearr_57164_57196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (13))){
var inst_57134 = (state_57155[(10)]);
var inst_57139 = cljs.core.rand_int.call(null,inst_57134);
var inst_57140 = (inst_57134 + inst_57139);
var inst_57141 = cljs.core.async.timeout.call(null,inst_57140);
var state_57155__$1 = state_57155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57155__$1,(16),inst_57141);
} else {
if((state_val_57156 === (6))){
var inst_57117 = (state_57155[(9)]);
var inst_57124 = (state_57155[(2)]);
var state_57155__$1 = (function (){var statearr_57165 = state_57155;
(statearr_57165[(11)] = inst_57124);

return statearr_57165;
})();
if(cljs.core.truth_(inst_57117)){
var statearr_57166_57197 = state_57155__$1;
(statearr_57166_57197[(1)] = (7));

} else {
var statearr_57167_57198 = state_57155__$1;
(statearr_57167_57198[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (3))){
var inst_57153 = (state_57155[(2)]);
var state_57155__$1 = state_57155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57155__$1,inst_57153);
} else {
if((state_val_57156 === (12))){
var inst_57151 = (state_57155[(2)]);
var state_57155__$1 = state_57155;
var statearr_57168_57199 = state_57155__$1;
(statearr_57168_57199[(2)] = inst_57151);

(statearr_57168_57199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (2))){
var inst_57111 = (state_57155[(7)]);
var inst_57110 = (state_57155[(8)]);
var inst_57117 = (state_57155[(9)]);
var inst_57113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57114 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_57115 = (new cljs.core.PersistentVector(null,2,(5),inst_57113,inst_57114,null));
var inst_57116 = (function (){var n = inst_57110;
var client_ids_satisfied = inst_57111;
return ((function (n,client_ids_satisfied,inst_57111,inst_57110,inst_57117,inst_57113,inst_57114,inst_57115,state_val_57156,c__44817__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_57111,inst_57110,inst_57117,inst_57113,inst_57114,inst_57115,state_val_57156,c__44817__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__57169 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__57169,(0),null);
var udt = cljs.core.nth.call(null,vec__57169,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_57111,inst_57110,inst_57117,inst_57113,inst_57114,inst_57115,state_val_57156,c__44817__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_57111,inst_57110,inst_57117,inst_57113,inst_57114,inst_57115,state_val_57156,c__44817__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_57117__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_57115,inst_57116);
var inst_57118 = (function (){var n = inst_57110;
var client_ids_satisfied = inst_57111;
var _QMARK_pulled = inst_57117__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_57111,inst_57110,inst_57117,inst_57113,inst_57114,inst_57115,inst_57116,inst_57117__$1,state_val_57156,c__44817__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__42645__auto__ = (x == null);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_57111,inst_57110,inst_57117,inst_57113,inst_57114,inst_57115,inst_57116,inst_57117__$1,state_val_57156,c__44817__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_57119 = inst_57118.call(null,inst_57117__$1);
var state_57155__$1 = (function (){var statearr_57172 = state_57155;
(statearr_57172[(9)] = inst_57117__$1);

return statearr_57172;
})();
if(cljs.core.truth_(inst_57119)){
var statearr_57173_57200 = state_57155__$1;
(statearr_57173_57200[(1)] = (4));

} else {
var statearr_57174_57201 = state_57155__$1;
(statearr_57174_57201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (11))){
var state_57155__$1 = state_57155;
var statearr_57175_57202 = state_57155__$1;
(statearr_57175_57202[(2)] = null);

(statearr_57175_57202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (9))){
var inst_57111 = (state_57155[(7)]);
var inst_57134 = (state_57155[(10)]);
var inst_57110 = (state_57155[(8)]);
var inst_57132 = (state_57155[(2)]);
var inst_57133 = cljs.core.into.call(null,inst_57111,inst_57132);
var inst_57134__$1 = cljs.core.get.call(null,ms_backoffs,inst_57110);
var state_57155__$1 = (function (){var statearr_57176 = state_57155;
(statearr_57176[(10)] = inst_57134__$1);

(statearr_57176[(12)] = inst_57133);

return statearr_57176;
})();
if(cljs.core.truth_(inst_57134__$1)){
var statearr_57177_57203 = state_57155__$1;
(statearr_57177_57203[(1)] = (10));

} else {
var statearr_57178_57204 = state_57155__$1;
(statearr_57178_57204[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (5))){
var inst_57117 = (state_57155[(9)]);
var inst_57122 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",733,"([:or nil? map?] ?pulled)",inst_57117,null,null);
var state_57155__$1 = state_57155;
var statearr_57179_57205 = state_57155__$1;
(statearr_57179_57205[(2)] = inst_57122);

(statearr_57179_57205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (14))){
var state_57155__$1 = state_57155;
var statearr_57180_57206 = state_57155__$1;
(statearr_57180_57206[(2)] = null);

(statearr_57180_57206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (16))){
var inst_57110 = (state_57155[(8)]);
var inst_57133 = (state_57155[(12)]);
var inst_57143 = (state_57155[(2)]);
var inst_57144 = (inst_57110 + (1));
var inst_57110__$1 = inst_57144;
var inst_57111 = inst_57133;
var state_57155__$1 = (function (){var statearr_57181 = state_57155;
(statearr_57181[(7)] = inst_57111);

(statearr_57181[(8)] = inst_57110__$1);

(statearr_57181[(13)] = inst_57143);

return statearr_57181;
})();
var statearr_57182_57207 = state_57155__$1;
(statearr_57182_57207[(2)] = null);

(statearr_57182_57207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (10))){
var inst_57133 = (state_57155[(12)]);
var inst_57136 = cljs.core.complement.call(null,inst_57133);
var inst_57137 = taoensso.encore.rsome.call(null,inst_57136,client_ids_unsatisfied);
var state_57155__$1 = state_57155;
if(cljs.core.truth_(inst_57137)){
var statearr_57183_57208 = state_57155__$1;
(statearr_57183_57208[(1)] = (13));

} else {
var statearr_57184_57209 = state_57155__$1;
(statearr_57184_57209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57156 === (8))){
var state_57155__$1 = state_57155;
var statearr_57185_57210 = state_57155__$1;
(statearr_57185_57210[(2)] = null);

(statearr_57185_57210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__44817__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__44705__auto__,c__44817__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto____0 = (function (){
var statearr_57189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57189[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto__);

(statearr_57189[(1)] = (1));

return statearr_57189;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto____1 = (function (state_57155){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_57155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e57190){if((e57190 instanceof Object)){
var ex__44709__auto__ = e57190;
var statearr_57191_57211 = state_57155;
(statearr_57191_57211[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57212 = state_57155;
state_57155 = G__57212;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto__ = function(state_57155){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto____1.call(this,state_57155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__44819__auto__ = (function (){var statearr_57192 = f__44818__auto__.call(null);
(statearr_57192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_57192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__44817__auto__;
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
var x__43308__auto__ = (((chsk == null))?null:chsk);
var m__43309__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,chsk);
} else {
var m__43309__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__43308__auto__ = (((chsk == null))?null:chsk);
var m__43309__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,chsk,reason);
} else {
var m__43309__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__43308__auto__ = (((chsk == null))?null:chsk);
var m__43309__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,chsk);
} else {
var m__43309__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__43308__auto__ = (((chsk == null))?null:chsk);
var m__43309__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,chsk,ev,opts);
} else {
var m__43309__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args57213 = [];
var len__43720__auto___57216 = arguments.length;
var i__43721__auto___57217 = (0);
while(true){
if((i__43721__auto___57217 < len__43720__auto___57216)){
args57213.push((arguments[i__43721__auto___57217]));

var G__57218 = (i__43721__auto___57217 + (1));
i__43721__auto___57217 = G__57218;
continue;
} else {
}
break;
}

var G__57215 = args57213.length;
switch (G__57215) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57213.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,230757013);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1708938383);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
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
var vec__57223 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__57223,(0),null);
var new_state = cljs.core.nth.call(null,vec__57223,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_57230 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57228){if((e57228 instanceof Error)){
var e = e57228;
return e;
} else {
throw e57228;

}
}})();
if((e_57230 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",835,"(map? state)",state,e_57230,null);
}

var e_57231 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57229){if((e57229 instanceof Error)){
var e = e57229;
return e;
} else {
throw e57229;

}
}})();
if((e_57231 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",836,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_57231,null);
}

if(cljs.core.truth_((function (){var or__42645__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
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
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_57240 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57236){if((e57236 instanceof Error)){
var e = e57236;
return e;
} else {
throw e57236;

}
}})();
if((e_57240 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",857,"(enc/chan? ?cb)",_QMARK_cb,e_57240,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__57237 = ev;
var ev_id = cljs.core.nth.call(null,vec__57237,(0),null);
var _ = cljs.core.nth.call(null,vec__57237,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__57237,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__57237,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-338809049);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",869,"(vector? clj)",clj,null,null));
var seq__57251 = cljs.core.seq.call(null,buffered_evs);
var chunk__57252 = null;
var count__57253 = (0);
var i__57254 = (0);
while(true){
if((i__57254 < count__57253)){
var ev = cljs.core._nth.call(null,chunk__57252,i__57254);
taoensso.sente.assert_event.call(null,ev);

var vec__57255_57261 = ev;
var id_57262 = cljs.core.nth.call(null,vec__57255_57261,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_57262),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__57263 = seq__57251;
var G__57264 = chunk__57252;
var G__57265 = count__57253;
var G__57266 = (i__57254 + (1));
seq__57251 = G__57263;
chunk__57252 = G__57264;
count__57253 = G__57265;
i__57254 = G__57266;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57251);
if(temp__4657__auto__){
var seq__57251__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57251__$1)){
var c__43456__auto__ = cljs.core.chunk_first.call(null,seq__57251__$1);
var G__57267 = cljs.core.chunk_rest.call(null,seq__57251__$1);
var G__57268 = c__43456__auto__;
var G__57269 = cljs.core.count.call(null,c__43456__auto__);
var G__57270 = (0);
seq__57251 = G__57267;
chunk__57252 = G__57268;
count__57253 = G__57269;
i__57254 = G__57270;
continue;
} else {
var ev = cljs.core.first.call(null,seq__57251__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__57258_57271 = ev;
var id_57272 = cljs.core.nth.call(null,vec__57258_57271,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_57272),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__57273 = cljs.core.next.call(null,seq__57251__$1);
var G__57274 = null;
var G__57275 = (0);
var G__57276 = (0);
seq__57251 = G__57273;
chunk__57252 = G__57274;
count__57253 = G__57275;
i__57254 = G__57276;
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
var and__42633__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__42633__auto__){
var vec__57286 = x;
var x1 = cljs.core.nth.call(null,vec__57286,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__42633__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_57310 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57300){if((e57300 instanceof Error)){
var e = e57300;
return e;
} else {
throw e57300;

}
}})();
if((e_57310 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",883,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_57310,null);
}

var e_57311 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57301){if((e57301 instanceof Error)){
var e = e57301;
return e;
} else {
throw e57301;

}
}})();
if((e_57311 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",884,"(handshake? clj)",clj,e_57311,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-1736239114);

var vec__57302 = clj;
var _ = cljs.core.nth.call(null,vec__57302,(0),null);
var vec__57305 = cljs.core.nth.call(null,vec__57302,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__57305,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__57305,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__57305,(2),null);
var map__57308 = chsk;
var map__57308__$1 = ((((!((map__57308 == null)))?((((map__57308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57308):map__57308);
var chs = cljs.core.get.call(null,map__57308__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__57308__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__57302,_,vec__57305,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__57308,map__57308__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__57302,_,vec__57305,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__57308,map__57308__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1905245018);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__57302,_,vec__57305,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__57308,map__57308__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__57289_SHARP_){
return cljs.core.merge.call(null,p1__57289_SHARP_,new_state);
});})(vec__57302,_,vec__57305,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__57308,map__57308__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
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
if(cljs.core.truth_((function (){var and__42633__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__42633__auto__)){
return typeof require !== 'undefined';
} else {
return and__42633__auto__;
}
})())){
try{return require("websocket");
}catch (e57312){var e = e57312;
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k57319,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__57321 = (((k57319 instanceof cljs.core.Keyword))?k57319.fqn:null);
switch (G__57321) {
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
return cljs.core.get.call(null,self__.__extmap,k57319,else__43270__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57318){
var self__ = this;
var G__57318__$1 = this;
return (new cljs.core.RecordIter((0),G__57318__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__57318){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__57322 = cljs.core.keyword_identical_QMARK_;
var expr__57323 = k__43275__auto__;
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__57323))){
return (new taoensso.sente.ChWebSocket(G__57318,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__57318,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__57318,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__57318,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__57318,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__57318,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__57318,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__57318,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__57318,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__57318,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__57318,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__57318,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__57318,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57322.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__57323))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__57318,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__57318),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__57318){
var self__ = this;
var this__43266__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__57318,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__57313_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__57313_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
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
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__57325 = opts;
var map__57325__$1 = ((((!((map__57325 == null)))?((((map__57325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57325):map__57325);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__57325__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__57325__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__57325__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___57416 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___57416)){
var cb_uuid_57417 = temp__4657__auto___57416;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_57417], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57327){if((e57327 instanceof Error)){
var e = e57327;
return e;
} else {
throw e57327;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",974,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___57418__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___57418__$1)){
var timeout_ms_57419 = temp__4657__auto___57418__$1;
var c__44817__auto___57420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___57420,timeout_ms_57419,temp__4657__auto___57418__$1,cb_uuid_57417,temp__4657__auto___57416,_QMARK_cb_uuid,ppstr,map__57325,map__57325__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___57420,timeout_ms_57419,temp__4657__auto___57418__$1,cb_uuid_57417,temp__4657__auto___57416,_QMARK_cb_uuid,ppstr,map__57325,map__57325__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_57338){
var state_val_57339 = (state_57338[(1)]);
if((state_val_57339 === (1))){
var inst_57328 = cljs.core.async.timeout.call(null,timeout_ms_57419);
var state_57338__$1 = state_57338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57338__$1,(2),inst_57328);
} else {
if((state_val_57339 === (2))){
var inst_57331 = (state_57338[(7)]);
var inst_57330 = (state_57338[(2)]);
var inst_57331__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_57338__$1 = (function (){var statearr_57340 = state_57338;
(statearr_57340[(7)] = inst_57331__$1);

(statearr_57340[(8)] = inst_57330);

return statearr_57340;
})();
if(cljs.core.truth_(inst_57331__$1)){
var statearr_57341_57421 = state_57338__$1;
(statearr_57341_57421[(1)] = (3));

} else {
var statearr_57342_57422 = state_57338__$1;
(statearr_57342_57422[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57339 === (3))){
var inst_57331 = (state_57338[(7)]);
var inst_57333 = inst_57331.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_57338__$1 = state_57338;
var statearr_57343_57423 = state_57338__$1;
(statearr_57343_57423[(2)] = inst_57333);

(statearr_57343_57423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57339 === (4))){
var state_57338__$1 = state_57338;
var statearr_57344_57424 = state_57338__$1;
(statearr_57344_57424[(2)] = null);

(statearr_57344_57424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57339 === (5))){
var inst_57336 = (state_57338[(2)]);
var state_57338__$1 = state_57338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57338__$1,inst_57336);
} else {
return null;
}
}
}
}
}
});})(c__44817__auto___57420,timeout_ms_57419,temp__4657__auto___57418__$1,cb_uuid_57417,temp__4657__auto___57416,_QMARK_cb_uuid,ppstr,map__57325,map__57325__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__44705__auto__,c__44817__auto___57420,timeout_ms_57419,temp__4657__auto___57418__$1,cb_uuid_57417,temp__4657__auto___57416,_QMARK_cb_uuid,ppstr,map__57325,map__57325__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__44706__auto__ = null;
var taoensso$sente$state_machine__44706__auto____0 = (function (){
var statearr_57348 = [null,null,null,null,null,null,null,null,null];
(statearr_57348[(0)] = taoensso$sente$state_machine__44706__auto__);

(statearr_57348[(1)] = (1));

return statearr_57348;
});
var taoensso$sente$state_machine__44706__auto____1 = (function (state_57338){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_57338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e57349){if((e57349 instanceof Object)){
var ex__44709__auto__ = e57349;
var statearr_57350_57425 = state_57338;
(statearr_57350_57425[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57426 = state_57338;
state_57338 = G__57426;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$state_machine__44706__auto__ = function(state_57338){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__44706__auto____1.call(this,state_57338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__44706__auto____0;
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__44706__auto____1;
return taoensso$sente$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___57420,timeout_ms_57419,temp__4657__auto___57418__$1,cb_uuid_57417,temp__4657__auto___57416,_QMARK_cb_uuid,ppstr,map__57325,map__57325__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__44819__auto__ = (function (){var statearr_57351 = f__44818__auto__.call(null);
(statearr_57351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___57420);

return statearr_57351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___57420,timeout_ms_57419,temp__4657__auto___57418__$1,cb_uuid_57417,temp__4657__auto___57416,_QMARK_cb_uuid,ppstr,map__57325,map__57325__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e57352){var e = e57352;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6251334600088777945.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__57325,map__57325__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__57325,map__57325__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-24571156);

var temp__4657__auto___57427 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___57427)){
var cb_uuid_57428 = temp__4657__auto___57427;
var cb_fn_STAR__57429 = (function (){var or__42645__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_57428);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57353){if((e57353 instanceof Error)){
var e__$1 = e57353;
return e__$1;
} else {
throw e57353;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",989,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__57429.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__42645__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,307611300);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__57314_SHARP_){
return cljs.core.assoc.call(null,p1__57314_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e57360){var e = e57360;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1003081717);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__57361 = _QMARK_socket;
(G__57361["onerror"] = ((function (G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e57362){var _ = e57362;
return ws_ev;
}})()], null);
});})(G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,235588494);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__57315_SHARP_){
return cljs.core.assoc.call(null,p1__57315_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__57361["onmessage"] = ((function (G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__57363 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__57363,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__57363,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__42645__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__42645__auto____$1,or__42645__auto__,ppstr,vec__57363,clj,_QMARK_cb_uuid,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__42645__auto____$1,or__42645__auto__,ppstr,vec__57363,clj,_QMARK_cb_uuid,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1351152859);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__57361["onclose"] = ((function (G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1668154285);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__57316_SHARP_){
return cljs.core.assoc.call(null,p1__57316_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__57317_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__57317_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__57361,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__57361;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___57430__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___57430__$1)){
var ms_57431 = temp__4657__auto___57430__$1;
var c__44817__auto___57432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___57432,ms_57431,temp__4657__auto___57430__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___57432,ms_57431,temp__4657__auto___57430__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_57393){
var state_val_57394 = (state_57393[(1)]);
if((state_val_57394 === (7))){
var inst_57389 = (state_57393[(2)]);
var state_57393__$1 = state_57393;
var statearr_57395_57433 = state_57393__$1;
(statearr_57395_57433[(2)] = inst_57389);

(statearr_57395_57433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (1))){
var state_57393__$1 = state_57393;
var statearr_57396_57434 = state_57393__$1;
(statearr_57396_57434[(2)] = null);

(statearr_57396_57434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (4))){
var inst_57370 = (state_57393[(2)]);
var inst_57371 = have_handle_QMARK_.call(null);
var state_57393__$1 = (function (){var statearr_57397 = state_57393;
(statearr_57397[(7)] = inst_57370);

return statearr_57397;
})();
if(cljs.core.truth_(inst_57371)){
var statearr_57398_57435 = state_57393__$1;
(statearr_57398_57435[(1)] = (5));

} else {
var statearr_57399_57436 = state_57393__$1;
(statearr_57399_57436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (6))){
var state_57393__$1 = state_57393;
var statearr_57400_57437 = state_57393__$1;
(statearr_57400_57437[(2)] = null);

(statearr_57400_57437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (3))){
var inst_57391 = (state_57393[(2)]);
var state_57393__$1 = state_57393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57393__$1,inst_57391);
} else {
if((state_val_57394 === (2))){
var inst_57367 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_57368 = cljs.core.async.timeout.call(null,ms_57431);
var state_57393__$1 = (function (){var statearr_57401 = state_57393;
(statearr_57401[(8)] = inst_57367);

return statearr_57401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57393__$1,(4),inst_57368);
} else {
if((state_val_57394 === (9))){
var state_57393__$1 = state_57393;
var statearr_57402_57438 = state_57393__$1;
(statearr_57402_57438[(2)] = null);

(statearr_57402_57438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (5))){
var inst_57367 = (state_57393[(8)]);
var inst_57373 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_57374 = cljs.core._EQ_.call(null,inst_57367,inst_57373);
var state_57393__$1 = state_57393;
if(inst_57374){
var statearr_57403_57439 = state_57393__$1;
(statearr_57403_57439[(1)] = (8));

} else {
var statearr_57404_57440 = state_57393__$1;
(statearr_57404_57440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (10))){
var inst_57385 = (state_57393[(2)]);
var state_57393__$1 = (function (){var statearr_57405 = state_57393;
(statearr_57405[(9)] = inst_57385);

return statearr_57405;
})();
var statearr_57406_57441 = state_57393__$1;
(statearr_57406_57441[(2)] = null);

(statearr_57406_57441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57394 === (8))){
var inst_57376 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57377 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_57378 = (new cljs.core.PersistentVector(null,1,(5),inst_57376,inst_57377,null));
var inst_57379 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_57380 = [true];
var inst_57381 = cljs.core.PersistentHashMap.fromArrays(inst_57379,inst_57380);
var inst_57382 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_57378,inst_57381);
var state_57393__$1 = state_57393;
var statearr_57407_57442 = state_57393__$1;
(statearr_57407_57442[(2)] = inst_57382);

(statearr_57407_57442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__44817__auto___57432,ms_57431,temp__4657__auto___57430__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__44705__auto__,c__44817__auto___57432,ms_57431,temp__4657__auto___57430__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__44706__auto__ = null;
var taoensso$sente$state_machine__44706__auto____0 = (function (){
var statearr_57411 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57411[(0)] = taoensso$sente$state_machine__44706__auto__);

(statearr_57411[(1)] = (1));

return statearr_57411;
});
var taoensso$sente$state_machine__44706__auto____1 = (function (state_57393){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_57393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e57412){if((e57412 instanceof Object)){
var ex__44709__auto__ = e57412;
var statearr_57413_57443 = state_57393;
(statearr_57413_57443[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57444 = state_57393;
state_57393 = G__57444;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$state_machine__44706__auto__ = function(state_57393){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__44706__auto____1.call(this,state_57393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__44706__auto____0;
taoensso$sente$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__44706__auto____1;
return taoensso$sente$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___57432,ms_57431,temp__4657__auto___57430__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__44819__auto__ = (function (){var statearr_57414 = f__44818__auto__.call(null);
(statearr_57414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___57432);

return statearr_57414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___57432,ms_57431,temp__4657__auto___57430__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__57320){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__57320),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__57320),null,cljs.core.dissoc.call(null,G__57320,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k57452,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__57454 = (((k57452 instanceof cljs.core.Keyword))?k57452.fqn:null);
switch (G__57454) {
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
return cljs.core.get.call(null,self__.__extmap,k57452,else__43270__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57451){
var self__ = this;
var G__57451__$1 = this;
return (new cljs.core.RecordIter((0),G__57451__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__57451){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__57455 = cljs.core.keyword_identical_QMARK_;
var expr__57456 = k__43275__auto__;
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(G__57451,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__57451,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__57451,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__57451,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__57451,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__57451,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__57451,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__57451,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__57451,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__57451,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57455.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__57456))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__57451,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__57451),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__57451){
var self__ = this;
var this__43266__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__57451,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__57445_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__57445_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
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
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__57458 = opts;
var map__57458__$1 = ((((!((map__57458 == null)))?((((map__57458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57458):map__57458);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__57458__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__57458__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__57458__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__42645__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__57458,map__57458__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__57460){
var map__57466 = p__57460;
var map__57466__$1 = ((((!((map__57466 == null)))?((((map__57466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57466):map__57466);
var _QMARK_error = cljs.core.get.call(null,map__57466__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__57466__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__57466,map__57466__$1,_QMARK_error,_QMARK_content,csrf_token,map__57458,map__57458__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__57446_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__57446_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__57466,map__57466__$1,_QMARK_error,_QMARK_content,csrf_token,map__57458,map__57458__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__57468 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__57468,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__57468,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__57468,resp_clj,___$1,map__57466,map__57466__$1,_QMARK_error,_QMARK_content,csrf_token,map__57458,map__57458__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__57468,resp_clj,___$1,map__57466,map__57466__$1,_QMARK_error,_QMARK_content,csrf_token,map__57458,map__57458__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1739935558);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__57468,resp_clj,___$1,map__57466,map__57466__$1,_QMARK_error,_QMARK_content,csrf_token,map__57458,map__57458__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__57447_SHARP_){
return cljs.core.assoc.call(null,p1__57447_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__57468,resp_clj,___$1,map__57466,map__57466__$1,_QMARK_error,_QMARK_content,csrf_token,map__57458,map__57458__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__57458,map__57458__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-2070032635);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,25997728);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__57448_SHARP_){
return cljs.core.assoc.call(null,p1__57448_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__42645__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__57482){
var map__57488 = p__57482;
var map__57488__$1 = ((((!((map__57488 == null)))?((((map__57488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57488):map__57488);
var _QMARK_error = cljs.core.get.call(null,map__57488__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__57488__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__57488,map__57488__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__57449_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__57449_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__57488,map__57488__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__57490 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__57490,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__57490,clj,handshake_QMARK_,map__57488,map__57488__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__57450_SHARP_){
return cljs.core.assoc.call(null,p1__57450_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__57490,clj,handshake_QMARK_,map__57488,map__57488__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__42645__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__57453){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__57453),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__57453),null,cljs.core.dissoc.call(null,G__57453,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
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
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k57495,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__57497 = (((k57495 instanceof cljs.core.Keyword))?k57495.fqn:null);
switch (G__57497) {
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
return cljs.core.get.call(null,self__.__extmap,k57495,else__43270__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57494){
var self__ = this;
var G__57494__$1 = this;
return (new cljs.core.RecordIter((0),G__57494__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__57494){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__57498 = cljs.core.keyword_identical_QMARK_;
var expr__57499 = k__43275__auto__;
if(cljs.core.truth_(pred__57498.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__57499))){
return (new taoensso.sente.ChAutoSocket(G__57494,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57498.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__57499))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__57494,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57498.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__57499))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__57494,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57498.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__57499))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__57494,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__57494),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__57494){
var self__ = this;
var this__43266__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__57494,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__57501 = opts;
var map__57501__$1 = ((((!((map__57501 == null)))?((((map__57501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57501):map__57501);
var _QMARK_cb = cljs.core.get.call(null,map__57501__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___57504 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___57504,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___57504,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___57504,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___57504,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1953000486);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
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
});})(downgraded_QMARK___57504,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__42645__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__57496){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__57496),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__57496),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__57496),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__57496),null,cljs.core.dissoc.call(null,G__57496,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__57509 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__57509) {
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
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57510){if((e57510 instanceof Error)){
var e = e57510;
return e;
} else {
throw e57510;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1379,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__57511 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57511) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__57512 = protocol__$2;
switch (G__57512) {
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
return [cljs.core.str(protocol__$3),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,host,path))].join('');
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
var args__43727__auto__ = [];
var len__43720__auto___57533 = arguments.length;
var i__43721__auto___57534 = (0);
while(true){
if((i__43721__auto___57534 < len__43720__auto___57533)){
args__43727__auto__.push((arguments[i__43721__auto___57534]));

var G__57535 = (i__43721__auto___57534 + (1));
i__43721__auto___57534 = G__57535;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__57518){
var vec__57519 = p__57518;
var map__57522 = cljs.core.nth.call(null,vec__57519,(0),null);
var map__57522__$1 = ((((!((map__57522 == null)))?((((map__57522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57522):map__57522);
var opts = map__57522__$1;
var ajax_opts = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__42645__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__57522__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__57519,(1),null);
var e_57536 = (function (){try{if(((function (vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57524){if((e57524 instanceof Error)){
var e = e57524;
return e;
} else {
throw e57524;

}
}})();
if((e_57536 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1421,"([:in #{:ws :ajax :auto}] type)",type,e_57536,null);
}

var e_57537 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57525){if((e57525 instanceof Error)){
var e = e57525;
return e;
} else {
throw e57525;

}
}})();
if((e_57537 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1422,"(enc/nblank-str? client-id)",client_id,e_57537,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,2114460573);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,854744481);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__57526 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__42645__auto__ = path;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__42645__auto__ = protocol;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__42645__auto__ = host;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__57526,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__57526,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__57526,ws_url,ajax_url,vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__57526,ws_url,ajax_url,vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__57529 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57529) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__57526,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__57530 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__57530,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__57530,(1),null);
var ev__$1 = vec__57530;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__57526,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__57526,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__57526,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__57519,map__57522,map__57522__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1479506973);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq57516){
var G__57517 = cljs.core.first.call(null,seq57516);
var seq57516__$1 = cljs.core.next.call(null,seq57516);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57517,seq57516__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__57618 = opts;
var map__57618__$1 = ((((!((map__57618 == null)))?((((map__57618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57618):map__57618);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__44817__auto___57697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_57664){
var state_val_57665 = (state_57664[(1)]);
if((state_val_57665 === (7))){
var inst_57660 = (state_57664[(2)]);
var state_57664__$1 = state_57664;
var statearr_57666_57698 = state_57664__$1;
(statearr_57666_57698[(2)] = inst_57660);

(statearr_57666_57698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (1))){
var state_57664__$1 = state_57664;
var statearr_57667_57699 = state_57664__$1;
(statearr_57667_57699[(2)] = null);

(statearr_57667_57699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (4))){
var inst_57630 = (state_57664[(7)]);
var inst_57628 = (state_57664[(8)]);
var inst_57631 = (state_57664[(9)]);
var inst_57628__$1 = (state_57664[(2)]);
var inst_57629 = cljs.core.nth.call(null,inst_57628__$1,(0),null);
var inst_57630__$1 = cljs.core.nth.call(null,inst_57628__$1,(1),null);
var inst_57631__$1 = cljs.core._EQ_.call(null,inst_57630__$1,ch_ctrl);
var state_57664__$1 = (function (){var statearr_57668 = state_57664;
(statearr_57668[(7)] = inst_57630__$1);

(statearr_57668[(8)] = inst_57628__$1);

(statearr_57668[(10)] = inst_57629);

(statearr_57668[(9)] = inst_57631__$1);

return statearr_57668;
})();
if(inst_57631__$1){
var statearr_57669_57700 = state_57664__$1;
(statearr_57669_57700[(1)] = (5));

} else {
var statearr_57670_57701 = state_57664__$1;
(statearr_57670_57701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (15))){
var inst_57629 = (state_57664[(10)]);
var state_57664__$1 = state_57664;
var statearr_57671_57702 = state_57664__$1;
(statearr_57671_57702[(2)] = inst_57629);

(statearr_57671_57702[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (13))){
var inst_57646 = (state_57664[(2)]);
var state_57664__$1 = state_57664;
var statearr_57672_57703 = state_57664__$1;
(statearr_57672_57703[(2)] = inst_57646);

(statearr_57672_57703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (6))){
var inst_57629 = (state_57664[(10)]);
var inst_57636 = (inst_57629 == null);
var inst_57637 = cljs.core.not.call(null,inst_57636);
var state_57664__$1 = state_57664;
if(inst_57637){
var statearr_57673_57704 = state_57664__$1;
(statearr_57673_57704[(1)] = (8));

} else {
var statearr_57674_57705 = state_57664__$1;
(statearr_57674_57705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (3))){
var inst_57662 = (state_57664[(2)]);
var state_57664__$1 = state_57664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57664__$1,inst_57662);
} else {
if((state_val_57665 === (12))){
var state_57664__$1 = state_57664;
var statearr_57675_57706 = state_57664__$1;
(statearr_57675_57706[(2)] = false);

(statearr_57675_57706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (2))){
var inst_57624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57625 = [ch_recv,ch_ctrl];
var inst_57626 = (new cljs.core.PersistentVector(null,2,(5),inst_57624,inst_57625,null));
var state_57664__$1 = state_57664;
return cljs.core.async.ioc_alts_BANG_.call(null,state_57664__$1,(4),inst_57626);
} else {
if((state_val_57665 === (11))){
var state_57664__$1 = state_57664;
var statearr_57676_57707 = state_57664__$1;
(statearr_57676_57707[(2)] = true);

(statearr_57676_57707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (9))){
var state_57664__$1 = state_57664;
var statearr_57677_57708 = state_57664__$1;
(statearr_57677_57708[(2)] = false);

(statearr_57677_57708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (5))){
var state_57664__$1 = state_57664;
var statearr_57678_57709 = state_57664__$1;
(statearr_57678_57709[(2)] = null);

(statearr_57678_57709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (14))){
var inst_57629 = (state_57664[(10)]);
var inst_57651 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57629);
var state_57664__$1 = state_57664;
var statearr_57679_57710 = state_57664__$1;
(statearr_57679_57710[(2)] = inst_57651);

(statearr_57679_57710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (16))){
var inst_57630 = (state_57664[(7)]);
var inst_57628 = (state_57664[(8)]);
var inst_57629 = (state_57664[(10)]);
var inst_57631 = (state_57664[(9)]);
var inst_57654 = (state_57664[(2)]);
var inst_57655 = cljs.core.get.call(null,inst_57654,new cljs.core.Keyword(null,"event","event",301435442));
var inst_57656 = (function (){var vec__57621 = inst_57628;
var v = inst_57629;
var p = inst_57630;
var stop_QMARK_ = inst_57631;
var map__57634 = inst_57654;
var event_msg = inst_57654;
var event = inst_57655;
return ((function (vec__57621,v,p,stop_QMARK_,map__57634,event_msg,event,inst_57630,inst_57628,inst_57629,inst_57631,inst_57654,inst_57655,state_val_57665,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__57621,v,p,stop_QMARK_,map__57634,event_msg,event,inst_57630,inst_57628,inst_57629,inst_57631,inst_57654,inst_57655,state_val_57665,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__57621,v,p,stop_QMARK_,map__57634,event_msg,event,inst_57630,inst_57628,inst_57629,inst_57631,inst_57654,inst_57655,state_val_57665,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,597869893);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57682){if((e57682 instanceof Error)){
var e = e57682;
return e;
} else {
throw e57682;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1543,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e57683){if((e57683 instanceof Error)){
var e = e57683;
return e;
} else {
throw e57683;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1544,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e57680){if((e57680 instanceof Error)){
var e1 = e57680;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__57621,v,p,stop_QMARK_,map__57634,event_msg,event,inst_57630,inst_57628,inst_57629,inst_57631,inst_57654,inst_57655,state_val_57665,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__57621,v,p,stop_QMARK_,map__57634,event_msg,event,inst_57630,inst_57628,inst_57629,inst_57631,inst_57654,inst_57655,state_val_57665,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1713542664);
}
}catch (e57681){if((e57681 instanceof Error)){
var e2 = e57681;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6251334600088777945.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__57621,v,p,stop_QMARK_,map__57634,event_msg,event,inst_57630,inst_57628,inst_57629,inst_57631,inst_57654,inst_57655,state_val_57665,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__57621,v,p,stop_QMARK_,map__57634,event_msg,event,inst_57630,inst_57628,inst_57629,inst_57631,inst_57654,inst_57655,state_val_57665,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1825213060);
} else {
throw e57681;

}
}} else {
throw e57680;

}
}});
;})(vec__57621,v,p,stop_QMARK_,map__57634,event_msg,event,inst_57630,inst_57628,inst_57629,inst_57631,inst_57654,inst_57655,state_val_57665,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_57657 = execute1.call(null,inst_57656);
var state_57664__$1 = (function (){var statearr_57684 = state_57664;
(statearr_57684[(11)] = inst_57657);

return statearr_57684;
})();
var statearr_57685_57711 = state_57664__$1;
(statearr_57685_57711[(2)] = null);

(statearr_57685_57711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (10))){
var inst_57649 = (state_57664[(2)]);
var state_57664__$1 = state_57664;
if(cljs.core.truth_(inst_57649)){
var statearr_57686_57712 = state_57664__$1;
(statearr_57686_57712[(1)] = (14));

} else {
var statearr_57687_57713 = state_57664__$1;
(statearr_57687_57713[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57665 === (8))){
var inst_57629 = (state_57664[(10)]);
var inst_57639 = inst_57629.cljs$lang$protocol_mask$partition0$;
var inst_57640 = (inst_57639 & (64));
var inst_57641 = inst_57629.cljs$core$ISeq$;
var inst_57642 = (inst_57640) || (inst_57641);
var state_57664__$1 = state_57664;
if(cljs.core.truth_(inst_57642)){
var statearr_57688_57714 = state_57664__$1;
(statearr_57688_57714[(1)] = (11));

} else {
var statearr_57689_57715 = state_57664__$1;
(statearr_57689_57715[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__44705__auto__,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto____0 = (function (){
var statearr_57693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57693[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto__);

(statearr_57693[(1)] = (1));

return statearr_57693;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto____1 = (function (state_57664){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_57664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e57694){if((e57694 instanceof Object)){
var ex__44709__auto__ = e57694;
var statearr_57695_57716 = state_57664;
(statearr_57695_57716[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57717 = state_57664;
state_57664 = G__57717;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto__ = function(state_57664){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto____1.call(this,state_57664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__44819__auto__ = (function (){var statearr_57696 = f__44818__auto__.call(null);
(statearr_57696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___57697);

return statearr_57696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___57697,map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__57618,map__57618__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var args__43727__auto__ = [];
var len__43720__auto___57727 = arguments.length;
var i__43721__auto___57728 = (0);
while(true){
if((i__43721__auto___57728 < len__43720__auto___57727)){
args__43727__auto__.push((arguments[i__43721__auto___57728]));

var G__57729 = (i__43721__auto___57728 + (1));
i__43721__auto___57728 = G__57729;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((2) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__43728__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__57721){
var vec__57722 = p__57721;
var map__57725 = cljs.core.nth.call(null,vec__57722,(0),null);
var map__57725__$1 = ((((!((map__57725 == null)))?((((map__57725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57725):map__57725);
var opts = map__57725__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__57725__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__57725__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__57725__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq57718){
var G__57719 = cljs.core.first.call(null,seq57718);
var seq57718__$1 = cljs.core.next.call(null,seq57718);
var G__57720 = cljs.core.first.call(null,seq57718__$1);
var seq57718__$2 = cljs.core.next.call(null,seq57718__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57719,G__57720,seq57718__$2);
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
var args__43727__auto__ = [];
var len__43720__auto___57739 = arguments.length;
var i__43721__auto___57740 = (0);
while(true){
if((i__43721__auto___57740 < len__43720__auto___57739)){
args__43727__auto__.push((arguments[i__43721__auto___57740]));

var G__57741 = (i__43721__auto___57740 + (1));
i__43721__auto___57740 = G__57741;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((2) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__43728__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__57733){
var vec__57734 = p__57733;
var map__57737 = cljs.core.nth.call(null,vec__57734,(0),null);
var map__57737__$1 = ((((!((map__57737 == null)))?((((map__57737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57737):map__57737);
var opts = map__57737__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__57737__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__57737__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq57730){
var G__57731 = cljs.core.first.call(null,seq57730);
var seq57730__$1 = cljs.core.next.call(null,seq57730);
var G__57732 = cljs.core.first.call(null,seq57730__$1);
var seq57730__$2 = cljs.core.next.call(null,seq57730__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57731,G__57732,seq57730__$2);
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
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__57742,websocket_QMARK_){
var map__57745 = p__57742;
var map__57745__$1 = ((((!((map__57745 == null)))?((((map__57745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57745):map__57745);
var location = map__57745__$1;
var protocol = cljs.core.get.call(null,map__57745__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__57745__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__57745__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__42645__auto__ = path;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map