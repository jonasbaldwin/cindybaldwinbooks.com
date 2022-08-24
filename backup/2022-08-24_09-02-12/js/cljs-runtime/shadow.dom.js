goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50332 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50332(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50333 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50333(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49251 = coll;
var G__49252 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49251,G__49252) : shadow.dom.lazy_native_coll_seq.call(null,G__49251,G__49252));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49294 = arguments.length;
switch (G__49294) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49304 = arguments.length;
switch (G__49304) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49312 = arguments.length;
switch (G__49312) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49327 = arguments.length;
switch (G__49327) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49346 = arguments.length;
switch (G__49346) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49357 = arguments.length;
switch (G__49357) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49367){if((e49367 instanceof Object)){
var e = e49367;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49367;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49375 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49376 = null;
var count__49377 = (0);
var i__49378 = (0);
while(true){
if((i__49378 < count__49377)){
var el = chunk__49376.cljs$core$IIndexed$_nth$arity$2(null,i__49378);
var handler_50362__$1 = ((function (seq__49375,chunk__49376,count__49377,i__49378,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49375,chunk__49376,count__49377,i__49378,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50362__$1);


var G__50363 = seq__49375;
var G__50364 = chunk__49376;
var G__50365 = count__49377;
var G__50366 = (i__49378 + (1));
seq__49375 = G__50363;
chunk__49376 = G__50364;
count__49377 = G__50365;
i__49378 = G__50366;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49375);
if(temp__5753__auto__){
var seq__49375__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49375__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49375__$1);
var G__50367 = cljs.core.chunk_rest(seq__49375__$1);
var G__50368 = c__4679__auto__;
var G__50369 = cljs.core.count(c__4679__auto__);
var G__50370 = (0);
seq__49375 = G__50367;
chunk__49376 = G__50368;
count__49377 = G__50369;
i__49378 = G__50370;
continue;
} else {
var el = cljs.core.first(seq__49375__$1);
var handler_50371__$1 = ((function (seq__49375,chunk__49376,count__49377,i__49378,el,seq__49375__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49375,chunk__49376,count__49377,i__49378,el,seq__49375__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50371__$1);


var G__50372 = cljs.core.next(seq__49375__$1);
var G__50373 = null;
var G__50374 = (0);
var G__50375 = (0);
seq__49375 = G__50372;
chunk__49376 = G__50373;
count__49377 = G__50374;
i__49378 = G__50375;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49392 = arguments.length;
switch (G__49392) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49403 = cljs.core.seq(events);
var chunk__49404 = null;
var count__49405 = (0);
var i__49406 = (0);
while(true){
if((i__49406 < count__49405)){
var vec__49420 = chunk__49404.cljs$core$IIndexed$_nth$arity$2(null,i__49406);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49420,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49420,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50377 = seq__49403;
var G__50378 = chunk__49404;
var G__50379 = count__49405;
var G__50380 = (i__49406 + (1));
seq__49403 = G__50377;
chunk__49404 = G__50378;
count__49405 = G__50379;
i__49406 = G__50380;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49403);
if(temp__5753__auto__){
var seq__49403__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49403__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49403__$1);
var G__50381 = cljs.core.chunk_rest(seq__49403__$1);
var G__50382 = c__4679__auto__;
var G__50383 = cljs.core.count(c__4679__auto__);
var G__50384 = (0);
seq__49403 = G__50381;
chunk__49404 = G__50382;
count__49405 = G__50383;
i__49406 = G__50384;
continue;
} else {
var vec__49425 = cljs.core.first(seq__49403__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49425,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50385 = cljs.core.next(seq__49403__$1);
var G__50386 = null;
var G__50387 = (0);
var G__50388 = (0);
seq__49403 = G__50385;
chunk__49404 = G__50386;
count__49405 = G__50387;
i__49406 = G__50388;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49429 = cljs.core.seq(styles);
var chunk__49430 = null;
var count__49431 = (0);
var i__49432 = (0);
while(true){
if((i__49432 < count__49431)){
var vec__49442 = chunk__49430.cljs$core$IIndexed$_nth$arity$2(null,i__49432);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49442,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50389 = seq__49429;
var G__50390 = chunk__49430;
var G__50391 = count__49431;
var G__50392 = (i__49432 + (1));
seq__49429 = G__50389;
chunk__49430 = G__50390;
count__49431 = G__50391;
i__49432 = G__50392;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49429);
if(temp__5753__auto__){
var seq__49429__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49429__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49429__$1);
var G__50393 = cljs.core.chunk_rest(seq__49429__$1);
var G__50394 = c__4679__auto__;
var G__50395 = cljs.core.count(c__4679__auto__);
var G__50396 = (0);
seq__49429 = G__50393;
chunk__49430 = G__50394;
count__49431 = G__50395;
i__49432 = G__50396;
continue;
} else {
var vec__49445 = cljs.core.first(seq__49429__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49445,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50397 = cljs.core.next(seq__49429__$1);
var G__50398 = null;
var G__50399 = (0);
var G__50400 = (0);
seq__49429 = G__50397;
chunk__49430 = G__50398;
count__49431 = G__50399;
i__49432 = G__50400;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49449_50401 = key;
var G__49449_50402__$1 = (((G__49449_50401 instanceof cljs.core.Keyword))?G__49449_50401.fqn:null);
switch (G__49449_50402__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_50406 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_50406,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_50406,"aria-");
}
})())){
el.setAttribute(ks_50406,value);
} else {
(el[ks_50406] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49475){
var map__49477 = p__49475;
var map__49477__$1 = cljs.core.__destructure_map(map__49477);
var props = map__49477__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49477__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49479 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49479,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49479,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49479,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49483 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49483,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49483;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49488 = arguments.length;
switch (G__49488) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49501){
var vec__49503 = p__49501;
var seq__49504 = cljs.core.seq(vec__49503);
var first__49505 = cljs.core.first(seq__49504);
var seq__49504__$1 = cljs.core.next(seq__49504);
var nn = first__49505;
var first__49505__$1 = cljs.core.first(seq__49504__$1);
var seq__49504__$2 = cljs.core.next(seq__49504__$1);
var np = first__49505__$1;
var nc = seq__49504__$2;
var node = vec__49503;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49508 = nn;
var G__49510 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49508,G__49510) : create_fn.call(null,G__49508,G__49510));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49513 = nn;
var G__49514 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49513,G__49514) : create_fn.call(null,G__49513,G__49514));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49518 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49518,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49518,(1),null);
var seq__49521_50423 = cljs.core.seq(node_children);
var chunk__49522_50424 = null;
var count__49523_50425 = (0);
var i__49524_50426 = (0);
while(true){
if((i__49524_50426 < count__49523_50425)){
var child_struct_50428 = chunk__49522_50424.cljs$core$IIndexed$_nth$arity$2(null,i__49524_50426);
var children_50429 = shadow.dom.dom_node(child_struct_50428);
if(cljs.core.seq_QMARK_(children_50429)){
var seq__49560_50430 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50429));
var chunk__49562_50431 = null;
var count__49563_50432 = (0);
var i__49564_50433 = (0);
while(true){
if((i__49564_50433 < count__49563_50432)){
var child_50434 = chunk__49562_50431.cljs$core$IIndexed$_nth$arity$2(null,i__49564_50433);
if(cljs.core.truth_(child_50434)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50434);


var G__50435 = seq__49560_50430;
var G__50436 = chunk__49562_50431;
var G__50437 = count__49563_50432;
var G__50438 = (i__49564_50433 + (1));
seq__49560_50430 = G__50435;
chunk__49562_50431 = G__50436;
count__49563_50432 = G__50437;
i__49564_50433 = G__50438;
continue;
} else {
var G__50439 = seq__49560_50430;
var G__50440 = chunk__49562_50431;
var G__50441 = count__49563_50432;
var G__50442 = (i__49564_50433 + (1));
seq__49560_50430 = G__50439;
chunk__49562_50431 = G__50440;
count__49563_50432 = G__50441;
i__49564_50433 = G__50442;
continue;
}
} else {
var temp__5753__auto___50443 = cljs.core.seq(seq__49560_50430);
if(temp__5753__auto___50443){
var seq__49560_50444__$1 = temp__5753__auto___50443;
if(cljs.core.chunked_seq_QMARK_(seq__49560_50444__$1)){
var c__4679__auto___50445 = cljs.core.chunk_first(seq__49560_50444__$1);
var G__50446 = cljs.core.chunk_rest(seq__49560_50444__$1);
var G__50447 = c__4679__auto___50445;
var G__50448 = cljs.core.count(c__4679__auto___50445);
var G__50449 = (0);
seq__49560_50430 = G__50446;
chunk__49562_50431 = G__50447;
count__49563_50432 = G__50448;
i__49564_50433 = G__50449;
continue;
} else {
var child_50450 = cljs.core.first(seq__49560_50444__$1);
if(cljs.core.truth_(child_50450)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50450);


var G__50451 = cljs.core.next(seq__49560_50444__$1);
var G__50452 = null;
var G__50453 = (0);
var G__50454 = (0);
seq__49560_50430 = G__50451;
chunk__49562_50431 = G__50452;
count__49563_50432 = G__50453;
i__49564_50433 = G__50454;
continue;
} else {
var G__50456 = cljs.core.next(seq__49560_50444__$1);
var G__50457 = null;
var G__50458 = (0);
var G__50459 = (0);
seq__49560_50430 = G__50456;
chunk__49562_50431 = G__50457;
count__49563_50432 = G__50458;
i__49564_50433 = G__50459;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50429);
}


var G__50461 = seq__49521_50423;
var G__50462 = chunk__49522_50424;
var G__50463 = count__49523_50425;
var G__50464 = (i__49524_50426 + (1));
seq__49521_50423 = G__50461;
chunk__49522_50424 = G__50462;
count__49523_50425 = G__50463;
i__49524_50426 = G__50464;
continue;
} else {
var temp__5753__auto___50465 = cljs.core.seq(seq__49521_50423);
if(temp__5753__auto___50465){
var seq__49521_50466__$1 = temp__5753__auto___50465;
if(cljs.core.chunked_seq_QMARK_(seq__49521_50466__$1)){
var c__4679__auto___50467 = cljs.core.chunk_first(seq__49521_50466__$1);
var G__50468 = cljs.core.chunk_rest(seq__49521_50466__$1);
var G__50469 = c__4679__auto___50467;
var G__50470 = cljs.core.count(c__4679__auto___50467);
var G__50471 = (0);
seq__49521_50423 = G__50468;
chunk__49522_50424 = G__50469;
count__49523_50425 = G__50470;
i__49524_50426 = G__50471;
continue;
} else {
var child_struct_50472 = cljs.core.first(seq__49521_50466__$1);
var children_50473 = shadow.dom.dom_node(child_struct_50472);
if(cljs.core.seq_QMARK_(children_50473)){
var seq__49574_50474 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50473));
var chunk__49576_50475 = null;
var count__49577_50476 = (0);
var i__49578_50477 = (0);
while(true){
if((i__49578_50477 < count__49577_50476)){
var child_50478 = chunk__49576_50475.cljs$core$IIndexed$_nth$arity$2(null,i__49578_50477);
if(cljs.core.truth_(child_50478)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50478);


var G__50479 = seq__49574_50474;
var G__50480 = chunk__49576_50475;
var G__50481 = count__49577_50476;
var G__50482 = (i__49578_50477 + (1));
seq__49574_50474 = G__50479;
chunk__49576_50475 = G__50480;
count__49577_50476 = G__50481;
i__49578_50477 = G__50482;
continue;
} else {
var G__50485 = seq__49574_50474;
var G__50486 = chunk__49576_50475;
var G__50487 = count__49577_50476;
var G__50488 = (i__49578_50477 + (1));
seq__49574_50474 = G__50485;
chunk__49576_50475 = G__50486;
count__49577_50476 = G__50487;
i__49578_50477 = G__50488;
continue;
}
} else {
var temp__5753__auto___50489__$1 = cljs.core.seq(seq__49574_50474);
if(temp__5753__auto___50489__$1){
var seq__49574_50492__$1 = temp__5753__auto___50489__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49574_50492__$1)){
var c__4679__auto___50493 = cljs.core.chunk_first(seq__49574_50492__$1);
var G__50494 = cljs.core.chunk_rest(seq__49574_50492__$1);
var G__50495 = c__4679__auto___50493;
var G__50496 = cljs.core.count(c__4679__auto___50493);
var G__50497 = (0);
seq__49574_50474 = G__50494;
chunk__49576_50475 = G__50495;
count__49577_50476 = G__50496;
i__49578_50477 = G__50497;
continue;
} else {
var child_50499 = cljs.core.first(seq__49574_50492__$1);
if(cljs.core.truth_(child_50499)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50499);


var G__50500 = cljs.core.next(seq__49574_50492__$1);
var G__50501 = null;
var G__50502 = (0);
var G__50503 = (0);
seq__49574_50474 = G__50500;
chunk__49576_50475 = G__50501;
count__49577_50476 = G__50502;
i__49578_50477 = G__50503;
continue;
} else {
var G__50504 = cljs.core.next(seq__49574_50492__$1);
var G__50505 = null;
var G__50506 = (0);
var G__50507 = (0);
seq__49574_50474 = G__50504;
chunk__49576_50475 = G__50505;
count__49577_50476 = G__50506;
i__49578_50477 = G__50507;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50473);
}


var G__50508 = cljs.core.next(seq__49521_50466__$1);
var G__50509 = null;
var G__50510 = (0);
var G__50511 = (0);
seq__49521_50423 = G__50508;
chunk__49522_50424 = G__50509;
count__49523_50425 = G__50510;
i__49524_50426 = G__50511;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49592 = cljs.core.seq(node);
var chunk__49593 = null;
var count__49594 = (0);
var i__49595 = (0);
while(true){
if((i__49595 < count__49594)){
var n = chunk__49593.cljs$core$IIndexed$_nth$arity$2(null,i__49595);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50518 = seq__49592;
var G__50519 = chunk__49593;
var G__50520 = count__49594;
var G__50521 = (i__49595 + (1));
seq__49592 = G__50518;
chunk__49593 = G__50519;
count__49594 = G__50520;
i__49595 = G__50521;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49592);
if(temp__5753__auto__){
var seq__49592__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49592__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49592__$1);
var G__50522 = cljs.core.chunk_rest(seq__49592__$1);
var G__50523 = c__4679__auto__;
var G__50524 = cljs.core.count(c__4679__auto__);
var G__50525 = (0);
seq__49592 = G__50522;
chunk__49593 = G__50523;
count__49594 = G__50524;
i__49595 = G__50525;
continue;
} else {
var n = cljs.core.first(seq__49592__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50526 = cljs.core.next(seq__49592__$1);
var G__50527 = null;
var G__50528 = (0);
var G__50529 = (0);
seq__49592 = G__50526;
chunk__49593 = G__50527;
count__49594 = G__50528;
i__49595 = G__50529;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49610 = arguments.length;
switch (G__49610) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49616 = arguments.length;
switch (G__49616) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49632 = arguments.length;
switch (G__49632) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50550 = arguments.length;
var i__4865__auto___50551 = (0);
while(true){
if((i__4865__auto___50551 < len__4864__auto___50550)){
args__4870__auto__.push((arguments[i__4865__auto___50551]));

var G__50552 = (i__4865__auto___50551 + (1));
i__4865__auto___50551 = G__50552;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49646_50554 = cljs.core.seq(nodes);
var chunk__49647_50555 = null;
var count__49648_50556 = (0);
var i__49649_50557 = (0);
while(true){
if((i__49649_50557 < count__49648_50556)){
var node_50559 = chunk__49647_50555.cljs$core$IIndexed$_nth$arity$2(null,i__49649_50557);
fragment.appendChild(shadow.dom._to_dom(node_50559));


var G__50560 = seq__49646_50554;
var G__50561 = chunk__49647_50555;
var G__50562 = count__49648_50556;
var G__50563 = (i__49649_50557 + (1));
seq__49646_50554 = G__50560;
chunk__49647_50555 = G__50561;
count__49648_50556 = G__50562;
i__49649_50557 = G__50563;
continue;
} else {
var temp__5753__auto___50564 = cljs.core.seq(seq__49646_50554);
if(temp__5753__auto___50564){
var seq__49646_50565__$1 = temp__5753__auto___50564;
if(cljs.core.chunked_seq_QMARK_(seq__49646_50565__$1)){
var c__4679__auto___50566 = cljs.core.chunk_first(seq__49646_50565__$1);
var G__50567 = cljs.core.chunk_rest(seq__49646_50565__$1);
var G__50568 = c__4679__auto___50566;
var G__50569 = cljs.core.count(c__4679__auto___50566);
var G__50570 = (0);
seq__49646_50554 = G__50567;
chunk__49647_50555 = G__50568;
count__49648_50556 = G__50569;
i__49649_50557 = G__50570;
continue;
} else {
var node_50571 = cljs.core.first(seq__49646_50565__$1);
fragment.appendChild(shadow.dom._to_dom(node_50571));


var G__50573 = cljs.core.next(seq__49646_50565__$1);
var G__50574 = null;
var G__50575 = (0);
var G__50576 = (0);
seq__49646_50554 = G__50573;
chunk__49647_50555 = G__50574;
count__49648_50556 = G__50575;
i__49649_50557 = G__50576;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49643){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49643));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49656_50577 = cljs.core.seq(scripts);
var chunk__49657_50578 = null;
var count__49658_50579 = (0);
var i__49659_50580 = (0);
while(true){
if((i__49659_50580 < count__49658_50579)){
var vec__49677_50581 = chunk__49657_50578.cljs$core$IIndexed$_nth$arity$2(null,i__49659_50580);
var script_tag_50582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49677_50581,(0),null);
var script_body_50583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49677_50581,(1),null);
eval(script_body_50583);


var G__50584 = seq__49656_50577;
var G__50585 = chunk__49657_50578;
var G__50586 = count__49658_50579;
var G__50587 = (i__49659_50580 + (1));
seq__49656_50577 = G__50584;
chunk__49657_50578 = G__50585;
count__49658_50579 = G__50586;
i__49659_50580 = G__50587;
continue;
} else {
var temp__5753__auto___50588 = cljs.core.seq(seq__49656_50577);
if(temp__5753__auto___50588){
var seq__49656_50589__$1 = temp__5753__auto___50588;
if(cljs.core.chunked_seq_QMARK_(seq__49656_50589__$1)){
var c__4679__auto___50590 = cljs.core.chunk_first(seq__49656_50589__$1);
var G__50591 = cljs.core.chunk_rest(seq__49656_50589__$1);
var G__50592 = c__4679__auto___50590;
var G__50593 = cljs.core.count(c__4679__auto___50590);
var G__50594 = (0);
seq__49656_50577 = G__50591;
chunk__49657_50578 = G__50592;
count__49658_50579 = G__50593;
i__49659_50580 = G__50594;
continue;
} else {
var vec__49683_50595 = cljs.core.first(seq__49656_50589__$1);
var script_tag_50596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49683_50595,(0),null);
var script_body_50597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49683_50595,(1),null);
eval(script_body_50597);


var G__50598 = cljs.core.next(seq__49656_50589__$1);
var G__50599 = null;
var G__50600 = (0);
var G__50601 = (0);
seq__49656_50577 = G__50598;
chunk__49657_50578 = G__50599;
count__49658_50579 = G__50600;
i__49659_50580 = G__50601;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49687){
var vec__49688 = p__49687;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49688,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49688,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49854 = arguments.length;
switch (G__49854) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49860 = cljs.core.seq(style_keys);
var chunk__49861 = null;
var count__49862 = (0);
var i__49863 = (0);
while(true){
if((i__49863 < count__49862)){
var it = chunk__49861.cljs$core$IIndexed$_nth$arity$2(null,i__49863);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50611 = seq__49860;
var G__50612 = chunk__49861;
var G__50613 = count__49862;
var G__50614 = (i__49863 + (1));
seq__49860 = G__50611;
chunk__49861 = G__50612;
count__49862 = G__50613;
i__49863 = G__50614;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49860);
if(temp__5753__auto__){
var seq__49860__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49860__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49860__$1);
var G__50615 = cljs.core.chunk_rest(seq__49860__$1);
var G__50616 = c__4679__auto__;
var G__50617 = cljs.core.count(c__4679__auto__);
var G__50618 = (0);
seq__49860 = G__50615;
chunk__49861 = G__50616;
count__49862 = G__50617;
i__49863 = G__50618;
continue;
} else {
var it = cljs.core.first(seq__49860__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50619 = cljs.core.next(seq__49860__$1);
var G__50620 = null;
var G__50621 = (0);
var G__50622 = (0);
seq__49860 = G__50619;
chunk__49861 = G__50620;
count__49862 = G__50621;
i__49863 = G__50622;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k49868,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__49882 = k49868;
var G__49882__$1 = (((G__49882 instanceof cljs.core.Keyword))?G__49882.fqn:null);
switch (G__49882__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49868,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__49885){
var vec__49887 = p__49885;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49887,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49887,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49867){
var self__ = this;
var G__49867__$1 = this;
return (new cljs.core.RecordIter((0),G__49867__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49869,other49870){
var self__ = this;
var this49869__$1 = this;
return (((!((other49870 == null)))) && ((((this49869__$1.constructor === other49870.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49869__$1.x,other49870.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49869__$1.y,other49870.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49869__$1.__extmap,other49870.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k49868){
var self__ = this;
var this__4509__auto____$1 = this;
var G__49905 = k49868;
var G__49905__$1 = (((G__49905 instanceof cljs.core.Keyword))?G__49905.fqn:null);
switch (G__49905__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49868);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__49867){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__49908 = cljs.core.keyword_identical_QMARK_;
var expr__49909 = k__4511__auto__;
if(cljs.core.truth_((pred__49908.cljs$core$IFn$_invoke$arity$2 ? pred__49908.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49909) : pred__49908.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49909)))){
return (new shadow.dom.Coordinate(G__49867,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49908.cljs$core$IFn$_invoke$arity$2 ? pred__49908.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49909) : pred__49908.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49909)))){
return (new shadow.dom.Coordinate(self__.x,G__49867,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__49867),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__49867){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49867,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49873){
var extmap__4542__auto__ = (function (){var G__49927 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49873,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49873)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49927);
} else {
return G__49927;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49873),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k49950,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__49965 = k49950;
var G__49965__$1 = (((G__49965 instanceof cljs.core.Keyword))?G__49965.fqn:null);
switch (G__49965__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49950,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__49972){
var vec__49974 = p__49972;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49974,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49974,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49949){
var self__ = this;
var G__49949__$1 = this;
return (new cljs.core.RecordIter((0),G__49949__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49951,other49952){
var self__ = this;
var this49951__$1 = this;
return (((!((other49952 == null)))) && ((((this49951__$1.constructor === other49952.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49951__$1.w,other49952.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49951__$1.h,other49952.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49951__$1.__extmap,other49952.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k49950){
var self__ = this;
var this__4509__auto____$1 = this;
var G__49994 = k49950;
var G__49994__$1 = (((G__49994 instanceof cljs.core.Keyword))?G__49994.fqn:null);
switch (G__49994__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49950);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__49949){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__49997 = cljs.core.keyword_identical_QMARK_;
var expr__49998 = k__4511__auto__;
if(cljs.core.truth_((pred__49997.cljs$core$IFn$_invoke$arity$2 ? pred__49997.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49998) : pred__49997.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49998)))){
return (new shadow.dom.Size(G__49949,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49997.cljs$core$IFn$_invoke$arity$2 ? pred__49997.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49998) : pred__49997.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49998)))){
return (new shadow.dom.Size(self__.w,G__49949,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__49949),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__49949){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49949,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49954){
var extmap__4542__auto__ = (function (){var G__50009 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49954,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49954)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50009);
} else {
return G__50009;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49954),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49954),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__50661 = (i + (1));
var G__50662 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50661;
ret = G__50662;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50034){
var vec__50035 = p__50034;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50035,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50045 = arguments.length;
switch (G__50045) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__50677 = ps;
var G__50678 = (i + (1));
el__$1 = G__50677;
i = G__50678;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50077 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50077,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50077,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50077,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50087_50702 = cljs.core.seq(props);
var chunk__50088_50703 = null;
var count__50089_50704 = (0);
var i__50090_50705 = (0);
while(true){
if((i__50090_50705 < count__50089_50704)){
var vec__50131_50706 = chunk__50088_50703.cljs$core$IIndexed$_nth$arity$2(null,i__50090_50705);
var k_50707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50131_50706,(0),null);
var v_50708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50131_50706,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_50707);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50707),v_50708);


var G__50714 = seq__50087_50702;
var G__50715 = chunk__50088_50703;
var G__50716 = count__50089_50704;
var G__50717 = (i__50090_50705 + (1));
seq__50087_50702 = G__50714;
chunk__50088_50703 = G__50715;
count__50089_50704 = G__50716;
i__50090_50705 = G__50717;
continue;
} else {
var temp__5753__auto___50718 = cljs.core.seq(seq__50087_50702);
if(temp__5753__auto___50718){
var seq__50087_50720__$1 = temp__5753__auto___50718;
if(cljs.core.chunked_seq_QMARK_(seq__50087_50720__$1)){
var c__4679__auto___50721 = cljs.core.chunk_first(seq__50087_50720__$1);
var G__50722 = cljs.core.chunk_rest(seq__50087_50720__$1);
var G__50723 = c__4679__auto___50721;
var G__50724 = cljs.core.count(c__4679__auto___50721);
var G__50725 = (0);
seq__50087_50702 = G__50722;
chunk__50088_50703 = G__50723;
count__50089_50704 = G__50724;
i__50090_50705 = G__50725;
continue;
} else {
var vec__50134_50726 = cljs.core.first(seq__50087_50720__$1);
var k_50727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50134_50726,(0),null);
var v_50728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50134_50726,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_50727);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50727),v_50728);


var G__50732 = cljs.core.next(seq__50087_50720__$1);
var G__50733 = null;
var G__50734 = (0);
var G__50735 = (0);
seq__50087_50702 = G__50732;
chunk__50088_50703 = G__50733;
count__50089_50704 = G__50734;
i__50090_50705 = G__50735;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50161 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50161,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50161,(1),null);
var seq__50164_50736 = cljs.core.seq(node_children);
var chunk__50166_50737 = null;
var count__50167_50738 = (0);
var i__50168_50739 = (0);
while(true){
if((i__50168_50739 < count__50167_50738)){
var child_struct_50744 = chunk__50166_50737.cljs$core$IIndexed$_nth$arity$2(null,i__50168_50739);
if((!((child_struct_50744 == null)))){
if(typeof child_struct_50744 === 'string'){
var text_50750 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50750),child_struct_50744].join(''));
} else {
var children_50753 = shadow.dom.svg_node(child_struct_50744);
if(cljs.core.seq_QMARK_(children_50753)){
var seq__50226_50754 = cljs.core.seq(children_50753);
var chunk__50228_50755 = null;
var count__50229_50756 = (0);
var i__50230_50757 = (0);
while(true){
if((i__50230_50757 < count__50229_50756)){
var child_50758 = chunk__50228_50755.cljs$core$IIndexed$_nth$arity$2(null,i__50230_50757);
if(cljs.core.truth_(child_50758)){
node.appendChild(child_50758);


var G__50760 = seq__50226_50754;
var G__50761 = chunk__50228_50755;
var G__50762 = count__50229_50756;
var G__50763 = (i__50230_50757 + (1));
seq__50226_50754 = G__50760;
chunk__50228_50755 = G__50761;
count__50229_50756 = G__50762;
i__50230_50757 = G__50763;
continue;
} else {
var G__50764 = seq__50226_50754;
var G__50765 = chunk__50228_50755;
var G__50766 = count__50229_50756;
var G__50767 = (i__50230_50757 + (1));
seq__50226_50754 = G__50764;
chunk__50228_50755 = G__50765;
count__50229_50756 = G__50766;
i__50230_50757 = G__50767;
continue;
}
} else {
var temp__5753__auto___50768 = cljs.core.seq(seq__50226_50754);
if(temp__5753__auto___50768){
var seq__50226_50769__$1 = temp__5753__auto___50768;
if(cljs.core.chunked_seq_QMARK_(seq__50226_50769__$1)){
var c__4679__auto___50770 = cljs.core.chunk_first(seq__50226_50769__$1);
var G__50771 = cljs.core.chunk_rest(seq__50226_50769__$1);
var G__50772 = c__4679__auto___50770;
var G__50773 = cljs.core.count(c__4679__auto___50770);
var G__50774 = (0);
seq__50226_50754 = G__50771;
chunk__50228_50755 = G__50772;
count__50229_50756 = G__50773;
i__50230_50757 = G__50774;
continue;
} else {
var child_50778 = cljs.core.first(seq__50226_50769__$1);
if(cljs.core.truth_(child_50778)){
node.appendChild(child_50778);


var G__50781 = cljs.core.next(seq__50226_50769__$1);
var G__50782 = null;
var G__50783 = (0);
var G__50784 = (0);
seq__50226_50754 = G__50781;
chunk__50228_50755 = G__50782;
count__50229_50756 = G__50783;
i__50230_50757 = G__50784;
continue;
} else {
var G__50786 = cljs.core.next(seq__50226_50769__$1);
var G__50787 = null;
var G__50788 = (0);
var G__50789 = (0);
seq__50226_50754 = G__50786;
chunk__50228_50755 = G__50787;
count__50229_50756 = G__50788;
i__50230_50757 = G__50789;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50753);
}
}


var G__50790 = seq__50164_50736;
var G__50791 = chunk__50166_50737;
var G__50792 = count__50167_50738;
var G__50793 = (i__50168_50739 + (1));
seq__50164_50736 = G__50790;
chunk__50166_50737 = G__50791;
count__50167_50738 = G__50792;
i__50168_50739 = G__50793;
continue;
} else {
var G__50794 = seq__50164_50736;
var G__50795 = chunk__50166_50737;
var G__50796 = count__50167_50738;
var G__50797 = (i__50168_50739 + (1));
seq__50164_50736 = G__50794;
chunk__50166_50737 = G__50795;
count__50167_50738 = G__50796;
i__50168_50739 = G__50797;
continue;
}
} else {
var temp__5753__auto___50799 = cljs.core.seq(seq__50164_50736);
if(temp__5753__auto___50799){
var seq__50164_50800__$1 = temp__5753__auto___50799;
if(cljs.core.chunked_seq_QMARK_(seq__50164_50800__$1)){
var c__4679__auto___50802 = cljs.core.chunk_first(seq__50164_50800__$1);
var G__50803 = cljs.core.chunk_rest(seq__50164_50800__$1);
var G__50804 = c__4679__auto___50802;
var G__50805 = cljs.core.count(c__4679__auto___50802);
var G__50806 = (0);
seq__50164_50736 = G__50803;
chunk__50166_50737 = G__50804;
count__50167_50738 = G__50805;
i__50168_50739 = G__50806;
continue;
} else {
var child_struct_50807 = cljs.core.first(seq__50164_50800__$1);
if((!((child_struct_50807 == null)))){
if(typeof child_struct_50807 === 'string'){
var text_50809 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50809),child_struct_50807].join(''));
} else {
var children_50811 = shadow.dom.svg_node(child_struct_50807);
if(cljs.core.seq_QMARK_(children_50811)){
var seq__50248_50812 = cljs.core.seq(children_50811);
var chunk__50250_50813 = null;
var count__50251_50814 = (0);
var i__50252_50815 = (0);
while(true){
if((i__50252_50815 < count__50251_50814)){
var child_50816 = chunk__50250_50813.cljs$core$IIndexed$_nth$arity$2(null,i__50252_50815);
if(cljs.core.truth_(child_50816)){
node.appendChild(child_50816);


var G__50817 = seq__50248_50812;
var G__50818 = chunk__50250_50813;
var G__50819 = count__50251_50814;
var G__50820 = (i__50252_50815 + (1));
seq__50248_50812 = G__50817;
chunk__50250_50813 = G__50818;
count__50251_50814 = G__50819;
i__50252_50815 = G__50820;
continue;
} else {
var G__50821 = seq__50248_50812;
var G__50822 = chunk__50250_50813;
var G__50823 = count__50251_50814;
var G__50824 = (i__50252_50815 + (1));
seq__50248_50812 = G__50821;
chunk__50250_50813 = G__50822;
count__50251_50814 = G__50823;
i__50252_50815 = G__50824;
continue;
}
} else {
var temp__5753__auto___50825__$1 = cljs.core.seq(seq__50248_50812);
if(temp__5753__auto___50825__$1){
var seq__50248_50826__$1 = temp__5753__auto___50825__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50248_50826__$1)){
var c__4679__auto___50827 = cljs.core.chunk_first(seq__50248_50826__$1);
var G__50828 = cljs.core.chunk_rest(seq__50248_50826__$1);
var G__50829 = c__4679__auto___50827;
var G__50830 = cljs.core.count(c__4679__auto___50827);
var G__50831 = (0);
seq__50248_50812 = G__50828;
chunk__50250_50813 = G__50829;
count__50251_50814 = G__50830;
i__50252_50815 = G__50831;
continue;
} else {
var child_50832 = cljs.core.first(seq__50248_50826__$1);
if(cljs.core.truth_(child_50832)){
node.appendChild(child_50832);


var G__50833 = cljs.core.next(seq__50248_50826__$1);
var G__50834 = null;
var G__50835 = (0);
var G__50836 = (0);
seq__50248_50812 = G__50833;
chunk__50250_50813 = G__50834;
count__50251_50814 = G__50835;
i__50252_50815 = G__50836;
continue;
} else {
var G__50837 = cljs.core.next(seq__50248_50826__$1);
var G__50838 = null;
var G__50839 = (0);
var G__50840 = (0);
seq__50248_50812 = G__50837;
chunk__50250_50813 = G__50838;
count__50251_50814 = G__50839;
i__50252_50815 = G__50840;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50811);
}
}


var G__50841 = cljs.core.next(seq__50164_50800__$1);
var G__50842 = null;
var G__50843 = (0);
var G__50844 = (0);
seq__50164_50736 = G__50841;
chunk__50166_50737 = G__50842;
count__50167_50738 = G__50843;
i__50168_50739 = G__50844;
continue;
} else {
var G__50845 = cljs.core.next(seq__50164_50800__$1);
var G__50846 = null;
var G__50847 = (0);
var G__50848 = (0);
seq__50164_50736 = G__50845;
chunk__50166_50737 = G__50846;
count__50167_50738 = G__50847;
i__50168_50739 = G__50848;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50857 = arguments.length;
var i__4865__auto___50858 = (0);
while(true){
if((i__4865__auto___50858 < len__4864__auto___50857)){
args__4870__auto__.push((arguments[i__4865__auto___50858]));

var G__50859 = (i__4865__auto___50858 + (1));
i__4865__auto___50858 = G__50859;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50264){
var G__50265 = cljs.core.first(seq50264);
var seq50264__$1 = cljs.core.next(seq50264);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50265,seq50264__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50280 = arguments.length;
switch (G__50280) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__46806__auto___50876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46807__auto__ = (function (){var switch__46454__auto__ = (function (state_50287){
var state_val_50288 = (state_50287[(1)]);
if((state_val_50288 === (1))){
var state_50287__$1 = state_50287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50287__$1,(2),once_or_cleanup);
} else {
if((state_val_50288 === (2))){
var inst_50284 = (state_50287[(2)]);
var inst_50285 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50287__$1 = (function (){var statearr_50289 = state_50287;
(statearr_50289[(7)] = inst_50284);

return statearr_50289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50287__$1,inst_50285);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46455__auto__ = null;
var shadow$dom$state_machine__46455__auto____0 = (function (){
var statearr_50290 = [null,null,null,null,null,null,null,null];
(statearr_50290[(0)] = shadow$dom$state_machine__46455__auto__);

(statearr_50290[(1)] = (1));

return statearr_50290;
});
var shadow$dom$state_machine__46455__auto____1 = (function (state_50287){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__(state_50287);
if(cljs.core.keyword_identical_QMARK_(result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e50291){var ex__46458__auto__ = e50291;
var statearr_50292_50880 = state_50287;
(statearr_50292_50880[(2)] = ex__46458__auto__);


if(cljs.core.seq((state_50287[(4)]))){
var statearr_50293_50881 = state_50287;
(statearr_50293_50881[(1)] = cljs.core.first((state_50287[(4)])));

} else {
throw ex__46458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50882 = state_50287;
state_50287 = G__50882;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
shadow$dom$state_machine__46455__auto__ = function(state_50287){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46455__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46455__auto____1.call(this,state_50287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46455__auto____0;
shadow$dom$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46455__auto____1;
return shadow$dom$state_machine__46455__auto__;
})()
})();
var state__46808__auto__ = (function (){var statearr_50297 = f__46807__auto__();
(statearr_50297[(6)] = c__46806__auto___50876);

return statearr_50297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46808__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
