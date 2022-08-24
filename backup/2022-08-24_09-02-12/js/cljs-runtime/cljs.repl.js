goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49904){
var map__49906 = p__49904;
var map__49906__$1 = cljs.core.__destructure_map(map__49906);
var m = map__49906__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49906__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49906__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49913_50137 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49914_50138 = null;
var count__49915_50139 = (0);
var i__49916_50140 = (0);
while(true){
if((i__49916_50140 < count__49915_50139)){
var f_50142 = chunk__49914_50138.cljs$core$IIndexed$_nth$arity$2(null,i__49916_50140);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50142], 0));


var G__50143 = seq__49913_50137;
var G__50144 = chunk__49914_50138;
var G__50145 = count__49915_50139;
var G__50146 = (i__49916_50140 + (1));
seq__49913_50137 = G__50143;
chunk__49914_50138 = G__50144;
count__49915_50139 = G__50145;
i__49916_50140 = G__50146;
continue;
} else {
var temp__5753__auto___50147 = cljs.core.seq(seq__49913_50137);
if(temp__5753__auto___50147){
var seq__49913_50148__$1 = temp__5753__auto___50147;
if(cljs.core.chunked_seq_QMARK_(seq__49913_50148__$1)){
var c__4679__auto___50150 = cljs.core.chunk_first(seq__49913_50148__$1);
var G__50151 = cljs.core.chunk_rest(seq__49913_50148__$1);
var G__50152 = c__4679__auto___50150;
var G__50153 = cljs.core.count(c__4679__auto___50150);
var G__50154 = (0);
seq__49913_50137 = G__50151;
chunk__49914_50138 = G__50152;
count__49915_50139 = G__50153;
i__49916_50140 = G__50154;
continue;
} else {
var f_50155 = cljs.core.first(seq__49913_50148__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50155], 0));


var G__50156 = cljs.core.next(seq__49913_50148__$1);
var G__50157 = null;
var G__50158 = (0);
var G__50159 = (0);
seq__49913_50137 = G__50156;
chunk__49914_50138 = G__50157;
count__49915_50139 = G__50158;
i__49916_50140 = G__50159;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50160 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50160], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50160)))?cljs.core.second(arglists_50160):arglists_50160)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49934_50170 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49935_50171 = null;
var count__49936_50172 = (0);
var i__49937_50173 = (0);
while(true){
if((i__49937_50173 < count__49936_50172)){
var vec__49960_50174 = chunk__49935_50171.cljs$core$IIndexed$_nth$arity$2(null,i__49937_50173);
var name_50175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49960_50174,(0),null);
var map__49963_50176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49960_50174,(1),null);
var map__49963_50177__$1 = cljs.core.__destructure_map(map__49963_50176);
var doc_50178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49963_50177__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49963_50177__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50175], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50179], 0));

if(cljs.core.truth_(doc_50178)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50178], 0));
} else {
}


var G__50187 = seq__49934_50170;
var G__50188 = chunk__49935_50171;
var G__50189 = count__49936_50172;
var G__50190 = (i__49937_50173 + (1));
seq__49934_50170 = G__50187;
chunk__49935_50171 = G__50188;
count__49936_50172 = G__50189;
i__49937_50173 = G__50190;
continue;
} else {
var temp__5753__auto___50191 = cljs.core.seq(seq__49934_50170);
if(temp__5753__auto___50191){
var seq__49934_50192__$1 = temp__5753__auto___50191;
if(cljs.core.chunked_seq_QMARK_(seq__49934_50192__$1)){
var c__4679__auto___50193 = cljs.core.chunk_first(seq__49934_50192__$1);
var G__50194 = cljs.core.chunk_rest(seq__49934_50192__$1);
var G__50195 = c__4679__auto___50193;
var G__50196 = cljs.core.count(c__4679__auto___50193);
var G__50197 = (0);
seq__49934_50170 = G__50194;
chunk__49935_50171 = G__50195;
count__49936_50172 = G__50196;
i__49937_50173 = G__50197;
continue;
} else {
var vec__49967_50198 = cljs.core.first(seq__49934_50192__$1);
var name_50199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967_50198,(0),null);
var map__49970_50200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967_50198,(1),null);
var map__49970_50201__$1 = cljs.core.__destructure_map(map__49970_50200);
var doc_50202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49970_50201__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49970_50201__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50199], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50203], 0));

if(cljs.core.truth_(doc_50202)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50202], 0));
} else {
}


var G__50204 = cljs.core.next(seq__49934_50192__$1);
var G__50205 = null;
var G__50206 = (0);
var G__50207 = (0);
seq__49934_50170 = G__50204;
chunk__49935_50171 = G__50205;
count__49936_50172 = G__50206;
i__49937_50173 = G__50207;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49979 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49981 = null;
var count__49982 = (0);
var i__49983 = (0);
while(true){
if((i__49983 < count__49982)){
var role = chunk__49981.cljs$core$IIndexed$_nth$arity$2(null,i__49983);
var temp__5753__auto___50208__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50208__$1)){
var spec_50209 = temp__5753__auto___50208__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50209)], 0));
} else {
}


var G__50216 = seq__49979;
var G__50217 = chunk__49981;
var G__50218 = count__49982;
var G__50219 = (i__49983 + (1));
seq__49979 = G__50216;
chunk__49981 = G__50217;
count__49982 = G__50218;
i__49983 = G__50219;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49979);
if(temp__5753__auto____$1){
var seq__49979__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49979__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49979__$1);
var G__50220 = cljs.core.chunk_rest(seq__49979__$1);
var G__50221 = c__4679__auto__;
var G__50222 = cljs.core.count(c__4679__auto__);
var G__50223 = (0);
seq__49979 = G__50220;
chunk__49981 = G__50221;
count__49982 = G__50222;
i__49983 = G__50223;
continue;
} else {
var role = cljs.core.first(seq__49979__$1);
var temp__5753__auto___50224__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50224__$2)){
var spec_50225 = temp__5753__auto___50224__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50225)], 0));
} else {
}


var G__50232 = cljs.core.next(seq__49979__$1);
var G__50233 = null;
var G__50234 = (0);
var G__50235 = (0);
seq__49979 = G__50232;
chunk__49981 = G__50233;
count__49982 = G__50234;
i__49983 = G__50235;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50241 = cljs.core.ex_cause(t);
via = G__50240;
t = G__50241;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__50029 = datafied_throwable;
var map__50029__$1 = cljs.core.__destructure_map(map__50029);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50029__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50029__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50029__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50030 = cljs.core.last(via);
var map__50030__$1 = cljs.core.__destructure_map(map__50030);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50030__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50030__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50030__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50031 = data;
var map__50031__$1 = cljs.core.__destructure_map(map__50031);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50031__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50031__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50031__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50032 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50032__$1 = cljs.core.__destructure_map(map__50032);
var top_data = map__50032__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50032__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50040 = phase;
var G__50040__$1 = (((G__50040 instanceof cljs.core.Keyword))?G__50040.fqn:null);
switch (G__50040__$1) {
case "read-source":
var map__50042 = data;
var map__50042__$1 = cljs.core.__destructure_map(map__50042);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50042__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50042__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50044 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50044__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50044,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50044);
var G__50044__$2 = (cljs.core.truth_((function (){var fexpr__50046 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50046.cljs$core$IFn$_invoke$arity$1 ? fexpr__50046.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50046.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50044__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50044__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50044__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50049 = top_data;
var G__50049__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50049,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50049);
var G__50049__$2 = (cljs.core.truth_((function (){var fexpr__50051 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50051.cljs$core$IFn$_invoke$arity$1 ? fexpr__50051.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50051.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50049__$1);
var G__50049__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50049__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50049__$2);
var G__50049__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50049__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50049__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50049__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50049__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50054 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50054,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50054,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50054,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50054,(3),null);
var G__50057 = top_data;
var G__50057__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50057,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50057);
var G__50057__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50057__$1);
var G__50057__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50057__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50057__$2);
var G__50057__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50057__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50057__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50057__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50057__$4;
}

break;
case "execution":
var vec__50064 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50012_SHARP_){
var or__4253__auto__ = (p1__50012_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__50067 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50067.cljs$core$IFn$_invoke$arity$1 ? fexpr__50067.cljs$core$IFn$_invoke$arity$1(p1__50012_SHARP_) : fexpr__50067.call(null,p1__50012_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__50070 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50070__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50070,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50070);
var G__50070__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50070__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50070__$1);
var G__50070__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50070__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50070__$2);
var G__50070__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50070__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50070__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50070__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50070__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50040__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50074){
var map__50075 = p__50074;
var map__50075__$1 = cljs.core.__destructure_map(map__50075);
var triage_data = map__50075__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50075__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50075__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50075__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50075__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50075__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50075__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50075__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50075__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50080 = phase;
var G__50080__$1 = (((G__50080 instanceof cljs.core.Keyword))?G__50080.fqn:null);
switch (G__50080__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50083 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50084 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50085 = loc;
var G__50086 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50091_50267 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50092_50268 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50093_50269 = true;
var _STAR_print_fn_STAR__temp_val__50094_50270 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50093_50269);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50094_50270);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50072_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50072_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50092_50268);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50091_50267);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50083,G__50084,G__50085,G__50086) : format.call(null,G__50083,G__50084,G__50085,G__50086));

break;
case "macroexpansion":
var G__50100 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50101 = cause_type;
var G__50102 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50103 = loc;
var G__50104 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50100,G__50101,G__50102,G__50103,G__50104) : format.call(null,G__50100,G__50101,G__50102,G__50103,G__50104));

break;
case "compile-syntax-check":
var G__50108 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50109 = cause_type;
var G__50110 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50111 = loc;
var G__50112 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50108,G__50109,G__50110,G__50111,G__50112) : format.call(null,G__50108,G__50109,G__50110,G__50111,G__50112));

break;
case "compilation":
var G__50113 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50114 = cause_type;
var G__50115 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50116 = loc;
var G__50117 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50113,G__50114,G__50115,G__50116,G__50117) : format.call(null,G__50113,G__50114,G__50115,G__50116,G__50117));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50118 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50119 = symbol;
var G__50120 = loc;
var G__50121 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50122_50272 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50123_50273 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50124_50274 = true;
var _STAR_print_fn_STAR__temp_val__50125_50275 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50124_50274);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50125_50275);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50073_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50073_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50123_50273);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50122_50272);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50118,G__50119,G__50120,G__50121) : format.call(null,G__50118,G__50119,G__50120,G__50121));
} else {
var G__50126 = "Execution error%s at %s(%s).\n%s\n";
var G__50127 = cause_type;
var G__50128 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50129 = loc;
var G__50130 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50126,G__50127,G__50128,G__50129,G__50130) : format.call(null,G__50126,G__50127,G__50128,G__50129,G__50130));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50080__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
