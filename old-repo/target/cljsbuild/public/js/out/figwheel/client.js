// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args54222 = [];
var len__43720__auto___54225 = arguments.length;
var i__43721__auto___54226 = (0);
while(true){
if((i__43721__auto___54226 < len__43720__auto___54225)){
args54222.push((arguments[i__43721__auto___54226]));

var G__54227 = (i__43721__auto___54226 + (1));
i__43721__auto___54226 = G__54227;
continue;
} else {
}
break;
}

var G__54224 = args54222.length;
switch (G__54224) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54222.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__43727__auto__ = [];
var len__43720__auto___54230 = arguments.length;
var i__43721__auto___54231 = (0);
while(true){
if((i__43721__auto___54231 < len__43720__auto___54230)){
args__43727__auto__.push((arguments[i__43721__auto___54231]));

var G__54232 = (i__43721__auto___54231 + (1));
i__43721__auto___54231 = G__54232;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54229){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54229));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__43727__auto__ = [];
var len__43720__auto___54234 = arguments.length;
var i__43721__auto___54235 = (0);
while(true){
if((i__43721__auto___54235 < len__43720__auto___54234)){
args__43727__auto__.push((arguments[i__43721__auto___54235]));

var G__54236 = (i__43721__auto___54235 + (1));
i__43721__auto___54235 = G__54236;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54233){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54233));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54237 = cljs.core._EQ_;
var expr__54238 = (function (){var or__42645__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54241){if((e54241 instanceof Error)){
var e = e54241;
return false;
} else {
throw e54241;

}
}})();
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54237.call(null,"true",expr__54238))){
return true;
} else {
if(cljs.core.truth_(pred__54237.call(null,"false",expr__54238))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54238)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e54243){if((e54243 instanceof Error)){
var e = e54243;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54243;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54244){
var map__54247 = p__54244;
var map__54247__$1 = ((((!((map__54247 == null)))?((((map__54247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54247):map__54247);
var message = cljs.core.get.call(null,map__54247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54247__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__42645__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__42633__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__42633__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__42633__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__44817__auto___54409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___54409,ch){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___54409,ch){
return (function (state_54378){
var state_val_54379 = (state_54378[(1)]);
if((state_val_54379 === (7))){
var inst_54374 = (state_54378[(2)]);
var state_54378__$1 = state_54378;
var statearr_54380_54410 = state_54378__$1;
(statearr_54380_54410[(2)] = inst_54374);

(statearr_54380_54410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (1))){
var state_54378__$1 = state_54378;
var statearr_54381_54411 = state_54378__$1;
(statearr_54381_54411[(2)] = null);

(statearr_54381_54411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (4))){
var inst_54331 = (state_54378[(7)]);
var inst_54331__$1 = (state_54378[(2)]);
var state_54378__$1 = (function (){var statearr_54382 = state_54378;
(statearr_54382[(7)] = inst_54331__$1);

return statearr_54382;
})();
if(cljs.core.truth_(inst_54331__$1)){
var statearr_54383_54412 = state_54378__$1;
(statearr_54383_54412[(1)] = (5));

} else {
var statearr_54384_54413 = state_54378__$1;
(statearr_54384_54413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (15))){
var inst_54338 = (state_54378[(8)]);
var inst_54353 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54338);
var inst_54354 = cljs.core.first.call(null,inst_54353);
var inst_54355 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54354);
var inst_54356 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54355)].join('');
var inst_54357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54356);
var state_54378__$1 = state_54378;
var statearr_54385_54414 = state_54378__$1;
(statearr_54385_54414[(2)] = inst_54357);

(statearr_54385_54414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (13))){
var inst_54362 = (state_54378[(2)]);
var state_54378__$1 = state_54378;
var statearr_54386_54415 = state_54378__$1;
(statearr_54386_54415[(2)] = inst_54362);

(statearr_54386_54415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (6))){
var state_54378__$1 = state_54378;
var statearr_54387_54416 = state_54378__$1;
(statearr_54387_54416[(2)] = null);

(statearr_54387_54416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (17))){
var inst_54360 = (state_54378[(2)]);
var state_54378__$1 = state_54378;
var statearr_54388_54417 = state_54378__$1;
(statearr_54388_54417[(2)] = inst_54360);

(statearr_54388_54417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (3))){
var inst_54376 = (state_54378[(2)]);
var state_54378__$1 = state_54378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54378__$1,inst_54376);
} else {
if((state_val_54379 === (12))){
var inst_54337 = (state_54378[(9)]);
var inst_54351 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54337,opts);
var state_54378__$1 = state_54378;
if(cljs.core.truth_(inst_54351)){
var statearr_54389_54418 = state_54378__$1;
(statearr_54389_54418[(1)] = (15));

} else {
var statearr_54390_54419 = state_54378__$1;
(statearr_54390_54419[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (2))){
var state_54378__$1 = state_54378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54378__$1,(4),ch);
} else {
if((state_val_54379 === (11))){
var inst_54338 = (state_54378[(8)]);
var inst_54343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54344 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54338);
var inst_54345 = cljs.core.async.timeout.call(null,(1000));
var inst_54346 = [inst_54344,inst_54345];
var inst_54347 = (new cljs.core.PersistentVector(null,2,(5),inst_54343,inst_54346,null));
var state_54378__$1 = state_54378;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54378__$1,(14),inst_54347);
} else {
if((state_val_54379 === (9))){
var inst_54338 = (state_54378[(8)]);
var inst_54364 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54365 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54338);
var inst_54366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54365);
var inst_54367 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54366)].join('');
var inst_54368 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54367);
var state_54378__$1 = (function (){var statearr_54391 = state_54378;
(statearr_54391[(10)] = inst_54364);

return statearr_54391;
})();
var statearr_54392_54420 = state_54378__$1;
(statearr_54392_54420[(2)] = inst_54368);

(statearr_54392_54420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (5))){
var inst_54331 = (state_54378[(7)]);
var inst_54333 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54334 = (new cljs.core.PersistentArrayMap(null,2,inst_54333,null));
var inst_54335 = (new cljs.core.PersistentHashSet(null,inst_54334,null));
var inst_54336 = figwheel.client.focus_msgs.call(null,inst_54335,inst_54331);
var inst_54337 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54336);
var inst_54338 = cljs.core.first.call(null,inst_54336);
var inst_54339 = figwheel.client.autoload_QMARK_.call(null);
var state_54378__$1 = (function (){var statearr_54393 = state_54378;
(statearr_54393[(8)] = inst_54338);

(statearr_54393[(9)] = inst_54337);

return statearr_54393;
})();
if(cljs.core.truth_(inst_54339)){
var statearr_54394_54421 = state_54378__$1;
(statearr_54394_54421[(1)] = (8));

} else {
var statearr_54395_54422 = state_54378__$1;
(statearr_54395_54422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (14))){
var inst_54349 = (state_54378[(2)]);
var state_54378__$1 = state_54378;
var statearr_54396_54423 = state_54378__$1;
(statearr_54396_54423[(2)] = inst_54349);

(statearr_54396_54423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (16))){
var state_54378__$1 = state_54378;
var statearr_54397_54424 = state_54378__$1;
(statearr_54397_54424[(2)] = null);

(statearr_54397_54424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (10))){
var inst_54370 = (state_54378[(2)]);
var state_54378__$1 = (function (){var statearr_54398 = state_54378;
(statearr_54398[(11)] = inst_54370);

return statearr_54398;
})();
var statearr_54399_54425 = state_54378__$1;
(statearr_54399_54425[(2)] = null);

(statearr_54399_54425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54379 === (8))){
var inst_54337 = (state_54378[(9)]);
var inst_54341 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54337,opts);
var state_54378__$1 = state_54378;
if(cljs.core.truth_(inst_54341)){
var statearr_54400_54426 = state_54378__$1;
(statearr_54400_54426[(1)] = (11));

} else {
var statearr_54401_54427 = state_54378__$1;
(statearr_54401_54427[(1)] = (12));

}

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
}
}
}
}
}
}
});})(c__44817__auto___54409,ch))
;
return ((function (switch__44705__auto__,c__44817__auto___54409,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44706__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44706__auto____0 = (function (){
var statearr_54405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54405[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44706__auto__);

(statearr_54405[(1)] = (1));

return statearr_54405;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44706__auto____1 = (function (state_54378){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_54378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e54406){if((e54406 instanceof Object)){
var ex__44709__auto__ = e54406;
var statearr_54407_54428 = state_54378;
(statearr_54407_54428[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54429 = state_54378;
state_54378 = G__54429;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44706__auto__ = function(state_54378){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44706__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44706__auto____1.call(this,state_54378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44706__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44706__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___54409,ch))
})();
var state__44819__auto__ = (function (){var statearr_54408 = f__44818__auto__.call(null);
(statearr_54408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___54409);

return statearr_54408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___54409,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54430_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54430_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_54433 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54433){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54432){if((e54432 instanceof Error)){
var e = e54432;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54433], null));
} else {
var e = e54432;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54433))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54434){
var map__54443 = p__54434;
var map__54443__$1 = ((((!((map__54443 == null)))?((((map__54443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54443):map__54443);
var opts = map__54443__$1;
var build_id = cljs.core.get.call(null,map__54443__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54443,map__54443__$1,opts,build_id){
return (function (p__54445){
var vec__54446 = p__54445;
var seq__54447 = cljs.core.seq.call(null,vec__54446);
var first__54448 = cljs.core.first.call(null,seq__54447);
var seq__54447__$1 = cljs.core.next.call(null,seq__54447);
var map__54449 = first__54448;
var map__54449__$1 = ((((!((map__54449 == null)))?((((map__54449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54449):map__54449);
var msg = map__54449__$1;
var msg_name = cljs.core.get.call(null,map__54449__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54447__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54446,seq__54447,first__54448,seq__54447__$1,map__54449,map__54449__$1,msg,msg_name,_,map__54443,map__54443__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54446,seq__54447,first__54448,seq__54447__$1,map__54449,map__54449__$1,msg,msg_name,_,map__54443,map__54443__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54443,map__54443__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54457){
var vec__54458 = p__54457;
var seq__54459 = cljs.core.seq.call(null,vec__54458);
var first__54460 = cljs.core.first.call(null,seq__54459);
var seq__54459__$1 = cljs.core.next.call(null,seq__54459);
var map__54461 = first__54460;
var map__54461__$1 = ((((!((map__54461 == null)))?((((map__54461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54461):map__54461);
var msg = map__54461__$1;
var msg_name = cljs.core.get.call(null,map__54461__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54459__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54463){
var map__54475 = p__54463;
var map__54475__$1 = ((((!((map__54475 == null)))?((((map__54475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54475):map__54475);
var on_compile_warning = cljs.core.get.call(null,map__54475__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54475__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54475,map__54475__$1,on_compile_warning,on_compile_fail){
return (function (p__54477){
var vec__54478 = p__54477;
var seq__54479 = cljs.core.seq.call(null,vec__54478);
var first__54480 = cljs.core.first.call(null,seq__54479);
var seq__54479__$1 = cljs.core.next.call(null,seq__54479);
var map__54481 = first__54480;
var map__54481__$1 = ((((!((map__54481 == null)))?((((map__54481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54481):map__54481);
var msg = map__54481__$1;
var msg_name = cljs.core.get.call(null,map__54481__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54479__$1;
var pred__54483 = cljs.core._EQ_;
var expr__54484 = msg_name;
if(cljs.core.truth_(pred__54483.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54484))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54483.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54484))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54475,map__54475__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,msg_hist,msg_names,msg){
return (function (state_54712){
var state_val_54713 = (state_54712[(1)]);
if((state_val_54713 === (7))){
var inst_54632 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
if(cljs.core.truth_(inst_54632)){
var statearr_54714_54764 = state_54712__$1;
(statearr_54714_54764[(1)] = (8));

} else {
var statearr_54715_54765 = state_54712__$1;
(statearr_54715_54765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (20))){
var inst_54706 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54716_54766 = state_54712__$1;
(statearr_54716_54766[(2)] = inst_54706);

(statearr_54716_54766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (27))){
var inst_54702 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54717_54767 = state_54712__$1;
(statearr_54717_54767[(2)] = inst_54702);

(statearr_54717_54767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (1))){
var inst_54625 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54712__$1 = state_54712;
if(cljs.core.truth_(inst_54625)){
var statearr_54718_54768 = state_54712__$1;
(statearr_54718_54768[(1)] = (2));

} else {
var statearr_54719_54769 = state_54712__$1;
(statearr_54719_54769[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (24))){
var inst_54704 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54720_54770 = state_54712__$1;
(statearr_54720_54770[(2)] = inst_54704);

(statearr_54720_54770[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (4))){
var inst_54710 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54712__$1,inst_54710);
} else {
if((state_val_54713 === (15))){
var inst_54708 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54721_54771 = state_54712__$1;
(statearr_54721_54771[(2)] = inst_54708);

(statearr_54721_54771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (21))){
var inst_54661 = (state_54712[(2)]);
var inst_54662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54663 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54662);
var state_54712__$1 = (function (){var statearr_54722 = state_54712;
(statearr_54722[(7)] = inst_54661);

return statearr_54722;
})();
var statearr_54723_54772 = state_54712__$1;
(statearr_54723_54772[(2)] = inst_54663);

(statearr_54723_54772[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (31))){
var inst_54691 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54712__$1 = state_54712;
if(cljs.core.truth_(inst_54691)){
var statearr_54724_54773 = state_54712__$1;
(statearr_54724_54773[(1)] = (34));

} else {
var statearr_54725_54774 = state_54712__$1;
(statearr_54725_54774[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (32))){
var inst_54700 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54726_54775 = state_54712__$1;
(statearr_54726_54775[(2)] = inst_54700);

(statearr_54726_54775[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (33))){
var inst_54687 = (state_54712[(2)]);
var inst_54688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54689 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54688);
var state_54712__$1 = (function (){var statearr_54727 = state_54712;
(statearr_54727[(8)] = inst_54687);

return statearr_54727;
})();
var statearr_54728_54776 = state_54712__$1;
(statearr_54728_54776[(2)] = inst_54689);

(statearr_54728_54776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (13))){
var inst_54646 = figwheel.client.heads_up.clear.call(null);
var state_54712__$1 = state_54712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(16),inst_54646);
} else {
if((state_val_54713 === (22))){
var inst_54667 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54668 = figwheel.client.heads_up.append_warning_message.call(null,inst_54667);
var state_54712__$1 = state_54712;
var statearr_54729_54777 = state_54712__$1;
(statearr_54729_54777[(2)] = inst_54668);

(statearr_54729_54777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (36))){
var inst_54698 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54730_54778 = state_54712__$1;
(statearr_54730_54778[(2)] = inst_54698);

(statearr_54730_54778[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (29))){
var inst_54678 = (state_54712[(2)]);
var inst_54679 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54680 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54679);
var state_54712__$1 = (function (){var statearr_54731 = state_54712;
(statearr_54731[(9)] = inst_54678);

return statearr_54731;
})();
var statearr_54732_54779 = state_54712__$1;
(statearr_54732_54779[(2)] = inst_54680);

(statearr_54732_54779[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (6))){
var inst_54627 = (state_54712[(10)]);
var state_54712__$1 = state_54712;
var statearr_54733_54780 = state_54712__$1;
(statearr_54733_54780[(2)] = inst_54627);

(statearr_54733_54780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (28))){
var inst_54674 = (state_54712[(2)]);
var inst_54675 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54676 = figwheel.client.heads_up.display_warning.call(null,inst_54675);
var state_54712__$1 = (function (){var statearr_54734 = state_54712;
(statearr_54734[(11)] = inst_54674);

return statearr_54734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(29),inst_54676);
} else {
if((state_val_54713 === (25))){
var inst_54672 = figwheel.client.heads_up.clear.call(null);
var state_54712__$1 = state_54712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(28),inst_54672);
} else {
if((state_val_54713 === (34))){
var inst_54693 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54712__$1 = state_54712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(37),inst_54693);
} else {
if((state_val_54713 === (17))){
var inst_54652 = (state_54712[(2)]);
var inst_54653 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54654 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54653);
var state_54712__$1 = (function (){var statearr_54735 = state_54712;
(statearr_54735[(12)] = inst_54652);

return statearr_54735;
})();
var statearr_54736_54781 = state_54712__$1;
(statearr_54736_54781[(2)] = inst_54654);

(statearr_54736_54781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (3))){
var inst_54644 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54712__$1 = state_54712;
if(cljs.core.truth_(inst_54644)){
var statearr_54737_54782 = state_54712__$1;
(statearr_54737_54782[(1)] = (13));

} else {
var statearr_54738_54783 = state_54712__$1;
(statearr_54738_54783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (12))){
var inst_54640 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54739_54784 = state_54712__$1;
(statearr_54739_54784[(2)] = inst_54640);

(statearr_54739_54784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (2))){
var inst_54627 = (state_54712[(10)]);
var inst_54627__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54712__$1 = (function (){var statearr_54740 = state_54712;
(statearr_54740[(10)] = inst_54627__$1);

return statearr_54740;
})();
if(cljs.core.truth_(inst_54627__$1)){
var statearr_54741_54785 = state_54712__$1;
(statearr_54741_54785[(1)] = (5));

} else {
var statearr_54742_54786 = state_54712__$1;
(statearr_54742_54786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (23))){
var inst_54670 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54712__$1 = state_54712;
if(cljs.core.truth_(inst_54670)){
var statearr_54743_54787 = state_54712__$1;
(statearr_54743_54787[(1)] = (25));

} else {
var statearr_54744_54788 = state_54712__$1;
(statearr_54744_54788[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (35))){
var state_54712__$1 = state_54712;
var statearr_54745_54789 = state_54712__$1;
(statearr_54745_54789[(2)] = null);

(statearr_54745_54789[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (19))){
var inst_54665 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54712__$1 = state_54712;
if(cljs.core.truth_(inst_54665)){
var statearr_54746_54790 = state_54712__$1;
(statearr_54746_54790[(1)] = (22));

} else {
var statearr_54747_54791 = state_54712__$1;
(statearr_54747_54791[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (11))){
var inst_54636 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54748_54792 = state_54712__$1;
(statearr_54748_54792[(2)] = inst_54636);

(statearr_54748_54792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (9))){
var inst_54638 = figwheel.client.heads_up.clear.call(null);
var state_54712__$1 = state_54712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(12),inst_54638);
} else {
if((state_val_54713 === (5))){
var inst_54629 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54712__$1 = state_54712;
var statearr_54749_54793 = state_54712__$1;
(statearr_54749_54793[(2)] = inst_54629);

(statearr_54749_54793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (14))){
var inst_54656 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54712__$1 = state_54712;
if(cljs.core.truth_(inst_54656)){
var statearr_54750_54794 = state_54712__$1;
(statearr_54750_54794[(1)] = (18));

} else {
var statearr_54751_54795 = state_54712__$1;
(statearr_54751_54795[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (26))){
var inst_54682 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54712__$1 = state_54712;
if(cljs.core.truth_(inst_54682)){
var statearr_54752_54796 = state_54712__$1;
(statearr_54752_54796[(1)] = (30));

} else {
var statearr_54753_54797 = state_54712__$1;
(statearr_54753_54797[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (16))){
var inst_54648 = (state_54712[(2)]);
var inst_54649 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54650 = figwheel.client.heads_up.display_exception.call(null,inst_54649);
var state_54712__$1 = (function (){var statearr_54754 = state_54712;
(statearr_54754[(13)] = inst_54648);

return statearr_54754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(17),inst_54650);
} else {
if((state_val_54713 === (30))){
var inst_54684 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54685 = figwheel.client.heads_up.display_warning.call(null,inst_54684);
var state_54712__$1 = state_54712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(33),inst_54685);
} else {
if((state_val_54713 === (10))){
var inst_54642 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54755_54798 = state_54712__$1;
(statearr_54755_54798[(2)] = inst_54642);

(statearr_54755_54798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (18))){
var inst_54658 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54659 = figwheel.client.heads_up.display_exception.call(null,inst_54658);
var state_54712__$1 = state_54712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(21),inst_54659);
} else {
if((state_val_54713 === (37))){
var inst_54695 = (state_54712[(2)]);
var state_54712__$1 = state_54712;
var statearr_54756_54799 = state_54712__$1;
(statearr_54756_54799[(2)] = inst_54695);

(statearr_54756_54799[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54713 === (8))){
var inst_54634 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54712__$1 = state_54712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54712__$1,(11),inst_54634);
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
}
}
}
}
});})(c__44817__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44705__auto__,c__44817__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto____0 = (function (){
var statearr_54760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54760[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto__);

(statearr_54760[(1)] = (1));

return statearr_54760;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto____1 = (function (state_54712){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_54712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e54761){if((e54761 instanceof Object)){
var ex__44709__auto__ = e54761;
var statearr_54762_54800 = state_54712;
(statearr_54762_54800[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54801 = state_54712;
state_54712 = G__54801;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto__ = function(state_54712){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto____1.call(this,state_54712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,msg_hist,msg_names,msg))
})();
var state__44819__auto__ = (function (){var statearr_54763 = f__44818__auto__.call(null);
(statearr_54763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_54763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,msg_hist,msg_names,msg))
);

return c__44817__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44817__auto___54864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___54864,ch){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___54864,ch){
return (function (state_54847){
var state_val_54848 = (state_54847[(1)]);
if((state_val_54848 === (1))){
var state_54847__$1 = state_54847;
var statearr_54849_54865 = state_54847__$1;
(statearr_54849_54865[(2)] = null);

(statearr_54849_54865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54848 === (2))){
var state_54847__$1 = state_54847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54847__$1,(4),ch);
} else {
if((state_val_54848 === (3))){
var inst_54845 = (state_54847[(2)]);
var state_54847__$1 = state_54847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54847__$1,inst_54845);
} else {
if((state_val_54848 === (4))){
var inst_54835 = (state_54847[(7)]);
var inst_54835__$1 = (state_54847[(2)]);
var state_54847__$1 = (function (){var statearr_54850 = state_54847;
(statearr_54850[(7)] = inst_54835__$1);

return statearr_54850;
})();
if(cljs.core.truth_(inst_54835__$1)){
var statearr_54851_54866 = state_54847__$1;
(statearr_54851_54866[(1)] = (5));

} else {
var statearr_54852_54867 = state_54847__$1;
(statearr_54852_54867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54848 === (5))){
var inst_54835 = (state_54847[(7)]);
var inst_54837 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54835);
var state_54847__$1 = state_54847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54847__$1,(8),inst_54837);
} else {
if((state_val_54848 === (6))){
var state_54847__$1 = state_54847;
var statearr_54853_54868 = state_54847__$1;
(statearr_54853_54868[(2)] = null);

(statearr_54853_54868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54848 === (7))){
var inst_54843 = (state_54847[(2)]);
var state_54847__$1 = state_54847;
var statearr_54854_54869 = state_54847__$1;
(statearr_54854_54869[(2)] = inst_54843);

(statearr_54854_54869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54848 === (8))){
var inst_54839 = (state_54847[(2)]);
var state_54847__$1 = (function (){var statearr_54855 = state_54847;
(statearr_54855[(8)] = inst_54839);

return statearr_54855;
})();
var statearr_54856_54870 = state_54847__$1;
(statearr_54856_54870[(2)] = null);

(statearr_54856_54870[(1)] = (2));


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
});})(c__44817__auto___54864,ch))
;
return ((function (switch__44705__auto__,c__44817__auto___54864,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44706__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44706__auto____0 = (function (){
var statearr_54860 = [null,null,null,null,null,null,null,null,null];
(statearr_54860[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44706__auto__);

(statearr_54860[(1)] = (1));

return statearr_54860;
});
var figwheel$client$heads_up_plugin_$_state_machine__44706__auto____1 = (function (state_54847){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_54847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e54861){if((e54861 instanceof Object)){
var ex__44709__auto__ = e54861;
var statearr_54862_54871 = state_54847;
(statearr_54862_54871[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54872 = state_54847;
state_54847 = G__54872;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44706__auto__ = function(state_54847){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44706__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44706__auto____1.call(this,state_54847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44706__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44706__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___54864,ch))
})();
var state__44819__auto__ = (function (){var statearr_54863 = f__44818__auto__.call(null);
(statearr_54863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___54864);

return statearr_54863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___54864,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__){
return (function (state_54893){
var state_val_54894 = (state_54893[(1)]);
if((state_val_54894 === (1))){
var inst_54888 = cljs.core.async.timeout.call(null,(3000));
var state_54893__$1 = state_54893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54893__$1,(2),inst_54888);
} else {
if((state_val_54894 === (2))){
var inst_54890 = (state_54893[(2)]);
var inst_54891 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54893__$1 = (function (){var statearr_54895 = state_54893;
(statearr_54895[(7)] = inst_54890);

return statearr_54895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54893__$1,inst_54891);
} else {
return null;
}
}
});})(c__44817__auto__))
;
return ((function (switch__44705__auto__,c__44817__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44706__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44706__auto____0 = (function (){
var statearr_54899 = [null,null,null,null,null,null,null,null];
(statearr_54899[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44706__auto__);

(statearr_54899[(1)] = (1));

return statearr_54899;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44706__auto____1 = (function (state_54893){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_54893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e54900){if((e54900 instanceof Object)){
var ex__44709__auto__ = e54900;
var statearr_54901_54903 = state_54893;
(statearr_54901_54903[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54904 = state_54893;
state_54893 = G__54904;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44706__auto__ = function(state_54893){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44706__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44706__auto____1.call(this,state_54893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44706__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44706__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__))
})();
var state__44819__auto__ = (function (){var statearr_54902 = f__44818__auto__.call(null);
(statearr_54902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_54902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__))
);

return c__44817__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54927){
var state_val_54928 = (state_54927[(1)]);
if((state_val_54928 === (1))){
var inst_54921 = cljs.core.async.timeout.call(null,(2000));
var state_54927__$1 = state_54927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54927__$1,(2),inst_54921);
} else {
if((state_val_54928 === (2))){
var inst_54923 = (state_54927[(2)]);
var inst_54924 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_54925 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54924);
var state_54927__$1 = (function (){var statearr_54929 = state_54927;
(statearr_54929[(7)] = inst_54923);

return statearr_54929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54927__$1,inst_54925);
} else {
return null;
}
}
});})(c__44817__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__44705__auto__,c__44817__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto____0 = (function (){
var statearr_54933 = [null,null,null,null,null,null,null,null];
(statearr_54933[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto__);

(statearr_54933[(1)] = (1));

return statearr_54933;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto____1 = (function (state_54927){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_54927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e54934){if((e54934 instanceof Object)){
var ex__44709__auto__ = e54934;
var statearr_54935_54937 = state_54927;
(statearr_54935_54937[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54938 = state_54927;
state_54927 = G__54938;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto__ = function(state_54927){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto____1.call(this,state_54927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,figwheel_version,temp__4657__auto__))
})();
var state__44819__auto__ = (function (){var statearr_54936 = f__44818__auto__.call(null);
(statearr_54936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_54936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,figwheel_version,temp__4657__auto__))
);

return c__44817__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54939){
var map__54943 = p__54939;
var map__54943__$1 = ((((!((map__54943 == null)))?((((map__54943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54943):map__54943);
var file = cljs.core.get.call(null,map__54943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54943__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54943__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54945 = "";
var G__54945__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__54945),cljs.core.str("file "),cljs.core.str(file)].join(''):G__54945);
var G__54945__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__54945__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__54945__$1);
if(cljs.core.truth_((function (){var and__42633__auto__ = line;
if(cljs.core.truth_(and__42633__auto__)){
return column;
} else {
return and__42633__auto__;
}
})())){
return [cljs.core.str(G__54945__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__54945__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54946){
var map__54953 = p__54946;
var map__54953__$1 = ((((!((map__54953 == null)))?((((map__54953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54953):map__54953);
var ed = map__54953__$1;
var formatted_exception = cljs.core.get.call(null,map__54953__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54953__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54953__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54955_54959 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54956_54960 = null;
var count__54957_54961 = (0);
var i__54958_54962 = (0);
while(true){
if((i__54958_54962 < count__54957_54961)){
var msg_54963 = cljs.core._nth.call(null,chunk__54956_54960,i__54958_54962);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54963);

var G__54964 = seq__54955_54959;
var G__54965 = chunk__54956_54960;
var G__54966 = count__54957_54961;
var G__54967 = (i__54958_54962 + (1));
seq__54955_54959 = G__54964;
chunk__54956_54960 = G__54965;
count__54957_54961 = G__54966;
i__54958_54962 = G__54967;
continue;
} else {
var temp__4657__auto___54968 = cljs.core.seq.call(null,seq__54955_54959);
if(temp__4657__auto___54968){
var seq__54955_54969__$1 = temp__4657__auto___54968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54955_54969__$1)){
var c__43456__auto___54970 = cljs.core.chunk_first.call(null,seq__54955_54969__$1);
var G__54971 = cljs.core.chunk_rest.call(null,seq__54955_54969__$1);
var G__54972 = c__43456__auto___54970;
var G__54973 = cljs.core.count.call(null,c__43456__auto___54970);
var G__54974 = (0);
seq__54955_54959 = G__54971;
chunk__54956_54960 = G__54972;
count__54957_54961 = G__54973;
i__54958_54962 = G__54974;
continue;
} else {
var msg_54975 = cljs.core.first.call(null,seq__54955_54969__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54975);

var G__54976 = cljs.core.next.call(null,seq__54955_54969__$1);
var G__54977 = null;
var G__54978 = (0);
var G__54979 = (0);
seq__54955_54959 = G__54976;
chunk__54956_54960 = G__54977;
count__54957_54961 = G__54978;
i__54958_54962 = G__54979;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54980){
var map__54983 = p__54980;
var map__54983__$1 = ((((!((map__54983 == null)))?((((map__54983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54983):map__54983);
var w = map__54983__$1;
var message = cljs.core.get.call(null,map__54983__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__42633__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__42633__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__42633__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__54995 = cljs.core.seq.call(null,plugins);
var chunk__54996 = null;
var count__54997 = (0);
var i__54998 = (0);
while(true){
if((i__54998 < count__54997)){
var vec__54999 = cljs.core._nth.call(null,chunk__54996,i__54998);
var k = cljs.core.nth.call(null,vec__54999,(0),null);
var plugin = cljs.core.nth.call(null,vec__54999,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55005 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54995,chunk__54996,count__54997,i__54998,pl_55005,vec__54999,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55005.call(null,msg_hist);
});})(seq__54995,chunk__54996,count__54997,i__54998,pl_55005,vec__54999,k,plugin))
);
} else {
}

var G__55006 = seq__54995;
var G__55007 = chunk__54996;
var G__55008 = count__54997;
var G__55009 = (i__54998 + (1));
seq__54995 = G__55006;
chunk__54996 = G__55007;
count__54997 = G__55008;
i__54998 = G__55009;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54995);
if(temp__4657__auto__){
var seq__54995__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54995__$1)){
var c__43456__auto__ = cljs.core.chunk_first.call(null,seq__54995__$1);
var G__55010 = cljs.core.chunk_rest.call(null,seq__54995__$1);
var G__55011 = c__43456__auto__;
var G__55012 = cljs.core.count.call(null,c__43456__auto__);
var G__55013 = (0);
seq__54995 = G__55010;
chunk__54996 = G__55011;
count__54997 = G__55012;
i__54998 = G__55013;
continue;
} else {
var vec__55002 = cljs.core.first.call(null,seq__54995__$1);
var k = cljs.core.nth.call(null,vec__55002,(0),null);
var plugin = cljs.core.nth.call(null,vec__55002,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55014 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54995,chunk__54996,count__54997,i__54998,pl_55014,vec__55002,k,plugin,seq__54995__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55014.call(null,msg_hist);
});})(seq__54995,chunk__54996,count__54997,i__54998,pl_55014,vec__55002,k,plugin,seq__54995__$1,temp__4657__auto__))
);
} else {
}

var G__55015 = cljs.core.next.call(null,seq__54995__$1);
var G__55016 = null;
var G__55017 = (0);
var G__55018 = (0);
seq__54995 = G__55015;
chunk__54996 = G__55016;
count__54997 = G__55017;
i__54998 = G__55018;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args55019 = [];
var len__43720__auto___55026 = arguments.length;
var i__43721__auto___55027 = (0);
while(true){
if((i__43721__auto___55027 < len__43720__auto___55026)){
args55019.push((arguments[i__43721__auto___55027]));

var G__55028 = (i__43721__auto___55027 + (1));
i__43721__auto___55027 = G__55028;
continue;
} else {
}
break;
}

var G__55021 = args55019.length;
switch (G__55021) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55019.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__55022_55030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55023_55031 = null;
var count__55024_55032 = (0);
var i__55025_55033 = (0);
while(true){
if((i__55025_55033 < count__55024_55032)){
var msg_55034 = cljs.core._nth.call(null,chunk__55023_55031,i__55025_55033);
figwheel.client.socket.handle_incoming_message.call(null,msg_55034);

var G__55035 = seq__55022_55030;
var G__55036 = chunk__55023_55031;
var G__55037 = count__55024_55032;
var G__55038 = (i__55025_55033 + (1));
seq__55022_55030 = G__55035;
chunk__55023_55031 = G__55036;
count__55024_55032 = G__55037;
i__55025_55033 = G__55038;
continue;
} else {
var temp__4657__auto___55039 = cljs.core.seq.call(null,seq__55022_55030);
if(temp__4657__auto___55039){
var seq__55022_55040__$1 = temp__4657__auto___55039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55022_55040__$1)){
var c__43456__auto___55041 = cljs.core.chunk_first.call(null,seq__55022_55040__$1);
var G__55042 = cljs.core.chunk_rest.call(null,seq__55022_55040__$1);
var G__55043 = c__43456__auto___55041;
var G__55044 = cljs.core.count.call(null,c__43456__auto___55041);
var G__55045 = (0);
seq__55022_55030 = G__55042;
chunk__55023_55031 = G__55043;
count__55024_55032 = G__55044;
i__55025_55033 = G__55045;
continue;
} else {
var msg_55046 = cljs.core.first.call(null,seq__55022_55040__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55046);

var G__55047 = cljs.core.next.call(null,seq__55022_55040__$1);
var G__55048 = null;
var G__55049 = (0);
var G__55050 = (0);
seq__55022_55030 = G__55047;
chunk__55023_55031 = G__55048;
count__55024_55032 = G__55049;
i__55025_55033 = G__55050;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__43727__auto__ = [];
var len__43720__auto___55055 = arguments.length;
var i__43721__auto___55056 = (0);
while(true){
if((i__43721__auto___55056 < len__43720__auto___55055)){
args__43727__auto__.push((arguments[i__43721__auto___55056]));

var G__55057 = (i__43721__auto___55056 + (1));
i__43721__auto___55056 = G__55057;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55052){
var map__55053 = p__55052;
var map__55053__$1 = ((((!((map__55053 == null)))?((((map__55053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55053):map__55053);
var opts = map__55053__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55051){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55051));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55059){if((e55059 instanceof Error)){
var e = e55059;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55059;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__55063){
var map__55064 = p__55063;
var map__55064__$1 = ((((!((map__55064 == null)))?((((map__55064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55064):map__55064);
var msg_name = cljs.core.get.call(null,map__55064__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map