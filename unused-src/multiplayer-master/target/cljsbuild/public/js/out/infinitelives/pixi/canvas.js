// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.pixi.canvas');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('infinitelives.utils.events');
goog.require('infinitelives.utils.dom');
goog.require('infinitelives.utils.console');
goog.require('cljsjs.pixi');
infinitelives.pixi.canvas.canvas_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
infinitelives.pixi.canvas.add_BANG_ = (function infinitelives$pixi$canvas$add_BANG_(var_args){
var args34621 = [];
var len__27062__auto___34624 = arguments.length;
var i__27063__auto___34625 = (0);
while(true){
if((i__27063__auto___34625 < len__27062__auto___34624)){
args34621.push((arguments[i__27063__auto___34625]));

var G__34626 = (i__27063__auto___34625 + (1));
i__27063__auto___34625 = G__34626;
continue;
} else {
}
break;
}

var G__34623 = args34621.length;
switch (G__34623) {
case 2:
return infinitelives.pixi.canvas.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return infinitelives.pixi.canvas.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34621.length)].join('')));

}
});

infinitelives.pixi.canvas.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (key,canvas){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.canvas.canvas_store,cljs.core.assoc,key,canvas);
});

infinitelives.pixi.canvas.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (canvas){
return infinitelives.pixi.canvas.add_BANG_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),canvas);
});

infinitelives.pixi.canvas.add_BANG_.cljs$lang$maxFixedArity = 2;
infinitelives.pixi.canvas.set_default_once_BANG_ = (function infinitelives$pixi$canvas$set_default_once_BANG_(canvas){
if(cljs.core.truth_(new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infinitelives.pixi.canvas.canvas_store)))){
return null;
} else {
return infinitelives.pixi.canvas.add_BANG_.call(null,canvas);
}
});
infinitelives.pixi.canvas.remove_BANG_ = (function infinitelives$pixi$canvas$remove_BANG_(key){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.canvas.canvas_store,cljs.core.dissoc,key);
});
infinitelives.pixi.canvas.get = (function infinitelives$pixi$canvas$get(var_args){
var args34628 = [];
var len__27062__auto___34631 = arguments.length;
var i__27063__auto___34632 = (0);
while(true){
if((i__27063__auto___34632 < len__27062__auto___34631)){
args34628.push((arguments[i__27063__auto___34632]));

var G__34633 = (i__27063__auto___34632 + (1));
i__27063__auto___34632 = G__34633;
continue;
} else {
}
break;
}

var G__34630 = args34628.length;
switch (G__34630) {
case 1:
return infinitelives.pixi.canvas.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return infinitelives.pixi.canvas.get.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34628.length)].join('')));

}
});

infinitelives.pixi.canvas.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return key.call(null,cljs.core.deref.call(null,infinitelives.pixi.canvas.canvas_store));
});

infinitelives.pixi.canvas.get.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infinitelives.pixi.canvas.canvas_store));
});

infinitelives.pixi.canvas.get.cljs$lang$maxFixedArity = 1;
/**
 * make a new pixi canvas, or initialise pixi with an existing canvas.
 * 
 *   Pass in...
 * 
 *   :expand        if true makes the canvas take the entire window
 *   :engine        can be :webgl :canvas or :auto (default :auto)
 * 
 *   and either:
 * 
 *   :canvas        a DOM element to use as the canvas
 * 
 *   or:
 * 
 *   :x             x position for the new canvas
 *   :y             y position for the new canvas
 *   :width         width of new canvas
 *   :height        height of new canvas
 */
infinitelives.pixi.canvas.make = (function infinitelives$pixi$canvas$make(p__34635){
var map__34639 = p__34635;
var map__34639__$1 = ((((!((map__34639 == null)))?((((map__34639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34639):map__34639);
var expand = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"expand","expand",595248157),false);
var x = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var width = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"width","width",-384071477),(800));
var height = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"height","height",1025178622),(600));
var canvas = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var engine = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492));
var background = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"background","background",-863952629),(5242880));
var fswidth = window.innerWidth;
var fsheight = window.innerHeight;
var wid = (cljs.core.truth_(expand)?fswidth:width);
var hig = (cljs.core.truth_(expand)?fsheight:height);
var opts = {"backgroundColor": background, "transparent": false, "imageSmoothingEnabled": false, "antialias": false, "autoResize": false, "clearBeforeRender": true, "preserveDrawingBuffer": false, "view": canvas, "resolution": (1)};
var rend = (function (){var G__34641 = (((engine instanceof cljs.core.Keyword))?engine.fqn:null);
switch (G__34641) {
case "webgl":
return (new PIXI.WebGLRenderer(wid,hig,opts));

break;
case "canvas":
return (new PIXI.CanvasRenderer(wid,hig,opts));

break;
default:
return (new PIXI.autoDetectRenderer(wid,hig,opts));

}
})();
var actual_canvas = rend.view;
var canvas_width = actual_canvas.width;
var canvas_height = actual_canvas.height;
if(cljs.core.truth_(canvas)){
} else {
infinitelives.utils.dom.set_style_BANG_.call(null,actual_canvas,new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.truth_(expand)?(0):x),new cljs.core.Keyword(null,"top","top",-1856271961),(cljs.core.truth_(expand)?(0):y),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute");

infinitelives.utils.dom.append_BANG_.call(null,document.body,actual_canvas);
}

var wind_width_34643 = (cljs.core.truth_(expand)?fswidth:canvas_width);
var wind_height_34644 = (cljs.core.truth_(expand)?fsheight:canvas_height);
var middle_x_34645 = Math.round((wind_width_34643 / (2)));
var middle_y_34646 = Math.round((wind_height_34644 / (2)));
rend.resize(wind_width_34643,wind_height_34644);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),rend,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),(function (){var or__26004__auto__ = canvas;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return actual_canvas;
}
})()], null);
});
/**
 * Layout the stage structure
 */
infinitelives.pixi.canvas.make_stage = (function infinitelives$pixi$canvas$make_stage(p__34647){
var map__34658 = p__34647;
var map__34658__$1 = ((((!((map__34658 == null)))?((((map__34658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34658):map__34658);
var layers = cljs.core.get.call(null,map__34658__$1,new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"below","below",-926774883),new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"above","above",-1286866470),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"effect","effect",347343289)], null));
var origins = cljs.core.get.call(null,map__34658__$1,new cljs.core.Keyword(null,"origins","origins",-1970258462),cljs.core.PersistentArrayMap.EMPTY);
var stage = (new PIXI.Container());
var containers = cljs.core.map.call(null,((function (stage,map__34658,map__34658__$1,layers,origins){
return (function (){
return (new PIXI.Container());
});})(stage,map__34658,map__34658__$1,layers,origins))
,layers);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"origins","origins",-1970258462),origins,new cljs.core.Keyword(null,"layers","layers",1944875032),layers,new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26776__auto__ = ((function (stage,containers,map__34658,map__34658__$1,layers,origins){
return (function infinitelives$pixi$canvas$make_stage_$_iter__34660(s__34661){
return (new cljs.core.LazySeq(null,((function (stage,containers,map__34658,map__34658__$1,layers,origins){
return (function (){
var s__34661__$1 = s__34661;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34661__$1);
if(temp__4657__auto__){
var s__34661__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34661__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__34661__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__34663 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__34662 = (0);
while(true){
if((i__34662 < size__26775__auto__)){
var vec__34666 = cljs.core._nth.call(null,c__26774__auto__,i__34662);
var k = cljs.core.nth.call(null,vec__34666,(0),null);
var v = cljs.core.nth.call(null,vec__34666,(1),null);
cljs.core.chunk_append.call(null,b__34663,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34668 = (i__34662 + (1));
i__34662 = G__34668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34663),infinitelives$pixi$canvas$make_stage_$_iter__34660.call(null,cljs.core.chunk_rest.call(null,s__34661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34663),null);
}
} else {
var vec__34667 = cljs.core.first.call(null,s__34661__$2);
var k = cljs.core.nth.call(null,vec__34667,(0),null);
var v = cljs.core.nth.call(null,vec__34667,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),infinitelives$pixi$canvas$make_stage_$_iter__34660.call(null,cljs.core.rest.call(null,s__34661__$2)));
}
} else {
return null;
}
break;
}
});})(stage,containers,map__34658,map__34658__$1,layers,origins))
,null,null));
});})(stage,containers,map__34658,map__34658__$1,layers,origins))
;
return iter__26776__auto__.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,layers,containers)));
})())], null);
});
infinitelives.pixi.canvas.center_container_BANG_ = (function infinitelives$pixi$canvas$center_container_BANG_(canvas,layer,edge){
var canvas_width = canvas.width;
var canvas_height = canvas.height;
var middle_x = Math.round((canvas_width / (2)));
var middle_y = Math.round((canvas_height / (2)));
var G__34670 = (((edge instanceof cljs.core.Keyword))?edge.fqn:null);
switch (G__34670) {
case "center":
layer.position.x = middle_x;

return layer.position.y = middle_y;

break;
case "top":
layer.position.x = middle_x;

return layer.position.y = (0);

break;
case "bottom":
layer.position.x = middle_x;

return layer.position.y = canvas_height;

break;
case "left":
layer.position.x = (0);

return layer.position.y = middle_y;

break;
case "right":
layer.position.x = canvas_width;

return layer.position.y = middle_y;

break;
case "top-left":
layer.position.x = (0);

return layer.position.y = (0);

break;
case "top-right":
layer.position.x = canvas_width;

return layer.position.y = (0);

break;
case "bottom-left":
layer.position.x = (0);

return layer.position.y = canvas_height;

break;
case "bottom-right":
layer.position.x = canvas_width;

return layer.position.y = canvas_height;

break;
default:
layer.position.x = middle_x;

return layer.position.y = middle_y;

}
});
/**
 * Initialise the canvas element. Pass in optional keys
 * 
 *   :background    background colour (default 0x000000)
 *   :expand        if true makes the canvas take the entire window
 *   :engine        can be :webgl :canvas or :auto (default :auto)
 *   :layers        A list of keywords to refer to layers, from bottom to top
 *   :origins       A mapping of layer names to their origin positions. Default
 *               position is center. Positions can be :center :top :bottom
 *               :left :right :top-left :top-right :bottom-left :bottom-right
 * 
 *   and either:
 * 
 *   :canvas        a DOM element to use as the canvas
 * 
 *   or:
 * 
 *   :x             x position for the new canvas
 *   :y             y position for the new canvas
 *   :width         width of new canvas
 *   :height        height of new canvas
 *   
 */
infinitelives.pixi.canvas.init = (function infinitelives$pixi$canvas$init(opts){
var map__34710 = cljs.core.into.call(null,infinitelives.pixi.canvas.make.call(null,opts),infinitelives.pixi.canvas.make_stage.call(null,opts));
var map__34710__$1 = ((((!((map__34710 == null)))?((((map__34710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34710):map__34710);
var world = map__34710__$1;
var renderer = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var canvas = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var layer = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var layers = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var stage = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var origins = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"origins","origins",-1970258462),cljs.core.PersistentArrayMap.EMPTY);
var fullscreen_button = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"fullscreen-button","fullscreen-button",1597770110));
cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function (p__34712){
var vec__34713 = p__34712;
var name = cljs.core.nth.call(null,vec__34713,(0),null);
var layer_obj = cljs.core.nth.call(null,vec__34713,(1),null);
stage.addChild(layer_obj);

return infinitelives.pixi.canvas.center_container_BANG_.call(null,canvas,layer_obj,(function (){var or__26004__auto__ = origins.call(null,name);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return new cljs.core.Keyword(null,"center","center",-748944368);
}
})());
});})(map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
,layer));

renderer.render(stage);

var render_fn = ((function (map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function (){
return renderer.render(stage);
});})(map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
;
var resize_fn = ((function (render_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function (width,height){
renderer.resize(width,height);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (render_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function (p__34714){
var vec__34715 = p__34714;
var name = cljs.core.nth.call(null,vec__34715,(0),null);
var layer_obj = cljs.core.nth.call(null,vec__34715,(1),null);
return infinitelives.pixi.canvas.center_container_BANG_.call(null,canvas,layer_obj,(function (){var or__26004__auto__ = origins.call(null,name);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return new cljs.core.Keyword(null,"center","center",-748944368);
}
})());
});})(render_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
,layer));
});})(render_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
;
var expand_fn = ((function (render_fn,resize_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function (){
return resize_fn.call(null,window.innerWidth,window.innerHeight);
});})(render_fn,resize_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
;
var fullscreen_fn = ((function (render_fn,resize_fn,expand_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function (fullscreen){
if(cljs.core.truth_(fullscreen)){
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.webkitRequestFullscreen)){
return canvas.webkitRequestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return null;
}
}
}
} else {
if(cljs.core.truth_(document.exitFullscreen)){
return document.exitFullscreen();
} else {
if(cljs.core.truth_(document.webkitExitFullscreen)){
return document.webkitExitFullscreen();
} else {
if(cljs.core.truth_(document.msExitFullscreen)){
return document.msExitFullscreen();
} else {
if(cljs.core.truth_(document.mozCancelFullScreen)){
return document.mozCancelFullScreen();
} else {
return null;
}
}
}
}
}
});})(render_fn,resize_fn,expand_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
;
var resizer_loop = (cljs.core.truth_(new cljs.core.Keyword(null,"expand","expand",595248157).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var c = infinitelives.utils.events.new_resize_chan.call(null);
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__,c,render_fn,resize_fn,expand_fn,fullscreen_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__,c,render_fn,resize_fn,expand_fn,fullscreen_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function (state_34732){
var state_val_34733 = (state_34732[(1)]);
if((state_val_34733 === (1))){
var state_34732__$1 = state_34732;
var statearr_34734_34748 = state_34732__$1;
(statearr_34734_34748[(2)] = null);

(statearr_34734_34748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (2))){
var state_34732__$1 = state_34732;
var statearr_34735_34749 = state_34732__$1;
(statearr_34735_34749[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (3))){
var inst_34730 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34732__$1,inst_34730);
} else {
if((state_val_34733 === (4))){
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(7),c);
} else {
if((state_val_34733 === (5))){
var state_34732__$1 = state_34732;
var statearr_34737_34750 = state_34732__$1;
(statearr_34737_34750[(2)] = null);

(statearr_34737_34750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (6))){
var inst_34728 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34738_34751 = state_34732__$1;
(statearr_34738_34751[(2)] = inst_34728);

(statearr_34738_34751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (7))){
var inst_34720 = (state_34732[(2)]);
var inst_34721 = cljs.core.nth.call(null,inst_34720,(0),null);
var inst_34722 = cljs.core.nth.call(null,inst_34720,(1),null);
var inst_34723 = resize_fn.call(null,inst_34721,inst_34722);
var inst_34724 = render_fn.call(null);
var state_34732__$1 = (function (){var statearr_34739 = state_34732;
(statearr_34739[(7)] = inst_34724);

(statearr_34739[(8)] = inst_34723);

return statearr_34739;
})();
var statearr_34740_34752 = state_34732__$1;
(statearr_34740_34752[(2)] = null);

(statearr_34740_34752[(1)] = (2));


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
});})(c__30056__auto__,c,render_fn,resize_fn,expand_fn,fullscreen_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
;
return ((function (switch__29944__auto__,c__30056__auto__,c,render_fn,resize_fn,expand_fn,fullscreen_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function() {
var infinitelives$pixi$canvas$init_$_state_machine__29945__auto__ = null;
var infinitelives$pixi$canvas$init_$_state_machine__29945__auto____0 = (function (){
var statearr_34744 = [null,null,null,null,null,null,null,null,null];
(statearr_34744[(0)] = infinitelives$pixi$canvas$init_$_state_machine__29945__auto__);

(statearr_34744[(1)] = (1));

return statearr_34744;
});
var infinitelives$pixi$canvas$init_$_state_machine__29945__auto____1 = (function (state_34732){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_34732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e34745){if((e34745 instanceof Object)){
var ex__29948__auto__ = e34745;
var statearr_34746_34753 = state_34732;
(statearr_34746_34753[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34754 = state_34732;
state_34732 = G__34754;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
infinitelives$pixi$canvas$init_$_state_machine__29945__auto__ = function(state_34732){
switch(arguments.length){
case 0:
return infinitelives$pixi$canvas$init_$_state_machine__29945__auto____0.call(this);
case 1:
return infinitelives$pixi$canvas$init_$_state_machine__29945__auto____1.call(this,state_34732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
infinitelives$pixi$canvas$init_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = infinitelives$pixi$canvas$init_$_state_machine__29945__auto____0;
infinitelives$pixi$canvas$init_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = infinitelives$pixi$canvas$init_$_state_machine__29945__auto____1;
return infinitelives$pixi$canvas$init_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__,c,render_fn,resize_fn,expand_fn,fullscreen_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
})();
var state__30058__auto__ = (function (){var statearr_34747 = f__30057__auto__.call(null);
(statearr_34747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_34747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__,c,render_fn,resize_fn,expand_fn,fullscreen_fn,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
);

return c__30056__auto__;
})():null);
infinitelives.pixi.canvas.render = ((function (render_fn,resize_fn,expand_fn,fullscreen_fn,resizer_loop,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button){
return (function infinitelives$pixi$canvas$init_$_render(){
infinitelives.utils.events.request_animation_frame.call(null,infinitelives$pixi$canvas$init_$_render);

return render_fn.call(null);
});})(render_fn,resize_fn,expand_fn,fullscreen_fn,resizer_loop,map__34710,map__34710__$1,world,renderer,canvas,layer,layers,stage,origins,fullscreen_button))
;

infinitelives.pixi.canvas.render.call(null);

fullscreen_fn.call(null);

var canvas__$1 = cljs.core.into.call(null,world,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn,new cljs.core.Keyword(null,"resize-fn","resize-fn",2017140158),resize_fn,new cljs.core.Keyword(null,"fullscreen-fn","fullscreen-fn",1444163170),fullscreen_fn,new cljs.core.Keyword(null,"expand-fn","expand-fn",492373783),expand_fn], null));
infinitelives.pixi.canvas.set_default_once_BANG_.call(null,canvas__$1);

return canvas__$1;
});
infinitelives.pixi.canvas.add_fullscreen_button_BANG_ = (function infinitelives$pixi$canvas$add_fullscreen_button_BANG_(p__34755){
var map__34758 = p__34755;
var map__34758__$1 = ((((!((map__34758 == null)))?((((map__34758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34758):map__34758);
var fullscreen_fn = cljs.core.get.call(null,map__34758__$1,new cljs.core.Keyword(null,"fullscreen-fn","fullscreen-fn",1444163170));
var div = infinitelives.utils.dom.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var img = infinitelives.utils.dom.create_element.call(null,new cljs.core.Keyword(null,"img","img",1442687358));
infinitelives.utils.dom.append_BANG_.call(null,div,img);

img.src = "http://runrunitshim.com/images/fullscreenIcon.png";

img.setAttribute("style","bottom: 0; position: absolute; padding-bottom: 0px; padding-left: 0px; z-index: 200;");

div.setAttribute("style","bottom: 0; position: absolute; padding-bottom: 0px; padding-left: 0px; z-index: 200;");

img.addEventListener("click",((function (div,img,map__34758,map__34758__$1,fullscreen_fn){
return (function (){
return fullscreen_fn.call(null,true);
});})(div,img,map__34758,map__34758__$1,fullscreen_fn))
);

infinitelives.utils.dom.append_BANG_.call(null,document.body,div);

return div;
});

//# sourceMappingURL=canvas.js.map