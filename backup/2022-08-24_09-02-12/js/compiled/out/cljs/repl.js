// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33497){
var map__33498 = p__33497;
var map__33498__$1 = (((((!((map__33498 == null))))?(((((map__33498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33498):map__33498);
var m = map__33498__$1;
var n = cljs.core.get.call(null,map__33498__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33498__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33500_33532 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33501_33533 = null;
var count__33502_33534 = (0);
var i__33503_33535 = (0);
while(true){
if((i__33503_33535 < count__33502_33534)){
var f_33536 = cljs.core._nth.call(null,chunk__33501_33533,i__33503_33535);
cljs.core.println.call(null,"  ",f_33536);


var G__33537 = seq__33500_33532;
var G__33538 = chunk__33501_33533;
var G__33539 = count__33502_33534;
var G__33540 = (i__33503_33535 + (1));
seq__33500_33532 = G__33537;
chunk__33501_33533 = G__33538;
count__33502_33534 = G__33539;
i__33503_33535 = G__33540;
continue;
} else {
var temp__5735__auto___33541 = cljs.core.seq.call(null,seq__33500_33532);
if(temp__5735__auto___33541){
var seq__33500_33542__$1 = temp__5735__auto___33541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33500_33542__$1)){
var c__4550__auto___33543 = cljs.core.chunk_first.call(null,seq__33500_33542__$1);
var G__33544 = cljs.core.chunk_rest.call(null,seq__33500_33542__$1);
var G__33545 = c__4550__auto___33543;
var G__33546 = cljs.core.count.call(null,c__4550__auto___33543);
var G__33547 = (0);
seq__33500_33532 = G__33544;
chunk__33501_33533 = G__33545;
count__33502_33534 = G__33546;
i__33503_33535 = G__33547;
continue;
} else {
var f_33548 = cljs.core.first.call(null,seq__33500_33542__$1);
cljs.core.println.call(null,"  ",f_33548);


var G__33549 = cljs.core.next.call(null,seq__33500_33542__$1);
var G__33550 = null;
var G__33551 = (0);
var G__33552 = (0);
seq__33500_33532 = G__33549;
chunk__33501_33533 = G__33550;
count__33502_33534 = G__33551;
i__33503_33535 = G__33552;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33553 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33553);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33553)))?cljs.core.second.call(null,arglists_33553):arglists_33553));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33504_33554 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33505_33555 = null;
var count__33506_33556 = (0);
var i__33507_33557 = (0);
while(true){
if((i__33507_33557 < count__33506_33556)){
var vec__33518_33558 = cljs.core._nth.call(null,chunk__33505_33555,i__33507_33557);
var name_33559 = cljs.core.nth.call(null,vec__33518_33558,(0),null);
var map__33521_33560 = cljs.core.nth.call(null,vec__33518_33558,(1),null);
var map__33521_33561__$1 = (((((!((map__33521_33560 == null))))?(((((map__33521_33560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33521_33560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33521_33560):map__33521_33560);
var doc_33562 = cljs.core.get.call(null,map__33521_33561__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33563 = cljs.core.get.call(null,map__33521_33561__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33559);

cljs.core.println.call(null," ",arglists_33563);

if(cljs.core.truth_(doc_33562)){
cljs.core.println.call(null," ",doc_33562);
} else {
}


var G__33564 = seq__33504_33554;
var G__33565 = chunk__33505_33555;
var G__33566 = count__33506_33556;
var G__33567 = (i__33507_33557 + (1));
seq__33504_33554 = G__33564;
chunk__33505_33555 = G__33565;
count__33506_33556 = G__33566;
i__33507_33557 = G__33567;
continue;
} else {
var temp__5735__auto___33568 = cljs.core.seq.call(null,seq__33504_33554);
if(temp__5735__auto___33568){
var seq__33504_33569__$1 = temp__5735__auto___33568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33504_33569__$1)){
var c__4550__auto___33570 = cljs.core.chunk_first.call(null,seq__33504_33569__$1);
var G__33571 = cljs.core.chunk_rest.call(null,seq__33504_33569__$1);
var G__33572 = c__4550__auto___33570;
var G__33573 = cljs.core.count.call(null,c__4550__auto___33570);
var G__33574 = (0);
seq__33504_33554 = G__33571;
chunk__33505_33555 = G__33572;
count__33506_33556 = G__33573;
i__33507_33557 = G__33574;
continue;
} else {
var vec__33523_33575 = cljs.core.first.call(null,seq__33504_33569__$1);
var name_33576 = cljs.core.nth.call(null,vec__33523_33575,(0),null);
var map__33526_33577 = cljs.core.nth.call(null,vec__33523_33575,(1),null);
var map__33526_33578__$1 = (((((!((map__33526_33577 == null))))?(((((map__33526_33577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33526_33577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33526_33577):map__33526_33577);
var doc_33579 = cljs.core.get.call(null,map__33526_33578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33580 = cljs.core.get.call(null,map__33526_33578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33576);

cljs.core.println.call(null," ",arglists_33580);

if(cljs.core.truth_(doc_33579)){
cljs.core.println.call(null," ",doc_33579);
} else {
}


var G__33581 = cljs.core.next.call(null,seq__33504_33569__$1);
var G__33582 = null;
var G__33583 = (0);
var G__33584 = (0);
seq__33504_33554 = G__33581;
chunk__33505_33555 = G__33582;
count__33506_33556 = G__33583;
i__33507_33557 = G__33584;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__33528 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33529 = null;
var count__33530 = (0);
var i__33531 = (0);
while(true){
if((i__33531 < count__33530)){
var role = cljs.core._nth.call(null,chunk__33529,i__33531);
var temp__5735__auto___33585__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___33585__$1)){
var spec_33586 = temp__5735__auto___33585__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33586));
} else {
}


var G__33587 = seq__33528;
var G__33588 = chunk__33529;
var G__33589 = count__33530;
var G__33590 = (i__33531 + (1));
seq__33528 = G__33587;
chunk__33529 = G__33588;
count__33530 = G__33589;
i__33531 = G__33590;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__33528);
if(temp__5735__auto____$1){
var seq__33528__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33528__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33528__$1);
var G__33591 = cljs.core.chunk_rest.call(null,seq__33528__$1);
var G__33592 = c__4550__auto__;
var G__33593 = cljs.core.count.call(null,c__4550__auto__);
var G__33594 = (0);
seq__33528 = G__33591;
chunk__33529 = G__33592;
count__33530 = G__33593;
i__33531 = G__33594;
continue;
} else {
var role = cljs.core.first.call(null,seq__33528__$1);
var temp__5735__auto___33595__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___33595__$2)){
var spec_33596 = temp__5735__auto___33595__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33596));
} else {
}


var G__33597 = cljs.core.next.call(null,seq__33528__$1);
var G__33598 = null;
var G__33599 = (0);
var G__33600 = (0);
seq__33528 = G__33597;
chunk__33529 = G__33598;
count__33530 = G__33599;
i__33531 = G__33600;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__33601 = cljs.core.conj.call(null,via,t);
var G__33602 = cljs.core.ex_cause.call(null,t);
via = G__33601;
t = G__33602;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__33605 = datafied_throwable;
var map__33605__$1 = (((((!((map__33605 == null))))?(((((map__33605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33605):map__33605);
var via = cljs.core.get.call(null,map__33605__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33605__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__33605__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33606 = cljs.core.last.call(null,via);
var map__33606__$1 = (((((!((map__33606 == null))))?(((((map__33606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33606):map__33606);
var type = cljs.core.get.call(null,map__33606__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33606__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__33606__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33607 = data;
var map__33607__$1 = (((((!((map__33607 == null))))?(((((map__33607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33607):map__33607);
var problems = cljs.core.get.call(null,map__33607__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__33607__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__33607__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33608 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__33608__$1 = (((((!((map__33608 == null))))?(((((map__33608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33608):map__33608);
var top_data = map__33608__$1;
var source = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__33613 = phase;
var G__33613__$1 = (((G__33613 instanceof cljs.core.Keyword))?G__33613.fqn:null);
switch (G__33613__$1) {
case "read-source":
var map__33614 = data;
var map__33614__$1 = (((((!((map__33614 == null))))?(((((map__33614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33614):map__33614);
var line = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33616 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__33616__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33616,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33616);
var G__33616__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33616__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33616__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33616__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33616__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33617 = top_data;
var G__33617__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33617,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33617);
var G__33617__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33617__$1);
var G__33617__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33617__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33617__$2);
var G__33617__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33617__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33617__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33617__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33617__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33618 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33618,(0),null);
var method = cljs.core.nth.call(null,vec__33618,(1),null);
var file = cljs.core.nth.call(null,vec__33618,(2),null);
var line = cljs.core.nth.call(null,vec__33618,(3),null);
var G__33621 = top_data;
var G__33621__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__33621,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33621);
var G__33621__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__33621__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33621__$1);
var G__33621__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__33621__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33621__$2);
var G__33621__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33621__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33621__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33621__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33621__$4;
}

break;
case "execution":
var vec__33622 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33622,(0),null);
var method = cljs.core.nth.call(null,vec__33622,(1),null);
var file = cljs.core.nth.call(null,vec__33622,(2),null);
var line = cljs.core.nth.call(null,vec__33622,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__33622,source__$1,method,file,line,G__33613,G__33613__$1,map__33605,map__33605__$1,via,trace,phase,map__33606,map__33606__$1,type,message,data,map__33607,map__33607__$1,problems,fn,caller,map__33608,map__33608__$1,top_data,source){
return (function (p1__33604_SHARP_){
var or__4131__auto__ = (p1__33604_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__33604_SHARP_);
}
});})(vec__33622,source__$1,method,file,line,G__33613,G__33613__$1,map__33605,map__33605__$1,via,trace,phase,map__33606,map__33606__$1,type,message,data,map__33607,map__33607__$1,problems,fn,caller,map__33608,map__33608__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__33625 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33625__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__33625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33625);
var G__33625__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33625__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33625__$1);
var G__33625__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__33625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33625__$2);
var G__33625__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__33625__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33625__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33625__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33625__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33613__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33629){
var map__33630 = p__33629;
var map__33630__$1 = (((((!((map__33630 == null))))?(((((map__33630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33630):map__33630);
var triage_data = map__33630__$1;
var phase = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33632 = phase;
var G__33632__$1 = (((G__33632 instanceof cljs.core.Keyword))?G__33632.fqn:null);
switch (G__33632__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33633_33642 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33634_33643 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33635_33644 = true;
var _STAR_print_fn_STAR__temp_val__33636_33645 = ((function (_STAR_print_newline_STAR__orig_val__33633_33642,_STAR_print_fn_STAR__orig_val__33634_33643,_STAR_print_newline_STAR__temp_val__33635_33644,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33633_33642,_STAR_print_fn_STAR__orig_val__33634_33643,_STAR_print_newline_STAR__temp_val__33635_33644,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33635_33644;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33636_33645;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33633_33642,_STAR_print_fn_STAR__orig_val__33634_33643,_STAR_print_newline_STAR__temp_val__33635_33644,_STAR_print_fn_STAR__temp_val__33636_33645,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33633_33642,_STAR_print_fn_STAR__orig_val__33634_33643,_STAR_print_newline_STAR__temp_val__33635_33644,_STAR_print_fn_STAR__temp_val__33636_33645,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33627_SHARP_){
return cljs.core.dissoc.call(null,p1__33627_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33633_33642,_STAR_print_fn_STAR__orig_val__33634_33643,_STAR_print_newline_STAR__temp_val__33635_33644,_STAR_print_fn_STAR__temp_val__33636_33645,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33633_33642,_STAR_print_fn_STAR__orig_val__33634_33643,_STAR_print_newline_STAR__temp_val__33635_33644,_STAR_print_fn_STAR__temp_val__33636_33645,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33634_33643;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33633_33642;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33637_33646 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33638_33647 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33639_33648 = true;
var _STAR_print_fn_STAR__temp_val__33640_33649 = ((function (_STAR_print_newline_STAR__orig_val__33637_33646,_STAR_print_fn_STAR__orig_val__33638_33647,_STAR_print_newline_STAR__temp_val__33639_33648,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33637_33646,_STAR_print_fn_STAR__orig_val__33638_33647,_STAR_print_newline_STAR__temp_val__33639_33648,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33639_33648;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33640_33649;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33637_33646,_STAR_print_fn_STAR__orig_val__33638_33647,_STAR_print_newline_STAR__temp_val__33639_33648,_STAR_print_fn_STAR__temp_val__33640_33649,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33637_33646,_STAR_print_fn_STAR__orig_val__33638_33647,_STAR_print_newline_STAR__temp_val__33639_33648,_STAR_print_fn_STAR__temp_val__33640_33649,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33628_SHARP_){
return cljs.core.dissoc.call(null,p1__33628_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33637_33646,_STAR_print_fn_STAR__orig_val__33638_33647,_STAR_print_newline_STAR__temp_val__33639_33648,_STAR_print_fn_STAR__temp_val__33640_33649,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33637_33646,_STAR_print_fn_STAR__orig_val__33638_33647,_STAR_print_newline_STAR__temp_val__33639_33648,_STAR_print_fn_STAR__temp_val__33640_33649,sb__4661__auto__,G__33632,G__33632__$1,loc,class_name,simple_class,cause_type,format,map__33630,map__33630__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33638_33647;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33637_33646;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33632__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1560468655563
