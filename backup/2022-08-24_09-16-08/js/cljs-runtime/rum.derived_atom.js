goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__51881 = arguments.length;
switch (G__51881) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__51886 = opts;
var map__51886__$1 = cljs.core.__destructure_map(map__51886);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51886__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51886__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__51890 = cljs.core.count(refs);
switch (G__51890) {
case (1):
var vec__51892 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51892,(0),null);
return (function (){
var G__51895 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51895) : f.call(null,G__51895));
});

break;
case (2):
var vec__51903 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51903,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51903,(1),null);
return (function (){
var G__51907 = cljs.core.deref(a);
var G__51908 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__51907,G__51908) : f.call(null,G__51907,G__51908));
});

break;
case (3):
var vec__51909 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51909,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51909,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51909,(2),null);
return (function (){
var G__51912 = cljs.core.deref(a);
var G__51913 = cljs.core.deref(b);
var G__51914 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__51912,G__51913,G__51914) : f.call(null,G__51912,G__51913,G__51914));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__51915 = ref;
cljs.core.reset_BANG_(G__51915,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__51915;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__51916_51944 = cljs.core.seq(refs);
var chunk__51917_51945 = null;
var count__51918_51946 = (0);
var i__51919_51947 = (0);
while(true){
if((i__51919_51947 < count__51918_51946)){
var ref_51955__$1 = chunk__51917_51945.cljs$core$IIndexed$_nth$arity$2(null,i__51919_51947);
cljs.core.add_watch(ref_51955__$1,key,watch);


var G__51959 = seq__51916_51944;
var G__51960 = chunk__51917_51945;
var G__51961 = count__51918_51946;
var G__51962 = (i__51919_51947 + (1));
seq__51916_51944 = G__51959;
chunk__51917_51945 = G__51960;
count__51918_51946 = G__51961;
i__51919_51947 = G__51962;
continue;
} else {
var temp__5753__auto___51963 = cljs.core.seq(seq__51916_51944);
if(temp__5753__auto___51963){
var seq__51916_51965__$1 = temp__5753__auto___51963;
if(cljs.core.chunked_seq_QMARK_(seq__51916_51965__$1)){
var c__4679__auto___51966 = cljs.core.chunk_first(seq__51916_51965__$1);
var G__51967 = cljs.core.chunk_rest(seq__51916_51965__$1);
var G__51968 = c__4679__auto___51966;
var G__51969 = cljs.core.count(c__4679__auto___51966);
var G__51970 = (0);
seq__51916_51944 = G__51967;
chunk__51917_51945 = G__51968;
count__51918_51946 = G__51969;
i__51919_51947 = G__51970;
continue;
} else {
var ref_51971__$1 = cljs.core.first(seq__51916_51965__$1);
cljs.core.add_watch(ref_51971__$1,key,watch);


var G__51972 = cljs.core.next(seq__51916_51965__$1);
var G__51973 = null;
var G__51974 = (0);
var G__51975 = (0);
seq__51916_51944 = G__51972;
chunk__51917_51945 = G__51973;
count__51918_51946 = G__51974;
i__51919_51947 = G__51975;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
