// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args44862 = [];
var len__43720__auto___44868 = arguments.length;
var i__43721__auto___44869 = (0);
while(true){
if((i__43721__auto___44869 < len__43720__auto___44868)){
args44862.push((arguments[i__43721__auto___44869]));

var G__44870 = (i__43721__auto___44869 + (1));
i__43721__auto___44869 = G__44870;
continue;
} else {
}
break;
}

var G__44864 = args44862.length;
switch (G__44864) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44862.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44865 = (function (f,blockable,meta44866){
this.f = f;
this.blockable = blockable;
this.meta44866 = meta44866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44867,meta44866__$1){
var self__ = this;
var _44867__$1 = this;
return (new cljs.core.async.t_cljs$core$async44865(self__.f,self__.blockable,meta44866__$1));
});

cljs.core.async.t_cljs$core$async44865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44867){
var self__ = this;
var _44867__$1 = this;
return self__.meta44866;
});

cljs.core.async.t_cljs$core$async44865.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44865.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44866","meta44866",30300500,null)], null);
});

cljs.core.async.t_cljs$core$async44865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44865";

cljs.core.async.t_cljs$core$async44865.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async44865");
});

cljs.core.async.__GT_t_cljs$core$async44865 = (function cljs$core$async$__GT_t_cljs$core$async44865(f__$1,blockable__$1,meta44866){
return (new cljs.core.async.t_cljs$core$async44865(f__$1,blockable__$1,meta44866));
});

}

return (new cljs.core.async.t_cljs$core$async44865(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args44874 = [];
var len__43720__auto___44877 = arguments.length;
var i__43721__auto___44878 = (0);
while(true){
if((i__43721__auto___44878 < len__43720__auto___44877)){
args44874.push((arguments[i__43721__auto___44878]));

var G__44879 = (i__43721__auto___44878 + (1));
i__43721__auto___44878 = G__44879;
continue;
} else {
}
break;
}

var G__44876 = args44874.length;
switch (G__44876) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44874.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args44881 = [];
var len__43720__auto___44884 = arguments.length;
var i__43721__auto___44885 = (0);
while(true){
if((i__43721__auto___44885 < len__43720__auto___44884)){
args44881.push((arguments[i__43721__auto___44885]));

var G__44886 = (i__43721__auto___44885 + (1));
i__43721__auto___44885 = G__44886;
continue;
} else {
}
break;
}

var G__44883 = args44881.length;
switch (G__44883) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44881.length)].join('')));

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
var args44888 = [];
var len__43720__auto___44891 = arguments.length;
var i__43721__auto___44892 = (0);
while(true){
if((i__43721__auto___44892 < len__43720__auto___44891)){
args44888.push((arguments[i__43721__auto___44892]));

var G__44893 = (i__43721__auto___44892 + (1));
i__43721__auto___44892 = G__44893;
continue;
} else {
}
break;
}

var G__44890 = args44888.length;
switch (G__44890) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44888.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44895 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44895);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44895,ret){
return (function (){
return fn1.call(null,val_44895);
});})(val_44895,ret))
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
var args44896 = [];
var len__43720__auto___44899 = arguments.length;
var i__43721__auto___44900 = (0);
while(true){
if((i__43721__auto___44900 < len__43720__auto___44899)){
args44896.push((arguments[i__43721__auto___44900]));

var G__44901 = (i__43721__auto___44900 + (1));
i__43721__auto___44900 = G__44901;
continue;
} else {
}
break;
}

var G__44898 = args44896.length;
switch (G__44898) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44896.length)].join('')));

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
var n__43560__auto___44903 = n;
var x_44904 = (0);
while(true){
if((x_44904 < n__43560__auto___44903)){
(a[x_44904] = (0));

var G__44905 = (x_44904 + (1));
x_44904 = G__44905;
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

var G__44906 = (i + (1));
i = G__44906;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44910 = (function (alt_flag,flag,meta44911){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44911 = meta44911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44912,meta44911__$1){
var self__ = this;
var _44912__$1 = this;
return (new cljs.core.async.t_cljs$core$async44910(self__.alt_flag,self__.flag,meta44911__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44912){
var self__ = this;
var _44912__$1 = this;
return self__.meta44911;
});})(flag))
;

cljs.core.async.t_cljs$core$async44910.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44910.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44911","meta44911",276438221,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44910";

cljs.core.async.t_cljs$core$async44910.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async44910");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44910 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44910(alt_flag__$1,flag__$1,meta44911){
return (new cljs.core.async.t_cljs$core$async44910(alt_flag__$1,flag__$1,meta44911));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44910(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44916 = (function (alt_handler,flag,cb,meta44917){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44917 = meta44917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44918,meta44917__$1){
var self__ = this;
var _44918__$1 = this;
return (new cljs.core.async.t_cljs$core$async44916(self__.alt_handler,self__.flag,self__.cb,meta44917__$1));
});

cljs.core.async.t_cljs$core$async44916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44918){
var self__ = this;
var _44918__$1 = this;
return self__.meta44917;
});

cljs.core.async.t_cljs$core$async44916.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44917","meta44917",818750561,null)], null);
});

cljs.core.async.t_cljs$core$async44916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44916";

cljs.core.async.t_cljs$core$async44916.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async44916");
});

cljs.core.async.__GT_t_cljs$core$async44916 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44916(alt_handler__$1,flag__$1,cb__$1,meta44917){
return (new cljs.core.async.t_cljs$core$async44916(alt_handler__$1,flag__$1,cb__$1,meta44917));
});

}

return (new cljs.core.async.t_cljs$core$async44916(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44919_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44919_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44920_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44920_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__42645__auto__ = wport;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44921 = (i + (1));
i = G__44921;
continue;
}
} else {
return null;
}
break;
}
})();
var or__42645__auto__ = ret;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__42633__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__42633__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__42633__auto__;
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
var args__43727__auto__ = [];
var len__43720__auto___44927 = arguments.length;
var i__43721__auto___44928 = (0);
while(true){
if((i__43721__auto___44928 < len__43720__auto___44927)){
args__43727__auto__.push((arguments[i__43721__auto___44928]));

var G__44929 = (i__43721__auto___44928 + (1));
i__43721__auto___44928 = G__44929;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44924){
var map__44925 = p__44924;
var map__44925__$1 = ((((!((map__44925 == null)))?((((map__44925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44925):map__44925);
var opts = map__44925__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44922){
var G__44923 = cljs.core.first.call(null,seq44922);
var seq44922__$1 = cljs.core.next.call(null,seq44922);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44923,seq44922__$1);
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
var args44930 = [];
var len__43720__auto___44980 = arguments.length;
var i__43721__auto___44981 = (0);
while(true){
if((i__43721__auto___44981 < len__43720__auto___44980)){
args44930.push((arguments[i__43721__auto___44981]));

var G__44982 = (i__43721__auto___44981 + (1));
i__43721__auto___44981 = G__44982;
continue;
} else {
}
break;
}

var G__44932 = args44930.length;
switch (G__44932) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44930.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44817__auto___44984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___44984){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___44984){
return (function (state_44956){
var state_val_44957 = (state_44956[(1)]);
if((state_val_44957 === (7))){
var inst_44952 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44958_44985 = state_44956__$1;
(statearr_44958_44985[(2)] = inst_44952);

(statearr_44958_44985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (1))){
var state_44956__$1 = state_44956;
var statearr_44959_44986 = state_44956__$1;
(statearr_44959_44986[(2)] = null);

(statearr_44959_44986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (4))){
var inst_44935 = (state_44956[(7)]);
var inst_44935__$1 = (state_44956[(2)]);
var inst_44936 = (inst_44935__$1 == null);
var state_44956__$1 = (function (){var statearr_44960 = state_44956;
(statearr_44960[(7)] = inst_44935__$1);

return statearr_44960;
})();
if(cljs.core.truth_(inst_44936)){
var statearr_44961_44987 = state_44956__$1;
(statearr_44961_44987[(1)] = (5));

} else {
var statearr_44962_44988 = state_44956__$1;
(statearr_44962_44988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (13))){
var state_44956__$1 = state_44956;
var statearr_44963_44989 = state_44956__$1;
(statearr_44963_44989[(2)] = null);

(statearr_44963_44989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (6))){
var inst_44935 = (state_44956[(7)]);
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44956__$1,(11),to,inst_44935);
} else {
if((state_val_44957 === (3))){
var inst_44954 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44956__$1,inst_44954);
} else {
if((state_val_44957 === (12))){
var state_44956__$1 = state_44956;
var statearr_44964_44990 = state_44956__$1;
(statearr_44964_44990[(2)] = null);

(statearr_44964_44990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (2))){
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44956__$1,(4),from);
} else {
if((state_val_44957 === (11))){
var inst_44945 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
if(cljs.core.truth_(inst_44945)){
var statearr_44965_44991 = state_44956__$1;
(statearr_44965_44991[(1)] = (12));

} else {
var statearr_44966_44992 = state_44956__$1;
(statearr_44966_44992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (9))){
var state_44956__$1 = state_44956;
var statearr_44967_44993 = state_44956__$1;
(statearr_44967_44993[(2)] = null);

(statearr_44967_44993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (5))){
var state_44956__$1 = state_44956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44968_44994 = state_44956__$1;
(statearr_44968_44994[(1)] = (8));

} else {
var statearr_44969_44995 = state_44956__$1;
(statearr_44969_44995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (14))){
var inst_44950 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44970_44996 = state_44956__$1;
(statearr_44970_44996[(2)] = inst_44950);

(statearr_44970_44996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (10))){
var inst_44942 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44971_44997 = state_44956__$1;
(statearr_44971_44997[(2)] = inst_44942);

(statearr_44971_44997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (8))){
var inst_44939 = cljs.core.async.close_BANG_.call(null,to);
var state_44956__$1 = state_44956;
var statearr_44972_44998 = state_44956__$1;
(statearr_44972_44998[(2)] = inst_44939);

(statearr_44972_44998[(1)] = (10));


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
});})(c__44817__auto___44984))
;
return ((function (switch__44705__auto__,c__44817__auto___44984){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_44976 = [null,null,null,null,null,null,null,null];
(statearr_44976[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_44976[(1)] = (1));

return statearr_44976;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_44956){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_44956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e44977){if((e44977 instanceof Object)){
var ex__44709__auto__ = e44977;
var statearr_44978_44999 = state_44956;
(statearr_44978_44999[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45000 = state_44956;
state_44956 = G__45000;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_44956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_44956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___44984))
})();
var state__44819__auto__ = (function (){var statearr_44979 = f__44818__auto__.call(null);
(statearr_44979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___44984);

return statearr_44979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___44984))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45188){
var vec__45189 = p__45188;
var v = cljs.core.nth.call(null,vec__45189,(0),null);
var p = cljs.core.nth.call(null,vec__45189,(1),null);
var job = vec__45189;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44817__auto___45375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___45375,res,vec__45189,v,p,job,jobs,results){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___45375,res,vec__45189,v,p,job,jobs,results){
return (function (state_45196){
var state_val_45197 = (state_45196[(1)]);
if((state_val_45197 === (1))){
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45196__$1,(2),res,v);
} else {
if((state_val_45197 === (2))){
var inst_45193 = (state_45196[(2)]);
var inst_45194 = cljs.core.async.close_BANG_.call(null,res);
var state_45196__$1 = (function (){var statearr_45198 = state_45196;
(statearr_45198[(7)] = inst_45193);

return statearr_45198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45196__$1,inst_45194);
} else {
return null;
}
}
});})(c__44817__auto___45375,res,vec__45189,v,p,job,jobs,results))
;
return ((function (switch__44705__auto__,c__44817__auto___45375,res,vec__45189,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0 = (function (){
var statearr_45202 = [null,null,null,null,null,null,null,null];
(statearr_45202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__);

(statearr_45202[(1)] = (1));

return statearr_45202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1 = (function (state_45196){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45203){if((e45203 instanceof Object)){
var ex__44709__auto__ = e45203;
var statearr_45204_45376 = state_45196;
(statearr_45204_45376[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45377 = state_45196;
state_45196 = G__45377;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = function(state_45196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1.call(this,state_45196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___45375,res,vec__45189,v,p,job,jobs,results))
})();
var state__44819__auto__ = (function (){var statearr_45205 = f__44818__auto__.call(null);
(statearr_45205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___45375);

return statearr_45205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___45375,res,vec__45189,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45206){
var vec__45207 = p__45206;
var v = cljs.core.nth.call(null,vec__45207,(0),null);
var p = cljs.core.nth.call(null,vec__45207,(1),null);
var job = vec__45207;
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
var n__43560__auto___45378 = n;
var __45379 = (0);
while(true){
if((__45379 < n__43560__auto___45378)){
var G__45210_45380 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45210_45380) {
case "compute":
var c__44817__auto___45382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45379,c__44817__auto___45382,G__45210_45380,n__43560__auto___45378,jobs,results,process,async){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (__45379,c__44817__auto___45382,G__45210_45380,n__43560__auto___45378,jobs,results,process,async){
return (function (state_45223){
var state_val_45224 = (state_45223[(1)]);
if((state_val_45224 === (1))){
var state_45223__$1 = state_45223;
var statearr_45225_45383 = state_45223__$1;
(statearr_45225_45383[(2)] = null);

(statearr_45225_45383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (2))){
var state_45223__$1 = state_45223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45223__$1,(4),jobs);
} else {
if((state_val_45224 === (3))){
var inst_45221 = (state_45223[(2)]);
var state_45223__$1 = state_45223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45223__$1,inst_45221);
} else {
if((state_val_45224 === (4))){
var inst_45213 = (state_45223[(2)]);
var inst_45214 = process.call(null,inst_45213);
var state_45223__$1 = state_45223;
if(cljs.core.truth_(inst_45214)){
var statearr_45226_45384 = state_45223__$1;
(statearr_45226_45384[(1)] = (5));

} else {
var statearr_45227_45385 = state_45223__$1;
(statearr_45227_45385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (5))){
var state_45223__$1 = state_45223;
var statearr_45228_45386 = state_45223__$1;
(statearr_45228_45386[(2)] = null);

(statearr_45228_45386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (6))){
var state_45223__$1 = state_45223;
var statearr_45229_45387 = state_45223__$1;
(statearr_45229_45387[(2)] = null);

(statearr_45229_45387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45224 === (7))){
var inst_45219 = (state_45223[(2)]);
var state_45223__$1 = state_45223;
var statearr_45230_45388 = state_45223__$1;
(statearr_45230_45388[(2)] = inst_45219);

(statearr_45230_45388[(1)] = (3));


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
});})(__45379,c__44817__auto___45382,G__45210_45380,n__43560__auto___45378,jobs,results,process,async))
;
return ((function (__45379,switch__44705__auto__,c__44817__auto___45382,G__45210_45380,n__43560__auto___45378,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0 = (function (){
var statearr_45234 = [null,null,null,null,null,null,null];
(statearr_45234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__);

(statearr_45234[(1)] = (1));

return statearr_45234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1 = (function (state_45223){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45235){if((e45235 instanceof Object)){
var ex__44709__auto__ = e45235;
var statearr_45236_45389 = state_45223;
(statearr_45236_45389[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45390 = state_45223;
state_45223 = G__45390;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = function(state_45223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1.call(this,state_45223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__;
})()
;})(__45379,switch__44705__auto__,c__44817__auto___45382,G__45210_45380,n__43560__auto___45378,jobs,results,process,async))
})();
var state__44819__auto__ = (function (){var statearr_45237 = f__44818__auto__.call(null);
(statearr_45237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___45382);

return statearr_45237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(__45379,c__44817__auto___45382,G__45210_45380,n__43560__auto___45378,jobs,results,process,async))
);


break;
case "async":
var c__44817__auto___45391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45379,c__44817__auto___45391,G__45210_45380,n__43560__auto___45378,jobs,results,process,async){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (__45379,c__44817__auto___45391,G__45210_45380,n__43560__auto___45378,jobs,results,process,async){
return (function (state_45250){
var state_val_45251 = (state_45250[(1)]);
if((state_val_45251 === (1))){
var state_45250__$1 = state_45250;
var statearr_45252_45392 = state_45250__$1;
(statearr_45252_45392[(2)] = null);

(statearr_45252_45392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (2))){
var state_45250__$1 = state_45250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45250__$1,(4),jobs);
} else {
if((state_val_45251 === (3))){
var inst_45248 = (state_45250[(2)]);
var state_45250__$1 = state_45250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45250__$1,inst_45248);
} else {
if((state_val_45251 === (4))){
var inst_45240 = (state_45250[(2)]);
var inst_45241 = async.call(null,inst_45240);
var state_45250__$1 = state_45250;
if(cljs.core.truth_(inst_45241)){
var statearr_45253_45393 = state_45250__$1;
(statearr_45253_45393[(1)] = (5));

} else {
var statearr_45254_45394 = state_45250__$1;
(statearr_45254_45394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (5))){
var state_45250__$1 = state_45250;
var statearr_45255_45395 = state_45250__$1;
(statearr_45255_45395[(2)] = null);

(statearr_45255_45395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (6))){
var state_45250__$1 = state_45250;
var statearr_45256_45396 = state_45250__$1;
(statearr_45256_45396[(2)] = null);

(statearr_45256_45396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (7))){
var inst_45246 = (state_45250[(2)]);
var state_45250__$1 = state_45250;
var statearr_45257_45397 = state_45250__$1;
(statearr_45257_45397[(2)] = inst_45246);

(statearr_45257_45397[(1)] = (3));


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
});})(__45379,c__44817__auto___45391,G__45210_45380,n__43560__auto___45378,jobs,results,process,async))
;
return ((function (__45379,switch__44705__auto__,c__44817__auto___45391,G__45210_45380,n__43560__auto___45378,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0 = (function (){
var statearr_45261 = [null,null,null,null,null,null,null];
(statearr_45261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__);

(statearr_45261[(1)] = (1));

return statearr_45261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1 = (function (state_45250){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45262){if((e45262 instanceof Object)){
var ex__44709__auto__ = e45262;
var statearr_45263_45398 = state_45250;
(statearr_45263_45398[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45399 = state_45250;
state_45250 = G__45399;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = function(state_45250){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1.call(this,state_45250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__;
})()
;})(__45379,switch__44705__auto__,c__44817__auto___45391,G__45210_45380,n__43560__auto___45378,jobs,results,process,async))
})();
var state__44819__auto__ = (function (){var statearr_45264 = f__44818__auto__.call(null);
(statearr_45264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___45391);

return statearr_45264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(__45379,c__44817__auto___45391,G__45210_45380,n__43560__auto___45378,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__45400 = (__45379 + (1));
__45379 = G__45400;
continue;
} else {
}
break;
}

var c__44817__auto___45401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___45401,jobs,results,process,async){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___45401,jobs,results,process,async){
return (function (state_45286){
var state_val_45287 = (state_45286[(1)]);
if((state_val_45287 === (1))){
var state_45286__$1 = state_45286;
var statearr_45288_45402 = state_45286__$1;
(statearr_45288_45402[(2)] = null);

(statearr_45288_45402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (2))){
var state_45286__$1 = state_45286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45286__$1,(4),from);
} else {
if((state_val_45287 === (3))){
var inst_45284 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45286__$1,inst_45284);
} else {
if((state_val_45287 === (4))){
var inst_45267 = (state_45286[(7)]);
var inst_45267__$1 = (state_45286[(2)]);
var inst_45268 = (inst_45267__$1 == null);
var state_45286__$1 = (function (){var statearr_45289 = state_45286;
(statearr_45289[(7)] = inst_45267__$1);

return statearr_45289;
})();
if(cljs.core.truth_(inst_45268)){
var statearr_45290_45403 = state_45286__$1;
(statearr_45290_45403[(1)] = (5));

} else {
var statearr_45291_45404 = state_45286__$1;
(statearr_45291_45404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (5))){
var inst_45270 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45286__$1 = state_45286;
var statearr_45292_45405 = state_45286__$1;
(statearr_45292_45405[(2)] = inst_45270);

(statearr_45292_45405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (6))){
var inst_45267 = (state_45286[(7)]);
var inst_45272 = (state_45286[(8)]);
var inst_45272__$1 = cljs.core.async.chan.call(null,(1));
var inst_45273 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45274 = [inst_45267,inst_45272__$1];
var inst_45275 = (new cljs.core.PersistentVector(null,2,(5),inst_45273,inst_45274,null));
var state_45286__$1 = (function (){var statearr_45293 = state_45286;
(statearr_45293[(8)] = inst_45272__$1);

return statearr_45293;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45286__$1,(8),jobs,inst_45275);
} else {
if((state_val_45287 === (7))){
var inst_45282 = (state_45286[(2)]);
var state_45286__$1 = state_45286;
var statearr_45294_45406 = state_45286__$1;
(statearr_45294_45406[(2)] = inst_45282);

(statearr_45294_45406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45287 === (8))){
var inst_45272 = (state_45286[(8)]);
var inst_45277 = (state_45286[(2)]);
var state_45286__$1 = (function (){var statearr_45295 = state_45286;
(statearr_45295[(9)] = inst_45277);

return statearr_45295;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45286__$1,(9),results,inst_45272);
} else {
if((state_val_45287 === (9))){
var inst_45279 = (state_45286[(2)]);
var state_45286__$1 = (function (){var statearr_45296 = state_45286;
(statearr_45296[(10)] = inst_45279);

return statearr_45296;
})();
var statearr_45297_45407 = state_45286__$1;
(statearr_45297_45407[(2)] = null);

(statearr_45297_45407[(1)] = (2));


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
});})(c__44817__auto___45401,jobs,results,process,async))
;
return ((function (switch__44705__auto__,c__44817__auto___45401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0 = (function (){
var statearr_45301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__);

(statearr_45301[(1)] = (1));

return statearr_45301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1 = (function (state_45286){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45302){if((e45302 instanceof Object)){
var ex__44709__auto__ = e45302;
var statearr_45303_45408 = state_45286;
(statearr_45303_45408[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45409 = state_45286;
state_45286 = G__45409;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = function(state_45286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1.call(this,state_45286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___45401,jobs,results,process,async))
})();
var state__44819__auto__ = (function (){var statearr_45304 = f__44818__auto__.call(null);
(statearr_45304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___45401);

return statearr_45304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___45401,jobs,results,process,async))
);


var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,jobs,results,process,async){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,jobs,results,process,async){
return (function (state_45342){
var state_val_45343 = (state_45342[(1)]);
if((state_val_45343 === (7))){
var inst_45338 = (state_45342[(2)]);
var state_45342__$1 = state_45342;
var statearr_45344_45410 = state_45342__$1;
(statearr_45344_45410[(2)] = inst_45338);

(statearr_45344_45410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (20))){
var state_45342__$1 = state_45342;
var statearr_45345_45411 = state_45342__$1;
(statearr_45345_45411[(2)] = null);

(statearr_45345_45411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (1))){
var state_45342__$1 = state_45342;
var statearr_45346_45412 = state_45342__$1;
(statearr_45346_45412[(2)] = null);

(statearr_45346_45412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (4))){
var inst_45307 = (state_45342[(7)]);
var inst_45307__$1 = (state_45342[(2)]);
var inst_45308 = (inst_45307__$1 == null);
var state_45342__$1 = (function (){var statearr_45347 = state_45342;
(statearr_45347[(7)] = inst_45307__$1);

return statearr_45347;
})();
if(cljs.core.truth_(inst_45308)){
var statearr_45348_45413 = state_45342__$1;
(statearr_45348_45413[(1)] = (5));

} else {
var statearr_45349_45414 = state_45342__$1;
(statearr_45349_45414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (15))){
var inst_45320 = (state_45342[(8)]);
var state_45342__$1 = state_45342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45342__$1,(18),to,inst_45320);
} else {
if((state_val_45343 === (21))){
var inst_45333 = (state_45342[(2)]);
var state_45342__$1 = state_45342;
var statearr_45350_45415 = state_45342__$1;
(statearr_45350_45415[(2)] = inst_45333);

(statearr_45350_45415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (13))){
var inst_45335 = (state_45342[(2)]);
var state_45342__$1 = (function (){var statearr_45351 = state_45342;
(statearr_45351[(9)] = inst_45335);

return statearr_45351;
})();
var statearr_45352_45416 = state_45342__$1;
(statearr_45352_45416[(2)] = null);

(statearr_45352_45416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (6))){
var inst_45307 = (state_45342[(7)]);
var state_45342__$1 = state_45342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45342__$1,(11),inst_45307);
} else {
if((state_val_45343 === (17))){
var inst_45328 = (state_45342[(2)]);
var state_45342__$1 = state_45342;
if(cljs.core.truth_(inst_45328)){
var statearr_45353_45417 = state_45342__$1;
(statearr_45353_45417[(1)] = (19));

} else {
var statearr_45354_45418 = state_45342__$1;
(statearr_45354_45418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (3))){
var inst_45340 = (state_45342[(2)]);
var state_45342__$1 = state_45342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45342__$1,inst_45340);
} else {
if((state_val_45343 === (12))){
var inst_45317 = (state_45342[(10)]);
var state_45342__$1 = state_45342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45342__$1,(14),inst_45317);
} else {
if((state_val_45343 === (2))){
var state_45342__$1 = state_45342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45342__$1,(4),results);
} else {
if((state_val_45343 === (19))){
var state_45342__$1 = state_45342;
var statearr_45355_45419 = state_45342__$1;
(statearr_45355_45419[(2)] = null);

(statearr_45355_45419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (11))){
var inst_45317 = (state_45342[(2)]);
var state_45342__$1 = (function (){var statearr_45356 = state_45342;
(statearr_45356[(10)] = inst_45317);

return statearr_45356;
})();
var statearr_45357_45420 = state_45342__$1;
(statearr_45357_45420[(2)] = null);

(statearr_45357_45420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (9))){
var state_45342__$1 = state_45342;
var statearr_45358_45421 = state_45342__$1;
(statearr_45358_45421[(2)] = null);

(statearr_45358_45421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (5))){
var state_45342__$1 = state_45342;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45359_45422 = state_45342__$1;
(statearr_45359_45422[(1)] = (8));

} else {
var statearr_45360_45423 = state_45342__$1;
(statearr_45360_45423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (14))){
var inst_45320 = (state_45342[(8)]);
var inst_45322 = (state_45342[(11)]);
var inst_45320__$1 = (state_45342[(2)]);
var inst_45321 = (inst_45320__$1 == null);
var inst_45322__$1 = cljs.core.not.call(null,inst_45321);
var state_45342__$1 = (function (){var statearr_45361 = state_45342;
(statearr_45361[(8)] = inst_45320__$1);

(statearr_45361[(11)] = inst_45322__$1);

return statearr_45361;
})();
if(inst_45322__$1){
var statearr_45362_45424 = state_45342__$1;
(statearr_45362_45424[(1)] = (15));

} else {
var statearr_45363_45425 = state_45342__$1;
(statearr_45363_45425[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (16))){
var inst_45322 = (state_45342[(11)]);
var state_45342__$1 = state_45342;
var statearr_45364_45426 = state_45342__$1;
(statearr_45364_45426[(2)] = inst_45322);

(statearr_45364_45426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (10))){
var inst_45314 = (state_45342[(2)]);
var state_45342__$1 = state_45342;
var statearr_45365_45427 = state_45342__$1;
(statearr_45365_45427[(2)] = inst_45314);

(statearr_45365_45427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (18))){
var inst_45325 = (state_45342[(2)]);
var state_45342__$1 = state_45342;
var statearr_45366_45428 = state_45342__$1;
(statearr_45366_45428[(2)] = inst_45325);

(statearr_45366_45428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45343 === (8))){
var inst_45311 = cljs.core.async.close_BANG_.call(null,to);
var state_45342__$1 = state_45342;
var statearr_45367_45429 = state_45342__$1;
(statearr_45367_45429[(2)] = inst_45311);

(statearr_45367_45429[(1)] = (10));


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
});})(c__44817__auto__,jobs,results,process,async))
;
return ((function (switch__44705__auto__,c__44817__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0 = (function (){
var statearr_45371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__);

(statearr_45371[(1)] = (1));

return statearr_45371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1 = (function (state_45342){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45372){if((e45372 instanceof Object)){
var ex__44709__auto__ = e45372;
var statearr_45373_45430 = state_45342;
(statearr_45373_45430[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45431 = state_45342;
state_45342 = G__45431;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__ = function(state_45342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1.call(this,state_45342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,jobs,results,process,async))
})();
var state__44819__auto__ = (function (){var statearr_45374 = f__44818__auto__.call(null);
(statearr_45374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_45374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,jobs,results,process,async))
);

return c__44817__auto__;
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
var args45432 = [];
var len__43720__auto___45435 = arguments.length;
var i__43721__auto___45436 = (0);
while(true){
if((i__43721__auto___45436 < len__43720__auto___45435)){
args45432.push((arguments[i__43721__auto___45436]));

var G__45437 = (i__43721__auto___45436 + (1));
i__43721__auto___45436 = G__45437;
continue;
} else {
}
break;
}

var G__45434 = args45432.length;
switch (G__45434) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45432.length)].join('')));

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
var args45439 = [];
var len__43720__auto___45442 = arguments.length;
var i__43721__auto___45443 = (0);
while(true){
if((i__43721__auto___45443 < len__43720__auto___45442)){
args45439.push((arguments[i__43721__auto___45443]));

var G__45444 = (i__43721__auto___45443 + (1));
i__43721__auto___45443 = G__45444;
continue;
} else {
}
break;
}

var G__45441 = args45439.length;
switch (G__45441) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45439.length)].join('')));

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
var args45446 = [];
var len__43720__auto___45499 = arguments.length;
var i__43721__auto___45500 = (0);
while(true){
if((i__43721__auto___45500 < len__43720__auto___45499)){
args45446.push((arguments[i__43721__auto___45500]));

var G__45501 = (i__43721__auto___45500 + (1));
i__43721__auto___45500 = G__45501;
continue;
} else {
}
break;
}

var G__45448 = args45446.length;
switch (G__45448) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45446.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44817__auto___45503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___45503,tc,fc){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___45503,tc,fc){
return (function (state_45474){
var state_val_45475 = (state_45474[(1)]);
if((state_val_45475 === (7))){
var inst_45470 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45476_45504 = state_45474__$1;
(statearr_45476_45504[(2)] = inst_45470);

(statearr_45476_45504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (1))){
var state_45474__$1 = state_45474;
var statearr_45477_45505 = state_45474__$1;
(statearr_45477_45505[(2)] = null);

(statearr_45477_45505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (4))){
var inst_45451 = (state_45474[(7)]);
var inst_45451__$1 = (state_45474[(2)]);
var inst_45452 = (inst_45451__$1 == null);
var state_45474__$1 = (function (){var statearr_45478 = state_45474;
(statearr_45478[(7)] = inst_45451__$1);

return statearr_45478;
})();
if(cljs.core.truth_(inst_45452)){
var statearr_45479_45506 = state_45474__$1;
(statearr_45479_45506[(1)] = (5));

} else {
var statearr_45480_45507 = state_45474__$1;
(statearr_45480_45507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (13))){
var state_45474__$1 = state_45474;
var statearr_45481_45508 = state_45474__$1;
(statearr_45481_45508[(2)] = null);

(statearr_45481_45508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (6))){
var inst_45451 = (state_45474[(7)]);
var inst_45457 = p.call(null,inst_45451);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45457)){
var statearr_45482_45509 = state_45474__$1;
(statearr_45482_45509[(1)] = (9));

} else {
var statearr_45483_45510 = state_45474__$1;
(statearr_45483_45510[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (3))){
var inst_45472 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45474__$1,inst_45472);
} else {
if((state_val_45475 === (12))){
var state_45474__$1 = state_45474;
var statearr_45484_45511 = state_45474__$1;
(statearr_45484_45511[(2)] = null);

(statearr_45484_45511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (2))){
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45474__$1,(4),ch);
} else {
if((state_val_45475 === (11))){
var inst_45451 = (state_45474[(7)]);
var inst_45461 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45474__$1,(8),inst_45461,inst_45451);
} else {
if((state_val_45475 === (9))){
var state_45474__$1 = state_45474;
var statearr_45485_45512 = state_45474__$1;
(statearr_45485_45512[(2)] = tc);

(statearr_45485_45512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (5))){
var inst_45454 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45455 = cljs.core.async.close_BANG_.call(null,fc);
var state_45474__$1 = (function (){var statearr_45486 = state_45474;
(statearr_45486[(8)] = inst_45454);

return statearr_45486;
})();
var statearr_45487_45513 = state_45474__$1;
(statearr_45487_45513[(2)] = inst_45455);

(statearr_45487_45513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (14))){
var inst_45468 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45488_45514 = state_45474__$1;
(statearr_45488_45514[(2)] = inst_45468);

(statearr_45488_45514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (10))){
var state_45474__$1 = state_45474;
var statearr_45489_45515 = state_45474__$1;
(statearr_45489_45515[(2)] = fc);

(statearr_45489_45515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (8))){
var inst_45463 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45463)){
var statearr_45490_45516 = state_45474__$1;
(statearr_45490_45516[(1)] = (12));

} else {
var statearr_45491_45517 = state_45474__$1;
(statearr_45491_45517[(1)] = (13));

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
});})(c__44817__auto___45503,tc,fc))
;
return ((function (switch__44705__auto__,c__44817__auto___45503,tc,fc){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_45495 = [null,null,null,null,null,null,null,null,null];
(statearr_45495[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_45495[(1)] = (1));

return statearr_45495;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_45474){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45496){if((e45496 instanceof Object)){
var ex__44709__auto__ = e45496;
var statearr_45497_45518 = state_45474;
(statearr_45497_45518[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45519 = state_45474;
state_45474 = G__45519;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_45474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_45474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___45503,tc,fc))
})();
var state__44819__auto__ = (function (){var statearr_45498 = f__44818__auto__.call(null);
(statearr_45498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___45503);

return statearr_45498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___45503,tc,fc))
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
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__){
return (function (state_45583){
var state_val_45584 = (state_45583[(1)]);
if((state_val_45584 === (7))){
var inst_45579 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
var statearr_45585_45606 = state_45583__$1;
(statearr_45585_45606[(2)] = inst_45579);

(statearr_45585_45606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (1))){
var inst_45563 = init;
var state_45583__$1 = (function (){var statearr_45586 = state_45583;
(statearr_45586[(7)] = inst_45563);

return statearr_45586;
})();
var statearr_45587_45607 = state_45583__$1;
(statearr_45587_45607[(2)] = null);

(statearr_45587_45607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (4))){
var inst_45566 = (state_45583[(8)]);
var inst_45566__$1 = (state_45583[(2)]);
var inst_45567 = (inst_45566__$1 == null);
var state_45583__$1 = (function (){var statearr_45588 = state_45583;
(statearr_45588[(8)] = inst_45566__$1);

return statearr_45588;
})();
if(cljs.core.truth_(inst_45567)){
var statearr_45589_45608 = state_45583__$1;
(statearr_45589_45608[(1)] = (5));

} else {
var statearr_45590_45609 = state_45583__$1;
(statearr_45590_45609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (6))){
var inst_45566 = (state_45583[(8)]);
var inst_45570 = (state_45583[(9)]);
var inst_45563 = (state_45583[(7)]);
var inst_45570__$1 = f.call(null,inst_45563,inst_45566);
var inst_45571 = cljs.core.reduced_QMARK_.call(null,inst_45570__$1);
var state_45583__$1 = (function (){var statearr_45591 = state_45583;
(statearr_45591[(9)] = inst_45570__$1);

return statearr_45591;
})();
if(inst_45571){
var statearr_45592_45610 = state_45583__$1;
(statearr_45592_45610[(1)] = (8));

} else {
var statearr_45593_45611 = state_45583__$1;
(statearr_45593_45611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (3))){
var inst_45581 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45583__$1,inst_45581);
} else {
if((state_val_45584 === (2))){
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45583__$1,(4),ch);
} else {
if((state_val_45584 === (9))){
var inst_45570 = (state_45583[(9)]);
var inst_45563 = inst_45570;
var state_45583__$1 = (function (){var statearr_45594 = state_45583;
(statearr_45594[(7)] = inst_45563);

return statearr_45594;
})();
var statearr_45595_45612 = state_45583__$1;
(statearr_45595_45612[(2)] = null);

(statearr_45595_45612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (5))){
var inst_45563 = (state_45583[(7)]);
var state_45583__$1 = state_45583;
var statearr_45596_45613 = state_45583__$1;
(statearr_45596_45613[(2)] = inst_45563);

(statearr_45596_45613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (10))){
var inst_45577 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
var statearr_45597_45614 = state_45583__$1;
(statearr_45597_45614[(2)] = inst_45577);

(statearr_45597_45614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (8))){
var inst_45570 = (state_45583[(9)]);
var inst_45573 = cljs.core.deref.call(null,inst_45570);
var state_45583__$1 = state_45583;
var statearr_45598_45615 = state_45583__$1;
(statearr_45598_45615[(2)] = inst_45573);

(statearr_45598_45615[(1)] = (10));


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
});})(c__44817__auto__))
;
return ((function (switch__44705__auto__,c__44817__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44706__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44706__auto____0 = (function (){
var statearr_45602 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45602[(0)] = cljs$core$async$reduce_$_state_machine__44706__auto__);

(statearr_45602[(1)] = (1));

return statearr_45602;
});
var cljs$core$async$reduce_$_state_machine__44706__auto____1 = (function (state_45583){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45603){if((e45603 instanceof Object)){
var ex__44709__auto__ = e45603;
var statearr_45604_45616 = state_45583;
(statearr_45604_45616[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45617 = state_45583;
state_45583 = G__45617;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44706__auto__ = function(state_45583){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44706__auto____1.call(this,state_45583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44706__auto____0;
cljs$core$async$reduce_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44706__auto____1;
return cljs$core$async$reduce_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__))
})();
var state__44819__auto__ = (function (){var statearr_45605 = f__44818__auto__.call(null);
(statearr_45605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_45605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__))
);

return c__44817__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,f__$1){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,f__$1){
return (function (state_45637){
var state_val_45638 = (state_45637[(1)]);
if((state_val_45638 === (1))){
var inst_45632 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45637__$1,(2),inst_45632);
} else {
if((state_val_45638 === (2))){
var inst_45634 = (state_45637[(2)]);
var inst_45635 = f__$1.call(null,inst_45634);
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45637__$1,inst_45635);
} else {
return null;
}
}
});})(c__44817__auto__,f__$1))
;
return ((function (switch__44705__auto__,c__44817__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44706__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44706__auto____0 = (function (){
var statearr_45642 = [null,null,null,null,null,null,null];
(statearr_45642[(0)] = cljs$core$async$transduce_$_state_machine__44706__auto__);

(statearr_45642[(1)] = (1));

return statearr_45642;
});
var cljs$core$async$transduce_$_state_machine__44706__auto____1 = (function (state_45637){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45643){if((e45643 instanceof Object)){
var ex__44709__auto__ = e45643;
var statearr_45644_45646 = state_45637;
(statearr_45644_45646[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45647 = state_45637;
state_45637 = G__45647;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44706__auto__ = function(state_45637){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44706__auto____1.call(this,state_45637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44706__auto____0;
cljs$core$async$transduce_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44706__auto____1;
return cljs$core$async$transduce_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,f__$1))
})();
var state__44819__auto__ = (function (){var statearr_45645 = f__44818__auto__.call(null);
(statearr_45645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_45645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,f__$1))
);

return c__44817__auto__;
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
var args45648 = [];
var len__43720__auto___45700 = arguments.length;
var i__43721__auto___45701 = (0);
while(true){
if((i__43721__auto___45701 < len__43720__auto___45700)){
args45648.push((arguments[i__43721__auto___45701]));

var G__45702 = (i__43721__auto___45701 + (1));
i__43721__auto___45701 = G__45702;
continue;
} else {
}
break;
}

var G__45650 = args45648.length;
switch (G__45650) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45648.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__){
return (function (state_45675){
var state_val_45676 = (state_45675[(1)]);
if((state_val_45676 === (7))){
var inst_45657 = (state_45675[(2)]);
var state_45675__$1 = state_45675;
var statearr_45677_45704 = state_45675__$1;
(statearr_45677_45704[(2)] = inst_45657);

(statearr_45677_45704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (1))){
var inst_45651 = cljs.core.seq.call(null,coll);
var inst_45652 = inst_45651;
var state_45675__$1 = (function (){var statearr_45678 = state_45675;
(statearr_45678[(7)] = inst_45652);

return statearr_45678;
})();
var statearr_45679_45705 = state_45675__$1;
(statearr_45679_45705[(2)] = null);

(statearr_45679_45705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (4))){
var inst_45652 = (state_45675[(7)]);
var inst_45655 = cljs.core.first.call(null,inst_45652);
var state_45675__$1 = state_45675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45675__$1,(7),ch,inst_45655);
} else {
if((state_val_45676 === (13))){
var inst_45669 = (state_45675[(2)]);
var state_45675__$1 = state_45675;
var statearr_45680_45706 = state_45675__$1;
(statearr_45680_45706[(2)] = inst_45669);

(statearr_45680_45706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (6))){
var inst_45660 = (state_45675[(2)]);
var state_45675__$1 = state_45675;
if(cljs.core.truth_(inst_45660)){
var statearr_45681_45707 = state_45675__$1;
(statearr_45681_45707[(1)] = (8));

} else {
var statearr_45682_45708 = state_45675__$1;
(statearr_45682_45708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (3))){
var inst_45673 = (state_45675[(2)]);
var state_45675__$1 = state_45675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45675__$1,inst_45673);
} else {
if((state_val_45676 === (12))){
var state_45675__$1 = state_45675;
var statearr_45683_45709 = state_45675__$1;
(statearr_45683_45709[(2)] = null);

(statearr_45683_45709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (2))){
var inst_45652 = (state_45675[(7)]);
var state_45675__$1 = state_45675;
if(cljs.core.truth_(inst_45652)){
var statearr_45684_45710 = state_45675__$1;
(statearr_45684_45710[(1)] = (4));

} else {
var statearr_45685_45711 = state_45675__$1;
(statearr_45685_45711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (11))){
var inst_45666 = cljs.core.async.close_BANG_.call(null,ch);
var state_45675__$1 = state_45675;
var statearr_45686_45712 = state_45675__$1;
(statearr_45686_45712[(2)] = inst_45666);

(statearr_45686_45712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (9))){
var state_45675__$1 = state_45675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45687_45713 = state_45675__$1;
(statearr_45687_45713[(1)] = (11));

} else {
var statearr_45688_45714 = state_45675__$1;
(statearr_45688_45714[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (5))){
var inst_45652 = (state_45675[(7)]);
var state_45675__$1 = state_45675;
var statearr_45689_45715 = state_45675__$1;
(statearr_45689_45715[(2)] = inst_45652);

(statearr_45689_45715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (10))){
var inst_45671 = (state_45675[(2)]);
var state_45675__$1 = state_45675;
var statearr_45690_45716 = state_45675__$1;
(statearr_45690_45716[(2)] = inst_45671);

(statearr_45690_45716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (8))){
var inst_45652 = (state_45675[(7)]);
var inst_45662 = cljs.core.next.call(null,inst_45652);
var inst_45652__$1 = inst_45662;
var state_45675__$1 = (function (){var statearr_45691 = state_45675;
(statearr_45691[(7)] = inst_45652__$1);

return statearr_45691;
})();
var statearr_45692_45717 = state_45675__$1;
(statearr_45692_45717[(2)] = null);

(statearr_45692_45717[(1)] = (2));


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
});})(c__44817__auto__))
;
return ((function (switch__44705__auto__,c__44817__auto__){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_45696 = [null,null,null,null,null,null,null,null];
(statearr_45696[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_45696[(1)] = (1));

return statearr_45696;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_45675){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_45675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e45697){if((e45697 instanceof Object)){
var ex__44709__auto__ = e45697;
var statearr_45698_45718 = state_45675;
(statearr_45698_45718[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45719 = state_45675;
state_45675 = G__45719;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_45675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_45675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__))
})();
var state__44819__auto__ = (function (){var statearr_45699 = f__44818__auto__.call(null);
(statearr_45699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_45699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__))
);

return c__44817__auto__;
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
var x__43308__auto__ = (((_ == null))?null:_);
var m__43309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,_);
} else {
var m__43309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,_);
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
var x__43308__auto__ = (((m == null))?null:m);
var m__43309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__43309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__43308__auto__ = (((m == null))?null:m);
var m__43309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,m,ch);
} else {
var m__43309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,m,ch);
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
var x__43308__auto__ = (((m == null))?null:m);
var m__43309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,m);
} else {
var m__43309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async45945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45945 = (function (mult,ch,cs,meta45946){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45946 = meta45946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45947,meta45946__$1){
var self__ = this;
var _45947__$1 = this;
return (new cljs.core.async.t_cljs$core$async45945(self__.mult,self__.ch,self__.cs,meta45946__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45947){
var self__ = this;
var _45947__$1 = this;
return self__.meta45946;
});})(cs))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45945.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45946","meta45946",1499838719,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45945";

cljs.core.async.t_cljs$core$async45945.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async45945");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45945 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45945(mult__$1,ch__$1,cs__$1,meta45946){
return (new cljs.core.async.t_cljs$core$async45945(mult__$1,ch__$1,cs__$1,meta45946));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45945(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44817__auto___46170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___46170,cs,m,dchan,dctr,done){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___46170,cs,m,dchan,dctr,done){
return (function (state_46082){
var state_val_46083 = (state_46082[(1)]);
if((state_val_46083 === (7))){
var inst_46078 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46084_46171 = state_46082__$1;
(statearr_46084_46171[(2)] = inst_46078);

(statearr_46084_46171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (20))){
var inst_45981 = (state_46082[(7)]);
var inst_45993 = cljs.core.first.call(null,inst_45981);
var inst_45994 = cljs.core.nth.call(null,inst_45993,(0),null);
var inst_45995 = cljs.core.nth.call(null,inst_45993,(1),null);
var state_46082__$1 = (function (){var statearr_46085 = state_46082;
(statearr_46085[(8)] = inst_45994);

return statearr_46085;
})();
if(cljs.core.truth_(inst_45995)){
var statearr_46086_46172 = state_46082__$1;
(statearr_46086_46172[(1)] = (22));

} else {
var statearr_46087_46173 = state_46082__$1;
(statearr_46087_46173[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (27))){
var inst_46025 = (state_46082[(9)]);
var inst_46030 = (state_46082[(10)]);
var inst_46023 = (state_46082[(11)]);
var inst_45950 = (state_46082[(12)]);
var inst_46030__$1 = cljs.core._nth.call(null,inst_46023,inst_46025);
var inst_46031 = cljs.core.async.put_BANG_.call(null,inst_46030__$1,inst_45950,done);
var state_46082__$1 = (function (){var statearr_46088 = state_46082;
(statearr_46088[(10)] = inst_46030__$1);

return statearr_46088;
})();
if(cljs.core.truth_(inst_46031)){
var statearr_46089_46174 = state_46082__$1;
(statearr_46089_46174[(1)] = (30));

} else {
var statearr_46090_46175 = state_46082__$1;
(statearr_46090_46175[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (1))){
var state_46082__$1 = state_46082;
var statearr_46091_46176 = state_46082__$1;
(statearr_46091_46176[(2)] = null);

(statearr_46091_46176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (24))){
var inst_45981 = (state_46082[(7)]);
var inst_46000 = (state_46082[(2)]);
var inst_46001 = cljs.core.next.call(null,inst_45981);
var inst_45959 = inst_46001;
var inst_45960 = null;
var inst_45961 = (0);
var inst_45962 = (0);
var state_46082__$1 = (function (){var statearr_46092 = state_46082;
(statearr_46092[(13)] = inst_45962);

(statearr_46092[(14)] = inst_45960);

(statearr_46092[(15)] = inst_46000);

(statearr_46092[(16)] = inst_45961);

(statearr_46092[(17)] = inst_45959);

return statearr_46092;
})();
var statearr_46093_46177 = state_46082__$1;
(statearr_46093_46177[(2)] = null);

(statearr_46093_46177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (39))){
var state_46082__$1 = state_46082;
var statearr_46097_46178 = state_46082__$1;
(statearr_46097_46178[(2)] = null);

(statearr_46097_46178[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (4))){
var inst_45950 = (state_46082[(12)]);
var inst_45950__$1 = (state_46082[(2)]);
var inst_45951 = (inst_45950__$1 == null);
var state_46082__$1 = (function (){var statearr_46098 = state_46082;
(statearr_46098[(12)] = inst_45950__$1);

return statearr_46098;
})();
if(cljs.core.truth_(inst_45951)){
var statearr_46099_46179 = state_46082__$1;
(statearr_46099_46179[(1)] = (5));

} else {
var statearr_46100_46180 = state_46082__$1;
(statearr_46100_46180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (15))){
var inst_45962 = (state_46082[(13)]);
var inst_45960 = (state_46082[(14)]);
var inst_45961 = (state_46082[(16)]);
var inst_45959 = (state_46082[(17)]);
var inst_45977 = (state_46082[(2)]);
var inst_45978 = (inst_45962 + (1));
var tmp46094 = inst_45960;
var tmp46095 = inst_45961;
var tmp46096 = inst_45959;
var inst_45959__$1 = tmp46096;
var inst_45960__$1 = tmp46094;
var inst_45961__$1 = tmp46095;
var inst_45962__$1 = inst_45978;
var state_46082__$1 = (function (){var statearr_46101 = state_46082;
(statearr_46101[(13)] = inst_45962__$1);

(statearr_46101[(14)] = inst_45960__$1);

(statearr_46101[(18)] = inst_45977);

(statearr_46101[(16)] = inst_45961__$1);

(statearr_46101[(17)] = inst_45959__$1);

return statearr_46101;
})();
var statearr_46102_46181 = state_46082__$1;
(statearr_46102_46181[(2)] = null);

(statearr_46102_46181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (21))){
var inst_46004 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46106_46182 = state_46082__$1;
(statearr_46106_46182[(2)] = inst_46004);

(statearr_46106_46182[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (31))){
var inst_46030 = (state_46082[(10)]);
var inst_46034 = done.call(null,null);
var inst_46035 = cljs.core.async.untap_STAR_.call(null,m,inst_46030);
var state_46082__$1 = (function (){var statearr_46107 = state_46082;
(statearr_46107[(19)] = inst_46034);

return statearr_46107;
})();
var statearr_46108_46183 = state_46082__$1;
(statearr_46108_46183[(2)] = inst_46035);

(statearr_46108_46183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (32))){
var inst_46025 = (state_46082[(9)]);
var inst_46024 = (state_46082[(20)]);
var inst_46023 = (state_46082[(11)]);
var inst_46022 = (state_46082[(21)]);
var inst_46037 = (state_46082[(2)]);
var inst_46038 = (inst_46025 + (1));
var tmp46103 = inst_46024;
var tmp46104 = inst_46023;
var tmp46105 = inst_46022;
var inst_46022__$1 = tmp46105;
var inst_46023__$1 = tmp46104;
var inst_46024__$1 = tmp46103;
var inst_46025__$1 = inst_46038;
var state_46082__$1 = (function (){var statearr_46109 = state_46082;
(statearr_46109[(9)] = inst_46025__$1);

(statearr_46109[(20)] = inst_46024__$1);

(statearr_46109[(22)] = inst_46037);

(statearr_46109[(11)] = inst_46023__$1);

(statearr_46109[(21)] = inst_46022__$1);

return statearr_46109;
})();
var statearr_46110_46184 = state_46082__$1;
(statearr_46110_46184[(2)] = null);

(statearr_46110_46184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (40))){
var inst_46050 = (state_46082[(23)]);
var inst_46054 = done.call(null,null);
var inst_46055 = cljs.core.async.untap_STAR_.call(null,m,inst_46050);
var state_46082__$1 = (function (){var statearr_46111 = state_46082;
(statearr_46111[(24)] = inst_46054);

return statearr_46111;
})();
var statearr_46112_46185 = state_46082__$1;
(statearr_46112_46185[(2)] = inst_46055);

(statearr_46112_46185[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (33))){
var inst_46041 = (state_46082[(25)]);
var inst_46043 = cljs.core.chunked_seq_QMARK_.call(null,inst_46041);
var state_46082__$1 = state_46082;
if(inst_46043){
var statearr_46113_46186 = state_46082__$1;
(statearr_46113_46186[(1)] = (36));

} else {
var statearr_46114_46187 = state_46082__$1;
(statearr_46114_46187[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (13))){
var inst_45971 = (state_46082[(26)]);
var inst_45974 = cljs.core.async.close_BANG_.call(null,inst_45971);
var state_46082__$1 = state_46082;
var statearr_46115_46188 = state_46082__$1;
(statearr_46115_46188[(2)] = inst_45974);

(statearr_46115_46188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (22))){
var inst_45994 = (state_46082[(8)]);
var inst_45997 = cljs.core.async.close_BANG_.call(null,inst_45994);
var state_46082__$1 = state_46082;
var statearr_46116_46189 = state_46082__$1;
(statearr_46116_46189[(2)] = inst_45997);

(statearr_46116_46189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (36))){
var inst_46041 = (state_46082[(25)]);
var inst_46045 = cljs.core.chunk_first.call(null,inst_46041);
var inst_46046 = cljs.core.chunk_rest.call(null,inst_46041);
var inst_46047 = cljs.core.count.call(null,inst_46045);
var inst_46022 = inst_46046;
var inst_46023 = inst_46045;
var inst_46024 = inst_46047;
var inst_46025 = (0);
var state_46082__$1 = (function (){var statearr_46117 = state_46082;
(statearr_46117[(9)] = inst_46025);

(statearr_46117[(20)] = inst_46024);

(statearr_46117[(11)] = inst_46023);

(statearr_46117[(21)] = inst_46022);

return statearr_46117;
})();
var statearr_46118_46190 = state_46082__$1;
(statearr_46118_46190[(2)] = null);

(statearr_46118_46190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (41))){
var inst_46041 = (state_46082[(25)]);
var inst_46057 = (state_46082[(2)]);
var inst_46058 = cljs.core.next.call(null,inst_46041);
var inst_46022 = inst_46058;
var inst_46023 = null;
var inst_46024 = (0);
var inst_46025 = (0);
var state_46082__$1 = (function (){var statearr_46119 = state_46082;
(statearr_46119[(9)] = inst_46025);

(statearr_46119[(20)] = inst_46024);

(statearr_46119[(11)] = inst_46023);

(statearr_46119[(27)] = inst_46057);

(statearr_46119[(21)] = inst_46022);

return statearr_46119;
})();
var statearr_46120_46191 = state_46082__$1;
(statearr_46120_46191[(2)] = null);

(statearr_46120_46191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (43))){
var state_46082__$1 = state_46082;
var statearr_46121_46192 = state_46082__$1;
(statearr_46121_46192[(2)] = null);

(statearr_46121_46192[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (29))){
var inst_46066 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46122_46193 = state_46082__$1;
(statearr_46122_46193[(2)] = inst_46066);

(statearr_46122_46193[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (44))){
var inst_46075 = (state_46082[(2)]);
var state_46082__$1 = (function (){var statearr_46123 = state_46082;
(statearr_46123[(28)] = inst_46075);

return statearr_46123;
})();
var statearr_46124_46194 = state_46082__$1;
(statearr_46124_46194[(2)] = null);

(statearr_46124_46194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (6))){
var inst_46014 = (state_46082[(29)]);
var inst_46013 = cljs.core.deref.call(null,cs);
var inst_46014__$1 = cljs.core.keys.call(null,inst_46013);
var inst_46015 = cljs.core.count.call(null,inst_46014__$1);
var inst_46016 = cljs.core.reset_BANG_.call(null,dctr,inst_46015);
var inst_46021 = cljs.core.seq.call(null,inst_46014__$1);
var inst_46022 = inst_46021;
var inst_46023 = null;
var inst_46024 = (0);
var inst_46025 = (0);
var state_46082__$1 = (function (){var statearr_46125 = state_46082;
(statearr_46125[(9)] = inst_46025);

(statearr_46125[(20)] = inst_46024);

(statearr_46125[(11)] = inst_46023);

(statearr_46125[(29)] = inst_46014__$1);

(statearr_46125[(30)] = inst_46016);

(statearr_46125[(21)] = inst_46022);

return statearr_46125;
})();
var statearr_46126_46195 = state_46082__$1;
(statearr_46126_46195[(2)] = null);

(statearr_46126_46195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (28))){
var inst_46041 = (state_46082[(25)]);
var inst_46022 = (state_46082[(21)]);
var inst_46041__$1 = cljs.core.seq.call(null,inst_46022);
var state_46082__$1 = (function (){var statearr_46127 = state_46082;
(statearr_46127[(25)] = inst_46041__$1);

return statearr_46127;
})();
if(inst_46041__$1){
var statearr_46128_46196 = state_46082__$1;
(statearr_46128_46196[(1)] = (33));

} else {
var statearr_46129_46197 = state_46082__$1;
(statearr_46129_46197[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (25))){
var inst_46025 = (state_46082[(9)]);
var inst_46024 = (state_46082[(20)]);
var inst_46027 = (inst_46025 < inst_46024);
var inst_46028 = inst_46027;
var state_46082__$1 = state_46082;
if(cljs.core.truth_(inst_46028)){
var statearr_46130_46198 = state_46082__$1;
(statearr_46130_46198[(1)] = (27));

} else {
var statearr_46131_46199 = state_46082__$1;
(statearr_46131_46199[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (34))){
var state_46082__$1 = state_46082;
var statearr_46132_46200 = state_46082__$1;
(statearr_46132_46200[(2)] = null);

(statearr_46132_46200[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (17))){
var state_46082__$1 = state_46082;
var statearr_46133_46201 = state_46082__$1;
(statearr_46133_46201[(2)] = null);

(statearr_46133_46201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (3))){
var inst_46080 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46082__$1,inst_46080);
} else {
if((state_val_46083 === (12))){
var inst_46009 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46134_46202 = state_46082__$1;
(statearr_46134_46202[(2)] = inst_46009);

(statearr_46134_46202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (2))){
var state_46082__$1 = state_46082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46082__$1,(4),ch);
} else {
if((state_val_46083 === (23))){
var state_46082__$1 = state_46082;
var statearr_46135_46203 = state_46082__$1;
(statearr_46135_46203[(2)] = null);

(statearr_46135_46203[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (35))){
var inst_46064 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46136_46204 = state_46082__$1;
(statearr_46136_46204[(2)] = inst_46064);

(statearr_46136_46204[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (19))){
var inst_45981 = (state_46082[(7)]);
var inst_45985 = cljs.core.chunk_first.call(null,inst_45981);
var inst_45986 = cljs.core.chunk_rest.call(null,inst_45981);
var inst_45987 = cljs.core.count.call(null,inst_45985);
var inst_45959 = inst_45986;
var inst_45960 = inst_45985;
var inst_45961 = inst_45987;
var inst_45962 = (0);
var state_46082__$1 = (function (){var statearr_46137 = state_46082;
(statearr_46137[(13)] = inst_45962);

(statearr_46137[(14)] = inst_45960);

(statearr_46137[(16)] = inst_45961);

(statearr_46137[(17)] = inst_45959);

return statearr_46137;
})();
var statearr_46138_46205 = state_46082__$1;
(statearr_46138_46205[(2)] = null);

(statearr_46138_46205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (11))){
var inst_45981 = (state_46082[(7)]);
var inst_45959 = (state_46082[(17)]);
var inst_45981__$1 = cljs.core.seq.call(null,inst_45959);
var state_46082__$1 = (function (){var statearr_46139 = state_46082;
(statearr_46139[(7)] = inst_45981__$1);

return statearr_46139;
})();
if(inst_45981__$1){
var statearr_46140_46206 = state_46082__$1;
(statearr_46140_46206[(1)] = (16));

} else {
var statearr_46141_46207 = state_46082__$1;
(statearr_46141_46207[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (9))){
var inst_46011 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46142_46208 = state_46082__$1;
(statearr_46142_46208[(2)] = inst_46011);

(statearr_46142_46208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (5))){
var inst_45957 = cljs.core.deref.call(null,cs);
var inst_45958 = cljs.core.seq.call(null,inst_45957);
var inst_45959 = inst_45958;
var inst_45960 = null;
var inst_45961 = (0);
var inst_45962 = (0);
var state_46082__$1 = (function (){var statearr_46143 = state_46082;
(statearr_46143[(13)] = inst_45962);

(statearr_46143[(14)] = inst_45960);

(statearr_46143[(16)] = inst_45961);

(statearr_46143[(17)] = inst_45959);

return statearr_46143;
})();
var statearr_46144_46209 = state_46082__$1;
(statearr_46144_46209[(2)] = null);

(statearr_46144_46209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (14))){
var state_46082__$1 = state_46082;
var statearr_46145_46210 = state_46082__$1;
(statearr_46145_46210[(2)] = null);

(statearr_46145_46210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (45))){
var inst_46072 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46146_46211 = state_46082__$1;
(statearr_46146_46211[(2)] = inst_46072);

(statearr_46146_46211[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (26))){
var inst_46014 = (state_46082[(29)]);
var inst_46068 = (state_46082[(2)]);
var inst_46069 = cljs.core.seq.call(null,inst_46014);
var state_46082__$1 = (function (){var statearr_46147 = state_46082;
(statearr_46147[(31)] = inst_46068);

return statearr_46147;
})();
if(inst_46069){
var statearr_46148_46212 = state_46082__$1;
(statearr_46148_46212[(1)] = (42));

} else {
var statearr_46149_46213 = state_46082__$1;
(statearr_46149_46213[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (16))){
var inst_45981 = (state_46082[(7)]);
var inst_45983 = cljs.core.chunked_seq_QMARK_.call(null,inst_45981);
var state_46082__$1 = state_46082;
if(inst_45983){
var statearr_46150_46214 = state_46082__$1;
(statearr_46150_46214[(1)] = (19));

} else {
var statearr_46151_46215 = state_46082__$1;
(statearr_46151_46215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (38))){
var inst_46061 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46152_46216 = state_46082__$1;
(statearr_46152_46216[(2)] = inst_46061);

(statearr_46152_46216[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (30))){
var state_46082__$1 = state_46082;
var statearr_46153_46217 = state_46082__$1;
(statearr_46153_46217[(2)] = null);

(statearr_46153_46217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (10))){
var inst_45962 = (state_46082[(13)]);
var inst_45960 = (state_46082[(14)]);
var inst_45970 = cljs.core._nth.call(null,inst_45960,inst_45962);
var inst_45971 = cljs.core.nth.call(null,inst_45970,(0),null);
var inst_45972 = cljs.core.nth.call(null,inst_45970,(1),null);
var state_46082__$1 = (function (){var statearr_46154 = state_46082;
(statearr_46154[(26)] = inst_45971);

return statearr_46154;
})();
if(cljs.core.truth_(inst_45972)){
var statearr_46155_46218 = state_46082__$1;
(statearr_46155_46218[(1)] = (13));

} else {
var statearr_46156_46219 = state_46082__$1;
(statearr_46156_46219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (18))){
var inst_46007 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46157_46220 = state_46082__$1;
(statearr_46157_46220[(2)] = inst_46007);

(statearr_46157_46220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (42))){
var state_46082__$1 = state_46082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46082__$1,(45),dchan);
} else {
if((state_val_46083 === (37))){
var inst_45950 = (state_46082[(12)]);
var inst_46041 = (state_46082[(25)]);
var inst_46050 = (state_46082[(23)]);
var inst_46050__$1 = cljs.core.first.call(null,inst_46041);
var inst_46051 = cljs.core.async.put_BANG_.call(null,inst_46050__$1,inst_45950,done);
var state_46082__$1 = (function (){var statearr_46158 = state_46082;
(statearr_46158[(23)] = inst_46050__$1);

return statearr_46158;
})();
if(cljs.core.truth_(inst_46051)){
var statearr_46159_46221 = state_46082__$1;
(statearr_46159_46221[(1)] = (39));

} else {
var statearr_46160_46222 = state_46082__$1;
(statearr_46160_46222[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (8))){
var inst_45962 = (state_46082[(13)]);
var inst_45961 = (state_46082[(16)]);
var inst_45964 = (inst_45962 < inst_45961);
var inst_45965 = inst_45964;
var state_46082__$1 = state_46082;
if(cljs.core.truth_(inst_45965)){
var statearr_46161_46223 = state_46082__$1;
(statearr_46161_46223[(1)] = (10));

} else {
var statearr_46162_46224 = state_46082__$1;
(statearr_46162_46224[(1)] = (11));

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
});})(c__44817__auto___46170,cs,m,dchan,dctr,done))
;
return ((function (switch__44705__auto__,c__44817__auto___46170,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44706__auto__ = null;
var cljs$core$async$mult_$_state_machine__44706__auto____0 = (function (){
var statearr_46166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46166[(0)] = cljs$core$async$mult_$_state_machine__44706__auto__);

(statearr_46166[(1)] = (1));

return statearr_46166;
});
var cljs$core$async$mult_$_state_machine__44706__auto____1 = (function (state_46082){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_46082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e46167){if((e46167 instanceof Object)){
var ex__44709__auto__ = e46167;
var statearr_46168_46225 = state_46082;
(statearr_46168_46225[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46226 = state_46082;
state_46082 = G__46226;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44706__auto__ = function(state_46082){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44706__auto____1.call(this,state_46082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44706__auto____0;
cljs$core$async$mult_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44706__auto____1;
return cljs$core$async$mult_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___46170,cs,m,dchan,dctr,done))
})();
var state__44819__auto__ = (function (){var statearr_46169 = f__44818__auto__.call(null);
(statearr_46169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___46170);

return statearr_46169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___46170,cs,m,dchan,dctr,done))
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
var args46227 = [];
var len__43720__auto___46230 = arguments.length;
var i__43721__auto___46231 = (0);
while(true){
if((i__43721__auto___46231 < len__43720__auto___46230)){
args46227.push((arguments[i__43721__auto___46231]));

var G__46232 = (i__43721__auto___46231 + (1));
i__43721__auto___46231 = G__46232;
continue;
} else {
}
break;
}

var G__46229 = args46227.length;
switch (G__46229) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46227.length)].join('')));

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
var x__43308__auto__ = (((m == null))?null:m);
var m__43309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,m,ch);
} else {
var m__43309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,m,ch);
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
var x__43308__auto__ = (((m == null))?null:m);
var m__43309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,m,ch);
} else {
var m__43309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,m,ch);
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
var x__43308__auto__ = (((m == null))?null:m);
var m__43309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,m);
} else {
var m__43309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,m);
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
var x__43308__auto__ = (((m == null))?null:m);
var m__43309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,m,state_map);
} else {
var m__43309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,m,state_map);
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
var x__43308__auto__ = (((m == null))?null:m);
var m__43309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,m,mode);
} else {
var m__43309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__43727__auto__ = [];
var len__43720__auto___46244 = arguments.length;
var i__43721__auto___46245 = (0);
while(true){
if((i__43721__auto___46245 < len__43720__auto___46244)){
args__43727__auto__.push((arguments[i__43721__auto___46245]));

var G__46246 = (i__43721__auto___46245 + (1));
i__43721__auto___46245 = G__46246;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((3) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__43728__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46238){
var map__46239 = p__46238;
var map__46239__$1 = ((((!((map__46239 == null)))?((((map__46239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46239):map__46239);
var opts = map__46239__$1;
var statearr_46241_46247 = state;
(statearr_46241_46247[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46239,map__46239__$1,opts){
return (function (val){
var statearr_46242_46248 = state;
(statearr_46242_46248[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46239,map__46239__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46243_46249 = state;
(statearr_46243_46249[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46234){
var G__46235 = cljs.core.first.call(null,seq46234);
var seq46234__$1 = cljs.core.next.call(null,seq46234);
var G__46236 = cljs.core.first.call(null,seq46234__$1);
var seq46234__$2 = cljs.core.next.call(null,seq46234__$1);
var G__46237 = cljs.core.first.call(null,seq46234__$2);
var seq46234__$3 = cljs.core.next.call(null,seq46234__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46235,G__46236,G__46237,seq46234__$3);
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
if(typeof cljs.core.async.t_cljs$core$async46415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46415 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46416){
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
this.meta46416 = meta46416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46417,meta46416__$1){
var self__ = this;
var _46417__$1 = this;
return (new cljs.core.async.t_cljs$core$async46415(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46416__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46417){
var self__ = this;
var _46417__$1 = this;
return self__.meta46416;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46416","meta46416",-25708144,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46415";

cljs.core.async.t_cljs$core$async46415.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async46415");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46415 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46415(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46416){
return (new cljs.core.async.t_cljs$core$async46415(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46416));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46415(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44817__auto___46580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___46580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___46580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46517){
var state_val_46518 = (state_46517[(1)]);
if((state_val_46518 === (7))){
var inst_46433 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46519_46581 = state_46517__$1;
(statearr_46519_46581[(2)] = inst_46433);

(statearr_46519_46581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (20))){
var inst_46445 = (state_46517[(7)]);
var state_46517__$1 = state_46517;
var statearr_46520_46582 = state_46517__$1;
(statearr_46520_46582[(2)] = inst_46445);

(statearr_46520_46582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (27))){
var state_46517__$1 = state_46517;
var statearr_46521_46583 = state_46517__$1;
(statearr_46521_46583[(2)] = null);

(statearr_46521_46583[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (1))){
var inst_46421 = (state_46517[(8)]);
var inst_46421__$1 = calc_state.call(null);
var inst_46423 = (inst_46421__$1 == null);
var inst_46424 = cljs.core.not.call(null,inst_46423);
var state_46517__$1 = (function (){var statearr_46522 = state_46517;
(statearr_46522[(8)] = inst_46421__$1);

return statearr_46522;
})();
if(inst_46424){
var statearr_46523_46584 = state_46517__$1;
(statearr_46523_46584[(1)] = (2));

} else {
var statearr_46524_46585 = state_46517__$1;
(statearr_46524_46585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (24))){
var inst_46477 = (state_46517[(9)]);
var inst_46491 = (state_46517[(10)]);
var inst_46468 = (state_46517[(11)]);
var inst_46491__$1 = inst_46468.call(null,inst_46477);
var state_46517__$1 = (function (){var statearr_46525 = state_46517;
(statearr_46525[(10)] = inst_46491__$1);

return statearr_46525;
})();
if(cljs.core.truth_(inst_46491__$1)){
var statearr_46526_46586 = state_46517__$1;
(statearr_46526_46586[(1)] = (29));

} else {
var statearr_46527_46587 = state_46517__$1;
(statearr_46527_46587[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (4))){
var inst_46436 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46436)){
var statearr_46528_46588 = state_46517__$1;
(statearr_46528_46588[(1)] = (8));

} else {
var statearr_46529_46589 = state_46517__$1;
(statearr_46529_46589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (15))){
var inst_46462 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46462)){
var statearr_46530_46590 = state_46517__$1;
(statearr_46530_46590[(1)] = (19));

} else {
var statearr_46531_46591 = state_46517__$1;
(statearr_46531_46591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (21))){
var inst_46467 = (state_46517[(12)]);
var inst_46467__$1 = (state_46517[(2)]);
var inst_46468 = cljs.core.get.call(null,inst_46467__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46469 = cljs.core.get.call(null,inst_46467__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46470 = cljs.core.get.call(null,inst_46467__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46517__$1 = (function (){var statearr_46532 = state_46517;
(statearr_46532[(13)] = inst_46469);

(statearr_46532[(11)] = inst_46468);

(statearr_46532[(12)] = inst_46467__$1);

return statearr_46532;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46517__$1,(22),inst_46470);
} else {
if((state_val_46518 === (31))){
var inst_46499 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46499)){
var statearr_46533_46592 = state_46517__$1;
(statearr_46533_46592[(1)] = (32));

} else {
var statearr_46534_46593 = state_46517__$1;
(statearr_46534_46593[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (32))){
var inst_46476 = (state_46517[(14)]);
var state_46517__$1 = state_46517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46517__$1,(35),out,inst_46476);
} else {
if((state_val_46518 === (33))){
var inst_46467 = (state_46517[(12)]);
var inst_46445 = inst_46467;
var state_46517__$1 = (function (){var statearr_46535 = state_46517;
(statearr_46535[(7)] = inst_46445);

return statearr_46535;
})();
var statearr_46536_46594 = state_46517__$1;
(statearr_46536_46594[(2)] = null);

(statearr_46536_46594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (13))){
var inst_46445 = (state_46517[(7)]);
var inst_46452 = inst_46445.cljs$lang$protocol_mask$partition0$;
var inst_46453 = (inst_46452 & (64));
var inst_46454 = inst_46445.cljs$core$ISeq$;
var inst_46455 = (inst_46453) || (inst_46454);
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46455)){
var statearr_46537_46595 = state_46517__$1;
(statearr_46537_46595[(1)] = (16));

} else {
var statearr_46538_46596 = state_46517__$1;
(statearr_46538_46596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (22))){
var inst_46477 = (state_46517[(9)]);
var inst_46476 = (state_46517[(14)]);
var inst_46475 = (state_46517[(2)]);
var inst_46476__$1 = cljs.core.nth.call(null,inst_46475,(0),null);
var inst_46477__$1 = cljs.core.nth.call(null,inst_46475,(1),null);
var inst_46478 = (inst_46476__$1 == null);
var inst_46479 = cljs.core._EQ_.call(null,inst_46477__$1,change);
var inst_46480 = (inst_46478) || (inst_46479);
var state_46517__$1 = (function (){var statearr_46539 = state_46517;
(statearr_46539[(9)] = inst_46477__$1);

(statearr_46539[(14)] = inst_46476__$1);

return statearr_46539;
})();
if(cljs.core.truth_(inst_46480)){
var statearr_46540_46597 = state_46517__$1;
(statearr_46540_46597[(1)] = (23));

} else {
var statearr_46541_46598 = state_46517__$1;
(statearr_46541_46598[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (36))){
var inst_46467 = (state_46517[(12)]);
var inst_46445 = inst_46467;
var state_46517__$1 = (function (){var statearr_46542 = state_46517;
(statearr_46542[(7)] = inst_46445);

return statearr_46542;
})();
var statearr_46543_46599 = state_46517__$1;
(statearr_46543_46599[(2)] = null);

(statearr_46543_46599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (29))){
var inst_46491 = (state_46517[(10)]);
var state_46517__$1 = state_46517;
var statearr_46544_46600 = state_46517__$1;
(statearr_46544_46600[(2)] = inst_46491);

(statearr_46544_46600[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (6))){
var state_46517__$1 = state_46517;
var statearr_46545_46601 = state_46517__$1;
(statearr_46545_46601[(2)] = false);

(statearr_46545_46601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (28))){
var inst_46487 = (state_46517[(2)]);
var inst_46488 = calc_state.call(null);
var inst_46445 = inst_46488;
var state_46517__$1 = (function (){var statearr_46546 = state_46517;
(statearr_46546[(7)] = inst_46445);

(statearr_46546[(15)] = inst_46487);

return statearr_46546;
})();
var statearr_46547_46602 = state_46517__$1;
(statearr_46547_46602[(2)] = null);

(statearr_46547_46602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (25))){
var inst_46513 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46548_46603 = state_46517__$1;
(statearr_46548_46603[(2)] = inst_46513);

(statearr_46548_46603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (34))){
var inst_46511 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46549_46604 = state_46517__$1;
(statearr_46549_46604[(2)] = inst_46511);

(statearr_46549_46604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (17))){
var state_46517__$1 = state_46517;
var statearr_46550_46605 = state_46517__$1;
(statearr_46550_46605[(2)] = false);

(statearr_46550_46605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (3))){
var state_46517__$1 = state_46517;
var statearr_46551_46606 = state_46517__$1;
(statearr_46551_46606[(2)] = false);

(statearr_46551_46606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (12))){
var inst_46515 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46517__$1,inst_46515);
} else {
if((state_val_46518 === (2))){
var inst_46421 = (state_46517[(8)]);
var inst_46426 = inst_46421.cljs$lang$protocol_mask$partition0$;
var inst_46427 = (inst_46426 & (64));
var inst_46428 = inst_46421.cljs$core$ISeq$;
var inst_46429 = (inst_46427) || (inst_46428);
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46429)){
var statearr_46552_46607 = state_46517__$1;
(statearr_46552_46607[(1)] = (5));

} else {
var statearr_46553_46608 = state_46517__$1;
(statearr_46553_46608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (23))){
var inst_46476 = (state_46517[(14)]);
var inst_46482 = (inst_46476 == null);
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46482)){
var statearr_46554_46609 = state_46517__$1;
(statearr_46554_46609[(1)] = (26));

} else {
var statearr_46555_46610 = state_46517__$1;
(statearr_46555_46610[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (35))){
var inst_46502 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46502)){
var statearr_46556_46611 = state_46517__$1;
(statearr_46556_46611[(1)] = (36));

} else {
var statearr_46557_46612 = state_46517__$1;
(statearr_46557_46612[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (19))){
var inst_46445 = (state_46517[(7)]);
var inst_46464 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46445);
var state_46517__$1 = state_46517;
var statearr_46558_46613 = state_46517__$1;
(statearr_46558_46613[(2)] = inst_46464);

(statearr_46558_46613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (11))){
var inst_46445 = (state_46517[(7)]);
var inst_46449 = (inst_46445 == null);
var inst_46450 = cljs.core.not.call(null,inst_46449);
var state_46517__$1 = state_46517;
if(inst_46450){
var statearr_46559_46614 = state_46517__$1;
(statearr_46559_46614[(1)] = (13));

} else {
var statearr_46560_46615 = state_46517__$1;
(statearr_46560_46615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (9))){
var inst_46421 = (state_46517[(8)]);
var state_46517__$1 = state_46517;
var statearr_46561_46616 = state_46517__$1;
(statearr_46561_46616[(2)] = inst_46421);

(statearr_46561_46616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (5))){
var state_46517__$1 = state_46517;
var statearr_46562_46617 = state_46517__$1;
(statearr_46562_46617[(2)] = true);

(statearr_46562_46617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (14))){
var state_46517__$1 = state_46517;
var statearr_46563_46618 = state_46517__$1;
(statearr_46563_46618[(2)] = false);

(statearr_46563_46618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (26))){
var inst_46477 = (state_46517[(9)]);
var inst_46484 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46477);
var state_46517__$1 = state_46517;
var statearr_46564_46619 = state_46517__$1;
(statearr_46564_46619[(2)] = inst_46484);

(statearr_46564_46619[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (16))){
var state_46517__$1 = state_46517;
var statearr_46565_46620 = state_46517__$1;
(statearr_46565_46620[(2)] = true);

(statearr_46565_46620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (38))){
var inst_46507 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46566_46621 = state_46517__$1;
(statearr_46566_46621[(2)] = inst_46507);

(statearr_46566_46621[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (30))){
var inst_46477 = (state_46517[(9)]);
var inst_46469 = (state_46517[(13)]);
var inst_46468 = (state_46517[(11)]);
var inst_46494 = cljs.core.empty_QMARK_.call(null,inst_46468);
var inst_46495 = inst_46469.call(null,inst_46477);
var inst_46496 = cljs.core.not.call(null,inst_46495);
var inst_46497 = (inst_46494) && (inst_46496);
var state_46517__$1 = state_46517;
var statearr_46567_46622 = state_46517__$1;
(statearr_46567_46622[(2)] = inst_46497);

(statearr_46567_46622[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (10))){
var inst_46421 = (state_46517[(8)]);
var inst_46441 = (state_46517[(2)]);
var inst_46442 = cljs.core.get.call(null,inst_46441,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46443 = cljs.core.get.call(null,inst_46441,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46444 = cljs.core.get.call(null,inst_46441,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46445 = inst_46421;
var state_46517__$1 = (function (){var statearr_46568 = state_46517;
(statearr_46568[(7)] = inst_46445);

(statearr_46568[(16)] = inst_46444);

(statearr_46568[(17)] = inst_46443);

(statearr_46568[(18)] = inst_46442);

return statearr_46568;
})();
var statearr_46569_46623 = state_46517__$1;
(statearr_46569_46623[(2)] = null);

(statearr_46569_46623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (18))){
var inst_46459 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46570_46624 = state_46517__$1;
(statearr_46570_46624[(2)] = inst_46459);

(statearr_46570_46624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (37))){
var state_46517__$1 = state_46517;
var statearr_46571_46625 = state_46517__$1;
(statearr_46571_46625[(2)] = null);

(statearr_46571_46625[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46518 === (8))){
var inst_46421 = (state_46517[(8)]);
var inst_46438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46421);
var state_46517__$1 = state_46517;
var statearr_46572_46626 = state_46517__$1;
(statearr_46572_46626[(2)] = inst_46438);

(statearr_46572_46626[(1)] = (10));


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
});})(c__44817__auto___46580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44705__auto__,c__44817__auto___46580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44706__auto__ = null;
var cljs$core$async$mix_$_state_machine__44706__auto____0 = (function (){
var statearr_46576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46576[(0)] = cljs$core$async$mix_$_state_machine__44706__auto__);

(statearr_46576[(1)] = (1));

return statearr_46576;
});
var cljs$core$async$mix_$_state_machine__44706__auto____1 = (function (state_46517){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_46517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e46577){if((e46577 instanceof Object)){
var ex__44709__auto__ = e46577;
var statearr_46578_46627 = state_46517;
(statearr_46578_46627[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46628 = state_46517;
state_46517 = G__46628;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44706__auto__ = function(state_46517){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44706__auto____1.call(this,state_46517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44706__auto____0;
cljs$core$async$mix_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44706__auto____1;
return cljs$core$async$mix_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___46580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44819__auto__ = (function (){var statearr_46579 = f__44818__auto__.call(null);
(statearr_46579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___46580);

return statearr_46579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___46580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__43308__auto__ = (((p == null))?null:p);
var m__43309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__43309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__43308__auto__ = (((p == null))?null:p);
var m__43309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,p,v,ch);
} else {
var m__43309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args46629 = [];
var len__43720__auto___46632 = arguments.length;
var i__43721__auto___46633 = (0);
while(true){
if((i__43721__auto___46633 < len__43720__auto___46632)){
args46629.push((arguments[i__43721__auto___46633]));

var G__46634 = (i__43721__auto___46633 + (1));
i__43721__auto___46633 = G__46634;
continue;
} else {
}
break;
}

var G__46631 = args46629.length;
switch (G__46631) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46629.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__43308__auto__ = (((p == null))?null:p);
var m__43309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,p);
} else {
var m__43309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,p);
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
var x__43308__auto__ = (((p == null))?null:p);
var m__43309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__43308__auto__)]);
if(!((m__43309__auto__ == null))){
return m__43309__auto__.call(null,p,v);
} else {
var m__43309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__43309__auto____$1 == null))){
return m__43309__auto____$1.call(null,p,v);
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
var args46637 = [];
var len__43720__auto___46762 = arguments.length;
var i__43721__auto___46763 = (0);
while(true){
if((i__43721__auto___46763 < len__43720__auto___46762)){
args46637.push((arguments[i__43721__auto___46763]));

var G__46764 = (i__43721__auto___46763 + (1));
i__43721__auto___46763 = G__46764;
continue;
} else {
}
break;
}

var G__46639 = args46637.length;
switch (G__46639) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46637.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__42645__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__42645__auto__,mults){
return (function (p1__46636_SHARP_){
if(cljs.core.truth_(p1__46636_SHARP_.call(null,topic))){
return p1__46636_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46636_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__42645__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46640 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46641){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46641 = meta46641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46642,meta46641__$1){
var self__ = this;
var _46642__$1 = this;
return (new cljs.core.async.t_cljs$core$async46640(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46641__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46642){
var self__ = this;
var _46642__$1 = this;
return self__.meta46641;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46640.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46641","meta46641",-908070755,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46640";

cljs.core.async.t_cljs$core$async46640.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async46640");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46640 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46640(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46641){
return (new cljs.core.async.t_cljs$core$async46640(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46641));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46640(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44817__auto___46766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___46766,mults,ensure_mult,p){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___46766,mults,ensure_mult,p){
return (function (state_46714){
var state_val_46715 = (state_46714[(1)]);
if((state_val_46715 === (7))){
var inst_46710 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
var statearr_46716_46767 = state_46714__$1;
(statearr_46716_46767[(2)] = inst_46710);

(statearr_46716_46767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (20))){
var state_46714__$1 = state_46714;
var statearr_46717_46768 = state_46714__$1;
(statearr_46717_46768[(2)] = null);

(statearr_46717_46768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (1))){
var state_46714__$1 = state_46714;
var statearr_46718_46769 = state_46714__$1;
(statearr_46718_46769[(2)] = null);

(statearr_46718_46769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (24))){
var inst_46693 = (state_46714[(7)]);
var inst_46702 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46693);
var state_46714__$1 = state_46714;
var statearr_46719_46770 = state_46714__$1;
(statearr_46719_46770[(2)] = inst_46702);

(statearr_46719_46770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (4))){
var inst_46645 = (state_46714[(8)]);
var inst_46645__$1 = (state_46714[(2)]);
var inst_46646 = (inst_46645__$1 == null);
var state_46714__$1 = (function (){var statearr_46720 = state_46714;
(statearr_46720[(8)] = inst_46645__$1);

return statearr_46720;
})();
if(cljs.core.truth_(inst_46646)){
var statearr_46721_46771 = state_46714__$1;
(statearr_46721_46771[(1)] = (5));

} else {
var statearr_46722_46772 = state_46714__$1;
(statearr_46722_46772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (15))){
var inst_46687 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
var statearr_46723_46773 = state_46714__$1;
(statearr_46723_46773[(2)] = inst_46687);

(statearr_46723_46773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (21))){
var inst_46707 = (state_46714[(2)]);
var state_46714__$1 = (function (){var statearr_46724 = state_46714;
(statearr_46724[(9)] = inst_46707);

return statearr_46724;
})();
var statearr_46725_46774 = state_46714__$1;
(statearr_46725_46774[(2)] = null);

(statearr_46725_46774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (13))){
var inst_46669 = (state_46714[(10)]);
var inst_46671 = cljs.core.chunked_seq_QMARK_.call(null,inst_46669);
var state_46714__$1 = state_46714;
if(inst_46671){
var statearr_46726_46775 = state_46714__$1;
(statearr_46726_46775[(1)] = (16));

} else {
var statearr_46727_46776 = state_46714__$1;
(statearr_46727_46776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (22))){
var inst_46699 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
if(cljs.core.truth_(inst_46699)){
var statearr_46728_46777 = state_46714__$1;
(statearr_46728_46777[(1)] = (23));

} else {
var statearr_46729_46778 = state_46714__$1;
(statearr_46729_46778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (6))){
var inst_46693 = (state_46714[(7)]);
var inst_46645 = (state_46714[(8)]);
var inst_46695 = (state_46714[(11)]);
var inst_46693__$1 = topic_fn.call(null,inst_46645);
var inst_46694 = cljs.core.deref.call(null,mults);
var inst_46695__$1 = cljs.core.get.call(null,inst_46694,inst_46693__$1);
var state_46714__$1 = (function (){var statearr_46730 = state_46714;
(statearr_46730[(7)] = inst_46693__$1);

(statearr_46730[(11)] = inst_46695__$1);

return statearr_46730;
})();
if(cljs.core.truth_(inst_46695__$1)){
var statearr_46731_46779 = state_46714__$1;
(statearr_46731_46779[(1)] = (19));

} else {
var statearr_46732_46780 = state_46714__$1;
(statearr_46732_46780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (25))){
var inst_46704 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
var statearr_46733_46781 = state_46714__$1;
(statearr_46733_46781[(2)] = inst_46704);

(statearr_46733_46781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (17))){
var inst_46669 = (state_46714[(10)]);
var inst_46678 = cljs.core.first.call(null,inst_46669);
var inst_46679 = cljs.core.async.muxch_STAR_.call(null,inst_46678);
var inst_46680 = cljs.core.async.close_BANG_.call(null,inst_46679);
var inst_46681 = cljs.core.next.call(null,inst_46669);
var inst_46655 = inst_46681;
var inst_46656 = null;
var inst_46657 = (0);
var inst_46658 = (0);
var state_46714__$1 = (function (){var statearr_46734 = state_46714;
(statearr_46734[(12)] = inst_46658);

(statearr_46734[(13)] = inst_46656);

(statearr_46734[(14)] = inst_46680);

(statearr_46734[(15)] = inst_46655);

(statearr_46734[(16)] = inst_46657);

return statearr_46734;
})();
var statearr_46735_46782 = state_46714__$1;
(statearr_46735_46782[(2)] = null);

(statearr_46735_46782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (3))){
var inst_46712 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46714__$1,inst_46712);
} else {
if((state_val_46715 === (12))){
var inst_46689 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
var statearr_46736_46783 = state_46714__$1;
(statearr_46736_46783[(2)] = inst_46689);

(statearr_46736_46783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (2))){
var state_46714__$1 = state_46714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46714__$1,(4),ch);
} else {
if((state_val_46715 === (23))){
var state_46714__$1 = state_46714;
var statearr_46737_46784 = state_46714__$1;
(statearr_46737_46784[(2)] = null);

(statearr_46737_46784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (19))){
var inst_46645 = (state_46714[(8)]);
var inst_46695 = (state_46714[(11)]);
var inst_46697 = cljs.core.async.muxch_STAR_.call(null,inst_46695);
var state_46714__$1 = state_46714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46714__$1,(22),inst_46697,inst_46645);
} else {
if((state_val_46715 === (11))){
var inst_46669 = (state_46714[(10)]);
var inst_46655 = (state_46714[(15)]);
var inst_46669__$1 = cljs.core.seq.call(null,inst_46655);
var state_46714__$1 = (function (){var statearr_46738 = state_46714;
(statearr_46738[(10)] = inst_46669__$1);

return statearr_46738;
})();
if(inst_46669__$1){
var statearr_46739_46785 = state_46714__$1;
(statearr_46739_46785[(1)] = (13));

} else {
var statearr_46740_46786 = state_46714__$1;
(statearr_46740_46786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (9))){
var inst_46691 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
var statearr_46741_46787 = state_46714__$1;
(statearr_46741_46787[(2)] = inst_46691);

(statearr_46741_46787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (5))){
var inst_46652 = cljs.core.deref.call(null,mults);
var inst_46653 = cljs.core.vals.call(null,inst_46652);
var inst_46654 = cljs.core.seq.call(null,inst_46653);
var inst_46655 = inst_46654;
var inst_46656 = null;
var inst_46657 = (0);
var inst_46658 = (0);
var state_46714__$1 = (function (){var statearr_46742 = state_46714;
(statearr_46742[(12)] = inst_46658);

(statearr_46742[(13)] = inst_46656);

(statearr_46742[(15)] = inst_46655);

(statearr_46742[(16)] = inst_46657);

return statearr_46742;
})();
var statearr_46743_46788 = state_46714__$1;
(statearr_46743_46788[(2)] = null);

(statearr_46743_46788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (14))){
var state_46714__$1 = state_46714;
var statearr_46747_46789 = state_46714__$1;
(statearr_46747_46789[(2)] = null);

(statearr_46747_46789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (16))){
var inst_46669 = (state_46714[(10)]);
var inst_46673 = cljs.core.chunk_first.call(null,inst_46669);
var inst_46674 = cljs.core.chunk_rest.call(null,inst_46669);
var inst_46675 = cljs.core.count.call(null,inst_46673);
var inst_46655 = inst_46674;
var inst_46656 = inst_46673;
var inst_46657 = inst_46675;
var inst_46658 = (0);
var state_46714__$1 = (function (){var statearr_46748 = state_46714;
(statearr_46748[(12)] = inst_46658);

(statearr_46748[(13)] = inst_46656);

(statearr_46748[(15)] = inst_46655);

(statearr_46748[(16)] = inst_46657);

return statearr_46748;
})();
var statearr_46749_46790 = state_46714__$1;
(statearr_46749_46790[(2)] = null);

(statearr_46749_46790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (10))){
var inst_46658 = (state_46714[(12)]);
var inst_46656 = (state_46714[(13)]);
var inst_46655 = (state_46714[(15)]);
var inst_46657 = (state_46714[(16)]);
var inst_46663 = cljs.core._nth.call(null,inst_46656,inst_46658);
var inst_46664 = cljs.core.async.muxch_STAR_.call(null,inst_46663);
var inst_46665 = cljs.core.async.close_BANG_.call(null,inst_46664);
var inst_46666 = (inst_46658 + (1));
var tmp46744 = inst_46656;
var tmp46745 = inst_46655;
var tmp46746 = inst_46657;
var inst_46655__$1 = tmp46745;
var inst_46656__$1 = tmp46744;
var inst_46657__$1 = tmp46746;
var inst_46658__$1 = inst_46666;
var state_46714__$1 = (function (){var statearr_46750 = state_46714;
(statearr_46750[(12)] = inst_46658__$1);

(statearr_46750[(13)] = inst_46656__$1);

(statearr_46750[(17)] = inst_46665);

(statearr_46750[(15)] = inst_46655__$1);

(statearr_46750[(16)] = inst_46657__$1);

return statearr_46750;
})();
var statearr_46751_46791 = state_46714__$1;
(statearr_46751_46791[(2)] = null);

(statearr_46751_46791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (18))){
var inst_46684 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
var statearr_46752_46792 = state_46714__$1;
(statearr_46752_46792[(2)] = inst_46684);

(statearr_46752_46792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (8))){
var inst_46658 = (state_46714[(12)]);
var inst_46657 = (state_46714[(16)]);
var inst_46660 = (inst_46658 < inst_46657);
var inst_46661 = inst_46660;
var state_46714__$1 = state_46714;
if(cljs.core.truth_(inst_46661)){
var statearr_46753_46793 = state_46714__$1;
(statearr_46753_46793[(1)] = (10));

} else {
var statearr_46754_46794 = state_46714__$1;
(statearr_46754_46794[(1)] = (11));

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
});})(c__44817__auto___46766,mults,ensure_mult,p))
;
return ((function (switch__44705__auto__,c__44817__auto___46766,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_46758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46758[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_46758[(1)] = (1));

return statearr_46758;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_46714){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_46714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e46759){if((e46759 instanceof Object)){
var ex__44709__auto__ = e46759;
var statearr_46760_46795 = state_46714;
(statearr_46760_46795[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46796 = state_46714;
state_46714 = G__46796;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_46714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_46714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___46766,mults,ensure_mult,p))
})();
var state__44819__auto__ = (function (){var statearr_46761 = f__44818__auto__.call(null);
(statearr_46761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___46766);

return statearr_46761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___46766,mults,ensure_mult,p))
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
var args46797 = [];
var len__43720__auto___46800 = arguments.length;
var i__43721__auto___46801 = (0);
while(true){
if((i__43721__auto___46801 < len__43720__auto___46800)){
args46797.push((arguments[i__43721__auto___46801]));

var G__46802 = (i__43721__auto___46801 + (1));
i__43721__auto___46801 = G__46802;
continue;
} else {
}
break;
}

var G__46799 = args46797.length;
switch (G__46799) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46797.length)].join('')));

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
var args46804 = [];
var len__43720__auto___46807 = arguments.length;
var i__43721__auto___46808 = (0);
while(true){
if((i__43721__auto___46808 < len__43720__auto___46807)){
args46804.push((arguments[i__43721__auto___46808]));

var G__46809 = (i__43721__auto___46808 + (1));
i__43721__auto___46808 = G__46809;
continue;
} else {
}
break;
}

var G__46806 = args46804.length;
switch (G__46806) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46804.length)].join('')));

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
var args46811 = [];
var len__43720__auto___46882 = arguments.length;
var i__43721__auto___46883 = (0);
while(true){
if((i__43721__auto___46883 < len__43720__auto___46882)){
args46811.push((arguments[i__43721__auto___46883]));

var G__46884 = (i__43721__auto___46883 + (1));
i__43721__auto___46883 = G__46884;
continue;
} else {
}
break;
}

var G__46813 = args46811.length;
switch (G__46813) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46811.length)].join('')));

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
var c__44817__auto___46886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___46886,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___46886,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46852){
var state_val_46853 = (state_46852[(1)]);
if((state_val_46853 === (7))){
var state_46852__$1 = state_46852;
var statearr_46854_46887 = state_46852__$1;
(statearr_46854_46887[(2)] = null);

(statearr_46854_46887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (1))){
var state_46852__$1 = state_46852;
var statearr_46855_46888 = state_46852__$1;
(statearr_46855_46888[(2)] = null);

(statearr_46855_46888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (4))){
var inst_46816 = (state_46852[(7)]);
var inst_46818 = (inst_46816 < cnt);
var state_46852__$1 = state_46852;
if(cljs.core.truth_(inst_46818)){
var statearr_46856_46889 = state_46852__$1;
(statearr_46856_46889[(1)] = (6));

} else {
var statearr_46857_46890 = state_46852__$1;
(statearr_46857_46890[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (15))){
var inst_46848 = (state_46852[(2)]);
var state_46852__$1 = state_46852;
var statearr_46858_46891 = state_46852__$1;
(statearr_46858_46891[(2)] = inst_46848);

(statearr_46858_46891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (13))){
var inst_46841 = cljs.core.async.close_BANG_.call(null,out);
var state_46852__$1 = state_46852;
var statearr_46859_46892 = state_46852__$1;
(statearr_46859_46892[(2)] = inst_46841);

(statearr_46859_46892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (6))){
var state_46852__$1 = state_46852;
var statearr_46860_46893 = state_46852__$1;
(statearr_46860_46893[(2)] = null);

(statearr_46860_46893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (3))){
var inst_46850 = (state_46852[(2)]);
var state_46852__$1 = state_46852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46852__$1,inst_46850);
} else {
if((state_val_46853 === (12))){
var inst_46838 = (state_46852[(8)]);
var inst_46838__$1 = (state_46852[(2)]);
var inst_46839 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46838__$1);
var state_46852__$1 = (function (){var statearr_46861 = state_46852;
(statearr_46861[(8)] = inst_46838__$1);

return statearr_46861;
})();
if(cljs.core.truth_(inst_46839)){
var statearr_46862_46894 = state_46852__$1;
(statearr_46862_46894[(1)] = (13));

} else {
var statearr_46863_46895 = state_46852__$1;
(statearr_46863_46895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (2))){
var inst_46815 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46816 = (0);
var state_46852__$1 = (function (){var statearr_46864 = state_46852;
(statearr_46864[(7)] = inst_46816);

(statearr_46864[(9)] = inst_46815);

return statearr_46864;
})();
var statearr_46865_46896 = state_46852__$1;
(statearr_46865_46896[(2)] = null);

(statearr_46865_46896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (11))){
var inst_46816 = (state_46852[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46852,(10),Object,null,(9));
var inst_46825 = chs__$1.call(null,inst_46816);
var inst_46826 = done.call(null,inst_46816);
var inst_46827 = cljs.core.async.take_BANG_.call(null,inst_46825,inst_46826);
var state_46852__$1 = state_46852;
var statearr_46866_46897 = state_46852__$1;
(statearr_46866_46897[(2)] = inst_46827);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46852__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (9))){
var inst_46816 = (state_46852[(7)]);
var inst_46829 = (state_46852[(2)]);
var inst_46830 = (inst_46816 + (1));
var inst_46816__$1 = inst_46830;
var state_46852__$1 = (function (){var statearr_46867 = state_46852;
(statearr_46867[(10)] = inst_46829);

(statearr_46867[(7)] = inst_46816__$1);

return statearr_46867;
})();
var statearr_46868_46898 = state_46852__$1;
(statearr_46868_46898[(2)] = null);

(statearr_46868_46898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (5))){
var inst_46836 = (state_46852[(2)]);
var state_46852__$1 = (function (){var statearr_46869 = state_46852;
(statearr_46869[(11)] = inst_46836);

return statearr_46869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46852__$1,(12),dchan);
} else {
if((state_val_46853 === (14))){
var inst_46838 = (state_46852[(8)]);
var inst_46843 = cljs.core.apply.call(null,f,inst_46838);
var state_46852__$1 = state_46852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46852__$1,(16),out,inst_46843);
} else {
if((state_val_46853 === (16))){
var inst_46845 = (state_46852[(2)]);
var state_46852__$1 = (function (){var statearr_46870 = state_46852;
(statearr_46870[(12)] = inst_46845);

return statearr_46870;
})();
var statearr_46871_46899 = state_46852__$1;
(statearr_46871_46899[(2)] = null);

(statearr_46871_46899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (10))){
var inst_46820 = (state_46852[(2)]);
var inst_46821 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46852__$1 = (function (){var statearr_46872 = state_46852;
(statearr_46872[(13)] = inst_46820);

return statearr_46872;
})();
var statearr_46873_46900 = state_46852__$1;
(statearr_46873_46900[(2)] = inst_46821);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46852__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46853 === (8))){
var inst_46834 = (state_46852[(2)]);
var state_46852__$1 = state_46852;
var statearr_46874_46901 = state_46852__$1;
(statearr_46874_46901[(2)] = inst_46834);

(statearr_46874_46901[(1)] = (5));


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
});})(c__44817__auto___46886,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44705__auto__,c__44817__auto___46886,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_46878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46878[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_46878[(1)] = (1));

return statearr_46878;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_46852){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_46852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e46879){if((e46879 instanceof Object)){
var ex__44709__auto__ = e46879;
var statearr_46880_46902 = state_46852;
(statearr_46880_46902[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46903 = state_46852;
state_46852 = G__46903;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_46852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_46852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___46886,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44819__auto__ = (function (){var statearr_46881 = f__44818__auto__.call(null);
(statearr_46881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___46886);

return statearr_46881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___46886,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args46905 = [];
var len__43720__auto___46963 = arguments.length;
var i__43721__auto___46964 = (0);
while(true){
if((i__43721__auto___46964 < len__43720__auto___46963)){
args46905.push((arguments[i__43721__auto___46964]));

var G__46965 = (i__43721__auto___46964 + (1));
i__43721__auto___46964 = G__46965;
continue;
} else {
}
break;
}

var G__46907 = args46905.length;
switch (G__46907) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46905.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44817__auto___46967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___46967,out){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___46967,out){
return (function (state_46939){
var state_val_46940 = (state_46939[(1)]);
if((state_val_46940 === (7))){
var inst_46919 = (state_46939[(7)]);
var inst_46918 = (state_46939[(8)]);
var inst_46918__$1 = (state_46939[(2)]);
var inst_46919__$1 = cljs.core.nth.call(null,inst_46918__$1,(0),null);
var inst_46920 = cljs.core.nth.call(null,inst_46918__$1,(1),null);
var inst_46921 = (inst_46919__$1 == null);
var state_46939__$1 = (function (){var statearr_46941 = state_46939;
(statearr_46941[(9)] = inst_46920);

(statearr_46941[(7)] = inst_46919__$1);

(statearr_46941[(8)] = inst_46918__$1);

return statearr_46941;
})();
if(cljs.core.truth_(inst_46921)){
var statearr_46942_46968 = state_46939__$1;
(statearr_46942_46968[(1)] = (8));

} else {
var statearr_46943_46969 = state_46939__$1;
(statearr_46943_46969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46940 === (1))){
var inst_46908 = cljs.core.vec.call(null,chs);
var inst_46909 = inst_46908;
var state_46939__$1 = (function (){var statearr_46944 = state_46939;
(statearr_46944[(10)] = inst_46909);

return statearr_46944;
})();
var statearr_46945_46970 = state_46939__$1;
(statearr_46945_46970[(2)] = null);

(statearr_46945_46970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46940 === (4))){
var inst_46909 = (state_46939[(10)]);
var state_46939__$1 = state_46939;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46939__$1,(7),inst_46909);
} else {
if((state_val_46940 === (6))){
var inst_46935 = (state_46939[(2)]);
var state_46939__$1 = state_46939;
var statearr_46946_46971 = state_46939__$1;
(statearr_46946_46971[(2)] = inst_46935);

(statearr_46946_46971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46940 === (3))){
var inst_46937 = (state_46939[(2)]);
var state_46939__$1 = state_46939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46939__$1,inst_46937);
} else {
if((state_val_46940 === (2))){
var inst_46909 = (state_46939[(10)]);
var inst_46911 = cljs.core.count.call(null,inst_46909);
var inst_46912 = (inst_46911 > (0));
var state_46939__$1 = state_46939;
if(cljs.core.truth_(inst_46912)){
var statearr_46948_46972 = state_46939__$1;
(statearr_46948_46972[(1)] = (4));

} else {
var statearr_46949_46973 = state_46939__$1;
(statearr_46949_46973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46940 === (11))){
var inst_46909 = (state_46939[(10)]);
var inst_46928 = (state_46939[(2)]);
var tmp46947 = inst_46909;
var inst_46909__$1 = tmp46947;
var state_46939__$1 = (function (){var statearr_46950 = state_46939;
(statearr_46950[(11)] = inst_46928);

(statearr_46950[(10)] = inst_46909__$1);

return statearr_46950;
})();
var statearr_46951_46974 = state_46939__$1;
(statearr_46951_46974[(2)] = null);

(statearr_46951_46974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46940 === (9))){
var inst_46919 = (state_46939[(7)]);
var state_46939__$1 = state_46939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46939__$1,(11),out,inst_46919);
} else {
if((state_val_46940 === (5))){
var inst_46933 = cljs.core.async.close_BANG_.call(null,out);
var state_46939__$1 = state_46939;
var statearr_46952_46975 = state_46939__$1;
(statearr_46952_46975[(2)] = inst_46933);

(statearr_46952_46975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46940 === (10))){
var inst_46931 = (state_46939[(2)]);
var state_46939__$1 = state_46939;
var statearr_46953_46976 = state_46939__$1;
(statearr_46953_46976[(2)] = inst_46931);

(statearr_46953_46976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46940 === (8))){
var inst_46909 = (state_46939[(10)]);
var inst_46920 = (state_46939[(9)]);
var inst_46919 = (state_46939[(7)]);
var inst_46918 = (state_46939[(8)]);
var inst_46923 = (function (){var cs = inst_46909;
var vec__46914 = inst_46918;
var v = inst_46919;
var c = inst_46920;
return ((function (cs,vec__46914,v,c,inst_46909,inst_46920,inst_46919,inst_46918,state_val_46940,c__44817__auto___46967,out){
return (function (p1__46904_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46904_SHARP_);
});
;})(cs,vec__46914,v,c,inst_46909,inst_46920,inst_46919,inst_46918,state_val_46940,c__44817__auto___46967,out))
})();
var inst_46924 = cljs.core.filterv.call(null,inst_46923,inst_46909);
var inst_46909__$1 = inst_46924;
var state_46939__$1 = (function (){var statearr_46954 = state_46939;
(statearr_46954[(10)] = inst_46909__$1);

return statearr_46954;
})();
var statearr_46955_46977 = state_46939__$1;
(statearr_46955_46977[(2)] = null);

(statearr_46955_46977[(1)] = (2));


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
});})(c__44817__auto___46967,out))
;
return ((function (switch__44705__auto__,c__44817__auto___46967,out){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_46959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46959[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_46959[(1)] = (1));

return statearr_46959;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_46939){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_46939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e46960){if((e46960 instanceof Object)){
var ex__44709__auto__ = e46960;
var statearr_46961_46978 = state_46939;
(statearr_46961_46978[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46979 = state_46939;
state_46939 = G__46979;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_46939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_46939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___46967,out))
})();
var state__44819__auto__ = (function (){var statearr_46962 = f__44818__auto__.call(null);
(statearr_46962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___46967);

return statearr_46962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___46967,out))
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
var args46980 = [];
var len__43720__auto___47029 = arguments.length;
var i__43721__auto___47030 = (0);
while(true){
if((i__43721__auto___47030 < len__43720__auto___47029)){
args46980.push((arguments[i__43721__auto___47030]));

var G__47031 = (i__43721__auto___47030 + (1));
i__43721__auto___47030 = G__47031;
continue;
} else {
}
break;
}

var G__46982 = args46980.length;
switch (G__46982) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46980.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44817__auto___47033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___47033,out){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___47033,out){
return (function (state_47006){
var state_val_47007 = (state_47006[(1)]);
if((state_val_47007 === (7))){
var inst_46988 = (state_47006[(7)]);
var inst_46988__$1 = (state_47006[(2)]);
var inst_46989 = (inst_46988__$1 == null);
var inst_46990 = cljs.core.not.call(null,inst_46989);
var state_47006__$1 = (function (){var statearr_47008 = state_47006;
(statearr_47008[(7)] = inst_46988__$1);

return statearr_47008;
})();
if(inst_46990){
var statearr_47009_47034 = state_47006__$1;
(statearr_47009_47034[(1)] = (8));

} else {
var statearr_47010_47035 = state_47006__$1;
(statearr_47010_47035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47007 === (1))){
var inst_46983 = (0);
var state_47006__$1 = (function (){var statearr_47011 = state_47006;
(statearr_47011[(8)] = inst_46983);

return statearr_47011;
})();
var statearr_47012_47036 = state_47006__$1;
(statearr_47012_47036[(2)] = null);

(statearr_47012_47036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47007 === (4))){
var state_47006__$1 = state_47006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47006__$1,(7),ch);
} else {
if((state_val_47007 === (6))){
var inst_47001 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
var statearr_47013_47037 = state_47006__$1;
(statearr_47013_47037[(2)] = inst_47001);

(statearr_47013_47037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47007 === (3))){
var inst_47003 = (state_47006[(2)]);
var inst_47004 = cljs.core.async.close_BANG_.call(null,out);
var state_47006__$1 = (function (){var statearr_47014 = state_47006;
(statearr_47014[(9)] = inst_47003);

return statearr_47014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47006__$1,inst_47004);
} else {
if((state_val_47007 === (2))){
var inst_46983 = (state_47006[(8)]);
var inst_46985 = (inst_46983 < n);
var state_47006__$1 = state_47006;
if(cljs.core.truth_(inst_46985)){
var statearr_47015_47038 = state_47006__$1;
(statearr_47015_47038[(1)] = (4));

} else {
var statearr_47016_47039 = state_47006__$1;
(statearr_47016_47039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47007 === (11))){
var inst_46983 = (state_47006[(8)]);
var inst_46993 = (state_47006[(2)]);
var inst_46994 = (inst_46983 + (1));
var inst_46983__$1 = inst_46994;
var state_47006__$1 = (function (){var statearr_47017 = state_47006;
(statearr_47017[(10)] = inst_46993);

(statearr_47017[(8)] = inst_46983__$1);

return statearr_47017;
})();
var statearr_47018_47040 = state_47006__$1;
(statearr_47018_47040[(2)] = null);

(statearr_47018_47040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47007 === (9))){
var state_47006__$1 = state_47006;
var statearr_47019_47041 = state_47006__$1;
(statearr_47019_47041[(2)] = null);

(statearr_47019_47041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47007 === (5))){
var state_47006__$1 = state_47006;
var statearr_47020_47042 = state_47006__$1;
(statearr_47020_47042[(2)] = null);

(statearr_47020_47042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47007 === (10))){
var inst_46998 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
var statearr_47021_47043 = state_47006__$1;
(statearr_47021_47043[(2)] = inst_46998);

(statearr_47021_47043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47007 === (8))){
var inst_46988 = (state_47006[(7)]);
var state_47006__$1 = state_47006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47006__$1,(11),out,inst_46988);
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
});})(c__44817__auto___47033,out))
;
return ((function (switch__44705__auto__,c__44817__auto___47033,out){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_47025 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47025[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_47025[(1)] = (1));

return statearr_47025;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_47006){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_47006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e47026){if((e47026 instanceof Object)){
var ex__44709__auto__ = e47026;
var statearr_47027_47044 = state_47006;
(statearr_47027_47044[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47045 = state_47006;
state_47006 = G__47045;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_47006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_47006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___47033,out))
})();
var state__44819__auto__ = (function (){var statearr_47028 = f__44818__auto__.call(null);
(statearr_47028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___47033);

return statearr_47028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___47033,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47053 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47053 = (function (map_LT_,f,ch,meta47054){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47054 = meta47054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47055,meta47054__$1){
var self__ = this;
var _47055__$1 = this;
return (new cljs.core.async.t_cljs$core$async47053(self__.map_LT_,self__.f,self__.ch,meta47054__$1));
});

cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47055){
var self__ = this;
var _47055__$1 = this;
return self__.meta47054;
});

cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47056 = (function (map_LT_,f,ch,meta47054,_,fn1,meta47057){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47054 = meta47054;
this._ = _;
this.fn1 = fn1;
this.meta47057 = meta47057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47058,meta47057__$1){
var self__ = this;
var _47058__$1 = this;
return (new cljs.core.async.t_cljs$core$async47056(self__.map_LT_,self__.f,self__.ch,self__.meta47054,self__._,self__.fn1,meta47057__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47058){
var self__ = this;
var _47058__$1 = this;
return self__.meta47057;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47056.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47046_SHARP_){
return f1.call(null,(((p1__47046_SHARP_ == null))?null:self__.f.call(null,p1__47046_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47056.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47054","meta47054",-1328847136,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47053","cljs.core.async/t_cljs$core$async47053",1808485908,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47057","meta47057",-622742563,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47056";

cljs.core.async.t_cljs$core$async47056.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async47056");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47056 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47056(map_LT___$1,f__$1,ch__$1,meta47054__$1,___$2,fn1__$1,meta47057){
return (new cljs.core.async.t_cljs$core$async47056(map_LT___$1,f__$1,ch__$1,meta47054__$1,___$2,fn1__$1,meta47057));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47056(self__.map_LT_,self__.f,self__.ch,self__.meta47054,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__42633__auto__ = ret;
if(cljs.core.truth_(and__42633__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__42633__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47054","meta47054",-1328847136,null)], null);
});

cljs.core.async.t_cljs$core$async47053.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47053";

cljs.core.async.t_cljs$core$async47053.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async47053");
});

cljs.core.async.__GT_t_cljs$core$async47053 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47053(map_LT___$1,f__$1,ch__$1,meta47054){
return (new cljs.core.async.t_cljs$core$async47053(map_LT___$1,f__$1,ch__$1,meta47054));
});

}

return (new cljs.core.async.t_cljs$core$async47053(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47062 = (function (map_GT_,f,ch,meta47063){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta47063 = meta47063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47064,meta47063__$1){
var self__ = this;
var _47064__$1 = this;
return (new cljs.core.async.t_cljs$core$async47062(self__.map_GT_,self__.f,self__.ch,meta47063__$1));
});

cljs.core.async.t_cljs$core$async47062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47064){
var self__ = this;
var _47064__$1 = this;
return self__.meta47063;
});

cljs.core.async.t_cljs$core$async47062.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47062.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47062.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47063","meta47063",-926790763,null)], null);
});

cljs.core.async.t_cljs$core$async47062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47062";

cljs.core.async.t_cljs$core$async47062.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async47062");
});

cljs.core.async.__GT_t_cljs$core$async47062 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47062(map_GT___$1,f__$1,ch__$1,meta47063){
return (new cljs.core.async.t_cljs$core$async47062(map_GT___$1,f__$1,ch__$1,meta47063));
});

}

return (new cljs.core.async.t_cljs$core$async47062(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47068 = (function (filter_GT_,p,ch,meta47069){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta47069 = meta47069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47070,meta47069__$1){
var self__ = this;
var _47070__$1 = this;
return (new cljs.core.async.t_cljs$core$async47068(self__.filter_GT_,self__.p,self__.ch,meta47069__$1));
});

cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47070){
var self__ = this;
var _47070__$1 = this;
return self__.meta47069;
});

cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47069","meta47069",528158690,null)], null);
});

cljs.core.async.t_cljs$core$async47068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47068";

cljs.core.async.t_cljs$core$async47068.cljs$lang$ctorPrWriter = (function (this__43251__auto__,writer__43252__auto__,opt__43253__auto__){
return cljs.core._write.call(null,writer__43252__auto__,"cljs.core.async/t_cljs$core$async47068");
});

cljs.core.async.__GT_t_cljs$core$async47068 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47068(filter_GT___$1,p__$1,ch__$1,meta47069){
return (new cljs.core.async.t_cljs$core$async47068(filter_GT___$1,p__$1,ch__$1,meta47069));
});

}

return (new cljs.core.async.t_cljs$core$async47068(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args47071 = [];
var len__43720__auto___47115 = arguments.length;
var i__43721__auto___47116 = (0);
while(true){
if((i__43721__auto___47116 < len__43720__auto___47115)){
args47071.push((arguments[i__43721__auto___47116]));

var G__47117 = (i__43721__auto___47116 + (1));
i__43721__auto___47116 = G__47117;
continue;
} else {
}
break;
}

var G__47073 = args47071.length;
switch (G__47073) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47071.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44817__auto___47119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___47119,out){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___47119,out){
return (function (state_47094){
var state_val_47095 = (state_47094[(1)]);
if((state_val_47095 === (7))){
var inst_47090 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
var statearr_47096_47120 = state_47094__$1;
(statearr_47096_47120[(2)] = inst_47090);

(statearr_47096_47120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (1))){
var state_47094__$1 = state_47094;
var statearr_47097_47121 = state_47094__$1;
(statearr_47097_47121[(2)] = null);

(statearr_47097_47121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (4))){
var inst_47076 = (state_47094[(7)]);
var inst_47076__$1 = (state_47094[(2)]);
var inst_47077 = (inst_47076__$1 == null);
var state_47094__$1 = (function (){var statearr_47098 = state_47094;
(statearr_47098[(7)] = inst_47076__$1);

return statearr_47098;
})();
if(cljs.core.truth_(inst_47077)){
var statearr_47099_47122 = state_47094__$1;
(statearr_47099_47122[(1)] = (5));

} else {
var statearr_47100_47123 = state_47094__$1;
(statearr_47100_47123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (6))){
var inst_47076 = (state_47094[(7)]);
var inst_47081 = p.call(null,inst_47076);
var state_47094__$1 = state_47094;
if(cljs.core.truth_(inst_47081)){
var statearr_47101_47124 = state_47094__$1;
(statearr_47101_47124[(1)] = (8));

} else {
var statearr_47102_47125 = state_47094__$1;
(statearr_47102_47125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (3))){
var inst_47092 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47094__$1,inst_47092);
} else {
if((state_val_47095 === (2))){
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47094__$1,(4),ch);
} else {
if((state_val_47095 === (11))){
var inst_47084 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
var statearr_47103_47126 = state_47094__$1;
(statearr_47103_47126[(2)] = inst_47084);

(statearr_47103_47126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (9))){
var state_47094__$1 = state_47094;
var statearr_47104_47127 = state_47094__$1;
(statearr_47104_47127[(2)] = null);

(statearr_47104_47127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (5))){
var inst_47079 = cljs.core.async.close_BANG_.call(null,out);
var state_47094__$1 = state_47094;
var statearr_47105_47128 = state_47094__$1;
(statearr_47105_47128[(2)] = inst_47079);

(statearr_47105_47128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (10))){
var inst_47087 = (state_47094[(2)]);
var state_47094__$1 = (function (){var statearr_47106 = state_47094;
(statearr_47106[(8)] = inst_47087);

return statearr_47106;
})();
var statearr_47107_47129 = state_47094__$1;
(statearr_47107_47129[(2)] = null);

(statearr_47107_47129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (8))){
var inst_47076 = (state_47094[(7)]);
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47094__$1,(11),out,inst_47076);
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
});})(c__44817__auto___47119,out))
;
return ((function (switch__44705__auto__,c__44817__auto___47119,out){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_47111 = [null,null,null,null,null,null,null,null,null];
(statearr_47111[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_47111[(1)] = (1));

return statearr_47111;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_47094){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_47094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e47112){if((e47112 instanceof Object)){
var ex__44709__auto__ = e47112;
var statearr_47113_47130 = state_47094;
(statearr_47113_47130[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47131 = state_47094;
state_47094 = G__47131;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_47094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_47094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___47119,out))
})();
var state__44819__auto__ = (function (){var statearr_47114 = f__44818__auto__.call(null);
(statearr_47114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___47119);

return statearr_47114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___47119,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args47132 = [];
var len__43720__auto___47135 = arguments.length;
var i__43721__auto___47136 = (0);
while(true){
if((i__43721__auto___47136 < len__43720__auto___47135)){
args47132.push((arguments[i__43721__auto___47136]));

var G__47137 = (i__43721__auto___47136 + (1));
i__43721__auto___47136 = G__47137;
continue;
} else {
}
break;
}

var G__47134 = args47132.length;
switch (G__47134) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47132.length)].join('')));

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
var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__){
return (function (state_47304){
var state_val_47305 = (state_47304[(1)]);
if((state_val_47305 === (7))){
var inst_47300 = (state_47304[(2)]);
var state_47304__$1 = state_47304;
var statearr_47306_47347 = state_47304__$1;
(statearr_47306_47347[(2)] = inst_47300);

(statearr_47306_47347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (20))){
var inst_47270 = (state_47304[(7)]);
var inst_47281 = (state_47304[(2)]);
var inst_47282 = cljs.core.next.call(null,inst_47270);
var inst_47256 = inst_47282;
var inst_47257 = null;
var inst_47258 = (0);
var inst_47259 = (0);
var state_47304__$1 = (function (){var statearr_47307 = state_47304;
(statearr_47307[(8)] = inst_47281);

(statearr_47307[(9)] = inst_47258);

(statearr_47307[(10)] = inst_47257);

(statearr_47307[(11)] = inst_47259);

(statearr_47307[(12)] = inst_47256);

return statearr_47307;
})();
var statearr_47308_47348 = state_47304__$1;
(statearr_47308_47348[(2)] = null);

(statearr_47308_47348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (1))){
var state_47304__$1 = state_47304;
var statearr_47309_47349 = state_47304__$1;
(statearr_47309_47349[(2)] = null);

(statearr_47309_47349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (4))){
var inst_47245 = (state_47304[(13)]);
var inst_47245__$1 = (state_47304[(2)]);
var inst_47246 = (inst_47245__$1 == null);
var state_47304__$1 = (function (){var statearr_47310 = state_47304;
(statearr_47310[(13)] = inst_47245__$1);

return statearr_47310;
})();
if(cljs.core.truth_(inst_47246)){
var statearr_47311_47350 = state_47304__$1;
(statearr_47311_47350[(1)] = (5));

} else {
var statearr_47312_47351 = state_47304__$1;
(statearr_47312_47351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (15))){
var state_47304__$1 = state_47304;
var statearr_47316_47352 = state_47304__$1;
(statearr_47316_47352[(2)] = null);

(statearr_47316_47352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (21))){
var state_47304__$1 = state_47304;
var statearr_47317_47353 = state_47304__$1;
(statearr_47317_47353[(2)] = null);

(statearr_47317_47353[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (13))){
var inst_47258 = (state_47304[(9)]);
var inst_47257 = (state_47304[(10)]);
var inst_47259 = (state_47304[(11)]);
var inst_47256 = (state_47304[(12)]);
var inst_47266 = (state_47304[(2)]);
var inst_47267 = (inst_47259 + (1));
var tmp47313 = inst_47258;
var tmp47314 = inst_47257;
var tmp47315 = inst_47256;
var inst_47256__$1 = tmp47315;
var inst_47257__$1 = tmp47314;
var inst_47258__$1 = tmp47313;
var inst_47259__$1 = inst_47267;
var state_47304__$1 = (function (){var statearr_47318 = state_47304;
(statearr_47318[(14)] = inst_47266);

(statearr_47318[(9)] = inst_47258__$1);

(statearr_47318[(10)] = inst_47257__$1);

(statearr_47318[(11)] = inst_47259__$1);

(statearr_47318[(12)] = inst_47256__$1);

return statearr_47318;
})();
var statearr_47319_47354 = state_47304__$1;
(statearr_47319_47354[(2)] = null);

(statearr_47319_47354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (22))){
var state_47304__$1 = state_47304;
var statearr_47320_47355 = state_47304__$1;
(statearr_47320_47355[(2)] = null);

(statearr_47320_47355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (6))){
var inst_47245 = (state_47304[(13)]);
var inst_47254 = f.call(null,inst_47245);
var inst_47255 = cljs.core.seq.call(null,inst_47254);
var inst_47256 = inst_47255;
var inst_47257 = null;
var inst_47258 = (0);
var inst_47259 = (0);
var state_47304__$1 = (function (){var statearr_47321 = state_47304;
(statearr_47321[(9)] = inst_47258);

(statearr_47321[(10)] = inst_47257);

(statearr_47321[(11)] = inst_47259);

(statearr_47321[(12)] = inst_47256);

return statearr_47321;
})();
var statearr_47322_47356 = state_47304__$1;
(statearr_47322_47356[(2)] = null);

(statearr_47322_47356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (17))){
var inst_47270 = (state_47304[(7)]);
var inst_47274 = cljs.core.chunk_first.call(null,inst_47270);
var inst_47275 = cljs.core.chunk_rest.call(null,inst_47270);
var inst_47276 = cljs.core.count.call(null,inst_47274);
var inst_47256 = inst_47275;
var inst_47257 = inst_47274;
var inst_47258 = inst_47276;
var inst_47259 = (0);
var state_47304__$1 = (function (){var statearr_47323 = state_47304;
(statearr_47323[(9)] = inst_47258);

(statearr_47323[(10)] = inst_47257);

(statearr_47323[(11)] = inst_47259);

(statearr_47323[(12)] = inst_47256);

return statearr_47323;
})();
var statearr_47324_47357 = state_47304__$1;
(statearr_47324_47357[(2)] = null);

(statearr_47324_47357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (3))){
var inst_47302 = (state_47304[(2)]);
var state_47304__$1 = state_47304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47304__$1,inst_47302);
} else {
if((state_val_47305 === (12))){
var inst_47290 = (state_47304[(2)]);
var state_47304__$1 = state_47304;
var statearr_47325_47358 = state_47304__$1;
(statearr_47325_47358[(2)] = inst_47290);

(statearr_47325_47358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (2))){
var state_47304__$1 = state_47304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47304__$1,(4),in$);
} else {
if((state_val_47305 === (23))){
var inst_47298 = (state_47304[(2)]);
var state_47304__$1 = state_47304;
var statearr_47326_47359 = state_47304__$1;
(statearr_47326_47359[(2)] = inst_47298);

(statearr_47326_47359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (19))){
var inst_47285 = (state_47304[(2)]);
var state_47304__$1 = state_47304;
var statearr_47327_47360 = state_47304__$1;
(statearr_47327_47360[(2)] = inst_47285);

(statearr_47327_47360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (11))){
var inst_47270 = (state_47304[(7)]);
var inst_47256 = (state_47304[(12)]);
var inst_47270__$1 = cljs.core.seq.call(null,inst_47256);
var state_47304__$1 = (function (){var statearr_47328 = state_47304;
(statearr_47328[(7)] = inst_47270__$1);

return statearr_47328;
})();
if(inst_47270__$1){
var statearr_47329_47361 = state_47304__$1;
(statearr_47329_47361[(1)] = (14));

} else {
var statearr_47330_47362 = state_47304__$1;
(statearr_47330_47362[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (9))){
var inst_47292 = (state_47304[(2)]);
var inst_47293 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47304__$1 = (function (){var statearr_47331 = state_47304;
(statearr_47331[(15)] = inst_47292);

return statearr_47331;
})();
if(cljs.core.truth_(inst_47293)){
var statearr_47332_47363 = state_47304__$1;
(statearr_47332_47363[(1)] = (21));

} else {
var statearr_47333_47364 = state_47304__$1;
(statearr_47333_47364[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (5))){
var inst_47248 = cljs.core.async.close_BANG_.call(null,out);
var state_47304__$1 = state_47304;
var statearr_47334_47365 = state_47304__$1;
(statearr_47334_47365[(2)] = inst_47248);

(statearr_47334_47365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (14))){
var inst_47270 = (state_47304[(7)]);
var inst_47272 = cljs.core.chunked_seq_QMARK_.call(null,inst_47270);
var state_47304__$1 = state_47304;
if(inst_47272){
var statearr_47335_47366 = state_47304__$1;
(statearr_47335_47366[(1)] = (17));

} else {
var statearr_47336_47367 = state_47304__$1;
(statearr_47336_47367[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (16))){
var inst_47288 = (state_47304[(2)]);
var state_47304__$1 = state_47304;
var statearr_47337_47368 = state_47304__$1;
(statearr_47337_47368[(2)] = inst_47288);

(statearr_47337_47368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (10))){
var inst_47257 = (state_47304[(10)]);
var inst_47259 = (state_47304[(11)]);
var inst_47264 = cljs.core._nth.call(null,inst_47257,inst_47259);
var state_47304__$1 = state_47304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47304__$1,(13),out,inst_47264);
} else {
if((state_val_47305 === (18))){
var inst_47270 = (state_47304[(7)]);
var inst_47279 = cljs.core.first.call(null,inst_47270);
var state_47304__$1 = state_47304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47304__$1,(20),out,inst_47279);
} else {
if((state_val_47305 === (8))){
var inst_47258 = (state_47304[(9)]);
var inst_47259 = (state_47304[(11)]);
var inst_47261 = (inst_47259 < inst_47258);
var inst_47262 = inst_47261;
var state_47304__$1 = state_47304;
if(cljs.core.truth_(inst_47262)){
var statearr_47338_47369 = state_47304__$1;
(statearr_47338_47369[(1)] = (10));

} else {
var statearr_47339_47370 = state_47304__$1;
(statearr_47339_47370[(1)] = (11));

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
});})(c__44817__auto__))
;
return ((function (switch__44705__auto__,c__44817__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44706__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44706__auto____0 = (function (){
var statearr_47343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47343[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44706__auto__);

(statearr_47343[(1)] = (1));

return statearr_47343;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44706__auto____1 = (function (state_47304){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_47304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e47344){if((e47344 instanceof Object)){
var ex__44709__auto__ = e47344;
var statearr_47345_47371 = state_47304;
(statearr_47345_47371[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47372 = state_47304;
state_47304 = G__47372;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44706__auto__ = function(state_47304){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44706__auto____1.call(this,state_47304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44706__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44706__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__))
})();
var state__44819__auto__ = (function (){var statearr_47346 = f__44818__auto__.call(null);
(statearr_47346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_47346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__))
);

return c__44817__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args47373 = [];
var len__43720__auto___47376 = arguments.length;
var i__43721__auto___47377 = (0);
while(true){
if((i__43721__auto___47377 < len__43720__auto___47376)){
args47373.push((arguments[i__43721__auto___47377]));

var G__47378 = (i__43721__auto___47377 + (1));
i__43721__auto___47377 = G__47378;
continue;
} else {
}
break;
}

var G__47375 = args47373.length;
switch (G__47375) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47373.length)].join('')));

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
var args47380 = [];
var len__43720__auto___47383 = arguments.length;
var i__43721__auto___47384 = (0);
while(true){
if((i__43721__auto___47384 < len__43720__auto___47383)){
args47380.push((arguments[i__43721__auto___47384]));

var G__47385 = (i__43721__auto___47384 + (1));
i__43721__auto___47384 = G__47385;
continue;
} else {
}
break;
}

var G__47382 = args47380.length;
switch (G__47382) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47380.length)].join('')));

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
var args47387 = [];
var len__43720__auto___47438 = arguments.length;
var i__43721__auto___47439 = (0);
while(true){
if((i__43721__auto___47439 < len__43720__auto___47438)){
args47387.push((arguments[i__43721__auto___47439]));

var G__47440 = (i__43721__auto___47439 + (1));
i__43721__auto___47439 = G__47440;
continue;
} else {
}
break;
}

var G__47389 = args47387.length;
switch (G__47389) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47387.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44817__auto___47442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___47442,out){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___47442,out){
return (function (state_47413){
var state_val_47414 = (state_47413[(1)]);
if((state_val_47414 === (7))){
var inst_47408 = (state_47413[(2)]);
var state_47413__$1 = state_47413;
var statearr_47415_47443 = state_47413__$1;
(statearr_47415_47443[(2)] = inst_47408);

(statearr_47415_47443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (1))){
var inst_47390 = null;
var state_47413__$1 = (function (){var statearr_47416 = state_47413;
(statearr_47416[(7)] = inst_47390);

return statearr_47416;
})();
var statearr_47417_47444 = state_47413__$1;
(statearr_47417_47444[(2)] = null);

(statearr_47417_47444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (4))){
var inst_47393 = (state_47413[(8)]);
var inst_47393__$1 = (state_47413[(2)]);
var inst_47394 = (inst_47393__$1 == null);
var inst_47395 = cljs.core.not.call(null,inst_47394);
var state_47413__$1 = (function (){var statearr_47418 = state_47413;
(statearr_47418[(8)] = inst_47393__$1);

return statearr_47418;
})();
if(inst_47395){
var statearr_47419_47445 = state_47413__$1;
(statearr_47419_47445[(1)] = (5));

} else {
var statearr_47420_47446 = state_47413__$1;
(statearr_47420_47446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (6))){
var state_47413__$1 = state_47413;
var statearr_47421_47447 = state_47413__$1;
(statearr_47421_47447[(2)] = null);

(statearr_47421_47447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (3))){
var inst_47410 = (state_47413[(2)]);
var inst_47411 = cljs.core.async.close_BANG_.call(null,out);
var state_47413__$1 = (function (){var statearr_47422 = state_47413;
(statearr_47422[(9)] = inst_47410);

return statearr_47422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47413__$1,inst_47411);
} else {
if((state_val_47414 === (2))){
var state_47413__$1 = state_47413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47413__$1,(4),ch);
} else {
if((state_val_47414 === (11))){
var inst_47393 = (state_47413[(8)]);
var inst_47402 = (state_47413[(2)]);
var inst_47390 = inst_47393;
var state_47413__$1 = (function (){var statearr_47423 = state_47413;
(statearr_47423[(7)] = inst_47390);

(statearr_47423[(10)] = inst_47402);

return statearr_47423;
})();
var statearr_47424_47448 = state_47413__$1;
(statearr_47424_47448[(2)] = null);

(statearr_47424_47448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (9))){
var inst_47393 = (state_47413[(8)]);
var state_47413__$1 = state_47413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47413__$1,(11),out,inst_47393);
} else {
if((state_val_47414 === (5))){
var inst_47393 = (state_47413[(8)]);
var inst_47390 = (state_47413[(7)]);
var inst_47397 = cljs.core._EQ_.call(null,inst_47393,inst_47390);
var state_47413__$1 = state_47413;
if(inst_47397){
var statearr_47426_47449 = state_47413__$1;
(statearr_47426_47449[(1)] = (8));

} else {
var statearr_47427_47450 = state_47413__$1;
(statearr_47427_47450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (10))){
var inst_47405 = (state_47413[(2)]);
var state_47413__$1 = state_47413;
var statearr_47428_47451 = state_47413__$1;
(statearr_47428_47451[(2)] = inst_47405);

(statearr_47428_47451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (8))){
var inst_47390 = (state_47413[(7)]);
var tmp47425 = inst_47390;
var inst_47390__$1 = tmp47425;
var state_47413__$1 = (function (){var statearr_47429 = state_47413;
(statearr_47429[(7)] = inst_47390__$1);

return statearr_47429;
})();
var statearr_47430_47452 = state_47413__$1;
(statearr_47430_47452[(2)] = null);

(statearr_47430_47452[(1)] = (2));


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
});})(c__44817__auto___47442,out))
;
return ((function (switch__44705__auto__,c__44817__auto___47442,out){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_47434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47434[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_47434[(1)] = (1));

return statearr_47434;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_47413){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_47413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e47435){if((e47435 instanceof Object)){
var ex__44709__auto__ = e47435;
var statearr_47436_47453 = state_47413;
(statearr_47436_47453[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47454 = state_47413;
state_47413 = G__47454;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_47413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_47413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___47442,out))
})();
var state__44819__auto__ = (function (){var statearr_47437 = f__44818__auto__.call(null);
(statearr_47437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___47442);

return statearr_47437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___47442,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47455 = [];
var len__43720__auto___47525 = arguments.length;
var i__43721__auto___47526 = (0);
while(true){
if((i__43721__auto___47526 < len__43720__auto___47525)){
args47455.push((arguments[i__43721__auto___47526]));

var G__47527 = (i__43721__auto___47526 + (1));
i__43721__auto___47526 = G__47527;
continue;
} else {
}
break;
}

var G__47457 = args47455.length;
switch (G__47457) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47455.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44817__auto___47529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___47529,out){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___47529,out){
return (function (state_47495){
var state_val_47496 = (state_47495[(1)]);
if((state_val_47496 === (7))){
var inst_47491 = (state_47495[(2)]);
var state_47495__$1 = state_47495;
var statearr_47497_47530 = state_47495__$1;
(statearr_47497_47530[(2)] = inst_47491);

(statearr_47497_47530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (1))){
var inst_47458 = (new Array(n));
var inst_47459 = inst_47458;
var inst_47460 = (0);
var state_47495__$1 = (function (){var statearr_47498 = state_47495;
(statearr_47498[(7)] = inst_47460);

(statearr_47498[(8)] = inst_47459);

return statearr_47498;
})();
var statearr_47499_47531 = state_47495__$1;
(statearr_47499_47531[(2)] = null);

(statearr_47499_47531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (4))){
var inst_47463 = (state_47495[(9)]);
var inst_47463__$1 = (state_47495[(2)]);
var inst_47464 = (inst_47463__$1 == null);
var inst_47465 = cljs.core.not.call(null,inst_47464);
var state_47495__$1 = (function (){var statearr_47500 = state_47495;
(statearr_47500[(9)] = inst_47463__$1);

return statearr_47500;
})();
if(inst_47465){
var statearr_47501_47532 = state_47495__$1;
(statearr_47501_47532[(1)] = (5));

} else {
var statearr_47502_47533 = state_47495__$1;
(statearr_47502_47533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (15))){
var inst_47485 = (state_47495[(2)]);
var state_47495__$1 = state_47495;
var statearr_47503_47534 = state_47495__$1;
(statearr_47503_47534[(2)] = inst_47485);

(statearr_47503_47534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (13))){
var state_47495__$1 = state_47495;
var statearr_47504_47535 = state_47495__$1;
(statearr_47504_47535[(2)] = null);

(statearr_47504_47535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (6))){
var inst_47460 = (state_47495[(7)]);
var inst_47481 = (inst_47460 > (0));
var state_47495__$1 = state_47495;
if(cljs.core.truth_(inst_47481)){
var statearr_47505_47536 = state_47495__$1;
(statearr_47505_47536[(1)] = (12));

} else {
var statearr_47506_47537 = state_47495__$1;
(statearr_47506_47537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (3))){
var inst_47493 = (state_47495[(2)]);
var state_47495__$1 = state_47495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47495__$1,inst_47493);
} else {
if((state_val_47496 === (12))){
var inst_47459 = (state_47495[(8)]);
var inst_47483 = cljs.core.vec.call(null,inst_47459);
var state_47495__$1 = state_47495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47495__$1,(15),out,inst_47483);
} else {
if((state_val_47496 === (2))){
var state_47495__$1 = state_47495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47495__$1,(4),ch);
} else {
if((state_val_47496 === (11))){
var inst_47475 = (state_47495[(2)]);
var inst_47476 = (new Array(n));
var inst_47459 = inst_47476;
var inst_47460 = (0);
var state_47495__$1 = (function (){var statearr_47507 = state_47495;
(statearr_47507[(7)] = inst_47460);

(statearr_47507[(8)] = inst_47459);

(statearr_47507[(10)] = inst_47475);

return statearr_47507;
})();
var statearr_47508_47538 = state_47495__$1;
(statearr_47508_47538[(2)] = null);

(statearr_47508_47538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (9))){
var inst_47459 = (state_47495[(8)]);
var inst_47473 = cljs.core.vec.call(null,inst_47459);
var state_47495__$1 = state_47495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47495__$1,(11),out,inst_47473);
} else {
if((state_val_47496 === (5))){
var inst_47460 = (state_47495[(7)]);
var inst_47459 = (state_47495[(8)]);
var inst_47463 = (state_47495[(9)]);
var inst_47468 = (state_47495[(11)]);
var inst_47467 = (inst_47459[inst_47460] = inst_47463);
var inst_47468__$1 = (inst_47460 + (1));
var inst_47469 = (inst_47468__$1 < n);
var state_47495__$1 = (function (){var statearr_47509 = state_47495;
(statearr_47509[(12)] = inst_47467);

(statearr_47509[(11)] = inst_47468__$1);

return statearr_47509;
})();
if(cljs.core.truth_(inst_47469)){
var statearr_47510_47539 = state_47495__$1;
(statearr_47510_47539[(1)] = (8));

} else {
var statearr_47511_47540 = state_47495__$1;
(statearr_47511_47540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (14))){
var inst_47488 = (state_47495[(2)]);
var inst_47489 = cljs.core.async.close_BANG_.call(null,out);
var state_47495__$1 = (function (){var statearr_47513 = state_47495;
(statearr_47513[(13)] = inst_47488);

return statearr_47513;
})();
var statearr_47514_47541 = state_47495__$1;
(statearr_47514_47541[(2)] = inst_47489);

(statearr_47514_47541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (10))){
var inst_47479 = (state_47495[(2)]);
var state_47495__$1 = state_47495;
var statearr_47515_47542 = state_47495__$1;
(statearr_47515_47542[(2)] = inst_47479);

(statearr_47515_47542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (8))){
var inst_47459 = (state_47495[(8)]);
var inst_47468 = (state_47495[(11)]);
var tmp47512 = inst_47459;
var inst_47459__$1 = tmp47512;
var inst_47460 = inst_47468;
var state_47495__$1 = (function (){var statearr_47516 = state_47495;
(statearr_47516[(7)] = inst_47460);

(statearr_47516[(8)] = inst_47459__$1);

return statearr_47516;
})();
var statearr_47517_47543 = state_47495__$1;
(statearr_47517_47543[(2)] = null);

(statearr_47517_47543[(1)] = (2));


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
});})(c__44817__auto___47529,out))
;
return ((function (switch__44705__auto__,c__44817__auto___47529,out){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_47521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47521[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_47521[(1)] = (1));

return statearr_47521;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_47495){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_47495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e47522){if((e47522 instanceof Object)){
var ex__44709__auto__ = e47522;
var statearr_47523_47544 = state_47495;
(statearr_47523_47544[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47545 = state_47495;
state_47495 = G__47545;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_47495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_47495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___47529,out))
})();
var state__44819__auto__ = (function (){var statearr_47524 = f__44818__auto__.call(null);
(statearr_47524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___47529);

return statearr_47524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___47529,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47546 = [];
var len__43720__auto___47620 = arguments.length;
var i__43721__auto___47621 = (0);
while(true){
if((i__43721__auto___47621 < len__43720__auto___47620)){
args47546.push((arguments[i__43721__auto___47621]));

var G__47622 = (i__43721__auto___47621 + (1));
i__43721__auto___47621 = G__47622;
continue;
} else {
}
break;
}

var G__47548 = args47546.length;
switch (G__47548) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47546.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44817__auto___47624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___47624,out){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___47624,out){
return (function (state_47590){
var state_val_47591 = (state_47590[(1)]);
if((state_val_47591 === (7))){
var inst_47586 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47592_47625 = state_47590__$1;
(statearr_47592_47625[(2)] = inst_47586);

(statearr_47592_47625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (1))){
var inst_47549 = [];
var inst_47550 = inst_47549;
var inst_47551 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47590__$1 = (function (){var statearr_47593 = state_47590;
(statearr_47593[(7)] = inst_47551);

(statearr_47593[(8)] = inst_47550);

return statearr_47593;
})();
var statearr_47594_47626 = state_47590__$1;
(statearr_47594_47626[(2)] = null);

(statearr_47594_47626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (4))){
var inst_47554 = (state_47590[(9)]);
var inst_47554__$1 = (state_47590[(2)]);
var inst_47555 = (inst_47554__$1 == null);
var inst_47556 = cljs.core.not.call(null,inst_47555);
var state_47590__$1 = (function (){var statearr_47595 = state_47590;
(statearr_47595[(9)] = inst_47554__$1);

return statearr_47595;
})();
if(inst_47556){
var statearr_47596_47627 = state_47590__$1;
(statearr_47596_47627[(1)] = (5));

} else {
var statearr_47597_47628 = state_47590__$1;
(statearr_47597_47628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (15))){
var inst_47580 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47598_47629 = state_47590__$1;
(statearr_47598_47629[(2)] = inst_47580);

(statearr_47598_47629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (13))){
var state_47590__$1 = state_47590;
var statearr_47599_47630 = state_47590__$1;
(statearr_47599_47630[(2)] = null);

(statearr_47599_47630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (6))){
var inst_47550 = (state_47590[(8)]);
var inst_47575 = inst_47550.length;
var inst_47576 = (inst_47575 > (0));
var state_47590__$1 = state_47590;
if(cljs.core.truth_(inst_47576)){
var statearr_47600_47631 = state_47590__$1;
(statearr_47600_47631[(1)] = (12));

} else {
var statearr_47601_47632 = state_47590__$1;
(statearr_47601_47632[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (3))){
var inst_47588 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47590__$1,inst_47588);
} else {
if((state_val_47591 === (12))){
var inst_47550 = (state_47590[(8)]);
var inst_47578 = cljs.core.vec.call(null,inst_47550);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47590__$1,(15),out,inst_47578);
} else {
if((state_val_47591 === (2))){
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47590__$1,(4),ch);
} else {
if((state_val_47591 === (11))){
var inst_47554 = (state_47590[(9)]);
var inst_47558 = (state_47590[(10)]);
var inst_47568 = (state_47590[(2)]);
var inst_47569 = [];
var inst_47570 = inst_47569.push(inst_47554);
var inst_47550 = inst_47569;
var inst_47551 = inst_47558;
var state_47590__$1 = (function (){var statearr_47602 = state_47590;
(statearr_47602[(7)] = inst_47551);

(statearr_47602[(11)] = inst_47570);

(statearr_47602[(8)] = inst_47550);

(statearr_47602[(12)] = inst_47568);

return statearr_47602;
})();
var statearr_47603_47633 = state_47590__$1;
(statearr_47603_47633[(2)] = null);

(statearr_47603_47633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (9))){
var inst_47550 = (state_47590[(8)]);
var inst_47566 = cljs.core.vec.call(null,inst_47550);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47590__$1,(11),out,inst_47566);
} else {
if((state_val_47591 === (5))){
var inst_47554 = (state_47590[(9)]);
var inst_47551 = (state_47590[(7)]);
var inst_47558 = (state_47590[(10)]);
var inst_47558__$1 = f.call(null,inst_47554);
var inst_47559 = cljs.core._EQ_.call(null,inst_47558__$1,inst_47551);
var inst_47560 = cljs.core.keyword_identical_QMARK_.call(null,inst_47551,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47561 = (inst_47559) || (inst_47560);
var state_47590__$1 = (function (){var statearr_47604 = state_47590;
(statearr_47604[(10)] = inst_47558__$1);

return statearr_47604;
})();
if(cljs.core.truth_(inst_47561)){
var statearr_47605_47634 = state_47590__$1;
(statearr_47605_47634[(1)] = (8));

} else {
var statearr_47606_47635 = state_47590__$1;
(statearr_47606_47635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (14))){
var inst_47583 = (state_47590[(2)]);
var inst_47584 = cljs.core.async.close_BANG_.call(null,out);
var state_47590__$1 = (function (){var statearr_47608 = state_47590;
(statearr_47608[(13)] = inst_47583);

return statearr_47608;
})();
var statearr_47609_47636 = state_47590__$1;
(statearr_47609_47636[(2)] = inst_47584);

(statearr_47609_47636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (10))){
var inst_47573 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47610_47637 = state_47590__$1;
(statearr_47610_47637[(2)] = inst_47573);

(statearr_47610_47637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (8))){
var inst_47554 = (state_47590[(9)]);
var inst_47558 = (state_47590[(10)]);
var inst_47550 = (state_47590[(8)]);
var inst_47563 = inst_47550.push(inst_47554);
var tmp47607 = inst_47550;
var inst_47550__$1 = tmp47607;
var inst_47551 = inst_47558;
var state_47590__$1 = (function (){var statearr_47611 = state_47590;
(statearr_47611[(7)] = inst_47551);

(statearr_47611[(14)] = inst_47563);

(statearr_47611[(8)] = inst_47550__$1);

return statearr_47611;
})();
var statearr_47612_47638 = state_47590__$1;
(statearr_47612_47638[(2)] = null);

(statearr_47612_47638[(1)] = (2));


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
});})(c__44817__auto___47624,out))
;
return ((function (switch__44705__auto__,c__44817__auto___47624,out){
return (function() {
var cljs$core$async$state_machine__44706__auto__ = null;
var cljs$core$async$state_machine__44706__auto____0 = (function (){
var statearr_47616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47616[(0)] = cljs$core$async$state_machine__44706__auto__);

(statearr_47616[(1)] = (1));

return statearr_47616;
});
var cljs$core$async$state_machine__44706__auto____1 = (function (state_47590){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_47590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e47617){if((e47617 instanceof Object)){
var ex__44709__auto__ = e47617;
var statearr_47618_47639 = state_47590;
(statearr_47618_47639[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47640 = state_47590;
state_47590 = G__47640;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
cljs$core$async$state_machine__44706__auto__ = function(state_47590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44706__auto____1.call(this,state_47590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44706__auto____0;
cljs$core$async$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44706__auto____1;
return cljs$core$async$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___47624,out))
})();
var state__44819__auto__ = (function (){var statearr_47619 = f__44818__auto__.call(null);
(statearr_47619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___47624);

return statearr_47619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___47624,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map