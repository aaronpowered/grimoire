// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.utils.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
if(typeof infinitelives.utils.events._STAR_devtools_passthrough_STAR_ !== 'undefined'){
} else {
infinitelives.utils.events._STAR_devtools_passthrough_STAR_ = true;
}
infinitelives.utils.events.key_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof infinitelives.utils.events.key_config !== 'undefined'){
} else {
infinitelives.utils.events.key_config = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prevent-defaults","prevent-defaults",977810460),true], null));
}
infinitelives.utils.events.set_prevent_key_defaults = (function infinitelives$utils$events$set_prevent_key_defaults(b){
return cljs.core.swap_BANG_.call(null,infinitelives.utils.events.key_config,cljs.core.assoc,new cljs.core.Keyword(null,"prevent-defaults","prevent-defaults",977810460),b);
});
infinitelives.utils.events.prevent_key_defaults = cljs.core.partial.call(null,infinitelives.utils.events.set_prevent_key_defaults,true);
infinitelives.utils.events.allow_key_defaults = cljs.core.partial.call(null,infinitelives.utils.events.set_prevent_key_defaults,false);
/**
 * A clojurescript version of ascii value of. javascript doesn't have
 *   a char type, but uses a string of length 1 to represent
 */
infinitelives.utils.events.ascii = (function infinitelives$utils$events$ascii(c){
return c.charCodeAt((0));
});
/**
 * A hashmap with a variety of keys (strings, keywords).
 * mapping to browser key codes. Use the is-pressed? function to test
 * keys directly.
 * 
 * Keycodes can be any string of length 1 representing a key (lowercase).
 * Keycodes can also be any of the following keywords
 * 
 * :backspace :tab :enter :shift :control :alt :pause :capslock :esc :space
 * :pageup :pagedown :end :home :left :up :right :down :insert :delete :f1
 * :f2 :f3 :f4 :f5 :f6 :f7 :f8 :f9 :f10 :f11 :f12 :numlock :scrolllock :comma
 * :. :/ :backtick :squareleft :backslash :squareright :quote
 * 
 * or any of the single alphanumeric lowercase characters as keywords
 * 
 * eg.
 * :w :a :s :d :1 :5 etc.
 */
infinitelives.utils.events.key_codes = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.Keyword(null,"f1","f1",1714532389),new cljs.core.Keyword(null,"f10","f10",627525541),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"esc","esc",-1671924121),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"numlock","numlock",-1383996470),new cljs.core.Keyword(null,"f5","f5",1587057387),new cljs.core.Keyword(null,"pageup","pageup",1714543403),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"backtick","backtick",44770640),new cljs.core.Keyword(null,"f11","f11",-1417398799),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"f3","f3",1954829043),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"f2","f2",396168596),new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Keyword(null,"squareleft","squareleft",-1212370731),new cljs.core.Keyword(null,"scrolllock","scrolllock",-960203019),new cljs.core.Keyword(null,"f12","f12",853352790),new cljs.core.Keyword(null,"capslock","capslock",442493366),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"pagedown","pagedown",-2069718984),new cljs.core.Keyword(null,"pause","pause",-2095325672),new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"f7","f7",356150168),new cljs.core.Keyword(null,"f9","f9",704633338),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"f6","f6",2103080604),new cljs.core.Keyword(null,"f4","f4",990968764),new cljs.core.Keyword(null,"backslash","backslash",1790786526),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"squareright","squareright",1890515359)],[(16),(40),(32),(36),(45),(119),(112),(121),(18),(27),(188),(144),(116),(33),(46),(191),(38),(13),(192),(122),(190),(114),(222),(113),(17),(219),(145),(123),(20),(39),(34),(19),(8),(118),(120),(35),(9),(117),(115),(220),(37),(221)]),(function (){var iter__26776__auto__ = (function infinitelives$utils$events$iter__32847(s__32848){
return (new cljs.core.LazySeq(null,(function (){
var s__32848__$1 = s__32848;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32848__$1);
if(temp__4657__auto__){
var s__32848__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32848__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__32848__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__32850 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__32849 = (0);
while(true){
if((i__32849 < size__26775__auto__)){
var c = cljs.core._nth.call(null,c__26774__auto__,i__32849);
cljs.core.chunk_append.call(null,b__32850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(c)].join('')),(infinitelives.utils.events.ascii.call(null,c) - (32))], null));

var G__32855 = (i__32849 + (1));
i__32849 = G__32855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32850),infinitelives$utils$events$iter__32847.call(null,cljs.core.chunk_rest.call(null,s__32848__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32850),null);
}
} else {
var c = cljs.core.first.call(null,s__32848__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(c)].join('')),(infinitelives.utils.events.ascii.call(null,c) - (32))], null),infinitelives$utils$events$iter__32847.call(null,cljs.core.rest.call(null,s__32848__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26776__auto__.call(null,"0123456789abcdefghijklmnopqrstuvwxyz");
})(),(function (){var iter__26776__auto__ = (function infinitelives$utils$events$iter__32851(s__32852){
return (new cljs.core.LazySeq(null,(function (){
var s__32852__$1 = s__32852;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32852__$1);
if(temp__4657__auto__){
var s__32852__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32852__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__32852__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__32854 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__32853 = (0);
while(true){
if((i__32853 < size__26775__auto__)){
var c = cljs.core._nth.call(null,c__26774__auto__,i__32853);
cljs.core.chunk_append.call(null,b__32854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(infinitelives.utils.events.ascii.call(null,c) - (32))], null));

var G__32856 = (i__32853 + (1));
i__32853 = G__32856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32854),infinitelives$utils$events$iter__32851.call(null,cljs.core.chunk_rest.call(null,s__32852__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32854),null);
}
} else {
var c = cljs.core.first.call(null,s__32852__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(infinitelives.utils.events.ascii.call(null,c) - (32))], null),infinitelives$utils$events$iter__32851.call(null,cljs.core.rest.call(null,s__32852__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26776__auto__.call(null,"0123456789abcdefghijklmnopqrstuvwxyz,.;'[]-=`/\\");
})());
/**
 * the base event handler for key down events. Takes the keycode
 *   and sets that key in the key-state dictionary to true
 */
infinitelives.utils.events.handle_keydown_event = (function infinitelives$utils$events$handle_keydown_event(ev){
cljs.core.swap_BANG_.call(null,infinitelives.utils.events.key_state,(function (old){
return cljs.core.assoc.call(null,old,ev.keyCode,true);
}));

if(cljs.core.truth_((function (){var and__25992__auto__ = infinitelives.utils.events._STAR_devtools_passthrough_STAR_;
if(cljs.core.truth_(and__25992__auto__)){
var and__25992__auto____$1 = ev.ctrlKey;
if(cljs.core.truth_(and__25992__auto____$1)){
return ev.shiftKey;
} else {
return and__25992__auto____$1;
}
} else {
return and__25992__auto__;
}
})())){
return false;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"prevent-defaults","prevent-defaults",977810460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infinitelives.utils.events.key_config)))){
return ev.preventDefault();
} else {
return false;
}
}
});
/**
 * the basic event handler for key up events. Takes the keycode
 *   and removes it as a key from the key-state dictionary
 */
infinitelives.utils.events.handle_keyup_event = (function infinitelives$utils$events$handle_keyup_event(ev){
cljs.core.swap_BANG_.call(null,infinitelives.utils.events.key_state,(function (old){
return cljs.core.dissoc.call(null,old,ev.keyCode);
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"prevent-defaults","prevent-defaults",977810460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infinitelives.utils.events.key_config)))){
return ev.preventDefault();
} else {
return true;
}
});
/**
 * install the keyup and keydown event handlers
 */
infinitelives.utils.events.install_key_handler_BANG_ = (function infinitelives$utils$events$install_key_handler_BANG_(){
window.addEventListener("keydown",infinitelives.utils.events.handle_keydown_event);

return window.addEventListener("keyup",infinitelives.utils.events.handle_keyup_event);
});
/**
 * returns true if the key is pressently down. code is a keyword,
 *   or a string of length 1. Examples:
 * 
 *   ```
 *   ;; test if keys are down by keyword
 *   (is-pressed? :backspace)
 *   (is-pressed? :f10)
 *   (is-pressed? :left)
 *   (is-pressed? :space)
 *   (is-pressed? :w)
 *   (is-pressed? :a)
 * 
 *   ;; test if keys are down by string
 *   (is-pressed? " ")
 *   (is-pressed? "w")
 *   (is-pressed? "a")
 *   (is-pressed? "d")
 *   (is-pressed? "s")
 *   ```
 * 
 *   See key-codes for a list of keyword keys.
 */
infinitelives.utils.events.is_pressed_QMARK_ = (function infinitelives$utils$events$is_pressed_QMARK_(code){
return cljs.core.deref.call(null,infinitelives.utils.events.key_state).call(null,infinitelives.utils.events.key_codes.call(null,code));
});
/**
 * Is any key on the keyboard pressed?
 */
infinitelives.utils.events.any_pressed_QMARK_ = (function infinitelives$utils$events$any_pressed_QMARK_(){
return !((cljs.core.count.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,infinitelives.utils.events.key_state))) === (0)));
});
infinitelives.utils.events.fallback_fps = (60);
/**
 * compose a function that is the r-a-f func. returns a function. This returned function takes a callback and ensures
 *   its called next frame
 */
infinitelives.utils.events.make_request_animation_frame = (function infinitelives$utils$events$make_request_animation_frame(){
if(cljs.core.truth_(window.requestAnimationFrame)){
return (function (p1__32857_SHARP_){
return window.requestAnimationFrame(p1__32857_SHARP_);
});
} else {
if(cljs.core.truth_(window.webkitRequestAnimationFrame)){
return (function (p1__32858_SHARP_){
return window.webkitRequestAnimationFrame(p1__32858_SHARP_);
});
} else {
if(cljs.core.truth_(window.mozRequestAnimationFrame)){
return (function (p1__32859_SHARP_){
return window.mozRequestAnimationFrame(p1__32859_SHARP_);
});
} else {
if(cljs.core.truth_(window.oRequestAnimationFrame)){
return (function (p1__32860_SHARP_){
return window.oRequestAnimationFrame(p1__32860_SHARP_);
});
} else {
if(cljs.core.truth_(window.msRequestAnimationFrame)){
return (function (p1__32861_SHARP_){
return window.msRequestAnimationFrame(p1__32861_SHARP_);
});
} else {
return (function (p1__32862_SHARP_){
return window.setTimeout(p1__32862_SHARP_,((1000) / infinitelives.utils.events.fallback_fps));
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
infinitelives.utils.events.request_animation_frame = infinitelives.utils.events.make_request_animation_frame.call(null);
/**
 * returns a single use channel which closes on next frame callback.
 *   pulling from it waits exactly one frame. eg
 * 
 *   ```
 *   ;; wait one frame
 *   (<! (next-frame))
 *   ```
 */
infinitelives.utils.events.next_frame = (function infinitelives$utils$events$next_frame(){
var c = cljs.core.async.chan.call(null);
infinitelives.utils.events.request_animation_frame.call(null,((function (c){
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
infinitelives.utils.events.wait_frames = (function infinitelives$utils$events$wait_frames(frames){
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_32910){
var state_val_32911 = (state_32910[(1)]);
if((state_val_32911 === (1))){
var inst_32895 = frames;
var state_32910__$1 = (function (){var statearr_32912 = state_32910;
(statearr_32912[(7)] = inst_32895);

return statearr_32912;
})();
var statearr_32913_32927 = state_32910__$1;
(statearr_32913_32927[(2)] = null);

(statearr_32913_32927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (2))){
var inst_32895 = (state_32910[(7)]);
var inst_32897 = (inst_32895 > (0));
var state_32910__$1 = state_32910;
if(cljs.core.truth_(inst_32897)){
var statearr_32914_32928 = state_32910__$1;
(statearr_32914_32928[(1)] = (4));

} else {
var statearr_32915_32929 = state_32910__$1;
(statearr_32915_32929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (3))){
var inst_32908 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32910__$1,inst_32908);
} else {
if((state_val_32911 === (4))){
var inst_32899 = infinitelives.utils.events.next_frame.call(null);
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32910__$1,(7),inst_32899);
} else {
if((state_val_32911 === (5))){
var state_32910__$1 = state_32910;
var statearr_32916_32930 = state_32910__$1;
(statearr_32916_32930[(2)] = null);

(statearr_32916_32930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (6))){
var inst_32906 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32917_32931 = state_32910__$1;
(statearr_32917_32931[(2)] = inst_32906);

(statearr_32917_32931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (7))){
var inst_32895 = (state_32910[(7)]);
var inst_32901 = (state_32910[(2)]);
var inst_32902 = (inst_32895 - (1));
var inst_32895__$1 = inst_32902;
var state_32910__$1 = (function (){var statearr_32918 = state_32910;
(statearr_32918[(8)] = inst_32901);

(statearr_32918[(7)] = inst_32895__$1);

return statearr_32918;
})();
var statearr_32919_32932 = state_32910__$1;
(statearr_32919_32932[(2)] = null);

(statearr_32919_32932[(1)] = (2));


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
var infinitelives$utils$events$wait_frames_$_state_machine__29945__auto__ = null;
var infinitelives$utils$events$wait_frames_$_state_machine__29945__auto____0 = (function (){
var statearr_32923 = [null,null,null,null,null,null,null,null,null];
(statearr_32923[(0)] = infinitelives$utils$events$wait_frames_$_state_machine__29945__auto__);

(statearr_32923[(1)] = (1));

return statearr_32923;
});
var infinitelives$utils$events$wait_frames_$_state_machine__29945__auto____1 = (function (state_32910){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32924){if((e32924 instanceof Object)){
var ex__29948__auto__ = e32924;
var statearr_32925_32933 = state_32910;
(statearr_32925_32933[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32934 = state_32910;
state_32910 = G__32934;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
infinitelives$utils$events$wait_frames_$_state_machine__29945__auto__ = function(state_32910){
switch(arguments.length){
case 0:
return infinitelives$utils$events$wait_frames_$_state_machine__29945__auto____0.call(this);
case 1:
return infinitelives$utils$events$wait_frames_$_state_machine__29945__auto____1.call(this,state_32910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
infinitelives$utils$events$wait_frames_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = infinitelives$utils$events$wait_frames_$_state_machine__29945__auto____0;
infinitelives$utils$events$wait_frames_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = infinitelives$utils$events$wait_frames_$_state_machine__29945__auto____1;
return infinitelives$utils$events$wait_frames_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_32926 = f__30057__auto__.call(null);
(statearr_32926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_32926;
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
infinitelives.utils.events.wait_time = (function infinitelives$utils$events$wait_time(delay){
return infinitelives.utils.events.wait_frames.call(null,((60) * (delay / (1000))));
});
infinitelives.utils.events._STAR_resize_chans_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
infinitelives.utils.events.new_resize_chan = (function infinitelives$utils$events$new_resize_chan(){
var c = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,infinitelives.utils.events._STAR_resize_chans_STAR_,cljs.core.conj,c);

return c;
});
infinitelives.utils.events.del_resize_chan = (function infinitelives$utils$events$del_resize_chan(c){
return cljs.core.swap_BANG_.call(null,infinitelives.utils.events._STAR_resize_chans_STAR_,cljs.core.disj,c);
});
infinitelives.utils.events.clear_resize_chans_BANG_ = (function infinitelives$utils$events$clear_resize_chans_BANG_(){
return cljs.core.swap_BANG_.call(null,infinitelives.utils.events._STAR_resize_chans_STAR_,cljs.core.PersistentHashSet.EMPTY);
});
infinitelives.utils.events.resize_event_chan_handler = (function infinitelives$utils$events$resize_event_chan_handler(ev){
var size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
var seq__32939 = cljs.core.seq.call(null,cljs.core.deref.call(null,infinitelives.utils.events._STAR_resize_chans_STAR_));
var chunk__32940 = null;
var count__32941 = (0);
var i__32942 = (0);
while(true){
if((i__32942 < count__32941)){
var c = cljs.core._nth.call(null,chunk__32940,i__32942);
cljs.core.async.put_BANG_.call(null,c,size);

var G__32943 = seq__32939;
var G__32944 = chunk__32940;
var G__32945 = count__32941;
var G__32946 = (i__32942 + (1));
seq__32939 = G__32943;
chunk__32940 = G__32944;
count__32941 = G__32945;
i__32942 = G__32946;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32939);
if(temp__4657__auto__){
var seq__32939__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32939__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__32939__$1);
var G__32947 = cljs.core.chunk_rest.call(null,seq__32939__$1);
var G__32948 = c__26807__auto__;
var G__32949 = cljs.core.count.call(null,c__26807__auto__);
var G__32950 = (0);
seq__32939 = G__32947;
chunk__32940 = G__32948;
count__32941 = G__32949;
i__32942 = G__32950;
continue;
} else {
var c = cljs.core.first.call(null,seq__32939__$1);
cljs.core.async.put_BANG_.call(null,c,size);

var G__32951 = cljs.core.next.call(null,seq__32939__$1);
var G__32952 = null;
var G__32953 = (0);
var G__32954 = (0);
seq__32939 = G__32951;
chunk__32940 = G__32952;
count__32941 = G__32953;
i__32942 = G__32954;
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
infinitelives.utils.events.install_resize_handler_BANG_ = (function infinitelives$utils$events$install_resize_handler_BANG_(){
return window.addEventListener("resize",infinitelives.utils.events.resize_event_chan_handler);
});
infinitelives.utils.events._STAR_frame_chans_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
infinitelives.utils.events.new_frame_chan = (function infinitelives$utils$events$new_frame_chan(){
var c = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,infinitelives.utils.events._STAR_frame_chans_STAR_,cljs.core.conj,c);

return c;
});
infinitelives.utils.events.del_frame_chan_BANG_ = (function infinitelives$utils$events$del_frame_chan_BANG_(c){
return cljs.core.swap_BANG_.call(null,infinitelives.utils.events._STAR_frame_chans_STAR_,cljs.core.disj,c);
});
infinitelives.utils.events.clear_frame_chans_BANG_ = (function infinitelives$utils$events$clear_frame_chans_BANG_(){
return cljs.core.swap_BANG_.call(null,infinitelives.utils.events._STAR_frame_chans_STAR_,cljs.core.PersistentHashSet.EMPTY);
});
infinitelives.utils.events.frame_event_chan_handler = (function infinitelives$utils$events$frame_event_chan_handler(ev){
infinitelives.utils.events.request_animation_frame.call(null,infinitelives$utils$events$frame_event_chan_handler);

var seq__32959 = cljs.core.seq.call(null,cljs.core.deref.call(null,infinitelives.utils.events._STAR_frame_chans_STAR_));
var chunk__32960 = null;
var count__32961 = (0);
var i__32962 = (0);
while(true){
if((i__32962 < count__32961)){
var c = cljs.core._nth.call(null,chunk__32960,i__32962);
cljs.core.async.put_BANG_.call(null,c,true);

var G__32963 = seq__32959;
var G__32964 = chunk__32960;
var G__32965 = count__32961;
var G__32966 = (i__32962 + (1));
seq__32959 = G__32963;
chunk__32960 = G__32964;
count__32961 = G__32965;
i__32962 = G__32966;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32959);
if(temp__4657__auto__){
var seq__32959__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32959__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__32959__$1);
var G__32967 = cljs.core.chunk_rest.call(null,seq__32959__$1);
var G__32968 = c__26807__auto__;
var G__32969 = cljs.core.count.call(null,c__26807__auto__);
var G__32970 = (0);
seq__32959 = G__32967;
chunk__32960 = G__32968;
count__32961 = G__32969;
i__32962 = G__32970;
continue;
} else {
var c = cljs.core.first.call(null,seq__32959__$1);
cljs.core.async.put_BANG_.call(null,c,true);

var G__32971 = cljs.core.next.call(null,seq__32959__$1);
var G__32972 = null;
var G__32973 = (0);
var G__32974 = (0);
seq__32959 = G__32971;
chunk__32960 = G__32972;
count__32961 = G__32973;
i__32962 = G__32974;
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
infinitelives.utils.events.install_frame_handler_BANG_ = (function infinitelives$utils$events$install_frame_handler_BANG_(){
return infinitelives.utils.events.request_animation_frame.call(null,infinitelives.utils.events.frame_event_chan_handler);
});
infinitelives.utils.events.make_get_gamepads = (function infinitelives$utils$events$make_get_gamepads(){
if(cljs.core.truth_((navigator["getGamepads"]))){
return (function (_AMPERSAND_args){
return (navigator["getGamepads"]).apply(navigator,cljs.core.PersistentVector.EMPTY);
});
} else {
if(cljs.core.truth_((navigator["wegkitGetGamepads"]))){
return (function (_AMPERSAND_args){
return (navigator["webkitGetGamepads"]).apply(navigator,cljs.core.PersistentVector.EMPTY);
});
} else {
return (function (){
return cljs.core.List.EMPTY;
});

}
}
});
infinitelives.utils.events.get_gamepads = infinitelives.utils.events.make_get_gamepads.call(null);
infinitelives.utils.events._BANG_gamepads = new cljs.core.PersistentArrayMap(null, 4, [(0),cljs.core.atom.call(null,null),(1),cljs.core.atom.call(null,null),(2),cljs.core.atom.call(null,null),(3),cljs.core.atom.call(null,null)], null);
infinitelives.utils.events._BANG_gamepad_connected_callbacks = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
infinitelives.utils.events.initiate_gamepad_callbacks = (function infinitelives$utils$events$initiate_gamepad_callbacks(gamepad_index,gamepad_data){
var seq__32979 = cljs.core.seq.call(null,cljs.core.deref.call(null,infinitelives.utils.events._BANG_gamepad_connected_callbacks));
var chunk__32980 = null;
var count__32981 = (0);
var i__32982 = (0);
while(true){
if((i__32982 < count__32981)){
var g = cljs.core._nth.call(null,chunk__32980,i__32982);
g.call(null,gamepad_index,cljs.core.get.call(null,infinitelives.utils.events._BANG_gamepads,gamepad_index));

var G__32983 = seq__32979;
var G__32984 = chunk__32980;
var G__32985 = count__32981;
var G__32986 = (i__32982 + (1));
seq__32979 = G__32983;
chunk__32980 = G__32984;
count__32981 = G__32985;
i__32982 = G__32986;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32979);
if(temp__4657__auto__){
var seq__32979__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32979__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__32979__$1);
var G__32987 = cljs.core.chunk_rest.call(null,seq__32979__$1);
var G__32988 = c__26807__auto__;
var G__32989 = cljs.core.count.call(null,c__26807__auto__);
var G__32990 = (0);
seq__32979 = G__32987;
chunk__32980 = G__32988;
count__32981 = G__32989;
i__32982 = G__32990;
continue;
} else {
var g = cljs.core.first.call(null,seq__32979__$1);
g.call(null,gamepad_index,cljs.core.get.call(null,infinitelives.utils.events._BANG_gamepads,gamepad_index));

var G__32991 = cljs.core.next.call(null,seq__32979__$1);
var G__32992 = null;
var G__32993 = (0);
var G__32994 = (0);
seq__32979 = G__32991;
chunk__32980 = G__32992;
count__32981 = G__32993;
i__32982 = G__32994;
continue;
}
} else {
return null;
}
}
break;
}
});
infinitelives.utils.events.set_gamepad_atom_BANG_ = (function infinitelives$utils$events$set_gamepad_atom_BANG_(gamepad_index,value){
var g = cljs.core.get.call(null,infinitelives.utils.events._BANG_gamepads,gamepad_index);
return cljs.core.reset_BANG_.call(null,g,value);
});
infinitelives.utils.events.gamepad_handler_installed = cljs.core.atom.call(null,false);
infinitelives.utils.events.get_gamepad_event_index = (function infinitelives$utils$events$get_gamepad_event_index(ev){
return ((ev["gamepad"])["index"]);
});
infinitelives.utils.events.install_gamepad_handler_BANG_ = (function infinitelives$utils$events$install_gamepad_handler_BANG_(){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,infinitelives.utils.events.gamepad_handler_installed,false,true))){
var gamepads_33003 = infinitelives.utils.events.get_gamepads.call(null);
var seq__32999_33004 = cljs.core.seq.call(null,cljs.core.range.call(null,(4)));
var chunk__33000_33005 = null;
var count__33001_33006 = (0);
var i__33002_33007 = (0);
while(true){
if((i__33002_33007 < count__33001_33006)){
var gamepad_index_33008 = cljs.core._nth.call(null,chunk__33000_33005,i__33002_33007);
var gamepad_data_33009 = (gamepads_33003[gamepad_index_33008]);
if(cljs.core.truth_(gamepad_data_33009)){
infinitelives.utils.events.set_gamepad_atom_BANG_.call(null,gamepad_index_33008,gamepad_data_33009);
} else {
}

var G__33010 = seq__32999_33004;
var G__33011 = chunk__33000_33005;
var G__33012 = count__33001_33006;
var G__33013 = (i__33002_33007 + (1));
seq__32999_33004 = G__33010;
chunk__33000_33005 = G__33011;
count__33001_33006 = G__33012;
i__33002_33007 = G__33013;
continue;
} else {
var temp__4657__auto___33014 = cljs.core.seq.call(null,seq__32999_33004);
if(temp__4657__auto___33014){
var seq__32999_33015__$1 = temp__4657__auto___33014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32999_33015__$1)){
var c__26807__auto___33016 = cljs.core.chunk_first.call(null,seq__32999_33015__$1);
var G__33017 = cljs.core.chunk_rest.call(null,seq__32999_33015__$1);
var G__33018 = c__26807__auto___33016;
var G__33019 = cljs.core.count.call(null,c__26807__auto___33016);
var G__33020 = (0);
seq__32999_33004 = G__33017;
chunk__33000_33005 = G__33018;
count__33001_33006 = G__33019;
i__33002_33007 = G__33020;
continue;
} else {
var gamepad_index_33021 = cljs.core.first.call(null,seq__32999_33015__$1);
var gamepad_data_33022 = (gamepads_33003[gamepad_index_33021]);
if(cljs.core.truth_(gamepad_data_33022)){
infinitelives.utils.events.set_gamepad_atom_BANG_.call(null,gamepad_index_33021,gamepad_data_33022);
} else {
}

var G__33023 = cljs.core.next.call(null,seq__32999_33015__$1);
var G__33024 = null;
var G__33025 = (0);
var G__33026 = (0);
seq__32999_33004 = G__33023;
chunk__33000_33005 = G__33024;
count__33001_33006 = G__33025;
i__33002_33007 = G__33026;
continue;
}
} else {
}
}
break;
}

window.addEventListener("gamepadconnected",(function (ev){
infinitelives.utils.events.set_gamepad_atom_BANG_.call(null,infinitelives.utils.events.get_gamepad_event_index.call(null,ev),(ev["gamepad"]));

return infinitelives.utils.events.initiate_gamepad_callbacks.call(null,infinitelives.utils.events.get_gamepad_event_index.call(null,ev),(ev["gamepad"]));
}));

window.addEventListener("gamepaddisconnected",(function (ev){
infinitelives.utils.events.set_gamepad_atom_BANG_.call(null,infinitelives.utils.events.get_gamepad_event_index.call(null,ev),null);

return infinitelives.utils.events.initiate_gamepad_callbacks.call(null,infinitelives.utils.events.get_gamepad_event_index.call(null,ev),null);
}));

return setInterval(infinitelives.utils.events.get_gamepads,(25));
} else {
return null;
}
});
infinitelives.utils.events.install_gamepad_listener = (function infinitelives$utils$events$install_gamepad_listener(callback){
infinitelives.utils.events.install_gamepad_handler_BANG_.call(null);

cljs.core.swap_BANG_.call(null,infinitelives.utils.events._BANG_gamepad_connected_callbacks,cljs.core.conj,callback);

var seq__33031 = cljs.core.seq.call(null,cljs.core.range.call(null,(4)));
var chunk__33032 = null;
var count__33033 = (0);
var i__33034 = (0);
while(true){
if((i__33034 < count__33033)){
var c = cljs.core._nth.call(null,chunk__33032,i__33034);
var g_33035 = cljs.core.get.call(null,infinitelives.utils.events._BANG_gamepads,c);
if(cljs.core.truth_(cljs.core.deref.call(null,g_33035))){
callback.call(null,c,g_33035);
} else {
}

var G__33036 = seq__33031;
var G__33037 = chunk__33032;
var G__33038 = count__33033;
var G__33039 = (i__33034 + (1));
seq__33031 = G__33036;
chunk__33032 = G__33037;
count__33033 = G__33038;
i__33034 = G__33039;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33031);
if(temp__4657__auto__){
var seq__33031__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33031__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__33031__$1);
var G__33040 = cljs.core.chunk_rest.call(null,seq__33031__$1);
var G__33041 = c__26807__auto__;
var G__33042 = cljs.core.count.call(null,c__26807__auto__);
var G__33043 = (0);
seq__33031 = G__33040;
chunk__33032 = G__33041;
count__33033 = G__33042;
i__33034 = G__33043;
continue;
} else {
var c = cljs.core.first.call(null,seq__33031__$1);
var g_33044 = cljs.core.get.call(null,infinitelives.utils.events._BANG_gamepads,c);
if(cljs.core.truth_(cljs.core.deref.call(null,g_33044))){
callback.call(null,c,g_33044);
} else {
}

var G__33045 = cljs.core.next.call(null,seq__33031__$1);
var G__33046 = null;
var G__33047 = (0);
var G__33048 = (0);
seq__33031 = G__33045;
chunk__33032 = G__33046;
count__33033 = G__33047;
i__33034 = G__33048;
continue;
}
} else {
return null;
}
}
break;
}
});
infinitelives.utils.events.install_key_handler_BANG_.call(null);
infinitelives.utils.events.install_frame_handler_BANG_.call(null);
infinitelives.utils.events.install_resize_handler_BANG_.call(null);

//# sourceMappingURL=events.js.map