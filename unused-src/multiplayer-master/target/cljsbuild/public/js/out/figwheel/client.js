// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36917 = cljs.core._EQ_;
var expr__36918 = (function (){var or__26004__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e36921){if((e36921 instanceof Error)){
var e = e36921;
return false;
} else {
throw e36921;

}
}})();
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36917.call(null,"true",expr__36918))){
return true;
} else {
if(cljs.core.truth_(pred__36917.call(null,"false",expr__36918))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36918)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36923){if((e36923 instanceof Error)){
var e = e36923;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36923;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__27069__auto__ = [];
var len__27062__auto___36925 = arguments.length;
var i__27063__auto___36926 = (0);
while(true){
if((i__27063__auto___36926 < len__27062__auto___36925)){
args__27069__auto__.push((arguments[i__27063__auto___36926]));

var G__36927 = (i__27063__auto___36926 + (1));
i__27063__auto___36926 = G__36927;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((0) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27070__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq36924){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36924));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36928){
var map__36931 = p__36928;
var map__36931__$1 = ((((!((map__36931 == null)))?((((map__36931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36931):map__36931);
var message = cljs.core.get.call(null,map__36931__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36931__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26004__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25992__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25992__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25992__auto__;
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
var c__30056__auto___37093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___37093,ch){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___37093,ch){
return (function (state_37062){
var state_val_37063 = (state_37062[(1)]);
if((state_val_37063 === (7))){
var inst_37058 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
var statearr_37064_37094 = state_37062__$1;
(statearr_37064_37094[(2)] = inst_37058);

(statearr_37064_37094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (1))){
var state_37062__$1 = state_37062;
var statearr_37065_37095 = state_37062__$1;
(statearr_37065_37095[(2)] = null);

(statearr_37065_37095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (4))){
var inst_37015 = (state_37062[(7)]);
var inst_37015__$1 = (state_37062[(2)]);
var state_37062__$1 = (function (){var statearr_37066 = state_37062;
(statearr_37066[(7)] = inst_37015__$1);

return statearr_37066;
})();
if(cljs.core.truth_(inst_37015__$1)){
var statearr_37067_37096 = state_37062__$1;
(statearr_37067_37096[(1)] = (5));

} else {
var statearr_37068_37097 = state_37062__$1;
(statearr_37068_37097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (15))){
var inst_37022 = (state_37062[(8)]);
var inst_37037 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37022);
var inst_37038 = cljs.core.first.call(null,inst_37037);
var inst_37039 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37038);
var inst_37040 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37039)].join('');
var inst_37041 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37040);
var state_37062__$1 = state_37062;
var statearr_37069_37098 = state_37062__$1;
(statearr_37069_37098[(2)] = inst_37041);

(statearr_37069_37098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (13))){
var inst_37046 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
var statearr_37070_37099 = state_37062__$1;
(statearr_37070_37099[(2)] = inst_37046);

(statearr_37070_37099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (6))){
var state_37062__$1 = state_37062;
var statearr_37071_37100 = state_37062__$1;
(statearr_37071_37100[(2)] = null);

(statearr_37071_37100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (17))){
var inst_37044 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
var statearr_37072_37101 = state_37062__$1;
(statearr_37072_37101[(2)] = inst_37044);

(statearr_37072_37101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (3))){
var inst_37060 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37062__$1,inst_37060);
} else {
if((state_val_37063 === (12))){
var inst_37021 = (state_37062[(9)]);
var inst_37035 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37021,opts);
var state_37062__$1 = state_37062;
if(cljs.core.truth_(inst_37035)){
var statearr_37073_37102 = state_37062__$1;
(statearr_37073_37102[(1)] = (15));

} else {
var statearr_37074_37103 = state_37062__$1;
(statearr_37074_37103[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (2))){
var state_37062__$1 = state_37062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37062__$1,(4),ch);
} else {
if((state_val_37063 === (11))){
var inst_37022 = (state_37062[(8)]);
var inst_37027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37028 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37022);
var inst_37029 = cljs.core.async.timeout.call(null,(1000));
var inst_37030 = [inst_37028,inst_37029];
var inst_37031 = (new cljs.core.PersistentVector(null,2,(5),inst_37027,inst_37030,null));
var state_37062__$1 = state_37062;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37062__$1,(14),inst_37031);
} else {
if((state_val_37063 === (9))){
var inst_37022 = (state_37062[(8)]);
var inst_37048 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37049 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37022);
var inst_37050 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37049);
var inst_37051 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37050)].join('');
var inst_37052 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37051);
var state_37062__$1 = (function (){var statearr_37075 = state_37062;
(statearr_37075[(10)] = inst_37048);

return statearr_37075;
})();
var statearr_37076_37104 = state_37062__$1;
(statearr_37076_37104[(2)] = inst_37052);

(statearr_37076_37104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (5))){
var inst_37015 = (state_37062[(7)]);
var inst_37017 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37018 = (new cljs.core.PersistentArrayMap(null,2,inst_37017,null));
var inst_37019 = (new cljs.core.PersistentHashSet(null,inst_37018,null));
var inst_37020 = figwheel.client.focus_msgs.call(null,inst_37019,inst_37015);
var inst_37021 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37020);
var inst_37022 = cljs.core.first.call(null,inst_37020);
var inst_37023 = figwheel.client.autoload_QMARK_.call(null);
var state_37062__$1 = (function (){var statearr_37077 = state_37062;
(statearr_37077[(9)] = inst_37021);

(statearr_37077[(8)] = inst_37022);

return statearr_37077;
})();
if(cljs.core.truth_(inst_37023)){
var statearr_37078_37105 = state_37062__$1;
(statearr_37078_37105[(1)] = (8));

} else {
var statearr_37079_37106 = state_37062__$1;
(statearr_37079_37106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (14))){
var inst_37033 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
var statearr_37080_37107 = state_37062__$1;
(statearr_37080_37107[(2)] = inst_37033);

(statearr_37080_37107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (16))){
var state_37062__$1 = state_37062;
var statearr_37081_37108 = state_37062__$1;
(statearr_37081_37108[(2)] = null);

(statearr_37081_37108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (10))){
var inst_37054 = (state_37062[(2)]);
var state_37062__$1 = (function (){var statearr_37082 = state_37062;
(statearr_37082[(11)] = inst_37054);

return statearr_37082;
})();
var statearr_37083_37109 = state_37062__$1;
(statearr_37083_37109[(2)] = null);

(statearr_37083_37109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (8))){
var inst_37021 = (state_37062[(9)]);
var inst_37025 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37021,opts);
var state_37062__$1 = state_37062;
if(cljs.core.truth_(inst_37025)){
var statearr_37084_37110 = state_37062__$1;
(statearr_37084_37110[(1)] = (11));

} else {
var statearr_37085_37111 = state_37062__$1;
(statearr_37085_37111[(1)] = (12));

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
});})(c__30056__auto___37093,ch))
;
return ((function (switch__29944__auto__,c__30056__auto___37093,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29945__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29945__auto____0 = (function (){
var statearr_37089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37089[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29945__auto__);

(statearr_37089[(1)] = (1));

return statearr_37089;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29945__auto____1 = (function (state_37062){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_37062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e37090){if((e37090 instanceof Object)){
var ex__29948__auto__ = e37090;
var statearr_37091_37112 = state_37062;
(statearr_37091_37112[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37113 = state_37062;
state_37062 = G__37113;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29945__auto__ = function(state_37062){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29945__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29945__auto____1.call(this,state_37062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29945__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29945__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___37093,ch))
})();
var state__30058__auto__ = (function (){var statearr_37092 = f__30057__auto__.call(null);
(statearr_37092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___37093);

return statearr_37092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___37093,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37114_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37114_SHARP_));
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
var base_path_37121 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37121){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37119 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37120 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37120;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37119;
}}catch (e37118){if((e37118 instanceof Error)){
var e = e37118;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37121], null));
} else {
var e = e37118;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37121))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37122){
var map__37129 = p__37122;
var map__37129__$1 = ((((!((map__37129 == null)))?((((map__37129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37129):map__37129);
var opts = map__37129__$1;
var build_id = cljs.core.get.call(null,map__37129__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37129,map__37129__$1,opts,build_id){
return (function (p__37131){
var vec__37132 = p__37131;
var map__37133 = cljs.core.nth.call(null,vec__37132,(0),null);
var map__37133__$1 = ((((!((map__37133 == null)))?((((map__37133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37133):map__37133);
var msg = map__37133__$1;
var msg_name = cljs.core.get.call(null,map__37133__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37132,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37132,map__37133,map__37133__$1,msg,msg_name,_,map__37129,map__37129__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37132,map__37133,map__37133__$1,msg,msg_name,_,map__37129,map__37129__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37129,map__37129__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37139){
var vec__37140 = p__37139;
var map__37141 = cljs.core.nth.call(null,vec__37140,(0),null);
var map__37141__$1 = ((((!((map__37141 == null)))?((((map__37141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37141):map__37141);
var msg = map__37141__$1;
var msg_name = cljs.core.get.call(null,map__37141__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37140,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37143){
var map__37153 = p__37143;
var map__37153__$1 = ((((!((map__37153 == null)))?((((map__37153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37153):map__37153);
var on_compile_warning = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37153__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37153,map__37153__$1,on_compile_warning,on_compile_fail){
return (function (p__37155){
var vec__37156 = p__37155;
var map__37157 = cljs.core.nth.call(null,vec__37156,(0),null);
var map__37157__$1 = ((((!((map__37157 == null)))?((((map__37157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37157):map__37157);
var msg = map__37157__$1;
var msg_name = cljs.core.get.call(null,map__37157__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37156,(1));
var pred__37159 = cljs.core._EQ_;
var expr__37160 = msg_name;
if(cljs.core.truth_(pred__37159.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37160))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37159.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37160))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37153,map__37153__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__,msg_hist,msg_names,msg){
return (function (state_37376){
var state_val_37377 = (state_37376[(1)]);
if((state_val_37377 === (7))){
var inst_37300 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37300)){
var statearr_37378_37424 = state_37376__$1;
(statearr_37378_37424[(1)] = (8));

} else {
var statearr_37379_37425 = state_37376__$1;
(statearr_37379_37425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (20))){
var inst_37370 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37380_37426 = state_37376__$1;
(statearr_37380_37426[(2)] = inst_37370);

(statearr_37380_37426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (27))){
var inst_37366 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37381_37427 = state_37376__$1;
(statearr_37381_37427[(2)] = inst_37366);

(statearr_37381_37427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (1))){
var inst_37293 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37293)){
var statearr_37382_37428 = state_37376__$1;
(statearr_37382_37428[(1)] = (2));

} else {
var statearr_37383_37429 = state_37376__$1;
(statearr_37383_37429[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (24))){
var inst_37368 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37384_37430 = state_37376__$1;
(statearr_37384_37430[(2)] = inst_37368);

(statearr_37384_37430[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (4))){
var inst_37374 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37376__$1,inst_37374);
} else {
if((state_val_37377 === (15))){
var inst_37372 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37385_37431 = state_37376__$1;
(statearr_37385_37431[(2)] = inst_37372);

(statearr_37385_37431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (21))){
var inst_37331 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37386_37432 = state_37376__$1;
(statearr_37386_37432[(2)] = inst_37331);

(statearr_37386_37432[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (31))){
var inst_37355 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37355)){
var statearr_37387_37433 = state_37376__$1;
(statearr_37387_37433[(1)] = (34));

} else {
var statearr_37388_37434 = state_37376__$1;
(statearr_37388_37434[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (32))){
var inst_37364 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37389_37435 = state_37376__$1;
(statearr_37389_37435[(2)] = inst_37364);

(statearr_37389_37435[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (33))){
var inst_37353 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37390_37436 = state_37376__$1;
(statearr_37390_37436[(2)] = inst_37353);

(statearr_37390_37436[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (13))){
var inst_37314 = figwheel.client.heads_up.clear.call(null);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(16),inst_37314);
} else {
if((state_val_37377 === (22))){
var inst_37335 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37336 = figwheel.client.heads_up.append_message.call(null,inst_37335);
var state_37376__$1 = state_37376;
var statearr_37391_37437 = state_37376__$1;
(statearr_37391_37437[(2)] = inst_37336);

(statearr_37391_37437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (36))){
var inst_37362 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37392_37438 = state_37376__$1;
(statearr_37392_37438[(2)] = inst_37362);

(statearr_37392_37438[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (29))){
var inst_37346 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37393_37439 = state_37376__$1;
(statearr_37393_37439[(2)] = inst_37346);

(statearr_37393_37439[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (6))){
var inst_37295 = (state_37376[(7)]);
var state_37376__$1 = state_37376;
var statearr_37394_37440 = state_37376__$1;
(statearr_37394_37440[(2)] = inst_37295);

(statearr_37394_37440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (28))){
var inst_37342 = (state_37376[(2)]);
var inst_37343 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37344 = figwheel.client.heads_up.display_warning.call(null,inst_37343);
var state_37376__$1 = (function (){var statearr_37395 = state_37376;
(statearr_37395[(8)] = inst_37342);

return statearr_37395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(29),inst_37344);
} else {
if((state_val_37377 === (25))){
var inst_37340 = figwheel.client.heads_up.clear.call(null);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(28),inst_37340);
} else {
if((state_val_37377 === (34))){
var inst_37357 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(37),inst_37357);
} else {
if((state_val_37377 === (17))){
var inst_37322 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37396_37441 = state_37376__$1;
(statearr_37396_37441[(2)] = inst_37322);

(statearr_37396_37441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (3))){
var inst_37312 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37312)){
var statearr_37397_37442 = state_37376__$1;
(statearr_37397_37442[(1)] = (13));

} else {
var statearr_37398_37443 = state_37376__$1;
(statearr_37398_37443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (12))){
var inst_37308 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37399_37444 = state_37376__$1;
(statearr_37399_37444[(2)] = inst_37308);

(statearr_37399_37444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (2))){
var inst_37295 = (state_37376[(7)]);
var inst_37295__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37376__$1 = (function (){var statearr_37400 = state_37376;
(statearr_37400[(7)] = inst_37295__$1);

return statearr_37400;
})();
if(cljs.core.truth_(inst_37295__$1)){
var statearr_37401_37445 = state_37376__$1;
(statearr_37401_37445[(1)] = (5));

} else {
var statearr_37402_37446 = state_37376__$1;
(statearr_37402_37446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (23))){
var inst_37338 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37338)){
var statearr_37403_37447 = state_37376__$1;
(statearr_37403_37447[(1)] = (25));

} else {
var statearr_37404_37448 = state_37376__$1;
(statearr_37404_37448[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (35))){
var state_37376__$1 = state_37376;
var statearr_37405_37449 = state_37376__$1;
(statearr_37405_37449[(2)] = null);

(statearr_37405_37449[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (19))){
var inst_37333 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37333)){
var statearr_37406_37450 = state_37376__$1;
(statearr_37406_37450[(1)] = (22));

} else {
var statearr_37407_37451 = state_37376__$1;
(statearr_37407_37451[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (11))){
var inst_37304 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37408_37452 = state_37376__$1;
(statearr_37408_37452[(2)] = inst_37304);

(statearr_37408_37452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (9))){
var inst_37306 = figwheel.client.heads_up.clear.call(null);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(12),inst_37306);
} else {
if((state_val_37377 === (5))){
var inst_37297 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37376__$1 = state_37376;
var statearr_37409_37453 = state_37376__$1;
(statearr_37409_37453[(2)] = inst_37297);

(statearr_37409_37453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (14))){
var inst_37324 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37324)){
var statearr_37410_37454 = state_37376__$1;
(statearr_37410_37454[(1)] = (18));

} else {
var statearr_37411_37455 = state_37376__$1;
(statearr_37411_37455[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (26))){
var inst_37348 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37348)){
var statearr_37412_37456 = state_37376__$1;
(statearr_37412_37456[(1)] = (30));

} else {
var statearr_37413_37457 = state_37376__$1;
(statearr_37413_37457[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (16))){
var inst_37316 = (state_37376[(2)]);
var inst_37317 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37318 = figwheel.client.format_messages.call(null,inst_37317);
var inst_37319 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37320 = figwheel.client.heads_up.display_error.call(null,inst_37318,inst_37319);
var state_37376__$1 = (function (){var statearr_37414 = state_37376;
(statearr_37414[(9)] = inst_37316);

return statearr_37414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(17),inst_37320);
} else {
if((state_val_37377 === (30))){
var inst_37350 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37351 = figwheel.client.heads_up.display_warning.call(null,inst_37350);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(33),inst_37351);
} else {
if((state_val_37377 === (10))){
var inst_37310 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37415_37458 = state_37376__$1;
(statearr_37415_37458[(2)] = inst_37310);

(statearr_37415_37458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (18))){
var inst_37326 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37327 = figwheel.client.format_messages.call(null,inst_37326);
var inst_37328 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37329 = figwheel.client.heads_up.display_error.call(null,inst_37327,inst_37328);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(21),inst_37329);
} else {
if((state_val_37377 === (37))){
var inst_37359 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37416_37459 = state_37376__$1;
(statearr_37416_37459[(2)] = inst_37359);

(statearr_37416_37459[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (8))){
var inst_37302 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(11),inst_37302);
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
});})(c__30056__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29944__auto__,c__30056__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto____0 = (function (){
var statearr_37420 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37420[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto__);

(statearr_37420[(1)] = (1));

return statearr_37420;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto____1 = (function (state_37376){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_37376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e37421){if((e37421 instanceof Object)){
var ex__29948__auto__ = e37421;
var statearr_37422_37460 = state_37376;
(statearr_37422_37460[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37461 = state_37376;
state_37376 = G__37461;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto__ = function(state_37376){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto____1.call(this,state_37376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__,msg_hist,msg_names,msg))
})();
var state__30058__auto__ = (function (){var statearr_37423 = f__30057__auto__.call(null);
(statearr_37423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_37423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__,msg_hist,msg_names,msg))
);

return c__30056__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30056__auto___37524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___37524,ch){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___37524,ch){
return (function (state_37507){
var state_val_37508 = (state_37507[(1)]);
if((state_val_37508 === (1))){
var state_37507__$1 = state_37507;
var statearr_37509_37525 = state_37507__$1;
(statearr_37509_37525[(2)] = null);

(statearr_37509_37525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37508 === (2))){
var state_37507__$1 = state_37507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37507__$1,(4),ch);
} else {
if((state_val_37508 === (3))){
var inst_37505 = (state_37507[(2)]);
var state_37507__$1 = state_37507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37507__$1,inst_37505);
} else {
if((state_val_37508 === (4))){
var inst_37495 = (state_37507[(7)]);
var inst_37495__$1 = (state_37507[(2)]);
var state_37507__$1 = (function (){var statearr_37510 = state_37507;
(statearr_37510[(7)] = inst_37495__$1);

return statearr_37510;
})();
if(cljs.core.truth_(inst_37495__$1)){
var statearr_37511_37526 = state_37507__$1;
(statearr_37511_37526[(1)] = (5));

} else {
var statearr_37512_37527 = state_37507__$1;
(statearr_37512_37527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37508 === (5))){
var inst_37495 = (state_37507[(7)]);
var inst_37497 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37495);
var state_37507__$1 = state_37507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37507__$1,(8),inst_37497);
} else {
if((state_val_37508 === (6))){
var state_37507__$1 = state_37507;
var statearr_37513_37528 = state_37507__$1;
(statearr_37513_37528[(2)] = null);

(statearr_37513_37528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37508 === (7))){
var inst_37503 = (state_37507[(2)]);
var state_37507__$1 = state_37507;
var statearr_37514_37529 = state_37507__$1;
(statearr_37514_37529[(2)] = inst_37503);

(statearr_37514_37529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37508 === (8))){
var inst_37499 = (state_37507[(2)]);
var state_37507__$1 = (function (){var statearr_37515 = state_37507;
(statearr_37515[(8)] = inst_37499);

return statearr_37515;
})();
var statearr_37516_37530 = state_37507__$1;
(statearr_37516_37530[(2)] = null);

(statearr_37516_37530[(1)] = (2));


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
});})(c__30056__auto___37524,ch))
;
return ((function (switch__29944__auto__,c__30056__auto___37524,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29945__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29945__auto____0 = (function (){
var statearr_37520 = [null,null,null,null,null,null,null,null,null];
(statearr_37520[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29945__auto__);

(statearr_37520[(1)] = (1));

return statearr_37520;
});
var figwheel$client$heads_up_plugin_$_state_machine__29945__auto____1 = (function (state_37507){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_37507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e37521){if((e37521 instanceof Object)){
var ex__29948__auto__ = e37521;
var statearr_37522_37531 = state_37507;
(statearr_37522_37531[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37532 = state_37507;
state_37507 = G__37532;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29945__auto__ = function(state_37507){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29945__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29945__auto____1.call(this,state_37507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29945__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29945__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___37524,ch))
})();
var state__30058__auto__ = (function (){var statearr_37523 = f__30057__auto__.call(null);
(statearr_37523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___37524);

return statearr_37523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___37524,ch))
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
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_37553){
var state_val_37554 = (state_37553[(1)]);
if((state_val_37554 === (1))){
var inst_37548 = cljs.core.async.timeout.call(null,(3000));
var state_37553__$1 = state_37553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37553__$1,(2),inst_37548);
} else {
if((state_val_37554 === (2))){
var inst_37550 = (state_37553[(2)]);
var inst_37551 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37553__$1 = (function (){var statearr_37555 = state_37553;
(statearr_37555[(7)] = inst_37550);

return statearr_37555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37553__$1,inst_37551);
} else {
return null;
}
}
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29945__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29945__auto____0 = (function (){
var statearr_37559 = [null,null,null,null,null,null,null,null];
(statearr_37559[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29945__auto__);

(statearr_37559[(1)] = (1));

return statearr_37559;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29945__auto____1 = (function (state_37553){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_37553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e37560){if((e37560 instanceof Object)){
var ex__29948__auto__ = e37560;
var statearr_37561_37563 = state_37553;
(statearr_37561_37563[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37564 = state_37553;
state_37553 = G__37564;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29945__auto__ = function(state_37553){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29945__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29945__auto____1.call(this,state_37553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29945__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29945__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_37562 = f__30057__auto__.call(null);
(statearr_37562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_37562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37565){
var map__37572 = p__37565;
var map__37572__$1 = ((((!((map__37572 == null)))?((((map__37572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37572):map__37572);
var ed = map__37572__$1;
var formatted_exception = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37574_37578 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37575_37579 = null;
var count__37576_37580 = (0);
var i__37577_37581 = (0);
while(true){
if((i__37577_37581 < count__37576_37580)){
var msg_37582 = cljs.core._nth.call(null,chunk__37575_37579,i__37577_37581);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37582);

var G__37583 = seq__37574_37578;
var G__37584 = chunk__37575_37579;
var G__37585 = count__37576_37580;
var G__37586 = (i__37577_37581 + (1));
seq__37574_37578 = G__37583;
chunk__37575_37579 = G__37584;
count__37576_37580 = G__37585;
i__37577_37581 = G__37586;
continue;
} else {
var temp__4657__auto___37587 = cljs.core.seq.call(null,seq__37574_37578);
if(temp__4657__auto___37587){
var seq__37574_37588__$1 = temp__4657__auto___37587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37574_37588__$1)){
var c__26807__auto___37589 = cljs.core.chunk_first.call(null,seq__37574_37588__$1);
var G__37590 = cljs.core.chunk_rest.call(null,seq__37574_37588__$1);
var G__37591 = c__26807__auto___37589;
var G__37592 = cljs.core.count.call(null,c__26807__auto___37589);
var G__37593 = (0);
seq__37574_37578 = G__37590;
chunk__37575_37579 = G__37591;
count__37576_37580 = G__37592;
i__37577_37581 = G__37593;
continue;
} else {
var msg_37594 = cljs.core.first.call(null,seq__37574_37588__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37594);

var G__37595 = cljs.core.next.call(null,seq__37574_37588__$1);
var G__37596 = null;
var G__37597 = (0);
var G__37598 = (0);
seq__37574_37578 = G__37595;
chunk__37575_37579 = G__37596;
count__37576_37580 = G__37597;
i__37577_37581 = G__37598;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37599){
var map__37602 = p__37599;
var map__37602__$1 = ((((!((map__37602 == null)))?((((map__37602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37602):map__37602);
var w = map__37602__$1;
var message = cljs.core.get.call(null,map__37602__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25992__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25992__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25992__auto__;
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
var seq__37610 = cljs.core.seq.call(null,plugins);
var chunk__37611 = null;
var count__37612 = (0);
var i__37613 = (0);
while(true){
if((i__37613 < count__37612)){
var vec__37614 = cljs.core._nth.call(null,chunk__37611,i__37613);
var k = cljs.core.nth.call(null,vec__37614,(0),null);
var plugin = cljs.core.nth.call(null,vec__37614,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37616 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37610,chunk__37611,count__37612,i__37613,pl_37616,vec__37614,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37616.call(null,msg_hist);
});})(seq__37610,chunk__37611,count__37612,i__37613,pl_37616,vec__37614,k,plugin))
);
} else {
}

var G__37617 = seq__37610;
var G__37618 = chunk__37611;
var G__37619 = count__37612;
var G__37620 = (i__37613 + (1));
seq__37610 = G__37617;
chunk__37611 = G__37618;
count__37612 = G__37619;
i__37613 = G__37620;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37610);
if(temp__4657__auto__){
var seq__37610__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37610__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__37610__$1);
var G__37621 = cljs.core.chunk_rest.call(null,seq__37610__$1);
var G__37622 = c__26807__auto__;
var G__37623 = cljs.core.count.call(null,c__26807__auto__);
var G__37624 = (0);
seq__37610 = G__37621;
chunk__37611 = G__37622;
count__37612 = G__37623;
i__37613 = G__37624;
continue;
} else {
var vec__37615 = cljs.core.first.call(null,seq__37610__$1);
var k = cljs.core.nth.call(null,vec__37615,(0),null);
var plugin = cljs.core.nth.call(null,vec__37615,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37625 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37610,chunk__37611,count__37612,i__37613,pl_37625,vec__37615,k,plugin,seq__37610__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37625.call(null,msg_hist);
});})(seq__37610,chunk__37611,count__37612,i__37613,pl_37625,vec__37615,k,plugin,seq__37610__$1,temp__4657__auto__))
);
} else {
}

var G__37626 = cljs.core.next.call(null,seq__37610__$1);
var G__37627 = null;
var G__37628 = (0);
var G__37629 = (0);
seq__37610 = G__37626;
chunk__37611 = G__37627;
count__37612 = G__37628;
i__37613 = G__37629;
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
var args37630 = [];
var len__27062__auto___37633 = arguments.length;
var i__27063__auto___37634 = (0);
while(true){
if((i__27063__auto___37634 < len__27062__auto___37633)){
args37630.push((arguments[i__27063__auto___37634]));

var G__37635 = (i__27063__auto___37634 + (1));
i__27063__auto___37634 = G__37635;
continue;
} else {
}
break;
}

var G__37632 = args37630.length;
switch (G__37632) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37630.length)].join('')));

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
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

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
var args__27069__auto__ = [];
var len__27062__auto___37641 = arguments.length;
var i__27063__auto___37642 = (0);
while(true){
if((i__27063__auto___37642 < len__27062__auto___37641)){
args__27069__auto__.push((arguments[i__27063__auto___37642]));

var G__37643 = (i__27063__auto___37642 + (1));
i__27063__auto___37642 = G__37643;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((0) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27070__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37638){
var map__37639 = p__37638;
var map__37639__$1 = ((((!((map__37639 == null)))?((((map__37639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37639):map__37639);
var opts = map__37639__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37637){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37637));
});

//# sourceMappingURL=client.js.map