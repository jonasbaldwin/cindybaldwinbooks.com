// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31967_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31967_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31968 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31969 = null;
var count__31970 = (0);
var i__31971 = (0);
while(true){
if((i__31971 < count__31970)){
var n = cljs.core._nth.call(null,chunk__31969,i__31971);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31972 = seq__31968;
var G__31973 = chunk__31969;
var G__31974 = count__31970;
var G__31975 = (i__31971 + (1));
seq__31968 = G__31972;
chunk__31969 = G__31973;
count__31970 = G__31974;
i__31971 = G__31975;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31968);
if(temp__5735__auto__){
var seq__31968__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31968__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31968__$1);
var G__31976 = cljs.core.chunk_rest.call(null,seq__31968__$1);
var G__31977 = c__4550__auto__;
var G__31978 = cljs.core.count.call(null,c__4550__auto__);
var G__31979 = (0);
seq__31968 = G__31976;
chunk__31969 = G__31977;
count__31970 = G__31978;
i__31971 = G__31979;
continue;
} else {
var n = cljs.core.first.call(null,seq__31968__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31980 = cljs.core.next.call(null,seq__31968__$1);
var G__31981 = null;
var G__31982 = (0);
var G__31983 = (0);
seq__31968 = G__31980;
chunk__31969 = G__31981;
count__31970 = G__31982;
i__31971 = G__31983;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31984){
var vec__31985 = p__31984;
var _ = cljs.core.nth.call(null,vec__31985,(0),null);
var v = cljs.core.nth.call(null,vec__31985,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__31988){
var vec__31989 = p__31988;
var k = cljs.core.nth.call(null,vec__31989,(0),null);
var v = cljs.core.nth.call(null,vec__31989,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32001_32009 = cljs.core.seq.call(null,deps);
var chunk__32002_32010 = null;
var count__32003_32011 = (0);
var i__32004_32012 = (0);
while(true){
if((i__32004_32012 < count__32003_32011)){
var dep_32013 = cljs.core._nth.call(null,chunk__32002_32010,i__32004_32012);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_32013;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32013));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32013,(depth + (1)),state);
} else {
}


var G__32014 = seq__32001_32009;
var G__32015 = chunk__32002_32010;
var G__32016 = count__32003_32011;
var G__32017 = (i__32004_32012 + (1));
seq__32001_32009 = G__32014;
chunk__32002_32010 = G__32015;
count__32003_32011 = G__32016;
i__32004_32012 = G__32017;
continue;
} else {
var temp__5735__auto___32018 = cljs.core.seq.call(null,seq__32001_32009);
if(temp__5735__auto___32018){
var seq__32001_32019__$1 = temp__5735__auto___32018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32001_32019__$1)){
var c__4550__auto___32020 = cljs.core.chunk_first.call(null,seq__32001_32019__$1);
var G__32021 = cljs.core.chunk_rest.call(null,seq__32001_32019__$1);
var G__32022 = c__4550__auto___32020;
var G__32023 = cljs.core.count.call(null,c__4550__auto___32020);
var G__32024 = (0);
seq__32001_32009 = G__32021;
chunk__32002_32010 = G__32022;
count__32003_32011 = G__32023;
i__32004_32012 = G__32024;
continue;
} else {
var dep_32025 = cljs.core.first.call(null,seq__32001_32019__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_32025;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32025));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32025,(depth + (1)),state);
} else {
}


var G__32026 = cljs.core.next.call(null,seq__32001_32019__$1);
var G__32027 = null;
var G__32028 = (0);
var G__32029 = (0);
seq__32001_32009 = G__32026;
chunk__32002_32010 = G__32027;
count__32003_32011 = G__32028;
i__32004_32012 = G__32029;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32005){
var vec__32006 = p__32005;
var seq__32007 = cljs.core.seq.call(null,vec__32006);
var first__32008 = cljs.core.first.call(null,seq__32007);
var seq__32007__$1 = cljs.core.next.call(null,seq__32007);
var x = first__32008;
var xs = seq__32007__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32006,seq__32007,first__32008,seq__32007__$1,x,xs,get_deps__$1){
return (function (p1__31992_SHARP_){
return clojure.set.difference.call(null,p1__31992_SHARP_,x);
});})(vec__32006,seq__32007,first__32008,seq__32007__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32030 = cljs.core.seq.call(null,provides);
var chunk__32031 = null;
var count__32032 = (0);
var i__32033 = (0);
while(true){
if((i__32033 < count__32032)){
var prov = cljs.core._nth.call(null,chunk__32031,i__32033);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32042_32050 = cljs.core.seq.call(null,requires);
var chunk__32043_32051 = null;
var count__32044_32052 = (0);
var i__32045_32053 = (0);
while(true){
if((i__32045_32053 < count__32044_32052)){
var req_32054 = cljs.core._nth.call(null,chunk__32043_32051,i__32045_32053);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32054,prov);


var G__32055 = seq__32042_32050;
var G__32056 = chunk__32043_32051;
var G__32057 = count__32044_32052;
var G__32058 = (i__32045_32053 + (1));
seq__32042_32050 = G__32055;
chunk__32043_32051 = G__32056;
count__32044_32052 = G__32057;
i__32045_32053 = G__32058;
continue;
} else {
var temp__5735__auto___32059 = cljs.core.seq.call(null,seq__32042_32050);
if(temp__5735__auto___32059){
var seq__32042_32060__$1 = temp__5735__auto___32059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32042_32060__$1)){
var c__4550__auto___32061 = cljs.core.chunk_first.call(null,seq__32042_32060__$1);
var G__32062 = cljs.core.chunk_rest.call(null,seq__32042_32060__$1);
var G__32063 = c__4550__auto___32061;
var G__32064 = cljs.core.count.call(null,c__4550__auto___32061);
var G__32065 = (0);
seq__32042_32050 = G__32062;
chunk__32043_32051 = G__32063;
count__32044_32052 = G__32064;
i__32045_32053 = G__32065;
continue;
} else {
var req_32066 = cljs.core.first.call(null,seq__32042_32060__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32066,prov);


var G__32067 = cljs.core.next.call(null,seq__32042_32060__$1);
var G__32068 = null;
var G__32069 = (0);
var G__32070 = (0);
seq__32042_32050 = G__32067;
chunk__32043_32051 = G__32068;
count__32044_32052 = G__32069;
i__32045_32053 = G__32070;
continue;
}
} else {
}
}
break;
}


var G__32071 = seq__32030;
var G__32072 = chunk__32031;
var G__32073 = count__32032;
var G__32074 = (i__32033 + (1));
seq__32030 = G__32071;
chunk__32031 = G__32072;
count__32032 = G__32073;
i__32033 = G__32074;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32030);
if(temp__5735__auto__){
var seq__32030__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32030__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32030__$1);
var G__32075 = cljs.core.chunk_rest.call(null,seq__32030__$1);
var G__32076 = c__4550__auto__;
var G__32077 = cljs.core.count.call(null,c__4550__auto__);
var G__32078 = (0);
seq__32030 = G__32075;
chunk__32031 = G__32076;
count__32032 = G__32077;
i__32033 = G__32078;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32030__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32046_32079 = cljs.core.seq.call(null,requires);
var chunk__32047_32080 = null;
var count__32048_32081 = (0);
var i__32049_32082 = (0);
while(true){
if((i__32049_32082 < count__32048_32081)){
var req_32083 = cljs.core._nth.call(null,chunk__32047_32080,i__32049_32082);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32083,prov);


var G__32084 = seq__32046_32079;
var G__32085 = chunk__32047_32080;
var G__32086 = count__32048_32081;
var G__32087 = (i__32049_32082 + (1));
seq__32046_32079 = G__32084;
chunk__32047_32080 = G__32085;
count__32048_32081 = G__32086;
i__32049_32082 = G__32087;
continue;
} else {
var temp__5735__auto___32088__$1 = cljs.core.seq.call(null,seq__32046_32079);
if(temp__5735__auto___32088__$1){
var seq__32046_32089__$1 = temp__5735__auto___32088__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32046_32089__$1)){
var c__4550__auto___32090 = cljs.core.chunk_first.call(null,seq__32046_32089__$1);
var G__32091 = cljs.core.chunk_rest.call(null,seq__32046_32089__$1);
var G__32092 = c__4550__auto___32090;
var G__32093 = cljs.core.count.call(null,c__4550__auto___32090);
var G__32094 = (0);
seq__32046_32079 = G__32091;
chunk__32047_32080 = G__32092;
count__32048_32081 = G__32093;
i__32049_32082 = G__32094;
continue;
} else {
var req_32095 = cljs.core.first.call(null,seq__32046_32089__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32095,prov);


var G__32096 = cljs.core.next.call(null,seq__32046_32089__$1);
var G__32097 = null;
var G__32098 = (0);
var G__32099 = (0);
seq__32046_32079 = G__32096;
chunk__32047_32080 = G__32097;
count__32048_32081 = G__32098;
i__32049_32082 = G__32099;
continue;
}
} else {
}
}
break;
}


var G__32100 = cljs.core.next.call(null,seq__32030__$1);
var G__32101 = null;
var G__32102 = (0);
var G__32103 = (0);
seq__32030 = G__32100;
chunk__32031 = G__32101;
count__32032 = G__32102;
i__32033 = G__32103;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32104_32108 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32105_32109 = null;
var count__32106_32110 = (0);
var i__32107_32111 = (0);
while(true){
if((i__32107_32111 < count__32106_32110)){
var ns_32112 = cljs.core._nth.call(null,chunk__32105_32109,i__32107_32111);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32112);


var G__32113 = seq__32104_32108;
var G__32114 = chunk__32105_32109;
var G__32115 = count__32106_32110;
var G__32116 = (i__32107_32111 + (1));
seq__32104_32108 = G__32113;
chunk__32105_32109 = G__32114;
count__32106_32110 = G__32115;
i__32107_32111 = G__32116;
continue;
} else {
var temp__5735__auto___32117 = cljs.core.seq.call(null,seq__32104_32108);
if(temp__5735__auto___32117){
var seq__32104_32118__$1 = temp__5735__auto___32117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32104_32118__$1)){
var c__4550__auto___32119 = cljs.core.chunk_first.call(null,seq__32104_32118__$1);
var G__32120 = cljs.core.chunk_rest.call(null,seq__32104_32118__$1);
var G__32121 = c__4550__auto___32119;
var G__32122 = cljs.core.count.call(null,c__4550__auto___32119);
var G__32123 = (0);
seq__32104_32108 = G__32120;
chunk__32105_32109 = G__32121;
count__32106_32110 = G__32122;
i__32107_32111 = G__32123;
continue;
} else {
var ns_32124 = cljs.core.first.call(null,seq__32104_32118__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32124);


var G__32125 = cljs.core.next.call(null,seq__32104_32118__$1);
var G__32126 = null;
var G__32127 = (0);
var G__32128 = (0);
seq__32104_32108 = G__32125;
chunk__32105_32109 = G__32126;
count__32106_32110 = G__32127;
i__32107_32111 = G__32128;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32129__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32130__i = 0, G__32130__a = new Array(arguments.length -  0);
while (G__32130__i < G__32130__a.length) {G__32130__a[G__32130__i] = arguments[G__32130__i + 0]; ++G__32130__i;}
  args = new cljs.core.IndexedSeq(G__32130__a,0,null);
} 
return G__32129__delegate.call(this,args);};
G__32129.cljs$lang$maxFixedArity = 0;
G__32129.cljs$lang$applyTo = (function (arglist__32131){
var args = cljs.core.seq(arglist__32131);
return G__32129__delegate(args);
});
G__32129.cljs$core$IFn$_invoke$arity$variadic = G__32129__delegate;
return G__32129;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32132_SHARP_,p2__32133_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32132_SHARP_)),p2__32133_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32134_SHARP_,p2__32135_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32134_SHARP_),p2__32135_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32136 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32136.addCallback(((function (G__32136){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32136))
);

G__32136.addErrback(((function (G__32136){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32136))
);

return G__32136;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32137){if((e32137 instanceof Error)){
var e = e32137;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32137;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32138){if((e32138 instanceof Error)){
var e = e32138;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32138;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32139 = cljs.core._EQ_;
var expr__32140 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32139.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32140))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32139.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32140))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32139.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32140))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32139,expr__32140){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32139,expr__32140))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32142,callback){
var map__32143 = p__32142;
var map__32143__$1 = (((((!((map__32143 == null))))?(((((map__32143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32143):map__32143);
var file_msg = map__32143__$1;
var request_url = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32143,map__32143__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32143,map__32143__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__){
return (function (state_32181){
var state_val_32182 = (state_32181[(1)]);
if((state_val_32182 === (7))){
var inst_32177 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
var statearr_32183_32209 = state_32181__$1;
(statearr_32183_32209[(2)] = inst_32177);

(statearr_32183_32209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (1))){
var state_32181__$1 = state_32181;
var statearr_32184_32210 = state_32181__$1;
(statearr_32184_32210[(2)] = null);

(statearr_32184_32210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (4))){
var inst_32147 = (state_32181[(7)]);
var inst_32147__$1 = (state_32181[(2)]);
var state_32181__$1 = (function (){var statearr_32185 = state_32181;
(statearr_32185[(7)] = inst_32147__$1);

return statearr_32185;
})();
if(cljs.core.truth_(inst_32147__$1)){
var statearr_32186_32211 = state_32181__$1;
(statearr_32186_32211[(1)] = (5));

} else {
var statearr_32187_32212 = state_32181__$1;
(statearr_32187_32212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (15))){
var inst_32160 = (state_32181[(8)]);
var inst_32162 = (state_32181[(9)]);
var inst_32164 = inst_32162.call(null,inst_32160);
var state_32181__$1 = state_32181;
var statearr_32188_32213 = state_32181__$1;
(statearr_32188_32213[(2)] = inst_32164);

(statearr_32188_32213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (13))){
var inst_32171 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
var statearr_32189_32214 = state_32181__$1;
(statearr_32189_32214[(2)] = inst_32171);

(statearr_32189_32214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (6))){
var state_32181__$1 = state_32181;
var statearr_32190_32215 = state_32181__$1;
(statearr_32190_32215[(2)] = null);

(statearr_32190_32215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (17))){
var inst_32168 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
var statearr_32191_32216 = state_32181__$1;
(statearr_32191_32216[(2)] = inst_32168);

(statearr_32191_32216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (3))){
var inst_32179 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32181__$1,inst_32179);
} else {
if((state_val_32182 === (12))){
var state_32181__$1 = state_32181;
var statearr_32192_32217 = state_32181__$1;
(statearr_32192_32217[(2)] = null);

(statearr_32192_32217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (2))){
var state_32181__$1 = state_32181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32181__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32182 === (11))){
var inst_32152 = (state_32181[(10)]);
var inst_32158 = figwheel.client.file_reloading.blocking_load.call(null,inst_32152);
var state_32181__$1 = state_32181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32181__$1,(14),inst_32158);
} else {
if((state_val_32182 === (9))){
var inst_32152 = (state_32181[(10)]);
var state_32181__$1 = state_32181;
if(cljs.core.truth_(inst_32152)){
var statearr_32193_32218 = state_32181__$1;
(statearr_32193_32218[(1)] = (11));

} else {
var statearr_32194_32219 = state_32181__$1;
(statearr_32194_32219[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (5))){
var inst_32153 = (state_32181[(11)]);
var inst_32147 = (state_32181[(7)]);
var inst_32152 = cljs.core.nth.call(null,inst_32147,(0),null);
var inst_32153__$1 = cljs.core.nth.call(null,inst_32147,(1),null);
var state_32181__$1 = (function (){var statearr_32195 = state_32181;
(statearr_32195[(11)] = inst_32153__$1);

(statearr_32195[(10)] = inst_32152);

return statearr_32195;
})();
if(cljs.core.truth_(inst_32153__$1)){
var statearr_32196_32220 = state_32181__$1;
(statearr_32196_32220[(1)] = (8));

} else {
var statearr_32197_32221 = state_32181__$1;
(statearr_32197_32221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (14))){
var inst_32152 = (state_32181[(10)]);
var inst_32162 = (state_32181[(9)]);
var inst_32160 = (state_32181[(2)]);
var inst_32161 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32162__$1 = cljs.core.get.call(null,inst_32161,inst_32152);
var state_32181__$1 = (function (){var statearr_32198 = state_32181;
(statearr_32198[(8)] = inst_32160);

(statearr_32198[(9)] = inst_32162__$1);

return statearr_32198;
})();
if(cljs.core.truth_(inst_32162__$1)){
var statearr_32199_32222 = state_32181__$1;
(statearr_32199_32222[(1)] = (15));

} else {
var statearr_32200_32223 = state_32181__$1;
(statearr_32200_32223[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (16))){
var inst_32160 = (state_32181[(8)]);
var inst_32166 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32160);
var state_32181__$1 = state_32181;
var statearr_32201_32224 = state_32181__$1;
(statearr_32201_32224[(2)] = inst_32166);

(statearr_32201_32224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (10))){
var inst_32173 = (state_32181[(2)]);
var state_32181__$1 = (function (){var statearr_32202 = state_32181;
(statearr_32202[(12)] = inst_32173);

return statearr_32202;
})();
var statearr_32203_32225 = state_32181__$1;
(statearr_32203_32225[(2)] = null);

(statearr_32203_32225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (8))){
var inst_32153 = (state_32181[(11)]);
var inst_32155 = eval(inst_32153);
var state_32181__$1 = state_32181;
var statearr_32204_32226 = state_32181__$1;
(statearr_32204_32226[(2)] = inst_32155);

(statearr_32204_32226[(1)] = (10));


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
});})(c__29960__auto__))
;
return ((function (switch__29865__auto__,c__29960__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29866__auto__ = null;
var figwheel$client$file_reloading$state_machine__29866__auto____0 = (function (){
var statearr_32205 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32205[(0)] = figwheel$client$file_reloading$state_machine__29866__auto__);

(statearr_32205[(1)] = (1));

return statearr_32205;
});
var figwheel$client$file_reloading$state_machine__29866__auto____1 = (function (state_32181){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_32181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e32206){if((e32206 instanceof Object)){
var ex__29869__auto__ = e32206;
var statearr_32207_32227 = state_32181;
(statearr_32207_32227[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32228 = state_32181;
state_32181 = G__32228;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29866__auto__ = function(state_32181){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29866__auto____1.call(this,state_32181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29866__auto____0;
figwheel$client$file_reloading$state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29866__auto____1;
return figwheel$client$file_reloading$state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__))
})();
var state__29962__auto__ = (function (){var statearr_32208 = f__29961__auto__.call(null);
(statearr_32208[(6)] = c__29960__auto__);

return statearr_32208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__))
);

return c__29960__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32230 = arguments.length;
switch (G__32230) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32232,callback){
var map__32233 = p__32232;
var map__32233__$1 = (((((!((map__32233 == null))))?(((((map__32233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32233):map__32233);
var file_msg = map__32233__$1;
var namespace = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32233,map__32233__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32233,map__32233__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32235){
var map__32236 = p__32235;
var map__32236__$1 = (((((!((map__32236 == null))))?(((((map__32236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);
var file_msg = map__32236__$1;
var namespace = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32238){
var map__32239 = p__32238;
var map__32239__$1 = (((((!((map__32239 == null))))?(((((map__32239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32239):map__32239);
var file_msg = map__32239__$1;
var namespace = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32241,callback){
var map__32242 = p__32241;
var map__32242__$1 = (((((!((map__32242 == null))))?(((((map__32242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32242):map__32242);
var file_msg = map__32242__$1;
var request_url = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29960__auto___32292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto___32292,out){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto___32292,out){
return (function (state_32277){
var state_val_32278 = (state_32277[(1)]);
if((state_val_32278 === (1))){
var inst_32251 = cljs.core.seq.call(null,files);
var inst_32252 = cljs.core.first.call(null,inst_32251);
var inst_32253 = cljs.core.next.call(null,inst_32251);
var inst_32254 = files;
var state_32277__$1 = (function (){var statearr_32279 = state_32277;
(statearr_32279[(7)] = inst_32253);

(statearr_32279[(8)] = inst_32252);

(statearr_32279[(9)] = inst_32254);

return statearr_32279;
})();
var statearr_32280_32293 = state_32277__$1;
(statearr_32280_32293[(2)] = null);

(statearr_32280_32293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32278 === (2))){
var inst_32260 = (state_32277[(10)]);
var inst_32254 = (state_32277[(9)]);
var inst_32259 = cljs.core.seq.call(null,inst_32254);
var inst_32260__$1 = cljs.core.first.call(null,inst_32259);
var inst_32261 = cljs.core.next.call(null,inst_32259);
var inst_32262 = (inst_32260__$1 == null);
var inst_32263 = cljs.core.not.call(null,inst_32262);
var state_32277__$1 = (function (){var statearr_32281 = state_32277;
(statearr_32281[(10)] = inst_32260__$1);

(statearr_32281[(11)] = inst_32261);

return statearr_32281;
})();
if(inst_32263){
var statearr_32282_32294 = state_32277__$1;
(statearr_32282_32294[(1)] = (4));

} else {
var statearr_32283_32295 = state_32277__$1;
(statearr_32283_32295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32278 === (3))){
var inst_32275 = (state_32277[(2)]);
var state_32277__$1 = state_32277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32277__$1,inst_32275);
} else {
if((state_val_32278 === (4))){
var inst_32260 = (state_32277[(10)]);
var inst_32265 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32260);
var state_32277__$1 = state_32277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32277__$1,(7),inst_32265);
} else {
if((state_val_32278 === (5))){
var inst_32271 = cljs.core.async.close_BANG_.call(null,out);
var state_32277__$1 = state_32277;
var statearr_32284_32296 = state_32277__$1;
(statearr_32284_32296[(2)] = inst_32271);

(statearr_32284_32296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32278 === (6))){
var inst_32273 = (state_32277[(2)]);
var state_32277__$1 = state_32277;
var statearr_32285_32297 = state_32277__$1;
(statearr_32285_32297[(2)] = inst_32273);

(statearr_32285_32297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32278 === (7))){
var inst_32261 = (state_32277[(11)]);
var inst_32267 = (state_32277[(2)]);
var inst_32268 = cljs.core.async.put_BANG_.call(null,out,inst_32267);
var inst_32254 = inst_32261;
var state_32277__$1 = (function (){var statearr_32286 = state_32277;
(statearr_32286[(12)] = inst_32268);

(statearr_32286[(9)] = inst_32254);

return statearr_32286;
})();
var statearr_32287_32298 = state_32277__$1;
(statearr_32287_32298[(2)] = null);

(statearr_32287_32298[(1)] = (2));


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
});})(c__29960__auto___32292,out))
;
return ((function (switch__29865__auto__,c__29960__auto___32292,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto____0 = (function (){
var statearr_32288 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32288[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto__);

(statearr_32288[(1)] = (1));

return statearr_32288;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto____1 = (function (state_32277){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_32277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e32289){if((e32289 instanceof Object)){
var ex__29869__auto__ = e32289;
var statearr_32290_32299 = state_32277;
(statearr_32290_32299[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32300 = state_32277;
state_32277 = G__32300;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto__ = function(state_32277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto____1.call(this,state_32277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto___32292,out))
})();
var state__29962__auto__ = (function (){var statearr_32291 = f__29961__auto__.call(null);
(statearr_32291[(6)] = c__29960__auto___32292);

return statearr_32291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto___32292,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32301,opts){
var map__32302 = p__32301;
var map__32302__$1 = (((((!((map__32302 == null))))?(((((map__32302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32302):map__32302);
var eval_body = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32304){var e = e32304;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32305_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32305_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32306){
var vec__32307 = p__32306;
var k = cljs.core.nth.call(null,vec__32307,(0),null);
var v = cljs.core.nth.call(null,vec__32307,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32310){
var vec__32311 = p__32310;
var k = cljs.core.nth.call(null,vec__32311,(0),null);
var v = cljs.core.nth.call(null,vec__32311,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32317,p__32318){
var map__32319 = p__32317;
var map__32319__$1 = (((((!((map__32319 == null))))?(((((map__32319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32319):map__32319);
var opts = map__32319__$1;
var before_jsload = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32320 = p__32318;
var map__32320__$1 = (((((!((map__32320 == null))))?(((((map__32320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32320):map__32320);
var msg = map__32320__$1;
var files = cljs.core.get.call(null,map__32320__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32320__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32320__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29961__auto__ = (function (){var switch__29865__auto__ = ((function (c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32474){
var state_val_32475 = (state_32474[(1)]);
if((state_val_32475 === (7))){
var inst_32337 = (state_32474[(7)]);
var inst_32335 = (state_32474[(8)]);
var inst_32336 = (state_32474[(9)]);
var inst_32334 = (state_32474[(10)]);
var inst_32342 = cljs.core._nth.call(null,inst_32335,inst_32337);
var inst_32343 = figwheel.client.file_reloading.eval_body.call(null,inst_32342,opts);
var inst_32344 = (inst_32337 + (1));
var tmp32476 = inst_32335;
var tmp32477 = inst_32336;
var tmp32478 = inst_32334;
var inst_32334__$1 = tmp32478;
var inst_32335__$1 = tmp32476;
var inst_32336__$1 = tmp32477;
var inst_32337__$1 = inst_32344;
var state_32474__$1 = (function (){var statearr_32479 = state_32474;
(statearr_32479[(7)] = inst_32337__$1);

(statearr_32479[(8)] = inst_32335__$1);

(statearr_32479[(11)] = inst_32343);

(statearr_32479[(9)] = inst_32336__$1);

(statearr_32479[(10)] = inst_32334__$1);

return statearr_32479;
})();
var statearr_32480_32563 = state_32474__$1;
(statearr_32480_32563[(2)] = null);

(statearr_32480_32563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (20))){
var inst_32377 = (state_32474[(12)]);
var inst_32385 = figwheel.client.file_reloading.sort_files.call(null,inst_32377);
var state_32474__$1 = state_32474;
var statearr_32481_32564 = state_32474__$1;
(statearr_32481_32564[(2)] = inst_32385);

(statearr_32481_32564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (27))){
var state_32474__$1 = state_32474;
var statearr_32482_32565 = state_32474__$1;
(statearr_32482_32565[(2)] = null);

(statearr_32482_32565[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (1))){
var inst_32326 = (state_32474[(13)]);
var inst_32323 = before_jsload.call(null,files);
var inst_32324 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32325 = (function (){return ((function (inst_32326,inst_32323,inst_32324,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32314_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32314_SHARP_);
});
;})(inst_32326,inst_32323,inst_32324,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32326__$1 = cljs.core.filter.call(null,inst_32325,files);
var inst_32327 = cljs.core.not_empty.call(null,inst_32326__$1);
var state_32474__$1 = (function (){var statearr_32483 = state_32474;
(statearr_32483[(13)] = inst_32326__$1);

(statearr_32483[(14)] = inst_32324);

(statearr_32483[(15)] = inst_32323);

return statearr_32483;
})();
if(cljs.core.truth_(inst_32327)){
var statearr_32484_32566 = state_32474__$1;
(statearr_32484_32566[(1)] = (2));

} else {
var statearr_32485_32567 = state_32474__$1;
(statearr_32485_32567[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (24))){
var state_32474__$1 = state_32474;
var statearr_32486_32568 = state_32474__$1;
(statearr_32486_32568[(2)] = null);

(statearr_32486_32568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (39))){
var inst_32427 = (state_32474[(16)]);
var state_32474__$1 = state_32474;
var statearr_32487_32569 = state_32474__$1;
(statearr_32487_32569[(2)] = inst_32427);

(statearr_32487_32569[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (46))){
var inst_32469 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32488_32570 = state_32474__$1;
(statearr_32488_32570[(2)] = inst_32469);

(statearr_32488_32570[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (4))){
var inst_32371 = (state_32474[(2)]);
var inst_32372 = cljs.core.List.EMPTY;
var inst_32373 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32372);
var inst_32374 = (function (){return ((function (inst_32371,inst_32372,inst_32373,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32315_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32315_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32315_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32315_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_32371,inst_32372,inst_32373,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32375 = cljs.core.filter.call(null,inst_32374,files);
var inst_32376 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32377 = cljs.core.concat.call(null,inst_32375,inst_32376);
var state_32474__$1 = (function (){var statearr_32489 = state_32474;
(statearr_32489[(17)] = inst_32373);

(statearr_32489[(12)] = inst_32377);

(statearr_32489[(18)] = inst_32371);

return statearr_32489;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32490_32571 = state_32474__$1;
(statearr_32490_32571[(1)] = (16));

} else {
var statearr_32491_32572 = state_32474__$1;
(statearr_32491_32572[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (15))){
var inst_32361 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32492_32573 = state_32474__$1;
(statearr_32492_32573[(2)] = inst_32361);

(statearr_32492_32573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (21))){
var inst_32387 = (state_32474[(19)]);
var inst_32387__$1 = (state_32474[(2)]);
var inst_32388 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32387__$1);
var state_32474__$1 = (function (){var statearr_32493 = state_32474;
(statearr_32493[(19)] = inst_32387__$1);

return statearr_32493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32474__$1,(22),inst_32388);
} else {
if((state_val_32475 === (31))){
var inst_32472 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32474__$1,inst_32472);
} else {
if((state_val_32475 === (32))){
var inst_32427 = (state_32474[(16)]);
var inst_32432 = inst_32427.cljs$lang$protocol_mask$partition0$;
var inst_32433 = (inst_32432 & (64));
var inst_32434 = inst_32427.cljs$core$ISeq$;
var inst_32435 = (cljs.core.PROTOCOL_SENTINEL === inst_32434);
var inst_32436 = ((inst_32433) || (inst_32435));
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32436)){
var statearr_32494_32574 = state_32474__$1;
(statearr_32494_32574[(1)] = (35));

} else {
var statearr_32495_32575 = state_32474__$1;
(statearr_32495_32575[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (40))){
var inst_32449 = (state_32474[(20)]);
var inst_32448 = (state_32474[(2)]);
var inst_32449__$1 = cljs.core.get.call(null,inst_32448,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32450 = cljs.core.get.call(null,inst_32448,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32451 = cljs.core.not_empty.call(null,inst_32449__$1);
var state_32474__$1 = (function (){var statearr_32496 = state_32474;
(statearr_32496[(20)] = inst_32449__$1);

(statearr_32496[(21)] = inst_32450);

return statearr_32496;
})();
if(cljs.core.truth_(inst_32451)){
var statearr_32497_32576 = state_32474__$1;
(statearr_32497_32576[(1)] = (41));

} else {
var statearr_32498_32577 = state_32474__$1;
(statearr_32498_32577[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (33))){
var state_32474__$1 = state_32474;
var statearr_32499_32578 = state_32474__$1;
(statearr_32499_32578[(2)] = false);

(statearr_32499_32578[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (13))){
var inst_32347 = (state_32474[(22)]);
var inst_32351 = cljs.core.chunk_first.call(null,inst_32347);
var inst_32352 = cljs.core.chunk_rest.call(null,inst_32347);
var inst_32353 = cljs.core.count.call(null,inst_32351);
var inst_32334 = inst_32352;
var inst_32335 = inst_32351;
var inst_32336 = inst_32353;
var inst_32337 = (0);
var state_32474__$1 = (function (){var statearr_32500 = state_32474;
(statearr_32500[(7)] = inst_32337);

(statearr_32500[(8)] = inst_32335);

(statearr_32500[(9)] = inst_32336);

(statearr_32500[(10)] = inst_32334);

return statearr_32500;
})();
var statearr_32501_32579 = state_32474__$1;
(statearr_32501_32579[(2)] = null);

(statearr_32501_32579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (22))){
var inst_32387 = (state_32474[(19)]);
var inst_32391 = (state_32474[(23)]);
var inst_32390 = (state_32474[(24)]);
var inst_32395 = (state_32474[(25)]);
var inst_32390__$1 = (state_32474[(2)]);
var inst_32391__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32390__$1);
var inst_32392 = (function (){var all_files = inst_32387;
var res_SINGLEQUOTE_ = inst_32390__$1;
var res = inst_32391__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32387,inst_32391,inst_32390,inst_32395,inst_32390__$1,inst_32391__$1,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32316_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32316_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32387,inst_32391,inst_32390,inst_32395,inst_32390__$1,inst_32391__$1,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32393 = cljs.core.filter.call(null,inst_32392,inst_32390__$1);
var inst_32394 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32395__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32394);
var inst_32396 = cljs.core.not_empty.call(null,inst_32395__$1);
var state_32474__$1 = (function (){var statearr_32502 = state_32474;
(statearr_32502[(26)] = inst_32393);

(statearr_32502[(23)] = inst_32391__$1);

(statearr_32502[(24)] = inst_32390__$1);

(statearr_32502[(25)] = inst_32395__$1);

return statearr_32502;
})();
if(cljs.core.truth_(inst_32396)){
var statearr_32503_32580 = state_32474__$1;
(statearr_32503_32580[(1)] = (23));

} else {
var statearr_32504_32581 = state_32474__$1;
(statearr_32504_32581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (36))){
var state_32474__$1 = state_32474;
var statearr_32505_32582 = state_32474__$1;
(statearr_32505_32582[(2)] = false);

(statearr_32505_32582[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (41))){
var inst_32449 = (state_32474[(20)]);
var inst_32453 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32454 = cljs.core.map.call(null,inst_32453,inst_32449);
var inst_32455 = cljs.core.pr_str.call(null,inst_32454);
var inst_32456 = ["figwheel-no-load meta-data: ",inst_32455].join('');
var inst_32457 = figwheel.client.utils.log.call(null,inst_32456);
var state_32474__$1 = state_32474;
var statearr_32506_32583 = state_32474__$1;
(statearr_32506_32583[(2)] = inst_32457);

(statearr_32506_32583[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (43))){
var inst_32450 = (state_32474[(21)]);
var inst_32460 = (state_32474[(2)]);
var inst_32461 = cljs.core.not_empty.call(null,inst_32450);
var state_32474__$1 = (function (){var statearr_32507 = state_32474;
(statearr_32507[(27)] = inst_32460);

return statearr_32507;
})();
if(cljs.core.truth_(inst_32461)){
var statearr_32508_32584 = state_32474__$1;
(statearr_32508_32584[(1)] = (44));

} else {
var statearr_32509_32585 = state_32474__$1;
(statearr_32509_32585[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (29))){
var inst_32387 = (state_32474[(19)]);
var inst_32393 = (state_32474[(26)]);
var inst_32391 = (state_32474[(23)]);
var inst_32390 = (state_32474[(24)]);
var inst_32427 = (state_32474[(16)]);
var inst_32395 = (state_32474[(25)]);
var inst_32423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32426 = (function (){var all_files = inst_32387;
var res_SINGLEQUOTE_ = inst_32390;
var res = inst_32391;
var files_not_loaded = inst_32393;
var dependencies_that_loaded = inst_32395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32387,inst_32393,inst_32391,inst_32390,inst_32427,inst_32395,inst_32423,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32425){
var map__32510 = p__32425;
var map__32510__$1 = (((((!((map__32510 == null))))?(((((map__32510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32510):map__32510);
var namespace = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32387,inst_32393,inst_32391,inst_32390,inst_32427,inst_32395,inst_32423,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32427__$1 = cljs.core.group_by.call(null,inst_32426,inst_32393);
var inst_32429 = (inst_32427__$1 == null);
var inst_32430 = cljs.core.not.call(null,inst_32429);
var state_32474__$1 = (function (){var statearr_32512 = state_32474;
(statearr_32512[(16)] = inst_32427__$1);

(statearr_32512[(28)] = inst_32423);

return statearr_32512;
})();
if(inst_32430){
var statearr_32513_32586 = state_32474__$1;
(statearr_32513_32586[(1)] = (32));

} else {
var statearr_32514_32587 = state_32474__$1;
(statearr_32514_32587[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (44))){
var inst_32450 = (state_32474[(21)]);
var inst_32463 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32450);
var inst_32464 = cljs.core.pr_str.call(null,inst_32463);
var inst_32465 = ["not required: ",inst_32464].join('');
var inst_32466 = figwheel.client.utils.log.call(null,inst_32465);
var state_32474__$1 = state_32474;
var statearr_32515_32588 = state_32474__$1;
(statearr_32515_32588[(2)] = inst_32466);

(statearr_32515_32588[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (6))){
var inst_32368 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32516_32589 = state_32474__$1;
(statearr_32516_32589[(2)] = inst_32368);

(statearr_32516_32589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (28))){
var inst_32393 = (state_32474[(26)]);
var inst_32420 = (state_32474[(2)]);
var inst_32421 = cljs.core.not_empty.call(null,inst_32393);
var state_32474__$1 = (function (){var statearr_32517 = state_32474;
(statearr_32517[(29)] = inst_32420);

return statearr_32517;
})();
if(cljs.core.truth_(inst_32421)){
var statearr_32518_32590 = state_32474__$1;
(statearr_32518_32590[(1)] = (29));

} else {
var statearr_32519_32591 = state_32474__$1;
(statearr_32519_32591[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (25))){
var inst_32391 = (state_32474[(23)]);
var inst_32407 = (state_32474[(2)]);
var inst_32408 = cljs.core.not_empty.call(null,inst_32391);
var state_32474__$1 = (function (){var statearr_32520 = state_32474;
(statearr_32520[(30)] = inst_32407);

return statearr_32520;
})();
if(cljs.core.truth_(inst_32408)){
var statearr_32521_32592 = state_32474__$1;
(statearr_32521_32592[(1)] = (26));

} else {
var statearr_32522_32593 = state_32474__$1;
(statearr_32522_32593[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (34))){
var inst_32443 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32443)){
var statearr_32523_32594 = state_32474__$1;
(statearr_32523_32594[(1)] = (38));

} else {
var statearr_32524_32595 = state_32474__$1;
(statearr_32524_32595[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (17))){
var state_32474__$1 = state_32474;
var statearr_32525_32596 = state_32474__$1;
(statearr_32525_32596[(2)] = recompile_dependents);

(statearr_32525_32596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (3))){
var state_32474__$1 = state_32474;
var statearr_32526_32597 = state_32474__$1;
(statearr_32526_32597[(2)] = null);

(statearr_32526_32597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (12))){
var inst_32364 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32527_32598 = state_32474__$1;
(statearr_32527_32598[(2)] = inst_32364);

(statearr_32527_32598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (2))){
var inst_32326 = (state_32474[(13)]);
var inst_32333 = cljs.core.seq.call(null,inst_32326);
var inst_32334 = inst_32333;
var inst_32335 = null;
var inst_32336 = (0);
var inst_32337 = (0);
var state_32474__$1 = (function (){var statearr_32528 = state_32474;
(statearr_32528[(7)] = inst_32337);

(statearr_32528[(8)] = inst_32335);

(statearr_32528[(9)] = inst_32336);

(statearr_32528[(10)] = inst_32334);

return statearr_32528;
})();
var statearr_32529_32599 = state_32474__$1;
(statearr_32529_32599[(2)] = null);

(statearr_32529_32599[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (23))){
var inst_32387 = (state_32474[(19)]);
var inst_32393 = (state_32474[(26)]);
var inst_32391 = (state_32474[(23)]);
var inst_32390 = (state_32474[(24)]);
var inst_32395 = (state_32474[(25)]);
var inst_32398 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32400 = (function (){var all_files = inst_32387;
var res_SINGLEQUOTE_ = inst_32390;
var res = inst_32391;
var files_not_loaded = inst_32393;
var dependencies_that_loaded = inst_32395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32387,inst_32393,inst_32391,inst_32390,inst_32395,inst_32398,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32399){
var map__32530 = p__32399;
var map__32530__$1 = (((((!((map__32530 == null))))?(((((map__32530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32530):map__32530);
var request_url = cljs.core.get.call(null,map__32530__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32387,inst_32393,inst_32391,inst_32390,inst_32395,inst_32398,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32401 = cljs.core.reverse.call(null,inst_32395);
var inst_32402 = cljs.core.map.call(null,inst_32400,inst_32401);
var inst_32403 = cljs.core.pr_str.call(null,inst_32402);
var inst_32404 = figwheel.client.utils.log.call(null,inst_32403);
var state_32474__$1 = (function (){var statearr_32532 = state_32474;
(statearr_32532[(31)] = inst_32398);

return statearr_32532;
})();
var statearr_32533_32600 = state_32474__$1;
(statearr_32533_32600[(2)] = inst_32404);

(statearr_32533_32600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (35))){
var state_32474__$1 = state_32474;
var statearr_32534_32601 = state_32474__$1;
(statearr_32534_32601[(2)] = true);

(statearr_32534_32601[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (19))){
var inst_32377 = (state_32474[(12)]);
var inst_32383 = figwheel.client.file_reloading.expand_files.call(null,inst_32377);
var state_32474__$1 = state_32474;
var statearr_32535_32602 = state_32474__$1;
(statearr_32535_32602[(2)] = inst_32383);

(statearr_32535_32602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (11))){
var state_32474__$1 = state_32474;
var statearr_32536_32603 = state_32474__$1;
(statearr_32536_32603[(2)] = null);

(statearr_32536_32603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (9))){
var inst_32366 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32537_32604 = state_32474__$1;
(statearr_32537_32604[(2)] = inst_32366);

(statearr_32537_32604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (5))){
var inst_32337 = (state_32474[(7)]);
var inst_32336 = (state_32474[(9)]);
var inst_32339 = (inst_32337 < inst_32336);
var inst_32340 = inst_32339;
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32340)){
var statearr_32538_32605 = state_32474__$1;
(statearr_32538_32605[(1)] = (7));

} else {
var statearr_32539_32606 = state_32474__$1;
(statearr_32539_32606[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (14))){
var inst_32347 = (state_32474[(22)]);
var inst_32356 = cljs.core.first.call(null,inst_32347);
var inst_32357 = figwheel.client.file_reloading.eval_body.call(null,inst_32356,opts);
var inst_32358 = cljs.core.next.call(null,inst_32347);
var inst_32334 = inst_32358;
var inst_32335 = null;
var inst_32336 = (0);
var inst_32337 = (0);
var state_32474__$1 = (function (){var statearr_32540 = state_32474;
(statearr_32540[(32)] = inst_32357);

(statearr_32540[(7)] = inst_32337);

(statearr_32540[(8)] = inst_32335);

(statearr_32540[(9)] = inst_32336);

(statearr_32540[(10)] = inst_32334);

return statearr_32540;
})();
var statearr_32541_32607 = state_32474__$1;
(statearr_32541_32607[(2)] = null);

(statearr_32541_32607[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (45))){
var state_32474__$1 = state_32474;
var statearr_32542_32608 = state_32474__$1;
(statearr_32542_32608[(2)] = null);

(statearr_32542_32608[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (26))){
var inst_32387 = (state_32474[(19)]);
var inst_32393 = (state_32474[(26)]);
var inst_32391 = (state_32474[(23)]);
var inst_32390 = (state_32474[(24)]);
var inst_32395 = (state_32474[(25)]);
var inst_32410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32412 = (function (){var all_files = inst_32387;
var res_SINGLEQUOTE_ = inst_32390;
var res = inst_32391;
var files_not_loaded = inst_32393;
var dependencies_that_loaded = inst_32395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32387,inst_32393,inst_32391,inst_32390,inst_32395,inst_32410,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32411){
var map__32543 = p__32411;
var map__32543__$1 = (((((!((map__32543 == null))))?(((((map__32543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32543):map__32543);
var namespace = cljs.core.get.call(null,map__32543__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32387,inst_32393,inst_32391,inst_32390,inst_32395,inst_32410,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32413 = cljs.core.map.call(null,inst_32412,inst_32391);
var inst_32414 = cljs.core.pr_str.call(null,inst_32413);
var inst_32415 = figwheel.client.utils.log.call(null,inst_32414);
var inst_32416 = (function (){var all_files = inst_32387;
var res_SINGLEQUOTE_ = inst_32390;
var res = inst_32391;
var files_not_loaded = inst_32393;
var dependencies_that_loaded = inst_32395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32387,inst_32393,inst_32391,inst_32390,inst_32395,inst_32410,inst_32412,inst_32413,inst_32414,inst_32415,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32387,inst_32393,inst_32391,inst_32390,inst_32395,inst_32410,inst_32412,inst_32413,inst_32414,inst_32415,state_val_32475,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32417 = setTimeout(inst_32416,(10));
var state_32474__$1 = (function (){var statearr_32545 = state_32474;
(statearr_32545[(33)] = inst_32415);

(statearr_32545[(34)] = inst_32410);

return statearr_32545;
})();
var statearr_32546_32609 = state_32474__$1;
(statearr_32546_32609[(2)] = inst_32417);

(statearr_32546_32609[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (16))){
var state_32474__$1 = state_32474;
var statearr_32547_32610 = state_32474__$1;
(statearr_32547_32610[(2)] = reload_dependents);

(statearr_32547_32610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (38))){
var inst_32427 = (state_32474[(16)]);
var inst_32445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32427);
var state_32474__$1 = state_32474;
var statearr_32548_32611 = state_32474__$1;
(statearr_32548_32611[(2)] = inst_32445);

(statearr_32548_32611[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (30))){
var state_32474__$1 = state_32474;
var statearr_32549_32612 = state_32474__$1;
(statearr_32549_32612[(2)] = null);

(statearr_32549_32612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (10))){
var inst_32347 = (state_32474[(22)]);
var inst_32349 = cljs.core.chunked_seq_QMARK_.call(null,inst_32347);
var state_32474__$1 = state_32474;
if(inst_32349){
var statearr_32550_32613 = state_32474__$1;
(statearr_32550_32613[(1)] = (13));

} else {
var statearr_32551_32614 = state_32474__$1;
(statearr_32551_32614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (18))){
var inst_32381 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32381)){
var statearr_32552_32615 = state_32474__$1;
(statearr_32552_32615[(1)] = (19));

} else {
var statearr_32553_32616 = state_32474__$1;
(statearr_32553_32616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (42))){
var state_32474__$1 = state_32474;
var statearr_32554_32617 = state_32474__$1;
(statearr_32554_32617[(2)] = null);

(statearr_32554_32617[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (37))){
var inst_32440 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32555_32618 = state_32474__$1;
(statearr_32555_32618[(2)] = inst_32440);

(statearr_32555_32618[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (8))){
var inst_32347 = (state_32474[(22)]);
var inst_32334 = (state_32474[(10)]);
var inst_32347__$1 = cljs.core.seq.call(null,inst_32334);
var state_32474__$1 = (function (){var statearr_32556 = state_32474;
(statearr_32556[(22)] = inst_32347__$1);

return statearr_32556;
})();
if(inst_32347__$1){
var statearr_32557_32619 = state_32474__$1;
(statearr_32557_32619[(1)] = (10));

} else {
var statearr_32558_32620 = state_32474__$1;
(statearr_32558_32620[(1)] = (11));

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
}
});})(c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29865__auto__,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto____0 = (function (){
var statearr_32559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32559[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto__);

(statearr_32559[(1)] = (1));

return statearr_32559;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto____1 = (function (state_32474){
while(true){
var ret_value__29867__auto__ = (function (){try{while(true){
var result__29868__auto__ = switch__29865__auto__.call(null,state_32474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29868__auto__;
}
break;
}
}catch (e32560){if((e32560 instanceof Object)){
var ex__29869__auto__ = e32560;
var statearr_32561_32621 = state_32474;
(statearr_32561_32621[(5)] = ex__29869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32622 = state_32474;
state_32474 = G__32622;
continue;
} else {
return ret_value__29867__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto__ = function(state_32474){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto____1.call(this,state_32474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29866__auto__;
})()
;})(switch__29865__auto__,c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29962__auto__ = (function (){var statearr_32562 = f__29961__auto__.call(null);
(statearr_32562[(6)] = c__29960__auto__);

return statearr_32562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29962__auto__);
});})(c__29960__auto__,map__32319,map__32319__$1,opts,before_jsload,on_jsload,reload_dependents,map__32320,map__32320__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29960__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32625,link){
var map__32626 = p__32625;
var map__32626__$1 = (((((!((map__32626 == null))))?(((((map__32626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32626):map__32626);
var file = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__32626,map__32626__$1,file){
return (function (p1__32623_SHARP_,p2__32624_SHARP_){
if(cljs.core._EQ_.call(null,p1__32623_SHARP_,p2__32624_SHARP_)){
return p1__32623_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__32626,map__32626__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32629){
var map__32630 = p__32629;
var map__32630__$1 = (((((!((map__32630 == null))))?(((((map__32630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32630):map__32630);
var match_length = cljs.core.get.call(null,map__32630__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32630__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32628_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32628_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32632_SHARP_,p2__32633_SHARP_){
return cljs.core.assoc.call(null,p1__32632_SHARP_,cljs.core.get.call(null,p2__32633_SHARP_,key),p2__32633_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32634 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32634);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32634);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32635,p__32636){
var map__32637 = p__32635;
var map__32637__$1 = (((((!((map__32637 == null))))?(((((map__32637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32637):map__32637);
var on_cssload = cljs.core.get.call(null,map__32637__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32638 = p__32636;
var map__32638__$1 = (((((!((map__32638 == null))))?(((((map__32638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32638):map__32638);
var files_msg = map__32638__$1;
var files = cljs.core.get.call(null,map__32638__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1560468654082
