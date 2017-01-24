// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6414__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
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
reagent.dom.roots = (function (){var G__14707 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14707) : cljs.core.atom.call(null,G__14707));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_14710 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_14710){
return (function (){
var _STAR_always_update_STAR_14711 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14711;
}});})(_STAR_always_update_STAR_14710))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14710;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
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
var args14712 = [];
var len__7489__auto___14715 = arguments.length;
var i__7490__auto___14716 = (0);
while(true){
if((i__7490__auto___14716 < len__7489__auto___14715)){
args14712.push((arguments[i__7490__auto___14716]));

var G__14717 = (i__7490__auto___14716 + (1));
i__7490__auto___14716 = G__14717;
continue;
} else {
}
break;
}

var G__14714 = args14712.length;
switch (G__14714) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14712.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
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
reagent.ratom.flush_BANG_();

var seq__14723_14727 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__14724_14728 = null;
var count__14725_14729 = (0);
var i__14726_14730 = (0);
while(true){
if((i__14726_14730 < count__14725_14729)){
var v_14731 = chunk__14724_14728.cljs$core$IIndexed$_nth$arity$2(null,i__14726_14730);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_14731);

var G__14732 = seq__14723_14727;
var G__14733 = chunk__14724_14728;
var G__14734 = count__14725_14729;
var G__14735 = (i__14726_14730 + (1));
seq__14723_14727 = G__14732;
chunk__14724_14728 = G__14733;
count__14725_14729 = G__14734;
i__14726_14730 = G__14735;
continue;
} else {
var temp__4657__auto___14736 = cljs.core.seq(seq__14723_14727);
if(temp__4657__auto___14736){
var seq__14723_14737__$1 = temp__4657__auto___14736;
if(cljs.core.chunked_seq_QMARK_(seq__14723_14737__$1)){
var c__7225__auto___14738 = cljs.core.chunk_first(seq__14723_14737__$1);
var G__14739 = cljs.core.chunk_rest(seq__14723_14737__$1);
var G__14740 = c__7225__auto___14738;
var G__14741 = cljs.core.count(c__7225__auto___14738);
var G__14742 = (0);
seq__14723_14727 = G__14739;
chunk__14724_14728 = G__14740;
count__14725_14729 = G__14741;
i__14726_14730 = G__14742;
continue;
} else {
var v_14743 = cljs.core.first(seq__14723_14737__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_14743);

var G__14744 = cljs.core.next(seq__14723_14737__$1);
var G__14745 = null;
var G__14746 = (0);
var G__14747 = (0);
seq__14723_14727 = G__14744;
chunk__14724_14728 = G__14745;
count__14725_14729 = G__14746;
i__14726_14730 = G__14747;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
