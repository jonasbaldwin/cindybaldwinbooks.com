// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__24490 = cljs.core.seq.call(null,props);
var chunk__24492 = null;
var count__24493 = (0);
var i__24494 = (0);
while(true){
if((i__24494 < count__24493)){
var vec__24502 = cljs.core._nth.call(null,chunk__24492,i__24494);
var k = cljs.core.nth.call(null,vec__24502,(0),null);
var v = cljs.core.nth.call(null,vec__24502,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24508 = seq__24490;
var G__24509 = chunk__24492;
var G__24510 = count__24493;
var G__24511 = (i__24494 + (1));
seq__24490 = G__24508;
chunk__24492 = G__24509;
count__24493 = G__24510;
i__24494 = G__24511;
continue;
} else {
var G__24512 = seq__24490;
var G__24513 = chunk__24492;
var G__24514 = count__24493;
var G__24515 = (i__24494 + (1));
seq__24490 = G__24512;
chunk__24492 = G__24513;
count__24493 = G__24514;
i__24494 = G__24515;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24490);
if(temp__5735__auto__){
var seq__24490__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24490__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24490__$1);
var G__24516 = cljs.core.chunk_rest.call(null,seq__24490__$1);
var G__24517 = c__4550__auto__;
var G__24518 = cljs.core.count.call(null,c__4550__auto__);
var G__24519 = (0);
seq__24490 = G__24516;
chunk__24492 = G__24517;
count__24493 = G__24518;
i__24494 = G__24519;
continue;
} else {
var vec__24505 = cljs.core.first.call(null,seq__24490__$1);
var k = cljs.core.nth.call(null,vec__24505,(0),null);
var v = cljs.core.nth.call(null,vec__24505,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24520 = cljs.core.next.call(null,seq__24490__$1);
var G__24521 = null;
var G__24522 = (0);
var G__24523 = (0);
seq__24490 = G__24520;
chunk__24492 = G__24521;
count__24493 = G__24522;
i__24494 = G__24523;
continue;
} else {
var G__24524 = cljs.core.next.call(null,seq__24490__$1);
var G__24525 = null;
var G__24526 = (0);
var G__24527 = (0);
seq__24490 = G__24524;
chunk__24492 = G__24525;
count__24493 = G__24526;
i__24494 = G__24527;
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
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__24529_SHARP_,p2__24528_SHARP_){
return p2__24528_SHARP_.call(null,p1__24529_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24531_SHARP_,p2__24530_SHARP_){
return p2__24530_SHARP_.call(null,old_state,p1__24531_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__4131__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24532_SHARP_){
return p1__24532_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__24534 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24534,(0),null);
var next_state = cljs.core.nth.call(null,vec__24534,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24533_SHARP_){
return p1__24533_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?((function (class$,key_fn){
return (function() { 
var G__24537__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__24537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24538__i = 0, G__24538__a = new Array(arguments.length -  0);
while (G__24538__i < G__24538__a.length) {G__24538__a[G__24538__i] = arguments[G__24538__i + 0]; ++G__24538__i;}
  args = new cljs.core.IndexedSeq(G__24538__a,0,null);
} 
return G__24537__delegate.call(this,args);};
G__24537.cljs$lang$maxFixedArity = 0;
G__24537.cljs$lang$applyTo = (function (arglist__24539){
var args = cljs.core.seq(arglist__24539);
return G__24537__delegate(args);
});
G__24537.cljs$core$IFn$_invoke$arity$variadic = G__24537__delegate;
return G__24537;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__24540__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__24540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24541__i = 0, G__24541__a = new Array(arguments.length -  0);
while (G__24541__i < G__24541__a.length) {G__24541__a[G__24541__i] = arguments[G__24541__i + 0]; ++G__24541__i;}
  args = new cljs.core.IndexedSeq(G__24541__a,0,null);
} 
return G__24540__delegate.call(this,args);};
G__24540.cljs$lang$maxFixedArity = 0;
G__24540.cljs$lang$applyTo = (function (arglist__24542){
var args = cljs.core.seq(arglist__24542);
return G__24540__delegate(args);
});
G__24540.cljs$core$IFn$_invoke$arity$variadic = G__24540__delegate;
return G__24540;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__24543__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__24543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24544__i = 0, G__24544__a = new Array(arguments.length -  0);
while (G__24544__i < G__24544__a.length) {G__24544__a[G__24544__i] = arguments[G__24544__i + 0]; ++G__24544__i;}
  args = new cljs.core.IndexedSeq(G__24544__a,0,null);
} 
return G__24543__delegate.call(this,args);};
G__24543.cljs$lang$maxFixedArity = 0;
G__24543.cljs$lang$applyTo = (function (arglist__24545){
var args = cljs.core.seq(arglist__24545);
return G__24543__delegate(args);
});
G__24543.cljs$core$IFn$_invoke$arity$variadic = G__24543__delegate;
return G__24543;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = (typeof window !== 'undefined');
if(and__4120__auto__){
var or__4131__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__){
return (function (p1__24546_SHARP_){
return setTimeout(p1__24546_SHARP_,(16));
});
;})(or__4131__auto__))
}
})();
rum.core.batch = (function (){var or__4131__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ((function (or__4131__auto____$1,or__4131__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__4131__auto____$1,or__4131__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__24547 = cljs.core.seq.call(null,queue);
var chunk__24549 = null;
var count__24550 = (0);
var i__24551 = (0);
while(true){
if((i__24551 < count__24550)){
var comp = cljs.core._nth.call(null,chunk__24549,i__24551);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__24553 = seq__24547;
var G__24554 = chunk__24549;
var G__24555 = count__24550;
var G__24556 = (i__24551 + (1));
seq__24547 = G__24553;
chunk__24549 = G__24554;
count__24550 = G__24555;
i__24551 = G__24556;
continue;
} else {
var G__24557 = seq__24547;
var G__24558 = chunk__24549;
var G__24559 = count__24550;
var G__24560 = (i__24551 + (1));
seq__24547 = G__24557;
chunk__24549 = G__24558;
count__24550 = G__24559;
i__24551 = G__24560;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24547);
if(temp__5735__auto__){
var seq__24547__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24547__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24547__$1);
var G__24561 = cljs.core.chunk_rest.call(null,seq__24547__$1);
var G__24562 = c__4550__auto__;
var G__24563 = cljs.core.count.call(null,c__4550__auto__);
var G__24564 = (0);
seq__24547 = G__24561;
chunk__24549 = G__24562;
count__24550 = G__24563;
i__24551 = G__24564;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24547__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__24565 = cljs.core.next.call(null,seq__24547__$1);
var G__24566 = null;
var G__24567 = (0);
var G__24568 = (0);
seq__24547 = G__24565;
chunk__24549 = G__24566;
count__24550 = G__24567;
i__24551 = G__24568;
continue;
} else {
var G__24569 = cljs.core.next.call(null,seq__24547__$1);
var G__24570 = null;
var G__24571 = (0);
var G__24572 = (0);
seq__24547 = G__24569;
chunk__24549 = G__24570;
count__24550 = G__24571;
i__24551 = G__24572;
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
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__24574 = arguments.length;
switch (G__24574) {
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

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__24576 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__24577 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__24577;

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24578 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24578,(0),null);
var next_state = cljs.core.nth.call(null,vec__24578,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24581_24593 = cljs.core.seq.call(null,old_reactions);
var chunk__24582_24594 = null;
var count__24583_24595 = (0);
var i__24584_24596 = (0);
while(true){
if((i__24584_24596 < count__24583_24595)){
var ref_24597 = cljs.core._nth.call(null,chunk__24582_24594,i__24584_24596);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24597)){
} else {
cljs.core.remove_watch.call(null,ref_24597,key);
}


var G__24598 = seq__24581_24593;
var G__24599 = chunk__24582_24594;
var G__24600 = count__24583_24595;
var G__24601 = (i__24584_24596 + (1));
seq__24581_24593 = G__24598;
chunk__24582_24594 = G__24599;
count__24583_24595 = G__24600;
i__24584_24596 = G__24601;
continue;
} else {
var temp__5735__auto___24602 = cljs.core.seq.call(null,seq__24581_24593);
if(temp__5735__auto___24602){
var seq__24581_24603__$1 = temp__5735__auto___24602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24581_24603__$1)){
var c__4550__auto___24604 = cljs.core.chunk_first.call(null,seq__24581_24603__$1);
var G__24605 = cljs.core.chunk_rest.call(null,seq__24581_24603__$1);
var G__24606 = c__4550__auto___24604;
var G__24607 = cljs.core.count.call(null,c__4550__auto___24604);
var G__24608 = (0);
seq__24581_24593 = G__24605;
chunk__24582_24594 = G__24606;
count__24583_24595 = G__24607;
i__24584_24596 = G__24608;
continue;
} else {
var ref_24609 = cljs.core.first.call(null,seq__24581_24603__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24609)){
} else {
cljs.core.remove_watch.call(null,ref_24609,key);
}


var G__24610 = cljs.core.next.call(null,seq__24581_24603__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24581_24593 = G__24610;
chunk__24582_24594 = G__24611;
count__24583_24595 = G__24612;
i__24584_24596 = G__24613;
continue;
}
} else {
}
}
break;
}

var seq__24585_24614 = cljs.core.seq.call(null,new_reactions);
var chunk__24586_24615 = null;
var count__24587_24616 = (0);
var i__24588_24617 = (0);
while(true){
if((i__24588_24617 < count__24587_24616)){
var ref_24618 = cljs.core._nth.call(null,chunk__24586_24615,i__24588_24617);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24618)){
} else {
cljs.core.add_watch.call(null,ref_24618,key,((function (seq__24585_24614,chunk__24586_24615,count__24587_24616,i__24588_24617,ref_24618,comp,old_reactions,vec__24578,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__24576,_STAR_reactions_STAR__temp_val__24577){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24585_24614,chunk__24586_24615,count__24587_24616,i__24588_24617,ref_24618,comp,old_reactions,vec__24578,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__24576,_STAR_reactions_STAR__temp_val__24577))
);
}


var G__24619 = seq__24585_24614;
var G__24620 = chunk__24586_24615;
var G__24621 = count__24587_24616;
var G__24622 = (i__24588_24617 + (1));
seq__24585_24614 = G__24619;
chunk__24586_24615 = G__24620;
count__24587_24616 = G__24621;
i__24588_24617 = G__24622;
continue;
} else {
var temp__5735__auto___24623 = cljs.core.seq.call(null,seq__24585_24614);
if(temp__5735__auto___24623){
var seq__24585_24624__$1 = temp__5735__auto___24623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24585_24624__$1)){
var c__4550__auto___24625 = cljs.core.chunk_first.call(null,seq__24585_24624__$1);
var G__24626 = cljs.core.chunk_rest.call(null,seq__24585_24624__$1);
var G__24627 = c__4550__auto___24625;
var G__24628 = cljs.core.count.call(null,c__4550__auto___24625);
var G__24629 = (0);
seq__24585_24614 = G__24626;
chunk__24586_24615 = G__24627;
count__24587_24616 = G__24628;
i__24588_24617 = G__24629;
continue;
} else {
var ref_24630 = cljs.core.first.call(null,seq__24585_24624__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24630)){
} else {
cljs.core.add_watch.call(null,ref_24630,key,((function (seq__24585_24614,chunk__24586_24615,count__24587_24616,i__24588_24617,ref_24630,seq__24585_24624__$1,temp__5735__auto___24623,comp,old_reactions,vec__24578,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__24576,_STAR_reactions_STAR__temp_val__24577){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24585_24614,chunk__24586_24615,count__24587_24616,i__24588_24617,ref_24630,seq__24585_24624__$1,temp__5735__auto___24623,comp,old_reactions,vec__24578,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__24576,_STAR_reactions_STAR__temp_val__24577))
);
}


var G__24631 = cljs.core.next.call(null,seq__24585_24624__$1);
var G__24632 = null;
var G__24633 = (0);
var G__24634 = (0);
seq__24585_24614 = G__24631;
chunk__24586_24615 = G__24632;
count__24587_24616 = G__24633;
i__24588_24617 = G__24634;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__24576;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24635 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24589_24636 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24590_24637 = null;
var count__24591_24638 = (0);
var i__24592_24639 = (0);
while(true){
if((i__24592_24639 < count__24591_24638)){
var ref_24640 = cljs.core._nth.call(null,chunk__24590_24637,i__24592_24639);
cljs.core.remove_watch.call(null,ref_24640,key_24635);


var G__24641 = seq__24589_24636;
var G__24642 = chunk__24590_24637;
var G__24643 = count__24591_24638;
var G__24644 = (i__24592_24639 + (1));
seq__24589_24636 = G__24641;
chunk__24590_24637 = G__24642;
count__24591_24638 = G__24643;
i__24592_24639 = G__24644;
continue;
} else {
var temp__5735__auto___24645 = cljs.core.seq.call(null,seq__24589_24636);
if(temp__5735__auto___24645){
var seq__24589_24646__$1 = temp__5735__auto___24645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24589_24646__$1)){
var c__4550__auto___24647 = cljs.core.chunk_first.call(null,seq__24589_24646__$1);
var G__24648 = cljs.core.chunk_rest.call(null,seq__24589_24646__$1);
var G__24649 = c__4550__auto___24647;
var G__24650 = cljs.core.count.call(null,c__4550__auto___24647);
var G__24651 = (0);
seq__24589_24636 = G__24648;
chunk__24590_24637 = G__24649;
count__24591_24638 = G__24650;
i__24592_24639 = G__24651;
continue;
} else {
var ref_24652 = cljs.core.first.call(null,seq__24589_24646__$1);
cljs.core.remove_watch.call(null,ref_24652,key_24635);


var G__24653 = cljs.core.next.call(null,seq__24589_24646__$1);
var G__24654 = null;
var G__24655 = (0);
var G__24656 = (0);
seq__24589_24636 = G__24653;
chunk__24590_24637 = G__24654;
count__24591_24638 = G__24655;
i__24592_24639 = G__24656;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24663 = arguments.length;
var i__4731__auto___24664 = (0);
while(true){
if((i__4731__auto___24664 < len__4730__auto___24663)){
args__4736__auto__.push((arguments[i__4731__auto___24664]));

var G__24665 = (i__4731__auto___24664 + (1));
i__4731__auto___24664 = G__24665;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__24660){
var map__24661 = p__24660;
var map__24661__$1 = (((((!((map__24661 == null))))?(((((map__24661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24661):map__24661);
var options = map__24661__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq24657){
var G__24658 = cljs.core.first.call(null,seq24657);
var seq24657__$1 = cljs.core.next.call(null,seq24657);
var G__24659 = cljs.core.first.call(null,seq24657__$1);
var seq24657__$2 = cljs.core.next.call(null,seq24657__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24658,G__24659,seq24657__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24669 = arguments.length;
var i__4731__auto___24670 = (0);
while(true){
if((i__4731__auto___24670 < len__4730__auto___24669)){
args__4736__auto__.push((arguments[i__4731__auto___24670]));

var G__24671 = (i__4731__auto___24670 + (1));
i__4731__auto___24670 = G__24671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq24666){
var G__24667 = cljs.core.first.call(null,seq24666);
var seq24666__$1 = cljs.core.next.call(null,seq24666);
var G__24668 = cljs.core.first.call(null,seq24666__$1);
var seq24666__$2 = cljs.core.next.call(null,seq24666__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24667,G__24668,seq24666__$2);
});


//# sourceMappingURL=core.js.map?rel=1560468645704
