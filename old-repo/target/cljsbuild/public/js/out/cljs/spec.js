// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__43308__auto__ = (((spec == null))?null:spec);
var m__43309__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,spec,x);
} else {
var m__43309__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__43308__auto__ = (((spec == null))?null:spec);
var m__43309__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,spec,y);
} else {
var m__43309__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__43308__auto__ = (((spec == null))?null:spec);
var m__43309__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,spec,path,via,in$,x);
} else {
var m__43309__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__43308__auto__ = (((spec == null))?null:spec);
var m__43309__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__43309__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__43308__auto__ = (((spec == null))?null:spec);
var m__43309__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,spec,gfn);
} else {
var m__43309__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__43308__auto__ = (((spec == null))?null:spec);
var m__43309__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,spec);
} else {
var m__43309__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__53308 = cljs.core.get.call(null,reg,spec);
spec = G__53308;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__42645__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__42633__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__42633__auto__){
return x;
} else {
return and__42633__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__42633__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__42633__auto__)){
return x;
} else {
return and__42633__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__42645__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
var or__42645__auto____$2 = (function (){var and__42633__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__42633__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__42633__auto__;
}
})();
if(cljs.core.truth_(or__42645__auto____$2)){
return or__42645__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__42645__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__42645__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__42633__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__42633__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__42633__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__42633__auto__ = (form instanceof cljs.core.Symbol);
if(and__42633__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__42633__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__43631__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53353_53393 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53354_53394 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53353_53393,_STAR_print_fn_STAR_53354_53394,sb__43631__auto__){
return (function (x__43632__auto__){
return sb__43631__auto__.append(x__43632__auto__);
});})(_STAR_print_newline_STAR_53353_53393,_STAR_print_fn_STAR_53354_53394,sb__43631__auto__))
;

try{var seq__53355_53395 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__53356_53396 = null;
var count__53357_53397 = (0);
var i__53358_53398 = (0);
while(true){
if((i__53358_53398 < count__53357_53397)){
var map__53359_53399 = cljs.core._nth.call(null,chunk__53356_53396,i__53358_53398);
var map__53359_53400__$1 = ((((!((map__53359_53399 == null)))?((((map__53359_53399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53359_53399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53359_53399):map__53359_53399);
var prob_53401 = map__53359_53400__$1;
var path_53402 = cljs.core.get.call(null,map__53359_53400__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_53403 = cljs.core.get.call(null,map__53359_53400__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_53404 = cljs.core.get.call(null,map__53359_53400__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_53405 = cljs.core.get.call(null,map__53359_53400__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_53406 = cljs.core.get.call(null,map__53359_53400__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_53407 = cljs.core.get.call(null,map__53359_53400__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_53407)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_53407),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_53404);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_53406)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_53406)));
}

if(cljs.core.empty_QMARK_.call(null,path_53402)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_53402));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_53403));

if(cljs.core.truth_(reason_53405)){
cljs.core.print.call(null,", ",reason_53405);
} else {
}

var seq__53361_53408 = cljs.core.seq.call(null,prob_53401);
var chunk__53362_53409 = null;
var count__53363_53410 = (0);
var i__53364_53411 = (0);
while(true){
if((i__53364_53411 < count__53363_53410)){
var vec__53365_53412 = cljs.core._nth.call(null,chunk__53362_53409,i__53364_53411);
var k_53413 = cljs.core.nth.call(null,vec__53365_53412,(0),null);
var v_53414 = cljs.core.nth.call(null,vec__53365_53412,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_53413))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_53413)," ");

cljs.core.pr.call(null,v_53414);
}

var G__53415 = seq__53361_53408;
var G__53416 = chunk__53362_53409;
var G__53417 = count__53363_53410;
var G__53418 = (i__53364_53411 + (1));
seq__53361_53408 = G__53415;
chunk__53362_53409 = G__53416;
count__53363_53410 = G__53417;
i__53364_53411 = G__53418;
continue;
} else {
var temp__4657__auto___53419 = cljs.core.seq.call(null,seq__53361_53408);
if(temp__4657__auto___53419){
var seq__53361_53420__$1 = temp__4657__auto___53419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53361_53420__$1)){
var c__43456__auto___53421 = cljs.core.chunk_first.call(null,seq__53361_53420__$1);
var G__53422 = cljs.core.chunk_rest.call(null,seq__53361_53420__$1);
var G__53423 = c__43456__auto___53421;
var G__53424 = cljs.core.count.call(null,c__43456__auto___53421);
var G__53425 = (0);
seq__53361_53408 = G__53422;
chunk__53362_53409 = G__53423;
count__53363_53410 = G__53424;
i__53364_53411 = G__53425;
continue;
} else {
var vec__53368_53426 = cljs.core.first.call(null,seq__53361_53420__$1);
var k_53427 = cljs.core.nth.call(null,vec__53368_53426,(0),null);
var v_53428 = cljs.core.nth.call(null,vec__53368_53426,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_53427))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_53427)," ");

cljs.core.pr.call(null,v_53428);
}

var G__53429 = cljs.core.next.call(null,seq__53361_53420__$1);
var G__53430 = null;
var G__53431 = (0);
var G__53432 = (0);
seq__53361_53408 = G__53429;
chunk__53362_53409 = G__53430;
count__53363_53410 = G__53431;
i__53364_53411 = G__53432;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__53433 = seq__53355_53395;
var G__53434 = chunk__53356_53396;
var G__53435 = count__53357_53397;
var G__53436 = (i__53358_53398 + (1));
seq__53355_53395 = G__53433;
chunk__53356_53396 = G__53434;
count__53357_53397 = G__53435;
i__53358_53398 = G__53436;
continue;
} else {
var temp__4657__auto___53437 = cljs.core.seq.call(null,seq__53355_53395);
if(temp__4657__auto___53437){
var seq__53355_53438__$1 = temp__4657__auto___53437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53355_53438__$1)){
var c__43456__auto___53439 = cljs.core.chunk_first.call(null,seq__53355_53438__$1);
var G__53440 = cljs.core.chunk_rest.call(null,seq__53355_53438__$1);
var G__53441 = c__43456__auto___53439;
var G__53442 = cljs.core.count.call(null,c__43456__auto___53439);
var G__53443 = (0);
seq__53355_53395 = G__53440;
chunk__53356_53396 = G__53441;
count__53357_53397 = G__53442;
i__53358_53398 = G__53443;
continue;
} else {
var map__53371_53444 = cljs.core.first.call(null,seq__53355_53438__$1);
var map__53371_53445__$1 = ((((!((map__53371_53444 == null)))?((((map__53371_53444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53371_53444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53371_53444):map__53371_53444);
var prob_53446 = map__53371_53445__$1;
var path_53447 = cljs.core.get.call(null,map__53371_53445__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_53448 = cljs.core.get.call(null,map__53371_53445__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_53449 = cljs.core.get.call(null,map__53371_53445__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_53450 = cljs.core.get.call(null,map__53371_53445__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_53451 = cljs.core.get.call(null,map__53371_53445__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_53452 = cljs.core.get.call(null,map__53371_53445__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_53452)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_53452),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_53449);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_53451)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_53451)));
}

if(cljs.core.empty_QMARK_.call(null,path_53447)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_53447));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_53448));

if(cljs.core.truth_(reason_53450)){
cljs.core.print.call(null,", ",reason_53450);
} else {
}

var seq__53373_53453 = cljs.core.seq.call(null,prob_53446);
var chunk__53374_53454 = null;
var count__53375_53455 = (0);
var i__53376_53456 = (0);
while(true){
if((i__53376_53456 < count__53375_53455)){
var vec__53377_53457 = cljs.core._nth.call(null,chunk__53374_53454,i__53376_53456);
var k_53458 = cljs.core.nth.call(null,vec__53377_53457,(0),null);
var v_53459 = cljs.core.nth.call(null,vec__53377_53457,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_53458))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_53458)," ");

cljs.core.pr.call(null,v_53459);
}

var G__53460 = seq__53373_53453;
var G__53461 = chunk__53374_53454;
var G__53462 = count__53375_53455;
var G__53463 = (i__53376_53456 + (1));
seq__53373_53453 = G__53460;
chunk__53374_53454 = G__53461;
count__53375_53455 = G__53462;
i__53376_53456 = G__53463;
continue;
} else {
var temp__4657__auto___53464__$1 = cljs.core.seq.call(null,seq__53373_53453);
if(temp__4657__auto___53464__$1){
var seq__53373_53465__$1 = temp__4657__auto___53464__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53373_53465__$1)){
var c__43456__auto___53466 = cljs.core.chunk_first.call(null,seq__53373_53465__$1);
var G__53467 = cljs.core.chunk_rest.call(null,seq__53373_53465__$1);
var G__53468 = c__43456__auto___53466;
var G__53469 = cljs.core.count.call(null,c__43456__auto___53466);
var G__53470 = (0);
seq__53373_53453 = G__53467;
chunk__53374_53454 = G__53468;
count__53375_53455 = G__53469;
i__53376_53456 = G__53470;
continue;
} else {
var vec__53380_53471 = cljs.core.first.call(null,seq__53373_53465__$1);
var k_53472 = cljs.core.nth.call(null,vec__53380_53471,(0),null);
var v_53473 = cljs.core.nth.call(null,vec__53380_53471,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_53472))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_53472)," ");

cljs.core.pr.call(null,v_53473);
}

var G__53474 = cljs.core.next.call(null,seq__53373_53465__$1);
var G__53475 = null;
var G__53476 = (0);
var G__53477 = (0);
seq__53373_53453 = G__53474;
chunk__53374_53454 = G__53475;
count__53375_53455 = G__53476;
i__53376_53456 = G__53477;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__53478 = cljs.core.next.call(null,seq__53355_53438__$1);
var G__53479 = null;
var G__53480 = (0);
var G__53481 = (0);
seq__53355_53395 = G__53478;
chunk__53356_53396 = G__53479;
count__53357_53397 = G__53480;
i__53358_53398 = G__53481;
continue;
}
} else {
}
}
break;
}

var seq__53383_53482 = cljs.core.seq.call(null,ed);
var chunk__53384_53483 = null;
var count__53385_53484 = (0);
var i__53386_53485 = (0);
while(true){
if((i__53386_53485 < count__53385_53484)){
var vec__53387_53486 = cljs.core._nth.call(null,chunk__53384_53483,i__53386_53485);
var k_53487 = cljs.core.nth.call(null,vec__53387_53486,(0),null);
var v_53488 = cljs.core.nth.call(null,vec__53387_53486,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_53487))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_53487)," ");

cljs.core.pr.call(null,v_53488);

cljs.core.newline.call(null);
}

var G__53489 = seq__53383_53482;
var G__53490 = chunk__53384_53483;
var G__53491 = count__53385_53484;
var G__53492 = (i__53386_53485 + (1));
seq__53383_53482 = G__53489;
chunk__53384_53483 = G__53490;
count__53385_53484 = G__53491;
i__53386_53485 = G__53492;
continue;
} else {
var temp__4657__auto___53493 = cljs.core.seq.call(null,seq__53383_53482);
if(temp__4657__auto___53493){
var seq__53383_53494__$1 = temp__4657__auto___53493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53383_53494__$1)){
var c__43456__auto___53495 = cljs.core.chunk_first.call(null,seq__53383_53494__$1);
var G__53496 = cljs.core.chunk_rest.call(null,seq__53383_53494__$1);
var G__53497 = c__43456__auto___53495;
var G__53498 = cljs.core.count.call(null,c__43456__auto___53495);
var G__53499 = (0);
seq__53383_53482 = G__53496;
chunk__53384_53483 = G__53497;
count__53385_53484 = G__53498;
i__53386_53485 = G__53499;
continue;
} else {
var vec__53390_53500 = cljs.core.first.call(null,seq__53383_53494__$1);
var k_53501 = cljs.core.nth.call(null,vec__53390_53500,(0),null);
var v_53502 = cljs.core.nth.call(null,vec__53390_53500,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_53501))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_53501)," ");

cljs.core.pr.call(null,v_53502);

cljs.core.newline.call(null);
}

var G__53503 = cljs.core.next.call(null,seq__53383_53494__$1);
var G__53504 = null;
var G__53505 = (0);
var G__53506 = (0);
seq__53383_53482 = G__53503;
chunk__53384_53483 = G__53504;
count__53385_53484 = G__53505;
i__53386_53485 = G__53506;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53354_53394;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53353_53393;
}
return [cljs.core.str(sb__43631__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__43631__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53509_53511 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53510_53512 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53509_53511,_STAR_print_fn_STAR_53510_53512,sb__43631__auto__){
return (function (x__43632__auto__){
return sb__43631__auto__.append(x__43632__auto__);
});})(_STAR_print_newline_STAR_53509_53511,_STAR_print_fn_STAR_53510_53512,sb__43631__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53510_53512;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53509_53511;
}
return [cljs.core.str(sb__43631__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__42645__auto__ = (function (){var temp__4657__auto__ = (function (){var or__42645__auto__ = cljs.core.get.call(null,overrides,(function (){var or__42645__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__53513_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__53513_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args53514 = [];
var len__43720__auto___53517 = arguments.length;
var i__43721__auto___53518 = (0);
while(true){
if((i__43721__auto___53518 < len__43720__auto___53517)){
args53514.push((arguments[i__43721__auto___53518]));

var G__53519 = (i__43721__auto___53518 + (1));
i__43721__auto___53518 = G__53519;
continue;
} else {
}
break;
}

var G__53516 = args53514.length;
switch (G__53516) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53514.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__42633__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__42633__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__42633__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__42645__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__43631__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53523_53525 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53524_53526 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53523_53525,_STAR_print_fn_STAR_53524_53526,sb__43631__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__43632__auto__){
return sb__43631__auto__.append(x__43632__auto__);
});})(_STAR_print_newline_STAR_53523_53525,_STAR_print_fn_STAR_53524_53526,sb__43631__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53524_53526;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53523_53525;
}
return [cljs.core.str(sb__43631__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__42645__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args53527 = [];
var len__43720__auto___53530 = arguments.length;
var i__43721__auto___53531 = (0);
while(true){
if((i__43721__auto___53531 < len__43720__auto___53530)){
args53527.push((arguments[i__43721__auto___53531]));

var G__53532 = (i__43721__auto___53531 + (1));
i__43721__auto___53531 = G__53532;
continue;
} else {
}
break;
}

var G__53529 = args53527.length;
switch (G__53529) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53527.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args53534 = [];
var len__43720__auto___53537 = arguments.length;
var i__43721__auto___53538 = (0);
while(true){
if((i__43721__auto___53538 < len__43720__auto___53537)){
args53534.push((arguments[i__43721__auto___53538]));

var G__53539 = (i__43721__auto___53538 + (1));
i__43721__auto___53538 = G__53539;
continue;
} else {
}
break;
}

var G__53536 = args53534.length;
switch (G__53536) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53534.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__53544){
var map__53575 = p__53544;
var map__53575__$1 = ((((!((map__53575 == null)))?((((map__53575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53575):map__53575);
var argm = map__53575__$1;
var opt = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__53575__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__53541_SHARP_){
var or__42645__auto__ = k__GT_s.call(null,p1__53541_SHARP_);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return p1__53541_SHARP_;
}
});})(keys_pred,k__GT_s,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec53577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec53577 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__53575,req_specs,keys__GT_specs,req,id,req_keys,p__53544,opt_specs,k__GT_s,pred_forms,meta53578){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__53575 = map__53575;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.p__53544 = p__53544;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta53578 = meta53578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec53577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_53579,meta53578__$1){
var self__ = this;
var _53579__$1 = this;
return (new cljs.spec.t_cljs$spec53577(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__53575,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.p__53544,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta53578__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_53579){
var self__ = this;
var _53579__$1 = this;
return self__.meta53578;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec53577.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__53583 = cljs.core.keys.call(null,m);
var vec__53584 = G__53583;
var seq__53585 = cljs.core.seq.call(null,vec__53584);
var first__53586 = cljs.core.first.call(null,seq__53585);
var seq__53585__$1 = cljs.core.next.call(null,seq__53585);
var k = first__53586;
var ks = seq__53585__$1;
var keys = vec__53584;
var ret__$1 = ret;
var G__53583__$1 = G__53583;
while(true){
var ret__$2 = ret__$1;
var vec__53587 = G__53583__$1;
var seq__53588 = cljs.core.seq.call(null,vec__53587);
var first__53589 = cljs.core.first.call(null,seq__53588);
var seq__53588__$1 = cljs.core.next.call(null,seq__53588);
var k__$1 = first__53589;
var ks__$1 = seq__53588__$1;
var keys__$1 = vec__53587;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__53605 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__53606 = ks__$1;
ret__$1 = G__53605;
G__53583__$1 = G__53606;
continue;
}
} else {
var G__53607 = ret__$2;
var G__53608 = ks__$1;
ret__$1 = G__53607;
G__53583__$1 = G__53608;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__53593 = cljs.core.keys.call(null,m);
var vec__53594 = G__53593;
var seq__53595 = cljs.core.seq.call(null,vec__53594);
var first__53596 = cljs.core.first.call(null,seq__53595);
var seq__53595__$1 = cljs.core.next.call(null,seq__53595);
var k = first__53596;
var ks = seq__53595__$1;
var keys = vec__53594;
var ret__$1 = ret;
var G__53593__$1 = G__53593;
while(true){
var ret__$2 = ret__$1;
var vec__53597 = G__53593__$1;
var seq__53598 = cljs.core.seq.call(null,vec__53597);
var first__53599 = cljs.core.first.call(null,seq__53598);
var seq__53598__$1 = cljs.core.next.call(null,seq__53598);
var k__$1 = first__53599;
var ks__$1 = seq__53598__$1;
var keys__$1 = vec__53597;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__53609 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__53610 = ks__$1;
ret__$1 = G__53609;
G__53593__$1 = G__53610;
continue;
} else {
var G__53611 = ret__$2;
var G__53612 = ks__$1;
ret__$1 = G__53611;
G__53593__$1 = G__53612;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.call(null,((function (probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__53542_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__53542_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__53600){
var vec__53601 = p__53600;
var k = cljs.core.nth.call(null,vec__53601,(0),null);
var v = cljs.core.nth.call(null,vec__53601,(1),null);
if(cljs.core.truth_((function (){var or__42645__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__53543_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__53543_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__53604 = cljs.core.PersistentVector.EMPTY;
var G__53604__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__53604,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__53604);
var G__53604__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__53604__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__53604__$1);
var G__53604__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__53604__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__53604__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__53604__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__53604__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"map__53575","map__53575",-1927220562,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"p__53544","p__53544",129005725,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta53578","meta53578",-1642757472,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec53577.cljs$lang$type = true;

cljs.spec.t_cljs$spec53577.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec53577";

cljs.spec.t_cljs$spec53577.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec53577");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec53577 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec53577(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__53575__$2,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,p__53544__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta53578){
return (new cljs.spec.t_cljs$spec53577(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__53575__$2,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,p__53544__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta53578));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__53575,map__53575__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec53577(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__53575__$1,req_specs,keys__GT_specs,req,id,req_keys,p__53544,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args53613 = [];
var len__43720__auto___53621 = arguments.length;
var i__43721__auto___53622 = (0);
while(true){
if((i__43721__auto___53622 < len__43720__auto___53621)){
args53613.push((arguments[i__43721__auto___53622]));

var G__53623 = (i__43721__auto___53622 + (1));
i__43721__auto___53622 = G__53623;
continue;
} else {
}
break;
}

var G__53615 = args53613.length;
switch (G__53615) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53613.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__53616 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__53616,gfn);
} else {
return G__53616;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__53617 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__53617,gfn);
} else {
return G__53617;
}
} else {
if(typeof cljs.spec.t_cljs$spec53618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec53618 = (function (form,pred,gfn,cpred_QMARK_,unc,meta53619){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta53619 = meta53619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec53618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53620,meta53619__$1){
var self__ = this;
var _53620__$1 = this;
return (new cljs.spec.t_cljs$spec53618(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta53619__$1));
});

cljs.spec.t_cljs$spec53618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53620){
var self__ = this;
var _53620__$1 = this;
return self__.meta53619;
});

cljs.spec.t_cljs$spec53618.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec53618.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec53618.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec53618.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec53618.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec53618.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec53618.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec53618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta53619","meta53619",206724875,null)], null);
});

cljs.spec.t_cljs$spec53618.cljs$lang$type = true;

cljs.spec.t_cljs$spec53618.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec53618";

cljs.spec.t_cljs$spec53618.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec53618");
});

cljs.spec.__GT_t_cljs$spec53618 = (function cljs$spec$__GT_t_cljs$spec53618(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta53619){
return (new cljs.spec.t_cljs$spec53618(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta53619));
});

}

return (new cljs.spec.t_cljs$spec53618(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args53630 = [];
var len__43720__auto___53644 = arguments.length;
var i__43721__auto___53645 = (0);
while(true){
if((i__43721__auto___53645 < len__43720__auto___53644)){
args53630.push((arguments[i__43721__auto___53645]));

var G__53646 = (i__43721__auto___53645 + (1));
i__43721__auto___53645 = G__53646;
continue;
} else {
}
break;
}

var G__53632 = args53630.length;
switch (G__53632) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53630.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__53625_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__42633__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__53625_SHARP_));
if(and__42633__auto__){
return mm.call(null,p1__53625_SHARP_);
} else {
return and__42633__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__53626_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__53626_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__53627_SHARP_,p2__53628_SHARP_){
return cljs.core.assoc.call(null,p1__53627_SHARP_,retag,p2__53628_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec53633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec53633 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta53634){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta53634 = meta53634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec53633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_53635,meta53634__$1){
var self__ = this;
var _53635__$1 = this;
return (new cljs.spec.t_cljs$spec53633(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta53634__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_53635){
var self__ = this;
var _53635__$1 = this;
return self__.meta53634;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec53633.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__53636){
var vec__53637 = p__53636;
var k = cljs.core.nth.call(null,vec__53637,(0),null);
var f = cljs.core.nth.call(null,vec__53637,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__53637,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__53637,k,f,___$1,id,predx,dval,tag){
return (function (p1__53629_SHARP_){
return self__.tag.call(null,p1__53629_SHARP_,k);
});})(rmap__$1,p,vec__53637,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__43479__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__43479__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto____$1);
})(),x__43479__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__53637,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__53640){
var vec__53641 = p__53640;
var k = cljs.core.nth.call(null,vec__53641,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__43479__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta53634","meta53634",-864263602,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec53633.cljs$lang$type = true;

cljs.spec.t_cljs$spec53633.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec53633";

cljs.spec.t_cljs$spec53633.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec53633");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec53633 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec53633(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta53634){
return (new cljs.spec.t_cljs$spec53633(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta53634));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec53633(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args53648 = [];
var len__43720__auto___53654 = arguments.length;
var i__43721__auto___53655 = (0);
while(true){
if((i__43721__auto___53655 < len__43720__auto___53654)){
args53648.push((arguments[i__43721__auto___53655]));

var G__53656 = (i__43721__auto___53655 + (1));
i__43721__auto___53655 = G__53656;
continue;
} else {
}
break;
}

var G__53650 = args53648.length;
switch (G__53650) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53648.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec53651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec53651 = (function (forms,preds,gfn,meta53652){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta53652 = meta53652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec53651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53653,meta53652__$1){
var self__ = this;
var _53653__$1 = this;
return (new cljs.spec.t_cljs$spec53651(self__.forms,self__.preds,self__.gfn,meta53652__$1));
});

cljs.spec.t_cljs$spec53651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53653){
var self__ = this;
var _53653__$1 = this;
return self__.meta53652;
});

cljs.spec.t_cljs$spec53651.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec53651.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__53658 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__53659 = (i + (1));
ret = G__53658;
i = G__53659;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec53651.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__53660 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__53661 = (i + (1));
ret = G__53660;
i = G__53661;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec53651.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__43479__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),(function (){var x__43479__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec53651.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec53651.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec53651.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec53651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta53652","meta53652",-754364123,null)], null);
});

cljs.spec.t_cljs$spec53651.cljs$lang$type = true;

cljs.spec.t_cljs$spec53651.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec53651";

cljs.spec.t_cljs$spec53651.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec53651");
});

cljs.spec.__GT_t_cljs$spec53651 = (function cljs$spec$__GT_t_cljs$spec53651(forms__$1,preds__$1,gfn__$1,meta53652){
return (new cljs.spec.t_cljs$spec53651(forms__$1,preds__$1,gfn__$1,meta53652));
});

}

return (new cljs.spec.t_cljs$spec53651(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x53663 = v;
x53663.cljs$core$IMapEntry$ = true;

x53663.cljs$core$IMapEntry$_key$arity$1 = ((function (x53663){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x53663))
;

x53663.cljs$core$IMapEntry$_val$arity$1 = ((function (x53663){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x53663))
;

return x53663;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__53678 = (i + (1));
i = G__53678;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec53671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec53671 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta53672){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta53672 = meta53672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec53671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_53673,meta53672__$1){
var self__ = this;
var _53673__$1 = this;
return (new cljs.spec.t_cljs$spec53671(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta53672__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_53673){
var self__ = this;
var _53673__$1 = this;
return self__.meta53672;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec53671.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__53674){
var self__ = this;
var vec__53675 = p__53674;
var k = cljs.core.nth.call(null,vec__53675,(0),null);
var x = cljs.core.nth.call(null,vec__53675,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta53672","meta53672",-328955769,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec53671.cljs$lang$type = true;

cljs.spec.t_cljs$spec53671.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec53671";

cljs.spec.t_cljs$spec53671.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec53671");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec53671 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec53671(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta53672){
return (new cljs.spec.t_cljs$spec53671(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta53672));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec53671(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__53705 = preds;
var vec__53707 = G__53705;
var seq__53708 = cljs.core.seq.call(null,vec__53707);
var first__53709 = cljs.core.first.call(null,seq__53708);
var seq__53708__$1 = cljs.core.next.call(null,seq__53708);
var pred = first__53709;
var preds__$1 = seq__53708__$1;
var G__53706 = forms;
var vec__53710 = G__53706;
var seq__53711 = cljs.core.seq.call(null,vec__53710);
var first__53712 = cljs.core.first.call(null,seq__53711);
var seq__53711__$1 = cljs.core.next.call(null,seq__53711);
var form = first__53712;
var forms__$1 = seq__53711__$1;
var ret__$1 = ret;
var G__53705__$1 = G__53705;
var G__53706__$1 = G__53706;
while(true){
var ret__$2 = ret__$1;
var vec__53713 = G__53705__$1;
var seq__53714 = cljs.core.seq.call(null,vec__53713);
var first__53715 = cljs.core.first.call(null,seq__53714);
var seq__53714__$1 = cljs.core.next.call(null,seq__53714);
var pred__$1 = first__53715;
var preds__$2 = seq__53714__$1;
var vec__53716 = G__53706__$1;
var seq__53717 = cljs.core.seq.call(null,vec__53716);
var first__53718 = cljs.core.first.call(null,seq__53717);
var seq__53717__$1 = cljs.core.next.call(null,seq__53717);
var form__$1 = first__53718;
var forms__$2 = seq__53717__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__53719 = nret;
var G__53720 = preds__$2;
var G__53721 = forms__$2;
ret__$1 = G__53719;
G__53705__$1 = G__53720;
G__53706__$1 = G__53721;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__53748 = forms;
var vec__53750 = G__53748;
var seq__53751 = cljs.core.seq.call(null,vec__53750);
var first__53752 = cljs.core.first.call(null,seq__53751);
var seq__53751__$1 = cljs.core.next.call(null,seq__53751);
var form = first__53752;
var forms__$1 = seq__53751__$1;
var G__53749 = preds;
var vec__53753 = G__53749;
var seq__53754 = cljs.core.seq.call(null,vec__53753);
var first__53755 = cljs.core.first.call(null,seq__53754);
var seq__53754__$1 = cljs.core.next.call(null,seq__53754);
var pred = first__53755;
var preds__$1 = seq__53754__$1;
var ret__$1 = ret;
var G__53748__$1 = G__53748;
var G__53749__$1 = G__53749;
while(true){
var ret__$2 = ret__$1;
var vec__53756 = G__53748__$1;
var seq__53757 = cljs.core.seq.call(null,vec__53756);
var first__53758 = cljs.core.first.call(null,seq__53757);
var seq__53757__$1 = cljs.core.next.call(null,seq__53757);
var form__$1 = first__53758;
var forms__$2 = seq__53757__$1;
var vec__53759 = G__53749__$1;
var seq__53760 = cljs.core.seq.call(null,vec__53759);
var first__53761 = cljs.core.first.call(null,seq__53760);
var seq__53760__$1 = cljs.core.next.call(null,seq__53760);
var pred__$1 = first__53761;
var preds__$2 = seq__53760__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__53762 = nret;
var G__53763 = forms__$2;
var G__53764 = preds__$2;
ret__$1 = G__53762;
G__53748__$1 = G__53763;
G__53749__$1 = G__53764;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec53770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec53770 = (function (and_spec_impl,forms,preds,gfn,meta53771){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta53771 = meta53771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec53770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53772,meta53771__$1){
var self__ = this;
var _53772__$1 = this;
return (new cljs.spec.t_cljs$spec53770(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta53771__$1));
});

cljs.spec.t_cljs$spec53770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53772){
var self__ = this;
var _53772__$1 = this;
return self__.meta53771;
});

cljs.spec.t_cljs$spec53770.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec53770.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec53770.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__53766_SHARP_,p2__53765_SHARP_){
return cljs.spec.unform.call(null,p2__53765_SHARP_,p1__53766_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec53770.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec53770.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec53770.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec53770.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec53770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta53771","meta53771",525016170,null)], null);
});

cljs.spec.t_cljs$spec53770.cljs$lang$type = true;

cljs.spec.t_cljs$spec53770.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec53770";

cljs.spec.t_cljs$spec53770.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec53770");
});

cljs.spec.__GT_t_cljs$spec53770 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec53770(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta53771){
return (new cljs.spec.t_cljs$spec53770(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta53771));
});

}

return (new cljs.spec.t_cljs$spec53770(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__42645__auto__ = kfn;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__42645__auto__ = kform;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.valid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__42633__auto__ = distinct;
if(cljs.core.truth_(and__42633__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__42633__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__42633__auto__ = count;
if(cljs.core.truth_(and__42633__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__42633__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__43479__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),(function (){var x__43479__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__42633__auto__ = (function (){var or__42645__auto__ = min_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__42633__auto__)){
return !((((function (){var or__42645__auto__ = min_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__42645__auto__ = max_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__42633__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__43479__auto__ = (function (){var or__42645__auto__ = min_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),(function (){var x__43479__auto__ = cljs.core.count.call(null,cljs.core.unquote.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),(function (){var x__43479__auto__ = (function (){var or__42645__auto__ = max_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec53784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec53784 = (function (merge_spec_impl,forms,preds,gfn,meta53785){
this.merge_spec_impl = merge_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta53785 = meta53785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec53784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53786,meta53785__$1){
var self__ = this;
var _53786__$1 = this;
return (new cljs.spec.t_cljs$spec53784(self__.merge_spec_impl,self__.forms,self__.preds,self__.gfn,meta53785__$1));
});

cljs.spec.t_cljs$spec53784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53786){
var self__ = this;
var _53786__$1 = this;
return self__.meta53785;
});

cljs.spec.t_cljs$spec53784.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec53784.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__53773_SHARP_,p2__53774_SHARP_){
return cljs.spec.dt.call(null,p1__53773_SHARP_,x,p2__53774_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),null], null), null),ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec53784.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__53775_SHARP_){
return cljs.spec.unform.call(null,p1__53775_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec53784.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__53776_SHARP_,p2__53777_SHARP_){
return cljs.spec.explain_1.call(null,p1__53776_SHARP_,p2__53777_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec53784.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__53778_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__53778_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__53779_SHARP_,p2__53780_SHARP_){
return cljs.spec.gensub.call(null,p1__53779_SHARP_,overrides,path,rmap,p2__53780_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec53784.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec53784.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec53784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"merge-spec-impl","merge-spec-impl",397115684,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'merge'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta53785","meta53785",-1674879808,null)], null);
});

cljs.spec.t_cljs$spec53784.cljs$lang$type = true;

cljs.spec.t_cljs$spec53784.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec53784";

cljs.spec.t_cljs$spec53784.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec53784");
});

cljs.spec.__GT_t_cljs$spec53784 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec53784(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta53785){
return (new cljs.spec.t_cljs$spec53784(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta53785));
});

}

return (new cljs.spec.t_cljs$spec53784(cljs$spec$merge_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args53791 = [];
var len__43720__auto___53816 = arguments.length;
var i__43721__auto___53817 = (0);
while(true){
if((i__43721__auto___53817 < len__43720__auto___53816)){
args53791.push((arguments[i__43721__auto___53817]));

var G__53818 = (i__43721__auto___53817 + (1));
i__43721__auto___53817 = G__53818;
continue;
} else {
}
break;
}

var G__53793 = args53791.length;
switch (G__53793) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53791.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__53794,gfn){
var map__53795 = p__53794;
var map__53795__$1 = ((((!((map__53795 == null)))?((((map__53795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53795):map__53795);
var opts = map__53795__$1;
var max_count = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__53795__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__53787_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__53787_SHARP_);
});})(conform_into,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__42645__auto__ = kfn;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return ((function (or__42645__auto__,conform_into,check_QMARK_,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__42645__auto__,conform_into,check_QMARK_,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__53797 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__53797,(0),null);
var kindform = cljs.core.nth.call(null,vec__53797,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__42633__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__42633__auto__){
var or__42645__auto__ = (function (){var and__42633__auto____$1 = kind;
if(cljs.core.truth_(and__42633__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__42633__auto____$1;
}
})();
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__42633__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.list_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__53788_SHARP_){
return cljs.core.empty.call(null,(function (){var or__42645__auto__ = conform_into;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return p1__53788_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec53800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec53800 = (function (form,max_count,p__53794,check_QMARK_,gfn,gen_max,map__53795,pred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,vec__53797,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta53801){
this.form = form;
this.max_count = max_count;
this.p__53794 = p__53794;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.map__53795 = map__53795;
this.pred = pred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.vec__53797 = vec__53797;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta53801 = meta53801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec53800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_53802,meta53801__$1){
var self__ = this;
var _53802__$1 = this;
return (new cljs.spec.t_cljs$spec53800(self__.form,self__.max_count,self__.p__53794,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.map__53795,self__.pred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.vec__53797,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta53801__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_53802){
var self__ = this;
var _53802__$1 = this;
return self__.meta53801;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec53800.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__53803 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__53803,(0),null);
var add = cljs.core.nth.call(null,vec__53803,(1),null);
var complete = cljs.core.nth.call(null,vec__53803,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__53809 = cljs.core.seq.call(null,x);
var vec__53810 = G__53809;
var seq__53811 = cljs.core.seq.call(null,vec__53810);
var first__53812 = cljs.core.first.call(null,seq__53811);
var seq__53811__$1 = cljs.core.next.call(null,seq__53811);
var v = first__53812;
var vs = seq__53811__$1;
var vseq = vec__53810;
var ret__$1 = ret;
var i__$1 = i;
var G__53809__$1 = G__53809;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__53813 = G__53809__$1;
var seq__53814 = cljs.core.seq.call(null,vec__53813);
var first__53815 = cljs.core.first.call(null,seq__53814);
var seq__53814__$1 = cljs.core.next.call(null,seq__53814);
var v__$1 = first__53815;
var vs__$1 = seq__53814__$1;
var vseq__$1 = vec__53813;
if(vseq__$1){
var cv = cljs.spec.dt.call(null,self__.pred,v__$1,null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__53820 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__53821 = (i__$2 + (1));
var G__53822 = vs__$1;
ret__$1 = G__53820;
i__$1 = G__53821;
G__53809__$1 = G__53822;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__42976__auto__ = (1);
var y__42977__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__42976__auto__ > y__42977__auto__) ? x__42976__auto__ : y__42977__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__53823 = (i + step);
i = G__53823;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__42645__auto__ = (function (){var and__42633__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__42633__auto__){
return x;
} else {
return and__42633__auto__;
}
})();
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__42645__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__42645__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__42645__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.call(null),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__53789_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__53789_SHARP_)){
return p1__53789_SHARP_;
} else {
return cljs.core.empty.call(null,p1__53789_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__53790_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__53790_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__53790_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__42645__auto__ = self__.min_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__42645__auto__ = self__.max_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var x__42976__auto__ = self__.gen_max;
var y__42977__auto__ = ((2) * (function (){var or__42645__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return (0);
}
})());
return ((x__42976__auto__ > y__42977__auto__) ? x__42976__auto__ : y__42977__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__42645__auto__ = self__.min_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__42645__auto__ = self__.min_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return (0);
}
})(),(function (){var or__42645__auto__ = self__.max_count;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var x__42976__auto__ = self__.gen_max;
var y__42977__auto__ = ((2) * (function (){var or__42645__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return (0);
}
})());
return ((x__42976__auto__ > y__42977__auto__) ? x__42976__auto__ : y__42977__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__43479__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"p__53794","p__53794",-1743549915,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"map__53795","map__53795",1923808459,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"vec__53797","vec__53797",-660660455,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta53801","meta53801",1411349642,null)], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec53800.cljs$lang$type = true;

cljs.spec.t_cljs$spec53800.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec53800";

cljs.spec.t_cljs$spec53800.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec53800");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec53800 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec53800(form__$1,max_count__$1,p__53794__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__53795__$2,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,vec__53797__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta53801){
return (new cljs.spec.t_cljs$spec53800(form__$1,max_count__$1,p__53794__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__53795__$2,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,vec__53797__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta53801));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__53797,kindfn,kindform,cfns,map__53795,map__53795__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec53800(form,max_count,p__53794,check_QMARK_,gfn,gen_max,map__53795__$1,pred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,vec__53797,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__53824){
var map__53827 = p__53824;
var map__53827__$1 = ((((!((map__53827 == null)))?((((map__53827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53827):map__53827);
var op = cljs.core.get.call(null,map__53827__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__53829){
var map__53841 = p__53829;
var map__53841__$1 = ((((!((map__53841 == null)))?((((map__53841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53841):map__53841);
var vec__53842 = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__53843 = cljs.core.seq.call(null,vec__53842);
var first__53844 = cljs.core.first.call(null,seq__53843);
var seq__53843__$1 = cljs.core.next.call(null,seq__53843);
var p1 = first__53844;
var pr = seq__53843__$1;
var ps = vec__53842;
var vec__53845 = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__53846 = cljs.core.seq.call(null,vec__53845);
var first__53847 = cljs.core.first.call(null,seq__53846);
var seq__53846__$1 = cljs.core.next.call(null,seq__53846);
var k1 = first__53847;
var kr = seq__53846__$1;
var ks = vec__53845;
var vec__53848 = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__53849 = cljs.core.seq.call(null,vec__53848);
var first__53850 = cljs.core.first.call(null,seq__53849);
var seq__53849__$1 = cljs.core.next.call(null,seq__53849);
var f1 = first__53850;
var fr = seq__53849__$1;
var forms = vec__53848;
var ret = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53853 = arguments.length;
var i__43721__auto___53854 = (0);
while(true){
if((i__43721__auto___53854 < len__43720__auto___53853)){
args__43727__auto__.push((arguments[i__43721__auto___53854]));

var G__53855 = (i__43721__auto___53854 + (1));
i__43721__auto___53854 = G__53855;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq53852){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53852));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__43479__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),(function (){var x__43479__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__43479__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__42645__auto__ = ks;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__53856_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__53856_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__42645__auto__ = cljs.core.seq.call(null,ks);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__42645__auto__ = cljs.core.seq.call(null,forms);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__53857_SHARP_){
return cljs.core.nth.call(null,p1__53857_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__53867 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__53870 = cljs.core.nth.call(null,vec__53867,(0),null);
var seq__53871 = cljs.core.seq.call(null,vec__53870);
var first__53872 = cljs.core.first.call(null,seq__53871);
var seq__53871__$1 = cljs.core.next.call(null,seq__53871);
var p1 = first__53872;
var pr = seq__53871__$1;
var ps__$1 = vec__53870;
var vec__53873 = cljs.core.nth.call(null,vec__53867,(1),null);
var k1 = cljs.core.nth.call(null,vec__53873,(0),null);
var ks__$1 = vec__53873;
var forms__$1 = cljs.core.nth.call(null,vec__53867,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__43727__auto__ = [];
var len__43720__auto___53877 = arguments.length;
var i__43721__auto___53878 = (0);
while(true){
if((i__43721__auto___53878 < len__43720__auto___53877)){
args__43727__auto__.push((arguments[i__43721__auto___53878]));

var G__53879 = (i__43721__auto___53878 + (1));
i__43721__auto___53878 = G__53879;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq53876){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53876));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__42633__auto__ = p1;
if(cljs.core.truth_(and__42633__auto__)){
return p2;
} else {
return and__42633__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__42645__auto__ = p1;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__42645__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__42645__auto__){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = (function (){var and__42633__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__42633__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__42633__auto__;
}
})();
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__53883 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__53883__$1 = ((((!((map__53883 == null)))?((((map__53883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53883):map__53883);
var p__$1 = map__53883__$1;
var op = cljs.core.get.call(null,map__53883__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__53883__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__53883__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__53883__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__53883__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__53885 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__53885)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__53885)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__53885)){
var and__42633__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__42633__auto__)){
var or__42645__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__42633__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__53885)){
var or__42645__auto__ = (p1 === p2);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__53885)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__53885)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__53904 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__53904__$1 = ((((!((map__53904 == null)))?((((map__53904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53904):map__53904);
var p__$1 = map__53904__$1;
var vec__53905 = cljs.core.get.call(null,map__53904__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__53906 = cljs.core.seq.call(null,vec__53905);
var first__53907 = cljs.core.first.call(null,seq__53906);
var seq__53906__$1 = cljs.core.next.call(null,seq__53906);
var p0 = first__53907;
var pr = seq__53906__$1;
var ps = vec__53905;
var vec__53908 = cljs.core.get.call(null,map__53904__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__53908,(0),null);
var ks = vec__53908;
var op = cljs.core.get.call(null,map__53904__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__53904__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__53904__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__53904__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__53912 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__53912)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__53912)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__53912)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__53912)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__53912)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__53912)){
var vec__53913 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__53916 = cljs.core.nth.call(null,vec__53913,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__53916,(0),null);
var vec__53919 = cljs.core.nth.call(null,vec__53913,(1),null);
var k0 = cljs.core.nth.call(null,vec__53919,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__53938 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__53938__$1 = ((((!((map__53938 == null)))?((((map__53938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53938):map__53938);
var p__$1 = map__53938__$1;
var vec__53939 = cljs.core.get.call(null,map__53938__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__53940 = cljs.core.seq.call(null,vec__53939);
var first__53941 = cljs.core.first.call(null,seq__53940);
var seq__53940__$1 = cljs.core.next.call(null,seq__53940);
var p0 = first__53941;
var pr = seq__53940__$1;
var ps = vec__53939;
var vec__53942 = cljs.core.get.call(null,map__53938__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__53942,(0),null);
var ks = vec__53942;
var op = cljs.core.get.call(null,map__53938__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__53938__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__53938__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__53938__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__53938__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__53938__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__53946 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__53946)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__53946)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__53946)){
var px = cljs.core.reduce.call(null,((function (G__53946,map__53938,map__53938__$1,p__$1,vec__53939,seq__53940,first__53941,seq__53940__$1,p0,pr,ps,vec__53942,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__53923_SHARP_,p2__53922_SHARP_){
return cljs.spec.unform.call(null,p2__53922_SHARP_,p1__53923_SHARP_);
});})(G__53946,map__53938,map__53938__$1,p__$1,vec__53939,seq__53940,first__53941,seq__53940__$1,p0,pr,ps,vec__53942,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__53946)){
return cljs.core.mapcat.call(null,((function (G__53946,map__53938,map__53938__$1,p__$1,vec__53939,seq__53940,first__53941,seq__53940__$1,p0,pr,ps,vec__53942,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__53924_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__53924_SHARP_);
});})(G__53946,map__53938,map__53938__$1,p__$1,vec__53939,seq__53940,first__53941,seq__53940__$1,p0,pr,ps,vec__53942,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__53946)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__53946,map__53938,map__53938__$1,p__$1,vec__53939,seq__53940,first__53941,seq__53940__$1,p0,pr,ps,vec__53942,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__53925_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__53925_SHARP_);
});})(G__53946,map__53938,map__53938__$1,p__$1,vec__53939,seq__53940,first__53941,seq__53940__$1,p0,pr,ps,vec__53942,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__53946,map__53938,map__53938__$1,p__$1,vec__53939,seq__53940,first__53941,seq__53940__$1,p0,pr,ps,vec__53942,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__53946,map__53938,map__53938__$1,p__$1,vec__53939,seq__53940,first__53941,seq__53940__$1,p0,pr,ps,vec__53942,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__53946)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__53947 = x;
var k__$1 = cljs.core.nth.call(null,vec__53947,(0),null);
var v = cljs.core.nth.call(null,vec__53947,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__53953 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__53953__$1 = ((((!((map__53953 == null)))?((((map__53953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53953):map__53953);
var p__$1 = map__53953__$1;
var op = cljs.core.get.call(null,map__53953__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__53953__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__53953__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__53953,map__53953__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__53953,map__53953__$1,p__$1,op,ps,splice))
;
var G__53955 = op;
if(cljs.core._EQ_.call(null,null,G__53955)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__53955)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__53955)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__53955)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__53955)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__53955)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__53966 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__53966__$1 = ((((!((map__53966 == null)))?((((map__53966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53966):map__53966);
var p__$1 = map__53966__$1;
var vec__53967 = cljs.core.get.call(null,map__53966__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__53968 = cljs.core.seq.call(null,vec__53967);
var first__53969 = cljs.core.first.call(null,seq__53968);
var seq__53968__$1 = cljs.core.next.call(null,seq__53968);
var p0 = first__53969;
var pr = seq__53968__$1;
var ps = vec__53967;
var vec__53970 = cljs.core.get.call(null,map__53966__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__53971 = cljs.core.seq.call(null,vec__53970);
var first__53972 = cljs.core.first.call(null,seq__53971);
var seq__53971__$1 = cljs.core.next.call(null,seq__53971);
var k0 = first__53972;
var kr = seq__53971__$1;
var ks = vec__53970;
var op = cljs.core.get.call(null,map__53966__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__53966__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__53966__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__53966__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__53966__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__53966__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__53974 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__53974)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__53974)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__53974)){
var temp__4657__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__53974)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__53974)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__53974,map__53966,map__53966__$1,p__$1,vec__53967,seq__53968,first__53969,seq__53968__$1,p0,pr,ps,vec__53970,seq__53971,first__53972,seq__53971__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__53956_SHARP_){
return cljs$spec$deriv.call(null,p1__53956_SHARP_,x);
});})(G__53974,map__53966,map__53966__$1,p__$1,vec__53967,seq__53968,first__53969,seq__53968__$1,p0,pr,ps,vec__53970,seq__53971,first__53972,seq__53971__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__53974)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__53978 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__53978__$1 = ((((!((map__53978 == null)))?((((map__53978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53978):map__53978);
var p__$1 = map__53978__$1;
var op = cljs.core.get.call(null,map__53978__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__53978__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__53978__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__53978__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__53978__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__53978__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__53978__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__53978__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__53980 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__53980)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__53980)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__53980)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__53980)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__43479__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__42645__auto__ = cljs.core.seq.call(null,ks);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__53980)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__43479__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__53980)){
var x__43479__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__43479__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto____$1);
})(),x__43479__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__53994 = input;
var x = cljs.core.nth.call(null,vec__53994,(0),null);
var input__$1 = vec__53994;
var map__53997 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__53997__$1 = ((((!((map__53997 == null)))?((((map__53997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53997):map__53997);
var p__$1 = map__53997__$1;
var op = cljs.core.get.call(null,map__53997__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__53997__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__53997__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__53997__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__53997__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__53997__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__53997__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__53994,x,input__$1,map__53997,map__53997__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__53994,x,input__$1,map__53997,map__53997__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__53999 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__53999)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__53999)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__53999)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__53999)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__42645__auto__ = cljs.core.seq.call(null,ks);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__42645__auto__ = cljs.core.seq.call(null,forms);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__54000 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__53999,vec__53994,x,input__$1,map__53997,map__53997__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__54003){
var vec__54004 = p__54003;
var p__$2 = cljs.core.nth.call(null,vec__54004,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__53999,vec__53994,x,input__$1,map__53997,map__53997__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__54000,(0),null);
var k = cljs.core.nth.call(null,vec__54000,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__54000,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__42645__auto__ = form__$1;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__53999)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__53999,vec__53994,x,input__$1,map__53997,map__53997__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__42645__auto__ = form__$1;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__53999,vec__53994,x,input__$1,map__53997,map__53997__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__42645__auto__ = cljs.core.seq.call(null,ks);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__42645__auto__ = cljs.core.seq.call(null,forms);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__53999)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__54013 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__54013__$1 = ((((!((map__54013 == null)))?((((map__54013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54013):map__54013);
var p__$1 = map__54013__$1;
var ps = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__54013,map__54013__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__54013,map__54013__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__42633__auto__ = rmap__$1;
if(cljs.core.truth_(and__42633__auto__)){
var and__42633__auto____$1 = id;
if(cljs.core.truth_(and__42633__auto____$1)){
var and__42633__auto____$2 = k;
if(cljs.core.truth_(and__42633__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__42633__auto____$2;
}
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__54013,map__54013__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__42645__auto__ = f__$1;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return p__$2;
}
})());
});})(map__54013,map__54013__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__42645__auto__ = f__$1;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__54013,map__54013__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__42645__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__42645__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__42645__auto__){
return or__42645__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__54013,map__54013__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__42645__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__54016 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__54016)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__54016)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__54017 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__54017)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__54017)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__54017)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__54017)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__54017)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__54017)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__54017,or__42645__auto____$1,or__42645__auto__,map__54013,map__54013__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__54007_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__54007_SHARP_);
});})(g,temp__4657__auto__,G__54017,or__42645__auto____$1,or__42645__auto__,map__54013,map__54013__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__54018){
while(true){
var vec__54022 = p__54018;
var seq__54023 = cljs.core.seq.call(null,vec__54022);
var first__54024 = cljs.core.first.call(null,seq__54023);
var seq__54023__$1 = cljs.core.next.call(null,seq__54023);
var x = first__54024;
var xs = seq__54023__$1;
var data = vec__54022;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__54025 = dp;
var G__54026 = xs;
p = G__54025;
p__54018 = G__54026;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__54040 = input;
var vec__54041 = G__54040;
var seq__54042 = cljs.core.seq.call(null,vec__54041);
var first__54043 = cljs.core.first.call(null,seq__54042);
var seq__54042__$1 = cljs.core.next.call(null,seq__54042);
var x = first__54043;
var xs = seq__54042__$1;
var data = vec__54041;
var i = (0);
var p__$1 = p;
var G__54040__$1 = G__54040;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__54044 = G__54040__$1;
var seq__54045 = cljs.core.seq.call(null,vec__54044);
var first__54046 = cljs.core.first.call(null,seq__54045);
var seq__54045__$1 = cljs.core.next.call(null,seq__54045);
var x__$1 = first__54046;
var xs__$1 = seq__54045__$1;
var data__$1 = vec__54044;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__54047 = dp;
var G__54048 = xs__$1;
var G__54049 = (i__$2 + (1));
p__$1 = G__54047;
G__54040__$1 = G__54048;
i__$1 = G__54049;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__42645__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec54053 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec54053 = (function (regex_spec_impl,re,gfn,meta54054){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta54054 = meta54054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec54053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54055,meta54054__$1){
var self__ = this;
var _54055__$1 = this;
return (new cljs.spec.t_cljs$spec54053(self__.regex_spec_impl,self__.re,self__.gfn,meta54054__$1));
});

cljs.spec.t_cljs$spec54053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54055){
var self__ = this;
var _54055__$1 = this;
return self__.meta54054;
});

cljs.spec.t_cljs$spec54053.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec54053.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec54053.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec54053.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec54053.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec54053.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec54053.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec54053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta54054","meta54054",1534230831,null)], null);
});

cljs.spec.t_cljs$spec54053.cljs$lang$type = true;

cljs.spec.t_cljs$spec54053.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec54053";

cljs.spec.t_cljs$spec54053.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec54053");
});

cljs.spec.__GT_t_cljs$spec54053 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec54053(regex_spec_impl__$1,re__$1,gfn__$1,meta54054){
return (new cljs.spec.t_cljs$spec54053(regex_spec_impl__$1,re__$1,gfn__$1,meta54054));
});

}

return (new cljs.spec.t_cljs$spec54053(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__42633__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__42633__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__42633__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__54056_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__54056_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__54060 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__54060,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec54069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec54069 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta54070){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta54070 = meta54070;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec54069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_54071,meta54070__$1){
var self__ = this;
var _54071__$1 = this;
return (new cljs.spec.t_cljs$spec54069(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta54070__$1));
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_54071){
var self__ = this;
var _54071__$1 = this;
return self__.meta54070;
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec54069.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e54072){if((e54072 instanceof Error)){
var t = e54072;
return t;
} else {
throw e54072;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__54075__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__43631__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54073_54076 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54074_54077 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_54073_54076,_STAR_print_fn_STAR_54074_54077,sb__43631__auto__,___$3,specs){
return (function (x__43632__auto__){
return sb__43631__auto__.append(x__43632__auto__);
});})(_STAR_print_newline_STAR_54073_54076,_STAR_print_fn_STAR_54074_54077,sb__43631__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54074_54077;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54073_54076;
}
return [cljs.core.str(sb__43631__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__54075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54078__i = 0, G__54078__a = new Array(arguments.length -  0);
while (G__54078__i < G__54078__a.length) {G__54078__a[G__54078__i] = arguments[G__54078__i + 0]; ++G__54078__i;}
  args = new cljs.core.IndexedSeq(G__54078__a,0);
} 
return G__54075__delegate.call(this,args);};
G__54075.cljs$lang$maxFixedArity = 0;
G__54075.cljs$lang$applyTo = (function (arglist__54079){
var args = cljs.core.seq(arglist__54079);
return G__54075__delegate(args);
});
G__54075.cljs$core$IFn$_invoke$arity$variadic = G__54075__delegate;
return G__54075;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec54069.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__43479__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__43479__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__43479__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43479__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec54069.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta54070","meta54070",156010424,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec54069.cljs$lang$type = true;

cljs.spec.t_cljs$spec54069.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec54069";

cljs.spec.t_cljs$spec54069.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.spec/t_cljs$spec54069");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec54069 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec54069(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta54070){
return (new cljs.spec.t_cljs$spec54069(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta54070));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec54069(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__54080#","p1__54080#",125115686,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__54080#","p1__54080#",125115686,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__54080#","p1__54080#",125115686,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__54081#","p1__54081#",172561692,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__54081#","p1__54081#",172561692,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__54080#","p1__54080#",125115686,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__54080#","p1__54080#",125115686,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__54080#","p1__54080#",125115686,null)))),(function (p1__54080_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__54080_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__54080_SHARP_));
}),null,true,(function (p1__54081_SHARP_){
return cljs.core.map.call(null,(function (p__54082){
var vec__54083 = p__54082;
var k = cljs.core.nth.call(null,vec__54083,(0),null);
var v = cljs.core.nth.call(null,vec__54083,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__54081_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args54087 = [];
var len__43720__auto___54090 = arguments.length;
var i__43721__auto___54091 = (0);
while(true){
if((i__43721__auto___54091 < len__43720__auto___54090)){
args54087.push((arguments[i__43721__auto___54091]));

var G__54092 = (i__43721__auto___54091 + (1));
i__43721__auto___54091 = G__54092;
continue;
} else {
}
break;
}

var G__54089 = args54087.length;
switch (G__54089) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54087.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__54086_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__54086_SHARP_,cljs.spec.conform.call(null,spec,p1__54086_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__42633__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__42633__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__42633__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__42633__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__42633__auto__)){
return val.lessThan(end);
} else {
return and__42633__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__42633__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__42633__auto__)){
return val.lessThan(end);
} else {
return and__42633__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str("Spec assertion failed\n"),cljs.core.str((function (){var sb__43631__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54096_54098 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54097_54099 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_54096_54098,_STAR_print_fn_STAR_54097_54099,sb__43631__auto__,ed){
return (function (x__43632__auto__){
return sb__43631__auto__.append(x__43632__auto__);
});})(_STAR_print_newline_STAR_54096_54098,_STAR_print_fn_STAR_54097_54099,sb__43631__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54097_54099;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54096_54098;
}
return [cljs.core.str(sb__43631__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map