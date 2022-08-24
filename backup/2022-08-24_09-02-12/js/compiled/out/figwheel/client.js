// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33844){if((e33844 instanceof Error)){
var e = e33844;
return "Error: Unable to stringify";
} else {
throw e33844;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33847 = arguments.length;
switch (G__33847) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33845_SHARP_){
if(typeof p1__33845_SHARP_ === 'string'){
return p1__33845_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33845_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33850 = arguments.length;
var i__4731__auto___33851 = (0);
while(true){
if((i__4731__auto___33851 < len__4730__auto___33850)){
args__4736__auto__.push((arguments[i__4731__auto___33851]));

var G__33852 = (i__4731__auto___33851 + (1));
i__4731__auto___33851 = G__33852;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33849));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33854 = arguments.length;
var i__4731__auto___33855 = (0);
while(true){
if((i__4731__auto___33855 < len__4730__auto___33854)){
args__4736__auto__.push((arguments[i__4731__auto___33855]));

var G__33856 = (i__4731__auto___33855 + (1));
i__4731__auto___33855 = G__33856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33853){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33853));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33857){
var map__33858 = p__33857;
var map__33858__$1 = (((((!((map__33858 == null))))?(((((map__33858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33858):map__33858);
var message = cljs.core.get.call(null,map__33858__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33858__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29960__auto___33937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___33937,ch){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___33937,ch){
return (function (state_33909){
var state_val_33910 = (state_33909[(1)]);
if((state_val_33910 === (7))){
var inst_33905 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
var statearr_33911_33938 = state_33909__$1;
(statearr_33911_33938[(2)] = inst_33905);

(statearr_33911_33938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (1))){
var state_33909__$1 = state_33909;
var statearr_33912_33939 = state_33909__$1;
(statearr_33912_33939[(2)] = null);

(statearr_33912_33939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (4))){
var inst_33862 = (state_33909[(7)]);
var inst_33862__$1 = (state_33909[(2)]);
var state_33909__$1 = (function (){var statearr_33913 = state_33909;
(statearr_33913[(7)] = inst_33862__$1);

return statearr_33913;
})();
if(cljs.core.truth_(inst_33862__$1)){
var statearr_33914_33940 = state_33909__$1;
(statearr_33914_33940[(1)] = (5));

} else {
var statearr_33915_33941 = state_33909__$1;
(statearr_33915_33941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (15))){
var inst_33869 = (state_33909[(8)]);
var inst_33884 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33869);
var inst_33885 = cljs.core.first.call(null,inst_33884);
var inst_33886 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33885);
var inst_33887 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33886)].join('');
var inst_33888 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33887);
var state_33909__$1 = state_33909;
var statearr_33916_33942 = state_33909__$1;
(statearr_33916_33942[(2)] = inst_33888);

(statearr_33916_33942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (13))){
var inst_33893 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
var statearr_33917_33943 = state_33909__$1;
(statearr_33917_33943[(2)] = inst_33893);

(statearr_33917_33943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (6))){
var state_33909__$1 = state_33909;
var statearr_33918_33944 = state_33909__$1;
(statearr_33918_33944[(2)] = null);

(statearr_33918_33944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (17))){
var inst_33891 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
var statearr_33919_33945 = state_33909__$1;
(statearr_33919_33945[(2)] = inst_33891);

(statearr_33919_33945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (3))){
var inst_33907 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33909__$1,inst_33907);
} else {
if((state_val_33910 === (12))){
var inst_33868 = (state_33909[(9)]);
var inst_33882 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33868,opts);
var state_33909__$1 = state_33909;
if(inst_33882){
var statearr_33920_33946 = state_33909__$1;
(statearr_33920_33946[(1)] = (15));

} else {
var statearr_33921_33947 = state_33909__$1;
(statearr_33921_33947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (2))){
var state_33909__$1 = state_33909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33909__$1,(4),ch);
} else {
if((state_val_33910 === (11))){
var inst_33869 = (state_33909[(8)]);
var inst_33874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33875 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33869);
var inst_33876 = cljs.core.async.timeout.call(null,(1000));
var inst_33877 = [inst_33875,inst_33876];
var inst_33878 = (new cljs.core.PersistentVector(null,2,(5),inst_33874,inst_33877,null));
var state_33909__$1 = state_33909;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33909__$1,(14),inst_33878);
} else {
if((state_val_33910 === (9))){
var inst_33869 = (state_33909[(8)]);
var inst_33895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33896 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33869);
var inst_33897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33896);
var inst_33898 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33897)].join('');
var inst_33899 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33898);
var state_33909__$1 = (function (){var statearr_33922 = state_33909;
(statearr_33922[(10)] = inst_33895);

return statearr_33922;
})();
var statearr_33923_33948 = state_33909__$1;
(statearr_33923_33948[(2)] = inst_33899);

(statearr_33923_33948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (5))){
var inst_33862 = (state_33909[(7)]);
var inst_33864 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33865 = (new cljs.core.PersistentArrayMap(null,2,inst_33864,null));
var inst_33866 = (new cljs.core.PersistentHashSet(null,inst_33865,null));
var inst_33867 = figwheel.client.focus_msgs.call(null,inst_33866,inst_33862);
var inst_33868 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33867);
var inst_33869 = cljs.core.first.call(null,inst_33867);
var inst_33870 = figwheel.client.autoload_QMARK_.call(null);
var state_33909__$1 = (function (){var statearr_33924 = state_33909;
(statearr_33924[(8)] = inst_33869);

(statearr_33924[(9)] = inst_33868);

return statearr_33924;
})();
if(cljs.core.truth_(inst_33870)){
var statearr_33925_33949 = state_33909__$1;
(statearr_33925_33949[(1)] = (8));

} else {
var statearr_33926_33950 = state_33909__$1;
(statearr_33926_33950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (14))){
var inst_33880 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
var statearr_33927_33951 = state_33909__$1;
(statearr_33927_33951[(2)] = inst_33880);

(statearr_33927_33951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (16))){
var state_33909__$1 = state_33909;
var statearr_33928_33952 = state_33909__$1;
(statearr_33928_33952[(2)] = null);

(statearr_33928_33952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (10))){
var inst_33901 = (state_33909[(2)]);
var state_33909__$1 = (function (){var statearr_33929 = state_33909;
(statearr_33929[(11)] = inst_33901);

return statearr_33929;
})();
var statearr_33930_33953 = state_33909__$1;
(statearr_33930_33953[(2)] = null);

(statearr_33930_33953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (8))){
var inst_33868 = (state_33909[(9)]);
var inst_33872 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33868,opts);
var state_33909__$1 = state_33909;
if(cljs.core.truth_(inst_33872)){
var statearr_33931_33954 = state_33909__$1;
(statearr_33931_33954[(1)] = (11));

} else {
var statearr_33932_33955 = state_33909__$1;
(statearr_33932_33955[(1)] = (12));

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
});})(c__29960__auto___33937,ch))
;
return ((function (switch__29865__auto__,c__29960__auto___33937,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29866__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29866__auto____0 = (function (){
var statearr_33933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33933[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29866__auto__);

(statearr_33933[(1)] = (1));

return statearr_33933;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29866__auto____1 = (function (state_33909){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_33909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e33934){if((e33934 instanceof Object)){
var ex__29869__auto__ = e33934;
var statearr_33935_33956 = state_33909;
(statearr_33935_33956[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33957 = state_33909;
state_33909 = G__33957;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29866__auto__ = function(state_33909){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29866__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29866__auto____1.call(this,state_33909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29866__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29866__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___33937,ch))
})();
var state__29962__auto__ = (function (){var statearr_33936 = f__29961__auto__.call(null);
(statearr_33936[(6)] = c__29960__auto___33937);

return statearr_33936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___33937,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33958_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33958_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33964 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33964){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33960 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33961 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33962 = true;
var _STAR_print_fn_STAR__temp_val__33963 = ((function (_STAR_print_newline_STAR__orig_val__33960,_STAR_print_fn_STAR__orig_val__33961,_STAR_print_newline_STAR__temp_val__33962,sb,base_path_33964){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__33960,_STAR_print_fn_STAR__orig_val__33961,_STAR_print_newline_STAR__temp_val__33962,sb,base_path_33964))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33962;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33963;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33961;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33960;
}}catch (e33959){if((e33959 instanceof Error)){
var e = e33959;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33964], null));
} else {
var e = e33959;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33964))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33965){
var map__33966 = p__33965;
var map__33966__$1 = (((((!((map__33966 == null))))?(((((map__33966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33966):map__33966);
var opts = map__33966__$1;
var build_id = cljs.core.get.call(null,map__33966__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33966,map__33966__$1,opts,build_id){
return (function (p__33968){
var vec__33969 = p__33968;
var seq__33970 = cljs.core.seq.call(null,vec__33969);
var first__33971 = cljs.core.first.call(null,seq__33970);
var seq__33970__$1 = cljs.core.next.call(null,seq__33970);
var map__33972 = first__33971;
var map__33972__$1 = (((((!((map__33972 == null))))?(((((map__33972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33972):map__33972);
var msg = map__33972__$1;
var msg_name = cljs.core.get.call(null,map__33972__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33970__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33969,seq__33970,first__33971,seq__33970__$1,map__33972,map__33972__$1,msg,msg_name,_,map__33966,map__33966__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33969,seq__33970,first__33971,seq__33970__$1,map__33972,map__33972__$1,msg,msg_name,_,map__33966,map__33966__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33966,map__33966__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33974){
var vec__33975 = p__33974;
var seq__33976 = cljs.core.seq.call(null,vec__33975);
var first__33977 = cljs.core.first.call(null,seq__33976);
var seq__33976__$1 = cljs.core.next.call(null,seq__33976);
var map__33978 = first__33977;
var map__33978__$1 = (((((!((map__33978 == null))))?(((((map__33978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33978):map__33978);
var msg = map__33978__$1;
var msg_name = cljs.core.get.call(null,map__33978__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33976__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33980){
var map__33981 = p__33980;
var map__33981__$1 = (((((!((map__33981 == null))))?(((((map__33981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33981):map__33981);
var on_compile_warning = cljs.core.get.call(null,map__33981__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33981__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33981,map__33981__$1,on_compile_warning,on_compile_fail){
return (function (p__33983){
var vec__33984 = p__33983;
var seq__33985 = cljs.core.seq.call(null,vec__33984);
var first__33986 = cljs.core.first.call(null,seq__33985);
var seq__33985__$1 = cljs.core.next.call(null,seq__33985);
var map__33987 = first__33986;
var map__33987__$1 = (((((!((map__33987 == null))))?(((((map__33987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33987):map__33987);
var msg = map__33987__$1;
var msg_name = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33985__$1;
var pred__33989 = cljs.core._EQ_;
var expr__33990 = msg_name;
if(cljs.core.truth_(pred__33989.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33990))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33989.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33990))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33981,map__33981__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__,msg_hist,msg_names,msg){
return (function (state_34079){
var state_val_34080 = (state_34079[(1)]);
if((state_val_34080 === (7))){
var inst_33999 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
if(cljs.core.truth_(inst_33999)){
var statearr_34081_34128 = state_34079__$1;
(statearr_34081_34128[(1)] = (8));

} else {
var statearr_34082_34129 = state_34079__$1;
(statearr_34082_34129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (20))){
var inst_34073 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34083_34130 = state_34079__$1;
(statearr_34083_34130[(2)] = inst_34073);

(statearr_34083_34130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (27))){
var inst_34069 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34084_34131 = state_34079__$1;
(statearr_34084_34131[(2)] = inst_34069);

(statearr_34084_34131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (1))){
var inst_33992 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34079__$1 = state_34079;
if(cljs.core.truth_(inst_33992)){
var statearr_34085_34132 = state_34079__$1;
(statearr_34085_34132[(1)] = (2));

} else {
var statearr_34086_34133 = state_34079__$1;
(statearr_34086_34133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (24))){
var inst_34071 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34087_34134 = state_34079__$1;
(statearr_34087_34134[(2)] = inst_34071);

(statearr_34087_34134[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (4))){
var inst_34077 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34079__$1,inst_34077);
} else {
if((state_val_34080 === (15))){
var inst_34075 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34088_34135 = state_34079__$1;
(statearr_34088_34135[(2)] = inst_34075);

(statearr_34088_34135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (21))){
var inst_34028 = (state_34079[(2)]);
var inst_34029 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34030 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34029);
var state_34079__$1 = (function (){var statearr_34089 = state_34079;
(statearr_34089[(7)] = inst_34028);

return statearr_34089;
})();
var statearr_34090_34136 = state_34079__$1;
(statearr_34090_34136[(2)] = inst_34030);

(statearr_34090_34136[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (31))){
var inst_34058 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34079__$1 = state_34079;
if(inst_34058){
var statearr_34091_34137 = state_34079__$1;
(statearr_34091_34137[(1)] = (34));

} else {
var statearr_34092_34138 = state_34079__$1;
(statearr_34092_34138[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (32))){
var inst_34067 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34093_34139 = state_34079__$1;
(statearr_34093_34139[(2)] = inst_34067);

(statearr_34093_34139[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (33))){
var inst_34054 = (state_34079[(2)]);
var inst_34055 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34056 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34055);
var state_34079__$1 = (function (){var statearr_34094 = state_34079;
(statearr_34094[(8)] = inst_34054);

return statearr_34094;
})();
var statearr_34095_34140 = state_34079__$1;
(statearr_34095_34140[(2)] = inst_34056);

(statearr_34095_34140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (13))){
var inst_34013 = figwheel.client.heads_up.clear.call(null);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(16),inst_34013);
} else {
if((state_val_34080 === (22))){
var inst_34034 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34035 = figwheel.client.heads_up.append_warning_message.call(null,inst_34034);
var state_34079__$1 = state_34079;
var statearr_34096_34141 = state_34079__$1;
(statearr_34096_34141[(2)] = inst_34035);

(statearr_34096_34141[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (36))){
var inst_34065 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34097_34142 = state_34079__$1;
(statearr_34097_34142[(2)] = inst_34065);

(statearr_34097_34142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (29))){
var inst_34045 = (state_34079[(2)]);
var inst_34046 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34047 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34046);
var state_34079__$1 = (function (){var statearr_34098 = state_34079;
(statearr_34098[(9)] = inst_34045);

return statearr_34098;
})();
var statearr_34099_34143 = state_34079__$1;
(statearr_34099_34143[(2)] = inst_34047);

(statearr_34099_34143[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (6))){
var inst_33994 = (state_34079[(10)]);
var state_34079__$1 = state_34079;
var statearr_34100_34144 = state_34079__$1;
(statearr_34100_34144[(2)] = inst_33994);

(statearr_34100_34144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (28))){
var inst_34041 = (state_34079[(2)]);
var inst_34042 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34043 = figwheel.client.heads_up.display_warning.call(null,inst_34042);
var state_34079__$1 = (function (){var statearr_34101 = state_34079;
(statearr_34101[(11)] = inst_34041);

return statearr_34101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(29),inst_34043);
} else {
if((state_val_34080 === (25))){
var inst_34039 = figwheel.client.heads_up.clear.call(null);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(28),inst_34039);
} else {
if((state_val_34080 === (34))){
var inst_34060 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(37),inst_34060);
} else {
if((state_val_34080 === (17))){
var inst_34019 = (state_34079[(2)]);
var inst_34020 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34021 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34020);
var state_34079__$1 = (function (){var statearr_34102 = state_34079;
(statearr_34102[(12)] = inst_34019);

return statearr_34102;
})();
var statearr_34103_34145 = state_34079__$1;
(statearr_34103_34145[(2)] = inst_34021);

(statearr_34103_34145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (3))){
var inst_34011 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34079__$1 = state_34079;
if(inst_34011){
var statearr_34104_34146 = state_34079__$1;
(statearr_34104_34146[(1)] = (13));

} else {
var statearr_34105_34147 = state_34079__$1;
(statearr_34105_34147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (12))){
var inst_34007 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34106_34148 = state_34079__$1;
(statearr_34106_34148[(2)] = inst_34007);

(statearr_34106_34148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (2))){
var inst_33994 = (state_34079[(10)]);
var inst_33994__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34079__$1 = (function (){var statearr_34107 = state_34079;
(statearr_34107[(10)] = inst_33994__$1);

return statearr_34107;
})();
if(cljs.core.truth_(inst_33994__$1)){
var statearr_34108_34149 = state_34079__$1;
(statearr_34108_34149[(1)] = (5));

} else {
var statearr_34109_34150 = state_34079__$1;
(statearr_34109_34150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (23))){
var inst_34037 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34079__$1 = state_34079;
if(inst_34037){
var statearr_34110_34151 = state_34079__$1;
(statearr_34110_34151[(1)] = (25));

} else {
var statearr_34111_34152 = state_34079__$1;
(statearr_34111_34152[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (35))){
var state_34079__$1 = state_34079;
var statearr_34112_34153 = state_34079__$1;
(statearr_34112_34153[(2)] = null);

(statearr_34112_34153[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (19))){
var inst_34032 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34079__$1 = state_34079;
if(inst_34032){
var statearr_34113_34154 = state_34079__$1;
(statearr_34113_34154[(1)] = (22));

} else {
var statearr_34114_34155 = state_34079__$1;
(statearr_34114_34155[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (11))){
var inst_34003 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34115_34156 = state_34079__$1;
(statearr_34115_34156[(2)] = inst_34003);

(statearr_34115_34156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (9))){
var inst_34005 = figwheel.client.heads_up.clear.call(null);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(12),inst_34005);
} else {
if((state_val_34080 === (5))){
var inst_33996 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34079__$1 = state_34079;
var statearr_34116_34157 = state_34079__$1;
(statearr_34116_34157[(2)] = inst_33996);

(statearr_34116_34157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (14))){
var inst_34023 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34079__$1 = state_34079;
if(inst_34023){
var statearr_34117_34158 = state_34079__$1;
(statearr_34117_34158[(1)] = (18));

} else {
var statearr_34118_34159 = state_34079__$1;
(statearr_34118_34159[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (26))){
var inst_34049 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34079__$1 = state_34079;
if(inst_34049){
var statearr_34119_34160 = state_34079__$1;
(statearr_34119_34160[(1)] = (30));

} else {
var statearr_34120_34161 = state_34079__$1;
(statearr_34120_34161[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (16))){
var inst_34015 = (state_34079[(2)]);
var inst_34016 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34017 = figwheel.client.heads_up.display_exception.call(null,inst_34016);
var state_34079__$1 = (function (){var statearr_34121 = state_34079;
(statearr_34121[(13)] = inst_34015);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(17),inst_34017);
} else {
if((state_val_34080 === (30))){
var inst_34051 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34052 = figwheel.client.heads_up.display_warning.call(null,inst_34051);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(33),inst_34052);
} else {
if((state_val_34080 === (10))){
var inst_34009 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34122_34162 = state_34079__$1;
(statearr_34122_34162[(2)] = inst_34009);

(statearr_34122_34162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (18))){
var inst_34025 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34026 = figwheel.client.heads_up.display_exception.call(null,inst_34025);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(21),inst_34026);
} else {
if((state_val_34080 === (37))){
var inst_34062 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34123_34163 = state_34079__$1;
(statearr_34123_34163[(2)] = inst_34062);

(statearr_34123_34163[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (8))){
var inst_34001 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(11),inst_34001);
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
});})(c__29960__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29865__auto__,c__29960__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto____0 = (function (){
var statearr_34124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34124[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto__);

(statearr_34124[(1)] = (1));

return statearr_34124;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto____1 = (function (state_34079){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_34079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e34125){if((e34125 instanceof Object)){
var ex__29869__auto__ = e34125;
var statearr_34126_34164 = state_34079;
(statearr_34126_34164[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34165 = state_34079;
state_34079 = G__34165;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto__ = function(state_34079){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto____1.call(this,state_34079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__,msg_hist,msg_names,msg))
})();
var state__29962__auto__ = (function (){var statearr_34127 = f__29961__auto__.call(null);
(statearr_34127[(6)] = c__29960__auto__);

return statearr_34127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__,msg_hist,msg_names,msg))
);

return c__29960__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29960__auto___34194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___34194,ch){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___34194,ch){
return (function (state_34180){
var state_val_34181 = (state_34180[(1)]);
if((state_val_34181 === (1))){
var state_34180__$1 = state_34180;
var statearr_34182_34195 = state_34180__$1;
(statearr_34182_34195[(2)] = null);

(statearr_34182_34195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (2))){
var state_34180__$1 = state_34180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34180__$1,(4),ch);
} else {
if((state_val_34181 === (3))){
var inst_34178 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34180__$1,inst_34178);
} else {
if((state_val_34181 === (4))){
var inst_34168 = (state_34180[(7)]);
var inst_34168__$1 = (state_34180[(2)]);
var state_34180__$1 = (function (){var statearr_34183 = state_34180;
(statearr_34183[(7)] = inst_34168__$1);

return statearr_34183;
})();
if(cljs.core.truth_(inst_34168__$1)){
var statearr_34184_34196 = state_34180__$1;
(statearr_34184_34196[(1)] = (5));

} else {
var statearr_34185_34197 = state_34180__$1;
(statearr_34185_34197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (5))){
var inst_34168 = (state_34180[(7)]);
var inst_34170 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34168);
var state_34180__$1 = state_34180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34180__$1,(8),inst_34170);
} else {
if((state_val_34181 === (6))){
var state_34180__$1 = state_34180;
var statearr_34186_34198 = state_34180__$1;
(statearr_34186_34198[(2)] = null);

(statearr_34186_34198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (7))){
var inst_34176 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
var statearr_34187_34199 = state_34180__$1;
(statearr_34187_34199[(2)] = inst_34176);

(statearr_34187_34199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (8))){
var inst_34172 = (state_34180[(2)]);
var state_34180__$1 = (function (){var statearr_34188 = state_34180;
(statearr_34188[(8)] = inst_34172);

return statearr_34188;
})();
var statearr_34189_34200 = state_34180__$1;
(statearr_34189_34200[(2)] = null);

(statearr_34189_34200[(1)] = (2));


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
});})(c__29960__auto___34194,ch))
;
return ((function (switch__29865__auto__,c__29960__auto___34194,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29866__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29866__auto____0 = (function (){
var statearr_34190 = [null,null,null,null,null,null,null,null,null];
(statearr_34190[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29866__auto__);

(statearr_34190[(1)] = (1));

return statearr_34190;
});
var figwheel$client$heads_up_plugin_$_state_machine__29866__auto____1 = (function (state_34180){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_34180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e34191){if((e34191 instanceof Object)){
var ex__29869__auto__ = e34191;
var statearr_34192_34201 = state_34180;
(statearr_34192_34201[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34202 = state_34180;
state_34180 = G__34202;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29866__auto__ = function(state_34180){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29866__auto____1.call(this,state_34180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29866__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29866__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___34194,ch))
})();
var state__29962__auto__ = (function (){var statearr_34193 = f__29961__auto__.call(null);
(statearr_34193[(6)] = c__29960__auto___34194);

return statearr_34193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___34194,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__){
return (function (state_34208){
var state_val_34209 = (state_34208[(1)]);
if((state_val_34209 === (1))){
var inst_34203 = cljs.core.async.timeout.call(null,(3000));
var state_34208__$1 = state_34208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34208__$1,(2),inst_34203);
} else {
if((state_val_34209 === (2))){
var inst_34205 = (state_34208[(2)]);
var inst_34206 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34208__$1 = (function (){var statearr_34210 = state_34208;
(statearr_34210[(7)] = inst_34205);

return statearr_34210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34208__$1,inst_34206);
} else {
return null;
}
}
});})(c__29960__auto__))
;
return ((function (switch__29865__auto__,c__29960__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29866__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29866__auto____0 = (function (){
var statearr_34211 = [null,null,null,null,null,null,null,null];
(statearr_34211[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29866__auto__);

(statearr_34211[(1)] = (1));

return statearr_34211;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29866__auto____1 = (function (state_34208){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_34208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e34212){if((e34212 instanceof Object)){
var ex__29869__auto__ = e34212;
var statearr_34213_34215 = state_34208;
(statearr_34213_34215[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34216 = state_34208;
state_34208 = G__34216;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29866__auto__ = function(state_34208){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29866__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29866__auto____1.call(this,state_34208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29866__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29866__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__))
})();
var state__29962__auto__ = (function (){var statearr_34214 = f__29961__auto__.call(null);
(statearr_34214[(6)] = c__29960__auto__);

return statearr_34214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__))
);

return c__29960__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__,figwheel_version,temp__5735__auto__){
return (function (state_34223){
var state_val_34224 = (state_34223[(1)]);
if((state_val_34224 === (1))){
var inst_34217 = cljs.core.async.timeout.call(null,(2000));
var state_34223__$1 = state_34223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34223__$1,(2),inst_34217);
} else {
if((state_val_34224 === (2))){
var inst_34219 = (state_34223[(2)]);
var inst_34220 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34221 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34220);
var state_34223__$1 = (function (){var statearr_34225 = state_34223;
(statearr_34225[(7)] = inst_34219);

return statearr_34225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34223__$1,inst_34221);
} else {
return null;
}
}
});})(c__29960__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__29865__auto__,c__29960__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto____0 = (function (){
var statearr_34226 = [null,null,null,null,null,null,null,null];
(statearr_34226[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto__);

(statearr_34226[(1)] = (1));

return statearr_34226;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto____1 = (function (state_34223){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_34223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e34227){if((e34227 instanceof Object)){
var ex__29869__auto__ = e34227;
var statearr_34228_34230 = state_34223;
(statearr_34228_34230[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34231 = state_34223;
state_34223 = G__34231;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto__ = function(state_34223){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto____1.call(this,state_34223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__,figwheel_version,temp__5735__auto__))
})();
var state__29962__auto__ = (function (){var statearr_34229 = f__29961__auto__.call(null);
(statearr_34229[(6)] = c__29960__auto__);

return statearr_34229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__,figwheel_version,temp__5735__auto__))
);

return c__29960__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34232){
var map__34233 = p__34232;
var map__34233__$1 = (((((!((map__34233 == null))))?(((((map__34233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34233):map__34233);
var file = cljs.core.get.call(null,map__34233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34233__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34233__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34235 = "";
var G__34235__$1 = (cljs.core.truth_(file)?[G__34235,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34235);
var G__34235__$2 = (cljs.core.truth_(line)?[G__34235__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34235__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__34235__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34235__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34236){
var map__34237 = p__34236;
var map__34237__$1 = (((((!((map__34237 == null))))?(((((map__34237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34237):map__34237);
var ed = map__34237__$1;
var exception_data = cljs.core.get.call(null,map__34237__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34237__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_34240 = (function (){var G__34239 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34239)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__34239;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_34240);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34241){
var map__34242 = p__34241;
var map__34242__$1 = (((((!((map__34242 == null))))?(((((map__34242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34242):map__34242);
var w = map__34242__$1;
var message = cljs.core.get.call(null,map__34242__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34244 = cljs.core.seq.call(null,plugins);
var chunk__34245 = null;
var count__34246 = (0);
var i__34247 = (0);
while(true){
if((i__34247 < count__34246)){
var vec__34254 = cljs.core._nth.call(null,chunk__34245,i__34247);
var k = cljs.core.nth.call(null,vec__34254,(0),null);
var plugin = cljs.core.nth.call(null,vec__34254,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34260 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34244,chunk__34245,count__34246,i__34247,pl_34260,vec__34254,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34260.call(null,msg_hist);
});})(seq__34244,chunk__34245,count__34246,i__34247,pl_34260,vec__34254,k,plugin))
);
} else {
}


var G__34261 = seq__34244;
var G__34262 = chunk__34245;
var G__34263 = count__34246;
var G__34264 = (i__34247 + (1));
seq__34244 = G__34261;
chunk__34245 = G__34262;
count__34246 = G__34263;
i__34247 = G__34264;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34244);
if(temp__5735__auto__){
var seq__34244__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34244__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34244__$1);
var G__34265 = cljs.core.chunk_rest.call(null,seq__34244__$1);
var G__34266 = c__4550__auto__;
var G__34267 = cljs.core.count.call(null,c__4550__auto__);
var G__34268 = (0);
seq__34244 = G__34265;
chunk__34245 = G__34266;
count__34246 = G__34267;
i__34247 = G__34268;
continue;
} else {
var vec__34257 = cljs.core.first.call(null,seq__34244__$1);
var k = cljs.core.nth.call(null,vec__34257,(0),null);
var plugin = cljs.core.nth.call(null,vec__34257,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34269 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34244,chunk__34245,count__34246,i__34247,pl_34269,vec__34257,k,plugin,seq__34244__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34269.call(null,msg_hist);
});})(seq__34244,chunk__34245,count__34246,i__34247,pl_34269,vec__34257,k,plugin,seq__34244__$1,temp__5735__auto__))
);
} else {
}


var G__34270 = cljs.core.next.call(null,seq__34244__$1);
var G__34271 = null;
var G__34272 = (0);
var G__34273 = (0);
seq__34244 = G__34270;
chunk__34245 = G__34271;
count__34246 = G__34272;
i__34247 = G__34273;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34275 = arguments.length;
switch (G__34275) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34276_34281 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34277_34282 = null;
var count__34278_34283 = (0);
var i__34279_34284 = (0);
while(true){
if((i__34279_34284 < count__34278_34283)){
var msg_34285 = cljs.core._nth.call(null,chunk__34277_34282,i__34279_34284);
figwheel.client.socket.handle_incoming_message.call(null,msg_34285);


var G__34286 = seq__34276_34281;
var G__34287 = chunk__34277_34282;
var G__34288 = count__34278_34283;
var G__34289 = (i__34279_34284 + (1));
seq__34276_34281 = G__34286;
chunk__34277_34282 = G__34287;
count__34278_34283 = G__34288;
i__34279_34284 = G__34289;
continue;
} else {
var temp__5735__auto___34290 = cljs.core.seq.call(null,seq__34276_34281);
if(temp__5735__auto___34290){
var seq__34276_34291__$1 = temp__5735__auto___34290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34276_34291__$1)){
var c__4550__auto___34292 = cljs.core.chunk_first.call(null,seq__34276_34291__$1);
var G__34293 = cljs.core.chunk_rest.call(null,seq__34276_34291__$1);
var G__34294 = c__4550__auto___34292;
var G__34295 = cljs.core.count.call(null,c__4550__auto___34292);
var G__34296 = (0);
seq__34276_34281 = G__34293;
chunk__34277_34282 = G__34294;
count__34278_34283 = G__34295;
i__34279_34284 = G__34296;
continue;
} else {
var msg_34297 = cljs.core.first.call(null,seq__34276_34291__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34297);


var G__34298 = cljs.core.next.call(null,seq__34276_34291__$1);
var G__34299 = null;
var G__34300 = (0);
var G__34301 = (0);
seq__34276_34281 = G__34298;
chunk__34277_34282 = G__34299;
count__34278_34283 = G__34300;
i__34279_34284 = G__34301;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34306 = arguments.length;
var i__4731__auto___34307 = (0);
while(true){
if((i__4731__auto___34307 < len__4730__auto___34306)){
args__4736__auto__.push((arguments[i__4731__auto___34307]));

var G__34308 = (i__4731__auto___34307 + (1));
i__4731__auto___34307 = G__34308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34303){
var map__34304 = p__34303;
var map__34304__$1 = (((((!((map__34304 == null))))?(((((map__34304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34304):map__34304);
var opts = map__34304__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34302){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34302));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34309){if((e34309 instanceof Error)){
var e = e34309;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34309;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34310){
var map__34311 = p__34310;
var map__34311__$1 = (((((!((map__34311 == null))))?(((((map__34311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34311):map__34311);
var msg_name = cljs.core.get.call(null,map__34311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1560468656171
