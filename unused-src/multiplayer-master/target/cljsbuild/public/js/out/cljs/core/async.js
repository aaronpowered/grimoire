// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30101 = [];
var len__27062__auto___30107 = arguments.length;
var i__27063__auto___30108 = (0);
while(true){
if((i__27063__auto___30108 < len__27062__auto___30107)){
args30101.push((arguments[i__27063__auto___30108]));

var G__30109 = (i__27063__auto___30108 + (1));
i__27063__auto___30108 = G__30109;
continue;
} else {
}
break;
}

var G__30103 = args30101.length;
switch (G__30103) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30101.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30104 = (function (f,blockable,meta30105){
this.f = f;
this.blockable = blockable;
this.meta30105 = meta30105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30106,meta30105__$1){
var self__ = this;
var _30106__$1 = this;
return (new cljs.core.async.t_cljs$core$async30104(self__.f,self__.blockable,meta30105__$1));
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30106){
var self__ = this;
var _30106__$1 = this;
return self__.meta30105;
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30105","meta30105",-726718578,null)], null);
});

cljs.core.async.t_cljs$core$async30104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30104";

cljs.core.async.t_cljs$core$async30104.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async30104");
});

cljs.core.async.__GT_t_cljs$core$async30104 = (function cljs$core$async$__GT_t_cljs$core$async30104(f__$1,blockable__$1,meta30105){
return (new cljs.core.async.t_cljs$core$async30104(f__$1,blockable__$1,meta30105));
});

}

return (new cljs.core.async.t_cljs$core$async30104(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args30113 = [];
var len__27062__auto___30116 = arguments.length;
var i__27063__auto___30117 = (0);
while(true){
if((i__27063__auto___30117 < len__27062__auto___30116)){
args30113.push((arguments[i__27063__auto___30117]));

var G__30118 = (i__27063__auto___30117 + (1));
i__27063__auto___30117 = G__30118;
continue;
} else {
}
break;
}

var G__30115 = args30113.length;
switch (G__30115) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30113.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args30120 = [];
var len__27062__auto___30123 = arguments.length;
var i__27063__auto___30124 = (0);
while(true){
if((i__27063__auto___30124 < len__27062__auto___30123)){
args30120.push((arguments[i__27063__auto___30124]));

var G__30125 = (i__27063__auto___30124 + (1));
i__27063__auto___30124 = G__30125;
continue;
} else {
}
break;
}

var G__30122 = args30120.length;
switch (G__30122) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30120.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args30127 = [];
var len__27062__auto___30130 = arguments.length;
var i__27063__auto___30131 = (0);
while(true){
if((i__27063__auto___30131 < len__27062__auto___30130)){
args30127.push((arguments[i__27063__auto___30131]));

var G__30132 = (i__27063__auto___30131 + (1));
i__27063__auto___30131 = G__30132;
continue;
} else {
}
break;
}

var G__30129 = args30127.length;
switch (G__30129) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30127.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30134 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30134);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30134,ret){
return (function (){
return fn1.call(null,val_30134);
});})(val_30134,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args30135 = [];
var len__27062__auto___30138 = arguments.length;
var i__27063__auto___30139 = (0);
while(true){
if((i__27063__auto___30139 < len__27062__auto___30138)){
args30135.push((arguments[i__27063__auto___30139]));

var G__30140 = (i__27063__auto___30139 + (1));
i__27063__auto___30139 = G__30140;
continue;
} else {
}
break;
}

var G__30137 = args30135.length;
switch (G__30137) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30135.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26907__auto___30142 = n;
var x_30143 = (0);
while(true){
if((x_30143 < n__26907__auto___30142)){
(a[x_30143] = (0));

var G__30144 = (x_30143 + (1));
x_30143 = G__30144;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30145 = (i + (1));
i = G__30145;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30149 = (function (alt_flag,flag,meta30150){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30150 = meta30150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30151,meta30150__$1){
var self__ = this;
var _30151__$1 = this;
return (new cljs.core.async.t_cljs$core$async30149(self__.alt_flag,self__.flag,meta30150__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30151){
var self__ = this;
var _30151__$1 = this;
return self__.meta30150;
});})(flag))
;

cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30149.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30150","meta30150",1659992028,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30149";

cljs.core.async.t_cljs$core$async30149.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async30149");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30149 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30149(alt_flag__$1,flag__$1,meta30150){
return (new cljs.core.async.t_cljs$core$async30149(alt_flag__$1,flag__$1,meta30150));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30149(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30155 = (function (alt_handler,flag,cb,meta30156){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30156 = meta30156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30157,meta30156__$1){
var self__ = this;
var _30157__$1 = this;
return (new cljs.core.async.t_cljs$core$async30155(self__.alt_handler,self__.flag,self__.cb,meta30156__$1));
});

cljs.core.async.t_cljs$core$async30155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30157){
var self__ = this;
var _30157__$1 = this;
return self__.meta30156;
});

cljs.core.async.t_cljs$core$async30155.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30155.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30156","meta30156",-804648139,null)], null);
});

cljs.core.async.t_cljs$core$async30155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30155";

cljs.core.async.t_cljs$core$async30155.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async30155");
});

cljs.core.async.__GT_t_cljs$core$async30155 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30155(alt_handler__$1,flag__$1,cb__$1,meta30156){
return (new cljs.core.async.t_cljs$core$async30155(alt_handler__$1,flag__$1,cb__$1,meta30156));
});

}

return (new cljs.core.async.t_cljs$core$async30155(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30158_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30158_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30159_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30159_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26004__auto__ = wport;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30160 = (i + (1));
i = G__30160;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26004__auto__ = ret;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25992__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25992__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25992__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__27069__auto__ = [];
var len__27062__auto___30166 = arguments.length;
var i__27063__auto___30167 = (0);
while(true){
if((i__27063__auto___30167 < len__27062__auto___30166)){
args__27069__auto__.push((arguments[i__27063__auto___30167]));

var G__30168 = (i__27063__auto___30167 + (1));
i__27063__auto___30167 = G__30168;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30163){
var map__30164 = p__30163;
var map__30164__$1 = ((((!((map__30164 == null)))?((((map__30164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30164):map__30164);
var opts = map__30164__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30161){
var G__30162 = cljs.core.first.call(null,seq30161);
var seq30161__$1 = cljs.core.next.call(null,seq30161);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30162,seq30161__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args30169 = [];
var len__27062__auto___30219 = arguments.length;
var i__27063__auto___30220 = (0);
while(true){
if((i__27063__auto___30220 < len__27062__auto___30219)){
args30169.push((arguments[i__27063__auto___30220]));

var G__30221 = (i__27063__auto___30220 + (1));
i__27063__auto___30220 = G__30221;
continue;
} else {
}
break;
}

var G__30171 = args30169.length;
switch (G__30171) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30169.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30056__auto___30223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___30223){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___30223){
return (function (state_30195){
var state_val_30196 = (state_30195[(1)]);
if((state_val_30196 === (7))){
var inst_30191 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30197_30224 = state_30195__$1;
(statearr_30197_30224[(2)] = inst_30191);

(statearr_30197_30224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (1))){
var state_30195__$1 = state_30195;
var statearr_30198_30225 = state_30195__$1;
(statearr_30198_30225[(2)] = null);

(statearr_30198_30225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (4))){
var inst_30174 = (state_30195[(7)]);
var inst_30174__$1 = (state_30195[(2)]);
var inst_30175 = (inst_30174__$1 == null);
var state_30195__$1 = (function (){var statearr_30199 = state_30195;
(statearr_30199[(7)] = inst_30174__$1);

return statearr_30199;
})();
if(cljs.core.truth_(inst_30175)){
var statearr_30200_30226 = state_30195__$1;
(statearr_30200_30226[(1)] = (5));

} else {
var statearr_30201_30227 = state_30195__$1;
(statearr_30201_30227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (13))){
var state_30195__$1 = state_30195;
var statearr_30202_30228 = state_30195__$1;
(statearr_30202_30228[(2)] = null);

(statearr_30202_30228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (6))){
var inst_30174 = (state_30195[(7)]);
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30195__$1,(11),to,inst_30174);
} else {
if((state_val_30196 === (3))){
var inst_30193 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30195__$1,inst_30193);
} else {
if((state_val_30196 === (12))){
var state_30195__$1 = state_30195;
var statearr_30203_30229 = state_30195__$1;
(statearr_30203_30229[(2)] = null);

(statearr_30203_30229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (2))){
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30195__$1,(4),from);
} else {
if((state_val_30196 === (11))){
var inst_30184 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
if(cljs.core.truth_(inst_30184)){
var statearr_30204_30230 = state_30195__$1;
(statearr_30204_30230[(1)] = (12));

} else {
var statearr_30205_30231 = state_30195__$1;
(statearr_30205_30231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (9))){
var state_30195__$1 = state_30195;
var statearr_30206_30232 = state_30195__$1;
(statearr_30206_30232[(2)] = null);

(statearr_30206_30232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (5))){
var state_30195__$1 = state_30195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30207_30233 = state_30195__$1;
(statearr_30207_30233[(1)] = (8));

} else {
var statearr_30208_30234 = state_30195__$1;
(statearr_30208_30234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (14))){
var inst_30189 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30209_30235 = state_30195__$1;
(statearr_30209_30235[(2)] = inst_30189);

(statearr_30209_30235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (10))){
var inst_30181 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30210_30236 = state_30195__$1;
(statearr_30210_30236[(2)] = inst_30181);

(statearr_30210_30236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (8))){
var inst_30178 = cljs.core.async.close_BANG_.call(null,to);
var state_30195__$1 = state_30195;
var statearr_30211_30237 = state_30195__$1;
(statearr_30211_30237[(2)] = inst_30178);

(statearr_30211_30237[(1)] = (10));


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
});})(c__30056__auto___30223))
;
return ((function (switch__29944__auto__,c__30056__auto___30223){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_30215 = [null,null,null,null,null,null,null,null];
(statearr_30215[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_30215[(1)] = (1));

return statearr_30215;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_30195){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30216){if((e30216 instanceof Object)){
var ex__29948__auto__ = e30216;
var statearr_30217_30238 = state_30195;
(statearr_30217_30238[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30239 = state_30195;
state_30195 = G__30239;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_30195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_30195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___30223))
})();
var state__30058__auto__ = (function (){var statearr_30218 = f__30057__auto__.call(null);
(statearr_30218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___30223);

return statearr_30218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___30223))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30423){
var vec__30424 = p__30423;
var v = cljs.core.nth.call(null,vec__30424,(0),null);
var p = cljs.core.nth.call(null,vec__30424,(1),null);
var job = vec__30424;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30056__auto___30606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___30606,res,vec__30424,v,p,job,jobs,results){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___30606,res,vec__30424,v,p,job,jobs,results){
return (function (state_30429){
var state_val_30430 = (state_30429[(1)]);
if((state_val_30430 === (1))){
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30429__$1,(2),res,v);
} else {
if((state_val_30430 === (2))){
var inst_30426 = (state_30429[(2)]);
var inst_30427 = cljs.core.async.close_BANG_.call(null,res);
var state_30429__$1 = (function (){var statearr_30431 = state_30429;
(statearr_30431[(7)] = inst_30426);

return statearr_30431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30429__$1,inst_30427);
} else {
return null;
}
}
});})(c__30056__auto___30606,res,vec__30424,v,p,job,jobs,results))
;
return ((function (switch__29944__auto__,c__30056__auto___30606,res,vec__30424,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0 = (function (){
var statearr_30435 = [null,null,null,null,null,null,null,null];
(statearr_30435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__);

(statearr_30435[(1)] = (1));

return statearr_30435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1 = (function (state_30429){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30436){if((e30436 instanceof Object)){
var ex__29948__auto__ = e30436;
var statearr_30437_30607 = state_30429;
(statearr_30437_30607[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30608 = state_30429;
state_30429 = G__30608;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = function(state_30429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1.call(this,state_30429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___30606,res,vec__30424,v,p,job,jobs,results))
})();
var state__30058__auto__ = (function (){var statearr_30438 = f__30057__auto__.call(null);
(statearr_30438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___30606);

return statearr_30438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___30606,res,vec__30424,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30439){
var vec__30440 = p__30439;
var v = cljs.core.nth.call(null,vec__30440,(0),null);
var p = cljs.core.nth.call(null,vec__30440,(1),null);
var job = vec__30440;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26907__auto___30609 = n;
var __30610 = (0);
while(true){
if((__30610 < n__26907__auto___30609)){
var G__30441_30611 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30441_30611) {
case "compute":
var c__30056__auto___30613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30610,c__30056__auto___30613,G__30441_30611,n__26907__auto___30609,jobs,results,process,async){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (__30610,c__30056__auto___30613,G__30441_30611,n__26907__auto___30609,jobs,results,process,async){
return (function (state_30454){
var state_val_30455 = (state_30454[(1)]);
if((state_val_30455 === (1))){
var state_30454__$1 = state_30454;
var statearr_30456_30614 = state_30454__$1;
(statearr_30456_30614[(2)] = null);

(statearr_30456_30614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (2))){
var state_30454__$1 = state_30454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30454__$1,(4),jobs);
} else {
if((state_val_30455 === (3))){
var inst_30452 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30454__$1,inst_30452);
} else {
if((state_val_30455 === (4))){
var inst_30444 = (state_30454[(2)]);
var inst_30445 = process.call(null,inst_30444);
var state_30454__$1 = state_30454;
if(cljs.core.truth_(inst_30445)){
var statearr_30457_30615 = state_30454__$1;
(statearr_30457_30615[(1)] = (5));

} else {
var statearr_30458_30616 = state_30454__$1;
(statearr_30458_30616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (5))){
var state_30454__$1 = state_30454;
var statearr_30459_30617 = state_30454__$1;
(statearr_30459_30617[(2)] = null);

(statearr_30459_30617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (6))){
var state_30454__$1 = state_30454;
var statearr_30460_30618 = state_30454__$1;
(statearr_30460_30618[(2)] = null);

(statearr_30460_30618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (7))){
var inst_30450 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
var statearr_30461_30619 = state_30454__$1;
(statearr_30461_30619[(2)] = inst_30450);

(statearr_30461_30619[(1)] = (3));


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
});})(__30610,c__30056__auto___30613,G__30441_30611,n__26907__auto___30609,jobs,results,process,async))
;
return ((function (__30610,switch__29944__auto__,c__30056__auto___30613,G__30441_30611,n__26907__auto___30609,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0 = (function (){
var statearr_30465 = [null,null,null,null,null,null,null];
(statearr_30465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__);

(statearr_30465[(1)] = (1));

return statearr_30465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1 = (function (state_30454){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30466){if((e30466 instanceof Object)){
var ex__29948__auto__ = e30466;
var statearr_30467_30620 = state_30454;
(statearr_30467_30620[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30621 = state_30454;
state_30454 = G__30621;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = function(state_30454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1.call(this,state_30454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__;
})()
;})(__30610,switch__29944__auto__,c__30056__auto___30613,G__30441_30611,n__26907__auto___30609,jobs,results,process,async))
})();
var state__30058__auto__ = (function (){var statearr_30468 = f__30057__auto__.call(null);
(statearr_30468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___30613);

return statearr_30468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(__30610,c__30056__auto___30613,G__30441_30611,n__26907__auto___30609,jobs,results,process,async))
);


break;
case "async":
var c__30056__auto___30622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30610,c__30056__auto___30622,G__30441_30611,n__26907__auto___30609,jobs,results,process,async){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (__30610,c__30056__auto___30622,G__30441_30611,n__26907__auto___30609,jobs,results,process,async){
return (function (state_30481){
var state_val_30482 = (state_30481[(1)]);
if((state_val_30482 === (1))){
var state_30481__$1 = state_30481;
var statearr_30483_30623 = state_30481__$1;
(statearr_30483_30623[(2)] = null);

(statearr_30483_30623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (2))){
var state_30481__$1 = state_30481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30481__$1,(4),jobs);
} else {
if((state_val_30482 === (3))){
var inst_30479 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30481__$1,inst_30479);
} else {
if((state_val_30482 === (4))){
var inst_30471 = (state_30481[(2)]);
var inst_30472 = async.call(null,inst_30471);
var state_30481__$1 = state_30481;
if(cljs.core.truth_(inst_30472)){
var statearr_30484_30624 = state_30481__$1;
(statearr_30484_30624[(1)] = (5));

} else {
var statearr_30485_30625 = state_30481__$1;
(statearr_30485_30625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (5))){
var state_30481__$1 = state_30481;
var statearr_30486_30626 = state_30481__$1;
(statearr_30486_30626[(2)] = null);

(statearr_30486_30626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (6))){
var state_30481__$1 = state_30481;
var statearr_30487_30627 = state_30481__$1;
(statearr_30487_30627[(2)] = null);

(statearr_30487_30627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (7))){
var inst_30477 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
var statearr_30488_30628 = state_30481__$1;
(statearr_30488_30628[(2)] = inst_30477);

(statearr_30488_30628[(1)] = (3));


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
});})(__30610,c__30056__auto___30622,G__30441_30611,n__26907__auto___30609,jobs,results,process,async))
;
return ((function (__30610,switch__29944__auto__,c__30056__auto___30622,G__30441_30611,n__26907__auto___30609,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0 = (function (){
var statearr_30492 = [null,null,null,null,null,null,null];
(statearr_30492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__);

(statearr_30492[(1)] = (1));

return statearr_30492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1 = (function (state_30481){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30493){if((e30493 instanceof Object)){
var ex__29948__auto__ = e30493;
var statearr_30494_30629 = state_30481;
(statearr_30494_30629[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30630 = state_30481;
state_30481 = G__30630;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = function(state_30481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1.call(this,state_30481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__;
})()
;})(__30610,switch__29944__auto__,c__30056__auto___30622,G__30441_30611,n__26907__auto___30609,jobs,results,process,async))
})();
var state__30058__auto__ = (function (){var statearr_30495 = f__30057__auto__.call(null);
(statearr_30495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___30622);

return statearr_30495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(__30610,c__30056__auto___30622,G__30441_30611,n__26907__auto___30609,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30631 = (__30610 + (1));
__30610 = G__30631;
continue;
} else {
}
break;
}

var c__30056__auto___30632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___30632,jobs,results,process,async){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___30632,jobs,results,process,async){
return (function (state_30517){
var state_val_30518 = (state_30517[(1)]);
if((state_val_30518 === (1))){
var state_30517__$1 = state_30517;
var statearr_30519_30633 = state_30517__$1;
(statearr_30519_30633[(2)] = null);

(statearr_30519_30633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (2))){
var state_30517__$1 = state_30517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30517__$1,(4),from);
} else {
if((state_val_30518 === (3))){
var inst_30515 = (state_30517[(2)]);
var state_30517__$1 = state_30517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30517__$1,inst_30515);
} else {
if((state_val_30518 === (4))){
var inst_30498 = (state_30517[(7)]);
var inst_30498__$1 = (state_30517[(2)]);
var inst_30499 = (inst_30498__$1 == null);
var state_30517__$1 = (function (){var statearr_30520 = state_30517;
(statearr_30520[(7)] = inst_30498__$1);

return statearr_30520;
})();
if(cljs.core.truth_(inst_30499)){
var statearr_30521_30634 = state_30517__$1;
(statearr_30521_30634[(1)] = (5));

} else {
var statearr_30522_30635 = state_30517__$1;
(statearr_30522_30635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (5))){
var inst_30501 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30517__$1 = state_30517;
var statearr_30523_30636 = state_30517__$1;
(statearr_30523_30636[(2)] = inst_30501);

(statearr_30523_30636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (6))){
var inst_30503 = (state_30517[(8)]);
var inst_30498 = (state_30517[(7)]);
var inst_30503__$1 = cljs.core.async.chan.call(null,(1));
var inst_30504 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30505 = [inst_30498,inst_30503__$1];
var inst_30506 = (new cljs.core.PersistentVector(null,2,(5),inst_30504,inst_30505,null));
var state_30517__$1 = (function (){var statearr_30524 = state_30517;
(statearr_30524[(8)] = inst_30503__$1);

return statearr_30524;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30517__$1,(8),jobs,inst_30506);
} else {
if((state_val_30518 === (7))){
var inst_30513 = (state_30517[(2)]);
var state_30517__$1 = state_30517;
var statearr_30525_30637 = state_30517__$1;
(statearr_30525_30637[(2)] = inst_30513);

(statearr_30525_30637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (8))){
var inst_30503 = (state_30517[(8)]);
var inst_30508 = (state_30517[(2)]);
var state_30517__$1 = (function (){var statearr_30526 = state_30517;
(statearr_30526[(9)] = inst_30508);

return statearr_30526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30517__$1,(9),results,inst_30503);
} else {
if((state_val_30518 === (9))){
var inst_30510 = (state_30517[(2)]);
var state_30517__$1 = (function (){var statearr_30527 = state_30517;
(statearr_30527[(10)] = inst_30510);

return statearr_30527;
})();
var statearr_30528_30638 = state_30517__$1;
(statearr_30528_30638[(2)] = null);

(statearr_30528_30638[(1)] = (2));


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
});})(c__30056__auto___30632,jobs,results,process,async))
;
return ((function (switch__29944__auto__,c__30056__auto___30632,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0 = (function (){
var statearr_30532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__);

(statearr_30532[(1)] = (1));

return statearr_30532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1 = (function (state_30517){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30533){if((e30533 instanceof Object)){
var ex__29948__auto__ = e30533;
var statearr_30534_30639 = state_30517;
(statearr_30534_30639[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30640 = state_30517;
state_30517 = G__30640;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = function(state_30517){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1.call(this,state_30517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___30632,jobs,results,process,async))
})();
var state__30058__auto__ = (function (){var statearr_30535 = f__30057__auto__.call(null);
(statearr_30535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___30632);

return statearr_30535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___30632,jobs,results,process,async))
);


var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__,jobs,results,process,async){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__,jobs,results,process,async){
return (function (state_30573){
var state_val_30574 = (state_30573[(1)]);
if((state_val_30574 === (7))){
var inst_30569 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30575_30641 = state_30573__$1;
(statearr_30575_30641[(2)] = inst_30569);

(statearr_30575_30641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (20))){
var state_30573__$1 = state_30573;
var statearr_30576_30642 = state_30573__$1;
(statearr_30576_30642[(2)] = null);

(statearr_30576_30642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (1))){
var state_30573__$1 = state_30573;
var statearr_30577_30643 = state_30573__$1;
(statearr_30577_30643[(2)] = null);

(statearr_30577_30643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (4))){
var inst_30538 = (state_30573[(7)]);
var inst_30538__$1 = (state_30573[(2)]);
var inst_30539 = (inst_30538__$1 == null);
var state_30573__$1 = (function (){var statearr_30578 = state_30573;
(statearr_30578[(7)] = inst_30538__$1);

return statearr_30578;
})();
if(cljs.core.truth_(inst_30539)){
var statearr_30579_30644 = state_30573__$1;
(statearr_30579_30644[(1)] = (5));

} else {
var statearr_30580_30645 = state_30573__$1;
(statearr_30580_30645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (15))){
var inst_30551 = (state_30573[(8)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30573__$1,(18),to,inst_30551);
} else {
if((state_val_30574 === (21))){
var inst_30564 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30581_30646 = state_30573__$1;
(statearr_30581_30646[(2)] = inst_30564);

(statearr_30581_30646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (13))){
var inst_30566 = (state_30573[(2)]);
var state_30573__$1 = (function (){var statearr_30582 = state_30573;
(statearr_30582[(9)] = inst_30566);

return statearr_30582;
})();
var statearr_30583_30647 = state_30573__$1;
(statearr_30583_30647[(2)] = null);

(statearr_30583_30647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (6))){
var inst_30538 = (state_30573[(7)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30573__$1,(11),inst_30538);
} else {
if((state_val_30574 === (17))){
var inst_30559 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30559)){
var statearr_30584_30648 = state_30573__$1;
(statearr_30584_30648[(1)] = (19));

} else {
var statearr_30585_30649 = state_30573__$1;
(statearr_30585_30649[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (3))){
var inst_30571 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30573__$1,inst_30571);
} else {
if((state_val_30574 === (12))){
var inst_30548 = (state_30573[(10)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30573__$1,(14),inst_30548);
} else {
if((state_val_30574 === (2))){
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30573__$1,(4),results);
} else {
if((state_val_30574 === (19))){
var state_30573__$1 = state_30573;
var statearr_30586_30650 = state_30573__$1;
(statearr_30586_30650[(2)] = null);

(statearr_30586_30650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (11))){
var inst_30548 = (state_30573[(2)]);
var state_30573__$1 = (function (){var statearr_30587 = state_30573;
(statearr_30587[(10)] = inst_30548);

return statearr_30587;
})();
var statearr_30588_30651 = state_30573__$1;
(statearr_30588_30651[(2)] = null);

(statearr_30588_30651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (9))){
var state_30573__$1 = state_30573;
var statearr_30589_30652 = state_30573__$1;
(statearr_30589_30652[(2)] = null);

(statearr_30589_30652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (5))){
var state_30573__$1 = state_30573;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30590_30653 = state_30573__$1;
(statearr_30590_30653[(1)] = (8));

} else {
var statearr_30591_30654 = state_30573__$1;
(statearr_30591_30654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (14))){
var inst_30551 = (state_30573[(8)]);
var inst_30553 = (state_30573[(11)]);
var inst_30551__$1 = (state_30573[(2)]);
var inst_30552 = (inst_30551__$1 == null);
var inst_30553__$1 = cljs.core.not.call(null,inst_30552);
var state_30573__$1 = (function (){var statearr_30592 = state_30573;
(statearr_30592[(8)] = inst_30551__$1);

(statearr_30592[(11)] = inst_30553__$1);

return statearr_30592;
})();
if(inst_30553__$1){
var statearr_30593_30655 = state_30573__$1;
(statearr_30593_30655[(1)] = (15));

} else {
var statearr_30594_30656 = state_30573__$1;
(statearr_30594_30656[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (16))){
var inst_30553 = (state_30573[(11)]);
var state_30573__$1 = state_30573;
var statearr_30595_30657 = state_30573__$1;
(statearr_30595_30657[(2)] = inst_30553);

(statearr_30595_30657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (10))){
var inst_30545 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30596_30658 = state_30573__$1;
(statearr_30596_30658[(2)] = inst_30545);

(statearr_30596_30658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (18))){
var inst_30556 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30597_30659 = state_30573__$1;
(statearr_30597_30659[(2)] = inst_30556);

(statearr_30597_30659[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (8))){
var inst_30542 = cljs.core.async.close_BANG_.call(null,to);
var state_30573__$1 = state_30573;
var statearr_30598_30660 = state_30573__$1;
(statearr_30598_30660[(2)] = inst_30542);

(statearr_30598_30660[(1)] = (10));


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
}
}
}
}
});})(c__30056__auto__,jobs,results,process,async))
;
return ((function (switch__29944__auto__,c__30056__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0 = (function (){
var statearr_30602 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__);

(statearr_30602[(1)] = (1));

return statearr_30602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1 = (function (state_30573){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30603){if((e30603 instanceof Object)){
var ex__29948__auto__ = e30603;
var statearr_30604_30661 = state_30573;
(statearr_30604_30661[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30662 = state_30573;
state_30573 = G__30662;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__ = function(state_30573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1.call(this,state_30573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__,jobs,results,process,async))
})();
var state__30058__auto__ = (function (){var statearr_30605 = f__30057__auto__.call(null);
(statearr_30605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_30605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__,jobs,results,process,async))
);

return c__30056__auto__;
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
var args30663 = [];
var len__27062__auto___30666 = arguments.length;
var i__27063__auto___30667 = (0);
while(true){
if((i__27063__auto___30667 < len__27062__auto___30666)){
args30663.push((arguments[i__27063__auto___30667]));

var G__30668 = (i__27063__auto___30667 + (1));
i__27063__auto___30667 = G__30668;
continue;
} else {
}
break;
}

var G__30665 = args30663.length;
switch (G__30665) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30663.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args30670 = [];
var len__27062__auto___30673 = arguments.length;
var i__27063__auto___30674 = (0);
while(true){
if((i__27063__auto___30674 < len__27062__auto___30673)){
args30670.push((arguments[i__27063__auto___30674]));

var G__30675 = (i__27063__auto___30674 + (1));
i__27063__auto___30674 = G__30675;
continue;
} else {
}
break;
}

var G__30672 = args30670.length;
switch (G__30672) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30670.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args30677 = [];
var len__27062__auto___30730 = arguments.length;
var i__27063__auto___30731 = (0);
while(true){
if((i__27063__auto___30731 < len__27062__auto___30730)){
args30677.push((arguments[i__27063__auto___30731]));

var G__30732 = (i__27063__auto___30731 + (1));
i__27063__auto___30731 = G__30732;
continue;
} else {
}
break;
}

var G__30679 = args30677.length;
switch (G__30679) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30677.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30056__auto___30734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___30734,tc,fc){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___30734,tc,fc){
return (function (state_30705){
var state_val_30706 = (state_30705[(1)]);
if((state_val_30706 === (7))){
var inst_30701 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30707_30735 = state_30705__$1;
(statearr_30707_30735[(2)] = inst_30701);

(statearr_30707_30735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (1))){
var state_30705__$1 = state_30705;
var statearr_30708_30736 = state_30705__$1;
(statearr_30708_30736[(2)] = null);

(statearr_30708_30736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (4))){
var inst_30682 = (state_30705[(7)]);
var inst_30682__$1 = (state_30705[(2)]);
var inst_30683 = (inst_30682__$1 == null);
var state_30705__$1 = (function (){var statearr_30709 = state_30705;
(statearr_30709[(7)] = inst_30682__$1);

return statearr_30709;
})();
if(cljs.core.truth_(inst_30683)){
var statearr_30710_30737 = state_30705__$1;
(statearr_30710_30737[(1)] = (5));

} else {
var statearr_30711_30738 = state_30705__$1;
(statearr_30711_30738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (13))){
var state_30705__$1 = state_30705;
var statearr_30712_30739 = state_30705__$1;
(statearr_30712_30739[(2)] = null);

(statearr_30712_30739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (6))){
var inst_30682 = (state_30705[(7)]);
var inst_30688 = p.call(null,inst_30682);
var state_30705__$1 = state_30705;
if(cljs.core.truth_(inst_30688)){
var statearr_30713_30740 = state_30705__$1;
(statearr_30713_30740[(1)] = (9));

} else {
var statearr_30714_30741 = state_30705__$1;
(statearr_30714_30741[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (3))){
var inst_30703 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30705__$1,inst_30703);
} else {
if((state_val_30706 === (12))){
var state_30705__$1 = state_30705;
var statearr_30715_30742 = state_30705__$1;
(statearr_30715_30742[(2)] = null);

(statearr_30715_30742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (2))){
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30705__$1,(4),ch);
} else {
if((state_val_30706 === (11))){
var inst_30682 = (state_30705[(7)]);
var inst_30692 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30705__$1,(8),inst_30692,inst_30682);
} else {
if((state_val_30706 === (9))){
var state_30705__$1 = state_30705;
var statearr_30716_30743 = state_30705__$1;
(statearr_30716_30743[(2)] = tc);

(statearr_30716_30743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (5))){
var inst_30685 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30686 = cljs.core.async.close_BANG_.call(null,fc);
var state_30705__$1 = (function (){var statearr_30717 = state_30705;
(statearr_30717[(8)] = inst_30685);

return statearr_30717;
})();
var statearr_30718_30744 = state_30705__$1;
(statearr_30718_30744[(2)] = inst_30686);

(statearr_30718_30744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (14))){
var inst_30699 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30719_30745 = state_30705__$1;
(statearr_30719_30745[(2)] = inst_30699);

(statearr_30719_30745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (10))){
var state_30705__$1 = state_30705;
var statearr_30720_30746 = state_30705__$1;
(statearr_30720_30746[(2)] = fc);

(statearr_30720_30746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (8))){
var inst_30694 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
if(cljs.core.truth_(inst_30694)){
var statearr_30721_30747 = state_30705__$1;
(statearr_30721_30747[(1)] = (12));

} else {
var statearr_30722_30748 = state_30705__$1;
(statearr_30722_30748[(1)] = (13));

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
});})(c__30056__auto___30734,tc,fc))
;
return ((function (switch__29944__auto__,c__30056__auto___30734,tc,fc){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_30726 = [null,null,null,null,null,null,null,null,null];
(statearr_30726[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_30726[(1)] = (1));

return statearr_30726;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_30705){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30727){if((e30727 instanceof Object)){
var ex__29948__auto__ = e30727;
var statearr_30728_30749 = state_30705;
(statearr_30728_30749[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30750 = state_30705;
state_30705 = G__30750;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_30705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_30705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___30734,tc,fc))
})();
var state__30058__auto__ = (function (){var statearr_30729 = f__30057__auto__.call(null);
(statearr_30729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___30734);

return statearr_30729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___30734,tc,fc))
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
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_30814){
var state_val_30815 = (state_30814[(1)]);
if((state_val_30815 === (7))){
var inst_30810 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
var statearr_30816_30837 = state_30814__$1;
(statearr_30816_30837[(2)] = inst_30810);

(statearr_30816_30837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (1))){
var inst_30794 = init;
var state_30814__$1 = (function (){var statearr_30817 = state_30814;
(statearr_30817[(7)] = inst_30794);

return statearr_30817;
})();
var statearr_30818_30838 = state_30814__$1;
(statearr_30818_30838[(2)] = null);

(statearr_30818_30838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (4))){
var inst_30797 = (state_30814[(8)]);
var inst_30797__$1 = (state_30814[(2)]);
var inst_30798 = (inst_30797__$1 == null);
var state_30814__$1 = (function (){var statearr_30819 = state_30814;
(statearr_30819[(8)] = inst_30797__$1);

return statearr_30819;
})();
if(cljs.core.truth_(inst_30798)){
var statearr_30820_30839 = state_30814__$1;
(statearr_30820_30839[(1)] = (5));

} else {
var statearr_30821_30840 = state_30814__$1;
(statearr_30821_30840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (6))){
var inst_30797 = (state_30814[(8)]);
var inst_30794 = (state_30814[(7)]);
var inst_30801 = (state_30814[(9)]);
var inst_30801__$1 = f.call(null,inst_30794,inst_30797);
var inst_30802 = cljs.core.reduced_QMARK_.call(null,inst_30801__$1);
var state_30814__$1 = (function (){var statearr_30822 = state_30814;
(statearr_30822[(9)] = inst_30801__$1);

return statearr_30822;
})();
if(inst_30802){
var statearr_30823_30841 = state_30814__$1;
(statearr_30823_30841[(1)] = (8));

} else {
var statearr_30824_30842 = state_30814__$1;
(statearr_30824_30842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (3))){
var inst_30812 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30814__$1,inst_30812);
} else {
if((state_val_30815 === (2))){
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30814__$1,(4),ch);
} else {
if((state_val_30815 === (9))){
var inst_30801 = (state_30814[(9)]);
var inst_30794 = inst_30801;
var state_30814__$1 = (function (){var statearr_30825 = state_30814;
(statearr_30825[(7)] = inst_30794);

return statearr_30825;
})();
var statearr_30826_30843 = state_30814__$1;
(statearr_30826_30843[(2)] = null);

(statearr_30826_30843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (5))){
var inst_30794 = (state_30814[(7)]);
var state_30814__$1 = state_30814;
var statearr_30827_30844 = state_30814__$1;
(statearr_30827_30844[(2)] = inst_30794);

(statearr_30827_30844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (10))){
var inst_30808 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
var statearr_30828_30845 = state_30814__$1;
(statearr_30828_30845[(2)] = inst_30808);

(statearr_30828_30845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (8))){
var inst_30801 = (state_30814[(9)]);
var inst_30804 = cljs.core.deref.call(null,inst_30801);
var state_30814__$1 = state_30814;
var statearr_30829_30846 = state_30814__$1;
(statearr_30829_30846[(2)] = inst_30804);

(statearr_30829_30846[(1)] = (10));


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
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29945__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29945__auto____0 = (function (){
var statearr_30833 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30833[(0)] = cljs$core$async$reduce_$_state_machine__29945__auto__);

(statearr_30833[(1)] = (1));

return statearr_30833;
});
var cljs$core$async$reduce_$_state_machine__29945__auto____1 = (function (state_30814){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30834){if((e30834 instanceof Object)){
var ex__29948__auto__ = e30834;
var statearr_30835_30847 = state_30814;
(statearr_30835_30847[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30848 = state_30814;
state_30814 = G__30848;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29945__auto__ = function(state_30814){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29945__auto____1.call(this,state_30814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29945__auto____0;
cljs$core$async$reduce_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29945__auto____1;
return cljs$core$async$reduce_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_30836 = f__30057__auto__.call(null);
(statearr_30836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_30836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
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
var args30849 = [];
var len__27062__auto___30901 = arguments.length;
var i__27063__auto___30902 = (0);
while(true){
if((i__27063__auto___30902 < len__27062__auto___30901)){
args30849.push((arguments[i__27063__auto___30902]));

var G__30903 = (i__27063__auto___30902 + (1));
i__27063__auto___30902 = G__30903;
continue;
} else {
}
break;
}

var G__30851 = args30849.length;
switch (G__30851) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30849.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_30876){
var state_val_30877 = (state_30876[(1)]);
if((state_val_30877 === (7))){
var inst_30858 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
var statearr_30878_30905 = state_30876__$1;
(statearr_30878_30905[(2)] = inst_30858);

(statearr_30878_30905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (1))){
var inst_30852 = cljs.core.seq.call(null,coll);
var inst_30853 = inst_30852;
var state_30876__$1 = (function (){var statearr_30879 = state_30876;
(statearr_30879[(7)] = inst_30853);

return statearr_30879;
})();
var statearr_30880_30906 = state_30876__$1;
(statearr_30880_30906[(2)] = null);

(statearr_30880_30906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (4))){
var inst_30853 = (state_30876[(7)]);
var inst_30856 = cljs.core.first.call(null,inst_30853);
var state_30876__$1 = state_30876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30876__$1,(7),ch,inst_30856);
} else {
if((state_val_30877 === (13))){
var inst_30870 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
var statearr_30881_30907 = state_30876__$1;
(statearr_30881_30907[(2)] = inst_30870);

(statearr_30881_30907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (6))){
var inst_30861 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
if(cljs.core.truth_(inst_30861)){
var statearr_30882_30908 = state_30876__$1;
(statearr_30882_30908[(1)] = (8));

} else {
var statearr_30883_30909 = state_30876__$1;
(statearr_30883_30909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (3))){
var inst_30874 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30876__$1,inst_30874);
} else {
if((state_val_30877 === (12))){
var state_30876__$1 = state_30876;
var statearr_30884_30910 = state_30876__$1;
(statearr_30884_30910[(2)] = null);

(statearr_30884_30910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (2))){
var inst_30853 = (state_30876[(7)]);
var state_30876__$1 = state_30876;
if(cljs.core.truth_(inst_30853)){
var statearr_30885_30911 = state_30876__$1;
(statearr_30885_30911[(1)] = (4));

} else {
var statearr_30886_30912 = state_30876__$1;
(statearr_30886_30912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (11))){
var inst_30867 = cljs.core.async.close_BANG_.call(null,ch);
var state_30876__$1 = state_30876;
var statearr_30887_30913 = state_30876__$1;
(statearr_30887_30913[(2)] = inst_30867);

(statearr_30887_30913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (9))){
var state_30876__$1 = state_30876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30888_30914 = state_30876__$1;
(statearr_30888_30914[(1)] = (11));

} else {
var statearr_30889_30915 = state_30876__$1;
(statearr_30889_30915[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (5))){
var inst_30853 = (state_30876[(7)]);
var state_30876__$1 = state_30876;
var statearr_30890_30916 = state_30876__$1;
(statearr_30890_30916[(2)] = inst_30853);

(statearr_30890_30916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (10))){
var inst_30872 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
var statearr_30891_30917 = state_30876__$1;
(statearr_30891_30917[(2)] = inst_30872);

(statearr_30891_30917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (8))){
var inst_30853 = (state_30876[(7)]);
var inst_30863 = cljs.core.next.call(null,inst_30853);
var inst_30853__$1 = inst_30863;
var state_30876__$1 = (function (){var statearr_30892 = state_30876;
(statearr_30892[(7)] = inst_30853__$1);

return statearr_30892;
})();
var statearr_30893_30918 = state_30876__$1;
(statearr_30893_30918[(2)] = null);

(statearr_30893_30918[(1)] = (2));


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
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_30897 = [null,null,null,null,null,null,null,null];
(statearr_30897[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_30897[(1)] = (1));

return statearr_30897;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_30876){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_30876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e30898){if((e30898 instanceof Object)){
var ex__29948__auto__ = e30898;
var statearr_30899_30919 = state_30876;
(statearr_30899_30919[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30920 = state_30876;
state_30876 = G__30920;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_30876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_30876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_30900 = f__30057__auto__.call(null);
(statearr_30900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_30900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__26659__auto__ = (((_ == null))?null:_);
var m__26660__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,_);
} else {
var m__26660__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__26659__auto__ = (((m == null))?null:m);
var m__26660__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26660__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26659__auto__ = (((m == null))?null:m);
var m__26660__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,m,ch);
} else {
var m__26660__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26659__auto__ = (((m == null))?null:m);
var m__26660__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,m);
} else {
var m__26660__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31142 = (function (mult,ch,cs,meta31143){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31143 = meta31143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31144,meta31143__$1){
var self__ = this;
var _31144__$1 = this;
return (new cljs.core.async.t_cljs$core$async31142(self__.mult,self__.ch,self__.cs,meta31143__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31144){
var self__ = this;
var _31144__$1 = this;
return self__.meta31143;
});})(cs))
;

cljs.core.async.t_cljs$core$async31142.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31142.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31142.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31142.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31142.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31142.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31143","meta31143",-1829290635,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31142";

cljs.core.async.t_cljs$core$async31142.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async31142");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31142 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31142(mult__$1,ch__$1,cs__$1,meta31143){
return (new cljs.core.async.t_cljs$core$async31142(mult__$1,ch__$1,cs__$1,meta31143));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31142(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30056__auto___31363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___31363,cs,m,dchan,dctr,done){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___31363,cs,m,dchan,dctr,done){
return (function (state_31275){
var state_val_31276 = (state_31275[(1)]);
if((state_val_31276 === (7))){
var inst_31271 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31277_31364 = state_31275__$1;
(statearr_31277_31364[(2)] = inst_31271);

(statearr_31277_31364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (20))){
var inst_31176 = (state_31275[(7)]);
var inst_31186 = cljs.core.first.call(null,inst_31176);
var inst_31187 = cljs.core.nth.call(null,inst_31186,(0),null);
var inst_31188 = cljs.core.nth.call(null,inst_31186,(1),null);
var state_31275__$1 = (function (){var statearr_31278 = state_31275;
(statearr_31278[(8)] = inst_31187);

return statearr_31278;
})();
if(cljs.core.truth_(inst_31188)){
var statearr_31279_31365 = state_31275__$1;
(statearr_31279_31365[(1)] = (22));

} else {
var statearr_31280_31366 = state_31275__$1;
(statearr_31280_31366[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (27))){
var inst_31223 = (state_31275[(9)]);
var inst_31147 = (state_31275[(10)]);
var inst_31218 = (state_31275[(11)]);
var inst_31216 = (state_31275[(12)]);
var inst_31223__$1 = cljs.core._nth.call(null,inst_31216,inst_31218);
var inst_31224 = cljs.core.async.put_BANG_.call(null,inst_31223__$1,inst_31147,done);
var state_31275__$1 = (function (){var statearr_31281 = state_31275;
(statearr_31281[(9)] = inst_31223__$1);

return statearr_31281;
})();
if(cljs.core.truth_(inst_31224)){
var statearr_31282_31367 = state_31275__$1;
(statearr_31282_31367[(1)] = (30));

} else {
var statearr_31283_31368 = state_31275__$1;
(statearr_31283_31368[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (1))){
var state_31275__$1 = state_31275;
var statearr_31284_31369 = state_31275__$1;
(statearr_31284_31369[(2)] = null);

(statearr_31284_31369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (24))){
var inst_31176 = (state_31275[(7)]);
var inst_31193 = (state_31275[(2)]);
var inst_31194 = cljs.core.next.call(null,inst_31176);
var inst_31156 = inst_31194;
var inst_31157 = null;
var inst_31158 = (0);
var inst_31159 = (0);
var state_31275__$1 = (function (){var statearr_31285 = state_31275;
(statearr_31285[(13)] = inst_31159);

(statearr_31285[(14)] = inst_31157);

(statearr_31285[(15)] = inst_31158);

(statearr_31285[(16)] = inst_31193);

(statearr_31285[(17)] = inst_31156);

return statearr_31285;
})();
var statearr_31286_31370 = state_31275__$1;
(statearr_31286_31370[(2)] = null);

(statearr_31286_31370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (39))){
var state_31275__$1 = state_31275;
var statearr_31290_31371 = state_31275__$1;
(statearr_31290_31371[(2)] = null);

(statearr_31290_31371[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (4))){
var inst_31147 = (state_31275[(10)]);
var inst_31147__$1 = (state_31275[(2)]);
var inst_31148 = (inst_31147__$1 == null);
var state_31275__$1 = (function (){var statearr_31291 = state_31275;
(statearr_31291[(10)] = inst_31147__$1);

return statearr_31291;
})();
if(cljs.core.truth_(inst_31148)){
var statearr_31292_31372 = state_31275__$1;
(statearr_31292_31372[(1)] = (5));

} else {
var statearr_31293_31373 = state_31275__$1;
(statearr_31293_31373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (15))){
var inst_31159 = (state_31275[(13)]);
var inst_31157 = (state_31275[(14)]);
var inst_31158 = (state_31275[(15)]);
var inst_31156 = (state_31275[(17)]);
var inst_31172 = (state_31275[(2)]);
var inst_31173 = (inst_31159 + (1));
var tmp31287 = inst_31157;
var tmp31288 = inst_31158;
var tmp31289 = inst_31156;
var inst_31156__$1 = tmp31289;
var inst_31157__$1 = tmp31287;
var inst_31158__$1 = tmp31288;
var inst_31159__$1 = inst_31173;
var state_31275__$1 = (function (){var statearr_31294 = state_31275;
(statearr_31294[(13)] = inst_31159__$1);

(statearr_31294[(18)] = inst_31172);

(statearr_31294[(14)] = inst_31157__$1);

(statearr_31294[(15)] = inst_31158__$1);

(statearr_31294[(17)] = inst_31156__$1);

return statearr_31294;
})();
var statearr_31295_31374 = state_31275__$1;
(statearr_31295_31374[(2)] = null);

(statearr_31295_31374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (21))){
var inst_31197 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31299_31375 = state_31275__$1;
(statearr_31299_31375[(2)] = inst_31197);

(statearr_31299_31375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (31))){
var inst_31223 = (state_31275[(9)]);
var inst_31227 = done.call(null,null);
var inst_31228 = cljs.core.async.untap_STAR_.call(null,m,inst_31223);
var state_31275__$1 = (function (){var statearr_31300 = state_31275;
(statearr_31300[(19)] = inst_31227);

return statearr_31300;
})();
var statearr_31301_31376 = state_31275__$1;
(statearr_31301_31376[(2)] = inst_31228);

(statearr_31301_31376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (32))){
var inst_31215 = (state_31275[(20)]);
var inst_31218 = (state_31275[(11)]);
var inst_31216 = (state_31275[(12)]);
var inst_31217 = (state_31275[(21)]);
var inst_31230 = (state_31275[(2)]);
var inst_31231 = (inst_31218 + (1));
var tmp31296 = inst_31215;
var tmp31297 = inst_31216;
var tmp31298 = inst_31217;
var inst_31215__$1 = tmp31296;
var inst_31216__$1 = tmp31297;
var inst_31217__$1 = tmp31298;
var inst_31218__$1 = inst_31231;
var state_31275__$1 = (function (){var statearr_31302 = state_31275;
(statearr_31302[(20)] = inst_31215__$1);

(statearr_31302[(22)] = inst_31230);

(statearr_31302[(11)] = inst_31218__$1);

(statearr_31302[(12)] = inst_31216__$1);

(statearr_31302[(21)] = inst_31217__$1);

return statearr_31302;
})();
var statearr_31303_31377 = state_31275__$1;
(statearr_31303_31377[(2)] = null);

(statearr_31303_31377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (40))){
var inst_31243 = (state_31275[(23)]);
var inst_31247 = done.call(null,null);
var inst_31248 = cljs.core.async.untap_STAR_.call(null,m,inst_31243);
var state_31275__$1 = (function (){var statearr_31304 = state_31275;
(statearr_31304[(24)] = inst_31247);

return statearr_31304;
})();
var statearr_31305_31378 = state_31275__$1;
(statearr_31305_31378[(2)] = inst_31248);

(statearr_31305_31378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (33))){
var inst_31234 = (state_31275[(25)]);
var inst_31236 = cljs.core.chunked_seq_QMARK_.call(null,inst_31234);
var state_31275__$1 = state_31275;
if(inst_31236){
var statearr_31306_31379 = state_31275__$1;
(statearr_31306_31379[(1)] = (36));

} else {
var statearr_31307_31380 = state_31275__$1;
(statearr_31307_31380[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (13))){
var inst_31166 = (state_31275[(26)]);
var inst_31169 = cljs.core.async.close_BANG_.call(null,inst_31166);
var state_31275__$1 = state_31275;
var statearr_31308_31381 = state_31275__$1;
(statearr_31308_31381[(2)] = inst_31169);

(statearr_31308_31381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (22))){
var inst_31187 = (state_31275[(8)]);
var inst_31190 = cljs.core.async.close_BANG_.call(null,inst_31187);
var state_31275__$1 = state_31275;
var statearr_31309_31382 = state_31275__$1;
(statearr_31309_31382[(2)] = inst_31190);

(statearr_31309_31382[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (36))){
var inst_31234 = (state_31275[(25)]);
var inst_31238 = cljs.core.chunk_first.call(null,inst_31234);
var inst_31239 = cljs.core.chunk_rest.call(null,inst_31234);
var inst_31240 = cljs.core.count.call(null,inst_31238);
var inst_31215 = inst_31239;
var inst_31216 = inst_31238;
var inst_31217 = inst_31240;
var inst_31218 = (0);
var state_31275__$1 = (function (){var statearr_31310 = state_31275;
(statearr_31310[(20)] = inst_31215);

(statearr_31310[(11)] = inst_31218);

(statearr_31310[(12)] = inst_31216);

(statearr_31310[(21)] = inst_31217);

return statearr_31310;
})();
var statearr_31311_31383 = state_31275__$1;
(statearr_31311_31383[(2)] = null);

(statearr_31311_31383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (41))){
var inst_31234 = (state_31275[(25)]);
var inst_31250 = (state_31275[(2)]);
var inst_31251 = cljs.core.next.call(null,inst_31234);
var inst_31215 = inst_31251;
var inst_31216 = null;
var inst_31217 = (0);
var inst_31218 = (0);
var state_31275__$1 = (function (){var statearr_31312 = state_31275;
(statearr_31312[(20)] = inst_31215);

(statearr_31312[(11)] = inst_31218);

(statearr_31312[(12)] = inst_31216);

(statearr_31312[(21)] = inst_31217);

(statearr_31312[(27)] = inst_31250);

return statearr_31312;
})();
var statearr_31313_31384 = state_31275__$1;
(statearr_31313_31384[(2)] = null);

(statearr_31313_31384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (43))){
var state_31275__$1 = state_31275;
var statearr_31314_31385 = state_31275__$1;
(statearr_31314_31385[(2)] = null);

(statearr_31314_31385[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (29))){
var inst_31259 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31315_31386 = state_31275__$1;
(statearr_31315_31386[(2)] = inst_31259);

(statearr_31315_31386[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (44))){
var inst_31268 = (state_31275[(2)]);
var state_31275__$1 = (function (){var statearr_31316 = state_31275;
(statearr_31316[(28)] = inst_31268);

return statearr_31316;
})();
var statearr_31317_31387 = state_31275__$1;
(statearr_31317_31387[(2)] = null);

(statearr_31317_31387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (6))){
var inst_31207 = (state_31275[(29)]);
var inst_31206 = cljs.core.deref.call(null,cs);
var inst_31207__$1 = cljs.core.keys.call(null,inst_31206);
var inst_31208 = cljs.core.count.call(null,inst_31207__$1);
var inst_31209 = cljs.core.reset_BANG_.call(null,dctr,inst_31208);
var inst_31214 = cljs.core.seq.call(null,inst_31207__$1);
var inst_31215 = inst_31214;
var inst_31216 = null;
var inst_31217 = (0);
var inst_31218 = (0);
var state_31275__$1 = (function (){var statearr_31318 = state_31275;
(statearr_31318[(20)] = inst_31215);

(statearr_31318[(29)] = inst_31207__$1);

(statearr_31318[(11)] = inst_31218);

(statearr_31318[(12)] = inst_31216);

(statearr_31318[(30)] = inst_31209);

(statearr_31318[(21)] = inst_31217);

return statearr_31318;
})();
var statearr_31319_31388 = state_31275__$1;
(statearr_31319_31388[(2)] = null);

(statearr_31319_31388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (28))){
var inst_31215 = (state_31275[(20)]);
var inst_31234 = (state_31275[(25)]);
var inst_31234__$1 = cljs.core.seq.call(null,inst_31215);
var state_31275__$1 = (function (){var statearr_31320 = state_31275;
(statearr_31320[(25)] = inst_31234__$1);

return statearr_31320;
})();
if(inst_31234__$1){
var statearr_31321_31389 = state_31275__$1;
(statearr_31321_31389[(1)] = (33));

} else {
var statearr_31322_31390 = state_31275__$1;
(statearr_31322_31390[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (25))){
var inst_31218 = (state_31275[(11)]);
var inst_31217 = (state_31275[(21)]);
var inst_31220 = (inst_31218 < inst_31217);
var inst_31221 = inst_31220;
var state_31275__$1 = state_31275;
if(cljs.core.truth_(inst_31221)){
var statearr_31323_31391 = state_31275__$1;
(statearr_31323_31391[(1)] = (27));

} else {
var statearr_31324_31392 = state_31275__$1;
(statearr_31324_31392[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (34))){
var state_31275__$1 = state_31275;
var statearr_31325_31393 = state_31275__$1;
(statearr_31325_31393[(2)] = null);

(statearr_31325_31393[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (17))){
var state_31275__$1 = state_31275;
var statearr_31326_31394 = state_31275__$1;
(statearr_31326_31394[(2)] = null);

(statearr_31326_31394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (3))){
var inst_31273 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31275__$1,inst_31273);
} else {
if((state_val_31276 === (12))){
var inst_31202 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31327_31395 = state_31275__$1;
(statearr_31327_31395[(2)] = inst_31202);

(statearr_31327_31395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (2))){
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31275__$1,(4),ch);
} else {
if((state_val_31276 === (23))){
var state_31275__$1 = state_31275;
var statearr_31328_31396 = state_31275__$1;
(statearr_31328_31396[(2)] = null);

(statearr_31328_31396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (35))){
var inst_31257 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31329_31397 = state_31275__$1;
(statearr_31329_31397[(2)] = inst_31257);

(statearr_31329_31397[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (19))){
var inst_31176 = (state_31275[(7)]);
var inst_31180 = cljs.core.chunk_first.call(null,inst_31176);
var inst_31181 = cljs.core.chunk_rest.call(null,inst_31176);
var inst_31182 = cljs.core.count.call(null,inst_31180);
var inst_31156 = inst_31181;
var inst_31157 = inst_31180;
var inst_31158 = inst_31182;
var inst_31159 = (0);
var state_31275__$1 = (function (){var statearr_31330 = state_31275;
(statearr_31330[(13)] = inst_31159);

(statearr_31330[(14)] = inst_31157);

(statearr_31330[(15)] = inst_31158);

(statearr_31330[(17)] = inst_31156);

return statearr_31330;
})();
var statearr_31331_31398 = state_31275__$1;
(statearr_31331_31398[(2)] = null);

(statearr_31331_31398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (11))){
var inst_31176 = (state_31275[(7)]);
var inst_31156 = (state_31275[(17)]);
var inst_31176__$1 = cljs.core.seq.call(null,inst_31156);
var state_31275__$1 = (function (){var statearr_31332 = state_31275;
(statearr_31332[(7)] = inst_31176__$1);

return statearr_31332;
})();
if(inst_31176__$1){
var statearr_31333_31399 = state_31275__$1;
(statearr_31333_31399[(1)] = (16));

} else {
var statearr_31334_31400 = state_31275__$1;
(statearr_31334_31400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (9))){
var inst_31204 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31335_31401 = state_31275__$1;
(statearr_31335_31401[(2)] = inst_31204);

(statearr_31335_31401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (5))){
var inst_31154 = cljs.core.deref.call(null,cs);
var inst_31155 = cljs.core.seq.call(null,inst_31154);
var inst_31156 = inst_31155;
var inst_31157 = null;
var inst_31158 = (0);
var inst_31159 = (0);
var state_31275__$1 = (function (){var statearr_31336 = state_31275;
(statearr_31336[(13)] = inst_31159);

(statearr_31336[(14)] = inst_31157);

(statearr_31336[(15)] = inst_31158);

(statearr_31336[(17)] = inst_31156);

return statearr_31336;
})();
var statearr_31337_31402 = state_31275__$1;
(statearr_31337_31402[(2)] = null);

(statearr_31337_31402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (14))){
var state_31275__$1 = state_31275;
var statearr_31338_31403 = state_31275__$1;
(statearr_31338_31403[(2)] = null);

(statearr_31338_31403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (45))){
var inst_31265 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31339_31404 = state_31275__$1;
(statearr_31339_31404[(2)] = inst_31265);

(statearr_31339_31404[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (26))){
var inst_31207 = (state_31275[(29)]);
var inst_31261 = (state_31275[(2)]);
var inst_31262 = cljs.core.seq.call(null,inst_31207);
var state_31275__$1 = (function (){var statearr_31340 = state_31275;
(statearr_31340[(31)] = inst_31261);

return statearr_31340;
})();
if(inst_31262){
var statearr_31341_31405 = state_31275__$1;
(statearr_31341_31405[(1)] = (42));

} else {
var statearr_31342_31406 = state_31275__$1;
(statearr_31342_31406[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (16))){
var inst_31176 = (state_31275[(7)]);
var inst_31178 = cljs.core.chunked_seq_QMARK_.call(null,inst_31176);
var state_31275__$1 = state_31275;
if(inst_31178){
var statearr_31343_31407 = state_31275__$1;
(statearr_31343_31407[(1)] = (19));

} else {
var statearr_31344_31408 = state_31275__$1;
(statearr_31344_31408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (38))){
var inst_31254 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31345_31409 = state_31275__$1;
(statearr_31345_31409[(2)] = inst_31254);

(statearr_31345_31409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (30))){
var state_31275__$1 = state_31275;
var statearr_31346_31410 = state_31275__$1;
(statearr_31346_31410[(2)] = null);

(statearr_31346_31410[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (10))){
var inst_31159 = (state_31275[(13)]);
var inst_31157 = (state_31275[(14)]);
var inst_31165 = cljs.core._nth.call(null,inst_31157,inst_31159);
var inst_31166 = cljs.core.nth.call(null,inst_31165,(0),null);
var inst_31167 = cljs.core.nth.call(null,inst_31165,(1),null);
var state_31275__$1 = (function (){var statearr_31347 = state_31275;
(statearr_31347[(26)] = inst_31166);

return statearr_31347;
})();
if(cljs.core.truth_(inst_31167)){
var statearr_31348_31411 = state_31275__$1;
(statearr_31348_31411[(1)] = (13));

} else {
var statearr_31349_31412 = state_31275__$1;
(statearr_31349_31412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (18))){
var inst_31200 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31350_31413 = state_31275__$1;
(statearr_31350_31413[(2)] = inst_31200);

(statearr_31350_31413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (42))){
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31275__$1,(45),dchan);
} else {
if((state_val_31276 === (37))){
var inst_31147 = (state_31275[(10)]);
var inst_31243 = (state_31275[(23)]);
var inst_31234 = (state_31275[(25)]);
var inst_31243__$1 = cljs.core.first.call(null,inst_31234);
var inst_31244 = cljs.core.async.put_BANG_.call(null,inst_31243__$1,inst_31147,done);
var state_31275__$1 = (function (){var statearr_31351 = state_31275;
(statearr_31351[(23)] = inst_31243__$1);

return statearr_31351;
})();
if(cljs.core.truth_(inst_31244)){
var statearr_31352_31414 = state_31275__$1;
(statearr_31352_31414[(1)] = (39));

} else {
var statearr_31353_31415 = state_31275__$1;
(statearr_31353_31415[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (8))){
var inst_31159 = (state_31275[(13)]);
var inst_31158 = (state_31275[(15)]);
var inst_31161 = (inst_31159 < inst_31158);
var inst_31162 = inst_31161;
var state_31275__$1 = state_31275;
if(cljs.core.truth_(inst_31162)){
var statearr_31354_31416 = state_31275__$1;
(statearr_31354_31416[(1)] = (10));

} else {
var statearr_31355_31417 = state_31275__$1;
(statearr_31355_31417[(1)] = (11));

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
});})(c__30056__auto___31363,cs,m,dchan,dctr,done))
;
return ((function (switch__29944__auto__,c__30056__auto___31363,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29945__auto__ = null;
var cljs$core$async$mult_$_state_machine__29945__auto____0 = (function (){
var statearr_31359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31359[(0)] = cljs$core$async$mult_$_state_machine__29945__auto__);

(statearr_31359[(1)] = (1));

return statearr_31359;
});
var cljs$core$async$mult_$_state_machine__29945__auto____1 = (function (state_31275){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_31275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e31360){if((e31360 instanceof Object)){
var ex__29948__auto__ = e31360;
var statearr_31361_31418 = state_31275;
(statearr_31361_31418[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31419 = state_31275;
state_31275 = G__31419;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29945__auto__ = function(state_31275){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29945__auto____1.call(this,state_31275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29945__auto____0;
cljs$core$async$mult_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29945__auto____1;
return cljs$core$async$mult_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___31363,cs,m,dchan,dctr,done))
})();
var state__30058__auto__ = (function (){var statearr_31362 = f__30057__auto__.call(null);
(statearr_31362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___31363);

return statearr_31362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___31363,cs,m,dchan,dctr,done))
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
var args31420 = [];
var len__27062__auto___31423 = arguments.length;
var i__27063__auto___31424 = (0);
while(true){
if((i__27063__auto___31424 < len__27062__auto___31423)){
args31420.push((arguments[i__27063__auto___31424]));

var G__31425 = (i__27063__auto___31424 + (1));
i__27063__auto___31424 = G__31425;
continue;
} else {
}
break;
}

var G__31422 = args31420.length;
switch (G__31422) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31420.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26659__auto__ = (((m == null))?null:m);
var m__26660__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,m,ch);
} else {
var m__26660__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26659__auto__ = (((m == null))?null:m);
var m__26660__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,m,ch);
} else {
var m__26660__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26659__auto__ = (((m == null))?null:m);
var m__26660__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,m);
} else {
var m__26660__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26659__auto__ = (((m == null))?null:m);
var m__26660__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,m,state_map);
} else {
var m__26660__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26659__auto__ = (((m == null))?null:m);
var m__26660__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,m,mode);
} else {
var m__26660__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27069__auto__ = [];
var len__27062__auto___31437 = arguments.length;
var i__27063__auto___31438 = (0);
while(true){
if((i__27063__auto___31438 < len__27062__auto___31437)){
args__27069__auto__.push((arguments[i__27063__auto___31438]));

var G__31439 = (i__27063__auto___31438 + (1));
i__27063__auto___31438 = G__31439;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((3) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27070__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31431){
var map__31432 = p__31431;
var map__31432__$1 = ((((!((map__31432 == null)))?((((map__31432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31432):map__31432);
var opts = map__31432__$1;
var statearr_31434_31440 = state;
(statearr_31434_31440[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31432,map__31432__$1,opts){
return (function (val){
var statearr_31435_31441 = state;
(statearr_31435_31441[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31432,map__31432__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31436_31442 = state;
(statearr_31436_31442[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31427){
var G__31428 = cljs.core.first.call(null,seq31427);
var seq31427__$1 = cljs.core.next.call(null,seq31427);
var G__31429 = cljs.core.first.call(null,seq31427__$1);
var seq31427__$2 = cljs.core.next.call(null,seq31427__$1);
var G__31430 = cljs.core.first.call(null,seq31427__$2);
var seq31427__$3 = cljs.core.next.call(null,seq31427__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31428,G__31429,G__31430,seq31427__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31606 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31607){
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
this.meta31607 = meta31607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31608,meta31607__$1){
var self__ = this;
var _31608__$1 = this;
return (new cljs.core.async.t_cljs$core$async31606(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31607__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31608){
var self__ = this;
var _31608__$1 = this;
return self__.meta31607;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31607","meta31607",-1934416836,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31606";

cljs.core.async.t_cljs$core$async31606.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async31606");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31606 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31606(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31607){
return (new cljs.core.async.t_cljs$core$async31606(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31607));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31606(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30056__auto___31769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___31769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___31769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31706){
var state_val_31707 = (state_31706[(1)]);
if((state_val_31707 === (7))){
var inst_31624 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31708_31770 = state_31706__$1;
(statearr_31708_31770[(2)] = inst_31624);

(statearr_31708_31770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (20))){
var inst_31636 = (state_31706[(7)]);
var state_31706__$1 = state_31706;
var statearr_31709_31771 = state_31706__$1;
(statearr_31709_31771[(2)] = inst_31636);

(statearr_31709_31771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (27))){
var state_31706__$1 = state_31706;
var statearr_31710_31772 = state_31706__$1;
(statearr_31710_31772[(2)] = null);

(statearr_31710_31772[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (1))){
var inst_31612 = (state_31706[(8)]);
var inst_31612__$1 = calc_state.call(null);
var inst_31614 = (inst_31612__$1 == null);
var inst_31615 = cljs.core.not.call(null,inst_31614);
var state_31706__$1 = (function (){var statearr_31711 = state_31706;
(statearr_31711[(8)] = inst_31612__$1);

return statearr_31711;
})();
if(inst_31615){
var statearr_31712_31773 = state_31706__$1;
(statearr_31712_31773[(1)] = (2));

} else {
var statearr_31713_31774 = state_31706__$1;
(statearr_31713_31774[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (24))){
var inst_31659 = (state_31706[(9)]);
var inst_31666 = (state_31706[(10)]);
var inst_31680 = (state_31706[(11)]);
var inst_31680__$1 = inst_31659.call(null,inst_31666);
var state_31706__$1 = (function (){var statearr_31714 = state_31706;
(statearr_31714[(11)] = inst_31680__$1);

return statearr_31714;
})();
if(cljs.core.truth_(inst_31680__$1)){
var statearr_31715_31775 = state_31706__$1;
(statearr_31715_31775[(1)] = (29));

} else {
var statearr_31716_31776 = state_31706__$1;
(statearr_31716_31776[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (4))){
var inst_31627 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31627)){
var statearr_31717_31777 = state_31706__$1;
(statearr_31717_31777[(1)] = (8));

} else {
var statearr_31718_31778 = state_31706__$1;
(statearr_31718_31778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (15))){
var inst_31653 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31653)){
var statearr_31719_31779 = state_31706__$1;
(statearr_31719_31779[(1)] = (19));

} else {
var statearr_31720_31780 = state_31706__$1;
(statearr_31720_31780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (21))){
var inst_31658 = (state_31706[(12)]);
var inst_31658__$1 = (state_31706[(2)]);
var inst_31659 = cljs.core.get.call(null,inst_31658__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31660 = cljs.core.get.call(null,inst_31658__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31661 = cljs.core.get.call(null,inst_31658__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31706__$1 = (function (){var statearr_31721 = state_31706;
(statearr_31721[(9)] = inst_31659);

(statearr_31721[(12)] = inst_31658__$1);

(statearr_31721[(13)] = inst_31660);

return statearr_31721;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31706__$1,(22),inst_31661);
} else {
if((state_val_31707 === (31))){
var inst_31688 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31688)){
var statearr_31722_31781 = state_31706__$1;
(statearr_31722_31781[(1)] = (32));

} else {
var statearr_31723_31782 = state_31706__$1;
(statearr_31723_31782[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (32))){
var inst_31665 = (state_31706[(14)]);
var state_31706__$1 = state_31706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31706__$1,(35),out,inst_31665);
} else {
if((state_val_31707 === (33))){
var inst_31658 = (state_31706[(12)]);
var inst_31636 = inst_31658;
var state_31706__$1 = (function (){var statearr_31724 = state_31706;
(statearr_31724[(7)] = inst_31636);

return statearr_31724;
})();
var statearr_31725_31783 = state_31706__$1;
(statearr_31725_31783[(2)] = null);

(statearr_31725_31783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (13))){
var inst_31636 = (state_31706[(7)]);
var inst_31643 = inst_31636.cljs$lang$protocol_mask$partition0$;
var inst_31644 = (inst_31643 & (64));
var inst_31645 = inst_31636.cljs$core$ISeq$;
var inst_31646 = (inst_31644) || (inst_31645);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31646)){
var statearr_31726_31784 = state_31706__$1;
(statearr_31726_31784[(1)] = (16));

} else {
var statearr_31727_31785 = state_31706__$1;
(statearr_31727_31785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (22))){
var inst_31665 = (state_31706[(14)]);
var inst_31666 = (state_31706[(10)]);
var inst_31664 = (state_31706[(2)]);
var inst_31665__$1 = cljs.core.nth.call(null,inst_31664,(0),null);
var inst_31666__$1 = cljs.core.nth.call(null,inst_31664,(1),null);
var inst_31667 = (inst_31665__$1 == null);
var inst_31668 = cljs.core._EQ_.call(null,inst_31666__$1,change);
var inst_31669 = (inst_31667) || (inst_31668);
var state_31706__$1 = (function (){var statearr_31728 = state_31706;
(statearr_31728[(14)] = inst_31665__$1);

(statearr_31728[(10)] = inst_31666__$1);

return statearr_31728;
})();
if(cljs.core.truth_(inst_31669)){
var statearr_31729_31786 = state_31706__$1;
(statearr_31729_31786[(1)] = (23));

} else {
var statearr_31730_31787 = state_31706__$1;
(statearr_31730_31787[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (36))){
var inst_31658 = (state_31706[(12)]);
var inst_31636 = inst_31658;
var state_31706__$1 = (function (){var statearr_31731 = state_31706;
(statearr_31731[(7)] = inst_31636);

return statearr_31731;
})();
var statearr_31732_31788 = state_31706__$1;
(statearr_31732_31788[(2)] = null);

(statearr_31732_31788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (29))){
var inst_31680 = (state_31706[(11)]);
var state_31706__$1 = state_31706;
var statearr_31733_31789 = state_31706__$1;
(statearr_31733_31789[(2)] = inst_31680);

(statearr_31733_31789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (6))){
var state_31706__$1 = state_31706;
var statearr_31734_31790 = state_31706__$1;
(statearr_31734_31790[(2)] = false);

(statearr_31734_31790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (28))){
var inst_31676 = (state_31706[(2)]);
var inst_31677 = calc_state.call(null);
var inst_31636 = inst_31677;
var state_31706__$1 = (function (){var statearr_31735 = state_31706;
(statearr_31735[(7)] = inst_31636);

(statearr_31735[(15)] = inst_31676);

return statearr_31735;
})();
var statearr_31736_31791 = state_31706__$1;
(statearr_31736_31791[(2)] = null);

(statearr_31736_31791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (25))){
var inst_31702 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31737_31792 = state_31706__$1;
(statearr_31737_31792[(2)] = inst_31702);

(statearr_31737_31792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (34))){
var inst_31700 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31738_31793 = state_31706__$1;
(statearr_31738_31793[(2)] = inst_31700);

(statearr_31738_31793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (17))){
var state_31706__$1 = state_31706;
var statearr_31739_31794 = state_31706__$1;
(statearr_31739_31794[(2)] = false);

(statearr_31739_31794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (3))){
var state_31706__$1 = state_31706;
var statearr_31740_31795 = state_31706__$1;
(statearr_31740_31795[(2)] = false);

(statearr_31740_31795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (12))){
var inst_31704 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31706__$1,inst_31704);
} else {
if((state_val_31707 === (2))){
var inst_31612 = (state_31706[(8)]);
var inst_31617 = inst_31612.cljs$lang$protocol_mask$partition0$;
var inst_31618 = (inst_31617 & (64));
var inst_31619 = inst_31612.cljs$core$ISeq$;
var inst_31620 = (inst_31618) || (inst_31619);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31620)){
var statearr_31741_31796 = state_31706__$1;
(statearr_31741_31796[(1)] = (5));

} else {
var statearr_31742_31797 = state_31706__$1;
(statearr_31742_31797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (23))){
var inst_31665 = (state_31706[(14)]);
var inst_31671 = (inst_31665 == null);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31671)){
var statearr_31743_31798 = state_31706__$1;
(statearr_31743_31798[(1)] = (26));

} else {
var statearr_31744_31799 = state_31706__$1;
(statearr_31744_31799[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (35))){
var inst_31691 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31691)){
var statearr_31745_31800 = state_31706__$1;
(statearr_31745_31800[(1)] = (36));

} else {
var statearr_31746_31801 = state_31706__$1;
(statearr_31746_31801[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (19))){
var inst_31636 = (state_31706[(7)]);
var inst_31655 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31636);
var state_31706__$1 = state_31706;
var statearr_31747_31802 = state_31706__$1;
(statearr_31747_31802[(2)] = inst_31655);

(statearr_31747_31802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (11))){
var inst_31636 = (state_31706[(7)]);
var inst_31640 = (inst_31636 == null);
var inst_31641 = cljs.core.not.call(null,inst_31640);
var state_31706__$1 = state_31706;
if(inst_31641){
var statearr_31748_31803 = state_31706__$1;
(statearr_31748_31803[(1)] = (13));

} else {
var statearr_31749_31804 = state_31706__$1;
(statearr_31749_31804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (9))){
var inst_31612 = (state_31706[(8)]);
var state_31706__$1 = state_31706;
var statearr_31750_31805 = state_31706__$1;
(statearr_31750_31805[(2)] = inst_31612);

(statearr_31750_31805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (5))){
var state_31706__$1 = state_31706;
var statearr_31751_31806 = state_31706__$1;
(statearr_31751_31806[(2)] = true);

(statearr_31751_31806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (14))){
var state_31706__$1 = state_31706;
var statearr_31752_31807 = state_31706__$1;
(statearr_31752_31807[(2)] = false);

(statearr_31752_31807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (26))){
var inst_31666 = (state_31706[(10)]);
var inst_31673 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31666);
var state_31706__$1 = state_31706;
var statearr_31753_31808 = state_31706__$1;
(statearr_31753_31808[(2)] = inst_31673);

(statearr_31753_31808[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (16))){
var state_31706__$1 = state_31706;
var statearr_31754_31809 = state_31706__$1;
(statearr_31754_31809[(2)] = true);

(statearr_31754_31809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (38))){
var inst_31696 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31755_31810 = state_31706__$1;
(statearr_31755_31810[(2)] = inst_31696);

(statearr_31755_31810[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (30))){
var inst_31659 = (state_31706[(9)]);
var inst_31660 = (state_31706[(13)]);
var inst_31666 = (state_31706[(10)]);
var inst_31683 = cljs.core.empty_QMARK_.call(null,inst_31659);
var inst_31684 = inst_31660.call(null,inst_31666);
var inst_31685 = cljs.core.not.call(null,inst_31684);
var inst_31686 = (inst_31683) && (inst_31685);
var state_31706__$1 = state_31706;
var statearr_31756_31811 = state_31706__$1;
(statearr_31756_31811[(2)] = inst_31686);

(statearr_31756_31811[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (10))){
var inst_31612 = (state_31706[(8)]);
var inst_31632 = (state_31706[(2)]);
var inst_31633 = cljs.core.get.call(null,inst_31632,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31634 = cljs.core.get.call(null,inst_31632,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31635 = cljs.core.get.call(null,inst_31632,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31636 = inst_31612;
var state_31706__$1 = (function (){var statearr_31757 = state_31706;
(statearr_31757[(7)] = inst_31636);

(statearr_31757[(16)] = inst_31635);

(statearr_31757[(17)] = inst_31634);

(statearr_31757[(18)] = inst_31633);

return statearr_31757;
})();
var statearr_31758_31812 = state_31706__$1;
(statearr_31758_31812[(2)] = null);

(statearr_31758_31812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (18))){
var inst_31650 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31759_31813 = state_31706__$1;
(statearr_31759_31813[(2)] = inst_31650);

(statearr_31759_31813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (37))){
var state_31706__$1 = state_31706;
var statearr_31760_31814 = state_31706__$1;
(statearr_31760_31814[(2)] = null);

(statearr_31760_31814[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (8))){
var inst_31612 = (state_31706[(8)]);
var inst_31629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31612);
var state_31706__$1 = state_31706;
var statearr_31761_31815 = state_31706__$1;
(statearr_31761_31815[(2)] = inst_31629);

(statearr_31761_31815[(1)] = (10));


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
});})(c__30056__auto___31769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29944__auto__,c__30056__auto___31769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29945__auto__ = null;
var cljs$core$async$mix_$_state_machine__29945__auto____0 = (function (){
var statearr_31765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31765[(0)] = cljs$core$async$mix_$_state_machine__29945__auto__);

(statearr_31765[(1)] = (1));

return statearr_31765;
});
var cljs$core$async$mix_$_state_machine__29945__auto____1 = (function (state_31706){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_31706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e31766){if((e31766 instanceof Object)){
var ex__29948__auto__ = e31766;
var statearr_31767_31816 = state_31706;
(statearr_31767_31816[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31817 = state_31706;
state_31706 = G__31817;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29945__auto__ = function(state_31706){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29945__auto____1.call(this,state_31706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29945__auto____0;
cljs$core$async$mix_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29945__auto____1;
return cljs$core$async$mix_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___31769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30058__auto__ = (function (){var statearr_31768 = f__30057__auto__.call(null);
(statearr_31768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___31769);

return statearr_31768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___31769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26659__auto__ = (((p == null))?null:p);
var m__26660__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26660__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26659__auto__ = (((p == null))?null:p);
var m__26660__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,p,v,ch);
} else {
var m__26660__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31818 = [];
var len__27062__auto___31821 = arguments.length;
var i__27063__auto___31822 = (0);
while(true){
if((i__27063__auto___31822 < len__27062__auto___31821)){
args31818.push((arguments[i__27063__auto___31822]));

var G__31823 = (i__27063__auto___31822 + (1));
i__27063__auto___31822 = G__31823;
continue;
} else {
}
break;
}

var G__31820 = args31818.length;
switch (G__31820) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31818.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26659__auto__ = (((p == null))?null:p);
var m__26660__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,p);
} else {
var m__26660__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26659__auto__ = (((p == null))?null:p);
var m__26660__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26659__auto__)]);
if(!((m__26660__auto__ == null))){
return m__26660__auto__.call(null,p,v);
} else {
var m__26660__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26660__auto____$1 == null))){
return m__26660__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args31826 = [];
var len__27062__auto___31951 = arguments.length;
var i__27063__auto___31952 = (0);
while(true){
if((i__27063__auto___31952 < len__27062__auto___31951)){
args31826.push((arguments[i__27063__auto___31952]));

var G__31953 = (i__27063__auto___31952 + (1));
i__27063__auto___31952 = G__31953;
continue;
} else {
}
break;
}

var G__31828 = args31826.length;
switch (G__31828) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31826.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26004__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26004__auto__,mults){
return (function (p1__31825_SHARP_){
if(cljs.core.truth_(p1__31825_SHARP_.call(null,topic))){
return p1__31825_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31825_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26004__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31829 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31830){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31830 = meta31830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31831,meta31830__$1){
var self__ = this;
var _31831__$1 = this;
return (new cljs.core.async.t_cljs$core$async31829(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31830__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31831){
var self__ = this;
var _31831__$1 = this;
return self__.meta31830;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31829.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31830","meta31830",-1667563617,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31829";

cljs.core.async.t_cljs$core$async31829.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async31829");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31829 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31829(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31830){
return (new cljs.core.async.t_cljs$core$async31829(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31830));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31829(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30056__auto___31955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___31955,mults,ensure_mult,p){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___31955,mults,ensure_mult,p){
return (function (state_31903){
var state_val_31904 = (state_31903[(1)]);
if((state_val_31904 === (7))){
var inst_31899 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31905_31956 = state_31903__$1;
(statearr_31905_31956[(2)] = inst_31899);

(statearr_31905_31956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (20))){
var state_31903__$1 = state_31903;
var statearr_31906_31957 = state_31903__$1;
(statearr_31906_31957[(2)] = null);

(statearr_31906_31957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (1))){
var state_31903__$1 = state_31903;
var statearr_31907_31958 = state_31903__$1;
(statearr_31907_31958[(2)] = null);

(statearr_31907_31958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (24))){
var inst_31882 = (state_31903[(7)]);
var inst_31891 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31882);
var state_31903__$1 = state_31903;
var statearr_31908_31959 = state_31903__$1;
(statearr_31908_31959[(2)] = inst_31891);

(statearr_31908_31959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (4))){
var inst_31834 = (state_31903[(8)]);
var inst_31834__$1 = (state_31903[(2)]);
var inst_31835 = (inst_31834__$1 == null);
var state_31903__$1 = (function (){var statearr_31909 = state_31903;
(statearr_31909[(8)] = inst_31834__$1);

return statearr_31909;
})();
if(cljs.core.truth_(inst_31835)){
var statearr_31910_31960 = state_31903__$1;
(statearr_31910_31960[(1)] = (5));

} else {
var statearr_31911_31961 = state_31903__$1;
(statearr_31911_31961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (15))){
var inst_31876 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31912_31962 = state_31903__$1;
(statearr_31912_31962[(2)] = inst_31876);

(statearr_31912_31962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (21))){
var inst_31896 = (state_31903[(2)]);
var state_31903__$1 = (function (){var statearr_31913 = state_31903;
(statearr_31913[(9)] = inst_31896);

return statearr_31913;
})();
var statearr_31914_31963 = state_31903__$1;
(statearr_31914_31963[(2)] = null);

(statearr_31914_31963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (13))){
var inst_31858 = (state_31903[(10)]);
var inst_31860 = cljs.core.chunked_seq_QMARK_.call(null,inst_31858);
var state_31903__$1 = state_31903;
if(inst_31860){
var statearr_31915_31964 = state_31903__$1;
(statearr_31915_31964[(1)] = (16));

} else {
var statearr_31916_31965 = state_31903__$1;
(statearr_31916_31965[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (22))){
var inst_31888 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
if(cljs.core.truth_(inst_31888)){
var statearr_31917_31966 = state_31903__$1;
(statearr_31917_31966[(1)] = (23));

} else {
var statearr_31918_31967 = state_31903__$1;
(statearr_31918_31967[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (6))){
var inst_31834 = (state_31903[(8)]);
var inst_31884 = (state_31903[(11)]);
var inst_31882 = (state_31903[(7)]);
var inst_31882__$1 = topic_fn.call(null,inst_31834);
var inst_31883 = cljs.core.deref.call(null,mults);
var inst_31884__$1 = cljs.core.get.call(null,inst_31883,inst_31882__$1);
var state_31903__$1 = (function (){var statearr_31919 = state_31903;
(statearr_31919[(11)] = inst_31884__$1);

(statearr_31919[(7)] = inst_31882__$1);

return statearr_31919;
})();
if(cljs.core.truth_(inst_31884__$1)){
var statearr_31920_31968 = state_31903__$1;
(statearr_31920_31968[(1)] = (19));

} else {
var statearr_31921_31969 = state_31903__$1;
(statearr_31921_31969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (25))){
var inst_31893 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31922_31970 = state_31903__$1;
(statearr_31922_31970[(2)] = inst_31893);

(statearr_31922_31970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (17))){
var inst_31858 = (state_31903[(10)]);
var inst_31867 = cljs.core.first.call(null,inst_31858);
var inst_31868 = cljs.core.async.muxch_STAR_.call(null,inst_31867);
var inst_31869 = cljs.core.async.close_BANG_.call(null,inst_31868);
var inst_31870 = cljs.core.next.call(null,inst_31858);
var inst_31844 = inst_31870;
var inst_31845 = null;
var inst_31846 = (0);
var inst_31847 = (0);
var state_31903__$1 = (function (){var statearr_31923 = state_31903;
(statearr_31923[(12)] = inst_31846);

(statearr_31923[(13)] = inst_31844);

(statearr_31923[(14)] = inst_31869);

(statearr_31923[(15)] = inst_31845);

(statearr_31923[(16)] = inst_31847);

return statearr_31923;
})();
var statearr_31924_31971 = state_31903__$1;
(statearr_31924_31971[(2)] = null);

(statearr_31924_31971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (3))){
var inst_31901 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31903__$1,inst_31901);
} else {
if((state_val_31904 === (12))){
var inst_31878 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31925_31972 = state_31903__$1;
(statearr_31925_31972[(2)] = inst_31878);

(statearr_31925_31972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (2))){
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31903__$1,(4),ch);
} else {
if((state_val_31904 === (23))){
var state_31903__$1 = state_31903;
var statearr_31926_31973 = state_31903__$1;
(statearr_31926_31973[(2)] = null);

(statearr_31926_31973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (19))){
var inst_31834 = (state_31903[(8)]);
var inst_31884 = (state_31903[(11)]);
var inst_31886 = cljs.core.async.muxch_STAR_.call(null,inst_31884);
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31903__$1,(22),inst_31886,inst_31834);
} else {
if((state_val_31904 === (11))){
var inst_31844 = (state_31903[(13)]);
var inst_31858 = (state_31903[(10)]);
var inst_31858__$1 = cljs.core.seq.call(null,inst_31844);
var state_31903__$1 = (function (){var statearr_31927 = state_31903;
(statearr_31927[(10)] = inst_31858__$1);

return statearr_31927;
})();
if(inst_31858__$1){
var statearr_31928_31974 = state_31903__$1;
(statearr_31928_31974[(1)] = (13));

} else {
var statearr_31929_31975 = state_31903__$1;
(statearr_31929_31975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (9))){
var inst_31880 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31930_31976 = state_31903__$1;
(statearr_31930_31976[(2)] = inst_31880);

(statearr_31930_31976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (5))){
var inst_31841 = cljs.core.deref.call(null,mults);
var inst_31842 = cljs.core.vals.call(null,inst_31841);
var inst_31843 = cljs.core.seq.call(null,inst_31842);
var inst_31844 = inst_31843;
var inst_31845 = null;
var inst_31846 = (0);
var inst_31847 = (0);
var state_31903__$1 = (function (){var statearr_31931 = state_31903;
(statearr_31931[(12)] = inst_31846);

(statearr_31931[(13)] = inst_31844);

(statearr_31931[(15)] = inst_31845);

(statearr_31931[(16)] = inst_31847);

return statearr_31931;
})();
var statearr_31932_31977 = state_31903__$1;
(statearr_31932_31977[(2)] = null);

(statearr_31932_31977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (14))){
var state_31903__$1 = state_31903;
var statearr_31936_31978 = state_31903__$1;
(statearr_31936_31978[(2)] = null);

(statearr_31936_31978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (16))){
var inst_31858 = (state_31903[(10)]);
var inst_31862 = cljs.core.chunk_first.call(null,inst_31858);
var inst_31863 = cljs.core.chunk_rest.call(null,inst_31858);
var inst_31864 = cljs.core.count.call(null,inst_31862);
var inst_31844 = inst_31863;
var inst_31845 = inst_31862;
var inst_31846 = inst_31864;
var inst_31847 = (0);
var state_31903__$1 = (function (){var statearr_31937 = state_31903;
(statearr_31937[(12)] = inst_31846);

(statearr_31937[(13)] = inst_31844);

(statearr_31937[(15)] = inst_31845);

(statearr_31937[(16)] = inst_31847);

return statearr_31937;
})();
var statearr_31938_31979 = state_31903__$1;
(statearr_31938_31979[(2)] = null);

(statearr_31938_31979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (10))){
var inst_31846 = (state_31903[(12)]);
var inst_31844 = (state_31903[(13)]);
var inst_31845 = (state_31903[(15)]);
var inst_31847 = (state_31903[(16)]);
var inst_31852 = cljs.core._nth.call(null,inst_31845,inst_31847);
var inst_31853 = cljs.core.async.muxch_STAR_.call(null,inst_31852);
var inst_31854 = cljs.core.async.close_BANG_.call(null,inst_31853);
var inst_31855 = (inst_31847 + (1));
var tmp31933 = inst_31846;
var tmp31934 = inst_31844;
var tmp31935 = inst_31845;
var inst_31844__$1 = tmp31934;
var inst_31845__$1 = tmp31935;
var inst_31846__$1 = tmp31933;
var inst_31847__$1 = inst_31855;
var state_31903__$1 = (function (){var statearr_31939 = state_31903;
(statearr_31939[(12)] = inst_31846__$1);

(statearr_31939[(13)] = inst_31844__$1);

(statearr_31939[(15)] = inst_31845__$1);

(statearr_31939[(16)] = inst_31847__$1);

(statearr_31939[(17)] = inst_31854);

return statearr_31939;
})();
var statearr_31940_31980 = state_31903__$1;
(statearr_31940_31980[(2)] = null);

(statearr_31940_31980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (18))){
var inst_31873 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31941_31981 = state_31903__$1;
(statearr_31941_31981[(2)] = inst_31873);

(statearr_31941_31981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (8))){
var inst_31846 = (state_31903[(12)]);
var inst_31847 = (state_31903[(16)]);
var inst_31849 = (inst_31847 < inst_31846);
var inst_31850 = inst_31849;
var state_31903__$1 = state_31903;
if(cljs.core.truth_(inst_31850)){
var statearr_31942_31982 = state_31903__$1;
(statearr_31942_31982[(1)] = (10));

} else {
var statearr_31943_31983 = state_31903__$1;
(statearr_31943_31983[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__30056__auto___31955,mults,ensure_mult,p))
;
return ((function (switch__29944__auto__,c__30056__auto___31955,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_31947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31947[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_31947[(1)] = (1));

return statearr_31947;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_31903){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_31903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e31948){if((e31948 instanceof Object)){
var ex__29948__auto__ = e31948;
var statearr_31949_31984 = state_31903;
(statearr_31949_31984[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31985 = state_31903;
state_31903 = G__31985;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_31903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_31903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___31955,mults,ensure_mult,p))
})();
var state__30058__auto__ = (function (){var statearr_31950 = f__30057__auto__.call(null);
(statearr_31950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___31955);

return statearr_31950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___31955,mults,ensure_mult,p))
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
var args31986 = [];
var len__27062__auto___31989 = arguments.length;
var i__27063__auto___31990 = (0);
while(true){
if((i__27063__auto___31990 < len__27062__auto___31989)){
args31986.push((arguments[i__27063__auto___31990]));

var G__31991 = (i__27063__auto___31990 + (1));
i__27063__auto___31990 = G__31991;
continue;
} else {
}
break;
}

var G__31988 = args31986.length;
switch (G__31988) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31986.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31993 = [];
var len__27062__auto___31996 = arguments.length;
var i__27063__auto___31997 = (0);
while(true){
if((i__27063__auto___31997 < len__27062__auto___31996)){
args31993.push((arguments[i__27063__auto___31997]));

var G__31998 = (i__27063__auto___31997 + (1));
i__27063__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var G__31995 = args31993.length;
switch (G__31995) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31993.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args32000 = [];
var len__27062__auto___32071 = arguments.length;
var i__27063__auto___32072 = (0);
while(true){
if((i__27063__auto___32072 < len__27062__auto___32071)){
args32000.push((arguments[i__27063__auto___32072]));

var G__32073 = (i__27063__auto___32072 + (1));
i__27063__auto___32072 = G__32073;
continue;
} else {
}
break;
}

var G__32002 = args32000.length;
switch (G__32002) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32000.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30056__auto___32075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___32075,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___32075,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32041){
var state_val_32042 = (state_32041[(1)]);
if((state_val_32042 === (7))){
var state_32041__$1 = state_32041;
var statearr_32043_32076 = state_32041__$1;
(statearr_32043_32076[(2)] = null);

(statearr_32043_32076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (1))){
var state_32041__$1 = state_32041;
var statearr_32044_32077 = state_32041__$1;
(statearr_32044_32077[(2)] = null);

(statearr_32044_32077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (4))){
var inst_32005 = (state_32041[(7)]);
var inst_32007 = (inst_32005 < cnt);
var state_32041__$1 = state_32041;
if(cljs.core.truth_(inst_32007)){
var statearr_32045_32078 = state_32041__$1;
(statearr_32045_32078[(1)] = (6));

} else {
var statearr_32046_32079 = state_32041__$1;
(statearr_32046_32079[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (15))){
var inst_32037 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32047_32080 = state_32041__$1;
(statearr_32047_32080[(2)] = inst_32037);

(statearr_32047_32080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (13))){
var inst_32030 = cljs.core.async.close_BANG_.call(null,out);
var state_32041__$1 = state_32041;
var statearr_32048_32081 = state_32041__$1;
(statearr_32048_32081[(2)] = inst_32030);

(statearr_32048_32081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (6))){
var state_32041__$1 = state_32041;
var statearr_32049_32082 = state_32041__$1;
(statearr_32049_32082[(2)] = null);

(statearr_32049_32082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (3))){
var inst_32039 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32041__$1,inst_32039);
} else {
if((state_val_32042 === (12))){
var inst_32027 = (state_32041[(8)]);
var inst_32027__$1 = (state_32041[(2)]);
var inst_32028 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32027__$1);
var state_32041__$1 = (function (){var statearr_32050 = state_32041;
(statearr_32050[(8)] = inst_32027__$1);

return statearr_32050;
})();
if(cljs.core.truth_(inst_32028)){
var statearr_32051_32083 = state_32041__$1;
(statearr_32051_32083[(1)] = (13));

} else {
var statearr_32052_32084 = state_32041__$1;
(statearr_32052_32084[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (2))){
var inst_32004 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32005 = (0);
var state_32041__$1 = (function (){var statearr_32053 = state_32041;
(statearr_32053[(9)] = inst_32004);

(statearr_32053[(7)] = inst_32005);

return statearr_32053;
})();
var statearr_32054_32085 = state_32041__$1;
(statearr_32054_32085[(2)] = null);

(statearr_32054_32085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (11))){
var inst_32005 = (state_32041[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32041,(10),Object,null,(9));
var inst_32014 = chs__$1.call(null,inst_32005);
var inst_32015 = done.call(null,inst_32005);
var inst_32016 = cljs.core.async.take_BANG_.call(null,inst_32014,inst_32015);
var state_32041__$1 = state_32041;
var statearr_32055_32086 = state_32041__$1;
(statearr_32055_32086[(2)] = inst_32016);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32041__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (9))){
var inst_32005 = (state_32041[(7)]);
var inst_32018 = (state_32041[(2)]);
var inst_32019 = (inst_32005 + (1));
var inst_32005__$1 = inst_32019;
var state_32041__$1 = (function (){var statearr_32056 = state_32041;
(statearr_32056[(10)] = inst_32018);

(statearr_32056[(7)] = inst_32005__$1);

return statearr_32056;
})();
var statearr_32057_32087 = state_32041__$1;
(statearr_32057_32087[(2)] = null);

(statearr_32057_32087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (5))){
var inst_32025 = (state_32041[(2)]);
var state_32041__$1 = (function (){var statearr_32058 = state_32041;
(statearr_32058[(11)] = inst_32025);

return statearr_32058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32041__$1,(12),dchan);
} else {
if((state_val_32042 === (14))){
var inst_32027 = (state_32041[(8)]);
var inst_32032 = cljs.core.apply.call(null,f,inst_32027);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32041__$1,(16),out,inst_32032);
} else {
if((state_val_32042 === (16))){
var inst_32034 = (state_32041[(2)]);
var state_32041__$1 = (function (){var statearr_32059 = state_32041;
(statearr_32059[(12)] = inst_32034);

return statearr_32059;
})();
var statearr_32060_32088 = state_32041__$1;
(statearr_32060_32088[(2)] = null);

(statearr_32060_32088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (10))){
var inst_32009 = (state_32041[(2)]);
var inst_32010 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32041__$1 = (function (){var statearr_32061 = state_32041;
(statearr_32061[(13)] = inst_32009);

return statearr_32061;
})();
var statearr_32062_32089 = state_32041__$1;
(statearr_32062_32089[(2)] = inst_32010);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32041__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (8))){
var inst_32023 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32063_32090 = state_32041__$1;
(statearr_32063_32090[(2)] = inst_32023);

(statearr_32063_32090[(1)] = (5));


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
});})(c__30056__auto___32075,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29944__auto__,c__30056__auto___32075,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_32067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32067[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_32067[(1)] = (1));

return statearr_32067;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_32041){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32068){if((e32068 instanceof Object)){
var ex__29948__auto__ = e32068;
var statearr_32069_32091 = state_32041;
(statearr_32069_32091[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32092 = state_32041;
state_32041 = G__32092;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_32041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_32041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___32075,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30058__auto__ = (function (){var statearr_32070 = f__30057__auto__.call(null);
(statearr_32070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___32075);

return statearr_32070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___32075,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32094 = [];
var len__27062__auto___32150 = arguments.length;
var i__27063__auto___32151 = (0);
while(true){
if((i__27063__auto___32151 < len__27062__auto___32150)){
args32094.push((arguments[i__27063__auto___32151]));

var G__32152 = (i__27063__auto___32151 + (1));
i__27063__auto___32151 = G__32152;
continue;
} else {
}
break;
}

var G__32096 = args32094.length;
switch (G__32096) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32094.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30056__auto___32154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___32154,out){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___32154,out){
return (function (state_32126){
var state_val_32127 = (state_32126[(1)]);
if((state_val_32127 === (7))){
var inst_32105 = (state_32126[(7)]);
var inst_32106 = (state_32126[(8)]);
var inst_32105__$1 = (state_32126[(2)]);
var inst_32106__$1 = cljs.core.nth.call(null,inst_32105__$1,(0),null);
var inst_32107 = cljs.core.nth.call(null,inst_32105__$1,(1),null);
var inst_32108 = (inst_32106__$1 == null);
var state_32126__$1 = (function (){var statearr_32128 = state_32126;
(statearr_32128[(7)] = inst_32105__$1);

(statearr_32128[(8)] = inst_32106__$1);

(statearr_32128[(9)] = inst_32107);

return statearr_32128;
})();
if(cljs.core.truth_(inst_32108)){
var statearr_32129_32155 = state_32126__$1;
(statearr_32129_32155[(1)] = (8));

} else {
var statearr_32130_32156 = state_32126__$1;
(statearr_32130_32156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (1))){
var inst_32097 = cljs.core.vec.call(null,chs);
var inst_32098 = inst_32097;
var state_32126__$1 = (function (){var statearr_32131 = state_32126;
(statearr_32131[(10)] = inst_32098);

return statearr_32131;
})();
var statearr_32132_32157 = state_32126__$1;
(statearr_32132_32157[(2)] = null);

(statearr_32132_32157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (4))){
var inst_32098 = (state_32126[(10)]);
var state_32126__$1 = state_32126;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32126__$1,(7),inst_32098);
} else {
if((state_val_32127 === (6))){
var inst_32122 = (state_32126[(2)]);
var state_32126__$1 = state_32126;
var statearr_32133_32158 = state_32126__$1;
(statearr_32133_32158[(2)] = inst_32122);

(statearr_32133_32158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (3))){
var inst_32124 = (state_32126[(2)]);
var state_32126__$1 = state_32126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32126__$1,inst_32124);
} else {
if((state_val_32127 === (2))){
var inst_32098 = (state_32126[(10)]);
var inst_32100 = cljs.core.count.call(null,inst_32098);
var inst_32101 = (inst_32100 > (0));
var state_32126__$1 = state_32126;
if(cljs.core.truth_(inst_32101)){
var statearr_32135_32159 = state_32126__$1;
(statearr_32135_32159[(1)] = (4));

} else {
var statearr_32136_32160 = state_32126__$1;
(statearr_32136_32160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (11))){
var inst_32098 = (state_32126[(10)]);
var inst_32115 = (state_32126[(2)]);
var tmp32134 = inst_32098;
var inst_32098__$1 = tmp32134;
var state_32126__$1 = (function (){var statearr_32137 = state_32126;
(statearr_32137[(10)] = inst_32098__$1);

(statearr_32137[(11)] = inst_32115);

return statearr_32137;
})();
var statearr_32138_32161 = state_32126__$1;
(statearr_32138_32161[(2)] = null);

(statearr_32138_32161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (9))){
var inst_32106 = (state_32126[(8)]);
var state_32126__$1 = state_32126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32126__$1,(11),out,inst_32106);
} else {
if((state_val_32127 === (5))){
var inst_32120 = cljs.core.async.close_BANG_.call(null,out);
var state_32126__$1 = state_32126;
var statearr_32139_32162 = state_32126__$1;
(statearr_32139_32162[(2)] = inst_32120);

(statearr_32139_32162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (10))){
var inst_32118 = (state_32126[(2)]);
var state_32126__$1 = state_32126;
var statearr_32140_32163 = state_32126__$1;
(statearr_32140_32163[(2)] = inst_32118);

(statearr_32140_32163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (8))){
var inst_32098 = (state_32126[(10)]);
var inst_32105 = (state_32126[(7)]);
var inst_32106 = (state_32126[(8)]);
var inst_32107 = (state_32126[(9)]);
var inst_32110 = (function (){var cs = inst_32098;
var vec__32103 = inst_32105;
var v = inst_32106;
var c = inst_32107;
return ((function (cs,vec__32103,v,c,inst_32098,inst_32105,inst_32106,inst_32107,state_val_32127,c__30056__auto___32154,out){
return (function (p1__32093_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32093_SHARP_);
});
;})(cs,vec__32103,v,c,inst_32098,inst_32105,inst_32106,inst_32107,state_val_32127,c__30056__auto___32154,out))
})();
var inst_32111 = cljs.core.filterv.call(null,inst_32110,inst_32098);
var inst_32098__$1 = inst_32111;
var state_32126__$1 = (function (){var statearr_32141 = state_32126;
(statearr_32141[(10)] = inst_32098__$1);

return statearr_32141;
})();
var statearr_32142_32164 = state_32126__$1;
(statearr_32142_32164[(2)] = null);

(statearr_32142_32164[(1)] = (2));


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
});})(c__30056__auto___32154,out))
;
return ((function (switch__29944__auto__,c__30056__auto___32154,out){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_32146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32146[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_32146[(1)] = (1));

return statearr_32146;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_32126){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32147){if((e32147 instanceof Object)){
var ex__29948__auto__ = e32147;
var statearr_32148_32165 = state_32126;
(statearr_32148_32165[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32166 = state_32126;
state_32126 = G__32166;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_32126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_32126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___32154,out))
})();
var state__30058__auto__ = (function (){var statearr_32149 = f__30057__auto__.call(null);
(statearr_32149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___32154);

return statearr_32149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___32154,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32167 = [];
var len__27062__auto___32216 = arguments.length;
var i__27063__auto___32217 = (0);
while(true){
if((i__27063__auto___32217 < len__27062__auto___32216)){
args32167.push((arguments[i__27063__auto___32217]));

var G__32218 = (i__27063__auto___32217 + (1));
i__27063__auto___32217 = G__32218;
continue;
} else {
}
break;
}

var G__32169 = args32167.length;
switch (G__32169) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32167.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30056__auto___32220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___32220,out){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___32220,out){
return (function (state_32193){
var state_val_32194 = (state_32193[(1)]);
if((state_val_32194 === (7))){
var inst_32175 = (state_32193[(7)]);
var inst_32175__$1 = (state_32193[(2)]);
var inst_32176 = (inst_32175__$1 == null);
var inst_32177 = cljs.core.not.call(null,inst_32176);
var state_32193__$1 = (function (){var statearr_32195 = state_32193;
(statearr_32195[(7)] = inst_32175__$1);

return statearr_32195;
})();
if(inst_32177){
var statearr_32196_32221 = state_32193__$1;
(statearr_32196_32221[(1)] = (8));

} else {
var statearr_32197_32222 = state_32193__$1;
(statearr_32197_32222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (1))){
var inst_32170 = (0);
var state_32193__$1 = (function (){var statearr_32198 = state_32193;
(statearr_32198[(8)] = inst_32170);

return statearr_32198;
})();
var statearr_32199_32223 = state_32193__$1;
(statearr_32199_32223[(2)] = null);

(statearr_32199_32223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (4))){
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32193__$1,(7),ch);
} else {
if((state_val_32194 === (6))){
var inst_32188 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32200_32224 = state_32193__$1;
(statearr_32200_32224[(2)] = inst_32188);

(statearr_32200_32224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (3))){
var inst_32190 = (state_32193[(2)]);
var inst_32191 = cljs.core.async.close_BANG_.call(null,out);
var state_32193__$1 = (function (){var statearr_32201 = state_32193;
(statearr_32201[(9)] = inst_32190);

return statearr_32201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32193__$1,inst_32191);
} else {
if((state_val_32194 === (2))){
var inst_32170 = (state_32193[(8)]);
var inst_32172 = (inst_32170 < n);
var state_32193__$1 = state_32193;
if(cljs.core.truth_(inst_32172)){
var statearr_32202_32225 = state_32193__$1;
(statearr_32202_32225[(1)] = (4));

} else {
var statearr_32203_32226 = state_32193__$1;
(statearr_32203_32226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (11))){
var inst_32170 = (state_32193[(8)]);
var inst_32180 = (state_32193[(2)]);
var inst_32181 = (inst_32170 + (1));
var inst_32170__$1 = inst_32181;
var state_32193__$1 = (function (){var statearr_32204 = state_32193;
(statearr_32204[(8)] = inst_32170__$1);

(statearr_32204[(10)] = inst_32180);

return statearr_32204;
})();
var statearr_32205_32227 = state_32193__$1;
(statearr_32205_32227[(2)] = null);

(statearr_32205_32227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (9))){
var state_32193__$1 = state_32193;
var statearr_32206_32228 = state_32193__$1;
(statearr_32206_32228[(2)] = null);

(statearr_32206_32228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (5))){
var state_32193__$1 = state_32193;
var statearr_32207_32229 = state_32193__$1;
(statearr_32207_32229[(2)] = null);

(statearr_32207_32229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (10))){
var inst_32185 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32208_32230 = state_32193__$1;
(statearr_32208_32230[(2)] = inst_32185);

(statearr_32208_32230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (8))){
var inst_32175 = (state_32193[(7)]);
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32193__$1,(11),out,inst_32175);
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
});})(c__30056__auto___32220,out))
;
return ((function (switch__29944__auto__,c__30056__auto___32220,out){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_32212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32212[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_32212[(1)] = (1));

return statearr_32212;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_32193){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32213){if((e32213 instanceof Object)){
var ex__29948__auto__ = e32213;
var statearr_32214_32231 = state_32193;
(statearr_32214_32231[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32232 = state_32193;
state_32193 = G__32232;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_32193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_32193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___32220,out))
})();
var state__30058__auto__ = (function (){var statearr_32215 = f__30057__auto__.call(null);
(statearr_32215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___32220);

return statearr_32215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___32220,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32240 = (function (map_LT_,f,ch,meta32241){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32241 = meta32241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32242,meta32241__$1){
var self__ = this;
var _32242__$1 = this;
return (new cljs.core.async.t_cljs$core$async32240(self__.map_LT_,self__.f,self__.ch,meta32241__$1));
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32242){
var self__ = this;
var _32242__$1 = this;
return self__.meta32241;
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32243 = (function (map_LT_,f,ch,meta32241,_,fn1,meta32244){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32241 = meta32241;
this._ = _;
this.fn1 = fn1;
this.meta32244 = meta32244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32245,meta32244__$1){
var self__ = this;
var _32245__$1 = this;
return (new cljs.core.async.t_cljs$core$async32243(self__.map_LT_,self__.f,self__.ch,self__.meta32241,self__._,self__.fn1,meta32244__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32245){
var self__ = this;
var _32245__$1 = this;
return self__.meta32244;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32233_SHARP_){
return f1.call(null,(((p1__32233_SHARP_ == null))?null:self__.f.call(null,p1__32233_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32241","meta32241",1138622907,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32240","cljs.core.async/t_cljs$core$async32240",1066467228,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32244","meta32244",240623372,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32243";

cljs.core.async.t_cljs$core$async32243.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async32243");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32243 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32243(map_LT___$1,f__$1,ch__$1,meta32241__$1,___$2,fn1__$1,meta32244){
return (new cljs.core.async.t_cljs$core$async32243(map_LT___$1,f__$1,ch__$1,meta32241__$1,___$2,fn1__$1,meta32244));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32243(self__.map_LT_,self__.f,self__.ch,self__.meta32241,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25992__auto__ = ret;
if(cljs.core.truth_(and__25992__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25992__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32241","meta32241",1138622907,null)], null);
});

cljs.core.async.t_cljs$core$async32240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32240";

cljs.core.async.t_cljs$core$async32240.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async32240");
});

cljs.core.async.__GT_t_cljs$core$async32240 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32240(map_LT___$1,f__$1,ch__$1,meta32241){
return (new cljs.core.async.t_cljs$core$async32240(map_LT___$1,f__$1,ch__$1,meta32241));
});

}

return (new cljs.core.async.t_cljs$core$async32240(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32249 = (function (map_GT_,f,ch,meta32250){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32250 = meta32250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32251,meta32250__$1){
var self__ = this;
var _32251__$1 = this;
return (new cljs.core.async.t_cljs$core$async32249(self__.map_GT_,self__.f,self__.ch,meta32250__$1));
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32251){
var self__ = this;
var _32251__$1 = this;
return self__.meta32250;
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32250","meta32250",-1353888277,null)], null);
});

cljs.core.async.t_cljs$core$async32249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32249";

cljs.core.async.t_cljs$core$async32249.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async32249");
});

cljs.core.async.__GT_t_cljs$core$async32249 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32249(map_GT___$1,f__$1,ch__$1,meta32250){
return (new cljs.core.async.t_cljs$core$async32249(map_GT___$1,f__$1,ch__$1,meta32250));
});

}

return (new cljs.core.async.t_cljs$core$async32249(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32255 = (function (filter_GT_,p,ch,meta32256){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32256 = meta32256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32257,meta32256__$1){
var self__ = this;
var _32257__$1 = this;
return (new cljs.core.async.t_cljs$core$async32255(self__.filter_GT_,self__.p,self__.ch,meta32256__$1));
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32257){
var self__ = this;
var _32257__$1 = this;
return self__.meta32256;
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32256","meta32256",333220434,null)], null);
});

cljs.core.async.t_cljs$core$async32255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32255";

cljs.core.async.t_cljs$core$async32255.cljs$lang$ctorPrWriter = (function (this__26602__auto__,writer__26603__auto__,opt__26604__auto__){
return cljs.core._write.call(null,writer__26603__auto__,"cljs.core.async/t_cljs$core$async32255");
});

cljs.core.async.__GT_t_cljs$core$async32255 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32255(filter_GT___$1,p__$1,ch__$1,meta32256){
return (new cljs.core.async.t_cljs$core$async32255(filter_GT___$1,p__$1,ch__$1,meta32256));
});

}

return (new cljs.core.async.t_cljs$core$async32255(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32258 = [];
var len__27062__auto___32302 = arguments.length;
var i__27063__auto___32303 = (0);
while(true){
if((i__27063__auto___32303 < len__27062__auto___32302)){
args32258.push((arguments[i__27063__auto___32303]));

var G__32304 = (i__27063__auto___32303 + (1));
i__27063__auto___32303 = G__32304;
continue;
} else {
}
break;
}

var G__32260 = args32258.length;
switch (G__32260) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32258.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30056__auto___32306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___32306,out){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___32306,out){
return (function (state_32281){
var state_val_32282 = (state_32281[(1)]);
if((state_val_32282 === (7))){
var inst_32277 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
var statearr_32283_32307 = state_32281__$1;
(statearr_32283_32307[(2)] = inst_32277);

(statearr_32283_32307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (1))){
var state_32281__$1 = state_32281;
var statearr_32284_32308 = state_32281__$1;
(statearr_32284_32308[(2)] = null);

(statearr_32284_32308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (4))){
var inst_32263 = (state_32281[(7)]);
var inst_32263__$1 = (state_32281[(2)]);
var inst_32264 = (inst_32263__$1 == null);
var state_32281__$1 = (function (){var statearr_32285 = state_32281;
(statearr_32285[(7)] = inst_32263__$1);

return statearr_32285;
})();
if(cljs.core.truth_(inst_32264)){
var statearr_32286_32309 = state_32281__$1;
(statearr_32286_32309[(1)] = (5));

} else {
var statearr_32287_32310 = state_32281__$1;
(statearr_32287_32310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (6))){
var inst_32263 = (state_32281[(7)]);
var inst_32268 = p.call(null,inst_32263);
var state_32281__$1 = state_32281;
if(cljs.core.truth_(inst_32268)){
var statearr_32288_32311 = state_32281__$1;
(statearr_32288_32311[(1)] = (8));

} else {
var statearr_32289_32312 = state_32281__$1;
(statearr_32289_32312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (3))){
var inst_32279 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32281__$1,inst_32279);
} else {
if((state_val_32282 === (2))){
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32281__$1,(4),ch);
} else {
if((state_val_32282 === (11))){
var inst_32271 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
var statearr_32290_32313 = state_32281__$1;
(statearr_32290_32313[(2)] = inst_32271);

(statearr_32290_32313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (9))){
var state_32281__$1 = state_32281;
var statearr_32291_32314 = state_32281__$1;
(statearr_32291_32314[(2)] = null);

(statearr_32291_32314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (5))){
var inst_32266 = cljs.core.async.close_BANG_.call(null,out);
var state_32281__$1 = state_32281;
var statearr_32292_32315 = state_32281__$1;
(statearr_32292_32315[(2)] = inst_32266);

(statearr_32292_32315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (10))){
var inst_32274 = (state_32281[(2)]);
var state_32281__$1 = (function (){var statearr_32293 = state_32281;
(statearr_32293[(8)] = inst_32274);

return statearr_32293;
})();
var statearr_32294_32316 = state_32281__$1;
(statearr_32294_32316[(2)] = null);

(statearr_32294_32316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (8))){
var inst_32263 = (state_32281[(7)]);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32281__$1,(11),out,inst_32263);
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
});})(c__30056__auto___32306,out))
;
return ((function (switch__29944__auto__,c__30056__auto___32306,out){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_32298 = [null,null,null,null,null,null,null,null,null];
(statearr_32298[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_32298[(1)] = (1));

return statearr_32298;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_32281){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32299){if((e32299 instanceof Object)){
var ex__29948__auto__ = e32299;
var statearr_32300_32317 = state_32281;
(statearr_32300_32317[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32318 = state_32281;
state_32281 = G__32318;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_32281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_32281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___32306,out))
})();
var state__30058__auto__ = (function (){var statearr_32301 = f__30057__auto__.call(null);
(statearr_32301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___32306);

return statearr_32301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___32306,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32319 = [];
var len__27062__auto___32322 = arguments.length;
var i__27063__auto___32323 = (0);
while(true){
if((i__27063__auto___32323 < len__27062__auto___32322)){
args32319.push((arguments[i__27063__auto___32323]));

var G__32324 = (i__27063__auto___32323 + (1));
i__27063__auto___32323 = G__32324;
continue;
} else {
}
break;
}

var G__32321 = args32319.length;
switch (G__32321) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32319.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_32491){
var state_val_32492 = (state_32491[(1)]);
if((state_val_32492 === (7))){
var inst_32487 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32493_32534 = state_32491__$1;
(statearr_32493_32534[(2)] = inst_32487);

(statearr_32493_32534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (20))){
var inst_32457 = (state_32491[(7)]);
var inst_32468 = (state_32491[(2)]);
var inst_32469 = cljs.core.next.call(null,inst_32457);
var inst_32443 = inst_32469;
var inst_32444 = null;
var inst_32445 = (0);
var inst_32446 = (0);
var state_32491__$1 = (function (){var statearr_32494 = state_32491;
(statearr_32494[(8)] = inst_32444);

(statearr_32494[(9)] = inst_32468);

(statearr_32494[(10)] = inst_32446);

(statearr_32494[(11)] = inst_32443);

(statearr_32494[(12)] = inst_32445);

return statearr_32494;
})();
var statearr_32495_32535 = state_32491__$1;
(statearr_32495_32535[(2)] = null);

(statearr_32495_32535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (1))){
var state_32491__$1 = state_32491;
var statearr_32496_32536 = state_32491__$1;
(statearr_32496_32536[(2)] = null);

(statearr_32496_32536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (4))){
var inst_32432 = (state_32491[(13)]);
var inst_32432__$1 = (state_32491[(2)]);
var inst_32433 = (inst_32432__$1 == null);
var state_32491__$1 = (function (){var statearr_32497 = state_32491;
(statearr_32497[(13)] = inst_32432__$1);

return statearr_32497;
})();
if(cljs.core.truth_(inst_32433)){
var statearr_32498_32537 = state_32491__$1;
(statearr_32498_32537[(1)] = (5));

} else {
var statearr_32499_32538 = state_32491__$1;
(statearr_32499_32538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (15))){
var state_32491__$1 = state_32491;
var statearr_32503_32539 = state_32491__$1;
(statearr_32503_32539[(2)] = null);

(statearr_32503_32539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (21))){
var state_32491__$1 = state_32491;
var statearr_32504_32540 = state_32491__$1;
(statearr_32504_32540[(2)] = null);

(statearr_32504_32540[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (13))){
var inst_32444 = (state_32491[(8)]);
var inst_32446 = (state_32491[(10)]);
var inst_32443 = (state_32491[(11)]);
var inst_32445 = (state_32491[(12)]);
var inst_32453 = (state_32491[(2)]);
var inst_32454 = (inst_32446 + (1));
var tmp32500 = inst_32444;
var tmp32501 = inst_32443;
var tmp32502 = inst_32445;
var inst_32443__$1 = tmp32501;
var inst_32444__$1 = tmp32500;
var inst_32445__$1 = tmp32502;
var inst_32446__$1 = inst_32454;
var state_32491__$1 = (function (){var statearr_32505 = state_32491;
(statearr_32505[(8)] = inst_32444__$1);

(statearr_32505[(14)] = inst_32453);

(statearr_32505[(10)] = inst_32446__$1);

(statearr_32505[(11)] = inst_32443__$1);

(statearr_32505[(12)] = inst_32445__$1);

return statearr_32505;
})();
var statearr_32506_32541 = state_32491__$1;
(statearr_32506_32541[(2)] = null);

(statearr_32506_32541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (22))){
var state_32491__$1 = state_32491;
var statearr_32507_32542 = state_32491__$1;
(statearr_32507_32542[(2)] = null);

(statearr_32507_32542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (6))){
var inst_32432 = (state_32491[(13)]);
var inst_32441 = f.call(null,inst_32432);
var inst_32442 = cljs.core.seq.call(null,inst_32441);
var inst_32443 = inst_32442;
var inst_32444 = null;
var inst_32445 = (0);
var inst_32446 = (0);
var state_32491__$1 = (function (){var statearr_32508 = state_32491;
(statearr_32508[(8)] = inst_32444);

(statearr_32508[(10)] = inst_32446);

(statearr_32508[(11)] = inst_32443);

(statearr_32508[(12)] = inst_32445);

return statearr_32508;
})();
var statearr_32509_32543 = state_32491__$1;
(statearr_32509_32543[(2)] = null);

(statearr_32509_32543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (17))){
var inst_32457 = (state_32491[(7)]);
var inst_32461 = cljs.core.chunk_first.call(null,inst_32457);
var inst_32462 = cljs.core.chunk_rest.call(null,inst_32457);
var inst_32463 = cljs.core.count.call(null,inst_32461);
var inst_32443 = inst_32462;
var inst_32444 = inst_32461;
var inst_32445 = inst_32463;
var inst_32446 = (0);
var state_32491__$1 = (function (){var statearr_32510 = state_32491;
(statearr_32510[(8)] = inst_32444);

(statearr_32510[(10)] = inst_32446);

(statearr_32510[(11)] = inst_32443);

(statearr_32510[(12)] = inst_32445);

return statearr_32510;
})();
var statearr_32511_32544 = state_32491__$1;
(statearr_32511_32544[(2)] = null);

(statearr_32511_32544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (3))){
var inst_32489 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32491__$1,inst_32489);
} else {
if((state_val_32492 === (12))){
var inst_32477 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32512_32545 = state_32491__$1;
(statearr_32512_32545[(2)] = inst_32477);

(statearr_32512_32545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (2))){
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32491__$1,(4),in$);
} else {
if((state_val_32492 === (23))){
var inst_32485 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32513_32546 = state_32491__$1;
(statearr_32513_32546[(2)] = inst_32485);

(statearr_32513_32546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (19))){
var inst_32472 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32514_32547 = state_32491__$1;
(statearr_32514_32547[(2)] = inst_32472);

(statearr_32514_32547[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (11))){
var inst_32457 = (state_32491[(7)]);
var inst_32443 = (state_32491[(11)]);
var inst_32457__$1 = cljs.core.seq.call(null,inst_32443);
var state_32491__$1 = (function (){var statearr_32515 = state_32491;
(statearr_32515[(7)] = inst_32457__$1);

return statearr_32515;
})();
if(inst_32457__$1){
var statearr_32516_32548 = state_32491__$1;
(statearr_32516_32548[(1)] = (14));

} else {
var statearr_32517_32549 = state_32491__$1;
(statearr_32517_32549[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (9))){
var inst_32479 = (state_32491[(2)]);
var inst_32480 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32491__$1 = (function (){var statearr_32518 = state_32491;
(statearr_32518[(15)] = inst_32479);

return statearr_32518;
})();
if(cljs.core.truth_(inst_32480)){
var statearr_32519_32550 = state_32491__$1;
(statearr_32519_32550[(1)] = (21));

} else {
var statearr_32520_32551 = state_32491__$1;
(statearr_32520_32551[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (5))){
var inst_32435 = cljs.core.async.close_BANG_.call(null,out);
var state_32491__$1 = state_32491;
var statearr_32521_32552 = state_32491__$1;
(statearr_32521_32552[(2)] = inst_32435);

(statearr_32521_32552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (14))){
var inst_32457 = (state_32491[(7)]);
var inst_32459 = cljs.core.chunked_seq_QMARK_.call(null,inst_32457);
var state_32491__$1 = state_32491;
if(inst_32459){
var statearr_32522_32553 = state_32491__$1;
(statearr_32522_32553[(1)] = (17));

} else {
var statearr_32523_32554 = state_32491__$1;
(statearr_32523_32554[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (16))){
var inst_32475 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32524_32555 = state_32491__$1;
(statearr_32524_32555[(2)] = inst_32475);

(statearr_32524_32555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (10))){
var inst_32444 = (state_32491[(8)]);
var inst_32446 = (state_32491[(10)]);
var inst_32451 = cljs.core._nth.call(null,inst_32444,inst_32446);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(13),out,inst_32451);
} else {
if((state_val_32492 === (18))){
var inst_32457 = (state_32491[(7)]);
var inst_32466 = cljs.core.first.call(null,inst_32457);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(20),out,inst_32466);
} else {
if((state_val_32492 === (8))){
var inst_32446 = (state_32491[(10)]);
var inst_32445 = (state_32491[(12)]);
var inst_32448 = (inst_32446 < inst_32445);
var inst_32449 = inst_32448;
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32449)){
var statearr_32525_32556 = state_32491__$1;
(statearr_32525_32556[(1)] = (10));

} else {
var statearr_32526_32557 = state_32491__$1;
(statearr_32526_32557[(1)] = (11));

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
}
}
}
}
}
}
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29945__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29945__auto____0 = (function (){
var statearr_32530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32530[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29945__auto__);

(statearr_32530[(1)] = (1));

return statearr_32530;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29945__auto____1 = (function (state_32491){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32531){if((e32531 instanceof Object)){
var ex__29948__auto__ = e32531;
var statearr_32532_32558 = state_32491;
(statearr_32532_32558[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32559 = state_32491;
state_32491 = G__32559;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29945__auto__ = function(state_32491){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29945__auto____1.call(this,state_32491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29945__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29945__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_32533 = f__30057__auto__.call(null);
(statearr_32533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_32533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32560 = [];
var len__27062__auto___32563 = arguments.length;
var i__27063__auto___32564 = (0);
while(true){
if((i__27063__auto___32564 < len__27062__auto___32563)){
args32560.push((arguments[i__27063__auto___32564]));

var G__32565 = (i__27063__auto___32564 + (1));
i__27063__auto___32564 = G__32565;
continue;
} else {
}
break;
}

var G__32562 = args32560.length;
switch (G__32562) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32560.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32567 = [];
var len__27062__auto___32570 = arguments.length;
var i__27063__auto___32571 = (0);
while(true){
if((i__27063__auto___32571 < len__27062__auto___32570)){
args32567.push((arguments[i__27063__auto___32571]));

var G__32572 = (i__27063__auto___32571 + (1));
i__27063__auto___32571 = G__32572;
continue;
} else {
}
break;
}

var G__32569 = args32567.length;
switch (G__32569) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32567.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32574 = [];
var len__27062__auto___32625 = arguments.length;
var i__27063__auto___32626 = (0);
while(true){
if((i__27063__auto___32626 < len__27062__auto___32625)){
args32574.push((arguments[i__27063__auto___32626]));

var G__32627 = (i__27063__auto___32626 + (1));
i__27063__auto___32626 = G__32627;
continue;
} else {
}
break;
}

var G__32576 = args32574.length;
switch (G__32576) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32574.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30056__auto___32629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___32629,out){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___32629,out){
return (function (state_32600){
var state_val_32601 = (state_32600[(1)]);
if((state_val_32601 === (7))){
var inst_32595 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32602_32630 = state_32600__$1;
(statearr_32602_32630[(2)] = inst_32595);

(statearr_32602_32630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (1))){
var inst_32577 = null;
var state_32600__$1 = (function (){var statearr_32603 = state_32600;
(statearr_32603[(7)] = inst_32577);

return statearr_32603;
})();
var statearr_32604_32631 = state_32600__$1;
(statearr_32604_32631[(2)] = null);

(statearr_32604_32631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (4))){
var inst_32580 = (state_32600[(8)]);
var inst_32580__$1 = (state_32600[(2)]);
var inst_32581 = (inst_32580__$1 == null);
var inst_32582 = cljs.core.not.call(null,inst_32581);
var state_32600__$1 = (function (){var statearr_32605 = state_32600;
(statearr_32605[(8)] = inst_32580__$1);

return statearr_32605;
})();
if(inst_32582){
var statearr_32606_32632 = state_32600__$1;
(statearr_32606_32632[(1)] = (5));

} else {
var statearr_32607_32633 = state_32600__$1;
(statearr_32607_32633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (6))){
var state_32600__$1 = state_32600;
var statearr_32608_32634 = state_32600__$1;
(statearr_32608_32634[(2)] = null);

(statearr_32608_32634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (3))){
var inst_32597 = (state_32600[(2)]);
var inst_32598 = cljs.core.async.close_BANG_.call(null,out);
var state_32600__$1 = (function (){var statearr_32609 = state_32600;
(statearr_32609[(9)] = inst_32597);

return statearr_32609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32600__$1,inst_32598);
} else {
if((state_val_32601 === (2))){
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32600__$1,(4),ch);
} else {
if((state_val_32601 === (11))){
var inst_32580 = (state_32600[(8)]);
var inst_32589 = (state_32600[(2)]);
var inst_32577 = inst_32580;
var state_32600__$1 = (function (){var statearr_32610 = state_32600;
(statearr_32610[(10)] = inst_32589);

(statearr_32610[(7)] = inst_32577);

return statearr_32610;
})();
var statearr_32611_32635 = state_32600__$1;
(statearr_32611_32635[(2)] = null);

(statearr_32611_32635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (9))){
var inst_32580 = (state_32600[(8)]);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32600__$1,(11),out,inst_32580);
} else {
if((state_val_32601 === (5))){
var inst_32580 = (state_32600[(8)]);
var inst_32577 = (state_32600[(7)]);
var inst_32584 = cljs.core._EQ_.call(null,inst_32580,inst_32577);
var state_32600__$1 = state_32600;
if(inst_32584){
var statearr_32613_32636 = state_32600__$1;
(statearr_32613_32636[(1)] = (8));

} else {
var statearr_32614_32637 = state_32600__$1;
(statearr_32614_32637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (10))){
var inst_32592 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32615_32638 = state_32600__$1;
(statearr_32615_32638[(2)] = inst_32592);

(statearr_32615_32638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (8))){
var inst_32577 = (state_32600[(7)]);
var tmp32612 = inst_32577;
var inst_32577__$1 = tmp32612;
var state_32600__$1 = (function (){var statearr_32616 = state_32600;
(statearr_32616[(7)] = inst_32577__$1);

return statearr_32616;
})();
var statearr_32617_32639 = state_32600__$1;
(statearr_32617_32639[(2)] = null);

(statearr_32617_32639[(1)] = (2));


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
});})(c__30056__auto___32629,out))
;
return ((function (switch__29944__auto__,c__30056__auto___32629,out){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_32621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32621[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_32621[(1)] = (1));

return statearr_32621;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_32600){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32622){if((e32622 instanceof Object)){
var ex__29948__auto__ = e32622;
var statearr_32623_32640 = state_32600;
(statearr_32623_32640[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32641 = state_32600;
state_32600 = G__32641;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_32600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_32600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___32629,out))
})();
var state__30058__auto__ = (function (){var statearr_32624 = f__30057__auto__.call(null);
(statearr_32624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___32629);

return statearr_32624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___32629,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32642 = [];
var len__27062__auto___32712 = arguments.length;
var i__27063__auto___32713 = (0);
while(true){
if((i__27063__auto___32713 < len__27062__auto___32712)){
args32642.push((arguments[i__27063__auto___32713]));

var G__32714 = (i__27063__auto___32713 + (1));
i__27063__auto___32713 = G__32714;
continue;
} else {
}
break;
}

var G__32644 = args32642.length;
switch (G__32644) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32642.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30056__auto___32716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___32716,out){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___32716,out){
return (function (state_32682){
var state_val_32683 = (state_32682[(1)]);
if((state_val_32683 === (7))){
var inst_32678 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
var statearr_32684_32717 = state_32682__$1;
(statearr_32684_32717[(2)] = inst_32678);

(statearr_32684_32717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (1))){
var inst_32645 = (new Array(n));
var inst_32646 = inst_32645;
var inst_32647 = (0);
var state_32682__$1 = (function (){var statearr_32685 = state_32682;
(statearr_32685[(7)] = inst_32647);

(statearr_32685[(8)] = inst_32646);

return statearr_32685;
})();
var statearr_32686_32718 = state_32682__$1;
(statearr_32686_32718[(2)] = null);

(statearr_32686_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (4))){
var inst_32650 = (state_32682[(9)]);
var inst_32650__$1 = (state_32682[(2)]);
var inst_32651 = (inst_32650__$1 == null);
var inst_32652 = cljs.core.not.call(null,inst_32651);
var state_32682__$1 = (function (){var statearr_32687 = state_32682;
(statearr_32687[(9)] = inst_32650__$1);

return statearr_32687;
})();
if(inst_32652){
var statearr_32688_32719 = state_32682__$1;
(statearr_32688_32719[(1)] = (5));

} else {
var statearr_32689_32720 = state_32682__$1;
(statearr_32689_32720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (15))){
var inst_32672 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
var statearr_32690_32721 = state_32682__$1;
(statearr_32690_32721[(2)] = inst_32672);

(statearr_32690_32721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (13))){
var state_32682__$1 = state_32682;
var statearr_32691_32722 = state_32682__$1;
(statearr_32691_32722[(2)] = null);

(statearr_32691_32722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (6))){
var inst_32647 = (state_32682[(7)]);
var inst_32668 = (inst_32647 > (0));
var state_32682__$1 = state_32682;
if(cljs.core.truth_(inst_32668)){
var statearr_32692_32723 = state_32682__$1;
(statearr_32692_32723[(1)] = (12));

} else {
var statearr_32693_32724 = state_32682__$1;
(statearr_32693_32724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (3))){
var inst_32680 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32682__$1,inst_32680);
} else {
if((state_val_32683 === (12))){
var inst_32646 = (state_32682[(8)]);
var inst_32670 = cljs.core.vec.call(null,inst_32646);
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32682__$1,(15),out,inst_32670);
} else {
if((state_val_32683 === (2))){
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32682__$1,(4),ch);
} else {
if((state_val_32683 === (11))){
var inst_32662 = (state_32682[(2)]);
var inst_32663 = (new Array(n));
var inst_32646 = inst_32663;
var inst_32647 = (0);
var state_32682__$1 = (function (){var statearr_32694 = state_32682;
(statearr_32694[(7)] = inst_32647);

(statearr_32694[(8)] = inst_32646);

(statearr_32694[(10)] = inst_32662);

return statearr_32694;
})();
var statearr_32695_32725 = state_32682__$1;
(statearr_32695_32725[(2)] = null);

(statearr_32695_32725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (9))){
var inst_32646 = (state_32682[(8)]);
var inst_32660 = cljs.core.vec.call(null,inst_32646);
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32682__$1,(11),out,inst_32660);
} else {
if((state_val_32683 === (5))){
var inst_32647 = (state_32682[(7)]);
var inst_32655 = (state_32682[(11)]);
var inst_32650 = (state_32682[(9)]);
var inst_32646 = (state_32682[(8)]);
var inst_32654 = (inst_32646[inst_32647] = inst_32650);
var inst_32655__$1 = (inst_32647 + (1));
var inst_32656 = (inst_32655__$1 < n);
var state_32682__$1 = (function (){var statearr_32696 = state_32682;
(statearr_32696[(11)] = inst_32655__$1);

(statearr_32696[(12)] = inst_32654);

return statearr_32696;
})();
if(cljs.core.truth_(inst_32656)){
var statearr_32697_32726 = state_32682__$1;
(statearr_32697_32726[(1)] = (8));

} else {
var statearr_32698_32727 = state_32682__$1;
(statearr_32698_32727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (14))){
var inst_32675 = (state_32682[(2)]);
var inst_32676 = cljs.core.async.close_BANG_.call(null,out);
var state_32682__$1 = (function (){var statearr_32700 = state_32682;
(statearr_32700[(13)] = inst_32675);

return statearr_32700;
})();
var statearr_32701_32728 = state_32682__$1;
(statearr_32701_32728[(2)] = inst_32676);

(statearr_32701_32728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (10))){
var inst_32666 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
var statearr_32702_32729 = state_32682__$1;
(statearr_32702_32729[(2)] = inst_32666);

(statearr_32702_32729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (8))){
var inst_32655 = (state_32682[(11)]);
var inst_32646 = (state_32682[(8)]);
var tmp32699 = inst_32646;
var inst_32646__$1 = tmp32699;
var inst_32647 = inst_32655;
var state_32682__$1 = (function (){var statearr_32703 = state_32682;
(statearr_32703[(7)] = inst_32647);

(statearr_32703[(8)] = inst_32646__$1);

return statearr_32703;
})();
var statearr_32704_32730 = state_32682__$1;
(statearr_32704_32730[(2)] = null);

(statearr_32704_32730[(1)] = (2));


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
});})(c__30056__auto___32716,out))
;
return ((function (switch__29944__auto__,c__30056__auto___32716,out){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_32708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32708[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_32708[(1)] = (1));

return statearr_32708;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_32682){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32709){if((e32709 instanceof Object)){
var ex__29948__auto__ = e32709;
var statearr_32710_32731 = state_32682;
(statearr_32710_32731[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32732 = state_32682;
state_32682 = G__32732;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_32682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_32682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___32716,out))
})();
var state__30058__auto__ = (function (){var statearr_32711 = f__30057__auto__.call(null);
(statearr_32711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___32716);

return statearr_32711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___32716,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32733 = [];
var len__27062__auto___32807 = arguments.length;
var i__27063__auto___32808 = (0);
while(true){
if((i__27063__auto___32808 < len__27062__auto___32807)){
args32733.push((arguments[i__27063__auto___32808]));

var G__32809 = (i__27063__auto___32808 + (1));
i__27063__auto___32808 = G__32809;
continue;
} else {
}
break;
}

var G__32735 = args32733.length;
switch (G__32735) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32733.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30056__auto___32811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___32811,out){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___32811,out){
return (function (state_32777){
var state_val_32778 = (state_32777[(1)]);
if((state_val_32778 === (7))){
var inst_32773 = (state_32777[(2)]);
var state_32777__$1 = state_32777;
var statearr_32779_32812 = state_32777__$1;
(statearr_32779_32812[(2)] = inst_32773);

(statearr_32779_32812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (1))){
var inst_32736 = [];
var inst_32737 = inst_32736;
var inst_32738 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32777__$1 = (function (){var statearr_32780 = state_32777;
(statearr_32780[(7)] = inst_32737);

(statearr_32780[(8)] = inst_32738);

return statearr_32780;
})();
var statearr_32781_32813 = state_32777__$1;
(statearr_32781_32813[(2)] = null);

(statearr_32781_32813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (4))){
var inst_32741 = (state_32777[(9)]);
var inst_32741__$1 = (state_32777[(2)]);
var inst_32742 = (inst_32741__$1 == null);
var inst_32743 = cljs.core.not.call(null,inst_32742);
var state_32777__$1 = (function (){var statearr_32782 = state_32777;
(statearr_32782[(9)] = inst_32741__$1);

return statearr_32782;
})();
if(inst_32743){
var statearr_32783_32814 = state_32777__$1;
(statearr_32783_32814[(1)] = (5));

} else {
var statearr_32784_32815 = state_32777__$1;
(statearr_32784_32815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (15))){
var inst_32767 = (state_32777[(2)]);
var state_32777__$1 = state_32777;
var statearr_32785_32816 = state_32777__$1;
(statearr_32785_32816[(2)] = inst_32767);

(statearr_32785_32816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (13))){
var state_32777__$1 = state_32777;
var statearr_32786_32817 = state_32777__$1;
(statearr_32786_32817[(2)] = null);

(statearr_32786_32817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (6))){
var inst_32737 = (state_32777[(7)]);
var inst_32762 = inst_32737.length;
var inst_32763 = (inst_32762 > (0));
var state_32777__$1 = state_32777;
if(cljs.core.truth_(inst_32763)){
var statearr_32787_32818 = state_32777__$1;
(statearr_32787_32818[(1)] = (12));

} else {
var statearr_32788_32819 = state_32777__$1;
(statearr_32788_32819[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (3))){
var inst_32775 = (state_32777[(2)]);
var state_32777__$1 = state_32777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32777__$1,inst_32775);
} else {
if((state_val_32778 === (12))){
var inst_32737 = (state_32777[(7)]);
var inst_32765 = cljs.core.vec.call(null,inst_32737);
var state_32777__$1 = state_32777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32777__$1,(15),out,inst_32765);
} else {
if((state_val_32778 === (2))){
var state_32777__$1 = state_32777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32777__$1,(4),ch);
} else {
if((state_val_32778 === (11))){
var inst_32741 = (state_32777[(9)]);
var inst_32745 = (state_32777[(10)]);
var inst_32755 = (state_32777[(2)]);
var inst_32756 = [];
var inst_32757 = inst_32756.push(inst_32741);
var inst_32737 = inst_32756;
var inst_32738 = inst_32745;
var state_32777__$1 = (function (){var statearr_32789 = state_32777;
(statearr_32789[(11)] = inst_32755);

(statearr_32789[(7)] = inst_32737);

(statearr_32789[(12)] = inst_32757);

(statearr_32789[(8)] = inst_32738);

return statearr_32789;
})();
var statearr_32790_32820 = state_32777__$1;
(statearr_32790_32820[(2)] = null);

(statearr_32790_32820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (9))){
var inst_32737 = (state_32777[(7)]);
var inst_32753 = cljs.core.vec.call(null,inst_32737);
var state_32777__$1 = state_32777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32777__$1,(11),out,inst_32753);
} else {
if((state_val_32778 === (5))){
var inst_32741 = (state_32777[(9)]);
var inst_32745 = (state_32777[(10)]);
var inst_32738 = (state_32777[(8)]);
var inst_32745__$1 = f.call(null,inst_32741);
var inst_32746 = cljs.core._EQ_.call(null,inst_32745__$1,inst_32738);
var inst_32747 = cljs.core.keyword_identical_QMARK_.call(null,inst_32738,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32748 = (inst_32746) || (inst_32747);
var state_32777__$1 = (function (){var statearr_32791 = state_32777;
(statearr_32791[(10)] = inst_32745__$1);

return statearr_32791;
})();
if(cljs.core.truth_(inst_32748)){
var statearr_32792_32821 = state_32777__$1;
(statearr_32792_32821[(1)] = (8));

} else {
var statearr_32793_32822 = state_32777__$1;
(statearr_32793_32822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (14))){
var inst_32770 = (state_32777[(2)]);
var inst_32771 = cljs.core.async.close_BANG_.call(null,out);
var state_32777__$1 = (function (){var statearr_32795 = state_32777;
(statearr_32795[(13)] = inst_32770);

return statearr_32795;
})();
var statearr_32796_32823 = state_32777__$1;
(statearr_32796_32823[(2)] = inst_32771);

(statearr_32796_32823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (10))){
var inst_32760 = (state_32777[(2)]);
var state_32777__$1 = state_32777;
var statearr_32797_32824 = state_32777__$1;
(statearr_32797_32824[(2)] = inst_32760);

(statearr_32797_32824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (8))){
var inst_32737 = (state_32777[(7)]);
var inst_32741 = (state_32777[(9)]);
var inst_32745 = (state_32777[(10)]);
var inst_32750 = inst_32737.push(inst_32741);
var tmp32794 = inst_32737;
var inst_32737__$1 = tmp32794;
var inst_32738 = inst_32745;
var state_32777__$1 = (function (){var statearr_32798 = state_32777;
(statearr_32798[(14)] = inst_32750);

(statearr_32798[(7)] = inst_32737__$1);

(statearr_32798[(8)] = inst_32738);

return statearr_32798;
})();
var statearr_32799_32825 = state_32777__$1;
(statearr_32799_32825[(2)] = null);

(statearr_32799_32825[(1)] = (2));


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
});})(c__30056__auto___32811,out))
;
return ((function (switch__29944__auto__,c__30056__auto___32811,out){
return (function() {
var cljs$core$async$state_machine__29945__auto__ = null;
var cljs$core$async$state_machine__29945__auto____0 = (function (){
var statearr_32803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32803[(0)] = cljs$core$async$state_machine__29945__auto__);

(statearr_32803[(1)] = (1));

return statearr_32803;
});
var cljs$core$async$state_machine__29945__auto____1 = (function (state_32777){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_32777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e32804){if((e32804 instanceof Object)){
var ex__29948__auto__ = e32804;
var statearr_32805_32826 = state_32777;
(statearr_32805_32826[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32827 = state_32777;
state_32777 = G__32827;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
cljs$core$async$state_machine__29945__auto__ = function(state_32777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29945__auto____1.call(this,state_32777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29945__auto____0;
cljs$core$async$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29945__auto____1;
return cljs$core$async$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___32811,out))
})();
var state__30058__auto__ = (function (){var statearr_32806 = f__30057__auto__.call(null);
(statearr_32806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___32811);

return statearr_32806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___32811,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map