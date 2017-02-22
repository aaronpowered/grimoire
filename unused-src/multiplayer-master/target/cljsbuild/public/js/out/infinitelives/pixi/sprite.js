// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.pixi.sprite');
goog.require('cljs.core');
goog.require('cljsjs.pixi');
goog.require('infinitelives.utils.vec2');
goog.require('infinitelives.pixi.texture');
/**
 * Make a PIXI Point from x and y
 */
infinitelives.pixi.sprite.make_point = (function infinitelives$pixi$sprite$make_point(x,y){
return (new PIXI.Point(x,y));
});
/**
 * construct a sprite by its texture. optionally pass in other things
 */
infinitelives.pixi.sprite.make_sprite = (function infinitelives$pixi$sprite$make_sprite(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33135 = arguments.length;
var i__27063__auto___33136 = (0);
while(true){
if((i__27063__auto___33136 < len__27062__auto___33135)){
args__27069__auto__.push((arguments[i__27063__auto___33136]));

var G__33137 = (i__27063__auto___33136 + (1));
i__27063__auto___33136 = G__33137;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return infinitelives.pixi.sprite.make_sprite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

infinitelives.pixi.sprite.make_sprite.cljs$core$IFn$_invoke$arity$variadic = (function (texture,p__33132){
var map__33133 = p__33132;
var map__33133__$1 = ((((!((map__33133 == null)))?((((map__33133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33133):map__33133);
var x = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var mousedown = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074));
var visible = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var xhandle = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),0.5);
var y = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var tiling = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"tiling","tiling",-1693991967),false);
var rotation = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0));
var interactive = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"interactive","interactive",-2024078362));
var scale = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),(1));
var tint = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"tint","tint",-1286736913));
var tiling_width = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"tiling-width","tiling-width",-97440781));
var yhandle = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"yhandle","yhandle",608395252),0.5);
var tiling_height = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"tiling-height","tiling-height",-1474681674));
var alpha = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(1));
var s = (cljs.core.truth_(tiling)?(new PIXI.extras.TilingSprite((((texture instanceof cljs.core.Keyword))?infinitelives.pixi.texture.get.call(null,texture):texture),tiling_width,tiling_height)):(new PIXI.Sprite((((texture instanceof cljs.core.Keyword))?infinitelives.pixi.texture.get.call(null,texture):texture))));
if(cljs.core.truth_(s)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("creation of sprite failed and returned nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"s","s",-948495851,null)))].join('')));
}

s.anchor = infinitelives.pixi.sprite.make_point.call(null,xhandle,yhandle);

s.x = x;

s.y = y;

s.rotation = rotation;

s.visibile = visible;

if(cljs.core._EQ_.call(null,scale,(1))){
} else {
s.scale = ((typeof scale === 'number')?infinitelives.pixi.sprite.make_point.call(null,scale,scale):infinitelives.pixi.sprite.make_point.call(null,cljs.core.get.call(null,scale,(0)),cljs.core.get.call(null,scale,(1))));
}

if(cljs.core._EQ_.call(null,(1),alpha)){
} else {
s.alpha = alpha;
}

if((interactive == null)){
} else {
s.interactive = interactive;
}

if((mousedown == null)){
} else {
s.mousedown = mousedown;
}

if((tint == null)){
} else {
s.tint = tint;
}

return s;
});

infinitelives.pixi.sprite.make_sprite.cljs$lang$maxFixedArity = (1);

infinitelives.pixi.sprite.make_sprite.cljs$lang$applyTo = (function (seq33130){
var G__33131 = cljs.core.first.call(null,seq33130);
var seq33130__$1 = cljs.core.next.call(null,seq33130);
return infinitelives.pixi.sprite.make_sprite.cljs$core$IFn$_invoke$arity$variadic(G__33131,seq33130__$1);
});
infinitelives.pixi.sprite.set_pos_BANG_ = (function infinitelives$pixi$sprite$set_pos_BANG_(var_args){
var args33138 = [];
var len__27062__auto___33141 = arguments.length;
var i__27063__auto___33142 = (0);
while(true){
if((i__27063__auto___33142 < len__27062__auto___33141)){
args33138.push((arguments[i__27063__auto___33142]));

var G__33143 = (i__27063__auto___33142 + (1));
i__27063__auto___33142 = G__33143;
continue;
} else {
}
break;
}

var G__33140 = args33138.length;
switch (G__33140) {
case 3:
return infinitelives.pixi.sprite.set_pos_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return infinitelives.pixi.sprite.set_pos_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33138.length)].join('')));

}
});

infinitelives.pixi.sprite.set_pos_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sprite,x,y){
sprite.position.x = x;

return sprite.position.y = y;
});

infinitelives.pixi.sprite.set_pos_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sprite,pos){
if(cljs.core.vector_QMARK_.call(null,pos)){
return infinitelives.pixi.sprite.set_pos_BANG_.call(null,sprite,pos.call(null,(0)),pos.call(null,(1)));
} else {
return infinitelives.pixi.sprite.set_pos_BANG_.call(null,sprite,(pos[(0)]),(pos[(1)]));
}
});

infinitelives.pixi.sprite.set_pos_BANG_.cljs$lang$maxFixedArity = 3;
infinitelives.pixi.sprite.set_x_BANG_ = (function infinitelives$pixi$sprite$set_x_BANG_(sprite,x){
return sprite.x = x;
});
infinitelives.pixi.sprite.set_y_BANG_ = (function infinitelives$pixi$sprite$set_y_BANG_(sprite,y){
return sprite.y = y;
});
infinitelives.pixi.sprite.set_anchor_BANG_ = (function infinitelives$pixi$sprite$set_anchor_BANG_(sprite,x,y){
return sprite.anchor = infinitelives.pixi.sprite.make_point.call(null,x,y);
});
infinitelives.pixi.sprite.set_alpha_BANG_ = (function infinitelives$pixi$sprite$set_alpha_BANG_(sprite,alpha){
return sprite.alpha = alpha;
});
infinitelives.pixi.sprite.set_pivot_BANG_ = (function infinitelives$pixi$sprite$set_pivot_BANG_(sprite,x,y){
sprite.pivot.x = x;

return sprite.pivot.y = y;
});
infinitelives.pixi.sprite.set_scale_BANG_ = (function infinitelives$pixi$sprite$set_scale_BANG_(var_args){
var args33145 = [];
var len__27062__auto___33148 = arguments.length;
var i__27063__auto___33149 = (0);
while(true){
if((i__27063__auto___33149 < len__27062__auto___33148)){
args33145.push((arguments[i__27063__auto___33149]));

var G__33150 = (i__27063__auto___33149 + (1));
i__27063__auto___33149 = G__33150;
continue;
} else {
}
break;
}

var G__33147 = args33145.length;
switch (G__33147) {
case 2:
return infinitelives.pixi.sprite.set_scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return infinitelives.pixi.sprite.set_scale_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33145.length)].join('')));

}
});

infinitelives.pixi.sprite.set_scale_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sprite,s){
return sprite.scale = infinitelives.pixi.sprite.make_point.call(null,s,s);
});

infinitelives.pixi.sprite.set_scale_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sprite,sx,sy){
return sprite.scale = infinitelives.pixi.sprite.make_point.call(null,sx,sy);
});

infinitelives.pixi.sprite.set_scale_BANG_.cljs$lang$maxFixedArity = 3;
infinitelives.pixi.sprite.set_rotation_BANG_ = (function infinitelives$pixi$sprite$set_rotation_BANG_(sprite,theta){
return sprite.rotation = theta;
});
infinitelives.pixi.sprite.set_texture_BANG_ = (function infinitelives$pixi$sprite$set_texture_BANG_(sprite,tex){
if((tex instanceof cljs.core.Keyword)){
return sprite.texture = infinitelives.pixi.texture.get.call(null,tex);
} else {
return sprite.texture = tex;
}
});
infinitelives.pixi.sprite.set_visible_BANG_ = (function infinitelives$pixi$sprite$set_visible_BANG_(sprite,visibility){
return sprite.visible = visibility;
});
/**
 * return the position of sprite as a vec2.
 *   optionally pass in an x and y offset to add
 *   to the returned vector
 *   
 */
infinitelives.pixi.sprite.get_pos = (function infinitelives$pixi$sprite$get_pos(var_args){
var args__27069__auto__ = [];
var len__27062__auto___33156 = arguments.length;
var i__27063__auto___33157 = (0);
while(true){
if((i__27063__auto___33157 < len__27062__auto___33156)){
args__27069__auto__.push((arguments[i__27063__auto___33157]));

var G__33158 = (i__27063__auto___33157 + (1));
i__27063__auto___33157 = G__33158;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return infinitelives.pixi.sprite.get_pos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

infinitelives.pixi.sprite.get_pos.cljs$core$IFn$_invoke$arity$variadic = (function (sprite,p__33154){
var vec__33155 = p__33154;
var offset_x = cljs.core.nth.call(null,vec__33155,(0),null);
var offset_y = cljs.core.nth.call(null,vec__33155,(1),null);
return infinitelives.utils.vec2.vec2.call(null,((function (){var or__26004__auto__ = offset_x;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return (0);
}
})() + sprite.position.x),((function (){var or__26004__auto__ = offset_y;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return (0);
}
})() + sprite.position.y));
});

infinitelives.pixi.sprite.get_pos.cljs$lang$maxFixedArity = (1);

infinitelives.pixi.sprite.get_pos.cljs$lang$applyTo = (function (seq33152){
var G__33153 = cljs.core.first.call(null,seq33152);
var seq33152__$1 = cljs.core.next.call(null,seq33152);
return infinitelives.pixi.sprite.get_pos.cljs$core$IFn$_invoke$arity$variadic(G__33153,seq33152__$1);
});
infinitelives.pixi.sprite.get_x = (function infinitelives$pixi$sprite$get_x(sprite){
return sprite.position.x;
});
infinitelives.pixi.sprite.get_y = (function infinitelives$pixi$sprite$get_y(sprite){
return sprite.position.y;
});
infinitelives.pixi.sprite.get_xy = (function infinitelives$pixi$sprite$get_xy(sprite){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprite.position.x,sprite.position.y], null);
});

//# sourceMappingURL=sprite.js.map