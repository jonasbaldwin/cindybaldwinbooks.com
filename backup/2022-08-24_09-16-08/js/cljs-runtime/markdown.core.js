goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__54978){
var map__54979 = p__54978;
var map__54979__$1 = cljs.core.__destructure_map(map__54979);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__54981 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__54982 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__54982);

try{var vec__54983 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54987,transformer){
var vec__54989 = p__54987;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54989,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54989,(1),null);
var G__54992 = text;
var G__54993 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__54992,G__54993) : transformer.call(null,G__54992,G__54993));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54983,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54983,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__54981);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55071 = arguments.length;
var i__4865__auto___55072 = (0);
while(true){
if((i__4865__auto___55072 < len__4864__auto___55071)){
args__4870__auto__.push((arguments[i__4865__auto___55072]));

var G__55074 = (i__4865__auto___55072 + (1));
i__4865__auto___55072 = G__55074;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq54999){
var G__55000 = cljs.core.first(seq54999);
var seq54999__$1 = cljs.core.next(seq54999);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55000,seq54999__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__55004_55076 = cljs.core.seq(lines);
var chunk__55005_55077 = null;
var count__55006_55078 = (0);
var i__55007_55079 = (0);
while(true){
if((i__55007_55079 < count__55006_55078)){
var line_55080 = chunk__55005_55077.cljs$core$IIndexed$_nth$arity$2(null,i__55007_55079);
markdown.links.parse_reference_link(line_55080,references);


var G__55081 = seq__55004_55076;
var G__55082 = chunk__55005_55077;
var G__55083 = count__55006_55078;
var G__55084 = (i__55007_55079 + (1));
seq__55004_55076 = G__55081;
chunk__55005_55077 = G__55082;
count__55006_55078 = G__55083;
i__55007_55079 = G__55084;
continue;
} else {
var temp__5753__auto___55085 = cljs.core.seq(seq__55004_55076);
if(temp__5753__auto___55085){
var seq__55004_55086__$1 = temp__5753__auto___55085;
if(cljs.core.chunked_seq_QMARK_(seq__55004_55086__$1)){
var c__4679__auto___55087 = cljs.core.chunk_first(seq__55004_55086__$1);
var G__55088 = cljs.core.chunk_rest(seq__55004_55086__$1);
var G__55089 = c__4679__auto___55087;
var G__55090 = cljs.core.count(c__4679__auto___55087);
var G__55091 = (0);
seq__55004_55076 = G__55088;
chunk__55005_55077 = G__55089;
count__55006_55078 = G__55090;
i__55007_55079 = G__55091;
continue;
} else {
var line_55092 = cljs.core.first(seq__55004_55086__$1);
markdown.links.parse_reference_link(line_55092,references);


var G__55097 = cljs.core.next(seq__55004_55086__$1);
var G__55098 = null;
var G__55099 = (0);
var G__55100 = (0);
seq__55004_55076 = G__55097;
chunk__55005_55077 = G__55098;
count__55006_55078 = G__55099;
i__55007_55079 = G__55100;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__55011_55101 = cljs.core.seq(lines);
var chunk__55012_55102 = null;
var count__55013_55103 = (0);
var i__55014_55104 = (0);
while(true){
if((i__55014_55104 < count__55013_55103)){
var line_55105 = chunk__55012_55102.cljs$core$IIndexed$_nth$arity$2(null,i__55014_55104);
markdown.links.parse_footnote_link(line_55105,footnotes);


var G__55106 = seq__55011_55101;
var G__55107 = chunk__55012_55102;
var G__55108 = count__55013_55103;
var G__55109 = (i__55014_55104 + (1));
seq__55011_55101 = G__55106;
chunk__55012_55102 = G__55107;
count__55013_55103 = G__55108;
i__55014_55104 = G__55109;
continue;
} else {
var temp__5753__auto___55110 = cljs.core.seq(seq__55011_55101);
if(temp__5753__auto___55110){
var seq__55011_55111__$1 = temp__5753__auto___55110;
if(cljs.core.chunked_seq_QMARK_(seq__55011_55111__$1)){
var c__4679__auto___55112 = cljs.core.chunk_first(seq__55011_55111__$1);
var G__55113 = cljs.core.chunk_rest(seq__55011_55111__$1);
var G__55114 = c__4679__auto___55112;
var G__55115 = cljs.core.count(c__4679__auto___55112);
var G__55116 = (0);
seq__55011_55101 = G__55113;
chunk__55012_55102 = G__55114;
count__55013_55103 = G__55115;
i__55014_55104 = G__55116;
continue;
} else {
var line_55117 = cljs.core.first(seq__55011_55111__$1);
markdown.links.parse_footnote_link(line_55117,footnotes);


var G__55118 = cljs.core.next(seq__55011_55111__$1);
var G__55119 = null;
var G__55120 = (0);
var G__55121 = (0);
seq__55011_55101 = G__55118;
chunk__55012_55102 = G__55119;
count__55013_55103 = G__55120;
i__55014_55104 = G__55121;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__55023 = cljs.core.split_with((function (p1__55022_SHARP_){
return cljs.core.not_empty(p1__55022_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55023,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55023,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__55027 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__55028 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__55029 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__55030 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__55029);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__55030);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__55031 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55031,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55031,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__55038_55125 = lines__$1;
var vec__55039_55126 = G__55038_55125;
var seq__55040_55127 = cljs.core.seq(vec__55039_55126);
var first__55041_55128 = cljs.core.first(seq__55040_55127);
var seq__55040_55129__$1 = cljs.core.next(seq__55040_55127);
var line_55130 = first__55041_55128;
var more_55131 = seq__55040_55129__$1;
var state_55132 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__55038_55137__$1 = G__55038_55125;
var state_55138__$1 = state_55132;
while(true){
var vec__55048_55139 = G__55038_55137__$1;
var seq__55049_55140 = cljs.core.seq(vec__55048_55139);
var first__55050_55141 = cljs.core.first(seq__55049_55140);
var seq__55049_55142__$1 = cljs.core.next(seq__55049_55140);
var line_55143__$1 = first__55050_55141;
var more_55144__$1 = seq__55049_55142__$1;
var state_55145__$2 = state_55138__$1;
var line_55148__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_55145__$2))?"":line_55143__$1);
var state_55149__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_55145__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_55145__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_55145__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_55145__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_55145__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_55144__$1))){
var G__55150 = more_55144__$1;
var G__55151 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_55148__$2,cljs.core.first(more_55144__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_55149__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_55148__$2.trim()));
G__55038_55137__$1 = G__55150;
state_55138__$1 = G__55151;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_55149__$3))),line_55148__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_55149__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__55028);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__55027);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55156 = arguments.length;
var i__4865__auto___55157 = (0);
while(true){
if((i__4865__auto___55157 < len__4864__auto___55156)){
args__4870__auto__.push((arguments[i__4865__auto___55157]));

var G__55158 = (i__4865__auto___55157 + (1));
i__4865__auto___55157 = G__55158;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq55051){
var G__55052 = cljs.core.first(seq55051);
var seq55051__$1 = cljs.core.next(seq55051);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55052,seq55051__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55168 = arguments.length;
var i__4865__auto___55169 = (0);
while(true){
if((i__4865__auto___55169 < len__4864__auto___55168)){
args__4870__auto__.push((arguments[i__4865__auto___55169]));

var G__55171 = (i__4865__auto___55169 + (1));
i__4865__auto___55169 = G__55171;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq55057){
var G__55058 = cljs.core.first(seq55057);
var seq55057__$1 = cljs.core.next(seq55057);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55058,seq55057__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55174 = arguments.length;
var i__4865__auto___55175 = (0);
while(true){
if((i__4865__auto___55175 < len__4864__auto___55174)){
args__4870__auto__.push((arguments[i__4865__auto___55175]));

var G__55176 = (i__4865__auto___55175 + (1));
i__4865__auto___55175 = G__55176;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq55059){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55059));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55177 = arguments.length;
var i__4865__auto___55178 = (0);
while(true){
if((i__4865__auto___55178 < len__4864__auto___55177)){
args__4870__auto__.push((arguments[i__4865__auto___55178]));

var G__55179 = (i__4865__auto___55178 + (1));
i__4865__auto___55178 = G__55179;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq55063){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55063));
}));


//# sourceMappingURL=markdown.core.js.map
