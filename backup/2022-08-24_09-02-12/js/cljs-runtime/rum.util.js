goog.provide('rum.util');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
})),mixins);
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
})),mixins);
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51834 = arguments.length;
var i__4865__auto___51835 = (0);
while(true){
if((i__4865__auto___51835 < len__4864__auto___51834)){
args__4870__auto__.push((arguments[i__4865__auto___51835]));

var G__51836 = (i__4865__auto___51835 + (1));
i__4865__auto___51835 = G__51836;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
}));

(rum.util.call_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.util.call_all.cljs$lang$applyTo = (function (seq51827){
var G__51828 = cljs.core.first(seq51827);
var seq51827__$1 = cljs.core.next(seq51827);
var G__51829 = cljs.core.first(seq51827__$1);
var seq51827__$2 = cljs.core.next(seq51827__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51828,G__51829,seq51827__$2);
}));


//# sourceMappingURL=rum.util.js.map
