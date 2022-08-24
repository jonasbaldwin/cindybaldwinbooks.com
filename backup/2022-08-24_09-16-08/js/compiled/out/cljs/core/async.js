// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30020 = arguments.length;
switch (G__30020) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30021 = (function (f,blockable,meta30022){
this.f = f;
this.blockable = blockable;
this.meta30022 = meta30022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30023,meta30022__$1){
var self__ = this;
var _30023__$1 = this;
return (new cljs.core.async.t_cljs$core$async30021(self__.f,self__.blockable,meta30022__$1));
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30023){
var self__ = this;
var _30023__$1 = this;
return self__.meta30022;
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30022","meta30022",-1320907617,null)], null);
});

cljs.core.async.t_cljs$core$async30021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30021";

cljs.core.async.t_cljs$core$async30021.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30021");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30021.
 */
cljs.core.async.__GT_t_cljs$core$async30021 = (function cljs$core$async$__GT_t_cljs$core$async30021(f__$1,blockable__$1,meta30022){
return (new cljs.core.async.t_cljs$core$async30021(f__$1,blockable__$1,meta30022));
});

}

return (new cljs.core.async.t_cljs$core$async30021(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__30027 = arguments.length;
switch (G__30027) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__30030 = arguments.length;
switch (G__30030) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__30033 = arguments.length;
switch (G__30033) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30035 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30035);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30035,ret){
return (function (){
return fn1.call(null,val_30035);
});})(val_30035,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30037 = arguments.length;
switch (G__30037) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
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
var n__4607__auto___30039 = n;
var x_30040 = (0);
while(true){
if((x_30040 < n__4607__auto___30039)){
(a[x_30040] = (0));

var G__30041 = (x_30040 + (1));
x_30040 = G__30041;
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

var G__30042 = (i + (1));
i = G__30042;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30043 = (function (flag,meta30044){
this.flag = flag;
this.meta30044 = meta30044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30045,meta30044__$1){
var self__ = this;
var _30045__$1 = this;
return (new cljs.core.async.t_cljs$core$async30043(self__.flag,meta30044__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30045){
var self__ = this;
var _30045__$1 = this;
return self__.meta30044;
});})(flag))
;

cljs.core.async.t_cljs$core$async30043.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30043.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30044","meta30044",-770898027,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30043";

cljs.core.async.t_cljs$core$async30043.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30043");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30043.
 */
cljs.core.async.__GT_t_cljs$core$async30043 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30043(flag__$1,meta30044){
return (new cljs.core.async.t_cljs$core$async30043(flag__$1,meta30044));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30043(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30046 = (function (flag,cb,meta30047){
this.flag = flag;
this.cb = cb;
this.meta30047 = meta30047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30048,meta30047__$1){
var self__ = this;
var _30048__$1 = this;
return (new cljs.core.async.t_cljs$core$async30046(self__.flag,self__.cb,meta30047__$1));
});

cljs.core.async.t_cljs$core$async30046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30048){
var self__ = this;
var _30048__$1 = this;
return self__.meta30047;
});

cljs.core.async.t_cljs$core$async30046.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30047","meta30047",-62755518,null)], null);
});

cljs.core.async.t_cljs$core$async30046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30046";

cljs.core.async.t_cljs$core$async30046.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30046");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30046.
 */
cljs.core.async.__GT_t_cljs$core$async30046 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30046(flag__$1,cb__$1,meta30047){
return (new cljs.core.async.t_cljs$core$async30046(flag__$1,cb__$1,meta30047));
});

}

return (new cljs.core.async.t_cljs$core$async30046(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30049_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30049_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30050_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30050_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30051 = (i + (1));
i = G__30051;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___30057 = arguments.length;
var i__4731__auto___30058 = (0);
while(true){
if((i__4731__auto___30058 < len__4730__auto___30057)){
args__4736__auto__.push((arguments[i__4731__auto___30058]));

var G__30059 = (i__4731__auto___30058 + (1));
i__4731__auto___30058 = G__30059;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30054){
var map__30055 = p__30054;
var map__30055__$1 = (((((!((map__30055 == null))))?(((((map__30055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30055):map__30055);
var opts = map__30055__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30052){
var G__30053 = cljs.core.first.call(null,seq30052);
var seq30052__$1 = cljs.core.next.call(null,seq30052);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30053,seq30052__$1);
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
var G__30061 = arguments.length;
switch (G__30061) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29960__auto___30107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___30107){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___30107){
return (function (state_30085){
var state_val_30086 = (state_30085[(1)]);
if((state_val_30086 === (7))){
var inst_30081 = (state_30085[(2)]);
var state_30085__$1 = state_30085;
var statearr_30087_30108 = state_30085__$1;
(statearr_30087_30108[(2)] = inst_30081);

(statearr_30087_30108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (1))){
var state_30085__$1 = state_30085;
var statearr_30088_30109 = state_30085__$1;
(statearr_30088_30109[(2)] = null);

(statearr_30088_30109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (4))){
var inst_30064 = (state_30085[(7)]);
var inst_30064__$1 = (state_30085[(2)]);
var inst_30065 = (inst_30064__$1 == null);
var state_30085__$1 = (function (){var statearr_30089 = state_30085;
(statearr_30089[(7)] = inst_30064__$1);

return statearr_30089;
})();
if(cljs.core.truth_(inst_30065)){
var statearr_30090_30110 = state_30085__$1;
(statearr_30090_30110[(1)] = (5));

} else {
var statearr_30091_30111 = state_30085__$1;
(statearr_30091_30111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (13))){
var state_30085__$1 = state_30085;
var statearr_30092_30112 = state_30085__$1;
(statearr_30092_30112[(2)] = null);

(statearr_30092_30112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (6))){
var inst_30064 = (state_30085[(7)]);
var state_30085__$1 = state_30085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30085__$1,(11),to,inst_30064);
} else {
if((state_val_30086 === (3))){
var inst_30083 = (state_30085[(2)]);
var state_30085__$1 = state_30085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30085__$1,inst_30083);
} else {
if((state_val_30086 === (12))){
var state_30085__$1 = state_30085;
var statearr_30093_30113 = state_30085__$1;
(statearr_30093_30113[(2)] = null);

(statearr_30093_30113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (2))){
var state_30085__$1 = state_30085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30085__$1,(4),from);
} else {
if((state_val_30086 === (11))){
var inst_30074 = (state_30085[(2)]);
var state_30085__$1 = state_30085;
if(cljs.core.truth_(inst_30074)){
var statearr_30094_30114 = state_30085__$1;
(statearr_30094_30114[(1)] = (12));

} else {
var statearr_30095_30115 = state_30085__$1;
(statearr_30095_30115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (9))){
var state_30085__$1 = state_30085;
var statearr_30096_30116 = state_30085__$1;
(statearr_30096_30116[(2)] = null);

(statearr_30096_30116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (5))){
var state_30085__$1 = state_30085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30097_30117 = state_30085__$1;
(statearr_30097_30117[(1)] = (8));

} else {
var statearr_30098_30118 = state_30085__$1;
(statearr_30098_30118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (14))){
var inst_30079 = (state_30085[(2)]);
var state_30085__$1 = state_30085;
var statearr_30099_30119 = state_30085__$1;
(statearr_30099_30119[(2)] = inst_30079);

(statearr_30099_30119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (10))){
var inst_30071 = (state_30085[(2)]);
var state_30085__$1 = state_30085;
var statearr_30100_30120 = state_30085__$1;
(statearr_30100_30120[(2)] = inst_30071);

(statearr_30100_30120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (8))){
var inst_30068 = cljs.core.async.close_BANG_.call(null,to);
var state_30085__$1 = state_30085;
var statearr_30101_30121 = state_30085__$1;
(statearr_30101_30121[(2)] = inst_30068);

(statearr_30101_30121[(1)] = (10));


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
});})(c__29960__auto___30107))
;
return ((function (switch__29865__auto__,c__29960__auto___30107){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_30102 = [null,null,null,null,null,null,null,null];
(statearr_30102[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_30102[(1)] = (1));

return statearr_30102;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_30085){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30103){if((e30103 instanceof Object)){
var ex__29869__auto__ = e30103;
var statearr_30104_30122 = state_30085;
(statearr_30104_30122[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30123 = state_30085;
state_30085 = G__30123;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_30085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_30085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___30107))
})();
var state__29962__auto__ = (function (){var statearr_30105 = f__29961__auto__.call(null);
(statearr_30105[(6)] = c__29960__auto___30107);

return statearr_30105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___30107))
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
return (function (p__30124){
var vec__30125 = p__30124;
var v = cljs.core.nth.call(null,vec__30125,(0),null);
var p = cljs.core.nth.call(null,vec__30125,(1),null);
var job = vec__30125;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29960__auto___30296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___30296,res,vec__30125,v,p,job,jobs,results){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___30296,res,vec__30125,v,p,job,jobs,results){
return (function (state_30132){
var state_val_30133 = (state_30132[(1)]);
if((state_val_30133 === (1))){
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30132__$1,(2),res,v);
} else {
if((state_val_30133 === (2))){
var inst_30129 = (state_30132[(2)]);
var inst_30130 = cljs.core.async.close_BANG_.call(null,res);
var state_30132__$1 = (function (){var statearr_30134 = state_30132;
(statearr_30134[(7)] = inst_30129);

return statearr_30134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30132__$1,inst_30130);
} else {
return null;
}
}
});})(c__29960__auto___30296,res,vec__30125,v,p,job,jobs,results))
;
return ((function (switch__29865__auto__,c__29960__auto___30296,res,vec__30125,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0 = (function (){
var statearr_30135 = [null,null,null,null,null,null,null,null];
(statearr_30135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__);

(statearr_30135[(1)] = (1));

return statearr_30135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1 = (function (state_30132){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30136){if((e30136 instanceof Object)){
var ex__29869__auto__ = e30136;
var statearr_30137_30297 = state_30132;
(statearr_30137_30297[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30298 = state_30132;
state_30132 = G__30298;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = function(state_30132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1.call(this,state_30132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___30296,res,vec__30125,v,p,job,jobs,results))
})();
var state__29962__auto__ = (function (){var statearr_30138 = f__29961__auto__.call(null);
(statearr_30138[(6)] = c__29960__auto___30296);

return statearr_30138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___30296,res,vec__30125,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30139){
var vec__30140 = p__30139;
var v = cljs.core.nth.call(null,vec__30140,(0),null);
var p = cljs.core.nth.call(null,vec__30140,(1),null);
var job = vec__30140;
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
var n__4607__auto___30299 = n;
var __30300 = (0);
while(true){
if((__30300 < n__4607__auto___30299)){
var G__30143_30301 = type;
var G__30143_30302__$1 = (((G__30143_30301 instanceof cljs.core.Keyword))?G__30143_30301.fqn:null);
switch (G__30143_30302__$1) {
case "compute":
var c__29960__auto___30304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30300,c__29960__auto___30304,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (__30300,c__29960__auto___30304,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async){
return (function (state_30156){
var state_val_30157 = (state_30156[(1)]);
if((state_val_30157 === (1))){
var state_30156__$1 = state_30156;
var statearr_30158_30305 = state_30156__$1;
(statearr_30158_30305[(2)] = null);

(statearr_30158_30305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (2))){
var state_30156__$1 = state_30156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30156__$1,(4),jobs);
} else {
if((state_val_30157 === (3))){
var inst_30154 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30156__$1,inst_30154);
} else {
if((state_val_30157 === (4))){
var inst_30146 = (state_30156[(2)]);
var inst_30147 = process.call(null,inst_30146);
var state_30156__$1 = state_30156;
if(cljs.core.truth_(inst_30147)){
var statearr_30159_30306 = state_30156__$1;
(statearr_30159_30306[(1)] = (5));

} else {
var statearr_30160_30307 = state_30156__$1;
(statearr_30160_30307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (5))){
var state_30156__$1 = state_30156;
var statearr_30161_30308 = state_30156__$1;
(statearr_30161_30308[(2)] = null);

(statearr_30161_30308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (6))){
var state_30156__$1 = state_30156;
var statearr_30162_30309 = state_30156__$1;
(statearr_30162_30309[(2)] = null);

(statearr_30162_30309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (7))){
var inst_30152 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
var statearr_30163_30310 = state_30156__$1;
(statearr_30163_30310[(2)] = inst_30152);

(statearr_30163_30310[(1)] = (3));


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
});})(__30300,c__29960__auto___30304,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async))
;
return ((function (__30300,switch__29865__auto__,c__29960__auto___30304,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0 = (function (){
var statearr_30164 = [null,null,null,null,null,null,null];
(statearr_30164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__);

(statearr_30164[(1)] = (1));

return statearr_30164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1 = (function (state_30156){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30165){if((e30165 instanceof Object)){
var ex__29869__auto__ = e30165;
var statearr_30166_30311 = state_30156;
(statearr_30166_30311[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30312 = state_30156;
state_30156 = G__30312;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = function(state_30156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1.call(this,state_30156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__;
})()
;})(__30300,switch__29865__auto__,c__29960__auto___30304,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async))
})();
var state__29962__auto__ = (function (){var statearr_30167 = f__29961__auto__.call(null);
(statearr_30167[(6)] = c__29960__auto___30304);

return statearr_30167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(__30300,c__29960__auto___30304,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async))
);


break;
case "async":
var c__29960__auto___30313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30300,c__29960__auto___30313,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (__30300,c__29960__auto___30313,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async){
return (function (state_30180){
var state_val_30181 = (state_30180[(1)]);
if((state_val_30181 === (1))){
var state_30180__$1 = state_30180;
var statearr_30182_30314 = state_30180__$1;
(statearr_30182_30314[(2)] = null);

(statearr_30182_30314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (2))){
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30180__$1,(4),jobs);
} else {
if((state_val_30181 === (3))){
var inst_30178 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30180__$1,inst_30178);
} else {
if((state_val_30181 === (4))){
var inst_30170 = (state_30180[(2)]);
var inst_30171 = async.call(null,inst_30170);
var state_30180__$1 = state_30180;
if(cljs.core.truth_(inst_30171)){
var statearr_30183_30315 = state_30180__$1;
(statearr_30183_30315[(1)] = (5));

} else {
var statearr_30184_30316 = state_30180__$1;
(statearr_30184_30316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (5))){
var state_30180__$1 = state_30180;
var statearr_30185_30317 = state_30180__$1;
(statearr_30185_30317[(2)] = null);

(statearr_30185_30317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (6))){
var state_30180__$1 = state_30180;
var statearr_30186_30318 = state_30180__$1;
(statearr_30186_30318[(2)] = null);

(statearr_30186_30318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (7))){
var inst_30176 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
var statearr_30187_30319 = state_30180__$1;
(statearr_30187_30319[(2)] = inst_30176);

(statearr_30187_30319[(1)] = (3));


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
});})(__30300,c__29960__auto___30313,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async))
;
return ((function (__30300,switch__29865__auto__,c__29960__auto___30313,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0 = (function (){
var statearr_30188 = [null,null,null,null,null,null,null];
(statearr_30188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__);

(statearr_30188[(1)] = (1));

return statearr_30188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1 = (function (state_30180){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30189){if((e30189 instanceof Object)){
var ex__29869__auto__ = e30189;
var statearr_30190_30320 = state_30180;
(statearr_30190_30320[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30321 = state_30180;
state_30180 = G__30321;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = function(state_30180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1.call(this,state_30180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__;
})()
;})(__30300,switch__29865__auto__,c__29960__auto___30313,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async))
})();
var state__29962__auto__ = (function (){var statearr_30191 = f__29961__auto__.call(null);
(statearr_30191[(6)] = c__29960__auto___30313);

return statearr_30191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(__30300,c__29960__auto___30313,G__30143_30301,G__30143_30302__$1,n__4607__auto___30299,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30143_30302__$1)].join('')));

}

var G__30322 = (__30300 + (1));
__30300 = G__30322;
continue;
} else {
}
break;
}

var c__29960__auto___30323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___30323,jobs,results,process,async){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___30323,jobs,results,process,async){
return (function (state_30213){
var state_val_30214 = (state_30213[(1)]);
if((state_val_30214 === (7))){
var inst_30209 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30215_30324 = state_30213__$1;
(statearr_30215_30324[(2)] = inst_30209);

(statearr_30215_30324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (1))){
var state_30213__$1 = state_30213;
var statearr_30216_30325 = state_30213__$1;
(statearr_30216_30325[(2)] = null);

(statearr_30216_30325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (4))){
var inst_30194 = (state_30213[(7)]);
var inst_30194__$1 = (state_30213[(2)]);
var inst_30195 = (inst_30194__$1 == null);
var state_30213__$1 = (function (){var statearr_30217 = state_30213;
(statearr_30217[(7)] = inst_30194__$1);

return statearr_30217;
})();
if(cljs.core.truth_(inst_30195)){
var statearr_30218_30326 = state_30213__$1;
(statearr_30218_30326[(1)] = (5));

} else {
var statearr_30219_30327 = state_30213__$1;
(statearr_30219_30327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (6))){
var inst_30194 = (state_30213[(7)]);
var inst_30199 = (state_30213[(8)]);
var inst_30199__$1 = cljs.core.async.chan.call(null,(1));
var inst_30200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30201 = [inst_30194,inst_30199__$1];
var inst_30202 = (new cljs.core.PersistentVector(null,2,(5),inst_30200,inst_30201,null));
var state_30213__$1 = (function (){var statearr_30220 = state_30213;
(statearr_30220[(8)] = inst_30199__$1);

return statearr_30220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30213__$1,(8),jobs,inst_30202);
} else {
if((state_val_30214 === (3))){
var inst_30211 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30213__$1,inst_30211);
} else {
if((state_val_30214 === (2))){
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(4),from);
} else {
if((state_val_30214 === (9))){
var inst_30206 = (state_30213[(2)]);
var state_30213__$1 = (function (){var statearr_30221 = state_30213;
(statearr_30221[(9)] = inst_30206);

return statearr_30221;
})();
var statearr_30222_30328 = state_30213__$1;
(statearr_30222_30328[(2)] = null);

(statearr_30222_30328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (5))){
var inst_30197 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30213__$1 = state_30213;
var statearr_30223_30329 = state_30213__$1;
(statearr_30223_30329[(2)] = inst_30197);

(statearr_30223_30329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (8))){
var inst_30199 = (state_30213[(8)]);
var inst_30204 = (state_30213[(2)]);
var state_30213__$1 = (function (){var statearr_30224 = state_30213;
(statearr_30224[(10)] = inst_30204);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30213__$1,(9),results,inst_30199);
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
});})(c__29960__auto___30323,jobs,results,process,async))
;
return ((function (switch__29865__auto__,c__29960__auto___30323,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0 = (function (){
var statearr_30225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__);

(statearr_30225[(1)] = (1));

return statearr_30225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1 = (function (state_30213){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30226){if((e30226 instanceof Object)){
var ex__29869__auto__ = e30226;
var statearr_30227_30330 = state_30213;
(statearr_30227_30330[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30331 = state_30213;
state_30213 = G__30331;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = function(state_30213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1.call(this,state_30213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___30323,jobs,results,process,async))
})();
var state__29962__auto__ = (function (){var statearr_30228 = f__29961__auto__.call(null);
(statearr_30228[(6)] = c__29960__auto___30323);

return statearr_30228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___30323,jobs,results,process,async))
);


var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__,jobs,results,process,async){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__,jobs,results,process,async){
return (function (state_30266){
var state_val_30267 = (state_30266[(1)]);
if((state_val_30267 === (7))){
var inst_30262 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30268_30332 = state_30266__$1;
(statearr_30268_30332[(2)] = inst_30262);

(statearr_30268_30332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (20))){
var state_30266__$1 = state_30266;
var statearr_30269_30333 = state_30266__$1;
(statearr_30269_30333[(2)] = null);

(statearr_30269_30333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (1))){
var state_30266__$1 = state_30266;
var statearr_30270_30334 = state_30266__$1;
(statearr_30270_30334[(2)] = null);

(statearr_30270_30334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (4))){
var inst_30231 = (state_30266[(7)]);
var inst_30231__$1 = (state_30266[(2)]);
var inst_30232 = (inst_30231__$1 == null);
var state_30266__$1 = (function (){var statearr_30271 = state_30266;
(statearr_30271[(7)] = inst_30231__$1);

return statearr_30271;
})();
if(cljs.core.truth_(inst_30232)){
var statearr_30272_30335 = state_30266__$1;
(statearr_30272_30335[(1)] = (5));

} else {
var statearr_30273_30336 = state_30266__$1;
(statearr_30273_30336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (15))){
var inst_30244 = (state_30266[(8)]);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30266__$1,(18),to,inst_30244);
} else {
if((state_val_30267 === (21))){
var inst_30257 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30274_30337 = state_30266__$1;
(statearr_30274_30337[(2)] = inst_30257);

(statearr_30274_30337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (13))){
var inst_30259 = (state_30266[(2)]);
var state_30266__$1 = (function (){var statearr_30275 = state_30266;
(statearr_30275[(9)] = inst_30259);

return statearr_30275;
})();
var statearr_30276_30338 = state_30266__$1;
(statearr_30276_30338[(2)] = null);

(statearr_30276_30338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (6))){
var inst_30231 = (state_30266[(7)]);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30266__$1,(11),inst_30231);
} else {
if((state_val_30267 === (17))){
var inst_30252 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
if(cljs.core.truth_(inst_30252)){
var statearr_30277_30339 = state_30266__$1;
(statearr_30277_30339[(1)] = (19));

} else {
var statearr_30278_30340 = state_30266__$1;
(statearr_30278_30340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (3))){
var inst_30264 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30266__$1,inst_30264);
} else {
if((state_val_30267 === (12))){
var inst_30241 = (state_30266[(10)]);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30266__$1,(14),inst_30241);
} else {
if((state_val_30267 === (2))){
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30266__$1,(4),results);
} else {
if((state_val_30267 === (19))){
var state_30266__$1 = state_30266;
var statearr_30279_30341 = state_30266__$1;
(statearr_30279_30341[(2)] = null);

(statearr_30279_30341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (11))){
var inst_30241 = (state_30266[(2)]);
var state_30266__$1 = (function (){var statearr_30280 = state_30266;
(statearr_30280[(10)] = inst_30241);

return statearr_30280;
})();
var statearr_30281_30342 = state_30266__$1;
(statearr_30281_30342[(2)] = null);

(statearr_30281_30342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (9))){
var state_30266__$1 = state_30266;
var statearr_30282_30343 = state_30266__$1;
(statearr_30282_30343[(2)] = null);

(statearr_30282_30343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (5))){
var state_30266__$1 = state_30266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30283_30344 = state_30266__$1;
(statearr_30283_30344[(1)] = (8));

} else {
var statearr_30284_30345 = state_30266__$1;
(statearr_30284_30345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (14))){
var inst_30244 = (state_30266[(8)]);
var inst_30246 = (state_30266[(11)]);
var inst_30244__$1 = (state_30266[(2)]);
var inst_30245 = (inst_30244__$1 == null);
var inst_30246__$1 = cljs.core.not.call(null,inst_30245);
var state_30266__$1 = (function (){var statearr_30285 = state_30266;
(statearr_30285[(8)] = inst_30244__$1);

(statearr_30285[(11)] = inst_30246__$1);

return statearr_30285;
})();
if(inst_30246__$1){
var statearr_30286_30346 = state_30266__$1;
(statearr_30286_30346[(1)] = (15));

} else {
var statearr_30287_30347 = state_30266__$1;
(statearr_30287_30347[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (16))){
var inst_30246 = (state_30266[(11)]);
var state_30266__$1 = state_30266;
var statearr_30288_30348 = state_30266__$1;
(statearr_30288_30348[(2)] = inst_30246);

(statearr_30288_30348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (10))){
var inst_30238 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30289_30349 = state_30266__$1;
(statearr_30289_30349[(2)] = inst_30238);

(statearr_30289_30349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (18))){
var inst_30249 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30290_30350 = state_30266__$1;
(statearr_30290_30350[(2)] = inst_30249);

(statearr_30290_30350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (8))){
var inst_30235 = cljs.core.async.close_BANG_.call(null,to);
var state_30266__$1 = state_30266;
var statearr_30291_30351 = state_30266__$1;
(statearr_30291_30351[(2)] = inst_30235);

(statearr_30291_30351[(1)] = (10));


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
});})(c__29960__auto__,jobs,results,process,async))
;
return ((function (switch__29865__auto__,c__29960__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0 = (function (){
var statearr_30292 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__);

(statearr_30292[(1)] = (1));

return statearr_30292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1 = (function (state_30266){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30293){if((e30293 instanceof Object)){
var ex__29869__auto__ = e30293;
var statearr_30294_30352 = state_30266;
(statearr_30294_30352[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30353 = state_30266;
state_30266 = G__30353;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__ = function(state_30266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1.call(this,state_30266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__,jobs,results,process,async))
})();
var state__29962__auto__ = (function (){var statearr_30295 = f__29961__auto__.call(null);
(statearr_30295[(6)] = c__29960__auto__);

return statearr_30295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__,jobs,results,process,async))
);

return c__29960__auto__;
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
var G__30355 = arguments.length;
switch (G__30355) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__30358 = arguments.length;
switch (G__30358) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__30361 = arguments.length;
switch (G__30361) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29960__auto___30410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___30410,tc,fc){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___30410,tc,fc){
return (function (state_30387){
var state_val_30388 = (state_30387[(1)]);
if((state_val_30388 === (7))){
var inst_30383 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30389_30411 = state_30387__$1;
(statearr_30389_30411[(2)] = inst_30383);

(statearr_30389_30411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (1))){
var state_30387__$1 = state_30387;
var statearr_30390_30412 = state_30387__$1;
(statearr_30390_30412[(2)] = null);

(statearr_30390_30412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (4))){
var inst_30364 = (state_30387[(7)]);
var inst_30364__$1 = (state_30387[(2)]);
var inst_30365 = (inst_30364__$1 == null);
var state_30387__$1 = (function (){var statearr_30391 = state_30387;
(statearr_30391[(7)] = inst_30364__$1);

return statearr_30391;
})();
if(cljs.core.truth_(inst_30365)){
var statearr_30392_30413 = state_30387__$1;
(statearr_30392_30413[(1)] = (5));

} else {
var statearr_30393_30414 = state_30387__$1;
(statearr_30393_30414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (13))){
var state_30387__$1 = state_30387;
var statearr_30394_30415 = state_30387__$1;
(statearr_30394_30415[(2)] = null);

(statearr_30394_30415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (6))){
var inst_30364 = (state_30387[(7)]);
var inst_30370 = p.call(null,inst_30364);
var state_30387__$1 = state_30387;
if(cljs.core.truth_(inst_30370)){
var statearr_30395_30416 = state_30387__$1;
(statearr_30395_30416[(1)] = (9));

} else {
var statearr_30396_30417 = state_30387__$1;
(statearr_30396_30417[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (3))){
var inst_30385 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30387__$1,inst_30385);
} else {
if((state_val_30388 === (12))){
var state_30387__$1 = state_30387;
var statearr_30397_30418 = state_30387__$1;
(statearr_30397_30418[(2)] = null);

(statearr_30397_30418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (2))){
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30387__$1,(4),ch);
} else {
if((state_val_30388 === (11))){
var inst_30364 = (state_30387[(7)]);
var inst_30374 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30387__$1,(8),inst_30374,inst_30364);
} else {
if((state_val_30388 === (9))){
var state_30387__$1 = state_30387;
var statearr_30398_30419 = state_30387__$1;
(statearr_30398_30419[(2)] = tc);

(statearr_30398_30419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (5))){
var inst_30367 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30368 = cljs.core.async.close_BANG_.call(null,fc);
var state_30387__$1 = (function (){var statearr_30399 = state_30387;
(statearr_30399[(8)] = inst_30367);

return statearr_30399;
})();
var statearr_30400_30420 = state_30387__$1;
(statearr_30400_30420[(2)] = inst_30368);

(statearr_30400_30420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (14))){
var inst_30381 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30401_30421 = state_30387__$1;
(statearr_30401_30421[(2)] = inst_30381);

(statearr_30401_30421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (10))){
var state_30387__$1 = state_30387;
var statearr_30402_30422 = state_30387__$1;
(statearr_30402_30422[(2)] = fc);

(statearr_30402_30422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (8))){
var inst_30376 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
if(cljs.core.truth_(inst_30376)){
var statearr_30403_30423 = state_30387__$1;
(statearr_30403_30423[(1)] = (12));

} else {
var statearr_30404_30424 = state_30387__$1;
(statearr_30404_30424[(1)] = (13));

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
});})(c__29960__auto___30410,tc,fc))
;
return ((function (switch__29865__auto__,c__29960__auto___30410,tc,fc){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_30405 = [null,null,null,null,null,null,null,null,null];
(statearr_30405[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_30405[(1)] = (1));

return statearr_30405;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_30387){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30406){if((e30406 instanceof Object)){
var ex__29869__auto__ = e30406;
var statearr_30407_30425 = state_30387;
(statearr_30407_30425[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30426 = state_30387;
state_30387 = G__30426;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_30387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_30387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___30410,tc,fc))
})();
var state__29962__auto__ = (function (){var statearr_30408 = f__29961__auto__.call(null);
(statearr_30408[(6)] = c__29960__auto___30410);

return statearr_30408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___30410,tc,fc))
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
var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__){
return (function (state_30447){
var state_val_30448 = (state_30447[(1)]);
if((state_val_30448 === (7))){
var inst_30443 = (state_30447[(2)]);
var state_30447__$1 = state_30447;
var statearr_30449_30467 = state_30447__$1;
(statearr_30449_30467[(2)] = inst_30443);

(statearr_30449_30467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (1))){
var inst_30427 = init;
var state_30447__$1 = (function (){var statearr_30450 = state_30447;
(statearr_30450[(7)] = inst_30427);

return statearr_30450;
})();
var statearr_30451_30468 = state_30447__$1;
(statearr_30451_30468[(2)] = null);

(statearr_30451_30468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (4))){
var inst_30430 = (state_30447[(8)]);
var inst_30430__$1 = (state_30447[(2)]);
var inst_30431 = (inst_30430__$1 == null);
var state_30447__$1 = (function (){var statearr_30452 = state_30447;
(statearr_30452[(8)] = inst_30430__$1);

return statearr_30452;
})();
if(cljs.core.truth_(inst_30431)){
var statearr_30453_30469 = state_30447__$1;
(statearr_30453_30469[(1)] = (5));

} else {
var statearr_30454_30470 = state_30447__$1;
(statearr_30454_30470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (6))){
var inst_30434 = (state_30447[(9)]);
var inst_30427 = (state_30447[(7)]);
var inst_30430 = (state_30447[(8)]);
var inst_30434__$1 = f.call(null,inst_30427,inst_30430);
var inst_30435 = cljs.core.reduced_QMARK_.call(null,inst_30434__$1);
var state_30447__$1 = (function (){var statearr_30455 = state_30447;
(statearr_30455[(9)] = inst_30434__$1);

return statearr_30455;
})();
if(inst_30435){
var statearr_30456_30471 = state_30447__$1;
(statearr_30456_30471[(1)] = (8));

} else {
var statearr_30457_30472 = state_30447__$1;
(statearr_30457_30472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (3))){
var inst_30445 = (state_30447[(2)]);
var state_30447__$1 = state_30447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30447__$1,inst_30445);
} else {
if((state_val_30448 === (2))){
var state_30447__$1 = state_30447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30447__$1,(4),ch);
} else {
if((state_val_30448 === (9))){
var inst_30434 = (state_30447[(9)]);
var inst_30427 = inst_30434;
var state_30447__$1 = (function (){var statearr_30458 = state_30447;
(statearr_30458[(7)] = inst_30427);

return statearr_30458;
})();
var statearr_30459_30473 = state_30447__$1;
(statearr_30459_30473[(2)] = null);

(statearr_30459_30473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (5))){
var inst_30427 = (state_30447[(7)]);
var state_30447__$1 = state_30447;
var statearr_30460_30474 = state_30447__$1;
(statearr_30460_30474[(2)] = inst_30427);

(statearr_30460_30474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (10))){
var inst_30441 = (state_30447[(2)]);
var state_30447__$1 = state_30447;
var statearr_30461_30475 = state_30447__$1;
(statearr_30461_30475[(2)] = inst_30441);

(statearr_30461_30475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (8))){
var inst_30434 = (state_30447[(9)]);
var inst_30437 = cljs.core.deref.call(null,inst_30434);
var state_30447__$1 = state_30447;
var statearr_30462_30476 = state_30447__$1;
(statearr_30462_30476[(2)] = inst_30437);

(statearr_30462_30476[(1)] = (10));


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
});})(c__29960__auto__))
;
return ((function (switch__29865__auto__,c__29960__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29866__auto____0 = (function (){
var statearr_30463 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30463[(0)] = cljs$core$async$reduce_$_state_machine__29866__auto__);

(statearr_30463[(1)] = (1));

return statearr_30463;
});
var cljs$core$async$reduce_$_state_machine__29866__auto____1 = (function (state_30447){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30464){if((e30464 instanceof Object)){
var ex__29869__auto__ = e30464;
var statearr_30465_30477 = state_30447;
(statearr_30465_30477[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30478 = state_30447;
state_30447 = G__30478;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29866__auto__ = function(state_30447){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29866__auto____1.call(this,state_30447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29866__auto____0;
cljs$core$async$reduce_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29866__auto____1;
return cljs$core$async$reduce_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__))
})();
var state__29962__auto__ = (function (){var statearr_30466 = f__29961__auto__.call(null);
(statearr_30466[(6)] = c__29960__auto__);

return statearr_30466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__))
);

return c__29960__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__,f__$1){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__,f__$1){
return (function (state_30484){
var state_val_30485 = (state_30484[(1)]);
if((state_val_30485 === (1))){
var inst_30479 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30484__$1,(2),inst_30479);
} else {
if((state_val_30485 === (2))){
var inst_30481 = (state_30484[(2)]);
var inst_30482 = f__$1.call(null,inst_30481);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30484__$1,inst_30482);
} else {
return null;
}
}
});})(c__29960__auto__,f__$1))
;
return ((function (switch__29865__auto__,c__29960__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29866__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29866__auto____0 = (function (){
var statearr_30486 = [null,null,null,null,null,null,null];
(statearr_30486[(0)] = cljs$core$async$transduce_$_state_machine__29866__auto__);

(statearr_30486[(1)] = (1));

return statearr_30486;
});
var cljs$core$async$transduce_$_state_machine__29866__auto____1 = (function (state_30484){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30487){if((e30487 instanceof Object)){
var ex__29869__auto__ = e30487;
var statearr_30488_30490 = state_30484;
(statearr_30488_30490[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30491 = state_30484;
state_30484 = G__30491;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29866__auto__ = function(state_30484){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29866__auto____1.call(this,state_30484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29866__auto____0;
cljs$core$async$transduce_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29866__auto____1;
return cljs$core$async$transduce_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__,f__$1))
})();
var state__29962__auto__ = (function (){var statearr_30489 = f__29961__auto__.call(null);
(statearr_30489[(6)] = c__29960__auto__);

return statearr_30489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__,f__$1))
);

return c__29960__auto__;
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
var G__30493 = arguments.length;
switch (G__30493) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__){
return (function (state_30518){
var state_val_30519 = (state_30518[(1)]);
if((state_val_30519 === (7))){
var inst_30500 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
var statearr_30520_30541 = state_30518__$1;
(statearr_30520_30541[(2)] = inst_30500);

(statearr_30520_30541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (1))){
var inst_30494 = cljs.core.seq.call(null,coll);
var inst_30495 = inst_30494;
var state_30518__$1 = (function (){var statearr_30521 = state_30518;
(statearr_30521[(7)] = inst_30495);

return statearr_30521;
})();
var statearr_30522_30542 = state_30518__$1;
(statearr_30522_30542[(2)] = null);

(statearr_30522_30542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (4))){
var inst_30495 = (state_30518[(7)]);
var inst_30498 = cljs.core.first.call(null,inst_30495);
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30518__$1,(7),ch,inst_30498);
} else {
if((state_val_30519 === (13))){
var inst_30512 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
var statearr_30523_30543 = state_30518__$1;
(statearr_30523_30543[(2)] = inst_30512);

(statearr_30523_30543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (6))){
var inst_30503 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
if(cljs.core.truth_(inst_30503)){
var statearr_30524_30544 = state_30518__$1;
(statearr_30524_30544[(1)] = (8));

} else {
var statearr_30525_30545 = state_30518__$1;
(statearr_30525_30545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (3))){
var inst_30516 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30518__$1,inst_30516);
} else {
if((state_val_30519 === (12))){
var state_30518__$1 = state_30518;
var statearr_30526_30546 = state_30518__$1;
(statearr_30526_30546[(2)] = null);

(statearr_30526_30546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (2))){
var inst_30495 = (state_30518[(7)]);
var state_30518__$1 = state_30518;
if(cljs.core.truth_(inst_30495)){
var statearr_30527_30547 = state_30518__$1;
(statearr_30527_30547[(1)] = (4));

} else {
var statearr_30528_30548 = state_30518__$1;
(statearr_30528_30548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (11))){
var inst_30509 = cljs.core.async.close_BANG_.call(null,ch);
var state_30518__$1 = state_30518;
var statearr_30529_30549 = state_30518__$1;
(statearr_30529_30549[(2)] = inst_30509);

(statearr_30529_30549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (9))){
var state_30518__$1 = state_30518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30530_30550 = state_30518__$1;
(statearr_30530_30550[(1)] = (11));

} else {
var statearr_30531_30551 = state_30518__$1;
(statearr_30531_30551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (5))){
var inst_30495 = (state_30518[(7)]);
var state_30518__$1 = state_30518;
var statearr_30532_30552 = state_30518__$1;
(statearr_30532_30552[(2)] = inst_30495);

(statearr_30532_30552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (10))){
var inst_30514 = (state_30518[(2)]);
var state_30518__$1 = state_30518;
var statearr_30533_30553 = state_30518__$1;
(statearr_30533_30553[(2)] = inst_30514);

(statearr_30533_30553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30519 === (8))){
var inst_30495 = (state_30518[(7)]);
var inst_30505 = cljs.core.next.call(null,inst_30495);
var inst_30495__$1 = inst_30505;
var state_30518__$1 = (function (){var statearr_30534 = state_30518;
(statearr_30534[(7)] = inst_30495__$1);

return statearr_30534;
})();
var statearr_30535_30554 = state_30518__$1;
(statearr_30535_30554[(2)] = null);

(statearr_30535_30554[(1)] = (2));


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
});})(c__29960__auto__))
;
return ((function (switch__29865__auto__,c__29960__auto__){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_30536 = [null,null,null,null,null,null,null,null];
(statearr_30536[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_30536[(1)] = (1));

return statearr_30536;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_30518){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30537){if((e30537 instanceof Object)){
var ex__29869__auto__ = e30537;
var statearr_30538_30555 = state_30518;
(statearr_30538_30555[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30556 = state_30518;
state_30518 = G__30556;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_30518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_30518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__))
})();
var state__29962__auto__ = (function (){var statearr_30539 = f__29961__auto__.call(null);
(statearr_30539[(6)] = c__29960__auto__);

return statearr_30539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__))
);

return c__29960__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30557 = (function (ch,cs,meta30558){
this.ch = ch;
this.cs = cs;
this.meta30558 = meta30558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30559,meta30558__$1){
var self__ = this;
var _30559__$1 = this;
return (new cljs.core.async.t_cljs$core$async30557(self__.ch,self__.cs,meta30558__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30559){
var self__ = this;
var _30559__$1 = this;
return self__.meta30558;
});})(cs))
;

cljs.core.async.t_cljs$core$async30557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30557.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30557.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30557.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30557.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30557.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30558","meta30558",31964841,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30557";

cljs.core.async.t_cljs$core$async30557.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30557");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30557.
 */
cljs.core.async.__GT_t_cljs$core$async30557 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30557(ch__$1,cs__$1,meta30558){
return (new cljs.core.async.t_cljs$core$async30557(ch__$1,cs__$1,meta30558));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30557(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29960__auto___30779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___30779,cs,m,dchan,dctr,done){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___30779,cs,m,dchan,dctr,done){
return (function (state_30694){
var state_val_30695 = (state_30694[(1)]);
if((state_val_30695 === (7))){
var inst_30690 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30696_30780 = state_30694__$1;
(statearr_30696_30780[(2)] = inst_30690);

(statearr_30696_30780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (20))){
var inst_30593 = (state_30694[(7)]);
var inst_30605 = cljs.core.first.call(null,inst_30593);
var inst_30606 = cljs.core.nth.call(null,inst_30605,(0),null);
var inst_30607 = cljs.core.nth.call(null,inst_30605,(1),null);
var state_30694__$1 = (function (){var statearr_30697 = state_30694;
(statearr_30697[(8)] = inst_30606);

return statearr_30697;
})();
if(cljs.core.truth_(inst_30607)){
var statearr_30698_30781 = state_30694__$1;
(statearr_30698_30781[(1)] = (22));

} else {
var statearr_30699_30782 = state_30694__$1;
(statearr_30699_30782[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (27))){
var inst_30637 = (state_30694[(9)]);
var inst_30562 = (state_30694[(10)]);
var inst_30635 = (state_30694[(11)]);
var inst_30642 = (state_30694[(12)]);
var inst_30642__$1 = cljs.core._nth.call(null,inst_30635,inst_30637);
var inst_30643 = cljs.core.async.put_BANG_.call(null,inst_30642__$1,inst_30562,done);
var state_30694__$1 = (function (){var statearr_30700 = state_30694;
(statearr_30700[(12)] = inst_30642__$1);

return statearr_30700;
})();
if(cljs.core.truth_(inst_30643)){
var statearr_30701_30783 = state_30694__$1;
(statearr_30701_30783[(1)] = (30));

} else {
var statearr_30702_30784 = state_30694__$1;
(statearr_30702_30784[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (1))){
var state_30694__$1 = state_30694;
var statearr_30703_30785 = state_30694__$1;
(statearr_30703_30785[(2)] = null);

(statearr_30703_30785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (24))){
var inst_30593 = (state_30694[(7)]);
var inst_30612 = (state_30694[(2)]);
var inst_30613 = cljs.core.next.call(null,inst_30593);
var inst_30571 = inst_30613;
var inst_30572 = null;
var inst_30573 = (0);
var inst_30574 = (0);
var state_30694__$1 = (function (){var statearr_30704 = state_30694;
(statearr_30704[(13)] = inst_30612);

(statearr_30704[(14)] = inst_30574);

(statearr_30704[(15)] = inst_30573);

(statearr_30704[(16)] = inst_30571);

(statearr_30704[(17)] = inst_30572);

return statearr_30704;
})();
var statearr_30705_30786 = state_30694__$1;
(statearr_30705_30786[(2)] = null);

(statearr_30705_30786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (39))){
var state_30694__$1 = state_30694;
var statearr_30709_30787 = state_30694__$1;
(statearr_30709_30787[(2)] = null);

(statearr_30709_30787[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (4))){
var inst_30562 = (state_30694[(10)]);
var inst_30562__$1 = (state_30694[(2)]);
var inst_30563 = (inst_30562__$1 == null);
var state_30694__$1 = (function (){var statearr_30710 = state_30694;
(statearr_30710[(10)] = inst_30562__$1);

return statearr_30710;
})();
if(cljs.core.truth_(inst_30563)){
var statearr_30711_30788 = state_30694__$1;
(statearr_30711_30788[(1)] = (5));

} else {
var statearr_30712_30789 = state_30694__$1;
(statearr_30712_30789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (15))){
var inst_30574 = (state_30694[(14)]);
var inst_30573 = (state_30694[(15)]);
var inst_30571 = (state_30694[(16)]);
var inst_30572 = (state_30694[(17)]);
var inst_30589 = (state_30694[(2)]);
var inst_30590 = (inst_30574 + (1));
var tmp30706 = inst_30573;
var tmp30707 = inst_30571;
var tmp30708 = inst_30572;
var inst_30571__$1 = tmp30707;
var inst_30572__$1 = tmp30708;
var inst_30573__$1 = tmp30706;
var inst_30574__$1 = inst_30590;
var state_30694__$1 = (function (){var statearr_30713 = state_30694;
(statearr_30713[(14)] = inst_30574__$1);

(statearr_30713[(15)] = inst_30573__$1);

(statearr_30713[(16)] = inst_30571__$1);

(statearr_30713[(17)] = inst_30572__$1);

(statearr_30713[(18)] = inst_30589);

return statearr_30713;
})();
var statearr_30714_30790 = state_30694__$1;
(statearr_30714_30790[(2)] = null);

(statearr_30714_30790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (21))){
var inst_30616 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30718_30791 = state_30694__$1;
(statearr_30718_30791[(2)] = inst_30616);

(statearr_30718_30791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (31))){
var inst_30642 = (state_30694[(12)]);
var inst_30646 = done.call(null,null);
var inst_30647 = cljs.core.async.untap_STAR_.call(null,m,inst_30642);
var state_30694__$1 = (function (){var statearr_30719 = state_30694;
(statearr_30719[(19)] = inst_30646);

return statearr_30719;
})();
var statearr_30720_30792 = state_30694__$1;
(statearr_30720_30792[(2)] = inst_30647);

(statearr_30720_30792[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (32))){
var inst_30637 = (state_30694[(9)]);
var inst_30636 = (state_30694[(20)]);
var inst_30635 = (state_30694[(11)]);
var inst_30634 = (state_30694[(21)]);
var inst_30649 = (state_30694[(2)]);
var inst_30650 = (inst_30637 + (1));
var tmp30715 = inst_30636;
var tmp30716 = inst_30635;
var tmp30717 = inst_30634;
var inst_30634__$1 = tmp30717;
var inst_30635__$1 = tmp30716;
var inst_30636__$1 = tmp30715;
var inst_30637__$1 = inst_30650;
var state_30694__$1 = (function (){var statearr_30721 = state_30694;
(statearr_30721[(9)] = inst_30637__$1);

(statearr_30721[(20)] = inst_30636__$1);

(statearr_30721[(11)] = inst_30635__$1);

(statearr_30721[(22)] = inst_30649);

(statearr_30721[(21)] = inst_30634__$1);

return statearr_30721;
})();
var statearr_30722_30793 = state_30694__$1;
(statearr_30722_30793[(2)] = null);

(statearr_30722_30793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (40))){
var inst_30662 = (state_30694[(23)]);
var inst_30666 = done.call(null,null);
var inst_30667 = cljs.core.async.untap_STAR_.call(null,m,inst_30662);
var state_30694__$1 = (function (){var statearr_30723 = state_30694;
(statearr_30723[(24)] = inst_30666);

return statearr_30723;
})();
var statearr_30724_30794 = state_30694__$1;
(statearr_30724_30794[(2)] = inst_30667);

(statearr_30724_30794[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (33))){
var inst_30653 = (state_30694[(25)]);
var inst_30655 = cljs.core.chunked_seq_QMARK_.call(null,inst_30653);
var state_30694__$1 = state_30694;
if(inst_30655){
var statearr_30725_30795 = state_30694__$1;
(statearr_30725_30795[(1)] = (36));

} else {
var statearr_30726_30796 = state_30694__$1;
(statearr_30726_30796[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (13))){
var inst_30583 = (state_30694[(26)]);
var inst_30586 = cljs.core.async.close_BANG_.call(null,inst_30583);
var state_30694__$1 = state_30694;
var statearr_30727_30797 = state_30694__$1;
(statearr_30727_30797[(2)] = inst_30586);

(statearr_30727_30797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (22))){
var inst_30606 = (state_30694[(8)]);
var inst_30609 = cljs.core.async.close_BANG_.call(null,inst_30606);
var state_30694__$1 = state_30694;
var statearr_30728_30798 = state_30694__$1;
(statearr_30728_30798[(2)] = inst_30609);

(statearr_30728_30798[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (36))){
var inst_30653 = (state_30694[(25)]);
var inst_30657 = cljs.core.chunk_first.call(null,inst_30653);
var inst_30658 = cljs.core.chunk_rest.call(null,inst_30653);
var inst_30659 = cljs.core.count.call(null,inst_30657);
var inst_30634 = inst_30658;
var inst_30635 = inst_30657;
var inst_30636 = inst_30659;
var inst_30637 = (0);
var state_30694__$1 = (function (){var statearr_30729 = state_30694;
(statearr_30729[(9)] = inst_30637);

(statearr_30729[(20)] = inst_30636);

(statearr_30729[(11)] = inst_30635);

(statearr_30729[(21)] = inst_30634);

return statearr_30729;
})();
var statearr_30730_30799 = state_30694__$1;
(statearr_30730_30799[(2)] = null);

(statearr_30730_30799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (41))){
var inst_30653 = (state_30694[(25)]);
var inst_30669 = (state_30694[(2)]);
var inst_30670 = cljs.core.next.call(null,inst_30653);
var inst_30634 = inst_30670;
var inst_30635 = null;
var inst_30636 = (0);
var inst_30637 = (0);
var state_30694__$1 = (function (){var statearr_30731 = state_30694;
(statearr_30731[(9)] = inst_30637);

(statearr_30731[(20)] = inst_30636);

(statearr_30731[(11)] = inst_30635);

(statearr_30731[(27)] = inst_30669);

(statearr_30731[(21)] = inst_30634);

return statearr_30731;
})();
var statearr_30732_30800 = state_30694__$1;
(statearr_30732_30800[(2)] = null);

(statearr_30732_30800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (43))){
var state_30694__$1 = state_30694;
var statearr_30733_30801 = state_30694__$1;
(statearr_30733_30801[(2)] = null);

(statearr_30733_30801[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (29))){
var inst_30678 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30734_30802 = state_30694__$1;
(statearr_30734_30802[(2)] = inst_30678);

(statearr_30734_30802[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (44))){
var inst_30687 = (state_30694[(2)]);
var state_30694__$1 = (function (){var statearr_30735 = state_30694;
(statearr_30735[(28)] = inst_30687);

return statearr_30735;
})();
var statearr_30736_30803 = state_30694__$1;
(statearr_30736_30803[(2)] = null);

(statearr_30736_30803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (6))){
var inst_30626 = (state_30694[(29)]);
var inst_30625 = cljs.core.deref.call(null,cs);
var inst_30626__$1 = cljs.core.keys.call(null,inst_30625);
var inst_30627 = cljs.core.count.call(null,inst_30626__$1);
var inst_30628 = cljs.core.reset_BANG_.call(null,dctr,inst_30627);
var inst_30633 = cljs.core.seq.call(null,inst_30626__$1);
var inst_30634 = inst_30633;
var inst_30635 = null;
var inst_30636 = (0);
var inst_30637 = (0);
var state_30694__$1 = (function (){var statearr_30737 = state_30694;
(statearr_30737[(9)] = inst_30637);

(statearr_30737[(20)] = inst_30636);

(statearr_30737[(30)] = inst_30628);

(statearr_30737[(11)] = inst_30635);

(statearr_30737[(29)] = inst_30626__$1);

(statearr_30737[(21)] = inst_30634);

return statearr_30737;
})();
var statearr_30738_30804 = state_30694__$1;
(statearr_30738_30804[(2)] = null);

(statearr_30738_30804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (28))){
var inst_30653 = (state_30694[(25)]);
var inst_30634 = (state_30694[(21)]);
var inst_30653__$1 = cljs.core.seq.call(null,inst_30634);
var state_30694__$1 = (function (){var statearr_30739 = state_30694;
(statearr_30739[(25)] = inst_30653__$1);

return statearr_30739;
})();
if(inst_30653__$1){
var statearr_30740_30805 = state_30694__$1;
(statearr_30740_30805[(1)] = (33));

} else {
var statearr_30741_30806 = state_30694__$1;
(statearr_30741_30806[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (25))){
var inst_30637 = (state_30694[(9)]);
var inst_30636 = (state_30694[(20)]);
var inst_30639 = (inst_30637 < inst_30636);
var inst_30640 = inst_30639;
var state_30694__$1 = state_30694;
if(cljs.core.truth_(inst_30640)){
var statearr_30742_30807 = state_30694__$1;
(statearr_30742_30807[(1)] = (27));

} else {
var statearr_30743_30808 = state_30694__$1;
(statearr_30743_30808[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (34))){
var state_30694__$1 = state_30694;
var statearr_30744_30809 = state_30694__$1;
(statearr_30744_30809[(2)] = null);

(statearr_30744_30809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (17))){
var state_30694__$1 = state_30694;
var statearr_30745_30810 = state_30694__$1;
(statearr_30745_30810[(2)] = null);

(statearr_30745_30810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (3))){
var inst_30692 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30694__$1,inst_30692);
} else {
if((state_val_30695 === (12))){
var inst_30621 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30746_30811 = state_30694__$1;
(statearr_30746_30811[(2)] = inst_30621);

(statearr_30746_30811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (2))){
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30694__$1,(4),ch);
} else {
if((state_val_30695 === (23))){
var state_30694__$1 = state_30694;
var statearr_30747_30812 = state_30694__$1;
(statearr_30747_30812[(2)] = null);

(statearr_30747_30812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (35))){
var inst_30676 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30748_30813 = state_30694__$1;
(statearr_30748_30813[(2)] = inst_30676);

(statearr_30748_30813[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (19))){
var inst_30593 = (state_30694[(7)]);
var inst_30597 = cljs.core.chunk_first.call(null,inst_30593);
var inst_30598 = cljs.core.chunk_rest.call(null,inst_30593);
var inst_30599 = cljs.core.count.call(null,inst_30597);
var inst_30571 = inst_30598;
var inst_30572 = inst_30597;
var inst_30573 = inst_30599;
var inst_30574 = (0);
var state_30694__$1 = (function (){var statearr_30749 = state_30694;
(statearr_30749[(14)] = inst_30574);

(statearr_30749[(15)] = inst_30573);

(statearr_30749[(16)] = inst_30571);

(statearr_30749[(17)] = inst_30572);

return statearr_30749;
})();
var statearr_30750_30814 = state_30694__$1;
(statearr_30750_30814[(2)] = null);

(statearr_30750_30814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (11))){
var inst_30593 = (state_30694[(7)]);
var inst_30571 = (state_30694[(16)]);
var inst_30593__$1 = cljs.core.seq.call(null,inst_30571);
var state_30694__$1 = (function (){var statearr_30751 = state_30694;
(statearr_30751[(7)] = inst_30593__$1);

return statearr_30751;
})();
if(inst_30593__$1){
var statearr_30752_30815 = state_30694__$1;
(statearr_30752_30815[(1)] = (16));

} else {
var statearr_30753_30816 = state_30694__$1;
(statearr_30753_30816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (9))){
var inst_30623 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30754_30817 = state_30694__$1;
(statearr_30754_30817[(2)] = inst_30623);

(statearr_30754_30817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (5))){
var inst_30569 = cljs.core.deref.call(null,cs);
var inst_30570 = cljs.core.seq.call(null,inst_30569);
var inst_30571 = inst_30570;
var inst_30572 = null;
var inst_30573 = (0);
var inst_30574 = (0);
var state_30694__$1 = (function (){var statearr_30755 = state_30694;
(statearr_30755[(14)] = inst_30574);

(statearr_30755[(15)] = inst_30573);

(statearr_30755[(16)] = inst_30571);

(statearr_30755[(17)] = inst_30572);

return statearr_30755;
})();
var statearr_30756_30818 = state_30694__$1;
(statearr_30756_30818[(2)] = null);

(statearr_30756_30818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (14))){
var state_30694__$1 = state_30694;
var statearr_30757_30819 = state_30694__$1;
(statearr_30757_30819[(2)] = null);

(statearr_30757_30819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (45))){
var inst_30684 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30758_30820 = state_30694__$1;
(statearr_30758_30820[(2)] = inst_30684);

(statearr_30758_30820[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (26))){
var inst_30626 = (state_30694[(29)]);
var inst_30680 = (state_30694[(2)]);
var inst_30681 = cljs.core.seq.call(null,inst_30626);
var state_30694__$1 = (function (){var statearr_30759 = state_30694;
(statearr_30759[(31)] = inst_30680);

return statearr_30759;
})();
if(inst_30681){
var statearr_30760_30821 = state_30694__$1;
(statearr_30760_30821[(1)] = (42));

} else {
var statearr_30761_30822 = state_30694__$1;
(statearr_30761_30822[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (16))){
var inst_30593 = (state_30694[(7)]);
var inst_30595 = cljs.core.chunked_seq_QMARK_.call(null,inst_30593);
var state_30694__$1 = state_30694;
if(inst_30595){
var statearr_30762_30823 = state_30694__$1;
(statearr_30762_30823[(1)] = (19));

} else {
var statearr_30763_30824 = state_30694__$1;
(statearr_30763_30824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (38))){
var inst_30673 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30764_30825 = state_30694__$1;
(statearr_30764_30825[(2)] = inst_30673);

(statearr_30764_30825[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (30))){
var state_30694__$1 = state_30694;
var statearr_30765_30826 = state_30694__$1;
(statearr_30765_30826[(2)] = null);

(statearr_30765_30826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (10))){
var inst_30574 = (state_30694[(14)]);
var inst_30572 = (state_30694[(17)]);
var inst_30582 = cljs.core._nth.call(null,inst_30572,inst_30574);
var inst_30583 = cljs.core.nth.call(null,inst_30582,(0),null);
var inst_30584 = cljs.core.nth.call(null,inst_30582,(1),null);
var state_30694__$1 = (function (){var statearr_30766 = state_30694;
(statearr_30766[(26)] = inst_30583);

return statearr_30766;
})();
if(cljs.core.truth_(inst_30584)){
var statearr_30767_30827 = state_30694__$1;
(statearr_30767_30827[(1)] = (13));

} else {
var statearr_30768_30828 = state_30694__$1;
(statearr_30768_30828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (18))){
var inst_30619 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30769_30829 = state_30694__$1;
(statearr_30769_30829[(2)] = inst_30619);

(statearr_30769_30829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (42))){
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30694__$1,(45),dchan);
} else {
if((state_val_30695 === (37))){
var inst_30653 = (state_30694[(25)]);
var inst_30562 = (state_30694[(10)]);
var inst_30662 = (state_30694[(23)]);
var inst_30662__$1 = cljs.core.first.call(null,inst_30653);
var inst_30663 = cljs.core.async.put_BANG_.call(null,inst_30662__$1,inst_30562,done);
var state_30694__$1 = (function (){var statearr_30770 = state_30694;
(statearr_30770[(23)] = inst_30662__$1);

return statearr_30770;
})();
if(cljs.core.truth_(inst_30663)){
var statearr_30771_30830 = state_30694__$1;
(statearr_30771_30830[(1)] = (39));

} else {
var statearr_30772_30831 = state_30694__$1;
(statearr_30772_30831[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (8))){
var inst_30574 = (state_30694[(14)]);
var inst_30573 = (state_30694[(15)]);
var inst_30576 = (inst_30574 < inst_30573);
var inst_30577 = inst_30576;
var state_30694__$1 = state_30694;
if(cljs.core.truth_(inst_30577)){
var statearr_30773_30832 = state_30694__$1;
(statearr_30773_30832[(1)] = (10));

} else {
var statearr_30774_30833 = state_30694__$1;
(statearr_30774_30833[(1)] = (11));

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
});})(c__29960__auto___30779,cs,m,dchan,dctr,done))
;
return ((function (switch__29865__auto__,c__29960__auto___30779,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29866__auto__ = null;
var cljs$core$async$mult_$_state_machine__29866__auto____0 = (function (){
var statearr_30775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30775[(0)] = cljs$core$async$mult_$_state_machine__29866__auto__);

(statearr_30775[(1)] = (1));

return statearr_30775;
});
var cljs$core$async$mult_$_state_machine__29866__auto____1 = (function (state_30694){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e30776){if((e30776 instanceof Object)){
var ex__29869__auto__ = e30776;
var statearr_30777_30834 = state_30694;
(statearr_30777_30834[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30835 = state_30694;
state_30694 = G__30835;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29866__auto__ = function(state_30694){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29866__auto____1.call(this,state_30694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29866__auto____0;
cljs$core$async$mult_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29866__auto____1;
return cljs$core$async$mult_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___30779,cs,m,dchan,dctr,done))
})();
var state__29962__auto__ = (function (){var statearr_30778 = f__29961__auto__.call(null);
(statearr_30778[(6)] = c__29960__auto___30779);

return statearr_30778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___30779,cs,m,dchan,dctr,done))
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
var G__30837 = arguments.length;
switch (G__30837) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30849 = arguments.length;
var i__4731__auto___30850 = (0);
while(true){
if((i__4731__auto___30850 < len__4730__auto___30849)){
args__4736__auto__.push((arguments[i__4731__auto___30850]));

var G__30851 = (i__4731__auto___30850 + (1));
i__4731__auto___30850 = G__30851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30843){
var map__30844 = p__30843;
var map__30844__$1 = (((((!((map__30844 == null))))?(((((map__30844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30844):map__30844);
var opts = map__30844__$1;
var statearr_30846_30852 = state;
(statearr_30846_30852[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__30844,map__30844__$1,opts){
return (function (val){
var statearr_30847_30853 = state;
(statearr_30847_30853[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30844,map__30844__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30848_30854 = state;
(statearr_30848_30854[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30839){
var G__30840 = cljs.core.first.call(null,seq30839);
var seq30839__$1 = cljs.core.next.call(null,seq30839);
var G__30841 = cljs.core.first.call(null,seq30839__$1);
var seq30839__$2 = cljs.core.next.call(null,seq30839__$1);
var G__30842 = cljs.core.first.call(null,seq30839__$2);
var seq30839__$3 = cljs.core.next.call(null,seq30839__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30840,G__30841,G__30842,seq30839__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30855 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30856){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30856 = meta30856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30857,meta30856__$1){
var self__ = this;
var _30857__$1 = this;
return (new cljs.core.async.t_cljs$core$async30855(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30856__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30857){
var self__ = this;
var _30857__$1 = this;
return self__.meta30856;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30856","meta30856",1737564773,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30855";

cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30855");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30855.
 */
cljs.core.async.__GT_t_cljs$core$async30855 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30855(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30856){
return (new cljs.core.async.t_cljs$core$async30855(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30856));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30855(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29960__auto___31019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30959){
var state_val_30960 = (state_30959[(1)]);
if((state_val_30960 === (7))){
var inst_30874 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30961_31020 = state_30959__$1;
(statearr_30961_31020[(2)] = inst_30874);

(statearr_30961_31020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (20))){
var inst_30886 = (state_30959[(7)]);
var state_30959__$1 = state_30959;
var statearr_30962_31021 = state_30959__$1;
(statearr_30962_31021[(2)] = inst_30886);

(statearr_30962_31021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (27))){
var state_30959__$1 = state_30959;
var statearr_30963_31022 = state_30959__$1;
(statearr_30963_31022[(2)] = null);

(statearr_30963_31022[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (1))){
var inst_30861 = (state_30959[(8)]);
var inst_30861__$1 = calc_state.call(null);
var inst_30863 = (inst_30861__$1 == null);
var inst_30864 = cljs.core.not.call(null,inst_30863);
var state_30959__$1 = (function (){var statearr_30964 = state_30959;
(statearr_30964[(8)] = inst_30861__$1);

return statearr_30964;
})();
if(inst_30864){
var statearr_30965_31023 = state_30959__$1;
(statearr_30965_31023[(1)] = (2));

} else {
var statearr_30966_31024 = state_30959__$1;
(statearr_30966_31024[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (24))){
var inst_30910 = (state_30959[(9)]);
var inst_30919 = (state_30959[(10)]);
var inst_30933 = (state_30959[(11)]);
var inst_30933__$1 = inst_30910.call(null,inst_30919);
var state_30959__$1 = (function (){var statearr_30967 = state_30959;
(statearr_30967[(11)] = inst_30933__$1);

return statearr_30967;
})();
if(cljs.core.truth_(inst_30933__$1)){
var statearr_30968_31025 = state_30959__$1;
(statearr_30968_31025[(1)] = (29));

} else {
var statearr_30969_31026 = state_30959__$1;
(statearr_30969_31026[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (4))){
var inst_30877 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30877)){
var statearr_30970_31027 = state_30959__$1;
(statearr_30970_31027[(1)] = (8));

} else {
var statearr_30971_31028 = state_30959__$1;
(statearr_30971_31028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (15))){
var inst_30904 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30904)){
var statearr_30972_31029 = state_30959__$1;
(statearr_30972_31029[(1)] = (19));

} else {
var statearr_30973_31030 = state_30959__$1;
(statearr_30973_31030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (21))){
var inst_30909 = (state_30959[(12)]);
var inst_30909__$1 = (state_30959[(2)]);
var inst_30910 = cljs.core.get.call(null,inst_30909__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30911 = cljs.core.get.call(null,inst_30909__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30912 = cljs.core.get.call(null,inst_30909__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30959__$1 = (function (){var statearr_30974 = state_30959;
(statearr_30974[(9)] = inst_30910);

(statearr_30974[(13)] = inst_30911);

(statearr_30974[(12)] = inst_30909__$1);

return statearr_30974;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30959__$1,(22),inst_30912);
} else {
if((state_val_30960 === (31))){
var inst_30941 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30941)){
var statearr_30975_31031 = state_30959__$1;
(statearr_30975_31031[(1)] = (32));

} else {
var statearr_30976_31032 = state_30959__$1;
(statearr_30976_31032[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (32))){
var inst_30918 = (state_30959[(14)]);
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30959__$1,(35),out,inst_30918);
} else {
if((state_val_30960 === (33))){
var inst_30909 = (state_30959[(12)]);
var inst_30886 = inst_30909;
var state_30959__$1 = (function (){var statearr_30977 = state_30959;
(statearr_30977[(7)] = inst_30886);

return statearr_30977;
})();
var statearr_30978_31033 = state_30959__$1;
(statearr_30978_31033[(2)] = null);

(statearr_30978_31033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (13))){
var inst_30886 = (state_30959[(7)]);
var inst_30893 = inst_30886.cljs$lang$protocol_mask$partition0$;
var inst_30894 = (inst_30893 & (64));
var inst_30895 = inst_30886.cljs$core$ISeq$;
var inst_30896 = (cljs.core.PROTOCOL_SENTINEL === inst_30895);
var inst_30897 = ((inst_30894) || (inst_30896));
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30897)){
var statearr_30979_31034 = state_30959__$1;
(statearr_30979_31034[(1)] = (16));

} else {
var statearr_30980_31035 = state_30959__$1;
(statearr_30980_31035[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (22))){
var inst_30919 = (state_30959[(10)]);
var inst_30918 = (state_30959[(14)]);
var inst_30917 = (state_30959[(2)]);
var inst_30918__$1 = cljs.core.nth.call(null,inst_30917,(0),null);
var inst_30919__$1 = cljs.core.nth.call(null,inst_30917,(1),null);
var inst_30920 = (inst_30918__$1 == null);
var inst_30921 = cljs.core._EQ_.call(null,inst_30919__$1,change);
var inst_30922 = ((inst_30920) || (inst_30921));
var state_30959__$1 = (function (){var statearr_30981 = state_30959;
(statearr_30981[(10)] = inst_30919__$1);

(statearr_30981[(14)] = inst_30918__$1);

return statearr_30981;
})();
if(cljs.core.truth_(inst_30922)){
var statearr_30982_31036 = state_30959__$1;
(statearr_30982_31036[(1)] = (23));

} else {
var statearr_30983_31037 = state_30959__$1;
(statearr_30983_31037[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (36))){
var inst_30909 = (state_30959[(12)]);
var inst_30886 = inst_30909;
var state_30959__$1 = (function (){var statearr_30984 = state_30959;
(statearr_30984[(7)] = inst_30886);

return statearr_30984;
})();
var statearr_30985_31038 = state_30959__$1;
(statearr_30985_31038[(2)] = null);

(statearr_30985_31038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (29))){
var inst_30933 = (state_30959[(11)]);
var state_30959__$1 = state_30959;
var statearr_30986_31039 = state_30959__$1;
(statearr_30986_31039[(2)] = inst_30933);

(statearr_30986_31039[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (6))){
var state_30959__$1 = state_30959;
var statearr_30987_31040 = state_30959__$1;
(statearr_30987_31040[(2)] = false);

(statearr_30987_31040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (28))){
var inst_30929 = (state_30959[(2)]);
var inst_30930 = calc_state.call(null);
var inst_30886 = inst_30930;
var state_30959__$1 = (function (){var statearr_30988 = state_30959;
(statearr_30988[(15)] = inst_30929);

(statearr_30988[(7)] = inst_30886);

return statearr_30988;
})();
var statearr_30989_31041 = state_30959__$1;
(statearr_30989_31041[(2)] = null);

(statearr_30989_31041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (25))){
var inst_30955 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30990_31042 = state_30959__$1;
(statearr_30990_31042[(2)] = inst_30955);

(statearr_30990_31042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (34))){
var inst_30953 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30991_31043 = state_30959__$1;
(statearr_30991_31043[(2)] = inst_30953);

(statearr_30991_31043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (17))){
var state_30959__$1 = state_30959;
var statearr_30992_31044 = state_30959__$1;
(statearr_30992_31044[(2)] = false);

(statearr_30992_31044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (3))){
var state_30959__$1 = state_30959;
var statearr_30993_31045 = state_30959__$1;
(statearr_30993_31045[(2)] = false);

(statearr_30993_31045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (12))){
var inst_30957 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30959__$1,inst_30957);
} else {
if((state_val_30960 === (2))){
var inst_30861 = (state_30959[(8)]);
var inst_30866 = inst_30861.cljs$lang$protocol_mask$partition0$;
var inst_30867 = (inst_30866 & (64));
var inst_30868 = inst_30861.cljs$core$ISeq$;
var inst_30869 = (cljs.core.PROTOCOL_SENTINEL === inst_30868);
var inst_30870 = ((inst_30867) || (inst_30869));
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30870)){
var statearr_30994_31046 = state_30959__$1;
(statearr_30994_31046[(1)] = (5));

} else {
var statearr_30995_31047 = state_30959__$1;
(statearr_30995_31047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (23))){
var inst_30918 = (state_30959[(14)]);
var inst_30924 = (inst_30918 == null);
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30924)){
var statearr_30996_31048 = state_30959__$1;
(statearr_30996_31048[(1)] = (26));

} else {
var statearr_30997_31049 = state_30959__$1;
(statearr_30997_31049[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (35))){
var inst_30944 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30944)){
var statearr_30998_31050 = state_30959__$1;
(statearr_30998_31050[(1)] = (36));

} else {
var statearr_30999_31051 = state_30959__$1;
(statearr_30999_31051[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (19))){
var inst_30886 = (state_30959[(7)]);
var inst_30906 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30886);
var state_30959__$1 = state_30959;
var statearr_31000_31052 = state_30959__$1;
(statearr_31000_31052[(2)] = inst_30906);

(statearr_31000_31052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (11))){
var inst_30886 = (state_30959[(7)]);
var inst_30890 = (inst_30886 == null);
var inst_30891 = cljs.core.not.call(null,inst_30890);
var state_30959__$1 = state_30959;
if(inst_30891){
var statearr_31001_31053 = state_30959__$1;
(statearr_31001_31053[(1)] = (13));

} else {
var statearr_31002_31054 = state_30959__$1;
(statearr_31002_31054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (9))){
var inst_30861 = (state_30959[(8)]);
var state_30959__$1 = state_30959;
var statearr_31003_31055 = state_30959__$1;
(statearr_31003_31055[(2)] = inst_30861);

(statearr_31003_31055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (5))){
var state_30959__$1 = state_30959;
var statearr_31004_31056 = state_30959__$1;
(statearr_31004_31056[(2)] = true);

(statearr_31004_31056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (14))){
var state_30959__$1 = state_30959;
var statearr_31005_31057 = state_30959__$1;
(statearr_31005_31057[(2)] = false);

(statearr_31005_31057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (26))){
var inst_30919 = (state_30959[(10)]);
var inst_30926 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30919);
var state_30959__$1 = state_30959;
var statearr_31006_31058 = state_30959__$1;
(statearr_31006_31058[(2)] = inst_30926);

(statearr_31006_31058[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (16))){
var state_30959__$1 = state_30959;
var statearr_31007_31059 = state_30959__$1;
(statearr_31007_31059[(2)] = true);

(statearr_31007_31059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (38))){
var inst_30949 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_31008_31060 = state_30959__$1;
(statearr_31008_31060[(2)] = inst_30949);

(statearr_31008_31060[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (30))){
var inst_30910 = (state_30959[(9)]);
var inst_30911 = (state_30959[(13)]);
var inst_30919 = (state_30959[(10)]);
var inst_30936 = cljs.core.empty_QMARK_.call(null,inst_30910);
var inst_30937 = inst_30911.call(null,inst_30919);
var inst_30938 = cljs.core.not.call(null,inst_30937);
var inst_30939 = ((inst_30936) && (inst_30938));
var state_30959__$1 = state_30959;
var statearr_31009_31061 = state_30959__$1;
(statearr_31009_31061[(2)] = inst_30939);

(statearr_31009_31061[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (10))){
var inst_30861 = (state_30959[(8)]);
var inst_30882 = (state_30959[(2)]);
var inst_30883 = cljs.core.get.call(null,inst_30882,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30884 = cljs.core.get.call(null,inst_30882,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30885 = cljs.core.get.call(null,inst_30882,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30886 = inst_30861;
var state_30959__$1 = (function (){var statearr_31010 = state_30959;
(statearr_31010[(16)] = inst_30884);

(statearr_31010[(17)] = inst_30883);

(statearr_31010[(18)] = inst_30885);

(statearr_31010[(7)] = inst_30886);

return statearr_31010;
})();
var statearr_31011_31062 = state_30959__$1;
(statearr_31011_31062[(2)] = null);

(statearr_31011_31062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (18))){
var inst_30901 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_31012_31063 = state_30959__$1;
(statearr_31012_31063[(2)] = inst_30901);

(statearr_31012_31063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (37))){
var state_30959__$1 = state_30959;
var statearr_31013_31064 = state_30959__$1;
(statearr_31013_31064[(2)] = null);

(statearr_31013_31064[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (8))){
var inst_30861 = (state_30959[(8)]);
var inst_30879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30861);
var state_30959__$1 = state_30959;
var statearr_31014_31065 = state_30959__$1;
(statearr_31014_31065[(2)] = inst_30879);

(statearr_31014_31065[(1)] = (10));


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
});})(c__29960__auto___31019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29865__auto__,c__29960__auto___31019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29866__auto__ = null;
var cljs$core$async$mix_$_state_machine__29866__auto____0 = (function (){
var statearr_31015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31015[(0)] = cljs$core$async$mix_$_state_machine__29866__auto__);

(statearr_31015[(1)] = (1));

return statearr_31015;
});
var cljs$core$async$mix_$_state_machine__29866__auto____1 = (function (state_30959){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_30959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31016){if((e31016 instanceof Object)){
var ex__29869__auto__ = e31016;
var statearr_31017_31066 = state_30959;
(statearr_31017_31066[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31067 = state_30959;
state_30959 = G__31067;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29866__auto__ = function(state_30959){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29866__auto____1.call(this,state_30959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29866__auto____0;
cljs$core$async$mix_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29866__auto____1;
return cljs$core$async$mix_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29962__auto__ = (function (){var statearr_31018 = f__29961__auto__.call(null);
(statearr_31018[(6)] = c__29960__auto___31019);

return statearr_31018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31069 = arguments.length;
switch (G__31069) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__31073 = arguments.length;
switch (G__31073) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__31071_SHARP_){
if(cljs.core.truth_(p1__31071_SHARP_.call(null,topic))){
return p1__31071_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31071_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31074 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31075){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31075 = meta31075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31076,meta31075__$1){
var self__ = this;
var _31076__$1 = this;
return (new cljs.core.async.t_cljs$core$async31074(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31075__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31076){
var self__ = this;
var _31076__$1 = this;
return self__.meta31075;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31074.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31075","meta31075",-690650088,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31074.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31074";

cljs.core.async.t_cljs$core$async31074.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31074");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31074.
 */
cljs.core.async.__GT_t_cljs$core$async31074 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31075){
return (new cljs.core.async.t_cljs$core$async31074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31075));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31074(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29960__auto___31194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31194,mults,ensure_mult,p){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31194,mults,ensure_mult,p){
return (function (state_31148){
var state_val_31149 = (state_31148[(1)]);
if((state_val_31149 === (7))){
var inst_31144 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31150_31195 = state_31148__$1;
(statearr_31150_31195[(2)] = inst_31144);

(statearr_31150_31195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (20))){
var state_31148__$1 = state_31148;
var statearr_31151_31196 = state_31148__$1;
(statearr_31151_31196[(2)] = null);

(statearr_31151_31196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (1))){
var state_31148__$1 = state_31148;
var statearr_31152_31197 = state_31148__$1;
(statearr_31152_31197[(2)] = null);

(statearr_31152_31197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (24))){
var inst_31127 = (state_31148[(7)]);
var inst_31136 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31127);
var state_31148__$1 = state_31148;
var statearr_31153_31198 = state_31148__$1;
(statearr_31153_31198[(2)] = inst_31136);

(statearr_31153_31198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (4))){
var inst_31079 = (state_31148[(8)]);
var inst_31079__$1 = (state_31148[(2)]);
var inst_31080 = (inst_31079__$1 == null);
var state_31148__$1 = (function (){var statearr_31154 = state_31148;
(statearr_31154[(8)] = inst_31079__$1);

return statearr_31154;
})();
if(cljs.core.truth_(inst_31080)){
var statearr_31155_31199 = state_31148__$1;
(statearr_31155_31199[(1)] = (5));

} else {
var statearr_31156_31200 = state_31148__$1;
(statearr_31156_31200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (15))){
var inst_31121 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31157_31201 = state_31148__$1;
(statearr_31157_31201[(2)] = inst_31121);

(statearr_31157_31201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (21))){
var inst_31141 = (state_31148[(2)]);
var state_31148__$1 = (function (){var statearr_31158 = state_31148;
(statearr_31158[(9)] = inst_31141);

return statearr_31158;
})();
var statearr_31159_31202 = state_31148__$1;
(statearr_31159_31202[(2)] = null);

(statearr_31159_31202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (13))){
var inst_31103 = (state_31148[(10)]);
var inst_31105 = cljs.core.chunked_seq_QMARK_.call(null,inst_31103);
var state_31148__$1 = state_31148;
if(inst_31105){
var statearr_31160_31203 = state_31148__$1;
(statearr_31160_31203[(1)] = (16));

} else {
var statearr_31161_31204 = state_31148__$1;
(statearr_31161_31204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (22))){
var inst_31133 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
if(cljs.core.truth_(inst_31133)){
var statearr_31162_31205 = state_31148__$1;
(statearr_31162_31205[(1)] = (23));

} else {
var statearr_31163_31206 = state_31148__$1;
(statearr_31163_31206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (6))){
var inst_31129 = (state_31148[(11)]);
var inst_31127 = (state_31148[(7)]);
var inst_31079 = (state_31148[(8)]);
var inst_31127__$1 = topic_fn.call(null,inst_31079);
var inst_31128 = cljs.core.deref.call(null,mults);
var inst_31129__$1 = cljs.core.get.call(null,inst_31128,inst_31127__$1);
var state_31148__$1 = (function (){var statearr_31164 = state_31148;
(statearr_31164[(11)] = inst_31129__$1);

(statearr_31164[(7)] = inst_31127__$1);

return statearr_31164;
})();
if(cljs.core.truth_(inst_31129__$1)){
var statearr_31165_31207 = state_31148__$1;
(statearr_31165_31207[(1)] = (19));

} else {
var statearr_31166_31208 = state_31148__$1;
(statearr_31166_31208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (25))){
var inst_31138 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31167_31209 = state_31148__$1;
(statearr_31167_31209[(2)] = inst_31138);

(statearr_31167_31209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (17))){
var inst_31103 = (state_31148[(10)]);
var inst_31112 = cljs.core.first.call(null,inst_31103);
var inst_31113 = cljs.core.async.muxch_STAR_.call(null,inst_31112);
var inst_31114 = cljs.core.async.close_BANG_.call(null,inst_31113);
var inst_31115 = cljs.core.next.call(null,inst_31103);
var inst_31089 = inst_31115;
var inst_31090 = null;
var inst_31091 = (0);
var inst_31092 = (0);
var state_31148__$1 = (function (){var statearr_31168 = state_31148;
(statearr_31168[(12)] = inst_31091);

(statearr_31168[(13)] = inst_31092);

(statearr_31168[(14)] = inst_31089);

(statearr_31168[(15)] = inst_31114);

(statearr_31168[(16)] = inst_31090);

return statearr_31168;
})();
var statearr_31169_31210 = state_31148__$1;
(statearr_31169_31210[(2)] = null);

(statearr_31169_31210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (3))){
var inst_31146 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31148__$1,inst_31146);
} else {
if((state_val_31149 === (12))){
var inst_31123 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31170_31211 = state_31148__$1;
(statearr_31170_31211[(2)] = inst_31123);

(statearr_31170_31211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (2))){
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31148__$1,(4),ch);
} else {
if((state_val_31149 === (23))){
var state_31148__$1 = state_31148;
var statearr_31171_31212 = state_31148__$1;
(statearr_31171_31212[(2)] = null);

(statearr_31171_31212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (19))){
var inst_31129 = (state_31148[(11)]);
var inst_31079 = (state_31148[(8)]);
var inst_31131 = cljs.core.async.muxch_STAR_.call(null,inst_31129);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31148__$1,(22),inst_31131,inst_31079);
} else {
if((state_val_31149 === (11))){
var inst_31103 = (state_31148[(10)]);
var inst_31089 = (state_31148[(14)]);
var inst_31103__$1 = cljs.core.seq.call(null,inst_31089);
var state_31148__$1 = (function (){var statearr_31172 = state_31148;
(statearr_31172[(10)] = inst_31103__$1);

return statearr_31172;
})();
if(inst_31103__$1){
var statearr_31173_31213 = state_31148__$1;
(statearr_31173_31213[(1)] = (13));

} else {
var statearr_31174_31214 = state_31148__$1;
(statearr_31174_31214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (9))){
var inst_31125 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31175_31215 = state_31148__$1;
(statearr_31175_31215[(2)] = inst_31125);

(statearr_31175_31215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (5))){
var inst_31086 = cljs.core.deref.call(null,mults);
var inst_31087 = cljs.core.vals.call(null,inst_31086);
var inst_31088 = cljs.core.seq.call(null,inst_31087);
var inst_31089 = inst_31088;
var inst_31090 = null;
var inst_31091 = (0);
var inst_31092 = (0);
var state_31148__$1 = (function (){var statearr_31176 = state_31148;
(statearr_31176[(12)] = inst_31091);

(statearr_31176[(13)] = inst_31092);

(statearr_31176[(14)] = inst_31089);

(statearr_31176[(16)] = inst_31090);

return statearr_31176;
})();
var statearr_31177_31216 = state_31148__$1;
(statearr_31177_31216[(2)] = null);

(statearr_31177_31216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (14))){
var state_31148__$1 = state_31148;
var statearr_31181_31217 = state_31148__$1;
(statearr_31181_31217[(2)] = null);

(statearr_31181_31217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (16))){
var inst_31103 = (state_31148[(10)]);
var inst_31107 = cljs.core.chunk_first.call(null,inst_31103);
var inst_31108 = cljs.core.chunk_rest.call(null,inst_31103);
var inst_31109 = cljs.core.count.call(null,inst_31107);
var inst_31089 = inst_31108;
var inst_31090 = inst_31107;
var inst_31091 = inst_31109;
var inst_31092 = (0);
var state_31148__$1 = (function (){var statearr_31182 = state_31148;
(statearr_31182[(12)] = inst_31091);

(statearr_31182[(13)] = inst_31092);

(statearr_31182[(14)] = inst_31089);

(statearr_31182[(16)] = inst_31090);

return statearr_31182;
})();
var statearr_31183_31218 = state_31148__$1;
(statearr_31183_31218[(2)] = null);

(statearr_31183_31218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (10))){
var inst_31091 = (state_31148[(12)]);
var inst_31092 = (state_31148[(13)]);
var inst_31089 = (state_31148[(14)]);
var inst_31090 = (state_31148[(16)]);
var inst_31097 = cljs.core._nth.call(null,inst_31090,inst_31092);
var inst_31098 = cljs.core.async.muxch_STAR_.call(null,inst_31097);
var inst_31099 = cljs.core.async.close_BANG_.call(null,inst_31098);
var inst_31100 = (inst_31092 + (1));
var tmp31178 = inst_31091;
var tmp31179 = inst_31089;
var tmp31180 = inst_31090;
var inst_31089__$1 = tmp31179;
var inst_31090__$1 = tmp31180;
var inst_31091__$1 = tmp31178;
var inst_31092__$1 = inst_31100;
var state_31148__$1 = (function (){var statearr_31184 = state_31148;
(statearr_31184[(12)] = inst_31091__$1);

(statearr_31184[(13)] = inst_31092__$1);

(statearr_31184[(14)] = inst_31089__$1);

(statearr_31184[(17)] = inst_31099);

(statearr_31184[(16)] = inst_31090__$1);

return statearr_31184;
})();
var statearr_31185_31219 = state_31148__$1;
(statearr_31185_31219[(2)] = null);

(statearr_31185_31219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (18))){
var inst_31118 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31186_31220 = state_31148__$1;
(statearr_31186_31220[(2)] = inst_31118);

(statearr_31186_31220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (8))){
var inst_31091 = (state_31148[(12)]);
var inst_31092 = (state_31148[(13)]);
var inst_31094 = (inst_31092 < inst_31091);
var inst_31095 = inst_31094;
var state_31148__$1 = state_31148;
if(cljs.core.truth_(inst_31095)){
var statearr_31187_31221 = state_31148__$1;
(statearr_31187_31221[(1)] = (10));

} else {
var statearr_31188_31222 = state_31148__$1;
(statearr_31188_31222[(1)] = (11));

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
});})(c__29960__auto___31194,mults,ensure_mult,p))
;
return ((function (switch__29865__auto__,c__29960__auto___31194,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_31189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31189[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_31189[(1)] = (1));

return statearr_31189;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_31148){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31190){if((e31190 instanceof Object)){
var ex__29869__auto__ = e31190;
var statearr_31191_31223 = state_31148;
(statearr_31191_31223[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31224 = state_31148;
state_31148 = G__31224;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_31148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_31148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31194,mults,ensure_mult,p))
})();
var state__29962__auto__ = (function (){var statearr_31192 = f__29961__auto__.call(null);
(statearr_31192[(6)] = c__29960__auto___31194);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31194,mults,ensure_mult,p))
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
var G__31226 = arguments.length;
switch (G__31226) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31229 = arguments.length;
switch (G__31229) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31232 = arguments.length;
switch (G__31232) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__29960__auto___31299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31271){
var state_val_31272 = (state_31271[(1)]);
if((state_val_31272 === (7))){
var state_31271__$1 = state_31271;
var statearr_31273_31300 = state_31271__$1;
(statearr_31273_31300[(2)] = null);

(statearr_31273_31300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (1))){
var state_31271__$1 = state_31271;
var statearr_31274_31301 = state_31271__$1;
(statearr_31274_31301[(2)] = null);

(statearr_31274_31301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (4))){
var inst_31235 = (state_31271[(7)]);
var inst_31237 = (inst_31235 < cnt);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31237)){
var statearr_31275_31302 = state_31271__$1;
(statearr_31275_31302[(1)] = (6));

} else {
var statearr_31276_31303 = state_31271__$1;
(statearr_31276_31303[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (15))){
var inst_31267 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31277_31304 = state_31271__$1;
(statearr_31277_31304[(2)] = inst_31267);

(statearr_31277_31304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (13))){
var inst_31260 = cljs.core.async.close_BANG_.call(null,out);
var state_31271__$1 = state_31271;
var statearr_31278_31305 = state_31271__$1;
(statearr_31278_31305[(2)] = inst_31260);

(statearr_31278_31305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (6))){
var state_31271__$1 = state_31271;
var statearr_31279_31306 = state_31271__$1;
(statearr_31279_31306[(2)] = null);

(statearr_31279_31306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (3))){
var inst_31269 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31271__$1,inst_31269);
} else {
if((state_val_31272 === (12))){
var inst_31257 = (state_31271[(8)]);
var inst_31257__$1 = (state_31271[(2)]);
var inst_31258 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31257__$1);
var state_31271__$1 = (function (){var statearr_31280 = state_31271;
(statearr_31280[(8)] = inst_31257__$1);

return statearr_31280;
})();
if(cljs.core.truth_(inst_31258)){
var statearr_31281_31307 = state_31271__$1;
(statearr_31281_31307[(1)] = (13));

} else {
var statearr_31282_31308 = state_31271__$1;
(statearr_31282_31308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (2))){
var inst_31234 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31235 = (0);
var state_31271__$1 = (function (){var statearr_31283 = state_31271;
(statearr_31283[(9)] = inst_31234);

(statearr_31283[(7)] = inst_31235);

return statearr_31283;
})();
var statearr_31284_31309 = state_31271__$1;
(statearr_31284_31309[(2)] = null);

(statearr_31284_31309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (11))){
var inst_31235 = (state_31271[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31271,(10),Object,null,(9));
var inst_31244 = chs__$1.call(null,inst_31235);
var inst_31245 = done.call(null,inst_31235);
var inst_31246 = cljs.core.async.take_BANG_.call(null,inst_31244,inst_31245);
var state_31271__$1 = state_31271;
var statearr_31285_31310 = state_31271__$1;
(statearr_31285_31310[(2)] = inst_31246);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31271__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (9))){
var inst_31235 = (state_31271[(7)]);
var inst_31248 = (state_31271[(2)]);
var inst_31249 = (inst_31235 + (1));
var inst_31235__$1 = inst_31249;
var state_31271__$1 = (function (){var statearr_31286 = state_31271;
(statearr_31286[(7)] = inst_31235__$1);

(statearr_31286[(10)] = inst_31248);

return statearr_31286;
})();
var statearr_31287_31311 = state_31271__$1;
(statearr_31287_31311[(2)] = null);

(statearr_31287_31311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (5))){
var inst_31255 = (state_31271[(2)]);
var state_31271__$1 = (function (){var statearr_31288 = state_31271;
(statearr_31288[(11)] = inst_31255);

return statearr_31288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31271__$1,(12),dchan);
} else {
if((state_val_31272 === (14))){
var inst_31257 = (state_31271[(8)]);
var inst_31262 = cljs.core.apply.call(null,f,inst_31257);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31271__$1,(16),out,inst_31262);
} else {
if((state_val_31272 === (16))){
var inst_31264 = (state_31271[(2)]);
var state_31271__$1 = (function (){var statearr_31289 = state_31271;
(statearr_31289[(12)] = inst_31264);

return statearr_31289;
})();
var statearr_31290_31312 = state_31271__$1;
(statearr_31290_31312[(2)] = null);

(statearr_31290_31312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (10))){
var inst_31239 = (state_31271[(2)]);
var inst_31240 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31271__$1 = (function (){var statearr_31291 = state_31271;
(statearr_31291[(13)] = inst_31239);

return statearr_31291;
})();
var statearr_31292_31313 = state_31271__$1;
(statearr_31292_31313[(2)] = inst_31240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31271__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (8))){
var inst_31253 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31293_31314 = state_31271__$1;
(statearr_31293_31314[(2)] = inst_31253);

(statearr_31293_31314[(1)] = (5));


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
});})(c__29960__auto___31299,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29865__auto__,c__29960__auto___31299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_31294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31294[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_31294[(1)] = (1));

return statearr_31294;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_31271){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31295){if((e31295 instanceof Object)){
var ex__29869__auto__ = e31295;
var statearr_31296_31315 = state_31271;
(statearr_31296_31315[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31316 = state_31271;
state_31271 = G__31316;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31299,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29962__auto__ = (function (){var statearr_31297 = f__29961__auto__.call(null);
(statearr_31297[(6)] = c__29960__auto___31299);

return statearr_31297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31299,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__31319 = arguments.length;
switch (G__31319) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29960__auto___31373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31373,out){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31373,out){
return (function (state_31351){
var state_val_31352 = (state_31351[(1)]);
if((state_val_31352 === (7))){
var inst_31330 = (state_31351[(7)]);
var inst_31331 = (state_31351[(8)]);
var inst_31330__$1 = (state_31351[(2)]);
var inst_31331__$1 = cljs.core.nth.call(null,inst_31330__$1,(0),null);
var inst_31332 = cljs.core.nth.call(null,inst_31330__$1,(1),null);
var inst_31333 = (inst_31331__$1 == null);
var state_31351__$1 = (function (){var statearr_31353 = state_31351;
(statearr_31353[(7)] = inst_31330__$1);

(statearr_31353[(8)] = inst_31331__$1);

(statearr_31353[(9)] = inst_31332);

return statearr_31353;
})();
if(cljs.core.truth_(inst_31333)){
var statearr_31354_31374 = state_31351__$1;
(statearr_31354_31374[(1)] = (8));

} else {
var statearr_31355_31375 = state_31351__$1;
(statearr_31355_31375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (1))){
var inst_31320 = cljs.core.vec.call(null,chs);
var inst_31321 = inst_31320;
var state_31351__$1 = (function (){var statearr_31356 = state_31351;
(statearr_31356[(10)] = inst_31321);

return statearr_31356;
})();
var statearr_31357_31376 = state_31351__$1;
(statearr_31357_31376[(2)] = null);

(statearr_31357_31376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (4))){
var inst_31321 = (state_31351[(10)]);
var state_31351__$1 = state_31351;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31351__$1,(7),inst_31321);
} else {
if((state_val_31352 === (6))){
var inst_31347 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31358_31377 = state_31351__$1;
(statearr_31358_31377[(2)] = inst_31347);

(statearr_31358_31377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (3))){
var inst_31349 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31351__$1,inst_31349);
} else {
if((state_val_31352 === (2))){
var inst_31321 = (state_31351[(10)]);
var inst_31323 = cljs.core.count.call(null,inst_31321);
var inst_31324 = (inst_31323 > (0));
var state_31351__$1 = state_31351;
if(cljs.core.truth_(inst_31324)){
var statearr_31360_31378 = state_31351__$1;
(statearr_31360_31378[(1)] = (4));

} else {
var statearr_31361_31379 = state_31351__$1;
(statearr_31361_31379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (11))){
var inst_31321 = (state_31351[(10)]);
var inst_31340 = (state_31351[(2)]);
var tmp31359 = inst_31321;
var inst_31321__$1 = tmp31359;
var state_31351__$1 = (function (){var statearr_31362 = state_31351;
(statearr_31362[(11)] = inst_31340);

(statearr_31362[(10)] = inst_31321__$1);

return statearr_31362;
})();
var statearr_31363_31380 = state_31351__$1;
(statearr_31363_31380[(2)] = null);

(statearr_31363_31380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (9))){
var inst_31331 = (state_31351[(8)]);
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31351__$1,(11),out,inst_31331);
} else {
if((state_val_31352 === (5))){
var inst_31345 = cljs.core.async.close_BANG_.call(null,out);
var state_31351__$1 = state_31351;
var statearr_31364_31381 = state_31351__$1;
(statearr_31364_31381[(2)] = inst_31345);

(statearr_31364_31381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (10))){
var inst_31343 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31365_31382 = state_31351__$1;
(statearr_31365_31382[(2)] = inst_31343);

(statearr_31365_31382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (8))){
var inst_31330 = (state_31351[(7)]);
var inst_31331 = (state_31351[(8)]);
var inst_31321 = (state_31351[(10)]);
var inst_31332 = (state_31351[(9)]);
var inst_31335 = (function (){var cs = inst_31321;
var vec__31326 = inst_31330;
var v = inst_31331;
var c = inst_31332;
return ((function (cs,vec__31326,v,c,inst_31330,inst_31331,inst_31321,inst_31332,state_val_31352,c__29960__auto___31373,out){
return (function (p1__31317_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31317_SHARP_);
});
;})(cs,vec__31326,v,c,inst_31330,inst_31331,inst_31321,inst_31332,state_val_31352,c__29960__auto___31373,out))
})();
var inst_31336 = cljs.core.filterv.call(null,inst_31335,inst_31321);
var inst_31321__$1 = inst_31336;
var state_31351__$1 = (function (){var statearr_31366 = state_31351;
(statearr_31366[(10)] = inst_31321__$1);

return statearr_31366;
})();
var statearr_31367_31383 = state_31351__$1;
(statearr_31367_31383[(2)] = null);

(statearr_31367_31383[(1)] = (2));


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
});})(c__29960__auto___31373,out))
;
return ((function (switch__29865__auto__,c__29960__auto___31373,out){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_31368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31368[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_31368[(1)] = (1));

return statearr_31368;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_31351){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31369){if((e31369 instanceof Object)){
var ex__29869__auto__ = e31369;
var statearr_31370_31384 = state_31351;
(statearr_31370_31384[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31385 = state_31351;
state_31351 = G__31385;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_31351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_31351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31373,out))
})();
var state__29962__auto__ = (function (){var statearr_31371 = f__29961__auto__.call(null);
(statearr_31371[(6)] = c__29960__auto___31373);

return statearr_31371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31373,out))
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
var G__31387 = arguments.length;
switch (G__31387) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29960__auto___31432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31432,out){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31432,out){
return (function (state_31411){
var state_val_31412 = (state_31411[(1)]);
if((state_val_31412 === (7))){
var inst_31393 = (state_31411[(7)]);
var inst_31393__$1 = (state_31411[(2)]);
var inst_31394 = (inst_31393__$1 == null);
var inst_31395 = cljs.core.not.call(null,inst_31394);
var state_31411__$1 = (function (){var statearr_31413 = state_31411;
(statearr_31413[(7)] = inst_31393__$1);

return statearr_31413;
})();
if(inst_31395){
var statearr_31414_31433 = state_31411__$1;
(statearr_31414_31433[(1)] = (8));

} else {
var statearr_31415_31434 = state_31411__$1;
(statearr_31415_31434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (1))){
var inst_31388 = (0);
var state_31411__$1 = (function (){var statearr_31416 = state_31411;
(statearr_31416[(8)] = inst_31388);

return statearr_31416;
})();
var statearr_31417_31435 = state_31411__$1;
(statearr_31417_31435[(2)] = null);

(statearr_31417_31435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (4))){
var state_31411__$1 = state_31411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31411__$1,(7),ch);
} else {
if((state_val_31412 === (6))){
var inst_31406 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31418_31436 = state_31411__$1;
(statearr_31418_31436[(2)] = inst_31406);

(statearr_31418_31436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (3))){
var inst_31408 = (state_31411[(2)]);
var inst_31409 = cljs.core.async.close_BANG_.call(null,out);
var state_31411__$1 = (function (){var statearr_31419 = state_31411;
(statearr_31419[(9)] = inst_31408);

return statearr_31419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31411__$1,inst_31409);
} else {
if((state_val_31412 === (2))){
var inst_31388 = (state_31411[(8)]);
var inst_31390 = (inst_31388 < n);
var state_31411__$1 = state_31411;
if(cljs.core.truth_(inst_31390)){
var statearr_31420_31437 = state_31411__$1;
(statearr_31420_31437[(1)] = (4));

} else {
var statearr_31421_31438 = state_31411__$1;
(statearr_31421_31438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (11))){
var inst_31388 = (state_31411[(8)]);
var inst_31398 = (state_31411[(2)]);
var inst_31399 = (inst_31388 + (1));
var inst_31388__$1 = inst_31399;
var state_31411__$1 = (function (){var statearr_31422 = state_31411;
(statearr_31422[(10)] = inst_31398);

(statearr_31422[(8)] = inst_31388__$1);

return statearr_31422;
})();
var statearr_31423_31439 = state_31411__$1;
(statearr_31423_31439[(2)] = null);

(statearr_31423_31439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (9))){
var state_31411__$1 = state_31411;
var statearr_31424_31440 = state_31411__$1;
(statearr_31424_31440[(2)] = null);

(statearr_31424_31440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (5))){
var state_31411__$1 = state_31411;
var statearr_31425_31441 = state_31411__$1;
(statearr_31425_31441[(2)] = null);

(statearr_31425_31441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (10))){
var inst_31403 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31426_31442 = state_31411__$1;
(statearr_31426_31442[(2)] = inst_31403);

(statearr_31426_31442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (8))){
var inst_31393 = (state_31411[(7)]);
var state_31411__$1 = state_31411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31411__$1,(11),out,inst_31393);
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
});})(c__29960__auto___31432,out))
;
return ((function (switch__29865__auto__,c__29960__auto___31432,out){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_31427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31427[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_31427[(1)] = (1));

return statearr_31427;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_31411){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31428){if((e31428 instanceof Object)){
var ex__29869__auto__ = e31428;
var statearr_31429_31443 = state_31411;
(statearr_31429_31443[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31444 = state_31411;
state_31411 = G__31444;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_31411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_31411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31432,out))
})();
var state__29962__auto__ = (function (){var statearr_31430 = f__29961__auto__.call(null);
(statearr_31430[(6)] = c__29960__auto___31432);

return statearr_31430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31432,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31446 = (function (f,ch,meta31447){
this.f = f;
this.ch = ch;
this.meta31447 = meta31447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31448,meta31447__$1){
var self__ = this;
var _31448__$1 = this;
return (new cljs.core.async.t_cljs$core$async31446(self__.f,self__.ch,meta31447__$1));
});

cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31448){
var self__ = this;
var _31448__$1 = this;
return self__.meta31447;
});

cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31449 = (function (f,ch,meta31447,_,fn1,meta31450){
this.f = f;
this.ch = ch;
this.meta31447 = meta31447;
this._ = _;
this.fn1 = fn1;
this.meta31450 = meta31450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31451,meta31450__$1){
var self__ = this;
var _31451__$1 = this;
return (new cljs.core.async.t_cljs$core$async31449(self__.f,self__.ch,self__.meta31447,self__._,self__.fn1,meta31450__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31451){
var self__ = this;
var _31451__$1 = this;
return self__.meta31450;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31445_SHARP_){
return f1.call(null,(((p1__31445_SHARP_ == null))?null:self__.f.call(null,p1__31445_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31449.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31447","meta31447",785925072,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31446","cljs.core.async/t_cljs$core$async31446",-505856170,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31450","meta31450",-20756574,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31449";

cljs.core.async.t_cljs$core$async31449.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31449");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31449.
 */
cljs.core.async.__GT_t_cljs$core$async31449 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31449(f__$1,ch__$1,meta31447__$1,___$2,fn1__$1,meta31450){
return (new cljs.core.async.t_cljs$core$async31449(f__$1,ch__$1,meta31447__$1,___$2,fn1__$1,meta31450));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31449(self__.f,self__.ch,self__.meta31447,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31447","meta31447",785925072,null)], null);
});

cljs.core.async.t_cljs$core$async31446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31446";

cljs.core.async.t_cljs$core$async31446.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31446");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31446.
 */
cljs.core.async.__GT_t_cljs$core$async31446 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31446(f__$1,ch__$1,meta31447){
return (new cljs.core.async.t_cljs$core$async31446(f__$1,ch__$1,meta31447));
});

}

return (new cljs.core.async.t_cljs$core$async31446(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31452 = (function (f,ch,meta31453){
this.f = f;
this.ch = ch;
this.meta31453 = meta31453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31454,meta31453__$1){
var self__ = this;
var _31454__$1 = this;
return (new cljs.core.async.t_cljs$core$async31452(self__.f,self__.ch,meta31453__$1));
});

cljs.core.async.t_cljs$core$async31452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31454){
var self__ = this;
var _31454__$1 = this;
return self__.meta31453;
});

cljs.core.async.t_cljs$core$async31452.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31452.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31452.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31453","meta31453",-422033888,null)], null);
});

cljs.core.async.t_cljs$core$async31452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31452";

cljs.core.async.t_cljs$core$async31452.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31452");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31452.
 */
cljs.core.async.__GT_t_cljs$core$async31452 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31452(f__$1,ch__$1,meta31453){
return (new cljs.core.async.t_cljs$core$async31452(f__$1,ch__$1,meta31453));
});

}

return (new cljs.core.async.t_cljs$core$async31452(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31455 = (function (p,ch,meta31456){
this.p = p;
this.ch = ch;
this.meta31456 = meta31456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31457,meta31456__$1){
var self__ = this;
var _31457__$1 = this;
return (new cljs.core.async.t_cljs$core$async31455(self__.p,self__.ch,meta31456__$1));
});

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31457){
var self__ = this;
var _31457__$1 = this;
return self__.meta31456;
});

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31456","meta31456",-595147196,null)], null);
});

cljs.core.async.t_cljs$core$async31455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31455";

cljs.core.async.t_cljs$core$async31455.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31455");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31455.
 */
cljs.core.async.__GT_t_cljs$core$async31455 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31455(p__$1,ch__$1,meta31456){
return (new cljs.core.async.t_cljs$core$async31455(p__$1,ch__$1,meta31456));
});

}

return (new cljs.core.async.t_cljs$core$async31455(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31459 = arguments.length;
switch (G__31459) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29960__auto___31499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31499,out){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31499,out){
return (function (state_31480){
var state_val_31481 = (state_31480[(1)]);
if((state_val_31481 === (7))){
var inst_31476 = (state_31480[(2)]);
var state_31480__$1 = state_31480;
var statearr_31482_31500 = state_31480__$1;
(statearr_31482_31500[(2)] = inst_31476);

(statearr_31482_31500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (1))){
var state_31480__$1 = state_31480;
var statearr_31483_31501 = state_31480__$1;
(statearr_31483_31501[(2)] = null);

(statearr_31483_31501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (4))){
var inst_31462 = (state_31480[(7)]);
var inst_31462__$1 = (state_31480[(2)]);
var inst_31463 = (inst_31462__$1 == null);
var state_31480__$1 = (function (){var statearr_31484 = state_31480;
(statearr_31484[(7)] = inst_31462__$1);

return statearr_31484;
})();
if(cljs.core.truth_(inst_31463)){
var statearr_31485_31502 = state_31480__$1;
(statearr_31485_31502[(1)] = (5));

} else {
var statearr_31486_31503 = state_31480__$1;
(statearr_31486_31503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (6))){
var inst_31462 = (state_31480[(7)]);
var inst_31467 = p.call(null,inst_31462);
var state_31480__$1 = state_31480;
if(cljs.core.truth_(inst_31467)){
var statearr_31487_31504 = state_31480__$1;
(statearr_31487_31504[(1)] = (8));

} else {
var statearr_31488_31505 = state_31480__$1;
(statearr_31488_31505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (3))){
var inst_31478 = (state_31480[(2)]);
var state_31480__$1 = state_31480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31480__$1,inst_31478);
} else {
if((state_val_31481 === (2))){
var state_31480__$1 = state_31480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31480__$1,(4),ch);
} else {
if((state_val_31481 === (11))){
var inst_31470 = (state_31480[(2)]);
var state_31480__$1 = state_31480;
var statearr_31489_31506 = state_31480__$1;
(statearr_31489_31506[(2)] = inst_31470);

(statearr_31489_31506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (9))){
var state_31480__$1 = state_31480;
var statearr_31490_31507 = state_31480__$1;
(statearr_31490_31507[(2)] = null);

(statearr_31490_31507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (5))){
var inst_31465 = cljs.core.async.close_BANG_.call(null,out);
var state_31480__$1 = state_31480;
var statearr_31491_31508 = state_31480__$1;
(statearr_31491_31508[(2)] = inst_31465);

(statearr_31491_31508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (10))){
var inst_31473 = (state_31480[(2)]);
var state_31480__$1 = (function (){var statearr_31492 = state_31480;
(statearr_31492[(8)] = inst_31473);

return statearr_31492;
})();
var statearr_31493_31509 = state_31480__$1;
(statearr_31493_31509[(2)] = null);

(statearr_31493_31509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (8))){
var inst_31462 = (state_31480[(7)]);
var state_31480__$1 = state_31480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31480__$1,(11),out,inst_31462);
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
});})(c__29960__auto___31499,out))
;
return ((function (switch__29865__auto__,c__29960__auto___31499,out){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_31494 = [null,null,null,null,null,null,null,null,null];
(statearr_31494[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_31494[(1)] = (1));

return statearr_31494;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_31480){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31495){if((e31495 instanceof Object)){
var ex__29869__auto__ = e31495;
var statearr_31496_31510 = state_31480;
(statearr_31496_31510[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31511 = state_31480;
state_31480 = G__31511;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_31480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_31480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31499,out))
})();
var state__29962__auto__ = (function (){var statearr_31497 = f__29961__auto__.call(null);
(statearr_31497[(6)] = c__29960__auto___31499);

return statearr_31497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31499,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31513 = arguments.length;
switch (G__31513) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__){
return (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (7))){
var inst_31572 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31578_31616 = state_31576__$1;
(statearr_31578_31616[(2)] = inst_31572);

(statearr_31578_31616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (20))){
var inst_31542 = (state_31576[(7)]);
var inst_31553 = (state_31576[(2)]);
var inst_31554 = cljs.core.next.call(null,inst_31542);
var inst_31528 = inst_31554;
var inst_31529 = null;
var inst_31530 = (0);
var inst_31531 = (0);
var state_31576__$1 = (function (){var statearr_31579 = state_31576;
(statearr_31579[(8)] = inst_31528);

(statearr_31579[(9)] = inst_31553);

(statearr_31579[(10)] = inst_31530);

(statearr_31579[(11)] = inst_31529);

(statearr_31579[(12)] = inst_31531);

return statearr_31579;
})();
var statearr_31580_31617 = state_31576__$1;
(statearr_31580_31617[(2)] = null);

(statearr_31580_31617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (1))){
var state_31576__$1 = state_31576;
var statearr_31581_31618 = state_31576__$1;
(statearr_31581_31618[(2)] = null);

(statearr_31581_31618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (4))){
var inst_31517 = (state_31576[(13)]);
var inst_31517__$1 = (state_31576[(2)]);
var inst_31518 = (inst_31517__$1 == null);
var state_31576__$1 = (function (){var statearr_31582 = state_31576;
(statearr_31582[(13)] = inst_31517__$1);

return statearr_31582;
})();
if(cljs.core.truth_(inst_31518)){
var statearr_31583_31619 = state_31576__$1;
(statearr_31583_31619[(1)] = (5));

} else {
var statearr_31584_31620 = state_31576__$1;
(statearr_31584_31620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (15))){
var state_31576__$1 = state_31576;
var statearr_31588_31621 = state_31576__$1;
(statearr_31588_31621[(2)] = null);

(statearr_31588_31621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (21))){
var state_31576__$1 = state_31576;
var statearr_31589_31622 = state_31576__$1;
(statearr_31589_31622[(2)] = null);

(statearr_31589_31622[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (13))){
var inst_31528 = (state_31576[(8)]);
var inst_31530 = (state_31576[(10)]);
var inst_31529 = (state_31576[(11)]);
var inst_31531 = (state_31576[(12)]);
var inst_31538 = (state_31576[(2)]);
var inst_31539 = (inst_31531 + (1));
var tmp31585 = inst_31528;
var tmp31586 = inst_31530;
var tmp31587 = inst_31529;
var inst_31528__$1 = tmp31585;
var inst_31529__$1 = tmp31587;
var inst_31530__$1 = tmp31586;
var inst_31531__$1 = inst_31539;
var state_31576__$1 = (function (){var statearr_31590 = state_31576;
(statearr_31590[(8)] = inst_31528__$1);

(statearr_31590[(10)] = inst_31530__$1);

(statearr_31590[(11)] = inst_31529__$1);

(statearr_31590[(12)] = inst_31531__$1);

(statearr_31590[(14)] = inst_31538);

return statearr_31590;
})();
var statearr_31591_31623 = state_31576__$1;
(statearr_31591_31623[(2)] = null);

(statearr_31591_31623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (22))){
var state_31576__$1 = state_31576;
var statearr_31592_31624 = state_31576__$1;
(statearr_31592_31624[(2)] = null);

(statearr_31592_31624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (6))){
var inst_31517 = (state_31576[(13)]);
var inst_31526 = f.call(null,inst_31517);
var inst_31527 = cljs.core.seq.call(null,inst_31526);
var inst_31528 = inst_31527;
var inst_31529 = null;
var inst_31530 = (0);
var inst_31531 = (0);
var state_31576__$1 = (function (){var statearr_31593 = state_31576;
(statearr_31593[(8)] = inst_31528);

(statearr_31593[(10)] = inst_31530);

(statearr_31593[(11)] = inst_31529);

(statearr_31593[(12)] = inst_31531);

return statearr_31593;
})();
var statearr_31594_31625 = state_31576__$1;
(statearr_31594_31625[(2)] = null);

(statearr_31594_31625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (17))){
var inst_31542 = (state_31576[(7)]);
var inst_31546 = cljs.core.chunk_first.call(null,inst_31542);
var inst_31547 = cljs.core.chunk_rest.call(null,inst_31542);
var inst_31548 = cljs.core.count.call(null,inst_31546);
var inst_31528 = inst_31547;
var inst_31529 = inst_31546;
var inst_31530 = inst_31548;
var inst_31531 = (0);
var state_31576__$1 = (function (){var statearr_31595 = state_31576;
(statearr_31595[(8)] = inst_31528);

(statearr_31595[(10)] = inst_31530);

(statearr_31595[(11)] = inst_31529);

(statearr_31595[(12)] = inst_31531);

return statearr_31595;
})();
var statearr_31596_31626 = state_31576__$1;
(statearr_31596_31626[(2)] = null);

(statearr_31596_31626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (3))){
var inst_31574 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else {
if((state_val_31577 === (12))){
var inst_31562 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31597_31627 = state_31576__$1;
(statearr_31597_31627[(2)] = inst_31562);

(statearr_31597_31627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (2))){
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31576__$1,(4),in$);
} else {
if((state_val_31577 === (23))){
var inst_31570 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31598_31628 = state_31576__$1;
(statearr_31598_31628[(2)] = inst_31570);

(statearr_31598_31628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (19))){
var inst_31557 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31599_31629 = state_31576__$1;
(statearr_31599_31629[(2)] = inst_31557);

(statearr_31599_31629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (11))){
var inst_31528 = (state_31576[(8)]);
var inst_31542 = (state_31576[(7)]);
var inst_31542__$1 = cljs.core.seq.call(null,inst_31528);
var state_31576__$1 = (function (){var statearr_31600 = state_31576;
(statearr_31600[(7)] = inst_31542__$1);

return statearr_31600;
})();
if(inst_31542__$1){
var statearr_31601_31630 = state_31576__$1;
(statearr_31601_31630[(1)] = (14));

} else {
var statearr_31602_31631 = state_31576__$1;
(statearr_31602_31631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (9))){
var inst_31564 = (state_31576[(2)]);
var inst_31565 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31576__$1 = (function (){var statearr_31603 = state_31576;
(statearr_31603[(15)] = inst_31564);

return statearr_31603;
})();
if(cljs.core.truth_(inst_31565)){
var statearr_31604_31632 = state_31576__$1;
(statearr_31604_31632[(1)] = (21));

} else {
var statearr_31605_31633 = state_31576__$1;
(statearr_31605_31633[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var inst_31520 = cljs.core.async.close_BANG_.call(null,out);
var state_31576__$1 = state_31576;
var statearr_31606_31634 = state_31576__$1;
(statearr_31606_31634[(2)] = inst_31520);

(statearr_31606_31634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (14))){
var inst_31542 = (state_31576[(7)]);
var inst_31544 = cljs.core.chunked_seq_QMARK_.call(null,inst_31542);
var state_31576__$1 = state_31576;
if(inst_31544){
var statearr_31607_31635 = state_31576__$1;
(statearr_31607_31635[(1)] = (17));

} else {
var statearr_31608_31636 = state_31576__$1;
(statearr_31608_31636[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (16))){
var inst_31560 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31609_31637 = state_31576__$1;
(statearr_31609_31637[(2)] = inst_31560);

(statearr_31609_31637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (10))){
var inst_31529 = (state_31576[(11)]);
var inst_31531 = (state_31576[(12)]);
var inst_31536 = cljs.core._nth.call(null,inst_31529,inst_31531);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31576__$1,(13),out,inst_31536);
} else {
if((state_val_31577 === (18))){
var inst_31542 = (state_31576[(7)]);
var inst_31551 = cljs.core.first.call(null,inst_31542);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31576__$1,(20),out,inst_31551);
} else {
if((state_val_31577 === (8))){
var inst_31530 = (state_31576[(10)]);
var inst_31531 = (state_31576[(12)]);
var inst_31533 = (inst_31531 < inst_31530);
var inst_31534 = inst_31533;
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31534)){
var statearr_31610_31638 = state_31576__$1;
(statearr_31610_31638[(1)] = (10));

} else {
var statearr_31611_31639 = state_31576__$1;
(statearr_31611_31639[(1)] = (11));

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
});})(c__29960__auto__))
;
return ((function (switch__29865__auto__,c__29960__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29866__auto____0 = (function (){
var statearr_31612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31612[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29866__auto__);

(statearr_31612[(1)] = (1));

return statearr_31612;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29866__auto____1 = (function (state_31576){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31613){if((e31613 instanceof Object)){
var ex__29869__auto__ = e31613;
var statearr_31614_31640 = state_31576;
(statearr_31614_31640[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31641 = state_31576;
state_31576 = G__31641;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29866__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29866__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__))
})();
var state__29962__auto__ = (function (){var statearr_31615 = f__29961__auto__.call(null);
(statearr_31615[(6)] = c__29960__auto__);

return statearr_31615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__))
);

return c__29960__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31643 = arguments.length;
switch (G__31643) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31646 = arguments.length;
switch (G__31646) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31649 = arguments.length;
switch (G__31649) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29960__auto___31696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31696,out){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31696,out){
return (function (state_31673){
var state_val_31674 = (state_31673[(1)]);
if((state_val_31674 === (7))){
var inst_31668 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31675_31697 = state_31673__$1;
(statearr_31675_31697[(2)] = inst_31668);

(statearr_31675_31697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (1))){
var inst_31650 = null;
var state_31673__$1 = (function (){var statearr_31676 = state_31673;
(statearr_31676[(7)] = inst_31650);

return statearr_31676;
})();
var statearr_31677_31698 = state_31673__$1;
(statearr_31677_31698[(2)] = null);

(statearr_31677_31698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (4))){
var inst_31653 = (state_31673[(8)]);
var inst_31653__$1 = (state_31673[(2)]);
var inst_31654 = (inst_31653__$1 == null);
var inst_31655 = cljs.core.not.call(null,inst_31654);
var state_31673__$1 = (function (){var statearr_31678 = state_31673;
(statearr_31678[(8)] = inst_31653__$1);

return statearr_31678;
})();
if(inst_31655){
var statearr_31679_31699 = state_31673__$1;
(statearr_31679_31699[(1)] = (5));

} else {
var statearr_31680_31700 = state_31673__$1;
(statearr_31680_31700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (6))){
var state_31673__$1 = state_31673;
var statearr_31681_31701 = state_31673__$1;
(statearr_31681_31701[(2)] = null);

(statearr_31681_31701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (3))){
var inst_31670 = (state_31673[(2)]);
var inst_31671 = cljs.core.async.close_BANG_.call(null,out);
var state_31673__$1 = (function (){var statearr_31682 = state_31673;
(statearr_31682[(9)] = inst_31670);

return statearr_31682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31673__$1,inst_31671);
} else {
if((state_val_31674 === (2))){
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31673__$1,(4),ch);
} else {
if((state_val_31674 === (11))){
var inst_31653 = (state_31673[(8)]);
var inst_31662 = (state_31673[(2)]);
var inst_31650 = inst_31653;
var state_31673__$1 = (function (){var statearr_31683 = state_31673;
(statearr_31683[(7)] = inst_31650);

(statearr_31683[(10)] = inst_31662);

return statearr_31683;
})();
var statearr_31684_31702 = state_31673__$1;
(statearr_31684_31702[(2)] = null);

(statearr_31684_31702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (9))){
var inst_31653 = (state_31673[(8)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31673__$1,(11),out,inst_31653);
} else {
if((state_val_31674 === (5))){
var inst_31650 = (state_31673[(7)]);
var inst_31653 = (state_31673[(8)]);
var inst_31657 = cljs.core._EQ_.call(null,inst_31653,inst_31650);
var state_31673__$1 = state_31673;
if(inst_31657){
var statearr_31686_31703 = state_31673__$1;
(statearr_31686_31703[(1)] = (8));

} else {
var statearr_31687_31704 = state_31673__$1;
(statearr_31687_31704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (10))){
var inst_31665 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31688_31705 = state_31673__$1;
(statearr_31688_31705[(2)] = inst_31665);

(statearr_31688_31705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (8))){
var inst_31650 = (state_31673[(7)]);
var tmp31685 = inst_31650;
var inst_31650__$1 = tmp31685;
var state_31673__$1 = (function (){var statearr_31689 = state_31673;
(statearr_31689[(7)] = inst_31650__$1);

return statearr_31689;
})();
var statearr_31690_31706 = state_31673__$1;
(statearr_31690_31706[(2)] = null);

(statearr_31690_31706[(1)] = (2));


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
});})(c__29960__auto___31696,out))
;
return ((function (switch__29865__auto__,c__29960__auto___31696,out){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_31691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31691[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_31691[(1)] = (1));

return statearr_31691;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_31673){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31692){if((e31692 instanceof Object)){
var ex__29869__auto__ = e31692;
var statearr_31693_31707 = state_31673;
(statearr_31693_31707[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31708 = state_31673;
state_31673 = G__31708;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_31673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_31673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31696,out))
})();
var state__29962__auto__ = (function (){var statearr_31694 = f__29961__auto__.call(null);
(statearr_31694[(6)] = c__29960__auto___31696);

return statearr_31694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31696,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31710 = arguments.length;
switch (G__31710) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29960__auto___31776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31776,out){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31776,out){
return (function (state_31748){
var state_val_31749 = (state_31748[(1)]);
if((state_val_31749 === (7))){
var inst_31744 = (state_31748[(2)]);
var state_31748__$1 = state_31748;
var statearr_31750_31777 = state_31748__$1;
(statearr_31750_31777[(2)] = inst_31744);

(statearr_31750_31777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (1))){
var inst_31711 = (new Array(n));
var inst_31712 = inst_31711;
var inst_31713 = (0);
var state_31748__$1 = (function (){var statearr_31751 = state_31748;
(statearr_31751[(7)] = inst_31713);

(statearr_31751[(8)] = inst_31712);

return statearr_31751;
})();
var statearr_31752_31778 = state_31748__$1;
(statearr_31752_31778[(2)] = null);

(statearr_31752_31778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (4))){
var inst_31716 = (state_31748[(9)]);
var inst_31716__$1 = (state_31748[(2)]);
var inst_31717 = (inst_31716__$1 == null);
var inst_31718 = cljs.core.not.call(null,inst_31717);
var state_31748__$1 = (function (){var statearr_31753 = state_31748;
(statearr_31753[(9)] = inst_31716__$1);

return statearr_31753;
})();
if(inst_31718){
var statearr_31754_31779 = state_31748__$1;
(statearr_31754_31779[(1)] = (5));

} else {
var statearr_31755_31780 = state_31748__$1;
(statearr_31755_31780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (15))){
var inst_31738 = (state_31748[(2)]);
var state_31748__$1 = state_31748;
var statearr_31756_31781 = state_31748__$1;
(statearr_31756_31781[(2)] = inst_31738);

(statearr_31756_31781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (13))){
var state_31748__$1 = state_31748;
var statearr_31757_31782 = state_31748__$1;
(statearr_31757_31782[(2)] = null);

(statearr_31757_31782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (6))){
var inst_31713 = (state_31748[(7)]);
var inst_31734 = (inst_31713 > (0));
var state_31748__$1 = state_31748;
if(cljs.core.truth_(inst_31734)){
var statearr_31758_31783 = state_31748__$1;
(statearr_31758_31783[(1)] = (12));

} else {
var statearr_31759_31784 = state_31748__$1;
(statearr_31759_31784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (3))){
var inst_31746 = (state_31748[(2)]);
var state_31748__$1 = state_31748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31748__$1,inst_31746);
} else {
if((state_val_31749 === (12))){
var inst_31712 = (state_31748[(8)]);
var inst_31736 = cljs.core.vec.call(null,inst_31712);
var state_31748__$1 = state_31748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31748__$1,(15),out,inst_31736);
} else {
if((state_val_31749 === (2))){
var state_31748__$1 = state_31748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31748__$1,(4),ch);
} else {
if((state_val_31749 === (11))){
var inst_31728 = (state_31748[(2)]);
var inst_31729 = (new Array(n));
var inst_31712 = inst_31729;
var inst_31713 = (0);
var state_31748__$1 = (function (){var statearr_31760 = state_31748;
(statearr_31760[(7)] = inst_31713);

(statearr_31760[(8)] = inst_31712);

(statearr_31760[(10)] = inst_31728);

return statearr_31760;
})();
var statearr_31761_31785 = state_31748__$1;
(statearr_31761_31785[(2)] = null);

(statearr_31761_31785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (9))){
var inst_31712 = (state_31748[(8)]);
var inst_31726 = cljs.core.vec.call(null,inst_31712);
var state_31748__$1 = state_31748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31748__$1,(11),out,inst_31726);
} else {
if((state_val_31749 === (5))){
var inst_31721 = (state_31748[(11)]);
var inst_31716 = (state_31748[(9)]);
var inst_31713 = (state_31748[(7)]);
var inst_31712 = (state_31748[(8)]);
var inst_31720 = (inst_31712[inst_31713] = inst_31716);
var inst_31721__$1 = (inst_31713 + (1));
var inst_31722 = (inst_31721__$1 < n);
var state_31748__$1 = (function (){var statearr_31762 = state_31748;
(statearr_31762[(12)] = inst_31720);

(statearr_31762[(11)] = inst_31721__$1);

return statearr_31762;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31763_31786 = state_31748__$1;
(statearr_31763_31786[(1)] = (8));

} else {
var statearr_31764_31787 = state_31748__$1;
(statearr_31764_31787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (14))){
var inst_31741 = (state_31748[(2)]);
var inst_31742 = cljs.core.async.close_BANG_.call(null,out);
var state_31748__$1 = (function (){var statearr_31766 = state_31748;
(statearr_31766[(13)] = inst_31741);

return statearr_31766;
})();
var statearr_31767_31788 = state_31748__$1;
(statearr_31767_31788[(2)] = inst_31742);

(statearr_31767_31788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (10))){
var inst_31732 = (state_31748[(2)]);
var state_31748__$1 = state_31748;
var statearr_31768_31789 = state_31748__$1;
(statearr_31768_31789[(2)] = inst_31732);

(statearr_31768_31789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (8))){
var inst_31721 = (state_31748[(11)]);
var inst_31712 = (state_31748[(8)]);
var tmp31765 = inst_31712;
var inst_31712__$1 = tmp31765;
var inst_31713 = inst_31721;
var state_31748__$1 = (function (){var statearr_31769 = state_31748;
(statearr_31769[(7)] = inst_31713);

(statearr_31769[(8)] = inst_31712__$1);

return statearr_31769;
})();
var statearr_31770_31790 = state_31748__$1;
(statearr_31770_31790[(2)] = null);

(statearr_31770_31790[(1)] = (2));


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
});})(c__29960__auto___31776,out))
;
return ((function (switch__29865__auto__,c__29960__auto___31776,out){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_31771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31771[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_31771[(1)] = (1));

return statearr_31771;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_31748){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31772){if((e31772 instanceof Object)){
var ex__29869__auto__ = e31772;
var statearr_31773_31791 = state_31748;
(statearr_31773_31791[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31792 = state_31748;
state_31748 = G__31792;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_31748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_31748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31776,out))
})();
var state__29962__auto__ = (function (){var statearr_31774 = f__29961__auto__.call(null);
(statearr_31774[(6)] = c__29960__auto___31776);

return statearr_31774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31776,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31794 = arguments.length;
switch (G__31794) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29960__auto___31864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___31864,out){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___31864,out){
return (function (state_31836){
var state_val_31837 = (state_31836[(1)]);
if((state_val_31837 === (7))){
var inst_31832 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31838_31865 = state_31836__$1;
(statearr_31838_31865[(2)] = inst_31832);

(statearr_31838_31865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (1))){
var inst_31795 = [];
var inst_31796 = inst_31795;
var inst_31797 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31836__$1 = (function (){var statearr_31839 = state_31836;
(statearr_31839[(7)] = inst_31797);

(statearr_31839[(8)] = inst_31796);

return statearr_31839;
})();
var statearr_31840_31866 = state_31836__$1;
(statearr_31840_31866[(2)] = null);

(statearr_31840_31866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (4))){
var inst_31800 = (state_31836[(9)]);
var inst_31800__$1 = (state_31836[(2)]);
var inst_31801 = (inst_31800__$1 == null);
var inst_31802 = cljs.core.not.call(null,inst_31801);
var state_31836__$1 = (function (){var statearr_31841 = state_31836;
(statearr_31841[(9)] = inst_31800__$1);

return statearr_31841;
})();
if(inst_31802){
var statearr_31842_31867 = state_31836__$1;
(statearr_31842_31867[(1)] = (5));

} else {
var statearr_31843_31868 = state_31836__$1;
(statearr_31843_31868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (15))){
var inst_31826 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31844_31869 = state_31836__$1;
(statearr_31844_31869[(2)] = inst_31826);

(statearr_31844_31869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (13))){
var state_31836__$1 = state_31836;
var statearr_31845_31870 = state_31836__$1;
(statearr_31845_31870[(2)] = null);

(statearr_31845_31870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (6))){
var inst_31796 = (state_31836[(8)]);
var inst_31821 = inst_31796.length;
var inst_31822 = (inst_31821 > (0));
var state_31836__$1 = state_31836;
if(cljs.core.truth_(inst_31822)){
var statearr_31846_31871 = state_31836__$1;
(statearr_31846_31871[(1)] = (12));

} else {
var statearr_31847_31872 = state_31836__$1;
(statearr_31847_31872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (3))){
var inst_31834 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31836__$1,inst_31834);
} else {
if((state_val_31837 === (12))){
var inst_31796 = (state_31836[(8)]);
var inst_31824 = cljs.core.vec.call(null,inst_31796);
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31836__$1,(15),out,inst_31824);
} else {
if((state_val_31837 === (2))){
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31836__$1,(4),ch);
} else {
if((state_val_31837 === (11))){
var inst_31800 = (state_31836[(9)]);
var inst_31804 = (state_31836[(10)]);
var inst_31814 = (state_31836[(2)]);
var inst_31815 = [];
var inst_31816 = inst_31815.push(inst_31800);
var inst_31796 = inst_31815;
var inst_31797 = inst_31804;
var state_31836__$1 = (function (){var statearr_31848 = state_31836;
(statearr_31848[(7)] = inst_31797);

(statearr_31848[(11)] = inst_31814);

(statearr_31848[(12)] = inst_31816);

(statearr_31848[(8)] = inst_31796);

return statearr_31848;
})();
var statearr_31849_31873 = state_31836__$1;
(statearr_31849_31873[(2)] = null);

(statearr_31849_31873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (9))){
var inst_31796 = (state_31836[(8)]);
var inst_31812 = cljs.core.vec.call(null,inst_31796);
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31836__$1,(11),out,inst_31812);
} else {
if((state_val_31837 === (5))){
var inst_31797 = (state_31836[(7)]);
var inst_31800 = (state_31836[(9)]);
var inst_31804 = (state_31836[(10)]);
var inst_31804__$1 = f.call(null,inst_31800);
var inst_31805 = cljs.core._EQ_.call(null,inst_31804__$1,inst_31797);
var inst_31806 = cljs.core.keyword_identical_QMARK_.call(null,inst_31797,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31807 = ((inst_31805) || (inst_31806));
var state_31836__$1 = (function (){var statearr_31850 = state_31836;
(statearr_31850[(10)] = inst_31804__$1);

return statearr_31850;
})();
if(cljs.core.truth_(inst_31807)){
var statearr_31851_31874 = state_31836__$1;
(statearr_31851_31874[(1)] = (8));

} else {
var statearr_31852_31875 = state_31836__$1;
(statearr_31852_31875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (14))){
var inst_31829 = (state_31836[(2)]);
var inst_31830 = cljs.core.async.close_BANG_.call(null,out);
var state_31836__$1 = (function (){var statearr_31854 = state_31836;
(statearr_31854[(13)] = inst_31829);

return statearr_31854;
})();
var statearr_31855_31876 = state_31836__$1;
(statearr_31855_31876[(2)] = inst_31830);

(statearr_31855_31876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (10))){
var inst_31819 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31856_31877 = state_31836__$1;
(statearr_31856_31877[(2)] = inst_31819);

(statearr_31856_31877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31837 === (8))){
var inst_31800 = (state_31836[(9)]);
var inst_31804 = (state_31836[(10)]);
var inst_31796 = (state_31836[(8)]);
var inst_31809 = inst_31796.push(inst_31800);
var tmp31853 = inst_31796;
var inst_31796__$1 = tmp31853;
var inst_31797 = inst_31804;
var state_31836__$1 = (function (){var statearr_31857 = state_31836;
(statearr_31857[(7)] = inst_31797);

(statearr_31857[(14)] = inst_31809);

(statearr_31857[(8)] = inst_31796__$1);

return statearr_31857;
})();
var statearr_31858_31878 = state_31836__$1;
(statearr_31858_31878[(2)] = null);

(statearr_31858_31878[(1)] = (2));


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
});})(c__29960__auto___31864,out))
;
return ((function (switch__29865__auto__,c__29960__auto___31864,out){
return (function() {
var cljs$core$async$state_machine__29866__auto__ = null;
var cljs$core$async$state_machine__29866__auto____0 = (function (){
var statearr_31859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31859[(0)] = cljs$core$async$state_machine__29866__auto__);

(statearr_31859[(1)] = (1));

return statearr_31859;
});
var cljs$core$async$state_machine__29866__auto____1 = (function (state_31836){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_31836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e31860){if((e31860 instanceof Object)){
var ex__29869__auto__ = e31860;
var statearr_31861_31879 = state_31836;
(statearr_31861_31879[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31880 = state_31836;
state_31836 = G__31880;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
cljs$core$async$state_machine__29866__auto__ = function(state_31836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29866__auto____1.call(this,state_31836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29866__auto____0;
cljs$core$async$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29866__auto____1;
return cljs$core$async$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___31864,out))
})();
var state__29962__auto__ = (function (){var statearr_31862 = f__29961__auto__.call(null);
(statearr_31862[(6)] = c__29960__auto___31864);

return statearr_31862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___31864,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1560468653270
