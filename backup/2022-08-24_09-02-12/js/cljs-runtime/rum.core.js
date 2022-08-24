goog.provide('rum.core');
goog.scope(function(){
  rum.core.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return rum.core.goog$module$goog$object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__53519 = cljs.core.seq(props);
var chunk__53521 = null;
var count__53522 = (0);
var i__53523 = (0);
while(true){
if((i__53523 < count__53522)){
var vec__53531 = chunk__53521.cljs$core$IIndexed$_nth$arity$2(null,i__53523);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53531,(1),null);
if((!((v == null)))){
rum.core.goog$module$goog$object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__53684 = seq__53519;
var G__53685 = chunk__53521;
var G__53686 = count__53522;
var G__53687 = (i__53523 + (1));
seq__53519 = G__53684;
chunk__53521 = G__53685;
count__53522 = G__53686;
i__53523 = G__53687;
continue;
} else {
var G__53690 = seq__53519;
var G__53691 = chunk__53521;
var G__53692 = count__53522;
var G__53693 = (i__53523 + (1));
seq__53519 = G__53690;
chunk__53521 = G__53691;
count__53522 = G__53692;
i__53523 = G__53693;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53519);
if(temp__5753__auto__){
var seq__53519__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53519__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53519__$1);
var G__53696 = cljs.core.chunk_rest(seq__53519__$1);
var G__53697 = c__4679__auto__;
var G__53698 = cljs.core.count(c__4679__auto__);
var G__53699 = (0);
seq__53519 = G__53696;
chunk__53521 = G__53697;
count__53522 = G__53698;
i__53523 = G__53699;
continue;
} else {
var vec__53534 = cljs.core.first(seq__53519__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53534,(1),null);
if((!((v == null)))){
rum.core.goog$module$goog$object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__53700 = cljs.core.next(seq__53519__$1);
var G__53701 = null;
var G__53702 = (0);
var G__53703 = (0);
seq__53519 = G__53700;
chunk__53521 = G__53701;
count__53522 = G__53702;
i__53523 = G__53703;
continue;
} else {
var G__53704 = cljs.core.next(seq__53519__$1);
var G__53705 = null;
var G__53706 = (0);
var G__53707 = (0);
seq__53519 = G__53704;
chunk__53521 = G__53705;
count__53522 = G__53706;
i__53523 = G__53707;
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
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
if(goog.DEBUG){
var mixins_53709__$1 = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
if(clojure.set.subset_QMARK_(mixins_53709__$1,rum.specs.mixins)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)," declares invalid mixin keys ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(mixins_53709__$1,rum.specs.mixins)),", ","did you mean one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.specs.mixins)].join(''),"\n","(set/subset? mixins rum.specs/mixins)"].join('')));
}

cljs.core.run_BANG_((function (p1__53537_SHARP_){
return console.warn(p1__53537_SHARP_);
}),cljs.core.vals(cljs.core.select_keys(rum.specs.deprecated_mixins,mixins_53709__$1)));
} else {
}

var init = rum.util.collect(new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var before_render = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword("unsafe","will-mount","unsafe/will-mount",265089051),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53539_SHARP_,p2__53538_SHARP_){
return (p2__53538_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__53538_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__53539_SHARP_) : p2__53538_SHARP_.call(null,p1__53539_SHARP_));
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_remount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),new cljs.core.Keyword(null,"will-remount","will-remount",-141604325)], null),mixins);
var should_update = rum.util.collect(new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var before_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unsafe","will-update","unsafe/will-update",1505013232),new cljs.core.Keyword("unsafe","will-update","unsafe/will-update",1505013232),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect(new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect(new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect(new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
rum.core.goog$module$goog$object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rum.core.goog$module$goog$object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = rum.core.goog$module$goog$object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(before_render)){
} else {
rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),before_render));
}));
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
}));
}

rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,rum.core.goog$module$goog$object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53541_SHARP_,p2__53540_SHARP_){
return (p2__53540_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__53540_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__53541_SHARP_) : p2__53540_SHARP_.call(null,old_state,p1__53541_SHARP_));
}),state,will_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(rum.core.goog$module$goog$object.get(next_state,":rum/state"));
var or__4253__auto__ = cljs.core.some((function (p1__53542_SHARP_){
return (p1__53542_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__53542_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__53542_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_(before_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = rum.core.goog$module$goog$object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),before_update));
}));
}

rum.core.goog$module$goog$object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__53565 = (function (){var G__53568 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__53568) : wrapped_render.call(null,G__53568));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53565,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53565,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_(did_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),rum.core.goog$module$goog$object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
}));
}

rum.core.goog$module$goog$object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return rum.core.goog$module$goog$object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_(child_context)){
} else {
rum.core.goog$module$goog$object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__53543_SHARP_){
return (p1__53543_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53543_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__53543_SHARP_.call(null,state));
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_(prototype,class_props);

rum.core.goog$module$goog$object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
return ctr.apply(ctr,arguments);
});
var x53575_53742 = f;
(x53575_53742.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x53575_53742.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.meta((c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null)));
}));


return f;
});
/**
 * Wraps component construction in a way so that Google Closure Compiler
 * can properly recognize and elide unused components. The extra `set-meta`
 * fn is needed so that the compiler can properly detect that all functions
 * are side effect free.
 */
rum.core.lazy_build = (function rum$core$lazy_build(ctor,render,mixins,display_name){
var bf = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$3 ? ctor.cljs$core$IFn$_invoke$arity$3(render,mixins,display_name) : ctor.call(null,render,mixins,display_name));
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_(c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__53743__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__53743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53744__i = 0, G__53744__a = new Array(arguments.length -  0);
while (G__53744__i < G__53744__a.length) {G__53744__a[G__53744__i] = arguments[G__53744__i + 0]; ++G__53744__i;}
  args = new cljs.core.IndexedSeq(G__53744__a,0,null);
} 
return G__53743__delegate.call(this,args);};
G__53743.cljs$lang$maxFixedArity = 0;
G__53743.cljs$lang$applyTo = (function (arglist__53745){
var args = cljs.core.seq(arglist__53745);
return G__53743__delegate(args);
});
G__53743.cljs$core$IFn$_invoke$arity$variadic = G__53743__delegate;
return G__53743;
})()
:(function() { 
var G__53746__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__53746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53747__i = 0, G__53747__a = new Array(arguments.length -  0);
while (G__53747__i < G__53747__a.length) {G__53747__a[G__53747__i] = arguments[G__53747__i + 0]; ++G__53747__i;}
  args = new cljs.core.IndexedSeq(G__53747__a,0,null);
} 
return G__53746__delegate.call(this,args);};
G__53746.cljs$lang$maxFixedArity = 0;
G__53746.cljs$lang$applyTo = (function (arglist__53748){
var args = cljs.core.seq(arglist__53748);
return G__53746__delegate(args);
});
G__53746.cljs$core$IFn$_invoke$arity$variadic = G__53746__delegate;
return G__53746;
})()
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5755__auto__ = React.memo;
if((temp__5755__auto__ == null)){
return f;
} else {
var memo = temp__5755__auto__;
return (memo.cljs$core$IFn$_invoke$arity$2 ? memo.cljs$core$IFn$_invoke$arity$2(f,rum.core.memo_compare_props) : memo.call(null,f,rum.core.memo_compare_props));
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo(class$);
var ctor = (function() { 
var G__53779__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__53779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53780__i = 0, G__53780__a = new Array(arguments.length -  0);
while (G__53780__i < G__53780__a.length) {G__53780__a[G__53780__i] = arguments[G__53780__i + 0]; ++G__53780__i;}
  args = new cljs.core.IndexedSeq(G__53780__a,0,null);
} 
return G__53779__delegate.call(this,args);};
G__53779.cljs$lang$maxFixedArity = 0;
G__53779.cljs$lang$applyTo = (function (arglist__53781){
var args = cljs.core.seq(arglist__53781);
return G__53779__delegate(args);
});
G__53779.cljs$core$IFn$_invoke$arity$variadic = G__53779__delegate;
return G__53779;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),memo_class], null));
} else {
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__53782__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__53782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53785__i = 0, G__53785__a = new Array(arguments.length -  0);
while (G__53785__i < G__53785__a.length) {G__53785__a[G__53785__i] = arguments[G__53785__i + 0]; ++G__53785__i;}
  args = new cljs.core.IndexedSeq(G__53785__a,0,null);
} 
return G__53782__delegate.call(this,args);};
G__53782.cljs$lang$maxFixedArity = 0;
G__53782.cljs$lang$applyTo = (function (arglist__53788){
var args = cljs.core.seq(arglist__53788);
return G__53782__delegate(args);
});
G__53782.cljs$core$IFn$_invoke$arity$variadic = G__53782__delegate;
return G__53782;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = (typeof window !== 'undefined');
if(and__4251__auto__){
var or__4253__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (p1__53576_SHARP_){
return setTimeout(p1__53576_SHARP_,(16));
});
}
})();
rum.core.batch = (function (){var or__4253__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_one = (function rum$core$render_one(comp){
if((((!((comp == null)))) && (cljs.core.not(rum.core.goog$module$goog$object.get(comp,":rum/unmounted?"))))){
return comp.forceUpdate();
} else {
return null;
}
});
rum.core.render_all = (function rum$core$render_all(queue){
return cljs.core.run_BANG_(rum.core.render_one,queue);
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
rum.core.sync_update_QMARK_ = cljs.core.volatile_BANG_(false);
/**
 * Schedules react component to be rendered on next animation frame,
 *   unless the requested update happens to be in a sync-update phase.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.truth_(cljs.core.deref(rum.core.sync_update_QMARK_))){
return rum.core.render_one(component);
} else {
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return rum.core.render_queue.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rum.core.render_queue.cljs$core$IDeref$_deref$arity$1(null),component));
}
});
rum.core.mark_sync_update = (function rum$core$mark_sync_update(f){
if(cljs.core.fn_QMARK_(f)){
return (function rum$core$mark_sync_update_$_wrapped_handler(e){
var _ = cljs.core.vreset_BANG_(rum.core.sync_update_QMARK_,true);
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
var ___$1 = cljs.core.vreset_BANG_(rum.core.sync_update_QMARK_,false);
return ret;
});
} else {
return f;
}
});
goog.exportSymbol('rum.core.mark_sync_update', rum.core.mark_sync_update);
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
rum.core.create_context = (function rum$core$create_context(default_value){
return React.createContext(default_value);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Usage of this function is discouraged. Use :ref callback instead.
 *   Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__53592 = arguments.length;
switch (G__53592) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(component);
} else {
return null;
}
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__53605 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__53606 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__53606);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__53607 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53607,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53607,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__53610_53829 = cljs.core.seq(old_reactions);
var chunk__53611_53830 = null;
var count__53612_53831 = (0);
var i__53613_53832 = (0);
while(true){
if((i__53613_53832 < count__53612_53831)){
var ref_53833 = chunk__53611_53830.cljs$core$IIndexed$_nth$arity$2(null,i__53613_53832);
if(cljs.core.contains_QMARK_(new_reactions,ref_53833)){
} else {
cljs.core.remove_watch(ref_53833,key);
}


var G__53834 = seq__53610_53829;
var G__53835 = chunk__53611_53830;
var G__53836 = count__53612_53831;
var G__53837 = (i__53613_53832 + (1));
seq__53610_53829 = G__53834;
chunk__53611_53830 = G__53835;
count__53612_53831 = G__53836;
i__53613_53832 = G__53837;
continue;
} else {
var temp__5753__auto___53838 = cljs.core.seq(seq__53610_53829);
if(temp__5753__auto___53838){
var seq__53610_53839__$1 = temp__5753__auto___53838;
if(cljs.core.chunked_seq_QMARK_(seq__53610_53839__$1)){
var c__4679__auto___53840 = cljs.core.chunk_first(seq__53610_53839__$1);
var G__53841 = cljs.core.chunk_rest(seq__53610_53839__$1);
var G__53842 = c__4679__auto___53840;
var G__53843 = cljs.core.count(c__4679__auto___53840);
var G__53844 = (0);
seq__53610_53829 = G__53841;
chunk__53611_53830 = G__53842;
count__53612_53831 = G__53843;
i__53613_53832 = G__53844;
continue;
} else {
var ref_53845 = cljs.core.first(seq__53610_53839__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_53845)){
} else {
cljs.core.remove_watch(ref_53845,key);
}


var G__53846 = cljs.core.next(seq__53610_53839__$1);
var G__53847 = null;
var G__53848 = (0);
var G__53849 = (0);
seq__53610_53829 = G__53846;
chunk__53611_53830 = G__53847;
count__53612_53831 = G__53848;
i__53613_53832 = G__53849;
continue;
}
} else {
}
}
break;
}

var seq__53617_53850 = cljs.core.seq(new_reactions);
var chunk__53618_53851 = null;
var count__53619_53852 = (0);
var i__53620_53853 = (0);
while(true){
if((i__53620_53853 < count__53619_53852)){
var ref_53854 = chunk__53618_53851.cljs$core$IIndexed$_nth$arity$2(null,i__53620_53853);
if(cljs.core.contains_QMARK_(old_reactions,ref_53854)){
} else {
cljs.core.add_watch(ref_53854,key,((function (seq__53617_53850,chunk__53618_53851,count__53619_53852,i__53620_53853,ref_53854,comp,old_reactions,vec__53607,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__53605,_STAR_reactions_STAR__temp_val__53606){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(comp);
} else {
return null;
}
});})(seq__53617_53850,chunk__53618_53851,count__53619_53852,i__53620_53853,ref_53854,comp,old_reactions,vec__53607,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__53605,_STAR_reactions_STAR__temp_val__53606))
);
}


var G__53855 = seq__53617_53850;
var G__53856 = chunk__53618_53851;
var G__53857 = count__53619_53852;
var G__53858 = (i__53620_53853 + (1));
seq__53617_53850 = G__53855;
chunk__53618_53851 = G__53856;
count__53619_53852 = G__53857;
i__53620_53853 = G__53858;
continue;
} else {
var temp__5753__auto___53859 = cljs.core.seq(seq__53617_53850);
if(temp__5753__auto___53859){
var seq__53617_53860__$1 = temp__5753__auto___53859;
if(cljs.core.chunked_seq_QMARK_(seq__53617_53860__$1)){
var c__4679__auto___53861 = cljs.core.chunk_first(seq__53617_53860__$1);
var G__53862 = cljs.core.chunk_rest(seq__53617_53860__$1);
var G__53863 = c__4679__auto___53861;
var G__53864 = cljs.core.count(c__4679__auto___53861);
var G__53865 = (0);
seq__53617_53850 = G__53862;
chunk__53618_53851 = G__53863;
count__53619_53852 = G__53864;
i__53620_53853 = G__53865;
continue;
} else {
var ref_53866 = cljs.core.first(seq__53617_53860__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_53866)){
} else {
cljs.core.add_watch(ref_53866,key,((function (seq__53617_53850,chunk__53618_53851,count__53619_53852,i__53620_53853,ref_53866,seq__53617_53860__$1,temp__5753__auto___53859,comp,old_reactions,vec__53607,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__53605,_STAR_reactions_STAR__temp_val__53606){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(comp);
} else {
return null;
}
});})(seq__53617_53850,chunk__53618_53851,count__53619_53852,i__53620_53853,ref_53866,seq__53617_53860__$1,temp__5753__auto___53859,comp,old_reactions,vec__53607,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__53605,_STAR_reactions_STAR__temp_val__53606))
);
}


var G__53867 = cljs.core.next(seq__53617_53860__$1);
var G__53868 = null;
var G__53869 = (0);
var G__53870 = (0);
seq__53617_53850 = G__53867;
chunk__53618_53851 = G__53868;
count__53619_53852 = G__53869;
i__53620_53853 = G__53870;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__53605);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_53871 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__53628_53872 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__53629_53873 = null;
var count__53630_53874 = (0);
var i__53631_53875 = (0);
while(true){
if((i__53631_53875 < count__53630_53874)){
var ref_53876 = chunk__53629_53873.cljs$core$IIndexed$_nth$arity$2(null,i__53631_53875);
cljs.core.remove_watch(ref_53876,key_53871);


var G__53877 = seq__53628_53872;
var G__53878 = chunk__53629_53873;
var G__53879 = count__53630_53874;
var G__53880 = (i__53631_53875 + (1));
seq__53628_53872 = G__53877;
chunk__53629_53873 = G__53878;
count__53630_53874 = G__53879;
i__53631_53875 = G__53880;
continue;
} else {
var temp__5753__auto___53881 = cljs.core.seq(seq__53628_53872);
if(temp__5753__auto___53881){
var seq__53628_53882__$1 = temp__5753__auto___53881;
if(cljs.core.chunked_seq_QMARK_(seq__53628_53882__$1)){
var c__4679__auto___53883 = cljs.core.chunk_first(seq__53628_53882__$1);
var G__53884 = cljs.core.chunk_rest(seq__53628_53882__$1);
var G__53885 = c__4679__auto___53883;
var G__53886 = cljs.core.count(c__4679__auto___53883);
var G__53887 = (0);
seq__53628_53872 = G__53884;
chunk__53629_53873 = G__53885;
count__53630_53874 = G__53886;
i__53631_53875 = G__53887;
continue;
} else {
var ref_53888 = cljs.core.first(seq__53628_53882__$1);
cljs.core.remove_watch(ref_53888,key_53871);


var G__53889 = cljs.core.next(seq__53628_53882__$1);
var G__53890 = null;
var G__53891 = (0);
var G__53892 = (0);
seq__53628_53872 = G__53889;
chunk__53629_53873 = G__53890;
count__53630_53874 = G__53891;
i__53631_53875 = G__53892;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142)], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53900 = arguments.length;
var i__4865__auto___53901 = (0);
while(true){
if((i__4865__auto___53901 < len__4864__auto___53900)){
args__4870__auto__.push((arguments[i__4865__auto___53901]));

var G__53902 = (i__4865__auto___53901 + (1));
i__4865__auto___53901 = G__53902;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__53642){
var map__53643 = p__53642;
var map__53643__$1 = cljs.core.__destructure_map(map__53643);
var options = map__53643__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq53639){
var G__53640 = cljs.core.first(seq53639);
var seq53639__$1 = cljs.core.next(seq53639);
var G__53641 = cljs.core.first(seq53639__$1);
var seq53639__$2 = cljs.core.next(seq53639__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53640,G__53641,seq53639__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53903 = arguments.length;
var i__4865__auto___53904 = (0);
while(true){
if((i__4865__auto___53904 < len__4864__auto___53903)){
args__4870__auto__.push((arguments[i__4865__auto___53904]));

var G__53905 = (i__4865__auto___53904 + (1));
i__4865__auto___53904 = G__53905;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq53644){
var G__53645 = cljs.core.first(seq53644);
var seq53644__$1 = cljs.core.next(seq53644);
var G__53646 = cljs.core.first(seq53644__$1);
var seq53644__$2 = cljs.core.next(seq53644__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53645,G__53646,seq53644__$2);
}));

/**
 * Takes initial value or value returning fn and returns a tuple of [value set-value!],
 *   where `value` is current state value and `set-value!` is a function that schedules re-render.
 * 
 *   (let [[value set-state!] (rum/use-state 0)]
 *  [:button {:on-click #(set-state! (inc value))}
 *    value])
 */
rum.core.use_state = (function rum$core$use_state(value_or_fn){
return React.useState(value_or_fn);
});
/**
 * Takes reducing function and initial state value.
 *   Returns a tuple of [value dispatch!], where `value` is current state value and `dispatch` is a function that schedules re-render.
 * 
 *   (defmulti value-reducer (fn [value event] event))
 * 
 *   (defmethod value-reducer :inc [value _]
 *  (inc value))
 * 
 *   (let [[value dispatch!] (rum/use-reducer value-reducer 0)]
 *  [:button {:on-click #(dispatch! :inc)}
 *    value])
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usereducer
 */
rum.core.use_reducer = (function rum$core$use_reducer(reducer_fn,initial_value){
return React.useReducer((function (p1__53653_SHARP_,p2__53654_SHARP_){
return (reducer_fn.cljs$core$IFn$_invoke$arity$2 ? reducer_fn.cljs$core$IFn$_invoke$arity$2(p1__53653_SHARP_,p2__53654_SHARP_) : reducer_fn.call(null,p1__53653_SHARP_,p2__53654_SHARP_));
}),initial_value,cljs.core.identity);
});
/**
 * Takes setup-fn that executes either on the first render or after every update.
 *   The function may return cleanup-fn to cleanup the effect, either before unmount or before every next update.
 *   Calling behavior is controlled by deps argument.
 * 
 *   (rum/use-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_effect_BANG_ = (function rum$core$use_effect_BANG_(var_args){
var G__53661 = arguments.length;
switch (G__53661) {
case 1:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useEffect((function (){
var or__4253__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__4253__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * (rum/use-layout-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_layout_effect_BANG_ = (function rum$core$use_layout_effect_BANG_(var_args){
var G__53671 = arguments.length;
switch (G__53671) {
case 1:
return rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useLayoutEffect((function (){
var or__4253__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useLayoutEffect((function (){
var or__4253__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_layout_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Takes callback function and returns memoized variant, memoization is done based on provided deps collection.
 * 
 *   (rum/defc button < rum/static
 *  [{:keys [on-click]} text]
 *  [:button {:on-click on-click}
 *    text])
 * 
 *   (rum/defc app [v]
 *  (let [on-click (rum/use-callback #(do-stuff v) [v])]
 *    ;; because on-click callback is memoized here based on v argument
 *    ;; the callback won't be re-created on every render, unless v changes
 *    ;; which means that underlying `button` component won't re-render wastefully
 *    [button {:on-click on-click}
 *      "press me"]))
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usecallback
 */
rum.core.use_callback = (function rum$core$use_callback(var_args){
var G__53674 = arguments.length;
switch (G__53674) {
case 1:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return React.useCallback(callback);
}));

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (callback,deps){
return React.useCallback(callback,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__53676 = arguments.length;
switch (G__53676) {
case 1:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useMemo(f);
}));

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useMemo(f,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * Takes a value and puts it into a mutable container which is persisted for the full lifetime of the component.
 *   https://reactjs.org/docs/hooks-reference.html#useref
 */
rum.core.use_ref = (function rum$core$use_ref(initial_value){
return React.useRef(initial_value);
});
rum.core.create_ref = (function rum$core$create_ref(){
return React.createRef();
});
/**
 * Takes a ref returned from use-ref and returns its current value.
 */
rum.core.deref = (function rum$core$deref(ref){
return ref.current;
});
rum.core.set_ref_BANG_ = (function rum$core$set_ref_BANG_(ref,value){
return (ref.current = value);
});
/**
 * Main server-side rendering method. Given component, returns HTML string with static markup of that component.
 *   Serve that string to the browser and [[hydrate]] same Rum component over it. React will be able to reuse already existing DOM and will initialize much faster.
 *   No opts are supported at the moment.
 */
rum.core.render_html = (function rum$core$render_html(var_args){
var G__53682 = arguments.length;
switch (G__53682) {
case 1:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.render_html.cljs$core$IFn$_invoke$arity$1 = (function (element){
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2(element,null);
}));

(rum.core.render_html.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToString(element);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToString(element);
}
}));

(rum.core.render_html.cljs$lang$maxFixedArity = 2);

/**
 * Same as [[render-html]] but returned string has nothing React-specific.
 *   This allows Rum to be used as traditional server-side templating engine.
 */
rum.core.render_static_markup = (function rum$core$render_static_markup(src){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToStaticMarkup(src);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToStaticMarkup(src);
}
});
rum.core.adapt_class_helper = (function rum$core$adapt_class_helper(type,attrs,children){
var args = [type,attrs].concat(children);
return React.createElement.apply(React,args);
});

//# sourceMappingURL=rum.core.js.map
