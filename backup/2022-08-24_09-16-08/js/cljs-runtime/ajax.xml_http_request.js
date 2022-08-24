goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__53711 = e.target.readyState;
var fexpr__53710 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__53710.cljs$core$IFn$_invoke$arity$1 ? fexpr__53710.cljs$core$IFn$_invoke$arity$1(G__53711) : fexpr__53710.call(null,G__53711));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__53721,handler){
var map__53722 = p__53721;
var map__53722__$1 = cljs.core.__destructure_map(map__53722);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53722__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53722__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53722__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53722__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53722__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53722__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53722__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__53719_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__53719_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___53750 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___53750)){
var response_type_53751 = temp__5753__auto___53750;
(this$__$1.responseType = cljs.core.name(response_type_53751));
} else {
}

var seq__53723_53752 = cljs.core.seq(headers);
var chunk__53724_53753 = null;
var count__53725_53754 = (0);
var i__53726_53755 = (0);
while(true){
if((i__53726_53755 < count__53725_53754)){
var vec__53733_53756 = chunk__53724_53753.cljs$core$IIndexed$_nth$arity$2(null,i__53726_53755);
var k_53757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53733_53756,(0),null);
var v_53758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53733_53756,(1),null);
this$__$1.setRequestHeader(k_53757,v_53758);


var G__53759 = seq__53723_53752;
var G__53760 = chunk__53724_53753;
var G__53761 = count__53725_53754;
var G__53762 = (i__53726_53755 + (1));
seq__53723_53752 = G__53759;
chunk__53724_53753 = G__53760;
count__53725_53754 = G__53761;
i__53726_53755 = G__53762;
continue;
} else {
var temp__5753__auto___53763 = cljs.core.seq(seq__53723_53752);
if(temp__5753__auto___53763){
var seq__53723_53764__$1 = temp__5753__auto___53763;
if(cljs.core.chunked_seq_QMARK_(seq__53723_53764__$1)){
var c__4679__auto___53765 = cljs.core.chunk_first(seq__53723_53764__$1);
var G__53766 = cljs.core.chunk_rest(seq__53723_53764__$1);
var G__53767 = c__4679__auto___53765;
var G__53768 = cljs.core.count(c__4679__auto___53765);
var G__53769 = (0);
seq__53723_53752 = G__53766;
chunk__53724_53753 = G__53767;
count__53725_53754 = G__53768;
i__53726_53755 = G__53769;
continue;
} else {
var vec__53736_53770 = cljs.core.first(seq__53723_53764__$1);
var k_53771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53736_53770,(0),null);
var v_53772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53736_53770,(1),null);
this$__$1.setRequestHeader(k_53771,v_53772);


var G__53774 = cljs.core.next(seq__53723_53764__$1);
var G__53775 = null;
var G__53776 = (0);
var G__53777 = (0);
seq__53723_53752 = G__53774;
chunk__53724_53753 = G__53775;
count__53725_53754 = G__53776;
i__53726_53755 = G__53777;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4253__auto__ = body;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
