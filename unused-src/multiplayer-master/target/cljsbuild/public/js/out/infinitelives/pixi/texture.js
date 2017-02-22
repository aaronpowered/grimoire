// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.pixi.texture');
goog.require('cljs.core');
goog.require('cljsjs.pixi');
infinitelives.pixi.texture.sub_texture = (function infinitelives$pixi$texture$sub_texture(texture,p__33088,p__33089){
var vec__33092 = p__33088;
var x = cljs.core.nth.call(null,vec__33092,(0),null);
var y = cljs.core.nth.call(null,vec__33092,(1),null);
var vec__33093 = p__33089;
var w = cljs.core.nth.call(null,vec__33093,(0),null);
var h = cljs.core.nth.call(null,vec__33093,(1),null);
return (new PIXI.Texture(texture,(new PIXI.Rectangle(x,y,w,h))));
});
if(typeof infinitelives.pixi.texture.texture_store !== 'undefined'){
} else {
infinitelives.pixi.texture.texture_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
infinitelives.pixi.texture.add_BANG_ = (function infinitelives$pixi$texture$add_BANG_(key,texture){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.texture.texture_store,cljs.core.assoc,key,texture);
});
infinitelives.pixi.texture.remove_BANG_ = (function infinitelives$pixi$texture$remove_BANG_(key){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.texture.texture_store,cljs.core.dissoc,key);
});
infinitelives.pixi.texture.get = (function infinitelives$pixi$texture$get(key){
return cljs.core.deref.call(null,infinitelives.pixi.texture.texture_store).call(null,key);
});
infinitelives.pixi.texture.set_texture_BANG_ = (function infinitelives$pixi$texture$set_texture_BANG_(key,texture){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.texture.texture_store,cljs.core.assoc,key,texture);
});
infinitelives.pixi.texture.load_sprite_sheet_BANG_ = (function infinitelives$pixi$texture$load_sprite_sheet_BANG_(texture,asset_description){
return cljs.core.swap_BANG_.call(null,infinitelives.pixi.texture.texture_store,(function (p1__33094_SHARP_){
return cljs.core.into.call(null,p1__33094_SHARP_,(function (){var iter__26776__auto__ = (function infinitelives$pixi$texture$load_sprite_sheet_BANG__$_iter__33111(s__33112){
return (new cljs.core.LazySeq(null,(function (){
var s__33112__$1 = s__33112;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33112__$1);
if(temp__4657__auto__){
var s__33112__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33112__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__33112__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__33114 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__33113 = (0);
while(true){
if((i__33113 < size__26775__auto__)){
var vec__33121 = cljs.core._nth.call(null,c__26774__auto__,i__33113);
var key = cljs.core.nth.call(null,vec__33121,(0),null);
var map__33122 = cljs.core.nth.call(null,vec__33121,(1),null);
var map__33122__$1 = ((((!((map__33122 == null)))?((((map__33122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33122):map__33122);
var pos = cljs.core.get.call(null,map__33122__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var size = cljs.core.get.call(null,map__33122__$1,new cljs.core.Keyword(null,"size","size",1098693007));
cljs.core.chunk_append.call(null,b__33114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,infinitelives.pixi.texture.sub_texture.call(null,texture,pos,size)], null));

var G__33127 = (i__33113 + (1));
i__33113 = G__33127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33114),infinitelives$pixi$texture$load_sprite_sheet_BANG__$_iter__33111.call(null,cljs.core.chunk_rest.call(null,s__33112__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33114),null);
}
} else {
var vec__33124 = cljs.core.first.call(null,s__33112__$2);
var key = cljs.core.nth.call(null,vec__33124,(0),null);
var map__33125 = cljs.core.nth.call(null,vec__33124,(1),null);
var map__33125__$1 = ((((!((map__33125 == null)))?((((map__33125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33125):map__33125);
var pos = cljs.core.get.call(null,map__33125__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var size = cljs.core.get.call(null,map__33125__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,infinitelives.pixi.texture.sub_texture.call(null,texture,pos,size)], null),infinitelives$pixi$texture$load_sprite_sheet_BANG__$_iter__33111.call(null,cljs.core.rest.call(null,s__33112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26776__auto__.call(null,asset_description);
})());
}));
});

//# sourceMappingURL=texture.js.map