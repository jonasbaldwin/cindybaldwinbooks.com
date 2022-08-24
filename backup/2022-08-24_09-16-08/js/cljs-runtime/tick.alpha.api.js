goog.provide('tick.alpha.api');
tick.alpha.api.new_time = tick.core.new_time;
tick.alpha.api.new_date = tick.core.new_date;
tick.alpha.api.new_year_month = tick.core.new_year_month;
tick.alpha.api.unit_map = tick.core.unit_map;
tick.alpha.api.now = (function tick$alpha$api$now(){
return tick.core.now();
});
tick.alpha.api.today = (function tick$alpha$api$today(){
return tick.core.today();
});
tick.alpha.api.tomorrow = (function tick$alpha$api$tomorrow(){
return tick.core.tomorrow();
});
tick.alpha.api.yesterday = (function tick$alpha$api$yesterday(){
return tick.core.yesterday();
});
tick.alpha.api.time = (function tick$alpha$api$time(var_args){
var G__38182 = arguments.length;
switch (G__38182) {
case 0:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.time(tick.alpha.api.now());
}));

(tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.time(v);
}));

(tick.alpha.api.time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.date = (function tick$alpha$api$date(var_args){
var G__38184 = arguments.length;
switch (G__38184) {
case 0:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.alpha.api.today();
}));

(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.date(v);
}));

(tick.alpha.api.date.cljs$lang$maxFixedArity = 1);

tick.alpha.api.inst = (function tick$alpha$api$inst(var_args){
var G__38186 = arguments.length;
switch (G__38186) {
case 0:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.inst(tick.alpha.api.now());
}));

(tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.inst(v);
}));

(tick.alpha.api.inst.cljs$lang$maxFixedArity = 1);

tick.alpha.api.instant = (function tick$alpha$api$instant(var_args){
var G__38188 = arguments.length;
switch (G__38188) {
case 0:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.instant(tick.alpha.api.now());
}));

(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.instant(v);
}));

(tick.alpha.api.instant.cljs$lang$maxFixedArity = 1);

tick.alpha.api.date_time = (function tick$alpha$api$date_time(var_args){
var G__38190 = arguments.length;
switch (G__38190) {
case 0:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.date_time(tick.alpha.api.now());
}));

(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.date_time(v);
}));

(tick.alpha.api.date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.offset_date_time = (function tick$alpha$api$offset_date_time(var_args){
var G__38192 = arguments.length;
switch (G__38192) {
case 0:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.offset_date_time(tick.alpha.api.now());
}));

(tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.offset_date_time(v);
}));

(tick.alpha.api.offset_date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zoned_date_time = (function tick$alpha$api$zoned_date_time(var_args){
var G__38194 = arguments.length;
switch (G__38194) {
case 0:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.zoned_date_time(tick.alpha.api.now());
}));

(tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.zoned_date_time(v);
}));

(tick.alpha.api.zoned_date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.nanosecond = (function tick$alpha$api$nanosecond(t){
return tick.protocols.nanosecond(t);
});
tick.alpha.api.microsecond = (function tick$alpha$api$microsecond(t){
return tick.protocols.microsecond(t);
});
tick.alpha.api.millisecond = (function tick$alpha$api$millisecond(t){
return tick.protocols.millisecond(t);
});
tick.alpha.api.second = (function tick$alpha$api$second(t){
return tick.protocols.second(t);
});
tick.alpha.api.minute = (function tick$alpha$api$minute(t){
return tick.protocols.minute(t);
});
tick.alpha.api.hour = (function tick$alpha$api$hour(t){
return tick.protocols.hour(t);
});
tick.alpha.api.day_of_week = (function tick$alpha$api$day_of_week(var_args){
var G__38196 = arguments.length;
switch (G__38196) {
case 0:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.day_of_week(tick.alpha.api.today());
}));

(tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.day_of_week(v);
}));

(tick.alpha.api.day_of_week.cljs$lang$maxFixedArity = 1);

tick.alpha.api.day_of_month = (function tick$alpha$api$day_of_month(var_args){
var G__38198 = arguments.length;
switch (G__38198) {
case 0:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.day_of_month(tick.alpha.api.today());
}));

(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.day_of_month(v);
}));

(tick.alpha.api.day_of_month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.month = (function tick$alpha$api$month(var_args){
var G__38200 = arguments.length;
switch (G__38200) {
case 0:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.month(tick.alpha.api.today());
}));

(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.month(v);
}));

(tick.alpha.api.month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.year = (function tick$alpha$api$year(var_args){
var G__38202 = arguments.length;
switch (G__38202) {
case 0:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.year(tick.alpha.api.today());
}));

(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.year(v);
}));

(tick.alpha.api.year.cljs$lang$maxFixedArity = 1);

tick.alpha.api.year_month = (function tick$alpha$api$year_month(var_args){
var G__38204 = arguments.length;
switch (G__38204) {
case 0:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.year_month(tick.alpha.api.today());
}));

(tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.year_month(v);
}));

(tick.alpha.api.year_month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zone = (function tick$alpha$api$zone(var_args){
var G__38206 = arguments.length;
switch (G__38206) {
case 0:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_zone();
}));

(tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1 = (function (z){
return tick.protocols.zone(z);
}));

(tick.alpha.api.zone.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zone_offset = (function tick$alpha$api$zone_offset(var_args){
var G__38208 = arguments.length;
switch (G__38208) {
case 1:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1 = (function (offset){
return tick.protocols.zone_offset(offset);
}));

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljc.java_time.zone_offset.of_hours_minutes(hours,minutes);
}));

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljc.java_time.zone_offset.of_hours_minutes_seconds(hours,minutes,seconds);
}));

(tick.alpha.api.zone_offset.cljs$lang$maxFixedArity = 3);

tick.alpha.api.on = (function tick$alpha$api$on(t,d){
return tick.protocols.on(t,tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(d));
});
tick.alpha.api.at = (function tick$alpha$api$at(d,t){
return tick.protocols.at(d,tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1(t));
});
tick.alpha.api.in$ = (function tick$alpha$api$in(ldt,z){
return tick.protocols.in$(ldt,tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1(z));
});
tick.alpha.api.offset_by = (function tick$alpha$api$offset_by(ldt,offset){
return tick.protocols.offset_by(ldt,tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1(offset));
});
tick.alpha.api.MONDAY = cljc.java_time.day_of_week.monday;
tick.alpha.api.TUESDAY = cljc.java_time.day_of_week.tuesday;
tick.alpha.api.WEDNESDAY = cljc.java_time.day_of_week.wednesday;
tick.alpha.api.THURSDAY = cljc.java_time.day_of_week.thursday;
tick.alpha.api.FRIDAY = cljc.java_time.day_of_week.friday;
tick.alpha.api.SATURDAY = cljc.java_time.day_of_week.saturday;
tick.alpha.api.SUNDAY = cljc.java_time.day_of_week.sunday;
tick.alpha.api.JANUARY = cljc.java_time.month.january;
tick.alpha.api.FEBRUARY = cljc.java_time.month.february;
tick.alpha.api.MARCH = cljc.java_time.month.march;
tick.alpha.api.APRIL = cljc.java_time.month.april;
tick.alpha.api.MAY = cljc.java_time.month.may;
tick.alpha.api.JUNE = cljc.java_time.month.june;
tick.alpha.api.JULY = cljc.java_time.month.july;
tick.alpha.api.AUGUST = cljc.java_time.month.august;
tick.alpha.api.SEPTEMBER = cljc.java_time.month.september;
tick.alpha.api.OCTOBER = cljc.java_time.month.october;
tick.alpha.api.NOVEMBER = cljc.java_time.month.november;
tick.alpha.api.DECEMBER = cljc.java_time.month.december;
tick.alpha.api.beginning = (function tick$alpha$api$beginning(v){
return tick.protocols.beginning(v);
});
tick.alpha.api.end = (function tick$alpha$api$end(v){
return tick.protocols.end(v);
});
tick.alpha.api.duration = (function tick$alpha$api$duration(v){
return tick.core.duration(v);
});
tick.alpha.api.coincident_QMARK_ = tick.core.coincident_QMARK_;
tick.alpha.api.noon = tick.core.noon;
tick.alpha.api.midnight = tick.core.midnight;
tick.alpha.api.midnight_QMARK_ = tick.core.midnight_QMARK_;
tick.alpha.api.epoch = tick.core.epoch;
tick.alpha.api.fields = tick.core.fields;
tick.alpha.api.with$ = tick.core.with$;
tick.alpha.api.ago = tick.core.ago;
tick.alpha.api.hence = tick.core.hence;
tick.alpha.api.UTC = tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1("UTC");
/**
 * Do not use this function if you know the expected format of the string
 * that you want to parse. This is partly because for example t/instant, t/date etc  will
 * be much faster, but also because if the string you pass it is not in the format you
 * expect, this function may still convert it into some entity that you weren't expecting.
 * 
 * If you have a string in a non-standard format, use a formatter and the parse fn of they entity you want.
 * 
 * For example:
 * 
 * (cljc.java-time.local-date/parse "20200202" (t/formatter "yyyyMMdd"))
 */
tick.alpha.api.parse = tick.protocols.parse;
tick.alpha.api.inc = (function tick$alpha$api$inc(t){
return tick.core.inc(t);
});
tick.alpha.api.dec = (function tick$alpha$api$dec(t){
return tick.core.dec(t);
});
tick.alpha.api._GT__GT_ = (function tick$alpha$api$_GT__GT_(t,amt){
return tick.core._GT__GT_(t,amt);
});
tick.alpha.api._LT__LT_ = (function tick$alpha$api$_LT__LT_(t,amt){
return tick.core._LT__LT_(t,amt);
});
/**
 * Sum amounts of time.
 * 
 *   Prefer >> for moving forward a date/time
 */
tick.alpha.api._PLUS_ = (function tick$alpha$api$_PLUS_(var_args){
var G__38212 = arguments.length;
switch (G__38212) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38286 = arguments.length;
var i__4737__auto___38287 = (0);
while(true){
if((i__4737__auto___38287 < len__4736__auto___38286)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38287]));

var G__38288 = (i__4737__auto___38287 + (1));
i__4737__auto___38287 = G__38288;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.duration.zero;
}));

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return arg;
}));

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
if(((tick.core.duration_QMARK_(arg)) || (tick.core.period_QMARK_(arg)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.protocols._PLUS_,arg,args);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
} else {
throw (new Error("Assert failed: (= 1 (count args))"));
}

return tick.alpha.api._GT__GT_(arg,cljs.core.first(args));
}
}));

/** @this {Function} */
(tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq38210){
var G__38211 = cljs.core.first(seq38210);
var seq38210__$1 = cljs.core.next(seq38210);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38211,seq38210__$1);
}));

(tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1));

/**
 * Subtract amounts of time.
 * 
 *   Prefer << for moving backward a date/time
 */
tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__38216 = arguments.length;
switch (G__38216) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38290 = arguments.length;
var i__4737__auto___38291 = (0);
while(true){
if((i__4737__auto___38291 < len__4736__auto___38290)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38291]));

var G__38292 = (i__4737__auto___38291 + (1));
i__4737__auto___38291 = G__38292;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.duration.zero;
}));

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return tick.core.negated(arg);
}));

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
if(((tick.core.duration_QMARK_(arg)) || (tick.core.period_QMARK_(arg)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.protocols._,arg,args);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
} else {
throw (new Error("Assert failed: (= 1 (count args))"));
}

return tick.alpha.api._LT__LT_(arg,cljs.core.first(args));
}
}));

/** @this {Function} */
(tick.alpha.api._.cljs$lang$applyTo = (function (seq38214){
var G__38215 = cljs.core.first(seq38214);
var seq38214__$1 = cljs.core.next(seq38214);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38215,seq38214__$1);
}));

(tick.alpha.api._.cljs$lang$maxFixedArity = (1));

tick.alpha.api.max = tick.core.max;
tick.alpha.api.min = tick.core.min;
tick.alpha.api.min_of_type = tick.protocols.min_of_type;
tick.alpha.api.max_of_type = tick.protocols.max_of_type;
tick.alpha.api.range = tick.protocols.range;
tick.alpha.api.int$ = (function tick$alpha$api$int(arg){
return tick.protocols.int$(arg);
});
tick.alpha.api.long$ = (function tick$alpha$api$long(arg){
return tick.protocols.long$(arg);
});
tick.alpha.api.nanos = (function tick$alpha$api$nanos(v){
return tick.protocols.nanos(v);
});
tick.alpha.api.micros = (function tick$alpha$api$micros(v){
return tick.protocols.micros(v);
});
tick.alpha.api.millis = (function tick$alpha$api$millis(v){
return tick.protocols.millis(v);
});
tick.alpha.api.seconds = (function tick$alpha$api$seconds(v){
return tick.protocols.seconds(v);
});
tick.alpha.api.minutes = (function tick$alpha$api$minutes(v){
return tick.protocols.minutes(v);
});
tick.alpha.api.hours = (function tick$alpha$api$hours(v){
return tick.protocols.hours(v);
});
tick.alpha.api.days = (function tick$alpha$api$days(v){
return tick.protocols.days(v);
});
tick.alpha.api.months = (function tick$alpha$api$months(v){
return tick.protocols.months(v);
});
tick.alpha.api.years = (function tick$alpha$api$years(v){
return tick.protocols.years(v);
});
tick.alpha.api.units = tick.core.units;
tick.alpha.api.truncate = tick.core.truncate;
tick.alpha.api._LT_ = (function tick$alpha$api$_LT_(var_args){
var G__38221 = arguments.length;
switch (G__38221) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38297 = arguments.length;
var i__4737__auto___38298 = (0);
while(true){
if((i__4737__auto___38298 < len__4736__auto___38297)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38298]));

var G__38299 = (i__4737__auto___38298 + (1));
i__4737__auto___38298 = G__38299;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._LT_(x,y);
}));

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._LT_(x,y))){
if(cljs.core.next(more)){
var G__38300 = y;
var G__38301 = cljs.core.first(more);
var G__38302 = cljs.core.next(more);
x = G__38300;
y = G__38301;
more = G__38302;
continue;
} else {
return tick.protocols._LT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq38218){
var G__38219 = cljs.core.first(seq38218);
var seq38218__$1 = cljs.core.next(seq38218);
var G__38220 = cljs.core.first(seq38218__$1);
var seq38218__$2 = cljs.core.next(seq38218__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38219,G__38220,seq38218__$2);
}));

(tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__38226 = arguments.length;
switch (G__38226) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38304 = arguments.length;
var i__4737__auto___38305 = (0);
while(true){
if((i__4737__auto___38305 < len__4736__auto___38304)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38305]));

var G__38306 = (i__4737__auto___38305 + (1));
i__4737__auto___38305 = G__38306;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._LT__EQ_(x,y);
}));

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._LT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__38307 = y;
var G__38308 = cljs.core.first(more);
var G__38309 = cljs.core.next(more);
x = G__38307;
y = G__38308;
more = G__38309;
continue;
} else {
return tick.protocols._LT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq38223){
var G__38224 = cljs.core.first(seq38223);
var seq38223__$1 = cljs.core.next(seq38223);
var G__38225 = cljs.core.first(seq38223__$1);
var seq38223__$2 = cljs.core.next(seq38223__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38224,G__38225,seq38223__$2);
}));

(tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__38231 = arguments.length;
switch (G__38231) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38311 = arguments.length;
var i__4737__auto___38312 = (0);
while(true){
if((i__4737__auto___38312 < len__4736__auto___38311)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38312]));

var G__38313 = (i__4737__auto___38312 + (1));
i__4737__auto___38312 = G__38313;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._GT_(x,y);
}));

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._GT_(x,y))){
if(cljs.core.next(more)){
var G__38314 = y;
var G__38315 = cljs.core.first(more);
var G__38316 = cljs.core.next(more);
x = G__38314;
y = G__38315;
more = G__38316;
continue;
} else {
return tick.protocols._GT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq38228){
var G__38229 = cljs.core.first(seq38228);
var seq38228__$1 = cljs.core.next(seq38228);
var G__38230 = cljs.core.first(seq38228__$1);
var seq38228__$2 = cljs.core.next(seq38228__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38229,G__38230,seq38228__$2);
}));

(tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__38236 = arguments.length;
switch (G__38236) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38318 = arguments.length;
var i__4737__auto___38319 = (0);
while(true){
if((i__4737__auto___38319 < len__4736__auto___38318)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38319]));

var G__38320 = (i__4737__auto___38319 + (1));
i__4737__auto___38319 = G__38320;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._GT__EQ_(x,y);
}));

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._GT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__38321 = y;
var G__38322 = cljs.core.first(more);
var G__38323 = cljs.core.next(more);
x = G__38321;
y = G__38322;
more = G__38323;
continue;
} else {
return tick.protocols._GT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq38233){
var G__38234 = cljs.core.first(seq38233);
var seq38233__$1 = cljs.core.next(seq38233);
var G__38235 = cljs.core.first(seq38233__$1);
var seq38233__$2 = cljs.core.next(seq38233__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38234,G__38235,seq38233__$2);
}));

(tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__38238 = arguments.length;
switch (G__38238) {
case 0:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_clock();
}));

(tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1 = (function (i){
return tick.protocols.clock(i);
}));

(tick.alpha.api.clock.cljs$lang$maxFixedArity = 1);

tick.alpha.api.atom = tick.core.atom;
tick.alpha.api.swap_BANG_ = tick.core.swap_BANG_;
tick.alpha.api.swap_vals_BANG_ = tick.core.swap_vals_BANG_;
tick.alpha.api.compare_and_set_BANG_ = tick.core.compare_and_set_BANG_;
tick.alpha.api.reset_BANG_ = tick.core.reset_BANG_;
tick.alpha.api.reset_vals_BANG_ = tick.core.reset_vals_BANG_;
tick.alpha.api.new_interval = (function tick$alpha$api$new_interval(x,y){
return tick.interval.new_interval(x,y);
});
tick.alpha.api.extend = (function tick$alpha$api$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38328 = arguments.length;
var i__4737__auto___38329 = (0);
while(true){
if((i__4737__auto___38329 < len__4736__auto___38328)){
args__4742__auto__.push((arguments[i__4737__auto___38329]));

var G__38330 = (i__4737__auto___38329 + (1));
i__4737__auto___38329 = G__38330;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.extend,ival,durations);
}));

(tick.alpha.api.extend.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.alpha.api.extend.cljs$lang$applyTo = (function (seq38239){
var G__38240 = cljs.core.first(seq38239);
var seq38239__$1 = cljs.core.next(seq38239);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38240,seq38239__$1);
}));

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38331 = arguments.length;
var i__4737__auto___38332 = (0);
while(true){
if((i__4737__auto___38332 < len__4736__auto___38331)){
args__4742__auto__.push((arguments[i__4737__auto___38332]));

var G__38333 = (i__4737__auto___38332 + (1));
i__4737__auto___38332 = G__38333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.scale,ival,durations);
}));

(tick.alpha.api.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.alpha.api.scale.cljs$lang$applyTo = (function (seq38241){
var G__38242 = cljs.core.first(seq38241);
var seq38241__$1 = cljs.core.next(seq38241);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38242,seq38241__$1);
}));

/**
 * Return an interval which forms the bounding-box of the given arguments.
 */
tick.alpha.api.bounds = tick.interval.bounds;
tick.alpha.api.am = (function tick$alpha$api$am(date){
return tick.interval.am(date);
});
tick.alpha.api.pm = (function tick$alpha$api$pm(date){
return tick.interval.pm(date);
});
tick.alpha.api.relation = (function tick$alpha$api$relation(i1,i2){
return tick.interval.relation(i1,i2);
});
tick.alpha.api.new_duration = (function tick$alpha$api$new_duration(n,u){
return tick.core.new_duration(n,u);
});
tick.alpha.api.new_period = (function tick$alpha$api$new_period(n,u){
return tick.core.new_period(n,u);
});
tick.alpha.api.between = (function tick$alpha$api$between(v1,v2){
return tick.protocols.between(v1,v2);
});
tick.alpha.api.concur = (function tick$alpha$api$concur(var_args){
var G__38246 = arguments.length;
switch (G__38246) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38341 = arguments.length;
var i__4737__auto___38342 = (0);
while(true){
if((i__4737__auto___38342 < len__4736__auto___38341)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38342]));

var G__38343 = (i__4737__auto___38342 + (1));
i__4737__auto___38342 = G__38343;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.concur,x,args);
}));

/** @this {Function} */
(tick.alpha.api.concur.cljs$lang$applyTo = (function (seq38244){
var G__38245 = cljs.core.first(seq38244);
var seq38244__$1 = cljs.core.next(seq38244);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38245,seq38244__$1);
}));

(tick.alpha.api.concur.cljs$lang$maxFixedArity = (1));

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38344 = arguments.length;
var i__4737__auto___38345 = (0);
while(true){
if((i__4737__auto___38345 < len__4736__auto___38344)){
args__4742__auto__.push((arguments[i__4737__auto___38345]));

var G__38346 = (i__4737__auto___38345 + (1));
i__4737__auto___38345 = G__38346;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.concurrencies,intervals);
}));

(tick.alpha.api.concurrencies.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq38247){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38247));
}));

tick.alpha.api.divide_by = (function tick$alpha$api$divide_by(divisor,t){
return tick.protocols.divide(t,divisor);
});
tick.alpha.api.divide = (function tick$alpha$api$divide(t,divisor){
return tick.protocols.divide(t,divisor);
});
tick.alpha.api.ordered_disjoint_intervals_QMARK_ = tick.interval.ordered_disjoint_intervals_QMARK_;
tick.alpha.api.unite = tick.interval.unite;
tick.alpha.api.normalize = tick.interval.normalize;
tick.alpha.api.union = tick.interval.union;
tick.alpha.api.conj = tick.interval.conj;
tick.alpha.api.intersection = tick.interval.intersection;
tick.alpha.api.intersects_QMARK_ = tick.interval.intersects_QMARK_;
tick.alpha.api.difference = tick.interval.difference;
tick.alpha.api.complement = tick.interval.complement;
tick.alpha.api.group_by = tick.interval.group_by;
tick.alpha.api.format = (function tick$alpha$api$format(var_args){
var G__38249 = arguments.length;
switch (G__38249) {
case 1:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return tick.format.format.cljs$core$IFn$_invoke$arity$1(o);
}));

(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.format.cljs$core$IFn$_invoke$arity$2(fmt,o);
}));

(tick.alpha.api.format.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "YYYY/mm/DD" "YYY HH:MM" etc.
 *   or
 *   * formatter name - :iso-instant :iso-date etc
 */
tick.alpha.api.formatter = (function tick$alpha$api$formatter(var_args){
var G__38251 = arguments.length;
switch (G__38251) {
case 1:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1(fmt);
}));

(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2(fmt,locale);
}));

(tick.alpha.api.formatter.cljs$lang$maxFixedArity = 2);

/**
 * Return whether the provided value `v` is a clock
 */
tick.alpha.api.clock_QMARK_ = (function tick$alpha$api$clock_QMARK_(v){
return tick.core.clock_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a day of the week
 */
tick.alpha.api.day_of_week_QMARK_ = (function tick$alpha$api$day_of_week_QMARK_(v){
return tick.core.day_of_week_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a duration
 */
tick.alpha.api.duration_QMARK_ = (function tick$alpha$api$duration_QMARK_(v){
return tick.core.duration_QMARK_(v);
});
/**
 * Return whether the provided value `v` is an instant
 */
tick.alpha.api.instant_QMARK_ = (function tick$alpha$api$instant_QMARK_(v){
return tick.core.instant_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a date
 */
tick.alpha.api.date_QMARK_ = (function tick$alpha$api$date_QMARK_(v){
return tick.core.date_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a date time
 */
tick.alpha.api.date_time_QMARK_ = (function tick$alpha$api$date_time_QMARK_(v){
return tick.core.date_time_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a time
 */
tick.alpha.api.time_QMARK_ = (function tick$alpha$api$time_QMARK_(v){
return tick.core.time_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a month
 */
tick.alpha.api.month_QMARK_ = (function tick$alpha$api$month_QMARK_(v){
return tick.core.month_QMARK_(v);
});
/**
 * Return whether the provided value `v` is an offset date time
 */
tick.alpha.api.offset_date_time_QMARK_ = (function tick$alpha$api$offset_date_time_QMARK_(v){
return tick.core.offset_date_time_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a period
 */
tick.alpha.api.period_QMARK_ = (function tick$alpha$api$period_QMARK_(v){
return tick.core.period_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a year
 */
tick.alpha.api.year_QMARK_ = (function tick$alpha$api$year_QMARK_(v){
return tick.core.year_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a year month
 */
tick.alpha.api.year_month_QMARK_ = (function tick$alpha$api$year_month_QMARK_(v){
return tick.core.year_month_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a zone time zone
 */
tick.alpha.api.zone_QMARK_ = (function tick$alpha$api$zone_QMARK_(v){
return tick.core.zone_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a zone offset
 */
tick.alpha.api.zone_offset_QMARK_ = (function tick$alpha$api$zone_offset_QMARK_(v){
return tick.core.zone_offset_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a zoned date time
 */
tick.alpha.api.zoned_date_time_QMARK_ = (function tick$alpha$api$zoned_date_time_QMARK_(v){
return tick.core.zoned_date_time_QMARK_(v);
});
/**
 * Return whether the provided value `v` is an interval
 */
tick.alpha.api.interval_QMARK_ = (function tick$alpha$api$interval_QMARK_(v){
return tick.core.interval_QMARK_(v);
});

//# sourceMappingURL=tick.alpha.api.js.map
