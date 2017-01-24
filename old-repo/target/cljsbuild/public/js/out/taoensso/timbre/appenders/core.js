// Compiled by ClojureScript 1.9.229 {}
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
var args__43727__auto__ = [];
var len__43720__auto___56368 = arguments.length;
var i__43721__auto___56369 = (0);
while(true){
if((i__43721__auto___56369 < len__43720__auto___56368)){
args__43727__auto__.push((arguments[i__43721__auto___56369]));

var G__56370 = (i__43721__auto___56369 + (1));
i__43721__auto___56369 = G__56370;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__56362){
var vec__56363 = p__56362;
var _opts = cljs.core.nth.call(null,vec__56363,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__56363,_opts){
return (function (data){
var map__56366 = data;
var map__56366__$1 = ((((!((map__56366 == null)))?((((map__56366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56366):map__56366);
var output_ = cljs.core.get.call(null,map__56366__$1,new cljs.core.Keyword(null,"output_","output_",-36797880));
return cljs.core.println.call(null,cljs.core.force.call(null,output_));
});})(vec__56363,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq56361){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56361));
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
var args__43727__auto__ = [];
var len__43720__auto___56378 = arguments.length;
var i__43721__auto___56379 = (0);
while(true){
if((i__43721__auto___56379 < len__43720__auto___56378)){
args__43727__auto__.push((arguments[i__43721__auto___56379]));

var G__56380 = (i__43721__auto___56379 + (1));
i__43721__auto___56379 = G__56380;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((0) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__43728__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__56372){
var vec__56373 = p__56372;
var opts = cljs.core.nth.call(null,vec__56373,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((typeof console !== 'undefined')?(function (){var level__GT_logger = ((function (vec__56373,opts){
return (function (level){
var or__42645__auto__ = (function (){var G__56377 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__56377) {
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
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return console.log;
}
});})(vec__56373,opts))
;
return ((function (level__GT_logger,vec__56373,opts){
return (function (data){
var temp__4657__auto__ = level__GT_logger.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__4657__auto__)){
var logger = temp__4657__auto__;
if(cljs.core.truth_((function (){var or__42645__auto__ = new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061)], null));
}
})())){
var output = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(data).call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),"",new cljs.core.Keyword(null,"?err","?err",549653299),null));
var args = cljs.core.cons.call(null,output,cljs.core.cons.call(null,new cljs.core.Keyword(null,"?err","?err",549653299).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(data)));
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,cljs.core.force.call(null,new cljs.core.Keyword(null,"output_","output_",-36797880).cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
;})(level__GT_logger,vec__56373,opts))
})():((function (vec__56373,opts){
return (function (data){
return null;
});})(vec__56373,opts))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq56371){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56371));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=core.js.map