goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__46981,res){
var map__46982 = p__46981;
var map__46982__$1 = cljs.core.__destructure_map(map__46982);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46982__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46982__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46983 = res;
var G__46983__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46983,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46983);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46983__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46983__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46986 = arguments.length;
switch (G__46986) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46990,msg,handlers,timeout_after_ms){
var map__46991 = p__46990;
var map__46991__$1 = cljs.core.__destructure_map(map__46991);
var runtime = map__46991__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46991__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47068 = arguments.length;
var i__4865__auto___47069 = (0);
while(true){
if((i__4865__auto___47069 < len__4864__auto___47068)){
args__4870__auto__.push((arguments[i__4865__auto___47069]));

var G__47071 = (i__4865__auto___47069 + (1));
i__4865__auto___47069 = G__47071;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47005,ev,args){
var map__47006 = p__47005;
var map__47006__$1 = cljs.core.__destructure_map(map__47006);
var runtime = map__47006__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47006__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47007 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47010 = null;
var count__47011 = (0);
var i__47012 = (0);
while(true){
if((i__47012 < count__47011)){
var ext = chunk__47010.cljs$core$IIndexed$_nth$arity$2(null,i__47012);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47078 = seq__47007;
var G__47079 = chunk__47010;
var G__47080 = count__47011;
var G__47081 = (i__47012 + (1));
seq__47007 = G__47078;
chunk__47010 = G__47079;
count__47011 = G__47080;
i__47012 = G__47081;
continue;
} else {
var G__47084 = seq__47007;
var G__47085 = chunk__47010;
var G__47086 = count__47011;
var G__47087 = (i__47012 + (1));
seq__47007 = G__47084;
chunk__47010 = G__47085;
count__47011 = G__47086;
i__47012 = G__47087;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47007);
if(temp__5753__auto__){
var seq__47007__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47007__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47007__$1);
var G__47091 = cljs.core.chunk_rest(seq__47007__$1);
var G__47092 = c__4679__auto__;
var G__47093 = cljs.core.count(c__4679__auto__);
var G__47094 = (0);
seq__47007 = G__47091;
chunk__47010 = G__47092;
count__47011 = G__47093;
i__47012 = G__47094;
continue;
} else {
var ext = cljs.core.first(seq__47007__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47095 = cljs.core.next(seq__47007__$1);
var G__47096 = null;
var G__47097 = (0);
var G__47098 = (0);
seq__47007 = G__47095;
chunk__47010 = G__47096;
count__47011 = G__47097;
i__47012 = G__47098;
continue;
} else {
var G__47100 = cljs.core.next(seq__47007__$1);
var G__47101 = null;
var G__47102 = (0);
var G__47103 = (0);
seq__47007 = G__47100;
chunk__47010 = G__47101;
count__47011 = G__47102;
i__47012 = G__47103;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46999){
var G__47000 = cljs.core.first(seq46999);
var seq46999__$1 = cljs.core.next(seq46999);
var G__47001 = cljs.core.first(seq46999__$1);
var seq46999__$2 = cljs.core.next(seq46999__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47000,G__47001,seq46999__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47019,p__47020){
var map__47023 = p__47019;
var map__47023__$1 = cljs.core.__destructure_map(map__47023);
var runtime = map__47023__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47023__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47024 = p__47020;
var map__47024__$1 = cljs.core.__destructure_map(map__47024);
var msg = map__47024__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47024__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47025 = cljs.core.deref(state_ref);
var map__47025__$1 = cljs.core.__destructure_map(map__47025);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47025__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47025__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47028){
var map__47029 = p__47028;
var map__47029__$1 = cljs.core.__destructure_map(map__47029);
var runtime = map__47029__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47030,msg){
var map__47031 = p__47030;
var map__47031__$1 = cljs.core.__destructure_map(map__47031);
var runtime = map__47031__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47031__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47032,key,p__47033){
var map__47034 = p__47032;
var map__47034__$1 = cljs.core.__destructure_map(map__47034);
var state = map__47034__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47034__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47035 = p__47033;
var map__47035__$1 = cljs.core.__destructure_map(map__47035);
var spec = map__47035__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47035__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47038,key,spec){
var map__47039 = p__47038;
var map__47039__$1 = cljs.core.__destructure_map(map__47039);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47039__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47040_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47040_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47041_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47041_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47042_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47042_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47043_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47043_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47044_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47044_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47045,key){
var map__47046 = p__47045;
var map__47046__$1 = cljs.core.__destructure_map(map__47046);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47047,msg){
var map__47048 = p__47047;
var map__47048__$1 = cljs.core.__destructure_map(map__47048);
var runtime = map__47048__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47048__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47049,p__47050){
var map__47051 = p__47049;
var map__47051__$1 = cljs.core.__destructure_map(map__47051);
var runtime = map__47051__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47051__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47052 = p__47050;
var map__47052__$1 = cljs.core.__destructure_map(map__47052);
var msg = map__47052__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47052__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47052__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__47053 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47055 = null;
var count__47056 = (0);
var i__47057 = (0);
while(true){
if((i__47057 < count__47056)){
var map__47061 = chunk__47055.cljs$core$IIndexed$_nth$arity$2(null,i__47057);
var map__47061__$1 = cljs.core.__destructure_map(map__47061);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47061__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47122 = seq__47053;
var G__47123 = chunk__47055;
var G__47124 = count__47056;
var G__47125 = (i__47057 + (1));
seq__47053 = G__47122;
chunk__47055 = G__47123;
count__47056 = G__47124;
i__47057 = G__47125;
continue;
} else {
var G__47127 = seq__47053;
var G__47128 = chunk__47055;
var G__47129 = count__47056;
var G__47130 = (i__47057 + (1));
seq__47053 = G__47127;
chunk__47055 = G__47128;
count__47056 = G__47129;
i__47057 = G__47130;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47053);
if(temp__5753__auto__){
var seq__47053__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47053__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47053__$1);
var G__47131 = cljs.core.chunk_rest(seq__47053__$1);
var G__47132 = c__4679__auto__;
var G__47133 = cljs.core.count(c__4679__auto__);
var G__47134 = (0);
seq__47053 = G__47131;
chunk__47055 = G__47132;
count__47056 = G__47133;
i__47057 = G__47134;
continue;
} else {
var map__47062 = cljs.core.first(seq__47053__$1);
var map__47062__$1 = cljs.core.__destructure_map(map__47062);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47062__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47135 = cljs.core.next(seq__47053__$1);
var G__47136 = null;
var G__47137 = (0);
var G__47138 = (0);
seq__47053 = G__47135;
chunk__47055 = G__47136;
count__47056 = G__47137;
i__47057 = G__47138;
continue;
} else {
var G__47139 = cljs.core.next(seq__47053__$1);
var G__47140 = null;
var G__47141 = (0);
var G__47142 = (0);
seq__47053 = G__47139;
chunk__47055 = G__47140;
count__47056 = G__47141;
i__47057 = G__47142;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
