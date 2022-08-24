goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52243 = arguments.length;
var i__4865__auto___52244 = (0);
while(true){
if((i__4865__auto___52244 < len__4864__auto___52243)){
args__4870__auto__.push((arguments[i__4865__auto___52244]));

var G__52245 = (i__4865__auto___52244 + (1));
i__4865__auto___52244 = G__52245;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51712){
var G__51713 = cljs.core.first(seq51712);
var seq51712__$1 = cljs.core.next(seq51712);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51713,seq51712__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51722 = cljs.core.seq(sources);
var chunk__51723 = null;
var count__51724 = (0);
var i__51725 = (0);
while(true){
if((i__51725 < count__51724)){
var map__51739 = chunk__51723.cljs$core$IIndexed$_nth$arity$2(null,i__51725);
var map__51739__$1 = cljs.core.__destructure_map(map__51739);
var src = map__51739__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51741){var e_52246 = e51741;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52246);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52246.message)].join('')));
}

var G__52247 = seq__51722;
var G__52248 = chunk__51723;
var G__52249 = count__51724;
var G__52250 = (i__51725 + (1));
seq__51722 = G__52247;
chunk__51723 = G__52248;
count__51724 = G__52249;
i__51725 = G__52250;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51722);
if(temp__5753__auto__){
var seq__51722__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51722__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51722__$1);
var G__52251 = cljs.core.chunk_rest(seq__51722__$1);
var G__52252 = c__4679__auto__;
var G__52253 = cljs.core.count(c__4679__auto__);
var G__52254 = (0);
seq__51722 = G__52251;
chunk__51723 = G__52252;
count__51724 = G__52253;
i__51725 = G__52254;
continue;
} else {
var map__51742 = cljs.core.first(seq__51722__$1);
var map__51742__$1 = cljs.core.__destructure_map(map__51742);
var src = map__51742__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51742__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51742__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51742__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51742__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51744){var e_52255 = e51744;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52255);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52255.message)].join('')));
}

var G__52256 = cljs.core.next(seq__51722__$1);
var G__52257 = null;
var G__52258 = (0);
var G__52259 = (0);
seq__51722 = G__52256;
chunk__51723 = G__52257;
count__51724 = G__52258;
i__51725 = G__52259;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51755 = cljs.core.seq(js_requires);
var chunk__51756 = null;
var count__51757 = (0);
var i__51758 = (0);
while(true){
if((i__51758 < count__51757)){
var js_ns = chunk__51756.cljs$core$IIndexed$_nth$arity$2(null,i__51758);
var require_str_52260 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52260);


var G__52261 = seq__51755;
var G__52262 = chunk__51756;
var G__52263 = count__51757;
var G__52264 = (i__51758 + (1));
seq__51755 = G__52261;
chunk__51756 = G__52262;
count__51757 = G__52263;
i__51758 = G__52264;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51755);
if(temp__5753__auto__){
var seq__51755__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51755__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51755__$1);
var G__52265 = cljs.core.chunk_rest(seq__51755__$1);
var G__52266 = c__4679__auto__;
var G__52267 = cljs.core.count(c__4679__auto__);
var G__52268 = (0);
seq__51755 = G__52265;
chunk__51756 = G__52266;
count__51757 = G__52267;
i__51758 = G__52268;
continue;
} else {
var js_ns = cljs.core.first(seq__51755__$1);
var require_str_52269 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52269);


var G__52270 = cljs.core.next(seq__51755__$1);
var G__52271 = null;
var G__52272 = (0);
var G__52273 = (0);
seq__51755 = G__52270;
chunk__51756 = G__52271;
count__51757 = G__52272;
i__51758 = G__52273;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51764){
var map__51765 = p__51764;
var map__51765__$1 = cljs.core.__destructure_map(map__51765);
var msg = map__51765__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51765__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51765__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51766(s__51767){
return (new cljs.core.LazySeq(null,(function (){
var s__51767__$1 = s__51767;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51767__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__51772 = cljs.core.first(xs__6308__auto__);
var map__51772__$1 = cljs.core.__destructure_map(map__51772);
var src = map__51772__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51772__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51772__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__51767__$1,map__51772,map__51772__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51765,map__51765__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51766_$_iter__51768(s__51769){
return (new cljs.core.LazySeq(null,((function (s__51767__$1,map__51772,map__51772__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51765,map__51765__$1,msg,info,reload_info){
return (function (){
var s__51769__$1 = s__51769;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51769__$1);
if(temp__5753__auto____$1){
var s__51769__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51769__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51769__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51771 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51770 = (0);
while(true){
if((i__51770 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__51770);
cljs.core.chunk_append(b__51771,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52274 = (i__51770 + (1));
i__51770 = G__52274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51771),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51766_$_iter__51768(cljs.core.chunk_rest(s__51769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51771),null);
}
} else {
var warning = cljs.core.first(s__51769__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51766_$_iter__51768(cljs.core.rest(s__51769__$2)));
}
} else {
return null;
}
break;
}
});})(s__51767__$1,map__51772,map__51772__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51765,map__51765__$1,msg,info,reload_info))
,null,null));
});})(s__51767__$1,map__51772,map__51772__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51765,map__51765__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51766(cljs.core.rest(s__51767__$1)));
} else {
var G__52275 = cljs.core.rest(s__51767__$1);
s__51767__$1 = G__52275;
continue;
}
} else {
var G__52276 = cljs.core.rest(s__51767__$1);
s__51767__$1 = G__52276;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51780_52277 = cljs.core.seq(warnings);
var chunk__51781_52278 = null;
var count__51782_52279 = (0);
var i__51783_52280 = (0);
while(true){
if((i__51783_52280 < count__51782_52279)){
var map__51786_52281 = chunk__51781_52278.cljs$core$IIndexed$_nth$arity$2(null,i__51783_52280);
var map__51786_52282__$1 = cljs.core.__destructure_map(map__51786_52281);
var w_52283 = map__51786_52282__$1;
var msg_52284__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51786_52282__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51786_52282__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51786_52282__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51786_52282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52287)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52285),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52286),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52284__$1)].join(''));


var G__52288 = seq__51780_52277;
var G__52289 = chunk__51781_52278;
var G__52290 = count__51782_52279;
var G__52291 = (i__51783_52280 + (1));
seq__51780_52277 = G__52288;
chunk__51781_52278 = G__52289;
count__51782_52279 = G__52290;
i__51783_52280 = G__52291;
continue;
} else {
var temp__5753__auto___52292 = cljs.core.seq(seq__51780_52277);
if(temp__5753__auto___52292){
var seq__51780_52293__$1 = temp__5753__auto___52292;
if(cljs.core.chunked_seq_QMARK_(seq__51780_52293__$1)){
var c__4679__auto___52295 = cljs.core.chunk_first(seq__51780_52293__$1);
var G__52296 = cljs.core.chunk_rest(seq__51780_52293__$1);
var G__52297 = c__4679__auto___52295;
var G__52298 = cljs.core.count(c__4679__auto___52295);
var G__52299 = (0);
seq__51780_52277 = G__52296;
chunk__51781_52278 = G__52297;
count__51782_52279 = G__52298;
i__51783_52280 = G__52299;
continue;
} else {
var map__51787_52301 = cljs.core.first(seq__51780_52293__$1);
var map__51787_52302__$1 = cljs.core.__destructure_map(map__51787_52301);
var w_52303 = map__51787_52302__$1;
var msg_52304__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51787_52302__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51787_52302__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51787_52302__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51787_52302__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52307)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52305),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52306),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52304__$1)].join(''));


var G__52308 = cljs.core.next(seq__51780_52293__$1);
var G__52309 = null;
var G__52310 = (0);
var G__52311 = (0);
seq__51780_52277 = G__52308;
chunk__51781_52278 = G__52309;
count__51782_52279 = G__52310;
i__51783_52280 = G__52311;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51763_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51763_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51802){
var map__51803 = p__51802;
var map__51803__$1 = cljs.core.__destructure_map(map__51803);
var msg = map__51803__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__51804 = cljs.core.seq(updates);
var chunk__51806 = null;
var count__51807 = (0);
var i__51808 = (0);
while(true){
if((i__51808 < count__51807)){
var path = chunk__51806.cljs$core$IIndexed$_nth$arity$2(null,i__51808);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52073_52314 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52094_52315 = null;
var count__52095_52316 = (0);
var i__52096_52317 = (0);
while(true){
if((i__52096_52317 < count__52095_52316)){
var node_52318 = chunk__52094_52315.cljs$core$IIndexed$_nth$arity$2(null,i__52096_52317);
if(cljs.core.not(node_52318.shadow$old)){
var path_match_52319 = shadow.cljs.devtools.client.browser.match_paths(node_52318.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52319)){
var new_link_52320 = (function (){var G__52133 = node_52318.cloneNode(true);
G__52133.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52319),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52133;
})();
(node_52318.shadow$old = true);

(new_link_52320.onload = ((function (seq__52073_52314,chunk__52094_52315,count__52095_52316,i__52096_52317,seq__51804,chunk__51806,count__51807,i__51808,new_link_52320,path_match_52319,node_52318,path,map__51803,map__51803__$1,msg,updates,reload_info){
return (function (e){
var seq__52134_52322 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52136_52323 = null;
var count__52137_52324 = (0);
var i__52138_52325 = (0);
while(true){
if((i__52138_52325 < count__52137_52324)){
var map__52143_52326 = chunk__52136_52323.cljs$core$IIndexed$_nth$arity$2(null,i__52138_52325);
var map__52143_52327__$1 = cljs.core.__destructure_map(map__52143_52326);
var task_52328 = map__52143_52327__$1;
var fn_str_52329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143_52327__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143_52327__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52332 = goog.getObjectByName(fn_str_52329,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52330)].join(''));

(fn_obj_52332.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52332.cljs$core$IFn$_invoke$arity$2(path,new_link_52320) : fn_obj_52332.call(null,path,new_link_52320));


var G__52333 = seq__52134_52322;
var G__52334 = chunk__52136_52323;
var G__52335 = count__52137_52324;
var G__52336 = (i__52138_52325 + (1));
seq__52134_52322 = G__52333;
chunk__52136_52323 = G__52334;
count__52137_52324 = G__52335;
i__52138_52325 = G__52336;
continue;
} else {
var temp__5753__auto___52337 = cljs.core.seq(seq__52134_52322);
if(temp__5753__auto___52337){
var seq__52134_52338__$1 = temp__5753__auto___52337;
if(cljs.core.chunked_seq_QMARK_(seq__52134_52338__$1)){
var c__4679__auto___52339 = cljs.core.chunk_first(seq__52134_52338__$1);
var G__52340 = cljs.core.chunk_rest(seq__52134_52338__$1);
var G__52341 = c__4679__auto___52339;
var G__52342 = cljs.core.count(c__4679__auto___52339);
var G__52343 = (0);
seq__52134_52322 = G__52340;
chunk__52136_52323 = G__52341;
count__52137_52324 = G__52342;
i__52138_52325 = G__52343;
continue;
} else {
var map__52146_52344 = cljs.core.first(seq__52134_52338__$1);
var map__52146_52345__$1 = cljs.core.__destructure_map(map__52146_52344);
var task_52346 = map__52146_52345__$1;
var fn_str_52347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52146_52345__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52146_52345__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52350 = goog.getObjectByName(fn_str_52347,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52348)].join(''));

(fn_obj_52350.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52350.cljs$core$IFn$_invoke$arity$2(path,new_link_52320) : fn_obj_52350.call(null,path,new_link_52320));


var G__52351 = cljs.core.next(seq__52134_52338__$1);
var G__52352 = null;
var G__52353 = (0);
var G__52354 = (0);
seq__52134_52322 = G__52351;
chunk__52136_52323 = G__52352;
count__52137_52324 = G__52353;
i__52138_52325 = G__52354;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52318);
});})(seq__52073_52314,chunk__52094_52315,count__52095_52316,i__52096_52317,seq__51804,chunk__51806,count__51807,i__51808,new_link_52320,path_match_52319,node_52318,path,map__51803,map__51803__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52319], 0));

goog.dom.insertSiblingAfter(new_link_52320,node_52318);


var G__52355 = seq__52073_52314;
var G__52356 = chunk__52094_52315;
var G__52357 = count__52095_52316;
var G__52358 = (i__52096_52317 + (1));
seq__52073_52314 = G__52355;
chunk__52094_52315 = G__52356;
count__52095_52316 = G__52357;
i__52096_52317 = G__52358;
continue;
} else {
var G__52359 = seq__52073_52314;
var G__52360 = chunk__52094_52315;
var G__52361 = count__52095_52316;
var G__52362 = (i__52096_52317 + (1));
seq__52073_52314 = G__52359;
chunk__52094_52315 = G__52360;
count__52095_52316 = G__52361;
i__52096_52317 = G__52362;
continue;
}
} else {
var G__52363 = seq__52073_52314;
var G__52364 = chunk__52094_52315;
var G__52365 = count__52095_52316;
var G__52366 = (i__52096_52317 + (1));
seq__52073_52314 = G__52363;
chunk__52094_52315 = G__52364;
count__52095_52316 = G__52365;
i__52096_52317 = G__52366;
continue;
}
} else {
var temp__5753__auto___52368 = cljs.core.seq(seq__52073_52314);
if(temp__5753__auto___52368){
var seq__52073_52369__$1 = temp__5753__auto___52368;
if(cljs.core.chunked_seq_QMARK_(seq__52073_52369__$1)){
var c__4679__auto___52370 = cljs.core.chunk_first(seq__52073_52369__$1);
var G__52371 = cljs.core.chunk_rest(seq__52073_52369__$1);
var G__52372 = c__4679__auto___52370;
var G__52373 = cljs.core.count(c__4679__auto___52370);
var G__52374 = (0);
seq__52073_52314 = G__52371;
chunk__52094_52315 = G__52372;
count__52095_52316 = G__52373;
i__52096_52317 = G__52374;
continue;
} else {
var node_52375 = cljs.core.first(seq__52073_52369__$1);
if(cljs.core.not(node_52375.shadow$old)){
var path_match_52376 = shadow.cljs.devtools.client.browser.match_paths(node_52375.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52376)){
var new_link_52377 = (function (){var G__52150 = node_52375.cloneNode(true);
G__52150.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52376),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52150;
})();
(node_52375.shadow$old = true);

(new_link_52377.onload = ((function (seq__52073_52314,chunk__52094_52315,count__52095_52316,i__52096_52317,seq__51804,chunk__51806,count__51807,i__51808,new_link_52377,path_match_52376,node_52375,seq__52073_52369__$1,temp__5753__auto___52368,path,map__51803,map__51803__$1,msg,updates,reload_info){
return (function (e){
var seq__52151_52378 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52153_52379 = null;
var count__52154_52380 = (0);
var i__52155_52381 = (0);
while(true){
if((i__52155_52381 < count__52154_52380)){
var map__52160_52382 = chunk__52153_52379.cljs$core$IIndexed$_nth$arity$2(null,i__52155_52381);
var map__52160_52383__$1 = cljs.core.__destructure_map(map__52160_52382);
var task_52384 = map__52160_52383__$1;
var fn_str_52385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52160_52383__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52160_52383__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52387 = goog.getObjectByName(fn_str_52385,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52386)].join(''));

(fn_obj_52387.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52387.cljs$core$IFn$_invoke$arity$2(path,new_link_52377) : fn_obj_52387.call(null,path,new_link_52377));


var G__52388 = seq__52151_52378;
var G__52389 = chunk__52153_52379;
var G__52390 = count__52154_52380;
var G__52391 = (i__52155_52381 + (1));
seq__52151_52378 = G__52388;
chunk__52153_52379 = G__52389;
count__52154_52380 = G__52390;
i__52155_52381 = G__52391;
continue;
} else {
var temp__5753__auto___52392__$1 = cljs.core.seq(seq__52151_52378);
if(temp__5753__auto___52392__$1){
var seq__52151_52393__$1 = temp__5753__auto___52392__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52151_52393__$1)){
var c__4679__auto___52394 = cljs.core.chunk_first(seq__52151_52393__$1);
var G__52395 = cljs.core.chunk_rest(seq__52151_52393__$1);
var G__52396 = c__4679__auto___52394;
var G__52397 = cljs.core.count(c__4679__auto___52394);
var G__52398 = (0);
seq__52151_52378 = G__52395;
chunk__52153_52379 = G__52396;
count__52154_52380 = G__52397;
i__52155_52381 = G__52398;
continue;
} else {
var map__52161_52399 = cljs.core.first(seq__52151_52393__$1);
var map__52161_52400__$1 = cljs.core.__destructure_map(map__52161_52399);
var task_52401 = map__52161_52400__$1;
var fn_str_52402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161_52400__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161_52400__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52404 = goog.getObjectByName(fn_str_52402,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52403)].join(''));

(fn_obj_52404.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52404.cljs$core$IFn$_invoke$arity$2(path,new_link_52377) : fn_obj_52404.call(null,path,new_link_52377));


var G__52405 = cljs.core.next(seq__52151_52393__$1);
var G__52406 = null;
var G__52407 = (0);
var G__52408 = (0);
seq__52151_52378 = G__52405;
chunk__52153_52379 = G__52406;
count__52154_52380 = G__52407;
i__52155_52381 = G__52408;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52375);
});})(seq__52073_52314,chunk__52094_52315,count__52095_52316,i__52096_52317,seq__51804,chunk__51806,count__51807,i__51808,new_link_52377,path_match_52376,node_52375,seq__52073_52369__$1,temp__5753__auto___52368,path,map__51803,map__51803__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52376], 0));

goog.dom.insertSiblingAfter(new_link_52377,node_52375);


var G__52409 = cljs.core.next(seq__52073_52369__$1);
var G__52410 = null;
var G__52411 = (0);
var G__52412 = (0);
seq__52073_52314 = G__52409;
chunk__52094_52315 = G__52410;
count__52095_52316 = G__52411;
i__52096_52317 = G__52412;
continue;
} else {
var G__52413 = cljs.core.next(seq__52073_52369__$1);
var G__52414 = null;
var G__52415 = (0);
var G__52416 = (0);
seq__52073_52314 = G__52413;
chunk__52094_52315 = G__52414;
count__52095_52316 = G__52415;
i__52096_52317 = G__52416;
continue;
}
} else {
var G__52417 = cljs.core.next(seq__52073_52369__$1);
var G__52418 = null;
var G__52419 = (0);
var G__52420 = (0);
seq__52073_52314 = G__52417;
chunk__52094_52315 = G__52418;
count__52095_52316 = G__52419;
i__52096_52317 = G__52420;
continue;
}
}
} else {
}
}
break;
}


var G__52421 = seq__51804;
var G__52422 = chunk__51806;
var G__52423 = count__51807;
var G__52424 = (i__51808 + (1));
seq__51804 = G__52421;
chunk__51806 = G__52422;
count__51807 = G__52423;
i__51808 = G__52424;
continue;
} else {
var G__52426 = seq__51804;
var G__52427 = chunk__51806;
var G__52428 = count__51807;
var G__52429 = (i__51808 + (1));
seq__51804 = G__52426;
chunk__51806 = G__52427;
count__51807 = G__52428;
i__51808 = G__52429;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51804);
if(temp__5753__auto__){
var seq__51804__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51804__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51804__$1);
var G__52430 = cljs.core.chunk_rest(seq__51804__$1);
var G__52431 = c__4679__auto__;
var G__52432 = cljs.core.count(c__4679__auto__);
var G__52433 = (0);
seq__51804 = G__52430;
chunk__51806 = G__52431;
count__51807 = G__52432;
i__51808 = G__52433;
continue;
} else {
var path = cljs.core.first(seq__51804__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52162_52436 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52166_52437 = null;
var count__52167_52438 = (0);
var i__52168_52439 = (0);
while(true){
if((i__52168_52439 < count__52167_52438)){
var node_52440 = chunk__52166_52437.cljs$core$IIndexed$_nth$arity$2(null,i__52168_52439);
if(cljs.core.not(node_52440.shadow$old)){
var path_match_52441 = shadow.cljs.devtools.client.browser.match_paths(node_52440.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52441)){
var new_link_52442 = (function (){var G__52200 = node_52440.cloneNode(true);
G__52200.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52441),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52200;
})();
(node_52440.shadow$old = true);

(new_link_52442.onload = ((function (seq__52162_52436,chunk__52166_52437,count__52167_52438,i__52168_52439,seq__51804,chunk__51806,count__51807,i__51808,new_link_52442,path_match_52441,node_52440,path,seq__51804__$1,temp__5753__auto__,map__51803,map__51803__$1,msg,updates,reload_info){
return (function (e){
var seq__52201_52444 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52203_52445 = null;
var count__52204_52446 = (0);
var i__52205_52447 = (0);
while(true){
if((i__52205_52447 < count__52204_52446)){
var map__52209_52448 = chunk__52203_52445.cljs$core$IIndexed$_nth$arity$2(null,i__52205_52447);
var map__52209_52449__$1 = cljs.core.__destructure_map(map__52209_52448);
var task_52450 = map__52209_52449__$1;
var fn_str_52451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52209_52449__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52209_52449__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52453 = goog.getObjectByName(fn_str_52451,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52452)].join(''));

(fn_obj_52453.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52453.cljs$core$IFn$_invoke$arity$2(path,new_link_52442) : fn_obj_52453.call(null,path,new_link_52442));


var G__52454 = seq__52201_52444;
var G__52455 = chunk__52203_52445;
var G__52456 = count__52204_52446;
var G__52457 = (i__52205_52447 + (1));
seq__52201_52444 = G__52454;
chunk__52203_52445 = G__52455;
count__52204_52446 = G__52456;
i__52205_52447 = G__52457;
continue;
} else {
var temp__5753__auto___52458__$1 = cljs.core.seq(seq__52201_52444);
if(temp__5753__auto___52458__$1){
var seq__52201_52459__$1 = temp__5753__auto___52458__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52201_52459__$1)){
var c__4679__auto___52460 = cljs.core.chunk_first(seq__52201_52459__$1);
var G__52461 = cljs.core.chunk_rest(seq__52201_52459__$1);
var G__52462 = c__4679__auto___52460;
var G__52463 = cljs.core.count(c__4679__auto___52460);
var G__52464 = (0);
seq__52201_52444 = G__52461;
chunk__52203_52445 = G__52462;
count__52204_52446 = G__52463;
i__52205_52447 = G__52464;
continue;
} else {
var map__52210_52465 = cljs.core.first(seq__52201_52459__$1);
var map__52210_52466__$1 = cljs.core.__destructure_map(map__52210_52465);
var task_52467 = map__52210_52466__$1;
var fn_str_52468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52210_52466__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52210_52466__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52471 = goog.getObjectByName(fn_str_52468,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52469)].join(''));

(fn_obj_52471.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52471.cljs$core$IFn$_invoke$arity$2(path,new_link_52442) : fn_obj_52471.call(null,path,new_link_52442));


var G__52473 = cljs.core.next(seq__52201_52459__$1);
var G__52474 = null;
var G__52475 = (0);
var G__52476 = (0);
seq__52201_52444 = G__52473;
chunk__52203_52445 = G__52474;
count__52204_52446 = G__52475;
i__52205_52447 = G__52476;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52440);
});})(seq__52162_52436,chunk__52166_52437,count__52167_52438,i__52168_52439,seq__51804,chunk__51806,count__51807,i__51808,new_link_52442,path_match_52441,node_52440,path,seq__51804__$1,temp__5753__auto__,map__51803,map__51803__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52441], 0));

goog.dom.insertSiblingAfter(new_link_52442,node_52440);


var G__52477 = seq__52162_52436;
var G__52478 = chunk__52166_52437;
var G__52479 = count__52167_52438;
var G__52480 = (i__52168_52439 + (1));
seq__52162_52436 = G__52477;
chunk__52166_52437 = G__52478;
count__52167_52438 = G__52479;
i__52168_52439 = G__52480;
continue;
} else {
var G__52481 = seq__52162_52436;
var G__52482 = chunk__52166_52437;
var G__52483 = count__52167_52438;
var G__52484 = (i__52168_52439 + (1));
seq__52162_52436 = G__52481;
chunk__52166_52437 = G__52482;
count__52167_52438 = G__52483;
i__52168_52439 = G__52484;
continue;
}
} else {
var G__52485 = seq__52162_52436;
var G__52486 = chunk__52166_52437;
var G__52487 = count__52167_52438;
var G__52488 = (i__52168_52439 + (1));
seq__52162_52436 = G__52485;
chunk__52166_52437 = G__52486;
count__52167_52438 = G__52487;
i__52168_52439 = G__52488;
continue;
}
} else {
var temp__5753__auto___52489__$1 = cljs.core.seq(seq__52162_52436);
if(temp__5753__auto___52489__$1){
var seq__52162_52490__$1 = temp__5753__auto___52489__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52162_52490__$1)){
var c__4679__auto___52491 = cljs.core.chunk_first(seq__52162_52490__$1);
var G__52492 = cljs.core.chunk_rest(seq__52162_52490__$1);
var G__52493 = c__4679__auto___52491;
var G__52494 = cljs.core.count(c__4679__auto___52491);
var G__52495 = (0);
seq__52162_52436 = G__52492;
chunk__52166_52437 = G__52493;
count__52167_52438 = G__52494;
i__52168_52439 = G__52495;
continue;
} else {
var node_52496 = cljs.core.first(seq__52162_52490__$1);
if(cljs.core.not(node_52496.shadow$old)){
var path_match_52497 = shadow.cljs.devtools.client.browser.match_paths(node_52496.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52497)){
var new_link_52498 = (function (){var G__52211 = node_52496.cloneNode(true);
G__52211.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52497),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52211;
})();
(node_52496.shadow$old = true);

(new_link_52498.onload = ((function (seq__52162_52436,chunk__52166_52437,count__52167_52438,i__52168_52439,seq__51804,chunk__51806,count__51807,i__51808,new_link_52498,path_match_52497,node_52496,seq__52162_52490__$1,temp__5753__auto___52489__$1,path,seq__51804__$1,temp__5753__auto__,map__51803,map__51803__$1,msg,updates,reload_info){
return (function (e){
var seq__52212_52499 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52214_52500 = null;
var count__52215_52501 = (0);
var i__52216_52502 = (0);
while(true){
if((i__52216_52502 < count__52215_52501)){
var map__52220_52503 = chunk__52214_52500.cljs$core$IIndexed$_nth$arity$2(null,i__52216_52502);
var map__52220_52504__$1 = cljs.core.__destructure_map(map__52220_52503);
var task_52505 = map__52220_52504__$1;
var fn_str_52506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52220_52504__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52220_52504__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52508 = goog.getObjectByName(fn_str_52506,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52507)].join(''));

(fn_obj_52508.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52508.cljs$core$IFn$_invoke$arity$2(path,new_link_52498) : fn_obj_52508.call(null,path,new_link_52498));


var G__52509 = seq__52212_52499;
var G__52510 = chunk__52214_52500;
var G__52511 = count__52215_52501;
var G__52512 = (i__52216_52502 + (1));
seq__52212_52499 = G__52509;
chunk__52214_52500 = G__52510;
count__52215_52501 = G__52511;
i__52216_52502 = G__52512;
continue;
} else {
var temp__5753__auto___52513__$2 = cljs.core.seq(seq__52212_52499);
if(temp__5753__auto___52513__$2){
var seq__52212_52514__$1 = temp__5753__auto___52513__$2;
if(cljs.core.chunked_seq_QMARK_(seq__52212_52514__$1)){
var c__4679__auto___52515 = cljs.core.chunk_first(seq__52212_52514__$1);
var G__52516 = cljs.core.chunk_rest(seq__52212_52514__$1);
var G__52517 = c__4679__auto___52515;
var G__52518 = cljs.core.count(c__4679__auto___52515);
var G__52519 = (0);
seq__52212_52499 = G__52516;
chunk__52214_52500 = G__52517;
count__52215_52501 = G__52518;
i__52216_52502 = G__52519;
continue;
} else {
var map__52221_52520 = cljs.core.first(seq__52212_52514__$1);
var map__52221_52521__$1 = cljs.core.__destructure_map(map__52221_52520);
var task_52522 = map__52221_52521__$1;
var fn_str_52523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52221_52521__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52221_52521__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52525 = goog.getObjectByName(fn_str_52523,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52524)].join(''));

(fn_obj_52525.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52525.cljs$core$IFn$_invoke$arity$2(path,new_link_52498) : fn_obj_52525.call(null,path,new_link_52498));


var G__52526 = cljs.core.next(seq__52212_52514__$1);
var G__52527 = null;
var G__52528 = (0);
var G__52529 = (0);
seq__52212_52499 = G__52526;
chunk__52214_52500 = G__52527;
count__52215_52501 = G__52528;
i__52216_52502 = G__52529;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52496);
});})(seq__52162_52436,chunk__52166_52437,count__52167_52438,i__52168_52439,seq__51804,chunk__51806,count__51807,i__51808,new_link_52498,path_match_52497,node_52496,seq__52162_52490__$1,temp__5753__auto___52489__$1,path,seq__51804__$1,temp__5753__auto__,map__51803,map__51803__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52497], 0));

goog.dom.insertSiblingAfter(new_link_52498,node_52496);


var G__52530 = cljs.core.next(seq__52162_52490__$1);
var G__52531 = null;
var G__52532 = (0);
var G__52533 = (0);
seq__52162_52436 = G__52530;
chunk__52166_52437 = G__52531;
count__52167_52438 = G__52532;
i__52168_52439 = G__52533;
continue;
} else {
var G__52534 = cljs.core.next(seq__52162_52490__$1);
var G__52535 = null;
var G__52536 = (0);
var G__52537 = (0);
seq__52162_52436 = G__52534;
chunk__52166_52437 = G__52535;
count__52167_52438 = G__52536;
i__52168_52439 = G__52537;
continue;
}
} else {
var G__52538 = cljs.core.next(seq__52162_52490__$1);
var G__52539 = null;
var G__52540 = (0);
var G__52541 = (0);
seq__52162_52436 = G__52538;
chunk__52166_52437 = G__52539;
count__52167_52438 = G__52540;
i__52168_52439 = G__52541;
continue;
}
}
} else {
}
}
break;
}


var G__52542 = cljs.core.next(seq__51804__$1);
var G__52543 = null;
var G__52544 = (0);
var G__52545 = (0);
seq__51804 = G__52542;
chunk__51806 = G__52543;
count__51807 = G__52544;
i__51808 = G__52545;
continue;
} else {
var G__52546 = cljs.core.next(seq__51804__$1);
var G__52547 = null;
var G__52548 = (0);
var G__52549 = (0);
seq__51804 = G__52546;
chunk__51806 = G__52547;
count__51807 = G__52548;
i__51808 = G__52549;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52222){
var map__52223 = p__52222;
var map__52223__$1 = cljs.core.__destructure_map(map__52223);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52224){
var map__52225 = p__52224;
var map__52225__$1 = cljs.core.__destructure_map(map__52225);
var _ = map__52225__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52225__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52226,done,error){
var map__52227 = p__52226;
var map__52227__$1 = cljs.core.__destructure_map(map__52227);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52228,done,error){
var map__52229 = p__52228;
var map__52229__$1 = cljs.core.__destructure_map(map__52229);
var msg = map__52229__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52229__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52229__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52229__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52230){
var map__52231 = p__52230;
var map__52231__$1 = cljs.core.__destructure_map(map__52231);
var src = map__52231__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52231__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52232 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52232) : done.call(null,G__52232));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52233){
var map__52234 = p__52233;
var map__52234__$1 = cljs.core.__destructure_map(map__52234);
var msg__$1 = map__52234__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52235){var ex = e52235;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52236){
var map__52237 = p__52236;
var map__52237__$1 = cljs.core.__destructure_map(map__52237);
var env = map__52237__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52237__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52238){
var map__52239 = p__52238;
var map__52239__$1 = cljs.core.__destructure_map(map__52239);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52239__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52239__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52240){
var map__52241 = p__52240;
var map__52241__$1 = cljs.core.__destructure_map(map__52241);
var svc = map__52241__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52241__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
