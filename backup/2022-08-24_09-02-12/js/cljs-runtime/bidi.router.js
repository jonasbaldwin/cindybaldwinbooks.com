goog.provide('bidi.router');

/**
 * @interface
 */
bidi.router.Router = function(){};

var bidi$router$Router$set_location_BANG_$dyn_52055 = (function (_,location){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (bidi.router.set_location_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,location) : m__4551__auto__.call(null,_,location));
} else {
var m__4549__auto__ = (bidi.router.set_location_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,location) : m__4549__auto__.call(null,_,location));
} else {
throw cljs.core.missing_protocol("Router.set-location!",_);
}
}
});
bidi.router.set_location_BANG_ = (function bidi$router$set_location_BANG_(_,location){
if((((!((_ == null)))) && ((!((_.bidi$router$Router$set_location_BANG_$arity$2 == null)))))){
return _.bidi$router$Router$set_location_BANG_$arity$2(_,location);
} else {
return bidi$router$Router$set_location_BANG_$dyn_52055(_,location);
}
});

var bidi$router$Router$replace_location_BANG_$dyn_52142 = (function (_,location){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (bidi.router.replace_location_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,location) : m__4551__auto__.call(null,_,location));
} else {
var m__4549__auto__ = (bidi.router.replace_location_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,location) : m__4549__auto__.call(null,_,location));
} else {
throw cljs.core.missing_protocol("Router.replace-location!",_);
}
}
});
bidi.router.replace_location_BANG_ = (function bidi$router$replace_location_BANG_(_,location){
if((((!((_ == null)))) && ((!((_.bidi$router$Router$replace_location_BANG_$arity$2 == null)))))){
return _.bidi$router$Router$replace_location_BANG_$arity$2(_,location);
} else {
return bidi$router$Router$replace_location_BANG_$dyn_52142(_,location);
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
bidi.router.start_router_BANG_ = (function bidi$router$start_router_BANG_(routes,p__52012){
var map__52013 = p__52012;
var map__52013__$1 = cljs.core.__destructure_map(map__52013);
var on_navigate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52013__$1,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.constantly(null));
var default_location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52013__$1,new cljs.core.Keyword(null,"default-location","default-location",1316404397));
var history = (new goog.History());
history.setEnabled(true);

var token__GT_location = (function bidi$router$start_router_BANG__$_token__GT_location(token){
var or__4253__auto__ = bidi.bidi.match_route(routes,token);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default_location;
}
});
var location__GT_token = (function bidi$router$start_router_BANG__$_location__GT_token(p__52031){
var map__52032 = p__52031;
var map__52032__$1 = cljs.core.__destructure_map(map__52032);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52032__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52032__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return bidi.bidi.unmatch_pair(routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),route_params], null));
});
goog.events.listen(history,goog.History.EventType.NAVIGATE,(function (e){
var G__52034 = token__GT_location(e.token);
return (on_navigate.cljs$core$IFn$_invoke$arity$1 ? on_navigate.cljs$core$IFn$_invoke$arity$1(G__52034) : on_navigate.call(null,G__52034));
}));

var initial_token_52147 = (function (){var token = history.getToken();
if((!(clojure.string.blank_QMARK_(token)))){
return token;
} else {
var or__4253__auto__ = location__GT_token(default_location);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "/";
}
}
})();
var initial_location_52148 = token__GT_location(initial_token_52147);
history.replaceToken(initial_token_52147);

(on_navigate.cljs$core$IFn$_invoke$arity$1 ? on_navigate.cljs$core$IFn$_invoke$arity$1(initial_location_52148) : on_navigate.call(null,initial_location_52148));

if((typeof bidi !== 'undefined') && (typeof bidi.router !== 'undefined') && (typeof bidi.router.t_bidi$router52036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {bidi.router.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bidi.router.t_bidi$router52036 = (function (routes,p__52012,map__52013,on_navigate,default_location,history,token__GT_location,location__GT_token,meta52037){
this.routes = routes;
this.p__52012 = p__52012;
this.map__52013 = map__52013;
this.on_navigate = on_navigate;
this.default_location = default_location;
this.history = history;
this.token__GT_location = token__GT_location;
this.location__GT_token = location__GT_token;
this.meta52037 = meta52037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bidi.router.t_bidi$router52036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52038,meta52037__$1){
var self__ = this;
var _52038__$1 = this;
return (new bidi.router.t_bidi$router52036(self__.routes,self__.p__52012,self__.map__52013,self__.on_navigate,self__.default_location,self__.history,self__.token__GT_location,self__.location__GT_token,meta52037__$1));
}));

(bidi.router.t_bidi$router52036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52038){
var self__ = this;
var _52038__$1 = this;
return self__.meta52037;
}));

(bidi.router.t_bidi$router52036.prototype.bidi$router$Router$ = cljs.core.PROTOCOL_SENTINEL);

(bidi.router.t_bidi$router52036.prototype.bidi$router$Router$set_location_BANG_$arity$2 = (function (_,location){
var self__ = this;
var ___$1 = this;
return self__.history.setToken((self__.location__GT_token.cljs$core$IFn$_invoke$arity$1 ? self__.location__GT_token.cljs$core$IFn$_invoke$arity$1(location) : self__.location__GT_token.call(null,location)));
}));

(bidi.router.t_bidi$router52036.prototype.bidi$router$Router$replace_location_BANG_$arity$2 = (function (_,location){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken((self__.location__GT_token.cljs$core$IFn$_invoke$arity$1 ? self__.location__GT_token.cljs$core$IFn$_invoke$arity$1(location) : self__.location__GT_token.call(null,location)));
}));

(bidi.router.t_bidi$router52036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"p__52012","p__52012",-114390062,null),new cljs.core.Symbol(null,"map__52013","map__52013",-1030622848,null),new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"default-location","default-location",-1338031372,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"token->location","token->location",354786609,null),new cljs.core.Symbol(null,"location->token","location->token",2092281408,null),new cljs.core.Symbol(null,"meta52037","meta52037",342162248,null)], null);
}));

(bidi.router.t_bidi$router52036.cljs$lang$type = true);

(bidi.router.t_bidi$router52036.cljs$lang$ctorStr = "bidi.router/t_bidi$router52036");

(bidi.router.t_bidi$router52036.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"bidi.router/t_bidi$router52036");
}));

/**
 * Positional factory function for bidi.router/t_bidi$router52036.
 */
bidi.router.__GT_t_bidi$router52036 = (function bidi$router$start_router_BANG__$___GT_t_bidi$router52036(routes__$1,p__52012__$1,map__52013__$2,on_navigate__$1,default_location__$1,history__$1,token__GT_location__$1,location__GT_token__$1,meta52037){
return (new bidi.router.t_bidi$router52036(routes__$1,p__52012__$1,map__52013__$2,on_navigate__$1,default_location__$1,history__$1,token__GT_location__$1,location__GT_token__$1,meta52037));
});

}

return (new bidi.router.t_bidi$router52036(routes,p__52012,map__52013__$1,on_navigate,default_location,history,token__GT_location,location__GT_token,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=bidi.router.js.map
