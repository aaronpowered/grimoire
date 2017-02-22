// Compiled by ClojureScript 1.7.228 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_33719){
var state_val_33720 = (state_33719[(1)]);
if((state_val_33720 === (1))){
var state_33719__$1 = state_33719;
var statearr_33721_33736 = state_33719__$1;
(statearr_33721_33736[(2)] = null);

(statearr_33721_33736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (2))){
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33719__$1,(4),ch);
} else {
if((state_val_33720 === (3))){
var inst_33717 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33719__$1,inst_33717);
} else {
if((state_val_33720 === (4))){
var inst_33709 = (state_33719[(7)]);
var inst_33709__$1 = (state_33719[(2)]);
var state_33719__$1 = (function (){var statearr_33722 = state_33719;
(statearr_33722[(7)] = inst_33709__$1);

return statearr_33722;
})();
if(cljs.core.truth_(inst_33709__$1)){
var statearr_33723_33737 = state_33719__$1;
(statearr_33723_33737[(1)] = (5));

} else {
var statearr_33724_33738 = state_33719__$1;
(statearr_33724_33738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (5))){
var inst_33709 = (state_33719[(7)]);
var inst_33711 = ws.send(inst_33709);
var state_33719__$1 = (function (){var statearr_33725 = state_33719;
(statearr_33725[(8)] = inst_33711);

return statearr_33725;
})();
var statearr_33726_33739 = state_33719__$1;
(statearr_33726_33739[(2)] = null);

(statearr_33726_33739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (6))){
var state_33719__$1 = state_33719;
var statearr_33727_33740 = state_33719__$1;
(statearr_33727_33740[(2)] = null);

(statearr_33727_33740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (7))){
var inst_33715 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
var statearr_33728_33741 = state_33719__$1;
(statearr_33728_33741[(2)] = inst_33715);

(statearr_33728_33741[(1)] = (3));


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
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__29945__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__29945__auto____0 = (function (){
var statearr_33732 = [null,null,null,null,null,null,null,null,null];
(statearr_33732[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__29945__auto__);

(statearr_33732[(1)] = (1));

return statearr_33732;
});
var chord$channels$write_to_ws_BANG__$_state_machine__29945__auto____1 = (function (state_33719){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_33719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e33733){if((e33733 instanceof Object)){
var ex__29948__auto__ = e33733;
var statearr_33734_33742 = state_33719;
(statearr_33734_33742[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33743 = state_33719;
state_33719 = G__33743;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__29945__auto__ = function(state_33719){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__29945__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__29945__auto____1.call(this,state_33719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__29945__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__29945__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_33735 = f__30057__auto__.call(null);
(statearr_33735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_33735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33754 = arguments.length;
var i__27063__auto___33755 = (0);
while(true){
if((i__27063__auto___33755 < len__27062__auto___33754)){
args__27069__auto__.push((arguments[i__27063__auto___33755]));

var G__33756 = (i__27063__auto___33755 + (1));
i__27063__auto___33755 = G__33756;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((2) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((2)),(0))):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27070__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__33747){
var vec__33748 = p__33747;
var map__33749 = cljs.core.nth.call(null,vec__33748,(0),null);
var map__33749__$1 = ((((!((map__33749 == null)))?((((map__33749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33749):map__33749);
var on_close = cljs.core.get.call(null,map__33749__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t_chord$channels33751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels33751 = (function (read_ch,write_ch,p__33747,vec__33748,map__33749,on_close,meta33752){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__33747 = p__33747;
this.vec__33748 = vec__33748;
this.map__33749 = map__33749;
this.on_close = on_close;
this.meta33752 = meta33752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels33751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__33748,map__33749,map__33749__$1,on_close){
return (function (_33753,meta33752__$1){
var self__ = this;
var _33753__$1 = this;
return (new chord.channels.t_chord$channels33751(self__.read_ch,self__.write_ch,self__.p__33747,self__.vec__33748,self__.map__33749,self__.on_close,meta33752__$1));
});})(vec__33748,map__33749,map__33749__$1,on_close))
;

chord.channels.t_chord$channels33751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__33748,map__33749,map__33749__$1,on_close){
return (function (_33753){
var self__ = this;
var _33753__$1 = this;
return self__.meta33752;
});})(vec__33748,map__33749,map__33749__$1,on_close))
;

chord.channels.t_chord$channels33751.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t_chord$channels33751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__33748,map__33749,map__33749__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__33748,map__33749,map__33749__$1,on_close))
;

chord.channels.t_chord$channels33751.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t_chord$channels33751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__33748,map__33749,map__33749__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__33748,map__33749,map__33749__$1,on_close))
;

chord.channels.t_chord$channels33751.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t_chord$channels33751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__33748,map__33749,map__33749__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__33748,map__33749,map__33749__$1,on_close))
;

chord.channels.t_chord$channels33751.getBasis = ((function (vec__33748,map__33749,map__33749__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__33747","p__33747",-664019331,null),new cljs.core.Symbol(null,"vec__33748","vec__33748",-1095115567,null),new cljs.core.Symbol(null,"map__33749","map__33749",1292876734,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta33752","meta33752",73209109,null)], null);
});})(vec__33748,map__33749,map__33749__$1,on_close))
;

chord.channels.t_chord$channels33751.cljs$lang$type = true;

chord.channels.t_chord$channels33751.cljs$lang$ctorStr = "chord.channels/t_chord$channels33751";

chord.channels.t_chord$channels33751.cljs$lang$ctorPrWriter = ((function (vec__33748,map__33749,map__33749__$1,on_close){
return (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"chord.channels/t_chord$channels33751");
});})(vec__33748,map__33749,map__33749__$1,on_close))
;

chord.channels.__GT_t_chord$channels33751 = ((function (vec__33748,map__33749,map__33749__$1,on_close){
return (function chord$channels$__GT_t_chord$channels33751(read_ch__$1,write_ch__$1,p__33747__$1,vec__33748__$1,map__33749__$2,on_close__$1,meta33752){
return (new chord.channels.t_chord$channels33751(read_ch__$1,write_ch__$1,p__33747__$1,vec__33748__$1,map__33749__$2,on_close__$1,meta33752));
});})(vec__33748,map__33749,map__33749__$1,on_close))
;

}

return (new chord.channels.t_chord$channels33751(read_ch,write_ch,p__33747,vec__33748,map__33749__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq33744){
var G__33745 = cljs.core.first.call(null,seq33744);
var seq33744__$1 = cljs.core.next.call(null,seq33744);
var G__33746 = cljs.core.first.call(null,seq33744__$1);
var seq33744__$2 = cljs.core.next.call(null,seq33744__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__33745,G__33746,seq33744__$2);
});

//# sourceMappingURL=channels.js.map