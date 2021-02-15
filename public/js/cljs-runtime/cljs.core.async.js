goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28584 = arguments.length;
switch (G__28584) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28589 = (function (f,blockable,meta28590){
this.f = f;
this.blockable = blockable;
this.meta28590 = meta28590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28591,meta28590__$1){
var self__ = this;
var _28591__$1 = this;
return (new cljs.core.async.t_cljs$core$async28589(self__.f,self__.blockable,meta28590__$1));
}));

(cljs.core.async.t_cljs$core$async28589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28591){
var self__ = this;
var _28591__$1 = this;
return self__.meta28590;
}));

(cljs.core.async.t_cljs$core$async28589.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28590","meta28590",632113454,null)], null);
}));

(cljs.core.async.t_cljs$core$async28589.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28589");

(cljs.core.async.t_cljs$core$async28589.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28589");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28589.
 */
cljs.core.async.__GT_t_cljs$core$async28589 = (function cljs$core$async$__GT_t_cljs$core$async28589(f__$1,blockable__$1,meta28590){
return (new cljs.core.async.t_cljs$core$async28589(f__$1,blockable__$1,meta28590));
});

}

return (new cljs.core.async.t_cljs$core$async28589(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28669 = arguments.length;
switch (G__28669) {
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
var G__28689 = arguments.length;
switch (G__28689) {
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
var G__28712 = arguments.length;
switch (G__28712) {
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
var val_31993 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31993) : fn1.call(null,val_31993));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31993) : fn1.call(null,val_31993));
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
var G__28734 = arguments.length;
switch (G__28734) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___32018 = n;
var x_32019 = (0);
while(true){
if((x_32019 < n__4613__auto___32018)){
(a[x_32019] = x_32019);

var G__32021 = (x_32019 + (1));
x_32019 = G__32021;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28748 = (function (flag,meta28749){
this.flag = flag;
this.meta28749 = meta28749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28750,meta28749__$1){
var self__ = this;
var _28750__$1 = this;
return (new cljs.core.async.t_cljs$core$async28748(self__.flag,meta28749__$1));
}));

(cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28750){
var self__ = this;
var _28750__$1 = this;
return self__.meta28749;
}));

(cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28749","meta28749",-974902901,null)], null);
}));

(cljs.core.async.t_cljs$core$async28748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28748");

(cljs.core.async.t_cljs$core$async28748.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28748.
 */
cljs.core.async.__GT_t_cljs$core$async28748 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28748(flag__$1,meta28749){
return (new cljs.core.async.t_cljs$core$async28748(flag__$1,meta28749));
});

}

return (new cljs.core.async.t_cljs$core$async28748(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28776 = (function (flag,cb,meta28777){
this.flag = flag;
this.cb = cb;
this.meta28777 = meta28777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28778,meta28777__$1){
var self__ = this;
var _28778__$1 = this;
return (new cljs.core.async.t_cljs$core$async28776(self__.flag,self__.cb,meta28777__$1));
}));

(cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28778){
var self__ = this;
var _28778__$1 = this;
return self__.meta28777;
}));

(cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28777","meta28777",496420228,null)], null);
}));

(cljs.core.async.t_cljs$core$async28776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28776");

(cljs.core.async.t_cljs$core$async28776.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28776.
 */
cljs.core.async.__GT_t_cljs$core$async28776 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28776(flag__$1,cb__$1,meta28777){
return (new cljs.core.async.t_cljs$core$async28776(flag__$1,cb__$1,meta28777));
});

}

return (new cljs.core.async.t_cljs$core$async28776(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28800_SHARP_){
var G__28812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28800_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28812) : fret.call(null,G__28812));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28801_SHARP_){
var G__28813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28801_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28813) : fret.call(null,G__28813));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32062 = (i + (1));
i = G__32062;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___32068 = arguments.length;
var i__4737__auto___32069 = (0);
while(true){
if((i__4737__auto___32069 < len__4736__auto___32068)){
args__4742__auto__.push((arguments[i__4737__auto___32069]));

var G__32070 = (i__4737__auto___32069 + (1));
i__4737__auto___32069 = G__32070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28825){
var map__28826 = p__28825;
var map__28826__$1 = (((((!((map__28826 == null))))?(((((map__28826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28826):map__28826);
var opts = map__28826__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28819){
var G__28821 = cljs.core.first(seq28819);
var seq28819__$1 = cljs.core.next(seq28819);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28821,seq28819__$1);
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
var G__28836 = arguments.length;
switch (G__28836) {
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
var c__28476__auto___32091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_28904){
var state_val_28905 = (state_28904[(1)]);
if((state_val_28905 === (7))){
var inst_28897 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
var statearr_28916_32098 = state_28904__$1;
(statearr_28916_32098[(2)] = inst_28897);

(statearr_28916_32098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (1))){
var state_28904__$1 = state_28904;
var statearr_28917_32099 = state_28904__$1;
(statearr_28917_32099[(2)] = null);

(statearr_28917_32099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (4))){
var inst_28873 = (state_28904[(7)]);
var inst_28873__$1 = (state_28904[(2)]);
var inst_28875 = (inst_28873__$1 == null);
var state_28904__$1 = (function (){var statearr_28924 = state_28904;
(statearr_28924[(7)] = inst_28873__$1);

return statearr_28924;
})();
if(cljs.core.truth_(inst_28875)){
var statearr_28925_32103 = state_28904__$1;
(statearr_28925_32103[(1)] = (5));

} else {
var statearr_28926_32108 = state_28904__$1;
(statearr_28926_32108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (13))){
var state_28904__$1 = state_28904;
var statearr_28927_32109 = state_28904__$1;
(statearr_28927_32109[(2)] = null);

(statearr_28927_32109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (6))){
var inst_28873 = (state_28904[(7)]);
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28904__$1,(11),to,inst_28873);
} else {
if((state_val_28905 === (3))){
var inst_28902 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28904__$1,inst_28902);
} else {
if((state_val_28905 === (12))){
var state_28904__$1 = state_28904;
var statearr_28942_32116 = state_28904__$1;
(statearr_28942_32116[(2)] = null);

(statearr_28942_32116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (2))){
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28904__$1,(4),from);
} else {
if((state_val_28905 === (11))){
var inst_28885 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
if(cljs.core.truth_(inst_28885)){
var statearr_28946_32119 = state_28904__$1;
(statearr_28946_32119[(1)] = (12));

} else {
var statearr_28948_32120 = state_28904__$1;
(statearr_28948_32120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (9))){
var state_28904__$1 = state_28904;
var statearr_28949_32124 = state_28904__$1;
(statearr_28949_32124[(2)] = null);

(statearr_28949_32124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (5))){
var state_28904__$1 = state_28904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28950_32125 = state_28904__$1;
(statearr_28950_32125[(1)] = (8));

} else {
var statearr_28951_32126 = state_28904__$1;
(statearr_28951_32126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (14))){
var inst_28895 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
var statearr_28952_32127 = state_28904__$1;
(statearr_28952_32127[(2)] = inst_28895);

(statearr_28952_32127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (10))){
var inst_28881 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
var statearr_28953_32129 = state_28904__$1;
(statearr_28953_32129[(2)] = inst_28881);

(statearr_28953_32129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (8))){
var inst_28878 = cljs.core.async.close_BANG_(to);
var state_28904__$1 = state_28904;
var statearr_28957_32132 = state_28904__$1;
(statearr_28957_32132[(2)] = inst_28878);

(statearr_28957_32132[(1)] = (10));


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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_28967 = [null,null,null,null,null,null,null,null];
(statearr_28967[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_28967[(1)] = (1));

return statearr_28967;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_28904){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_28904);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e28968){var ex__28307__auto__ = e28968;
var statearr_28969_32136 = state_28904;
(statearr_28969_32136[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_28904[(4)]))){
var statearr_28970_32137 = state_28904;
(statearr_28970_32137[(1)] = cljs.core.first((state_28904[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32139 = state_28904;
state_28904 = G__32139;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_28904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_28904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_28971 = f__28477__auto__();
(statearr_28971[(6)] = c__28476__auto___32091);

return statearr_28971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
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
var process = (function (p__28975){
var vec__28977 = p__28975;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28977,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28977,(1),null);
var job = vec__28977;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28476__auto___32141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_28984){
var state_val_28985 = (state_28984[(1)]);
if((state_val_28985 === (1))){
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28984__$1,(2),res,v);
} else {
if((state_val_28985 === (2))){
var inst_28981 = (state_28984[(2)]);
var inst_28982 = cljs.core.async.close_BANG_(res);
var state_28984__$1 = (function (){var statearr_28989 = state_28984;
(statearr_28989[(7)] = inst_28981);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28984__$1,inst_28982);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0 = (function (){
var statearr_28994 = [null,null,null,null,null,null,null,null];
(statearr_28994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__);

(statearr_28994[(1)] = (1));

return statearr_28994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1 = (function (state_28984){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_28984);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e28995){var ex__28307__auto__ = e28995;
var statearr_28996_32145 = state_28984;
(statearr_28996_32145[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_28984[(4)]))){
var statearr_28997_32146 = state_28984;
(statearr_28997_32146[(1)] = cljs.core.first((state_28984[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32147 = state_28984;
state_28984 = G__32147;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = function(state_28984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1.call(this,state_28984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_28999 = f__28477__auto__();
(statearr_28999[(6)] = c__28476__auto___32141);

return statearr_28999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29004){
var vec__29005 = p__29004;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29005,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29005,(1),null);
var job = vec__29005;
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
var n__4613__auto___32149 = n;
var __32151 = (0);
while(true){
if((__32151 < n__4613__auto___32149)){
var G__29011_32152 = type;
var G__29011_32153__$1 = (((G__29011_32152 instanceof cljs.core.Keyword))?G__29011_32152.fqn:null);
switch (G__29011_32153__$1) {
case "compute":
var c__28476__auto___32156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32151,c__28476__auto___32156,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async){
return (function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = ((function (__32151,c__28476__auto___32156,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async){
return (function (state_29028){
var state_val_29029 = (state_29028[(1)]);
if((state_val_29029 === (1))){
var state_29028__$1 = state_29028;
var statearr_29030_32157 = state_29028__$1;
(statearr_29030_32157[(2)] = null);

(statearr_29030_32157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (2))){
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29028__$1,(4),jobs);
} else {
if((state_val_29029 === (3))){
var inst_29026 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29028__$1,inst_29026);
} else {
if((state_val_29029 === (4))){
var inst_29017 = (state_29028[(2)]);
var inst_29019 = process(inst_29017);
var state_29028__$1 = state_29028;
if(cljs.core.truth_(inst_29019)){
var statearr_29031_32158 = state_29028__$1;
(statearr_29031_32158[(1)] = (5));

} else {
var statearr_29035_32164 = state_29028__$1;
(statearr_29035_32164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (5))){
var state_29028__$1 = state_29028;
var statearr_29036_32165 = state_29028__$1;
(statearr_29036_32165[(2)] = null);

(statearr_29036_32165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (6))){
var state_29028__$1 = state_29028;
var statearr_29037_32166 = state_29028__$1;
(statearr_29037_32166[(2)] = null);

(statearr_29037_32166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (7))){
var inst_29024 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29038_32167 = state_29028__$1;
(statearr_29038_32167[(2)] = inst_29024);

(statearr_29038_32167[(1)] = (3));


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
});})(__32151,c__28476__auto___32156,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async))
;
return ((function (__32151,switch__28303__auto__,c__28476__auto___32156,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0 = (function (){
var statearr_29042 = [null,null,null,null,null,null,null];
(statearr_29042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__);

(statearr_29042[(1)] = (1));

return statearr_29042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1 = (function (state_29028){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29028);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e29044){var ex__28307__auto__ = e29044;
var statearr_29045_32176 = state_29028;
(statearr_29045_32176[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29028[(4)]))){
var statearr_29049_32181 = state_29028;
(statearr_29049_32181[(1)] = cljs.core.first((state_29028[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32183 = state_29028;
state_29028 = G__32183;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = function(state_29028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1.call(this,state_29028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__;
})()
;})(__32151,switch__28303__auto__,c__28476__auto___32156,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async))
})();
var state__28478__auto__ = (function (){var statearr_29050 = f__28477__auto__();
(statearr_29050[(6)] = c__28476__auto___32156);

return statearr_29050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
});})(__32151,c__28476__auto___32156,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async))
);


break;
case "async":
var c__28476__auto___32192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32151,c__28476__auto___32192,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async){
return (function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = ((function (__32151,c__28476__auto___32192,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async){
return (function (state_29068){
var state_val_29069 = (state_29068[(1)]);
if((state_val_29069 === (1))){
var state_29068__$1 = state_29068;
var statearr_29071_32193 = state_29068__$1;
(statearr_29071_32193[(2)] = null);

(statearr_29071_32193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (2))){
var state_29068__$1 = state_29068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29068__$1,(4),jobs);
} else {
if((state_val_29069 === (3))){
var inst_29065 = (state_29068[(2)]);
var state_29068__$1 = state_29068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29068__$1,inst_29065);
} else {
if((state_val_29069 === (4))){
var inst_29057 = (state_29068[(2)]);
var inst_29058 = async(inst_29057);
var state_29068__$1 = state_29068;
if(cljs.core.truth_(inst_29058)){
var statearr_29075_32194 = state_29068__$1;
(statearr_29075_32194[(1)] = (5));

} else {
var statearr_29077_32195 = state_29068__$1;
(statearr_29077_32195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (5))){
var state_29068__$1 = state_29068;
var statearr_29078_32196 = state_29068__$1;
(statearr_29078_32196[(2)] = null);

(statearr_29078_32196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (6))){
var state_29068__$1 = state_29068;
var statearr_29082_32197 = state_29068__$1;
(statearr_29082_32197[(2)] = null);

(statearr_29082_32197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (7))){
var inst_29063 = (state_29068[(2)]);
var state_29068__$1 = state_29068;
var statearr_29083_32202 = state_29068__$1;
(statearr_29083_32202[(2)] = inst_29063);

(statearr_29083_32202[(1)] = (3));


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
});})(__32151,c__28476__auto___32192,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async))
;
return ((function (__32151,switch__28303__auto__,c__28476__auto___32192,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0 = (function (){
var statearr_29086 = [null,null,null,null,null,null,null];
(statearr_29086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__);

(statearr_29086[(1)] = (1));

return statearr_29086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1 = (function (state_29068){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29068);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e29087){var ex__28307__auto__ = e29087;
var statearr_29089_32203 = state_29068;
(statearr_29089_32203[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29068[(4)]))){
var statearr_29090_32204 = state_29068;
(statearr_29090_32204[(1)] = cljs.core.first((state_29068[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32205 = state_29068;
state_29068 = G__32205;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = function(state_29068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1.call(this,state_29068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__;
})()
;})(__32151,switch__28303__auto__,c__28476__auto___32192,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async))
})();
var state__28478__auto__ = (function (){var statearr_29091 = f__28477__auto__();
(statearr_29091[(6)] = c__28476__auto___32192);

return statearr_29091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
});})(__32151,c__28476__auto___32192,G__29011_32152,G__29011_32153__$1,n__4613__auto___32149,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29011_32153__$1)].join('')));

}

var G__32206 = (__32151 + (1));
__32151 = G__32206;
continue;
} else {
}
break;
}

var c__28476__auto___32207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_29122){
var state_val_29123 = (state_29122[(1)]);
if((state_val_29123 === (7))){
var inst_29118 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29137_32208 = state_29122__$1;
(statearr_29137_32208[(2)] = inst_29118);

(statearr_29137_32208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (1))){
var state_29122__$1 = state_29122;
var statearr_29139_32209 = state_29122__$1;
(statearr_29139_32209[(2)] = null);

(statearr_29139_32209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (4))){
var inst_29099 = (state_29122[(7)]);
var inst_29099__$1 = (state_29122[(2)]);
var inst_29100 = (inst_29099__$1 == null);
var state_29122__$1 = (function (){var statearr_29145 = state_29122;
(statearr_29145[(7)] = inst_29099__$1);

return statearr_29145;
})();
if(cljs.core.truth_(inst_29100)){
var statearr_29147_32210 = state_29122__$1;
(statearr_29147_32210[(1)] = (5));

} else {
var statearr_29149_32211 = state_29122__$1;
(statearr_29149_32211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (6))){
var inst_29104 = (state_29122[(8)]);
var inst_29099 = (state_29122[(7)]);
var inst_29104__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29107 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29108 = [inst_29099,inst_29104__$1];
var inst_29109 = (new cljs.core.PersistentVector(null,2,(5),inst_29107,inst_29108,null));
var state_29122__$1 = (function (){var statearr_29157 = state_29122;
(statearr_29157[(8)] = inst_29104__$1);

return statearr_29157;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29122__$1,(8),jobs,inst_29109);
} else {
if((state_val_29123 === (3))){
var inst_29120 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29122__$1,inst_29120);
} else {
if((state_val_29123 === (2))){
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29122__$1,(4),from);
} else {
if((state_val_29123 === (9))){
var inst_29113 = (state_29122[(2)]);
var state_29122__$1 = (function (){var statearr_29165 = state_29122;
(statearr_29165[(9)] = inst_29113);

return statearr_29165;
})();
var statearr_29166_32215 = state_29122__$1;
(statearr_29166_32215[(2)] = null);

(statearr_29166_32215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (5))){
var inst_29102 = cljs.core.async.close_BANG_(jobs);
var state_29122__$1 = state_29122;
var statearr_29168_32219 = state_29122__$1;
(statearr_29168_32219[(2)] = inst_29102);

(statearr_29168_32219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (8))){
var inst_29104 = (state_29122[(8)]);
var inst_29111 = (state_29122[(2)]);
var state_29122__$1 = (function (){var statearr_29169 = state_29122;
(statearr_29169[(10)] = inst_29111);

return statearr_29169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29122__$1,(9),results,inst_29104);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0 = (function (){
var statearr_29175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__);

(statearr_29175[(1)] = (1));

return statearr_29175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1 = (function (state_29122){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29122);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e29176){var ex__28307__auto__ = e29176;
var statearr_29177_32228 = state_29122;
(statearr_29177_32228[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29122[(4)]))){
var statearr_29178_32231 = state_29122;
(statearr_29178_32231[(1)] = cljs.core.first((state_29122[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32233 = state_29122;
state_29122 = G__32233;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = function(state_29122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1.call(this,state_29122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_29180 = f__28477__auto__();
(statearr_29180[(6)] = c__28476__auto___32207);

return statearr_29180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));


var c__28476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_29222){
var state_val_29223 = (state_29222[(1)]);
if((state_val_29223 === (7))){
var inst_29218 = (state_29222[(2)]);
var state_29222__$1 = state_29222;
var statearr_29225_32234 = state_29222__$1;
(statearr_29225_32234[(2)] = inst_29218);

(statearr_29225_32234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (20))){
var state_29222__$1 = state_29222;
var statearr_29226_32235 = state_29222__$1;
(statearr_29226_32235[(2)] = null);

(statearr_29226_32235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (1))){
var state_29222__$1 = state_29222;
var statearr_29227_32236 = state_29222__$1;
(statearr_29227_32236[(2)] = null);

(statearr_29227_32236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (4))){
var inst_29183 = (state_29222[(7)]);
var inst_29183__$1 = (state_29222[(2)]);
var inst_29184 = (inst_29183__$1 == null);
var state_29222__$1 = (function (){var statearr_29228 = state_29222;
(statearr_29228[(7)] = inst_29183__$1);

return statearr_29228;
})();
if(cljs.core.truth_(inst_29184)){
var statearr_29229_32239 = state_29222__$1;
(statearr_29229_32239[(1)] = (5));

} else {
var statearr_29230_32240 = state_29222__$1;
(statearr_29230_32240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (15))){
var inst_29196 = (state_29222[(8)]);
var state_29222__$1 = state_29222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29222__$1,(18),to,inst_29196);
} else {
if((state_val_29223 === (21))){
var inst_29213 = (state_29222[(2)]);
var state_29222__$1 = state_29222;
var statearr_29232_32241 = state_29222__$1;
(statearr_29232_32241[(2)] = inst_29213);

(statearr_29232_32241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (13))){
var inst_29215 = (state_29222[(2)]);
var state_29222__$1 = (function (){var statearr_29235 = state_29222;
(statearr_29235[(9)] = inst_29215);

return statearr_29235;
})();
var statearr_29236_32246 = state_29222__$1;
(statearr_29236_32246[(2)] = null);

(statearr_29236_32246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (6))){
var inst_29183 = (state_29222[(7)]);
var state_29222__$1 = state_29222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29222__$1,(11),inst_29183);
} else {
if((state_val_29223 === (17))){
var inst_29208 = (state_29222[(2)]);
var state_29222__$1 = state_29222;
if(cljs.core.truth_(inst_29208)){
var statearr_29238_32250 = state_29222__$1;
(statearr_29238_32250[(1)] = (19));

} else {
var statearr_29240_32251 = state_29222__$1;
(statearr_29240_32251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (3))){
var inst_29220 = (state_29222[(2)]);
var state_29222__$1 = state_29222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29222__$1,inst_29220);
} else {
if((state_val_29223 === (12))){
var inst_29193 = (state_29222[(10)]);
var state_29222__$1 = state_29222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29222__$1,(14),inst_29193);
} else {
if((state_val_29223 === (2))){
var state_29222__$1 = state_29222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29222__$1,(4),results);
} else {
if((state_val_29223 === (19))){
var state_29222__$1 = state_29222;
var statearr_29241_32260 = state_29222__$1;
(statearr_29241_32260[(2)] = null);

(statearr_29241_32260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (11))){
var inst_29193 = (state_29222[(2)]);
var state_29222__$1 = (function (){var statearr_29244 = state_29222;
(statearr_29244[(10)] = inst_29193);

return statearr_29244;
})();
var statearr_29245_32269 = state_29222__$1;
(statearr_29245_32269[(2)] = null);

(statearr_29245_32269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (9))){
var state_29222__$1 = state_29222;
var statearr_29246_32270 = state_29222__$1;
(statearr_29246_32270[(2)] = null);

(statearr_29246_32270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (5))){
var state_29222__$1 = state_29222;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29247_32271 = state_29222__$1;
(statearr_29247_32271[(1)] = (8));

} else {
var statearr_29248_32272 = state_29222__$1;
(statearr_29248_32272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (14))){
var inst_29196 = (state_29222[(8)]);
var inst_29196__$1 = (state_29222[(2)]);
var inst_29200 = (inst_29196__$1 == null);
var inst_29201 = cljs.core.not(inst_29200);
var state_29222__$1 = (function (){var statearr_29249 = state_29222;
(statearr_29249[(8)] = inst_29196__$1);

return statearr_29249;
})();
if(inst_29201){
var statearr_29250_32277 = state_29222__$1;
(statearr_29250_32277[(1)] = (15));

} else {
var statearr_29251_32278 = state_29222__$1;
(statearr_29251_32278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (16))){
var state_29222__$1 = state_29222;
var statearr_29252_32280 = state_29222__$1;
(statearr_29252_32280[(2)] = false);

(statearr_29252_32280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (10))){
var inst_29190 = (state_29222[(2)]);
var state_29222__$1 = state_29222;
var statearr_29253_32281 = state_29222__$1;
(statearr_29253_32281[(2)] = inst_29190);

(statearr_29253_32281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (18))){
var inst_29205 = (state_29222[(2)]);
var state_29222__$1 = state_29222;
var statearr_29255_32288 = state_29222__$1;
(statearr_29255_32288[(2)] = inst_29205);

(statearr_29255_32288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29223 === (8))){
var inst_29187 = cljs.core.async.close_BANG_(to);
var state_29222__$1 = state_29222;
var statearr_29256_32295 = state_29222__$1;
(statearr_29256_32295[(2)] = inst_29187);

(statearr_29256_32295[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0 = (function (){
var statearr_29259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__);

(statearr_29259[(1)] = (1));

return statearr_29259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1 = (function (state_29222){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29222);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e29260){var ex__28307__auto__ = e29260;
var statearr_29261_32299 = state_29222;
(statearr_29261_32299[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29222[(4)]))){
var statearr_29262_32300 = state_29222;
(statearr_29262_32300[(1)] = cljs.core.first((state_29222[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32304 = state_29222;
state_29222 = G__32304;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__ = function(state_29222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1.call(this,state_29222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_29263 = f__28477__auto__();
(statearr_29263[(6)] = c__28476__auto__);

return statearr_29263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));

return c__28476__auto__;
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
var G__29269 = arguments.length;
switch (G__29269) {
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
var G__29279 = arguments.length;
switch (G__29279) {
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
var G__29292 = arguments.length;
switch (G__29292) {
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
var c__28476__auto___32333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_29353){
var state_val_29354 = (state_29353[(1)]);
if((state_val_29354 === (7))){
var inst_29337 = (state_29353[(2)]);
var state_29353__$1 = state_29353;
var statearr_29361_32336 = state_29353__$1;
(statearr_29361_32336[(2)] = inst_29337);

(statearr_29361_32336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (1))){
var state_29353__$1 = state_29353;
var statearr_29362_32338 = state_29353__$1;
(statearr_29362_32338[(2)] = null);

(statearr_29362_32338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (4))){
var inst_29303 = (state_29353[(7)]);
var inst_29303__$1 = (state_29353[(2)]);
var inst_29306 = (inst_29303__$1 == null);
var state_29353__$1 = (function (){var statearr_29366 = state_29353;
(statearr_29366[(7)] = inst_29303__$1);

return statearr_29366;
})();
if(cljs.core.truth_(inst_29306)){
var statearr_29367_32342 = state_29353__$1;
(statearr_29367_32342[(1)] = (5));

} else {
var statearr_29368_32343 = state_29353__$1;
(statearr_29368_32343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (13))){
var state_29353__$1 = state_29353;
var statearr_29369_32344 = state_29353__$1;
(statearr_29369_32344[(2)] = null);

(statearr_29369_32344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (6))){
var inst_29303 = (state_29353[(7)]);
var inst_29318 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29303) : p.call(null,inst_29303));
var state_29353__$1 = state_29353;
if(cljs.core.truth_(inst_29318)){
var statearr_29370_32345 = state_29353__$1;
(statearr_29370_32345[(1)] = (9));

} else {
var statearr_29371_32348 = state_29353__$1;
(statearr_29371_32348[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (3))){
var inst_29342 = (state_29353[(2)]);
var state_29353__$1 = state_29353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29353__$1,inst_29342);
} else {
if((state_val_29354 === (12))){
var state_29353__$1 = state_29353;
var statearr_29372_32349 = state_29353__$1;
(statearr_29372_32349[(2)] = null);

(statearr_29372_32349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (2))){
var state_29353__$1 = state_29353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29353__$1,(4),ch);
} else {
if((state_val_29354 === (11))){
var inst_29303 = (state_29353[(7)]);
var inst_29325 = (state_29353[(2)]);
var state_29353__$1 = state_29353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29353__$1,(8),inst_29325,inst_29303);
} else {
if((state_val_29354 === (9))){
var state_29353__$1 = state_29353;
var statearr_29373_32352 = state_29353__$1;
(statearr_29373_32352[(2)] = tc);

(statearr_29373_32352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (5))){
var inst_29311 = cljs.core.async.close_BANG_(tc);
var inst_29312 = cljs.core.async.close_BANG_(fc);
var state_29353__$1 = (function (){var statearr_29375 = state_29353;
(statearr_29375[(8)] = inst_29311);

return statearr_29375;
})();
var statearr_29376_32354 = state_29353__$1;
(statearr_29376_32354[(2)] = inst_29312);

(statearr_29376_32354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (14))){
var inst_29335 = (state_29353[(2)]);
var state_29353__$1 = state_29353;
var statearr_29377_32355 = state_29353__$1;
(statearr_29377_32355[(2)] = inst_29335);

(statearr_29377_32355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (10))){
var state_29353__$1 = state_29353;
var statearr_29378_32357 = state_29353__$1;
(statearr_29378_32357[(2)] = fc);

(statearr_29378_32357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (8))){
var inst_29327 = (state_29353[(2)]);
var state_29353__$1 = state_29353;
if(cljs.core.truth_(inst_29327)){
var statearr_29379_32359 = state_29353__$1;
(statearr_29379_32359[(1)] = (12));

} else {
var statearr_29380_32360 = state_29353__$1;
(statearr_29380_32360[(1)] = (13));

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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_29382 = [null,null,null,null,null,null,null,null,null];
(statearr_29382[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_29382[(1)] = (1));

return statearr_29382;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_29353){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29353);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e29383){var ex__28307__auto__ = e29383;
var statearr_29384_32366 = state_29353;
(statearr_29384_32366[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29353[(4)]))){
var statearr_29386_32368 = state_29353;
(statearr_29386_32368[(1)] = cljs.core.first((state_29353[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32369 = state_29353;
state_29353 = G__32369;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_29353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_29353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_29387 = f__28477__auto__();
(statearr_29387[(6)] = c__28476__auto___32333);

return statearr_29387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
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
var c__28476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_29417){
var state_val_29418 = (state_29417[(1)]);
if((state_val_29418 === (7))){
var inst_29412 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29422_32378 = state_29417__$1;
(statearr_29422_32378[(2)] = inst_29412);

(statearr_29422_32378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (1))){
var inst_29389 = init;
var inst_29390 = inst_29389;
var state_29417__$1 = (function (){var statearr_29423 = state_29417;
(statearr_29423[(7)] = inst_29390);

return statearr_29423;
})();
var statearr_29424_32383 = state_29417__$1;
(statearr_29424_32383[(2)] = null);

(statearr_29424_32383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (4))){
var inst_29394 = (state_29417[(8)]);
var inst_29394__$1 = (state_29417[(2)]);
var inst_29395 = (inst_29394__$1 == null);
var state_29417__$1 = (function (){var statearr_29425 = state_29417;
(statearr_29425[(8)] = inst_29394__$1);

return statearr_29425;
})();
if(cljs.core.truth_(inst_29395)){
var statearr_29429_32388 = state_29417__$1;
(statearr_29429_32388[(1)] = (5));

} else {
var statearr_29430_32389 = state_29417__$1;
(statearr_29430_32389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (6))){
var inst_29390 = (state_29417[(7)]);
var inst_29394 = (state_29417[(8)]);
var inst_29402 = (state_29417[(9)]);
var inst_29402__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29390,inst_29394) : f.call(null,inst_29390,inst_29394));
var inst_29403 = cljs.core.reduced_QMARK_(inst_29402__$1);
var state_29417__$1 = (function (){var statearr_29431 = state_29417;
(statearr_29431[(9)] = inst_29402__$1);

return statearr_29431;
})();
if(inst_29403){
var statearr_29432_32393 = state_29417__$1;
(statearr_29432_32393[(1)] = (8));

} else {
var statearr_29433_32394 = state_29417__$1;
(statearr_29433_32394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (3))){
var inst_29414 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29417__$1,inst_29414);
} else {
if((state_val_29418 === (2))){
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29417__$1,(4),ch);
} else {
if((state_val_29418 === (9))){
var inst_29402 = (state_29417[(9)]);
var inst_29390 = inst_29402;
var state_29417__$1 = (function (){var statearr_29439 = state_29417;
(statearr_29439[(7)] = inst_29390);

return statearr_29439;
})();
var statearr_29440_32398 = state_29417__$1;
(statearr_29440_32398[(2)] = null);

(statearr_29440_32398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (5))){
var inst_29390 = (state_29417[(7)]);
var state_29417__$1 = state_29417;
var statearr_29442_32399 = state_29417__$1;
(statearr_29442_32399[(2)] = inst_29390);

(statearr_29442_32399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (10))){
var inst_29410 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29443_32404 = state_29417__$1;
(statearr_29443_32404[(2)] = inst_29410);

(statearr_29443_32404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (8))){
var inst_29402 = (state_29417[(9)]);
var inst_29406 = cljs.core.deref(inst_29402);
var state_29417__$1 = state_29417;
var statearr_29444_32405 = state_29417__$1;
(statearr_29444_32405[(2)] = inst_29406);

(statearr_29444_32405[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28304__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28304__auto____0 = (function (){
var statearr_29448 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29448[(0)] = cljs$core$async$reduce_$_state_machine__28304__auto__);

(statearr_29448[(1)] = (1));

return statearr_29448;
});
var cljs$core$async$reduce_$_state_machine__28304__auto____1 = (function (state_29417){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29417);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e29449){var ex__28307__auto__ = e29449;
var statearr_29450_32416 = state_29417;
(statearr_29450_32416[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29417[(4)]))){
var statearr_29451_32418 = state_29417;
(statearr_29451_32418[(1)] = cljs.core.first((state_29417[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32419 = state_29417;
state_29417 = G__32419;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28304__auto__ = function(state_29417){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28304__auto____1.call(this,state_29417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28304__auto____0;
cljs$core$async$reduce_$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28304__auto____1;
return cljs$core$async$reduce_$_state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_29452 = f__28477__auto__();
(statearr_29452[(6)] = c__28476__auto__);

return statearr_29452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));

return c__28476__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_29459){
var state_val_29460 = (state_29459[(1)]);
if((state_val_29460 === (1))){
var inst_29454 = cljs.core.async.reduce(f__$1,init,ch);
var state_29459__$1 = state_29459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29459__$1,(2),inst_29454);
} else {
if((state_val_29460 === (2))){
var inst_29456 = (state_29459[(2)]);
var inst_29457 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29456) : f__$1.call(null,inst_29456));
var state_29459__$1 = state_29459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29459__$1,inst_29457);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28304__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28304__auto____0 = (function (){
var statearr_29464 = [null,null,null,null,null,null,null];
(statearr_29464[(0)] = cljs$core$async$transduce_$_state_machine__28304__auto__);

(statearr_29464[(1)] = (1));

return statearr_29464;
});
var cljs$core$async$transduce_$_state_machine__28304__auto____1 = (function (state_29459){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29459);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e29465){var ex__28307__auto__ = e29465;
var statearr_29466_32435 = state_29459;
(statearr_29466_32435[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29459[(4)]))){
var statearr_29473_32436 = state_29459;
(statearr_29473_32436[(1)] = cljs.core.first((state_29459[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32437 = state_29459;
state_29459 = G__32437;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28304__auto__ = function(state_29459){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28304__auto____1.call(this,state_29459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28304__auto____0;
cljs$core$async$transduce_$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28304__auto____1;
return cljs$core$async$transduce_$_state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_29474 = f__28477__auto__();
(statearr_29474[(6)] = c__28476__auto__);

return statearr_29474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));

return c__28476__auto__;
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
var G__29479 = arguments.length;
switch (G__29479) {
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
var c__28476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_29514){
var state_val_29515 = (state_29514[(1)]);
if((state_val_29515 === (7))){
var inst_29492 = (state_29514[(2)]);
var state_29514__$1 = state_29514;
var statearr_29517_32446 = state_29514__$1;
(statearr_29517_32446[(2)] = inst_29492);

(statearr_29517_32446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (1))){
var inst_29486 = cljs.core.seq(coll);
var inst_29487 = inst_29486;
var state_29514__$1 = (function (){var statearr_29524 = state_29514;
(statearr_29524[(7)] = inst_29487);

return statearr_29524;
})();
var statearr_29525_32448 = state_29514__$1;
(statearr_29525_32448[(2)] = null);

(statearr_29525_32448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (4))){
var inst_29487 = (state_29514[(7)]);
var inst_29490 = cljs.core.first(inst_29487);
var state_29514__$1 = state_29514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29514__$1,(7),ch,inst_29490);
} else {
if((state_val_29515 === (13))){
var inst_29508 = (state_29514[(2)]);
var state_29514__$1 = state_29514;
var statearr_29526_32455 = state_29514__$1;
(statearr_29526_32455[(2)] = inst_29508);

(statearr_29526_32455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (6))){
var inst_29495 = (state_29514[(2)]);
var state_29514__$1 = state_29514;
if(cljs.core.truth_(inst_29495)){
var statearr_29527_32460 = state_29514__$1;
(statearr_29527_32460[(1)] = (8));

} else {
var statearr_29528_32462 = state_29514__$1;
(statearr_29528_32462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (3))){
var inst_29512 = (state_29514[(2)]);
var state_29514__$1 = state_29514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29514__$1,inst_29512);
} else {
if((state_val_29515 === (12))){
var state_29514__$1 = state_29514;
var statearr_29529_32487 = state_29514__$1;
(statearr_29529_32487[(2)] = null);

(statearr_29529_32487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (2))){
var inst_29487 = (state_29514[(7)]);
var state_29514__$1 = state_29514;
if(cljs.core.truth_(inst_29487)){
var statearr_29530_32488 = state_29514__$1;
(statearr_29530_32488[(1)] = (4));

} else {
var statearr_29531_32490 = state_29514__$1;
(statearr_29531_32490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (11))){
var inst_29502 = cljs.core.async.close_BANG_(ch);
var state_29514__$1 = state_29514;
var statearr_29532_32494 = state_29514__$1;
(statearr_29532_32494[(2)] = inst_29502);

(statearr_29532_32494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (9))){
var state_29514__$1 = state_29514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29536_32495 = state_29514__$1;
(statearr_29536_32495[(1)] = (11));

} else {
var statearr_29537_32496 = state_29514__$1;
(statearr_29537_32496[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (5))){
var inst_29487 = (state_29514[(7)]);
var state_29514__$1 = state_29514;
var statearr_29538_32497 = state_29514__$1;
(statearr_29538_32497[(2)] = inst_29487);

(statearr_29538_32497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (10))){
var inst_29510 = (state_29514[(2)]);
var state_29514__$1 = state_29514;
var statearr_29545_32498 = state_29514__$1;
(statearr_29545_32498[(2)] = inst_29510);

(statearr_29545_32498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29515 === (8))){
var inst_29487 = (state_29514[(7)]);
var inst_29497 = cljs.core.next(inst_29487);
var inst_29487__$1 = inst_29497;
var state_29514__$1 = (function (){var statearr_29546 = state_29514;
(statearr_29546[(7)] = inst_29487__$1);

return statearr_29546;
})();
var statearr_29547_32499 = state_29514__$1;
(statearr_29547_32499[(2)] = null);

(statearr_29547_32499[(1)] = (2));


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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_29548 = [null,null,null,null,null,null,null,null];
(statearr_29548[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_29548[(1)] = (1));

return statearr_29548;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_29514){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29514);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e29549){var ex__28307__auto__ = e29549;
var statearr_29550_32511 = state_29514;
(statearr_29550_32511[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29514[(4)]))){
var statearr_29552_32512 = state_29514;
(statearr_29552_32512[(1)] = cljs.core.first((state_29514[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32513 = state_29514;
state_29514 = G__32513;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_29514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_29514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_29559 = f__28477__auto__();
(statearr_29559[(6)] = c__28476__auto__);

return statearr_29559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));

return c__28476__auto__;
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
var G__29568 = arguments.length;
switch (G__29568) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_32517 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32517(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32524 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32524(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32533 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32533(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32535 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32535(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29620 = (function (ch,cs,meta29621){
this.ch = ch;
this.cs = cs;
this.meta29621 = meta29621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29622,meta29621__$1){
var self__ = this;
var _29622__$1 = this;
return (new cljs.core.async.t_cljs$core$async29620(self__.ch,self__.cs,meta29621__$1));
}));

(cljs.core.async.t_cljs$core$async29620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29622){
var self__ = this;
var _29622__$1 = this;
return self__.meta29621;
}));

(cljs.core.async.t_cljs$core$async29620.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29620.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29620.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29620.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29620.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29621","meta29621",1432537963,null)], null);
}));

(cljs.core.async.t_cljs$core$async29620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29620");

(cljs.core.async.t_cljs$core$async29620.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29620.
 */
cljs.core.async.__GT_t_cljs$core$async29620 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29620(ch__$1,cs__$1,meta29621){
return (new cljs.core.async.t_cljs$core$async29620(ch__$1,cs__$1,meta29621));
});

}

return (new cljs.core.async.t_cljs$core$async29620(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28476__auto___32544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_29821){
var state_val_29823 = (state_29821[(1)]);
if((state_val_29823 === (7))){
var inst_29815 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29828_32545 = state_29821__$1;
(statearr_29828_32545[(2)] = inst_29815);

(statearr_29828_32545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (20))){
var inst_29686 = (state_29821[(7)]);
var inst_29708 = cljs.core.first(inst_29686);
var inst_29709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29708,(0),null);
var inst_29710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29708,(1),null);
var state_29821__$1 = (function (){var statearr_29835 = state_29821;
(statearr_29835[(8)] = inst_29709);

return statearr_29835;
})();
if(cljs.core.truth_(inst_29710)){
var statearr_29836_32546 = state_29821__$1;
(statearr_29836_32546[(1)] = (22));

} else {
var statearr_29837_32551 = state_29821__$1;
(statearr_29837_32551[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (27))){
var inst_29743 = (state_29821[(9)]);
var inst_29750 = (state_29821[(10)]);
var inst_29745 = (state_29821[(11)]);
var inst_29645 = (state_29821[(12)]);
var inst_29750__$1 = cljs.core._nth(inst_29743,inst_29745);
var inst_29751 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29750__$1,inst_29645,done);
var state_29821__$1 = (function (){var statearr_29840 = state_29821;
(statearr_29840[(10)] = inst_29750__$1);

return statearr_29840;
})();
if(cljs.core.truth_(inst_29751)){
var statearr_29842_32556 = state_29821__$1;
(statearr_29842_32556[(1)] = (30));

} else {
var statearr_29843_32557 = state_29821__$1;
(statearr_29843_32557[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (1))){
var state_29821__$1 = state_29821;
var statearr_29844_32561 = state_29821__$1;
(statearr_29844_32561[(2)] = null);

(statearr_29844_32561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (24))){
var inst_29686 = (state_29821[(7)]);
var inst_29716 = (state_29821[(2)]);
var inst_29721 = cljs.core.next(inst_29686);
var inst_29654 = inst_29721;
var inst_29655 = null;
var inst_29656 = (0);
var inst_29657 = (0);
var state_29821__$1 = (function (){var statearr_29845 = state_29821;
(statearr_29845[(13)] = inst_29657);

(statearr_29845[(14)] = inst_29656);

(statearr_29845[(15)] = inst_29716);

(statearr_29845[(16)] = inst_29654);

(statearr_29845[(17)] = inst_29655);

return statearr_29845;
})();
var statearr_29846_32562 = state_29821__$1;
(statearr_29846_32562[(2)] = null);

(statearr_29846_32562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (39))){
var state_29821__$1 = state_29821;
var statearr_29852_32563 = state_29821__$1;
(statearr_29852_32563[(2)] = null);

(statearr_29852_32563[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (4))){
var inst_29645 = (state_29821[(12)]);
var inst_29645__$1 = (state_29821[(2)]);
var inst_29646 = (inst_29645__$1 == null);
var state_29821__$1 = (function (){var statearr_29856 = state_29821;
(statearr_29856[(12)] = inst_29645__$1);

return statearr_29856;
})();
if(cljs.core.truth_(inst_29646)){
var statearr_29857_32564 = state_29821__$1;
(statearr_29857_32564[(1)] = (5));

} else {
var statearr_29858_32567 = state_29821__$1;
(statearr_29858_32567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (15))){
var inst_29657 = (state_29821[(13)]);
var inst_29656 = (state_29821[(14)]);
var inst_29654 = (state_29821[(16)]);
var inst_29655 = (state_29821[(17)]);
var inst_29675 = (state_29821[(2)]);
var inst_29682 = (inst_29657 + (1));
var tmp29848 = inst_29656;
var tmp29849 = inst_29654;
var tmp29850 = inst_29655;
var inst_29654__$1 = tmp29849;
var inst_29655__$1 = tmp29850;
var inst_29656__$1 = tmp29848;
var inst_29657__$1 = inst_29682;
var state_29821__$1 = (function (){var statearr_29859 = state_29821;
(statearr_29859[(13)] = inst_29657__$1);

(statearr_29859[(14)] = inst_29656__$1);

(statearr_29859[(18)] = inst_29675);

(statearr_29859[(16)] = inst_29654__$1);

(statearr_29859[(17)] = inst_29655__$1);

return statearr_29859;
})();
var statearr_29860_32570 = state_29821__$1;
(statearr_29860_32570[(2)] = null);

(statearr_29860_32570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (21))){
var inst_29724 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29865_32572 = state_29821__$1;
(statearr_29865_32572[(2)] = inst_29724);

(statearr_29865_32572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (31))){
var inst_29750 = (state_29821[(10)]);
var inst_29754 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29750);
var state_29821__$1 = state_29821;
var statearr_29866_32574 = state_29821__$1;
(statearr_29866_32574[(2)] = inst_29754);

(statearr_29866_32574[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (32))){
var inst_29744 = (state_29821[(19)]);
var inst_29743 = (state_29821[(9)]);
var inst_29742 = (state_29821[(20)]);
var inst_29745 = (state_29821[(11)]);
var inst_29756 = (state_29821[(2)]);
var inst_29758 = (inst_29745 + (1));
var tmp29861 = inst_29744;
var tmp29862 = inst_29743;
var tmp29863 = inst_29742;
var inst_29742__$1 = tmp29863;
var inst_29743__$1 = tmp29862;
var inst_29744__$1 = tmp29861;
var inst_29745__$1 = inst_29758;
var state_29821__$1 = (function (){var statearr_29867 = state_29821;
(statearr_29867[(19)] = inst_29744__$1);

(statearr_29867[(9)] = inst_29743__$1);

(statearr_29867[(20)] = inst_29742__$1);

(statearr_29867[(21)] = inst_29756);

(statearr_29867[(11)] = inst_29745__$1);

return statearr_29867;
})();
var statearr_29869_32582 = state_29821__$1;
(statearr_29869_32582[(2)] = null);

(statearr_29869_32582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (40))){
var inst_29785 = (state_29821[(22)]);
var inst_29789 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29785);
var state_29821__$1 = state_29821;
var statearr_29870_32587 = state_29821__$1;
(statearr_29870_32587[(2)] = inst_29789);

(statearr_29870_32587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (33))){
var inst_29762 = (state_29821[(23)]);
var inst_29765 = cljs.core.chunked_seq_QMARK_(inst_29762);
var state_29821__$1 = state_29821;
if(inst_29765){
var statearr_29873_32589 = state_29821__$1;
(statearr_29873_32589[(1)] = (36));

} else {
var statearr_29877_32590 = state_29821__$1;
(statearr_29877_32590[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (13))){
var inst_29669 = (state_29821[(24)]);
var inst_29672 = cljs.core.async.close_BANG_(inst_29669);
var state_29821__$1 = state_29821;
var statearr_29886_32593 = state_29821__$1;
(statearr_29886_32593[(2)] = inst_29672);

(statearr_29886_32593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (22))){
var inst_29709 = (state_29821[(8)]);
var inst_29713 = cljs.core.async.close_BANG_(inst_29709);
var state_29821__$1 = state_29821;
var statearr_29888_32596 = state_29821__$1;
(statearr_29888_32596[(2)] = inst_29713);

(statearr_29888_32596[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (36))){
var inst_29762 = (state_29821[(23)]);
var inst_29768 = cljs.core.chunk_first(inst_29762);
var inst_29769 = cljs.core.chunk_rest(inst_29762);
var inst_29773 = cljs.core.count(inst_29768);
var inst_29742 = inst_29769;
var inst_29743 = inst_29768;
var inst_29744 = inst_29773;
var inst_29745 = (0);
var state_29821__$1 = (function (){var statearr_29892 = state_29821;
(statearr_29892[(19)] = inst_29744);

(statearr_29892[(9)] = inst_29743);

(statearr_29892[(20)] = inst_29742);

(statearr_29892[(11)] = inst_29745);

return statearr_29892;
})();
var statearr_29895_32601 = state_29821__$1;
(statearr_29895_32601[(2)] = null);

(statearr_29895_32601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (41))){
var inst_29762 = (state_29821[(23)]);
var inst_29791 = (state_29821[(2)]);
var inst_29792 = cljs.core.next(inst_29762);
var inst_29742 = inst_29792;
var inst_29743 = null;
var inst_29744 = (0);
var inst_29745 = (0);
var state_29821__$1 = (function (){var statearr_29901 = state_29821;
(statearr_29901[(25)] = inst_29791);

(statearr_29901[(19)] = inst_29744);

(statearr_29901[(9)] = inst_29743);

(statearr_29901[(20)] = inst_29742);

(statearr_29901[(11)] = inst_29745);

return statearr_29901;
})();
var statearr_29902_32602 = state_29821__$1;
(statearr_29902_32602[(2)] = null);

(statearr_29902_32602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (43))){
var state_29821__$1 = state_29821;
var statearr_29903_32603 = state_29821__$1;
(statearr_29903_32603[(2)] = null);

(statearr_29903_32603[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (29))){
var inst_29800 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29907_32606 = state_29821__$1;
(statearr_29907_32606[(2)] = inst_29800);

(statearr_29907_32606[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (44))){
var inst_29812 = (state_29821[(2)]);
var state_29821__$1 = (function (){var statearr_29911 = state_29821;
(statearr_29911[(26)] = inst_29812);

return statearr_29911;
})();
var statearr_29912_32610 = state_29821__$1;
(statearr_29912_32610[(2)] = null);

(statearr_29912_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (6))){
var inst_29734 = (state_29821[(27)]);
var inst_29733 = cljs.core.deref(cs);
var inst_29734__$1 = cljs.core.keys(inst_29733);
var inst_29735 = cljs.core.count(inst_29734__$1);
var inst_29736 = cljs.core.reset_BANG_(dctr,inst_29735);
var inst_29741 = cljs.core.seq(inst_29734__$1);
var inst_29742 = inst_29741;
var inst_29743 = null;
var inst_29744 = (0);
var inst_29745 = (0);
var state_29821__$1 = (function (){var statearr_29917 = state_29821;
(statearr_29917[(28)] = inst_29736);

(statearr_29917[(27)] = inst_29734__$1);

(statearr_29917[(19)] = inst_29744);

(statearr_29917[(9)] = inst_29743);

(statearr_29917[(20)] = inst_29742);

(statearr_29917[(11)] = inst_29745);

return statearr_29917;
})();
var statearr_29923_32617 = state_29821__$1;
(statearr_29923_32617[(2)] = null);

(statearr_29923_32617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (28))){
var inst_29762 = (state_29821[(23)]);
var inst_29742 = (state_29821[(20)]);
var inst_29762__$1 = cljs.core.seq(inst_29742);
var state_29821__$1 = (function (){var statearr_29929 = state_29821;
(statearr_29929[(23)] = inst_29762__$1);

return statearr_29929;
})();
if(inst_29762__$1){
var statearr_29931_32621 = state_29821__$1;
(statearr_29931_32621[(1)] = (33));

} else {
var statearr_29932_32622 = state_29821__$1;
(statearr_29932_32622[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (25))){
var inst_29744 = (state_29821[(19)]);
var inst_29745 = (state_29821[(11)]);
var inst_29747 = (inst_29745 < inst_29744);
var inst_29748 = inst_29747;
var state_29821__$1 = state_29821;
if(cljs.core.truth_(inst_29748)){
var statearr_29933_32627 = state_29821__$1;
(statearr_29933_32627[(1)] = (27));

} else {
var statearr_29936_32628 = state_29821__$1;
(statearr_29936_32628[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (34))){
var state_29821__$1 = state_29821;
var statearr_29939_32629 = state_29821__$1;
(statearr_29939_32629[(2)] = null);

(statearr_29939_32629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (17))){
var state_29821__$1 = state_29821;
var statearr_29940_32630 = state_29821__$1;
(statearr_29940_32630[(2)] = null);

(statearr_29940_32630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (3))){
var inst_29817 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29821__$1,inst_29817);
} else {
if((state_val_29823 === (12))){
var inst_29729 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29943_32638 = state_29821__$1;
(statearr_29943_32638[(2)] = inst_29729);

(statearr_29943_32638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (2))){
var state_29821__$1 = state_29821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29821__$1,(4),ch);
} else {
if((state_val_29823 === (23))){
var state_29821__$1 = state_29821;
var statearr_29944_32639 = state_29821__$1;
(statearr_29944_32639[(2)] = null);

(statearr_29944_32639[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (35))){
var inst_29798 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29945_32640 = state_29821__$1;
(statearr_29945_32640[(2)] = inst_29798);

(statearr_29945_32640[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (19))){
var inst_29686 = (state_29821[(7)]);
var inst_29693 = cljs.core.chunk_first(inst_29686);
var inst_29695 = cljs.core.chunk_rest(inst_29686);
var inst_29696 = cljs.core.count(inst_29693);
var inst_29654 = inst_29695;
var inst_29655 = inst_29693;
var inst_29656 = inst_29696;
var inst_29657 = (0);
var state_29821__$1 = (function (){var statearr_29948 = state_29821;
(statearr_29948[(13)] = inst_29657);

(statearr_29948[(14)] = inst_29656);

(statearr_29948[(16)] = inst_29654);

(statearr_29948[(17)] = inst_29655);

return statearr_29948;
})();
var statearr_29949_32644 = state_29821__$1;
(statearr_29949_32644[(2)] = null);

(statearr_29949_32644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (11))){
var inst_29654 = (state_29821[(16)]);
var inst_29686 = (state_29821[(7)]);
var inst_29686__$1 = cljs.core.seq(inst_29654);
var state_29821__$1 = (function (){var statearr_29950 = state_29821;
(statearr_29950[(7)] = inst_29686__$1);

return statearr_29950;
})();
if(inst_29686__$1){
var statearr_29951_32654 = state_29821__$1;
(statearr_29951_32654[(1)] = (16));

} else {
var statearr_29954_32655 = state_29821__$1;
(statearr_29954_32655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (9))){
var inst_29731 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29958_32661 = state_29821__$1;
(statearr_29958_32661[(2)] = inst_29731);

(statearr_29958_32661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (5))){
var inst_29652 = cljs.core.deref(cs);
var inst_29653 = cljs.core.seq(inst_29652);
var inst_29654 = inst_29653;
var inst_29655 = null;
var inst_29656 = (0);
var inst_29657 = (0);
var state_29821__$1 = (function (){var statearr_29959 = state_29821;
(statearr_29959[(13)] = inst_29657);

(statearr_29959[(14)] = inst_29656);

(statearr_29959[(16)] = inst_29654);

(statearr_29959[(17)] = inst_29655);

return statearr_29959;
})();
var statearr_29960_32671 = state_29821__$1;
(statearr_29960_32671[(2)] = null);

(statearr_29960_32671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (14))){
var state_29821__$1 = state_29821;
var statearr_29971_32672 = state_29821__$1;
(statearr_29971_32672[(2)] = null);

(statearr_29971_32672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (45))){
var inst_29809 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29973_32674 = state_29821__$1;
(statearr_29973_32674[(2)] = inst_29809);

(statearr_29973_32674[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (26))){
var inst_29734 = (state_29821[(27)]);
var inst_29802 = (state_29821[(2)]);
var inst_29803 = cljs.core.seq(inst_29734);
var state_29821__$1 = (function (){var statearr_29974 = state_29821;
(statearr_29974[(29)] = inst_29802);

return statearr_29974;
})();
if(inst_29803){
var statearr_29975_32680 = state_29821__$1;
(statearr_29975_32680[(1)] = (42));

} else {
var statearr_29976_32681 = state_29821__$1;
(statearr_29976_32681[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (16))){
var inst_29686 = (state_29821[(7)]);
var inst_29691 = cljs.core.chunked_seq_QMARK_(inst_29686);
var state_29821__$1 = state_29821;
if(inst_29691){
var statearr_29980_32682 = state_29821__$1;
(statearr_29980_32682[(1)] = (19));

} else {
var statearr_29981_32683 = state_29821__$1;
(statearr_29981_32683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (38))){
var inst_29795 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29982_32685 = state_29821__$1;
(statearr_29982_32685[(2)] = inst_29795);

(statearr_29982_32685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (30))){
var state_29821__$1 = state_29821;
var statearr_29983_32689 = state_29821__$1;
(statearr_29983_32689[(2)] = null);

(statearr_29983_32689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (10))){
var inst_29657 = (state_29821[(13)]);
var inst_29655 = (state_29821[(17)]);
var inst_29668 = cljs.core._nth(inst_29655,inst_29657);
var inst_29669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29668,(0),null);
var inst_29670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29668,(1),null);
var state_29821__$1 = (function (){var statearr_29985 = state_29821;
(statearr_29985[(24)] = inst_29669);

return statearr_29985;
})();
if(cljs.core.truth_(inst_29670)){
var statearr_29986_32700 = state_29821__$1;
(statearr_29986_32700[(1)] = (13));

} else {
var statearr_29987_32702 = state_29821__$1;
(statearr_29987_32702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (18))){
var inst_29727 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29988_32704 = state_29821__$1;
(statearr_29988_32704[(2)] = inst_29727);

(statearr_29988_32704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (42))){
var state_29821__$1 = state_29821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29821__$1,(45),dchan);
} else {
if((state_val_29823 === (37))){
var inst_29762 = (state_29821[(23)]);
var inst_29785 = (state_29821[(22)]);
var inst_29645 = (state_29821[(12)]);
var inst_29785__$1 = cljs.core.first(inst_29762);
var inst_29786 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29785__$1,inst_29645,done);
var state_29821__$1 = (function (){var statearr_29994 = state_29821;
(statearr_29994[(22)] = inst_29785__$1);

return statearr_29994;
})();
if(cljs.core.truth_(inst_29786)){
var statearr_29995_32714 = state_29821__$1;
(statearr_29995_32714[(1)] = (39));

} else {
var statearr_29996_32715 = state_29821__$1;
(statearr_29996_32715[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (8))){
var inst_29657 = (state_29821[(13)]);
var inst_29656 = (state_29821[(14)]);
var inst_29662 = (inst_29657 < inst_29656);
var inst_29663 = inst_29662;
var state_29821__$1 = state_29821;
if(cljs.core.truth_(inst_29663)){
var statearr_29997_32718 = state_29821__$1;
(statearr_29997_32718[(1)] = (10));

} else {
var statearr_30001_32719 = state_29821__$1;
(statearr_30001_32719[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28304__auto__ = null;
var cljs$core$async$mult_$_state_machine__28304__auto____0 = (function (){
var statearr_30010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30010[(0)] = cljs$core$async$mult_$_state_machine__28304__auto__);

(statearr_30010[(1)] = (1));

return statearr_30010;
});
var cljs$core$async$mult_$_state_machine__28304__auto____1 = (function (state_29821){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_29821);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e30013){var ex__28307__auto__ = e30013;
var statearr_30014_32729 = state_29821;
(statearr_30014_32729[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_29821[(4)]))){
var statearr_30016_32730 = state_29821;
(statearr_30016_32730[(1)] = cljs.core.first((state_29821[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32731 = state_29821;
state_29821 = G__32731;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28304__auto__ = function(state_29821){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28304__auto____1.call(this,state_29821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28304__auto____0;
cljs$core$async$mult_$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28304__auto____1;
return cljs$core$async$mult_$_state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_30019 = f__28477__auto__();
(statearr_30019[(6)] = c__28476__auto___32544);

return statearr_30019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
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
var G__30021 = arguments.length;
switch (G__30021) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_32736 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32736(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32741 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32741(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32743 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32743(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32753 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32753(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32765 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32765(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32773 = arguments.length;
var i__4737__auto___32774 = (0);
while(true){
if((i__4737__auto___32774 < len__4736__auto___32773)){
args__4742__auto__.push((arguments[i__4737__auto___32774]));

var G__32776 = (i__4737__auto___32774 + (1));
i__4737__auto___32774 = G__32776;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30083){
var map__30084 = p__30083;
var map__30084__$1 = (((((!((map__30084 == null))))?(((((map__30084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30084):map__30084);
var opts = map__30084__$1;
var statearr_30086_32783 = state;
(statearr_30086_32783[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30087_32784 = state;
(statearr_30087_32784[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30089_32789 = state;
(statearr_30089_32789[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30075){
var G__30076 = cljs.core.first(seq30075);
var seq30075__$1 = cljs.core.next(seq30075);
var G__30077 = cljs.core.first(seq30075__$1);
var seq30075__$2 = cljs.core.next(seq30075__$1);
var G__30078 = cljs.core.first(seq30075__$2);
var seq30075__$3 = cljs.core.next(seq30075__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30076,G__30077,G__30078,seq30075__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30093 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30094){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30094 = meta30094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30095,meta30094__$1){
var self__ = this;
var _30095__$1 = this;
return (new cljs.core.async.t_cljs$core$async30093(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30094__$1));
}));

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30095){
var self__ = this;
var _30095__$1 = this;
return self__.meta30094;
}));

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30094","meta30094",-896825575,null)], null);
}));

(cljs.core.async.t_cljs$core$async30093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30093");

(cljs.core.async.t_cljs$core$async30093.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30093.
 */
cljs.core.async.__GT_t_cljs$core$async30093 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30093(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30094){
return (new cljs.core.async.t_cljs$core$async30093(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30094));
});

}

return (new cljs.core.async.t_cljs$core$async30093(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28476__auto___32812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_30238){
var state_val_30241 = (state_30238[(1)]);
if((state_val_30241 === (7))){
var inst_30137 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30259_32814 = state_30238__$1;
(statearr_30259_32814[(2)] = inst_30137);

(statearr_30259_32814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (20))){
var inst_30149 = (state_30238[(7)]);
var state_30238__$1 = state_30238;
var statearr_30264_32815 = state_30238__$1;
(statearr_30264_32815[(2)] = inst_30149);

(statearr_30264_32815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (27))){
var state_30238__$1 = state_30238;
var statearr_30272_32816 = state_30238__$1;
(statearr_30272_32816[(2)] = null);

(statearr_30272_32816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (1))){
var inst_30124 = (state_30238[(8)]);
var inst_30124__$1 = calc_state();
var inst_30126 = (inst_30124__$1 == null);
var inst_30127 = cljs.core.not(inst_30126);
var state_30238__$1 = (function (){var statearr_30281 = state_30238;
(statearr_30281[(8)] = inst_30124__$1);

return statearr_30281;
})();
if(inst_30127){
var statearr_30282_32817 = state_30238__$1;
(statearr_30282_32817[(1)] = (2));

} else {
var statearr_30286_32818 = state_30238__$1;
(statearr_30286_32818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (24))){
var inst_30174 = (state_30238[(9)]);
var inst_30197 = (state_30238[(10)]);
var inst_30183 = (state_30238[(11)]);
var inst_30197__$1 = (inst_30174.cljs$core$IFn$_invoke$arity$1 ? inst_30174.cljs$core$IFn$_invoke$arity$1(inst_30183) : inst_30174.call(null,inst_30183));
var state_30238__$1 = (function (){var statearr_30291 = state_30238;
(statearr_30291[(10)] = inst_30197__$1);

return statearr_30291;
})();
if(cljs.core.truth_(inst_30197__$1)){
var statearr_30293_32819 = state_30238__$1;
(statearr_30293_32819[(1)] = (29));

} else {
var statearr_30294_32820 = state_30238__$1;
(statearr_30294_32820[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (4))){
var inst_30140 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30140)){
var statearr_30298_32823 = state_30238__$1;
(statearr_30298_32823[(1)] = (8));

} else {
var statearr_30299_32824 = state_30238__$1;
(statearr_30299_32824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (15))){
var inst_30167 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30167)){
var statearr_30301_32825 = state_30238__$1;
(statearr_30301_32825[(1)] = (19));

} else {
var statearr_30302_32826 = state_30238__$1;
(statearr_30302_32826[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (21))){
var inst_30173 = (state_30238[(12)]);
var inst_30173__$1 = (state_30238[(2)]);
var inst_30174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30173__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30173__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30173__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30238__$1 = (function (){var statearr_30303 = state_30238;
(statearr_30303[(9)] = inst_30174);

(statearr_30303[(12)] = inst_30173__$1);

(statearr_30303[(13)] = inst_30175);

return statearr_30303;
})();
return cljs.core.async.ioc_alts_BANG_(state_30238__$1,(22),inst_30176);
} else {
if((state_val_30241 === (31))){
var inst_30214 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30214)){
var statearr_30304_32832 = state_30238__$1;
(statearr_30304_32832[(1)] = (32));

} else {
var statearr_30305_32833 = state_30238__$1;
(statearr_30305_32833[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (32))){
var inst_30182 = (state_30238[(14)]);
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30238__$1,(35),out,inst_30182);
} else {
if((state_val_30241 === (33))){
var inst_30173 = (state_30238[(12)]);
var inst_30149 = inst_30173;
var state_30238__$1 = (function (){var statearr_30308 = state_30238;
(statearr_30308[(7)] = inst_30149);

return statearr_30308;
})();
var statearr_30309_32834 = state_30238__$1;
(statearr_30309_32834[(2)] = null);

(statearr_30309_32834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (13))){
var inst_30149 = (state_30238[(7)]);
var inst_30156 = inst_30149.cljs$lang$protocol_mask$partition0$;
var inst_30157 = (inst_30156 & (64));
var inst_30158 = inst_30149.cljs$core$ISeq$;
var inst_30159 = (cljs.core.PROTOCOL_SENTINEL === inst_30158);
var inst_30160 = ((inst_30157) || (inst_30159));
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30160)){
var statearr_30312_32837 = state_30238__$1;
(statearr_30312_32837[(1)] = (16));

} else {
var statearr_30313_32839 = state_30238__$1;
(statearr_30313_32839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (22))){
var inst_30182 = (state_30238[(14)]);
var inst_30183 = (state_30238[(11)]);
var inst_30181 = (state_30238[(2)]);
var inst_30182__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30181,(0),null);
var inst_30183__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30181,(1),null);
var inst_30184 = (inst_30182__$1 == null);
var inst_30185 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30183__$1,change);
var inst_30186 = ((inst_30184) || (inst_30185));
var state_30238__$1 = (function (){var statearr_30314 = state_30238;
(statearr_30314[(14)] = inst_30182__$1);

(statearr_30314[(11)] = inst_30183__$1);

return statearr_30314;
})();
if(cljs.core.truth_(inst_30186)){
var statearr_30317_32845 = state_30238__$1;
(statearr_30317_32845[(1)] = (23));

} else {
var statearr_30318_32846 = state_30238__$1;
(statearr_30318_32846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (36))){
var inst_30173 = (state_30238[(12)]);
var inst_30149 = inst_30173;
var state_30238__$1 = (function (){var statearr_30319 = state_30238;
(statearr_30319[(7)] = inst_30149);

return statearr_30319;
})();
var statearr_30321_32848 = state_30238__$1;
(statearr_30321_32848[(2)] = null);

(statearr_30321_32848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (29))){
var inst_30197 = (state_30238[(10)]);
var state_30238__$1 = state_30238;
var statearr_30324_32849 = state_30238__$1;
(statearr_30324_32849[(2)] = inst_30197);

(statearr_30324_32849[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (6))){
var state_30238__$1 = state_30238;
var statearr_30336_32850 = state_30238__$1;
(statearr_30336_32850[(2)] = false);

(statearr_30336_32850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (28))){
var inst_30193 = (state_30238[(2)]);
var inst_30194 = calc_state();
var inst_30149 = inst_30194;
var state_30238__$1 = (function (){var statearr_30337 = state_30238;
(statearr_30337[(15)] = inst_30193);

(statearr_30337[(7)] = inst_30149);

return statearr_30337;
})();
var statearr_30341_32861 = state_30238__$1;
(statearr_30341_32861[(2)] = null);

(statearr_30341_32861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (25))){
var inst_30228 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30347_32863 = state_30238__$1;
(statearr_30347_32863[(2)] = inst_30228);

(statearr_30347_32863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (34))){
var inst_30226 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30351_32868 = state_30238__$1;
(statearr_30351_32868[(2)] = inst_30226);

(statearr_30351_32868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (17))){
var state_30238__$1 = state_30238;
var statearr_30353_32872 = state_30238__$1;
(statearr_30353_32872[(2)] = false);

(statearr_30353_32872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (3))){
var state_30238__$1 = state_30238;
var statearr_30354_32873 = state_30238__$1;
(statearr_30354_32873[(2)] = false);

(statearr_30354_32873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (12))){
var inst_30230 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30238__$1,inst_30230);
} else {
if((state_val_30241 === (2))){
var inst_30124 = (state_30238[(8)]);
var inst_30129 = inst_30124.cljs$lang$protocol_mask$partition0$;
var inst_30130 = (inst_30129 & (64));
var inst_30131 = inst_30124.cljs$core$ISeq$;
var inst_30132 = (cljs.core.PROTOCOL_SENTINEL === inst_30131);
var inst_30133 = ((inst_30130) || (inst_30132));
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30133)){
var statearr_30358_32881 = state_30238__$1;
(statearr_30358_32881[(1)] = (5));

} else {
var statearr_30359_32883 = state_30238__$1;
(statearr_30359_32883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (23))){
var inst_30182 = (state_30238[(14)]);
var inst_30188 = (inst_30182 == null);
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30188)){
var statearr_30363_32885 = state_30238__$1;
(statearr_30363_32885[(1)] = (26));

} else {
var statearr_30364_32889 = state_30238__$1;
(statearr_30364_32889[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (35))){
var inst_30217 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30217)){
var statearr_30365_32890 = state_30238__$1;
(statearr_30365_32890[(1)] = (36));

} else {
var statearr_30366_32891 = state_30238__$1;
(statearr_30366_32891[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (19))){
var inst_30149 = (state_30238[(7)]);
var inst_30169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30149);
var state_30238__$1 = state_30238;
var statearr_30367_32892 = state_30238__$1;
(statearr_30367_32892[(2)] = inst_30169);

(statearr_30367_32892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (11))){
var inst_30149 = (state_30238[(7)]);
var inst_30153 = (inst_30149 == null);
var inst_30154 = cljs.core.not(inst_30153);
var state_30238__$1 = state_30238;
if(inst_30154){
var statearr_30372_32894 = state_30238__$1;
(statearr_30372_32894[(1)] = (13));

} else {
var statearr_30375_32895 = state_30238__$1;
(statearr_30375_32895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (9))){
var inst_30124 = (state_30238[(8)]);
var state_30238__$1 = state_30238;
var statearr_30380_32896 = state_30238__$1;
(statearr_30380_32896[(2)] = inst_30124);

(statearr_30380_32896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (5))){
var state_30238__$1 = state_30238;
var statearr_30383_32897 = state_30238__$1;
(statearr_30383_32897[(2)] = true);

(statearr_30383_32897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (14))){
var state_30238__$1 = state_30238;
var statearr_30386_32902 = state_30238__$1;
(statearr_30386_32902[(2)] = false);

(statearr_30386_32902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (26))){
var inst_30183 = (state_30238[(11)]);
var inst_30190 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30183);
var state_30238__$1 = state_30238;
var statearr_30388_32903 = state_30238__$1;
(statearr_30388_32903[(2)] = inst_30190);

(statearr_30388_32903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (16))){
var state_30238__$1 = state_30238;
var statearr_30392_32904 = state_30238__$1;
(statearr_30392_32904[(2)] = true);

(statearr_30392_32904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (38))){
var inst_30222 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30394_32905 = state_30238__$1;
(statearr_30394_32905[(2)] = inst_30222);

(statearr_30394_32905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (30))){
var inst_30174 = (state_30238[(9)]);
var inst_30175 = (state_30238[(13)]);
var inst_30183 = (state_30238[(11)]);
var inst_30209 = cljs.core.empty_QMARK_(inst_30174);
var inst_30210 = (inst_30175.cljs$core$IFn$_invoke$arity$1 ? inst_30175.cljs$core$IFn$_invoke$arity$1(inst_30183) : inst_30175.call(null,inst_30183));
var inst_30211 = cljs.core.not(inst_30210);
var inst_30212 = ((inst_30209) && (inst_30211));
var state_30238__$1 = state_30238;
var statearr_30403_32907 = state_30238__$1;
(statearr_30403_32907[(2)] = inst_30212);

(statearr_30403_32907[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (10))){
var inst_30124 = (state_30238[(8)]);
var inst_30145 = (state_30238[(2)]);
var inst_30146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30145,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30145,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30145,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30149 = inst_30124;
var state_30238__$1 = (function (){var statearr_30405 = state_30238;
(statearr_30405[(16)] = inst_30146);

(statearr_30405[(7)] = inst_30149);

(statearr_30405[(17)] = inst_30147);

(statearr_30405[(18)] = inst_30148);

return statearr_30405;
})();
var statearr_30407_32908 = state_30238__$1;
(statearr_30407_32908[(2)] = null);

(statearr_30407_32908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (18))){
var inst_30164 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30410_32914 = state_30238__$1;
(statearr_30410_32914[(2)] = inst_30164);

(statearr_30410_32914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (37))){
var state_30238__$1 = state_30238;
var statearr_30413_32915 = state_30238__$1;
(statearr_30413_32915[(2)] = null);

(statearr_30413_32915[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (8))){
var inst_30124 = (state_30238[(8)]);
var inst_30142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30124);
var state_30238__$1 = state_30238;
var statearr_30415_32925 = state_30238__$1;
(statearr_30415_32925[(2)] = inst_30142);

(statearr_30415_32925[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28304__auto__ = null;
var cljs$core$async$mix_$_state_machine__28304__auto____0 = (function (){
var statearr_30417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30417[(0)] = cljs$core$async$mix_$_state_machine__28304__auto__);

(statearr_30417[(1)] = (1));

return statearr_30417;
});
var cljs$core$async$mix_$_state_machine__28304__auto____1 = (function (state_30238){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_30238);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e30419){var ex__28307__auto__ = e30419;
var statearr_30421_32926 = state_30238;
(statearr_30421_32926[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_30238[(4)]))){
var statearr_30422_32927 = state_30238;
(statearr_30422_32927[(1)] = cljs.core.first((state_30238[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32928 = state_30238;
state_30238 = G__32928;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28304__auto__ = function(state_30238){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28304__auto____1.call(this,state_30238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28304__auto____0;
cljs$core$async$mix_$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28304__auto____1;
return cljs$core$async$mix_$_state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_30429 = f__28477__auto__();
(statearr_30429[(6)] = c__28476__auto___32812);

return statearr_30429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32929 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32929(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32935 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32935(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32938 = (function() {
var G__32939 = null;
var G__32939__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32939__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32939 = function(p,v){
switch(arguments.length){
case 1:
return G__32939__1.call(this,p);
case 2:
return G__32939__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32939.cljs$core$IFn$_invoke$arity$1 = G__32939__1;
G__32939.cljs$core$IFn$_invoke$arity$2 = G__32939__2;
return G__32939;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30476 = arguments.length;
switch (G__30476) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32938(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32938(p,v);
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
var G__30498 = arguments.length;
switch (G__30498) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30492_SHARP_){
if(cljs.core.truth_((p1__30492_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30492_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30492_SHARP_.call(null,topic)))){
return p1__30492_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30492_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30511 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30512){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30512 = meta30512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30513,meta30512__$1){
var self__ = this;
var _30513__$1 = this;
return (new cljs.core.async.t_cljs$core$async30511(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30512__$1));
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30513){
var self__ = this;
var _30513__$1 = this;
return self__.meta30512;
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30512","meta30512",2090621203,null)], null);
}));

(cljs.core.async.t_cljs$core$async30511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30511");

(cljs.core.async.t_cljs$core$async30511.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30511.
 */
cljs.core.async.__GT_t_cljs$core$async30511 = (function cljs$core$async$__GT_t_cljs$core$async30511(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30512){
return (new cljs.core.async.t_cljs$core$async30511(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30512));
});

}

return (new cljs.core.async.t_cljs$core$async30511(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28476__auto___32959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_30617){
var state_val_30618 = (state_30617[(1)]);
if((state_val_30618 === (7))){
var inst_30613 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
var statearr_30619_32963 = state_30617__$1;
(statearr_30619_32963[(2)] = inst_30613);

(statearr_30619_32963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (20))){
var state_30617__$1 = state_30617;
var statearr_30620_32965 = state_30617__$1;
(statearr_30620_32965[(2)] = null);

(statearr_30620_32965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (1))){
var state_30617__$1 = state_30617;
var statearr_30625_32968 = state_30617__$1;
(statearr_30625_32968[(2)] = null);

(statearr_30625_32968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (24))){
var inst_30596 = (state_30617[(7)]);
var inst_30605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30596);
var state_30617__$1 = state_30617;
var statearr_30627_32970 = state_30617__$1;
(statearr_30627_32970[(2)] = inst_30605);

(statearr_30627_32970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (4))){
var inst_30539 = (state_30617[(8)]);
var inst_30539__$1 = (state_30617[(2)]);
var inst_30540 = (inst_30539__$1 == null);
var state_30617__$1 = (function (){var statearr_30632 = state_30617;
(statearr_30632[(8)] = inst_30539__$1);

return statearr_30632;
})();
if(cljs.core.truth_(inst_30540)){
var statearr_30633_32972 = state_30617__$1;
(statearr_30633_32972[(1)] = (5));

} else {
var statearr_30634_32973 = state_30617__$1;
(statearr_30634_32973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (15))){
var inst_30590 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
var statearr_30635_32974 = state_30617__$1;
(statearr_30635_32974[(2)] = inst_30590);

(statearr_30635_32974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (21))){
var inst_30610 = (state_30617[(2)]);
var state_30617__$1 = (function (){var statearr_30636 = state_30617;
(statearr_30636[(9)] = inst_30610);

return statearr_30636;
})();
var statearr_30637_32981 = state_30617__$1;
(statearr_30637_32981[(2)] = null);

(statearr_30637_32981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (13))){
var inst_30572 = (state_30617[(10)]);
var inst_30574 = cljs.core.chunked_seq_QMARK_(inst_30572);
var state_30617__$1 = state_30617;
if(inst_30574){
var statearr_30646_32983 = state_30617__$1;
(statearr_30646_32983[(1)] = (16));

} else {
var statearr_30647_32984 = state_30617__$1;
(statearr_30647_32984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (22))){
var inst_30602 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
if(cljs.core.truth_(inst_30602)){
var statearr_30648_32987 = state_30617__$1;
(statearr_30648_32987[(1)] = (23));

} else {
var statearr_30649_32988 = state_30617__$1;
(statearr_30649_32988[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (6))){
var inst_30598 = (state_30617[(11)]);
var inst_30596 = (state_30617[(7)]);
var inst_30539 = (state_30617[(8)]);
var inst_30596__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30539) : topic_fn.call(null,inst_30539));
var inst_30597 = cljs.core.deref(mults);
var inst_30598__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30597,inst_30596__$1);
var state_30617__$1 = (function (){var statearr_30653 = state_30617;
(statearr_30653[(11)] = inst_30598__$1);

(statearr_30653[(7)] = inst_30596__$1);

return statearr_30653;
})();
if(cljs.core.truth_(inst_30598__$1)){
var statearr_30654_32995 = state_30617__$1;
(statearr_30654_32995[(1)] = (19));

} else {
var statearr_30655_32996 = state_30617__$1;
(statearr_30655_32996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (25))){
var inst_30607 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
var statearr_30660_32998 = state_30617__$1;
(statearr_30660_32998[(2)] = inst_30607);

(statearr_30660_32998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (17))){
var inst_30572 = (state_30617[(10)]);
var inst_30581 = cljs.core.first(inst_30572);
var inst_30582 = cljs.core.async.muxch_STAR_(inst_30581);
var inst_30583 = cljs.core.async.close_BANG_(inst_30582);
var inst_30584 = cljs.core.next(inst_30572);
var inst_30553 = inst_30584;
var inst_30554 = null;
var inst_30555 = (0);
var inst_30556 = (0);
var state_30617__$1 = (function (){var statearr_30663 = state_30617;
(statearr_30663[(12)] = inst_30555);

(statearr_30663[(13)] = inst_30583);

(statearr_30663[(14)] = inst_30554);

(statearr_30663[(15)] = inst_30553);

(statearr_30663[(16)] = inst_30556);

return statearr_30663;
})();
var statearr_30669_32999 = state_30617__$1;
(statearr_30669_32999[(2)] = null);

(statearr_30669_32999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (3))){
var inst_30615 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30617__$1,inst_30615);
} else {
if((state_val_30618 === (12))){
var inst_30592 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
var statearr_30673_33002 = state_30617__$1;
(statearr_30673_33002[(2)] = inst_30592);

(statearr_30673_33002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (2))){
var state_30617__$1 = state_30617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30617__$1,(4),ch);
} else {
if((state_val_30618 === (23))){
var state_30617__$1 = state_30617;
var statearr_30678_33005 = state_30617__$1;
(statearr_30678_33005[(2)] = null);

(statearr_30678_33005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (19))){
var inst_30598 = (state_30617[(11)]);
var inst_30539 = (state_30617[(8)]);
var inst_30600 = cljs.core.async.muxch_STAR_(inst_30598);
var state_30617__$1 = state_30617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30617__$1,(22),inst_30600,inst_30539);
} else {
if((state_val_30618 === (11))){
var inst_30553 = (state_30617[(15)]);
var inst_30572 = (state_30617[(10)]);
var inst_30572__$1 = cljs.core.seq(inst_30553);
var state_30617__$1 = (function (){var statearr_30682 = state_30617;
(statearr_30682[(10)] = inst_30572__$1);

return statearr_30682;
})();
if(inst_30572__$1){
var statearr_30683_33009 = state_30617__$1;
(statearr_30683_33009[(1)] = (13));

} else {
var statearr_30684_33011 = state_30617__$1;
(statearr_30684_33011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (9))){
var inst_30594 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
var statearr_30689_33014 = state_30617__$1;
(statearr_30689_33014[(2)] = inst_30594);

(statearr_30689_33014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (5))){
var inst_30548 = cljs.core.deref(mults);
var inst_30549 = cljs.core.vals(inst_30548);
var inst_30550 = cljs.core.seq(inst_30549);
var inst_30553 = inst_30550;
var inst_30554 = null;
var inst_30555 = (0);
var inst_30556 = (0);
var state_30617__$1 = (function (){var statearr_30690 = state_30617;
(statearr_30690[(12)] = inst_30555);

(statearr_30690[(14)] = inst_30554);

(statearr_30690[(15)] = inst_30553);

(statearr_30690[(16)] = inst_30556);

return statearr_30690;
})();
var statearr_30691_33016 = state_30617__$1;
(statearr_30691_33016[(2)] = null);

(statearr_30691_33016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (14))){
var state_30617__$1 = state_30617;
var statearr_30695_33017 = state_30617__$1;
(statearr_30695_33017[(2)] = null);

(statearr_30695_33017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (16))){
var inst_30572 = (state_30617[(10)]);
var inst_30576 = cljs.core.chunk_first(inst_30572);
var inst_30577 = cljs.core.chunk_rest(inst_30572);
var inst_30578 = cljs.core.count(inst_30576);
var inst_30553 = inst_30577;
var inst_30554 = inst_30576;
var inst_30555 = inst_30578;
var inst_30556 = (0);
var state_30617__$1 = (function (){var statearr_30698 = state_30617;
(statearr_30698[(12)] = inst_30555);

(statearr_30698[(14)] = inst_30554);

(statearr_30698[(15)] = inst_30553);

(statearr_30698[(16)] = inst_30556);

return statearr_30698;
})();
var statearr_30700_33029 = state_30617__$1;
(statearr_30700_33029[(2)] = null);

(statearr_30700_33029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (10))){
var inst_30555 = (state_30617[(12)]);
var inst_30554 = (state_30617[(14)]);
var inst_30553 = (state_30617[(15)]);
var inst_30556 = (state_30617[(16)]);
var inst_30562 = cljs.core._nth(inst_30554,inst_30556);
var inst_30567 = cljs.core.async.muxch_STAR_(inst_30562);
var inst_30568 = cljs.core.async.close_BANG_(inst_30567);
var inst_30569 = (inst_30556 + (1));
var tmp30692 = inst_30555;
var tmp30693 = inst_30554;
var tmp30694 = inst_30553;
var inst_30553__$1 = tmp30694;
var inst_30554__$1 = tmp30693;
var inst_30555__$1 = tmp30692;
var inst_30556__$1 = inst_30569;
var state_30617__$1 = (function (){var statearr_30701 = state_30617;
(statearr_30701[(12)] = inst_30555__$1);

(statearr_30701[(14)] = inst_30554__$1);

(statearr_30701[(15)] = inst_30553__$1);

(statearr_30701[(16)] = inst_30556__$1);

(statearr_30701[(17)] = inst_30568);

return statearr_30701;
})();
var statearr_30702_33038 = state_30617__$1;
(statearr_30702_33038[(2)] = null);

(statearr_30702_33038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (18))){
var inst_30587 = (state_30617[(2)]);
var state_30617__$1 = state_30617;
var statearr_30706_33040 = state_30617__$1;
(statearr_30706_33040[(2)] = inst_30587);

(statearr_30706_33040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30618 === (8))){
var inst_30555 = (state_30617[(12)]);
var inst_30556 = (state_30617[(16)]);
var inst_30559 = (inst_30556 < inst_30555);
var inst_30560 = inst_30559;
var state_30617__$1 = state_30617;
if(cljs.core.truth_(inst_30560)){
var statearr_30708_33048 = state_30617__$1;
(statearr_30708_33048[(1)] = (10));

} else {
var statearr_30709_33051 = state_30617__$1;
(statearr_30709_33051[(1)] = (11));

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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_30710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30710[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_30710[(1)] = (1));

return statearr_30710;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_30617){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_30617);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e30712){var ex__28307__auto__ = e30712;
var statearr_30713_33055 = state_30617;
(statearr_30713_33055[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_30617[(4)]))){
var statearr_30715_33056 = state_30617;
(statearr_30715_33056[(1)] = cljs.core.first((state_30617[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33064 = state_30617;
state_30617 = G__33064;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_30617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_30617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_30718 = f__28477__auto__();
(statearr_30718[(6)] = c__28476__auto___32959);

return statearr_30718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
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
var G__30720 = arguments.length;
switch (G__30720) {
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
var G__30730 = arguments.length;
switch (G__30730) {
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
var G__30746 = arguments.length;
switch (G__30746) {
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
var c__28476__auto___33090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_30814){
var state_val_30816 = (state_30814[(1)]);
if((state_val_30816 === (7))){
var state_30814__$1 = state_30814;
var statearr_30818_33093 = state_30814__$1;
(statearr_30818_33093[(2)] = null);

(statearr_30818_33093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (1))){
var state_30814__$1 = state_30814;
var statearr_30820_33094 = state_30814__$1;
(statearr_30820_33094[(2)] = null);

(statearr_30820_33094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (4))){
var inst_30762 = (state_30814[(7)]);
var inst_30761 = (state_30814[(8)]);
var inst_30764 = (inst_30762 < inst_30761);
var state_30814__$1 = state_30814;
if(cljs.core.truth_(inst_30764)){
var statearr_30822_33099 = state_30814__$1;
(statearr_30822_33099[(1)] = (6));

} else {
var statearr_30823_33101 = state_30814__$1;
(statearr_30823_33101[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (15))){
var inst_30796 = (state_30814[(9)]);
var inst_30801 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30796);
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30814__$1,(17),out,inst_30801);
} else {
if((state_val_30816 === (13))){
var inst_30796 = (state_30814[(9)]);
var inst_30796__$1 = (state_30814[(2)]);
var inst_30797 = cljs.core.some(cljs.core.nil_QMARK_,inst_30796__$1);
var state_30814__$1 = (function (){var statearr_30835 = state_30814;
(statearr_30835[(9)] = inst_30796__$1);

return statearr_30835;
})();
if(cljs.core.truth_(inst_30797)){
var statearr_30836_33112 = state_30814__$1;
(statearr_30836_33112[(1)] = (14));

} else {
var statearr_30843_33119 = state_30814__$1;
(statearr_30843_33119[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (6))){
var state_30814__$1 = state_30814;
var statearr_30848_33122 = state_30814__$1;
(statearr_30848_33122[(2)] = null);

(statearr_30848_33122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (17))){
var inst_30803 = (state_30814[(2)]);
var state_30814__$1 = (function (){var statearr_30857 = state_30814;
(statearr_30857[(10)] = inst_30803);

return statearr_30857;
})();
var statearr_30859_33125 = state_30814__$1;
(statearr_30859_33125[(2)] = null);

(statearr_30859_33125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (3))){
var inst_30808 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30814__$1,inst_30808);
} else {
if((state_val_30816 === (12))){
var _ = (function (){var statearr_30861 = state_30814;
(statearr_30861[(4)] = cljs.core.rest((state_30814[(4)])));

return statearr_30861;
})();
var state_30814__$1 = state_30814;
var ex30854 = (state_30814__$1[(2)]);
var statearr_30862_33129 = state_30814__$1;
(statearr_30862_33129[(5)] = ex30854);


if((ex30854 instanceof Object)){
var statearr_30865_33130 = state_30814__$1;
(statearr_30865_33130[(1)] = (11));

(statearr_30865_33130[(5)] = null);

} else {
throw ex30854;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (2))){
var inst_30757 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30761 = cnt;
var inst_30762 = (0);
var state_30814__$1 = (function (){var statearr_30873 = state_30814;
(statearr_30873[(11)] = inst_30757);

(statearr_30873[(7)] = inst_30762);

(statearr_30873[(8)] = inst_30761);

return statearr_30873;
})();
var statearr_30874_33138 = state_30814__$1;
(statearr_30874_33138[(2)] = null);

(statearr_30874_33138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (11))){
var inst_30772 = (state_30814[(2)]);
var inst_30774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30814__$1 = (function (){var statearr_30878 = state_30814;
(statearr_30878[(12)] = inst_30772);

return statearr_30878;
})();
var statearr_30879_33141 = state_30814__$1;
(statearr_30879_33141[(2)] = inst_30774);

(statearr_30879_33141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (9))){
var inst_30762 = (state_30814[(7)]);
var _ = (function (){var statearr_30881 = state_30814;
(statearr_30881[(4)] = cljs.core.cons((12),(state_30814[(4)])));

return statearr_30881;
})();
var inst_30780 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30762) : chs__$1.call(null,inst_30762));
var inst_30781 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30762) : done.call(null,inst_30762));
var inst_30782 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30780,inst_30781);
var ___$1 = (function (){var statearr_30882 = state_30814;
(statearr_30882[(4)] = cljs.core.rest((state_30814[(4)])));

return statearr_30882;
})();
var state_30814__$1 = state_30814;
var statearr_30884_33148 = state_30814__$1;
(statearr_30884_33148[(2)] = inst_30782);

(statearr_30884_33148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (5))){
var inst_30793 = (state_30814[(2)]);
var state_30814__$1 = (function (){var statearr_30891 = state_30814;
(statearr_30891[(13)] = inst_30793);

return statearr_30891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30814__$1,(13),dchan);
} else {
if((state_val_30816 === (14))){
var inst_30799 = cljs.core.async.close_BANG_(out);
var state_30814__$1 = state_30814;
var statearr_30895_33154 = state_30814__$1;
(statearr_30895_33154[(2)] = inst_30799);

(statearr_30895_33154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (16))){
var inst_30806 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
var statearr_30899_33158 = state_30814__$1;
(statearr_30899_33158[(2)] = inst_30806);

(statearr_30899_33158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (10))){
var inst_30762 = (state_30814[(7)]);
var inst_30785 = (state_30814[(2)]);
var inst_30787 = (inst_30762 + (1));
var inst_30762__$1 = inst_30787;
var state_30814__$1 = (function (){var statearr_30905 = state_30814;
(statearr_30905[(7)] = inst_30762__$1);

(statearr_30905[(14)] = inst_30785);

return statearr_30905;
})();
var statearr_30906_33161 = state_30814__$1;
(statearr_30906_33161[(2)] = null);

(statearr_30906_33161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (8))){
var inst_30791 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
var statearr_30910_33162 = state_30814__$1;
(statearr_30910_33162[(2)] = inst_30791);

(statearr_30910_33162[(1)] = (5));


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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_30914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30914[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_30914[(1)] = (1));

return statearr_30914;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_30814){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_30814);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e30916){var ex__28307__auto__ = e30916;
var statearr_30917_33175 = state_30814;
(statearr_30917_33175[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_30814[(4)]))){
var statearr_30926_33179 = state_30814;
(statearr_30926_33179[(1)] = cljs.core.first((state_30814[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33181 = state_30814;
state_30814 = G__33181;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_30814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_30814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_30935 = f__28477__auto__();
(statearr_30935[(6)] = c__28476__auto___33090);

return statearr_30935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
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
var G__30941 = arguments.length;
switch (G__30941) {
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
var c__28476__auto___33194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_30985){
var state_val_30986 = (state_30985[(1)]);
if((state_val_30986 === (7))){
var inst_30960 = (state_30985[(7)]);
var inst_30959 = (state_30985[(8)]);
var inst_30959__$1 = (state_30985[(2)]);
var inst_30960__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30959__$1,(0),null);
var inst_30961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30959__$1,(1),null);
var inst_30962 = (inst_30960__$1 == null);
var state_30985__$1 = (function (){var statearr_30997 = state_30985;
(statearr_30997[(7)] = inst_30960__$1);

(statearr_30997[(8)] = inst_30959__$1);

(statearr_30997[(9)] = inst_30961);

return statearr_30997;
})();
if(cljs.core.truth_(inst_30962)){
var statearr_30998_33195 = state_30985__$1;
(statearr_30998_33195[(1)] = (8));

} else {
var statearr_30999_33196 = state_30985__$1;
(statearr_30999_33196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (1))){
var inst_30949 = cljs.core.vec(chs);
var inst_30950 = inst_30949;
var state_30985__$1 = (function (){var statearr_31006 = state_30985;
(statearr_31006[(10)] = inst_30950);

return statearr_31006;
})();
var statearr_31007_33201 = state_30985__$1;
(statearr_31007_33201[(2)] = null);

(statearr_31007_33201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (4))){
var inst_30950 = (state_30985[(10)]);
var state_30985__$1 = state_30985;
return cljs.core.async.ioc_alts_BANG_(state_30985__$1,(7),inst_30950);
} else {
if((state_val_30986 === (6))){
var inst_30981 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31015_33202 = state_30985__$1;
(statearr_31015_33202[(2)] = inst_30981);

(statearr_31015_33202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (3))){
var inst_30983 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30985__$1,inst_30983);
} else {
if((state_val_30986 === (2))){
var inst_30950 = (state_30985[(10)]);
var inst_30952 = cljs.core.count(inst_30950);
var inst_30953 = (inst_30952 > (0));
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30953)){
var statearr_31018_33215 = state_30985__$1;
(statearr_31018_33215[(1)] = (4));

} else {
var statearr_31019_33217 = state_30985__$1;
(statearr_31019_33217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (11))){
var inst_30950 = (state_30985[(10)]);
var inst_30972 = (state_30985[(2)]);
var tmp31016 = inst_30950;
var inst_30950__$1 = tmp31016;
var state_30985__$1 = (function (){var statearr_31024 = state_30985;
(statearr_31024[(10)] = inst_30950__$1);

(statearr_31024[(11)] = inst_30972);

return statearr_31024;
})();
var statearr_31026_33220 = state_30985__$1;
(statearr_31026_33220[(2)] = null);

(statearr_31026_33220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (9))){
var inst_30960 = (state_30985[(7)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30985__$1,(11),out,inst_30960);
} else {
if((state_val_30986 === (5))){
var inst_30979 = cljs.core.async.close_BANG_(out);
var state_30985__$1 = state_30985;
var statearr_31041_33222 = state_30985__$1;
(statearr_31041_33222[(2)] = inst_30979);

(statearr_31041_33222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (10))){
var inst_30975 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31049_33227 = state_30985__$1;
(statearr_31049_33227[(2)] = inst_30975);

(statearr_31049_33227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (8))){
var inst_30950 = (state_30985[(10)]);
var inst_30960 = (state_30985[(7)]);
var inst_30959 = (state_30985[(8)]);
var inst_30961 = (state_30985[(9)]);
var inst_30965 = (function (){var cs = inst_30950;
var vec__30955 = inst_30959;
var v = inst_30960;
var c = inst_30961;
return (function (p1__30938_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30938_SHARP_);
});
})();
var inst_30967 = cljs.core.filterv(inst_30965,inst_30950);
var inst_30950__$1 = inst_30967;
var state_30985__$1 = (function (){var statearr_31065 = state_30985;
(statearr_31065[(10)] = inst_30950__$1);

return statearr_31065;
})();
var statearr_31066_33228 = state_30985__$1;
(statearr_31066_33228[(2)] = null);

(statearr_31066_33228[(1)] = (2));


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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_31067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31067[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_31067[(1)] = (1));

return statearr_31067;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_30985){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_30985);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e31068){var ex__28307__auto__ = e31068;
var statearr_31069_33235 = state_30985;
(statearr_31069_33235[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_30985[(4)]))){
var statearr_31070_33236 = state_30985;
(statearr_31070_33236[(1)] = cljs.core.first((state_30985[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33237 = state_30985;
state_30985 = G__33237;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_30985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_30985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_31078 = f__28477__auto__();
(statearr_31078[(6)] = c__28476__auto___33194);

return statearr_31078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
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
var G__31089 = arguments.length;
switch (G__31089) {
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
var c__28476__auto___33242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_31127){
var state_val_31128 = (state_31127[(1)]);
if((state_val_31128 === (7))){
var inst_31105 = (state_31127[(7)]);
var inst_31105__$1 = (state_31127[(2)]);
var inst_31106 = (inst_31105__$1 == null);
var inst_31107 = cljs.core.not(inst_31106);
var state_31127__$1 = (function (){var statearr_31131 = state_31127;
(statearr_31131[(7)] = inst_31105__$1);

return statearr_31131;
})();
if(inst_31107){
var statearr_31133_33245 = state_31127__$1;
(statearr_31133_33245[(1)] = (8));

} else {
var statearr_31134_33246 = state_31127__$1;
(statearr_31134_33246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (1))){
var inst_31100 = (0);
var state_31127__$1 = (function (){var statearr_31135 = state_31127;
(statearr_31135[(8)] = inst_31100);

return statearr_31135;
})();
var statearr_31136_33247 = state_31127__$1;
(statearr_31136_33247[(2)] = null);

(statearr_31136_33247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (4))){
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31127__$1,(7),ch);
} else {
if((state_val_31128 === (6))){
var inst_31118 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31145_33248 = state_31127__$1;
(statearr_31145_33248[(2)] = inst_31118);

(statearr_31145_33248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (3))){
var inst_31120 = (state_31127[(2)]);
var inst_31121 = cljs.core.async.close_BANG_(out);
var state_31127__$1 = (function (){var statearr_31152 = state_31127;
(statearr_31152[(9)] = inst_31120);

return statearr_31152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31127__$1,inst_31121);
} else {
if((state_val_31128 === (2))){
var inst_31100 = (state_31127[(8)]);
var inst_31102 = (inst_31100 < n);
var state_31127__$1 = state_31127;
if(cljs.core.truth_(inst_31102)){
var statearr_31169_33249 = state_31127__$1;
(statearr_31169_33249[(1)] = (4));

} else {
var statearr_31175_33250 = state_31127__$1;
(statearr_31175_33250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (11))){
var inst_31100 = (state_31127[(8)]);
var inst_31110 = (state_31127[(2)]);
var inst_31111 = (inst_31100 + (1));
var inst_31100__$1 = inst_31111;
var state_31127__$1 = (function (){var statearr_31183 = state_31127;
(statearr_31183[(10)] = inst_31110);

(statearr_31183[(8)] = inst_31100__$1);

return statearr_31183;
})();
var statearr_31184_33251 = state_31127__$1;
(statearr_31184_33251[(2)] = null);

(statearr_31184_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (9))){
var state_31127__$1 = state_31127;
var statearr_31185_33252 = state_31127__$1;
(statearr_31185_33252[(2)] = null);

(statearr_31185_33252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (5))){
var state_31127__$1 = state_31127;
var statearr_31186_33254 = state_31127__$1;
(statearr_31186_33254[(2)] = null);

(statearr_31186_33254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (10))){
var inst_31115 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31189_33257 = state_31127__$1;
(statearr_31189_33257[(2)] = inst_31115);

(statearr_31189_33257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (8))){
var inst_31105 = (state_31127[(7)]);
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31127__$1,(11),out,inst_31105);
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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_31199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31199[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_31199[(1)] = (1));

return statearr_31199;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_31127){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_31127);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e31205){var ex__28307__auto__ = e31205;
var statearr_31207_33258 = state_31127;
(statearr_31207_33258[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_31127[(4)]))){
var statearr_31214_33263 = state_31127;
(statearr_31214_33263[(1)] = cljs.core.first((state_31127[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33267 = state_31127;
state_31127 = G__33267;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_31127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_31127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_31225 = f__28477__auto__();
(statearr_31225[(6)] = c__28476__auto___33242);

return statearr_31225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31231 = (function (f,ch,meta31232){
this.f = f;
this.ch = ch;
this.meta31232 = meta31232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31233,meta31232__$1){
var self__ = this;
var _31233__$1 = this;
return (new cljs.core.async.t_cljs$core$async31231(self__.f,self__.ch,meta31232__$1));
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31233){
var self__ = this;
var _31233__$1 = this;
return self__.meta31232;
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31273 = (function (f,ch,meta31232,_,fn1,meta31274){
this.f = f;
this.ch = ch;
this.meta31232 = meta31232;
this._ = _;
this.fn1 = fn1;
this.meta31274 = meta31274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31275,meta31274__$1){
var self__ = this;
var _31275__$1 = this;
return (new cljs.core.async.t_cljs$core$async31273(self__.f,self__.ch,self__.meta31232,self__._,self__.fn1,meta31274__$1));
}));

(cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31275){
var self__ = this;
var _31275__$1 = this;
return self__.meta31274;
}));

(cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31230_SHARP_){
var G__31282 = (((p1__31230_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31230_SHARP_) : self__.f.call(null,p1__31230_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31282) : f1.call(null,G__31282));
});
}));

(cljs.core.async.t_cljs$core$async31273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31232","meta31232",234150188,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31231","cljs.core.async/t_cljs$core$async31231",61465333,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31274","meta31274",-1491179612,null)], null);
}));

(cljs.core.async.t_cljs$core$async31273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31273");

(cljs.core.async.t_cljs$core$async31273.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31273.
 */
cljs.core.async.__GT_t_cljs$core$async31273 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31273(f__$1,ch__$1,meta31232__$1,___$2,fn1__$1,meta31274){
return (new cljs.core.async.t_cljs$core$async31273(f__$1,ch__$1,meta31232__$1,___$2,fn1__$1,meta31274));
});

}

return (new cljs.core.async.t_cljs$core$async31273(self__.f,self__.ch,self__.meta31232,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31286 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31286) : self__.f.call(null,G__31286));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31232","meta31232",234150188,null)], null);
}));

(cljs.core.async.t_cljs$core$async31231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31231");

(cljs.core.async.t_cljs$core$async31231.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31231.
 */
cljs.core.async.__GT_t_cljs$core$async31231 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31231(f__$1,ch__$1,meta31232){
return (new cljs.core.async.t_cljs$core$async31231(f__$1,ch__$1,meta31232));
});

}

return (new cljs.core.async.t_cljs$core$async31231(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31290 = (function (f,ch,meta31291){
this.f = f;
this.ch = ch;
this.meta31291 = meta31291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31292,meta31291__$1){
var self__ = this;
var _31292__$1 = this;
return (new cljs.core.async.t_cljs$core$async31290(self__.f,self__.ch,meta31291__$1));
}));

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31292){
var self__ = this;
var _31292__$1 = this;
return self__.meta31291;
}));

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31291","meta31291",169672488,null)], null);
}));

(cljs.core.async.t_cljs$core$async31290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31290");

(cljs.core.async.t_cljs$core$async31290.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31290.
 */
cljs.core.async.__GT_t_cljs$core$async31290 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31290(f__$1,ch__$1,meta31291){
return (new cljs.core.async.t_cljs$core$async31290(f__$1,ch__$1,meta31291));
});

}

return (new cljs.core.async.t_cljs$core$async31290(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31337 = (function (p,ch,meta31338){
this.p = p;
this.ch = ch;
this.meta31338 = meta31338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31339,meta31338__$1){
var self__ = this;
var _31339__$1 = this;
return (new cljs.core.async.t_cljs$core$async31337(self__.p,self__.ch,meta31338__$1));
}));

(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31339){
var self__ = this;
var _31339__$1 = this;
return self__.meta31338;
}));

(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31338","meta31338",-2026262798,null)], null);
}));

(cljs.core.async.t_cljs$core$async31337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31337");

(cljs.core.async.t_cljs$core$async31337.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31337.
 */
cljs.core.async.__GT_t_cljs$core$async31337 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31337(p__$1,ch__$1,meta31338){
return (new cljs.core.async.t_cljs$core$async31337(p__$1,ch__$1,meta31338));
});

}

return (new cljs.core.async.t_cljs$core$async31337(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31356 = arguments.length;
switch (G__31356) {
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
var c__28476__auto___33341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_31384){
var state_val_31385 = (state_31384[(1)]);
if((state_val_31385 === (7))){
var inst_31379 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31386_33345 = state_31384__$1;
(statearr_31386_33345[(2)] = inst_31379);

(statearr_31386_33345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (1))){
var state_31384__$1 = state_31384;
var statearr_31387_33351 = state_31384__$1;
(statearr_31387_33351[(2)] = null);

(statearr_31387_33351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (4))){
var inst_31363 = (state_31384[(7)]);
var inst_31363__$1 = (state_31384[(2)]);
var inst_31364 = (inst_31363__$1 == null);
var state_31384__$1 = (function (){var statearr_31388 = state_31384;
(statearr_31388[(7)] = inst_31363__$1);

return statearr_31388;
})();
if(cljs.core.truth_(inst_31364)){
var statearr_31389_33357 = state_31384__$1;
(statearr_31389_33357[(1)] = (5));

} else {
var statearr_31390_33358 = state_31384__$1;
(statearr_31390_33358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (6))){
var inst_31363 = (state_31384[(7)]);
var inst_31368 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31363) : p.call(null,inst_31363));
var state_31384__$1 = state_31384;
if(cljs.core.truth_(inst_31368)){
var statearr_31391_33361 = state_31384__$1;
(statearr_31391_33361[(1)] = (8));

} else {
var statearr_31392_33363 = state_31384__$1;
(statearr_31392_33363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (3))){
var inst_31381 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31384__$1,inst_31381);
} else {
if((state_val_31385 === (2))){
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31384__$1,(4),ch);
} else {
if((state_val_31385 === (11))){
var inst_31373 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31393_33369 = state_31384__$1;
(statearr_31393_33369[(2)] = inst_31373);

(statearr_31393_33369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (9))){
var state_31384__$1 = state_31384;
var statearr_31395_33372 = state_31384__$1;
(statearr_31395_33372[(2)] = null);

(statearr_31395_33372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (5))){
var inst_31366 = cljs.core.async.close_BANG_(out);
var state_31384__$1 = state_31384;
var statearr_31398_33375 = state_31384__$1;
(statearr_31398_33375[(2)] = inst_31366);

(statearr_31398_33375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (10))){
var inst_31376 = (state_31384[(2)]);
var state_31384__$1 = (function (){var statearr_31400 = state_31384;
(statearr_31400[(8)] = inst_31376);

return statearr_31400;
})();
var statearr_31401_33380 = state_31384__$1;
(statearr_31401_33380[(2)] = null);

(statearr_31401_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31385 === (8))){
var inst_31363 = (state_31384[(7)]);
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31384__$1,(11),out,inst_31363);
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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_31402 = [null,null,null,null,null,null,null,null,null];
(statearr_31402[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_31402[(1)] = (1));

return statearr_31402;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_31384){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_31384);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e31403){var ex__28307__auto__ = e31403;
var statearr_31404_33388 = state_31384;
(statearr_31404_33388[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_31384[(4)]))){
var statearr_31405_33389 = state_31384;
(statearr_31405_33389[(1)] = cljs.core.first((state_31384[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33390 = state_31384;
state_31384 = G__33390;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_31384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_31384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_31409 = f__28477__auto__();
(statearr_31409[(6)] = c__28476__auto___33341);

return statearr_31409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31415 = arguments.length;
switch (G__31415) {
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
var c__28476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_31523){
var state_val_31524 = (state_31523[(1)]);
if((state_val_31524 === (7))){
var inst_31519 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31528_33406 = state_31523__$1;
(statearr_31528_33406[(2)] = inst_31519);

(statearr_31528_33406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (20))){
var inst_31473 = (state_31523[(7)]);
var inst_31498 = (state_31523[(2)]);
var inst_31499 = cljs.core.next(inst_31473);
var inst_31444 = inst_31499;
var inst_31445 = null;
var inst_31446 = (0);
var inst_31447 = (0);
var state_31523__$1 = (function (){var statearr_31529 = state_31523;
(statearr_31529[(8)] = inst_31444);

(statearr_31529[(9)] = inst_31446);

(statearr_31529[(10)] = inst_31498);

(statearr_31529[(11)] = inst_31445);

(statearr_31529[(12)] = inst_31447);

return statearr_31529;
})();
var statearr_31531_33418 = state_31523__$1;
(statearr_31531_33418[(2)] = null);

(statearr_31531_33418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (1))){
var state_31523__$1 = state_31523;
var statearr_31533_33424 = state_31523__$1;
(statearr_31533_33424[(2)] = null);

(statearr_31533_33424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (4))){
var inst_31424 = (state_31523[(13)]);
var inst_31424__$1 = (state_31523[(2)]);
var inst_31425 = (inst_31424__$1 == null);
var state_31523__$1 = (function (){var statearr_31538 = state_31523;
(statearr_31538[(13)] = inst_31424__$1);

return statearr_31538;
})();
if(cljs.core.truth_(inst_31425)){
var statearr_31539_33431 = state_31523__$1;
(statearr_31539_33431[(1)] = (5));

} else {
var statearr_31540_33433 = state_31523__$1;
(statearr_31540_33433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (15))){
var state_31523__$1 = state_31523;
var statearr_31544_33435 = state_31523__$1;
(statearr_31544_33435[(2)] = null);

(statearr_31544_33435[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (21))){
var state_31523__$1 = state_31523;
var statearr_31547_33437 = state_31523__$1;
(statearr_31547_33437[(2)] = null);

(statearr_31547_33437[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (13))){
var inst_31444 = (state_31523[(8)]);
var inst_31446 = (state_31523[(9)]);
var inst_31445 = (state_31523[(11)]);
var inst_31447 = (state_31523[(12)]);
var inst_31463 = (state_31523[(2)]);
var inst_31465 = (inst_31447 + (1));
var tmp31541 = inst_31444;
var tmp31542 = inst_31446;
var tmp31543 = inst_31445;
var inst_31444__$1 = tmp31541;
var inst_31445__$1 = tmp31543;
var inst_31446__$1 = tmp31542;
var inst_31447__$1 = inst_31465;
var state_31523__$1 = (function (){var statearr_31550 = state_31523;
(statearr_31550[(8)] = inst_31444__$1);

(statearr_31550[(9)] = inst_31446__$1);

(statearr_31550[(11)] = inst_31445__$1);

(statearr_31550[(14)] = inst_31463);

(statearr_31550[(12)] = inst_31447__$1);

return statearr_31550;
})();
var statearr_31551_33447 = state_31523__$1;
(statearr_31551_33447[(2)] = null);

(statearr_31551_33447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (22))){
var state_31523__$1 = state_31523;
var statearr_31556_33457 = state_31523__$1;
(statearr_31556_33457[(2)] = null);

(statearr_31556_33457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (6))){
var inst_31424 = (state_31523[(13)]);
var inst_31438 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31424) : f.call(null,inst_31424));
var inst_31439 = cljs.core.seq(inst_31438);
var inst_31444 = inst_31439;
var inst_31445 = null;
var inst_31446 = (0);
var inst_31447 = (0);
var state_31523__$1 = (function (){var statearr_31557 = state_31523;
(statearr_31557[(8)] = inst_31444);

(statearr_31557[(9)] = inst_31446);

(statearr_31557[(11)] = inst_31445);

(statearr_31557[(12)] = inst_31447);

return statearr_31557;
})();
var statearr_31559_33462 = state_31523__$1;
(statearr_31559_33462[(2)] = null);

(statearr_31559_33462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (17))){
var inst_31473 = (state_31523[(7)]);
var inst_31482 = cljs.core.chunk_first(inst_31473);
var inst_31483 = cljs.core.chunk_rest(inst_31473);
var inst_31488 = cljs.core.count(inst_31482);
var inst_31444 = inst_31483;
var inst_31445 = inst_31482;
var inst_31446 = inst_31488;
var inst_31447 = (0);
var state_31523__$1 = (function (){var statearr_31560 = state_31523;
(statearr_31560[(8)] = inst_31444);

(statearr_31560[(9)] = inst_31446);

(statearr_31560[(11)] = inst_31445);

(statearr_31560[(12)] = inst_31447);

return statearr_31560;
})();
var statearr_31561_33474 = state_31523__$1;
(statearr_31561_33474[(2)] = null);

(statearr_31561_33474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (3))){
var inst_31521 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31523__$1,inst_31521);
} else {
if((state_val_31524 === (12))){
var inst_31508 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31564_33485 = state_31523__$1;
(statearr_31564_33485[(2)] = inst_31508);

(statearr_31564_33485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (2))){
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31523__$1,(4),in$);
} else {
if((state_val_31524 === (23))){
var inst_31517 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31574_33491 = state_31523__$1;
(statearr_31574_33491[(2)] = inst_31517);

(statearr_31574_33491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (19))){
var inst_31503 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31575_33494 = state_31523__$1;
(statearr_31575_33494[(2)] = inst_31503);

(statearr_31575_33494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (11))){
var inst_31444 = (state_31523[(8)]);
var inst_31473 = (state_31523[(7)]);
var inst_31473__$1 = cljs.core.seq(inst_31444);
var state_31523__$1 = (function (){var statearr_31580 = state_31523;
(statearr_31580[(7)] = inst_31473__$1);

return statearr_31580;
})();
if(inst_31473__$1){
var statearr_31581_33506 = state_31523__$1;
(statearr_31581_33506[(1)] = (14));

} else {
var statearr_31582_33511 = state_31523__$1;
(statearr_31582_33511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (9))){
var inst_31510 = (state_31523[(2)]);
var inst_31512 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31523__$1 = (function (){var statearr_31589 = state_31523;
(statearr_31589[(15)] = inst_31510);

return statearr_31589;
})();
if(cljs.core.truth_(inst_31512)){
var statearr_31590_33513 = state_31523__$1;
(statearr_31590_33513[(1)] = (21));

} else {
var statearr_31591_33514 = state_31523__$1;
(statearr_31591_33514[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (5))){
var inst_31428 = cljs.core.async.close_BANG_(out);
var state_31523__$1 = state_31523;
var statearr_31592_33519 = state_31523__$1;
(statearr_31592_33519[(2)] = inst_31428);

(statearr_31592_33519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (14))){
var inst_31473 = (state_31523[(7)]);
var inst_31476 = cljs.core.chunked_seq_QMARK_(inst_31473);
var state_31523__$1 = state_31523;
if(inst_31476){
var statearr_31593_33527 = state_31523__$1;
(statearr_31593_33527[(1)] = (17));

} else {
var statearr_31594_33528 = state_31523__$1;
(statearr_31594_33528[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (16))){
var inst_31506 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31598_33535 = state_31523__$1;
(statearr_31598_33535[(2)] = inst_31506);

(statearr_31598_33535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (10))){
var inst_31445 = (state_31523[(11)]);
var inst_31447 = (state_31523[(12)]);
var inst_31457 = cljs.core._nth(inst_31445,inst_31447);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31523__$1,(13),out,inst_31457);
} else {
if((state_val_31524 === (18))){
var inst_31473 = (state_31523[(7)]);
var inst_31496 = cljs.core.first(inst_31473);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31523__$1,(20),out,inst_31496);
} else {
if((state_val_31524 === (8))){
var inst_31446 = (state_31523[(9)]);
var inst_31447 = (state_31523[(12)]);
var inst_31453 = (inst_31447 < inst_31446);
var inst_31454 = inst_31453;
var state_31523__$1 = state_31523;
if(cljs.core.truth_(inst_31454)){
var statearr_31600_33544 = state_31523__$1;
(statearr_31600_33544[(1)] = (10));

} else {
var statearr_31603_33547 = state_31523__$1;
(statearr_31603_33547[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28304__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28304__auto____0 = (function (){
var statearr_31606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31606[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28304__auto__);

(statearr_31606[(1)] = (1));

return statearr_31606;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28304__auto____1 = (function (state_31523){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_31523);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e31609){var ex__28307__auto__ = e31609;
var statearr_31610_33561 = state_31523;
(statearr_31610_33561[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_31523[(4)]))){
var statearr_31611_33562 = state_31523;
(statearr_31611_33562[(1)] = cljs.core.first((state_31523[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33565 = state_31523;
state_31523 = G__33565;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28304__auto__ = function(state_31523){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28304__auto____1.call(this,state_31523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28304__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28304__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_31612 = f__28477__auto__();
(statearr_31612[(6)] = c__28476__auto__);

return statearr_31612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));

return c__28476__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31616 = arguments.length;
switch (G__31616) {
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
var G__31627 = arguments.length;
switch (G__31627) {
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
var G__31639 = arguments.length;
switch (G__31639) {
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
var c__28476__auto___33600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_31665){
var state_val_31666 = (state_31665[(1)]);
if((state_val_31666 === (7))){
var inst_31660 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31667_33605 = state_31665__$1;
(statearr_31667_33605[(2)] = inst_31660);

(statearr_31667_33605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (1))){
var inst_31642 = null;
var state_31665__$1 = (function (){var statearr_31668 = state_31665;
(statearr_31668[(7)] = inst_31642);

return statearr_31668;
})();
var statearr_31670_33610 = state_31665__$1;
(statearr_31670_33610[(2)] = null);

(statearr_31670_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (4))){
var inst_31645 = (state_31665[(8)]);
var inst_31645__$1 = (state_31665[(2)]);
var inst_31646 = (inst_31645__$1 == null);
var inst_31647 = cljs.core.not(inst_31646);
var state_31665__$1 = (function (){var statearr_31673 = state_31665;
(statearr_31673[(8)] = inst_31645__$1);

return statearr_31673;
})();
if(inst_31647){
var statearr_31674_33626 = state_31665__$1;
(statearr_31674_33626[(1)] = (5));

} else {
var statearr_31675_33632 = state_31665__$1;
(statearr_31675_33632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (6))){
var state_31665__$1 = state_31665;
var statearr_31676_33639 = state_31665__$1;
(statearr_31676_33639[(2)] = null);

(statearr_31676_33639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (3))){
var inst_31662 = (state_31665[(2)]);
var inst_31663 = cljs.core.async.close_BANG_(out);
var state_31665__$1 = (function (){var statearr_31677 = state_31665;
(statearr_31677[(9)] = inst_31662);

return statearr_31677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31665__$1,inst_31663);
} else {
if((state_val_31666 === (2))){
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31665__$1,(4),ch);
} else {
if((state_val_31666 === (11))){
var inst_31645 = (state_31665[(8)]);
var inst_31654 = (state_31665[(2)]);
var inst_31642 = inst_31645;
var state_31665__$1 = (function (){var statearr_31678 = state_31665;
(statearr_31678[(10)] = inst_31654);

(statearr_31678[(7)] = inst_31642);

return statearr_31678;
})();
var statearr_31679_33665 = state_31665__$1;
(statearr_31679_33665[(2)] = null);

(statearr_31679_33665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (9))){
var inst_31645 = (state_31665[(8)]);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31665__$1,(11),out,inst_31645);
} else {
if((state_val_31666 === (5))){
var inst_31645 = (state_31665[(8)]);
var inst_31642 = (state_31665[(7)]);
var inst_31649 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31645,inst_31642);
var state_31665__$1 = state_31665;
if(inst_31649){
var statearr_31681_33677 = state_31665__$1;
(statearr_31681_33677[(1)] = (8));

} else {
var statearr_31682_33680 = state_31665__$1;
(statearr_31682_33680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (10))){
var inst_31657 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31684_33687 = state_31665__$1;
(statearr_31684_33687[(2)] = inst_31657);

(statearr_31684_33687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (8))){
var inst_31642 = (state_31665[(7)]);
var tmp31680 = inst_31642;
var inst_31642__$1 = tmp31680;
var state_31665__$1 = (function (){var statearr_31685 = state_31665;
(statearr_31685[(7)] = inst_31642__$1);

return statearr_31685;
})();
var statearr_31686_33697 = state_31665__$1;
(statearr_31686_33697[(2)] = null);

(statearr_31686_33697[(1)] = (2));


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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_31689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31689[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_31689[(1)] = (1));

return statearr_31689;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_31665){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_31665);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e31691){var ex__28307__auto__ = e31691;
var statearr_31693_33712 = state_31665;
(statearr_31693_33712[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_31665[(4)]))){
var statearr_31695_33717 = state_31665;
(statearr_31695_33717[(1)] = cljs.core.first((state_31665[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33723 = state_31665;
state_31665 = G__33723;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_31665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_31665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_31698 = f__28477__auto__();
(statearr_31698[(6)] = c__28476__auto___33600);

return statearr_31698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31705 = arguments.length;
switch (G__31705) {
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
var c__28476__auto___33725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_31750){
var state_val_31751 = (state_31750[(1)]);
if((state_val_31751 === (7))){
var inst_31744 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31757_33726 = state_31750__$1;
(statearr_31757_33726[(2)] = inst_31744);

(statearr_31757_33726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (1))){
var inst_31710 = (new Array(n));
var inst_31711 = inst_31710;
var inst_31712 = (0);
var state_31750__$1 = (function (){var statearr_31762 = state_31750;
(statearr_31762[(7)] = inst_31712);

(statearr_31762[(8)] = inst_31711);

return statearr_31762;
})();
var statearr_31763_33730 = state_31750__$1;
(statearr_31763_33730[(2)] = null);

(statearr_31763_33730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (4))){
var inst_31715 = (state_31750[(9)]);
var inst_31715__$1 = (state_31750[(2)]);
var inst_31716 = (inst_31715__$1 == null);
var inst_31717 = cljs.core.not(inst_31716);
var state_31750__$1 = (function (){var statearr_31775 = state_31750;
(statearr_31775[(9)] = inst_31715__$1);

return statearr_31775;
})();
if(inst_31717){
var statearr_31778_33739 = state_31750__$1;
(statearr_31778_33739[(1)] = (5));

} else {
var statearr_31780_33744 = state_31750__$1;
(statearr_31780_33744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (15))){
var inst_31738 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31785_33751 = state_31750__$1;
(statearr_31785_33751[(2)] = inst_31738);

(statearr_31785_33751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (13))){
var state_31750__$1 = state_31750;
var statearr_31786_33752 = state_31750__$1;
(statearr_31786_33752[(2)] = null);

(statearr_31786_33752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (6))){
var inst_31712 = (state_31750[(7)]);
var inst_31734 = (inst_31712 > (0));
var state_31750__$1 = state_31750;
if(cljs.core.truth_(inst_31734)){
var statearr_31790_33753 = state_31750__$1;
(statearr_31790_33753[(1)] = (12));

} else {
var statearr_31791_33755 = state_31750__$1;
(statearr_31791_33755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (3))){
var inst_31747 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31750__$1,inst_31747);
} else {
if((state_val_31751 === (12))){
var inst_31711 = (state_31750[(8)]);
var inst_31736 = cljs.core.vec(inst_31711);
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31750__$1,(15),out,inst_31736);
} else {
if((state_val_31751 === (2))){
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31750__$1,(4),ch);
} else {
if((state_val_31751 === (11))){
var inst_31728 = (state_31750[(2)]);
var inst_31729 = (new Array(n));
var inst_31711 = inst_31729;
var inst_31712 = (0);
var state_31750__$1 = (function (){var statearr_31794 = state_31750;
(statearr_31794[(7)] = inst_31712);

(statearr_31794[(10)] = inst_31728);

(statearr_31794[(8)] = inst_31711);

return statearr_31794;
})();
var statearr_31796_33758 = state_31750__$1;
(statearr_31796_33758[(2)] = null);

(statearr_31796_33758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (9))){
var inst_31711 = (state_31750[(8)]);
var inst_31726 = cljs.core.vec(inst_31711);
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31750__$1,(11),out,inst_31726);
} else {
if((state_val_31751 === (5))){
var inst_31720 = (state_31750[(11)]);
var inst_31715 = (state_31750[(9)]);
var inst_31712 = (state_31750[(7)]);
var inst_31711 = (state_31750[(8)]);
var inst_31719 = (inst_31711[inst_31712] = inst_31715);
var inst_31720__$1 = (inst_31712 + (1));
var inst_31721 = (inst_31720__$1 < n);
var state_31750__$1 = (function (){var statearr_31799 = state_31750;
(statearr_31799[(11)] = inst_31720__$1);

(statearr_31799[(12)] = inst_31719);

return statearr_31799;
})();
if(cljs.core.truth_(inst_31721)){
var statearr_31800_33759 = state_31750__$1;
(statearr_31800_33759[(1)] = (8));

} else {
var statearr_31801_33760 = state_31750__$1;
(statearr_31801_33760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (14))){
var inst_31741 = (state_31750[(2)]);
var inst_31742 = cljs.core.async.close_BANG_(out);
var state_31750__$1 = (function (){var statearr_31803 = state_31750;
(statearr_31803[(13)] = inst_31741);

return statearr_31803;
})();
var statearr_31804_33761 = state_31750__$1;
(statearr_31804_33761[(2)] = inst_31742);

(statearr_31804_33761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (10))){
var inst_31732 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31807_33763 = state_31750__$1;
(statearr_31807_33763[(2)] = inst_31732);

(statearr_31807_33763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (8))){
var inst_31720 = (state_31750[(11)]);
var inst_31711 = (state_31750[(8)]);
var tmp31802 = inst_31711;
var inst_31711__$1 = tmp31802;
var inst_31712 = inst_31720;
var state_31750__$1 = (function (){var statearr_31809 = state_31750;
(statearr_31809[(7)] = inst_31712);

(statearr_31809[(8)] = inst_31711__$1);

return statearr_31809;
})();
var statearr_31810_33769 = state_31750__$1;
(statearr_31810_33769[(2)] = null);

(statearr_31810_33769[(1)] = (2));


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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_31812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31812[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_31812[(1)] = (1));

return statearr_31812;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_31750){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_31750);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e31814){var ex__28307__auto__ = e31814;
var statearr_31815_33774 = state_31750;
(statearr_31815_33774[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_31750[(4)]))){
var statearr_31818_33775 = state_31750;
(statearr_31818_33775[(1)] = cljs.core.first((state_31750[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33780 = state_31750;
state_31750 = G__33780;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_31750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_31750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_31823 = f__28477__auto__();
(statearr_31823[(6)] = c__28476__auto___33725);

return statearr_31823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31829 = arguments.length;
switch (G__31829) {
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
var c__28476__auto___33819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_31880){
var state_val_31881 = (state_31880[(1)]);
if((state_val_31881 === (7))){
var inst_31876 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31896_33826 = state_31880__$1;
(statearr_31896_33826[(2)] = inst_31876);

(statearr_31896_33826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (1))){
var inst_31836 = [];
var inst_31838 = inst_31836;
var inst_31839 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31880__$1 = (function (){var statearr_31898 = state_31880;
(statearr_31898[(7)] = inst_31838);

(statearr_31898[(8)] = inst_31839);

return statearr_31898;
})();
var statearr_31903_33834 = state_31880__$1;
(statearr_31903_33834[(2)] = null);

(statearr_31903_33834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (4))){
var inst_31842 = (state_31880[(9)]);
var inst_31842__$1 = (state_31880[(2)]);
var inst_31843 = (inst_31842__$1 == null);
var inst_31844 = cljs.core.not(inst_31843);
var state_31880__$1 = (function (){var statearr_31913 = state_31880;
(statearr_31913[(9)] = inst_31842__$1);

return statearr_31913;
})();
if(inst_31844){
var statearr_31914_33842 = state_31880__$1;
(statearr_31914_33842[(1)] = (5));

} else {
var statearr_31915_33843 = state_31880__$1;
(statearr_31915_33843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (15))){
var inst_31870 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31920_33847 = state_31880__$1;
(statearr_31920_33847[(2)] = inst_31870);

(statearr_31920_33847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (13))){
var state_31880__$1 = state_31880;
var statearr_31926_33854 = state_31880__$1;
(statearr_31926_33854[(2)] = null);

(statearr_31926_33854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (6))){
var inst_31838 = (state_31880[(7)]);
var inst_31865 = inst_31838.length;
var inst_31866 = (inst_31865 > (0));
var state_31880__$1 = state_31880;
if(cljs.core.truth_(inst_31866)){
var statearr_31927_33855 = state_31880__$1;
(statearr_31927_33855[(1)] = (12));

} else {
var statearr_31928_33856 = state_31880__$1;
(statearr_31928_33856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (3))){
var inst_31878 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31880__$1,inst_31878);
} else {
if((state_val_31881 === (12))){
var inst_31838 = (state_31880[(7)]);
var inst_31868 = cljs.core.vec(inst_31838);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31880__$1,(15),out,inst_31868);
} else {
if((state_val_31881 === (2))){
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31880__$1,(4),ch);
} else {
if((state_val_31881 === (11))){
var inst_31842 = (state_31880[(9)]);
var inst_31846 = (state_31880[(10)]);
var inst_31858 = (state_31880[(2)]);
var inst_31859 = [];
var inst_31860 = inst_31859.push(inst_31842);
var inst_31838 = inst_31859;
var inst_31839 = inst_31846;
var state_31880__$1 = (function (){var statearr_31930 = state_31880;
(statearr_31930[(7)] = inst_31838);

(statearr_31930[(8)] = inst_31839);

(statearr_31930[(11)] = inst_31860);

(statearr_31930[(12)] = inst_31858);

return statearr_31930;
})();
var statearr_31931_33861 = state_31880__$1;
(statearr_31931_33861[(2)] = null);

(statearr_31931_33861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (9))){
var inst_31838 = (state_31880[(7)]);
var inst_31856 = cljs.core.vec(inst_31838);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31880__$1,(11),out,inst_31856);
} else {
if((state_val_31881 === (5))){
var inst_31842 = (state_31880[(9)]);
var inst_31846 = (state_31880[(10)]);
var inst_31839 = (state_31880[(8)]);
var inst_31846__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31842) : f.call(null,inst_31842));
var inst_31848 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31846__$1,inst_31839);
var inst_31850 = cljs.core.keyword_identical_QMARK_(inst_31839,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31851 = ((inst_31848) || (inst_31850));
var state_31880__$1 = (function (){var statearr_31935 = state_31880;
(statearr_31935[(10)] = inst_31846__$1);

return statearr_31935;
})();
if(cljs.core.truth_(inst_31851)){
var statearr_31936_33862 = state_31880__$1;
(statearr_31936_33862[(1)] = (8));

} else {
var statearr_31937_33863 = state_31880__$1;
(statearr_31937_33863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (14))){
var inst_31873 = (state_31880[(2)]);
var inst_31874 = cljs.core.async.close_BANG_(out);
var state_31880__$1 = (function (){var statearr_31939 = state_31880;
(statearr_31939[(13)] = inst_31873);

return statearr_31939;
})();
var statearr_31940_33864 = state_31880__$1;
(statearr_31940_33864[(2)] = inst_31874);

(statearr_31940_33864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (10))){
var inst_31863 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31941_33865 = state_31880__$1;
(statearr_31941_33865[(2)] = inst_31863);

(statearr_31941_33865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (8))){
var inst_31842 = (state_31880[(9)]);
var inst_31846 = (state_31880[(10)]);
var inst_31838 = (state_31880[(7)]);
var inst_31853 = inst_31838.push(inst_31842);
var tmp31938 = inst_31838;
var inst_31838__$1 = tmp31938;
var inst_31839 = inst_31846;
var state_31880__$1 = (function (){var statearr_31942 = state_31880;
(statearr_31942[(7)] = inst_31838__$1);

(statearr_31942[(8)] = inst_31839);

(statearr_31942[(14)] = inst_31853);

return statearr_31942;
})();
var statearr_31943_33872 = state_31880__$1;
(statearr_31943_33872[(2)] = null);

(statearr_31943_33872[(1)] = (2));


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
var cljs$core$async$state_machine__28304__auto__ = null;
var cljs$core$async$state_machine__28304__auto____0 = (function (){
var statearr_31944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31944[(0)] = cljs$core$async$state_machine__28304__auto__);

(statearr_31944[(1)] = (1));

return statearr_31944;
});
var cljs$core$async$state_machine__28304__auto____1 = (function (state_31880){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_31880);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e31945){var ex__28307__auto__ = e31945;
var statearr_31948_33882 = state_31880;
(statearr_31948_33882[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_31880[(4)]))){
var statearr_31951_33883 = state_31880;
(statearr_31951_33883[(1)] = cljs.core.first((state_31880[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33884 = state_31880;
state_31880 = G__33884;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
cljs$core$async$state_machine__28304__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28304__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28304__auto____0;
cljs$core$async$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28304__auto____1;
return cljs$core$async$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_31955 = f__28477__auto__();
(statearr_31955[(6)] = c__28476__auto___33819);

return statearr_31955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
