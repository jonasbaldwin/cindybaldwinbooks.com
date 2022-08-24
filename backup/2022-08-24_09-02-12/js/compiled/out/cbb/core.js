// Compiled by ClojureScript 1.10.520 {}
goog.provide('cbb.core');
goog.require('cljs.core');
goog.require('bidi.router');
goog.require('rum.core');
goog.require('clojure.string');
goog.require('cbb.affiliates');
goog.require('ajax.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('cljs_time.coerce');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof cbb !== 'undefined') && (typeof cbb.core !== 'undefined') && (typeof cbb.core.location !== 'undefined')){
} else {
cbb.core.location = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"book-club","book-club",-559617940)], null));
}
cbb.core.navigation = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"display","display",242065432),"Home",new cljs.core.Keyword(null,"link","link",-1769163468),"/#home"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"display","display",242065432),"About",new cljs.core.Keyword(null,"link","link",-1769163468),"/#about"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"display","display",242065432),"Books",new cljs.core.Keyword(null,"link","link",-1769163468),"/#books"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"short-works","short-works",-1268334948),new cljs.core.Keyword(null,"display","display",242065432),"Short Works",new cljs.core.Keyword(null,"link","link",-1769163468),"/#short-works"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"blog-resources","blog-resources",-1487163796),new cljs.core.Keyword(null,"display","display",242065432),"Blog",new cljs.core.Keyword(null,"link","link",-1769163468),"http://blog.cindybaldwinbooks.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"display","display",242065432),"Events",new cljs.core.Keyword(null,"link","link",-1769163468),"/#events"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"book-club","book-club",-559617940),new cljs.core.Keyword(null,"display","display",242065432),"Book Club",new cljs.core.Keyword(null,"link","link",-1769163468),"/#book-club"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class-resources","class-resources",1480066294),new cljs.core.Keyword(null,"display","display",242065432),"Classroom Resources",new cljs.core.Keyword(null,"link","link",-1769163468),"/#class-resources"], null)], null);
cbb.core.router = bidi.router.start_router_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentHashMap.fromArrays(["books","class-resources","short-works","about","book-club","events","press-kit","home","terms","blog-resources"],[cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"books","books",-2005362272),"/",new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"book-id","book-id",279994624)], null),new cljs.core.Keyword(null,"books","books",-2005362272)]),new cljs.core.Keyword(null,"class-resources","class-resources",1480066294),new cljs.core.Keyword(null,"short-works","short-works",-1268334948),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"book-club","book-club",-559617940),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"press-kit","press-kit",639042202),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"terms","terms",-1556977978),new cljs.core.Keyword(null,"blog-resources","blog-resources",-1487163796)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),(function (p1__25253_SHARP_){
return cljs.core.reset_BANG_.call(null,cbb.core.location,(function (){var or__4131__auto__ = p1__25253_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"home","home",-74557309)], null);
}
})());
})], null));
if((typeof cbb !== 'undefined') && (typeof cbb.core !== 'undefined') && (typeof cbb.core.state !== 'undefined')){
} else {
cbb.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cbb.core.update_state = (function cbb$core$update_state(k,r){
return cljs.core.swap_BANG_.call(null,cbb.core.state,cljs.core.assoc,k,cljs.reader.read_string.call(null,r));
});
cbb.core.load = (function cbb$core$load(file,k){
return ajax.core.GET.call(null,file,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__25254_SHARP_){
return cbb.core.update_state.call(null,k,p1__25254_SHARP_);
})], null));
});
cbb.core.load.call(null,"data/books.edn",new cljs.core.Keyword(null,"all-books","all-books",-1267748350));
cbb.core.load.call(null,"data/short_works.edn",new cljs.core.Keyword(null,"all-short-works","all-short-works",-824786402));
cbb.core.load.call(null,"data/events.edn",new cljs.core.Keyword(null,"all-events","all-events",-835645557));
cbb.core.loading = rum.core.build_defc.call(null,(function (show,content){
if(cljs.core.truth_(show)){
return sablono.interpreter.interpret.call(null,content);
} else {
return React.createElement("div",({"className": "content"}),"loading");
}
}),null,"loading");
cbb.core.header = rum.core.build_defc.call(null,(function (location){
var attrs25257 = ((cljs.core.not_EQ_.call(null,location,new cljs.core.Keyword(null,"home","home",-74557309)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.header-watermelon","img.header-watermelon",-1848884741),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/header-watermelon-medium.png"], null)], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25257))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs25257)):({"className": "header"})),((cljs.core.map_QMARK_.call(null,attrs25257))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("img",({"src": "images/header-black.png", "className": "logo"}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25257),React.createElement("img",({"src": "images/header-black.png", "className": "logo"}))], null)));
}),null,"header");
cbb.core.nav_links = rum.core.build_defc.call(null,(function (location){
return sablono.interpreter.interpret.call(null,(function (){var G__25262 = location;
var G__25262__$1 = (((G__25262 instanceof cljs.core.Keyword))?G__25262.fqn:null);
switch (G__25262__$1) {
case "home":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav","img.nav",-1209989982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/splash-navigation-watermelon.png",new cljs.core.Keyword(null,"use-map","use-map",705810863),"#watermelon-map"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map#watermelon-map","map#watermelon-map",409812464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"watermelon-map"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),"poly",new cljs.core.Keyword(null,"coords","coords",-599429112),"161,131,240,1,98,0",new cljs.core.Keyword(null,"title","title",636505583),"About",new cljs.core.Keyword(null,"href","href",-793805698),"/#about"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),"poly",new cljs.core.Keyword(null,"coords","coords",-599429112),"160,132,7,93,0,1,98,1",new cljs.core.Keyword(null,"title","title",636505583),"Books",new cljs.core.Keyword(null,"href","href",-793805698),"/#books"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),"poly",new cljs.core.Keyword(null,"coords","coords",-599429112),"161,133,1,234,0,92",new cljs.core.Keyword(null,"title","title",636505583),"Short Works",new cljs.core.Keyword(null,"href","href",-793805698),"/#short-works"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shape","shape",1190694006),"poly",new cljs.core.Keyword(null,"coords","coords",-599429112),"161,133,144,286,17,226",new cljs.core.Keyword(null,"title","title",636505583),"Blog",new cljs.core.Keyword(null,"href","href",-793805698),"http://blog.cindybaldwinbooks.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),"poly",new cljs.core.Keyword(null,"coords","coords",-599429112),"161,133,287,261,201,287,144,284",new cljs.core.Keyword(null,"title","title",636505583),"Book Club",new cljs.core.Keyword(null,"href","href",-793805698),"/#book-club"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),"poly",new cljs.core.Keyword(null,"coords","coords",-599429112),"161,133,299,272,365,200,361,157,292,148,276,121",new cljs.core.Keyword(null,"title","title",636505583),"Classroom Resources",new cljs.core.Keyword(null,"href","href",-793805698),"/#class-resources"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),"poly",new cljs.core.Keyword(null,"coords","coords",-599429112),"217,80,321,146,344,101,343,51,332,30,280,28,243,53",new cljs.core.Keyword(null,"title","title",636505583),"Events",new cljs.core.Keyword(null,"href","href",-793805698),"/#events"], null)], null)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),(function (){var iter__4523__auto__ = ((function (G__25262,G__25262__$1){
return (function cbb$core$iter__25263(s__25264){
return (new cljs.core.LazySeq(null,((function (G__25262,G__25262__$1){
return (function (){
var s__25264__$1 = s__25264;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25264__$1);
if(temp__5735__auto__){
var s__25264__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25264__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25264__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25266 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25265 = (0);
while(true){
if((i__25265 < size__4522__auto__)){
var link = cljs.core._nth.call(null,c__4521__auto__,i__25265);
cljs.core.chunk_append.call(null,b__25266,(function (){var class$ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(link),location))?"active ":null);
var class$__$1 = [(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(link),/#/,""))].join('');
var attr = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(link),new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,attr,(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link)], null):cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-text","span.link-text",-1910898319),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(link)], null)], null);
})());

var G__25268 = (i__25265 + (1));
i__25265 = G__25268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25266),cbb$core$iter__25263.call(null,cljs.core.chunk_rest.call(null,s__25264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25266),null);
}
} else {
var link = cljs.core.first.call(null,s__25264__$2);
return cljs.core.cons.call(null,(function (){var class$ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(link),location))?"active ":null);
var class$__$1 = [(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(link),/#/,""))].join('');
var attr = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(link),new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,attr,(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link)], null):cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-text","span.link-text",-1910898319),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(link)], null)], null);
})(),cbb$core$iter__25263.call(null,cljs.core.rest.call(null,s__25264__$2)));
}
} else {
return null;
}
break;
}
});})(G__25262,G__25262__$1))
,null,null));
});})(G__25262,G__25262__$1))
;
return iter__4523__auto__.call(null,cbb.core.navigation);
})()], null);

}
})());
}),null,"nav-links");
cbb.core.custom_formatter = cljs_time.format.formatter.call(null,"MMMM do, yyyy");
cbb.core.date_from_map = (function cbb$core$date_from_map(p__25269){
var map__25270 = p__25269;
var map__25270__$1 = (((((!((map__25270 == null))))?(((((map__25270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25270):map__25270);
var day = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var month = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"year","year",335913393));
return cljs_time.core.date_time.call(null,year,month,day);
});
cbb.core.format_date = (function cbb$core$format_date(date){
return cljs_time.format.unparse.call(null,cbb.core.custom_formatter,cbb.core.date_from_map.call(null,date));
});
cbb.core.book_active = (function cbb$core$book_active(book){
var and__4120__auto__ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(book);
if(cljs.core.truth_(and__4120__auto__)){
return (cljs_time.core.now.call(null) > cbb.core.date_from_map.call(null,new cljs.core.Keyword(null,"display-date","display-date",-1113319561).cljs$core$IFn$_invoke$arity$1(book)));
} else {
return and__4120__auto__;
}
});
cbb.core.sort_books_release = (function cbb$core$sort_books_release(all_books){
return cljs.core.sort.call(null,(function (_,p__25272){
var map__25273 = p__25272;
var map__25273__$1 = (((((!((map__25273 == null))))?(((((map__25273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25273):map__25273);
var pub_date = cljs.core.get.call(null,map__25273__$1,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(pub_date)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(pub_date)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(pub_date))].join('');
}),all_books);
});
cbb.core.home = rum.core.build_defc.call(null,(function (){
var l = new cljs.core.Keyword(null,"home","home",-74557309);
var attrs25275 = cbb.core.header.call(null,l);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25275))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["splash"], null)], null),attrs25275)):({"className": "splash"})),((cljs.core.map_QMARK_.call(null,attrs25275))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25276 = cbb.core.nav_links.call(null,l);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25276))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["body"], null)], null),attrs25276)):({"className": "body"})),((cljs.core.map_QMARK_.call(null,attrs25276))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "intro-text"}),"Cindy Baldwin is the author of the critically acclaimed novel",React.createElement("i",null,"Where The Watermelons Grow")," and the forthcoming ",React.createElement("i",null,"Beginners Welcome"),". She grew up in North Carolina and still misses the sweet watermelons and warm accents on a daily basis. As a middle schooler, she kept a book under her bathroom sink to read over and over while fixing her hair or brushing her teeth, and she dreams of writing the kind of books readers can\u2019t bear to be without. She lives in Portland, Oregon, with her husband and daughter.")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25276),React.createElement("div",({"className": "intro-text"}),"Cindy Baldwin is the author of the critically acclaimed novel",React.createElement("i",null,"Where The Watermelons Grow")," and the forthcoming ",React.createElement("i",null,"Beginners Welcome"),". She grew up in North Carolina and still misses the sweet watermelons and warm accents on a daily basis. As a middle schooler, she kept a book under her bathroom sink to read over and over while fixing her hair or brushing her teeth, and she dreams of writing the kind of books readers can\u2019t bear to be without. She lives in Portland, Oregon, with her husband and daughter.")], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25275),(function (){var attrs25281 = cbb.core.nav_links.call(null,l);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25281))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["body"], null)], null),attrs25281)):({"className": "body"})),((cljs.core.map_QMARK_.call(null,attrs25281))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "intro-text"}),"Cindy Baldwin is the author of the critically acclaimed novel",React.createElement("i",null,"Where The Watermelons Grow")," and the forthcoming ",React.createElement("i",null,"Beginners Welcome"),". She grew up in North Carolina and still misses the sweet watermelons and warm accents on a daily basis. As a middle schooler, she kept a book under her bathroom sink to read over and over while fixing her hair or brushing her teeth, and she dreams of writing the kind of books readers can\u2019t bear to be without. She lives in Portland, Oregon, with her husband and daughter.")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25281),React.createElement("div",({"className": "intro-text"}),"Cindy Baldwin is the author of the critically acclaimed novel",React.createElement("i",null,"Where The Watermelons Grow")," and the forthcoming ",React.createElement("i",null,"Beginners Welcome"),". She grew up in North Carolina and still misses the sweet watermelons and warm accents on a daily basis. As a middle schooler, she kept a book under her bathroom sink to read over and over while fixing her hair or brushing her teeth, and she dreams of writing the kind of books readers can\u2019t bear to be without. She lives in Portland, Oregon, with her husband and daughter.")], null)));
})()], null)));
}),null,"home");
cbb.core.about = rum.core.build_defc.call(null,(function (){
var l = new cljs.core.Keyword(null,"about","about",1423892543);
return React.createElement("div",({"className": "content"}),React.createElement("h1",null,"About"),React.createElement("img",({"alt": "Cindy Baldwin Headshot", "src": "images/headshot1.jpeg", "className": "highlight"})),React.createElement("p",null,React.createElement("a",({"href": "/#press-kit"}),"Click here to access my press kit.")),React.createElement("p",null,"For as long as I can remember, I have wanted to tell stories\u2014probably because my imagination was so vivid as a child that I was convinced that the Three Bears slept on the other side of my queen-sized bed and that a volcano was likely to rupture underneath my house at any moment. When I was eight, before computers were nearly as common as they are now, I taught myself how to type so that I could get the stories in my head down faster than I could with a pen and paper. As an adult I type about 150 words per minute, so I guess it paid off!"),React.createElement("p",null,"I have a genetic disease called cystic fibrosis, and my health challenges have always been both a big part of my life and a big influence on my writing. One of my first books (also written when I was about eight) was a melodrama about a princess locked in a tower that featured villains named most cleverly after two of my inhaled medications (Albuterol and Vanceril, in case you\u2019re wondering)."),React.createElement("p",null,"As a preteen, I had books stashed all over my house in case I found myself nearby without reading material. For years, I kept a book in one bathroom cabinet in particular, just on the off-chance that I was brushing my teeth or visiting the toilet without another book at hand. (I remember this book most often being either ELLA ENCHANTED by Gail Carson Levine or FAR TO GO by Noel Streatfeild.) As a grown-up, it\u2019s my goal to write the kinds of books that kids will want to stash in bathroom cabinets."),React.createElement("p",null,"Like many of my characters, I grew up in the South (Durham, North Carolina, to be precise). I moved away after graduating high school and haven\u2019t been back since, but my heart will always love the humidity, lightning bugs, and warm accents."),React.createElement("p",null,"These days, my home is in Portland, Oregon, which is a different kind of magic\u2014and while I\u2019ll always miss the South, I\u2019m growing to love the misty winters and the wild blackberries, too! I live in a cute little house called Maple Cottage with my husband and preschool-aged daughter, who looks like she just might turn out to be a storyteller, too."));
}),null,"about");
cbb.core.press_kit = rum.core.build_defc.call(null,(function (all_books){
var sorted_books = cbb.core.sort_books_release.call(null,all_books);
return React.createElement("div",({"className": "content"}),React.createElement("h1",null,"Press Kit"),React.createElement("p",null,"Text and images may be used for promotional purposes."),React.createElement("h2",null,"Images"),React.createElement("p",null,"Click to download high-res images."),React.createElement("div",({"className": "photo-grid"}),React.createElement("div",null,React.createElement("div",null,React.createElement("a",({"href": "images/headshot1.jpeg"}),React.createElement("img",({"alt": "Cindy Baldwin Headshot", "src": "images/headshot1.jpeg"})))),React.createElement("div",({"className": "text-wrap"}),"Photo Credit Cindy Baldwin.")),cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = ((function (sorted_books){
return (function cbb$core$iter__25304(s__25305){
return (new cljs.core.LazySeq(null,((function (sorted_books){
return (function (){
var s__25305__$1 = s__25305;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25305__$1);
if(temp__5735__auto__){
var s__25305__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25305__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25305__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25307 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25306 = (0);
while(true){
if((i__25306 < size__4522__auto__)){
var vec__25308 = cljs.core._nth.call(null,c__4521__auto__,i__25306);
var _ = cljs.core.nth.call(null,vec__25308,(0),null);
var b = cljs.core.nth.call(null,vec__25308,(1),null);
cljs.core.chunk_append.call(null,b__25307,sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = cbb.core.book_active.call(null,b);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.book-img","img.book-img",1683890076),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-wrap","div.text-wrap",-1396076251),"Cover by ",new cljs.core.Keyword(null,"front-cover-art-credit","front-cover-art-credit",1253647755).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b)),"."], null)], null):null)));

var G__25338 = (i__25306 + (1));
i__25306 = G__25338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25307),cbb$core$iter__25304.call(null,cljs.core.chunk_rest.call(null,s__25305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25307),null);
}
} else {
var vec__25311 = cljs.core.first.call(null,s__25305__$2);
var _ = cljs.core.nth.call(null,vec__25311,(0),null);
var b = cljs.core.nth.call(null,vec__25311,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = cbb.core.book_active.call(null,b);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.book-img","img.book-img",1683890076),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-wrap","div.text-wrap",-1396076251),"Cover by ",new cljs.core.Keyword(null,"front-cover-art-credit","front-cover-art-credit",1253647755).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(b)),"."], null)], null):null)),cbb$core$iter__25304.call(null,cljs.core.rest.call(null,s__25305__$2)));
}
} else {
return null;
}
break;
}
});})(sorted_books))
,null,null));
});})(sorted_books))
;
return iter__4523__auto__.call(null,sorted_books);
})())),React.createElement("h2",null,"Bio"),React.createElement("p",null,"Cindy Baldwin is the author of the critically acclaimed novel ",React.createElement("i",null,"Where the Watermelons Grow")," and the forthcoming ",React.createElement("i",null,"Beginners Welcome"),". She grew up in North Carolina and still misses the sweet watermelons and warm accents on a daily basis. As a middle schooler, she kept a book under her bathroom sink to read over and over while fixing her hair or brushing her teeth, and she dreams of writing the kind of books readers can\u2019t bear to be without. She lives in Portland, Oregon, with her husband and daughter."),React.createElement("h2",null,"Book Details"),cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = ((function (sorted_books){
return (function cbb$core$iter__25314(s__25315){
return (new cljs.core.LazySeq(null,((function (sorted_books){
return (function (){
var s__25315__$1 = s__25315;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25315__$1);
if(temp__5735__auto__){
var s__25315__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25315__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25315__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25317 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25316 = (0);
while(true){
if((i__25316 < size__4522__auto__)){
var vec__25318 = cljs.core._nth.call(null,c__4521__auto__,i__25316);
var _ = cljs.core.nth.call(null,vec__25318,(0),null);
var b = cljs.core.nth.call(null,vec__25318,(1),null);
cljs.core.chunk_append.call(null,b__25317,(function (){var released_QMARK_ = (cljs_time.coerce.to_long.call(null,cljs_time.core.now.call(null)) > cljs_time.coerce.to_long.call(null,cbb.core.date_from_map.call(null,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b))));
var announced_QMARK_ = (cljs_time.coerce.to_long.call(null,cljs_time.core.now.call(null)) > cljs_time.coerce.to_long.call(null,cbb.core.date_from_map.call(null,new cljs.core.Keyword(null,"display-date","display-date",-1113319561).cljs$core$IFn$_invoke$arity$1(b))));
return React.createElement("div",null,(function (){var attrs25321 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b);
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs25321))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs25321)):({"className": "title"})),((cljs.core.map_QMARK_.call(null,attrs25321))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25321)], null)));
})(),(function (){var attrs25322 = ((released_QMARK_)?"released":"releases");
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25322))?sablono.interpreter.attributes.call(null,attrs25322):null),((cljs.core.map_QMARK_.call(null,attrs25322))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret.call(null,cbb.core.format_date.call(null,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25322)," ",sablono.interpreter.interpret.call(null,cbb.core.format_date.call(null,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b)))], null)));
})(),React.createElement("p",null,"ISBN: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"isbn","isbn",-1600638962).cljs$core$IFn$_invoke$arity$1(b))),React.createElement("h4",null,"Summary"),React.createElement("p",null,(function (){var attrs25326 = new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(b);
return cljs.core.apply.call(null,React.createElement,"b",((cljs.core.map_QMARK_.call(null,attrs25326))?sablono.interpreter.attributes.call(null,attrs25326):null),((cljs.core.map_QMARK_.call(null,attrs25326))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25326)], null)));
})()),cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = ((function (i__25316,released_QMARK_,announced_QMARK_,vec__25318,_,b,c__4521__auto__,size__4522__auto__,b__25317,s__25315__$2,temp__5735__auto__,sorted_books){
return (function cbb$core$iter__25314_$_iter__25327(s__25328){
return (new cljs.core.LazySeq(null,((function (i__25316,released_QMARK_,announced_QMARK_,vec__25318,_,b,c__4521__auto__,size__4522__auto__,b__25317,s__25315__$2,temp__5735__auto__,sorted_books){
return (function (){
var s__25328__$1 = s__25328;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25328__$1);
if(temp__5735__auto____$1){
var s__25328__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25328__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__25328__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__25330 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__25329 = (0);
while(true){
if((i__25329 < size__4522__auto____$1)){
var s = cljs.core._nth.call(null,c__4521__auto____$1,i__25329);
cljs.core.chunk_append.call(null,b__25330,(function (){var attrs25325 = s;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25325))?sablono.interpreter.attributes.call(null,attrs25325):null),((cljs.core.map_QMARK_.call(null,attrs25325))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25325)], null)));
})());

var G__25339 = (i__25329 + (1));
i__25329 = G__25339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25330),cbb$core$iter__25314_$_iter__25327.call(null,cljs.core.chunk_rest.call(null,s__25328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25330),null);
}
} else {
var s = cljs.core.first.call(null,s__25328__$2);
return cljs.core.cons.call(null,(function (){var attrs25325 = s;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25325))?sablono.interpreter.attributes.call(null,attrs25325):null),((cljs.core.map_QMARK_.call(null,attrs25325))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25325)], null)));
})(),cbb$core$iter__25314_$_iter__25327.call(null,cljs.core.rest.call(null,s__25328__$2)));
}
} else {
return null;
}
break;
}
});})(i__25316,released_QMARK_,announced_QMARK_,vec__25318,_,b,c__4521__auto__,size__4522__auto__,b__25317,s__25315__$2,temp__5735__auto__,sorted_books))
,null,null));
});})(i__25316,released_QMARK_,announced_QMARK_,vec__25318,_,b,c__4521__auto__,size__4522__auto__,b__25317,s__25315__$2,temp__5735__auto__,sorted_books))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"brief-description","brief-description",-423592054).cljs$core$IFn$_invoke$arity$1(b));
})()),sablono.interpreter.interpret.call(null,((announced_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For more information about this book, and for a selection of reviews visit this book's page ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b)], null),"here"], null),"."], null):null)));
})());

var G__25340 = (i__25316 + (1));
i__25316 = G__25340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25317),cbb$core$iter__25314.call(null,cljs.core.chunk_rest.call(null,s__25315__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25317),null);
}
} else {
var vec__25331 = cljs.core.first.call(null,s__25315__$2);
var _ = cljs.core.nth.call(null,vec__25331,(0),null);
var b = cljs.core.nth.call(null,vec__25331,(1),null);
return cljs.core.cons.call(null,(function (){var released_QMARK_ = (cljs_time.coerce.to_long.call(null,cljs_time.core.now.call(null)) > cljs_time.coerce.to_long.call(null,cbb.core.date_from_map.call(null,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b))));
var announced_QMARK_ = (cljs_time.coerce.to_long.call(null,cljs_time.core.now.call(null)) > cljs_time.coerce.to_long.call(null,cbb.core.date_from_map.call(null,new cljs.core.Keyword(null,"display-date","display-date",-1113319561).cljs$core$IFn$_invoke$arity$1(b))));
return React.createElement("div",null,(function (){var attrs25321 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(b);
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs25321))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs25321)):({"className": "title"})),((cljs.core.map_QMARK_.call(null,attrs25321))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25321)], null)));
})(),(function (){var attrs25322 = ((released_QMARK_)?"released":"releases");
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25322))?sablono.interpreter.attributes.call(null,attrs25322):null),((cljs.core.map_QMARK_.call(null,attrs25322))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret.call(null,cbb.core.format_date.call(null,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25322)," ",sablono.interpreter.interpret.call(null,cbb.core.format_date.call(null,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779).cljs$core$IFn$_invoke$arity$1(b)))], null)));
})(),React.createElement("p",null,"ISBN: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"isbn","isbn",-1600638962).cljs$core$IFn$_invoke$arity$1(b))),React.createElement("h4",null,"Summary"),React.createElement("p",null,(function (){var attrs25326 = new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(b);
return cljs.core.apply.call(null,React.createElement,"b",((cljs.core.map_QMARK_.call(null,attrs25326))?sablono.interpreter.attributes.call(null,attrs25326):null),((cljs.core.map_QMARK_.call(null,attrs25326))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25326)], null)));
})()),cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = ((function (released_QMARK_,announced_QMARK_,vec__25331,_,b,s__25315__$2,temp__5735__auto__,sorted_books){
return (function cbb$core$iter__25314_$_iter__25334(s__25335){
return (new cljs.core.LazySeq(null,((function (released_QMARK_,announced_QMARK_,vec__25331,_,b,s__25315__$2,temp__5735__auto__,sorted_books){
return (function (){
var s__25335__$1 = s__25335;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25335__$1);
if(temp__5735__auto____$1){
var s__25335__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25335__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25335__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25337 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25336 = (0);
while(true){
if((i__25336 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__25336);
cljs.core.chunk_append.call(null,b__25337,(function (){var attrs25325 = s;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25325))?sablono.interpreter.attributes.call(null,attrs25325):null),((cljs.core.map_QMARK_.call(null,attrs25325))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25325)], null)));
})());

var G__25341 = (i__25336 + (1));
i__25336 = G__25341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25337),cbb$core$iter__25314_$_iter__25334.call(null,cljs.core.chunk_rest.call(null,s__25335__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25337),null);
}
} else {
var s = cljs.core.first.call(null,s__25335__$2);
return cljs.core.cons.call(null,(function (){var attrs25325 = s;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25325))?sablono.interpreter.attributes.call(null,attrs25325):null),((cljs.core.map_QMARK_.call(null,attrs25325))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25325)], null)));
})(),cbb$core$iter__25314_$_iter__25334.call(null,cljs.core.rest.call(null,s__25335__$2)));
}
} else {
return null;
}
break;
}
});})(released_QMARK_,announced_QMARK_,vec__25331,_,b,s__25315__$2,temp__5735__auto__,sorted_books))
,null,null));
});})(released_QMARK_,announced_QMARK_,vec__25331,_,b,s__25315__$2,temp__5735__auto__,sorted_books))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"brief-description","brief-description",-423592054).cljs$core$IFn$_invoke$arity$1(b));
})()),sablono.interpreter.interpret.call(null,((announced_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For more information about this book, and for a selection of reviews visit this book's page ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(b)], null),"here"], null),"."], null):null)));
})(),cbb$core$iter__25314.call(null,cljs.core.rest.call(null,s__25315__$2)));
}
} else {
return null;
}
break;
}
});})(sorted_books))
,null,null));
});})(sorted_books))
;
return iter__4523__auto__.call(null,sorted_books);
})()));
}),null,"press-kit");
cbb.core.events = rum.core.build_defc.call(null,(function (evs){
var l = new cljs.core.Keyword(null,"events","events",1792552201);
return React.createElement("div",({"className": "content"}),React.createElement("h1",null,"Events"),React.createElement("div",({"className": "events"}),cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = ((function (l){
return (function cbb$core$iter__25348(s__25349){
return (new cljs.core.LazySeq(null,((function (l){
return (function (){
var s__25349__$1 = s__25349;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25349__$1);
if(temp__5735__auto__){
var s__25349__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25349__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25349__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25351 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25350 = (0);
while(true){
if((i__25350 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__25350);
cljs.core.chunk_append.call(null,b__25351,(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(e));
var link = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(e));
return React.createElement("div",({"className": "event"}),(function (){var attrs25352 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs25352))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date"], null)], null),attrs25352)):({"className": "date"})),((cljs.core.map_QMARK_.call(null,attrs25352))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25352)], null)));
})(),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = name;
if(cljs.core.truth_(and__4120__auto__)){
return link;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.location","div.location",496834389),"Location: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),name], null)], null):null)),(function (){var attrs25353 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(e);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25353))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["description"], null)], null),attrs25353)):({"className": "description"})),((cljs.core.map_QMARK_.call(null,attrs25353))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25353)], null)));
})());
})());

var G__25354 = (i__25350 + (1));
i__25350 = G__25354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25351),cbb$core$iter__25348.call(null,cljs.core.chunk_rest.call(null,s__25349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25351),null);
}
} else {
var e = cljs.core.first.call(null,s__25349__$2);
return cljs.core.cons.call(null,(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(e));
var link = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(e));
return React.createElement("div",({"className": "event"}),(function (){var attrs25352 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs25352))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date"], null)], null),attrs25352)):({"className": "date"})),((cljs.core.map_QMARK_.call(null,attrs25352))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25352)], null)));
})(),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = name;
if(cljs.core.truth_(and__4120__auto__)){
return link;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.location","div.location",496834389),"Location: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),name], null)], null):null)),(function (){var attrs25353 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(e);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25353))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["description"], null)], null),attrs25353)):({"className": "description"})),((cljs.core.map_QMARK_.call(null,attrs25353))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25353)], null)));
})());
})(),cbb$core$iter__25348.call(null,cljs.core.rest.call(null,s__25349__$2)));
}
} else {
return null;
}
break;
}
});})(l))
,null,null));
});})(l))
;
return iter__4523__auto__.call(null,evs);
})())),React.createElement("div",({"className": "break"})),React.createElement("div",({"className": "buy-book-notice"}),"If you'd like to have a book signed at any of these events, please plan to purchase the book in-store during the event. This helps support local independent bookstores and keep them thriving!"));
}),null,"events");
cbb.core.short_works = rum.core.build_defc.call(null,(function (short_works){
var l = new cljs.core.Keyword(null,"short-works","short-works",-1268334948);
return React.createElement("div",({"className": "content"}),React.createElement("h1",null,"Short Works"),"Places my work has appeared:",React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = ((function (l){
return (function cbb$core$iter__25357(s__25358){
return (new cljs.core.LazySeq(null,((function (l){
return (function (){
var s__25358__$1 = s__25358;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25358__$1);
if(temp__5735__auto__){
var s__25358__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25358__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25358__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25360 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25359 = (0);
while(true){
if((i__25359 < size__4522__auto__)){
var map__25361 = cljs.core._nth.call(null,c__4521__auto__,i__25359);
var map__25361__$1 = (((((!((map__25361 == null))))?(((((map__25361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25361):map__25361);
var title = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var date = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var publication_title = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"publication-title","publication-title",-43970247));
var link = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var excerpts = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"excerpts","excerpts",-347361737));
cljs.core.chunk_append.call(null,b__25360,React.createElement("li",({"key": ["book_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),"\"",title,"\""], null):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(description)?description:null))," in ",(cljs.core.truth_(link)?React.createElement("a",({"href": link, "target": "_blank"}),sablono.interpreter.interpret.call(null,publication_title)):sablono.interpreter.interpret.call(null,publication_title)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(date)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date),")"].join(''):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(excerpts)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Some excerpts:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (i__25359,map__25361,map__25361__$1,title,description,date,publication_title,link,excerpts,c__4521__auto__,size__4522__auto__,b__25360,s__25358__$2,temp__5735__auto__,l){
return (function cbb$core$iter__25357_$_iter__25363(s__25364){
return (new cljs.core.LazySeq(null,((function (i__25359,map__25361,map__25361__$1,title,description,date,publication_title,link,excerpts,c__4521__auto__,size__4522__auto__,b__25360,s__25358__$2,temp__5735__auto__,l){
return (function (){
var s__25364__$1 = s__25364;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25364__$1);
if(temp__5735__auto____$1){
var s__25364__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25364__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__25364__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__25366 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__25365 = (0);
while(true){
if((i__25365 < size__4522__auto____$1)){
var e = cljs.core._nth.call(null,c__4521__auto____$1,i__25365);
cljs.core.chunk_append.call(null,b__25366,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e)], null)], null));

var G__25373 = (i__25365 + (1));
i__25365 = G__25373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25366),cbb$core$iter__25357_$_iter__25363.call(null,cljs.core.chunk_rest.call(null,s__25364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25366),null);
}
} else {
var e = cljs.core.first.call(null,s__25364__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e)], null)], null),cbb$core$iter__25357_$_iter__25363.call(null,cljs.core.rest.call(null,s__25364__$2)));
}
} else {
return null;
}
break;
}
});})(i__25359,map__25361,map__25361__$1,title,description,date,publication_title,link,excerpts,c__4521__auto__,size__4522__auto__,b__25360,s__25358__$2,temp__5735__auto__,l))
,null,null));
});})(i__25359,map__25361,map__25361__$1,title,description,date,publication_title,link,excerpts,c__4521__auto__,size__4522__auto__,b__25360,s__25358__$2,temp__5735__auto__,l))
;
return iter__4523__auto__.call(null,excerpts);
})()], null)], null):null))));

var G__25374 = (i__25359 + (1));
i__25359 = G__25374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25360),cbb$core$iter__25357.call(null,cljs.core.chunk_rest.call(null,s__25358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25360),null);
}
} else {
var map__25367 = cljs.core.first.call(null,s__25358__$2);
var map__25367__$1 = (((((!((map__25367 == null))))?(((((map__25367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25367):map__25367);
var title = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var date = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var publication_title = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"publication-title","publication-title",-43970247));
var link = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var excerpts = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"excerpts","excerpts",-347361737));
return cljs.core.cons.call(null,React.createElement("li",({"key": ["book_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),"\"",title,"\""], null):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(description)?description:null))," in ",(cljs.core.truth_(link)?React.createElement("a",({"href": link, "target": "_blank"}),sablono.interpreter.interpret.call(null,publication_title)):sablono.interpreter.interpret.call(null,publication_title)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(date)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date),")"].join(''):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(excerpts)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Some excerpts:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (map__25367,map__25367__$1,title,description,date,publication_title,link,excerpts,s__25358__$2,temp__5735__auto__,l){
return (function cbb$core$iter__25357_$_iter__25369(s__25370){
return (new cljs.core.LazySeq(null,((function (map__25367,map__25367__$1,title,description,date,publication_title,link,excerpts,s__25358__$2,temp__5735__auto__,l){
return (function (){
var s__25370__$1 = s__25370;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25370__$1);
if(temp__5735__auto____$1){
var s__25370__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25370__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25370__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25372 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25371 = (0);
while(true){
if((i__25371 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__25371);
cljs.core.chunk_append.call(null,b__25372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e)], null)], null));

var G__25375 = (i__25371 + (1));
i__25371 = G__25375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25372),cbb$core$iter__25357_$_iter__25369.call(null,cljs.core.chunk_rest.call(null,s__25370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25372),null);
}
} else {
var e = cljs.core.first.call(null,s__25370__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(e)], null)], null),cbb$core$iter__25357_$_iter__25369.call(null,cljs.core.rest.call(null,s__25370__$2)));
}
} else {
return null;
}
break;
}
});})(map__25367,map__25367__$1,title,description,date,publication_title,link,excerpts,s__25358__$2,temp__5735__auto__,l))
,null,null));
});})(map__25367,map__25367__$1,title,description,date,publication_title,link,excerpts,s__25358__$2,temp__5735__auto__,l))
;
return iter__4523__auto__.call(null,excerpts);
})()], null)], null):null))),cbb$core$iter__25357.call(null,cljs.core.rest.call(null,s__25358__$2)));
}
} else {
return null;
}
break;
}
});})(l))
,null,null));
});})(l))
;
return iter__4523__auto__.call(null,short_works);
})())));
}),null,"short-works");
cbb.core.show_quotes = rum.core.build_defc.call(null,(function (title,quotes,location){
return sablono.interpreter.interpret.call(null,((cljs.core.empty_QMARK_.call(null,quotes))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quotes","div.quotes",480244430),((cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"top","top",-1856271961)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Praise for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),title], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"More praise for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),title], null)], null)),(function (){var iter__4523__auto__ = (function cbb$core$iter__25378(s__25379){
return (new cljs.core.LazySeq(null,(function (){
var s__25379__$1 = s__25379;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25379__$1);
if(temp__5735__auto__){
var s__25379__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25379__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25379__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25381 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25380 = (0);
while(true){
if((i__25380 < size__4522__auto__)){
var map__25382 = cljs.core._nth.call(null,c__4521__auto__,i__25380);
var map__25382__$1 = (((((!((map__25382 == null))))?(((((map__25382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25382):map__25382);
var text = cljs.core.get.call(null,map__25382__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var link = cljs.core.get.call(null,map__25382__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
cljs.core.chunk_append.call(null,b__25381,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text","span.text",-1380952257),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null)], null)], null));

var G__25394 = (i__25380 + (1));
i__25380 = G__25394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25381),cbb$core$iter__25378.call(null,cljs.core.chunk_rest.call(null,s__25379__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25381),null);
}
} else {
var map__25384 = cljs.core.first.call(null,s__25379__$2);
var map__25384__$1 = (((((!((map__25384 == null))))?(((((map__25384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25384):map__25384);
var text = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var link = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text","span.text",-1380952257),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null)], null)], null),cbb$core$iter__25378.call(null,cljs.core.rest.call(null,s__25379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,((function (iter__4523__auto__){
return (function (p1__25376_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"indie","indie",-282399484),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__25376_SHARP_));
});})(iter__4523__auto__))
,quotes));
})(),(function (){var iter__4523__auto__ = (function cbb$core$iter__25386(s__25387){
return (new cljs.core.LazySeq(null,(function (){
var s__25387__$1 = s__25387;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25387__$1);
if(temp__5735__auto__){
var s__25387__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25387__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25387__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25389 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25388 = (0);
while(true){
if((i__25388 < size__4522__auto__)){
var map__25390 = cljs.core._nth.call(null,c__4521__auto__,i__25388);
var map__25390__$1 = (((((!((map__25390 == null))))?(((((map__25390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25390):map__25390);
var text = cljs.core.get.call(null,map__25390__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var type = cljs.core.get.call(null,map__25390__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var author = cljs.core.get.call(null,map__25390__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var business = cljs.core.get.call(null,map__25390__$1,new cljs.core.Keyword(null,"business","business",-965148967));
var link = cljs.core.get.call(null,map__25390__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var newbery_book = cljs.core.get.call(null,map__25390__$1,new cljs.core.Keyword(null,"newbery-book","newbery-book",-1471215670));
cljs.core.chunk_append.call(null,b__25389,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name.call(null,type)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text","span.text",-1380952257),text,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.author","span.author",-592013156)," ~ ",author,(cljs.core.truth_(newbery_book)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", Newbery Honor-winning author of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),newbery_book], null)], null):null),(cljs.core.truth_((function (){var and__4120__auto__ = author;
if(cljs.core.truth_(and__4120__auto__)){
return business;
} else {
return and__4120__auto__;
}
})())?" from ":null),(cljs.core.truth_(link)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),business,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?", Starred Review":null)], null):business)], null)], null));

var G__25395 = (i__25388 + (1));
i__25388 = G__25395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25389),cbb$core$iter__25386.call(null,cljs.core.chunk_rest.call(null,s__25387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25389),null);
}
} else {
var map__25392 = cljs.core.first.call(null,s__25387__$2);
var map__25392__$1 = (((((!((map__25392 == null))))?(((((map__25392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25392):map__25392);
var text = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var type = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var author = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var business = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"business","business",-965148967));
var link = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var newbery_book = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"newbery-book","newbery-book",-1471215670));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name.call(null,type)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text","span.text",-1380952257),text,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?" \u2605":null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.author","span.author",-592013156)," ~ ",author,(cljs.core.truth_(newbery_book)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", Newbery Honor-winning author of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),newbery_book], null)], null):null),(cljs.core.truth_((function (){var and__4120__auto__ = author;
if(cljs.core.truth_(and__4120__auto__)){
return business;
} else {
return and__4120__auto__;
}
})())?" from ":null),(cljs.core.truth_(link)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),business,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"star-review","star-review",-1311168568),type))?", Starred Review":null)], null):business)], null)], null),cbb$core$iter__25386.call(null,cljs.core.rest.call(null,s__25387__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,((function (iter__4523__auto__){
return (function (p1__25377_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"indie","indie",-282399484),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__25377_SHARP_));
});})(iter__4523__auto__))
,quotes));
})()], null)));
}),null,"show-quotes");
cbb.core.book = rum.core.build_defc.call(null,(function (p__25398){
var map__25399 = p__25398;
var map__25399__$1 = (((((!((map__25399 == null))))?(((((map__25399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25399):map__25399);
var book = map__25399__$1;
var title = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var description = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var notes = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var quotes = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"quotes","quotes",-844987790));
var indie = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"indie","indie",-282399484));
var pub_date = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword(null,"pub-date","pub-date",1331003779));
return React.createElement("div",null,React.createElement("div",({"className": "content"}),(function (){var attrs25403 = title;
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs25403))?sablono.interpreter.attributes.call(null,attrs25403):null),((cljs.core.map_QMARK_.call(null,attrs25403))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(cljs.core.truth_(subtitle)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),subtitle], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25403),sablono.interpreter.interpret.call(null,(cljs.core.truth_(subtitle)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),subtitle], null):null))], null)));
})(),React.createElement("div",({"className": "book-info"}),React.createElement("img",({"src": new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(book)), "className": "book-img"})),sablono.interpreter.interpret.call(null,cbb.affiliates.affiliate_link_list.call(null,book))),sablono.interpreter.interpret.call(null,cbb.core.show_quotes.call(null,title,cljs.core.filter.call(null,((function (map__25399,map__25399__$1,book,title,subtitle,description,notes,quotes,indie,pub_date){
return (function (p1__25396_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(p1__25396_SHARP_),new cljs.core.Keyword(null,"top","top",-1856271961));
});})(map__25399,map__25399__$1,book,title,subtitle,description,notes,quotes,indie,pub_date))
,quotes),new cljs.core.Keyword(null,"top","top",-1856271961))),cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = ((function (map__25399,map__25399__$1,book,title,subtitle,description,notes,quotes,indie,pub_date){
return (function cbb$core$iter__25404(s__25405){
return (new cljs.core.LazySeq(null,((function (map__25399,map__25399__$1,book,title,subtitle,description,notes,quotes,indie,pub_date){
return (function (){
var s__25405__$1 = s__25405;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25405__$1);
if(temp__5735__auto__){
var s__25405__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25405__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25405__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25407 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25406 = (0);
while(true){
if((i__25406 < size__4522__auto__)){
var d = cljs.core._nth.call(null,c__4521__auto__,i__25406);
cljs.core.chunk_append.call(null,b__25407,(function (){var key = clojure.string.replace.call(null,cljs.core.subs.call(null,d,(0),(15)),/\s/,"_");
return React.createElement("p",({"key": key}),sablono.interpreter.interpret.call(null,d));
})());

var G__25408 = (i__25406 + (1));
i__25406 = G__25408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25407),cbb$core$iter__25404.call(null,cljs.core.chunk_rest.call(null,s__25405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25407),null);
}
} else {
var d = cljs.core.first.call(null,s__25405__$2);
return cljs.core.cons.call(null,(function (){var key = clojure.string.replace.call(null,cljs.core.subs.call(null,d,(0),(15)),/\s/,"_");
return React.createElement("p",({"key": key}),sablono.interpreter.interpret.call(null,d));
})(),cbb$core$iter__25404.call(null,cljs.core.rest.call(null,s__25405__$2)));
}
} else {
return null;
}
break;
}
});})(map__25399,map__25399__$1,book,title,subtitle,description,notes,quotes,indie,pub_date))
,null,null));
});})(map__25399,map__25399__$1,book,title,subtitle,description,notes,quotes,indie,pub_date))
;
return iter__4523__auto__.call(null,description);
})()),sablono.interpreter.interpret.call(null,cbb.core.show_quotes.call(null,title,cljs.core.filter.call(null,((function (map__25399,map__25399__$1,book,title,subtitle,description,notes,quotes,indie,pub_date){
return (function (p1__25397_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(p1__25397_SHARP_),new cljs.core.Keyword(null,"top","top",-1856271961));
});})(map__25399,map__25399__$1,book,title,subtitle,description,notes,quotes,indie,pub_date))
,quotes),new cljs.core.Keyword(null,"bottom","bottom",-1550509018)))),React.createElement("div",({"className": "break"})),sablono.interpreter.interpret.call(null,notes));
}),null,"book");
cbb.core.books_list = rum.core.build_defc.call(null,(function (all_books){
var book_vec = cbb.core.sort_books_release.call(null,cljs.core.filter.call(null,(function (p1__25409_SHARP_){
return cbb.core.book_active.call(null,p1__25409_SHARP_);
}),cljs.core.map.call(null,cljs.core.second,all_books)));
return React.createElement("div",({"className": "content"}),React.createElement("div",null,cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = ((function (book_vec){
return (function cbb$core$iter__25410(s__25411){
return (new cljs.core.LazySeq(null,((function (book_vec){
return (function (){
var s__25411__$1 = s__25411;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25411__$1);
if(temp__5735__auto__){
var s__25411__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25411__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25411__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25413 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25412 = (0);
while(true){
if((i__25412 < size__4522__auto__)){
var map__25414 = cljs.core._nth.call(null,c__4521__auto__,i__25412);
var map__25414__$1 = (((((!((map__25414 == null))))?(((((map__25414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25414):map__25414);
var book = map__25414__$1;
var title = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"title","title",636505583));
var uri = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var summary = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var description = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var brag = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"brag","brag",-1289422732));
cljs.core.chunk_append.call(null,b__25413,React.createElement("div",({"className": "clear book-info-summary"}),React.createElement("div",({"className": "book-info"}),React.createElement("a",({"href": uri}),React.createElement("img",({"src": new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(book)), "className": "book-img"})))),React.createElement("a",({"href": uri}),(function (){var attrs25418 = title;
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs25418))?sablono.interpreter.attributes.call(null,attrs25418):null),((cljs.core.map_QMARK_.call(null,attrs25418))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25418)], null)));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(brag)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4523__auto__ = ((function (i__25412,map__25414,map__25414__$1,book,title,uri,summary,description,brag,c__4521__auto__,size__4522__auto__,b__25413,s__25411__$2,temp__5735__auto__,book_vec){
return (function cbb$core$iter__25410_$_iter__25419(s__25420){
return (new cljs.core.LazySeq(null,((function (i__25412,map__25414,map__25414__$1,book,title,uri,summary,description,brag,c__4521__auto__,size__4522__auto__,b__25413,s__25411__$2,temp__5735__auto__,book_vec){
return (function (){
var s__25420__$1 = s__25420;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25420__$1);
if(temp__5735__auto____$1){
var s__25420__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25420__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__25420__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__25422 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__25421 = (0);
while(true){
if((i__25421 < size__4522__auto____$1)){
var b = cljs.core._nth.call(null,c__4521__auto____$1,i__25421);
cljs.core.chunk_append.call(null,b__25422,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plain","h3.plain",-1457273885),b], null));

var G__25429 = (i__25421 + (1));
i__25421 = G__25429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25422),cbb$core$iter__25410_$_iter__25419.call(null,cljs.core.chunk_rest.call(null,s__25420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25422),null);
}
} else {
var b = cljs.core.first.call(null,s__25420__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plain","h3.plain",-1457273885),b], null),cbb$core$iter__25410_$_iter__25419.call(null,cljs.core.rest.call(null,s__25420__$2)));
}
} else {
return null;
}
break;
}
});})(i__25412,map__25414,map__25414__$1,book,title,uri,summary,description,brag,c__4521__auto__,size__4522__auto__,b__25413,s__25411__$2,temp__5735__auto__,book_vec))
,null,null));
});})(i__25412,map__25414,map__25414__$1,book,title,uri,summary,description,brag,c__4521__auto__,size__4522__auto__,b__25413,s__25411__$2,temp__5735__auto__,book_vec))
;
return iter__4523__auto__.call(null,brag);
})()], null):null)),(function (){var attrs25416 = summary;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25416))?sablono.interpreter.attributes.call(null,attrs25416):null),((cljs.core.map_QMARK_.call(null,attrs25416))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25416)], null)));
})(),(function (){var attrs25417 = cljs.core.first.call(null,description);
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25417))?sablono.interpreter.attributes.call(null,attrs25417):null),((cljs.core.map_QMARK_.call(null,attrs25417))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": uri}),"Click here for more info.")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25417)," ",React.createElement("a",({"href": uri}),"Click here for more info.")], null)));
})()));

var G__25430 = (i__25412 + (1));
i__25412 = G__25430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25413),cbb$core$iter__25410.call(null,cljs.core.chunk_rest.call(null,s__25411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25413),null);
}
} else {
var map__25423 = cljs.core.first.call(null,s__25411__$2);
var map__25423__$1 = (((((!((map__25423 == null))))?(((((map__25423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25423):map__25423);
var book = map__25423__$1;
var title = cljs.core.get.call(null,map__25423__$1,new cljs.core.Keyword(null,"title","title",636505583));
var uri = cljs.core.get.call(null,map__25423__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var summary = cljs.core.get.call(null,map__25423__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var description = cljs.core.get.call(null,map__25423__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var brag = cljs.core.get.call(null,map__25423__$1,new cljs.core.Keyword(null,"brag","brag",-1289422732));
return cljs.core.cons.call(null,React.createElement("div",({"className": "clear book-info-summary"}),React.createElement("div",({"className": "book-info"}),React.createElement("a",({"href": uri}),React.createElement("img",({"src": new cljs.core.Keyword(null,"front-cover","front-cover",2024994962).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(book)), "className": "book-img"})))),React.createElement("a",({"href": uri}),(function (){var attrs25418 = title;
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs25418))?sablono.interpreter.attributes.call(null,attrs25418):null),((cljs.core.map_QMARK_.call(null,attrs25418))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25418)], null)));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(brag)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4523__auto__ = ((function (map__25423,map__25423__$1,book,title,uri,summary,description,brag,s__25411__$2,temp__5735__auto__,book_vec){
return (function cbb$core$iter__25410_$_iter__25425(s__25426){
return (new cljs.core.LazySeq(null,((function (map__25423,map__25423__$1,book,title,uri,summary,description,brag,s__25411__$2,temp__5735__auto__,book_vec){
return (function (){
var s__25426__$1 = s__25426;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25426__$1);
if(temp__5735__auto____$1){
var s__25426__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25426__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25426__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25428 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25427 = (0);
while(true){
if((i__25427 < size__4522__auto__)){
var b = cljs.core._nth.call(null,c__4521__auto__,i__25427);
cljs.core.chunk_append.call(null,b__25428,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plain","h3.plain",-1457273885),b], null));

var G__25431 = (i__25427 + (1));
i__25427 = G__25431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25428),cbb$core$iter__25410_$_iter__25425.call(null,cljs.core.chunk_rest.call(null,s__25426__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25428),null);
}
} else {
var b = cljs.core.first.call(null,s__25426__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.plain","h3.plain",-1457273885),b], null),cbb$core$iter__25410_$_iter__25425.call(null,cljs.core.rest.call(null,s__25426__$2)));
}
} else {
return null;
}
break;
}
});})(map__25423,map__25423__$1,book,title,uri,summary,description,brag,s__25411__$2,temp__5735__auto__,book_vec))
,null,null));
});})(map__25423,map__25423__$1,book,title,uri,summary,description,brag,s__25411__$2,temp__5735__auto__,book_vec))
;
return iter__4523__auto__.call(null,brag);
})()], null):null)),(function (){var attrs25416 = summary;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25416))?sablono.interpreter.attributes.call(null,attrs25416):null),((cljs.core.map_QMARK_.call(null,attrs25416))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25416)], null)));
})(),(function (){var attrs25417 = cljs.core.first.call(null,description);
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs25417))?sablono.interpreter.attributes.call(null,attrs25417):null),((cljs.core.map_QMARK_.call(null,attrs25417))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": uri}),"Click here for more info.")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25417)," ",React.createElement("a",({"href": uri}),"Click here for more info.")], null)));
})()),cbb$core$iter__25410.call(null,cljs.core.rest.call(null,s__25411__$2)));
}
} else {
return null;
}
break;
}
});})(book_vec))
,null,null));
});})(book_vec))
;
return iter__4523__auto__.call(null,book_vec);
})())));
}),null,"books-list");
/**
 * Displays the book requested, or a list of books.
 */
cbb.core.books = rum.core.build_defc.call(null,(function (all_books,book_id){
var disp_book = (cljs.core.truth_(book_id)?cljs.core.keyword.call(null,book_id).call(null,all_books):null);
if(cljs.core.truth_((function (){var and__4120__auto__ = disp_book;
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(disp_book);
} else {
return and__4120__auto__;
}
})())){
return sablono.interpreter.interpret.call(null,cbb.core.book.call(null,disp_book));
} else {
return sablono.interpreter.interpret.call(null,cbb.core.books_list.call(null,all_books));
}
}),null,"books");
cbb.core.required = rum.core.build_defc.call(null,(function (){
return React.createElement("span",({"className": "asterisk"}),"*");
}),null,"required");
cbb.core.book_club = rum.core.build_defc.call(null,(function (){
var l = new cljs.core.Keyword(null,"book-club","book-club",-559617940);
return React.createElement("div",({"className": "content"}),React.createElement("h1",null,"Book Club"),React.createElement("p",null,"Are you a lover of middle grade literature? Together with a group of fellow authors (",React.createElement("a",({"href": "https://amandarawsonhill.com/", "target": "_blank"}),"Amanda Rawson Hill"),", ",React.createElement("a",({"href": "http://julieartz.com/", "target": "_blank"}),"Julie Artz"),", ",React.createElement("a",({"href": "https://lauriemorrisonwrites.com/", "target": "_blank"}),"Laurie Morrison"),", ",React.createElement("a",({"href": "http://www.lemonbiscuitcrumbs.com", "target": "_blank"}),"Ashley Martin"),", ",React.createElement("a",({"href": "https://remylai.com/index.html", "target": "_blank"}),"Remy Lai"),", ",React.createElement("a",({"href": "http://reeseeschmann.com", "target": "_blank"}),"Reese Eschenmann"),", and ",React.createElement("a",({"href": "http://www.karenschow.com/p/welcome_9.html", "target": "_blank"}),"Karen S Chow"),"), ","I run the Middle Grade at Heart Book Club, a monthly newsletter for middle grade readers\u2014geared especially towards teachers, parents, and kids aged 8-13, but hopefully also enjoyable for fellow MG-loving adults! Each issue will have discussion questions, an activity, a recipe, an exclusive author interview, and a printable coloring page."),React.createElement("p",null,"You can also follow us on ",React.createElement("a",({"href": "https://twitter.com/mgatheart", "target": "_blank"}),"Twitter")," and ",React.createElement("a",({"href": "https://www.instagram.com/mgatheart/", "target": "_blank"}),"Instagram"),"@mgatheart!"),React.createElement("p",null,"If you're an author and are interested in having your book considered for future MG @ Heart lists, you can get in touch with us via Twitter DM or ",React.createElement("a",({"href": "mailto:middlegradeatheart@gmail.com"}),"middlegradeatheart@gmail.com"),". When books don't make our book club list, we try to feature them as much as possible on our social media accounts and in the \"What We're Reading\" section of our newsletter."),React.createElement("p",null,"If you'd like to sign up, you can do so here:"),React.createElement("div",({"id": "mc_embed_signup"}),React.createElement("form",({"action": "//twitter.us16.list-manage.com/subscribe/post?u=c3a7dc0e98e068c9668e7be81&amp;id=83cabd50e1", "method": "post", "id": "mc-embedded-subscribe-form", "name": "mc-embedded-subscribe-form", "target": "_blank", "noValidate": null, "className": "validate"}),React.createElement("div",({"id": "mc_embed_signup_scroll"}),React.createElement("h2",null,"Join the monthly Middle Grade At Heart book club!"),(function (){var attrs25450 = cbb.core.required.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25450))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["indicates-required"], null)], null),attrs25450)):({"className": "indicates-required"})),((cljs.core.map_QMARK_.call(null,attrs25450))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" indicates required"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25450)," indicates required"], null)));
})(),React.createElement("div",({"className": "mc-field-group"}),React.createElement("label",({"htmlFor": "mce-EMAIL"}),"Email Address ",sablono.interpreter.interpret.call(null,cbb.core.required.call(null)),sablono.interpreter.create_element.call(null,"input",({"id": "mce-EMAIL", "type": "email", "name": "EMAIL"})))),React.createElement("div",({"className": "mc-field-group"}),React.createElement("label",({"htmlFor": "mce-FNAME"}),"First Name ",sablono.interpreter.create_element.call(null,"input",({"id": "mce-FNAME", "type": "text", "name": "FNAME"})))),React.createElement("div",({"className": "mc-field-group"}),React.createElement("label",({"htmlFor": "mce-LNAME"}),"Last Name ",sablono.interpreter.create_element.call(null,"input",({"id": "mce-LNAME", "type": "text", "name": "LNAME"})))),React.createElement("div",({"className": "mc-field-group input-group"}),React.createElement("strong",null,"Email Format"),React.createElement("ul",null,React.createElement("li",null,React.createElement("label",({"htmlFor": "mce-EMAILTYPE-0"}),sablono.interpreter.create_element.call(null,"input",({"id": "mce-EMAILTYPE-0", "type": "radio", "value": "html", "name": "EMAILTYPE"})),"html")),React.createElement("li",null,React.createElement("label",({"htmlFor": "mce-EMAILTYPE-1"}),sablono.interpreter.create_element.call(null,"input",({"id": "mce-EMAILTYPE-1", "type": "radio", "value": "text", "name": "EMAILTYPE"})),"text"))),React.createElement("div",({"id": "mce-responses", "className": "clear"}),React.createElement("div",({"id": "mce-error-response", "className": "response"})),React.createElement("div",({"id": "mce-success-response", "className": "response"})),React.createElement("div",({"style": ({"position": "absolute", "left": "-5000px"}), "aria-hidden": true}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "name": "b_c3a7dc0e98e068c9668e7be81_83cabd50e1", "tabIndex": (-1), "value": ""})))),React.createElement("div",({"className": "clear"}),React.createElement("span",({"className": "button-img"}),sablono.interpreter.create_element.call(null,"input",({"id": "mc-embedded-subscribe", "type": "submit", "value": "Subscribe", "name": "subscribe", "className": "button"})))))))),React.createElement("p",null,"If you'd like to see the archive of our past issues, you can find that ",React.createElement("a",({"href": "http://us16.campaign-archive1.com/home/?u=c3a7dc0e98e068c9668e7be81&id=83cabd50e1"}),"here.")),React.createElement("div",({"className": "padding-bottom"})));
}),null,"book-club");
cbb.core.class_resources = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"className": "content"}),React.createElement("h1",null,"Classroom Resources"),React.createElement("p",null,"I love connecting with educators and students! If you're interested in sharing Where the Watermelons Grow with your students, here are some resources just for you."),React.createElement("h2",null,"Book Trailer"),React.createElement("div",({"className": "videoWrapper"}),React.createElement("iframe",({"src": "https://www.youtube.com/embed/gIEPY__fkiI?rel=0", "frameborder": "0", "allow": "autoplay; encrypted-media", "allowfullscreen": true}))),React.createElement("h2",null,"MG @ Heart Teaching Guide"),React.createElement("img",({"src": "images/middle-grade-at-heart.png", "className": "mg-at-heart"})),React.createElement("p",null,"Where the Watermelons Grow was the featured book for our August 2018 edition of the ",React.createElement("a",({"href": "http://cindybaldwinbooks.com/#book-club"}),"Middle Grade at Heart Newsletter!")," You can download ",React.createElement("a",({"href": "resources/watermelonsGrowTeachingGuide.pdf", "target": "_blank"}),"a PDF of the issue.")," This discussion guide, designed with classrooms in mind, features an exclusive interview, discussion questions, a recipe for honey-sweetened watermelon limeade, an activity, and a printable coloring page."),React.createElement("h2",null,"HarperCollins Teaching Guide"),React.createElement("p",null,"You can find a downloadable PDF of the ",React.createElement("a",({"href": "https://b0f646cfbd7462424f7a-f9758a43fb7c33cc8adda0fd36101899.ssl.cf2.rackcdn.com/teaching-guides/TG-9780062665867.pdf", "target": "_blank"}),"educator's guide that HarperCollins created")," for ",React.createElement("i",null,"Where the Watermelons Grow.")),React.createElement("h2",null,"Free Q&A Skype Visits (30 minutes or less)"),React.createElement("p",null,"Starting in mid-September 2018, I'll be offering free Q&A Skype visits for classrooms who have read ",React.createElement("i",null,"Where the Watermelons Grow")," as a read-aloud or classroom read! Please have your students prepare questions in advance. If desired, I can also send a classroom set of signed bookmarks for your students!"),React.createElement("p",null,"I offer free Q&A Skype visits for classrooms and book clubs! Please have your students prepare questions in advance. If desired, I can also send a classroom set of signed bookmarks for your students!",React.createElement("i",null,"Where the Watermelons Grow"),"."),React.createElement("p",null,"To schedule a free Skype visit, contact me at ",React.createElement("a",({"href": "mailto:cindybaldwinbooks@gmail.com", "target": "_blank"}),"cindybaldwinbooks@gmail.com"),"."),React.createElement("h2",null,"In-Person Classroom Visits and Assemblies"),React.createElement("p",null,"Starting in mid-September 2018, I'll be offering paid in-person classroom visits and assemblies for local schools. Please contact me at ",React.createElement("a",({"href": "mailto:cindybaldwinbooks@gmail.com", "target": "_blank"}),"cindybaldwinbooks@gmail.com")," for fees and further information."),React.createElement("div",({"className": "padding-bottom"})));
}),null,"class-resources");
cbb.core.social = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"className": "social"}),React.createElement("a",({"href": "https://www.goodreads.com/author/show/16027248.Cindy_Baldwin", "target": "_blank"}),React.createElement("img",({"src": "images/goodreads-small.png"}))),React.createElement("a",({"href": "mailto:cindybaldwinbooks@gmail.com", "target": "_blank"}),React.createElement("img",({"src": "images/email-xsmall.png"}))),React.createElement("a",({"href": "https://www.instagram.com/cindybaldwinbooks/", "target": "_blank"}),React.createElement("img",({"src": "images/instagram-small.png"}))),React.createElement("a",({"href": "https://twitter.com/beingcindy", "target": "_blank"}),React.createElement("img",({"src": "images/twitter-small.png"}))),React.createElement("a",({"href": "https://www.facebook.com/cindybaldwinbooks/", "target": "_blank"}),React.createElement("img",({"src": "images/facebook-small.png"}))));
}),null,"social");
cbb.core.root = rum.core.build_defc.call(null,(function (){
var l = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,cbb.core.location));
var book_id = new cljs.core.Keyword(null,"book-id","book-id",279994624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,cbb.core.location)));
var all_books = new cljs.core.Keyword(null,"all-books","all-books",-1267748350).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,cbb.core.state));
var all_short_works = new cljs.core.Keyword(null,"short-works","short-works",-1268334948).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-short-works","all-short-works",-824786402).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,cbb.core.state)));
var all_events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-events","all-events",-835645557).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,cbb.core.state)));
var attrs25463 = ((cljs.core.not_EQ_.call(null,l,new cljs.core.Keyword(null,"home","home",-74557309)))?cbb.core.header.call(null,l):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25463))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application"], null)], null),attrs25463)):({"className": "application"})),((cljs.core.map_QMARK_.call(null,attrs25463))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,l,new cljs.core.Keyword(null,"home","home",-74557309)))?cbb.core.nav_links.call(null,l):null)),sablono.interpreter.interpret.call(null,(function (){var G__25464 = l;
var G__25464__$1 = (((G__25464 instanceof cljs.core.Keyword))?G__25464.fqn:null);
switch (G__25464__$1) {
case "home":
return cbb.core.home.call(null);

break;
case "about":
return cbb.core.about.call(null);

break;
case "press-kit":
return cbb.core.press_kit.call(null,all_books);

break;
case "events":
return cbb.core.loading.call(null,all_events,cbb.core.events.call(null,all_events));

break;
case "short-works":
return cbb.core.loading.call(null,all_events,cbb.core.short_works.call(null,all_short_works));

break;
case "books":
return cbb.core.loading.call(null,all_events,cbb.core.books.call(null,all_books,book_id));

break;
case "book-club":
return cbb.core.book_club.call(null);

break;
case "class-resources":
return cbb.core.class_resources.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25464__$1)].join('')));

}
})()),sablono.interpreter.interpret.call(null,cbb.core.social.call(null))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25463),sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,l,new cljs.core.Keyword(null,"home","home",-74557309)))?cbb.core.nav_links.call(null,l):null)),sablono.interpreter.interpret.call(null,(function (){var G__25465 = l;
var G__25465__$1 = (((G__25465 instanceof cljs.core.Keyword))?G__25465.fqn:null);
switch (G__25465__$1) {
case "home":
return cbb.core.home.call(null);

break;
case "about":
return cbb.core.about.call(null);

break;
case "press-kit":
return cbb.core.press_kit.call(null,all_books);

break;
case "events":
return cbb.core.loading.call(null,all_events,cbb.core.events.call(null,all_events));

break;
case "short-works":
return cbb.core.loading.call(null,all_events,cbb.core.short_works.call(null,all_short_works));

break;
case "books":
return cbb.core.loading.call(null,all_events,cbb.core.books.call(null,all_books,book_id));

break;
case "book-club":
return cbb.core.book_club.call(null);

break;
case "class-resources":
return cbb.core.class_resources.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25465__$1)].join('')));

}
})()),sablono.interpreter.interpret.call(null,cbb.core.social.call(null))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"root");
cbb.core.mount = (function cbb$core$mount(){
rum.core.mount.call(null,cbb.core.root.call(null),document.getElementById("app"));

return rum.core.mount.call(null,cbb.core.root.call(null),document.getElementById("app"));
});
cbb.core.mount.call(null);

//# sourceMappingURL=core.js.map?rel=1560468646964
