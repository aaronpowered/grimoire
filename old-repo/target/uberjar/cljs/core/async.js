// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28212 = [];
var len__7489__auto___28218 = arguments.length;
var i__7490__auto___28219 = (0);
while(true){
if((i__7490__auto___28219 < len__7489__auto___28218)){
args28212.push((arguments[i__7490__auto___28219]));

var G__28220 = (i__7490__auto___28219 + (1));
i__7490__auto___28219 = G__28220;
continue;
} else {
}
break;
}

var G__28214 = args28212.length;
switch (G__28214) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28212.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28215 = (function (f,blockable,meta28216){
this.f = f;
this.blockable = blockable;
this.meta28216 = meta28216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28217,meta28216__$1){
var self__ = this;
var _28217__$1 = this;
return (new cljs.core.async.t_cljs$core$async28215(self__.f,self__.blockable,meta28216__$1));
});

cljs.core.async.t_cljs$core$async28215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28217){
var self__ = this;
var _28217__$1 = this;
return self__.meta28216;
});

cljs.core.async.t_cljs$core$async28215.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta28216], null);
});

cljs.core.async.t_cljs$core$async28215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28215";

cljs.core.async.t_cljs$core$async28215.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async28215");
});

cljs.core.async.__GT_t_cljs$core$async28215 = (function cljs$core$async$__GT_t_cljs$core$async28215(f__$1,blockable__$1,meta28216){
return (new cljs.core.async.t_cljs$core$async28215(f__$1,blockable__$1,meta28216));
});

}

return (new cljs.core.async.t_cljs$core$async28215(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28224 = [];
var len__7489__auto___28227 = arguments.length;
var i__7490__auto___28228 = (0);
while(true){
if((i__7490__auto___28228 < len__7489__auto___28227)){
args28224.push((arguments[i__7490__auto___28228]));

var G__28229 = (i__7490__auto___28228 + (1));
i__7490__auto___28228 = G__28229;
continue;
} else {
}
break;
}

var G__28226 = args28224.length;
switch (G__28226) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28224.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28231 = [];
var len__7489__auto___28234 = arguments.length;
var i__7490__auto___28235 = (0);
while(true){
if((i__7490__auto___28235 < len__7489__auto___28234)){
args28231.push((arguments[i__7490__auto___28235]));

var G__28236 = (i__7490__auto___28235 + (1));
i__7490__auto___28235 = G__28236;
continue;
} else {
}
break;
}

var G__28233 = args28231.length;
switch (G__28233) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28231.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28238 = [];
var len__7489__auto___28241 = arguments.length;
var i__7490__auto___28242 = (0);
while(true){
if((i__7490__auto___28242 < len__7489__auto___28241)){
args28238.push((arguments[i__7490__auto___28242]));

var G__28243 = (i__7490__auto___28242 + (1));
i__7490__auto___28242 = G__28243;
continue;
} else {
}
break;
}

var G__28240 = args28238.length;
switch (G__28240) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28238.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_28245 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28245) : fn1.call(null,val_28245));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28245,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28245) : fn1.call(null,val_28245));
});})(val_28245,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28246 = [];
var len__7489__auto___28249 = arguments.length;
var i__7490__auto___28250 = (0);
while(true){
if((i__7490__auto___28250 < len__7489__auto___28249)){
args28246.push((arguments[i__7490__auto___28250]));

var G__28251 = (i__7490__auto___28250 + (1));
i__7490__auto___28250 = G__28251;
continue;
} else {
}
break;
}

var G__28248 = args28246.length;
switch (G__28248) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28246.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7329__auto___28253 = n;
var x_28254 = (0);
while(true){
if((x_28254 < n__7329__auto___28253)){
(a[x_28254] = (0));

var G__28255 = (x_28254 + (1));
x_28254 = G__28255;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__28256 = (i + (1));
i = G__28256;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async28260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28260 = (function (alt_flag,flag,meta28261){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28261 = meta28261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28262,meta28261__$1){
var self__ = this;
var _28262__$1 = this;
return (new cljs.core.async.t_cljs$core$async28260(self__.alt_flag,self__.flag,meta28261__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28262){
var self__ = this;
var _28262__$1 = this;
return self__.meta28261;
});})(flag))
;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28260.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta28261], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28260";

cljs.core.async.t_cljs$core$async28260.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async28260");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28260 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28260(alt_flag__$1,flag__$1,meta28261){
return (new cljs.core.async.t_cljs$core$async28260(alt_flag__$1,flag__$1,meta28261));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28260(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28266 = (function (alt_handler,flag,cb,meta28267){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28267 = meta28267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28268,meta28267__$1){
var self__ = this;
var _28268__$1 = this;
return (new cljs.core.async.t_cljs$core$async28266(self__.alt_handler,self__.flag,self__.cb,meta28267__$1));
});

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28268){
var self__ = this;
var _28268__$1 = this;
return self__.meta28267;
});

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta28267], null);
});

cljs.core.async.t_cljs$core$async28266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28266";

cljs.core.async.t_cljs$core$async28266.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async28266");
});

cljs.core.async.__GT_t_cljs$core$async28266 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28266(alt_handler__$1,flag__$1,cb__$1,meta28267){
return (new cljs.core.async.t_cljs$core$async28266(alt_handler__$1,flag__$1,cb__$1,meta28267));
});

}

return (new cljs.core.async.t_cljs$core$async28266(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28269_SHARP_){
var G__28273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28269_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28273) : fret.call(null,G__28273));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28270_SHARP_){
var G__28274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28270_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28274) : fret.call(null,G__28274));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6414__auto__ = wport;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28275 = (i + (1));
i = G__28275;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6414__auto__ = ret;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6402__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6402__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___28281 = arguments.length;
var i__7490__auto___28282 = (0);
while(true){
if((i__7490__auto___28282 < len__7489__auto___28281)){
args__7496__auto__.push((arguments[i__7490__auto___28282]));

var G__28283 = (i__7490__auto___28282 + (1));
i__7490__auto___28282 = G__28283;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28278){
var map__28279 = p__28278;
var map__28279__$1 = ((((!((map__28279 == null)))?((((map__28279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28279):map__28279);
var opts = map__28279__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28276){
var G__28277 = cljs.core.first(seq28276);
var seq28276__$1 = cljs.core.next(seq28276);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28277,seq28276__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28284 = [];
var len__7489__auto___28334 = arguments.length;
var i__7490__auto___28335 = (0);
while(true){
if((i__7490__auto___28335 < len__7489__auto___28334)){
args28284.push((arguments[i__7490__auto___28335]));

var G__28336 = (i__7490__auto___28335 + (1));
i__7490__auto___28335 = G__28336;
continue;
} else {
}
break;
}

var G__28286 = args28284.length;
switch (G__28286) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28284.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28167__auto___28338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___28338){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___28338){
return (function (state_28310){
var state_val_28311 = (state_28310[(1)]);
if((state_val_28311 === (7))){
var inst_28306 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28312_28339 = state_28310__$1;
(statearr_28312_28339[(2)] = inst_28306);

(statearr_28312_28339[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (1))){
var state_28310__$1 = state_28310;
var statearr_28313_28340 = state_28310__$1;
(statearr_28313_28340[(2)] = null);

(statearr_28313_28340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (4))){
var inst_28289 = (state_28310[(7)]);
var inst_28289__$1 = (state_28310[(2)]);
var inst_28290 = (inst_28289__$1 == null);
var state_28310__$1 = (function (){var statearr_28314 = state_28310;
(statearr_28314[(7)] = inst_28289__$1);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28290)){
var statearr_28315_28341 = state_28310__$1;
(statearr_28315_28341[(1)] = (5));

} else {
var statearr_28316_28342 = state_28310__$1;
(statearr_28316_28342[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (13))){
var state_28310__$1 = state_28310;
var statearr_28317_28343 = state_28310__$1;
(statearr_28317_28343[(2)] = null);

(statearr_28317_28343[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (6))){
var inst_28289 = (state_28310[(7)]);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28310__$1,(11),to,inst_28289);
} else {
if((state_val_28311 === (3))){
var inst_28308 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28310__$1,inst_28308);
} else {
if((state_val_28311 === (12))){
var state_28310__$1 = state_28310;
var statearr_28318_28344 = state_28310__$1;
(statearr_28318_28344[(2)] = null);

(statearr_28318_28344[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (2))){
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28310__$1,(4),from);
} else {
if((state_val_28311 === (11))){
var inst_28299 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
if(cljs.core.truth_(inst_28299)){
var statearr_28319_28345 = state_28310__$1;
(statearr_28319_28345[(1)] = (12));

} else {
var statearr_28320_28346 = state_28310__$1;
(statearr_28320_28346[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (9))){
var state_28310__$1 = state_28310;
var statearr_28321_28347 = state_28310__$1;
(statearr_28321_28347[(2)] = null);

(statearr_28321_28347[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (5))){
var state_28310__$1 = state_28310;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28322_28348 = state_28310__$1;
(statearr_28322_28348[(1)] = (8));

} else {
var statearr_28323_28349 = state_28310__$1;
(statearr_28323_28349[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (14))){
var inst_28304 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28324_28350 = state_28310__$1;
(statearr_28324_28350[(2)] = inst_28304);

(statearr_28324_28350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (10))){
var inst_28296 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28325_28351 = state_28310__$1;
(statearr_28325_28351[(2)] = inst_28296);

(statearr_28325_28351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28311 === (8))){
var inst_28293 = cljs.core.async.close_BANG_(to);
var state_28310__$1 = state_28310;
var statearr_28326_28352 = state_28310__$1;
(statearr_28326_28352[(2)] = inst_28293);

(statearr_28326_28352[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___28338))
;
return ((function (switch__28043__auto__,c__28167__auto___28338){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_28330 = [null,null,null,null,null,null,null,null];
(statearr_28330[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_28330[(1)] = (1));

return statearr_28330;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_28310){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28310);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28331){if((e28331 instanceof Object)){
var ex__28047__auto__ = e28331;
var statearr_28332_28353 = state_28310;
(statearr_28332_28353[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28310);

return cljs.core.cst$kw$recur;
} else {
throw e28331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__28354 = state_28310;
state_28310 = G__28354;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_28310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_28310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___28338))
})();
var state__28169__auto__ = (function (){var statearr_28333 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___28338);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___28338))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__28542){
var vec__28543 = p__28542;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28543,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28543,(1),null);
var job = vec__28543;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28167__auto___28729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___28729,res,vec__28543,v,p,job,jobs,results){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___28729,res,vec__28543,v,p,job,jobs,results){
return (function (state_28550){
var state_val_28551 = (state_28550[(1)]);
if((state_val_28551 === (1))){
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28550__$1,(2),res,v);
} else {
if((state_val_28551 === (2))){
var inst_28547 = (state_28550[(2)]);
var inst_28548 = cljs.core.async.close_BANG_(res);
var state_28550__$1 = (function (){var statearr_28552 = state_28550;
(statearr_28552[(7)] = inst_28547);

return statearr_28552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28550__$1,inst_28548);
} else {
return null;
}
}
});})(c__28167__auto___28729,res,vec__28543,v,p,job,jobs,results))
;
return ((function (switch__28043__auto__,c__28167__auto___28729,res,vec__28543,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_28556 = [null,null,null,null,null,null,null,null];
(statearr_28556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_28556[(1)] = (1));

return statearr_28556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_28550){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28550);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28557){if((e28557 instanceof Object)){
var ex__28047__auto__ = e28557;
var statearr_28558_28730 = state_28550;
(statearr_28558_28730[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28550);

return cljs.core.cst$kw$recur;
} else {
throw e28557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__28731 = state_28550;
state_28550 = G__28731;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_28550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_28550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___28729,res,vec__28543,v,p,job,jobs,results))
})();
var state__28169__auto__ = (function (){var statearr_28559 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___28729);

return statearr_28559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___28729,res,vec__28543,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28560){
var vec__28561 = p__28560;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28561,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28561,(1),null);
var job = vec__28561;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7329__auto___28732 = n;
var __28733 = (0);
while(true){
if((__28733 < n__7329__auto___28732)){
var G__28564_28734 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28564_28734) {
case "compute":
var c__28167__auto___28736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28733,c__28167__auto___28736,G__28564_28734,n__7329__auto___28732,jobs,results,process,async){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (__28733,c__28167__auto___28736,G__28564_28734,n__7329__auto___28732,jobs,results,process,async){
return (function (state_28577){
var state_val_28578 = (state_28577[(1)]);
if((state_val_28578 === (1))){
var state_28577__$1 = state_28577;
var statearr_28579_28737 = state_28577__$1;
(statearr_28579_28737[(2)] = null);

(statearr_28579_28737[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28578 === (2))){
var state_28577__$1 = state_28577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28577__$1,(4),jobs);
} else {
if((state_val_28578 === (3))){
var inst_28575 = (state_28577[(2)]);
var state_28577__$1 = state_28577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28577__$1,inst_28575);
} else {
if((state_val_28578 === (4))){
var inst_28567 = (state_28577[(2)]);
var inst_28568 = process(inst_28567);
var state_28577__$1 = state_28577;
if(cljs.core.truth_(inst_28568)){
var statearr_28580_28738 = state_28577__$1;
(statearr_28580_28738[(1)] = (5));

} else {
var statearr_28581_28739 = state_28577__$1;
(statearr_28581_28739[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28578 === (5))){
var state_28577__$1 = state_28577;
var statearr_28582_28740 = state_28577__$1;
(statearr_28582_28740[(2)] = null);

(statearr_28582_28740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28578 === (6))){
var state_28577__$1 = state_28577;
var statearr_28583_28741 = state_28577__$1;
(statearr_28583_28741[(2)] = null);

(statearr_28583_28741[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28578 === (7))){
var inst_28573 = (state_28577[(2)]);
var state_28577__$1 = state_28577;
var statearr_28584_28742 = state_28577__$1;
(statearr_28584_28742[(2)] = inst_28573);

(statearr_28584_28742[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__28733,c__28167__auto___28736,G__28564_28734,n__7329__auto___28732,jobs,results,process,async))
;
return ((function (__28733,switch__28043__auto__,c__28167__auto___28736,G__28564_28734,n__7329__auto___28732,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_28588 = [null,null,null,null,null,null,null];
(statearr_28588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_28588[(1)] = (1));

return statearr_28588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_28577){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28577);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28589){if((e28589 instanceof Object)){
var ex__28047__auto__ = e28589;
var statearr_28590_28743 = state_28577;
(statearr_28590_28743[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28577);

return cljs.core.cst$kw$recur;
} else {
throw e28589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__28744 = state_28577;
state_28577 = G__28744;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_28577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_28577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(__28733,switch__28043__auto__,c__28167__auto___28736,G__28564_28734,n__7329__auto___28732,jobs,results,process,async))
})();
var state__28169__auto__ = (function (){var statearr_28591 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___28736);

return statearr_28591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(__28733,c__28167__auto___28736,G__28564_28734,n__7329__auto___28732,jobs,results,process,async))
);


break;
case "async":
var c__28167__auto___28745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28733,c__28167__auto___28745,G__28564_28734,n__7329__auto___28732,jobs,results,process,async){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (__28733,c__28167__auto___28745,G__28564_28734,n__7329__auto___28732,jobs,results,process,async){
return (function (state_28604){
var state_val_28605 = (state_28604[(1)]);
if((state_val_28605 === (1))){
var state_28604__$1 = state_28604;
var statearr_28606_28746 = state_28604__$1;
(statearr_28606_28746[(2)] = null);

(statearr_28606_28746[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28605 === (2))){
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28604__$1,(4),jobs);
} else {
if((state_val_28605 === (3))){
var inst_28602 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28604__$1,inst_28602);
} else {
if((state_val_28605 === (4))){
var inst_28594 = (state_28604[(2)]);
var inst_28595 = async(inst_28594);
var state_28604__$1 = state_28604;
if(cljs.core.truth_(inst_28595)){
var statearr_28607_28747 = state_28604__$1;
(statearr_28607_28747[(1)] = (5));

} else {
var statearr_28608_28748 = state_28604__$1;
(statearr_28608_28748[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28605 === (5))){
var state_28604__$1 = state_28604;
var statearr_28609_28749 = state_28604__$1;
(statearr_28609_28749[(2)] = null);

(statearr_28609_28749[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28605 === (6))){
var state_28604__$1 = state_28604;
var statearr_28610_28750 = state_28604__$1;
(statearr_28610_28750[(2)] = null);

(statearr_28610_28750[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28605 === (7))){
var inst_28600 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28611_28751 = state_28604__$1;
(statearr_28611_28751[(2)] = inst_28600);

(statearr_28611_28751[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__28733,c__28167__auto___28745,G__28564_28734,n__7329__auto___28732,jobs,results,process,async))
;
return ((function (__28733,switch__28043__auto__,c__28167__auto___28745,G__28564_28734,n__7329__auto___28732,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_28615 = [null,null,null,null,null,null,null];
(statearr_28615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_28615[(1)] = (1));

return statearr_28615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_28604){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28604);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28616){if((e28616 instanceof Object)){
var ex__28047__auto__ = e28616;
var statearr_28617_28752 = state_28604;
(statearr_28617_28752[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28604);

return cljs.core.cst$kw$recur;
} else {
throw e28616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__28753 = state_28604;
state_28604 = G__28753;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_28604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_28604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(__28733,switch__28043__auto__,c__28167__auto___28745,G__28564_28734,n__7329__auto___28732,jobs,results,process,async))
})();
var state__28169__auto__ = (function (){var statearr_28618 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___28745);

return statearr_28618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(__28733,c__28167__auto___28745,G__28564_28734,n__7329__auto___28732,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28754 = (__28733 + (1));
__28733 = G__28754;
continue;
} else {
}
break;
}

var c__28167__auto___28755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___28755,jobs,results,process,async){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___28755,jobs,results,process,async){
return (function (state_28640){
var state_val_28641 = (state_28640[(1)]);
if((state_val_28641 === (1))){
var state_28640__$1 = state_28640;
var statearr_28642_28756 = state_28640__$1;
(statearr_28642_28756[(2)] = null);

(statearr_28642_28756[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28641 === (2))){
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28640__$1,(4),from);
} else {
if((state_val_28641 === (3))){
var inst_28638 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28640__$1,inst_28638);
} else {
if((state_val_28641 === (4))){
var inst_28621 = (state_28640[(7)]);
var inst_28621__$1 = (state_28640[(2)]);
var inst_28622 = (inst_28621__$1 == null);
var state_28640__$1 = (function (){var statearr_28643 = state_28640;
(statearr_28643[(7)] = inst_28621__$1);

return statearr_28643;
})();
if(cljs.core.truth_(inst_28622)){
var statearr_28644_28757 = state_28640__$1;
(statearr_28644_28757[(1)] = (5));

} else {
var statearr_28645_28758 = state_28640__$1;
(statearr_28645_28758[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28641 === (5))){
var inst_28624 = cljs.core.async.close_BANG_(jobs);
var state_28640__$1 = state_28640;
var statearr_28646_28759 = state_28640__$1;
(statearr_28646_28759[(2)] = inst_28624);

(statearr_28646_28759[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28641 === (6))){
var inst_28626 = (state_28640[(8)]);
var inst_28621 = (state_28640[(7)]);
var inst_28626__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28628 = [inst_28621,inst_28626__$1];
var inst_28629 = (new cljs.core.PersistentVector(null,2,(5),inst_28627,inst_28628,null));
var state_28640__$1 = (function (){var statearr_28647 = state_28640;
(statearr_28647[(8)] = inst_28626__$1);

return statearr_28647;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28640__$1,(8),jobs,inst_28629);
} else {
if((state_val_28641 === (7))){
var inst_28636 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28648_28760 = state_28640__$1;
(statearr_28648_28760[(2)] = inst_28636);

(statearr_28648_28760[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28641 === (8))){
var inst_28626 = (state_28640[(8)]);
var inst_28631 = (state_28640[(2)]);
var state_28640__$1 = (function (){var statearr_28649 = state_28640;
(statearr_28649[(9)] = inst_28631);

return statearr_28649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28640__$1,(9),results,inst_28626);
} else {
if((state_val_28641 === (9))){
var inst_28633 = (state_28640[(2)]);
var state_28640__$1 = (function (){var statearr_28650 = state_28640;
(statearr_28650[(10)] = inst_28633);

return statearr_28650;
})();
var statearr_28651_28761 = state_28640__$1;
(statearr_28651_28761[(2)] = null);

(statearr_28651_28761[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___28755,jobs,results,process,async))
;
return ((function (switch__28043__auto__,c__28167__auto___28755,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_28655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_28655[(1)] = (1));

return statearr_28655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_28640){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28640);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28656){if((e28656 instanceof Object)){
var ex__28047__auto__ = e28656;
var statearr_28657_28762 = state_28640;
(statearr_28657_28762[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28640);

return cljs.core.cst$kw$recur;
} else {
throw e28656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__28763 = state_28640;
state_28640 = G__28763;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_28640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_28640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___28755,jobs,results,process,async))
})();
var state__28169__auto__ = (function (){var statearr_28658 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___28755);

return statearr_28658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___28755,jobs,results,process,async))
);


var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__,jobs,results,process,async){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__,jobs,results,process,async){
return (function (state_28696){
var state_val_28697 = (state_28696[(1)]);
if((state_val_28697 === (7))){
var inst_28692 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28698_28764 = state_28696__$1;
(statearr_28698_28764[(2)] = inst_28692);

(statearr_28698_28764[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (20))){
var state_28696__$1 = state_28696;
var statearr_28699_28765 = state_28696__$1;
(statearr_28699_28765[(2)] = null);

(statearr_28699_28765[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (1))){
var state_28696__$1 = state_28696;
var statearr_28700_28766 = state_28696__$1;
(statearr_28700_28766[(2)] = null);

(statearr_28700_28766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (4))){
var inst_28661 = (state_28696[(7)]);
var inst_28661__$1 = (state_28696[(2)]);
var inst_28662 = (inst_28661__$1 == null);
var state_28696__$1 = (function (){var statearr_28701 = state_28696;
(statearr_28701[(7)] = inst_28661__$1);

return statearr_28701;
})();
if(cljs.core.truth_(inst_28662)){
var statearr_28702_28767 = state_28696__$1;
(statearr_28702_28767[(1)] = (5));

} else {
var statearr_28703_28768 = state_28696__$1;
(statearr_28703_28768[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (15))){
var inst_28674 = (state_28696[(8)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28696__$1,(18),to,inst_28674);
} else {
if((state_val_28697 === (21))){
var inst_28687 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28704_28769 = state_28696__$1;
(statearr_28704_28769[(2)] = inst_28687);

(statearr_28704_28769[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (13))){
var inst_28689 = (state_28696[(2)]);
var state_28696__$1 = (function (){var statearr_28705 = state_28696;
(statearr_28705[(9)] = inst_28689);

return statearr_28705;
})();
var statearr_28706_28770 = state_28696__$1;
(statearr_28706_28770[(2)] = null);

(statearr_28706_28770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (6))){
var inst_28661 = (state_28696[(7)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28696__$1,(11),inst_28661);
} else {
if((state_val_28697 === (17))){
var inst_28682 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
if(cljs.core.truth_(inst_28682)){
var statearr_28707_28771 = state_28696__$1;
(statearr_28707_28771[(1)] = (19));

} else {
var statearr_28708_28772 = state_28696__$1;
(statearr_28708_28772[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (3))){
var inst_28694 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28696__$1,inst_28694);
} else {
if((state_val_28697 === (12))){
var inst_28671 = (state_28696[(10)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28696__$1,(14),inst_28671);
} else {
if((state_val_28697 === (2))){
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28696__$1,(4),results);
} else {
if((state_val_28697 === (19))){
var state_28696__$1 = state_28696;
var statearr_28709_28773 = state_28696__$1;
(statearr_28709_28773[(2)] = null);

(statearr_28709_28773[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (11))){
var inst_28671 = (state_28696[(2)]);
var state_28696__$1 = (function (){var statearr_28710 = state_28696;
(statearr_28710[(10)] = inst_28671);

return statearr_28710;
})();
var statearr_28711_28774 = state_28696__$1;
(statearr_28711_28774[(2)] = null);

(statearr_28711_28774[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (9))){
var state_28696__$1 = state_28696;
var statearr_28712_28775 = state_28696__$1;
(statearr_28712_28775[(2)] = null);

(statearr_28712_28775[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (5))){
var state_28696__$1 = state_28696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28713_28776 = state_28696__$1;
(statearr_28713_28776[(1)] = (8));

} else {
var statearr_28714_28777 = state_28696__$1;
(statearr_28714_28777[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (14))){
var inst_28674 = (state_28696[(8)]);
var inst_28676 = (state_28696[(11)]);
var inst_28674__$1 = (state_28696[(2)]);
var inst_28675 = (inst_28674__$1 == null);
var inst_28676__$1 = cljs.core.not(inst_28675);
var state_28696__$1 = (function (){var statearr_28715 = state_28696;
(statearr_28715[(8)] = inst_28674__$1);

(statearr_28715[(11)] = inst_28676__$1);

return statearr_28715;
})();
if(inst_28676__$1){
var statearr_28716_28778 = state_28696__$1;
(statearr_28716_28778[(1)] = (15));

} else {
var statearr_28717_28779 = state_28696__$1;
(statearr_28717_28779[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (16))){
var inst_28676 = (state_28696[(11)]);
var state_28696__$1 = state_28696;
var statearr_28718_28780 = state_28696__$1;
(statearr_28718_28780[(2)] = inst_28676);

(statearr_28718_28780[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (10))){
var inst_28668 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28719_28781 = state_28696__$1;
(statearr_28719_28781[(2)] = inst_28668);

(statearr_28719_28781[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (18))){
var inst_28679 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28720_28782 = state_28696__$1;
(statearr_28720_28782[(2)] = inst_28679);

(statearr_28720_28782[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28697 === (8))){
var inst_28665 = cljs.core.async.close_BANG_(to);
var state_28696__$1 = state_28696;
var statearr_28721_28783 = state_28696__$1;
(statearr_28721_28783[(2)] = inst_28665);

(statearr_28721_28783[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto__,jobs,results,process,async))
;
return ((function (switch__28043__auto__,c__28167__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_28725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_28725[(1)] = (1));

return statearr_28725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_28696){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28696);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28726){if((e28726 instanceof Object)){
var ex__28047__auto__ = e28726;
var statearr_28727_28784 = state_28696;
(statearr_28727_28784[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28696);

return cljs.core.cst$kw$recur;
} else {
throw e28726;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__28785 = state_28696;
state_28696 = G__28785;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_28696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_28696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__,jobs,results,process,async))
})();
var state__28169__auto__ = (function (){var statearr_28728 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_28728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__,jobs,results,process,async))
);

return c__28167__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28786 = [];
var len__7489__auto___28789 = arguments.length;
var i__7490__auto___28790 = (0);
while(true){
if((i__7490__auto___28790 < len__7489__auto___28789)){
args28786.push((arguments[i__7490__auto___28790]));

var G__28791 = (i__7490__auto___28790 + (1));
i__7490__auto___28790 = G__28791;
continue;
} else {
}
break;
}

var G__28788 = args28786.length;
switch (G__28788) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28786.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28793 = [];
var len__7489__auto___28796 = arguments.length;
var i__7490__auto___28797 = (0);
while(true){
if((i__7490__auto___28797 < len__7489__auto___28796)){
args28793.push((arguments[i__7490__auto___28797]));

var G__28798 = (i__7490__auto___28797 + (1));
i__7490__auto___28797 = G__28798;
continue;
} else {
}
break;
}

var G__28795 = args28793.length;
switch (G__28795) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28793.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28800 = [];
var len__7489__auto___28853 = arguments.length;
var i__7490__auto___28854 = (0);
while(true){
if((i__7490__auto___28854 < len__7489__auto___28853)){
args28800.push((arguments[i__7490__auto___28854]));

var G__28855 = (i__7490__auto___28854 + (1));
i__7490__auto___28854 = G__28855;
continue;
} else {
}
break;
}

var G__28802 = args28800.length;
switch (G__28802) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28800.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28167__auto___28857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___28857,tc,fc){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___28857,tc,fc){
return (function (state_28828){
var state_val_28829 = (state_28828[(1)]);
if((state_val_28829 === (7))){
var inst_28824 = (state_28828[(2)]);
var state_28828__$1 = state_28828;
var statearr_28830_28858 = state_28828__$1;
(statearr_28830_28858[(2)] = inst_28824);

(statearr_28830_28858[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (1))){
var state_28828__$1 = state_28828;
var statearr_28831_28859 = state_28828__$1;
(statearr_28831_28859[(2)] = null);

(statearr_28831_28859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (4))){
var inst_28805 = (state_28828[(7)]);
var inst_28805__$1 = (state_28828[(2)]);
var inst_28806 = (inst_28805__$1 == null);
var state_28828__$1 = (function (){var statearr_28832 = state_28828;
(statearr_28832[(7)] = inst_28805__$1);

return statearr_28832;
})();
if(cljs.core.truth_(inst_28806)){
var statearr_28833_28860 = state_28828__$1;
(statearr_28833_28860[(1)] = (5));

} else {
var statearr_28834_28861 = state_28828__$1;
(statearr_28834_28861[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (13))){
var state_28828__$1 = state_28828;
var statearr_28835_28862 = state_28828__$1;
(statearr_28835_28862[(2)] = null);

(statearr_28835_28862[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (6))){
var inst_28805 = (state_28828[(7)]);
var inst_28811 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28805) : p.call(null,inst_28805));
var state_28828__$1 = state_28828;
if(cljs.core.truth_(inst_28811)){
var statearr_28836_28863 = state_28828__$1;
(statearr_28836_28863[(1)] = (9));

} else {
var statearr_28837_28864 = state_28828__$1;
(statearr_28837_28864[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (3))){
var inst_28826 = (state_28828[(2)]);
var state_28828__$1 = state_28828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28828__$1,inst_28826);
} else {
if((state_val_28829 === (12))){
var state_28828__$1 = state_28828;
var statearr_28838_28865 = state_28828__$1;
(statearr_28838_28865[(2)] = null);

(statearr_28838_28865[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (2))){
var state_28828__$1 = state_28828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28828__$1,(4),ch);
} else {
if((state_val_28829 === (11))){
var inst_28805 = (state_28828[(7)]);
var inst_28815 = (state_28828[(2)]);
var state_28828__$1 = state_28828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28828__$1,(8),inst_28815,inst_28805);
} else {
if((state_val_28829 === (9))){
var state_28828__$1 = state_28828;
var statearr_28839_28866 = state_28828__$1;
(statearr_28839_28866[(2)] = tc);

(statearr_28839_28866[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (5))){
var inst_28808 = cljs.core.async.close_BANG_(tc);
var inst_28809 = cljs.core.async.close_BANG_(fc);
var state_28828__$1 = (function (){var statearr_28840 = state_28828;
(statearr_28840[(8)] = inst_28808);

return statearr_28840;
})();
var statearr_28841_28867 = state_28828__$1;
(statearr_28841_28867[(2)] = inst_28809);

(statearr_28841_28867[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (14))){
var inst_28822 = (state_28828[(2)]);
var state_28828__$1 = state_28828;
var statearr_28842_28868 = state_28828__$1;
(statearr_28842_28868[(2)] = inst_28822);

(statearr_28842_28868[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (10))){
var state_28828__$1 = state_28828;
var statearr_28843_28869 = state_28828__$1;
(statearr_28843_28869[(2)] = fc);

(statearr_28843_28869[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28829 === (8))){
var inst_28817 = (state_28828[(2)]);
var state_28828__$1 = state_28828;
if(cljs.core.truth_(inst_28817)){
var statearr_28844_28870 = state_28828__$1;
(statearr_28844_28870[(1)] = (12));

} else {
var statearr_28845_28871 = state_28828__$1;
(statearr_28845_28871[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___28857,tc,fc))
;
return ((function (switch__28043__auto__,c__28167__auto___28857,tc,fc){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_28849 = [null,null,null,null,null,null,null,null,null];
(statearr_28849[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_28849[(1)] = (1));

return statearr_28849;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_28828){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28828);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28850){if((e28850 instanceof Object)){
var ex__28047__auto__ = e28850;
var statearr_28851_28872 = state_28828;
(statearr_28851_28872[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28828);

return cljs.core.cst$kw$recur;
} else {
throw e28850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__28873 = state_28828;
state_28828 = G__28873;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_28828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_28828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___28857,tc,fc))
})();
var state__28169__auto__ = (function (){var statearr_28852 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___28857);

return statearr_28852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___28857,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__){
return (function (state_28937){
var state_val_28938 = (state_28937[(1)]);
if((state_val_28938 === (7))){
var inst_28933 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28939_28960 = state_28937__$1;
(statearr_28939_28960[(2)] = inst_28933);

(statearr_28939_28960[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28938 === (1))){
var inst_28917 = init;
var state_28937__$1 = (function (){var statearr_28940 = state_28937;
(statearr_28940[(7)] = inst_28917);

return statearr_28940;
})();
var statearr_28941_28961 = state_28937__$1;
(statearr_28941_28961[(2)] = null);

(statearr_28941_28961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28938 === (4))){
var inst_28920 = (state_28937[(8)]);
var inst_28920__$1 = (state_28937[(2)]);
var inst_28921 = (inst_28920__$1 == null);
var state_28937__$1 = (function (){var statearr_28942 = state_28937;
(statearr_28942[(8)] = inst_28920__$1);

return statearr_28942;
})();
if(cljs.core.truth_(inst_28921)){
var statearr_28943_28962 = state_28937__$1;
(statearr_28943_28962[(1)] = (5));

} else {
var statearr_28944_28963 = state_28937__$1;
(statearr_28944_28963[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28938 === (6))){
var inst_28920 = (state_28937[(8)]);
var inst_28924 = (state_28937[(9)]);
var inst_28917 = (state_28937[(7)]);
var inst_28924__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28917,inst_28920) : f.call(null,inst_28917,inst_28920));
var inst_28925 = cljs.core.reduced_QMARK_(inst_28924__$1);
var state_28937__$1 = (function (){var statearr_28945 = state_28937;
(statearr_28945[(9)] = inst_28924__$1);

return statearr_28945;
})();
if(inst_28925){
var statearr_28946_28964 = state_28937__$1;
(statearr_28946_28964[(1)] = (8));

} else {
var statearr_28947_28965 = state_28937__$1;
(statearr_28947_28965[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28938 === (3))){
var inst_28935 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28937__$1,inst_28935);
} else {
if((state_val_28938 === (2))){
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28937__$1,(4),ch);
} else {
if((state_val_28938 === (9))){
var inst_28924 = (state_28937[(9)]);
var inst_28917 = inst_28924;
var state_28937__$1 = (function (){var statearr_28948 = state_28937;
(statearr_28948[(7)] = inst_28917);

return statearr_28948;
})();
var statearr_28949_28966 = state_28937__$1;
(statearr_28949_28966[(2)] = null);

(statearr_28949_28966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28938 === (5))){
var inst_28917 = (state_28937[(7)]);
var state_28937__$1 = state_28937;
var statearr_28950_28967 = state_28937__$1;
(statearr_28950_28967[(2)] = inst_28917);

(statearr_28950_28967[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28938 === (10))){
var inst_28931 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28951_28968 = state_28937__$1;
(statearr_28951_28968[(2)] = inst_28931);

(statearr_28951_28968[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28938 === (8))){
var inst_28924 = (state_28937[(9)]);
var inst_28927 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_28924) : cljs.core.deref.call(null,inst_28924));
var state_28937__$1 = state_28937;
var statearr_28952_28969 = state_28937__$1;
(statearr_28952_28969[(2)] = inst_28927);

(statearr_28952_28969[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto__))
;
return ((function (switch__28043__auto__,c__28167__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28044__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28044__auto____0 = (function (){
var statearr_28956 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28956[(0)] = cljs$core$async$reduce_$_state_machine__28044__auto__);

(statearr_28956[(1)] = (1));

return statearr_28956;
});
var cljs$core$async$reduce_$_state_machine__28044__auto____1 = (function (state_28937){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28937);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28957){if((e28957 instanceof Object)){
var ex__28047__auto__ = e28957;
var statearr_28958_28970 = state_28937;
(statearr_28958_28970[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28937);

return cljs.core.cst$kw$recur;
} else {
throw e28957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__28971 = state_28937;
state_28937 = G__28971;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28044__auto__ = function(state_28937){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28044__auto____1.call(this,state_28937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28044__auto____0;
cljs$core$async$reduce_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28044__auto____1;
return cljs$core$async$reduce_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__))
})();
var state__28169__auto__ = (function (){var statearr_28959 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_28959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__))
);

return c__28167__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__,f__$1){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__,f__$1){
return (function (state_28991){
var state_val_28992 = (state_28991[(1)]);
if((state_val_28992 === (1))){
var inst_28986 = cljs.core.async.reduce(f__$1,init,ch);
var state_28991__$1 = state_28991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28991__$1,(2),inst_28986);
} else {
if((state_val_28992 === (2))){
var inst_28988 = (state_28991[(2)]);
var inst_28989 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28988) : f__$1.call(null,inst_28988));
var state_28991__$1 = state_28991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28991__$1,inst_28989);
} else {
return null;
}
}
});})(c__28167__auto__,f__$1))
;
return ((function (switch__28043__auto__,c__28167__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28044__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28044__auto____0 = (function (){
var statearr_28996 = [null,null,null,null,null,null,null];
(statearr_28996[(0)] = cljs$core$async$transduce_$_state_machine__28044__auto__);

(statearr_28996[(1)] = (1));

return statearr_28996;
});
var cljs$core$async$transduce_$_state_machine__28044__auto____1 = (function (state_28991){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_28991);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e28997){if((e28997 instanceof Object)){
var ex__28047__auto__ = e28997;
var statearr_28998_29000 = state_28991;
(statearr_28998_29000[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28991);

return cljs.core.cst$kw$recur;
} else {
throw e28997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__29001 = state_28991;
state_28991 = G__29001;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28044__auto__ = function(state_28991){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28044__auto____1.call(this,state_28991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28044__auto____0;
cljs$core$async$transduce_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28044__auto____1;
return cljs$core$async$transduce_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__,f__$1))
})();
var state__28169__auto__ = (function (){var statearr_28999 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_28999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_28999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__,f__$1))
);

return c__28167__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29002 = [];
var len__7489__auto___29054 = arguments.length;
var i__7490__auto___29055 = (0);
while(true){
if((i__7490__auto___29055 < len__7489__auto___29054)){
args29002.push((arguments[i__7490__auto___29055]));

var G__29056 = (i__7490__auto___29055 + (1));
i__7490__auto___29055 = G__29056;
continue;
} else {
}
break;
}

var G__29004 = args29002.length;
switch (G__29004) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29002.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__){
return (function (state_29029){
var state_val_29030 = (state_29029[(1)]);
if((state_val_29030 === (7))){
var inst_29011 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29031_29058 = state_29029__$1;
(statearr_29031_29058[(2)] = inst_29011);

(statearr_29031_29058[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (1))){
var inst_29005 = cljs.core.seq(coll);
var inst_29006 = inst_29005;
var state_29029__$1 = (function (){var statearr_29032 = state_29029;
(statearr_29032[(7)] = inst_29006);

return statearr_29032;
})();
var statearr_29033_29059 = state_29029__$1;
(statearr_29033_29059[(2)] = null);

(statearr_29033_29059[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (4))){
var inst_29006 = (state_29029[(7)]);
var inst_29009 = cljs.core.first(inst_29006);
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29029__$1,(7),ch,inst_29009);
} else {
if((state_val_29030 === (13))){
var inst_29023 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29034_29060 = state_29029__$1;
(statearr_29034_29060[(2)] = inst_29023);

(statearr_29034_29060[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (6))){
var inst_29014 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
if(cljs.core.truth_(inst_29014)){
var statearr_29035_29061 = state_29029__$1;
(statearr_29035_29061[(1)] = (8));

} else {
var statearr_29036_29062 = state_29029__$1;
(statearr_29036_29062[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (3))){
var inst_29027 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29029__$1,inst_29027);
} else {
if((state_val_29030 === (12))){
var state_29029__$1 = state_29029;
var statearr_29037_29063 = state_29029__$1;
(statearr_29037_29063[(2)] = null);

(statearr_29037_29063[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (2))){
var inst_29006 = (state_29029[(7)]);
var state_29029__$1 = state_29029;
if(cljs.core.truth_(inst_29006)){
var statearr_29038_29064 = state_29029__$1;
(statearr_29038_29064[(1)] = (4));

} else {
var statearr_29039_29065 = state_29029__$1;
(statearr_29039_29065[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (11))){
var inst_29020 = cljs.core.async.close_BANG_(ch);
var state_29029__$1 = state_29029;
var statearr_29040_29066 = state_29029__$1;
(statearr_29040_29066[(2)] = inst_29020);

(statearr_29040_29066[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (9))){
var state_29029__$1 = state_29029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29041_29067 = state_29029__$1;
(statearr_29041_29067[(1)] = (11));

} else {
var statearr_29042_29068 = state_29029__$1;
(statearr_29042_29068[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (5))){
var inst_29006 = (state_29029[(7)]);
var state_29029__$1 = state_29029;
var statearr_29043_29069 = state_29029__$1;
(statearr_29043_29069[(2)] = inst_29006);

(statearr_29043_29069[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (10))){
var inst_29025 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29044_29070 = state_29029__$1;
(statearr_29044_29070[(2)] = inst_29025);

(statearr_29044_29070[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29030 === (8))){
var inst_29006 = (state_29029[(7)]);
var inst_29016 = cljs.core.next(inst_29006);
var inst_29006__$1 = inst_29016;
var state_29029__$1 = (function (){var statearr_29045 = state_29029;
(statearr_29045[(7)] = inst_29006__$1);

return statearr_29045;
})();
var statearr_29046_29071 = state_29029__$1;
(statearr_29046_29071[(2)] = null);

(statearr_29046_29071[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto__))
;
return ((function (switch__28043__auto__,c__28167__auto__){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_29050 = [null,null,null,null,null,null,null,null];
(statearr_29050[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_29050[(1)] = (1));

return statearr_29050;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_29029){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_29029);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e29051){if((e29051 instanceof Object)){
var ex__28047__auto__ = e29051;
var statearr_29052_29072 = state_29029;
(statearr_29052_29072[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29029);

return cljs.core.cst$kw$recur;
} else {
throw e29051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__29073 = state_29029;
state_29029 = G__29073;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_29029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_29029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__))
})();
var state__28169__auto__ = (function (){var statearr_29053 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_29053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_29053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__))
);

return c__28167__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7077__auto__ = (((_ == null))?null:_);
var m__7078__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto__.call(null,_));
} else {
var m__7078__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7078__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7077__auto__ = (((m == null))?null:m);
var m__7078__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7078__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7078__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7078__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7077__auto__ = (((m == null))?null:m);
var m__7078__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7078__auto__.call(null,m,ch));
} else {
var m__7078__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7078__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7077__auto__ = (((m == null))?null:m);
var m__7078__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7078__auto__.call(null,m));
} else {
var m__7078__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7078__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__29302 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29302) : cljs.core.atom.call(null,G__29302));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29303 = (function (mult,ch,cs,meta29304){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29304 = meta29304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29305,meta29304__$1){
var self__ = this;
var _29305__$1 = this;
return (new cljs.core.async.t_cljs$core$async29303(self__.mult,self__.ch,self__.cs,meta29304__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29305){
var self__ = this;
var _29305__$1 = this;
return self__.meta29304;
});})(cs))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29303.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29306_29530 = self__.cs;
var G__29307_29531 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29306_29530,G__29307_29531) : cljs.core.reset_BANG_.call(null,G__29306_29530,G__29307_29531));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29303.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta29304], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29303";

cljs.core.async.t_cljs$core$async29303.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async29303");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29303 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29303(mult__$1,ch__$1,cs__$1,meta29304){
return (new cljs.core.async.t_cljs$core$async29303(mult__$1,ch__$1,cs__$1,meta29304));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29303(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28167__auto___29532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___29532,cs,m,dchan,dctr,done){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___29532,cs,m,dchan,dctr,done){
return (function (state_29442){
var state_val_29443 = (state_29442[(1)]);
if((state_val_29443 === (7))){
var inst_29438 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29444_29533 = state_29442__$1;
(statearr_29444_29533[(2)] = inst_29438);

(statearr_29444_29533[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (20))){
var inst_29341 = (state_29442[(7)]);
var inst_29353 = cljs.core.first(inst_29341);
var inst_29354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29353,(0),null);
var inst_29355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29353,(1),null);
var state_29442__$1 = (function (){var statearr_29445 = state_29442;
(statearr_29445[(8)] = inst_29354);

return statearr_29445;
})();
if(cljs.core.truth_(inst_29355)){
var statearr_29446_29534 = state_29442__$1;
(statearr_29446_29534[(1)] = (22));

} else {
var statearr_29447_29535 = state_29442__$1;
(statearr_29447_29535[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (27))){
var inst_29383 = (state_29442[(9)]);
var inst_29390 = (state_29442[(10)]);
var inst_29310 = (state_29442[(11)]);
var inst_29385 = (state_29442[(12)]);
var inst_29390__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29383,inst_29385);
var inst_29391 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29390__$1,inst_29310,done);
var state_29442__$1 = (function (){var statearr_29448 = state_29442;
(statearr_29448[(10)] = inst_29390__$1);

return statearr_29448;
})();
if(cljs.core.truth_(inst_29391)){
var statearr_29449_29536 = state_29442__$1;
(statearr_29449_29536[(1)] = (30));

} else {
var statearr_29450_29537 = state_29442__$1;
(statearr_29450_29537[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (1))){
var state_29442__$1 = state_29442;
var statearr_29451_29538 = state_29442__$1;
(statearr_29451_29538[(2)] = null);

(statearr_29451_29538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (24))){
var inst_29341 = (state_29442[(7)]);
var inst_29360 = (state_29442[(2)]);
var inst_29361 = cljs.core.next(inst_29341);
var inst_29319 = inst_29361;
var inst_29320 = null;
var inst_29321 = (0);
var inst_29322 = (0);
var state_29442__$1 = (function (){var statearr_29452 = state_29442;
(statearr_29452[(13)] = inst_29320);

(statearr_29452[(14)] = inst_29321);

(statearr_29452[(15)] = inst_29360);

(statearr_29452[(16)] = inst_29319);

(statearr_29452[(17)] = inst_29322);

return statearr_29452;
})();
var statearr_29453_29539 = state_29442__$1;
(statearr_29453_29539[(2)] = null);

(statearr_29453_29539[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (39))){
var state_29442__$1 = state_29442;
var statearr_29457_29540 = state_29442__$1;
(statearr_29457_29540[(2)] = null);

(statearr_29457_29540[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (4))){
var inst_29310 = (state_29442[(11)]);
var inst_29310__$1 = (state_29442[(2)]);
var inst_29311 = (inst_29310__$1 == null);
var state_29442__$1 = (function (){var statearr_29458 = state_29442;
(statearr_29458[(11)] = inst_29310__$1);

return statearr_29458;
})();
if(cljs.core.truth_(inst_29311)){
var statearr_29459_29541 = state_29442__$1;
(statearr_29459_29541[(1)] = (5));

} else {
var statearr_29460_29542 = state_29442__$1;
(statearr_29460_29542[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (15))){
var inst_29320 = (state_29442[(13)]);
var inst_29321 = (state_29442[(14)]);
var inst_29319 = (state_29442[(16)]);
var inst_29322 = (state_29442[(17)]);
var inst_29337 = (state_29442[(2)]);
var inst_29338 = (inst_29322 + (1));
var tmp29454 = inst_29320;
var tmp29455 = inst_29321;
var tmp29456 = inst_29319;
var inst_29319__$1 = tmp29456;
var inst_29320__$1 = tmp29454;
var inst_29321__$1 = tmp29455;
var inst_29322__$1 = inst_29338;
var state_29442__$1 = (function (){var statearr_29461 = state_29442;
(statearr_29461[(13)] = inst_29320__$1);

(statearr_29461[(14)] = inst_29321__$1);

(statearr_29461[(16)] = inst_29319__$1);

(statearr_29461[(18)] = inst_29337);

(statearr_29461[(17)] = inst_29322__$1);

return statearr_29461;
})();
var statearr_29462_29543 = state_29442__$1;
(statearr_29462_29543[(2)] = null);

(statearr_29462_29543[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (21))){
var inst_29364 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29466_29544 = state_29442__$1;
(statearr_29466_29544[(2)] = inst_29364);

(statearr_29466_29544[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (31))){
var inst_29390 = (state_29442[(10)]);
var inst_29394 = done(null);
var inst_29395 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29390);
var state_29442__$1 = (function (){var statearr_29467 = state_29442;
(statearr_29467[(19)] = inst_29394);

return statearr_29467;
})();
var statearr_29468_29545 = state_29442__$1;
(statearr_29468_29545[(2)] = inst_29395);

(statearr_29468_29545[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (32))){
var inst_29383 = (state_29442[(9)]);
var inst_29382 = (state_29442[(20)]);
var inst_29384 = (state_29442[(21)]);
var inst_29385 = (state_29442[(12)]);
var inst_29397 = (state_29442[(2)]);
var inst_29398 = (inst_29385 + (1));
var tmp29463 = inst_29383;
var tmp29464 = inst_29382;
var tmp29465 = inst_29384;
var inst_29382__$1 = tmp29464;
var inst_29383__$1 = tmp29463;
var inst_29384__$1 = tmp29465;
var inst_29385__$1 = inst_29398;
var state_29442__$1 = (function (){var statearr_29469 = state_29442;
(statearr_29469[(22)] = inst_29397);

(statearr_29469[(9)] = inst_29383__$1);

(statearr_29469[(20)] = inst_29382__$1);

(statearr_29469[(21)] = inst_29384__$1);

(statearr_29469[(12)] = inst_29385__$1);

return statearr_29469;
})();
var statearr_29470_29546 = state_29442__$1;
(statearr_29470_29546[(2)] = null);

(statearr_29470_29546[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (40))){
var inst_29410 = (state_29442[(23)]);
var inst_29414 = done(null);
var inst_29415 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29410);
var state_29442__$1 = (function (){var statearr_29471 = state_29442;
(statearr_29471[(24)] = inst_29414);

return statearr_29471;
})();
var statearr_29472_29547 = state_29442__$1;
(statearr_29472_29547[(2)] = inst_29415);

(statearr_29472_29547[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (33))){
var inst_29401 = (state_29442[(25)]);
var inst_29403 = cljs.core.chunked_seq_QMARK_(inst_29401);
var state_29442__$1 = state_29442;
if(inst_29403){
var statearr_29473_29548 = state_29442__$1;
(statearr_29473_29548[(1)] = (36));

} else {
var statearr_29474_29549 = state_29442__$1;
(statearr_29474_29549[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (13))){
var inst_29331 = (state_29442[(26)]);
var inst_29334 = cljs.core.async.close_BANG_(inst_29331);
var state_29442__$1 = state_29442;
var statearr_29475_29550 = state_29442__$1;
(statearr_29475_29550[(2)] = inst_29334);

(statearr_29475_29550[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (22))){
var inst_29354 = (state_29442[(8)]);
var inst_29357 = cljs.core.async.close_BANG_(inst_29354);
var state_29442__$1 = state_29442;
var statearr_29476_29551 = state_29442__$1;
(statearr_29476_29551[(2)] = inst_29357);

(statearr_29476_29551[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (36))){
var inst_29401 = (state_29442[(25)]);
var inst_29405 = cljs.core.chunk_first(inst_29401);
var inst_29406 = cljs.core.chunk_rest(inst_29401);
var inst_29407 = cljs.core.count(inst_29405);
var inst_29382 = inst_29406;
var inst_29383 = inst_29405;
var inst_29384 = inst_29407;
var inst_29385 = (0);
var state_29442__$1 = (function (){var statearr_29477 = state_29442;
(statearr_29477[(9)] = inst_29383);

(statearr_29477[(20)] = inst_29382);

(statearr_29477[(21)] = inst_29384);

(statearr_29477[(12)] = inst_29385);

return statearr_29477;
})();
var statearr_29478_29552 = state_29442__$1;
(statearr_29478_29552[(2)] = null);

(statearr_29478_29552[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (41))){
var inst_29401 = (state_29442[(25)]);
var inst_29417 = (state_29442[(2)]);
var inst_29418 = cljs.core.next(inst_29401);
var inst_29382 = inst_29418;
var inst_29383 = null;
var inst_29384 = (0);
var inst_29385 = (0);
var state_29442__$1 = (function (){var statearr_29479 = state_29442;
(statearr_29479[(9)] = inst_29383);

(statearr_29479[(27)] = inst_29417);

(statearr_29479[(20)] = inst_29382);

(statearr_29479[(21)] = inst_29384);

(statearr_29479[(12)] = inst_29385);

return statearr_29479;
})();
var statearr_29480_29553 = state_29442__$1;
(statearr_29480_29553[(2)] = null);

(statearr_29480_29553[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (43))){
var state_29442__$1 = state_29442;
var statearr_29481_29554 = state_29442__$1;
(statearr_29481_29554[(2)] = null);

(statearr_29481_29554[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (29))){
var inst_29426 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29482_29555 = state_29442__$1;
(statearr_29482_29555[(2)] = inst_29426);

(statearr_29482_29555[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (44))){
var inst_29435 = (state_29442[(2)]);
var state_29442__$1 = (function (){var statearr_29483 = state_29442;
(statearr_29483[(28)] = inst_29435);

return statearr_29483;
})();
var statearr_29484_29556 = state_29442__$1;
(statearr_29484_29556[(2)] = null);

(statearr_29484_29556[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (6))){
var inst_29374 = (state_29442[(29)]);
var inst_29373 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_29374__$1 = cljs.core.keys(inst_29373);
var inst_29375 = cljs.core.count(inst_29374__$1);
var inst_29376 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_29375) : cljs.core.reset_BANG_.call(null,dctr,inst_29375));
var inst_29381 = cljs.core.seq(inst_29374__$1);
var inst_29382 = inst_29381;
var inst_29383 = null;
var inst_29384 = (0);
var inst_29385 = (0);
var state_29442__$1 = (function (){var statearr_29485 = state_29442;
(statearr_29485[(29)] = inst_29374__$1);

(statearr_29485[(9)] = inst_29383);

(statearr_29485[(20)] = inst_29382);

(statearr_29485[(21)] = inst_29384);

(statearr_29485[(12)] = inst_29385);

(statearr_29485[(30)] = inst_29376);

return statearr_29485;
})();
var statearr_29486_29557 = state_29442__$1;
(statearr_29486_29557[(2)] = null);

(statearr_29486_29557[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (28))){
var inst_29382 = (state_29442[(20)]);
var inst_29401 = (state_29442[(25)]);
var inst_29401__$1 = cljs.core.seq(inst_29382);
var state_29442__$1 = (function (){var statearr_29487 = state_29442;
(statearr_29487[(25)] = inst_29401__$1);

return statearr_29487;
})();
if(inst_29401__$1){
var statearr_29488_29558 = state_29442__$1;
(statearr_29488_29558[(1)] = (33));

} else {
var statearr_29489_29559 = state_29442__$1;
(statearr_29489_29559[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (25))){
var inst_29384 = (state_29442[(21)]);
var inst_29385 = (state_29442[(12)]);
var inst_29387 = (inst_29385 < inst_29384);
var inst_29388 = inst_29387;
var state_29442__$1 = state_29442;
if(cljs.core.truth_(inst_29388)){
var statearr_29490_29560 = state_29442__$1;
(statearr_29490_29560[(1)] = (27));

} else {
var statearr_29491_29561 = state_29442__$1;
(statearr_29491_29561[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (34))){
var state_29442__$1 = state_29442;
var statearr_29492_29562 = state_29442__$1;
(statearr_29492_29562[(2)] = null);

(statearr_29492_29562[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (17))){
var state_29442__$1 = state_29442;
var statearr_29493_29563 = state_29442__$1;
(statearr_29493_29563[(2)] = null);

(statearr_29493_29563[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (3))){
var inst_29440 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29442__$1,inst_29440);
} else {
if((state_val_29443 === (12))){
var inst_29369 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29494_29564 = state_29442__$1;
(statearr_29494_29564[(2)] = inst_29369);

(statearr_29494_29564[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (2))){
var state_29442__$1 = state_29442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29442__$1,(4),ch);
} else {
if((state_val_29443 === (23))){
var state_29442__$1 = state_29442;
var statearr_29495_29565 = state_29442__$1;
(statearr_29495_29565[(2)] = null);

(statearr_29495_29565[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (35))){
var inst_29424 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29496_29566 = state_29442__$1;
(statearr_29496_29566[(2)] = inst_29424);

(statearr_29496_29566[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (19))){
var inst_29341 = (state_29442[(7)]);
var inst_29345 = cljs.core.chunk_first(inst_29341);
var inst_29346 = cljs.core.chunk_rest(inst_29341);
var inst_29347 = cljs.core.count(inst_29345);
var inst_29319 = inst_29346;
var inst_29320 = inst_29345;
var inst_29321 = inst_29347;
var inst_29322 = (0);
var state_29442__$1 = (function (){var statearr_29497 = state_29442;
(statearr_29497[(13)] = inst_29320);

(statearr_29497[(14)] = inst_29321);

(statearr_29497[(16)] = inst_29319);

(statearr_29497[(17)] = inst_29322);

return statearr_29497;
})();
var statearr_29498_29567 = state_29442__$1;
(statearr_29498_29567[(2)] = null);

(statearr_29498_29567[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (11))){
var inst_29341 = (state_29442[(7)]);
var inst_29319 = (state_29442[(16)]);
var inst_29341__$1 = cljs.core.seq(inst_29319);
var state_29442__$1 = (function (){var statearr_29499 = state_29442;
(statearr_29499[(7)] = inst_29341__$1);

return statearr_29499;
})();
if(inst_29341__$1){
var statearr_29500_29568 = state_29442__$1;
(statearr_29500_29568[(1)] = (16));

} else {
var statearr_29501_29569 = state_29442__$1;
(statearr_29501_29569[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (9))){
var inst_29371 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29502_29570 = state_29442__$1;
(statearr_29502_29570[(2)] = inst_29371);

(statearr_29502_29570[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (5))){
var inst_29317 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_29318 = cljs.core.seq(inst_29317);
var inst_29319 = inst_29318;
var inst_29320 = null;
var inst_29321 = (0);
var inst_29322 = (0);
var state_29442__$1 = (function (){var statearr_29503 = state_29442;
(statearr_29503[(13)] = inst_29320);

(statearr_29503[(14)] = inst_29321);

(statearr_29503[(16)] = inst_29319);

(statearr_29503[(17)] = inst_29322);

return statearr_29503;
})();
var statearr_29504_29571 = state_29442__$1;
(statearr_29504_29571[(2)] = null);

(statearr_29504_29571[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (14))){
var state_29442__$1 = state_29442;
var statearr_29505_29572 = state_29442__$1;
(statearr_29505_29572[(2)] = null);

(statearr_29505_29572[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (45))){
var inst_29432 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29506_29573 = state_29442__$1;
(statearr_29506_29573[(2)] = inst_29432);

(statearr_29506_29573[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (26))){
var inst_29374 = (state_29442[(29)]);
var inst_29428 = (state_29442[(2)]);
var inst_29429 = cljs.core.seq(inst_29374);
var state_29442__$1 = (function (){var statearr_29507 = state_29442;
(statearr_29507[(31)] = inst_29428);

return statearr_29507;
})();
if(inst_29429){
var statearr_29508_29574 = state_29442__$1;
(statearr_29508_29574[(1)] = (42));

} else {
var statearr_29509_29575 = state_29442__$1;
(statearr_29509_29575[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (16))){
var inst_29341 = (state_29442[(7)]);
var inst_29343 = cljs.core.chunked_seq_QMARK_(inst_29341);
var state_29442__$1 = state_29442;
if(inst_29343){
var statearr_29510_29576 = state_29442__$1;
(statearr_29510_29576[(1)] = (19));

} else {
var statearr_29511_29577 = state_29442__$1;
(statearr_29511_29577[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (38))){
var inst_29421 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29512_29578 = state_29442__$1;
(statearr_29512_29578[(2)] = inst_29421);

(statearr_29512_29578[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (30))){
var state_29442__$1 = state_29442;
var statearr_29513_29579 = state_29442__$1;
(statearr_29513_29579[(2)] = null);

(statearr_29513_29579[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (10))){
var inst_29320 = (state_29442[(13)]);
var inst_29322 = (state_29442[(17)]);
var inst_29330 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29320,inst_29322);
var inst_29331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29330,(0),null);
var inst_29332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29330,(1),null);
var state_29442__$1 = (function (){var statearr_29514 = state_29442;
(statearr_29514[(26)] = inst_29331);

return statearr_29514;
})();
if(cljs.core.truth_(inst_29332)){
var statearr_29515_29580 = state_29442__$1;
(statearr_29515_29580[(1)] = (13));

} else {
var statearr_29516_29581 = state_29442__$1;
(statearr_29516_29581[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (18))){
var inst_29367 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29517_29582 = state_29442__$1;
(statearr_29517_29582[(2)] = inst_29367);

(statearr_29517_29582[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (42))){
var state_29442__$1 = state_29442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29442__$1,(45),dchan);
} else {
if((state_val_29443 === (37))){
var inst_29410 = (state_29442[(23)]);
var inst_29310 = (state_29442[(11)]);
var inst_29401 = (state_29442[(25)]);
var inst_29410__$1 = cljs.core.first(inst_29401);
var inst_29411 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29410__$1,inst_29310,done);
var state_29442__$1 = (function (){var statearr_29518 = state_29442;
(statearr_29518[(23)] = inst_29410__$1);

return statearr_29518;
})();
if(cljs.core.truth_(inst_29411)){
var statearr_29519_29583 = state_29442__$1;
(statearr_29519_29583[(1)] = (39));

} else {
var statearr_29520_29584 = state_29442__$1;
(statearr_29520_29584[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29443 === (8))){
var inst_29321 = (state_29442[(14)]);
var inst_29322 = (state_29442[(17)]);
var inst_29324 = (inst_29322 < inst_29321);
var inst_29325 = inst_29324;
var state_29442__$1 = state_29442;
if(cljs.core.truth_(inst_29325)){
var statearr_29521_29585 = state_29442__$1;
(statearr_29521_29585[(1)] = (10));

} else {
var statearr_29522_29586 = state_29442__$1;
(statearr_29522_29586[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
}
});})(c__28167__auto___29532,cs,m,dchan,dctr,done))
;
return ((function (switch__28043__auto__,c__28167__auto___29532,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28044__auto__ = null;
var cljs$core$async$mult_$_state_machine__28044__auto____0 = (function (){
var statearr_29526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29526[(0)] = cljs$core$async$mult_$_state_machine__28044__auto__);

(statearr_29526[(1)] = (1));

return statearr_29526;
});
var cljs$core$async$mult_$_state_machine__28044__auto____1 = (function (state_29442){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_29442);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e29527){if((e29527 instanceof Object)){
var ex__28047__auto__ = e29527;
var statearr_29528_29587 = state_29442;
(statearr_29528_29587[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29442);

return cljs.core.cst$kw$recur;
} else {
throw e29527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__29588 = state_29442;
state_29442 = G__29588;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28044__auto__ = function(state_29442){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28044__auto____1.call(this,state_29442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28044__auto____0;
cljs$core$async$mult_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28044__auto____1;
return cljs$core$async$mult_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___29532,cs,m,dchan,dctr,done))
})();
var state__28169__auto__ = (function (){var statearr_29529 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_29529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___29532);

return statearr_29529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___29532,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29589 = [];
var len__7489__auto___29592 = arguments.length;
var i__7490__auto___29593 = (0);
while(true){
if((i__7490__auto___29593 < len__7489__auto___29592)){
args29589.push((arguments[i__7490__auto___29593]));

var G__29594 = (i__7490__auto___29593 + (1));
i__7490__auto___29593 = G__29594;
continue;
} else {
}
break;
}

var G__29591 = args29589.length;
switch (G__29591) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29589.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7077__auto__ = (((m == null))?null:m);
var m__7078__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7078__auto__.call(null,m,ch));
} else {
var m__7078__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7078__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7077__auto__ = (((m == null))?null:m);
var m__7078__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7078__auto__.call(null,m,ch));
} else {
var m__7078__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7078__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7077__auto__ = (((m == null))?null:m);
var m__7078__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7078__auto__.call(null,m));
} else {
var m__7078__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7078__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7077__auto__ = (((m == null))?null:m);
var m__7078__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7078__auto__.call(null,m,state_map));
} else {
var m__7078__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7078__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7077__auto__ = (((m == null))?null:m);
var m__7078__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7078__auto__.call(null,m,mode));
} else {
var m__7078__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7078__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7496__auto__ = [];
var len__7489__auto___29606 = arguments.length;
var i__7490__auto___29607 = (0);
while(true){
if((i__7490__auto___29607 < len__7489__auto___29606)){
args__7496__auto__.push((arguments[i__7490__auto___29607]));

var G__29608 = (i__7490__auto___29607 + (1));
i__7490__auto___29607 = G__29608;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((3) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7497__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29600){
var map__29601 = p__29600;
var map__29601__$1 = ((((!((map__29601 == null)))?((((map__29601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29601):map__29601);
var opts = map__29601__$1;
var statearr_29603_29609 = state;
(statearr_29603_29609[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__29601,map__29601__$1,opts){
return (function (val){
var statearr_29604_29610 = state;
(statearr_29604_29610[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__29601,map__29601__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29605_29611 = state;
(statearr_29605_29611[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29596){
var G__29597 = cljs.core.first(seq29596);
var seq29596__$1 = cljs.core.next(seq29596);
var G__29598 = cljs.core.first(seq29596__$1);
var seq29596__$2 = cljs.core.next(seq29596__$1);
var G__29599 = cljs.core.first(seq29596__$2);
var seq29596__$3 = cljs.core.next(seq29596__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29597,G__29598,G__29599,seq29596__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__29781 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29781) : cljs.core.atom.call(null,G__29781));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__29782 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29782) : cljs.core.atom.call(null,G__29782));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29783 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29784){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29784 = meta29784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29785,meta29784__$1){
var self__ = this;
var _29785__$1 = this;
return (new cljs.core.async.t_cljs$core$async29783(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29784__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29785){
var self__ = this;
var _29785__$1 = this;
return self__.meta29784;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29786_29950 = self__.cs;
var G__29787_29951 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29786_29950,G__29787_29951) : cljs.core.reset_BANG_.call(null,G__29786_29950,G__29787_29951));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta29784], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29783";

cljs.core.async.t_cljs$core$async29783.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async29783");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29783 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29783(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29784){
return (new cljs.core.async.t_cljs$core$async29783(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29784));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29783(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28167__auto___29952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___29952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___29952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29887){
var state_val_29888 = (state_29887[(1)]);
if((state_val_29888 === (7))){
var inst_29803 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29889_29953 = state_29887__$1;
(statearr_29889_29953[(2)] = inst_29803);

(statearr_29889_29953[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (20))){
var inst_29815 = (state_29887[(7)]);
var state_29887__$1 = state_29887;
var statearr_29890_29954 = state_29887__$1;
(statearr_29890_29954[(2)] = inst_29815);

(statearr_29890_29954[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (27))){
var state_29887__$1 = state_29887;
var statearr_29891_29955 = state_29887__$1;
(statearr_29891_29955[(2)] = null);

(statearr_29891_29955[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (1))){
var inst_29791 = (state_29887[(8)]);
var inst_29791__$1 = calc_state();
var inst_29793 = (inst_29791__$1 == null);
var inst_29794 = cljs.core.not(inst_29793);
var state_29887__$1 = (function (){var statearr_29892 = state_29887;
(statearr_29892[(8)] = inst_29791__$1);

return statearr_29892;
})();
if(inst_29794){
var statearr_29893_29956 = state_29887__$1;
(statearr_29893_29956[(1)] = (2));

} else {
var statearr_29894_29957 = state_29887__$1;
(statearr_29894_29957[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (24))){
var inst_29861 = (state_29887[(9)]);
var inst_29838 = (state_29887[(10)]);
var inst_29847 = (state_29887[(11)]);
var inst_29861__$1 = (inst_29838.cljs$core$IFn$_invoke$arity$1 ? inst_29838.cljs$core$IFn$_invoke$arity$1(inst_29847) : inst_29838.call(null,inst_29847));
var state_29887__$1 = (function (){var statearr_29895 = state_29887;
(statearr_29895[(9)] = inst_29861__$1);

return statearr_29895;
})();
if(cljs.core.truth_(inst_29861__$1)){
var statearr_29896_29958 = state_29887__$1;
(statearr_29896_29958[(1)] = (29));

} else {
var statearr_29897_29959 = state_29887__$1;
(statearr_29897_29959[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (4))){
var inst_29806 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29806)){
var statearr_29898_29960 = state_29887__$1;
(statearr_29898_29960[(1)] = (8));

} else {
var statearr_29899_29961 = state_29887__$1;
(statearr_29899_29961[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (15))){
var inst_29832 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29832)){
var statearr_29900_29962 = state_29887__$1;
(statearr_29900_29962[(1)] = (19));

} else {
var statearr_29901_29963 = state_29887__$1;
(statearr_29901_29963[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (21))){
var inst_29837 = (state_29887[(12)]);
var inst_29837__$1 = (state_29887[(2)]);
var inst_29838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29837__$1,cljs.core.cst$kw$solos);
var inst_29839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29837__$1,cljs.core.cst$kw$mutes);
var inst_29840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29837__$1,cljs.core.cst$kw$reads);
var state_29887__$1 = (function (){var statearr_29902 = state_29887;
(statearr_29902[(10)] = inst_29838);

(statearr_29902[(12)] = inst_29837__$1);

(statearr_29902[(13)] = inst_29839);

return statearr_29902;
})();
return cljs.core.async.ioc_alts_BANG_(state_29887__$1,(22),inst_29840);
} else {
if((state_val_29888 === (31))){
var inst_29869 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29869)){
var statearr_29903_29964 = state_29887__$1;
(statearr_29903_29964[(1)] = (32));

} else {
var statearr_29904_29965 = state_29887__$1;
(statearr_29904_29965[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (32))){
var inst_29846 = (state_29887[(14)]);
var state_29887__$1 = state_29887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29887__$1,(35),out,inst_29846);
} else {
if((state_val_29888 === (33))){
var inst_29837 = (state_29887[(12)]);
var inst_29815 = inst_29837;
var state_29887__$1 = (function (){var statearr_29905 = state_29887;
(statearr_29905[(7)] = inst_29815);

return statearr_29905;
})();
var statearr_29906_29966 = state_29887__$1;
(statearr_29906_29966[(2)] = null);

(statearr_29906_29966[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (13))){
var inst_29815 = (state_29887[(7)]);
var inst_29822 = inst_29815.cljs$lang$protocol_mask$partition0$;
var inst_29823 = (inst_29822 & (64));
var inst_29824 = inst_29815.cljs$core$ISeq$;
var inst_29825 = (inst_29823) || (inst_29824);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29825)){
var statearr_29907_29967 = state_29887__$1;
(statearr_29907_29967[(1)] = (16));

} else {
var statearr_29908_29968 = state_29887__$1;
(statearr_29908_29968[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (22))){
var inst_29847 = (state_29887[(11)]);
var inst_29846 = (state_29887[(14)]);
var inst_29845 = (state_29887[(2)]);
var inst_29846__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29845,(0),null);
var inst_29847__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29845,(1),null);
var inst_29848 = (inst_29846__$1 == null);
var inst_29849 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29847__$1,change);
var inst_29850 = (inst_29848) || (inst_29849);
var state_29887__$1 = (function (){var statearr_29909 = state_29887;
(statearr_29909[(11)] = inst_29847__$1);

(statearr_29909[(14)] = inst_29846__$1);

return statearr_29909;
})();
if(cljs.core.truth_(inst_29850)){
var statearr_29910_29969 = state_29887__$1;
(statearr_29910_29969[(1)] = (23));

} else {
var statearr_29911_29970 = state_29887__$1;
(statearr_29911_29970[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (36))){
var inst_29837 = (state_29887[(12)]);
var inst_29815 = inst_29837;
var state_29887__$1 = (function (){var statearr_29912 = state_29887;
(statearr_29912[(7)] = inst_29815);

return statearr_29912;
})();
var statearr_29913_29971 = state_29887__$1;
(statearr_29913_29971[(2)] = null);

(statearr_29913_29971[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (29))){
var inst_29861 = (state_29887[(9)]);
var state_29887__$1 = state_29887;
var statearr_29914_29972 = state_29887__$1;
(statearr_29914_29972[(2)] = inst_29861);

(statearr_29914_29972[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (6))){
var state_29887__$1 = state_29887;
var statearr_29915_29973 = state_29887__$1;
(statearr_29915_29973[(2)] = false);

(statearr_29915_29973[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (28))){
var inst_29857 = (state_29887[(2)]);
var inst_29858 = calc_state();
var inst_29815 = inst_29858;
var state_29887__$1 = (function (){var statearr_29916 = state_29887;
(statearr_29916[(7)] = inst_29815);

(statearr_29916[(15)] = inst_29857);

return statearr_29916;
})();
var statearr_29917_29974 = state_29887__$1;
(statearr_29917_29974[(2)] = null);

(statearr_29917_29974[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (25))){
var inst_29883 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29918_29975 = state_29887__$1;
(statearr_29918_29975[(2)] = inst_29883);

(statearr_29918_29975[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (34))){
var inst_29881 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29919_29976 = state_29887__$1;
(statearr_29919_29976[(2)] = inst_29881);

(statearr_29919_29976[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (17))){
var state_29887__$1 = state_29887;
var statearr_29920_29977 = state_29887__$1;
(statearr_29920_29977[(2)] = false);

(statearr_29920_29977[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (3))){
var state_29887__$1 = state_29887;
var statearr_29921_29978 = state_29887__$1;
(statearr_29921_29978[(2)] = false);

(statearr_29921_29978[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (12))){
var inst_29885 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29887__$1,inst_29885);
} else {
if((state_val_29888 === (2))){
var inst_29791 = (state_29887[(8)]);
var inst_29796 = inst_29791.cljs$lang$protocol_mask$partition0$;
var inst_29797 = (inst_29796 & (64));
var inst_29798 = inst_29791.cljs$core$ISeq$;
var inst_29799 = (inst_29797) || (inst_29798);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29799)){
var statearr_29922_29979 = state_29887__$1;
(statearr_29922_29979[(1)] = (5));

} else {
var statearr_29923_29980 = state_29887__$1;
(statearr_29923_29980[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (23))){
var inst_29846 = (state_29887[(14)]);
var inst_29852 = (inst_29846 == null);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29852)){
var statearr_29924_29981 = state_29887__$1;
(statearr_29924_29981[(1)] = (26));

} else {
var statearr_29925_29982 = state_29887__$1;
(statearr_29925_29982[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (35))){
var inst_29872 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29872)){
var statearr_29926_29983 = state_29887__$1;
(statearr_29926_29983[(1)] = (36));

} else {
var statearr_29927_29984 = state_29887__$1;
(statearr_29927_29984[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (19))){
var inst_29815 = (state_29887[(7)]);
var inst_29834 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29815);
var state_29887__$1 = state_29887;
var statearr_29928_29985 = state_29887__$1;
(statearr_29928_29985[(2)] = inst_29834);

(statearr_29928_29985[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (11))){
var inst_29815 = (state_29887[(7)]);
var inst_29819 = (inst_29815 == null);
var inst_29820 = cljs.core.not(inst_29819);
var state_29887__$1 = state_29887;
if(inst_29820){
var statearr_29929_29986 = state_29887__$1;
(statearr_29929_29986[(1)] = (13));

} else {
var statearr_29930_29987 = state_29887__$1;
(statearr_29930_29987[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (9))){
var inst_29791 = (state_29887[(8)]);
var state_29887__$1 = state_29887;
var statearr_29931_29988 = state_29887__$1;
(statearr_29931_29988[(2)] = inst_29791);

(statearr_29931_29988[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (5))){
var state_29887__$1 = state_29887;
var statearr_29932_29989 = state_29887__$1;
(statearr_29932_29989[(2)] = true);

(statearr_29932_29989[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (14))){
var state_29887__$1 = state_29887;
var statearr_29933_29990 = state_29887__$1;
(statearr_29933_29990[(2)] = false);

(statearr_29933_29990[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (26))){
var inst_29847 = (state_29887[(11)]);
var inst_29854 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29847);
var state_29887__$1 = state_29887;
var statearr_29934_29991 = state_29887__$1;
(statearr_29934_29991[(2)] = inst_29854);

(statearr_29934_29991[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (16))){
var state_29887__$1 = state_29887;
var statearr_29935_29992 = state_29887__$1;
(statearr_29935_29992[(2)] = true);

(statearr_29935_29992[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (38))){
var inst_29877 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29936_29993 = state_29887__$1;
(statearr_29936_29993[(2)] = inst_29877);

(statearr_29936_29993[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (30))){
var inst_29838 = (state_29887[(10)]);
var inst_29839 = (state_29887[(13)]);
var inst_29847 = (state_29887[(11)]);
var inst_29864 = cljs.core.empty_QMARK_(inst_29838);
var inst_29865 = (inst_29839.cljs$core$IFn$_invoke$arity$1 ? inst_29839.cljs$core$IFn$_invoke$arity$1(inst_29847) : inst_29839.call(null,inst_29847));
var inst_29866 = cljs.core.not(inst_29865);
var inst_29867 = (inst_29864) && (inst_29866);
var state_29887__$1 = state_29887;
var statearr_29937_29994 = state_29887__$1;
(statearr_29937_29994[(2)] = inst_29867);

(statearr_29937_29994[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (10))){
var inst_29791 = (state_29887[(8)]);
var inst_29811 = (state_29887[(2)]);
var inst_29812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29811,cljs.core.cst$kw$solos);
var inst_29813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29811,cljs.core.cst$kw$mutes);
var inst_29814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29811,cljs.core.cst$kw$reads);
var inst_29815 = inst_29791;
var state_29887__$1 = (function (){var statearr_29938 = state_29887;
(statearr_29938[(16)] = inst_29812);

(statearr_29938[(7)] = inst_29815);

(statearr_29938[(17)] = inst_29813);

(statearr_29938[(18)] = inst_29814);

return statearr_29938;
})();
var statearr_29939_29995 = state_29887__$1;
(statearr_29939_29995[(2)] = null);

(statearr_29939_29995[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (18))){
var inst_29829 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29940_29996 = state_29887__$1;
(statearr_29940_29996[(2)] = inst_29829);

(statearr_29940_29996[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (37))){
var state_29887__$1 = state_29887;
var statearr_29941_29997 = state_29887__$1;
(statearr_29941_29997[(2)] = null);

(statearr_29941_29997[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29888 === (8))){
var inst_29791 = (state_29887[(8)]);
var inst_29808 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29791);
var state_29887__$1 = state_29887;
var statearr_29942_29998 = state_29887__$1;
(statearr_29942_29998[(2)] = inst_29808);

(statearr_29942_29998[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
});})(c__28167__auto___29952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28043__auto__,c__28167__auto___29952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28044__auto__ = null;
var cljs$core$async$mix_$_state_machine__28044__auto____0 = (function (){
var statearr_29946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29946[(0)] = cljs$core$async$mix_$_state_machine__28044__auto__);

(statearr_29946[(1)] = (1));

return statearr_29946;
});
var cljs$core$async$mix_$_state_machine__28044__auto____1 = (function (state_29887){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_29887);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e29947){if((e29947 instanceof Object)){
var ex__28047__auto__ = e29947;
var statearr_29948_29999 = state_29887;
(statearr_29948_29999[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29887);

return cljs.core.cst$kw$recur;
} else {
throw e29947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30000 = state_29887;
state_29887 = G__30000;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28044__auto__ = function(state_29887){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28044__auto____1.call(this,state_29887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28044__auto____0;
cljs$core$async$mix_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28044__auto____1;
return cljs$core$async$mix_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___29952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28169__auto__ = (function (){var statearr_29949 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_29949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___29952);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___29952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7077__auto__ = (((p == null))?null:p);
var m__7078__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7078__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7078__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7078__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7077__auto__ = (((p == null))?null:p);
var m__7078__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7078__auto__.call(null,p,v,ch));
} else {
var m__7078__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7078__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30001 = [];
var len__7489__auto___30004 = arguments.length;
var i__7490__auto___30005 = (0);
while(true){
if((i__7490__auto___30005 < len__7489__auto___30004)){
args30001.push((arguments[i__7490__auto___30005]));

var G__30006 = (i__7490__auto___30005 + (1));
i__7490__auto___30005 = G__30006;
continue;
} else {
}
break;
}

var G__30003 = args30001.length;
switch (G__30003) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30001.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7077__auto__ = (((p == null))?null:p);
var m__7078__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7078__auto__.call(null,p));
} else {
var m__7078__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7078__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7077__auto__ = (((p == null))?null:p);
var m__7078__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7077__auto__)]);
if(!((m__7078__auto__ == null))){
return (m__7078__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7078__auto__.call(null,p,v));
} else {
var m__7078__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7078__auto____$1 == null))){
return (m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7078__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7078__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30009 = [];
var len__7489__auto___30137 = arguments.length;
var i__7490__auto___30138 = (0);
while(true){
if((i__7490__auto___30138 < len__7489__auto___30137)){
args30009.push((arguments[i__7490__auto___30138]));

var G__30139 = (i__7490__auto___30138 + (1));
i__7490__auto___30138 = G__30139;
continue;
} else {
}
break;
}

var G__30011 = args30009.length;
switch (G__30011) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30009.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__30012 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30012) : cljs.core.atom.call(null,G__30012));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6414__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6414__auto__,mults){
return (function (p1__30008_SHARP_){
if(cljs.core.truth_((p1__30008_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30008_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30008_SHARP_.call(null,topic)))){
return p1__30008_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30008_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6414__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30013 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30014){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30014 = meta30014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30015,meta30014__$1){
var self__ = this;
var _30015__$1 = this;
return (new cljs.core.async.t_cljs$core$async30013(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30014__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30015){
var self__ = this;
var _30015__$1 = this;
return self__.meta30014;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30016 = self__.mults;
var G__30017 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30016,G__30017) : cljs.core.reset_BANG_.call(null,G__30016,G__30017));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30013.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30013.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta30014], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30013";

cljs.core.async.t_cljs$core$async30013.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async30013");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30013 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30013(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30014){
return (new cljs.core.async.t_cljs$core$async30013(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30014));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30013(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28167__auto___30141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___30141,mults,ensure_mult,p){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___30141,mults,ensure_mult,p){
return (function (state_30089){
var state_val_30090 = (state_30089[(1)]);
if((state_val_30090 === (7))){
var inst_30085 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30091_30142 = state_30089__$1;
(statearr_30091_30142[(2)] = inst_30085);

(statearr_30091_30142[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (20))){
var state_30089__$1 = state_30089;
var statearr_30092_30143 = state_30089__$1;
(statearr_30092_30143[(2)] = null);

(statearr_30092_30143[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (1))){
var state_30089__$1 = state_30089;
var statearr_30093_30144 = state_30089__$1;
(statearr_30093_30144[(2)] = null);

(statearr_30093_30144[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (24))){
var inst_30068 = (state_30089[(7)]);
var inst_30077 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30068);
var state_30089__$1 = state_30089;
var statearr_30094_30145 = state_30089__$1;
(statearr_30094_30145[(2)] = inst_30077);

(statearr_30094_30145[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (4))){
var inst_30020 = (state_30089[(8)]);
var inst_30020__$1 = (state_30089[(2)]);
var inst_30021 = (inst_30020__$1 == null);
var state_30089__$1 = (function (){var statearr_30095 = state_30089;
(statearr_30095[(8)] = inst_30020__$1);

return statearr_30095;
})();
if(cljs.core.truth_(inst_30021)){
var statearr_30096_30146 = state_30089__$1;
(statearr_30096_30146[(1)] = (5));

} else {
var statearr_30097_30147 = state_30089__$1;
(statearr_30097_30147[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (15))){
var inst_30062 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30098_30148 = state_30089__$1;
(statearr_30098_30148[(2)] = inst_30062);

(statearr_30098_30148[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (21))){
var inst_30082 = (state_30089[(2)]);
var state_30089__$1 = (function (){var statearr_30099 = state_30089;
(statearr_30099[(9)] = inst_30082);

return statearr_30099;
})();
var statearr_30100_30149 = state_30089__$1;
(statearr_30100_30149[(2)] = null);

(statearr_30100_30149[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (13))){
var inst_30044 = (state_30089[(10)]);
var inst_30046 = cljs.core.chunked_seq_QMARK_(inst_30044);
var state_30089__$1 = state_30089;
if(inst_30046){
var statearr_30101_30150 = state_30089__$1;
(statearr_30101_30150[(1)] = (16));

} else {
var statearr_30102_30151 = state_30089__$1;
(statearr_30102_30151[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (22))){
var inst_30074 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_30074)){
var statearr_30103_30152 = state_30089__$1;
(statearr_30103_30152[(1)] = (23));

} else {
var statearr_30104_30153 = state_30089__$1;
(statearr_30104_30153[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (6))){
var inst_30020 = (state_30089[(8)]);
var inst_30068 = (state_30089[(7)]);
var inst_30070 = (state_30089[(11)]);
var inst_30068__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30020) : topic_fn.call(null,inst_30020));
var inst_30069 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_30070__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30069,inst_30068__$1);
var state_30089__$1 = (function (){var statearr_30105 = state_30089;
(statearr_30105[(7)] = inst_30068__$1);

(statearr_30105[(11)] = inst_30070__$1);

return statearr_30105;
})();
if(cljs.core.truth_(inst_30070__$1)){
var statearr_30106_30154 = state_30089__$1;
(statearr_30106_30154[(1)] = (19));

} else {
var statearr_30107_30155 = state_30089__$1;
(statearr_30107_30155[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (25))){
var inst_30079 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30108_30156 = state_30089__$1;
(statearr_30108_30156[(2)] = inst_30079);

(statearr_30108_30156[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (17))){
var inst_30044 = (state_30089[(10)]);
var inst_30053 = cljs.core.first(inst_30044);
var inst_30054 = cljs.core.async.muxch_STAR_(inst_30053);
var inst_30055 = cljs.core.async.close_BANG_(inst_30054);
var inst_30056 = cljs.core.next(inst_30044);
var inst_30030 = inst_30056;
var inst_30031 = null;
var inst_30032 = (0);
var inst_30033 = (0);
var state_30089__$1 = (function (){var statearr_30109 = state_30089;
(statearr_30109[(12)] = inst_30032);

(statearr_30109[(13)] = inst_30033);

(statearr_30109[(14)] = inst_30031);

(statearr_30109[(15)] = inst_30030);

(statearr_30109[(16)] = inst_30055);

return statearr_30109;
})();
var statearr_30110_30157 = state_30089__$1;
(statearr_30110_30157[(2)] = null);

(statearr_30110_30157[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (3))){
var inst_30087 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30089__$1,inst_30087);
} else {
if((state_val_30090 === (12))){
var inst_30064 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30111_30158 = state_30089__$1;
(statearr_30111_30158[(2)] = inst_30064);

(statearr_30111_30158[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (2))){
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30089__$1,(4),ch);
} else {
if((state_val_30090 === (23))){
var state_30089__$1 = state_30089;
var statearr_30112_30159 = state_30089__$1;
(statearr_30112_30159[(2)] = null);

(statearr_30112_30159[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (19))){
var inst_30020 = (state_30089[(8)]);
var inst_30070 = (state_30089[(11)]);
var inst_30072 = cljs.core.async.muxch_STAR_(inst_30070);
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30089__$1,(22),inst_30072,inst_30020);
} else {
if((state_val_30090 === (11))){
var inst_30030 = (state_30089[(15)]);
var inst_30044 = (state_30089[(10)]);
var inst_30044__$1 = cljs.core.seq(inst_30030);
var state_30089__$1 = (function (){var statearr_30113 = state_30089;
(statearr_30113[(10)] = inst_30044__$1);

return statearr_30113;
})();
if(inst_30044__$1){
var statearr_30114_30160 = state_30089__$1;
(statearr_30114_30160[(1)] = (13));

} else {
var statearr_30115_30161 = state_30089__$1;
(statearr_30115_30161[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (9))){
var inst_30066 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30116_30162 = state_30089__$1;
(statearr_30116_30162[(2)] = inst_30066);

(statearr_30116_30162[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (5))){
var inst_30027 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_30028 = cljs.core.vals(inst_30027);
var inst_30029 = cljs.core.seq(inst_30028);
var inst_30030 = inst_30029;
var inst_30031 = null;
var inst_30032 = (0);
var inst_30033 = (0);
var state_30089__$1 = (function (){var statearr_30117 = state_30089;
(statearr_30117[(12)] = inst_30032);

(statearr_30117[(13)] = inst_30033);

(statearr_30117[(14)] = inst_30031);

(statearr_30117[(15)] = inst_30030);

return statearr_30117;
})();
var statearr_30118_30163 = state_30089__$1;
(statearr_30118_30163[(2)] = null);

(statearr_30118_30163[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (14))){
var state_30089__$1 = state_30089;
var statearr_30122_30164 = state_30089__$1;
(statearr_30122_30164[(2)] = null);

(statearr_30122_30164[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (16))){
var inst_30044 = (state_30089[(10)]);
var inst_30048 = cljs.core.chunk_first(inst_30044);
var inst_30049 = cljs.core.chunk_rest(inst_30044);
var inst_30050 = cljs.core.count(inst_30048);
var inst_30030 = inst_30049;
var inst_30031 = inst_30048;
var inst_30032 = inst_30050;
var inst_30033 = (0);
var state_30089__$1 = (function (){var statearr_30123 = state_30089;
(statearr_30123[(12)] = inst_30032);

(statearr_30123[(13)] = inst_30033);

(statearr_30123[(14)] = inst_30031);

(statearr_30123[(15)] = inst_30030);

return statearr_30123;
})();
var statearr_30124_30165 = state_30089__$1;
(statearr_30124_30165[(2)] = null);

(statearr_30124_30165[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (10))){
var inst_30032 = (state_30089[(12)]);
var inst_30033 = (state_30089[(13)]);
var inst_30031 = (state_30089[(14)]);
var inst_30030 = (state_30089[(15)]);
var inst_30038 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30031,inst_30033);
var inst_30039 = cljs.core.async.muxch_STAR_(inst_30038);
var inst_30040 = cljs.core.async.close_BANG_(inst_30039);
var inst_30041 = (inst_30033 + (1));
var tmp30119 = inst_30032;
var tmp30120 = inst_30031;
var tmp30121 = inst_30030;
var inst_30030__$1 = tmp30121;
var inst_30031__$1 = tmp30120;
var inst_30032__$1 = tmp30119;
var inst_30033__$1 = inst_30041;
var state_30089__$1 = (function (){var statearr_30125 = state_30089;
(statearr_30125[(12)] = inst_30032__$1);

(statearr_30125[(13)] = inst_30033__$1);

(statearr_30125[(14)] = inst_30031__$1);

(statearr_30125[(15)] = inst_30030__$1);

(statearr_30125[(17)] = inst_30040);

return statearr_30125;
})();
var statearr_30126_30166 = state_30089__$1;
(statearr_30126_30166[(2)] = null);

(statearr_30126_30166[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (18))){
var inst_30059 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30127_30167 = state_30089__$1;
(statearr_30127_30167[(2)] = inst_30059);

(statearr_30127_30167[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30090 === (8))){
var inst_30032 = (state_30089[(12)]);
var inst_30033 = (state_30089[(13)]);
var inst_30035 = (inst_30033 < inst_30032);
var inst_30036 = inst_30035;
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_30036)){
var statearr_30128_30168 = state_30089__$1;
(statearr_30128_30168[(1)] = (10));

} else {
var statearr_30129_30169 = state_30089__$1;
(statearr_30129_30169[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___30141,mults,ensure_mult,p))
;
return ((function (switch__28043__auto__,c__28167__auto___30141,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_30133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30133[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_30133[(1)] = (1));

return statearr_30133;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_30089){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30089);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30134){if((e30134 instanceof Object)){
var ex__28047__auto__ = e30134;
var statearr_30135_30170 = state_30089;
(statearr_30135_30170[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30089);

return cljs.core.cst$kw$recur;
} else {
throw e30134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30171 = state_30089;
state_30089 = G__30171;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_30089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_30089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___30141,mults,ensure_mult,p))
})();
var state__28169__auto__ = (function (){var statearr_30136 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___30141);

return statearr_30136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___30141,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30172 = [];
var len__7489__auto___30175 = arguments.length;
var i__7490__auto___30176 = (0);
while(true){
if((i__7490__auto___30176 < len__7489__auto___30175)){
args30172.push((arguments[i__7490__auto___30176]));

var G__30177 = (i__7490__auto___30176 + (1));
i__7490__auto___30176 = G__30177;
continue;
} else {
}
break;
}

var G__30174 = args30172.length;
switch (G__30174) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30172.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30179 = [];
var len__7489__auto___30182 = arguments.length;
var i__7490__auto___30183 = (0);
while(true){
if((i__7490__auto___30183 < len__7489__auto___30182)){
args30179.push((arguments[i__7490__auto___30183]));

var G__30184 = (i__7490__auto___30183 + (1));
i__7490__auto___30183 = G__30184;
continue;
} else {
}
break;
}

var G__30181 = args30179.length;
switch (G__30181) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30179.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30186 = [];
var len__7489__auto___30257 = arguments.length;
var i__7490__auto___30258 = (0);
while(true){
if((i__7490__auto___30258 < len__7489__auto___30257)){
args30186.push((arguments[i__7490__auto___30258]));

var G__30259 = (i__7490__auto___30258 + (1));
i__7490__auto___30258 = G__30259;
continue;
} else {
}
break;
}

var G__30188 = args30186.length;
switch (G__30188) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30186.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28167__auto___30261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___30261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___30261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30227){
var state_val_30228 = (state_30227[(1)]);
if((state_val_30228 === (7))){
var state_30227__$1 = state_30227;
var statearr_30229_30262 = state_30227__$1;
(statearr_30229_30262[(2)] = null);

(statearr_30229_30262[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (1))){
var state_30227__$1 = state_30227;
var statearr_30230_30263 = state_30227__$1;
(statearr_30230_30263[(2)] = null);

(statearr_30230_30263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (4))){
var inst_30191 = (state_30227[(7)]);
var inst_30193 = (inst_30191 < cnt);
var state_30227__$1 = state_30227;
if(cljs.core.truth_(inst_30193)){
var statearr_30231_30264 = state_30227__$1;
(statearr_30231_30264[(1)] = (6));

} else {
var statearr_30232_30265 = state_30227__$1;
(statearr_30232_30265[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (15))){
var inst_30223 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
var statearr_30233_30266 = state_30227__$1;
(statearr_30233_30266[(2)] = inst_30223);

(statearr_30233_30266[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (13))){
var inst_30216 = cljs.core.async.close_BANG_(out);
var state_30227__$1 = state_30227;
var statearr_30234_30267 = state_30227__$1;
(statearr_30234_30267[(2)] = inst_30216);

(statearr_30234_30267[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (6))){
var state_30227__$1 = state_30227;
var statearr_30235_30268 = state_30227__$1;
(statearr_30235_30268[(2)] = null);

(statearr_30235_30268[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (3))){
var inst_30225 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30227__$1,inst_30225);
} else {
if((state_val_30228 === (12))){
var inst_30213 = (state_30227[(8)]);
var inst_30213__$1 = (state_30227[(2)]);
var inst_30214 = cljs.core.some(cljs.core.nil_QMARK_,inst_30213__$1);
var state_30227__$1 = (function (){var statearr_30236 = state_30227;
(statearr_30236[(8)] = inst_30213__$1);

return statearr_30236;
})();
if(cljs.core.truth_(inst_30214)){
var statearr_30237_30269 = state_30227__$1;
(statearr_30237_30269[(1)] = (13));

} else {
var statearr_30238_30270 = state_30227__$1;
(statearr_30238_30270[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (2))){
var inst_30190 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_30191 = (0);
var state_30227__$1 = (function (){var statearr_30239 = state_30227;
(statearr_30239[(7)] = inst_30191);

(statearr_30239[(9)] = inst_30190);

return statearr_30239;
})();
var statearr_30240_30271 = state_30227__$1;
(statearr_30240_30271[(2)] = null);

(statearr_30240_30271[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (11))){
var inst_30191 = (state_30227[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30227,(10),Object,null,(9));
var inst_30200 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30191) : chs__$1.call(null,inst_30191));
var inst_30201 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30191) : done.call(null,inst_30191));
var inst_30202 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30200,inst_30201);
var state_30227__$1 = state_30227;
var statearr_30241_30272 = state_30227__$1;
(statearr_30241_30272[(2)] = inst_30202);


cljs.core.async.impl.ioc_helpers.process_exception(state_30227__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (9))){
var inst_30191 = (state_30227[(7)]);
var inst_30204 = (state_30227[(2)]);
var inst_30205 = (inst_30191 + (1));
var inst_30191__$1 = inst_30205;
var state_30227__$1 = (function (){var statearr_30242 = state_30227;
(statearr_30242[(10)] = inst_30204);

(statearr_30242[(7)] = inst_30191__$1);

return statearr_30242;
})();
var statearr_30243_30273 = state_30227__$1;
(statearr_30243_30273[(2)] = null);

(statearr_30243_30273[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (5))){
var inst_30211 = (state_30227[(2)]);
var state_30227__$1 = (function (){var statearr_30244 = state_30227;
(statearr_30244[(11)] = inst_30211);

return statearr_30244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30227__$1,(12),dchan);
} else {
if((state_val_30228 === (14))){
var inst_30213 = (state_30227[(8)]);
var inst_30218 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30213);
var state_30227__$1 = state_30227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30227__$1,(16),out,inst_30218);
} else {
if((state_val_30228 === (16))){
var inst_30220 = (state_30227[(2)]);
var state_30227__$1 = (function (){var statearr_30245 = state_30227;
(statearr_30245[(12)] = inst_30220);

return statearr_30245;
})();
var statearr_30246_30274 = state_30227__$1;
(statearr_30246_30274[(2)] = null);

(statearr_30246_30274[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (10))){
var inst_30195 = (state_30227[(2)]);
var inst_30196 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30227__$1 = (function (){var statearr_30247 = state_30227;
(statearr_30247[(13)] = inst_30195);

return statearr_30247;
})();
var statearr_30248_30275 = state_30227__$1;
(statearr_30248_30275[(2)] = inst_30196);


cljs.core.async.impl.ioc_helpers.process_exception(state_30227__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_30228 === (8))){
var inst_30209 = (state_30227[(2)]);
var state_30227__$1 = state_30227;
var statearr_30249_30276 = state_30227__$1;
(statearr_30249_30276[(2)] = inst_30209);

(statearr_30249_30276[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___30261,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28043__auto__,c__28167__auto___30261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_30253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30253[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_30253[(1)] = (1));

return statearr_30253;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_30227){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30227);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30254){if((e30254 instanceof Object)){
var ex__28047__auto__ = e30254;
var statearr_30255_30277 = state_30227;
(statearr_30255_30277[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30227);

return cljs.core.cst$kw$recur;
} else {
throw e30254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30278 = state_30227;
state_30227 = G__30278;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_30227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_30227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___30261,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28169__auto__ = (function (){var statearr_30256 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___30261);

return statearr_30256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___30261,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30280 = [];
var len__7489__auto___30338 = arguments.length;
var i__7490__auto___30339 = (0);
while(true){
if((i__7490__auto___30339 < len__7489__auto___30338)){
args30280.push((arguments[i__7490__auto___30339]));

var G__30340 = (i__7490__auto___30339 + (1));
i__7490__auto___30339 = G__30340;
continue;
} else {
}
break;
}

var G__30282 = args30280.length;
switch (G__30282) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30280.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28167__auto___30342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___30342,out){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___30342,out){
return (function (state_30314){
var state_val_30315 = (state_30314[(1)]);
if((state_val_30315 === (7))){
var inst_30293 = (state_30314[(7)]);
var inst_30294 = (state_30314[(8)]);
var inst_30293__$1 = (state_30314[(2)]);
var inst_30294__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30293__$1,(0),null);
var inst_30295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30293__$1,(1),null);
var inst_30296 = (inst_30294__$1 == null);
var state_30314__$1 = (function (){var statearr_30316 = state_30314;
(statearr_30316[(7)] = inst_30293__$1);

(statearr_30316[(8)] = inst_30294__$1);

(statearr_30316[(9)] = inst_30295);

return statearr_30316;
})();
if(cljs.core.truth_(inst_30296)){
var statearr_30317_30343 = state_30314__$1;
(statearr_30317_30343[(1)] = (8));

} else {
var statearr_30318_30344 = state_30314__$1;
(statearr_30318_30344[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30315 === (1))){
var inst_30283 = cljs.core.vec(chs);
var inst_30284 = inst_30283;
var state_30314__$1 = (function (){var statearr_30319 = state_30314;
(statearr_30319[(10)] = inst_30284);

return statearr_30319;
})();
var statearr_30320_30345 = state_30314__$1;
(statearr_30320_30345[(2)] = null);

(statearr_30320_30345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30315 === (4))){
var inst_30284 = (state_30314[(10)]);
var state_30314__$1 = state_30314;
return cljs.core.async.ioc_alts_BANG_(state_30314__$1,(7),inst_30284);
} else {
if((state_val_30315 === (6))){
var inst_30310 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
var statearr_30321_30346 = state_30314__$1;
(statearr_30321_30346[(2)] = inst_30310);

(statearr_30321_30346[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30315 === (3))){
var inst_30312 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30314__$1,inst_30312);
} else {
if((state_val_30315 === (2))){
var inst_30284 = (state_30314[(10)]);
var inst_30286 = cljs.core.count(inst_30284);
var inst_30287 = (inst_30286 > (0));
var state_30314__$1 = state_30314;
if(cljs.core.truth_(inst_30287)){
var statearr_30323_30347 = state_30314__$1;
(statearr_30323_30347[(1)] = (4));

} else {
var statearr_30324_30348 = state_30314__$1;
(statearr_30324_30348[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30315 === (11))){
var inst_30284 = (state_30314[(10)]);
var inst_30303 = (state_30314[(2)]);
var tmp30322 = inst_30284;
var inst_30284__$1 = tmp30322;
var state_30314__$1 = (function (){var statearr_30325 = state_30314;
(statearr_30325[(11)] = inst_30303);

(statearr_30325[(10)] = inst_30284__$1);

return statearr_30325;
})();
var statearr_30326_30349 = state_30314__$1;
(statearr_30326_30349[(2)] = null);

(statearr_30326_30349[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30315 === (9))){
var inst_30294 = (state_30314[(8)]);
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30314__$1,(11),out,inst_30294);
} else {
if((state_val_30315 === (5))){
var inst_30308 = cljs.core.async.close_BANG_(out);
var state_30314__$1 = state_30314;
var statearr_30327_30350 = state_30314__$1;
(statearr_30327_30350[(2)] = inst_30308);

(statearr_30327_30350[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30315 === (10))){
var inst_30306 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
var statearr_30328_30351 = state_30314__$1;
(statearr_30328_30351[(2)] = inst_30306);

(statearr_30328_30351[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30315 === (8))){
var inst_30293 = (state_30314[(7)]);
var inst_30294 = (state_30314[(8)]);
var inst_30284 = (state_30314[(10)]);
var inst_30295 = (state_30314[(9)]);
var inst_30298 = (function (){var cs = inst_30284;
var vec__30289 = inst_30293;
var v = inst_30294;
var c = inst_30295;
return ((function (cs,vec__30289,v,c,inst_30293,inst_30294,inst_30284,inst_30295,state_val_30315,c__28167__auto___30342,out){
return (function (p1__30279_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30279_SHARP_);
});
;})(cs,vec__30289,v,c,inst_30293,inst_30294,inst_30284,inst_30295,state_val_30315,c__28167__auto___30342,out))
})();
var inst_30299 = cljs.core.filterv(inst_30298,inst_30284);
var inst_30284__$1 = inst_30299;
var state_30314__$1 = (function (){var statearr_30329 = state_30314;
(statearr_30329[(10)] = inst_30284__$1);

return statearr_30329;
})();
var statearr_30330_30352 = state_30314__$1;
(statearr_30330_30352[(2)] = null);

(statearr_30330_30352[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___30342,out))
;
return ((function (switch__28043__auto__,c__28167__auto___30342,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_30334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30334[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_30334[(1)] = (1));

return statearr_30334;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_30314){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30314);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30335){if((e30335 instanceof Object)){
var ex__28047__auto__ = e30335;
var statearr_30336_30353 = state_30314;
(statearr_30336_30353[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30314);

return cljs.core.cst$kw$recur;
} else {
throw e30335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30354 = state_30314;
state_30314 = G__30354;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_30314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_30314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___30342,out))
})();
var state__28169__auto__ = (function (){var statearr_30337 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___30342);

return statearr_30337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___30342,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30355 = [];
var len__7489__auto___30404 = arguments.length;
var i__7490__auto___30405 = (0);
while(true){
if((i__7490__auto___30405 < len__7489__auto___30404)){
args30355.push((arguments[i__7490__auto___30405]));

var G__30406 = (i__7490__auto___30405 + (1));
i__7490__auto___30405 = G__30406;
continue;
} else {
}
break;
}

var G__30357 = args30355.length;
switch (G__30357) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30355.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28167__auto___30408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___30408,out){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___30408,out){
return (function (state_30381){
var state_val_30382 = (state_30381[(1)]);
if((state_val_30382 === (7))){
var inst_30363 = (state_30381[(7)]);
var inst_30363__$1 = (state_30381[(2)]);
var inst_30364 = (inst_30363__$1 == null);
var inst_30365 = cljs.core.not(inst_30364);
var state_30381__$1 = (function (){var statearr_30383 = state_30381;
(statearr_30383[(7)] = inst_30363__$1);

return statearr_30383;
})();
if(inst_30365){
var statearr_30384_30409 = state_30381__$1;
(statearr_30384_30409[(1)] = (8));

} else {
var statearr_30385_30410 = state_30381__$1;
(statearr_30385_30410[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (1))){
var inst_30358 = (0);
var state_30381__$1 = (function (){var statearr_30386 = state_30381;
(statearr_30386[(8)] = inst_30358);

return statearr_30386;
})();
var statearr_30387_30411 = state_30381__$1;
(statearr_30387_30411[(2)] = null);

(statearr_30387_30411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (4))){
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30381__$1,(7),ch);
} else {
if((state_val_30382 === (6))){
var inst_30376 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30388_30412 = state_30381__$1;
(statearr_30388_30412[(2)] = inst_30376);

(statearr_30388_30412[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (3))){
var inst_30378 = (state_30381[(2)]);
var inst_30379 = cljs.core.async.close_BANG_(out);
var state_30381__$1 = (function (){var statearr_30389 = state_30381;
(statearr_30389[(9)] = inst_30378);

return statearr_30389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30381__$1,inst_30379);
} else {
if((state_val_30382 === (2))){
var inst_30358 = (state_30381[(8)]);
var inst_30360 = (inst_30358 < n);
var state_30381__$1 = state_30381;
if(cljs.core.truth_(inst_30360)){
var statearr_30390_30413 = state_30381__$1;
(statearr_30390_30413[(1)] = (4));

} else {
var statearr_30391_30414 = state_30381__$1;
(statearr_30391_30414[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (11))){
var inst_30358 = (state_30381[(8)]);
var inst_30368 = (state_30381[(2)]);
var inst_30369 = (inst_30358 + (1));
var inst_30358__$1 = inst_30369;
var state_30381__$1 = (function (){var statearr_30392 = state_30381;
(statearr_30392[(10)] = inst_30368);

(statearr_30392[(8)] = inst_30358__$1);

return statearr_30392;
})();
var statearr_30393_30415 = state_30381__$1;
(statearr_30393_30415[(2)] = null);

(statearr_30393_30415[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (9))){
var state_30381__$1 = state_30381;
var statearr_30394_30416 = state_30381__$1;
(statearr_30394_30416[(2)] = null);

(statearr_30394_30416[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (5))){
var state_30381__$1 = state_30381;
var statearr_30395_30417 = state_30381__$1;
(statearr_30395_30417[(2)] = null);

(statearr_30395_30417[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (10))){
var inst_30373 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30396_30418 = state_30381__$1;
(statearr_30396_30418[(2)] = inst_30373);

(statearr_30396_30418[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (8))){
var inst_30363 = (state_30381[(7)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30381__$1,(11),out,inst_30363);
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
});})(c__28167__auto___30408,out))
;
return ((function (switch__28043__auto__,c__28167__auto___30408,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_30400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30400[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_30400[(1)] = (1));

return statearr_30400;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_30381){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30381);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30401){if((e30401 instanceof Object)){
var ex__28047__auto__ = e30401;
var statearr_30402_30419 = state_30381;
(statearr_30402_30419[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30381);

return cljs.core.cst$kw$recur;
} else {
throw e30401;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30420 = state_30381;
state_30381 = G__30420;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_30381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_30381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___30408,out))
})();
var state__28169__auto__ = (function (){var statearr_30403 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___30408);

return statearr_30403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___30408,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30430 = (function (map_LT_,f,ch,meta30431){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30431 = meta30431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30432,meta30431__$1){
var self__ = this;
var _30432__$1 = this;
return (new cljs.core.async.t_cljs$core$async30430(self__.map_LT_,self__.f,self__.ch,meta30431__$1));
});

cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30432){
var self__ = this;
var _30432__$1 = this;
return self__.meta30431;
});

cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30433 = (function (map_LT_,f,ch,meta30431,_,fn1,meta30434){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30431 = meta30431;
this._ = _;
this.fn1 = fn1;
this.meta30434 = meta30434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30435,meta30434__$1){
var self__ = this;
var _30435__$1 = this;
return (new cljs.core.async.t_cljs$core$async30433(self__.map_LT_,self__.f,self__.ch,self__.meta30431,self__._,self__.fn1,meta30434__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30435){
var self__ = this;
var _30435__$1 = this;
return self__.meta30434;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30421_SHARP_){
var G__30436 = (((p1__30421_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30421_SHARP_) : self__.f.call(null,p1__30421_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30436) : f1.call(null,G__30436));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30433.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30431,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async30430], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta30434], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30433";

cljs.core.async.t_cljs$core$async30433.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async30433");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30433 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30433(map_LT___$1,f__$1,ch__$1,meta30431__$1,___$2,fn1__$1,meta30434){
return (new cljs.core.async.t_cljs$core$async30433(map_LT___$1,f__$1,ch__$1,meta30431__$1,___$2,fn1__$1,meta30434));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30433(self__.map_LT_,self__.f,self__.ch,self__.meta30431,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6402__auto__ = ret;
if(cljs.core.truth_(and__6402__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6402__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30437 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30437) : self__.f.call(null,G__30437));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30431], null);
});

cljs.core.async.t_cljs$core$async30430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30430";

cljs.core.async.t_cljs$core$async30430.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async30430");
});

cljs.core.async.__GT_t_cljs$core$async30430 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30430(map_LT___$1,f__$1,ch__$1,meta30431){
return (new cljs.core.async.t_cljs$core$async30430(map_LT___$1,f__$1,ch__$1,meta30431));
});

}

return (new cljs.core.async.t_cljs$core$async30430(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30441 = (function (map_GT_,f,ch,meta30442){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30442 = meta30442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30443,meta30442__$1){
var self__ = this;
var _30443__$1 = this;
return (new cljs.core.async.t_cljs$core$async30441(self__.map_GT_,self__.f,self__.ch,meta30442__$1));
});

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30443){
var self__ = this;
var _30443__$1 = this;
return self__.meta30442;
});

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async30441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30442], null);
});

cljs.core.async.t_cljs$core$async30441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30441";

cljs.core.async.t_cljs$core$async30441.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async30441");
});

cljs.core.async.__GT_t_cljs$core$async30441 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30441(map_GT___$1,f__$1,ch__$1,meta30442){
return (new cljs.core.async.t_cljs$core$async30441(map_GT___$1,f__$1,ch__$1,meta30442));
});

}

return (new cljs.core.async.t_cljs$core$async30441(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30447 = (function (filter_GT_,p,ch,meta30448){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30448 = meta30448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30449,meta30448__$1){
var self__ = this;
var _30449__$1 = this;
return (new cljs.core.async.t_cljs$core$async30447(self__.filter_GT_,self__.p,self__.ch,meta30448__$1));
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30449){
var self__ = this;
var _30449__$1 = this;
return self__.meta30448;
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30448], null);
});

cljs.core.async.t_cljs$core$async30447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30447";

cljs.core.async.t_cljs$core$async30447.cljs$lang$ctorPrWriter = (function (this__7020__auto__,writer__7021__auto__,opt__7022__auto__){
return cljs.core._write(writer__7021__auto__,"cljs.core.async/t_cljs$core$async30447");
});

cljs.core.async.__GT_t_cljs$core$async30447 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30447(filter_GT___$1,p__$1,ch__$1,meta30448){
return (new cljs.core.async.t_cljs$core$async30447(filter_GT___$1,p__$1,ch__$1,meta30448));
});

}

return (new cljs.core.async.t_cljs$core$async30447(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30450 = [];
var len__7489__auto___30494 = arguments.length;
var i__7490__auto___30495 = (0);
while(true){
if((i__7490__auto___30495 < len__7489__auto___30494)){
args30450.push((arguments[i__7490__auto___30495]));

var G__30496 = (i__7490__auto___30495 + (1));
i__7490__auto___30495 = G__30496;
continue;
} else {
}
break;
}

var G__30452 = args30450.length;
switch (G__30452) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30450.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28167__auto___30498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___30498,out){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___30498,out){
return (function (state_30473){
var state_val_30474 = (state_30473[(1)]);
if((state_val_30474 === (7))){
var inst_30469 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30475_30499 = state_30473__$1;
(statearr_30475_30499[(2)] = inst_30469);

(statearr_30475_30499[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30474 === (1))){
var state_30473__$1 = state_30473;
var statearr_30476_30500 = state_30473__$1;
(statearr_30476_30500[(2)] = null);

(statearr_30476_30500[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30474 === (4))){
var inst_30455 = (state_30473[(7)]);
var inst_30455__$1 = (state_30473[(2)]);
var inst_30456 = (inst_30455__$1 == null);
var state_30473__$1 = (function (){var statearr_30477 = state_30473;
(statearr_30477[(7)] = inst_30455__$1);

return statearr_30477;
})();
if(cljs.core.truth_(inst_30456)){
var statearr_30478_30501 = state_30473__$1;
(statearr_30478_30501[(1)] = (5));

} else {
var statearr_30479_30502 = state_30473__$1;
(statearr_30479_30502[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30474 === (6))){
var inst_30455 = (state_30473[(7)]);
var inst_30460 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30455) : p.call(null,inst_30455));
var state_30473__$1 = state_30473;
if(cljs.core.truth_(inst_30460)){
var statearr_30480_30503 = state_30473__$1;
(statearr_30480_30503[(1)] = (8));

} else {
var statearr_30481_30504 = state_30473__$1;
(statearr_30481_30504[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30474 === (3))){
var inst_30471 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30473__$1,inst_30471);
} else {
if((state_val_30474 === (2))){
var state_30473__$1 = state_30473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30473__$1,(4),ch);
} else {
if((state_val_30474 === (11))){
var inst_30463 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30482_30505 = state_30473__$1;
(statearr_30482_30505[(2)] = inst_30463);

(statearr_30482_30505[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30474 === (9))){
var state_30473__$1 = state_30473;
var statearr_30483_30506 = state_30473__$1;
(statearr_30483_30506[(2)] = null);

(statearr_30483_30506[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30474 === (5))){
var inst_30458 = cljs.core.async.close_BANG_(out);
var state_30473__$1 = state_30473;
var statearr_30484_30507 = state_30473__$1;
(statearr_30484_30507[(2)] = inst_30458);

(statearr_30484_30507[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30474 === (10))){
var inst_30466 = (state_30473[(2)]);
var state_30473__$1 = (function (){var statearr_30485 = state_30473;
(statearr_30485[(8)] = inst_30466);

return statearr_30485;
})();
var statearr_30486_30508 = state_30473__$1;
(statearr_30486_30508[(2)] = null);

(statearr_30486_30508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30474 === (8))){
var inst_30455 = (state_30473[(7)]);
var state_30473__$1 = state_30473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30473__$1,(11),out,inst_30455);
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
});})(c__28167__auto___30498,out))
;
return ((function (switch__28043__auto__,c__28167__auto___30498,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_30490 = [null,null,null,null,null,null,null,null,null];
(statearr_30490[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_30490[(1)] = (1));

return statearr_30490;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_30473){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30473);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30491){if((e30491 instanceof Object)){
var ex__28047__auto__ = e30491;
var statearr_30492_30509 = state_30473;
(statearr_30492_30509[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30473);

return cljs.core.cst$kw$recur;
} else {
throw e30491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30510 = state_30473;
state_30473 = G__30510;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_30473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_30473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___30498,out))
})();
var state__28169__auto__ = (function (){var statearr_30493 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___30498);

return statearr_30493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___30498,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30511 = [];
var len__7489__auto___30514 = arguments.length;
var i__7490__auto___30515 = (0);
while(true){
if((i__7490__auto___30515 < len__7489__auto___30514)){
args30511.push((arguments[i__7490__auto___30515]));

var G__30516 = (i__7490__auto___30515 + (1));
i__7490__auto___30515 = G__30516;
continue;
} else {
}
break;
}

var G__30513 = args30511.length;
switch (G__30513) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30511.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto__){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto__){
return (function (state_30683){
var state_val_30684 = (state_30683[(1)]);
if((state_val_30684 === (7))){
var inst_30679 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30685_30726 = state_30683__$1;
(statearr_30685_30726[(2)] = inst_30679);

(statearr_30685_30726[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (20))){
var inst_30649 = (state_30683[(7)]);
var inst_30660 = (state_30683[(2)]);
var inst_30661 = cljs.core.next(inst_30649);
var inst_30635 = inst_30661;
var inst_30636 = null;
var inst_30637 = (0);
var inst_30638 = (0);
var state_30683__$1 = (function (){var statearr_30686 = state_30683;
(statearr_30686[(8)] = inst_30637);

(statearr_30686[(9)] = inst_30636);

(statearr_30686[(10)] = inst_30635);

(statearr_30686[(11)] = inst_30660);

(statearr_30686[(12)] = inst_30638);

return statearr_30686;
})();
var statearr_30687_30727 = state_30683__$1;
(statearr_30687_30727[(2)] = null);

(statearr_30687_30727[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (1))){
var state_30683__$1 = state_30683;
var statearr_30688_30728 = state_30683__$1;
(statearr_30688_30728[(2)] = null);

(statearr_30688_30728[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (4))){
var inst_30624 = (state_30683[(13)]);
var inst_30624__$1 = (state_30683[(2)]);
var inst_30625 = (inst_30624__$1 == null);
var state_30683__$1 = (function (){var statearr_30689 = state_30683;
(statearr_30689[(13)] = inst_30624__$1);

return statearr_30689;
})();
if(cljs.core.truth_(inst_30625)){
var statearr_30690_30729 = state_30683__$1;
(statearr_30690_30729[(1)] = (5));

} else {
var statearr_30691_30730 = state_30683__$1;
(statearr_30691_30730[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (15))){
var state_30683__$1 = state_30683;
var statearr_30695_30731 = state_30683__$1;
(statearr_30695_30731[(2)] = null);

(statearr_30695_30731[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (21))){
var state_30683__$1 = state_30683;
var statearr_30696_30732 = state_30683__$1;
(statearr_30696_30732[(2)] = null);

(statearr_30696_30732[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (13))){
var inst_30637 = (state_30683[(8)]);
var inst_30636 = (state_30683[(9)]);
var inst_30635 = (state_30683[(10)]);
var inst_30638 = (state_30683[(12)]);
var inst_30645 = (state_30683[(2)]);
var inst_30646 = (inst_30638 + (1));
var tmp30692 = inst_30637;
var tmp30693 = inst_30636;
var tmp30694 = inst_30635;
var inst_30635__$1 = tmp30694;
var inst_30636__$1 = tmp30693;
var inst_30637__$1 = tmp30692;
var inst_30638__$1 = inst_30646;
var state_30683__$1 = (function (){var statearr_30697 = state_30683;
(statearr_30697[(8)] = inst_30637__$1);

(statearr_30697[(9)] = inst_30636__$1);

(statearr_30697[(10)] = inst_30635__$1);

(statearr_30697[(14)] = inst_30645);

(statearr_30697[(12)] = inst_30638__$1);

return statearr_30697;
})();
var statearr_30698_30733 = state_30683__$1;
(statearr_30698_30733[(2)] = null);

(statearr_30698_30733[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (22))){
var state_30683__$1 = state_30683;
var statearr_30699_30734 = state_30683__$1;
(statearr_30699_30734[(2)] = null);

(statearr_30699_30734[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (6))){
var inst_30624 = (state_30683[(13)]);
var inst_30633 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30624) : f.call(null,inst_30624));
var inst_30634 = cljs.core.seq(inst_30633);
var inst_30635 = inst_30634;
var inst_30636 = null;
var inst_30637 = (0);
var inst_30638 = (0);
var state_30683__$1 = (function (){var statearr_30700 = state_30683;
(statearr_30700[(8)] = inst_30637);

(statearr_30700[(9)] = inst_30636);

(statearr_30700[(10)] = inst_30635);

(statearr_30700[(12)] = inst_30638);

return statearr_30700;
})();
var statearr_30701_30735 = state_30683__$1;
(statearr_30701_30735[(2)] = null);

(statearr_30701_30735[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (17))){
var inst_30649 = (state_30683[(7)]);
var inst_30653 = cljs.core.chunk_first(inst_30649);
var inst_30654 = cljs.core.chunk_rest(inst_30649);
var inst_30655 = cljs.core.count(inst_30653);
var inst_30635 = inst_30654;
var inst_30636 = inst_30653;
var inst_30637 = inst_30655;
var inst_30638 = (0);
var state_30683__$1 = (function (){var statearr_30702 = state_30683;
(statearr_30702[(8)] = inst_30637);

(statearr_30702[(9)] = inst_30636);

(statearr_30702[(10)] = inst_30635);

(statearr_30702[(12)] = inst_30638);

return statearr_30702;
})();
var statearr_30703_30736 = state_30683__$1;
(statearr_30703_30736[(2)] = null);

(statearr_30703_30736[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (3))){
var inst_30681 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30683__$1,inst_30681);
} else {
if((state_val_30684 === (12))){
var inst_30669 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30704_30737 = state_30683__$1;
(statearr_30704_30737[(2)] = inst_30669);

(statearr_30704_30737[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (2))){
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30683__$1,(4),in$);
} else {
if((state_val_30684 === (23))){
var inst_30677 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30705_30738 = state_30683__$1;
(statearr_30705_30738[(2)] = inst_30677);

(statearr_30705_30738[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (19))){
var inst_30664 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30706_30739 = state_30683__$1;
(statearr_30706_30739[(2)] = inst_30664);

(statearr_30706_30739[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (11))){
var inst_30635 = (state_30683[(10)]);
var inst_30649 = (state_30683[(7)]);
var inst_30649__$1 = cljs.core.seq(inst_30635);
var state_30683__$1 = (function (){var statearr_30707 = state_30683;
(statearr_30707[(7)] = inst_30649__$1);

return statearr_30707;
})();
if(inst_30649__$1){
var statearr_30708_30740 = state_30683__$1;
(statearr_30708_30740[(1)] = (14));

} else {
var statearr_30709_30741 = state_30683__$1;
(statearr_30709_30741[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (9))){
var inst_30671 = (state_30683[(2)]);
var inst_30672 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30683__$1 = (function (){var statearr_30710 = state_30683;
(statearr_30710[(15)] = inst_30671);

return statearr_30710;
})();
if(cljs.core.truth_(inst_30672)){
var statearr_30711_30742 = state_30683__$1;
(statearr_30711_30742[(1)] = (21));

} else {
var statearr_30712_30743 = state_30683__$1;
(statearr_30712_30743[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (5))){
var inst_30627 = cljs.core.async.close_BANG_(out);
var state_30683__$1 = state_30683;
var statearr_30713_30744 = state_30683__$1;
(statearr_30713_30744[(2)] = inst_30627);

(statearr_30713_30744[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (14))){
var inst_30649 = (state_30683[(7)]);
var inst_30651 = cljs.core.chunked_seq_QMARK_(inst_30649);
var state_30683__$1 = state_30683;
if(inst_30651){
var statearr_30714_30745 = state_30683__$1;
(statearr_30714_30745[(1)] = (17));

} else {
var statearr_30715_30746 = state_30683__$1;
(statearr_30715_30746[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (16))){
var inst_30667 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30716_30747 = state_30683__$1;
(statearr_30716_30747[(2)] = inst_30667);

(statearr_30716_30747[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30684 === (10))){
var inst_30636 = (state_30683[(9)]);
var inst_30638 = (state_30683[(12)]);
var inst_30643 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30636,inst_30638);
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30683__$1,(13),out,inst_30643);
} else {
if((state_val_30684 === (18))){
var inst_30649 = (state_30683[(7)]);
var inst_30658 = cljs.core.first(inst_30649);
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30683__$1,(20),out,inst_30658);
} else {
if((state_val_30684 === (8))){
var inst_30637 = (state_30683[(8)]);
var inst_30638 = (state_30683[(12)]);
var inst_30640 = (inst_30638 < inst_30637);
var inst_30641 = inst_30640;
var state_30683__$1 = state_30683;
if(cljs.core.truth_(inst_30641)){
var statearr_30717_30748 = state_30683__$1;
(statearr_30717_30748[(1)] = (10));

} else {
var statearr_30718_30749 = state_30683__$1;
(statearr_30718_30749[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__28167__auto__))
;
return ((function (switch__28043__auto__,c__28167__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_30722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30722[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__);

(statearr_30722[(1)] = (1));

return statearr_30722;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____1 = (function (state_30683){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30683);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30723){if((e30723 instanceof Object)){
var ex__28047__auto__ = e30723;
var statearr_30724_30750 = state_30683;
(statearr_30724_30750[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30683);

return cljs.core.cst$kw$recur;
} else {
throw e30723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30751 = state_30683;
state_30683 = G__30751;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__ = function(state_30683){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____1.call(this,state_30683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto__))
})();
var state__28169__auto__ = (function (){var statearr_30725 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto__);

return statearr_30725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto__))
);

return c__28167__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30752 = [];
var len__7489__auto___30755 = arguments.length;
var i__7490__auto___30756 = (0);
while(true){
if((i__7490__auto___30756 < len__7489__auto___30755)){
args30752.push((arguments[i__7490__auto___30756]));

var G__30757 = (i__7490__auto___30756 + (1));
i__7490__auto___30756 = G__30757;
continue;
} else {
}
break;
}

var G__30754 = args30752.length;
switch (G__30754) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30752.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30759 = [];
var len__7489__auto___30762 = arguments.length;
var i__7490__auto___30763 = (0);
while(true){
if((i__7490__auto___30763 < len__7489__auto___30762)){
args30759.push((arguments[i__7490__auto___30763]));

var G__30764 = (i__7490__auto___30763 + (1));
i__7490__auto___30763 = G__30764;
continue;
} else {
}
break;
}

var G__30761 = args30759.length;
switch (G__30761) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30759.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30766 = [];
var len__7489__auto___30817 = arguments.length;
var i__7490__auto___30818 = (0);
while(true){
if((i__7490__auto___30818 < len__7489__auto___30817)){
args30766.push((arguments[i__7490__auto___30818]));

var G__30819 = (i__7490__auto___30818 + (1));
i__7490__auto___30818 = G__30819;
continue;
} else {
}
break;
}

var G__30768 = args30766.length;
switch (G__30768) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30766.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28167__auto___30821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___30821,out){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___30821,out){
return (function (state_30792){
var state_val_30793 = (state_30792[(1)]);
if((state_val_30793 === (7))){
var inst_30787 = (state_30792[(2)]);
var state_30792__$1 = state_30792;
var statearr_30794_30822 = state_30792__$1;
(statearr_30794_30822[(2)] = inst_30787);

(statearr_30794_30822[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30793 === (1))){
var inst_30769 = null;
var state_30792__$1 = (function (){var statearr_30795 = state_30792;
(statearr_30795[(7)] = inst_30769);

return statearr_30795;
})();
var statearr_30796_30823 = state_30792__$1;
(statearr_30796_30823[(2)] = null);

(statearr_30796_30823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30793 === (4))){
var inst_30772 = (state_30792[(8)]);
var inst_30772__$1 = (state_30792[(2)]);
var inst_30773 = (inst_30772__$1 == null);
var inst_30774 = cljs.core.not(inst_30773);
var state_30792__$1 = (function (){var statearr_30797 = state_30792;
(statearr_30797[(8)] = inst_30772__$1);

return statearr_30797;
})();
if(inst_30774){
var statearr_30798_30824 = state_30792__$1;
(statearr_30798_30824[(1)] = (5));

} else {
var statearr_30799_30825 = state_30792__$1;
(statearr_30799_30825[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30793 === (6))){
var state_30792__$1 = state_30792;
var statearr_30800_30826 = state_30792__$1;
(statearr_30800_30826[(2)] = null);

(statearr_30800_30826[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30793 === (3))){
var inst_30789 = (state_30792[(2)]);
var inst_30790 = cljs.core.async.close_BANG_(out);
var state_30792__$1 = (function (){var statearr_30801 = state_30792;
(statearr_30801[(9)] = inst_30789);

return statearr_30801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30792__$1,inst_30790);
} else {
if((state_val_30793 === (2))){
var state_30792__$1 = state_30792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30792__$1,(4),ch);
} else {
if((state_val_30793 === (11))){
var inst_30772 = (state_30792[(8)]);
var inst_30781 = (state_30792[(2)]);
var inst_30769 = inst_30772;
var state_30792__$1 = (function (){var statearr_30802 = state_30792;
(statearr_30802[(10)] = inst_30781);

(statearr_30802[(7)] = inst_30769);

return statearr_30802;
})();
var statearr_30803_30827 = state_30792__$1;
(statearr_30803_30827[(2)] = null);

(statearr_30803_30827[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30793 === (9))){
var inst_30772 = (state_30792[(8)]);
var state_30792__$1 = state_30792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30792__$1,(11),out,inst_30772);
} else {
if((state_val_30793 === (5))){
var inst_30772 = (state_30792[(8)]);
var inst_30769 = (state_30792[(7)]);
var inst_30776 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30772,inst_30769);
var state_30792__$1 = state_30792;
if(inst_30776){
var statearr_30805_30828 = state_30792__$1;
(statearr_30805_30828[(1)] = (8));

} else {
var statearr_30806_30829 = state_30792__$1;
(statearr_30806_30829[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30793 === (10))){
var inst_30784 = (state_30792[(2)]);
var state_30792__$1 = state_30792;
var statearr_30807_30830 = state_30792__$1;
(statearr_30807_30830[(2)] = inst_30784);

(statearr_30807_30830[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30793 === (8))){
var inst_30769 = (state_30792[(7)]);
var tmp30804 = inst_30769;
var inst_30769__$1 = tmp30804;
var state_30792__$1 = (function (){var statearr_30808 = state_30792;
(statearr_30808[(7)] = inst_30769__$1);

return statearr_30808;
})();
var statearr_30809_30831 = state_30792__$1;
(statearr_30809_30831[(2)] = null);

(statearr_30809_30831[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___30821,out))
;
return ((function (switch__28043__auto__,c__28167__auto___30821,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_30813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30813[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_30813[(1)] = (1));

return statearr_30813;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_30792){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30792);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30814){if((e30814 instanceof Object)){
var ex__28047__auto__ = e30814;
var statearr_30815_30832 = state_30792;
(statearr_30815_30832[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30792);

return cljs.core.cst$kw$recur;
} else {
throw e30814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30833 = state_30792;
state_30792 = G__30833;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_30792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_30792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___30821,out))
})();
var state__28169__auto__ = (function (){var statearr_30816 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___30821);

return statearr_30816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___30821,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30834 = [];
var len__7489__auto___30904 = arguments.length;
var i__7490__auto___30905 = (0);
while(true){
if((i__7490__auto___30905 < len__7489__auto___30904)){
args30834.push((arguments[i__7490__auto___30905]));

var G__30906 = (i__7490__auto___30905 + (1));
i__7490__auto___30905 = G__30906;
continue;
} else {
}
break;
}

var G__30836 = args30834.length;
switch (G__30836) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30834.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28167__auto___30908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___30908,out){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___30908,out){
return (function (state_30874){
var state_val_30875 = (state_30874[(1)]);
if((state_val_30875 === (7))){
var inst_30870 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30876_30909 = state_30874__$1;
(statearr_30876_30909[(2)] = inst_30870);

(statearr_30876_30909[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (1))){
var inst_30837 = (new Array(n));
var inst_30838 = inst_30837;
var inst_30839 = (0);
var state_30874__$1 = (function (){var statearr_30877 = state_30874;
(statearr_30877[(7)] = inst_30838);

(statearr_30877[(8)] = inst_30839);

return statearr_30877;
})();
var statearr_30878_30910 = state_30874__$1;
(statearr_30878_30910[(2)] = null);

(statearr_30878_30910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (4))){
var inst_30842 = (state_30874[(9)]);
var inst_30842__$1 = (state_30874[(2)]);
var inst_30843 = (inst_30842__$1 == null);
var inst_30844 = cljs.core.not(inst_30843);
var state_30874__$1 = (function (){var statearr_30879 = state_30874;
(statearr_30879[(9)] = inst_30842__$1);

return statearr_30879;
})();
if(inst_30844){
var statearr_30880_30911 = state_30874__$1;
(statearr_30880_30911[(1)] = (5));

} else {
var statearr_30881_30912 = state_30874__$1;
(statearr_30881_30912[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (15))){
var inst_30864 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30882_30913 = state_30874__$1;
(statearr_30882_30913[(2)] = inst_30864);

(statearr_30882_30913[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (13))){
var state_30874__$1 = state_30874;
var statearr_30883_30914 = state_30874__$1;
(statearr_30883_30914[(2)] = null);

(statearr_30883_30914[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (6))){
var inst_30839 = (state_30874[(8)]);
var inst_30860 = (inst_30839 > (0));
var state_30874__$1 = state_30874;
if(cljs.core.truth_(inst_30860)){
var statearr_30884_30915 = state_30874__$1;
(statearr_30884_30915[(1)] = (12));

} else {
var statearr_30885_30916 = state_30874__$1;
(statearr_30885_30916[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (3))){
var inst_30872 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30874__$1,inst_30872);
} else {
if((state_val_30875 === (12))){
var inst_30838 = (state_30874[(7)]);
var inst_30862 = cljs.core.vec(inst_30838);
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30874__$1,(15),out,inst_30862);
} else {
if((state_val_30875 === (2))){
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30874__$1,(4),ch);
} else {
if((state_val_30875 === (11))){
var inst_30854 = (state_30874[(2)]);
var inst_30855 = (new Array(n));
var inst_30838 = inst_30855;
var inst_30839 = (0);
var state_30874__$1 = (function (){var statearr_30886 = state_30874;
(statearr_30886[(7)] = inst_30838);

(statearr_30886[(8)] = inst_30839);

(statearr_30886[(10)] = inst_30854);

return statearr_30886;
})();
var statearr_30887_30917 = state_30874__$1;
(statearr_30887_30917[(2)] = null);

(statearr_30887_30917[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (9))){
var inst_30838 = (state_30874[(7)]);
var inst_30852 = cljs.core.vec(inst_30838);
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30874__$1,(11),out,inst_30852);
} else {
if((state_val_30875 === (5))){
var inst_30842 = (state_30874[(9)]);
var inst_30838 = (state_30874[(7)]);
var inst_30839 = (state_30874[(8)]);
var inst_30847 = (state_30874[(11)]);
var inst_30846 = (inst_30838[inst_30839] = inst_30842);
var inst_30847__$1 = (inst_30839 + (1));
var inst_30848 = (inst_30847__$1 < n);
var state_30874__$1 = (function (){var statearr_30888 = state_30874;
(statearr_30888[(12)] = inst_30846);

(statearr_30888[(11)] = inst_30847__$1);

return statearr_30888;
})();
if(cljs.core.truth_(inst_30848)){
var statearr_30889_30918 = state_30874__$1;
(statearr_30889_30918[(1)] = (8));

} else {
var statearr_30890_30919 = state_30874__$1;
(statearr_30890_30919[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (14))){
var inst_30867 = (state_30874[(2)]);
var inst_30868 = cljs.core.async.close_BANG_(out);
var state_30874__$1 = (function (){var statearr_30892 = state_30874;
(statearr_30892[(13)] = inst_30867);

return statearr_30892;
})();
var statearr_30893_30920 = state_30874__$1;
(statearr_30893_30920[(2)] = inst_30868);

(statearr_30893_30920[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (10))){
var inst_30858 = (state_30874[(2)]);
var state_30874__$1 = state_30874;
var statearr_30894_30921 = state_30874__$1;
(statearr_30894_30921[(2)] = inst_30858);

(statearr_30894_30921[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30875 === (8))){
var inst_30838 = (state_30874[(7)]);
var inst_30847 = (state_30874[(11)]);
var tmp30891 = inst_30838;
var inst_30838__$1 = tmp30891;
var inst_30839 = inst_30847;
var state_30874__$1 = (function (){var statearr_30895 = state_30874;
(statearr_30895[(7)] = inst_30838__$1);

(statearr_30895[(8)] = inst_30839);

return statearr_30895;
})();
var statearr_30896_30922 = state_30874__$1;
(statearr_30896_30922[(2)] = null);

(statearr_30896_30922[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___30908,out))
;
return ((function (switch__28043__auto__,c__28167__auto___30908,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_30900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30900[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_30900[(1)] = (1));

return statearr_30900;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_30874){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30874);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30901){if((e30901 instanceof Object)){
var ex__28047__auto__ = e30901;
var statearr_30902_30923 = state_30874;
(statearr_30902_30923[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30874);

return cljs.core.cst$kw$recur;
} else {
throw e30901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__30924 = state_30874;
state_30874 = G__30924;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_30874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_30874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___30908,out))
})();
var state__28169__auto__ = (function (){var statearr_30903 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___30908);

return statearr_30903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___30908,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30925 = [];
var len__7489__auto___30999 = arguments.length;
var i__7490__auto___31000 = (0);
while(true){
if((i__7490__auto___31000 < len__7489__auto___30999)){
args30925.push((arguments[i__7490__auto___31000]));

var G__31001 = (i__7490__auto___31000 + (1));
i__7490__auto___31000 = G__31001;
continue;
} else {
}
break;
}

var G__30927 = args30925.length;
switch (G__30927) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30925.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28167__auto___31003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28167__auto___31003,out){
return (function (){
var f__28168__auto__ = (function (){var switch__28043__auto__ = ((function (c__28167__auto___31003,out){
return (function (state_30969){
var state_val_30970 = (state_30969[(1)]);
if((state_val_30970 === (7))){
var inst_30965 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
var statearr_30971_31004 = state_30969__$1;
(statearr_30971_31004[(2)] = inst_30965);

(statearr_30971_31004[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (1))){
var inst_30928 = [];
var inst_30929 = inst_30928;
var inst_30930 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_30969__$1 = (function (){var statearr_30972 = state_30969;
(statearr_30972[(7)] = inst_30929);

(statearr_30972[(8)] = inst_30930);

return statearr_30972;
})();
var statearr_30973_31005 = state_30969__$1;
(statearr_30973_31005[(2)] = null);

(statearr_30973_31005[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (4))){
var inst_30933 = (state_30969[(9)]);
var inst_30933__$1 = (state_30969[(2)]);
var inst_30934 = (inst_30933__$1 == null);
var inst_30935 = cljs.core.not(inst_30934);
var state_30969__$1 = (function (){var statearr_30974 = state_30969;
(statearr_30974[(9)] = inst_30933__$1);

return statearr_30974;
})();
if(inst_30935){
var statearr_30975_31006 = state_30969__$1;
(statearr_30975_31006[(1)] = (5));

} else {
var statearr_30976_31007 = state_30969__$1;
(statearr_30976_31007[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (15))){
var inst_30959 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
var statearr_30977_31008 = state_30969__$1;
(statearr_30977_31008[(2)] = inst_30959);

(statearr_30977_31008[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (13))){
var state_30969__$1 = state_30969;
var statearr_30978_31009 = state_30969__$1;
(statearr_30978_31009[(2)] = null);

(statearr_30978_31009[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (6))){
var inst_30929 = (state_30969[(7)]);
var inst_30954 = inst_30929.length;
var inst_30955 = (inst_30954 > (0));
var state_30969__$1 = state_30969;
if(cljs.core.truth_(inst_30955)){
var statearr_30979_31010 = state_30969__$1;
(statearr_30979_31010[(1)] = (12));

} else {
var statearr_30980_31011 = state_30969__$1;
(statearr_30980_31011[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (3))){
var inst_30967 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30969__$1,inst_30967);
} else {
if((state_val_30970 === (12))){
var inst_30929 = (state_30969[(7)]);
var inst_30957 = cljs.core.vec(inst_30929);
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30969__$1,(15),out,inst_30957);
} else {
if((state_val_30970 === (2))){
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30969__$1,(4),ch);
} else {
if((state_val_30970 === (11))){
var inst_30937 = (state_30969[(10)]);
var inst_30933 = (state_30969[(9)]);
var inst_30947 = (state_30969[(2)]);
var inst_30948 = [];
var inst_30949 = inst_30948.push(inst_30933);
var inst_30929 = inst_30948;
var inst_30930 = inst_30937;
var state_30969__$1 = (function (){var statearr_30981 = state_30969;
(statearr_30981[(7)] = inst_30929);

(statearr_30981[(8)] = inst_30930);

(statearr_30981[(11)] = inst_30947);

(statearr_30981[(12)] = inst_30949);

return statearr_30981;
})();
var statearr_30982_31012 = state_30969__$1;
(statearr_30982_31012[(2)] = null);

(statearr_30982_31012[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (9))){
var inst_30929 = (state_30969[(7)]);
var inst_30945 = cljs.core.vec(inst_30929);
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30969__$1,(11),out,inst_30945);
} else {
if((state_val_30970 === (5))){
var inst_30930 = (state_30969[(8)]);
var inst_30937 = (state_30969[(10)]);
var inst_30933 = (state_30969[(9)]);
var inst_30937__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30933) : f.call(null,inst_30933));
var inst_30938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30937__$1,inst_30930);
var inst_30939 = cljs.core.keyword_identical_QMARK_(inst_30930,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_30940 = (inst_30938) || (inst_30939);
var state_30969__$1 = (function (){var statearr_30983 = state_30969;
(statearr_30983[(10)] = inst_30937__$1);

return statearr_30983;
})();
if(cljs.core.truth_(inst_30940)){
var statearr_30984_31013 = state_30969__$1;
(statearr_30984_31013[(1)] = (8));

} else {
var statearr_30985_31014 = state_30969__$1;
(statearr_30985_31014[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (14))){
var inst_30962 = (state_30969[(2)]);
var inst_30963 = cljs.core.async.close_BANG_(out);
var state_30969__$1 = (function (){var statearr_30987 = state_30969;
(statearr_30987[(13)] = inst_30962);

return statearr_30987;
})();
var statearr_30988_31015 = state_30969__$1;
(statearr_30988_31015[(2)] = inst_30963);

(statearr_30988_31015[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (10))){
var inst_30952 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
var statearr_30989_31016 = state_30969__$1;
(statearr_30989_31016[(2)] = inst_30952);

(statearr_30989_31016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30970 === (8))){
var inst_30929 = (state_30969[(7)]);
var inst_30937 = (state_30969[(10)]);
var inst_30933 = (state_30969[(9)]);
var inst_30942 = inst_30929.push(inst_30933);
var tmp30986 = inst_30929;
var inst_30929__$1 = tmp30986;
var inst_30930 = inst_30937;
var state_30969__$1 = (function (){var statearr_30990 = state_30969;
(statearr_30990[(7)] = inst_30929__$1);

(statearr_30990[(8)] = inst_30930);

(statearr_30990[(14)] = inst_30942);

return statearr_30990;
})();
var statearr_30991_31017 = state_30969__$1;
(statearr_30991_31017[(2)] = null);

(statearr_30991_31017[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__28167__auto___31003,out))
;
return ((function (switch__28043__auto__,c__28167__auto___31003,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_30995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30995[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_30995[(1)] = (1));

return statearr_30995;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_30969){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__(state_30969);
if(cljs.core.keyword_identical_QMARK_(result__28046__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e30996){if((e30996 instanceof Object)){
var ex__28047__auto__ = e30996;
var statearr_30997_31018 = state_30969;
(statearr_30997_31018[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30969);

return cljs.core.cst$kw$recur;
} else {
throw e30996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28045__auto__,cljs.core.cst$kw$recur)){
var G__31019 = state_30969;
state_30969 = G__31019;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_30969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_30969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28167__auto___31003,out))
})();
var state__28169__auto__ = (function (){var statearr_30998 = (f__28168__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28168__auto__.cljs$core$IFn$_invoke$arity$0() : f__28168__auto__.call(null));
(statearr_30998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28167__auto___31003);

return statearr_30998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28169__auto__);
});})(c__28167__auto___31003,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

