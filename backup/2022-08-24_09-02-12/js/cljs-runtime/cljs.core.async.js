goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46891 = arguments.length;
switch (G__46891) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46892 = (function (f,blockable,meta46893){
this.f = f;
this.blockable = blockable;
this.meta46893 = meta46893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46894,meta46893__$1){
var self__ = this;
var _46894__$1 = this;
return (new cljs.core.async.t_cljs$core$async46892(self__.f,self__.blockable,meta46893__$1));
}));

(cljs.core.async.t_cljs$core$async46892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46894){
var self__ = this;
var _46894__$1 = this;
return self__.meta46893;
}));

(cljs.core.async.t_cljs$core$async46892.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46892.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46893","meta46893",-570738785,null)], null);
}));

(cljs.core.async.t_cljs$core$async46892.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46892");

(cljs.core.async.t_cljs$core$async46892.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46892");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46892.
 */
cljs.core.async.__GT_t_cljs$core$async46892 = (function cljs$core$async$__GT_t_cljs$core$async46892(f__$1,blockable__$1,meta46893){
return (new cljs.core.async.t_cljs$core$async46892(f__$1,blockable__$1,meta46893));
});

}

return (new cljs.core.async.t_cljs$core$async46892(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__46976 = arguments.length;
switch (G__46976) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46978 = arguments.length;
switch (G__46978) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__46980 = arguments.length;
switch (G__46980) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49164 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49164) : fn1.call(null,val_49164));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49164) : fn1.call(null,val_49164));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46989 = arguments.length;
switch (G__46989) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___49176 = n;
var x_49177 = (0);
while(true){
if((x_49177 < n__4741__auto___49176)){
(a[x_49177] = x_49177);

var G__49178 = (x_49177 + (1));
x_49177 = G__49178;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46996 = (function (flag,meta46997){
this.flag = flag;
this.meta46997 = meta46997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46998,meta46997__$1){
var self__ = this;
var _46998__$1 = this;
return (new cljs.core.async.t_cljs$core$async46996(self__.flag,meta46997__$1));
}));

(cljs.core.async.t_cljs$core$async46996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46998){
var self__ = this;
var _46998__$1 = this;
return self__.meta46997;
}));

(cljs.core.async.t_cljs$core$async46996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46997","meta46997",160931184,null)], null);
}));

(cljs.core.async.t_cljs$core$async46996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46996");

(cljs.core.async.t_cljs$core$async46996.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46996.
 */
cljs.core.async.__GT_t_cljs$core$async46996 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46996(flag__$1,meta46997){
return (new cljs.core.async.t_cljs$core$async46996(flag__$1,meta46997));
});

}

return (new cljs.core.async.t_cljs$core$async46996(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47002 = (function (flag,cb,meta47003){
this.flag = flag;
this.cb = cb;
this.meta47003 = meta47003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47004,meta47003__$1){
var self__ = this;
var _47004__$1 = this;
return (new cljs.core.async.t_cljs$core$async47002(self__.flag,self__.cb,meta47003__$1));
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47004){
var self__ = this;
var _47004__$1 = this;
return self__.meta47003;
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47003","meta47003",-1209798656,null)], null);
}));

(cljs.core.async.t_cljs$core$async47002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47002");

(cljs.core.async.t_cljs$core$async47002.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47002.
 */
cljs.core.async.__GT_t_cljs$core$async47002 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47002(flag__$1,cb__$1,meta47003){
return (new cljs.core.async.t_cljs$core$async47002(flag__$1,cb__$1,meta47003));
});

}

return (new cljs.core.async.t_cljs$core$async47002(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47015_SHARP_){
var G__47017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47015_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47017) : fret.call(null,G__47017));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47016_SHARP_){
var G__47018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47016_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47018) : fret.call(null,G__47018));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49201 = (i + (1));
i = G__49201;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4870__auto__ = [];
var len__4864__auto___49207 = arguments.length;
var i__4865__auto___49208 = (0);
while(true){
if((i__4865__auto___49208 < len__4864__auto___49207)){
args__4870__auto__.push((arguments[i__4865__auto___49208]));

var G__49209 = (i__4865__auto___49208 + (1));
i__4865__auto___49208 = G__49209;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47026){
var map__47027 = p__47026;
var map__47027__$1 = cljs.core.__destructure_map(map__47027);
var opts = map__47027__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47021){
var G__47022 = cljs.core.first(seq47021);
var seq47021__$1 = cljs.core.next(seq47021);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47022,seq47021__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
return cljs.core.deref(ret);
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
var G__47037 = arguments.length;
switch (G__47037) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46806__auto___49212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47113){
var state_val_47114 = (state_47113[(1)]);
if((state_val_47114 === (7))){
var inst_47108 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
var statearr_47116_49213 = state_47113__$1;
(statearr_47116_49213[(2)] = inst_47108);

(statearr_47116_49213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (1))){
var state_47113__$1 = state_47113;
var statearr_47117_49215 = state_47113__$1;
(statearr_47117_49215[(2)] = null);

(statearr_47117_49215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (4))){
var inst_47067 = (state_47113[(7)]);
var inst_47067__$1 = (state_47113[(2)]);
var inst_47070 = (inst_47067__$1 == null);
var state_47113__$1 = (function (){var statearr_47118 = state_47113;
(statearr_47118[(7)] = inst_47067__$1);

return statearr_47118;
})();
if(cljs.core.truth_(inst_47070)){
var statearr_47120_49216 = state_47113__$1;
(statearr_47120_49216[(1)] = (5));

} else {
var statearr_47121_49217 = state_47113__$1;
(statearr_47121_49217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (13))){
var state_47113__$1 = state_47113;
var statearr_47126_49218 = state_47113__$1;
(statearr_47126_49218[(2)] = null);

(statearr_47126_49218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (6))){
var inst_47067 = (state_47113[(7)]);
var state_47113__$1 = state_47113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47113__$1,(11),to,inst_47067);
} else {
if((state_val_47114 === (3))){
var inst_47110 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47113__$1,inst_47110);
} else {
if((state_val_47114 === (12))){
var state_47113__$1 = state_47113;
var statearr_47143_49224 = state_47113__$1;
(statearr_47143_49224[(2)] = null);

(statearr_47143_49224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (2))){
var state_47113__$1 = state_47113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47113__$1,(4),from);
} else {
if((state_val_47114 === (11))){
var inst_47089 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
if(cljs.core.truth_(inst_47089)){
var statearr_47145_49225 = state_47113__$1;
(statearr_47145_49225[(1)] = (12));

} else {
var statearr_47146_49226 = state_47113__$1;
(statearr_47146_49226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (9))){
var state_47113__$1 = state_47113;
var statearr_47147_49227 = state_47113__$1;
(statearr_47147_49227[(2)] = null);

(statearr_47147_49227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (5))){
var state_47113__$1 = state_47113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47148_49228 = state_47113__$1;
(statearr_47148_49228[(1)] = (8));

} else {
var statearr_47149_49229 = state_47113__$1;
(statearr_47149_49229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (14))){
var inst_47106 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
var statearr_47150_49230 = state_47113__$1;
(statearr_47150_49230[(2)] = inst_47106);

(statearr_47150_49230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (10))){
var inst_47082 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
var statearr_47151_49231 = state_47113__$1;
(statearr_47151_49231[(2)] = inst_47082);

(statearr_47151_49231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (8))){
var inst_47075 = cljs.core.async.close_BANG_(to);
var state_47113__$1 = state_47113;
var statearr_47152_49232 = state_47113__$1;
(statearr_47152_49232[(2)] = inst_47075);

(statearr_47152_49232[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_47154 = [null,null,null,null,null,null,null,null];
(statearr_47154[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_47154[(1)] = (1));

return statearr_47154;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_47113){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47113);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47155){var ex__46458__auto__ = e47155;
var statearr_47156_49233 = state_47113;
(statearr_47156_49233[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47113[(4)]))){
var statearr_47157_49234 = state_47113;
(statearr_47157_49234[(1)] = cljs.core.first((state_47113[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49235 = state_47113;
state_47113 = G__49235;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_47113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_47113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47158 = f__46807__auto__();
(statearr_47158[(6)] = c__46806__auto___49212);

return statearr_47158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47160){
var vec__47161 = p__47160;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47161,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47161,(1),null);
var job = vec__47161;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46806__auto___49240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47169){
var state_val_47170 = (state_47169[(1)]);
if((state_val_47170 === (1))){
var state_47169__$1 = state_47169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47169__$1,(2),res,v);
} else {
if((state_val_47170 === (2))){
var inst_47166 = (state_47169[(2)]);
var inst_47167 = cljs.core.async.close_BANG_(res);
var state_47169__$1 = (function (){var statearr_47171 = state_47169;
(statearr_47171[(7)] = inst_47166);

return statearr_47171;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47169__$1,inst_47167);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47172 = [null,null,null,null,null,null,null,null];
(statearr_47172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47172[(1)] = (1));

return statearr_47172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47169){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47169);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47174){var ex__46458__auto__ = e47174;
var statearr_47175_49241 = state_47169;
(statearr_47175_49241[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47169[(4)]))){
var statearr_47176_49242 = state_47169;
(statearr_47176_49242[(1)] = cljs.core.first((state_47169[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49243 = state_47169;
state_47169 = G__49243;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47177 = f__46807__auto__();
(statearr_47177[(6)] = c__46806__auto___49240);

return statearr_47177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47178){
var vec__47179 = p__47178;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47179,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47179,(1),null);
var job = vec__47179;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___49256 = n;
var __49257 = (0);
while(true){
if((__49257 < n__4741__auto___49256)){
var G__47182_49258 = type;
var G__47182_49259__$1 = (((G__47182_49258 instanceof cljs.core.Keyword))?G__47182_49258.fqn:null);
switch (G__47182_49259__$1) {
case "compute":
var c__46806__auto___49261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49257,c__46806__auto___49261,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async){
return (function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = ((function (__49257,c__46806__auto___49261,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async){
return (function (state_47196){
var state_val_47197 = (state_47196[(1)]);
if((state_val_47197 === (1))){
var state_47196__$1 = state_47196;
var statearr_47198_49262 = state_47196__$1;
(statearr_47198_49262[(2)] = null);

(statearr_47198_49262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (2))){
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47196__$1,(4),jobs);
} else {
if((state_val_47197 === (3))){
var inst_47194 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47196__$1,inst_47194);
} else {
if((state_val_47197 === (4))){
var inst_47186 = (state_47196[(2)]);
var inst_47187 = process(inst_47186);
var state_47196__$1 = state_47196;
if(cljs.core.truth_(inst_47187)){
var statearr_47200_49263 = state_47196__$1;
(statearr_47200_49263[(1)] = (5));

} else {
var statearr_47201_49264 = state_47196__$1;
(statearr_47201_49264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (5))){
var state_47196__$1 = state_47196;
var statearr_47202_49265 = state_47196__$1;
(statearr_47202_49265[(2)] = null);

(statearr_47202_49265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (6))){
var state_47196__$1 = state_47196;
var statearr_47203_49266 = state_47196__$1;
(statearr_47203_49266[(2)] = null);

(statearr_47203_49266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (7))){
var inst_47192 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47204_49267 = state_47196__$1;
(statearr_47204_49267[(2)] = inst_47192);

(statearr_47204_49267[(1)] = (3));


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
});})(__49257,c__46806__auto___49261,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async))
;
return ((function (__49257,switch__46454__auto__,c__46806__auto___49261,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47205 = [null,null,null,null,null,null,null];
(statearr_47205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47205[(1)] = (1));

return statearr_47205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47196){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47196);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47206){var ex__46458__auto__ = e47206;
var statearr_47207_49268 = state_47196;
(statearr_47207_49268[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47196[(4)]))){
var statearr_47208_49269 = state_47196;
(statearr_47208_49269[(1)] = cljs.core.first((state_47196[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49273 = state_47196;
state_47196 = G__49273;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
;})(__49257,switch__46454__auto__,c__46806__auto___49261,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async))
})();
var state__46808__auto__ = (function (){var statearr_47210 = f__46807__auto__();
(statearr_47210[(6)] = c__46806__auto___49261);

return statearr_47210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
});})(__49257,c__46806__auto___49261,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async))
);


break;
case "async":
var c__46806__auto___49274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49257,c__46806__auto___49274,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async){
return (function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = ((function (__49257,c__46806__auto___49274,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async){
return (function (state_47223){
var state_val_47224 = (state_47223[(1)]);
if((state_val_47224 === (1))){
var state_47223__$1 = state_47223;
var statearr_47225_49275 = state_47223__$1;
(statearr_47225_49275[(2)] = null);

(statearr_47225_49275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (2))){
var state_47223__$1 = state_47223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47223__$1,(4),jobs);
} else {
if((state_val_47224 === (3))){
var inst_47221 = (state_47223[(2)]);
var state_47223__$1 = state_47223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47223__$1,inst_47221);
} else {
if((state_val_47224 === (4))){
var inst_47213 = (state_47223[(2)]);
var inst_47214 = async(inst_47213);
var state_47223__$1 = state_47223;
if(cljs.core.truth_(inst_47214)){
var statearr_47227_49276 = state_47223__$1;
(statearr_47227_49276[(1)] = (5));

} else {
var statearr_47228_49277 = state_47223__$1;
(statearr_47228_49277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (5))){
var state_47223__$1 = state_47223;
var statearr_47229_49278 = state_47223__$1;
(statearr_47229_49278[(2)] = null);

(statearr_47229_49278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (6))){
var state_47223__$1 = state_47223;
var statearr_47230_49279 = state_47223__$1;
(statearr_47230_49279[(2)] = null);

(statearr_47230_49279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47224 === (7))){
var inst_47219 = (state_47223[(2)]);
var state_47223__$1 = state_47223;
var statearr_47231_49280 = state_47223__$1;
(statearr_47231_49280[(2)] = inst_47219);

(statearr_47231_49280[(1)] = (3));


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
});})(__49257,c__46806__auto___49274,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async))
;
return ((function (__49257,switch__46454__auto__,c__46806__auto___49274,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47233 = [null,null,null,null,null,null,null];
(statearr_47233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47233[(1)] = (1));

return statearr_47233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47223){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47223);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47234){var ex__46458__auto__ = e47234;
var statearr_47235_49281 = state_47223;
(statearr_47235_49281[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47223[(4)]))){
var statearr_47236_49282 = state_47223;
(statearr_47236_49282[(1)] = cljs.core.first((state_47223[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49283 = state_47223;
state_47223 = G__49283;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
;})(__49257,switch__46454__auto__,c__46806__auto___49274,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async))
})();
var state__46808__auto__ = (function (){var statearr_47237 = f__46807__auto__();
(statearr_47237[(6)] = c__46806__auto___49274);

return statearr_47237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
});})(__49257,c__46806__auto___49274,G__47182_49258,G__47182_49259__$1,n__4741__auto___49256,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47182_49259__$1)].join('')));

}

var G__49284 = (__49257 + (1));
__49257 = G__49284;
continue;
} else {
}
break;
}

var c__46806__auto___49285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47260){
var state_val_47261 = (state_47260[(1)]);
if((state_val_47261 === (7))){
var inst_47256 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
var statearr_47263_49286 = state_47260__$1;
(statearr_47263_49286[(2)] = inst_47256);

(statearr_47263_49286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (1))){
var state_47260__$1 = state_47260;
var statearr_47264_49288 = state_47260__$1;
(statearr_47264_49288[(2)] = null);

(statearr_47264_49288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (4))){
var inst_47240 = (state_47260[(7)]);
var inst_47240__$1 = (state_47260[(2)]);
var inst_47242 = (inst_47240__$1 == null);
var state_47260__$1 = (function (){var statearr_47265 = state_47260;
(statearr_47265[(7)] = inst_47240__$1);

return statearr_47265;
})();
if(cljs.core.truth_(inst_47242)){
var statearr_47266_49289 = state_47260__$1;
(statearr_47266_49289[(1)] = (5));

} else {
var statearr_47267_49290 = state_47260__$1;
(statearr_47267_49290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (6))){
var inst_47246 = (state_47260[(8)]);
var inst_47240 = (state_47260[(7)]);
var inst_47246__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47248 = [inst_47240,inst_47246__$1];
var inst_47249 = (new cljs.core.PersistentVector(null,2,(5),inst_47247,inst_47248,null));
var state_47260__$1 = (function (){var statearr_47268 = state_47260;
(statearr_47268[(8)] = inst_47246__$1);

return statearr_47268;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47260__$1,(8),jobs,inst_47249);
} else {
if((state_val_47261 === (3))){
var inst_47258 = (state_47260[(2)]);
var state_47260__$1 = state_47260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47260__$1,inst_47258);
} else {
if((state_val_47261 === (2))){
var state_47260__$1 = state_47260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47260__$1,(4),from);
} else {
if((state_val_47261 === (9))){
var inst_47253 = (state_47260[(2)]);
var state_47260__$1 = (function (){var statearr_47270 = state_47260;
(statearr_47270[(9)] = inst_47253);

return statearr_47270;
})();
var statearr_47271_49291 = state_47260__$1;
(statearr_47271_49291[(2)] = null);

(statearr_47271_49291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (5))){
var inst_47244 = cljs.core.async.close_BANG_(jobs);
var state_47260__$1 = state_47260;
var statearr_47272_49292 = state_47260__$1;
(statearr_47272_49292[(2)] = inst_47244);

(statearr_47272_49292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47261 === (8))){
var inst_47246 = (state_47260[(8)]);
var inst_47251 = (state_47260[(2)]);
var state_47260__$1 = (function (){var statearr_47273 = state_47260;
(statearr_47273[(10)] = inst_47251);

return statearr_47273;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47260__$1,(9),results,inst_47246);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47274[(1)] = (1));

return statearr_47274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47260){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47260);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47276){var ex__46458__auto__ = e47276;
var statearr_47277_49295 = state_47260;
(statearr_47277_49295[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47260[(4)]))){
var statearr_47278_49296 = state_47260;
(statearr_47278_49296[(1)] = cljs.core.first((state_47260[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49297 = state_47260;
state_47260 = G__49297;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47279 = f__46807__auto__();
(statearr_47279[(6)] = c__46806__auto___49285);

return statearr_47279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


var c__46806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47318){
var state_val_47319 = (state_47318[(1)]);
if((state_val_47319 === (7))){
var inst_47314 = (state_47318[(2)]);
var state_47318__$1 = state_47318;
var statearr_47320_49298 = state_47318__$1;
(statearr_47320_49298[(2)] = inst_47314);

(statearr_47320_49298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (20))){
var state_47318__$1 = state_47318;
var statearr_47321_49299 = state_47318__$1;
(statearr_47321_49299[(2)] = null);

(statearr_47321_49299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (1))){
var state_47318__$1 = state_47318;
var statearr_47322_49300 = state_47318__$1;
(statearr_47322_49300[(2)] = null);

(statearr_47322_49300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (4))){
var inst_47282 = (state_47318[(7)]);
var inst_47282__$1 = (state_47318[(2)]);
var inst_47283 = (inst_47282__$1 == null);
var state_47318__$1 = (function (){var statearr_47323 = state_47318;
(statearr_47323[(7)] = inst_47282__$1);

return statearr_47323;
})();
if(cljs.core.truth_(inst_47283)){
var statearr_47324_49302 = state_47318__$1;
(statearr_47324_49302[(1)] = (5));

} else {
var statearr_47325_49303 = state_47318__$1;
(statearr_47325_49303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (15))){
var inst_47295 = (state_47318[(8)]);
var state_47318__$1 = state_47318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47318__$1,(18),to,inst_47295);
} else {
if((state_val_47319 === (21))){
var inst_47309 = (state_47318[(2)]);
var state_47318__$1 = state_47318;
var statearr_47326_49305 = state_47318__$1;
(statearr_47326_49305[(2)] = inst_47309);

(statearr_47326_49305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (13))){
var inst_47311 = (state_47318[(2)]);
var state_47318__$1 = (function (){var statearr_47327 = state_47318;
(statearr_47327[(9)] = inst_47311);

return statearr_47327;
})();
var statearr_47328_49306 = state_47318__$1;
(statearr_47328_49306[(2)] = null);

(statearr_47328_49306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (6))){
var inst_47282 = (state_47318[(7)]);
var state_47318__$1 = state_47318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47318__$1,(11),inst_47282);
} else {
if((state_val_47319 === (17))){
var inst_47303 = (state_47318[(2)]);
var state_47318__$1 = state_47318;
if(cljs.core.truth_(inst_47303)){
var statearr_47329_49307 = state_47318__$1;
(statearr_47329_49307[(1)] = (19));

} else {
var statearr_47330_49308 = state_47318__$1;
(statearr_47330_49308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (3))){
var inst_47316 = (state_47318[(2)]);
var state_47318__$1 = state_47318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47318__$1,inst_47316);
} else {
if((state_val_47319 === (12))){
var inst_47292 = (state_47318[(10)]);
var state_47318__$1 = state_47318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47318__$1,(14),inst_47292);
} else {
if((state_val_47319 === (2))){
var state_47318__$1 = state_47318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47318__$1,(4),results);
} else {
if((state_val_47319 === (19))){
var state_47318__$1 = state_47318;
var statearr_47332_49309 = state_47318__$1;
(statearr_47332_49309[(2)] = null);

(statearr_47332_49309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (11))){
var inst_47292 = (state_47318[(2)]);
var state_47318__$1 = (function (){var statearr_47333 = state_47318;
(statearr_47333[(10)] = inst_47292);

return statearr_47333;
})();
var statearr_47334_49311 = state_47318__$1;
(statearr_47334_49311[(2)] = null);

(statearr_47334_49311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (9))){
var state_47318__$1 = state_47318;
var statearr_47335_49313 = state_47318__$1;
(statearr_47335_49313[(2)] = null);

(statearr_47335_49313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (5))){
var state_47318__$1 = state_47318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47336_49314 = state_47318__$1;
(statearr_47336_49314[(1)] = (8));

} else {
var statearr_47337_49315 = state_47318__$1;
(statearr_47337_49315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (14))){
var inst_47295 = (state_47318[(8)]);
var inst_47297 = (state_47318[(11)]);
var inst_47295__$1 = (state_47318[(2)]);
var inst_47296 = (inst_47295__$1 == null);
var inst_47297__$1 = cljs.core.not(inst_47296);
var state_47318__$1 = (function (){var statearr_47338 = state_47318;
(statearr_47338[(8)] = inst_47295__$1);

(statearr_47338[(11)] = inst_47297__$1);

return statearr_47338;
})();
if(inst_47297__$1){
var statearr_47339_49317 = state_47318__$1;
(statearr_47339_49317[(1)] = (15));

} else {
var statearr_47340_49318 = state_47318__$1;
(statearr_47340_49318[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (16))){
var inst_47297 = (state_47318[(11)]);
var state_47318__$1 = state_47318;
var statearr_47341_49319 = state_47318__$1;
(statearr_47341_49319[(2)] = inst_47297);

(statearr_47341_49319[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (10))){
var inst_47289 = (state_47318[(2)]);
var state_47318__$1 = state_47318;
var statearr_47342_49320 = state_47318__$1;
(statearr_47342_49320[(2)] = inst_47289);

(statearr_47342_49320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (18))){
var inst_47300 = (state_47318[(2)]);
var state_47318__$1 = state_47318;
var statearr_47343_49321 = state_47318__$1;
(statearr_47343_49321[(2)] = inst_47300);

(statearr_47343_49321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47319 === (8))){
var inst_47286 = cljs.core.async.close_BANG_(to);
var state_47318__$1 = state_47318;
var statearr_47344_49322 = state_47318__$1;
(statearr_47344_49322[(2)] = inst_47286);

(statearr_47344_49322[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47345[(1)] = (1));

return statearr_47345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47318){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47318);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47347){var ex__46458__auto__ = e47347;
var statearr_47348_49328 = state_47318;
(statearr_47348_49328[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47318[(4)]))){
var statearr_47349_49329 = state_47318;
(statearr_47349_49329[(1)] = cljs.core.first((state_47318[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49330 = state_47318;
state_47318 = G__49330;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47318){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47350 = f__46807__auto__();
(statearr_47350[(6)] = c__46806__auto__);

return statearr_47350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));

return c__46806__auto__;
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
var G__47352 = arguments.length;
switch (G__47352) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__47354 = arguments.length;
switch (G__47354) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__47357 = arguments.length;
switch (G__47357) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46806__auto___49348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47384){
var state_val_47385 = (state_47384[(1)]);
if((state_val_47385 === (7))){
var inst_47380 = (state_47384[(2)]);
var state_47384__$1 = state_47384;
var statearr_47386_49349 = state_47384__$1;
(statearr_47386_49349[(2)] = inst_47380);

(statearr_47386_49349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (1))){
var state_47384__$1 = state_47384;
var statearr_47387_49350 = state_47384__$1;
(statearr_47387_49350[(2)] = null);

(statearr_47387_49350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (4))){
var inst_47360 = (state_47384[(7)]);
var inst_47360__$1 = (state_47384[(2)]);
var inst_47361 = (inst_47360__$1 == null);
var state_47384__$1 = (function (){var statearr_47388 = state_47384;
(statearr_47388[(7)] = inst_47360__$1);

return statearr_47388;
})();
if(cljs.core.truth_(inst_47361)){
var statearr_47389_49351 = state_47384__$1;
(statearr_47389_49351[(1)] = (5));

} else {
var statearr_47391_49352 = state_47384__$1;
(statearr_47391_49352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (13))){
var state_47384__$1 = state_47384;
var statearr_47392_49353 = state_47384__$1;
(statearr_47392_49353[(2)] = null);

(statearr_47392_49353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (6))){
var inst_47360 = (state_47384[(7)]);
var inst_47367 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47360) : p.call(null,inst_47360));
var state_47384__$1 = state_47384;
if(cljs.core.truth_(inst_47367)){
var statearr_47393_49354 = state_47384__$1;
(statearr_47393_49354[(1)] = (9));

} else {
var statearr_47394_49356 = state_47384__$1;
(statearr_47394_49356[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (3))){
var inst_47382 = (state_47384[(2)]);
var state_47384__$1 = state_47384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47384__$1,inst_47382);
} else {
if((state_val_47385 === (12))){
var state_47384__$1 = state_47384;
var statearr_47395_49358 = state_47384__$1;
(statearr_47395_49358[(2)] = null);

(statearr_47395_49358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (2))){
var state_47384__$1 = state_47384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47384__$1,(4),ch);
} else {
if((state_val_47385 === (11))){
var inst_47360 = (state_47384[(7)]);
var inst_47371 = (state_47384[(2)]);
var state_47384__$1 = state_47384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47384__$1,(8),inst_47371,inst_47360);
} else {
if((state_val_47385 === (9))){
var state_47384__$1 = state_47384;
var statearr_47396_49361 = state_47384__$1;
(statearr_47396_49361[(2)] = tc);

(statearr_47396_49361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (5))){
var inst_47363 = cljs.core.async.close_BANG_(tc);
var inst_47365 = cljs.core.async.close_BANG_(fc);
var state_47384__$1 = (function (){var statearr_47397 = state_47384;
(statearr_47397[(8)] = inst_47363);

return statearr_47397;
})();
var statearr_47399_49362 = state_47384__$1;
(statearr_47399_49362[(2)] = inst_47365);

(statearr_47399_49362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (14))){
var inst_47378 = (state_47384[(2)]);
var state_47384__$1 = state_47384;
var statearr_47400_49363 = state_47384__$1;
(statearr_47400_49363[(2)] = inst_47378);

(statearr_47400_49363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (10))){
var state_47384__$1 = state_47384;
var statearr_47401_49364 = state_47384__$1;
(statearr_47401_49364[(2)] = fc);

(statearr_47401_49364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (8))){
var inst_47373 = (state_47384[(2)]);
var state_47384__$1 = state_47384;
if(cljs.core.truth_(inst_47373)){
var statearr_47402_49365 = state_47384__$1;
(statearr_47402_49365[(1)] = (12));

} else {
var statearr_47403_49366 = state_47384__$1;
(statearr_47403_49366[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_47404 = [null,null,null,null,null,null,null,null,null];
(statearr_47404[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_47404[(1)] = (1));

return statearr_47404;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_47384){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47384);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47405){var ex__46458__auto__ = e47405;
var statearr_47406_49368 = state_47384;
(statearr_47406_49368[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47384[(4)]))){
var statearr_47407_49369 = state_47384;
(statearr_47407_49369[(1)] = cljs.core.first((state_47384[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49370 = state_47384;
state_47384 = G__49370;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_47384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_47384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47409 = f__46807__auto__();
(statearr_47409[(6)] = c__46806__auto___49348);

return statearr_47409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47432){
var state_val_47433 = (state_47432[(1)]);
if((state_val_47433 === (7))){
var inst_47428 = (state_47432[(2)]);
var state_47432__$1 = state_47432;
var statearr_47434_49371 = state_47432__$1;
(statearr_47434_49371[(2)] = inst_47428);

(statearr_47434_49371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (1))){
var inst_47410 = init;
var inst_47411 = inst_47410;
var state_47432__$1 = (function (){var statearr_47435 = state_47432;
(statearr_47435[(7)] = inst_47411);

return statearr_47435;
})();
var statearr_47436_49372 = state_47432__$1;
(statearr_47436_49372[(2)] = null);

(statearr_47436_49372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (4))){
var inst_47415 = (state_47432[(8)]);
var inst_47415__$1 = (state_47432[(2)]);
var inst_47416 = (inst_47415__$1 == null);
var state_47432__$1 = (function (){var statearr_47438 = state_47432;
(statearr_47438[(8)] = inst_47415__$1);

return statearr_47438;
})();
if(cljs.core.truth_(inst_47416)){
var statearr_47439_49373 = state_47432__$1;
(statearr_47439_49373[(1)] = (5));

} else {
var statearr_47440_49374 = state_47432__$1;
(statearr_47440_49374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (6))){
var inst_47411 = (state_47432[(7)]);
var inst_47419 = (state_47432[(9)]);
var inst_47415 = (state_47432[(8)]);
var inst_47419__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47411,inst_47415) : f.call(null,inst_47411,inst_47415));
var inst_47420 = cljs.core.reduced_QMARK_(inst_47419__$1);
var state_47432__$1 = (function (){var statearr_47441 = state_47432;
(statearr_47441[(9)] = inst_47419__$1);

return statearr_47441;
})();
if(inst_47420){
var statearr_47442_49379 = state_47432__$1;
(statearr_47442_49379[(1)] = (8));

} else {
var statearr_47443_49380 = state_47432__$1;
(statearr_47443_49380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (3))){
var inst_47430 = (state_47432[(2)]);
var state_47432__$1 = state_47432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47432__$1,inst_47430);
} else {
if((state_val_47433 === (2))){
var state_47432__$1 = state_47432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47432__$1,(4),ch);
} else {
if((state_val_47433 === (9))){
var inst_47419 = (state_47432[(9)]);
var inst_47411 = inst_47419;
var state_47432__$1 = (function (){var statearr_47444 = state_47432;
(statearr_47444[(7)] = inst_47411);

return statearr_47444;
})();
var statearr_47445_49381 = state_47432__$1;
(statearr_47445_49381[(2)] = null);

(statearr_47445_49381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (5))){
var inst_47411 = (state_47432[(7)]);
var state_47432__$1 = state_47432;
var statearr_47446_49382 = state_47432__$1;
(statearr_47446_49382[(2)] = inst_47411);

(statearr_47446_49382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (10))){
var inst_47426 = (state_47432[(2)]);
var state_47432__$1 = state_47432;
var statearr_47447_49383 = state_47432__$1;
(statearr_47447_49383[(2)] = inst_47426);

(statearr_47447_49383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (8))){
var inst_47419 = (state_47432[(9)]);
var inst_47422 = cljs.core.deref(inst_47419);
var state_47432__$1 = state_47432;
var statearr_47448_49384 = state_47432__$1;
(statearr_47448_49384[(2)] = inst_47422);

(statearr_47448_49384[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46455__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46455__auto____0 = (function (){
var statearr_47450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47450[(0)] = cljs$core$async$reduce_$_state_machine__46455__auto__);

(statearr_47450[(1)] = (1));

return statearr_47450;
});
var cljs$core$async$reduce_$_state_machine__46455__auto____1 = (function (state_47432){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47432);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47451){var ex__46458__auto__ = e47451;
var statearr_47452_49385 = state_47432;
(statearr_47452_49385[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47432[(4)]))){
var statearr_47453_49386 = state_47432;
(statearr_47453_49386[(1)] = cljs.core.first((state_47432[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49387 = state_47432;
state_47432 = G__49387;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46455__auto__ = function(state_47432){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46455__auto____1.call(this,state_47432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46455__auto____0;
cljs$core$async$reduce_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46455__auto____1;
return cljs$core$async$reduce_$_state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47454 = f__46807__auto__();
(statearr_47454[(6)] = c__46806__auto__);

return statearr_47454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));

return c__46806__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47461){
var state_val_47462 = (state_47461[(1)]);
if((state_val_47462 === (1))){
var inst_47456 = cljs.core.async.reduce(f__$1,init,ch);
var state_47461__$1 = state_47461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47461__$1,(2),inst_47456);
} else {
if((state_val_47462 === (2))){
var inst_47458 = (state_47461[(2)]);
var inst_47459 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47458) : f__$1.call(null,inst_47458));
var state_47461__$1 = state_47461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47461__$1,inst_47459);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46455__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46455__auto____0 = (function (){
var statearr_47464 = [null,null,null,null,null,null,null];
(statearr_47464[(0)] = cljs$core$async$transduce_$_state_machine__46455__auto__);

(statearr_47464[(1)] = (1));

return statearr_47464;
});
var cljs$core$async$transduce_$_state_machine__46455__auto____1 = (function (state_47461){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47461);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47465){var ex__46458__auto__ = e47465;
var statearr_47466_49388 = state_47461;
(statearr_47466_49388[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47461[(4)]))){
var statearr_47467_49389 = state_47461;
(statearr_47467_49389[(1)] = cljs.core.first((state_47461[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49391 = state_47461;
state_47461 = G__49391;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46455__auto__ = function(state_47461){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46455__auto____1.call(this,state_47461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46455__auto____0;
cljs$core$async$transduce_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46455__auto____1;
return cljs$core$async$transduce_$_state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47468 = f__46807__auto__();
(statearr_47468[(6)] = c__46806__auto__);

return statearr_47468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));

return c__46806__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47471 = arguments.length;
switch (G__47471) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47497){
var state_val_47498 = (state_47497[(1)]);
if((state_val_47498 === (7))){
var inst_47479 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
var statearr_47500_49394 = state_47497__$1;
(statearr_47500_49394[(2)] = inst_47479);

(statearr_47500_49394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (1))){
var inst_47473 = cljs.core.seq(coll);
var inst_47474 = inst_47473;
var state_47497__$1 = (function (){var statearr_47501 = state_47497;
(statearr_47501[(7)] = inst_47474);

return statearr_47501;
})();
var statearr_47502_49395 = state_47497__$1;
(statearr_47502_49395[(2)] = null);

(statearr_47502_49395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (4))){
var inst_47474 = (state_47497[(7)]);
var inst_47477 = cljs.core.first(inst_47474);
var state_47497__$1 = state_47497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47497__$1,(7),ch,inst_47477);
} else {
if((state_val_47498 === (13))){
var inst_47491 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
var statearr_47503_49396 = state_47497__$1;
(statearr_47503_49396[(2)] = inst_47491);

(statearr_47503_49396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (6))){
var inst_47482 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
if(cljs.core.truth_(inst_47482)){
var statearr_47504_49397 = state_47497__$1;
(statearr_47504_49397[(1)] = (8));

} else {
var statearr_47505_49398 = state_47497__$1;
(statearr_47505_49398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (3))){
var inst_47495 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47497__$1,inst_47495);
} else {
if((state_val_47498 === (12))){
var state_47497__$1 = state_47497;
var statearr_47507_49399 = state_47497__$1;
(statearr_47507_49399[(2)] = null);

(statearr_47507_49399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (2))){
var inst_47474 = (state_47497[(7)]);
var state_47497__$1 = state_47497;
if(cljs.core.truth_(inst_47474)){
var statearr_47508_49400 = state_47497__$1;
(statearr_47508_49400[(1)] = (4));

} else {
var statearr_47509_49401 = state_47497__$1;
(statearr_47509_49401[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (11))){
var inst_47488 = cljs.core.async.close_BANG_(ch);
var state_47497__$1 = state_47497;
var statearr_47510_49402 = state_47497__$1;
(statearr_47510_49402[(2)] = inst_47488);

(statearr_47510_49402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (9))){
var state_47497__$1 = state_47497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47511_49407 = state_47497__$1;
(statearr_47511_49407[(1)] = (11));

} else {
var statearr_47512_49408 = state_47497__$1;
(statearr_47512_49408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (5))){
var inst_47474 = (state_47497[(7)]);
var state_47497__$1 = state_47497;
var statearr_47513_49412 = state_47497__$1;
(statearr_47513_49412[(2)] = inst_47474);

(statearr_47513_49412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (10))){
var inst_47493 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
var statearr_47514_49413 = state_47497__$1;
(statearr_47514_49413[(2)] = inst_47493);

(statearr_47514_49413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (8))){
var inst_47474 = (state_47497[(7)]);
var inst_47484 = cljs.core.next(inst_47474);
var inst_47474__$1 = inst_47484;
var state_47497__$1 = (function (){var statearr_47516 = state_47497;
(statearr_47516[(7)] = inst_47474__$1);

return statearr_47516;
})();
var statearr_47517_49414 = state_47497__$1;
(statearr_47517_49414[(2)] = null);

(statearr_47517_49414[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_47518 = [null,null,null,null,null,null,null,null];
(statearr_47518[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_47518[(1)] = (1));

return statearr_47518;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_47497){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47497);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47519){var ex__46458__auto__ = e47519;
var statearr_47520_49418 = state_47497;
(statearr_47520_49418[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47497[(4)]))){
var statearr_47521_49419 = state_47497;
(statearr_47521_49419[(1)] = cljs.core.first((state_47497[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49423 = state_47497;
state_47497 = G__49423;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_47497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_47497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47523 = f__46807__auto__();
(statearr_47523[(6)] = c__46806__auto__);

return statearr_47523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));

return c__46806__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47526 = arguments.length;
switch (G__47526) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_49428 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49428(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49436 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49436(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49437 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49437(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49441 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49441(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47533 = (function (ch,cs,meta47534){
this.ch = ch;
this.cs = cs;
this.meta47534 = meta47534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47535,meta47534__$1){
var self__ = this;
var _47535__$1 = this;
return (new cljs.core.async.t_cljs$core$async47533(self__.ch,self__.cs,meta47534__$1));
}));

(cljs.core.async.t_cljs$core$async47533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47535){
var self__ = this;
var _47535__$1 = this;
return self__.meta47534;
}));

(cljs.core.async.t_cljs$core$async47533.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47533.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47533.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47533.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47533.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47534","meta47534",-587037784,null)], null);
}));

(cljs.core.async.t_cljs$core$async47533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47533");

(cljs.core.async.t_cljs$core$async47533.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47533.
 */
cljs.core.async.__GT_t_cljs$core$async47533 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47533(ch__$1,cs__$1,meta47534){
return (new cljs.core.async.t_cljs$core$async47533(ch__$1,cs__$1,meta47534));
});

}

return (new cljs.core.async.t_cljs$core$async47533(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46806__auto___49453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_47673){
var state_val_47674 = (state_47673[(1)]);
if((state_val_47674 === (7))){
var inst_47666 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47681_49454 = state_47673__$1;
(statearr_47681_49454[(2)] = inst_47666);

(statearr_47681_49454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (20))){
var inst_47571 = (state_47673[(7)]);
var inst_47583 = cljs.core.first(inst_47571);
var inst_47584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47583,(0),null);
var inst_47585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47583,(1),null);
var state_47673__$1 = (function (){var statearr_47682 = state_47673;
(statearr_47682[(8)] = inst_47584);

return statearr_47682;
})();
if(cljs.core.truth_(inst_47585)){
var statearr_47683_49458 = state_47673__$1;
(statearr_47683_49458[(1)] = (22));

} else {
var statearr_47684_49459 = state_47673__$1;
(statearr_47684_49459[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (27))){
var inst_47538 = (state_47673[(9)]);
var inst_47620 = (state_47673[(10)]);
var inst_47613 = (state_47673[(11)]);
var inst_47615 = (state_47673[(12)]);
var inst_47620__$1 = cljs.core._nth(inst_47613,inst_47615);
var inst_47621 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47620__$1,inst_47538,done);
var state_47673__$1 = (function (){var statearr_47686 = state_47673;
(statearr_47686[(10)] = inst_47620__$1);

return statearr_47686;
})();
if(cljs.core.truth_(inst_47621)){
var statearr_47687_49460 = state_47673__$1;
(statearr_47687_49460[(1)] = (30));

} else {
var statearr_47689_49461 = state_47673__$1;
(statearr_47689_49461[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (1))){
var state_47673__$1 = state_47673;
var statearr_47692_49462 = state_47673__$1;
(statearr_47692_49462[(2)] = null);

(statearr_47692_49462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (24))){
var inst_47571 = (state_47673[(7)]);
var inst_47590 = (state_47673[(2)]);
var inst_47591 = cljs.core.next(inst_47571);
var inst_47548 = inst_47591;
var inst_47549 = null;
var inst_47550 = (0);
var inst_47552 = (0);
var state_47673__$1 = (function (){var statearr_47694 = state_47673;
(statearr_47694[(13)] = inst_47548);

(statearr_47694[(14)] = inst_47552);

(statearr_47694[(15)] = inst_47549);

(statearr_47694[(16)] = inst_47590);

(statearr_47694[(17)] = inst_47550);

return statearr_47694;
})();
var statearr_47695_49463 = state_47673__$1;
(statearr_47695_49463[(2)] = null);

(statearr_47695_49463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (39))){
var state_47673__$1 = state_47673;
var statearr_47706_49464 = state_47673__$1;
(statearr_47706_49464[(2)] = null);

(statearr_47706_49464[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (4))){
var inst_47538 = (state_47673[(9)]);
var inst_47538__$1 = (state_47673[(2)]);
var inst_47539 = (inst_47538__$1 == null);
var state_47673__$1 = (function (){var statearr_47708 = state_47673;
(statearr_47708[(9)] = inst_47538__$1);

return statearr_47708;
})();
if(cljs.core.truth_(inst_47539)){
var statearr_47711_49465 = state_47673__$1;
(statearr_47711_49465[(1)] = (5));

} else {
var statearr_47713_49466 = state_47673__$1;
(statearr_47713_49466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (15))){
var inst_47548 = (state_47673[(13)]);
var inst_47552 = (state_47673[(14)]);
var inst_47549 = (state_47673[(15)]);
var inst_47550 = (state_47673[(17)]);
var inst_47567 = (state_47673[(2)]);
var inst_47568 = (inst_47552 + (1));
var tmp47699 = inst_47548;
var tmp47700 = inst_47549;
var tmp47701 = inst_47550;
var inst_47548__$1 = tmp47699;
var inst_47549__$1 = tmp47700;
var inst_47550__$1 = tmp47701;
var inst_47552__$1 = inst_47568;
var state_47673__$1 = (function (){var statearr_47715 = state_47673;
(statearr_47715[(13)] = inst_47548__$1);

(statearr_47715[(14)] = inst_47552__$1);

(statearr_47715[(15)] = inst_47549__$1);

(statearr_47715[(18)] = inst_47567);

(statearr_47715[(17)] = inst_47550__$1);

return statearr_47715;
})();
var statearr_47718_49467 = state_47673__$1;
(statearr_47718_49467[(2)] = null);

(statearr_47718_49467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (21))){
var inst_47594 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47723_49468 = state_47673__$1;
(statearr_47723_49468[(2)] = inst_47594);

(statearr_47723_49468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (31))){
var inst_47620 = (state_47673[(10)]);
var inst_47624 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47620);
var state_47673__$1 = state_47673;
var statearr_47727_49469 = state_47673__$1;
(statearr_47727_49469[(2)] = inst_47624);

(statearr_47727_49469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (32))){
var inst_47612 = (state_47673[(19)]);
var inst_47614 = (state_47673[(20)]);
var inst_47613 = (state_47673[(11)]);
var inst_47615 = (state_47673[(12)]);
var inst_47626 = (state_47673[(2)]);
var inst_47627 = (inst_47615 + (1));
var tmp47720 = inst_47612;
var tmp47721 = inst_47614;
var tmp47722 = inst_47613;
var inst_47612__$1 = tmp47720;
var inst_47613__$1 = tmp47722;
var inst_47614__$1 = tmp47721;
var inst_47615__$1 = inst_47627;
var state_47673__$1 = (function (){var statearr_47730 = state_47673;
(statearr_47730[(19)] = inst_47612__$1);

(statearr_47730[(20)] = inst_47614__$1);

(statearr_47730[(11)] = inst_47613__$1);

(statearr_47730[(21)] = inst_47626);

(statearr_47730[(12)] = inst_47615__$1);

return statearr_47730;
})();
var statearr_47731_49471 = state_47673__$1;
(statearr_47731_49471[(2)] = null);

(statearr_47731_49471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (40))){
var inst_47639 = (state_47673[(22)]);
var inst_47643 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47639);
var state_47673__$1 = state_47673;
var statearr_47735_49472 = state_47673__$1;
(statearr_47735_49472[(2)] = inst_47643);

(statearr_47735_49472[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (33))){
var inst_47630 = (state_47673[(23)]);
var inst_47632 = cljs.core.chunked_seq_QMARK_(inst_47630);
var state_47673__$1 = state_47673;
if(inst_47632){
var statearr_47737_49473 = state_47673__$1;
(statearr_47737_49473[(1)] = (36));

} else {
var statearr_47738_49474 = state_47673__$1;
(statearr_47738_49474[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (13))){
var inst_47561 = (state_47673[(24)]);
var inst_47564 = cljs.core.async.close_BANG_(inst_47561);
var state_47673__$1 = state_47673;
var statearr_47742_49476 = state_47673__$1;
(statearr_47742_49476[(2)] = inst_47564);

(statearr_47742_49476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (22))){
var inst_47584 = (state_47673[(8)]);
var inst_47587 = cljs.core.async.close_BANG_(inst_47584);
var state_47673__$1 = state_47673;
var statearr_47745_49478 = state_47673__$1;
(statearr_47745_49478[(2)] = inst_47587);

(statearr_47745_49478[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (36))){
var inst_47630 = (state_47673[(23)]);
var inst_47634 = cljs.core.chunk_first(inst_47630);
var inst_47635 = cljs.core.chunk_rest(inst_47630);
var inst_47636 = cljs.core.count(inst_47634);
var inst_47612 = inst_47635;
var inst_47613 = inst_47634;
var inst_47614 = inst_47636;
var inst_47615 = (0);
var state_47673__$1 = (function (){var statearr_47748 = state_47673;
(statearr_47748[(19)] = inst_47612);

(statearr_47748[(20)] = inst_47614);

(statearr_47748[(11)] = inst_47613);

(statearr_47748[(12)] = inst_47615);

return statearr_47748;
})();
var statearr_47750_49482 = state_47673__$1;
(statearr_47750_49482[(2)] = null);

(statearr_47750_49482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (41))){
var inst_47630 = (state_47673[(23)]);
var inst_47645 = (state_47673[(2)]);
var inst_47646 = cljs.core.next(inst_47630);
var inst_47612 = inst_47646;
var inst_47613 = null;
var inst_47614 = (0);
var inst_47615 = (0);
var state_47673__$1 = (function (){var statearr_47754 = state_47673;
(statearr_47754[(19)] = inst_47612);

(statearr_47754[(20)] = inst_47614);

(statearr_47754[(11)] = inst_47613);

(statearr_47754[(25)] = inst_47645);

(statearr_47754[(12)] = inst_47615);

return statearr_47754;
})();
var statearr_47756_49484 = state_47673__$1;
(statearr_47756_49484[(2)] = null);

(statearr_47756_49484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (43))){
var state_47673__$1 = state_47673;
var statearr_47757_49485 = state_47673__$1;
(statearr_47757_49485[(2)] = null);

(statearr_47757_49485[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (29))){
var inst_47654 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47761_49487 = state_47673__$1;
(statearr_47761_49487[(2)] = inst_47654);

(statearr_47761_49487[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (44))){
var inst_47663 = (state_47673[(2)]);
var state_47673__$1 = (function (){var statearr_47763 = state_47673;
(statearr_47763[(26)] = inst_47663);

return statearr_47763;
})();
var statearr_47764_49489 = state_47673__$1;
(statearr_47764_49489[(2)] = null);

(statearr_47764_49489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (6))){
var inst_47604 = (state_47673[(27)]);
var inst_47603 = cljs.core.deref(cs);
var inst_47604__$1 = cljs.core.keys(inst_47603);
var inst_47605 = cljs.core.count(inst_47604__$1);
var inst_47606 = cljs.core.reset_BANG_(dctr,inst_47605);
var inst_47611 = cljs.core.seq(inst_47604__$1);
var inst_47612 = inst_47611;
var inst_47613 = null;
var inst_47614 = (0);
var inst_47615 = (0);
var state_47673__$1 = (function (){var statearr_47768 = state_47673;
(statearr_47768[(19)] = inst_47612);

(statearr_47768[(27)] = inst_47604__$1);

(statearr_47768[(28)] = inst_47606);

(statearr_47768[(20)] = inst_47614);

(statearr_47768[(11)] = inst_47613);

(statearr_47768[(12)] = inst_47615);

return statearr_47768;
})();
var statearr_47770_49493 = state_47673__$1;
(statearr_47770_49493[(2)] = null);

(statearr_47770_49493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (28))){
var inst_47612 = (state_47673[(19)]);
var inst_47630 = (state_47673[(23)]);
var inst_47630__$1 = cljs.core.seq(inst_47612);
var state_47673__$1 = (function (){var statearr_47774 = state_47673;
(statearr_47774[(23)] = inst_47630__$1);

return statearr_47774;
})();
if(inst_47630__$1){
var statearr_47775_49494 = state_47673__$1;
(statearr_47775_49494[(1)] = (33));

} else {
var statearr_47776_49495 = state_47673__$1;
(statearr_47776_49495[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (25))){
var inst_47614 = (state_47673[(20)]);
var inst_47615 = (state_47673[(12)]);
var inst_47617 = (inst_47615 < inst_47614);
var inst_47618 = inst_47617;
var state_47673__$1 = state_47673;
if(cljs.core.truth_(inst_47618)){
var statearr_47778_49496 = state_47673__$1;
(statearr_47778_49496[(1)] = (27));

} else {
var statearr_47779_49497 = state_47673__$1;
(statearr_47779_49497[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (34))){
var state_47673__$1 = state_47673;
var statearr_47783_49498 = state_47673__$1;
(statearr_47783_49498[(2)] = null);

(statearr_47783_49498[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (17))){
var state_47673__$1 = state_47673;
var statearr_47784_49499 = state_47673__$1;
(statearr_47784_49499[(2)] = null);

(statearr_47784_49499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (3))){
var inst_47668 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47673__$1,inst_47668);
} else {
if((state_val_47674 === (12))){
var inst_47599 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47788_49500 = state_47673__$1;
(statearr_47788_49500[(2)] = inst_47599);

(statearr_47788_49500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (2))){
var state_47673__$1 = state_47673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47673__$1,(4),ch);
} else {
if((state_val_47674 === (23))){
var state_47673__$1 = state_47673;
var statearr_47791_49502 = state_47673__$1;
(statearr_47791_49502[(2)] = null);

(statearr_47791_49502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (35))){
var inst_47652 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47792_49506 = state_47673__$1;
(statearr_47792_49506[(2)] = inst_47652);

(statearr_47792_49506[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (19))){
var inst_47571 = (state_47673[(7)]);
var inst_47575 = cljs.core.chunk_first(inst_47571);
var inst_47576 = cljs.core.chunk_rest(inst_47571);
var inst_47577 = cljs.core.count(inst_47575);
var inst_47548 = inst_47576;
var inst_47549 = inst_47575;
var inst_47550 = inst_47577;
var inst_47552 = (0);
var state_47673__$1 = (function (){var statearr_47797 = state_47673;
(statearr_47797[(13)] = inst_47548);

(statearr_47797[(14)] = inst_47552);

(statearr_47797[(15)] = inst_47549);

(statearr_47797[(17)] = inst_47550);

return statearr_47797;
})();
var statearr_47800_49507 = state_47673__$1;
(statearr_47800_49507[(2)] = null);

(statearr_47800_49507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (11))){
var inst_47548 = (state_47673[(13)]);
var inst_47571 = (state_47673[(7)]);
var inst_47571__$1 = cljs.core.seq(inst_47548);
var state_47673__$1 = (function (){var statearr_47803 = state_47673;
(statearr_47803[(7)] = inst_47571__$1);

return statearr_47803;
})();
if(inst_47571__$1){
var statearr_47806_49509 = state_47673__$1;
(statearr_47806_49509[(1)] = (16));

} else {
var statearr_47808_49511 = state_47673__$1;
(statearr_47808_49511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (9))){
var inst_47601 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47810_49512 = state_47673__$1;
(statearr_47810_49512[(2)] = inst_47601);

(statearr_47810_49512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (5))){
var inst_47546 = cljs.core.deref(cs);
var inst_47547 = cljs.core.seq(inst_47546);
var inst_47548 = inst_47547;
var inst_47549 = null;
var inst_47550 = (0);
var inst_47552 = (0);
var state_47673__$1 = (function (){var statearr_47812 = state_47673;
(statearr_47812[(13)] = inst_47548);

(statearr_47812[(14)] = inst_47552);

(statearr_47812[(15)] = inst_47549);

(statearr_47812[(17)] = inst_47550);

return statearr_47812;
})();
var statearr_47816_49515 = state_47673__$1;
(statearr_47816_49515[(2)] = null);

(statearr_47816_49515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (14))){
var state_47673__$1 = state_47673;
var statearr_47817_49516 = state_47673__$1;
(statearr_47817_49516[(2)] = null);

(statearr_47817_49516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (45))){
var inst_47660 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47819_49517 = state_47673__$1;
(statearr_47819_49517[(2)] = inst_47660);

(statearr_47819_49517[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (26))){
var inst_47604 = (state_47673[(27)]);
var inst_47656 = (state_47673[(2)]);
var inst_47657 = cljs.core.seq(inst_47604);
var state_47673__$1 = (function (){var statearr_47823 = state_47673;
(statearr_47823[(29)] = inst_47656);

return statearr_47823;
})();
if(inst_47657){
var statearr_47825_49525 = state_47673__$1;
(statearr_47825_49525[(1)] = (42));

} else {
var statearr_47826_49526 = state_47673__$1;
(statearr_47826_49526[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (16))){
var inst_47571 = (state_47673[(7)]);
var inst_47573 = cljs.core.chunked_seq_QMARK_(inst_47571);
var state_47673__$1 = state_47673;
if(inst_47573){
var statearr_47828_49527 = state_47673__$1;
(statearr_47828_49527[(1)] = (19));

} else {
var statearr_47829_49528 = state_47673__$1;
(statearr_47829_49528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (38))){
var inst_47649 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47833_49535 = state_47673__$1;
(statearr_47833_49535[(2)] = inst_47649);

(statearr_47833_49535[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (30))){
var state_47673__$1 = state_47673;
var statearr_47834_49536 = state_47673__$1;
(statearr_47834_49536[(2)] = null);

(statearr_47834_49536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (10))){
var inst_47552 = (state_47673[(14)]);
var inst_47549 = (state_47673[(15)]);
var inst_47560 = cljs.core._nth(inst_47549,inst_47552);
var inst_47561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47560,(0),null);
var inst_47562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47560,(1),null);
var state_47673__$1 = (function (){var statearr_47839 = state_47673;
(statearr_47839[(24)] = inst_47561);

return statearr_47839;
})();
if(cljs.core.truth_(inst_47562)){
var statearr_47841_49537 = state_47673__$1;
(statearr_47841_49537[(1)] = (13));

} else {
var statearr_47842_49538 = state_47673__$1;
(statearr_47842_49538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (18))){
var inst_47597 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47844_49539 = state_47673__$1;
(statearr_47844_49539[(2)] = inst_47597);

(statearr_47844_49539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (42))){
var state_47673__$1 = state_47673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47673__$1,(45),dchan);
} else {
if((state_val_47674 === (37))){
var inst_47538 = (state_47673[(9)]);
var inst_47639 = (state_47673[(22)]);
var inst_47630 = (state_47673[(23)]);
var inst_47639__$1 = cljs.core.first(inst_47630);
var inst_47640 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47639__$1,inst_47538,done);
var state_47673__$1 = (function (){var statearr_47848 = state_47673;
(statearr_47848[(22)] = inst_47639__$1);

return statearr_47848;
})();
if(cljs.core.truth_(inst_47640)){
var statearr_47849_49540 = state_47673__$1;
(statearr_47849_49540[(1)] = (39));

} else {
var statearr_47851_49542 = state_47673__$1;
(statearr_47851_49542[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (8))){
var inst_47552 = (state_47673[(14)]);
var inst_47550 = (state_47673[(17)]);
var inst_47554 = (inst_47552 < inst_47550);
var inst_47555 = inst_47554;
var state_47673__$1 = state_47673;
if(cljs.core.truth_(inst_47555)){
var statearr_47853_49543 = state_47673__$1;
(statearr_47853_49543[(1)] = (10));

} else {
var statearr_47856_49544 = state_47673__$1;
(statearr_47856_49544[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__46455__auto__ = null;
var cljs$core$async$mult_$_state_machine__46455__auto____0 = (function (){
var statearr_47861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47861[(0)] = cljs$core$async$mult_$_state_machine__46455__auto__);

(statearr_47861[(1)] = (1));

return statearr_47861;
});
var cljs$core$async$mult_$_state_machine__46455__auto____1 = (function (state_47673){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_47673);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47862){var ex__46458__auto__ = e47862;
var statearr_47865_49547 = state_47673;
(statearr_47865_49547[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_47673[(4)]))){
var statearr_47866_49548 = state_47673;
(statearr_47866_49548[(1)] = cljs.core.first((state_47673[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49549 = state_47673;
state_47673 = G__49549;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46455__auto__ = function(state_47673){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46455__auto____1.call(this,state_47673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46455__auto____0;
cljs$core$async$mult_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46455__auto____1;
return cljs$core$async$mult_$_state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_47870 = f__46807__auto__();
(statearr_47870[(6)] = c__46806__auto___49453);

return statearr_47870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47879 = arguments.length;
switch (G__47879) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_49557 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49557(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49558 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49558(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49559 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49559(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49566 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49566(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49567 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49567(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49568 = arguments.length;
var i__4865__auto___49569 = (0);
while(true){
if((i__4865__auto___49569 < len__4864__auto___49568)){
args__4870__auto__.push((arguments[i__4865__auto___49569]));

var G__49570 = (i__4865__auto___49569 + (1));
i__4865__auto___49569 = G__49570;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47942){
var map__47944 = p__47942;
var map__47944__$1 = cljs.core.__destructure_map(map__47944);
var opts = map__47944__$1;
var statearr_47947_49571 = state;
(statearr_47947_49571[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47950_49572 = state;
(statearr_47950_49572[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_47951_49573 = state;
(statearr_47951_49573[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47933){
var G__47934 = cljs.core.first(seq47933);
var seq47933__$1 = cljs.core.next(seq47933);
var G__47936 = cljs.core.first(seq47933__$1);
var seq47933__$2 = cljs.core.next(seq47933__$1);
var G__47937 = cljs.core.first(seq47933__$2);
var seq47933__$3 = cljs.core.next(seq47933__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47934,G__47936,G__47937,seq47933__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47952 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47953){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47953 = meta47953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47954,meta47953__$1){
var self__ = this;
var _47954__$1 = this;
return (new cljs.core.async.t_cljs$core$async47952(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47953__$1));
}));

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47954){
var self__ = this;
var _47954__$1 = this;
return self__.meta47953;
}));

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47952.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47953","meta47953",753024082,null)], null);
}));

(cljs.core.async.t_cljs$core$async47952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47952");

(cljs.core.async.t_cljs$core$async47952.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47952.
 */
cljs.core.async.__GT_t_cljs$core$async47952 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47952(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47953){
return (new cljs.core.async.t_cljs$core$async47952(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47953));
});

}

return (new cljs.core.async.t_cljs$core$async47952(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46806__auto___49588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48033){
var state_val_48034 = (state_48033[(1)]);
if((state_val_48034 === (7))){
var inst_47984 = (state_48033[(2)]);
var state_48033__$1 = state_48033;
if(cljs.core.truth_(inst_47984)){
var statearr_48035_49589 = state_48033__$1;
(statearr_48035_49589[(1)] = (8));

} else {
var statearr_48036_49590 = state_48033__$1;
(statearr_48036_49590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (20))){
var inst_47977 = (state_48033[(7)]);
var state_48033__$1 = state_48033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48033__$1,(23),out,inst_47977);
} else {
if((state_val_48034 === (1))){
var inst_47958 = calc_state();
var inst_47959 = cljs.core.__destructure_map(inst_47958);
var inst_47960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47959,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47959,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47959,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47965 = inst_47958;
var state_48033__$1 = (function (){var statearr_48045 = state_48033;
(statearr_48045[(8)] = inst_47960);

(statearr_48045[(9)] = inst_47965);

(statearr_48045[(10)] = inst_47963);

(statearr_48045[(11)] = inst_47961);

return statearr_48045;
})();
var statearr_48046_49596 = state_48033__$1;
(statearr_48046_49596[(2)] = null);

(statearr_48046_49596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (24))){
var inst_47968 = (state_48033[(12)]);
var inst_47965 = inst_47968;
var state_48033__$1 = (function (){var statearr_48047 = state_48033;
(statearr_48047[(9)] = inst_47965);

return statearr_48047;
})();
var statearr_48048_49597 = state_48033__$1;
(statearr_48048_49597[(2)] = null);

(statearr_48048_49597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (4))){
var inst_47979 = (state_48033[(13)]);
var inst_47977 = (state_48033[(7)]);
var inst_47976 = (state_48033[(2)]);
var inst_47977__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47976,(0),null);
var inst_47978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47976,(1),null);
var inst_47979__$1 = (inst_47977__$1 == null);
var state_48033__$1 = (function (){var statearr_48052 = state_48033;
(statearr_48052[(13)] = inst_47979__$1);

(statearr_48052[(14)] = inst_47978);

(statearr_48052[(7)] = inst_47977__$1);

return statearr_48052;
})();
if(cljs.core.truth_(inst_47979__$1)){
var statearr_48054_49598 = state_48033__$1;
(statearr_48054_49598[(1)] = (5));

} else {
var statearr_48055_49599 = state_48033__$1;
(statearr_48055_49599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (15))){
var inst_47969 = (state_48033[(15)]);
var inst_48002 = (state_48033[(16)]);
var inst_48002__$1 = cljs.core.empty_QMARK_(inst_47969);
var state_48033__$1 = (function (){var statearr_48056 = state_48033;
(statearr_48056[(16)] = inst_48002__$1);

return statearr_48056;
})();
if(inst_48002__$1){
var statearr_48060_49600 = state_48033__$1;
(statearr_48060_49600[(1)] = (17));

} else {
var statearr_48061_49601 = state_48033__$1;
(statearr_48061_49601[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (21))){
var inst_47968 = (state_48033[(12)]);
var inst_47965 = inst_47968;
var state_48033__$1 = (function (){var statearr_48063 = state_48033;
(statearr_48063[(9)] = inst_47965);

return statearr_48063;
})();
var statearr_48064_49602 = state_48033__$1;
(statearr_48064_49602[(2)] = null);

(statearr_48064_49602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (13))){
var inst_47991 = (state_48033[(2)]);
var inst_47992 = calc_state();
var inst_47965 = inst_47992;
var state_48033__$1 = (function (){var statearr_48065 = state_48033;
(statearr_48065[(9)] = inst_47965);

(statearr_48065[(17)] = inst_47991);

return statearr_48065;
})();
var statearr_48066_49603 = state_48033__$1;
(statearr_48066_49603[(2)] = null);

(statearr_48066_49603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (22))){
var inst_48022 = (state_48033[(2)]);
var state_48033__$1 = state_48033;
var statearr_48070_49604 = state_48033__$1;
(statearr_48070_49604[(2)] = inst_48022);

(statearr_48070_49604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (6))){
var inst_47978 = (state_48033[(14)]);
var inst_47982 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47978,change);
var state_48033__$1 = state_48033;
var statearr_48072_49605 = state_48033__$1;
(statearr_48072_49605[(2)] = inst_47982);

(statearr_48072_49605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (25))){
var state_48033__$1 = state_48033;
var statearr_48073_49606 = state_48033__$1;
(statearr_48073_49606[(2)] = null);

(statearr_48073_49606[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (17))){
var inst_47970 = (state_48033[(18)]);
var inst_47978 = (state_48033[(14)]);
var inst_48004 = (inst_47970.cljs$core$IFn$_invoke$arity$1 ? inst_47970.cljs$core$IFn$_invoke$arity$1(inst_47978) : inst_47970.call(null,inst_47978));
var inst_48005 = cljs.core.not(inst_48004);
var state_48033__$1 = state_48033;
var statearr_48074_49607 = state_48033__$1;
(statearr_48074_49607[(2)] = inst_48005);

(statearr_48074_49607[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (3))){
var inst_48030 = (state_48033[(2)]);
var state_48033__$1 = state_48033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48033__$1,inst_48030);
} else {
if((state_val_48034 === (12))){
var state_48033__$1 = state_48033;
var statearr_48076_49609 = state_48033__$1;
(statearr_48076_49609[(2)] = null);

(statearr_48076_49609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (2))){
var inst_47968 = (state_48033[(12)]);
var inst_47965 = (state_48033[(9)]);
var inst_47968__$1 = cljs.core.__destructure_map(inst_47965);
var inst_47969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47968__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47968__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47968__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48033__$1 = (function (){var statearr_48077 = state_48033;
(statearr_48077[(12)] = inst_47968__$1);

(statearr_48077[(15)] = inst_47969);

(statearr_48077[(18)] = inst_47970);

return statearr_48077;
})();
return cljs.core.async.ioc_alts_BANG_(state_48033__$1,(4),inst_47971);
} else {
if((state_val_48034 === (23))){
var inst_48013 = (state_48033[(2)]);
var state_48033__$1 = state_48033;
if(cljs.core.truth_(inst_48013)){
var statearr_48078_49611 = state_48033__$1;
(statearr_48078_49611[(1)] = (24));

} else {
var statearr_48079_49612 = state_48033__$1;
(statearr_48079_49612[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (19))){
var inst_48008 = (state_48033[(2)]);
var state_48033__$1 = state_48033;
var statearr_48084_49613 = state_48033__$1;
(statearr_48084_49613[(2)] = inst_48008);

(statearr_48084_49613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (11))){
var inst_47978 = (state_48033[(14)]);
var inst_47988 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47978);
var state_48033__$1 = state_48033;
var statearr_48089_49614 = state_48033__$1;
(statearr_48089_49614[(2)] = inst_47988);

(statearr_48089_49614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (9))){
var inst_47969 = (state_48033[(15)]);
var inst_47978 = (state_48033[(14)]);
var inst_47995 = (state_48033[(19)]);
var inst_47995__$1 = (inst_47969.cljs$core$IFn$_invoke$arity$1 ? inst_47969.cljs$core$IFn$_invoke$arity$1(inst_47978) : inst_47969.call(null,inst_47978));
var state_48033__$1 = (function (){var statearr_48090 = state_48033;
(statearr_48090[(19)] = inst_47995__$1);

return statearr_48090;
})();
if(cljs.core.truth_(inst_47995__$1)){
var statearr_48091_49617 = state_48033__$1;
(statearr_48091_49617[(1)] = (14));

} else {
var statearr_48092_49618 = state_48033__$1;
(statearr_48092_49618[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (5))){
var inst_47979 = (state_48033[(13)]);
var state_48033__$1 = state_48033;
var statearr_48093_49619 = state_48033__$1;
(statearr_48093_49619[(2)] = inst_47979);

(statearr_48093_49619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (14))){
var inst_47995 = (state_48033[(19)]);
var state_48033__$1 = state_48033;
var statearr_48098_49620 = state_48033__$1;
(statearr_48098_49620[(2)] = inst_47995);

(statearr_48098_49620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (26))){
var inst_48018 = (state_48033[(2)]);
var state_48033__$1 = state_48033;
var statearr_48099_49621 = state_48033__$1;
(statearr_48099_49621[(2)] = inst_48018);

(statearr_48099_49621[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (16))){
var inst_48010 = (state_48033[(2)]);
var state_48033__$1 = state_48033;
if(cljs.core.truth_(inst_48010)){
var statearr_48103_49622 = state_48033__$1;
(statearr_48103_49622[(1)] = (20));

} else {
var statearr_48104_49623 = state_48033__$1;
(statearr_48104_49623[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (10))){
var inst_48024 = (state_48033[(2)]);
var state_48033__$1 = state_48033;
var statearr_48106_49624 = state_48033__$1;
(statearr_48106_49624[(2)] = inst_48024);

(statearr_48106_49624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (18))){
var inst_48002 = (state_48033[(16)]);
var state_48033__$1 = state_48033;
var statearr_48107_49625 = state_48033__$1;
(statearr_48107_49625[(2)] = inst_48002);

(statearr_48107_49625[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48034 === (8))){
var inst_47977 = (state_48033[(7)]);
var inst_47986 = (inst_47977 == null);
var state_48033__$1 = state_48033;
if(cljs.core.truth_(inst_47986)){
var statearr_48108_49626 = state_48033__$1;
(statearr_48108_49626[(1)] = (11));

} else {
var statearr_48109_49627 = state_48033__$1;
(statearr_48109_49627[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__46455__auto__ = null;
var cljs$core$async$mix_$_state_machine__46455__auto____0 = (function (){
var statearr_48114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48114[(0)] = cljs$core$async$mix_$_state_machine__46455__auto__);

(statearr_48114[(1)] = (1));

return statearr_48114;
});
var cljs$core$async$mix_$_state_machine__46455__auto____1 = (function (state_48033){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48033);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48115){var ex__46458__auto__ = e48115;
var statearr_48116_49628 = state_48033;
(statearr_48116_49628[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48033[(4)]))){
var statearr_48118_49629 = state_48033;
(statearr_48118_49629[(1)] = cljs.core.first((state_48033[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49630 = state_48033;
state_48033 = G__49630;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46455__auto__ = function(state_48033){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46455__auto____1.call(this,state_48033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46455__auto____0;
cljs$core$async$mix_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46455__auto____1;
return cljs$core$async$mix_$_state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48119 = f__46807__auto__();
(statearr_48119[(6)] = c__46806__auto___49588);

return statearr_48119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_49633 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49633(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49635 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49635(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49637 = (function() {
var G__49638 = null;
var G__49638__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49638__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49638 = function(p,v){
switch(arguments.length){
case 1:
return G__49638__1.call(this,p);
case 2:
return G__49638__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49638.cljs$core$IFn$_invoke$arity$1 = G__49638__1;
G__49638.cljs$core$IFn$_invoke$arity$2 = G__49638__2;
return G__49638;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48146 = arguments.length;
switch (G__48146) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49637(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49637(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__48161 = arguments.length;
switch (G__48161) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48158_SHARP_){
if(cljs.core.truth_((p1__48158_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48158_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48158_SHARP_.call(null,topic)))){
return p1__48158_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48158_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48166 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48167){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48167 = meta48167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48168,meta48167__$1){
var self__ = this;
var _48168__$1 = this;
return (new cljs.core.async.t_cljs$core$async48166(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48167__$1));
}));

(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48168){
var self__ = this;
var _48168__$1 = this;
return self__.meta48167;
}));

(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48167","meta48167",-2102255644,null)], null);
}));

(cljs.core.async.t_cljs$core$async48166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48166");

(cljs.core.async.t_cljs$core$async48166.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48166.
 */
cljs.core.async.__GT_t_cljs$core$async48166 = (function cljs$core$async$__GT_t_cljs$core$async48166(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48167){
return (new cljs.core.async.t_cljs$core$async48166(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48167));
});

}

return (new cljs.core.async.t_cljs$core$async48166(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46806__auto___49651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48247){
var state_val_48248 = (state_48247[(1)]);
if((state_val_48248 === (7))){
var inst_48243 = (state_48247[(2)]);
var state_48247__$1 = state_48247;
var statearr_48249_49652 = state_48247__$1;
(statearr_48249_49652[(2)] = inst_48243);

(statearr_48249_49652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (20))){
var state_48247__$1 = state_48247;
var statearr_48250_49653 = state_48247__$1;
(statearr_48250_49653[(2)] = null);

(statearr_48250_49653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (1))){
var state_48247__$1 = state_48247;
var statearr_48251_49654 = state_48247__$1;
(statearr_48251_49654[(2)] = null);

(statearr_48251_49654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (24))){
var inst_48226 = (state_48247[(7)]);
var inst_48235 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48226);
var state_48247__$1 = state_48247;
var statearr_48252_49655 = state_48247__$1;
(statearr_48252_49655[(2)] = inst_48235);

(statearr_48252_49655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (4))){
var inst_48176 = (state_48247[(8)]);
var inst_48176__$1 = (state_48247[(2)]);
var inst_48178 = (inst_48176__$1 == null);
var state_48247__$1 = (function (){var statearr_48253 = state_48247;
(statearr_48253[(8)] = inst_48176__$1);

return statearr_48253;
})();
if(cljs.core.truth_(inst_48178)){
var statearr_48254_49665 = state_48247__$1;
(statearr_48254_49665[(1)] = (5));

} else {
var statearr_48255_49666 = state_48247__$1;
(statearr_48255_49666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (15))){
var inst_48220 = (state_48247[(2)]);
var state_48247__$1 = state_48247;
var statearr_48256_49667 = state_48247__$1;
(statearr_48256_49667[(2)] = inst_48220);

(statearr_48256_49667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (21))){
var inst_48240 = (state_48247[(2)]);
var state_48247__$1 = (function (){var statearr_48257 = state_48247;
(statearr_48257[(9)] = inst_48240);

return statearr_48257;
})();
var statearr_48258_49668 = state_48247__$1;
(statearr_48258_49668[(2)] = null);

(statearr_48258_49668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (13))){
var inst_48202 = (state_48247[(10)]);
var inst_48204 = cljs.core.chunked_seq_QMARK_(inst_48202);
var state_48247__$1 = state_48247;
if(inst_48204){
var statearr_48259_49671 = state_48247__$1;
(statearr_48259_49671[(1)] = (16));

} else {
var statearr_48260_49674 = state_48247__$1;
(statearr_48260_49674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (22))){
var inst_48232 = (state_48247[(2)]);
var state_48247__$1 = state_48247;
if(cljs.core.truth_(inst_48232)){
var statearr_48261_49675 = state_48247__$1;
(statearr_48261_49675[(1)] = (23));

} else {
var statearr_48262_49676 = state_48247__$1;
(statearr_48262_49676[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (6))){
var inst_48176 = (state_48247[(8)]);
var inst_48228 = (state_48247[(11)]);
var inst_48226 = (state_48247[(7)]);
var inst_48226__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48176) : topic_fn.call(null,inst_48176));
var inst_48227 = cljs.core.deref(mults);
var inst_48228__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48227,inst_48226__$1);
var state_48247__$1 = (function (){var statearr_48263 = state_48247;
(statearr_48263[(11)] = inst_48228__$1);

(statearr_48263[(7)] = inst_48226__$1);

return statearr_48263;
})();
if(cljs.core.truth_(inst_48228__$1)){
var statearr_48264_49680 = state_48247__$1;
(statearr_48264_49680[(1)] = (19));

} else {
var statearr_48265_49681 = state_48247__$1;
(statearr_48265_49681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (25))){
var inst_48237 = (state_48247[(2)]);
var state_48247__$1 = state_48247;
var statearr_48266_49682 = state_48247__$1;
(statearr_48266_49682[(2)] = inst_48237);

(statearr_48266_49682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (17))){
var inst_48202 = (state_48247[(10)]);
var inst_48211 = cljs.core.first(inst_48202);
var inst_48212 = cljs.core.async.muxch_STAR_(inst_48211);
var inst_48213 = cljs.core.async.close_BANG_(inst_48212);
var inst_48214 = cljs.core.next(inst_48202);
var inst_48188 = inst_48214;
var inst_48189 = null;
var inst_48190 = (0);
var inst_48191 = (0);
var state_48247__$1 = (function (){var statearr_48269 = state_48247;
(statearr_48269[(12)] = inst_48190);

(statearr_48269[(13)] = inst_48213);

(statearr_48269[(14)] = inst_48191);

(statearr_48269[(15)] = inst_48188);

(statearr_48269[(16)] = inst_48189);

return statearr_48269;
})();
var statearr_48270_49686 = state_48247__$1;
(statearr_48270_49686[(2)] = null);

(statearr_48270_49686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (3))){
var inst_48245 = (state_48247[(2)]);
var state_48247__$1 = state_48247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48247__$1,inst_48245);
} else {
if((state_val_48248 === (12))){
var inst_48222 = (state_48247[(2)]);
var state_48247__$1 = state_48247;
var statearr_48271_49692 = state_48247__$1;
(statearr_48271_49692[(2)] = inst_48222);

(statearr_48271_49692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (2))){
var state_48247__$1 = state_48247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48247__$1,(4),ch);
} else {
if((state_val_48248 === (23))){
var state_48247__$1 = state_48247;
var statearr_48272_49693 = state_48247__$1;
(statearr_48272_49693[(2)] = null);

(statearr_48272_49693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (19))){
var inst_48176 = (state_48247[(8)]);
var inst_48228 = (state_48247[(11)]);
var inst_48230 = cljs.core.async.muxch_STAR_(inst_48228);
var state_48247__$1 = state_48247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48247__$1,(22),inst_48230,inst_48176);
} else {
if((state_val_48248 === (11))){
var inst_48188 = (state_48247[(15)]);
var inst_48202 = (state_48247[(10)]);
var inst_48202__$1 = cljs.core.seq(inst_48188);
var state_48247__$1 = (function (){var statearr_48273 = state_48247;
(statearr_48273[(10)] = inst_48202__$1);

return statearr_48273;
})();
if(inst_48202__$1){
var statearr_48274_49695 = state_48247__$1;
(statearr_48274_49695[(1)] = (13));

} else {
var statearr_48275_49696 = state_48247__$1;
(statearr_48275_49696[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (9))){
var inst_48224 = (state_48247[(2)]);
var state_48247__$1 = state_48247;
var statearr_48277_49697 = state_48247__$1;
(statearr_48277_49697[(2)] = inst_48224);

(statearr_48277_49697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (5))){
var inst_48185 = cljs.core.deref(mults);
var inst_48186 = cljs.core.vals(inst_48185);
var inst_48187 = cljs.core.seq(inst_48186);
var inst_48188 = inst_48187;
var inst_48189 = null;
var inst_48190 = (0);
var inst_48191 = (0);
var state_48247__$1 = (function (){var statearr_48279 = state_48247;
(statearr_48279[(12)] = inst_48190);

(statearr_48279[(14)] = inst_48191);

(statearr_48279[(15)] = inst_48188);

(statearr_48279[(16)] = inst_48189);

return statearr_48279;
})();
var statearr_48280_49698 = state_48247__$1;
(statearr_48280_49698[(2)] = null);

(statearr_48280_49698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (14))){
var state_48247__$1 = state_48247;
var statearr_48284_49699 = state_48247__$1;
(statearr_48284_49699[(2)] = null);

(statearr_48284_49699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (16))){
var inst_48202 = (state_48247[(10)]);
var inst_48206 = cljs.core.chunk_first(inst_48202);
var inst_48207 = cljs.core.chunk_rest(inst_48202);
var inst_48208 = cljs.core.count(inst_48206);
var inst_48188 = inst_48207;
var inst_48189 = inst_48206;
var inst_48190 = inst_48208;
var inst_48191 = (0);
var state_48247__$1 = (function (){var statearr_48285 = state_48247;
(statearr_48285[(12)] = inst_48190);

(statearr_48285[(14)] = inst_48191);

(statearr_48285[(15)] = inst_48188);

(statearr_48285[(16)] = inst_48189);

return statearr_48285;
})();
var statearr_48286_49700 = state_48247__$1;
(statearr_48286_49700[(2)] = null);

(statearr_48286_49700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (10))){
var inst_48190 = (state_48247[(12)]);
var inst_48191 = (state_48247[(14)]);
var inst_48188 = (state_48247[(15)]);
var inst_48189 = (state_48247[(16)]);
var inst_48196 = cljs.core._nth(inst_48189,inst_48191);
var inst_48197 = cljs.core.async.muxch_STAR_(inst_48196);
var inst_48198 = cljs.core.async.close_BANG_(inst_48197);
var inst_48199 = (inst_48191 + (1));
var tmp48281 = inst_48190;
var tmp48282 = inst_48188;
var tmp48283 = inst_48189;
var inst_48188__$1 = tmp48282;
var inst_48189__$1 = tmp48283;
var inst_48190__$1 = tmp48281;
var inst_48191__$1 = inst_48199;
var state_48247__$1 = (function (){var statearr_48287 = state_48247;
(statearr_48287[(12)] = inst_48190__$1);

(statearr_48287[(14)] = inst_48191__$1);

(statearr_48287[(15)] = inst_48188__$1);

(statearr_48287[(17)] = inst_48198);

(statearr_48287[(16)] = inst_48189__$1);

return statearr_48287;
})();
var statearr_48289_49701 = state_48247__$1;
(statearr_48289_49701[(2)] = null);

(statearr_48289_49701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (18))){
var inst_48217 = (state_48247[(2)]);
var state_48247__$1 = state_48247;
var statearr_48291_49702 = state_48247__$1;
(statearr_48291_49702[(2)] = inst_48217);

(statearr_48291_49702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48248 === (8))){
var inst_48190 = (state_48247[(12)]);
var inst_48191 = (state_48247[(14)]);
var inst_48193 = (inst_48191 < inst_48190);
var inst_48194 = inst_48193;
var state_48247__$1 = state_48247;
if(cljs.core.truth_(inst_48194)){
var statearr_48292_49703 = state_48247__$1;
(statearr_48292_49703[(1)] = (10));

} else {
var statearr_48293_49704 = state_48247__$1;
(statearr_48293_49704[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48294[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48294[(1)] = (1));

return statearr_48294;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48247){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48247);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48295){var ex__46458__auto__ = e48295;
var statearr_48296_49705 = state_48247;
(statearr_48296_49705[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48247[(4)]))){
var statearr_48297_49706 = state_48247;
(statearr_48297_49706[(1)] = cljs.core.first((state_48247[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49707 = state_48247;
state_48247 = G__49707;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48298 = f__46807__auto__();
(statearr_48298[(6)] = c__46806__auto___49651);

return statearr_48298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48300 = arguments.length;
switch (G__48300) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__48304 = arguments.length;
switch (G__48304) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__48310 = arguments.length;
switch (G__48310) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46806__auto___49711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48361){
var state_val_48362 = (state_48361[(1)]);
if((state_val_48362 === (7))){
var state_48361__$1 = state_48361;
var statearr_48376_49712 = state_48361__$1;
(statearr_48376_49712[(2)] = null);

(statearr_48376_49712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (1))){
var state_48361__$1 = state_48361;
var statearr_48377_49713 = state_48361__$1;
(statearr_48377_49713[(2)] = null);

(statearr_48377_49713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (4))){
var inst_48316 = (state_48361[(7)]);
var inst_48318 = (state_48361[(8)]);
var inst_48320 = (inst_48318 < inst_48316);
var state_48361__$1 = state_48361;
if(cljs.core.truth_(inst_48320)){
var statearr_48384_49714 = state_48361__$1;
(statearr_48384_49714[(1)] = (6));

} else {
var statearr_48385_49715 = state_48361__$1;
(statearr_48385_49715[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (15))){
var inst_48347 = (state_48361[(9)]);
var inst_48352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48347);
var state_48361__$1 = state_48361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48361__$1,(17),out,inst_48352);
} else {
if((state_val_48362 === (13))){
var inst_48347 = (state_48361[(9)]);
var inst_48347__$1 = (state_48361[(2)]);
var inst_48348 = cljs.core.some(cljs.core.nil_QMARK_,inst_48347__$1);
var state_48361__$1 = (function (){var statearr_48386 = state_48361;
(statearr_48386[(9)] = inst_48347__$1);

return statearr_48386;
})();
if(cljs.core.truth_(inst_48348)){
var statearr_48387_49716 = state_48361__$1;
(statearr_48387_49716[(1)] = (14));

} else {
var statearr_48388_49717 = state_48361__$1;
(statearr_48388_49717[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (6))){
var state_48361__$1 = state_48361;
var statearr_48393_49718 = state_48361__$1;
(statearr_48393_49718[(2)] = null);

(statearr_48393_49718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (17))){
var inst_48354 = (state_48361[(2)]);
var state_48361__$1 = (function (){var statearr_48404 = state_48361;
(statearr_48404[(10)] = inst_48354);

return statearr_48404;
})();
var statearr_48405_49719 = state_48361__$1;
(statearr_48405_49719[(2)] = null);

(statearr_48405_49719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (3))){
var inst_48359 = (state_48361[(2)]);
var state_48361__$1 = state_48361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48361__$1,inst_48359);
} else {
if((state_val_48362 === (12))){
var _ = (function (){var statearr_48406 = state_48361;
(statearr_48406[(4)] = cljs.core.rest((state_48361[(4)])));

return statearr_48406;
})();
var state_48361__$1 = state_48361;
var ex48403 = (state_48361__$1[(2)]);
var statearr_48407_49720 = state_48361__$1;
(statearr_48407_49720[(5)] = ex48403);


if((ex48403 instanceof Object)){
var statearr_48412_49721 = state_48361__$1;
(statearr_48412_49721[(1)] = (11));

(statearr_48412_49721[(5)] = null);

} else {
throw ex48403;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (2))){
var inst_48315 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48316 = cnt;
var inst_48318 = (0);
var state_48361__$1 = (function (){var statearr_48413 = state_48361;
(statearr_48413[(7)] = inst_48316);

(statearr_48413[(11)] = inst_48315);

(statearr_48413[(8)] = inst_48318);

return statearr_48413;
})();
var statearr_48414_49722 = state_48361__$1;
(statearr_48414_49722[(2)] = null);

(statearr_48414_49722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (11))){
var inst_48326 = (state_48361[(2)]);
var inst_48327 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48361__$1 = (function (){var statearr_48415 = state_48361;
(statearr_48415[(12)] = inst_48326);

return statearr_48415;
})();
var statearr_48416_49723 = state_48361__$1;
(statearr_48416_49723[(2)] = inst_48327);

(statearr_48416_49723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (9))){
var inst_48318 = (state_48361[(8)]);
var _ = (function (){var statearr_48417 = state_48361;
(statearr_48417[(4)] = cljs.core.cons((12),(state_48361[(4)])));

return statearr_48417;
})();
var inst_48333 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48318) : chs__$1.call(null,inst_48318));
var inst_48334 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48318) : done.call(null,inst_48318));
var inst_48335 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48333,inst_48334);
var ___$1 = (function (){var statearr_48418 = state_48361;
(statearr_48418[(4)] = cljs.core.rest((state_48361[(4)])));

return statearr_48418;
})();
var state_48361__$1 = state_48361;
var statearr_48419_49724 = state_48361__$1;
(statearr_48419_49724[(2)] = inst_48335);

(statearr_48419_49724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (5))){
var inst_48345 = (state_48361[(2)]);
var state_48361__$1 = (function (){var statearr_48424 = state_48361;
(statearr_48424[(13)] = inst_48345);

return statearr_48424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48361__$1,(13),dchan);
} else {
if((state_val_48362 === (14))){
var inst_48350 = cljs.core.async.close_BANG_(out);
var state_48361__$1 = state_48361;
var statearr_48425_49725 = state_48361__$1;
(statearr_48425_49725[(2)] = inst_48350);

(statearr_48425_49725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (16))){
var inst_48357 = (state_48361[(2)]);
var state_48361__$1 = state_48361;
var statearr_48426_49726 = state_48361__$1;
(statearr_48426_49726[(2)] = inst_48357);

(statearr_48426_49726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (10))){
var inst_48318 = (state_48361[(8)]);
var inst_48338 = (state_48361[(2)]);
var inst_48339 = (inst_48318 + (1));
var inst_48318__$1 = inst_48339;
var state_48361__$1 = (function (){var statearr_48429 = state_48361;
(statearr_48429[(8)] = inst_48318__$1);

(statearr_48429[(14)] = inst_48338);

return statearr_48429;
})();
var statearr_48430_49727 = state_48361__$1;
(statearr_48430_49727[(2)] = null);

(statearr_48430_49727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (8))){
var inst_48343 = (state_48361[(2)]);
var state_48361__$1 = state_48361;
var statearr_48431_49728 = state_48361__$1;
(statearr_48431_49728[(2)] = inst_48343);

(statearr_48431_49728[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48434[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48434[(1)] = (1));

return statearr_48434;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48361){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48361);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48435){var ex__46458__auto__ = e48435;
var statearr_48436_49729 = state_48361;
(statearr_48436_49729[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48361[(4)]))){
var statearr_48437_49730 = state_48361;
(statearr_48437_49730[(1)] = cljs.core.first((state_48361[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49731 = state_48361;
state_48361 = G__49731;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48438 = f__46807__auto__();
(statearr_48438[(6)] = c__46806__auto___49711);

return statearr_48438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48441 = arguments.length;
switch (G__48441) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46806__auto___49733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48487){
var state_val_48488 = (state_48487[(1)]);
if((state_val_48488 === (7))){
var inst_48455 = (state_48487[(7)]);
var inst_48454 = (state_48487[(8)]);
var inst_48454__$1 = (state_48487[(2)]);
var inst_48455__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48454__$1,(0),null);
var inst_48456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48454__$1,(1),null);
var inst_48467 = (inst_48455__$1 == null);
var state_48487__$1 = (function (){var statearr_48490 = state_48487;
(statearr_48490[(7)] = inst_48455__$1);

(statearr_48490[(9)] = inst_48456);

(statearr_48490[(8)] = inst_48454__$1);

return statearr_48490;
})();
if(cljs.core.truth_(inst_48467)){
var statearr_48492_49734 = state_48487__$1;
(statearr_48492_49734[(1)] = (8));

} else {
var statearr_48493_49735 = state_48487__$1;
(statearr_48493_49735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48488 === (1))){
var inst_48444 = cljs.core.vec(chs);
var inst_48445 = inst_48444;
var state_48487__$1 = (function (){var statearr_48494 = state_48487;
(statearr_48494[(10)] = inst_48445);

return statearr_48494;
})();
var statearr_48498_49736 = state_48487__$1;
(statearr_48498_49736[(2)] = null);

(statearr_48498_49736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48488 === (4))){
var inst_48445 = (state_48487[(10)]);
var state_48487__$1 = state_48487;
return cljs.core.async.ioc_alts_BANG_(state_48487__$1,(7),inst_48445);
} else {
if((state_val_48488 === (6))){
var inst_48483 = (state_48487[(2)]);
var state_48487__$1 = state_48487;
var statearr_48499_49737 = state_48487__$1;
(statearr_48499_49737[(2)] = inst_48483);

(statearr_48499_49737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48488 === (3))){
var inst_48485 = (state_48487[(2)]);
var state_48487__$1 = state_48487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48487__$1,inst_48485);
} else {
if((state_val_48488 === (2))){
var inst_48445 = (state_48487[(10)]);
var inst_48447 = cljs.core.count(inst_48445);
var inst_48448 = (inst_48447 > (0));
var state_48487__$1 = state_48487;
if(cljs.core.truth_(inst_48448)){
var statearr_48501_49738 = state_48487__$1;
(statearr_48501_49738[(1)] = (4));

} else {
var statearr_48502_49739 = state_48487__$1;
(statearr_48502_49739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48488 === (11))){
var inst_48445 = (state_48487[(10)]);
var inst_48476 = (state_48487[(2)]);
var tmp48500 = inst_48445;
var inst_48445__$1 = tmp48500;
var state_48487__$1 = (function (){var statearr_48503 = state_48487;
(statearr_48503[(11)] = inst_48476);

(statearr_48503[(10)] = inst_48445__$1);

return statearr_48503;
})();
var statearr_48504_49740 = state_48487__$1;
(statearr_48504_49740[(2)] = null);

(statearr_48504_49740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48488 === (9))){
var inst_48455 = (state_48487[(7)]);
var state_48487__$1 = state_48487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48487__$1,(11),out,inst_48455);
} else {
if((state_val_48488 === (5))){
var inst_48481 = cljs.core.async.close_BANG_(out);
var state_48487__$1 = state_48487;
var statearr_48505_49741 = state_48487__$1;
(statearr_48505_49741[(2)] = inst_48481);

(statearr_48505_49741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48488 === (10))){
var inst_48479 = (state_48487[(2)]);
var state_48487__$1 = state_48487;
var statearr_48506_49742 = state_48487__$1;
(statearr_48506_49742[(2)] = inst_48479);

(statearr_48506_49742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48488 === (8))){
var inst_48455 = (state_48487[(7)]);
var inst_48456 = (state_48487[(9)]);
var inst_48445 = (state_48487[(10)]);
var inst_48454 = (state_48487[(8)]);
var inst_48470 = (function (){var cs = inst_48445;
var vec__48450 = inst_48454;
var v = inst_48455;
var c = inst_48456;
return (function (p1__48439_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48439_SHARP_);
});
})();
var inst_48471 = cljs.core.filterv(inst_48470,inst_48445);
var inst_48445__$1 = inst_48471;
var state_48487__$1 = (function (){var statearr_48507 = state_48487;
(statearr_48507[(10)] = inst_48445__$1);

return statearr_48507;
})();
var statearr_48508_49743 = state_48487__$1;
(statearr_48508_49743[(2)] = null);

(statearr_48508_49743[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48513 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48513[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48513[(1)] = (1));

return statearr_48513;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48487){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48487);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48514){var ex__46458__auto__ = e48514;
var statearr_48515_49744 = state_48487;
(statearr_48515_49744[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48487[(4)]))){
var statearr_48516_49745 = state_48487;
(statearr_48516_49745[(1)] = cljs.core.first((state_48487[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49746 = state_48487;
state_48487 = G__49746;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48521 = f__46807__auto__();
(statearr_48521[(6)] = c__46806__auto___49733);

return statearr_48521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__48523 = arguments.length;
switch (G__48523) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46806__auto___49748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48547){
var state_val_48548 = (state_48547[(1)]);
if((state_val_48548 === (7))){
var inst_48529 = (state_48547[(7)]);
var inst_48529__$1 = (state_48547[(2)]);
var inst_48530 = (inst_48529__$1 == null);
var inst_48531 = cljs.core.not(inst_48530);
var state_48547__$1 = (function (){var statearr_48551 = state_48547;
(statearr_48551[(7)] = inst_48529__$1);

return statearr_48551;
})();
if(inst_48531){
var statearr_48552_49749 = state_48547__$1;
(statearr_48552_49749[(1)] = (8));

} else {
var statearr_48553_49750 = state_48547__$1;
(statearr_48553_49750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (1))){
var inst_48524 = (0);
var state_48547__$1 = (function (){var statearr_48554 = state_48547;
(statearr_48554[(8)] = inst_48524);

return statearr_48554;
})();
var statearr_48555_49751 = state_48547__$1;
(statearr_48555_49751[(2)] = null);

(statearr_48555_49751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (4))){
var state_48547__$1 = state_48547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48547__$1,(7),ch);
} else {
if((state_val_48548 === (6))){
var inst_48542 = (state_48547[(2)]);
var state_48547__$1 = state_48547;
var statearr_48559_49752 = state_48547__$1;
(statearr_48559_49752[(2)] = inst_48542);

(statearr_48559_49752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (3))){
var inst_48544 = (state_48547[(2)]);
var inst_48545 = cljs.core.async.close_BANG_(out);
var state_48547__$1 = (function (){var statearr_48560 = state_48547;
(statearr_48560[(9)] = inst_48544);

return statearr_48560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48547__$1,inst_48545);
} else {
if((state_val_48548 === (2))){
var inst_48524 = (state_48547[(8)]);
var inst_48526 = (inst_48524 < n);
var state_48547__$1 = state_48547;
if(cljs.core.truth_(inst_48526)){
var statearr_48561_49753 = state_48547__$1;
(statearr_48561_49753[(1)] = (4));

} else {
var statearr_48562_49754 = state_48547__$1;
(statearr_48562_49754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (11))){
var inst_48524 = (state_48547[(8)]);
var inst_48534 = (state_48547[(2)]);
var inst_48535 = (inst_48524 + (1));
var inst_48524__$1 = inst_48535;
var state_48547__$1 = (function (){var statearr_48563 = state_48547;
(statearr_48563[(8)] = inst_48524__$1);

(statearr_48563[(10)] = inst_48534);

return statearr_48563;
})();
var statearr_48564_49755 = state_48547__$1;
(statearr_48564_49755[(2)] = null);

(statearr_48564_49755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (9))){
var state_48547__$1 = state_48547;
var statearr_48565_49756 = state_48547__$1;
(statearr_48565_49756[(2)] = null);

(statearr_48565_49756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (5))){
var state_48547__$1 = state_48547;
var statearr_48566_49757 = state_48547__$1;
(statearr_48566_49757[(2)] = null);

(statearr_48566_49757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (10))){
var inst_48539 = (state_48547[(2)]);
var state_48547__$1 = state_48547;
var statearr_48567_49758 = state_48547__$1;
(statearr_48567_49758[(2)] = inst_48539);

(statearr_48567_49758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (8))){
var inst_48529 = (state_48547[(7)]);
var state_48547__$1 = state_48547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48547__$1,(11),out,inst_48529);
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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48568[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48568[(1)] = (1));

return statearr_48568;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48547){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48547);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48569){var ex__46458__auto__ = e48569;
var statearr_48570_49759 = state_48547;
(statearr_48570_49759[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48547[(4)]))){
var statearr_48571_49760 = state_48547;
(statearr_48571_49760[(1)] = cljs.core.first((state_48547[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49761 = state_48547;
state_48547 = G__49761;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48572 = f__46807__auto__();
(statearr_48572[(6)] = c__46806__auto___49748);

return statearr_48572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48574 = (function (f,ch,meta48575){
this.f = f;
this.ch = ch;
this.meta48575 = meta48575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48576,meta48575__$1){
var self__ = this;
var _48576__$1 = this;
return (new cljs.core.async.t_cljs$core$async48574(self__.f,self__.ch,meta48575__$1));
}));

(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48576){
var self__ = this;
var _48576__$1 = this;
return self__.meta48575;
}));

(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48577 = (function (f,ch,meta48575,_,fn1,meta48578){
this.f = f;
this.ch = ch;
this.meta48575 = meta48575;
this._ = _;
this.fn1 = fn1;
this.meta48578 = meta48578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48579,meta48578__$1){
var self__ = this;
var _48579__$1 = this;
return (new cljs.core.async.t_cljs$core$async48577(self__.f,self__.ch,self__.meta48575,self__._,self__.fn1,meta48578__$1));
}));

(cljs.core.async.t_cljs$core$async48577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48579){
var self__ = this;
var _48579__$1 = this;
return self__.meta48578;
}));

(cljs.core.async.t_cljs$core$async48577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48573_SHARP_){
var G__48580 = (((p1__48573_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48573_SHARP_) : self__.f.call(null,p1__48573_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48580) : f1.call(null,G__48580));
});
}));

(cljs.core.async.t_cljs$core$async48577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48575","meta48575",-802920375,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48574","cljs.core.async/t_cljs$core$async48574",1588963335,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48578","meta48578",-2011594713,null)], null);
}));

(cljs.core.async.t_cljs$core$async48577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48577");

(cljs.core.async.t_cljs$core$async48577.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48577.
 */
cljs.core.async.__GT_t_cljs$core$async48577 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48577(f__$1,ch__$1,meta48575__$1,___$2,fn1__$1,meta48578){
return (new cljs.core.async.t_cljs$core$async48577(f__$1,ch__$1,meta48575__$1,___$2,fn1__$1,meta48578));
});

}

return (new cljs.core.async.t_cljs$core$async48577(self__.f,self__.ch,self__.meta48575,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48581 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48581) : self__.f.call(null,G__48581));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48575","meta48575",-802920375,null)], null);
}));

(cljs.core.async.t_cljs$core$async48574.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48574");

(cljs.core.async.t_cljs$core$async48574.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48574");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48574.
 */
cljs.core.async.__GT_t_cljs$core$async48574 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48574(f__$1,ch__$1,meta48575){
return (new cljs.core.async.t_cljs$core$async48574(f__$1,ch__$1,meta48575));
});

}

return (new cljs.core.async.t_cljs$core$async48574(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48583 = (function (f,ch,meta48584){
this.f = f;
this.ch = ch;
this.meta48584 = meta48584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48585,meta48584__$1){
var self__ = this;
var _48585__$1 = this;
return (new cljs.core.async.t_cljs$core$async48583(self__.f,self__.ch,meta48584__$1));
}));

(cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48585){
var self__ = this;
var _48585__$1 = this;
return self__.meta48584;
}));

(cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48584","meta48584",1660033797,null)], null);
}));

(cljs.core.async.t_cljs$core$async48583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48583");

(cljs.core.async.t_cljs$core$async48583.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48583.
 */
cljs.core.async.__GT_t_cljs$core$async48583 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48583(f__$1,ch__$1,meta48584){
return (new cljs.core.async.t_cljs$core$async48583(f__$1,ch__$1,meta48584));
});

}

return (new cljs.core.async.t_cljs$core$async48583(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48593 = (function (p,ch,meta48594){
this.p = p;
this.ch = ch;
this.meta48594 = meta48594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48595,meta48594__$1){
var self__ = this;
var _48595__$1 = this;
return (new cljs.core.async.t_cljs$core$async48593(self__.p,self__.ch,meta48594__$1));
}));

(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48595){
var self__ = this;
var _48595__$1 = this;
return self__.meta48594;
}));

(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48594","meta48594",-2023947982,null)], null);
}));

(cljs.core.async.t_cljs$core$async48593.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48593");

(cljs.core.async.t_cljs$core$async48593.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48593");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48593.
 */
cljs.core.async.__GT_t_cljs$core$async48593 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48593(p__$1,ch__$1,meta48594){
return (new cljs.core.async.t_cljs$core$async48593(p__$1,ch__$1,meta48594));
});

}

return (new cljs.core.async.t_cljs$core$async48593(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48617 = arguments.length;
switch (G__48617) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46806__auto___49866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48658){
var state_val_48659 = (state_48658[(1)]);
if((state_val_48659 === (7))){
var inst_48648 = (state_48658[(2)]);
var state_48658__$1 = state_48658;
var statearr_48660_49871 = state_48658__$1;
(statearr_48660_49871[(2)] = inst_48648);

(statearr_48660_49871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48659 === (1))){
var state_48658__$1 = state_48658;
var statearr_48661_49872 = state_48658__$1;
(statearr_48661_49872[(2)] = null);

(statearr_48661_49872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48659 === (4))){
var inst_48634 = (state_48658[(7)]);
var inst_48634__$1 = (state_48658[(2)]);
var inst_48635 = (inst_48634__$1 == null);
var state_48658__$1 = (function (){var statearr_48664 = state_48658;
(statearr_48664[(7)] = inst_48634__$1);

return statearr_48664;
})();
if(cljs.core.truth_(inst_48635)){
var statearr_48665_49874 = state_48658__$1;
(statearr_48665_49874[(1)] = (5));

} else {
var statearr_48666_49875 = state_48658__$1;
(statearr_48666_49875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48659 === (6))){
var inst_48634 = (state_48658[(7)]);
var inst_48639 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48634) : p.call(null,inst_48634));
var state_48658__$1 = state_48658;
if(cljs.core.truth_(inst_48639)){
var statearr_48667_49877 = state_48658__$1;
(statearr_48667_49877[(1)] = (8));

} else {
var statearr_48668_49878 = state_48658__$1;
(statearr_48668_49878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48659 === (3))){
var inst_48650 = (state_48658[(2)]);
var state_48658__$1 = state_48658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48658__$1,inst_48650);
} else {
if((state_val_48659 === (2))){
var state_48658__$1 = state_48658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48658__$1,(4),ch);
} else {
if((state_val_48659 === (11))){
var inst_48642 = (state_48658[(2)]);
var state_48658__$1 = state_48658;
var statearr_48670_49879 = state_48658__$1;
(statearr_48670_49879[(2)] = inst_48642);

(statearr_48670_49879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48659 === (9))){
var state_48658__$1 = state_48658;
var statearr_48671_49880 = state_48658__$1;
(statearr_48671_49880[(2)] = null);

(statearr_48671_49880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48659 === (5))){
var inst_48637 = cljs.core.async.close_BANG_(out);
var state_48658__$1 = state_48658;
var statearr_48672_49881 = state_48658__$1;
(statearr_48672_49881[(2)] = inst_48637);

(statearr_48672_49881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48659 === (10))){
var inst_48645 = (state_48658[(2)]);
var state_48658__$1 = (function (){var statearr_48673 = state_48658;
(statearr_48673[(8)] = inst_48645);

return statearr_48673;
})();
var statearr_48674_49884 = state_48658__$1;
(statearr_48674_49884[(2)] = null);

(statearr_48674_49884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48659 === (8))){
var inst_48634 = (state_48658[(7)]);
var state_48658__$1 = state_48658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48658__$1,(11),out,inst_48634);
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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48678 = [null,null,null,null,null,null,null,null,null];
(statearr_48678[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48678[(1)] = (1));

return statearr_48678;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48658){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48658);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48679){var ex__46458__auto__ = e48679;
var statearr_48680_49890 = state_48658;
(statearr_48680_49890[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48658[(4)]))){
var statearr_48681_49891 = state_48658;
(statearr_48681_49891[(1)] = cljs.core.first((state_48658[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49892 = state_48658;
state_48658 = G__49892;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48682 = f__46807__auto__();
(statearr_48682[(6)] = c__46806__auto___49866);

return statearr_48682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48684 = arguments.length;
switch (G__48684) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46806__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48746){
var state_val_48747 = (state_48746[(1)]);
if((state_val_48747 === (7))){
var inst_48742 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48759_49894 = state_48746__$1;
(statearr_48759_49894[(2)] = inst_48742);

(statearr_48759_49894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (20))){
var inst_48712 = (state_48746[(7)]);
var inst_48723 = (state_48746[(2)]);
var inst_48724 = cljs.core.next(inst_48712);
var inst_48698 = inst_48724;
var inst_48699 = null;
var inst_48700 = (0);
var inst_48701 = (0);
var state_48746__$1 = (function (){var statearr_48760 = state_48746;
(statearr_48760[(8)] = inst_48701);

(statearr_48760[(9)] = inst_48700);

(statearr_48760[(10)] = inst_48699);

(statearr_48760[(11)] = inst_48723);

(statearr_48760[(12)] = inst_48698);

return statearr_48760;
})();
var statearr_48761_49896 = state_48746__$1;
(statearr_48761_49896[(2)] = null);

(statearr_48761_49896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (1))){
var state_48746__$1 = state_48746;
var statearr_48762_49897 = state_48746__$1;
(statearr_48762_49897[(2)] = null);

(statearr_48762_49897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (4))){
var inst_48687 = (state_48746[(13)]);
var inst_48687__$1 = (state_48746[(2)]);
var inst_48688 = (inst_48687__$1 == null);
var state_48746__$1 = (function (){var statearr_48763 = state_48746;
(statearr_48763[(13)] = inst_48687__$1);

return statearr_48763;
})();
if(cljs.core.truth_(inst_48688)){
var statearr_48764_49898 = state_48746__$1;
(statearr_48764_49898[(1)] = (5));

} else {
var statearr_48765_49899 = state_48746__$1;
(statearr_48765_49899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (15))){
var state_48746__$1 = state_48746;
var statearr_48769_49900 = state_48746__$1;
(statearr_48769_49900[(2)] = null);

(statearr_48769_49900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (21))){
var state_48746__$1 = state_48746;
var statearr_48770_49901 = state_48746__$1;
(statearr_48770_49901[(2)] = null);

(statearr_48770_49901[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (13))){
var inst_48701 = (state_48746[(8)]);
var inst_48700 = (state_48746[(9)]);
var inst_48699 = (state_48746[(10)]);
var inst_48698 = (state_48746[(12)]);
var inst_48708 = (state_48746[(2)]);
var inst_48709 = (inst_48701 + (1));
var tmp48766 = inst_48700;
var tmp48767 = inst_48699;
var tmp48768 = inst_48698;
var inst_48698__$1 = tmp48768;
var inst_48699__$1 = tmp48767;
var inst_48700__$1 = tmp48766;
var inst_48701__$1 = inst_48709;
var state_48746__$1 = (function (){var statearr_48771 = state_48746;
(statearr_48771[(8)] = inst_48701__$1);

(statearr_48771[(9)] = inst_48700__$1);

(statearr_48771[(10)] = inst_48699__$1);

(statearr_48771[(12)] = inst_48698__$1);

(statearr_48771[(14)] = inst_48708);

return statearr_48771;
})();
var statearr_48772_49902 = state_48746__$1;
(statearr_48772_49902[(2)] = null);

(statearr_48772_49902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (22))){
var state_48746__$1 = state_48746;
var statearr_48773_49903 = state_48746__$1;
(statearr_48773_49903[(2)] = null);

(statearr_48773_49903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (6))){
var inst_48687 = (state_48746[(13)]);
var inst_48696 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48687) : f.call(null,inst_48687));
var inst_48697 = cljs.core.seq(inst_48696);
var inst_48698 = inst_48697;
var inst_48699 = null;
var inst_48700 = (0);
var inst_48701 = (0);
var state_48746__$1 = (function (){var statearr_48776 = state_48746;
(statearr_48776[(8)] = inst_48701);

(statearr_48776[(9)] = inst_48700);

(statearr_48776[(10)] = inst_48699);

(statearr_48776[(12)] = inst_48698);

return statearr_48776;
})();
var statearr_48777_49907 = state_48746__$1;
(statearr_48777_49907[(2)] = null);

(statearr_48777_49907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (17))){
var inst_48712 = (state_48746[(7)]);
var inst_48716 = cljs.core.chunk_first(inst_48712);
var inst_48717 = cljs.core.chunk_rest(inst_48712);
var inst_48718 = cljs.core.count(inst_48716);
var inst_48698 = inst_48717;
var inst_48699 = inst_48716;
var inst_48700 = inst_48718;
var inst_48701 = (0);
var state_48746__$1 = (function (){var statearr_48778 = state_48746;
(statearr_48778[(8)] = inst_48701);

(statearr_48778[(9)] = inst_48700);

(statearr_48778[(10)] = inst_48699);

(statearr_48778[(12)] = inst_48698);

return statearr_48778;
})();
var statearr_48780_49911 = state_48746__$1;
(statearr_48780_49911[(2)] = null);

(statearr_48780_49911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (3))){
var inst_48744 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48746__$1,inst_48744);
} else {
if((state_val_48747 === (12))){
var inst_48732 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48782_49912 = state_48746__$1;
(statearr_48782_49912[(2)] = inst_48732);

(statearr_48782_49912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (2))){
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48746__$1,(4),in$);
} else {
if((state_val_48747 === (23))){
var inst_48740 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48784_49917 = state_48746__$1;
(statearr_48784_49917[(2)] = inst_48740);

(statearr_48784_49917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (19))){
var inst_48727 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48786_49918 = state_48746__$1;
(statearr_48786_49918[(2)] = inst_48727);

(statearr_48786_49918[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (11))){
var inst_48698 = (state_48746[(12)]);
var inst_48712 = (state_48746[(7)]);
var inst_48712__$1 = cljs.core.seq(inst_48698);
var state_48746__$1 = (function (){var statearr_48787 = state_48746;
(statearr_48787[(7)] = inst_48712__$1);

return statearr_48787;
})();
if(inst_48712__$1){
var statearr_48788_49919 = state_48746__$1;
(statearr_48788_49919[(1)] = (14));

} else {
var statearr_48789_49920 = state_48746__$1;
(statearr_48789_49920[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (9))){
var inst_48734 = (state_48746[(2)]);
var inst_48735 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48746__$1 = (function (){var statearr_48790 = state_48746;
(statearr_48790[(15)] = inst_48734);

return statearr_48790;
})();
if(cljs.core.truth_(inst_48735)){
var statearr_48792_49921 = state_48746__$1;
(statearr_48792_49921[(1)] = (21));

} else {
var statearr_48794_49922 = state_48746__$1;
(statearr_48794_49922[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (5))){
var inst_48690 = cljs.core.async.close_BANG_(out);
var state_48746__$1 = state_48746;
var statearr_48795_49923 = state_48746__$1;
(statearr_48795_49923[(2)] = inst_48690);

(statearr_48795_49923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (14))){
var inst_48712 = (state_48746[(7)]);
var inst_48714 = cljs.core.chunked_seq_QMARK_(inst_48712);
var state_48746__$1 = state_48746;
if(inst_48714){
var statearr_48796_49926 = state_48746__$1;
(statearr_48796_49926[(1)] = (17));

} else {
var statearr_48797_49930 = state_48746__$1;
(statearr_48797_49930[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (16))){
var inst_48730 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48798_49931 = state_48746__$1;
(statearr_48798_49931[(2)] = inst_48730);

(statearr_48798_49931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (10))){
var inst_48701 = (state_48746[(8)]);
var inst_48699 = (state_48746[(10)]);
var inst_48706 = cljs.core._nth(inst_48699,inst_48701);
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48746__$1,(13),out,inst_48706);
} else {
if((state_val_48747 === (18))){
var inst_48712 = (state_48746[(7)]);
var inst_48721 = cljs.core.first(inst_48712);
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48746__$1,(20),out,inst_48721);
} else {
if((state_val_48747 === (8))){
var inst_48701 = (state_48746[(8)]);
var inst_48700 = (state_48746[(9)]);
var inst_48703 = (inst_48701 < inst_48700);
var inst_48704 = inst_48703;
var state_48746__$1 = state_48746;
if(cljs.core.truth_(inst_48704)){
var statearr_48799_49932 = state_48746__$1;
(statearr_48799_49932[(1)] = (10));

} else {
var statearr_48800_49933 = state_48746__$1;
(statearr_48800_49933[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_48801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48801[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__);

(statearr_48801[(1)] = (1));

return statearr_48801;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____1 = (function (state_48746){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48746);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48802){var ex__46458__auto__ = e48802;
var statearr_48803_49944 = state_48746;
(statearr_48803_49944[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48746[(4)]))){
var statearr_48804_49945 = state_48746;
(statearr_48804_49945[(1)] = cljs.core.first((state_48746[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49948 = state_48746;
state_48746 = G__49948;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__ = function(state_48746){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____1.call(this,state_48746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48805 = f__46807__auto__();
(statearr_48805[(6)] = c__46806__auto__);

return statearr_48805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));

return c__46806__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48810 = arguments.length;
switch (G__48810) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48812 = arguments.length;
switch (G__48812) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48827 = arguments.length;
switch (G__48827) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46806__auto___49966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48878){
var state_val_48879 = (state_48878[(1)]);
if((state_val_48879 === (7))){
var inst_48869 = (state_48878[(2)]);
var state_48878__$1 = state_48878;
var statearr_48882_49971 = state_48878__$1;
(statearr_48882_49971[(2)] = inst_48869);

(statearr_48882_49971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (1))){
var inst_48838 = null;
var state_48878__$1 = (function (){var statearr_48883 = state_48878;
(statearr_48883[(7)] = inst_48838);

return statearr_48883;
})();
var statearr_48884_49973 = state_48878__$1;
(statearr_48884_49973[(2)] = null);

(statearr_48884_49973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (4))){
var inst_48848 = (state_48878[(8)]);
var inst_48848__$1 = (state_48878[(2)]);
var inst_48852 = (inst_48848__$1 == null);
var inst_48853 = cljs.core.not(inst_48852);
var state_48878__$1 = (function (){var statearr_48885 = state_48878;
(statearr_48885[(8)] = inst_48848__$1);

return statearr_48885;
})();
if(inst_48853){
var statearr_48886_49977 = state_48878__$1;
(statearr_48886_49977[(1)] = (5));

} else {
var statearr_48887_49978 = state_48878__$1;
(statearr_48887_49978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (6))){
var state_48878__$1 = state_48878;
var statearr_48888_49980 = state_48878__$1;
(statearr_48888_49980[(2)] = null);

(statearr_48888_49980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (3))){
var inst_48871 = (state_48878[(2)]);
var inst_48872 = cljs.core.async.close_BANG_(out);
var state_48878__$1 = (function (){var statearr_48889 = state_48878;
(statearr_48889[(9)] = inst_48871);

return statearr_48889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48878__$1,inst_48872);
} else {
if((state_val_48879 === (2))){
var state_48878__$1 = state_48878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48878__$1,(4),ch);
} else {
if((state_val_48879 === (11))){
var inst_48848 = (state_48878[(8)]);
var inst_48863 = (state_48878[(2)]);
var inst_48838 = inst_48848;
var state_48878__$1 = (function (){var statearr_48890 = state_48878;
(statearr_48890[(10)] = inst_48863);

(statearr_48890[(7)] = inst_48838);

return statearr_48890;
})();
var statearr_48891_49984 = state_48878__$1;
(statearr_48891_49984[(2)] = null);

(statearr_48891_49984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (9))){
var inst_48848 = (state_48878[(8)]);
var state_48878__$1 = state_48878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48878__$1,(11),out,inst_48848);
} else {
if((state_val_48879 === (5))){
var inst_48848 = (state_48878[(8)]);
var inst_48838 = (state_48878[(7)]);
var inst_48855 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48848,inst_48838);
var state_48878__$1 = state_48878;
if(inst_48855){
var statearr_48893_49985 = state_48878__$1;
(statearr_48893_49985[(1)] = (8));

} else {
var statearr_48894_49986 = state_48878__$1;
(statearr_48894_49986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (10))){
var inst_48866 = (state_48878[(2)]);
var state_48878__$1 = state_48878;
var statearr_48895_49987 = state_48878__$1;
(statearr_48895_49987[(2)] = inst_48866);

(statearr_48895_49987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48879 === (8))){
var inst_48838 = (state_48878[(7)]);
var tmp48892 = inst_48838;
var inst_48838__$1 = tmp48892;
var state_48878__$1 = (function (){var statearr_48896 = state_48878;
(statearr_48896[(7)] = inst_48838__$1);

return statearr_48896;
})();
var statearr_48897_49988 = state_48878__$1;
(statearr_48897_49988[(2)] = null);

(statearr_48897_49988[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48898[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48898[(1)] = (1));

return statearr_48898;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48878){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48878);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48899){var ex__46458__auto__ = e48899;
var statearr_48900_49989 = state_48878;
(statearr_48900_49989[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48878[(4)]))){
var statearr_48901_49990 = state_48878;
(statearr_48901_49990[(1)] = cljs.core.first((state_48878[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49991 = state_48878;
state_48878 = G__49991;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48902 = f__46807__auto__();
(statearr_48902[(6)] = c__46806__auto___49966);

return statearr_48902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48904 = arguments.length;
switch (G__48904) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46806__auto___49993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_48944){
var state_val_48945 = (state_48944[(1)]);
if((state_val_48945 === (7))){
var inst_48940 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
var statearr_48957_49995 = state_48944__$1;
(statearr_48957_49995[(2)] = inst_48940);

(statearr_48957_49995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (1))){
var inst_48905 = (new Array(n));
var inst_48906 = inst_48905;
var inst_48907 = (0);
var state_48944__$1 = (function (){var statearr_48958 = state_48944;
(statearr_48958[(7)] = inst_48906);

(statearr_48958[(8)] = inst_48907);

return statearr_48958;
})();
var statearr_48959_49996 = state_48944__$1;
(statearr_48959_49996[(2)] = null);

(statearr_48959_49996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (4))){
var inst_48911 = (state_48944[(9)]);
var inst_48911__$1 = (state_48944[(2)]);
var inst_48913 = (inst_48911__$1 == null);
var inst_48914 = cljs.core.not(inst_48913);
var state_48944__$1 = (function (){var statearr_48960 = state_48944;
(statearr_48960[(9)] = inst_48911__$1);

return statearr_48960;
})();
if(inst_48914){
var statearr_48961_50000 = state_48944__$1;
(statearr_48961_50000[(1)] = (5));

} else {
var statearr_48963_50001 = state_48944__$1;
(statearr_48963_50001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (15))){
var inst_48934 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
var statearr_48964_50002 = state_48944__$1;
(statearr_48964_50002[(2)] = inst_48934);

(statearr_48964_50002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (13))){
var state_48944__$1 = state_48944;
var statearr_48965_50003 = state_48944__$1;
(statearr_48965_50003[(2)] = null);

(statearr_48965_50003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (6))){
var inst_48907 = (state_48944[(8)]);
var inst_48930 = (inst_48907 > (0));
var state_48944__$1 = state_48944;
if(cljs.core.truth_(inst_48930)){
var statearr_48967_50004 = state_48944__$1;
(statearr_48967_50004[(1)] = (12));

} else {
var statearr_48968_50005 = state_48944__$1;
(statearr_48968_50005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (3))){
var inst_48942 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48944__$1,inst_48942);
} else {
if((state_val_48945 === (12))){
var inst_48906 = (state_48944[(7)]);
var inst_48932 = cljs.core.vec(inst_48906);
var state_48944__$1 = state_48944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48944__$1,(15),out,inst_48932);
} else {
if((state_val_48945 === (2))){
var state_48944__$1 = state_48944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48944__$1,(4),ch);
} else {
if((state_val_48945 === (11))){
var inst_48924 = (state_48944[(2)]);
var inst_48925 = (new Array(n));
var inst_48906 = inst_48925;
var inst_48907 = (0);
var state_48944__$1 = (function (){var statearr_48969 = state_48944;
(statearr_48969[(7)] = inst_48906);

(statearr_48969[(10)] = inst_48924);

(statearr_48969[(8)] = inst_48907);

return statearr_48969;
})();
var statearr_48970_50006 = state_48944__$1;
(statearr_48970_50006[(2)] = null);

(statearr_48970_50006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (9))){
var inst_48906 = (state_48944[(7)]);
var inst_48922 = cljs.core.vec(inst_48906);
var state_48944__$1 = state_48944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48944__$1,(11),out,inst_48922);
} else {
if((state_val_48945 === (5))){
var inst_48906 = (state_48944[(7)]);
var inst_48911 = (state_48944[(9)]);
var inst_48907 = (state_48944[(8)]);
var inst_48917 = (state_48944[(11)]);
var inst_48916 = (inst_48906[inst_48907] = inst_48911);
var inst_48917__$1 = (inst_48907 + (1));
var inst_48918 = (inst_48917__$1 < n);
var state_48944__$1 = (function (){var statearr_48971 = state_48944;
(statearr_48971[(12)] = inst_48916);

(statearr_48971[(11)] = inst_48917__$1);

return statearr_48971;
})();
if(cljs.core.truth_(inst_48918)){
var statearr_48972_50007 = state_48944__$1;
(statearr_48972_50007[(1)] = (8));

} else {
var statearr_48973_50008 = state_48944__$1;
(statearr_48973_50008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (14))){
var inst_48937 = (state_48944[(2)]);
var inst_48938 = cljs.core.async.close_BANG_(out);
var state_48944__$1 = (function (){var statearr_48975 = state_48944;
(statearr_48975[(13)] = inst_48937);

return statearr_48975;
})();
var statearr_48976_50010 = state_48944__$1;
(statearr_48976_50010[(2)] = inst_48938);

(statearr_48976_50010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (10))){
var inst_48928 = (state_48944[(2)]);
var state_48944__$1 = state_48944;
var statearr_48977_50013 = state_48944__$1;
(statearr_48977_50013[(2)] = inst_48928);

(statearr_48977_50013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48945 === (8))){
var inst_48906 = (state_48944[(7)]);
var inst_48917 = (state_48944[(11)]);
var tmp48974 = inst_48906;
var inst_48906__$1 = tmp48974;
var inst_48907 = inst_48917;
var state_48944__$1 = (function (){var statearr_48978 = state_48944;
(statearr_48978[(7)] = inst_48906__$1);

(statearr_48978[(8)] = inst_48907);

return statearr_48978;
})();
var statearr_48979_50014 = state_48944__$1;
(statearr_48979_50014[(2)] = null);

(statearr_48979_50014[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48980[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48980[(1)] = (1));

return statearr_48980;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48944){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_48944);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48981){var ex__46458__auto__ = e48981;
var statearr_48982_50015 = state_48944;
(statearr_48982_50015[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_48944[(4)]))){
var statearr_48983_50016 = state_48944;
(statearr_48983_50016[(1)] = cljs.core.first((state_48944[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50017 = state_48944;
state_48944 = G__50017;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_48984 = f__46807__auto__();
(statearr_48984[(6)] = c__46806__auto___49993);

return statearr_48984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48989 = arguments.length;
switch (G__48989) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46806__auto___50020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_49044){
var state_val_49045 = (state_49044[(1)]);
if((state_val_49045 === (7))){
var inst_49040 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
var statearr_49046_50021 = state_49044__$1;
(statearr_49046_50021[(2)] = inst_49040);

(statearr_49046_50021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (1))){
var inst_48999 = [];
var inst_49000 = inst_48999;
var inst_49001 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49044__$1 = (function (){var statearr_49047 = state_49044;
(statearr_49047[(7)] = inst_49000);

(statearr_49047[(8)] = inst_49001);

return statearr_49047;
})();
var statearr_49048_50022 = state_49044__$1;
(statearr_49048_50022[(2)] = null);

(statearr_49048_50022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (4))){
var inst_49004 = (state_49044[(9)]);
var inst_49004__$1 = (state_49044[(2)]);
var inst_49005 = (inst_49004__$1 == null);
var inst_49006 = cljs.core.not(inst_49005);
var state_49044__$1 = (function (){var statearr_49049 = state_49044;
(statearr_49049[(9)] = inst_49004__$1);

return statearr_49049;
})();
if(inst_49006){
var statearr_49050_50023 = state_49044__$1;
(statearr_49050_50023[(1)] = (5));

} else {
var statearr_49051_50028 = state_49044__$1;
(statearr_49051_50028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (15))){
var inst_49000 = (state_49044[(7)]);
var inst_49032 = cljs.core.vec(inst_49000);
var state_49044__$1 = state_49044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49044__$1,(18),out,inst_49032);
} else {
if((state_val_49045 === (13))){
var inst_49027 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
var statearr_49052_50033 = state_49044__$1;
(statearr_49052_50033[(2)] = inst_49027);

(statearr_49052_50033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (6))){
var inst_49000 = (state_49044[(7)]);
var inst_49029 = inst_49000.length;
var inst_49030 = (inst_49029 > (0));
var state_49044__$1 = state_49044;
if(cljs.core.truth_(inst_49030)){
var statearr_49053_50038 = state_49044__$1;
(statearr_49053_50038[(1)] = (15));

} else {
var statearr_49054_50039 = state_49044__$1;
(statearr_49054_50039[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (17))){
var inst_49037 = (state_49044[(2)]);
var inst_49038 = cljs.core.async.close_BANG_(out);
var state_49044__$1 = (function (){var statearr_49057 = state_49044;
(statearr_49057[(10)] = inst_49037);

return statearr_49057;
})();
var statearr_49058_50041 = state_49044__$1;
(statearr_49058_50041[(2)] = inst_49038);

(statearr_49058_50041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (3))){
var inst_49042 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49044__$1,inst_49042);
} else {
if((state_val_49045 === (12))){
var inst_49000 = (state_49044[(7)]);
var inst_49020 = cljs.core.vec(inst_49000);
var state_49044__$1 = state_49044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49044__$1,(14),out,inst_49020);
} else {
if((state_val_49045 === (2))){
var state_49044__$1 = state_49044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49044__$1,(4),ch);
} else {
if((state_val_49045 === (11))){
var inst_49000 = (state_49044[(7)]);
var inst_49004 = (state_49044[(9)]);
var inst_49008 = (state_49044[(11)]);
var inst_49016 = inst_49000.push(inst_49004);
var tmp49059 = inst_49000;
var inst_49000__$1 = tmp49059;
var inst_49001 = inst_49008;
var state_49044__$1 = (function (){var statearr_49061 = state_49044;
(statearr_49061[(12)] = inst_49016);

(statearr_49061[(7)] = inst_49000__$1);

(statearr_49061[(8)] = inst_49001);

return statearr_49061;
})();
var statearr_49062_50047 = state_49044__$1;
(statearr_49062_50047[(2)] = null);

(statearr_49062_50047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (9))){
var inst_49001 = (state_49044[(8)]);
var inst_49012 = cljs.core.keyword_identical_QMARK_(inst_49001,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49044__$1 = state_49044;
var statearr_49064_50050 = state_49044__$1;
(statearr_49064_50050[(2)] = inst_49012);

(statearr_49064_50050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (5))){
var inst_49009 = (state_49044[(13)]);
var inst_49004 = (state_49044[(9)]);
var inst_49008 = (state_49044[(11)]);
var inst_49001 = (state_49044[(8)]);
var inst_49008__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49004) : f.call(null,inst_49004));
var inst_49009__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49008__$1,inst_49001);
var state_49044__$1 = (function (){var statearr_49065 = state_49044;
(statearr_49065[(13)] = inst_49009__$1);

(statearr_49065[(11)] = inst_49008__$1);

return statearr_49065;
})();
if(inst_49009__$1){
var statearr_49066_50052 = state_49044__$1;
(statearr_49066_50052[(1)] = (8));

} else {
var statearr_49067_50053 = state_49044__$1;
(statearr_49067_50053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (14))){
var inst_49004 = (state_49044[(9)]);
var inst_49008 = (state_49044[(11)]);
var inst_49022 = (state_49044[(2)]);
var inst_49023 = [];
var inst_49024 = inst_49023.push(inst_49004);
var inst_49000 = inst_49023;
var inst_49001 = inst_49008;
var state_49044__$1 = (function (){var statearr_49068 = state_49044;
(statearr_49068[(14)] = inst_49024);

(statearr_49068[(15)] = inst_49022);

(statearr_49068[(7)] = inst_49000);

(statearr_49068[(8)] = inst_49001);

return statearr_49068;
})();
var statearr_49069_50058 = state_49044__$1;
(statearr_49069_50058[(2)] = null);

(statearr_49069_50058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (16))){
var state_49044__$1 = state_49044;
var statearr_49070_50059 = state_49044__$1;
(statearr_49070_50059[(2)] = null);

(statearr_49070_50059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (10))){
var inst_49014 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
if(cljs.core.truth_(inst_49014)){
var statearr_49071_50060 = state_49044__$1;
(statearr_49071_50060[(1)] = (11));

} else {
var statearr_49072_50061 = state_49044__$1;
(statearr_49072_50061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (18))){
var inst_49034 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
var statearr_49073_50062 = state_49044__$1;
(statearr_49073_50062[(2)] = inst_49034);

(statearr_49073_50062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (8))){
var inst_49009 = (state_49044[(13)]);
var state_49044__$1 = state_49044;
var statearr_49081_50063 = state_49044__$1;
(statearr_49081_50063[(2)] = inst_49009);

(statearr_49081_50063[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_49083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49083[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_49083[(1)] = (1));

return statearr_49083;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_49044){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_49044);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e49084){var ex__46458__auto__ = e49084;
var statearr_49085_50068 = state_49044;
(statearr_49085_50068[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_49044[(4)]))){
var statearr_49086_50069 = state_49044;
(statearr_49086_50069[(1)] = cljs.core.first((state_49044[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50071 = state_49044;
state_49044 = G__50071;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_49044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_49044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_49096 = f__46807__auto__();
(statearr_49096[(6)] = c__46806__auto___50020);

return statearr_49096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
