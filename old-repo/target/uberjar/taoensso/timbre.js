// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(67),(2)], null));
} else {
taoensso.encore.assert_min_encore_version(2.67);
}
/**
 * Default (fn [data]) -> string output fn.
 *   Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var args31824 = [];
var len__7489__auto___31831 = arguments.length;
var i__7490__auto___31832 = (0);
while(true){
if((i__7490__auto___31832 < len__7489__auto___31831)){
args31824.push((arguments[i__7490__auto___31832]));

var G__31833 = (i__7490__auto___31832 + (1));
i__7490__auto___31832 = G__31833;
continue;
} else {
}
break;
}

var G__31826 = args31824.length;
switch (G__31826) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31824.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__31827 = opts;
var map__31827__$1 = ((((!((map__31827 == null)))?((((map__31827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31827):map__31827);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31827__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31827__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__31828 = data;
var map__31828__$1 = ((((!((map__31828 == null)))?((((map__31828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31828):map__31828);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31828__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31828__$1,cljs.core.cst$kw$_QMARK_err);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31828__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31828__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31828__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31828__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31828__$1,cljs.core.cst$kw$_QMARK_line);
return [cljs.core.str(clojure.string.upper_case(cljs.core.name(level))),cljs.core.str(" "),cljs.core.str("["),cljs.core.str((function (){var or__6414__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return "?";
}
})()),cljs.core.str(":"),cljs.core.str((function (){var or__6414__auto__ = _QMARK_line;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return "?";
}
})()),cljs.core.str("] - "),cljs.core.str(cljs.core.force(msg_)),cljs.core.str((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__4657__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4657__auto__)){
var err = temp__4657__auto__;
return [cljs.core.str("\n"),cljs.core.str((taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,opts) : taoensso.timbre.stacktrace.call(null,err,opts)))].join('');
} else {
return null;
}
})()))].join('');
});

taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2;


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Example (+default) Timbre v4 config map.
 * 
 *   APPENDERS
 *  An appender is a map with keys:
 *    :min-level       ; Level keyword, or nil (=> no minimum level)
 *    :enabled?        ;
 *    :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :timestamp-opts  ; Optional override for inherited {:pattern _ :locale _ :timezone _}
 *    :ns-whitelist    ; Optional, stacks with active config's whitelist
 *    :ns-blacklist    ; Optional, stacks with active config's blacklist
 *    :middleware-fn   ; Optional, stacks with active config's middleware
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :vargs           ; Vector of raw args
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; *context* value at log time (see `with-context`)
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware
 *  returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *   The `example-config` source code contains further settings and details.
 *   See also `set-config!`, `merge-config!`, `set-level!`.
 */
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_whitelist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$ns_DASH_blacklist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__31835 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__31835) : taoensso.timbre.console_appender.call(null,G__31835));
})()], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
 * See `example-config` for info.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___31838 = arguments.length;
var i__7490__auto___31839 = (0);
while(true){
if((i__7490__auto___31839 < len__7489__auto___31838)){
args__7496__auto__.push((arguments[i__7490__auto___31839]));

var G__31840 = (i__7490__auto___31839 + (1));
i__7490__auto___31839 = G__31840;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args);
});

taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq31836){
var G__31837 = cljs.core.first(seq31836);
var seq31836__$1 = cljs.core.next(seq31836);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31837,seq31836__$1);
});

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old,m], 0));
}));
});
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$level,level);
}));
});
taoensso.timbre._levels_vec = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);
taoensso.timbre._levels_set = cljs.core.set(taoensso.timbre._levels_vec);
taoensso.timbre._levels_map = cljs.core.zipmap(taoensso.timbre._levels_vec,cljs.core.next(cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_((taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1(x) : taoensso.timbre._levels_set.call(null,x)))){
return true;
} else {
return false;
}
});
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
var or__6414__auto__ = (taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1(x) : taoensso.timbre._levels_set.call(null,x));
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Timbre logging level",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,x], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((function (){var G__31843 = taoensso.timbre.valid_level(x);
return (taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1(G__31843) : taoensso.timbre._levels_map.call(null,G__31843));
})() >= (function (){var G__31844 = taoensso.timbre.valid_level(y);
return (taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1(G__31844) : taoensso.timbre._levels_map.call(null,G__31844));
})());
});
taoensso.timbre._compile_ns_filter = taoensso.encore.memoize_(taoensso.encore.compile_ns_filter);
/**
 * Returns true iff given ns passes white/black lists.
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_((function (whitelist,blacklist,_QMARK_ns){
return (taoensso.timbre._compile_ns_filter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre._compile_ns_filter.cljs$core$IFn$_invoke$arity$2(whitelist,blacklist) : taoensso.timbre._compile_ns_filter.call(null,whitelist,blacklist)).call(null,_QMARK_ns);
}));
/**
 * Runtime check: would Timbre currently log at the given logging level?
 *  * `?ns-str` arg required to support ns filtering
 *  * `config`  arg required to support non-global config
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var args31845 = [];
var len__7489__auto___31854 = arguments.length;
var i__7490__auto___31855 = (0);
while(true){
if((i__7490__auto___31855 < len__7489__auto___31854)){
args31845.push((arguments[i__7490__auto___31855]));

var G__31856 = (i__7490__auto___31855 + (1));
i__7490__auto___31855 = G__31856;
continue;
} else {
}
break;
}

var G__31847 = args31845.length;
switch (G__31847) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31845.length)].join('')));

}
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,null,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__6414__auto__ = _QMARK_config;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$level,cljs.core.cst$kw$report);
var and__6402__auto__ = taoensso.timbre.level_GT__EQ_(level,min_level);
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (function (){var G__31851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__31852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
var G__31853 = _QMARK_ns_str;
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__31851,G__31852,G__31853) : taoensso.timbre.ns_filter.call(null,G__31851,G__31852,G__31853));
})();
if(cljs.core.truth_(and__6402__auto____$1)){
return true;
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
});

taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = taoensso.encore.nil__GT_str(x);
if(cljs.core.record_QMARK_(x__$1)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__$1], 0));
} else {
return x__$1;

}
})),xs);
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_((function (appender_id,specs){
return taoensso.encore.limiter(specs);
}));
}
/**
 * General-purpose dynamic logging context. Context will be included in
 *   appender data map at logging time.
 */
taoensso.timbre._STAR_context_STAR_ = null;
taoensso.timbre.next_vargs = (function taoensso$timbre$next_vargs(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Transforms raw vargs -> {:?err _ :?meta _ ...}, extracting:
 *   * Special error or ^:meta {} (experimental, undocumented) v0
 *   * Message format string
 *   * Message string delay
 */
taoensso.timbre.vargs__GT_margs = (function taoensso$timbre$vargs__GT_margs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (function (){var G__31876 = _QMARK_err;
var G__31877 = cljs.core.cst$kw$auto;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__31876,G__31877) : taoensso.encore.kw_identical_QMARK_.call(null,G__31876,G__31877));
})();
var msg_fmt_QMARK_ = (function (){var G__31878 = msg_type;
var G__31879 = cljs.core.cst$kw$f;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__31878,G__31879) : taoensso.encore.kw_identical_QMARK_.call(null,G__31878,G__31879));
})();
var vec__31873 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31873,(0),null);
if(cljs.core.truth_((function (){var and__6402__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__6402__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__6402__auto__;
}
})())){
var vargs__$1 = taoensso.timbre.next_vargs(vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(msg_fmt_QMARK_)?(function (){var vec__31880 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31880,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(msg_fmt_QMARK_)?taoensso.timbre.next_vargs(vargs__$1):vargs__$1);
var msg_ = (new cljs.core.Delay(((function (vargs__$1,_QMARK_msg_fmt,vargs__$2,auto_error_QMARK_,msg_fmt_QMARK_,vec__31873,v0){
return (function (){
var G__31883 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31883)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__31883)){
return taoensso.timbre.str_join(vargs__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__31883)){
return taoensso.encore.format_STAR_(((typeof _QMARK_msg_fmt === 'string')?_QMARK_msg_fmt:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.timbre",306,"(string? ?msg-fmt)",_QMARK_msg_fmt,null,null)),vargs__$2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
}
}
});})(vargs__$1,_QMARK_msg_fmt,vargs__$2,auto_error_QMARK_,msg_fmt_QMARK_,vec__31873,v0))
,null));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_err,v0,cljs.core.cst$kw$_QMARK_meta,null,cljs.core.cst$kw$_QMARK_msg_DASH_fmt,_QMARK_msg_fmt,cljs.core.cst$kw$msg_,msg_,cljs.core.cst$kw$vargs,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.map_QMARK_(v0);
if(and__6402__auto__){
return cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0));
} else {
return and__6402__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__6414__auto__ = cljs.core.cst$kw$err.cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,cljs.core.cst$kw$err);
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.timbre.next_vargs(vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(msg_fmt_QMARK_)?(function (){var vec__31884 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31884,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(msg_fmt_QMARK_)?taoensso.timbre.next_vargs(vargs__$1):vargs__$1);
var msg_ = (new cljs.core.Delay(((function (_QMARK_meta,_QMARK_err__$1,_QMARK_meta__$1,vargs__$1,_QMARK_msg_fmt,vargs__$2,auto_error_QMARK_,msg_fmt_QMARK_,vec__31873,v0){
return (function (){
var G__31887 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31887)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__31887)){
return taoensso.timbre.str_join(vargs__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__31887)){
return taoensso.encore.format_STAR_(((typeof _QMARK_msg_fmt === 'string')?_QMARK_msg_fmt:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.timbre",320,"(string? ?msg-fmt)",_QMARK_msg_fmt,null,null)),vargs__$2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
}
}
});})(_QMARK_meta,_QMARK_err__$1,_QMARK_meta__$1,vargs__$1,_QMARK_msg_fmt,vargs__$2,auto_error_QMARK_,msg_fmt_QMARK_,vec__31873,v0))
,null));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_err,_QMARK_err__$1,cljs.core.cst$kw$_QMARK_meta,_QMARK_meta__$1,cljs.core.cst$kw$_QMARK_msg_DASH_fmt,_QMARK_msg_fmt,cljs.core.cst$kw$msg_,msg_,cljs.core.cst$kw$vargs,vargs__$2], null);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var args31888 = [];
var len__7489__auto___31902 = arguments.length;
var i__7490__auto___31903 = (0);
while(true){
if((i__7490__auto___31903 < len__7489__auto___31902)){
args31888.push((arguments[i__7490__auto___31903]));

var G__31904 = (i__7490__auto___31903 + (1));
i__7490__auto___31903 = G__31904;
continue;
} else {
}
break;
}

var G__31890 = args31888.length;
switch (G__31890) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31888.length)].join('')));

}
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null);
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
if(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,config)){
var instant_31906 = taoensso.encore.now_dt();
var context_31907 = taoensso.timbre._STAR_context_STAR_;
var vargs_31908 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vargs_) : cljs.core.deref.call(null,vargs_));
var margs_31909 = taoensso.timbre.vargs__GT_margs(_QMARK_err,msg_type,vargs_31908);
var data_31910 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([_QMARK_base_data,margs_31909,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$hash_,cljs.core.cst$kw$instant,cljs.core.cst$kw$config,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$vargs_,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_],[(new cljs.core.Delay(((function (instant_31906,context_31907,vargs_31908,margs_31909){
return (function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,cljs.core.cst$kw$_QMARK_msg_DASH_fmt.cljs$core$IFn$_invoke$arity$1(margs_31909),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(margs_31909,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$hash], null),cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(margs_31909))], null));
});})(instant_31906,context_31907,vargs_31908,margs_31909))
,null)),instant_31906,config,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null).call(null,level),_QMARK_ns_str,level,(new cljs.core.Delay(((function (instant_31906,context_31907,vargs_31908,margs_31909){
return (function (){
return cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(margs_31909);
});})(instant_31906,context_31907,vargs_31908,margs_31909))
,null)),context_31907,_QMARK_line,(new cljs.core.Delay(((function (instant_31906,context_31907,vargs_31908,margs_31909){
return (function (){
return cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(margs_31909);
});})(instant_31906,context_31907,vargs_31908,margs_31909))
,null))])], 0));
var _QMARK_data_31911 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (instant_31906,context_31907,vargs_31908,margs_31909,data_31910){
return (function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
});})(instant_31906,context_31907,vargs_31908,margs_31909,data_31910))
,data_31910,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var temp__4657__auto___31912 = _QMARK_data_31911;
if(cljs.core.truth_(temp__4657__auto___31912)){
var data_31913__$1 = temp__4657__auto___31912;
var output_fn1_31914 = taoensso.encore.memoize_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
cljs.core.reduce_kv(((function (output_fn1_31914,data_31913__$1,temp__4657__auto___31912,instant_31906,context_31907,vargs_31908,margs_31909,data_31910,_QMARK_data_31911){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__6402__auto__ = cljs.core.cst$kw$enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__6402__auto__)){
return taoensso.timbre.level_GT__EQ_(level,(function (){var or__6414__auto__ = cljs.core.cst$kw$min_DASH_level.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.cst$kw$trace;
}
})());
} else {
return and__6402__auto__;
}
})())){
if(cljs.core.truth_((function (){var G__31891 = cljs.core.cst$kw$ns_DASH_whitelist.cljs$core$IFn$_invoke$arity$1(appender);
var G__31892 = cljs.core.cst$kw$ns_DASH_blacklist.cljs$core$IFn$_invoke$arity$1(appender);
var G__31893 = _QMARK_ns_str;
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__31891,G__31892,G__31893) : taoensso.timbre.ns_filter.call(null,G__31891,G__31892,G__31893));
})())){
var rate_limit_specs = cljs.core.cst$kw$rate_DASH_limit.cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__6414__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__6414__auto__){
return or__6414__auto__;
} else {
var rl_fn = (taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2(id,rate_limit_specs) : taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs));
return cljs.core.not((function (){var G__31895 = cljs.core.force(cljs.core.cst$kw$hash_.cljs$core$IFn$_invoke$arity$1(data_31913__$1));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__31895) : rl_fn.call(null,G__31895));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__31896 = appender;
var map__31896__$1 = ((((!((map__31896 == null)))?((((map__31896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31896):map__31896);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31896__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31896__$1,cljs.core.cst$kw$async_QMARK_);
var output_fn = (function (){var f = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__6414__auto__ = (f == null);
if(or__6414__auto__){
return or__6414__auto__;
} else {
var G__31900 = f;
var G__31901 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__31900,G__31901) : taoensso.encore.kw_identical_QMARK_.call(null,G__31900,G__31901));
}
})())){
return output_fn1_31914;
} else {
return f;
}
})();
var output_ = (new cljs.core.Delay(((function (map__31896,map__31896__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,output_fn1_31914,data_31913__$1,temp__4657__auto___31912,instant_31906,context_31907,vargs_31908,margs_31909,data_31910,_QMARK_data_31911){
return (function (){
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(data_31913__$1) : output_fn.call(null,data_31913__$1));
});})(map__31896,map__31896__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,output_fn1_31914,data_31913__$1,temp__4657__auto___31912,instant_31906,context_31907,vargs_31908,margs_31909,data_31910,_QMARK_data_31911))
,null));
var data__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_31913__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_], null));
var _QMARK_data__$1 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$middleware_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__4655__auto__)){
var mfn = temp__4655__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$2) : mfn.call(null,data__$2));
} else {
return data__$2;
}
})();
var temp__4657__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__4657__auto____$1)){
var data__$3 = temp__4657__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$3) : apfn.call(null,data__$3));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(output_fn1_31914,data_31913__$1,temp__4657__auto___31912,instant_31906,context_31907,vargs_31908,margs_31909,data_31910,_QMARK_data_31911))
,null,cljs.core.cst$kw$appenders.cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
});

taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 10;

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var args31915 = [];
var len__7489__auto___31918 = arguments.length;
var i__7490__auto___31919 = (0);
while(true){
if((i__7490__auto___31919 < len__7489__auto___31918)){
args31915.push((arguments[i__7490__auto___31919]));

var G__31920 = (i__7490__auto___31919 + (1));
i__7490__auto___31919 = G__31920;
continue;
} else {
}
break;
}

var G__31917 = args31915.length;
switch (G__31917) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31915.length)].join('')));

}
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return [cljs.core.str(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2;

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = taoensso.timbre._levels_vec;

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,[cljs.core.str(compile_time_ns)].join(''));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__7496__auto__ = [];
var len__7489__auto___31923 = arguments.length;
var i__7490__auto___31924 = (0);
while(true){
if((i__7490__auto___31924 < len__7489__auto___31923)){
args__7496__auto__.push((arguments[i__7490__auto___31924]));

var G__31925 = (i__7490__auto___31924 + (1));
i__7490__auto___31924 = G__31925;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join(xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq31922){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31922));
});

