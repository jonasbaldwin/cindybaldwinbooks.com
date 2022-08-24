// Compiled by ClojureScript 1.10.520 {}
goog.provide('bidi.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');

/**
 * @interface
 */
bidi.router.Router = function(){};

bidi.router.set_location_BANG_ = (function bidi$router$set_location_BANG_(_,location){
if((((!((_ == null)))) && ((!((_.bidi$router$Router$set_location_BANG_$arity$2 == null)))))){
return _.bidi$router$Router$set_location_BANG_$arity$2(_,location);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.router.set_location_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,location);
} else {
var m__4431__auto__ = (bidi.router.set_location_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,location);
} else {
throw cljs.core.missing_protocol.call(null,"Router.set-location!",_);
}
}
}
});

bidi.router.replace_location_BANG_ = (function bidi$router$replace_location_BANG_(_,location){
if((((!((_ == null)))) && ((!((_.bidi$router$Router$replace_location_BANG_$arity$2 == null)))))){
return _.bidi$router$Router$replace_location_BANG_$arity$2(_,location);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (bidi.router.replace_location_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,location);
} else {
var m__4431__auto__ = (bidi.router.replace_location_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,location);
} else {
throw cljs.core.missing_protocol.call(null,"Router.replace-location!",_);
}
}
}
});

/**
 * Starts up a Bidi router based on Google Closure's 'History'
 * 
 *   Types:
 * 
 *  Location :- {:handler ...
 *               :route-params {...}}
 * 
 *   Parameters:
 * 
 *  routes :- a Bidi route structure
 *  on-navigate :- 0-arg function, accepting a Location
 *  default-location :- Location to default to if the current token doesn't match a route
 * 
 *   Returns :- Router
 * 
 *   Example usage:
 * 
 *  (require '[bidi.router :as br])
 * 
 *  (let [!location (atom nil)
 *        router (br/start-router! ["" {"/" ::home-page
 *                                        "/page2" ::page2}]
 *                                 {:on-navigate (fn [location]
 *                                                 (reset! !location location))
 *                                  :default-location {:handler ::home-page}})]
 * 
 *    ...
 * 
 *    (br/set-location! router {:handler ::page2}))
 */
bidi.router.start_router_BANG_ = (function bidi$router$start_router_BANG_(routes,p__25108){
var map__25109 = p__25108;
var map__25109__$1 = (((((!((map__25109 == null))))?(((((map__25109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25109):map__25109);
var on_navigate = cljs.core.get.call(null,map__25109__$1,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.constantly.call(null,null));
var default_location = cljs.core.get.call(null,map__25109__$1,new cljs.core.Keyword(null,"default-location","default-location",1316404397));
var history = (new goog.History());
history.setEnabled(true);

var token__GT_location = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$_token__GT_location(token){
var or__4131__auto__ = bidi.bidi.match_route.call(null,routes,token);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_location;
}
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;
var location__GT_token = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$_location__GT_token(p__25114){
var map__25115 = p__25114;
var map__25115__$1 = (((((!((map__25115 == null))))?(((((map__25115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25115):map__25115);
var handler = cljs.core.get.call(null,map__25115__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__25115__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return bidi.bidi.unmatch_pair.call(null,routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),route_params], null));
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;
goog.events.listen(history,goog.History.EventType.NAVIGATE,((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function (e){
return on_navigate.call(null,token__GT_location.call(null,e.token));
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
);

var initial_token_25120 = (function (){var token = history.getToken();
if((!(clojure.string.blank_QMARK_.call(null,token)))){
return token;
} else {
var or__4131__auto__ = location__GT_token.call(null,default_location);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "/";
}
}
})();
var initial_location_25121 = token__GT_location.call(null,initial_token_25120);
history.replaceToken(initial_token_25120);

on_navigate.call(null,initial_location_25121);

if((typeof bidi !== 'undefined') && (typeof bidi.router !== 'undefined') && (typeof bidi.router.t_bidi$router25117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {bidi.router.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bidi.router.t_bidi$router25117 = (function (routes,p__25108,map__25109,on_navigate,default_location,history,token__GT_location,location__GT_token,meta25118){
this.routes = routes;
this.p__25108 = p__25108;
this.map__25109 = map__25109;
this.on_navigate = on_navigate;
this.default_location = default_location;
this.history = history;
this.token__GT_location = token__GT_location;
this.location__GT_token = location__GT_token;
this.meta25118 = meta25118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
bidi.router.t_bidi$router25117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function (_25119,meta25118__$1){
var self__ = this;
var _25119__$1 = this;
return (new bidi.router.t_bidi$router25117(self__.routes,self__.p__25108,self__.map__25109,self__.on_navigate,self__.default_location,self__.history,self__.token__GT_location,self__.location__GT_token,meta25118__$1));
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router25117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function (_25119){
var self__ = this;
var _25119__$1 = this;
return self__.meta25118;
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router25117.prototype.bidi$router$Router$ = cljs.core.PROTOCOL_SENTINEL;

bidi.router.t_bidi$router25117.prototype.bidi$router$Router$set_location_BANG_$arity$2 = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function (_,location){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(self__.location__GT_token.call(null,location));
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router25117.prototype.bidi$router$Router$replace_location_BANG_$arity$2 = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function (_,location){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(self__.location__GT_token.call(null,location));
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router25117.getBasis = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"p__25108","p__25108",-906550556,null),new cljs.core.Symbol(null,"map__25109","map__25109",378944324,null),new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"default-location","default-location",-1338031372,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"token->location","token->location",354786609,null),new cljs.core.Symbol(null,"location->token","location->token",2092281408,null),new cljs.core.Symbol(null,"meta25118","meta25118",745956229,null)], null);
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;

bidi.router.t_bidi$router25117.cljs$lang$type = true;

bidi.router.t_bidi$router25117.cljs$lang$ctorStr = "bidi.router/t_bidi$router25117";

bidi.router.t_bidi$router25117.cljs$lang$ctorPrWriter = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"bidi.router/t_bidi$router25117");
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;

/**
 * Positional factory function for bidi.router/t_bidi$router25117.
 */
bidi.router.__GT_t_bidi$router25117 = ((function (history,map__25109,map__25109__$1,on_navigate,default_location){
return (function bidi$router$start_router_BANG__$___GT_t_bidi$router25117(routes__$1,p__25108__$1,map__25109__$2,on_navigate__$1,default_location__$1,history__$1,token__GT_location__$1,location__GT_token__$1,meta25118){
return (new bidi.router.t_bidi$router25117(routes__$1,p__25108__$1,map__25109__$2,on_navigate__$1,default_location__$1,history__$1,token__GT_location__$1,location__GT_token__$1,meta25118));
});})(history,map__25109,map__25109__$1,on_navigate,default_location))
;

}

return (new bidi.router.t_bidi$router25117(routes,p__25108,map__25109__$1,on_navigate,default_location,history,token__GT_location,location__GT_token,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=router.js.map?rel=1560468646555
