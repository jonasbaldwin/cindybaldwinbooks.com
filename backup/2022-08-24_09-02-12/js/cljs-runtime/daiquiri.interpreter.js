goog.provide('daiquiri.interpreter');
goog.scope(function(){
  daiquiri.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__51860_51984 = cljs.core.seq(x);
var chunk__51861_51985 = null;
var count__51862_51986 = (0);
var i__51863_51987 = (0);
while(true){
if((i__51863_51987 < count__51862_51986)){
var vec__51872_51989 = chunk__51861_51985.cljs$core$IIndexed$_nth$arity$2(null,i__51863_51987);
var k_51990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51872_51989,(0),null);
var v_51991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51872_51989,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_51990),v_51991);


var G__51992 = seq__51860_51984;
var G__51993 = chunk__51861_51985;
var G__51994 = count__51862_51986;
var G__51995 = (i__51863_51987 + (1));
seq__51860_51984 = G__51992;
chunk__51861_51985 = G__51993;
count__51862_51986 = G__51994;
i__51863_51987 = G__51995;
continue;
} else {
var temp__5753__auto___51996 = cljs.core.seq(seq__51860_51984);
if(temp__5753__auto___51996){
var seq__51860_51997__$1 = temp__5753__auto___51996;
if(cljs.core.chunked_seq_QMARK_(seq__51860_51997__$1)){
var c__4679__auto___51998 = cljs.core.chunk_first(seq__51860_51997__$1);
var G__51999 = cljs.core.chunk_rest(seq__51860_51997__$1);
var G__52000 = c__4679__auto___51998;
var G__52001 = cljs.core.count(c__4679__auto___51998);
var G__52002 = (0);
seq__51860_51984 = G__51999;
chunk__51861_51985 = G__52000;
count__51862_51986 = G__52001;
i__51863_51987 = G__52002;
continue;
} else {
var vec__51876_52003 = cljs.core.first(seq__51860_51997__$1);
var k_52004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51876_52003,(0),null);
var v_52005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51876_52003,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_52004),v_52005);


var G__52006 = cljs.core.next(seq__51860_51997__$1);
var G__52007 = null;
var G__52008 = (0);
var G__52009 = (0);
seq__51860_51984 = G__52006;
chunk__51861_51985 = G__52007;
count__51862_51986 = G__52008;
i__51863_51987 = G__52009;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5753__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5753__auto__)){
var js_attrs = temp__5753__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__51926 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51926,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51926,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51926,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__51940){
var vec__51941 = p__51940;
var seq__51942 = cljs.core.seq(vec__51941);
var first__51943 = cljs.core.first(seq__51942);
var seq__51942__$1 = cljs.core.next(seq__51942);
var _ = first__51943;
var first__51943__$1 = cljs.core.first(seq__51942__$1);
var seq__51942__$2 = cljs.core.next(seq__51942__$1);
var attrs = first__51943__$1;
var children = seq__51942__$2;
var vec__51956 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51956,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51956,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__51976){
var vec__51977 = p__51976;
var seq__51978 = cljs.core.seq(vec__51977);
var first__51979 = cljs.core.first(seq__51978);
var seq__51978__$1 = cljs.core.next(seq__51978);
var _ = first__51979;
var first__51979__$1 = cljs.core.first(seq__51978__$1);
var seq__51978__$2 = cljs.core.next(seq__51978__$1);
var component = first__51979__$1;
var first__51979__$2 = cljs.core.first(seq__51978__$2);
var seq__51978__$3 = cljs.core.next(seq__51978__$2);
var attrs = first__51979__$2;
var children = seq__51978__$3;
var vec__51980 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51980,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51980,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
