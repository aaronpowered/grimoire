// Compiled by ClojureScript 1.9.229 {}
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
goog.require('rpg.world');
goog.require('accountant.core');
goog.require('taoensso.encore');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.core.match');
rpg.core.getElementById = (function rpg$core$getElementById(id){
return document.getElementById(id);
});
rpg.core.getValueById = (function rpg$core$getValueById(id){
return rpg.core.getElementById.call(null,id).value;
});
rpg.core.changeValueById = (function rpg$core$changeValueById(id,update){
return rpg.core.getElementById.call(null,id).value = update;
});
rpg.core.on_click = (function rpg$core$on_click(id,event){
var temp__4657__auto__ = rpg.core.getElementById.call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var target_el = temp__4657__auto__;
return target_el.addEventListener("click",event);
} else {
return null;
}
});
rpg.core.on_key_press = (function rpg$core$on_key_press(id,event){
var temp__4657__auto__ = rpg.core.getElementById.call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var target_el = temp__4657__auto__;
return target_el.addEventListener("keypress",event);
} else {
return null;
}
});
var map__53727_53729 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
var map__53727_53730__$1 = ((((!((map__53727_53729 == null)))?((((map__53727_53729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53727_53729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53727_53729):map__53727_53729);
var chsk_53731 = cljs.core.get.call(null,map__53727_53730__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_53732 = cljs.core.get.call(null,map__53727_53730__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_53733 = cljs.core.get.call(null,map__53727_53730__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_53734 = cljs.core.get.call(null,map__53727_53730__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rpg.core.chsk = chsk_53731;

rpg.core.ch_chsk = ch_recv_53732;

rpg.core.chsk_send_BANG_ = send_fn_53733;

rpg.core.chsk_state = state_53734;
rpg.core.output_el = rpg.core.getElementById.call(null,"output");
rpg.core.__GT_output_BANG_ = (function rpg$core$__GT_output_BANG_(var_args){
var args__43725__auto__ = [];
var len__43718__auto___53737 = arguments.length;
var i__43719__auto___53738 = (0);
while(true){
if((i__43719__auto___53738 < len__43718__auto___53737)){
args__43725__auto__.push((arguments[i__43719__auto___53738]));

var G__53739 = (i__43719__auto___53738 + (1));
i__43719__auto___53738 = G__53739;
continue;
} else {
}
break;
}

var argseq__43726__auto__ = ((((1) < args__43725__auto__.length))?(new cljs.core.IndexedSeq(args__43725__auto__.slice((1)),(0),null)):null);
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43726__auto__);
});

rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"rpg.core","/tmp/form-init4353864407834428586.clj",58,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null,-73510161);

(rpg.core.output_el["value"] = [cljs.core.str("\u2022 "),cljs.core.str(rpg.core.output_el.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (rpg.core.output_el["scrollTop"] = rpg.core.output_el.scrollHeight);
});

rpg.core.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

rpg.core.__GT_output_BANG_.cljs$lang$applyTo = (function (seq53735){
var G__53736 = cljs.core.first.call(null,seq53735);
var seq53735__$1 = cljs.core.next.call(null,seq53735);
return rpg.core.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53736,seq53735__$1);
});

rpg.core.chat_output = rpg.core.getElementById.call(null,"chat-msgs");
rpg.core.__GT_chat_BANG_ = (function rpg$core$__GT_chat_BANG_(var_args){
var args__43725__auto__ = [];
var len__43718__auto___53742 = arguments.length;
var i__43719__auto___53743 = (0);
while(true){
if((i__43719__auto___53743 < len__43718__auto___53742)){
args__43725__auto__.push((arguments[i__43719__auto___53743]));

var G__53744 = (i__43719__auto___53743 + (1));
i__43719__auto___53743 = G__53744;
continue;
} else {
}
break;
}

var argseq__43726__auto__ = ((((1) < args__43725__auto__.length))?(new cljs.core.IndexedSeq(args__43725__auto__.slice((1)),(0),null)):null);
return rpg.core.__GT_chat_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43726__auto__);
});

rpg.core.__GT_chat_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"rpg.core","/tmp/form-init4353864407834428586.clj",66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null,1072079033);

(rpg.core.chat_output["value"] = [cljs.core.str("\u2022 "),cljs.core.str(rpg.core.chat_output.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (rpg.core.chat_output["scrollTop"] = rpg.core.chat_output.scrollHeight);
});

rpg.core.__GT_chat_BANG_.cljs$lang$maxFixedArity = (1);

rpg.core.__GT_chat_BANG_.cljs$lang$applyTo = (function (seq53740){
var G__53741 = cljs.core.first.call(null,seq53740);
var seq53740__$1 = cljs.core.next.call(null,seq53740);
return rpg.core.__GT_chat_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53741,seq53740__$1);
});

rpg.core.online_players = reagent.core.atom.call(null,null);
if(typeof rpg.core._event_msg_handler !== 'undefined'){
} else {
rpg.core._event_msg_handler = (function (){var method_table__43568__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__43569__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__43570__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__43571__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__43572__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rpg.core","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__43572__auto__,method_table__43568__auto__,prefer_table__43569__auto__,method_cache__43570__auto__,cached_hierarchy__43571__auto__));
})();
}
rpg.core.event_msg_handler = (function rpg$core$event_msg_handler(p__53745){
var map__53748 = p__53745;
var map__53748__$1 = ((((!((map__53748 == null)))?((((map__53748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53748):map__53748);
var ev_msg = map__53748__$1;
var id = cljs.core.get.call(null,map__53748__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__53748__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__53748__$1,new cljs.core.Keyword(null,"event","event",301435442));
return rpg.core._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,rpg.core._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__53750){
var map__53751 = p__53750;
var map__53751__$1 = ((((!((map__53751 == null)))?((((map__53751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53751):map__53751);
var ev_msg = map__53751__$1;
var event = cljs.core.get.call(null,map__53751__$1,new cljs.core.Keyword(null,"event","event",301435442));
return rpg.core.__GT_output_BANG_.call(null,"Unhandled event on client: %s",event);
}));
cljs.core._add_method.call(null,rpg.core._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__53753){
var map__53754 = p__53753;
var map__53754__$1 = ((((!((map__53754 == null)))?((((map__53754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53754):map__53754);
var ev_msg = map__53754__$1;
var _QMARK_data = cljs.core.get.call(null,map__53754__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__53756 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e53759){if((e53759 instanceof Error)){
var e = e53759;
return e;
} else {
throw e53759;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"rpg.core",86,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__53756,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__53756,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
return rpg.core.__GT_output_BANG_.call(null,"Channel socket successfully established!: %s",new_state_map);
} else {
return rpg.core.__GT_output_BANG_.call(null,"Channel socket state change: %s",new_state_map);
}
}));
cljs.core._add_method.call(null,rpg.core._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__53760){
var map__53761 = p__53760;
var map__53761__$1 = ((((!((map__53761 == null)))?((((map__53761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53761):map__53761);
var ev_msg = map__53761__$1;
var _QMARK_data = cljs.core.get.call(null,map__53761__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
try{if((cljs.core.vector_QMARK_.call(null,_QMARK_data)) && ((cljs.core.count.call(null,_QMARK_data) === 2))){
try{var _QMARK_data_0__53764 = cljs.core.nth.call(null,_QMARK_data,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,_QMARK_data_0__53764,new cljs.core.Keyword("chat","push-back","chat/push-back",59495483))){
var new_message = cljs.core.nth.call(null,_QMARK_data,(1));
return rpg.core.__GT_chat_BANG_.call(null,"%s",new_message);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53767){if((e53767 instanceof Error)){
var e__46313__auto__ = e53767;
if((e__46313__auto__ === cljs.core.match.backtrack)){
try{var _QMARK_data_0__53764 = cljs.core.nth.call(null,_QMARK_data,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,_QMARK_data_0__53764,new cljs.core.Keyword("server","uids","server/uids",2053382091))){
var uids = cljs.core.nth.call(null,_QMARK_data,(1));
return cljs.core.reset_BANG_.call(null,rpg.core.online_players,uids);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53768){if((e53768 instanceof Error)){
var e__46313__auto____$1 = e53768;
if((e__46313__auto____$1 === cljs.core.match.backtrack)){
try{var _QMARK_data_0__53764 = cljs.core.nth.call(null,_QMARK_data,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,_QMARK_data_0__53764,new cljs.core.Keyword("server","login-failed","server/login-failed",2145515267))){
var a = cljs.core.nth.call(null,_QMARK_data,(1));
return window.alert("Rossz jelsz\u00F3.");
} else {
throw cljs.core.match.backtrack;

}
}catch (e53769){if((e53769 instanceof Error)){
var e__46313__auto____$2 = e53769;
if((e__46313__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46313__auto____$2;
}
} else {
throw e53769;

}
}} else {
throw e__46313__auto____$1;
}
} else {
throw e53768;

}
}} else {
throw e__46313__auto__;
}
} else {
throw e53767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53766){if((e53766 instanceof Error)){
var e__46313__auto__ = e53766;
if((e__46313__auto__ === cljs.core.match.backtrack)){
return rpg.core.__GT_output_BANG_.call(null,"Unhandled push event from server: %s",_QMARK_data);
} else {
throw e__46313__auto__;
}
} else {
throw e53766;

}
}}));
cljs.core._add_method.call(null,rpg.core._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__53770){
var map__53771 = p__53770;
var map__53771__$1 = ((((!((map__53771 == null)))?((((map__53771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53771):map__53771);
var ev_msg = map__53771__$1;
var _QMARK_data = cljs.core.get.call(null,map__53771__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__53773 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__53773,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__53773,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__53773,(2),null);
return rpg.core.__GT_output_BANG_.call(null,"Handshake: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,rpg.core._event_msg_handler,new cljs.core.Keyword("chat","all-messages","chat/all-messages",1338531169),(function (p__53776){
var map__53777 = p__53776;
var map__53777__$1 = ((((!((map__53777 == null)))?((((map__53777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53777):map__53777);
var ev_msg = map__53777__$1;
var _QMARK_data = cljs.core.get.call(null,map__53777__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return rpg.core.__GT_chat_BANG_.call(null,"%s",_QMARK_data);
}));
if(typeof rpg.core.router_ !== 'undefined'){
} else {
rpg.core.router_ = reagent.core.atom.call(null,null);
}
rpg.core.stop_router_BANG_ = (function rpg$core$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,rpg.core.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
rpg.core.start_router_BANG_ = (function rpg$core$start_router_BANG_(){
return rpg.core.stop_router_BANG_.call(null);
});
rpg.core.send_chat_message = (function rpg$core$send_chat_message(ev){
var message = rpg.core.getValueById.call(null,"chat-input");
rpg.core.__GT_output_BANG_.call(null,"A chat message sent to the server.");

rpg.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chat","new-message","chat/new-message",1598870149),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),message,new cljs.core.Keyword(null,"date","date",-1463434462),window.Date()], null)], null));

return rpg.core.changeValueById.call(null,"chat-input","");
});
rpg.core.on_key_press.call(null,"chat-input",(function (ev){
if(cljs.core._EQ_.call(null,(13),ev.charCode)){
return rpg.core.send_chat_message.call(null,ev);
} else {
return null;
}
}));
rpg.core.on_click.call(null,"chat-button",(function (ev){
return rpg.core.send_chat_message.call(null,ev);
}));
rpg.core.on_click.call(null,"btn1",(function (ev){
rpg.core.__GT_output_BANG_.call(null,"Button 1 was clicked (won't receive any reply)");

return rpg.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button1","example/button1",-349884645),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"nope"], null)], null));
}));
rpg.core.on_click.call(null,"btn2",(function (ev){
rpg.core.__GT_output_BANG_.call(null,"Button 2 was clicked (will receive reply)");

return rpg.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button2","example/button2",-675598425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"indeed"], null)], null),(5000),(function (cb_reply){
return rpg.core.__GT_output_BANG_.call(null,"Callback reply: %s",cb_reply);
}));
}));
rpg.core.on_click.call(null,"btn3",(function (ev){
rpg.core.__GT_output_BANG_.call(null,"Button 3 was clicked\n                  (will ask server to test rapid async push)");

return rpg.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","test-rapid-push","example/test-rapid-push",-93412097)], null));
}));
rpg.core.on_click.call(null,"btn4",(function (ev){
rpg.core.__GT_output_BANG_.call(null,"Button 4 was clicked\n                  (will toggle async broadcast loop)");

return rpg.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","toggle-broadcast","example/toggle-broadcast",-1640005413)], null),(5000),(function (cb_reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,cb_reply))){
var loop_enabled_QMARK_ = cb_reply;
if(cljs.core.truth_(loop_enabled_QMARK_)){
return rpg.core.__GT_output_BANG_.call(null,"Async broadcast loop now enabled");
} else {
return rpg.core.__GT_output_BANG_.call(null,"Async broadcast loop now disabled");
}
} else {
return null;
}
}));
}));
rpg.core.on_click.call(null,"btn5",(function (ev){
rpg.core.__GT_output_BANG_.call(null,"Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_.call(null,rpg.core.chsk);
}));
rpg.core.on_click.call(null,"btn6",(function (ev){
rpg.core.__GT_output_BANG_.call(null,"Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_.call(null,rpg.core.chsk);
}));
rpg.core.on_click.call(null,"btn-login",(function (ev){
var user_id = rpg.core.getValueById.call(null,"login-uid");
var user_pass = rpg.core.getValueById.call(null,"login-password");
if(clojure.string.blank_QMARK_.call(null,user_id)){
return alert("Please enter a user-id first");
} else {
rpg.core.__GT_output_BANG_.call(null,"Logging in with user-id %s",user_id);

return taoensso.sente.ajax_lite.call(null,"/auth",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg.core.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(user_id)].join(''),new cljs.core.Keyword(null,"user-pass","user-pass",-2030892208),[cljs.core.str(user_pass)].join('')], null)], null),((function (user_id,user_pass){
return (function (ajax_resp){
rpg.core.__GT_output_BANG_.call(null,"Ajax login response: %s",ajax_resp);

var login_successful_QMARK_ = true;
if(!(login_successful_QMARK_)){
return rpg.core.__GT_output_BANG_.call(null,"Login failed");
} else {
rpg.core.__GT_output_BANG_.call(null,"Login successful");

return taoensso.sente.chsk_reconnect_BANG_.call(null,rpg.core.chsk);
}
});})(user_id,user_pass))
);
}
}));
rpg.core.data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ajax.core.GET.call(null,"/edn/basics.edn",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__53779_SHARP_){
return cljs.core.reset_BANG_.call(null,rpg.core.data,cljs.reader.read_string.call(null,p1__53779_SHARP_));
})], null));
rpg.core.profile = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"theory","theory",-602870044),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"personality","personality",1044414103),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"profs","profs",1302636378)],["",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),"Neved?",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),cljs.core.PersistentArrayMap.EMPTY,"","",cljs.core.PersistentArrayMap.EMPTY]));
rpg.core.character_sheet = (function rpg$core$character_sheet(actual,skills,professions){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sheet","div.sheet",1036098818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(new cljs.core.Keyword(null,"personality","personality",1044414103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual))),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual)))].join('')], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual)),""))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actual))),cljs.core.str(" sz\u00E1rmaz\u00E1s)")].join('')], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"K\u00E9pess\u00E9gek:"], null),rpg.tools.container.call(null,actual,"skills",skills),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Cuccok:"], null),rpg.tools.container.call(null,actual,"inventory"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Tulajdon:"], null),rpg.tools.container.call(null,actual,"property"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Tehets\u00E9g:"], null),rpg.tools.container.call(null,actual,"profs",professions)], null);
});
rpg.core.home_page = (function rpg$core$home_page(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to RPG"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/new"], null),"Regisztr\u00E1ci\u00F3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/info"], null),"Szab\u00E1lyk\u00F6nyv"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/market"], null),"Piac"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/world"], null),"Vil\u00E1g"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Bel\u00E9p\u00E9s:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/w0"], null),"Szerver 0 "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/who-is-online"], null),[cljs.core.str("("),cljs.core.str(cljs.core.count.call(null,cljs.core.deref.call(null,rpg.core.online_players))),cljs.core.str("/50 j\u00E1t\u00E9kos)")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (p1__53780_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),p1__53780_SHARP_], null);
}),cljs.core.deref.call(null,rpg.core.online_players))], null)], null);
});
rpg.core.info_page = (function rpg$core$info_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Vissza"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.skills.container","div.skills.container",952188817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"K\u00E9pess\u00E9gek"], null),cljs.core.map_indexed.call(null,(function (key,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.skill","div.skill",1253973315),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}),new cljs.core.Keyword(null,"skill","skill",155065636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg.core.data)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.professions.container","div.professions.container",1141172102),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Szak\u00E9rtelmek"], null),cljs.core.map_indexed.call(null,(function (key,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profession","div.profession",886423531),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}),new cljs.core.Keyword(null,"profession","profession",1614227160).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg.core.data)))], null)], null);
});
rpg.core.market_card = (function rpg$core$market_card(style){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details.card","details.card",-31809493),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("property "),cljs.core.str(style)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.eyebrow","span.eyebrow",-981173236),"Django Freeman"], null),"Elad\u00F3 cuccai"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"7 Nyersanyag, 2 Fegyver, 1 \u00C9rt\u00E9kt\u00E1rgy"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hotel","li.hotel",-215641566),"A hatalom szerencs\u00E9s ac\u00E9l\u00F6kle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hotel","li.hotel",-215641566),"Filoz\u00F3fia k\u00F6nyv (nyersanyag)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"3 aranyp\u00E9nz 50 ez\u00FCstp\u00E9nz"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Megv\u00E1s\u00E1rolom"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.disclaimer","p.disclaimer",1883195176),"A t\u00E1rgyak list\u00E1j\u00E1t az elad\u00F3 nem tette nyilv\u00E1noss\u00E1",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Becs\u00FClt \u00F6ssz\u00E9rt\u00E9k\u00FCk: 472 ez\u00FCstp\u00E9nz"], null)], null);
});
rpg.core.market = (function rpg$core$market(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.market","div.market",3842378),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Vissza"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table","div.table",-33744051),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),rpg.core.market_card.call(null,"lightblue"),rpg.core.market_card.call(null,"lightblue"),rpg.core.market_card.call(null,"lightblue")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),rpg.core.market_card.call(null,"yellow"),rpg.core.market_card.call(null,"yellow")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),rpg.core.market_card.call(null,"darkblue"),rpg.core.market_card.call(null,"darkblue"),rpg.core.market_card.call(null,"darkblue"),rpg.core.market_card.call(null,"darkblue")], null)], null)], null);
});
rpg.core.current_page = (function rpg$core$current_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null),rpg.core.character_sheet.call(null,rpg.core.profile,new cljs.core.Keyword(null,"skill","skill",155065636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg.core.data)),new cljs.core.Keyword(null,"professions","professions",-2123201564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg.core.data)))], null);
});
rpg.core.registration = (function rpg$core$registration(){
return rpg.registration.create_character.call(null,rpg.core.profile,rpg.core.data);
});
rpg.core.game = (function rpg$core$game(){
return rpg.world.gametable.call(null,rpg.core.data,rpg.core.profile,rpg.core.character_sheet);
});
var action__45802__auto___53786 = (function (params__45803__auto__){
if(cljs.core.map_QMARK_.call(null,params__45803__auto__)){
var map__53781 = params__45803__auto__;
var map__53781__$1 = ((((!((map__53781 == null)))?((((map__53781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53781):map__53781);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.home_page;},new cljs.core.Symbol("rpg.core","home-page","rpg.core/home-page",618121965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",16,1,243,243,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.home_page)?rpg.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__45803__auto__)){
var vec__53783 = params__45803__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.home_page;},new cljs.core.Symbol("rpg.core","home-page","rpg.core/home-page",618121965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",16,1,243,243,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.home_page)?rpg.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__45802__auto___53786);

var action__45802__auto___53792 = (function (params__45803__auto__){
if(cljs.core.map_QMARK_.call(null,params__45803__auto__)){
var map__53787 = params__45803__auto__;
var map__53787__$1 = ((((!((map__53787 == null)))?((((map__53787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53787):map__53787);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.registration;},new cljs.core.Symbol("rpg.core","registration","rpg.core/registration",-1953434810,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"registration","registration",-1575290174,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",19,1,321,321,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.registration)?rpg.core.registration.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__45803__auto__)){
var vec__53789 = params__45803__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.registration;},new cljs.core.Symbol("rpg.core","registration","rpg.core/registration",-1953434810,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"registration","registration",-1575290174,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",19,1,321,321,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.registration)?rpg.core.registration.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__45802__auto___53792);

var action__45802__auto___53798 = (function (params__45803__auto__){
if(cljs.core.map_QMARK_.call(null,params__45803__auto__)){
var map__53793 = params__45803__auto__;
var map__53793__$1 = ((((!((map__53793 == null)))?((((map__53793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53793):map__53793);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.market;},new cljs.core.Symbol("rpg.core","market","rpg.core/market",625773124,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"market","market",215397056,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",13,1,292,292,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.market)?rpg.core.market.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__45803__auto__)){
var vec__53795 = params__45803__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.market;},new cljs.core.Symbol("rpg.core","market","rpg.core/market",625773124,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"market","market",215397056,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",13,1,292,292,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.market)?rpg.core.market.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/market",action__45802__auto___53798);

var action__45802__auto___53804 = (function (params__45803__auto__){
if(cljs.core.map_QMARK_.call(null,params__45803__auto__)){
var map__53799 = params__45803__auto__;
var map__53799__$1 = ((((!((map__53799 == null)))?((((map__53799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53799):map__53799);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.info_page;},new cljs.core.Symbol("rpg.core","info-page","rpg.core/info-page",-773251644,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"info-page","info-page",-9497280,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",16,1,259,259,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.info_page)?rpg.core.info_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__45803__auto__)){
var vec__53801 = params__45803__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.info_page;},new cljs.core.Symbol("rpg.core","info-page","rpg.core/info-page",-773251644,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"info-page","info-page",-9497280,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",16,1,259,259,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.info_page)?rpg.core.info_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/info",action__45802__auto___53804);

var action__45802__auto___53810 = (function (params__45803__auto__){
if(cljs.core.map_QMARK_.call(null,params__45803__auto__)){
var map__53805 = params__45803__auto__;
var map__53805__$1 = ((((!((map__53805 == null)))?((((map__53805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53805):map__53805);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.game;},new cljs.core.Symbol("rpg.core","game","rpg.core/game",1844280906,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"game","game",1199007694,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",11,1,322,322,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.game)?rpg.core.game.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__45803__auto__)){
var vec__53807 = params__45803__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return rpg.core.game;},new cljs.core.Symbol("rpg.core","game","rpg.core/game",1844280906,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg.core","rpg.core",-792305350,null),new cljs.core.Symbol(null,"game","game",1199007694,null),"/home/masik/ENVIRONMENT/BitBucket/table-dice/src/cljs/rpg/core.cljs",11,1,322,322,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rpg.core.game)?rpg.core.game.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/world",action__45802__auto___53810);

rpg.core.mount_root = (function rpg$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.core.current_page], null),rpg.core.getElementById.call(null,"app"));
});
rpg.core.init_BANG_ = (function rpg$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

rpg.core.mount_root.call(null);

return rpg.core.start_router_BANG_.call(null);
});

//# sourceMappingURL=core.js.map