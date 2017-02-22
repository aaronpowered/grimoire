// Compiled by ClojureScript 1.7.228 {}
goog.provide('multiplayer.core');
goog.require('cljs.core');
goog.require('infinitelives.pixi.texture');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('cljs_time.local');
goog.require('goog.history.EventType');
goog.require('infinitelives.pixi.resources');
goog.require('reagent.session');
goog.require('chord.format.fressian');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('infinitelives.utils.events');
goog.require('goog.History');
goog.require('cljs_time.coerce');
goog.require('infinitelives.pixi.canvas');
goog.require('infinitelives.pixi.events');
goog.require('infinitelives.pixi.sprite');
if(typeof multiplayer.core.canvas !== 'undefined'){
} else {
multiplayer.core.canvas = infinitelives.pixi.canvas.init.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"expand","expand",595248157),true,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"background","background",-863952629),(3158064)], null));
}
if(typeof multiplayer.core.game_state !== 'undefined'){
} else {
multiplayer.core.game_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null));
}
multiplayer.core.network_update_frames = (20);
multiplayer.core.compress = (function multiplayer$core$compress(state){
return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__39730_SHARP_){
return p1__39730_SHARP_.toFixed((2));
})),new cljs.core.Keyword(null,"reflection","reflection",-1984073923));
});
/**
 * receive the nework `message` use it to update the `state` and
 *   return the next state
 */
multiplayer.core.receive_message = (function multiplayer$core$receive_message(state,message,rec_num){
var map__39736 = message;
var map__39736__$1 = ((((!((map__39736 == null)))?((((map__39736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39736):map__39736);
var vec__39737 = cljs.core.get.call(null,map__39736__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var comm = cljs.core.nth.call(null,vec__39737,(0),null);
var map__39738 = cljs.core.nth.call(null,vec__39737,(1),null);
var map__39738__$1 = ((((!((map__39738 == null)))?((((map__39738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39738):map__39738);
var reflection_angle = cljs.core.get.call(null,map__39738__$1,new cljs.core.Keyword(null,"reflection-angle","reflection-angle",-618264580));
var f_ang = (cljs.core.truth_(reflection_angle)?parseFloat(reflection_angle):null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"old","old",-1825222690),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),f_ang);
});
multiplayer.core.receiver = (function multiplayer$core$receiver(ch){
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_39774){
var state_val_39775 = (state_39774[(1)]);
if((state_val_39775 === (1))){
var inst_39764 = (0);
var state_39774__$1 = (function (){var statearr_39776 = state_39774;
(statearr_39776[(7)] = inst_39764);

return statearr_39776;
})();
var statearr_39777_39787 = state_39774__$1;
(statearr_39777_39787[(2)] = null);

(statearr_39777_39787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39775 === (2))){
var state_39774__$1 = state_39774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39774__$1,(4),ch);
} else {
if((state_val_39775 === (3))){
var inst_39772 = (state_39774[(2)]);
var state_39774__$1 = state_39774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39774__$1,inst_39772);
} else {
if((state_val_39775 === (4))){
var inst_39764 = (state_39774[(7)]);
var inst_39767 = (state_39774[(2)]);
var inst_39768 = cljs.core.swap_BANG_.call(null,multiplayer.core.game_state,multiplayer.core.receive_message,inst_39767,inst_39764);
var inst_39769 = (inst_39764 + (1));
var inst_39764__$1 = inst_39769;
var state_39774__$1 = (function (){var statearr_39778 = state_39774;
(statearr_39778[(7)] = inst_39764__$1);

(statearr_39778[(8)] = inst_39768);

return statearr_39778;
})();
var statearr_39779_39788 = state_39774__$1;
(statearr_39779_39788[(2)] = null);

(statearr_39779_39788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var multiplayer$core$receiver_$_state_machine__29945__auto__ = null;
var multiplayer$core$receiver_$_state_machine__29945__auto____0 = (function (){
var statearr_39783 = [null,null,null,null,null,null,null,null,null];
(statearr_39783[(0)] = multiplayer$core$receiver_$_state_machine__29945__auto__);

(statearr_39783[(1)] = (1));

return statearr_39783;
});
var multiplayer$core$receiver_$_state_machine__29945__auto____1 = (function (state_39774){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_39774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e39784){if((e39784 instanceof Object)){
var ex__29948__auto__ = e39784;
var statearr_39785_39789 = state_39774;
(statearr_39785_39789[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39790 = state_39774;
state_39774 = G__39790;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
multiplayer$core$receiver_$_state_machine__29945__auto__ = function(state_39774){
switch(arguments.length){
case 0:
return multiplayer$core$receiver_$_state_machine__29945__auto____0.call(this);
case 1:
return multiplayer$core$receiver_$_state_machine__29945__auto____1.call(this,state_39774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multiplayer$core$receiver_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = multiplayer$core$receiver_$_state_machine__29945__auto____0;
multiplayer$core$receiver_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = multiplayer$core$receiver_$_state_machine__29945__auto____1;
return multiplayer$core$receiver_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_39786 = f__30057__auto__.call(null);
(statearr_39786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_39786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
});
multiplayer.core.reporter_game_state = (function multiplayer$core$reporter_game_state(){
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_39958){
var state_val_39959 = (state_39958[(1)]);
if((state_val_39959 === (7))){
var state_39958__$1 = state_39958;
var statearr_39960_39995 = state_39958__$1;
(statearr_39960_39995[(2)] = false);

(statearr_39960_39995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (20))){
var inst_39944 = (state_39958[(2)]);
var inst_39945 = infinitelives.pixi.events.next_frame.call(null);
var state_39958__$1 = (function (){var statearr_39961 = state_39958;
(statearr_39961[(7)] = inst_39944);

return statearr_39961;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39958__$1,(22),inst_39945);
} else {
if((state_val_39959 === (1))){
var inst_39894 = [new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_39895 = [new cljs.core.Keyword(null,"transit-json","transit-json",1168016579)];
var inst_39896 = cljs.core.PersistentHashMap.fromArrays(inst_39894,inst_39895);
var inst_39897 = chord.client.ws_ch.call(null,"ws://localhost:3000/ws",inst_39896);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39958__$1,(2),inst_39897);
} else {
if((state_val_39959 === (4))){
var state_39958__$1 = state_39958;
var statearr_39962_39996 = state_39958__$1;
(statearr_39962_39996[(2)] = false);

(statearr_39962_39996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (15))){
var inst_39929 = (state_39958[(2)]);
var inst_39930 = (0);
var state_39958__$1 = (function (){var statearr_39963 = state_39958;
(statearr_39963[(8)] = inst_39930);

(statearr_39963[(9)] = inst_39929);

return statearr_39963;
})();
var statearr_39964_39997 = state_39958__$1;
(statearr_39964_39997[(2)] = null);

(statearr_39964_39997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (21))){
var inst_39941 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39965_39998 = state_39958__$1;
(statearr_39965_39998[(2)] = inst_39941);

(statearr_39965_39998[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (13))){
var inst_39921 = (state_39958[(10)]);
var inst_39953 = cljs.core.pr_str.call(null,inst_39921);
var inst_39954 = console.log("Error:",inst_39953);
var state_39958__$1 = state_39958;
var statearr_39966_39999 = state_39958__$1;
(statearr_39966_39999[(2)] = inst_39954);

(statearr_39966_39999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (22))){
var inst_39930 = (state_39958[(8)]);
var inst_39947 = (state_39958[(2)]);
var inst_39948 = (inst_39930 + (1));
var inst_39930__$1 = inst_39948;
var state_39958__$1 = (function (){var statearr_39967 = state_39958;
(statearr_39967[(8)] = inst_39930__$1);

(statearr_39967[(11)] = inst_39947);

return statearr_39967;
})();
var statearr_39968_40000 = state_39958__$1;
(statearr_39968_40000[(2)] = null);

(statearr_39968_40000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (6))){
var state_39958__$1 = state_39958;
var statearr_39969_40001 = state_39958__$1;
(statearr_39969_40001[(2)] = true);

(statearr_39969_40001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (17))){
var inst_39951 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39970_40002 = state_39958__$1;
(statearr_39970_40002[(2)] = inst_39951);

(statearr_39970_40002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (3))){
var inst_39899 = (state_39958[(12)]);
var inst_39904 = inst_39899.cljs$lang$protocol_mask$partition0$;
var inst_39905 = (inst_39904 & (64));
var inst_39906 = inst_39899.cljs$core$ISeq$;
var inst_39907 = (inst_39905) || (inst_39906);
var state_39958__$1 = state_39958;
if(cljs.core.truth_(inst_39907)){
var statearr_39971_40003 = state_39958__$1;
(statearr_39971_40003[(1)] = (6));

} else {
var statearr_39972_40004 = state_39958__$1;
(statearr_39972_40004[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (12))){
var inst_39920 = (state_39958[(13)]);
var inst_39924 = multiplayer.core.receiver.call(null,inst_39920);
var inst_39925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39926 = [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"test","test",577538877)];
var inst_39927 = (new cljs.core.PersistentVector(null,2,(5),inst_39925,inst_39926,null));
var state_39958__$1 = (function (){var statearr_39973 = state_39958;
(statearr_39973[(14)] = inst_39924);

return statearr_39973;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39958__$1,(15),inst_39920,inst_39927);
} else {
if((state_val_39959 === (2))){
var inst_39899 = (state_39958[(12)]);
var inst_39899__$1 = (state_39958[(2)]);
var inst_39901 = (inst_39899__$1 == null);
var inst_39902 = cljs.core.not.call(null,inst_39901);
var state_39958__$1 = (function (){var statearr_39974 = state_39958;
(statearr_39974[(12)] = inst_39899__$1);

return statearr_39974;
})();
if(inst_39902){
var statearr_39975_40005 = state_39958__$1;
(statearr_39975_40005[(1)] = (3));

} else {
var statearr_39976_40006 = state_39958__$1;
(statearr_39976_40006[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (19))){
var state_39958__$1 = state_39958;
var statearr_39977_40007 = state_39958__$1;
(statearr_39977_40007[(2)] = null);

(statearr_39977_40007[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (11))){
var inst_39921 = (state_39958[(10)]);
var inst_39919 = (state_39958[(2)]);
var inst_39920 = cljs.core.get.call(null,inst_39919,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_39921__$1 = cljs.core.get.call(null,inst_39919,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_39922 = cljs.core.not.call(null,inst_39921__$1);
var state_39958__$1 = (function (){var statearr_39978 = state_39958;
(statearr_39978[(13)] = inst_39920);

(statearr_39978[(10)] = inst_39921__$1);

return statearr_39978;
})();
if(inst_39922){
var statearr_39979_40008 = state_39958__$1;
(statearr_39979_40008[(1)] = (12));

} else {
var statearr_39980_40009 = state_39958__$1;
(statearr_39980_40009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (9))){
var inst_39899 = (state_39958[(12)]);
var inst_39916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39899);
var state_39958__$1 = state_39958;
var statearr_39981_40010 = state_39958__$1;
(statearr_39981_40010[(2)] = inst_39916);

(statearr_39981_40010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (5))){
var inst_39914 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
if(cljs.core.truth_(inst_39914)){
var statearr_39982_40011 = state_39958__$1;
(statearr_39982_40011[(1)] = (9));

} else {
var statearr_39983_40012 = state_39958__$1;
(statearr_39983_40012[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (14))){
var inst_39956 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39958__$1,inst_39956);
} else {
if((state_val_39959 === (16))){
var inst_39930 = (state_39958[(8)]);
var inst_39932 = cljs.core.mod.call(null,inst_39930,multiplayer.core.network_update_frames);
var inst_39933 = (inst_39932 === (0));
var state_39958__$1 = state_39958;
if(cljs.core.truth_(inst_39933)){
var statearr_39984_40013 = state_39958__$1;
(statearr_39984_40013[(1)] = (18));

} else {
var statearr_39985_40014 = state_39958__$1;
(statearr_39985_40014[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (10))){
var inst_39899 = (state_39958[(12)]);
var state_39958__$1 = state_39958;
var statearr_39986_40015 = state_39958__$1;
(statearr_39986_40015[(2)] = inst_39899);

(statearr_39986_40015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (18))){
var inst_39920 = (state_39958[(13)]);
var inst_39935 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39936 = cljs.core.deref.call(null,multiplayer.core.game_state);
var inst_39937 = multiplayer.core.compress.call(null,inst_39936);
var inst_39938 = [new cljs.core.Keyword(null,"state","state",-1988618099),inst_39937];
var inst_39939 = (new cljs.core.PersistentVector(null,2,(5),inst_39935,inst_39938,null));
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39958__$1,(21),inst_39920,inst_39939);
} else {
if((state_val_39959 === (8))){
var inst_39911 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39987_40016 = state_39958__$1;
(statearr_39987_40016[(2)] = inst_39911);

(statearr_39987_40016[(1)] = (5));


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
}
}
}
}
}
}
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var multiplayer$core$reporter_game_state_$_state_machine__29945__auto__ = null;
var multiplayer$core$reporter_game_state_$_state_machine__29945__auto____0 = (function (){
var statearr_39991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39991[(0)] = multiplayer$core$reporter_game_state_$_state_machine__29945__auto__);

(statearr_39991[(1)] = (1));

return statearr_39991;
});
var multiplayer$core$reporter_game_state_$_state_machine__29945__auto____1 = (function (state_39958){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_39958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e39992){if((e39992 instanceof Object)){
var ex__29948__auto__ = e39992;
var statearr_39993_40017 = state_39958;
(statearr_39993_40017[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40018 = state_39958;
state_39958 = G__40018;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
multiplayer$core$reporter_game_state_$_state_machine__29945__auto__ = function(state_39958){
switch(arguments.length){
case 0:
return multiplayer$core$reporter_game_state_$_state_machine__29945__auto____0.call(this);
case 1:
return multiplayer$core$reporter_game_state_$_state_machine__29945__auto____1.call(this,state_39958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multiplayer$core$reporter_game_state_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = multiplayer$core$reporter_game_state_$_state_machine__29945__auto____0;
multiplayer$core$reporter_game_state_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = multiplayer$core$reporter_game_state_$_state_machine__29945__auto____1;
return multiplayer$core$reporter_game_state_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_39994 = f__30057__auto__.call(null);
(statearr_39994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_39994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
});
multiplayer.core.assets = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ship-blue","ship-blue",1191428749),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(32)], null)], null),new cljs.core.Keyword(null,"ship-green","ship-green",1195221560),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(32)], null)], null),new cljs.core.Keyword(null,"ship-violet","ship-violet",1516769340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(32)], null)], null),new cljs.core.Keyword(null,"ship-yellow","ship-yellow",93850181),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(96),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(32)], null)], null)], null);
multiplayer.core.left_QMARK_ = (function multiplayer$core$left_QMARK_(){
return infinitelives.utils.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
});
multiplayer.core.right_QMARK_ = (function multiplayer$core$right_QMARK_(){
return infinitelives.utils.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
});
if(typeof multiplayer.core.main_thread !== 'undefined'){
} else {
multiplayer.core.main_thread = (function (){var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_40117){
var state_val_40118 = (state_40117[(1)]);
if((state_val_40118 === (7))){
var inst_40056 = (state_40117[(2)]);
var state_40117__$1 = state_40117;
if(cljs.core.truth_(inst_40056)){
var statearr_40119_40164 = state_40117__$1;
(statearr_40119_40164[(1)] = (8));

} else {
var statearr_40120_40165 = state_40117__$1;
(statearr_40120_40165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (20))){
var inst_40083 = (state_40117[(2)]);
var state_40117__$1 = state_40117;
var statearr_40121_40166 = state_40117__$1;
(statearr_40121_40166[(2)] = inst_40083);

(statearr_40121_40166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (1))){
var inst_40019 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40020 = ["img/spritesheet.png"];
var inst_40021 = (new cljs.core.PersistentVector(null,1,(5),inst_40019,inst_40020,null));
var inst_40022 = infinitelives.pixi.resources.load_resources.call(null,multiplayer.core.canvas,new cljs.core.Keyword(null,"bg","bg",-206688421),inst_40021);
var state_40117__$1 = state_40117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40117__$1,(2),inst_40022);
} else {
if((state_val_40118 === (24))){
var inst_40099 = cljs.core.deref.call(null,multiplayer.core.game_state);
var inst_40100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40101 = [new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"angle","angle",1622094254)];
var inst_40102 = (new cljs.core.PersistentVector(null,3,(5),inst_40100,inst_40101,null));
var inst_40103 = cljs.core.get_in.call(null,inst_40099,inst_40102);
var state_40117__$1 = state_40117;
var statearr_40122_40167 = state_40117__$1;
(statearr_40122_40167[(2)] = inst_40103);

(statearr_40122_40167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (4))){
var inst_40032 = (state_40117[(7)]);
var inst_40028 = (state_40117[(8)]);
var inst_40109 = (state_40117[(2)]);
var inst_40110 = new cljs.core.Keyword(null,"layer","layer",-1601820589).cljs$core$IFn$_invoke$arity$1(multiplayer.core.canvas);
var inst_40111 = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(inst_40110);
var inst_40112 = inst_40111.removeChild(inst_40032);
var inst_40113 = new cljs.core.Keyword(null,"layer","layer",-1601820589).cljs$core$IFn$_invoke$arity$1(multiplayer.core.canvas);
var inst_40114 = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(inst_40113);
var inst_40115 = inst_40114.removeChild(inst_40028);
var state_40117__$1 = (function (){var statearr_40123 = state_40117;
(statearr_40123[(9)] = inst_40112);

(statearr_40123[(10)] = inst_40109);

return statearr_40123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40117__$1,inst_40115);
} else {
if((state_val_40118 === (15))){
var state_40117__$1 = state_40117;
var statearr_40124_40168 = state_40117__$1;
(statearr_40124_40168[(2)] = 0.05);

(statearr_40124_40168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (21))){
var inst_40090 = cljs.core.deref.call(null,multiplayer.core.game_state);
var inst_40091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40092 = [new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"old","old",-1825222690),new cljs.core.Keyword(null,"angle","angle",1622094254)];
var inst_40093 = (new cljs.core.PersistentVector(null,3,(5),inst_40091,inst_40092,null));
var inst_40094 = cljs.core.get_in.call(null,inst_40090,inst_40093);
var state_40117__$1 = state_40117;
var statearr_40125_40169 = state_40117__$1;
(statearr_40125_40169[(2)] = inst_40094);

(statearr_40125_40169[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (13))){
var inst_40077 = multiplayer.core.right_QMARK_.call(null);
var state_40117__$1 = state_40117;
if(cljs.core.truth_(inst_40077)){
var statearr_40126_40170 = state_40117__$1;
(statearr_40126_40170[(1)] = (15));

} else {
var statearr_40127_40171 = state_40117__$1;
(statearr_40127_40171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (22))){
var inst_40048 = (state_40117[(11)]);
var state_40117__$1 = state_40117;
var statearr_40128_40172 = state_40117__$1;
(statearr_40128_40172[(2)] = inst_40048);

(statearr_40128_40172[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (6))){
var inst_40048 = (state_40117[(11)]);
var state_40117__$1 = state_40117;
var statearr_40129_40173 = state_40117__$1;
(statearr_40129_40173[(2)] = inst_40048);

(statearr_40129_40173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (25))){
var inst_40049 = (state_40117[(12)]);
var state_40117__$1 = state_40117;
var statearr_40130_40174 = state_40117__$1;
(statearr_40130_40174[(2)] = inst_40049);

(statearr_40130_40174[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (17))){
var inst_40085 = (state_40117[(2)]);
var state_40117__$1 = state_40117;
var statearr_40131_40175 = state_40117__$1;
(statearr_40131_40175[(2)] = inst_40085);

(statearr_40131_40175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (3))){
var inst_40048 = (state_40117[(11)]);
var inst_40047 = (state_40117[(13)]);
var inst_40028 = (state_40117[(8)]);
var inst_40051 = infinitelives.pixi.sprite.set_rotation_BANG_.call(null,inst_40028,inst_40047);
var inst_40052 = cljs.core.swap_BANG_.call(null,multiplayer.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"angle","angle",1622094254),inst_40047);
var state_40117__$1 = (function (){var statearr_40132 = state_40117;
(statearr_40132[(14)] = inst_40052);

(statearr_40132[(15)] = inst_40051);

return statearr_40132;
})();
if(cljs.core.truth_(inst_40048)){
var statearr_40133_40176 = state_40117__$1;
(statearr_40133_40176[(1)] = (5));

} else {
var statearr_40134_40177 = state_40117__$1;
(statearr_40134_40177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (12))){
var state_40117__$1 = state_40117;
var statearr_40135_40178 = state_40117__$1;
(statearr_40135_40178[(2)] = -0.05);

(statearr_40135_40178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (2))){
var inst_40032 = (state_40117[(7)]);
var inst_40028 = (state_40117[(8)]);
var inst_40024 = (state_40117[(2)]);
var inst_40025 = multiplayer.core.reporter_game_state.call(null);
var inst_40026 = infinitelives.pixi.resources.get_texture.call(null,new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"nearest","nearest",1176353890));
var inst_40027 = infinitelives.pixi.texture.load_sprite_sheet_BANG_.call(null,inst_40026,multiplayer.core.assets);
var inst_40028__$1 = infinitelives.pixi.sprite.make_sprite.call(null,new cljs.core.Keyword(null,"ship-yellow","ship-yellow",93850181),new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"x","x",2099068185),(-200));
var inst_40029 = new cljs.core.Keyword(null,"layer","layer",-1601820589).cljs$core$IFn$_invoke$arity$1(multiplayer.core.canvas);
var inst_40030 = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(inst_40029);
var inst_40031 = inst_40030.addChild(inst_40028__$1);
var inst_40032__$1 = infinitelives.pixi.sprite.make_sprite.call(null,new cljs.core.Keyword(null,"ship-blue","ship-blue",1191428749),new cljs.core.Keyword(null,"scale","scale",-230427353),(3),new cljs.core.Keyword(null,"x","x",2099068185),(200));
var inst_40033 = new cljs.core.Keyword(null,"layer","layer",-1601820589).cljs$core$IFn$_invoke$arity$1(multiplayer.core.canvas);
var inst_40034 = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(inst_40033);
var inst_40035 = inst_40034.addChild(inst_40032__$1);
var inst_40036 = cljs.core.deref.call(null,multiplayer.core.game_state);
var inst_40037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40038 = [new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"old","old",-1825222690),new cljs.core.Keyword(null,"angle","angle",1622094254)];
var inst_40039 = (new cljs.core.PersistentVector(null,3,(5),inst_40037,inst_40038,null));
var inst_40040 = cljs.core.get_in.call(null,inst_40036,inst_40039);
var inst_40041 = cljs.core.deref.call(null,multiplayer.core.game_state);
var inst_40042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40043 = [new cljs.core.Keyword(null,"reflection","reflection",-1984073923),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"angle","angle",1622094254)];
var inst_40044 = (new cljs.core.PersistentVector(null,3,(5),inst_40042,inst_40043,null));
var inst_40045 = cljs.core.get_in.call(null,inst_40041,inst_40044);
var inst_40046 = (0);
var inst_40047 = (0);
var inst_40048 = inst_40040;
var inst_40049 = inst_40045;
var state_40117__$1 = (function (){var statearr_40136 = state_40117;
(statearr_40136[(16)] = inst_40027);

(statearr_40136[(17)] = inst_40025);

(statearr_40136[(18)] = inst_40024);

(statearr_40136[(11)] = inst_40048);

(statearr_40136[(19)] = inst_40031);

(statearr_40136[(20)] = inst_40046);

(statearr_40136[(21)] = inst_40035);

(statearr_40136[(7)] = inst_40032__$1);

(statearr_40136[(12)] = inst_40049);

(statearr_40136[(13)] = inst_40047);

(statearr_40136[(8)] = inst_40028__$1);

return statearr_40136;
})();
var statearr_40137_40179 = state_40117__$1;
(statearr_40137_40179[(2)] = null);

(statearr_40137_40179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (23))){
var inst_40072 = (state_40117[(22)]);
var inst_40097 = (state_40117[(2)]);
var state_40117__$1 = (function (){var statearr_40138 = state_40117;
(statearr_40138[(23)] = inst_40097);

return statearr_40138;
})();
if(cljs.core.truth_(inst_40072)){
var statearr_40139_40180 = state_40117__$1;
(statearr_40139_40180[(1)] = (24));

} else {
var statearr_40140_40181 = state_40117__$1;
(statearr_40140_40181[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (19))){
var state_40117__$1 = state_40117;
var statearr_40141_40182 = state_40117__$1;
(statearr_40141_40182[(2)] = null);

(statearr_40141_40182[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (11))){
var inst_40046 = (state_40117[(20)]);
var inst_40070 = (state_40117[(2)]);
var inst_40071 = cljs.core.mod.call(null,inst_40046,multiplayer.core.network_update_frames);
var inst_40072 = (inst_40071 === (0));
var inst_40073 = (inst_40046 + (1));
var inst_40074 = multiplayer.core.left_QMARK_.call(null);
var state_40117__$1 = (function (){var statearr_40142 = state_40117;
(statearr_40142[(24)] = inst_40070);

(statearr_40142[(22)] = inst_40072);

(statearr_40142[(25)] = inst_40073);

return statearr_40142;
})();
if(cljs.core.truth_(inst_40074)){
var statearr_40143_40183 = state_40117__$1;
(statearr_40143_40183[(1)] = (12));

} else {
var statearr_40144_40184 = state_40117__$1;
(statearr_40144_40184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (9))){
var state_40117__$1 = state_40117;
var statearr_40145_40185 = state_40117__$1;
(statearr_40145_40185[(2)] = null);

(statearr_40145_40185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (5))){
var inst_40049 = (state_40117[(12)]);
var state_40117__$1 = state_40117;
var statearr_40146_40186 = state_40117__$1;
(statearr_40146_40186[(2)] = inst_40049);

(statearr_40146_40186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (14))){
var inst_40072 = (state_40117[(22)]);
var inst_40047 = (state_40117[(13)]);
var inst_40087 = (state_40117[(2)]);
var inst_40088 = (inst_40087 + inst_40047);
var state_40117__$1 = (function (){var statearr_40147 = state_40117;
(statearr_40147[(26)] = inst_40088);

return statearr_40147;
})();
if(cljs.core.truth_(inst_40072)){
var statearr_40148_40187 = state_40117__$1;
(statearr_40148_40187[(1)] = (21));

} else {
var statearr_40149_40188 = state_40117__$1;
(statearr_40149_40188[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (26))){
var inst_40097 = (state_40117[(23)]);
var inst_40073 = (state_40117[(25)]);
var inst_40088 = (state_40117[(26)]);
var inst_40106 = (state_40117[(2)]);
var inst_40046 = inst_40073;
var inst_40047 = inst_40088;
var inst_40048 = inst_40097;
var inst_40049 = inst_40106;
var state_40117__$1 = (function (){var statearr_40150 = state_40117;
(statearr_40150[(11)] = inst_40048);

(statearr_40150[(20)] = inst_40046);

(statearr_40150[(12)] = inst_40049);

(statearr_40150[(13)] = inst_40047);

return statearr_40150;
})();
var statearr_40151_40189 = state_40117__$1;
(statearr_40151_40189[(2)] = null);

(statearr_40151_40189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (16))){
var state_40117__$1 = state_40117;
var statearr_40152_40190 = state_40117__$1;
(statearr_40152_40190[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (10))){
var inst_40067 = (state_40117[(2)]);
var inst_40068 = infinitelives.pixi.events.next_frame.call(null);
var state_40117__$1 = (function (){var statearr_40154 = state_40117;
(statearr_40154[(27)] = inst_40067);

return statearr_40154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40117__$1,(11),inst_40068);
} else {
if((state_val_40118 === (18))){
var state_40117__$1 = state_40117;
var statearr_40155_40191 = state_40117__$1;
(statearr_40155_40191[(2)] = 0.0);

(statearr_40155_40191[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (8))){
var inst_40048 = (state_40117[(11)]);
var inst_40046 = (state_40117[(20)]);
var inst_40032 = (state_40117[(7)]);
var inst_40049 = (state_40117[(12)]);
var inst_40058 = (inst_40046 - (1));
var inst_40059 = cljs.core.mod.call(null,inst_40058,multiplayer.core.network_update_frames);
var inst_40060 = (inst_40049 - inst_40048);
var inst_40061 = (inst_40060 / multiplayer.core.network_update_frames);
var inst_40062 = (inst_40061 * inst_40059);
var inst_40063 = (inst_40048 + inst_40062);
var inst_40064 = infinitelives.pixi.sprite.set_rotation_BANG_.call(null,inst_40032,inst_40063);
var state_40117__$1 = state_40117;
var statearr_40156_40192 = state_40117__$1;
(statearr_40156_40192[(2)] = inst_40064);

(statearr_40156_40192[(1)] = (10));


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
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var multiplayer$core$state_machine__29945__auto__ = null;
var multiplayer$core$state_machine__29945__auto____0 = (function (){
var statearr_40160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40160[(0)] = multiplayer$core$state_machine__29945__auto__);

(statearr_40160[(1)] = (1));

return statearr_40160;
});
var multiplayer$core$state_machine__29945__auto____1 = (function (state_40117){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_40117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e40161){if((e40161 instanceof Object)){
var ex__29948__auto__ = e40161;
var statearr_40162_40193 = state_40117;
(statearr_40162_40193[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40194 = state_40117;
state_40117 = G__40194;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
multiplayer$core$state_machine__29945__auto__ = function(state_40117){
switch(arguments.length){
case 0:
return multiplayer$core$state_machine__29945__auto____0.call(this);
case 1:
return multiplayer$core$state_machine__29945__auto____1.call(this,state_40117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multiplayer$core$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = multiplayer$core$state_machine__29945__auto____0;
multiplayer$core$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = multiplayer$core$state_machine__29945__auto____1;
return multiplayer$core$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_40163 = f__30057__auto__.call(null);
(statearr_40163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_40163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
})();
}

//# sourceMappingURL=core.js.map