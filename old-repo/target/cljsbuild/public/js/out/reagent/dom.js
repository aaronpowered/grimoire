// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__42645__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_51537 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_51537){
return (function (){
var _STAR_always_update_STAR_51538 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_51538;
}});})(_STAR_always_update_STAR_51537))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_51537;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args51539 = [];
var len__43720__auto___51542 = arguments.length;
var i__43721__auto___51543 = (0);
while(true){
if((i__43721__auto___51543 < len__43720__auto___51542)){
args51539.push((arguments[i__43721__auto___51543]));

var G__51544 = (i__43721__auto___51543 + (1));
i__43721__auto___51543 = G__51544;
continue;
} else {
}
break;
}

var G__51541 = args51539.length;
switch (G__51541) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51539.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__51550_51554 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__51551_51555 = null;
var count__51552_51556 = (0);
var i__51553_51557 = (0);
while(true){
if((i__51553_51557 < count__51552_51556)){
var v_51558 = cljs.core._nth.call(null,chunk__51551_51555,i__51553_51557);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_51558);

var G__51559 = seq__51550_51554;
var G__51560 = chunk__51551_51555;
var G__51561 = count__51552_51556;
var G__51562 = (i__51553_51557 + (1));
seq__51550_51554 = G__51559;
chunk__51551_51555 = G__51560;
count__51552_51556 = G__51561;
i__51553_51557 = G__51562;
continue;
} else {
var temp__4657__auto___51563 = cljs.core.seq.call(null,seq__51550_51554);
if(temp__4657__auto___51563){
var seq__51550_51564__$1 = temp__4657__auto___51563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51550_51564__$1)){
var c__43456__auto___51565 = cljs.core.chunk_first.call(null,seq__51550_51564__$1);
var G__51566 = cljs.core.chunk_rest.call(null,seq__51550_51564__$1);
var G__51567 = c__43456__auto___51565;
var G__51568 = cljs.core.count.call(null,c__43456__auto___51565);
var G__51569 = (0);
seq__51550_51554 = G__51566;
chunk__51551_51555 = G__51567;
count__51552_51556 = G__51568;
i__51553_51557 = G__51569;
continue;
} else {
var v_51570 = cljs.core.first.call(null,seq__51550_51564__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_51570);

var G__51571 = cljs.core.next.call(null,seq__51550_51564__$1);
var G__51572 = null;
var G__51573 = (0);
var G__51574 = (0);
seq__51550_51554 = G__51571;
chunk__51551_51555 = G__51572;
count__51552_51556 = G__51573;
i__51553_51557 = G__51574;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map