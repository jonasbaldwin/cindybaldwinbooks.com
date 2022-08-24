// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23922__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23919 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23920 = cljs.core.seq.call(null,vec__23919);
var first__23921 = cljs.core.first.call(null,seq__23920);
var seq__23920__$1 = cljs.core.next.call(null,seq__23920);
var tag = first__23921;
var body = seq__23920__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23923__i = 0, G__23923__a = new Array(arguments.length -  0);
while (G__23923__i < G__23923__a.length) {G__23923__a[G__23923__i] = arguments[G__23923__i + 0]; ++G__23923__i;}
  args = new cljs.core.IndexedSeq(G__23923__a,0,null);
} 
return G__23922__delegate.call(this,args);};
G__23922.cljs$lang$maxFixedArity = 0;
G__23922.cljs$lang$applyTo = (function (arglist__23924){
var args = cljs.core.seq(arglist__23924);
return G__23922__delegate(args);
});
G__23922.cljs$core$IFn$_invoke$arity$variadic = G__23922__delegate;
return G__23922;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__23925(s__23926){
return (new cljs.core.LazySeq(null,(function (){
var s__23926__$1 = s__23926;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23926__$1);
if(temp__5735__auto__){
var s__23926__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23926__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23926__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23928 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23927 = (0);
while(true){
if((i__23927 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__23927);
cljs.core.chunk_append.call(null,b__23928,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23929 = (i__23927 + (1));
i__23927 = G__23929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23928),sablono$core$update_arglists_$_iter__23925.call(null,cljs.core.chunk_rest.call(null,s__23926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23928),null);
}
} else {
var args = cljs.core.first.call(null,s__23926__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23925.call(null,cljs.core.rest.call(null,s__23926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23935 = arguments.length;
var i__4731__auto___23936 = (0);
while(true){
if((i__4731__auto___23936 < len__4730__auto___23935)){
args__4736__auto__.push((arguments[i__4731__auto___23936]));

var G__23937 = (i__4731__auto___23936 + (1));
i__4731__auto___23936 = G__23937;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__23931(s__23932){
return (new cljs.core.LazySeq(null,(function (){
var s__23932__$1 = s__23932;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23932__$1);
if(temp__5735__auto__){
var s__23932__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23932__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23932__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23934 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23933 = (0);
while(true){
if((i__23933 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__23933);
cljs.core.chunk_append.call(null,b__23934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23938 = (i__23933 + (1));
i__23933 = G__23938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23934),sablono$core$iter__23931.call(null,cljs.core.chunk_rest.call(null,s__23932__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23934),null);
}
} else {
var style = cljs.core.first.call(null,s__23932__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23931.call(null,cljs.core.rest.call(null,s__23932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23930){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23930));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23939 = (function sablono$core$link_to23939(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23942 = arguments.length;
var i__4731__auto___23943 = (0);
while(true){
if((i__4731__auto___23943 < len__4730__auto___23942)){
args__4736__auto__.push((arguments[i__4731__auto___23943]));

var G__23944 = (i__4731__auto___23943 + (1));
i__4731__auto___23943 = G__23944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23939.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to23939.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23939.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23939.cljs$lang$applyTo = (function (seq23940){
var G__23941 = cljs.core.first.call(null,seq23940);
var seq23940__$1 = cljs.core.next.call(null,seq23940);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23941,seq23940__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23939);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23945 = (function sablono$core$mail_to23945(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23952 = arguments.length;
var i__4731__auto___23953 = (0);
while(true){
if((i__4731__auto___23953 < len__4730__auto___23952)){
args__4736__auto__.push((arguments[i__4731__auto___23953]));

var G__23954 = (i__4731__auto___23953 + (1));
i__4731__auto___23953 = G__23954;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23945.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to23945.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23948){
var vec__23949 = p__23948;
var content = cljs.core.nth.call(null,vec__23949,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23945.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23945.cljs$lang$applyTo = (function (seq23946){
var G__23947 = cljs.core.first.call(null,seq23946);
var seq23946__$1 = cljs.core.next.call(null,seq23946);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23947,seq23946__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23945);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23955 = (function sablono$core$unordered_list23955(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list23955_$_iter__23956(s__23957){
return (new cljs.core.LazySeq(null,(function (){
var s__23957__$1 = s__23957;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23957__$1);
if(temp__5735__auto__){
var s__23957__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23957__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23957__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23959 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23958 = (0);
while(true){
if((i__23958 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23958);
cljs.core.chunk_append.call(null,b__23959,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23960 = (i__23958 + (1));
i__23958 = G__23960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23959),sablono$core$unordered_list23955_$_iter__23956.call(null,cljs.core.chunk_rest.call(null,s__23957__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23959),null);
}
} else {
var x = cljs.core.first.call(null,s__23957__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23955_$_iter__23956.call(null,cljs.core.rest.call(null,s__23957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23955);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23961 = (function sablono$core$ordered_list23961(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list23961_$_iter__23962(s__23963){
return (new cljs.core.LazySeq(null,(function (){
var s__23963__$1 = s__23963;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23963__$1);
if(temp__5735__auto__){
var s__23963__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23963__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23963__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23965 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23964 = (0);
while(true){
if((i__23964 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23964);
cljs.core.chunk_append.call(null,b__23965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23966 = (i__23964 + (1));
i__23964 = G__23966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23965),sablono$core$ordered_list23961_$_iter__23962.call(null,cljs.core.chunk_rest.call(null,s__23963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23965),null);
}
} else {
var x = cljs.core.first.call(null,s__23963__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23961_$_iter__23962.call(null,cljs.core.rest.call(null,s__23963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23961);
/**
 * Create an image element.
 */
sablono.core.image23967 = (function sablono$core$image23967(var_args){
var G__23969 = arguments.length;
switch (G__23969) {
case 1:
return sablono.core.image23967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23967.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23967.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23967.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23967);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23971_SHARP_,p2__23972_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23971_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23972_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23973_SHARP_,p2__23974_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23973_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23974_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23976 = arguments.length;
switch (G__23976) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23978 = (function sablono$core$color_field23978(var_args){
var G__23980 = arguments.length;
switch (G__23980) {
case 1:
return sablono.core.color_field23978.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23978.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23978.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23909__auto__);
});

sablono.core.color_field23978.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.color_field23978.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23978);

/**
 * Creates a date input field.
 */
sablono.core.date_field23981 = (function sablono$core$date_field23981(var_args){
var G__23983 = arguments.length;
switch (G__23983) {
case 1:
return sablono.core.date_field23981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23981.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23909__auto__);
});

sablono.core.date_field23981.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.date_field23981.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23981);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23984 = (function sablono$core$datetime_field23984(var_args){
var G__23986 = arguments.length;
switch (G__23986) {
case 1:
return sablono.core.datetime_field23984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23984.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23909__auto__);
});

sablono.core.datetime_field23984.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.datetime_field23984.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23984);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23987 = (function sablono$core$datetime_local_field23987(var_args){
var G__23989 = arguments.length;
switch (G__23989) {
case 1:
return sablono.core.datetime_local_field23987.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23987.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23987.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23909__auto__);
});

sablono.core.datetime_local_field23987.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.datetime_local_field23987.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23987);

/**
 * Creates a email input field.
 */
sablono.core.email_field23990 = (function sablono$core$email_field23990(var_args){
var G__23992 = arguments.length;
switch (G__23992) {
case 1:
return sablono.core.email_field23990.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23990.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23990.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23909__auto__);
});

sablono.core.email_field23990.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.email_field23990.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23990);

/**
 * Creates a file input field.
 */
sablono.core.file_field23993 = (function sablono$core$file_field23993(var_args){
var G__23995 = arguments.length;
switch (G__23995) {
case 1:
return sablono.core.file_field23993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23993.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23909__auto__);
});

sablono.core.file_field23993.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.file_field23993.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23993);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23996 = (function sablono$core$hidden_field23996(var_args){
var G__23998 = arguments.length;
switch (G__23998) {
case 1:
return sablono.core.hidden_field23996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23996.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23909__auto__);
});

sablono.core.hidden_field23996.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.hidden_field23996.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23996);

/**
 * Creates a month input field.
 */
sablono.core.month_field23999 = (function sablono$core$month_field23999(var_args){
var G__24001 = arguments.length;
switch (G__24001) {
case 1:
return sablono.core.month_field23999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23999.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23909__auto__);
});

sablono.core.month_field23999.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.month_field23999.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23999);

/**
 * Creates a number input field.
 */
sablono.core.number_field24002 = (function sablono$core$number_field24002(var_args){
var G__24004 = arguments.length;
switch (G__24004) {
case 1:
return sablono.core.number_field24002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field24002.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23909__auto__);
});

sablono.core.number_field24002.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.number_field24002.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24002);

/**
 * Creates a password input field.
 */
sablono.core.password_field24005 = (function sablono$core$password_field24005(var_args){
var G__24007 = arguments.length;
switch (G__24007) {
case 1:
return sablono.core.password_field24005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field24005.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23909__auto__);
});

sablono.core.password_field24005.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.password_field24005.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24005);

/**
 * Creates a range input field.
 */
sablono.core.range_field24008 = (function sablono$core$range_field24008(var_args){
var G__24010 = arguments.length;
switch (G__24010) {
case 1:
return sablono.core.range_field24008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field24008.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23909__auto__);
});

sablono.core.range_field24008.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.range_field24008.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24008);

/**
 * Creates a search input field.
 */
sablono.core.search_field24011 = (function sablono$core$search_field24011(var_args){
var G__24013 = arguments.length;
switch (G__24013) {
case 1:
return sablono.core.search_field24011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field24011.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23909__auto__);
});

sablono.core.search_field24011.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.search_field24011.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24011);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24014 = (function sablono$core$tel_field24014(var_args){
var G__24016 = arguments.length;
switch (G__24016) {
case 1:
return sablono.core.tel_field24014.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24014.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field24014.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23909__auto__);
});

sablono.core.tel_field24014.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.tel_field24014.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24014);

/**
 * Creates a text input field.
 */
sablono.core.text_field24017 = (function sablono$core$text_field24017(var_args){
var G__24019 = arguments.length;
switch (G__24019) {
case 1:
return sablono.core.text_field24017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field24017.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23909__auto__);
});

sablono.core.text_field24017.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.text_field24017.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24017);

/**
 * Creates a time input field.
 */
sablono.core.time_field24020 = (function sablono$core$time_field24020(var_args){
var G__24022 = arguments.length;
switch (G__24022) {
case 1:
return sablono.core.time_field24020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field24020.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23909__auto__);
});

sablono.core.time_field24020.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.time_field24020.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24020);

/**
 * Creates a url input field.
 */
sablono.core.url_field24023 = (function sablono$core$url_field24023(var_args){
var G__24025 = arguments.length;
switch (G__24025) {
case 1:
return sablono.core.url_field24023.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24023.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field24023.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23909__auto__);
});

sablono.core.url_field24023.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.url_field24023.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24023);

/**
 * Creates a week input field.
 */
sablono.core.week_field24026 = (function sablono$core$week_field24026(var_args){
var G__24028 = arguments.length;
switch (G__24028) {
case 1:
return sablono.core.week_field24026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field24026.cljs$core$IFn$_invoke$arity$1 = (function (name__23909__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23909__auto__);
});

sablono.core.week_field24026.cljs$core$IFn$_invoke$arity$2 = (function (name__23909__auto__,value__23910__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23909__auto__,value__23910__auto__);
});

sablono.core.week_field24026.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24026);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24046 = (function sablono$core$check_box24046(var_args){
var G__24048 = arguments.length;
switch (G__24048) {
case 1:
return sablono.core.check_box24046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24046.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box24046.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box24046.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24046.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24046.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24046);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24050 = (function sablono$core$radio_button24050(var_args){
var G__24052 = arguments.length;
switch (G__24052) {
case 1:
return sablono.core.radio_button24050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24050.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button24050.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button24050.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24050.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24050.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24050);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24054 = (function sablono$core$select_options24054(coll){
var iter__4523__auto__ = (function sablono$core$select_options24054_$_iter__24055(s__24056){
return (new cljs.core.LazySeq(null,(function (){
var s__24056__$1 = s__24056;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__24056__$1);
if(temp__5735__auto__){
var s__24056__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24056__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24056__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24058 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24057 = (0);
while(true){
if((i__24057 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__24057);
cljs.core.chunk_append.call(null,b__24058,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24059 = x;
var text = cljs.core.nth.call(null,vec__24059,(0),null);
var val = cljs.core.nth.call(null,vec__24059,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24059,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options24054.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24065 = (i__24057 + (1));
i__24057 = G__24065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24058),sablono$core$select_options24054_$_iter__24055.call(null,cljs.core.chunk_rest.call(null,s__24056__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24058),null);
}
} else {
var x = cljs.core.first.call(null,s__24056__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24062 = x;
var text = cljs.core.nth.call(null,vec__24062,(0),null);
var val = cljs.core.nth.call(null,vec__24062,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24062,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options24054.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24054_$_iter__24055.call(null,cljs.core.rest.call(null,s__24056__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24054);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24066 = (function sablono$core$drop_down24066(var_args){
var G__24068 = arguments.length;
switch (G__24068) {
case 2:
return sablono.core.drop_down24066.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24066.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down24066.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24066.call(null,name,options,null);
});

sablono.core.drop_down24066.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24066.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24066);
/**
 * Creates a text area element.
 */
sablono.core.text_area24070 = (function sablono$core$text_area24070(var_args){
var G__24072 = arguments.length;
switch (G__24072) {
case 1:
return sablono.core.text_area24070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area24070.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area24070.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area24070.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24070);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24074 = (function sablono$core$label24074(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24074);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24075 = (function sablono$core$submit_button24075(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24075);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24076 = (function sablono$core$reset_button24076(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24076);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24077 = (function sablono$core$form_to24077(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24084 = arguments.length;
var i__4731__auto___24085 = (0);
while(true){
if((i__4731__auto___24085 < len__4730__auto___24084)){
args__4736__auto__.push((arguments[i__4731__auto___24085]));

var G__24086 = (i__4731__auto___24085 + (1));
i__4731__auto___24085 = G__24086;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to24077.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to24077.cljs$core$IFn$_invoke$arity$variadic = (function (p__24080,body){
var vec__24081 = p__24080;
var method = cljs.core.nth.call(null,vec__24081,(0),null);
var action = cljs.core.nth.call(null,vec__24081,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24077.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to24077.cljs$lang$applyTo = (function (seq24078){
var G__24079 = cljs.core.first.call(null,seq24078);
var seq24078__$1 = cljs.core.next.call(null,seq24078);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24079,seq24078__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24077);

//# sourceMappingURL=core.js.map?rel=1560468645371
