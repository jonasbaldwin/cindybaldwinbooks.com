// Compiled by ClojureScript 1.10.520 {}
goog.provide('cbb.affiliates');
goog.require('cljs.core');
goog.require('rum.core');
cbb.affiliates.goodreads_link = rum.core.build_defc.call(null,(function (book){
return React.createElement("div",({"id": "gr_add_to_books", "className": "ng-scope goodreads-btn"}),React.createElement("div",({"className": "gr_custom_each_container_"}),React.createElement("a",({"target": "_blank", "href": ["https://www.goodreads.com/book/show/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"product-id","product-id",1556861660).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("cbb.affiliates","goodreads","cbb.affiliates/goodreads",526236966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(book))))].join('')}),React.createElement("img",({"alt": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(book)), "src": "https://www.goodreads.com/images/atmb_add_book-70x25.png"})))));
}),null,"goodreads-link");
cbb.affiliates.affiliates = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cbb.affiliates","amazon","cbb.affiliates/amazon",593802136),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","amazon","cbb.affiliates/amazon",593802136),new cljs.core.Keyword(null,"display","display",242065432),"buy from Amazon",new cljs.core.Keyword(null,"affiliate-code","affiliate-code",2078600032),"cbb-mb-20",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__25233_SHARP_,p2__25232_SHARP_){
return ["https://www.amazon.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25232_SHARP_),"/?tag=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25233_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","goodreads","cbb.affiliates/goodreads",526236966),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","goodreads","cbb.affiliates/goodreads",526236966),new cljs.core.Keyword(null,"display-fn","display-fn",1333857036),cbb.affiliates.goodreads_link,new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (code,product){
return ["https://www.goodreads.com/book/show/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(product)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","ban","cbb.affiliates/ban",1031370922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","ban","cbb.affiliates/ban",1031370922),new cljs.core.Keyword(null,"display","display",242065432),"buy from Barnes & Noble",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__25235_SHARP_,p2__25234_SHARP_){
return ["",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25234_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","harper","cbb.affiliates/harper",570260636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","harper","cbb.affiliates/harper",570260636),new cljs.core.Keyword(null,"display","display",242065432),"buy from Harper Collins",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__25237_SHARP_,p2__25236_SHARP_){
return ["https://www.harpercollins.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25236_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","indi","cbb.affiliates/indi",289437571),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","indi","cbb.affiliates/indi",289437571),new cljs.core.Keyword(null,"display","display",242065432),"buy from IndieBound",new cljs.core.Keyword(null,"affiliate-code","affiliate-code",2078600032),"cbb",new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__25239_SHARP_,p2__25238_SHARP_){
return ["https://www.indiebound.org/book/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25238_SHARP_),"?aff=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25239_SHARP_)].join('');
})], null),new cljs.core.Keyword("cbb.affiliates","annie","cbb.affiliates/annie",1177791312),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cbb.affiliates","annie","cbb.affiliates/annie",1177791312),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"buy signed copies from",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u00A0\u00A0\u00A0\u00A0Annie Bloom's Books ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-note","span.link-note",-2087213156),"\u2731"], null)], null),new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848),(function (p1__25241_SHARP_,p2__25240_SHARP_){
return [" https://www.annieblooms.com/book/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25240_SHARP_)].join('');
})], null)], null);
cbb.affiliates.affiliate_link = (function cbb$affiliates$affiliate_link(affiliate,book){
var link_fn = new cljs.core.Keyword(null,"affiliate-link","affiliate-link",1378444848).cljs$core$IFn$_invoke$arity$1(affiliate.call(null,cbb.affiliates.affiliates));
if(cljs.core.truth_((function (){var and__4120__auto__ = link_fn;
if(cljs.core.truth_(and__4120__auto__)){
return book;
} else {
return and__4120__auto__;
}
})())){
return link_fn.call(null,new cljs.core.Keyword(null,"affiliate-code","affiliate-code",2078600032).cljs$core$IFn$_invoke$arity$1(affiliate.call(null,cbb.affiliates.affiliates)),cljs.core.get_in.call(null,book,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(affiliate.call(null,cbb.affiliates.affiliates)),new cljs.core.Keyword(null,"product-id","product-id",1556861660)], null)));
} else {
return null;
}
});
cbb.affiliates.display_link = rum.core.build_defc.call(null,(function (book,affiliate,display){
return React.createElement("div",null,React.createElement("a",({"href": cbb.affiliates.affiliate_link.call(null,affiliate,book), "target": "_blank"}),sablono.interpreter.interpret.call(null,display)));
}),null,"display-link");
cbb.affiliates.affiliate_link_list = rum.core.build_defc.call(null,(function (book){
console.error(book);

return React.createElement("div",null,cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = (function cbb$affiliates$iter__25242(s__25243){
return (new cljs.core.LazySeq(null,(function (){
var s__25243__$1 = s__25243;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25243__$1);
if(temp__5735__auto__){
var s__25243__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25243__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25243__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25245 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25244 = (0);
while(true){
if((i__25244 < size__4522__auto__)){
var a = cljs.core._nth.call(null,c__4521__auto__,i__25244);
cljs.core.chunk_append.call(null,b__25245,sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.get_in.call(null,book,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),a], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["link-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')], null),(function (){var map__25246 = a.call(null,cbb.affiliates.affiliates);
var map__25246__$1 = (((((!((map__25246 == null))))?(((((map__25246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25246):map__25246);
var display = cljs.core.get.call(null,map__25246__$1,new cljs.core.Keyword(null,"display","display",242065432));
var display_fn = cljs.core.get.call(null,map__25246__$1,new cljs.core.Keyword(null,"display-fn","display-fn",1333857036));
if(cljs.core.truth_(display_fn)){
return display_fn.call(null,book);
} else {
return cbb.affiliates.display_link.call(null,book,a,display);
}
})()], null):null)));

var G__25250 = (i__25244 + (1));
i__25244 = G__25250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25245),cbb$affiliates$iter__25242.call(null,cljs.core.chunk_rest.call(null,s__25243__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25245),null);
}
} else {
var a = cljs.core.first.call(null,s__25243__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.get_in.call(null,book,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),a], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["link-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')], null),(function (){var map__25248 = a.call(null,cbb.affiliates.affiliates);
var map__25248__$1 = (((((!((map__25248 == null))))?(((((map__25248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25248):map__25248);
var display = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"display","display",242065432));
var display_fn = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"display-fn","display-fn",1333857036));
if(cljs.core.truth_(display_fn)){
return display_fn.call(null,book);
} else {
return cbb.affiliates.display_link.call(null,book,a,display);
}
})()], null):null)),cbb$affiliates$iter__25242.call(null,cljs.core.rest.call(null,s__25243__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cbb.affiliates","goodreads","cbb.affiliates/goodreads",526236966),new cljs.core.Keyword("cbb.affiliates","annie","cbb.affiliates/annie",1177791312),new cljs.core.Keyword("cbb.affiliates","indi","cbb.affiliates/indi",289437571),new cljs.core.Keyword("cbb.affiliates","amazon","cbb.affiliates/amazon",593802136),new cljs.core.Keyword("cbb.affiliates","ban","cbb.affiliates/ban",1031370922),new cljs.core.Keyword("cbb.affiliates","harper","cbb.affiliates/harper",570260636)], null));
})()));
}),null,"affiliate-link-list");

//# sourceMappingURL=affiliates.js.map?rel=1560468646685
