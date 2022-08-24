goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50657,p__50658){
var map__50659 = p__50657;
var map__50659__$1 = cljs.core.__destructure_map(map__50659);
var svc = map__50659__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50659__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50659__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50659__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50660 = p__50658;
var map__50660__$1 = cljs.core.__destructure_map(map__50660);
var msg = map__50660__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50660__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50660__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50660__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50660__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50664,p__50666){
var map__50668 = p__50664;
var map__50668__$1 = cljs.core.__destructure_map(map__50668);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50668__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50669 = p__50666;
var map__50669__$1 = cljs.core.__destructure_map(map__50669);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50669__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50671,p__50672){
var map__50673 = p__50671;
var map__50673__$1 = cljs.core.__destructure_map(map__50673);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50673__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50673__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50674 = p__50672;
var map__50674__$1 = cljs.core.__destructure_map(map__50674);
var msg = map__50674__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50674__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50675,tid){
var map__50676 = p__50675;
var map__50676__$1 = cljs.core.__destructure_map(map__50676);
var svc = map__50676__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50676__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50692 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50693 = null;
var count__50694 = (0);
var i__50695 = (0);
while(true){
if((i__50695 < count__50694)){
var vec__50729 = chunk__50693.cljs$core$IIndexed$_nth$arity$2(null,i__50695);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50729,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50729,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50860 = seq__50692;
var G__50861 = chunk__50693;
var G__50862 = count__50694;
var G__50863 = (i__50695 + (1));
seq__50692 = G__50860;
chunk__50693 = G__50861;
count__50694 = G__50862;
i__50695 = G__50863;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50692);
if(temp__5753__auto__){
var seq__50692__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50692__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50692__$1);
var G__50868 = cljs.core.chunk_rest(seq__50692__$1);
var G__50869 = c__4679__auto__;
var G__50870 = cljs.core.count(c__4679__auto__);
var G__50871 = (0);
seq__50692 = G__50868;
chunk__50693 = G__50869;
count__50694 = G__50870;
i__50695 = G__50871;
continue;
} else {
var vec__50740 = cljs.core.first(seq__50692__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50740,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50740,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50872 = cljs.core.next(seq__50692__$1);
var G__50873 = null;
var G__50874 = (0);
var G__50875 = (0);
seq__50692 = G__50872;
chunk__50693 = G__50873;
count__50694 = G__50874;
i__50695 = G__50875;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50679_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50679_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50680_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50680_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50681_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50681_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50683_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50683_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50780){
var map__50785 = p__50780;
var map__50785__$1 = cljs.core.__destructure_map(map__50785);
var svc = map__50785__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50785__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50785__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
