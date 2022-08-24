// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__22181 = arguments.length;
switch (G__22181) {
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

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__22182 = opts;
var map__22182__$1 = (((((!((map__22182 == null))))?(((((map__22182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22182):map__22182);
var ref = cljs.core.get.call(null,map__22182__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__22182__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__22184 = cljs.core.count.call(null,refs);
switch (G__22184) {
case (1):
var vec__22185 = refs;
var a = cljs.core.nth.call(null,vec__22185,(0),null);
return ((function (vec__22185,a,G__22184,map__22182,map__22182__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__22185,a,G__22184,map__22182,map__22182__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__22188 = refs;
var a = cljs.core.nth.call(null,vec__22188,(0),null);
var b = cljs.core.nth.call(null,vec__22188,(1),null);
return ((function (vec__22188,a,b,G__22184,map__22182,map__22182__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__22188,a,b,G__22184,map__22182,map__22182__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__22191 = refs;
var a = cljs.core.nth.call(null,vec__22191,(0),null);
var b = cljs.core.nth.call(null,vec__22191,(1),null);
var c = cljs.core.nth.call(null,vec__22191,(2),null);
return ((function (vec__22191,a,b,c,G__22184,map__22182,map__22182__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__22191,a,b,c,G__22184,map__22182,map__22182__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__22184,map__22182,map__22182__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__22184,map__22182,map__22182__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__22194 = ref;
cljs.core.reset_BANG_.call(null,G__22194,recalc.call(null));

return G__22194;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__22182,map__22182__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__22182,map__22182__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__22182,map__22182__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__22182,map__22182__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__22195_22201 = cljs.core.seq.call(null,refs);
var chunk__22196_22202 = null;
var count__22197_22203 = (0);
var i__22198_22204 = (0);
while(true){
if((i__22198_22204 < count__22197_22203)){
var ref_22205__$1 = cljs.core._nth.call(null,chunk__22196_22202,i__22198_22204);
cljs.core.add_watch.call(null,ref_22205__$1,key,watch);


var G__22206 = seq__22195_22201;
var G__22207 = chunk__22196_22202;
var G__22208 = count__22197_22203;
var G__22209 = (i__22198_22204 + (1));
seq__22195_22201 = G__22206;
chunk__22196_22202 = G__22207;
count__22197_22203 = G__22208;
i__22198_22204 = G__22209;
continue;
} else {
var temp__5735__auto___22210 = cljs.core.seq.call(null,seq__22195_22201);
if(temp__5735__auto___22210){
var seq__22195_22211__$1 = temp__5735__auto___22210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22195_22211__$1)){
var c__4550__auto___22212 = cljs.core.chunk_first.call(null,seq__22195_22211__$1);
var G__22213 = cljs.core.chunk_rest.call(null,seq__22195_22211__$1);
var G__22214 = c__4550__auto___22212;
var G__22215 = cljs.core.count.call(null,c__4550__auto___22212);
var G__22216 = (0);
seq__22195_22201 = G__22213;
chunk__22196_22202 = G__22214;
count__22197_22203 = G__22215;
i__22198_22204 = G__22216;
continue;
} else {
var ref_22217__$1 = cljs.core.first.call(null,seq__22195_22211__$1);
cljs.core.add_watch.call(null,ref_22217__$1,key,watch);


var G__22218 = cljs.core.next.call(null,seq__22195_22211__$1);
var G__22219 = null;
var G__22220 = (0);
var G__22221 = (0);
seq__22195_22201 = G__22218;
chunk__22196_22202 = G__22219;
count__22197_22203 = G__22220;
i__22198_22204 = G__22221;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1560468644435
