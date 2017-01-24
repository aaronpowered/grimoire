// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rpg.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('taoensso.timbre');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('rpg.tools');
goog.require('rpg.registration');
goog.require('accountant.core');
goog.require('taoensso.encore');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.core.match');
rpg.core.getElementById = (function rpg$core$getElementById(id){
return document.getElementById(id);
});
rpg.core.getValueById = (function rpg$core$getValueById(id){
return rpg.core.getElementById(id).value;
});
rpg.core.changeValueById = (function rpg$core$changeValueById(id,update){
return rpg.core.getElementById(id).value = update;
});
rpg.core.on_click = (function rpg$core$on_click(id,event){
var temp__4657__auto__ = rpg.core.getElementById(id);
if(cljs.core.truth_(temp__4657__auto__)){
var target_el = temp__4657__auto__;
return target_el.addEventListener("click",event);
} else {
return null;
}
});
rpg.core.on_key_press = (function rpg$core$on_key_press(id,event){
var temp__4657__auto__ = rpg.core.getElementById(id);
if(cljs.core.truth_(temp__4657__auto__)){
var target_el = temp__4657__auto__;
return target_el.addEventListener("keypress",event);
} else {
return null;
}
});
var map__35572_35576 = (function (){var G__35573 = "/chsk";
var G__35574 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn], null);
return (taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$2(G__35573,G__35574) : taoensso.sente.make_channel_socket_BANG_.call(null,G__35573,G__35574));
})();
var map__35572_35577__$1 = ((((!((map__35572_35576 == null)))?((((map__35572_35576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35572_35576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35572_35576):map__35572_35576);
var chsk_35578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572_35577__$1,cljs.core.cst$kw$chsk);
var ch_recv_35579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572_35577__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn_35580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572_35577__$1,cljs.core.cst$kw$send_DASH_fn);
var state_35581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572_35577__$1,cljs.core.cst$kw$state);
rpg.core.chsk = chsk_35578;

rpg.core.ch_chsk = ch_recv_35579;

rpg.core.chsk_send_BANG_ = send_fn_35580;

rpg.core.chsk_state = state_35581;
rpg.core.output_el = rpg.core.getElementById("output");
rpg.core.__GT_output_BANG_ = (function rpg$core$__GT_output_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___35584 = arguments.length;
var i__7490__auto___35585 = (0);
while(true){
if((i__7490__auto___35585 < len__7489__auto___35584)){
args__7496__auto__.push((arguments[i__7490__auto___35585]));

var G__35586 = (i__7490__auto___35585 + (1));
i__7490__auto___35585 = G__35586;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.format,fmt,args);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"rpg.core","/tmp/form-init7447384388010150061.clj",57,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null,-1576720732);

(rpg.core.output_el["value"] = [cljs.core.str("\u2022 "),cljs.core.str(rpg.core.output_el.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (rpg.core.output_el["scrollTop"] = rpg.core.output_el.scrollHeight);
});

rpg.core.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

rpg.core.__GT_output_BANG_.cljs$lang$applyTo = (function (seq35582){
var G__35583 = cljs.core.first(seq35582);
var seq35582__$1 = cljs.core.next(seq35582);
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35583,seq35582__$1);
});

rpg.core.chat_output = rpg.core.getElementById("chat-msgs");
rpg.core.__GT_chat_BANG_ = (function rpg$core$__GT_chat_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___35589 = arguments.length;
var i__7490__auto___35590 = (0);
while(true){
if((i__7490__auto___35590 < len__7489__auto___35589)){
args__7496__auto__.push((arguments[i__7490__auto___35590]));

var G__35591 = (i__7490__auto___35590 + (1));
i__7490__auto___35590 = G__35591;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return rpg.core.__GT_chat_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

rpg.core.__GT_chat_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.format,fmt,args);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"rpg.core","/tmp/form-init7447384388010150061.clj",65,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null,82416582);

(rpg.core.chat_output["value"] = [cljs.core.str("\u2022 "),cljs.core.str(rpg.core.chat_output.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (rpg.core.chat_output["scrollTop"] = rpg.core.chat_output.scrollHeight);
});

rpg.core.__GT_chat_BANG_.cljs$lang$maxFixedArity = (1);

rpg.core.__GT_chat_BANG_.cljs$lang$applyTo = (function (seq35587){
var G__35588 = cljs.core.first(seq35587);
var seq35587__$1 = cljs.core.next(seq35587);
return rpg.core.__GT_chat_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35588,seq35587__$1);
});

rpg.core.online_players = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(typeof rpg.core._event_msg_handler !== 'undefined'){
} else {
rpg.core._event_msg_handler = (function (){var method_table__7339__auto__ = (function (){var G__35592 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35592) : cljs.core.atom.call(null,G__35592));
})();
var prefer_table__7340__auto__ = (function (){var G__35593 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35593) : cljs.core.atom.call(null,G__35593));
})();
var method_cache__7341__auto__ = (function (){var G__35594 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35594) : cljs.core.atom.call(null,G__35594));
})();
var cached_hierarchy__7342__auto__ = (function (){var G__35595 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35595) : cljs.core.atom.call(null,G__35595));
})();
var hierarchy__7343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rpg.core","-event-msg-handler"),cljs.core.cst$kw$id,cljs.core.cst$kw$default,hierarchy__7343__auto__,method_table__7339__auto__,prefer_table__7340__auto__,method_cache__7341__auto__,cached_hierarchy__7342__auto__));
})();
}
rpg.core.event_msg_handler = (function rpg$core$event_msg_handler(p__35596){
var map__35599 = p__35596;
var map__35599__$1 = ((((!((map__35599 == null)))?((((map__35599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35599):map__35599);
var ev_msg = map__35599__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35599__$1,cljs.core.cst$kw$id);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35599__$1,cljs.core.cst$kw$_QMARK_data);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35599__$1,cljs.core.cst$kw$event);
return (rpg.core._event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? rpg.core._event_msg_handler.cljs$core$IFn$_invoke$arity$1(ev_msg) : rpg.core._event_msg_handler.call(null,ev_msg));
});
rpg.core._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__35601){
var map__35602 = p__35601;
var map__35602__$1 = ((((!((map__35602 == null)))?((((map__35602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35602):map__35602);
var ev_msg = map__35602__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35602__$1,cljs.core.cst$kw$event);
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic("Unhandled event on client: %s",cljs.core.array_seq([event], 0));
}));
rpg.core._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_state,(function (p__35604){
var map__35605 = p__35604;
var map__35605__$1 = ((((!((map__35605 == null)))?((((map__35605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35605):map__35605);
var ev_msg = map__35605__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35605__$1,cljs.core.cst$kw$_QMARK_data);
var vec__35607 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_(_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35610){if((e35610 instanceof Error)){
var e = e35610;
return e;
} else {
throw e35610;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"rpg.core",85,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state_map))){
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic("Channel socket successfully established!: %s",cljs.core.array_seq([new_state_map], 0));
} else {
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic("Channel socket state change: %s",cljs.core.array_seq([new_state_map], 0));
}
}));
rpg.core._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_recv,(function (p__35611){
var map__35612 = p__35611;
var map__35612__$1 = ((((!((map__35612 == null)))?((((map__35612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35612):map__35612);
var ev_msg = map__35612__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35612__$1,cljs.core.cst$kw$_QMARK_data);
try{if((cljs.core.vector_QMARK_(_QMARK_data)) && ((cljs.core.count(_QMARK_data) === 2))){
try{var _QMARK_data_0__35615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_QMARK_data,(0));
if(cljs.core.keyword_identical_QMARK_(_QMARK_data_0__35615,cljs.core.cst$kw$chat_SLASH_push_DASH_back)){
var new_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_QMARK_data,(1));
return rpg.core.__GT_chat_BANG_.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.array_seq([new_message], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e35618){if((e35618 instanceof Error)){
var e__34778__auto__ = e35618;
if((e__34778__auto__ === cljs.core.match.backtrack)){
try{var _QMARK_data_0__35615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_QMARK_data,(0));
if(cljs.core.keyword_identical_QMARK_(_QMARK_data_0__35615,cljs.core.cst$kw$server_SLASH_uids)){
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_QMARK_data,(1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(rpg.core.online_players,uids) : cljs.core.reset_BANG_.call(null,rpg.core.online_players,uids));
} else {
throw cljs.core.match.backtrack;

}
}catch (e35619){if((e35619 instanceof Error)){
var e__34778__auto____$1 = e35619;
if((e__34778__auto____$1 === cljs.core.match.backtrack)){
try{var _QMARK_data_0__35615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_QMARK_data,(0));
if(cljs.core.keyword_identical_QMARK_(_QMARK_data_0__35615,cljs.core.cst$kw$server_SLASH_login_DASH_failed)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_QMARK_data,(1));
return window.alert("Rossz jelsz\u00F3.");
} else {
throw cljs.core.match.backtrack;

}
}catch (e35620){if((e35620 instanceof Error)){
var e__34778__auto____$2 = e35620;
if((e__34778__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34778__auto____$2;
}
} else {
throw e35620;

}
}} else {
throw e__34778__auto____$1;
}
} else {
throw e35619;

}
}} else {
throw e__34778__auto__;
}
} else {
throw e35618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35617){if((e35617 instanceof Error)){
var e__34778__auto__ = e35617;
if((e__34778__auto__ === cljs.core.match.backtrack)){
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic("Unhandled push event from server: %s",cljs.core.array_seq([_QMARK_data], 0));
} else {
throw e__34778__auto__;
}
} else {
throw e35617;

}
}}));
rpg.core._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_handshake,(function (p__35621){
var map__35622 = p__35621;
var map__35622__$1 = ((((!((map__35622 == null)))?((((map__35622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35622):map__35622);
var ev_msg = map__35622__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35622__$1,cljs.core.cst$kw$_QMARK_data);
var vec__35624 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35624,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35624,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35624,(2),null);
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic("Handshake: %s",cljs.core.array_seq([_QMARK_data], 0));
}));
rpg.core._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chat_SLASH_all_DASH_messages,(function (p__35627){
var map__35628 = p__35627;
var map__35628__$1 = ((((!((map__35628 == null)))?((((map__35628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35628):map__35628);
var ev_msg = map__35628__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35628__$1,cljs.core.cst$kw$_QMARK_data);
return rpg.core.__GT_chat_BANG_.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.array_seq([_QMARK_data], 0));
}));
if(typeof rpg.core.router_ !== 'undefined'){
} else {
rpg.core.router_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
rpg.core.stop_router_BANG_ = (function rpg$core$stop_router_BANG_(){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rpg.core.router_) : cljs.core.deref.call(null,rpg.core.router_));
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
rpg.core.start_router_BANG_ = (function rpg$core$start_router_BANG_(){
rpg.core.stop_router_BANG_();

var G__35632 = rpg.core.router_;
var G__35633 = taoensso.sente.start_client_chsk_router_BANG_(rpg.core.ch_chsk,rpg.core.event_msg_handler);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35632,G__35633) : cljs.core.reset_BANG_.call(null,G__35632,G__35633));
});
rpg.core.send_chat_message = (function rpg$core$send_chat_message(ev){
var message = rpg.core.getValueById("chat-input");
rpg.core.__GT_output_BANG_("A chat message sent to the server.");

var G__35635_35636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chat_SLASH_new_DASH_message,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$msg,message,cljs.core.cst$kw$date,window.Date()], null)], null);
(rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__35635_35636) : rpg.core.chsk_send_BANG_.call(null,G__35635_35636));

return rpg.core.changeValueById("chat-input","");
});
rpg.core.on_key_press("chat-input",(function (ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),ev.charCode)){
return rpg.core.send_chat_message(ev);
} else {
return null;
}
}));
rpg.core.on_click("chat-button",(function (ev){
return rpg.core.send_chat_message(ev);
}));
rpg.core.on_click("btn1",(function (ev){
rpg.core.__GT_output_BANG_("Button 1 was clicked (won't receive any reply)");

var G__35637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_button1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$had_DASH_a_DASH_callback_QMARK_,"nope"], null)], null);
return (rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__35637) : rpg.core.chsk_send_BANG_.call(null,G__35637));
}));
rpg.core.on_click("btn2",(function (ev){
rpg.core.__GT_output_BANG_("Button 2 was clicked (will receive reply)");

var G__35638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_button2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$had_DASH_a_DASH_callback_QMARK_,"indeed"], null)], null);
var G__35639 = (5000);
var G__35640 = ((function (G__35638,G__35639){
return (function (cb_reply){
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic("Callback reply: %s",cljs.core.array_seq([cb_reply], 0));
});})(G__35638,G__35639))
;
return (rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__35638,G__35639,G__35640) : rpg.core.chsk_send_BANG_.call(null,G__35638,G__35639,G__35640));
}));
rpg.core.on_click("btn3",(function (ev){
rpg.core.__GT_output_BANG_("Button 3 was clicked\n                  (will ask server to test rapid async push)");

var G__35641 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_test_DASH_rapid_DASH_push], null);
return (rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__35641) : rpg.core.chsk_send_BANG_.call(null,G__35641));
}));
rpg.core.on_click("btn4",(function (ev){
rpg.core.__GT_output_BANG_("Button 4 was clicked\n                  (will toggle async broadcast loop)");

var G__35642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_toggle_DASH_broadcast], null);
var G__35643 = (5000);
var G__35644 = ((function (G__35642,G__35643){
return (function (cb_reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_(cb_reply))){
var loop_enabled_QMARK_ = cb_reply;
if(cljs.core.truth_(loop_enabled_QMARK_)){
return rpg.core.__GT_output_BANG_("Async broadcast loop now enabled");
} else {
return rpg.core.__GT_output_BANG_("Async broadcast loop now disabled");
}
} else {
return null;
}
});})(G__35642,G__35643))
;
return (rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? rpg.core.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__35642,G__35643,G__35644) : rpg.core.chsk_send_BANG_.call(null,G__35642,G__35643,G__35644));
}));
rpg.core.on_click("btn5",(function (ev){
rpg.core.__GT_output_BANG_("Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_(rpg.core.chsk);
}));
rpg.core.on_click("btn6",(function (ev){
rpg.core.__GT_output_BANG_("Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_(rpg.core.chsk);
}));
rpg.core.on_click("btn-login",(function (ev){
var user_id = rpg.core.getValueById("login-uid");
var user_pass = rpg.core.getValueById("login-password");
if(clojure.string.blank_QMARK_(user_id)){
return alert("Please enter a user-id first");
} else {
rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic("Logging in with user-id %s",cljs.core.array_seq([user_id], 0));

var G__35645 = "/auth";
var G__35646 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rpg.core.chsk_state) : cljs.core.deref.call(null,rpg.core.chsk_state)))], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$user_DASH_id,[cljs.core.str(user_id)].join(''),cljs.core.cst$kw$user_DASH_pass,[cljs.core.str(user_pass)].join('')], null)], null);
var G__35647 = ((function (G__35645,G__35646,user_id,user_pass){
return (function (ajax_resp){
rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic("Ajax login response: %s",cljs.core.array_seq([ajax_resp], 0));

var login_successful_QMARK_ = true;
if(!(login_successful_QMARK_)){
return rpg.core.__GT_output_BANG_("Login failed");
} else {
rpg.core.__GT_output_BANG_("Login successful");

return taoensso.sente.chsk_reconnect_BANG_(rpg.core.chsk);
}
});})(G__35645,G__35646,user_id,user_pass))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__35645,G__35646,G__35647) : taoensso.sente.ajax_lite.call(null,G__35645,G__35646,G__35647));
}
}));
rpg.core.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/edn/basics.edn",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,(function (p1__35648_SHARP_){
var G__35649 = rpg.core.data;
var G__35650 = cljs.reader.read_string(p1__35648_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35649,G__35650) : cljs.core.reset_BANG_.call(null,G__35649,G__35650));
})], null)], 0));
rpg.core.profile = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$role,cljs.core.cst$kw$theory,cljs.core.cst$kw$property,cljs.core.cst$kw$name,cljs.core.cst$kw$inventory,cljs.core.cst$kw$skills,cljs.core.cst$kw$personality,cljs.core.cst$kw$origin,cljs.core.cst$kw$profs],["",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),"Neved?",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),cljs.core.PersistentArrayMap.EMPTY,"","",cljs.core.PersistentArrayMap.EMPTY]));
rpg.core.character_sheet = (function rpg$core$character_sheet(actual,skills,professions){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sheet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,[cljs.core.str(cljs.core.cst$kw$personality.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual)))),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual))))].join('')], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual))),""))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,[cljs.core.str(" ("),cljs.core.str(cljs.core.cst$kw$origin.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(actual) : cljs.core.deref.call(null,actual)))),cljs.core.str(" sz\u00E1rmaz\u00E1s)")].join('')], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"K\u00E9pess\u00E9gek:"], null),rpg.tools.container.cljs$core$IFn$_invoke$arity$3(actual,"skills",skills),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Cuccok:"], null),rpg.tools.container.cljs$core$IFn$_invoke$arity$2(actual,"inventory"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Tulajdon:"], null),rpg.tools.container.cljs$core$IFn$_invoke$arity$2(actual,"property"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Tehets\u00E9g:"], null),rpg.tools.container.cljs$core$IFn$_invoke$arity$3(actual,"profs",professions)], null);
});
rpg.core.home_page = (function rpg$core$home_page(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to RPG"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/new"], null),"Regisztr\u00E1ci\u00F3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/info"], null),"Szab\u00E1lyk\u00F6nyv"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/market"], null),"Piac"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Bel\u00E9p\u00E9s:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/w0"], null),"Szerver 0 "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/who-is-online"], null),[cljs.core.str("("),cljs.core.str(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rpg.core.online_players) : cljs.core.deref.call(null,rpg.core.online_players)))),cljs.core.str("/50 j\u00E1t\u00E9kos)")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35651_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,p1__35651_SHARP_], null);
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rpg.core.online_players) : cljs.core.deref.call(null,rpg.core.online_players)))], null)], null);
});
rpg.core.info_page = (function rpg$core$info_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"Vissza"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$skills$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"K\u00E9pess\u00E9gek"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (key,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$skill,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" ("),cljs.core.str(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
}),cljs.core.cst$kw$skill.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rpg.core.data) : cljs.core.deref.call(null,rpg.core.data))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$professions$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Szak\u00E9rtelmek"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (key,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$profession,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null));
}),cljs.core.cst$kw$profession.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rpg.core.data) : cljs.core.deref.call(null,rpg.core.data))))], null)], null);
});
rpg.core.market_card = (function rpg$core$market_card(style){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$details$card,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$summary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("property "),cljs.core.str(style)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$eyebrow,"Django Freeman"], null),"Elad\u00F3 cuccai"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"7 Nyersanyag, 2 Fegyver, 1 \u00C9rt\u00E9kt\u00E1rgy"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$hotel,"A hatalom szerencs\u00E9s ac\u00E9l\u00F6kle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$hotel,"Filoz\u00F3fia k\u00F6nyv (nyersanyag)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"3 aranyp\u00E9nz 50 ez\u00FCstp\u00E9nz"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Megv\u00E1s\u00E1rolom"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$disclaimer,"A t\u00E1rgyak list\u00E1j\u00E1t az elad\u00F3 nem tette nyilv\u00E1noss\u00E1",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Becs\u00FClt \u00F6ssz\u00E9rt\u00E9k\u00FCk: 472 ez\u00FCstp\u00E9nz"], null)], null);
});
rpg.core.market = (function rpg$core$market(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$market,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"Vissza"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$table,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,rpg.core.market_card("lightblue"),rpg.core.market_card("lightblue"),rpg.core.market_card("lightblue")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,rpg.core.market_card("yellow"),rpg.core.market_card("yellow")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,rpg.core.market_card("darkblue"),rpg.core.market_card("darkblue"),rpg.core.market_card("darkblue"),rpg.core.market_card("darkblue")], null)], null)], null);
});
rpg.core.current_page = (function rpg$core$current_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.cst$kw$current_DASH_page)], null),rpg.core.character_sheet(rpg.core.profile,cljs.core.cst$kw$skill.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rpg.core.data) : cljs.core.deref.call(null,rpg.core.data))),cljs.core.cst$kw$professions.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rpg.core.data) : cljs.core.deref.call(null,rpg.core.data))))], null);
});
rpg.core.registration = (function rpg$core$registration(){
return rpg.registration.create_character(rpg.core.profile,rpg.core.data);
});
var action__12321__auto___35657 = (function (params__12322__auto__){
if(cljs.core.map_QMARK_(params__12322__auto__)){
var map__35652 = params__12322__auto__;
var map__35652__$1 = ((((!((map__35652 == null)))?((((map__35652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35652):map__35652);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return rpg.core.home_page;},cljs.core.cst$sym$rpg$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rpg$core,cljs.core.cst$sym$home_DASH_page,"src/cljs/rpg/core.cljs",16,1,241,241,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.home_page)?rpg.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__12322__auto__)){
var vec__35654 = params__12322__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return rpg.core.home_page;},cljs.core.cst$sym$rpg$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rpg$core,cljs.core.cst$sym$home_DASH_page,"src/cljs/rpg/core.cljs",16,1,241,241,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.home_page)?rpg.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__12321__auto___35657);

var action__12321__auto___35663 = (function (params__12322__auto__){
if(cljs.core.map_QMARK_(params__12322__auto__)){
var map__35658 = params__12322__auto__;
var map__35658__$1 = ((((!((map__35658 == null)))?((((map__35658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35658):map__35658);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return rpg.core.registration;},cljs.core.cst$sym$rpg$core_SLASH_registration,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rpg$core,cljs.core.cst$sym$registration,"src/cljs/rpg/core.cljs",19,1,317,317,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.registration)?rpg.core.registration.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__12322__auto__)){
var vec__35660 = params__12322__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return rpg.core.registration;},cljs.core.cst$sym$rpg$core_SLASH_registration,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rpg$core,cljs.core.cst$sym$registration,"src/cljs/rpg/core.cljs",19,1,317,317,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.registration)?rpg.core.registration.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/new",action__12321__auto___35663);

var action__12321__auto___35669 = (function (params__12322__auto__){
if(cljs.core.map_QMARK_(params__12322__auto__)){
var map__35664 = params__12322__auto__;
var map__35664__$1 = ((((!((map__35664 == null)))?((((map__35664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35664):map__35664);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return rpg.core.market;},cljs.core.cst$sym$rpg$core_SLASH_market,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rpg$core,cljs.core.cst$sym$market,"src/cljs/rpg/core.cljs",13,1,288,288,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.market)?rpg.core.market.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__12322__auto__)){
var vec__35666 = params__12322__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return rpg.core.market;},cljs.core.cst$sym$rpg$core_SLASH_market,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rpg$core,cljs.core.cst$sym$market,"src/cljs/rpg/core.cljs",13,1,288,288,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.market)?rpg.core.market.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/market",action__12321__auto___35669);

var action__12321__auto___35675 = (function (params__12322__auto__){
if(cljs.core.map_QMARK_(params__12322__auto__)){
var map__35670 = params__12322__auto__;
var map__35670__$1 = ((((!((map__35670 == null)))?((((map__35670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35670):map__35670);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return rpg.core.info_page;},cljs.core.cst$sym$rpg$core_SLASH_info_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rpg$core,cljs.core.cst$sym$info_DASH_page,"src/cljs/rpg/core.cljs",16,1,255,255,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.info_page)?rpg.core.info_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__12322__auto__)){
var vec__35672 = params__12322__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return rpg.core.info_page;},cljs.core.cst$sym$rpg$core_SLASH_info_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rpg$core,cljs.core.cst$sym$info_DASH_page,"src/cljs/rpg/core.cljs",16,1,255,255,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.info_page)?rpg.core.info_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/info",action__12321__auto___35675);

rpg.core.mount_root = (function rpg$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.core.current_page], null),rpg.core.getElementById("app"));
});
rpg.core.init_BANG_ = (function rpg$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

rpg.core.mount_root();

return rpg.core.start_router_BANG_();
});
