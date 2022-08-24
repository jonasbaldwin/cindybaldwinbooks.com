goog.provide('cbb.core');
var module$node_modules$jstz$index=shadow.js.require("module$node_modules$jstz$index", {});
cljs.core.enable_console_print_BANG_();
cbb.core.page_name_keyword = (function cbb$core$page_name_keyword(name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_all(clojure.string.lower_case(["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')),/\s/,"-"));
});
if((typeof cbb !== 'undefined') && (typeof cbb.core !== 'undefined') && (typeof cbb.core.state !== 'undefined')){
} else {
cbb.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof cbb !== 'undefined') && (typeof cbb.core !== 'undefined') && (typeof cbb.core.pages !== 'undefined')){
} else {
cbb.core.pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
cbb.core.update_state = (function cbb$core$update_state(k,r,t,cb_fn){
var G__73846_74097 = t;
var G__73846_74098__$1 = (((G__73846_74097 instanceof cljs.core.Keyword))?G__73846_74097.fqn:null);
switch (G__73846_74098__$1) {
case "edn":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cbb.core.state,cljs.core.assoc,k,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(r));

break;
case "md":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cbb.core.state,cljs.core.assoc,k,r);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73846_74098__$1)].join('')));

}

if(cljs.core.truth_(cb_fn)){
var G__73847 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(r);
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(G__73847) : cb_fn.call(null,G__73847));
} else {
return null;
}
});
cbb.core.load = (function cbb$core$load(var_args){
var G__73850 = arguments.length;
switch (G__73850) {
case 2:
return cbb.core.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cbb.core.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cbb.core.load.cljs$core$IFn$_invoke$arity$2 = (function (file,k){
return cbb.core.load.cljs$core$IFn$_invoke$arity$3(file,k,new cljs.core.Keyword(null,"edn","edn",1317840885));
}));

(cbb.core.load.cljs$core$IFn$_invoke$arity$3 = (function (file,k,p__73851){
var map__73852 = p__73851;
var map__73852__$1 = cljs.core.__destructure_map(map__73852);
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73852__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632),new cljs.core.Keyword(null,"edn","edn",1317840885));
var callback_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73852__$1,new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(file,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__73848_SHARP_){
return cbb.core.update_state(k,p1__73848_SHARP_,var_type,callback_fn);
})], null)], 0));
}));

(cbb.core.load.cljs$lang$maxFixedArity = 3);

cbb.core.load_pages = (function cbb$core$load_pages(data){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__73853){
var map__73854 = p__73853;
var map__73854__$1 = cljs.core.__destructure_map(map__73854);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73854__$1,new cljs.core.Keyword(null,"title","title",636505583));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73854__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var page_name = cbb.core.page_name_keyword(title);
return cbb.core.load.cljs$core$IFn$_invoke$arity$3(["pages/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source)].join(''),page_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var-type","var-type",-1876390632),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cbb.core.pages,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"state-key","state-key",1501674933),page_name], null));
})], null));
}),new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(data));
});
cbb.core.load_book_resources = (function cbb$core$load_book_resources(data){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__73855){
var vec__73856 = p__73855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73856,(0),null);
var map__73859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73856,(1),null);
var map__73859__$1 = cljs.core.__destructure_map(map__73859);
var b = map__73859__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73859__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var resources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73859__$1,new cljs.core.Keyword(null,"resources","resources",1632806811));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__73860){
var map__73861 = p__73860;
var map__73861__$1 = cljs.core.__destructure_map(map__73861);
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73861__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73861__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if(cljs.core.truth_(source)){
var resource_name = cbb.core.page_name_keyword([cljs.core.name(role),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join(''));
return cbb.core.load.cljs$core$IFn$_invoke$arity$3(["pages/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source)].join(''),resource_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-type","var-type",-1876390632),new cljs.core.Keyword(null,"md","md",707286655)], null));
} else {
return null;
}
}),resources);
}),data);
});
cbb.core.load.cljs$core$IFn$_invoke$arity$2("data/misc.edn",new cljs.core.Keyword(null,"misc","misc",-222218601));
cbb.core.load.cljs$core$IFn$_invoke$arity$3("data/books.edn",new cljs.core.Keyword(null,"all-books","all-books",-1267748350),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720),cbb.core.load_book_resources], null));
cbb.core.load.cljs$core$IFn$_invoke$arity$2("data/short_works.edn",new cljs.core.Keyword(null,"all-short-works","all-short-works",-824786402));
cbb.core.load.cljs$core$IFn$_invoke$arity$3("pages/pages.edn",new cljs.core.Keyword(null,"pages-data","pages-data",-1746373409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720),cbb.core.load_pages], null));
if((typeof cbb !== 'undefined') && (typeof cbb.core !== 'undefined') && (typeof cbb.core.location !== 'undefined')){
} else {
cbb.core.location = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}
cbb.core.router = bidi.router.start_router_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentHashMap.fromArrays(["books","class-resources","writer-resources","short-works","faq","events","press-kit",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p/",new cljs.core.Keyword(null,"page-id","page-id",-872941168)], null),"home","terms","blog-resources"],[cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"books","books",-2005362272),"/",new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"book-id","book-id",279994624)], null),new cljs.core.Keyword(null,"books","books",-2005362272)]),cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"class-resources","class-resources",1480066294),"/",new cljs.core.Keyword(null,"class-resources","class-resources",1480066294),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"book-id","book-id",279994624)], null),new cljs.core.Keyword(null,"class-resources","class-resources",1480066294)]),new cljs.core.Keyword(null,"writer-resources","writer-resources",-349578147),new cljs.core.Keyword(null,"short-works","short-works",-1268334948),new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"press-kit","press-kit",639042202),cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"page","page",849072397),"/",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)], null),new cljs.core.Keyword(null,"page-resource","page-resource",1586440086)]),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"terms","terms",-1556977978),new cljs.core.Keyword(null,"blog-resources","blog-resources",-1487163796)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),(function (p1__73862_SHARP_){
return cljs.core.reset_BANG_(cbb.core.location,(function (){var or__4253__auto__ = p1__73862_SHARP_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"home","home",-74557309)], null);
}
})());
})], null));
cbb.core.loading = rum.core.lazy_build(rum.core.build_defc,(function (show,content){
if(cljs.core.truth_(show)){
return daiquiri.interpreter.interpret(content);
} else {
return daiquiri.core.create_element("div",{'className':"content"},["loading"]);
}
}),null,"cbb.core/loading");
cbb.core.embeded_youtube = (function cbb$core$embeded_youtube(item){
var G__73865 = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(item);
var G__73865__$1 = (((G__73865 instanceof cljs.core.Keyword))?G__73865.fqn:null);
switch (G__73865__$1) {
case "youtube":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.videoWrapper","div.videoWrapper",-1747621267),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"video-id","video-id",2132630536).cljs$core$IFn$_invoke$arity$1(item)),"?rel=0"].join(''),new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"0",new cljs.core.Keyword(null,"allow","allow",-1857325745),"autoplay; encrypted-media",new cljs.core.Keyword(null,"allowfullscreen","allowfullscreen",-1595290361),true], null)], null)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73865__$1)].join('')));

}
});
cbb.core.embeded_youtube_html = (function cbb$core$embeded_youtube_html(item){
return ["<div>\n## ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)),"\n<div class=\"videoWrapper\">\n  <iframe src=\"",["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"video-id","video-id",2132630536).cljs$core$IFn$_invoke$arity$1(item)),"?rel=0"].join(''),"\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"true\" />\n</div>\n</div>"].join('');
});
cbb.core.embeded_external_link_html = (function cbb$core$embeded_external_link_html(p__73866){
var map__73867 = p__73866;
var map__73867__$1 = cljs.core.__destructure_map(map__73867);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73867__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73867__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
return ["<a href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"\" target=\"_blank\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</a>"].join('');
});
cbb.core.embeded_book_resources_html = (function cbb$core$embeded_book_resources_html(books){
var book_links = (function (){var iter__4652__auto__ = (function cbb$core$embeded_book_resources_html_$_iter__73868(s__73869){
return (new cljs.core.LazySeq(null,(function (){
var s__73869__$1 = s__73869;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73869__$1);
if(temp__5753__auto__){
var s__73869__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73869__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73869__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73871 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73870 = (0);
while(true){
if((i__73870 < size__4651__auto__)){
var b = cljs.core._nth(c__4650__auto__,i__73870);
cljs.core.chunk_append(b__73871,(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(b)))?["<li><a href=\"/#class-resources/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b)),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b)),"</a></li>"].join(''):null));

var G__74102 = (i__73870 + (1));
i__73870 = G__74102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73871),cbb$core$embeded_book_resources_html_$_iter__73868(cljs.core.chunk_rest(s__73869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73871),null);
}
} else {
var b = cljs.core.first(s__73869__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(b)))?["<li><a href=\"/#class-resources/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b)),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b)),"</a></li>"].join(''):null),cbb$core$embeded_book_resources_html_$_iter__73868(cljs.core.rest(s__73869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(books);
})();
return ["<ul>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,book_links)),"</ul>"].join('');
});
cbb.core.header = rum.core.lazy_build(rum.core.build_defc,(function (location){
return daiquiri.core.create_element("div",{'className':"header"},[daiquiri.core.create_element("img",{'src':"images/header-black.png",'className':"logo"},null)]);
}),null,"cbb.core/header");
cbb.core.main_nav_links = rum.core.lazy_build(rum.core.build_defc,(function (location,navigation,page_id){
var navigation__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display","display",242065432),navigation));
return daiquiri.core.create_element("div",{'className':"navigation"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73877(s__73878){
return (new cljs.core.LazySeq(null,(function (){
var s__73878__$1 = s__73878;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73878__$1);
if(temp__5753__auto__){
var s__73878__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73878__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73878__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73880 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73879 = (0);
while(true){
if((i__73879 < size__4651__auto__)){
var n = cljs.core._nth(c__4650__auto__,i__73879);
cljs.core.chunk_append(b__73880,(function (){var class$ = (function (){var G__73881 = location;
var G__73881__$1 = (((G__73881 instanceof cljs.core.Keyword))?G__73881.fqn:null);
switch (G__73881__$1) {
case "page":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n)))){
return "active ";
} else {
return null;
}

break;
default:
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),location)){
return "active ";
} else {
return null;
}

}
})();
var class$__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()),clojure.string.replace(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n),/#/,"")].join(''),/\//,"-");
var attr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n),new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n)], null):null)], 0));
var attrs73874 = attr;
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs73874))?daiquiri.interpreter.element_attributes(attrs73874):null),((cljs.core.map_QMARK_(attrs73874))?[(function (){var attrs73875 = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs73875))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link-text"], null)], null),attrs73875], 0))):{'className':"link-text"}),((cljs.core.map_QMARK_(attrs73875))?null:[daiquiri.interpreter.interpret(attrs73875)]));
})()]:[daiquiri.interpreter.interpret(attrs73874),(function (){var attrs73876 = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs73876))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link-text"], null)], null),attrs73876], 0))):{'className':"link-text"}),((cljs.core.map_QMARK_(attrs73876))?null:[daiquiri.interpreter.interpret(attrs73876)]));
})()]));
})());

var G__74104 = (i__73879 + (1));
i__73879 = G__74104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73880),cbb$core$iter__73877(cljs.core.chunk_rest(s__73878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73880),null);
}
} else {
var n = cljs.core.first(s__73878__$2);
return cljs.core.cons((function (){var class$ = (function (){var G__73882 = location;
var G__73882__$1 = (((G__73882 instanceof cljs.core.Keyword))?G__73882.fqn:null);
switch (G__73882__$1) {
case "page":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n)))){
return "active ";
} else {
return null;
}

break;
default:
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),location)){
return "active ";
} else {
return null;
}

}
})();
var class$__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()),clojure.string.replace(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n),/#/,"")].join(''),/\//,"-");
var attr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n),new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n)], null):null)], 0));
var attrs73874 = attr;
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs73874))?daiquiri.interpreter.element_attributes(attrs73874):null),((cljs.core.map_QMARK_(attrs73874))?[(function (){var attrs73875 = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs73875))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link-text"], null)], null),attrs73875], 0))):{'className':"link-text"}),((cljs.core.map_QMARK_(attrs73875))?null:[daiquiri.interpreter.interpret(attrs73875)]));
})()]:[daiquiri.interpreter.interpret(attrs73874),(function (){var attrs73876 = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs73876))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link-text"], null)], null),attrs73876], 0))):{'className':"link-text"}),((cljs.core.map_QMARK_(attrs73876))?null:[daiquiri.interpreter.interpret(attrs73876)]));
})()]));
})(),cbb$core$iter__73877(cljs.core.rest(s__73878__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(navigation__$1);
})())]);
}),null,"cbb.core/main-nav-links");
cbb.core.default_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM do, yyyy");
cbb.core.date_from_map = (function cbb$core$date_from_map(p__73883){
var map__73884 = p__73883;
var map__73884__$1 = cljs.core.__destructure_map(map__73884);
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73884__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73884__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73884__$1,new cljs.core.Keyword(null,"year","year",335913393));
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,day);
});
cbb.core.format_date = (function cbb$core$format_date(var_args){
var G__73886 = arguments.length;
switch (G__73886) {
case 1:
return cbb.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cbb.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cbb.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (date){
return cbb.core.format_date.cljs$core$IFn$_invoke$arity$2(date,cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM do, yyyy"));
}));

(cbb.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (date,formatter){
return cljs_time.format.unparse(formatter,cbb.core.date_from_map(date));
}));

(cbb.core.format_date.cljs$lang$maxFixedArity = 2);

cbb.core.book_active = (function cbb$core$book_active(book){
var and__4251__auto__ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(book);
if(cljs.core.truth_(and__4251__auto__)){
return (cljs_time.core.now() > cbb.core.date_from_map(new cljs.core.Keyword(null,"display-date","display-date",-1113319561).cljs$core$IFn$_invoke$arity$1(book)));
} else {
return and__4251__auto__;
}
});
cbb.core.sort_books_release = (function cbb$core$sort_books_release(all_books){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (_,p__73887){
var map__73888 = p__73887;
var map__73888__$1 = cljs.core.__destructure_map(map__73888);
var pub_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73888__$1,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(pub_date)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(pub_date)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(pub_date))].join('');
}),all_books);
});
cbb.core.home = rum.core.lazy_build(rum.core.build_defc,(function (navigation){
var l = new cljs.core.Keyword(null,"home","home",-74557309);
var navigation_1 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__73890_SHARP_){
return new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(p1__73890_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73889_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"shelf","shelf",-1470183451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(p1__73889_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home-position","home-position",21588420),navigation)));
var navigation_2 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__73892_SHARP_){
return new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(p1__73892_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73891_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"shelf","shelf",-1470183451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(p1__73891_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home-position","home-position",21588420),navigation)));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"splash"},[cbb.core.header(l),daiquiri.core.create_element("div",{'className':"body"},[daiquiri.core.create_element("div",{'className':"shelves"},[daiquiri.core.create_element("div",{'className':"shelf-1"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73896(s__73897){
return (new cljs.core.LazySeq(null,(function (){
var s__73897__$1 = s__73897;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73897__$1);
if(temp__5753__auto__){
var s__73897__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73897__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73897__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73899 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73898 = (0);
while(true){
if((i__73898 < size__4651__auto__)){
var n = cljs.core._nth(c__4650__auto__,i__73898);
cljs.core.chunk_append(b__73899,(cljs.core.truth_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n))?(function (){var attrs73900 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n)], null):null)], 0));
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs73900))?daiquiri.interpreter.element_attributes(attrs73900):null),((cljs.core.map_QMARK_(attrs73900))?[daiquiri.core.create_element("img",{'src':["/images/shelf/book-1-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n)},[])]:[daiquiri.interpreter.interpret(attrs73900),daiquiri.core.create_element("img",{'src':["/images/shelf/book-1-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n)},[])]));
})():daiquiri.core.create_element("img",{'src':["/images/shelf/shelf-1-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["home-links ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n)))].join('')], null))},[])));

var G__74107 = (i__73898 + (1));
i__73898 = G__74107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73899),cbb$core$iter__73896(cljs.core.chunk_rest(s__73897__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73899),null);
}
} else {
var n = cljs.core.first(s__73897__$2);
return cljs.core.cons((cljs.core.truth_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n))?(function (){var attrs73900 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n)], null):null)], 0));
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs73900))?daiquiri.interpreter.element_attributes(attrs73900):null),((cljs.core.map_QMARK_(attrs73900))?[daiquiri.core.create_element("img",{'src':["/images/shelf/book-1-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n)},[])]:[daiquiri.interpreter.interpret(attrs73900),daiquiri.core.create_element("img",{'src':["/images/shelf/book-1-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n)},[])]));
})():daiquiri.core.create_element("img",{'src':["/images/shelf/shelf-1-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["home-links ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n)))].join('')], null))},[])),cbb$core$iter__73896(cljs.core.rest(s__73897__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(navigation_1);
})()),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73901(s__73902){
return (new cljs.core.LazySeq(null,(function (){
var s__73902__$1 = s__73902;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73902__$1);
if(temp__5753__auto__){
var s__73902__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73902__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73902__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73904 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73903 = (0);
while(true){
if((i__73903 < size__4651__auto__)){
var n = cljs.core._nth(c__4650__auto__,i__73903);
cljs.core.chunk_append(b__73904,(cljs.core.truth_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n))?(function (){var attrs73895 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n)], null):null)], 0));
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs73895))?daiquiri.interpreter.element_attributes(attrs73895):null),((cljs.core.map_QMARK_(attrs73895))?[daiquiri.core.create_element("img",{'src':["/images/shelf/book-2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n)},[])]:[daiquiri.interpreter.interpret(attrs73895),daiquiri.core.create_element("img",{'src':["/images/shelf/book-2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n)},[])]));
})():(cljs.core.truth_(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n)))?daiquiri.core.create_element("img",{'src':["/images/shelf/shelf-2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["home-links ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n)))].join('')], null))},[]):daiquiri.core.create_element("img",{'src':["/images/shelf/book-2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["home-links ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(n))].join('')], null))},[])
)));

var G__74108 = (i__73903 + (1));
i__73903 = G__74108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73904),cbb$core$iter__73901(cljs.core.chunk_rest(s__73902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73904),null);
}
} else {
var n = cljs.core.first(s__73902__$2);
return cljs.core.cons((cljs.core.truth_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n))?(function (){var attrs73895 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(n)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(n)], null):null)], 0));
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs73895))?daiquiri.interpreter.element_attributes(attrs73895):null),((cljs.core.map_QMARK_(attrs73895))?[daiquiri.core.create_element("img",{'src':["/images/shelf/book-2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n)},[])]:[daiquiri.interpreter.interpret(attrs73895),daiquiri.core.create_element("img",{'src':["/images/shelf/book-2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n)},[])]));
})():(cljs.core.truth_(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n)))?daiquiri.core.create_element("img",{'src':["/images/shelf/shelf-2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["home-links ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n)))].join('')], null))},[]):daiquiri.core.create_element("img",{'src':["/images/shelf/book-2-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home-position","home-position",21588420).cljs$core$IFn$_invoke$arity$1(n))),".png"].join(''),'alt':new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(n),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["home-links ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(n))].join('')], null))},[])
)),cbb$core$iter__73901(cljs.core.rest(s__73902__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(navigation_2);
})())])])])]),daiquiri.core.create_element("div",{'className':"content newsletter"},["Subscribe to my newsletter to keep up with my personal essays, reading lists, writing class offerings, and book news.",daiquiri.core.create_element("div",{'className':"form"},[daiquiri.core.create_element("form",{'id':"subscribe-form",'method':"post",'action':"https://tinyletter.com/beingcindy"},[daiquiri.core.create_element("input",{'type':"email",'id':"email",'name':"email",'placeholder':"email@example.com"},null),daiquiri.core.create_element("input",{'type':"submit",'value':"Subscribe",'name':"Subscribe",'className':"button"},null)])])])]);
}),null,"cbb.core/home");
cbb.core.replace_youtube = (function cbb$core$replace_youtube(markdown_text){
var re = /!YT\<(?<vid>[\w-]*),(?<title>[\w\s]*)\>/;
var vid_matches = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.zipmap,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full","full",436801220),new cljs.core.Keyword(null,"vid","vid",-2034096155),new cljs.core.Keyword(null,"title","title",636505583)], null)),cljs.core.re_seq(re,markdown_text));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,c){
var replace_regex = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(new cljs.core.Keyword(null,"full","full",436801220).cljs$core$IFn$_invoke$arity$1(c),/\(/,"<"),/\)/,">"));
return clojure.string.replace(p,replace_regex,cbb.core.embeded_youtube_html(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.Keyword(null,"youtube","youtube",-1932361085),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"video-id","video-id",2132630536),new cljs.core.Keyword(null,"vid","vid",-2034096155).cljs$core$IFn$_invoke$arity$1(c)], null)));
}),markdown_text,vid_matches);
});
cbb.core.replace_book_resources = (function cbb$core$replace_book_resources(markdown_text,all_books){
var book_vec = cbb.core.sort_books_release(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73905_SHARP_){
return cbb.core.book_active(p1__73905_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_books)));
var re = /!!BOOK_RESOURCES/;
var re_matches = cljs.core.re_seq(re,markdown_text);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,c){
var replace_regex = cljs.core.re_pattern(c);
return clojure.string.replace(p,replace_regex,cbb.core.embeded_book_resources_html(book_vec));
}),markdown_text,re_matches);
});
cbb.core.mrd = rum.core.lazy_build(rum.core.build_defc,(function (text,all_books){
return daiquiri.interpreter.interpret(markdown_to_hiccup.core.component(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1(cbb.core.replace_book_resources(cbb.core.replace_youtube(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)),all_books))));
}),null,"cbb.core/mrd");
cbb.core.press_kit = rum.core.lazy_build(rum.core.build_defc,(function (all_books){
var sorted_books = cbb.core.sort_books_release(all_books);
return daiquiri.core.create_element("div",{'className':"content"},[daiquiri.core.create_element("h1",null,["Press Kit"]),daiquiri.core.create_element("p",null,["Text and images may be used for promotional purposes."]),daiquiri.core.create_element("h2",null,["Images"]),daiquiri.core.create_element("p",null,["Click to download high-res images."]),daiquiri.core.create_element("div",{'className':"photo-grid"},[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("a",{'href':"images/headshot1.jpeg"},[daiquiri.core.create_element("img",{'alt':"Cindy Baldwin Headshot",'src':"images/headshot1.jpeg"},null)])]),daiquiri.core.create_element("div",{'className':"text-wrap"},["Photo Credit Cindy Baldwin."])]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("a",{'href':"images/headshot2.jpeg"},[daiquiri.core.create_element("img",{'alt':"Cindy Baldwin Headshot",'src':"images/headshot2.jpeg"},null)])]),daiquiri.core.create_element("div",{'className':"text-wrap"},["Photo Credit Cindy Baldwin."])]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73924(s__73925){
return (new cljs.core.LazySeq(null,(function (){
var s__73925__$1 = s__73925;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73925__$1);
if(temp__5753__auto__){
var s__73925__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73925__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73925__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73927 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73926 = (0);
while(true){
if((i__73926 < size__4651__auto__)){
var vec__73928 = cljs.core._nth(c__4650__auto__,i__73926);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73928,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73928,(1),null);
cljs.core.chunk_append(b__73927,(cljs.core.truth_((function (){var and__4251__auto__ = cbb.core.book_active(b);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__4251__auto__;
}
})())?daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("a",{'href':new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))},[daiquiri.core.create_element("img",{'src':new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b)),'className':"book-img"},[])])]),daiquiri.core.create_element("div",{'className':"text-wrap"},[(cljs.core.truth_(new cljs.core.Keyword(null,"front-cover-art-credit","front-cover-art-credit",1253647755).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b)))?["Cover by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"front-cover-art-credit","front-cover-art-credit",1253647755).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))),"."].join(''):null),(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"front-cover-illustration-credit","front-cover-illustration-credit",1439432674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b));
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"front-cover-design-credit","front-cover-design-credit",1994980699).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__4251__auto__;
}
})())?["Illustration by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"front-cover-illustration-credit","front-cover-illustration-credit",1439432674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))),", with cover design by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"front-cover-design-credit","front-cover-design-credit",1994980699).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))),"."].join(''):null)])]):null));

var G__74109 = (i__73926 + (1));
i__73926 = G__74109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73927),cbb$core$iter__73924(cljs.core.chunk_rest(s__73925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73927),null);
}
} else {
var vec__73931 = cljs.core.first(s__73925__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73931,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73931,(1),null);
return cljs.core.cons((cljs.core.truth_((function (){var and__4251__auto__ = cbb.core.book_active(b);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__4251__auto__;
}
})())?daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("a",{'href':new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))},[daiquiri.core.create_element("img",{'src':new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b)),'className':"book-img"},[])])]),daiquiri.core.create_element("div",{'className':"text-wrap"},[(cljs.core.truth_(new cljs.core.Keyword(null,"front-cover-art-credit","front-cover-art-credit",1253647755).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b)))?["Cover by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"front-cover-art-credit","front-cover-art-credit",1253647755).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))),"."].join(''):null),(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"front-cover-illustration-credit","front-cover-illustration-credit",1439432674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b));
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"front-cover-design-credit","front-cover-design-credit",1994980699).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__4251__auto__;
}
})())?["Illustration by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"front-cover-illustration-credit","front-cover-illustration-credit",1439432674).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))),", with cover design by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"front-cover-design-credit","front-cover-design-credit",1994980699).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))),"."].join(''):null)])]):null),cbb$core$iter__73924(cljs.core.rest(s__73925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sorted_books);
})())]),daiquiri.core.create_element("h2",null,["Bio"]),daiquiri.core.create_element("p",null,["Cindy Baldwin the author of the critically acclaimed novel ",daiquiri.core.create_element("i",null,["Where the Watermelons Grow"])," (an Oregon Spirit Book Award Honor, Indies Introduce title, and Indie Next selection), ",daiquiri.core.create_element("i",null,["Beginners Welcome"]),", and ",daiquiri.core.create_element("i",null,["The Stars of Whistling Ridge"]),". She lives just outside Portland, Oregon, with her husband and daughter."]),daiquiri.core.create_element("h2",null,["Book Details"]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73934(s__73935){
return (new cljs.core.LazySeq(null,(function (){
var s__73935__$1 = s__73935;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73935__$1);
if(temp__5753__auto__){
var s__73935__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73935__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73935__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73937 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73936 = (0);
while(true){
if((i__73936 < size__4651__auto__)){
var vec__73938 = cljs.core._nth(c__4650__auto__,i__73936);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73938,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73938,(1),null);
cljs.core.chunk_append(b__73937,(function (){var released_QMARK_ = (cljs_time.coerce.to_long(cljs_time.core.now()) > cljs_time.coerce.to_long(cbb.core.date_from_map(new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b))));
var announced_QMARK_ = (cljs_time.coerce.to_long(cljs_time.core.now()) > cljs_time.coerce.to_long(cbb.core.date_from_map(new cljs.core.Keyword(null,"display-date","display-date",-1113319561).cljs$core$IFn$_invoke$arity$1(b))));
return daiquiri.core.create_element("div",{'key':["bio-book-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b))].join('')},[(function (){var attrs73941 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b);
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs73941))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs73941], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs73941))?null:[daiquiri.interpreter.interpret(attrs73941)]));
})(),daiquiri.core.create_element("p",null,[((released_QMARK_)?"released":"releases")," ",daiquiri.interpreter.interpret(cbb.core.format_date.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b)))]),daiquiri.core.create_element("p",null,["ISBN: ",daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"isbn","isbn",-1600638962).cljs$core$IFn$_invoke$arity$1(b))]),daiquiri.core.create_element("h4",null,["Summary"]),daiquiri.core.create_element("p",null,[(function (){var attrs73945 = new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(b);
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs73945))?daiquiri.interpreter.element_attributes(attrs73945):null),((cljs.core.map_QMARK_(attrs73945))?null:[daiquiri.interpreter.interpret(attrs73945)]));
})()]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (i__73936,released_QMARK_,announced_QMARK_,vec__73938,_,b,c__4650__auto__,size__4651__auto__,b__73937,s__73935__$2,temp__5753__auto__,sorted_books){
return (function cbb$core$iter__73934_$_iter__73946(s__73947){
return (new cljs.core.LazySeq(null,((function (i__73936,released_QMARK_,announced_QMARK_,vec__73938,_,b,c__4650__auto__,size__4651__auto__,b__73937,s__73935__$2,temp__5753__auto__,sorted_books){
return (function (){
var s__73947__$1 = s__73947;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__73947__$1);
if(temp__5753__auto____$1){
var s__73947__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73947__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__73947__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__73949 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__73948 = (0);
while(true){
if((i__73948 < size__4651__auto____$1)){
var s = cljs.core._nth(c__4650__auto____$1,i__73948);
cljs.core.chunk_append(b__73949,(function (){var attrs73944 = s;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs73944))?daiquiri.interpreter.element_attributes(attrs73944):null),((cljs.core.map_QMARK_(attrs73944))?null:[daiquiri.interpreter.interpret(attrs73944)]));
})());

var G__74110 = (i__73948 + (1));
i__73948 = G__74110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73949),cbb$core$iter__73934_$_iter__73946(cljs.core.chunk_rest(s__73947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73949),null);
}
} else {
var s = cljs.core.first(s__73947__$2);
return cljs.core.cons((function (){var attrs73944 = s;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs73944))?daiquiri.interpreter.element_attributes(attrs73944):null),((cljs.core.map_QMARK_(attrs73944))?null:[daiquiri.interpreter.interpret(attrs73944)]));
})(),cbb$core$iter__73934_$_iter__73946(cljs.core.rest(s__73947__$2)));
}
} else {
return null;
}
break;
}
});})(i__73936,released_QMARK_,announced_QMARK_,vec__73938,_,b,c__4650__auto__,size__4651__auto__,b__73937,s__73935__$2,temp__5753__auto__,sorted_books))
,null,null));
});})(i__73936,released_QMARK_,announced_QMARK_,vec__73938,_,b,c__4650__auto__,size__4651__auto__,b__73937,s__73935__$2,temp__5753__auto__,sorted_books))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"brief-description","brief-description",-423592054).cljs$core$IFn$_invoke$arity$1(b));
})()),((announced_QMARK_)?daiquiri.core.create_element("p",null,["For more information about this book, and for a selection of reviews visit this book's page ",daiquiri.core.create_element("a",{'href':new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b)},["here"]),"."]):null)]);
})());

var G__74111 = (i__73936 + (1));
i__73936 = G__74111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73937),cbb$core$iter__73934(cljs.core.chunk_rest(s__73935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73937),null);
}
} else {
var vec__73950 = cljs.core.first(s__73935__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73950,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73950,(1),null);
return cljs.core.cons((function (){var released_QMARK_ = (cljs_time.coerce.to_long(cljs_time.core.now()) > cljs_time.coerce.to_long(cbb.core.date_from_map(new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b))));
var announced_QMARK_ = (cljs_time.coerce.to_long(cljs_time.core.now()) > cljs_time.coerce.to_long(cbb.core.date_from_map(new cljs.core.Keyword(null,"display-date","display-date",-1113319561).cljs$core$IFn$_invoke$arity$1(b))));
return daiquiri.core.create_element("div",{'key':["bio-book-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b))].join('')},[(function (){var attrs73941 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b);
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs73941))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs73941], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs73941))?null:[daiquiri.interpreter.interpret(attrs73941)]));
})(),daiquiri.core.create_element("p",null,[((released_QMARK_)?"released":"releases")," ",daiquiri.interpreter.interpret(cbb.core.format_date.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b)))]),daiquiri.core.create_element("p",null,["ISBN: ",daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"isbn","isbn",-1600638962).cljs$core$IFn$_invoke$arity$1(b))]),daiquiri.core.create_element("h4",null,["Summary"]),daiquiri.core.create_element("p",null,[(function (){var attrs73945 = new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(b);
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs73945))?daiquiri.interpreter.element_attributes(attrs73945):null),((cljs.core.map_QMARK_(attrs73945))?null:[daiquiri.interpreter.interpret(attrs73945)]));
})()]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (released_QMARK_,announced_QMARK_,vec__73950,_,b,s__73935__$2,temp__5753__auto__,sorted_books){
return (function cbb$core$iter__73934_$_iter__73953(s__73954){
return (new cljs.core.LazySeq(null,(function (){
var s__73954__$1 = s__73954;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__73954__$1);
if(temp__5753__auto____$1){
var s__73954__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73954__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73954__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73956 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73955 = (0);
while(true){
if((i__73955 < size__4651__auto__)){
var s = cljs.core._nth(c__4650__auto__,i__73955);
cljs.core.chunk_append(b__73956,(function (){var attrs73944 = s;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs73944))?daiquiri.interpreter.element_attributes(attrs73944):null),((cljs.core.map_QMARK_(attrs73944))?null:[daiquiri.interpreter.interpret(attrs73944)]));
})());

var G__74112 = (i__73955 + (1));
i__73955 = G__74112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73956),cbb$core$iter__73934_$_iter__73953(cljs.core.chunk_rest(s__73954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73956),null);
}
} else {
var s = cljs.core.first(s__73954__$2);
return cljs.core.cons((function (){var attrs73944 = s;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs73944))?daiquiri.interpreter.element_attributes(attrs73944):null),((cljs.core.map_QMARK_(attrs73944))?null:[daiquiri.interpreter.interpret(attrs73944)]));
})(),cbb$core$iter__73934_$_iter__73953(cljs.core.rest(s__73954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(released_QMARK_,announced_QMARK_,vec__73950,_,b,s__73935__$2,temp__5753__auto__,sorted_books))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"brief-description","brief-description",-423592054).cljs$core$IFn$_invoke$arity$1(b));
})()),((announced_QMARK_)?daiquiri.core.create_element("p",null,["For more information about this book, and for a selection of reviews visit this book's page ",daiquiri.core.create_element("a",{'href':new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b)},["here"]),"."]):null)]);
})(),cbb$core$iter__73934(cljs.core.rest(s__73935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sorted_books);
})())]);
}),null,"cbb.core/press-kit");
cbb.core.events = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"content"},[daiquiri.core.create_element("p",null,["Events are displayed in your local time. Use the tab controls in the window below to switch to month or week view."]),daiquiri.core.create_element("iframe",{'src':["https://calendar.google.com/calendar/embed?src=75nnn9beck7v88u9dgrl782fbg%40group.calendar.google.com&mode=AGENDA&ctz=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$node_modules$jstz$index.determine().name())].join(''),'width':"800",'height':"600",'frameBorder':"0",'scrolling':"no"},[])]);
}),null,"cbb.core/events");
cbb.core.short_works = rum.core.lazy_build(rum.core.build_defc,(function (short_works){
var l = new cljs.core.Keyword(null,"short-works","short-works",-1268334948);
return daiquiri.core.create_element("div",{'className':"content"},[daiquiri.core.create_element("h1",null,["Short Works"]),"Places my work has appeared:",daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73961(s__73962){
return (new cljs.core.LazySeq(null,(function (){
var s__73962__$1 = s__73962;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73962__$1);
if(temp__5753__auto__){
var s__73962__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73962__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73962__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73964 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73963 = (0);
while(true){
if((i__73963 < size__4651__auto__)){
var map__73965 = cljs.core._nth(c__4650__auto__,i__73963);
var map__73965__$1 = cljs.core.__destructure_map(map__73965);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73965__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73965__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73965__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var publication_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73965__$1,new cljs.core.Keyword(null,"publication-title","publication-title",-43970247));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73965__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var excerpts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73965__$1,new cljs.core.Keyword(null,"excerpts","excerpts",-347361737));
cljs.core.chunk_append(b__73964,daiquiri.core.create_element("li",{'key':["book_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')},[(cljs.core.truth_(title)?daiquiri.core.create_element("span",{'className':"title"},["\"",daiquiri.interpreter.interpret(title),"\""]):null),(cljs.core.truth_(description)?daiquiri.interpreter.interpret(description):null)," in ",(cljs.core.truth_(link)?daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[daiquiri.interpreter.interpret(publication_title)]):daiquiri.interpreter.interpret(publication_title)),(cljs.core.truth_(date)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date),")"].join(''):null),(cljs.core.truth_(excerpts)?daiquiri.core.create_element("div",null,["Some excerpts:",daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (i__73963,map__73965,map__73965__$1,title,description,date,publication_title,link,excerpts,c__4650__auto__,size__4651__auto__,b__73964,s__73962__$2,temp__5753__auto__,l){
return (function cbb$core$iter__73961_$_iter__73966(s__73967){
return (new cljs.core.LazySeq(null,((function (i__73963,map__73965,map__73965__$1,title,description,date,publication_title,link,excerpts,c__4650__auto__,size__4651__auto__,b__73964,s__73962__$2,temp__5753__auto__,l){
return (function (){
var s__73967__$1 = s__73967;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__73967__$1);
if(temp__5753__auto____$1){
var s__73967__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73967__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__73967__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__73969 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__73968 = (0);
while(true){
if((i__73968 < size__4651__auto____$1)){
var e = cljs.core._nth(c__4650__auto____$1,i__73968);
cljs.core.chunk_append(b__73969,daiquiri.core.create_element("li",{'key':new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)},[daiquiri.core.create_element("a",{'href':new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)},[daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e))])]));

var G__74113 = (i__73968 + (1));
i__73968 = G__74113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73969),cbb$core$iter__73961_$_iter__73966(cljs.core.chunk_rest(s__73967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73969),null);
}
} else {
var e = cljs.core.first(s__73967__$2);
return cljs.core.cons(daiquiri.core.create_element("li",{'key':new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)},[daiquiri.core.create_element("a",{'href':new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)},[daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e))])]),cbb$core$iter__73961_$_iter__73966(cljs.core.rest(s__73967__$2)));
}
} else {
return null;
}
break;
}
});})(i__73963,map__73965,map__73965__$1,title,description,date,publication_title,link,excerpts,c__4650__auto__,size__4651__auto__,b__73964,s__73962__$2,temp__5753__auto__,l))
,null,null));
});})(i__73963,map__73965,map__73965__$1,title,description,date,publication_title,link,excerpts,c__4650__auto__,size__4651__auto__,b__73964,s__73962__$2,temp__5753__auto__,l))
;
return iter__4652__auto__(excerpts);
})())])]):null)]));

var G__74114 = (i__73963 + (1));
i__73963 = G__74114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73964),cbb$core$iter__73961(cljs.core.chunk_rest(s__73962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73964),null);
}
} else {
var map__73970 = cljs.core.first(s__73962__$2);
var map__73970__$1 = cljs.core.__destructure_map(map__73970);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var publication_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970__$1,new cljs.core.Keyword(null,"publication-title","publication-title",-43970247));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var excerpts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970__$1,new cljs.core.Keyword(null,"excerpts","excerpts",-347361737));
return cljs.core.cons(daiquiri.core.create_element("li",{'key':["book_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')},[(cljs.core.truth_(title)?daiquiri.core.create_element("span",{'className':"title"},["\"",daiquiri.interpreter.interpret(title),"\""]):null),(cljs.core.truth_(description)?daiquiri.interpreter.interpret(description):null)," in ",(cljs.core.truth_(link)?daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[daiquiri.interpreter.interpret(publication_title)]):daiquiri.interpreter.interpret(publication_title)),(cljs.core.truth_(date)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date),")"].join(''):null),(cljs.core.truth_(excerpts)?daiquiri.core.create_element("div",null,["Some excerpts:",daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (map__73970,map__73970__$1,title,description,date,publication_title,link,excerpts,s__73962__$2,temp__5753__auto__,l){
return (function cbb$core$iter__73961_$_iter__73971(s__73972){
return (new cljs.core.LazySeq(null,(function (){
var s__73972__$1 = s__73972;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__73972__$1);
if(temp__5753__auto____$1){
var s__73972__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73972__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73972__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73974 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73973 = (0);
while(true){
if((i__73973 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__73973);
cljs.core.chunk_append(b__73974,daiquiri.core.create_element("li",{'key':new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)},[daiquiri.core.create_element("a",{'href':new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)},[daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e))])]));

var G__74115 = (i__73973 + (1));
i__73973 = G__74115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73974),cbb$core$iter__73961_$_iter__73971(cljs.core.chunk_rest(s__73972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73974),null);
}
} else {
var e = cljs.core.first(s__73972__$2);
return cljs.core.cons(daiquiri.core.create_element("li",{'key':new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)},[daiquiri.core.create_element("a",{'href':new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)},[daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e))])]),cbb$core$iter__73961_$_iter__73971(cljs.core.rest(s__73972__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__73970,map__73970__$1,title,description,date,publication_title,link,excerpts,s__73962__$2,temp__5753__auto__,l))
;
return iter__4652__auto__(excerpts);
})())])]):null)]),cbb$core$iter__73961(cljs.core.rest(s__73962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(short_works);
})())])]);
}),null,"cbb.core/short-works");
cbb.core.show_quotes = rum.core.lazy_build(rum.core.build_defc,(function (title,quotes,location){
if(cljs.core.empty_QMARK_(quotes)){
return null;
} else {
var attrs73977 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,new cljs.core.Keyword(null,"top","top",-1856271961)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Praise for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),title], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"More praise for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),title], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs73977))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quotes"], null)], null),attrs73977], 0))):{'className':"quotes"}),((cljs.core.map_QMARK_(attrs73977))?[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73978(s__73979){
return (new cljs.core.LazySeq(null,(function (){
var s__73979__$1 = s__73979;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73979__$1);
if(temp__5753__auto__){
var s__73979__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73979__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73979__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73981 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73980 = (0);
while(true){
if((i__73980 < size__4651__auto__)){
var map__73982 = cljs.core._nth(c__4650__auto__,i__73980);
var map__73982__$1 = cljs.core.__destructure_map(map__73982);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73982__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73982__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
cljs.core.chunk_append(b__73981,daiquiri.core.create_element("div",null,[(function (){var attrs73983 = (cljs.core.truth_(link)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null):text);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs73983))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)], null),attrs73983], 0))):{'className':"text"}),((cljs.core.map_QMARK_(attrs73983))?null:[daiquiri.interpreter.interpret(attrs73983)]));
})()]));

var G__74116 = (i__73980 + (1));
i__73980 = G__74116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73981),cbb$core$iter__73978(cljs.core.chunk_rest(s__73979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73981),null);
}
} else {
var map__73984 = cljs.core.first(s__73979__$2);
var map__73984__$1 = cljs.core.__destructure_map(map__73984);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73984__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73984__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
return cljs.core.cons(daiquiri.core.create_element("div",null,[(function (){var attrs73983 = (cljs.core.truth_(link)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null):text);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs73983))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)], null),attrs73983], 0))):{'className':"text"}),((cljs.core.map_QMARK_(attrs73983))?null:[daiquiri.interpreter.interpret(attrs73983)]));
})()]),cbb$core$iter__73978(cljs.core.rest(s__73979__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73975_SHARP_){
var G__73986 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__73975_SHARP_);
var fexpr__73985 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indie","indie",-282399484),null], null), null);
return (fexpr__73985.cljs$core$IFn$_invoke$arity$1 ? fexpr__73985.cljs$core$IFn$_invoke$arity$1(G__73986) : fexpr__73985.call(null,G__73986));
}),quotes));
})()),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73987(s__73988){
return (new cljs.core.LazySeq(null,(function (){
var s__73988__$1 = s__73988;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73988__$1);
if(temp__5753__auto__){
var s__73988__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73988__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73988__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73990 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73989 = (0);
while(true){
if((i__73989 < size__4651__auto__)){
var map__73991 = cljs.core._nth(c__4650__auto__,i__73989);
var map__73991__$1 = cljs.core.__destructure_map(map__73991);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var business = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991__$1,new cljs.core.Keyword(null,"business","business",-965148967));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var newbery_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991__$1,new cljs.core.Keyword(null,"newbery-book","newbery-book",-1471215670));
var new_york_times_bestseller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991__$1,new cljs.core.Keyword(null,"new-york-times-bestseller","new-york-times-bestseller",-1219074417));
cljs.core.chunk_append(b__73990,daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(type)], null))},[(function (){var attrs73992 = text;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs73992))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)], null),attrs73992], 0))):{'className':"text"}),((cljs.core.map_QMARK_(attrs73992))?[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)]:[daiquiri.interpreter.interpret(attrs73992),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)]));
})(),daiquiri.core.create_element("span",{'className':"author"},[(cljs.core.truth_(author)?" ~ ":null),(cljs.core.truth_(new_york_times_bestseller)?daiquiri.core.create_element("span",null,["New York Times Bestelling Author of ",(function (){var attrs73993 = new_york_times_bestseller;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs73993))?daiquiri.interpreter.element_attributes(attrs73993):null),((cljs.core.map_QMARK_(attrs73993))?[", "]:[daiquiri.interpreter.interpret(attrs73993),", "]));
})()]):null),daiquiri.interpreter.interpret(author),(cljs.core.truth_(newbery_book)?daiquiri.core.create_element("span",null,[", Newbery Honor-winning author of ",(function (){var attrs73994 = newbery_book;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs73994))?daiquiri.interpreter.element_attributes(attrs73994):null),((cljs.core.map_QMARK_(attrs73994))?null:[daiquiri.interpreter.interpret(attrs73994)]));
})()]):null),(cljs.core.truth_((function (){var and__4251__auto__ = author;
if(cljs.core.truth_(and__4251__auto__)){
return business;
} else {
return and__4251__auto__;
}
})())?" from ":null),(cljs.core.truth_(link)?daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[daiquiri.interpreter.interpret(business),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?", Starred Review":null)]):daiquiri.interpreter.interpret(business))])]));

var G__74117 = (i__73989 + (1));
i__73989 = G__74117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73990),cbb$core$iter__73987(cljs.core.chunk_rest(s__73988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73990),null);
}
} else {
var map__73995 = cljs.core.first(s__73988__$2);
var map__73995__$1 = cljs.core.__destructure_map(map__73995);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73995__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73995__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73995__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var business = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73995__$1,new cljs.core.Keyword(null,"business","business",-965148967));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73995__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var newbery_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73995__$1,new cljs.core.Keyword(null,"newbery-book","newbery-book",-1471215670));
var new_york_times_bestseller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73995__$1,new cljs.core.Keyword(null,"new-york-times-bestseller","new-york-times-bestseller",-1219074417));
return cljs.core.cons(daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(type)], null))},[(function (){var attrs73992 = text;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs73992))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)], null),attrs73992], 0))):{'className':"text"}),((cljs.core.map_QMARK_(attrs73992))?[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)]:[daiquiri.interpreter.interpret(attrs73992),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)]));
})(),daiquiri.core.create_element("span",{'className':"author"},[(cljs.core.truth_(author)?" ~ ":null),(cljs.core.truth_(new_york_times_bestseller)?daiquiri.core.create_element("span",null,["New York Times Bestelling Author of ",(function (){var attrs73993 = new_york_times_bestseller;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs73993))?daiquiri.interpreter.element_attributes(attrs73993):null),((cljs.core.map_QMARK_(attrs73993))?[", "]:[daiquiri.interpreter.interpret(attrs73993),", "]));
})()]):null),daiquiri.interpreter.interpret(author),(cljs.core.truth_(newbery_book)?daiquiri.core.create_element("span",null,[", Newbery Honor-winning author of ",(function (){var attrs73994 = newbery_book;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs73994))?daiquiri.interpreter.element_attributes(attrs73994):null),((cljs.core.map_QMARK_(attrs73994))?null:[daiquiri.interpreter.interpret(attrs73994)]));
})()]):null),(cljs.core.truth_((function (){var and__4251__auto__ = author;
if(cljs.core.truth_(and__4251__auto__)){
return business;
} else {
return and__4251__auto__;
}
})())?" from ":null),(cljs.core.truth_(link)?daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[daiquiri.interpreter.interpret(business),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?", Starred Review":null)]):daiquiri.interpreter.interpret(business))])]),cbb$core$iter__73987(cljs.core.rest(s__73988__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73976_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indie","indie",-282399484),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__73976_SHARP_));
}),quotes));
})())]:[daiquiri.interpreter.interpret(attrs73977),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__73996(s__73997){
return (new cljs.core.LazySeq(null,(function (){
var s__73997__$1 = s__73997;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73997__$1);
if(temp__5753__auto__){
var s__73997__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73997__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73997__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73999 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73998 = (0);
while(true){
if((i__73998 < size__4651__auto__)){
var map__74000 = cljs.core._nth(c__4650__auto__,i__73998);
var map__74000__$1 = cljs.core.__destructure_map(map__74000);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74000__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74000__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
cljs.core.chunk_append(b__73999,daiquiri.core.create_element("div",null,[(function (){var attrs74001 = (cljs.core.truth_(link)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null):text);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs74001))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)], null),attrs74001], 0))):{'className':"text"}),((cljs.core.map_QMARK_(attrs74001))?null:[daiquiri.interpreter.interpret(attrs74001)]));
})()]));

var G__74118 = (i__73998 + (1));
i__73998 = G__74118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73999),cbb$core$iter__73996(cljs.core.chunk_rest(s__73997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73999),null);
}
} else {
var map__74002 = cljs.core.first(s__73997__$2);
var map__74002__$1 = cljs.core.__destructure_map(map__74002);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74002__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74002__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
return cljs.core.cons(daiquiri.core.create_element("div",null,[(function (){var attrs74001 = (cljs.core.truth_(link)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null):text);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs74001))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)], null),attrs74001], 0))):{'className':"text"}),((cljs.core.map_QMARK_(attrs74001))?null:[daiquiri.interpreter.interpret(attrs74001)]));
})()]),cbb$core$iter__73996(cljs.core.rest(s__73997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73975_SHARP_){
var G__74004 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__73975_SHARP_);
var fexpr__74003 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indie","indie",-282399484),null], null), null);
return (fexpr__74003.cljs$core$IFn$_invoke$arity$1 ? fexpr__74003.cljs$core$IFn$_invoke$arity$1(G__74004) : fexpr__74003.call(null,G__74004));
}),quotes));
})()),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__74005(s__74006){
return (new cljs.core.LazySeq(null,(function (){
var s__74006__$1 = s__74006;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__74006__$1);
if(temp__5753__auto__){
var s__74006__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74006__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__74006__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__74008 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__74007 = (0);
while(true){
if((i__74007 < size__4651__auto__)){
var map__74009 = cljs.core._nth(c__4650__auto__,i__74007);
var map__74009__$1 = cljs.core.__destructure_map(map__74009);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74009__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74009__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74009__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var business = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74009__$1,new cljs.core.Keyword(null,"business","business",-965148967));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74009__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var newbery_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74009__$1,new cljs.core.Keyword(null,"newbery-book","newbery-book",-1471215670));
var new_york_times_bestseller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74009__$1,new cljs.core.Keyword(null,"new-york-times-bestseller","new-york-times-bestseller",-1219074417));
cljs.core.chunk_append(b__74008,daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(type)], null))},[(function (){var attrs74010 = text;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs74010))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)], null),attrs74010], 0))):{'className':"text"}),((cljs.core.map_QMARK_(attrs74010))?[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)]:[daiquiri.interpreter.interpret(attrs74010),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)]));
})(),daiquiri.core.create_element("span",{'className':"author"},[(cljs.core.truth_(author)?" ~ ":null),(cljs.core.truth_(new_york_times_bestseller)?daiquiri.core.create_element("span",null,["New York Times Bestelling Author of ",(function (){var attrs74011 = new_york_times_bestseller;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs74011))?daiquiri.interpreter.element_attributes(attrs74011):null),((cljs.core.map_QMARK_(attrs74011))?[", "]:[daiquiri.interpreter.interpret(attrs74011),", "]));
})()]):null),daiquiri.interpreter.interpret(author),(cljs.core.truth_(newbery_book)?daiquiri.core.create_element("span",null,[", Newbery Honor-winning author of ",(function (){var attrs74012 = newbery_book;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs74012))?daiquiri.interpreter.element_attributes(attrs74012):null),((cljs.core.map_QMARK_(attrs74012))?null:[daiquiri.interpreter.interpret(attrs74012)]));
})()]):null),(cljs.core.truth_((function (){var and__4251__auto__ = author;
if(cljs.core.truth_(and__4251__auto__)){
return business;
} else {
return and__4251__auto__;
}
})())?" from ":null),(cljs.core.truth_(link)?daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[daiquiri.interpreter.interpret(business),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?", Starred Review":null)]):daiquiri.interpreter.interpret(business))])]));

var G__74119 = (i__74007 + (1));
i__74007 = G__74119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74008),cbb$core$iter__74005(cljs.core.chunk_rest(s__74006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74008),null);
}
} else {
var map__74013 = cljs.core.first(s__74006__$2);
var map__74013__$1 = cljs.core.__destructure_map(map__74013);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74013__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74013__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74013__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var business = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74013__$1,new cljs.core.Keyword(null,"business","business",-965148967));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74013__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var newbery_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74013__$1,new cljs.core.Keyword(null,"newbery-book","newbery-book",-1471215670));
var new_york_times_bestseller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74013__$1,new cljs.core.Keyword(null,"new-york-times-bestseller","new-york-times-bestseller",-1219074417));
return cljs.core.cons(daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(type)], null))},[(function (){var attrs74010 = text;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs74010))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)], null),attrs74010], 0))):{'className':"text"}),((cljs.core.map_QMARK_(attrs74010))?[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)]:[daiquiri.interpreter.interpret(attrs74010),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)]));
})(),daiquiri.core.create_element("span",{'className':"author"},[(cljs.core.truth_(author)?" ~ ":null),(cljs.core.truth_(new_york_times_bestseller)?daiquiri.core.create_element("span",null,["New York Times Bestelling Author of ",(function (){var attrs74011 = new_york_times_bestseller;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs74011))?daiquiri.interpreter.element_attributes(attrs74011):null),((cljs.core.map_QMARK_(attrs74011))?[", "]:[daiquiri.interpreter.interpret(attrs74011),", "]));
})()]):null),daiquiri.interpreter.interpret(author),(cljs.core.truth_(newbery_book)?daiquiri.core.create_element("span",null,[", Newbery Honor-winning author of ",(function (){var attrs74012 = newbery_book;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs74012))?daiquiri.interpreter.element_attributes(attrs74012):null),((cljs.core.map_QMARK_(attrs74012))?null:[daiquiri.interpreter.interpret(attrs74012)]));
})()]):null),(cljs.core.truth_((function (){var and__4251__auto__ = author;
if(cljs.core.truth_(and__4251__auto__)){
return business;
} else {
return and__4251__auto__;
}
})())?" from ":null),(cljs.core.truth_(link)?daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[daiquiri.interpreter.interpret(business),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?", Starred Review":null)]):daiquiri.interpreter.interpret(business))])]),cbb$core$iter__74005(cljs.core.rest(s__74006__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73976_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indie","indie",-282399484),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__73976_SHARP_));
}),quotes));
})())]));
}
}),null,"cbb.core/show-quotes");
cbb.core.book = rum.core.lazy_build(rum.core.build_defc,(function (p__74016){
var map__74017 = p__74016;
var map__74017__$1 = cljs.core.__destructure_map(map__74017);
var book = map__74017__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74017__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74017__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74017__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74017__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var quotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74017__$1,new cljs.core.Keyword(null,"quotes","quotes",-844987790));
var indie = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74017__$1,new cljs.core.Keyword(null,"indie","indie",-282399484));
var pub_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74017__$1,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"content"},[(function (){var attrs74020 = title;
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs74020))?daiquiri.interpreter.element_attributes(attrs74020):null),((cljs.core.map_QMARK_(attrs74020))?[(cljs.core.truth_(subtitle)?(function (){var attrs74021 = subtitle;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs74021))?daiquiri.interpreter.element_attributes(attrs74021):null),((cljs.core.map_QMARK_(attrs74021))?null:[daiquiri.interpreter.interpret(attrs74021)]));
})():null)]:[daiquiri.interpreter.interpret(attrs74020),(cljs.core.truth_(subtitle)?(function (){var attrs74022 = subtitle;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs74022))?daiquiri.interpreter.element_attributes(attrs74022):null),((cljs.core.map_QMARK_(attrs74022))?null:[daiquiri.interpreter.interpret(attrs74022)]));
})():null)]));
})(),daiquiri.core.create_element("div",{'className':"book-info"},[daiquiri.core.create_element("img",{'src':new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(book)),'className':"book-img"},[]),cbb.affiliates.affiliate_link_list(book)]),cbb.core.show_quotes(title,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74014_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(p1__74014_SHARP_),new cljs.core.Keyword(null,"top","top",-1856271961));
}),quotes),new cljs.core.Keyword(null,"top","top",-1856271961)),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[clojure.string.replace(title,/\s/,"_"),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),d], null);
}),description)),cbb.core.show_quotes(title,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74015_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(p1__74015_SHARP_),new cljs.core.Keyword(null,"top","top",-1856271961));
}),quotes),new cljs.core.Keyword(null,"bottom","bottom",-1550509018))]),daiquiri.core.create_element("div",{'className':"break"},null),daiquiri.interpreter.interpret(notes)]);
}),null,"cbb.core/book");
cbb.core.books_list = rum.core.lazy_build(rum.core.build_defc,(function (all_books){
var book_vec = cbb.core.sort_books_release(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74023_SHARP_){
return cbb.core.book_active(p1__74023_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_books)));
return daiquiri.core.create_element("div",{'className':"content"},[daiquiri.core.create_element("div",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__74024(s__74025){
return (new cljs.core.LazySeq(null,(function (){
var s__74025__$1 = s__74025;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__74025__$1);
if(temp__5753__auto__){
var s__74025__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74025__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__74025__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__74027 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__74026 = (0);
while(true){
if((i__74026 < size__4651__auto__)){
var map__74028 = cljs.core._nth(c__4650__auto__,i__74026);
var map__74028__$1 = cljs.core.__destructure_map(map__74028);
var book = map__74028__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74028__$1,new cljs.core.Keyword(null,"title","title",636505583));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74028__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74028__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74028__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var brag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74028__$1,new cljs.core.Keyword(null,"brag","brag",-1289422732));
cljs.core.chunk_append(b__74027,daiquiri.core.create_element("div",{'key':title,'className':"clear book-info-summary"},[daiquiri.core.create_element("div",{'className':"book-info"},[daiquiri.core.create_element("a",{'href':["/#books/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')},[daiquiri.core.create_element("img",{'src':new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(book)),'className':"book-img"},[])])]),daiquiri.core.create_element("a",{'href':["/#books/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')},[(function (){var attrs74031 = title;
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs74031))?daiquiri.interpreter.element_attributes(attrs74031):null),((cljs.core.map_QMARK_(attrs74031))?null:[daiquiri.interpreter.interpret(attrs74031)]));
})()]),(cljs.core.truth_(brag)?daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4652__auto__ = ((function (i__74026,map__74028,map__74028__$1,book,title,uri,summary,description,brag,c__4650__auto__,size__4651__auto__,b__74027,s__74025__$2,temp__5753__auto__,book_vec){
return (function cbb$core$iter__74024_$_iter__74032(s__74033){
return (new cljs.core.LazySeq(null,((function (i__74026,map__74028,map__74028__$1,book,title,uri,summary,description,brag,c__4650__auto__,size__4651__auto__,b__74027,s__74025__$2,temp__5753__auto__,book_vec){
return (function (){
var s__74033__$1 = s__74033;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__74033__$1);
if(temp__5753__auto____$1){
var s__74033__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74033__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__74033__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__74035 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__74034 = (0);
while(true){
if((i__74034 < size__4651__auto____$1)){
var b = cljs.core._nth(c__4650__auto____$1,i__74034);
cljs.core.chunk_append(b__74035,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plain","h3.plain",-1457273885),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),b], null),b], null));

var G__74120 = (i__74034 + (1));
i__74034 = G__74120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74035),cbb$core$iter__74024_$_iter__74032(cljs.core.chunk_rest(s__74033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74035),null);
}
} else {
var b = cljs.core.first(s__74033__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plain","h3.plain",-1457273885),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),b], null),b], null),cbb$core$iter__74024_$_iter__74032(cljs.core.rest(s__74033__$2)));
}
} else {
return null;
}
break;
}
});})(i__74026,map__74028,map__74028__$1,book,title,uri,summary,description,brag,c__4650__auto__,size__4651__auto__,b__74027,s__74025__$2,temp__5753__auto__,book_vec))
,null,null));
});})(i__74026,map__74028,map__74028__$1,book,title,uri,summary,description,brag,c__4650__auto__,size__4651__auto__,b__74027,s__74025__$2,temp__5753__auto__,book_vec))
;
return iter__4652__auto__(brag);
})()], null)):null),(function (){var attrs74029 = summary;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs74029))?daiquiri.interpreter.element_attributes(attrs74029):null),((cljs.core.map_QMARK_(attrs74029))?null:[daiquiri.interpreter.interpret(attrs74029)]));
})(),(function (){var attrs74030 = cljs.core.first(description);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs74030))?daiquiri.interpreter.element_attributes(attrs74030):null),((cljs.core.map_QMARK_(attrs74030))?[" ",daiquiri.core.create_element("a",{'href':["/#books/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')},["Click here for more info."])]:[daiquiri.interpreter.interpret(attrs74030)," ",daiquiri.core.create_element("a",{'href':["/#books/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')},["Click here for more info."])]));
})()]));

var G__74121 = (i__74026 + (1));
i__74026 = G__74121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74027),cbb$core$iter__74024(cljs.core.chunk_rest(s__74025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74027),null);
}
} else {
var map__74036 = cljs.core.first(s__74025__$2);
var map__74036__$1 = cljs.core.__destructure_map(map__74036);
var book = map__74036__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74036__$1,new cljs.core.Keyword(null,"title","title",636505583));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74036__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74036__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74036__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var brag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74036__$1,new cljs.core.Keyword(null,"brag","brag",-1289422732));
return cljs.core.cons(daiquiri.core.create_element("div",{'key':title,'className':"clear book-info-summary"},[daiquiri.core.create_element("div",{'className':"book-info"},[daiquiri.core.create_element("a",{'href':["/#books/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')},[daiquiri.core.create_element("img",{'src':new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(book)),'className':"book-img"},[])])]),daiquiri.core.create_element("a",{'href':["/#books/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')},[(function (){var attrs74031 = title;
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs74031))?daiquiri.interpreter.element_attributes(attrs74031):null),((cljs.core.map_QMARK_(attrs74031))?null:[daiquiri.interpreter.interpret(attrs74031)]));
})()]),(cljs.core.truth_(brag)?daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4652__auto__ = ((function (map__74036,map__74036__$1,book,title,uri,summary,description,brag,s__74025__$2,temp__5753__auto__,book_vec){
return (function cbb$core$iter__74024_$_iter__74037(s__74038){
return (new cljs.core.LazySeq(null,(function (){
var s__74038__$1 = s__74038;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__74038__$1);
if(temp__5753__auto____$1){
var s__74038__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74038__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__74038__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__74040 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__74039 = (0);
while(true){
if((i__74039 < size__4651__auto__)){
var b = cljs.core._nth(c__4650__auto__,i__74039);
cljs.core.chunk_append(b__74040,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plain","h3.plain",-1457273885),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),b], null),b], null));

var G__74122 = (i__74039 + (1));
i__74039 = G__74122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74040),cbb$core$iter__74024_$_iter__74037(cljs.core.chunk_rest(s__74038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74040),null);
}
} else {
var b = cljs.core.first(s__74038__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plain","h3.plain",-1457273885),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),b], null),b], null),cbb$core$iter__74024_$_iter__74037(cljs.core.rest(s__74038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__74036,map__74036__$1,book,title,uri,summary,description,brag,s__74025__$2,temp__5753__auto__,book_vec))
;
return iter__4652__auto__(brag);
})()], null)):null),(function (){var attrs74029 = summary;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs74029))?daiquiri.interpreter.element_attributes(attrs74029):null),((cljs.core.map_QMARK_(attrs74029))?null:[daiquiri.interpreter.interpret(attrs74029)]));
})(),(function (){var attrs74030 = cljs.core.first(description);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs74030))?daiquiri.interpreter.element_attributes(attrs74030):null),((cljs.core.map_QMARK_(attrs74030))?[" ",daiquiri.core.create_element("a",{'href':["/#books/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')},["Click here for more info."])]:[daiquiri.interpreter.interpret(attrs74030)," ",daiquiri.core.create_element("a",{'href':["/#books/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')},["Click here for more info."])]));
})()]),cbb$core$iter__74024(cljs.core.rest(s__74025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(book_vec);
})())])]);
}),null,"cbb.core/books-list");
/**
 * Displays the book requested, or a list of books.
 */
cbb.core.books = rum.core.lazy_build(rum.core.build_defc,(function (all_books,book_id){
var disp_book = (cljs.core.truth_(book_id)?(function (){var fexpr__74041 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(book_id);
return (fexpr__74041.cljs$core$IFn$_invoke$arity$1 ? fexpr__74041.cljs$core$IFn$_invoke$arity$1(all_books) : fexpr__74041.call(null,all_books));
})():null);
if(cljs.core.truth_((function (){var and__4251__auto__ = disp_book;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(disp_book);
} else {
return and__4251__auto__;
}
})())){
return cbb.core.book(disp_book);
} else {
return cbb.core.books_list(all_books);
}
}),null,"cbb.core/books");
cbb.core.required = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("span",{'className':"asterisk"},["*"]);
}),null,"cbb.core/required");
cbb.core.mg_teaching_guid = (function cbb$core$mg_teaching_guid(book,p__74044){
var map__74045 = p__74044;
var map__74045__$1 = cljs.core.__destructure_map(map__74045);
var disp_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74045__$1,new cljs.core.Keyword(null,"disp-date","disp-date",1336649799));
var pdf_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74045__$1,new cljs.core.Keyword(null,"pdf-uri","pdf-uri",-607474352));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74045__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"MG @ Heart Teaching Guide",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.mg-at-heart","img.mg-at-heart",1719263494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/middle-grade-at-heart.png"], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book)], null)," was the featured book for our ",disp_date," edition of the Middle Grade at Heart Newsletter!"," You can download ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),pdf_uri,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"a PDF of the issue."], null)," ",description], null)], null);
});
cbb.core.hc_teaching_guild = (function cbb$core$hc_teaching_guild(book,p__74046){
var map__74047 = p__74046;
var map__74047__$1 = cljs.core.__destructure_map(map__74047);
var pdf_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74047__$1,new cljs.core.Keyword(null,"pdf-uri","pdf-uri",-607474352));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"HarperCollins Teaching Guide"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can find a downloadable PDF of the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),pdf_uri,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"educator's guide that HarperCollins created"], null)," for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book)], null)], null)], null);
});
cbb.core.class_resource_item = (function cbb$core$class_resource_item(item){
var G__74048 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
var G__74048__$1 = (((G__74048 instanceof cljs.core.Keyword))?G__74048.fqn:null);
switch (G__74048__$1) {
case "book-trailer":
return cbb.core.embeded_youtube(item);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74048__$1)].join('')));

}
});
cbb.core.md_book_resource = rum.core.lazy_build(rum.core.build_defc,(function (p__74049,p__74050,state){
var map__74051 = p__74049;
var map__74051__$1 = cljs.core.__destructure_map(map__74051);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74051__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var map__74052 = p__74050;
var map__74052__$1 = cljs.core.__destructure_map(map__74052);
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74052__$1,new cljs.core.Keyword(null,"role","role",-736691072));
return cbb.core.mrd((function (){var fexpr__74054 = cbb.core.page_name_keyword([cljs.core.name(role),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join(''));
return (fexpr__74054.cljs$core$IFn$_invoke$arity$1 ? fexpr__74054.cljs$core$IFn$_invoke$arity$1(state) : fexpr__74054.call(null,state));
})(),cljs.core.PersistentVector.EMPTY);
}),null,"cbb.core/md-book-resource");
cbb.core.book_class_resources = (function cbb$core$book_class_resources(all_books,book_id,state){
var disp_book = (cljs.core.truth_(book_id)?(function (){var fexpr__74055 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(book_id);
return (fexpr__74055.cljs$core$IFn$_invoke$arity$1 ? fexpr__74055.cljs$core$IFn$_invoke$arity$1(all_books) : fexpr__74055.call(null,all_books));
})():null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(disp_book)], null)," Classroom Resources"], null),(function (){var iter__4652__auto__ = (function cbb$core$book_class_resources_$_iter__74056(s__74057){
return (new cljs.core.LazySeq(null,(function (){
var s__74057__$1 = s__74057;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__74057__$1);
if(temp__5753__auto__){
var s__74057__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74057__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__74057__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__74059 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__74058 = (0);
while(true){
if((i__74058 < size__4651__auto__)){
var r = cljs.core._nth(c__4650__auto__,i__74058);
cljs.core.chunk_append(b__74059,(function (){var G__74060 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(r);
var G__74060__$1 = (((G__74060 instanceof cljs.core.Keyword))?G__74060.fqn:null);
switch (G__74060__$1) {
case "video":
return cbb.core.embeded_youtube(r);

break;
case "mg-teaching-guide":
return cbb.core.mg_teaching_guid(disp_book,r);

break;
case "hc-teaching-guide":
return cbb.core.hc_teaching_guild(disp_book,r);

break;
case "md-page":
return cbb.core.md_book_resource(disp_book,r,state);

break;
case "else":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74060__$1)].join('')));

}
})());

var G__74125 = (i__74058 + (1));
i__74058 = G__74125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74059),cbb$core$book_class_resources_$_iter__74056(cljs.core.chunk_rest(s__74057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74059),null);
}
} else {
var r = cljs.core.first(s__74057__$2);
return cljs.core.cons((function (){var G__74061 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(r);
var G__74061__$1 = (((G__74061 instanceof cljs.core.Keyword))?G__74061.fqn:null);
switch (G__74061__$1) {
case "video":
return cbb.core.embeded_youtube(r);

break;
case "mg-teaching-guide":
return cbb.core.mg_teaching_guid(disp_book,r);

break;
case "hc-teaching-guide":
return cbb.core.hc_teaching_guild(disp_book,r);

break;
case "md-page":
return cbb.core.md_book_resource(disp_book,r,state);

break;
case "else":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74061__$1)].join('')));

}
})(),cbb$core$book_class_resources_$_iter__74056(cljs.core.rest(s__74057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(disp_book));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Resources For Teaching My Other Books"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function cbb$core$book_class_resources_$_iter__74062(s__74063){
return (new cljs.core.LazySeq(null,(function (){
var s__74063__$1 = s__74063;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__74063__$1);
if(temp__5753__auto__){
var s__74063__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74063__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__74063__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__74065 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__74064 = (0);
while(true){
if((i__74064 < size__4651__auto__)){
var vec__74066 = cljs.core._nth(c__4650__auto__,i__74064);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74066,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74066,(1),null);
cljs.core.chunk_append(b__74065,(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(b));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b),book_id);
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/#class-resources/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b))].join('')], null),"Resources for teaching ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b)], null)], null)], null):null));

var G__74127 = (i__74064 + (1));
i__74064 = G__74127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74065),cbb$core$book_class_resources_$_iter__74062(cljs.core.chunk_rest(s__74063__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74065),null);
}
} else {
var vec__74069 = cljs.core.first(s__74063__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74069,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74069,(1),null);
return cljs.core.cons((cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(b));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b),book_id);
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/#class-resources/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b))].join('')], null),"Resources for teaching ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b)], null)], null)], null):null),cbb$core$book_class_resources_$_iter__74062(cljs.core.rest(s__74063__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(all_books);
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding-bottom","div.padding-bottom",-1110165357)], null)], null);
});
cbb.core.class_resources = rum.core.lazy_build(rum.core.build_defc,(function (all_books,book_id,state){
if(cljs.core.truth_(book_id)){
return daiquiri.interpreter.interpret(cbb.core.book_class_resources(all_books,book_id,state));
} else {
return null;
}
}),null,"cbb.core/class-resources");
cbb.core.writer_resources = rum.core.lazy_build(rum.core.build_defc,(function (writer_resc){
return daiquiri.core.create_element("div",{'className':"content"},[daiquiri.core.create_element("h1",null,["Classes + Resources for Writers"]),"Coming soon!"]);
}),null,"cbb.core/writer-resources");
cbb.core.faq = rum.core.lazy_build(rum.core.build_defc,(function (faqs){
return daiquiri.core.create_element("div",{'className':"content"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$core$iter__74074(s__74075){
return (new cljs.core.LazySeq(null,(function (){
var s__74075__$1 = s__74075;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__74075__$1);
if(temp__5753__auto__){
var s__74075__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74075__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__74075__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__74077 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__74076 = (0);
while(true){
if((i__74076 < size__4651__auto__)){
var f = cljs.core._nth(c__4650__auto__,i__74076);
cljs.core.chunk_append(b__74077,daiquiri.core.create_element("div",{'className':"faq"},[(function (){var attrs74078 = new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(f);
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs74078))?daiquiri.interpreter.element_attributes(attrs74078):null),((cljs.core.map_QMARK_(attrs74078))?null:[daiquiri.interpreter.interpret(attrs74078)]));
})(),daiquiri.core.create_element("br",null,null),daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(f))]));

var G__74128 = (i__74076 + (1));
i__74076 = G__74128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74077),cbb$core$iter__74074(cljs.core.chunk_rest(s__74075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74077),null);
}
} else {
var f = cljs.core.first(s__74075__$2);
return cljs.core.cons(daiquiri.core.create_element("div",{'className':"faq"},[(function (){var attrs74078 = new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(f);
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs74078))?daiquiri.interpreter.element_attributes(attrs74078):null),((cljs.core.map_QMARK_(attrs74078))?null:[daiquiri.interpreter.interpret(attrs74078)]));
})(),daiquiri.core.create_element("br",null,null),daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(f))]),cbb$core$iter__74074(cljs.core.rest(s__74075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(faqs);
})())]);
}),null,"cbb.core/faq");
cbb.core.social = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"social"},[daiquiri.core.create_element("a",{'href':"https://www.goodreads.com/author/show/16027248.Cindy_Baldwin",'target':"_blank"},[daiquiri.core.create_element("img",{'src':"images/goodreads-small.png"},null)]),daiquiri.core.create_element("a",{'href':"mailto:cindybaldwinbooks@gmail.com",'target':"_blank"},[daiquiri.core.create_element("img",{'src':"images/email-xsmall.png"},null)]),daiquiri.core.create_element("a",{'href':"https://www.instagram.com/cindybaldwinbooks/",'target':"_blank"},[daiquiri.core.create_element("img",{'src':"images/instagram-small.png"},null)]),daiquiri.core.create_element("a",{'href':"https://twitter.com/beingcindy",'target':"_blank"},[daiquiri.core.create_element("img",{'src':"images/twitter-small.png"},null)]),daiquiri.core.create_element("a",{'href':"https://www.facebook.com/cindybaldwinbooks/",'target':"_blank"},[daiquiri.core.create_element("img",{'src':"images/facebook-small.png"},null)])]);
}),null,"cbb.core/social");
cbb.core.md_page = rum.core.lazy_build(rum.core.build_defc,(function (page,all_books){
var page_key = cbb.core.page_name_keyword(page);
var page_contents = (function (){var G__74084 = rum.core.react(cbb.core.state);
return (page_key.cljs$core$IFn$_invoke$arity$1 ? page_key.cljs$core$IFn$_invoke$arity$1(G__74084) : page_key.call(null,G__74084));
})();
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74083_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_key,new cljs.core.Keyword(null,"state-key","state-key",1501674933).cljs$core$IFn$_invoke$arity$1(p1__74083_SHARP_));
}),rum.core.react(cbb.core.pages))));
return daiquiri.core.create_element("div",{'className':"content"},[(function (){var attrs74085 = title;
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs74085))?daiquiri.interpreter.element_attributes(attrs74085):null),((cljs.core.map_QMARK_(attrs74085))?null:[daiquiri.interpreter.interpret(attrs74085)]));
})(),cbb.core.mrd(page_contents,all_books),daiquiri.core.create_element("div",{'className':"padding-bottom"},null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"cbb.core/md-page");
cbb.core.bug = rum.core.lazy_build(rum.core.build_defc,(function (b){
var map__74088 = b;
var map__74088__$1 = cljs.core.__destructure_map(map__74088);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74088__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var margin_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74088__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var left_distance = ((window.innerWidth / (2)) - size);
var margin_left__$1 = (((margin_left < (0)))?(function (){var x__4336__auto__ = (- left_distance);
var y__4337__auto__ = margin_left;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})():(function (){var x__4339__auto__ = left_distance;
var y__4340__auto__ = margin_left;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})());
var tool_style = (function (){var pred__74089 = cljs.core._EQ_;
var expr__74090 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_((pred__74089.cljs$core$IFn$_invoke$arity$2 ? pred__74089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),expr__74090) : pred__74089.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),expr__74090)))){
return new cljs.core.PersistentArrayMap(null, 3, ["top","115%","left","50px","margin-left","-60px"], null);
} else {
if(cljs.core.truth_((pred__74089.cljs$core$IFn$_invoke$arity$2 ? pred__74089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),expr__74090) : pred__74089.call(null,new cljs.core.Keyword(null,"top","top",-1856271961),expr__74090)))){
return new cljs.core.PersistentArrayMap(null, 3, ["bottom","100%","left","50%","margin-left","-60px"], null);
} else {
if(cljs.core.truth_((pred__74089.cljs$core$IFn$_invoke$arity$2 ? pred__74089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),expr__74090) : pred__74089.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__74090)))){
return new cljs.core.PersistentArrayMap(null, 2, ["top","-5px","right","115%"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, ["top","-5px","left","115%"], null);
}
}
}
})();
return daiquiri.core.create_element("span",{'style':{'height':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),'width':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),'margin-top':new cljs.core.Keyword(null,"margin-top","margin-top",392161226).cljs$core$IFn$_invoke$arity$1(b),'margin-left':margin_left__$1},'className':"bug"},[daiquiri.core.create_element("span",{'className':"shake"},[daiquiri.core.create_element("span",{'style':{'height':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),'width':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),'background-size':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),'transform':["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(b)),"deg)"].join('')},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(b))], null))},[])]),(cljs.core.truth_(new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(b))?daiquiri.core.create_element("span",{'style':daiquiri.interpreter.element_attributes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hint-width","hint-width",-421789073).cljs$core$IFn$_invoke$arity$1(b)),"px"].join('')], null),tool_style], 0))),'className':"hint-text"},[daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(b))]):null)]);
}),null,"cbb.core/bug");
cbb.core.bugs = (function cbb$core$bugs(location,page_id,b){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bugs","div.bugs",-125171640),(function (){var bs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74092_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(page_id);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return location;
}
})(),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(p1__74092_SHARP_));
}),b);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74093_SHARP_){
return cbb.core.bug(p1__74093_SHARP_);
}),bs);
})()], null);
});
cbb.core.root = rum.core.lazy_build(rum.core.build_defc,(function (){
var l = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.location));
var navigation_links = new cljs.core.Keyword(null,"navigation-links","navigation-links",-676226410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"misc","misc",-222218601).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.state)));
var book_id = new cljs.core.Keyword(null,"book-id","book-id",279994624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.location)));
var all_books = new cljs.core.Keyword(null,"all-books","all-books",-1267748350).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.state));
var all_short_works = new cljs.core.Keyword(null,"short-works","short-works",-1268334948).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-short-works","all-short-works",-824786402).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.state)));
var teaching_testimonials = new cljs.core.Keyword(null,"teaching-testimonials","teaching-testimonials",775250648).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"misc","misc",-222218601).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.state)));
var writer_resc = new cljs.core.Keyword(null,"writer-resources","writer-resources",-349578147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"misc","misc",-222218601).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.state)));
var faqs = new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"misc","misc",-222218601).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.state)));
var page_id = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.location)));
var attrs74094 = cbb.core.bugs(l,page_id,new cljs.core.Keyword(null,"bugs","bugs",-828146579).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"misc","misc",-222218601).cljs$core$IFn$_invoke$arity$1(rum.core.react(cbb.core.state))));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs74094))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application"], null)], null),attrs74094], 0))):{'className':"application"}),((cljs.core.map_QMARK_(attrs74094))?[((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.Keyword(null,"home","home",-74557309)))?cbb.core.header(l):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.Keyword(null,"home","home",-74557309)))?cbb.core.main_nav_links(l,navigation_links,page_id):null),(function (){var G__74095 = l;
var G__74095__$1 = (((G__74095 instanceof cljs.core.Keyword))?G__74095.fqn:null);
switch (G__74095__$1) {
case "home":
return cbb.core.home(navigation_links);

break;
case "press-kit":
return cbb.core.press_kit(all_books);

break;
case "events":
return cbb.core.events();

break;
case "short-works":
return cbb.core.loading(all_short_works,cbb.core.short_works(all_short_works));

break;
case "books":
return cbb.core.loading(all_books,cbb.core.books(all_books,book_id));

break;
case "class-resources":
return cbb.core.loading(all_books,cbb.core.class_resources(all_books,book_id,rum.core.react(cbb.core.state)));

break;
case "writer-resources":
return cbb.core.writer_resources(writer_resc);

break;
case "faq":
return cbb.core.loading(faqs,cbb.core.faq(faqs));

break;
case "page":
return cbb.core.loading(page_id,cbb.core.md_page(page_id,all_books));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74095__$1)].join('')));

}
})(),cbb.core.social()]:[daiquiri.interpreter.interpret(attrs74094),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.Keyword(null,"home","home",-74557309)))?cbb.core.header(l):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.Keyword(null,"home","home",-74557309)))?cbb.core.main_nav_links(l,navigation_links,page_id):null),(function (){var G__74096 = l;
var G__74096__$1 = (((G__74096 instanceof cljs.core.Keyword))?G__74096.fqn:null);
switch (G__74096__$1) {
case "home":
return cbb.core.home(navigation_links);

break;
case "press-kit":
return cbb.core.press_kit(all_books);

break;
case "events":
return cbb.core.events();

break;
case "short-works":
return cbb.core.loading(all_short_works,cbb.core.short_works(all_short_works));

break;
case "books":
return cbb.core.loading(all_books,cbb.core.books(all_books,book_id));

break;
case "class-resources":
return cbb.core.loading(all_books,cbb.core.class_resources(all_books,book_id,rum.core.react(cbb.core.state)));

break;
case "writer-resources":
return cbb.core.writer_resources(writer_resc);

break;
case "faq":
return cbb.core.loading(faqs,cbb.core.faq(faqs));

break;
case "page":
return cbb.core.loading(page_id,cbb.core.md_page(page_id,all_books));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74096__$1)].join('')));

}
})(),cbb.core.social()]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"cbb.core/root");
cbb.core.start = (function cbb$core$start(){
rum.core.mount(cbb.core.root(),document.getElementById("app"));

return rum.core.mount(cbb.core.root(),document.getElementById("app"));
});
goog.exportSymbol('cbb.core.start', cbb.core.start);

//# sourceMappingURL=cbb.core.js.map
