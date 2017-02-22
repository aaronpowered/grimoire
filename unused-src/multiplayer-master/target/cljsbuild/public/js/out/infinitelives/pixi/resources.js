// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.pixi.resources');
goog.require('cljs.core');
goog.require('infinitelives.utils.sound');
goog.require('cljs.core.async');
goog.require('infinitelives.utils.events');
goog.require('infinitelives.utils.string');
goog.require('infinitelives.pixi.sprite');
goog.require('infinitelives.utils.console');
goog.require('cljsjs.pixi');
if(typeof infinitelives.pixi.resources._BANG_textures !== 'undefined'){
} else {
infinitelives.pixi.resources._BANG_textures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Draws an empty box that can serve as a default progress bar for preloading images
 */
infinitelives.pixi.resources.progress_texture = (function infinitelives$pixi$resources$progress_texture(fraction,p__33161){
var map__33168 = p__33161;
var map__33168__$1 = ((((!((map__33168 == null)))?((((map__33168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33168):map__33168);
var options = map__33168__$1;
var full_colour = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(8421504));
var lowlight_offset = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"lowlight-offset","lowlight-offset",-612034438),(0));
var draw_border = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"draw-border","draw-border",-1950022342),false);
var highlight_offset = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"highlight-offset","highlight-offset",-1920235650),(0));
var height = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"height","height",1025178622),(40));
var highlight = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var width = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"width","width",-384071477),(600));
var lowlight_width = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"lowlight-width","lowlight-width",-984309493),(1));
var border_colour = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"border-colour","border-colour",-173895822),(16777215));
var border_width = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2));
var empty_colour = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0));
var lowlight = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"lowlight","lowlight",2143243768));
var highlight_width = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"highlight-width","highlight-width",1191874776),(1));
var box = (new PIXI.Graphics());
var G__33170_33174 = box;
G__33170_33174.beginFill(empty_colour);

G__33170_33174.lineStyle((0),border_colour);

G__33170_33174.drawRect((0),(0),width,height);

G__33170_33174.lineStyle((0),border_colour);

G__33170_33174.beginFill(full_colour);

G__33170_33174.drawRect(border_width,border_width,((((fraction < (1)))?fraction:(1)) * ((width - border_width) - border_width)),((height - border_width) - border_width));

G__33170_33174.endFill();


var bw_33175 = ((((fraction < (1)))?fraction:(1)) * width);
var x1_33176 = (border_width + highlight_offset);
var x2_33177 = (bw_33175 - highlight_offset);
var y1_33178 = (border_width + lowlight_offset);
var y2_33179 = ((height - border_width) - lowlight_offset);
if((bw_33175 > (0))){
if(cljs.core.truth_(highlight)){
var G__33171_33180 = box;
G__33171_33180.lineStyle(highlight_width,highlight);

G__33171_33180.moveTo(x1_33176,y2_33179);

G__33171_33180.lineTo(x1_33176,y1_33178);

G__33171_33180.lineTo(x2_33177,y1_33178);

} else {
}

if(cljs.core.truth_(lowlight)){
var G__33172_33181 = box;
G__33172_33181.lineStyle(lowlight_width,lowlight);

G__33172_33181.moveTo(x1_33176,y2_33179);

G__33172_33181.lineTo(x2_33177,y2_33179);

G__33172_33181.lineTo(x2_33177,y1_33178);

} else {
}
} else {
}

if(cljs.core.truth_(draw_border)){
var G__33173_33182 = box;
G__33173_33182.lineStyle(border_width,border_colour);

G__33173_33182.drawRect((0),(0),width,height);

} else {
}

return box.generateTexture(false);
});
infinitelives.pixi.resources.add_prog_bar = (function infinitelives$pixi$resources$add_prog_bar(stage,options){
var s = infinitelives.pixi.sprite.make_sprite.call(null,infinitelives.pixi.resources.progress_texture.call(null,(0),options));
s.alpha = (0);

stage.addChild(s);

return s;
});
infinitelives.pixi.resources.get_texture = (function infinitelives$pixi$resources$get_texture(key,scale){
return scale.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,infinitelives.pixi.resources._BANG_textures),key));
});
infinitelives.pixi.resources.register_texture_BANG_ = (function infinitelives$pixi$resources$register_texture_BANG_(url,img){
if(cljs.core.truth_(infinitelives.utils.string.ends_with_QMARK_.call(null,url,".png"))){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.resources._BANG_textures,cljs.core.assoc,infinitelives.utils.string.url_keyword.call(null,url),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linear","linear",872268697),PIXI.Texture.fromImage(url,true,(PIXI.scaleModes["LINEAR"])),new cljs.core.Keyword(null,"nearest","nearest",1176353890),PIXI.Texture.fromImage([cljs.core.str(url),cljs.core.str("#")].join(''),true,(PIXI.scaleModes["NEAREST"]))], null));
} else {
return null;
}
});
infinitelives.pixi.resources.identify_file = (function infinitelives$pixi$resources$identify_file(url){
var pred__33188 = (function (p1__33183_SHARP_,p2__33184_SHARP_){
return p1__33183_SHARP_.call(null,p2__33184_SHARP_);
});
var expr__33189 = infinitelives.utils.string.get_extension.call(null,url);
if(cljs.core.truth_(pred__33188.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["ogg",null,"mp3",null,"wav",null], null), null),expr__33189))){
return new cljs.core.Keyword(null,"sound","sound",-2127407070);
} else {
if(cljs.core.truth_(pred__33188.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["gif",null,"png",null,"jpg",null], null), null),expr__33189))){
return new cljs.core.Keyword(null,"image","image",-58725096);
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}
}
});
infinitelives.pixi.resources.register = (function infinitelives$pixi$resources$register(url,obj){
var G__33192 = (((infinitelives.pixi.resources.identify_file.call(null,url) instanceof cljs.core.Keyword))?infinitelives.pixi.resources.identify_file.call(null,url).fqn:null);
switch (G__33192) {
case "image":
return infinitelives.pixi.resources.register_texture_BANG_.call(null,url,obj);

break;
case "sound":
return infinitelives.utils.sound.register_sound_BANG_.call(null,url,obj);

break;
default:
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
});
infinitelives.pixi.resources.load_image = (function infinitelives$pixi$resources$load_image(url,finished){
var i = (new Image());
i.onload = ((function (i){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,i], null));
});})(i))
;

i.onerror = ((function (i){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,null], null));
});})(i))
;

i.onabort = ((function (i){
return (function (){
return alert("abort");
});})(i))
;

i.src = url;

return i;
});
infinitelives.pixi.resources.load_sound = (function infinitelives$pixi$resources$load_sound(url,finished){
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_33220){
var state_val_33221 = (state_33220[(1)]);
if((state_val_33221 === (1))){
var inst_33212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33213 = infinitelives.utils.sound.load_sound.call(null,url);
var state_33220__$1 = (function (){var statearr_33222 = state_33220;
(statearr_33222[(7)] = inst_33212);

return statearr_33222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33220__$1,(2),inst_33213);
} else {
if((state_val_33221 === (2))){
var inst_33212 = (state_33220[(7)]);
var inst_33215 = (state_33220[(2)]);
var inst_33216 = [url,inst_33215];
var inst_33217 = (new cljs.core.PersistentVector(null,2,(5),inst_33212,inst_33216,null));
var inst_33218 = cljs.core.async.put_BANG_.call(null,finished,inst_33217);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33220__$1,inst_33218);
} else {
return null;
}
}
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto__ = null;
var infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto____0 = (function (){
var statearr_33226 = [null,null,null,null,null,null,null,null];
(statearr_33226[(0)] = infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto__);

(statearr_33226[(1)] = (1));

return statearr_33226;
});
var infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto____1 = (function (state_33220){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_33220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e33227){if((e33227 instanceof Object)){
var ex__29948__auto__ = e33227;
var statearr_33228_33230 = state_33220;
(statearr_33228_33230[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33231 = state_33220;
state_33220 = G__33231;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto__ = function(state_33220){
switch(arguments.length){
case 0:
return infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto____0.call(this);
case 1:
return infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto____1.call(this,state_33220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto____0;
infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto____1;
return infinitelives$pixi$resources$load_sound_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_33229 = f__30057__auto__.call(null);
(statearr_33229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_33229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
});
/**
 * loads each url in the passed in list as an image. Updates the progress
 * as it goes with
 *   a percentage and a thumbnail. Once complete, displays all the images
 * fullsize.
 */
infinitelives.pixi.resources.load_urls = (function infinitelives$pixi$resources$load_urls(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33290 = arguments.length;
var i__27063__auto___33291 = (0);
while(true){
if((i__27063__auto___33291 < len__27062__auto___33290)){
args__27069__auto__.push((arguments[i__27063__auto___33291]));

var G__33292 = (i__27063__auto___33291 + (1));
i__27063__auto___33291 = G__33292;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((2) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((2)),(0))):null);
return infinitelives.pixi.resources.load_urls.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27070__auto__);
});

infinitelives.pixi.resources.load_urls.cljs$core$IFn$_invoke$arity$variadic = (function (urls,progress_bar,options){
var options__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,options);
var finished = cljs.core.async.chan.call(null);
var num_urls = cljs.core.count.call(null,urls);
var images = cljs.core.doall.call(null,cljs.core.map.call(null,((function (finished,num_urls,options__$1){
return (function (src){
var G__33235 = (((infinitelives.pixi.resources.identify_file.call(null,src) instanceof cljs.core.Keyword))?infinitelives.pixi.resources.identify_file.call(null,src).fqn:null);
switch (G__33235) {
case "image":
return infinitelives.pixi.resources.load_image.call(null,src,finished);

break;
case "sound":
return infinitelives.pixi.resources.load_sound.call(null,src,finished);

break;
case "unknown":
return infinitelives.pixi.resources.load_image.call(null,src,finished);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(infinitelives.pixi.resources.identify_file.call(null,src))].join('')));

}
});})(finished,num_urls,options__$1))
,urls));
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__,finished,num_urls,images,options__$1){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__,finished,num_urls,images,options__$1){
return (function (state_33267){
var state_val_33268 = (state_33267[(1)]);
if((state_val_33268 === (7))){
var inst_33236 = (state_33267[(7)]);
var inst_33241 = (state_33267[(8)]);
var inst_33242 = (state_33267[(9)]);
var inst_33252 = (state_33267[(2)]);
var inst_33253 = infinitelives.pixi.resources.register.call(null,inst_33241,inst_33242);
var inst_33254 = (inst_33236 / num_urls);
var inst_33255 = infinitelives.pixi.resources.progress_texture.call(null,inst_33254,options__$1);
var inst_33256 = progress_bar.texture = inst_33255;
var inst_33257 = (inst_33236 < num_urls);
var state_33267__$1 = (function (){var statearr_33269 = state_33267;
(statearr_33269[(10)] = inst_33256);

(statearr_33269[(11)] = inst_33253);

(statearr_33269[(12)] = inst_33252);

return statearr_33269;
})();
if(cljs.core.truth_(inst_33257)){
var statearr_33270_33294 = state_33267__$1;
(statearr_33270_33294[(1)] = (9));

} else {
var statearr_33271_33295 = state_33267__$1;
(statearr_33271_33295[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (1))){
var inst_33236 = (1);
var state_33267__$1 = (function (){var statearr_33272 = state_33267;
(statearr_33272[(7)] = inst_33236);

return statearr_33272;
})();
var statearr_33273_33296 = state_33267__$1;
(statearr_33273_33296[(2)] = null);

(statearr_33273_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (4))){
var inst_33240 = (state_33267[(2)]);
var inst_33241 = cljs.core.nth.call(null,inst_33240,(0),null);
var inst_33242 = cljs.core.nth.call(null,inst_33240,(1),null);
var inst_33243 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var state_33267__$1 = (function (){var statearr_33274 = state_33267;
(statearr_33274[(8)] = inst_33241);

(statearr_33274[(9)] = inst_33242);

return statearr_33274;
})();
if(cljs.core.truth_(inst_33243)){
var statearr_33275_33297 = state_33267__$1;
(statearr_33275_33297[(1)] = (5));

} else {
var statearr_33276_33298 = state_33267__$1;
(statearr_33276_33298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (6))){
var state_33267__$1 = state_33267;
var statearr_33277_33299 = state_33267__$1;
(statearr_33277_33299[(2)] = null);

(statearr_33277_33299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (3))){
var inst_33265 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33267__$1,inst_33265);
} else {
if((state_val_33268 === (2))){
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33267__$1,(4),finished);
} else {
if((state_val_33268 === (11))){
var inst_33263 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33278_33300 = state_33267__$1;
(statearr_33278_33300[(2)] = inst_33263);

(statearr_33278_33300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (9))){
var inst_33236 = (state_33267[(7)]);
var inst_33259 = (inst_33236 + (1));
var inst_33236__$1 = inst_33259;
var state_33267__$1 = (function (){var statearr_33279 = state_33267;
(statearr_33279[(7)] = inst_33236__$1);

return statearr_33279;
})();
var statearr_33280_33301 = state_33267__$1;
(statearr_33280_33301[(2)] = null);

(statearr_33280_33301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (5))){
var inst_33245 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var inst_33246 = (inst_33245 * (1000));
var inst_33247 = cljs.core.async.timeout.call(null,inst_33246);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33267__$1,(8),inst_33247);
} else {
if((state_val_33268 === (10))){
var state_33267__$1 = state_33267;
var statearr_33281_33302 = state_33267__$1;
(statearr_33281_33302[(2)] = null);

(statearr_33281_33302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (8))){
var inst_33249 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33282_33303 = state_33267__$1;
(statearr_33282_33303[(2)] = inst_33249);

(statearr_33282_33303[(1)] = (7));


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
});})(c__30056__auto__,finished,num_urls,images,options__$1))
;
return ((function (switch__29944__auto__,c__30056__auto__,finished,num_urls,images,options__$1){
return (function() {
var infinitelives$pixi$resources$state_machine__29945__auto__ = null;
var infinitelives$pixi$resources$state_machine__29945__auto____0 = (function (){
var statearr_33286 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33286[(0)] = infinitelives$pixi$resources$state_machine__29945__auto__);

(statearr_33286[(1)] = (1));

return statearr_33286;
});
var infinitelives$pixi$resources$state_machine__29945__auto____1 = (function (state_33267){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_33267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e33287){if((e33287 instanceof Object)){
var ex__29948__auto__ = e33287;
var statearr_33288_33304 = state_33267;
(statearr_33288_33304[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33305 = state_33267;
state_33267 = G__33305;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
infinitelives$pixi$resources$state_machine__29945__auto__ = function(state_33267){
switch(arguments.length){
case 0:
return infinitelives$pixi$resources$state_machine__29945__auto____0.call(this);
case 1:
return infinitelives$pixi$resources$state_machine__29945__auto____1.call(this,state_33267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
infinitelives$pixi$resources$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = infinitelives$pixi$resources$state_machine__29945__auto____0;
infinitelives$pixi$resources$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = infinitelives$pixi$resources$state_machine__29945__auto____1;
return infinitelives$pixi$resources$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__,finished,num_urls,images,options__$1))
})();
var state__30058__auto__ = (function (){var statearr_33289 = f__30057__auto__.call(null);
(statearr_33289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_33289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__,finished,num_urls,images,options__$1))
);

return c__30056__auto__;
});

infinitelives.pixi.resources.load_urls.cljs$lang$maxFixedArity = (2);

infinitelives.pixi.resources.load_urls.cljs$lang$applyTo = (function (seq33232){
var G__33233 = cljs.core.first.call(null,seq33232);
var seq33232__$1 = cljs.core.next.call(null,seq33232);
var G__33234 = cljs.core.first.call(null,seq33232__$1);
var seq33232__$2 = cljs.core.next.call(null,seq33232__$1);
return infinitelives.pixi.resources.load_urls.cljs$core$IFn$_invoke$arity$variadic(G__33233,G__33234,seq33232__$2);
});
infinitelives.pixi.resources.fadeout = (function infinitelives$pixi$resources$fadeout(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33349 = arguments.length;
var i__27063__auto___33350 = (0);
while(true){
if((i__27063__auto___33350 < len__27062__auto___33349)){
args__27069__auto__.push((arguments[i__27063__auto___33350]));

var G__33351 = (i__27063__auto___33350 + (1));
i__27063__auto___33350 = G__33351;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return infinitelives.pixi.resources.fadeout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

infinitelives.pixi.resources.fadeout.cljs$core$IFn$_invoke$arity$variadic = (function (spr,p__33308){
var map__33309 = p__33308;
var map__33309__$1 = ((((!((map__33309 == null)))?((((map__33309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33309):map__33309);
var duration = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var start = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"start","start",-355208981),null);
var end = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"end","end",-268185958),(0));
var start__$1 = (((start == null))?spr.alpha:start);
var ticks = ((60) * duration);
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__,start__$1,ticks,map__33309,map__33309__$1,duration,start,end){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__,start__$1,ticks,map__33309,map__33309__$1,duration,start,end){
return (function (state_33331){
var state_val_33332 = (state_33331[(1)]);
if((state_val_33332 === (1))){
var inst_33311 = ticks;
var state_33331__$1 = (function (){var statearr_33333 = state_33331;
(statearr_33333[(7)] = inst_33311);

return statearr_33333;
})();
var statearr_33334_33352 = state_33331__$1;
(statearr_33334_33352[(2)] = null);

(statearr_33334_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (2))){
var inst_33313 = infinitelives.utils.events.next_frame.call(null);
var state_33331__$1 = state_33331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33331__$1,(4),inst_33313);
} else {
if((state_val_33332 === (3))){
var inst_33329 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33331__$1,inst_33329);
} else {
if((state_val_33332 === (4))){
var inst_33311 = (state_33331[(7)]);
var inst_33315 = (state_33331[(2)]);
var inst_33316 = (start__$1 - end);
var inst_33317 = (inst_33311 / ticks);
var inst_33318 = (inst_33316 * inst_33317);
var inst_33319 = (end + inst_33318);
var inst_33320 = spr.alpha = inst_33319;
var inst_33321 = (inst_33311 > (0));
var state_33331__$1 = (function (){var statearr_33335 = state_33331;
(statearr_33335[(8)] = inst_33315);

(statearr_33335[(9)] = inst_33320);

return statearr_33335;
})();
if(cljs.core.truth_(inst_33321)){
var statearr_33336_33353 = state_33331__$1;
(statearr_33336_33353[(1)] = (5));

} else {
var statearr_33337_33354 = state_33331__$1;
(statearr_33337_33354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (5))){
var inst_33311 = (state_33331[(7)]);
var inst_33323 = (inst_33311 - (1));
var inst_33311__$1 = inst_33323;
var state_33331__$1 = (function (){var statearr_33338 = state_33331;
(statearr_33338[(7)] = inst_33311__$1);

return statearr_33338;
})();
var statearr_33339_33355 = state_33331__$1;
(statearr_33339_33355[(2)] = null);

(statearr_33339_33355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (6))){
var state_33331__$1 = state_33331;
var statearr_33340_33356 = state_33331__$1;
(statearr_33340_33356[(2)] = null);

(statearr_33340_33356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (7))){
var inst_33327 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
var statearr_33341_33357 = state_33331__$1;
(statearr_33341_33357[(2)] = inst_33327);

(statearr_33341_33357[(1)] = (3));


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
});})(c__30056__auto__,start__$1,ticks,map__33309,map__33309__$1,duration,start,end))
;
return ((function (switch__29944__auto__,c__30056__auto__,start__$1,ticks,map__33309,map__33309__$1,duration,start,end){
return (function() {
var infinitelives$pixi$resources$state_machine__29945__auto__ = null;
var infinitelives$pixi$resources$state_machine__29945__auto____0 = (function (){
var statearr_33345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33345[(0)] = infinitelives$pixi$resources$state_machine__29945__auto__);

(statearr_33345[(1)] = (1));

return statearr_33345;
});
var infinitelives$pixi$resources$state_machine__29945__auto____1 = (function (state_33331){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_33331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e33346){if((e33346 instanceof Object)){
var ex__29948__auto__ = e33346;
var statearr_33347_33358 = state_33331;
(statearr_33347_33358[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33359 = state_33331;
state_33331 = G__33359;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
infinitelives$pixi$resources$state_machine__29945__auto__ = function(state_33331){
switch(arguments.length){
case 0:
return infinitelives$pixi$resources$state_machine__29945__auto____0.call(this);
case 1:
return infinitelives$pixi$resources$state_machine__29945__auto____1.call(this,state_33331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
infinitelives$pixi$resources$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = infinitelives$pixi$resources$state_machine__29945__auto____0;
infinitelives$pixi$resources$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = infinitelives$pixi$resources$state_machine__29945__auto____1;
return infinitelives$pixi$resources$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__,start__$1,ticks,map__33309,map__33309__$1,duration,start,end))
})();
var state__30058__auto__ = (function (){var statearr_33348 = f__30057__auto__.call(null);
(statearr_33348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_33348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__,start__$1,ticks,map__33309,map__33309__$1,duration,start,end))
);

return c__30056__auto__;
});

infinitelives.pixi.resources.fadeout.cljs$lang$maxFixedArity = (1);

infinitelives.pixi.resources.fadeout.cljs$lang$applyTo = (function (seq33306){
var G__33307 = cljs.core.first.call(null,seq33306);
var seq33306__$1 = cljs.core.next.call(null,seq33306);
return infinitelives.pixi.resources.fadeout.cljs$core$IFn$_invoke$arity$variadic(G__33307,seq33306__$1);
});
infinitelives.pixi.resources.fadein = (function infinitelives$pixi$resources$fadein(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33404 = arguments.length;
var i__27063__auto___33405 = (0);
while(true){
if((i__27063__auto___33405 < len__27062__auto___33404)){
args__27069__auto__.push((arguments[i__27063__auto___33405]));

var G__33406 = (i__27063__auto___33405 + (1));
i__27063__auto___33405 = G__33406;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return infinitelives.pixi.resources.fadein.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

infinitelives.pixi.resources.fadein.cljs$core$IFn$_invoke$arity$variadic = (function (spr,p__33362){
var map__33363 = p__33362;
var map__33363__$1 = ((((!((map__33363 == null)))?((((map__33363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33363):map__33363);
var duration = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var start = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var end = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"end","end",-268185958),(1));
var ticks = ((60) * duration);
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__,ticks,map__33363,map__33363__$1,duration,start,end){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__,ticks,map__33363,map__33363__$1,duration,start,end){
return (function (state_33386){
var state_val_33387 = (state_33386[(1)]);
if((state_val_33387 === (1))){
var inst_33365 = ticks;
var state_33386__$1 = (function (){var statearr_33388 = state_33386;
(statearr_33388[(7)] = inst_33365);

return statearr_33388;
})();
var statearr_33389_33407 = state_33386__$1;
(statearr_33389_33407[(2)] = null);

(statearr_33389_33407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (2))){
var inst_33367 = infinitelives.utils.events.next_frame.call(null);
var state_33386__$1 = state_33386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33386__$1,(4),inst_33367);
} else {
if((state_val_33387 === (3))){
var inst_33384 = (state_33386[(2)]);
var state_33386__$1 = state_33386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33386__$1,inst_33384);
} else {
if((state_val_33387 === (4))){
var inst_33365 = (state_33386[(7)]);
var inst_33369 = (state_33386[(2)]);
var inst_33370 = (end - start);
var inst_33371 = (ticks - inst_33365);
var inst_33372 = (inst_33371 / ticks);
var inst_33373 = (inst_33370 * inst_33372);
var inst_33374 = (start + inst_33373);
var inst_33375 = spr.alpha = inst_33374;
var inst_33376 = (inst_33365 > (0));
var state_33386__$1 = (function (){var statearr_33390 = state_33386;
(statearr_33390[(8)] = inst_33375);

(statearr_33390[(9)] = inst_33369);

return statearr_33390;
})();
if(cljs.core.truth_(inst_33376)){
var statearr_33391_33408 = state_33386__$1;
(statearr_33391_33408[(1)] = (5));

} else {
var statearr_33392_33409 = state_33386__$1;
(statearr_33392_33409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (5))){
var inst_33365 = (state_33386[(7)]);
var inst_33378 = (inst_33365 - (1));
var inst_33365__$1 = inst_33378;
var state_33386__$1 = (function (){var statearr_33393 = state_33386;
(statearr_33393[(7)] = inst_33365__$1);

return statearr_33393;
})();
var statearr_33394_33410 = state_33386__$1;
(statearr_33394_33410[(2)] = null);

(statearr_33394_33410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (6))){
var state_33386__$1 = state_33386;
var statearr_33395_33411 = state_33386__$1;
(statearr_33395_33411[(2)] = null);

(statearr_33395_33411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33387 === (7))){
var inst_33382 = (state_33386[(2)]);
var state_33386__$1 = state_33386;
var statearr_33396_33412 = state_33386__$1;
(statearr_33396_33412[(2)] = inst_33382);

(statearr_33396_33412[(1)] = (3));


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
});})(c__30056__auto__,ticks,map__33363,map__33363__$1,duration,start,end))
;
return ((function (switch__29944__auto__,c__30056__auto__,ticks,map__33363,map__33363__$1,duration,start,end){
return (function() {
var infinitelives$pixi$resources$state_machine__29945__auto__ = null;
var infinitelives$pixi$resources$state_machine__29945__auto____0 = (function (){
var statearr_33400 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33400[(0)] = infinitelives$pixi$resources$state_machine__29945__auto__);

(statearr_33400[(1)] = (1));

return statearr_33400;
});
var infinitelives$pixi$resources$state_machine__29945__auto____1 = (function (state_33386){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_33386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e33401){if((e33401 instanceof Object)){
var ex__29948__auto__ = e33401;
var statearr_33402_33413 = state_33386;
(statearr_33402_33413[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33414 = state_33386;
state_33386 = G__33414;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
infinitelives$pixi$resources$state_machine__29945__auto__ = function(state_33386){
switch(arguments.length){
case 0:
return infinitelives$pixi$resources$state_machine__29945__auto____0.call(this);
case 1:
return infinitelives$pixi$resources$state_machine__29945__auto____1.call(this,state_33386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
infinitelives$pixi$resources$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = infinitelives$pixi$resources$state_machine__29945__auto____0;
infinitelives$pixi$resources$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = infinitelives$pixi$resources$state_machine__29945__auto____1;
return infinitelives$pixi$resources$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__,ticks,map__33363,map__33363__$1,duration,start,end))
})();
var state__30058__auto__ = (function (){var statearr_33403 = f__30057__auto__.call(null);
(statearr_33403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_33403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__,ticks,map__33363,map__33363__$1,duration,start,end))
);

return c__30056__auto__;
});

infinitelives.pixi.resources.fadein.cljs$lang$maxFixedArity = (1);

infinitelives.pixi.resources.fadein.cljs$lang$applyTo = (function (seq33360){
var G__33361 = cljs.core.first.call(null,seq33360);
var seq33360__$1 = cljs.core.next.call(null,seq33360);
return infinitelives.pixi.resources.fadein.cljs$core$IFn$_invoke$arity$variadic(G__33361,seq33360__$1);
});
infinitelives.pixi.resources.load_resources = (function infinitelives$pixi$resources$load_resources(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33453 = arguments.length;
var i__27063__auto___33454 = (0);
while(true){
if((i__27063__auto___33454 < len__27062__auto___33453)){
args__27069__auto__.push((arguments[i__27063__auto___33454]));

var G__33455 = (i__27063__auto___33454 + (1));
i__27063__auto___33454 = G__33455;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((3) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((3)),(0))):null);
return infinitelives.pixi.resources.load_resources.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27070__auto__);
});

infinitelives.pixi.resources.load_resources.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,layer,urls,p__33419){
var map__33420 = p__33419;
var map__33420__$1 = ((((!((map__33420 == null)))?((((map__33420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33420):map__33420);
var options = map__33420__$1;
var fade_in = cljs.core.get.call(null,map__33420__$1,new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.5);
var fade_out = cljs.core.get.call(null,map__33420__$1,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),0.5);
var c = cljs.core.async.chan.call(null);
var b = infinitelives.pixi.resources.add_prog_bar.call(null,layer.call(null,new cljs.core.Keyword(null,"layer","layer",-1601820589).cljs$core$IFn$_invoke$arity$1(canvas)),options);
var c__30056__auto___33456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___33456,c,b,map__33420,map__33420__$1,options,fade_in,fade_out){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___33456,c,b,map__33420,map__33420__$1,options,fade_in,fade_out){
return (function (state_33440){
var state_val_33441 = (state_33440[(1)]);
if((state_val_33441 === (1))){
var inst_33422 = infinitelives.pixi.resources.fadein.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_in);
var state_33440__$1 = state_33440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33440__$1,(2),inst_33422);
} else {
if((state_val_33441 === (2))){
var inst_33424 = (state_33440[(2)]);
var inst_33425 = cljs.core.partial.call(null,infinitelives.pixi.resources.load_urls,urls,b);
var inst_33426 = cljs.core.apply.call(null,inst_33425,options);
var state_33440__$1 = (function (){var statearr_33442 = state_33440;
(statearr_33442[(7)] = inst_33424);

return statearr_33442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33440__$1,(3),inst_33426);
} else {
if((state_val_33441 === (3))){
var inst_33428 = (state_33440[(2)]);
var inst_33429 = cljs.core.async.timeout.call(null,(300));
var state_33440__$1 = (function (){var statearr_33443 = state_33440;
(statearr_33443[(8)] = inst_33428);

return statearr_33443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33440__$1,(4),inst_33429);
} else {
if((state_val_33441 === (4))){
var inst_33431 = (state_33440[(2)]);
var inst_33432 = infinitelives.pixi.resources.fadeout.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_out);
var state_33440__$1 = (function (){var statearr_33444 = state_33440;
(statearr_33444[(9)] = inst_33431);

return statearr_33444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33440__$1,(5),inst_33432);
} else {
if((state_val_33441 === (5))){
var inst_33434 = (state_33440[(2)]);
var inst_33435 = new cljs.core.Keyword(null,"layer","layer",-1601820589).cljs$core$IFn$_invoke$arity$1(canvas);
var inst_33436 = layer.call(null,inst_33435);
var inst_33437 = inst_33436.removeChild(b);
var inst_33438 = cljs.core.async.close_BANG_.call(null,c);
var state_33440__$1 = (function (){var statearr_33445 = state_33440;
(statearr_33445[(10)] = inst_33437);

(statearr_33445[(11)] = inst_33434);

return statearr_33445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33440__$1,inst_33438);
} else {
return null;
}
}
}
}
}
});})(c__30056__auto___33456,c,b,map__33420,map__33420__$1,options,fade_in,fade_out))
;
return ((function (switch__29944__auto__,c__30056__auto___33456,c,b,map__33420,map__33420__$1,options,fade_in,fade_out){
return (function() {
var infinitelives$pixi$resources$state_machine__29945__auto__ = null;
var infinitelives$pixi$resources$state_machine__29945__auto____0 = (function (){
var statearr_33449 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33449[(0)] = infinitelives$pixi$resources$state_machine__29945__auto__);

(statearr_33449[(1)] = (1));

return statearr_33449;
});
var infinitelives$pixi$resources$state_machine__29945__auto____1 = (function (state_33440){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_33440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e33450){if((e33450 instanceof Object)){
var ex__29948__auto__ = e33450;
var statearr_33451_33457 = state_33440;
(statearr_33451_33457[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33458 = state_33440;
state_33440 = G__33458;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
infinitelives$pixi$resources$state_machine__29945__auto__ = function(state_33440){
switch(arguments.length){
case 0:
return infinitelives$pixi$resources$state_machine__29945__auto____0.call(this);
case 1:
return infinitelives$pixi$resources$state_machine__29945__auto____1.call(this,state_33440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
infinitelives$pixi$resources$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = infinitelives$pixi$resources$state_machine__29945__auto____0;
infinitelives$pixi$resources$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = infinitelives$pixi$resources$state_machine__29945__auto____1;
return infinitelives$pixi$resources$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___33456,c,b,map__33420,map__33420__$1,options,fade_in,fade_out))
})();
var state__30058__auto__ = (function (){var statearr_33452 = f__30057__auto__.call(null);
(statearr_33452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___33456);

return statearr_33452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___33456,c,b,map__33420,map__33420__$1,options,fade_in,fade_out))
);


return c;
});

infinitelives.pixi.resources.load_resources.cljs$lang$maxFixedArity = (3);

infinitelives.pixi.resources.load_resources.cljs$lang$applyTo = (function (seq33415){
var G__33416 = cljs.core.first.call(null,seq33415);
var seq33415__$1 = cljs.core.next.call(null,seq33415);
var G__33417 = cljs.core.first.call(null,seq33415__$1);
var seq33415__$2 = cljs.core.next.call(null,seq33415__$1);
var G__33418 = cljs.core.first.call(null,seq33415__$2);
var seq33415__$3 = cljs.core.next.call(null,seq33415__$2);
return infinitelives.pixi.resources.load_resources.cljs$core$IFn$_invoke$arity$variadic(G__33416,G__33417,G__33418,seq33415__$3);
});

//# sourceMappingURL=resources.js.map