// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.utils.dom');
goog.require('cljs.core');
/**
 * Coerces strings and keywords to strings, while preserving namespace of
 * namespaced keywords
 */
infinitelives.utils.dom.as_str = (function infinitelives$utils$dom$as_str(s){
if((s instanceof cljs.core.Keyword)){
return [cljs.core.str((function (){var G__34521 = cljs.core.namespace.call(null,s);
if((G__34521 == null)){
return null;
} else {
return [cljs.core.str(G__34521),cljs.core.str("/")].join('');
}
})()),cljs.core.str(cljs.core.name.call(null,s))].join('');
} else {
return s;
}
});
infinitelives.utils.dom.parent = (function infinitelives$utils$dom$parent(elem){
return elem.parentNode;
});
infinitelives.utils.dom.children = (function infinitelives$utils$dom$children(elem){
return elem.children;
});
/**
 * Set the style of `elem` using key-value pairs:
 *    (set-style! elem :display "block" :color "red")
 */
infinitelives.utils.dom.set_style_BANG_ = (function infinitelives$utils$dom$set_style_BANG_(var_args){
var args__27069__auto__ = [];
var len__27062__auto___34530 = arguments.length;
var i__27063__auto___34531 = (0);
while(true){
if((i__27063__auto___34531 < len__27062__auto___34530)){
args__27069__auto__.push((arguments[i__27063__auto___34531]));

var G__34532 = (i__27063__auto___34531 + (1));
i__27063__auto___34531 = G__34532;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return infinitelives.utils.dom.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

infinitelives.utils.dom.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__34524_34533 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__34525_34534 = null;
var count__34526_34535 = (0);
var i__34527_34536 = (0);
while(true){
if((i__34527_34536 < count__34526_34535)){
var vec__34528_34537 = cljs.core._nth.call(null,chunk__34525_34534,i__34527_34536);
var k_34538 = cljs.core.nth.call(null,vec__34528_34537,(0),null);
var v_34539 = cljs.core.nth.call(null,vec__34528_34537,(1),null);
style.setProperty(infinitelives.utils.dom.as_str.call(null,k_34538),v_34539);

var G__34540 = seq__34524_34533;
var G__34541 = chunk__34525_34534;
var G__34542 = count__34526_34535;
var G__34543 = (i__34527_34536 + (1));
seq__34524_34533 = G__34540;
chunk__34525_34534 = G__34541;
count__34526_34535 = G__34542;
i__34527_34536 = G__34543;
continue;
} else {
var temp__4657__auto___34544 = cljs.core.seq.call(null,seq__34524_34533);
if(temp__4657__auto___34544){
var seq__34524_34545__$1 = temp__4657__auto___34544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34524_34545__$1)){
var c__26807__auto___34546 = cljs.core.chunk_first.call(null,seq__34524_34545__$1);
var G__34547 = cljs.core.chunk_rest.call(null,seq__34524_34545__$1);
var G__34548 = c__26807__auto___34546;
var G__34549 = cljs.core.count.call(null,c__26807__auto___34546);
var G__34550 = (0);
seq__34524_34533 = G__34547;
chunk__34525_34534 = G__34548;
count__34526_34535 = G__34549;
i__34527_34536 = G__34550;
continue;
} else {
var vec__34529_34551 = cljs.core.first.call(null,seq__34524_34545__$1);
var k_34552 = cljs.core.nth.call(null,vec__34529_34551,(0),null);
var v_34553 = cljs.core.nth.call(null,vec__34529_34551,(1),null);
style.setProperty(infinitelives.utils.dom.as_str.call(null,k_34552),v_34553);

var G__34554 = cljs.core.next.call(null,seq__34524_34545__$1);
var G__34555 = null;
var G__34556 = (0);
var G__34557 = (0);
seq__34524_34533 = G__34554;
chunk__34525_34534 = G__34555;
count__34526_34535 = G__34556;
i__34527_34536 = G__34557;
continue;
}
} else {
}
}
break;
}

return elem;
});

infinitelives.utils.dom.set_style_BANG_.cljs$lang$maxFixedArity = (1);

infinitelives.utils.dom.set_style_BANG_.cljs$lang$applyTo = (function (seq34522){
var G__34523 = cljs.core.first.call(null,seq34522);
var seq34522__$1 = cljs.core.next.call(null,seq34522);
return infinitelives.utils.dom.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34523,seq34522__$1);
});
/**
 * Append `child` to `parent`
 */
infinitelives.utils.dom.append_BANG_ = (function infinitelives$utils$dom$append_BANG_(parent,child){
var G__34559 = parent;
G__34559.appendChild(child);

return G__34559;
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
infinitelives.utils.dom.remove_BANG_ = (function infinitelives$utils$dom$remove_BANG_(var_args){
var args34560 = [];
var len__27062__auto___34564 = arguments.length;
var i__27063__auto___34565 = (0);
while(true){
if((i__27063__auto___34565 < len__27062__auto___34564)){
args34560.push((arguments[i__27063__auto___34565]));

var G__34566 = (i__27063__auto___34565 + (1));
i__27063__auto___34565 = G__34566;
continue;
} else {
}
break;
}

var G__34562 = args34560.length;
switch (G__34562) {
case 1:
return infinitelives.utils.dom.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return infinitelives.utils.dom.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34560.length)].join('')));

}
});

infinitelives.utils.dom.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = infinitelives.utils.dom.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return infinitelives.utils.dom.remove_BANG_.call(null,p,elem);
});

infinitelives.utils.dom.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__34563 = p;
G__34563.removeChild(elem);

return G__34563;
});

infinitelives.utils.dom.remove_BANG_.cljs$lang$maxFixedArity = 2;
infinitelives.utils.dom.create_element = (function infinitelives$utils$dom$create_element(var_args){
var args34568 = [];
var len__27062__auto___34571 = arguments.length;
var i__27063__auto___34572 = (0);
while(true){
if((i__27063__auto___34572 < len__27062__auto___34571)){
args34568.push((arguments[i__27063__auto___34572]));

var G__34573 = (i__27063__auto___34572 + (1));
i__27063__auto___34572 = G__34573;
continue;
} else {
}
break;
}

var G__34570 = args34568.length;
switch (G__34570) {
case 1:
return infinitelives.utils.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return infinitelives.utils.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34568.length)].join('')));

}
});

infinitelives.utils.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(infinitelives.utils.dom.as_str.call(null,tag));
});

infinitelives.utils.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(infinitelives.utils.dom.as_str.call(null,tag_ns),infinitelives.utils.dom.as_str.call(null,tag));
});

infinitelives.utils.dom.create_element.cljs$lang$maxFixedArity = 2;
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
infinitelives.utils.dom.insert_before_BANG_ = (function infinitelives$utils$dom$insert_before_BANG_(elem,other){
var p = infinitelives.utils.dom.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 *     (set-attr! elem :disabled)
 * With values, the function takes variadic kv pairs:
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
infinitelives.utils.dom.set_attr_BANG_ = (function infinitelives$utils$dom$set_attr_BANG_(var_args){
var args34575 = [];
var len__27062__auto___34590 = arguments.length;
var i__27063__auto___34591 = (0);
while(true){
if((i__27063__auto___34591 < len__27062__auto___34590)){
args34575.push((arguments[i__27063__auto___34591]));

var G__34592 = (i__27063__auto___34591 + (1));
i__27063__auto___34591 = G__34592;
continue;
} else {
}
break;
}

var G__34581 = args34575.length;
switch (G__34581) {
case 2:
return infinitelives.utils.dom.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return infinitelives.utils.dom.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__27081__auto__ = (new cljs.core.IndexedSeq(args34575.slice((3)),(0)));
return infinitelives.utils.dom.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27081__auto__);

}
});

infinitelives.utils.dom.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return infinitelives.utils.dom.set_attr_BANG_.call(null,elem,k,infinitelives.utils.dom.as_str.call(null,k));
});

infinitelives.utils.dom.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = infinitelives.utils.dom.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__34582 = elem;
(G__34582[k__$1] = v);

return G__34582;
} else {
var G__34583 = elem;
G__34583.setAttribute(k__$1,v);

return G__34583;
}
} else {
return null;
}
});

infinitelives.utils.dom.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__34584_34594 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__34585_34595 = null;
var count__34586_34596 = (0);
var i__34587_34597 = (0);
while(true){
if((i__34587_34597 < count__34586_34596)){
var vec__34588_34598 = cljs.core._nth.call(null,chunk__34585_34595,i__34587_34597);
var k_34599__$1 = cljs.core.nth.call(null,vec__34588_34598,(0),null);
var v_34600__$1 = cljs.core.nth.call(null,vec__34588_34598,(1),null);
infinitelives.utils.dom.set_attr_BANG_.call(null,elem,k_34599__$1,v_34600__$1);

var G__34601 = seq__34584_34594;
var G__34602 = chunk__34585_34595;
var G__34603 = count__34586_34596;
var G__34604 = (i__34587_34597 + (1));
seq__34584_34594 = G__34601;
chunk__34585_34595 = G__34602;
count__34586_34596 = G__34603;
i__34587_34597 = G__34604;
continue;
} else {
var temp__4657__auto___34605 = cljs.core.seq.call(null,seq__34584_34594);
if(temp__4657__auto___34605){
var seq__34584_34606__$1 = temp__4657__auto___34605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34584_34606__$1)){
var c__26807__auto___34607 = cljs.core.chunk_first.call(null,seq__34584_34606__$1);
var G__34608 = cljs.core.chunk_rest.call(null,seq__34584_34606__$1);
var G__34609 = c__26807__auto___34607;
var G__34610 = cljs.core.count.call(null,c__26807__auto___34607);
var G__34611 = (0);
seq__34584_34594 = G__34608;
chunk__34585_34595 = G__34609;
count__34586_34596 = G__34610;
i__34587_34597 = G__34611;
continue;
} else {
var vec__34589_34612 = cljs.core.first.call(null,seq__34584_34606__$1);
var k_34613__$1 = cljs.core.nth.call(null,vec__34589_34612,(0),null);
var v_34614__$1 = cljs.core.nth.call(null,vec__34589_34612,(1),null);
infinitelives.utils.dom.set_attr_BANG_.call(null,elem,k_34613__$1,v_34614__$1);

var G__34615 = cljs.core.next.call(null,seq__34584_34606__$1);
var G__34616 = null;
var G__34617 = (0);
var G__34618 = (0);
seq__34584_34594 = G__34615;
chunk__34585_34595 = G__34616;
count__34586_34596 = G__34617;
i__34587_34597 = G__34618;
continue;
}
} else {
}
}
break;
}

return elem;
});

infinitelives.utils.dom.set_attr_BANG_.cljs$lang$applyTo = (function (seq34576){
var G__34577 = cljs.core.first.call(null,seq34576);
var seq34576__$1 = cljs.core.next.call(null,seq34576);
var G__34578 = cljs.core.first.call(null,seq34576__$1);
var seq34576__$2 = cljs.core.next.call(null,seq34576__$1);
var G__34579 = cljs.core.first.call(null,seq34576__$2);
var seq34576__$3 = cljs.core.next.call(null,seq34576__$2);
return infinitelives.utils.dom.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34577,G__34578,G__34579,seq34576__$3);
});

infinitelives.utils.dom.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
infinitelives.utils.dom.set_text_BANG_ = (function infinitelives$utils$dom$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
infinitelives.utils.dom.set_html_BANG_ = (function infinitelives$utils$dom$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
infinitelives.utils.dom.get_bounds = (function infinitelives$utils$dom$get_bounds(id){

return document.getElementById(id).getBoundingClientRect();
});
infinitelives.utils.dom.collision_test_by_id = (function infinitelives$utils$dom$collision_test_by_id(id_a,id_b){

var bounds_a = infinitelives.utils.dom.get_bounds.call(null,id_a);
var bounds_b = infinitelives.utils.dom.get_bounds.call(null,id_b);
return !(((bounds_a.right < bounds_b.left)) || ((bounds_a.left > bounds_b.right)) || ((bounds_a.bottom < bounds_b.top)) || ((bounds_a.top > bounds_b.bottom)));
});

//# sourceMappingURL=dom.js.map