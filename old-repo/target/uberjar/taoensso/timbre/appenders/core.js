// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27145 = arguments.length;
var i__7490__auto___27146 = (0);
while(true){
if((i__7490__auto___27146 < len__7489__auto___27145)){
args__7496__auto__.push((arguments[i__7490__auto___27146]));

var G__27147 = (i__7490__auto___27146 + (1));
i__7490__auto___27146 = G__27147;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__27139){
var vec__27140 = p__27139;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27140,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__27140,_opts){
return (function (data){
var map__27143 = data;
var map__27143__$1 = ((((!((map__27143 == null)))?((((map__27143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27143):map__27143);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27143__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.force(output_)], 0));
});})(vec__27140,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq27138){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27138));
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__7496__auto__ = [];
var len__7489__auto___27155 = arguments.length;
var i__7490__auto___27156 = (0);
while(true){
if((i__7490__auto___27156 < len__7489__auto___27155)){
args__7496__auto__.push((arguments[i__7490__auto___27156]));

var G__27157 = (i__7490__auto___27156 + (1));
i__7490__auto___27156 = G__27157;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((0) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7497__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__27149){
var vec__27150 = p__27149;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27150,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((typeof console !== 'undefined')?(function (){var level__GT_logger = ((function (vec__27150,opts){
return (function (level){
var or__6414__auto__ = (function (){var G__27154 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__27154) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
})();
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return console.log;
}
});})(vec__27150,opts))
;
return ((function (level__GT_logger,vec__27150,opts){
return (function (data){
var temp__4657__auto__ = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__4657__auto__)){
var logger = temp__4657__auto__;
if(cljs.core.truth_((function (){var or__6414__auto__ = cljs.core.cst$kw$raw_DASH_console_QMARK_.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_], null));
}
})())){
var output = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.array_seq([cljs.core.cst$kw$_QMARK_err,null], 0)));
var args = cljs.core.cons(output,cljs.core.cons(cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data)));
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
;})(level__GT_logger,vec__27150,opts))
})():((function (vec__27150,opts){
return (function (data){
return null;
});})(vec__27150,opts))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq27148){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27148));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
