// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.pixi.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
infinitelives.pixi.events.fallback_fps = (60);
/**
 * compose a function that is the r-a-f func. returns a function. This returned function takes a callback and ensures
 *   its called next frame
 */
infinitelives.pixi.events.make_request_animation_frame = (function infinitelives$pixi$events$make_request_animation_frame(){
if(cljs.core.truth_(window.requestAnimationFrame)){
return (function (p1__34901_SHARP_){
return window.requestAnimationFrame(p1__34901_SHARP_);
});
} else {
if(cljs.core.truth_(window.webkitRequestAnimationFrame)){
return (function (p1__34902_SHARP_){
return window.webkitRequestAnimationFrame(p1__34902_SHARP_);
});
} else {
if(cljs.core.truth_(window.mozRequestAnimationFrame)){
return (function (p1__34903_SHARP_){
return window.mozRequestAnimationFrame(p1__34903_SHARP_);
});
} else {
if(cljs.core.truth_(window.oRequestAnimationFrame)){
return (function (p1__34904_SHARP_){
return window.oRequestAnimationFrame(p1__34904_SHARP_);
});
} else {
if(cljs.core.truth_(window.msRequestAnimationFrame)){
return (function (p1__34905_SHARP_){
return window.msRequestAnimationFrame(p1__34905_SHARP_);
});
} else {
return (function (p1__34906_SHARP_){
return window.setTimeout(p1__34906_SHARP_,((1000) / infinitelives.pixi.events.fallback_fps));
});

}
}
}
}
}
});
/**
 * schedules the passed in callback to be fired once, next animation frame.
 */
infinitelives.pixi.events.request_animation_frame = infinitelives.pixi.events.make_request_animation_frame.call(null);
/**
 * returns a single use channel which closes on next frame callback.
 *   pulling from it waits exactly one frame. eg
 * 
 *   ```
 *   ;; wait one frame
 *   (<! (next-frame))
 *   ```
 */
infinitelives.pixi.events.next_frame = (function infinitelives$pixi$events$next_frame(){
var c = cljs.core.async.chan.call(null);
infinitelives.pixi.events.request_animation_frame.call(null,((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
);

return c;
});
/**
 * returns a channel which closes when a certain number
 *   of frames have passed. eg
 * 
 *   ```
 *   ;; wait 10 frames
 *   (<! (wait-frames 10))
 *   ```
 */
infinitelives.pixi.events.wait_frames = (function infinitelives$pixi$events$wait_frames(frames){
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_34954){
var state_val_34955 = (state_34954[(1)]);
if((state_val_34955 === (1))){
var inst_34939 = frames;
var state_34954__$1 = (function (){var statearr_34956 = state_34954;
(statearr_34956[(7)] = inst_34939);

return statearr_34956;
})();
var statearr_34957_34971 = state_34954__$1;
(statearr_34957_34971[(2)] = null);

(statearr_34957_34971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (2))){
var inst_34939 = (state_34954[(7)]);
var inst_34941 = (inst_34939 > (0));
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34941)){
var statearr_34958_34972 = state_34954__$1;
(statearr_34958_34972[(1)] = (4));

} else {
var statearr_34959_34973 = state_34954__$1;
(statearr_34959_34973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (3))){
var inst_34952 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34954__$1,inst_34952);
} else {
if((state_val_34955 === (4))){
var inst_34943 = infinitelives.pixi.events.next_frame.call(null);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(7),inst_34943);
} else {
if((state_val_34955 === (5))){
var state_34954__$1 = state_34954;
var statearr_34960_34974 = state_34954__$1;
(statearr_34960_34974[(2)] = null);

(statearr_34960_34974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (6))){
var inst_34950 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34961_34975 = state_34954__$1;
(statearr_34961_34975[(2)] = inst_34950);

(statearr_34961_34975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (7))){
var inst_34939 = (state_34954[(7)]);
var inst_34945 = (state_34954[(2)]);
var inst_34946 = (inst_34939 - (1));
var inst_34939__$1 = inst_34946;
var state_34954__$1 = (function (){var statearr_34962 = state_34954;
(statearr_34962[(8)] = inst_34945);

(statearr_34962[(7)] = inst_34939__$1);

return statearr_34962;
})();
var statearr_34963_34976 = state_34954__$1;
(statearr_34963_34976[(2)] = null);

(statearr_34963_34976[(1)] = (2));


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
var infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto__ = null;
var infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto____0 = (function (){
var statearr_34967 = [null,null,null,null,null,null,null,null,null];
(statearr_34967[(0)] = infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto__);

(statearr_34967[(1)] = (1));

return statearr_34967;
});
var infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto____1 = (function (state_34954){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_34954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e34968){if((e34968 instanceof Object)){
var ex__29948__auto__ = e34968;
var statearr_34969_34977 = state_34954;
(statearr_34969_34977[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34978 = state_34954;
state_34954 = G__34978;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto__ = function(state_34954){
switch(arguments.length){
case 0:
return infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto____0.call(this);
case 1:
return infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto____1.call(this,state_34954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto____0;
infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto____1;
return infinitelives$pixi$events$wait_frames_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_34970 = f__30057__auto__.call(null);
(statearr_34970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_34970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
});
/**
 * returns a channel which closes when a certain amount of
 *   time in milliseconds has passed, but determines that time by counting
 *   the requestAnimationFrame callbacks, so that when tab focus is lost,
 *   the callback, and thus this wait is suspended.
 * 
 *   ```
 *   ;; wait one seconds worth of frames
 *   (<! (wait-time 1000))
 *   ```
 */
infinitelives.pixi.events.wait_time = (function infinitelives$pixi$events$wait_time(delay){
return infinitelives.pixi.events.wait_frames.call(null,((60) * (delay / (1000))));
});
infinitelives.pixi.events._STAR_resize_chans_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
infinitelives.pixi.events.new_resize_chan = (function infinitelives$pixi$events$new_resize_chan(){
var c = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,infinitelives.pixi.events._STAR_resize_chans_STAR_,cljs.core.conj,c);

return c;
});
infinitelives.pixi.events.del_resize_chan = (function infinitelives$pixi$events$del_resize_chan(c){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.events._STAR_resize_chans_STAR_,cljs.core.disj,c);
});
infinitelives.pixi.events.clear_resize_chans_BANG_ = (function infinitelives$pixi$events$clear_resize_chans_BANG_(){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.events._STAR_resize_chans_STAR_,cljs.core.PersistentHashSet.EMPTY);
});
infinitelives.pixi.events.resize_event_chan_handler = (function infinitelives$pixi$events$resize_event_chan_handler(ev){
var size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
var seq__34983 = cljs.core.seq.call(null,cljs.core.deref.call(null,infinitelives.pixi.events._STAR_resize_chans_STAR_));
var chunk__34984 = null;
var count__34985 = (0);
var i__34986 = (0);
while(true){
if((i__34986 < count__34985)){
var c = cljs.core._nth.call(null,chunk__34984,i__34986);
cljs.core.async.put_BANG_.call(null,c,size);

var G__34987 = seq__34983;
var G__34988 = chunk__34984;
var G__34989 = count__34985;
var G__34990 = (i__34986 + (1));
seq__34983 = G__34987;
chunk__34984 = G__34988;
count__34985 = G__34989;
i__34986 = G__34990;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34983);
if(temp__4657__auto__){
var seq__34983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34983__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__34983__$1);
var G__34991 = cljs.core.chunk_rest.call(null,seq__34983__$1);
var G__34992 = c__26807__auto__;
var G__34993 = cljs.core.count.call(null,c__26807__auto__);
var G__34994 = (0);
seq__34983 = G__34991;
chunk__34984 = G__34992;
count__34985 = G__34993;
i__34986 = G__34994;
continue;
} else {
var c = cljs.core.first.call(null,seq__34983__$1);
cljs.core.async.put_BANG_.call(null,c,size);

var G__34995 = cljs.core.next.call(null,seq__34983__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__34983 = G__34995;
chunk__34984 = G__34996;
count__34985 = G__34997;
i__34986 = G__34998;
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
 * install the resize callback to resize the main canvas renderer
 */
infinitelives.pixi.events.install_resize_handler = (function infinitelives$pixi$events$install_resize_handler(){
return window.addEventListener("resize",infinitelives.pixi.events.resize_event_chan_handler);
});
infinitelives.pixi.events._STAR_frame_chans_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
infinitelives.pixi.events.new_frame_chan = (function infinitelives$pixi$events$new_frame_chan(){
var c = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,infinitelives.pixi.events._STAR_frame_chans_STAR_,cljs.core.conj,c);

return c;
});
infinitelives.pixi.events.del_frame_chan_BANG_ = (function infinitelives$pixi$events$del_frame_chan_BANG_(c){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.events._STAR_frame_chans_STAR_,cljs.core.disj,c);
});
infinitelives.pixi.events.clear_frame_chans_BANG_ = (function infinitelives$pixi$events$clear_frame_chans_BANG_(){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.events._STAR_frame_chans_STAR_,cljs.core.PersistentHashSet.EMPTY);
});
infinitelives.pixi.events.frame_event_chan_handler = (function infinitelives$pixi$events$frame_event_chan_handler(ev){
infinitelives.pixi.events.request_animation_frame.call(null,infinitelives$pixi$events$frame_event_chan_handler);

var seq__35003 = cljs.core.seq.call(null,cljs.core.deref.call(null,infinitelives.pixi.events._STAR_frame_chans_STAR_));
var chunk__35004 = null;
var count__35005 = (0);
var i__35006 = (0);
while(true){
if((i__35006 < count__35005)){
var c = cljs.core._nth.call(null,chunk__35004,i__35006);
cljs.core.async.put_BANG_.call(null,c,true);

var G__35007 = seq__35003;
var G__35008 = chunk__35004;
var G__35009 = count__35005;
var G__35010 = (i__35006 + (1));
seq__35003 = G__35007;
chunk__35004 = G__35008;
count__35005 = G__35009;
i__35006 = G__35010;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35003);
if(temp__4657__auto__){
var seq__35003__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35003__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__35003__$1);
var G__35011 = cljs.core.chunk_rest.call(null,seq__35003__$1);
var G__35012 = c__26807__auto__;
var G__35013 = cljs.core.count.call(null,c__26807__auto__);
var G__35014 = (0);
seq__35003 = G__35011;
chunk__35004 = G__35012;
count__35005 = G__35013;
i__35006 = G__35014;
continue;
} else {
var c = cljs.core.first.call(null,seq__35003__$1);
cljs.core.async.put_BANG_.call(null,c,true);

var G__35015 = cljs.core.next.call(null,seq__35003__$1);
var G__35016 = null;
var G__35017 = (0);
var G__35018 = (0);
seq__35003 = G__35015;
chunk__35004 = G__35016;
count__35005 = G__35017;
i__35006 = G__35018;
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
 * install the frame callback to send frame chan messages
 */
infinitelives.pixi.events.install_frame_handler = (function infinitelives$pixi$events$install_frame_handler(){
return infinitelives.pixi.events.request_animation_frame.call(null,infinitelives.pixi.events.frame_event_chan_handler);
});
infinitelives.pixi.events.install_frame_handler.call(null);
infinitelives.pixi.events.install_resize_handler.call(null);

//# sourceMappingURL=events.js.map