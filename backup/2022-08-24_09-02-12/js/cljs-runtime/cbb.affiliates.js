goog.provide('cbb.affiliates');
cbb.affiliates.goodreads_link = rum.core.lazy_build(rum.core.build_defc,(function (book){
return daiquiri.core.create_element("div",{'id':"gr_add_to_books",'className':"ng-scope goodreads-btn"},[daiquiri.core.create_element("div",{'className':"gr_custom_each_container_"},[daiquiri.core.create_element("a",{'target':"_blank",'href':["https://www.goodreads.com/book/show/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"product-id","product-id",1556861660).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("cbb.affiliates","goodreads","cbb.affiliates/goodreads",526236966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(book))))].join('')},[daiquiri.core.create_element("img",{'alt':new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(book)),'src':"https://www.goodreads.com/images/atmb_add_book-70x25.png"},[])])])]);
}),null,"cbb.affiliates/goodreads-link");
cbb.affiliates.affiliates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cbb.affiliates","amazon","cbb.affiliates/amazon",593802136),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","amazon","cbb.affiliates/amazon",593802136),new cljs.core.Keyword(null,"display","display",242065432),"buy from Amazon",new cljs.core.Keyword(null,"affiliate-code","affiliate-code",2078600032),"cbb-mb-20",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__73826_SHARP_,p2__73825_SHARP_){
return ["https://www.amazon.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73825_SHARP_),"/?tag=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73826_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","goodreads","cbb.affiliates/goodreads",526236966),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","goodreads","cbb.affiliates/goodreads",526236966),new cljs.core.Keyword(null,"display-fn","display-fn",1333857036),cbb.affiliates.goodreads_link,new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (code,product){
return ["https://www.goodreads.com/book/show/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(product)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","ban","cbb.affiliates/ban",1031370922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","ban","cbb.affiliates/ban",1031370922),new cljs.core.Keyword(null,"display","display",242065432),"buy from Barnes & Noble",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__73828_SHARP_,p2__73827_SHARP_){
return ["",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73827_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","harper","cbb.affiliates/harper",570260636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","harper","cbb.affiliates/harper",570260636),new cljs.core.Keyword(null,"display","display",242065432),"buy from Harper Collins",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__73830_SHARP_,p2__73829_SHARP_){
return ["https://www.harpercollins.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73829_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","indi","cbb.affiliates/indi",289437571),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","indi","cbb.affiliates/indi",289437571),new cljs.core.Keyword(null,"display","display",242065432),"buy from IndieBound",new cljs.core.Keyword(null,"affiliate-code","affiliate-code",2078600032),"cbb",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__73832_SHARP_,p2__73831_SHARP_){
return ["https://www.indiebound.org/book/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73831_SHARP_),"?aff=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73832_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","bookshop-org","cbb.affiliates/bookshop-org",-720132254),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","bookshop-org","cbb.affiliates/bookshop-org",-720132254),new cljs.core.Keyword(null,"display","display",242065432),"by from Bookshop.org",new cljs.core.Keyword(null,"affiliate-code","affiliate-code",2078600032),"19741",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__73833_SHARP_,p2__73834_SHARP_){
return ["https://bookshop.org/a/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73833_SHARP_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73834_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","annie","cbb.affiliates/annie",1177791312),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","annie","cbb.affiliates/annie",1177791312),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"buy signed copies from",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u00A0\u00A0\u00A0\u00A0Annie Bloom's Books ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-note","span.link-note",-2087213156),"\u2731"], null)], null),new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__73836_SHARP_,p2__73835_SHARP_){
return [" https://www.annieblooms.com/book/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73835_SHARP_)].join('');
})], null)], null);
cbb.affiliates.affiliate_link = (function cbb$affiliates$affiliate_link(affiliate,book){
var link_fn = new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848).cljs$core$IFn$_invoke$arity$1((affiliate.cljs$core$IFn$_invoke$arity$1 ? affiliate.cljs$core$IFn$_invoke$arity$1(cbb.affiliates.affiliates) : affiliate.call(null,cbb.affiliates.affiliates)));
if(cljs.core.truth_((function (){var and__4251__auto__ = link_fn;
if(cljs.core.truth_(and__4251__auto__)){
return book;
} else {
return and__4251__auto__;
}
})())){
var G__73837 = new cljs.core.Keyword(null,"affiliate-code","affiliate-code",2078600032).cljs$core$IFn$_invoke$arity$1((affiliate.cljs$core$IFn$_invoke$arity$1 ? affiliate.cljs$core$IFn$_invoke$arity$1(cbb.affiliates.affiliates) : affiliate.call(null,cbb.affiliates.affiliates)));
var G__73838 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(book,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((affiliate.cljs$core$IFn$_invoke$arity$1 ? affiliate.cljs$core$IFn$_invoke$arity$1(cbb.affiliates.affiliates) : affiliate.call(null,cbb.affiliates.affiliates))),new cljs.core.Keyword(null,"product-id","product-id",1556861660)], null));
return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(G__73837,G__73838) : link_fn.call(null,G__73837,G__73838));
} else {
return null;
}
});
cbb.affiliates.display_link = rum.core.lazy_build(rum.core.build_defc,(function (book,affiliate,display){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("a",{'href':cbb.affiliates.affiliate_link(affiliate,book),'target':"_blank"},[daiquiri.interpreter.interpret(display)])]);
}),null,"cbb.affiliates/display-link");
cbb.affiliates.affiliate_link_list = rum.core.lazy_build(rum.core.build_defc,(function (book){
console.error(book);

return daiquiri.core.create_element("div",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function cbb$affiliates$iter__73839(s__73840){
return (new cljs.core.LazySeq(null,(function (){
var s__73840__$1 = s__73840;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__73840__$1);
if(temp__5753__auto__){
var s__73840__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73840__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__73840__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__73842 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__73841 = (0);
while(true){
if((i__73841 < size__4651__auto__)){
var a = cljs.core._nth(c__4650__auto__,i__73841);
cljs.core.chunk_append(b__73842,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(book,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),a], null)))?daiquiri.core.create_element("div",{'key':["link-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')},[(function (){var map__73843 = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(cbb.affiliates.affiliates) : a.call(null,cbb.affiliates.affiliates));
var map__73843__$1 = cljs.core.__destructure_map(map__73843);
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73843__$1,new cljs.core.Keyword(null,"display","display",242065432));
var display_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73843__$1,new cljs.core.Keyword(null,"display-fn","display-fn",1333857036));
if(cljs.core.truth_(display_fn)){
return daiquiri.interpreter.interpret((display_fn.cljs$core$IFn$_invoke$arity$1 ? display_fn.cljs$core$IFn$_invoke$arity$1(book) : display_fn.call(null,book)));
} else {
return cbb.affiliates.display_link(book,a,display);
}
})()]):null));

var G__73845 = (i__73841 + (1));
i__73841 = G__73845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73842),cbb$affiliates$iter__73839(cljs.core.chunk_rest(s__73840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73842),null);
}
} else {
var a = cljs.core.first(s__73840__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(book,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),a], null)))?daiquiri.core.create_element("div",{'key':["link-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')},[(function (){var map__73844 = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(cbb.affiliates.affiliates) : a.call(null,cbb.affiliates.affiliates));
var map__73844__$1 = cljs.core.__destructure_map(map__73844);
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73844__$1,new cljs.core.Keyword(null,"display","display",242065432));
var display_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73844__$1,new cljs.core.Keyword(null,"display-fn","display-fn",1333857036));
if(cljs.core.truth_(display_fn)){
return daiquiri.interpreter.interpret((display_fn.cljs$core$IFn$_invoke$arity$1 ? display_fn.cljs$core$IFn$_invoke$arity$1(book) : display_fn.call(null,book)));
} else {
return cbb.affiliates.display_link(book,a,display);
}
})()]):null),cbb$affiliates$iter__73839(cljs.core.rest(s__73840__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cbb.affiliates","goodreads","cbb.affiliates/goodreads",526236966),new cljs.core.Keyword("cbb.affiliates","annie","cbb.affiliates/annie",1177791312),new cljs.core.Keyword("cbb.affiliates","bookshop-org","cbb.affiliates/bookshop-org",-720132254),new cljs.core.Keyword("cbb.affiliates","indi","cbb.affiliates/indi",289437571),new cljs.core.Keyword("cbb.affiliates","amazon","cbb.affiliates/amazon",593802136),new cljs.core.Keyword("cbb.affiliates","ban","cbb.affiliates/ban",1031370922),new cljs.core.Keyword("cbb.affiliates","harper","cbb.affiliates/harper",570260636)], null));
})())]);
}),null,"cbb.affiliates/affiliate-link-list");

//# sourceMappingURL=cbb.affiliates.js.map
