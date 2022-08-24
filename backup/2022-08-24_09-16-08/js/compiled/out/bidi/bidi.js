// Compiled by ClojureScript 1.10.520 {}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__21746 = string;
var G__21746__$1 = (((G__21746 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21746));
var G__21746__$2 = (((G__21746__$1 == null))?null:encodeURIComponent(G__21746__$1));
if((G__21746__$2 == null)){
return null;
} else {
return G__21746__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__21747 = string;
var G__21747__$1 = (((G__21747 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21747));
if((G__21747__$1 == null)){
return null;
} else {
return decodeURIComponent(G__21747__$1);
}
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return cljs.core.uuid.call(null,s);
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (bidi.bidi.encode_parameter["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ParameterEncoding.encode-parameter",_);
}
}
}
});

goog.object.set(bidi.bidi.ParameterEncoding,"string",true);

goog.object.set(bidi.bidi.encode_parameter,"string",(function (s){
return s;
}));

goog.object.set(bidi.bidi.ParameterEncoding,"number",true);

goog.object.set(bidi.bidi.encode_parameter,"number",(function (s){
return s;
}));

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode.call(null,[cljs.core.namespace.call(null,k__$1),(cljs.core.truth_(cljs.core.namespace.call(null,k__$1))?"/":null),cljs.core.name.call(null,k__$1)].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (bidi.bidi.segment_regex_group["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.param_key[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (bidi.bidi.param_key["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (bidi.bidi.transform_param["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,params);
} else {
var m__4431__auto__ = (bidi.bidi.unmatch_segment["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,params);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,s);
} else {
var m__4431__auto__ = (bidi.bidi.matches_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.matches?",_);
}
}
}
});

goog.object.set(bidi.bidi.PatternSegment,"string",true);

goog.object.set(bidi.bidi.segment_regex_group,"string",(function (this$){
return this$;
}));

goog.object.set(bidi.bidi.param_key,"string",(function (_){
return null;
}));

goog.object.set(bidi.bidi.transform_param,"string",(function (_){
return cljs.core.identity;
}));

goog.object.set(bidi.bidi.unmatch_segment,"string",(function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches.call(null,this$__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.call(null,["If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if((!((k instanceof cljs.core.Keyword)))){
throw cljs.core.ex_info.call(null,["If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__5733__auto__ = cljs.core.get.call(null,params,k);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_.call(null,cljs.core.first.call(null,this$__$1),v))){
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,["Parameter value of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," (key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),") ","is not compatible with the route pattern ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.call(null,["No parameter found in params for key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__5733__auto__ = this$__$1.call(null,params);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,["Cannot form URI without a value given for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," parameter"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

goog.object.set(bidi.bidi.PatternSegment,"function",true);

goog.object.set(bidi.bidi.segment_regex_group,"function",(function (this$){
var pred__21751 = cljs.core._EQ_;
var expr__21752 = this$;
if(cljs.core.truth_(pred__21751.call(null,cljs.core.keyword,expr__21752))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_(pred__21751.call(null,cljs.core.long$,expr__21752))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_(pred__21751.call(null,bidi.bidi.uuid,expr__21752))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_(pred__21751.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__21752))){
throw cljs.core.ex_info.call(null,["Unidentified function qualifier to pattern segment: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21752)].join('')));
}
}
}
}
}));

goog.object.set(bidi.bidi.transform_param,"function",(function (this$){
var pred__21754 = cljs.core._EQ_;
var expr__21755 = this$;
if(cljs.core.truth_(pred__21754.call(null,cljs.core.keyword,expr__21755))){
return cljs.core.comp.call(null,cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_(pred__21754.call(null,cljs.core.long$,expr__21755))){
return ((function (pred__21754,expr__21755){
return (function (p1__21749_SHARP_){
return Number(p1__21749_SHARP_);
});
;})(pred__21754,expr__21755))
} else {
if(cljs.core.truth_(pred__21754.call(null,bidi.bidi.uuid,expr__21755))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.call(null,["Unrecognized function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));

goog.object.set(bidi.bidi.matches_QMARK_,"function",(function (this$,s){
var pred__21757 = cljs.core._EQ_;
var expr__21758 = this$;
if(cljs.core.truth_(pred__21757.call(null,cljs.core.keyword,expr__21758))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_(pred__21757.call(null,cljs.core.long$,expr__21758))){
return cljs.core.not.call(null,isNaN(s));
} else {
if(cljs.core.truth_(pred__21757.call(null,bidi.bidi.uuid,expr__21758))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21758)].join('')));
}
}
}
}));

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

/**
 * Return a new state if this pattern matches the given state, or
 *  falsy otherwise. If a new state is returned it will usually have the
 *  rest of the path to match in the :remainder entry.
 */
bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,env){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,env);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,env);
} else {
var m__4431__auto__ = (bidi.bidi.match_pattern["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,env);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,m);
} else {
var m__4431__auto__ = (bidi.bidi.unmatch_pattern["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,m);
} else {
var m__4431__auto__ = (bidi.bidi.resolve_handler["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,m);
} else {
var m__4431__auto__ = (bidi.bidi.unresolve_handler["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.unresolve-handler",_);
}
}
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
var uri_string = ["http://bidi.bidi/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return cljs.core.subs.call(null,(new goog.Uri(uri_string)).getPath(),(1));
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__21760,orig_env){
var vec__21761 = p__21760;
var pattern = cljs.core.nth.call(null,vec__21761,(0),null);
var matched = cljs.core.nth.call(null,vec__21761,(1),null);
var env = cljs.core.update.call(null,orig_env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),bidi.bidi.just_path);
var temp__5735__auto__ = bidi.bidi.match_pattern.call(null,pattern,env);
if(cljs.core.truth_(temp__5735__auto__)){
var match_result = temp__5735__auto__;
return bidi.bidi.resolve_handler.call(null,matched,match_result);
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__5735__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern),"(.*)"].join('')),new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__5735__auto__)){
var path = temp__5735__auto__;
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"remainder","remainder",1046186872)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
} else {
return null;
}
});
cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__5735__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.call(null,bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.call(null,((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.call(null,cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3),"(.*)"].join('');
var _PERCENT___$5 = cljs.core.re_pattern.call(null,_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches.call(null,_PERCENT___$5,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next.call(null,_PERCENT___$6);
})();
if(temp__5735__auto__){
var groups = temp__5735__auto__;
var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,bidi.bidi.param_key,this$__$1),cljs.core.map.call(null,cljs.core.apply,cljs.core.map.call(null,bidi.bidi.transform_param,this$__$1),cljs.core.map.call(null,cljs.core.list,cljs.core.butlast.call(null,groups))))));
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remainder","remainder",1046186872)], null),cljs.core.last.call(null,groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__21764_SHARP_){
return bidi.bidi.unmatch_segment.call(null,p1__21764_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

RegExp.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$__$1)),")"].join(''),env);
});

RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern.call(null,clojure.string.replace.call(null,p,/\\\\/,""),m);
});

goog.object.set(bidi.bidi.Pattern,"boolean",true);

goog.object.set(bidi.bidi.match_pattern,"boolean",(function (this$,env){
if(this$){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),"");
} else {
return null;
}
}));

goog.object.set(bidi.bidi.unmatch_pattern,"boolean",(function (this$,_){
if(this$){
return "";
} else {
return null;
}
}));

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21765_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__21765_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,this$__$1),s);
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21766_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__21766_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,this$__$1),s);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__21767){
var vec__21768 = p__21767;
var k = cljs.core.nth.call(null,vec__21768,(0),null);
var v = cljs.core.nth.call(null,vec__21768,(1),null);
if(((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

goog.object.set(bidi.bidi.Pattern,"string",true);

goog.object.set(bidi.bidi.match_pattern,"string",(function (this$,env){
return bidi.bidi.match_beginning.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$)),")"].join(''),env);
}));

goog.object.set(bidi.bidi.unmatch_pattern,"string",(function (this$,_){
return this$;
}));

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__21771){
var vec__21772 = p__21771;
var k = cljs.core.nth.call(null,vec__21772,(0),null);
var v = cljs.core.nth.call(null,vec__21772,(1),null);
if(((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__5735__auto__ = bidi.bidi.unresolve_handler.call(null,cljs.core.second.call(null,v),m);
if(cljs.core.truth_(temp__5735__auto__)){
var r = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,v),m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return null;
}
});
goog.object.set(bidi.bidi.Matched,"null",true);

goog.object.set(bidi.bidi.resolve_handler,"null",(function (this$,m){
return null;
}));

goog.object.set(bidi.bidi.unresolve_handler,"null",(function (this$,m){
return null;
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21775_SHARP_){
return bidi.bidi.match_pair.call(null,p1__21775_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21776_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__21776_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Var.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Var.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Var.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.unresolve_handler.call(null,cljs.core.deref.call(null,this$__$1),m);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21779_SHARP_){
return bidi.bidi.match_pair.call(null,p1__21779_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21780_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__21780_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21777_SHARP_){
return bidi.bidi.match_pair.call(null,p1__21777_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21778_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__21778_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.Matched,"string",true);

goog.object.set(bidi.bidi.unresolve_handler,"string",(function (_,___$1){
return null;
}));

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

goog.object.set(bidi.bidi.Matched,"function",true);

goog.object.set(bidi.bidi.resolve_handler,"function",(function (this$,m){
return bidi.bidi.succeed.call(null,this$,m);
}));

goog.object.set(bidi.bidi.unresolve_handler,"function",(function (this$,m){
if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21781_SHARP_){
return bidi.bidi.match_pair.call(null,p1__21781_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21782_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__21782_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21783_SHARP_){
return bidi.bidi.match_pair.call(null,p1__21783_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21784_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__21784_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.call(null,bidi.bidi.match_pair.call(null,route,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path,new cljs.core.Keyword(null,"route","route",329891309),route)),new cljs.core.Keyword(null,"route","route",329891309));
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21791 = arguments.length;
var i__4731__auto___21792 = (0);
while(true){
if((i__4731__auto___21792 < len__4730__auto___21791)){
args__4736__auto__.push((arguments[i__4731__auto___21792]));

var G__21793 = (i__4731__auto___21792 + (1));
i__4731__auto___21792 = G__21793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__21788){
var map__21789 = p__21788;
var map__21789__$1 = (((((!((map__21789 == null))))?(((((map__21789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21789):map__21789);
var options = map__21789__$1;
return bidi.bidi.match_route_STAR_.call(null,route,path,options);
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bidi.bidi.match_route.cljs$lang$applyTo = (function (seq21785){
var G__21786 = cljs.core.first.call(null,seq21785);
var seq21785__$1 = cljs.core.next.call(null,seq21785);
var G__21787 = cljs.core.first.call(null,seq21785__$1);
var seq21785__$2 = cljs.core.next.call(null,seq21785__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21786,G__21787,seq21785__$2);
});

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for_STAR_ = (function bidi$bidi$path_for_STAR_(route,handler,params){
if((handler == null)){
throw cljs.core.ex_info.call(null,"Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair.call(null,route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});
/**
 * Given a route definition data structure, a handler and an unrolled option map,
 *   return a path that would route to the handler. The map must contain the values
 *   to any parameters required to create the path, and extra values are silently
 *   ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21800 = arguments.length;
var i__4731__auto___21801 = (0);
while(true){
if((i__4731__auto___21801 < len__4730__auto___21800)){
args__4736__auto__.push((arguments[i__4731__auto___21801]));

var G__21802 = (i__4731__auto___21801 + (1));
i__4731__auto___21801 = G__21802;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__21797){
var map__21798 = p__21797;
var map__21798__$1 = (((((!((map__21798 == null))))?(((((map__21798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21798):map__21798);
var params = map__21798__$1;
return bidi.bidi.path_for_STAR_.call(null,route,handler,params);
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bidi.bidi.path_for.cljs$lang$applyTo = (function (seq21794){
var G__21795 = cljs.core.first.call(null,seq21794);
var seq21794__$1 = cljs.core.next.call(null,seq21794);
var G__21796 = cljs.core.first.call(null,seq21794__$1);
var seq21794__$2 = cljs.core.next.call(null,seq21794__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21795,G__21796,seq21794__$2);
});


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

/**
 * A protocol used in the expansion of possible matches that the pattern can match. This is used to gather all possible routes using route-seq below.
 */
bidi.bidi.matches = (function bidi$bidi$matches(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Matches$matches$arity$1 == null)))))){
return _.bidi$bidi$Matches$matches$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.matches[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (bidi.bidi.matches["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Matches.matches",_);
}
}
}
});

goog.object.set(bidi.bidi.Matches,"_",true);

goog.object.set(bidi.bidi.matches,"_",(function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null);
}));

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21804,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21808 = k21804;
var G__21808__$1 = (((G__21808 instanceof cljs.core.Keyword))?G__21808.fqn:null);
switch (G__21808__$1) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21804,else__4388__auto__);

}
});

bidi.bidi.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21809){
var vec__21810 = p__21809;
var k__4408__auto__ = cljs.core.nth.call(null,vec__21810,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__21810,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#bidi.bidi.Route{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21803){
var self__ = this;
var G__21803__$1 = this;
return (new cljs.core.RecordIter((0),G__21803__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-350230779 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21805,other21806){
var self__ = this;
var this21805__$1 = this;
return (((!((other21806 == null)))) && ((this21805__$1.constructor === other21806.constructor)) && (cljs.core._EQ_.call(null,this21805__$1.handler,other21806.handler)) && (cljs.core._EQ_.call(null,this21805__$1.path,other21806.path)) && (cljs.core._EQ_.call(null,this21805__$1.__extmap,other21806.__extmap)));
});

bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21803){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21813 = cljs.core.keyword_identical_QMARK_;
var expr__21814 = k__4393__auto__;
if(cljs.core.truth_(pred__21813.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__21814))){
return (new bidi.bidi.Route(G__21803,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21813.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__21814))){
return (new bidi.bidi.Route(self__.handler,G__21803,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__21803),null));
}
}
});

bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21803){
var self__ = this;
var this__4384__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__21803,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

bidi.bidi.Route.cljs$lang$type = true;

bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"bidi.bidi/Route",null,(1),null));
});

bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"bidi.bidi/Route");
});

/**
 * Positional factory function for bidi.bidi/Route.
 */
bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

/**
 * Factory function for bidi.bidi/Route, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__21807){
var extmap__4424__auto__ = (function (){var G__21816 = cljs.core.dissoc.call(null,G__21807,new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__21807)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21816);
} else {
return G__21816;
}
})();
return (new bidi.bidi.Route(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__21807),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__21807),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if((((!((_ == null)))) && ((!((_.bidi$bidi$RouteSeq$gather$arity$2 == null)))))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.gather[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,context);
} else {
var m__4431__auto__ = (bidi.bidi.gather["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,context);
} else {
throw cljs.core.missing_protocol.call(null,"RouteSeq.gather",_);
}
}
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var G__21819 = arguments.length;
switch (G__21819) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__21820,ctx){
var vec__21821 = p__21820;
var pattern = cljs.core.nth.call(null,vec__21821,(0),null);
var matched = cljs.core.nth.call(null,vec__21821,(1),null);
return cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4523__auto__ = ((function (vec__21821,pattern,matched){
return (function bidi$bidi$iter__21824(s__21825){
return (new cljs.core.LazySeq(null,((function (vec__21821,pattern,matched){
return (function (){
var s__21825__$1 = s__21825;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21825__$1);
if(temp__5735__auto__){
var s__21825__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21825__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21825__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21827 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21826 = (0);
while(true){
if((i__21826 < size__4522__auto__)){
var p = cljs.core._nth.call(null,c__4521__auto__,i__21826);
cljs.core.chunk_append.call(null,b__21827,bidi.bidi.gather.call(null,matched,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__21829 = (i__21826 + (1));
i__21826 = G__21829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21827),bidi$bidi$iter__21824.call(null,cljs.core.chunk_rest.call(null,s__21825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21827),null);
}
} else {
var p = cljs.core.first.call(null,s__21825__$2);
return cljs.core.cons.call(null,bidi.bidi.gather.call(null,matched,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__21824.call(null,cljs.core.rest.call(null,s__21825__$2)));
}
} else {
return null;
}
break;
}
});})(vec__21821,pattern,matched))
,null,null));
});})(vec__21821,pattern,matched))
;
return iter__4523__auto__.call(null,bidi.bidi.matches.call(null,pattern));
})());
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__21830_SHARP_){
return bidi.bidi.route_seq.call(null,p1__21830_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__21831_SHARP_){
return bidi.bidi.route_seq.call(null,p1__21831_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__21832_SHARP_){
return bidi.bidi.route_seq.call(null,p1__21832_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__21833_SHARP_){
return bidi.bidi.route_seq.call(null,p1__21833_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__21834_SHARP_){
return bidi.bidi.route_seq.call(null,p1__21834_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.RouteSeq,"_",true);

goog.object.set(bidi.bidi.gather,"_",(function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"handler","handler",-195596612),this$))], null);
}));

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$RouteProvider$routes$arity$1 == null)))))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.bidi.routes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (bidi.bidi.routes["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"RouteProvider.routes",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {bidi.bidi.Matches}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21837,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21841 = k21837;
var G__21841__$1 = (((G__21841 instanceof cljs.core.Keyword))?G__21841.fqn:null);
switch (G__21841__$1) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21837,else__4388__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21842){
var vec__21843 = p__21842;
var k__4408__auto__ = cljs.core.nth.call(null,vec__21843,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__21843,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#bidi.bidi.Alternates{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21836){
var self__ = this;
var G__21836__$1 = this;
return (new cljs.core.RecordIter((0),G__21836__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alts","alts",647552416)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1584309265 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21838,other21839){
var self__ = this;
var this21838__$1 = this;
return (((!((other21839 == null)))) && ((this21838__$1.constructor === other21839.constructor)) && (cljs.core._EQ_.call(null,this21838__$1.alts,other21839.alts)) && (cljs.core._EQ_.call(null,this21838__$1.__extmap,other21839.__extmap)));
});

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alts","alts",647552416),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21836){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21846 = cljs.core.keyword_identical_QMARK_;
var expr__21847 = k__4393__auto__;
if(cljs.core.truth_(pred__21846.call(null,new cljs.core.Keyword(null,"alts","alts",647552416),expr__21847))){
return (new bidi.bidi.Alternates(G__21836,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__21836),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts,null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21836){
var self__ = this;
var this__4384__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__21836,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$matches$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.alts;
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__21835_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__21835_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,self__.alts));
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,self__.alts),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alts","alts",-2006883353,null)], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"bidi.bidi/Alternates",null,(1),null));
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"bidi.bidi/Alternates");
});

/**
 * Positional factory function for bidi.bidi/Alternates.
 */
bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

/**
 * Factory function for bidi.bidi/Alternates, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__21840){
var extmap__4424__auto__ = (function (){var G__21849 = cljs.core.dissoc.call(null,G__21840,new cljs.core.Keyword(null,"alts","alts",647552416));
if(cljs.core.record_QMARK_.call(null,G__21840)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21849);
} else {
return G__21849;
}
})();
return (new bidi.bidi.Alternates(new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(G__21840),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21852 = arguments.length;
var i__4731__auto___21853 = (0);
while(true){
if((i__4731__auto___21853 < len__4730__auto___21852)){
args__4736__auto__.push((arguments[i__4731__auto___21853]));

var G__21854 = (i__4731__auto___21853 + (1));
i__4731__auto___21853 = G__21854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates.call(null,alts);
});

bidi.bidi.alts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bidi.bidi.alts.cljs$lang$applyTo = (function (seq21851){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21851));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21856,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21860 = k21856;
var G__21860__$1 = (((G__21860 instanceof cljs.core.Keyword))?G__21860.fqn:null);
switch (G__21860__$1) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21856,else__4388__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21861){
var vec__21862 = p__21861;
var k__4408__auto__ = cljs.core.nth.call(null,vec__21862,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__21862,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"handler","handler",-195596612),self__.matched,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag))], null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21855){
var self__ = this;
var G__21855__$1 = this;
return (new cljs.core.RecordIter((0),G__21855__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.matched,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if((((new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,self__.tag,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))))){
return "";
} else {
return bidi.bidi.unresolve_handler.call(null,self__.matched,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1322093519 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21857,other21858){
var self__ = this;
var this21857__$1 = this;
return (((!((other21858 == null)))) && ((this21857__$1.constructor === other21858.constructor)) && (cljs.core._EQ_.call(null,this21857__$1.matched,other21858.matched)) && (cljs.core._EQ_.call(null,this21857__$1.tag,other21858.tag)) && (cljs.core._EQ_.call(null,this21857__$1.__extmap,other21858.__extmap)));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matched","matched",-975207164),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21855){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21865 = cljs.core.keyword_identical_QMARK_;
var expr__21866 = k__4393__auto__;
if(cljs.core.truth_(pred__21865.call(null,new cljs.core.Keyword(null,"matched","matched",-975207164),expr__21866))){
return (new bidi.bidi.TaggedMatch(G__21855,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21865.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__21866))){
return (new bidi.bidi.TaggedMatch(self__.matched,G__21855,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__21855),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21855){
var self__ = this;
var this__4384__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__21855,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matched","matched",665324363,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"bidi.bidi/TaggedMatch",null,(1),null));
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"bidi.bidi/TaggedMatch");
});

/**
 * Positional factory function for bidi.bidi/TaggedMatch.
 */
bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

/**
 * Factory function for bidi.bidi/TaggedMatch, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__21859){
var extmap__4424__auto__ = (function (){var G__21868 = cljs.core.dissoc.call(null,G__21859,new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(cljs.core.record_QMARK_.call(null,G__21859)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21868);
} else {
return G__21868;
}
})();
return (new bidi.bidi.TaggedMatch(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(G__21859),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__21859),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag){
return bidi.bidi.__GT_TaggedMatch.call(null,matched,tag);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21871,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21875 = k21871;
var G__21875__$1 = (((G__21875 instanceof cljs.core.Keyword))?G__21875.fqn:null);
switch (G__21875__$1) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21871,else__4388__auto__);

}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21876){
var vec__21877 = p__21876;
var k__4408__auto__ = cljs.core.nth.call(null,vec__21877,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__21877,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21870){
var self__ = this;
var G__21870__$1 = this;
return (new cljs.core.RecordIter((0),G__21870__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.handler,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.call(null,self__.id,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler.call(null,self__.handler,m);
}
} else {
return null;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1607629977 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21872,other21873){
var self__ = this;
var this21872__$1 = this;
return (((!((other21873 == null)))) && ((this21872__$1.constructor === other21873.constructor)) && (cljs.core._EQ_.call(null,this21872__$1.id,other21873.id)) && (cljs.core._EQ_.call(null,this21872__$1.handler,other21873.handler)) && (cljs.core._EQ_.call(null,this21872__$1.__extmap,other21873.__extmap)));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21870){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21880 = cljs.core.keyword_identical_QMARK_;
var expr__21881 = k__4393__auto__;
if(cljs.core.truth_(pred__21880.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__21881))){
return (new bidi.bidi.IdentifiableHandler(G__21870,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21880.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__21881))){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__21870,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__21870),null));
}
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21870){
var self__ = this;
var this__4384__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__21870,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

bidi.bidi.IdentifiableHandler.cljs$lang$type = true;

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"bidi.bidi/IdentifiableHandler",null,(1),null));
});

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"bidi.bidi/IdentifiableHandler");
});

/**
 * Positional factory function for bidi.bidi/IdentifiableHandler.
 */
bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

/**
 * Factory function for bidi.bidi/IdentifiableHandler, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__21874){
var extmap__4424__auto__ = (function (){var G__21883 = cljs.core.dissoc.call(null,G__21874,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.record_QMARK_.call(null,G__21874)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21883);
} else {
return G__21883;
}
})();
return (new bidi.bidi.IdentifiableHandler(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__21874),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__21874),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var G__21886 = arguments.length;
switch (G__21886) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler.call(null,k,handler);
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler.call(null,null,handler);
});

bidi.bidi.handler.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21889,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21893 = k21889;
var G__21893__$1 = (((G__21893 instanceof cljs.core.Keyword))?G__21893.fqn:null);
switch (G__21893__$1) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21889,else__4388__auto__);

}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21894){
var vec__21895 = p__21894;
var k__4408__auto__ = cljs.core.nth.call(null,vec__21895,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__21895,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather.call(null,self__.routes,context__$1);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21888){
var self__ = this;
var G__21888__$1 = this;
return (new cljs.core.RecordIter((0),G__21888__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__5735__auto__ = bidi.bidi.resolve_handler.call(null,self__.routes,m);
if(cljs.core.truth_(temp__5735__auto__)){
var m__$1 = temp__5735__auto__;
return cljs.core.merge.call(null,self__.context,m__$1);
} else {
return null;
}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler.call(null,self__.routes,m);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-736389484 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21890,other21891){
var self__ = this;
var this21890__$1 = this;
return (((!((other21891 == null)))) && ((this21890__$1.constructor === other21891.constructor)) && (cljs.core._EQ_.call(null,this21890__$1.routes,other21891.routes)) && (cljs.core._EQ_.call(null,this21890__$1.context,other21891.context)) && (cljs.core._EQ_.call(null,this21890__$1.__extmap,other21891.__extmap)));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21888){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21898 = cljs.core.keyword_identical_QMARK_;
var expr__21899 = k__4393__auto__;
if(cljs.core.truth_(pred__21898.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__21899))){
return (new bidi.bidi.RoutesContext(G__21888,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21898.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__21899))){
return (new bidi.bidi.RoutesContext(self__.routes,G__21888,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__21888),null));
}
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21888){
var self__ = this;
var this__4384__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__21888,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
});

bidi.bidi.RoutesContext.cljs$lang$type = true;

bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"bidi.bidi/RoutesContext",null,(1),null));
});

bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"bidi.bidi/RoutesContext");
});

/**
 * Positional factory function for bidi.bidi/RoutesContext.
 */
bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

/**
 * Factory function for bidi.bidi/RoutesContext, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__21892){
var extmap__4424__auto__ = (function (){var G__21901 = cljs.core.dissoc.call(null,G__21892,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113));
if(cljs.core.record_QMARK_.call(null,G__21892)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21901);
} else {
return G__21901;
}
})();
return (new bidi.bidi.RoutesContext(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__21892),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__21892),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext.call(null,routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});

//# sourceMappingURL=bidi.js.map?rel=1560468643708
