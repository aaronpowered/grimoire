// Compiled by ClojureScript 1.7.228 {}
goog.provide('chord.format.fressian');
goog.require('cljs.core');
goog.require('chord.format');
goog.require('fressian_cljs.core');
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"fressian","fressian",1554168117),(function (_){
if(typeof chord.format.fressian.t_chord$format$fressian33672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.fressian.t_chord$format$fressian33672 = (function (_,meta33673){
this._ = _;
this.meta33673 = meta33673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.fressian.t_chord$format$fressian33672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33674,meta33673__$1){
var self__ = this;
var _33674__$1 = this;
return (new chord.format.fressian.t_chord$format$fressian33672(self__._,meta33673__$1));
});

chord.format.fressian.t_chord$format$fressian33672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33674){
var self__ = this;
var _33674__$1 = this;
return self__.meta33673;
});

chord.format.fressian.t_chord$format$fressian33672.prototype.chord$format$ChordFormatter$ = true;

chord.format.fressian.t_chord$format$fressian33672.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return fressian_cljs.core.write.call(null,obj);
});

chord.format.fressian.t_chord$format$fressian33672.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return fressian_cljs.core.read.call(null,s);
});

chord.format.fressian.t_chord$format$fressian33672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33673","meta33673",1270866256,null)], null);
});

chord.format.fressian.t_chord$format$fressian33672.cljs$lang$type = true;

chord.format.fressian.t_chord$format$fressian33672.cljs$lang$ctorStr = "chord.format.fressian/t_chord$format$fressian33672";

chord.format.fressian.t_chord$format$fressian33672.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"chord.format.fressian/t_chord$format$fressian33672");
});

chord.format.fressian.__GT_t_chord$format$fressian33672 = (function chord$format$fressian$__GT_t_chord$format$fressian33672(___$1,meta33673){
return (new chord.format.fressian.t_chord$format$fressian33672(___$1,meta33673));
});

}

return (new chord.format.fressian.t_chord$format$fressian33672(_,cljs.core.PersistentArrayMap.EMPTY));
}));

//# sourceMappingURL=fressian.js.map