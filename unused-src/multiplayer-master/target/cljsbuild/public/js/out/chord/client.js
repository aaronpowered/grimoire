// Compiled by ClojureScript 1.7.228 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33865 = arguments.length;
var i__27063__auto___33866 = (0);
while(true){
if((i__27063__auto___33866 < len__27062__auto___33865)){
args__27069__auto__.push((arguments[i__27063__auto___33866]));

var G__33867 = (i__27063__auto___33866 + (1));
i__27063__auto___33866 = G__33867;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__33763){
var vec__33764 = p__33763;
var map__33765 = cljs.core.nth.call(null,vec__33764,(0),null);
var map__33765__$1 = ((((!((map__33765 == null)))?((((map__33765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33765):map__33765);
var opts = map__33765__$1;
var read_ch = cljs.core.get.call(null,map__33765__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__33765__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__33765__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var web_socket = (new WebSocket(ws_url));
var map__33767 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__26004__auto__ = read_ch;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__26004__auto__ = write_ch;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__33767__$1 = ((((!((map__33767 == null)))?((((map__33767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33767):map__33767);
var read_ch__$1 = cljs.core.get.call(null,map__33767__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__33767__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format){
return (function (p1__33759_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__33759_SHARP_);
});})(web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format))
;

web_socket.onclose = ((function (web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format){
return (function (p1__33760_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__33760_SHARP_);
});})(web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format){
return (function (){
return web_socket.close();
});})(web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__30056__auto___33868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___33868,ws_chan,initial_ch,web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___33868,ws_chan,initial_ch,web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format){
return (function (state_33828){
var state_val_33829 = (state_33828[(1)]);
if((state_val_33829 === (7))){
var inst_33824 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33830_33869 = state_33828__$1;
(statearr_33830_33869[(2)] = inst_33824);

(statearr_33830_33869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (20))){
var state_33828__$1 = state_33828;
var statearr_33831_33870 = state_33828__$1;
(statearr_33831_33870[(2)] = null);

(statearr_33831_33870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (1))){
var inst_33769 = false;
var state_33828__$1 = (function (){var statearr_33832 = state_33828;
(statearr_33832[(7)] = inst_33769);

return statearr_33832;
})();
var statearr_33833_33871 = state_33828__$1;
(statearr_33833_33871[(2)] = null);

(statearr_33833_33871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (4))){
var inst_33782 = (state_33828[(8)]);
var inst_33780 = (state_33828[(9)]);
var inst_33780__$1 = (state_33828[(2)]);
var inst_33781 = cljs.core.nth.call(null,inst_33780__$1,(0),null);
var inst_33782__$1 = cljs.core.nth.call(null,inst_33780__$1,(1),null);
var inst_33783 = cljs.core._EQ_.call(null,inst_33782__$1,open_ch);
var state_33828__$1 = (function (){var statearr_33834 = state_33828;
(statearr_33834[(8)] = inst_33782__$1);

(statearr_33834[(9)] = inst_33780__$1);

(statearr_33834[(10)] = inst_33781);

return statearr_33834;
})();
if(inst_33783){
var statearr_33835_33872 = state_33828__$1;
(statearr_33835_33872[(1)] = (5));

} else {
var statearr_33836_33873 = state_33828__$1;
(statearr_33836_33873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (15))){
var inst_33809 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33837_33874 = state_33828__$1;
(statearr_33837_33874[(2)] = inst_33809);

(statearr_33837_33874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (21))){
var inst_33820 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33838_33875 = state_33828__$1;
(statearr_33838_33875[(2)] = inst_33820);

(statearr_33838_33875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (13))){
var state_33828__$1 = state_33828;
var statearr_33839_33876 = state_33828__$1;
(statearr_33839_33876[(2)] = null);

(statearr_33839_33876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (6))){
var inst_33782 = (state_33828[(8)]);
var inst_33795 = cljs.core._EQ_.call(null,inst_33782,close_ch);
var state_33828__$1 = state_33828;
if(inst_33795){
var statearr_33840_33877 = state_33828__$1;
(statearr_33840_33877[(1)] = (9));

} else {
var statearr_33841_33878 = state_33828__$1;
(statearr_33841_33878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (17))){
var state_33828__$1 = state_33828;
var statearr_33842_33879 = state_33828__$1;
(statearr_33842_33879[(2)] = initial_ch);

(statearr_33842_33879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (3))){
var inst_33826 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33828__$1,inst_33826);
} else {
if((state_val_33829 === (12))){
var inst_33769 = (state_33828[(7)]);
var state_33828__$1 = state_33828;
if(cljs.core.truth_(inst_33769)){
var statearr_33843_33880 = state_33828__$1;
(statearr_33843_33880[(1)] = (16));

} else {
var statearr_33844_33881 = state_33828__$1;
(statearr_33844_33881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (2))){
var inst_33776 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33777 = [open_ch,close_ch];
var inst_33778 = (new cljs.core.PersistentVector(null,2,(5),inst_33776,inst_33777,null));
var state_33828__$1 = state_33828;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33828__$1,(4),inst_33778);
} else {
if((state_val_33829 === (19))){
var inst_33781 = (state_33828[(10)]);
var state_33828__$1 = state_33828;
var statearr_33845_33882 = state_33828__$1;
(statearr_33845_33882[(2)] = inst_33781);

(statearr_33845_33882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (11))){
var inst_33822 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33846_33883 = state_33828__$1;
(statearr_33846_33883[(2)] = inst_33822);

(statearr_33846_33883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (9))){
var inst_33799 = (state_33828[(11)]);
var inst_33780 = (state_33828[(9)]);
var inst_33798 = cljs.core.nth.call(null,inst_33780,(0),null);
var inst_33799__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_33798);
var state_33828__$1 = (function (){var statearr_33847 = state_33828;
(statearr_33847[(11)] = inst_33799__$1);

return statearr_33847;
})();
if(cljs.core.truth_(inst_33799__$1)){
var statearr_33848_33884 = state_33828__$1;
(statearr_33848_33884[(1)] = (12));

} else {
var statearr_33849_33885 = state_33828__$1;
(statearr_33849_33885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (5))){
var inst_33780 = (state_33828[(9)]);
var inst_33786 = cljs.core.nth.call(null,inst_33780,(0),null);
var inst_33787 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_33788 = [ws_chan];
var inst_33789 = cljs.core.PersistentHashMap.fromArrays(inst_33787,inst_33788);
var state_33828__$1 = (function (){var statearr_33850 = state_33828;
(statearr_33850[(12)] = inst_33786);

return statearr_33850;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33828__$1,(8),initial_ch,inst_33789);
} else {
if((state_val_33829 === (14))){
var inst_33812 = (state_33828[(2)]);
var inst_33813 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_33814 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_33828__$1 = (function (){var statearr_33851 = state_33828;
(statearr_33851[(13)] = inst_33813);

(statearr_33851[(14)] = inst_33812);

return statearr_33851;
})();
var statearr_33852_33886 = state_33828__$1;
(statearr_33852_33886[(2)] = inst_33814);

(statearr_33852_33886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (16))){
var state_33828__$1 = state_33828;
var statearr_33853_33887 = state_33828__$1;
(statearr_33853_33887[(2)] = read_ch__$1);

(statearr_33853_33887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (10))){
var inst_33782 = (state_33828[(8)]);
var inst_33816 = cljs.core._EQ_.call(null,inst_33782,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_33828__$1 = state_33828;
if(inst_33816){
var statearr_33854_33888 = state_33828__$1;
(statearr_33854_33888[(1)] = (19));

} else {
var statearr_33855_33889 = state_33828__$1;
(statearr_33855_33889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (18))){
var inst_33799 = (state_33828[(11)]);
var inst_33804 = (state_33828[(2)]);
var inst_33805 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_33806 = [inst_33799];
var inst_33807 = cljs.core.PersistentHashMap.fromArrays(inst_33805,inst_33806);
var state_33828__$1 = state_33828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33828__$1,(15),inst_33804,inst_33807);
} else {
if((state_val_33829 === (8))){
var inst_33791 = (state_33828[(2)]);
var inst_33792 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_33769 = true;
var state_33828__$1 = (function (){var statearr_33856 = state_33828;
(statearr_33856[(15)] = inst_33792);

(statearr_33856[(16)] = inst_33791);

(statearr_33856[(7)] = inst_33769);

return statearr_33856;
})();
var statearr_33857_33890 = state_33828__$1;
(statearr_33857_33890[(2)] = null);

(statearr_33857_33890[(1)] = (2));


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
});})(c__30056__auto___33868,ws_chan,initial_ch,web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format))
;
return ((function (switch__29944__auto__,c__30056__auto___33868,ws_chan,initial_ch,web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format){
return (function() {
var chord$client$state_machine__29945__auto__ = null;
var chord$client$state_machine__29945__auto____0 = (function (){
var statearr_33861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33861[(0)] = chord$client$state_machine__29945__auto__);

(statearr_33861[(1)] = (1));

return statearr_33861;
});
var chord$client$state_machine__29945__auto____1 = (function (state_33828){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_33828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e33862){if((e33862 instanceof Object)){
var ex__29948__auto__ = e33862;
var statearr_33863_33891 = state_33828;
(statearr_33863_33891[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33892 = state_33828;
state_33828 = G__33892;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
chord$client$state_machine__29945__auto__ = function(state_33828){
switch(arguments.length){
case 0:
return chord$client$state_machine__29945__auto____0.call(this);
case 1:
return chord$client$state_machine__29945__auto____1.call(this,state_33828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__29945__auto____0;
chord$client$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__29945__auto____1;
return chord$client$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___33868,ws_chan,initial_ch,web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format))
})();
var state__30058__auto__ = (function (){var statearr_33864 = f__30057__auto__.call(null);
(statearr_33864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___33868);

return statearr_33864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___33868,ws_chan,initial_ch,web_socket,map__33767,map__33767__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33764,map__33765,map__33765__$1,opts,read_ch,write_ch,format))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq33761){
var G__33762 = cljs.core.first.call(null,seq33761);
var seq33761__$1 = cljs.core.next.call(null,seq33761);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__33762,seq33761__$1);
});

//# sourceMappingURL=client.js.map