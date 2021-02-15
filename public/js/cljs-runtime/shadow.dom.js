goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33323 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33323(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33328 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33328(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32052 = coll;
var G__32053 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32052,G__32053) : shadow.dom.lazy_native_coll_seq.call(null,G__32052,G__32053));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32118 = arguments.length;
switch (G__32118) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32131 = arguments.length;
switch (G__32131) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32140 = arguments.length;
switch (G__32140) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32143 = arguments.length;
switch (G__32143) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32154 = arguments.length;
switch (G__32154) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32184 = arguments.length;
switch (G__32184) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32189){if((e32189 instanceof Object)){
var e = e32189;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32189;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32198 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32199 = null;
var count__32200 = (0);
var i__32201 = (0);
while(true){
if((i__32201 < count__32200)){
var el = chunk__32199.cljs$core$IIndexed$_nth$arity$2(null,i__32201);
var handler_33397__$1 = ((function (seq__32198,chunk__32199,count__32200,i__32201,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32198,chunk__32199,count__32200,i__32201,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33397__$1);


var G__33398 = seq__32198;
var G__33399 = chunk__32199;
var G__33400 = count__32200;
var G__33401 = (i__32201 + (1));
seq__32198 = G__33398;
chunk__32199 = G__33399;
count__32200 = G__33400;
i__32201 = G__33401;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32198);
if(temp__5735__auto__){
var seq__32198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32198__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32198__$1);
var G__33402 = cljs.core.chunk_rest(seq__32198__$1);
var G__33403 = c__4556__auto__;
var G__33404 = cljs.core.count(c__4556__auto__);
var G__33405 = (0);
seq__32198 = G__33402;
chunk__32199 = G__33403;
count__32200 = G__33404;
i__32201 = G__33405;
continue;
} else {
var el = cljs.core.first(seq__32198__$1);
var handler_33409__$1 = ((function (seq__32198,chunk__32199,count__32200,i__32201,el,seq__32198__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32198,chunk__32199,count__32200,i__32201,el,seq__32198__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33409__$1);


var G__33414 = cljs.core.next(seq__32198__$1);
var G__33415 = null;
var G__33416 = (0);
var G__33417 = (0);
seq__32198 = G__33414;
chunk__32199 = G__33415;
count__32200 = G__33416;
i__32201 = G__33417;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32230 = arguments.length;
switch (G__32230) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32242 = cljs.core.seq(events);
var chunk__32243 = null;
var count__32244 = (0);
var i__32245 = (0);
while(true){
if((i__32245 < count__32244)){
var vec__32261 = chunk__32243.cljs$core$IIndexed$_nth$arity$2(null,i__32245);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32261,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33448 = seq__32242;
var G__33449 = chunk__32243;
var G__33450 = count__32244;
var G__33451 = (i__32245 + (1));
seq__32242 = G__33448;
chunk__32243 = G__33449;
count__32244 = G__33450;
i__32245 = G__33451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32242);
if(temp__5735__auto__){
var seq__32242__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32242__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32242__$1);
var G__33458 = cljs.core.chunk_rest(seq__32242__$1);
var G__33459 = c__4556__auto__;
var G__33460 = cljs.core.count(c__4556__auto__);
var G__33461 = (0);
seq__32242 = G__33458;
chunk__32243 = G__33459;
count__32244 = G__33460;
i__32245 = G__33461;
continue;
} else {
var vec__32273 = cljs.core.first(seq__32242__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32273,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33464 = cljs.core.next(seq__32242__$1);
var G__33465 = null;
var G__33466 = (0);
var G__33467 = (0);
seq__32242 = G__33464;
chunk__32243 = G__33465;
count__32244 = G__33466;
i__32245 = G__33467;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32282 = cljs.core.seq(styles);
var chunk__32283 = null;
var count__32284 = (0);
var i__32285 = (0);
while(true){
if((i__32285 < count__32284)){
var vec__32305 = chunk__32283.cljs$core$IIndexed$_nth$arity$2(null,i__32285);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32305,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33481 = seq__32282;
var G__33482 = chunk__32283;
var G__33483 = count__32284;
var G__33484 = (i__32285 + (1));
seq__32282 = G__33481;
chunk__32283 = G__33482;
count__32284 = G__33483;
i__32285 = G__33484;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32282);
if(temp__5735__auto__){
var seq__32282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32282__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32282__$1);
var G__33487 = cljs.core.chunk_rest(seq__32282__$1);
var G__33488 = c__4556__auto__;
var G__33489 = cljs.core.count(c__4556__auto__);
var G__33490 = (0);
seq__32282 = G__33487;
chunk__32283 = G__33488;
count__32284 = G__33489;
i__32285 = G__33490;
continue;
} else {
var vec__32313 = cljs.core.first(seq__32282__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32313,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33498 = cljs.core.next(seq__32282__$1);
var G__33499 = null;
var G__33500 = (0);
var G__33501 = (0);
seq__32282 = G__33498;
chunk__32283 = G__33499;
count__32284 = G__33500;
i__32285 = G__33501;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32326_33508 = key;
var G__32326_33509__$1 = (((G__32326_33508 instanceof cljs.core.Keyword))?G__32326_33508.fqn:null);
switch (G__32326_33509__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33532 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33532,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33532,"aria-");
}
})())){
el.setAttribute(ks_33532,value);
} else {
(el[ks_33532] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32361){
var map__32362 = p__32361;
var map__32362__$1 = (((((!((map__32362 == null))))?(((((map__32362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32362):map__32362);
var props = map__32362__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32362__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32370 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32376 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32376,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32376;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32384 = arguments.length;
switch (G__32384) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32400){
var vec__32401 = p__32400;
var seq__32402 = cljs.core.seq(vec__32401);
var first__32403 = cljs.core.first(seq__32402);
var seq__32402__$1 = cljs.core.next(seq__32402);
var nn = first__32403;
var first__32403__$1 = cljs.core.first(seq__32402__$1);
var seq__32402__$2 = cljs.core.next(seq__32402__$1);
var np = first__32403__$1;
var nc = seq__32402__$2;
var node = vec__32401;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32406 = nn;
var G__32407 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32406,G__32407) : create_fn.call(null,G__32406,G__32407));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32414 = nn;
var G__32415 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32414,G__32415) : create_fn.call(null,G__32414,G__32415));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32420 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32420,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32420,(1),null);
var seq__32423_33611 = cljs.core.seq(node_children);
var chunk__32424_33612 = null;
var count__32425_33613 = (0);
var i__32426_33614 = (0);
while(true){
if((i__32426_33614 < count__32425_33613)){
var child_struct_33615 = chunk__32424_33612.cljs$core$IIndexed$_nth$arity$2(null,i__32426_33614);
var children_33616 = shadow.dom.dom_node(child_struct_33615);
if(cljs.core.seq_QMARK_(children_33616)){
var seq__32500_33618 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33616));
var chunk__32502_33620 = null;
var count__32503_33621 = (0);
var i__32504_33622 = (0);
while(true){
if((i__32504_33622 < count__32503_33621)){
var child_33624 = chunk__32502_33620.cljs$core$IIndexed$_nth$arity$2(null,i__32504_33622);
if(cljs.core.truth_(child_33624)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33624);


var G__33627 = seq__32500_33618;
var G__33628 = chunk__32502_33620;
var G__33629 = count__32503_33621;
var G__33630 = (i__32504_33622 + (1));
seq__32500_33618 = G__33627;
chunk__32502_33620 = G__33628;
count__32503_33621 = G__33629;
i__32504_33622 = G__33630;
continue;
} else {
var G__33635 = seq__32500_33618;
var G__33636 = chunk__32502_33620;
var G__33637 = count__32503_33621;
var G__33638 = (i__32504_33622 + (1));
seq__32500_33618 = G__33635;
chunk__32502_33620 = G__33636;
count__32503_33621 = G__33637;
i__32504_33622 = G__33638;
continue;
}
} else {
var temp__5735__auto___33640 = cljs.core.seq(seq__32500_33618);
if(temp__5735__auto___33640){
var seq__32500_33641__$1 = temp__5735__auto___33640;
if(cljs.core.chunked_seq_QMARK_(seq__32500_33641__$1)){
var c__4556__auto___33642 = cljs.core.chunk_first(seq__32500_33641__$1);
var G__33643 = cljs.core.chunk_rest(seq__32500_33641__$1);
var G__33644 = c__4556__auto___33642;
var G__33645 = cljs.core.count(c__4556__auto___33642);
var G__33646 = (0);
seq__32500_33618 = G__33643;
chunk__32502_33620 = G__33644;
count__32503_33621 = G__33645;
i__32504_33622 = G__33646;
continue;
} else {
var child_33647 = cljs.core.first(seq__32500_33641__$1);
if(cljs.core.truth_(child_33647)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33647);


var G__33649 = cljs.core.next(seq__32500_33641__$1);
var G__33650 = null;
var G__33651 = (0);
var G__33652 = (0);
seq__32500_33618 = G__33649;
chunk__32502_33620 = G__33650;
count__32503_33621 = G__33651;
i__32504_33622 = G__33652;
continue;
} else {
var G__33655 = cljs.core.next(seq__32500_33641__$1);
var G__33656 = null;
var G__33657 = (0);
var G__33658 = (0);
seq__32500_33618 = G__33655;
chunk__32502_33620 = G__33656;
count__32503_33621 = G__33657;
i__32504_33622 = G__33658;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33616);
}


var G__33661 = seq__32423_33611;
var G__33662 = chunk__32424_33612;
var G__33663 = count__32425_33613;
var G__33664 = (i__32426_33614 + (1));
seq__32423_33611 = G__33661;
chunk__32424_33612 = G__33662;
count__32425_33613 = G__33663;
i__32426_33614 = G__33664;
continue;
} else {
var temp__5735__auto___33668 = cljs.core.seq(seq__32423_33611);
if(temp__5735__auto___33668){
var seq__32423_33669__$1 = temp__5735__auto___33668;
if(cljs.core.chunked_seq_QMARK_(seq__32423_33669__$1)){
var c__4556__auto___33671 = cljs.core.chunk_first(seq__32423_33669__$1);
var G__33673 = cljs.core.chunk_rest(seq__32423_33669__$1);
var G__33674 = c__4556__auto___33671;
var G__33675 = cljs.core.count(c__4556__auto___33671);
var G__33676 = (0);
seq__32423_33611 = G__33673;
chunk__32424_33612 = G__33674;
count__32425_33613 = G__33675;
i__32426_33614 = G__33676;
continue;
} else {
var child_struct_33678 = cljs.core.first(seq__32423_33669__$1);
var children_33681 = shadow.dom.dom_node(child_struct_33678);
if(cljs.core.seq_QMARK_(children_33681)){
var seq__32522_33682 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33681));
var chunk__32525_33683 = null;
var count__32526_33684 = (0);
var i__32527_33685 = (0);
while(true){
if((i__32527_33685 < count__32526_33684)){
var child_33688 = chunk__32525_33683.cljs$core$IIndexed$_nth$arity$2(null,i__32527_33685);
if(cljs.core.truth_(child_33688)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33688);


var G__33689 = seq__32522_33682;
var G__33690 = chunk__32525_33683;
var G__33691 = count__32526_33684;
var G__33692 = (i__32527_33685 + (1));
seq__32522_33682 = G__33689;
chunk__32525_33683 = G__33690;
count__32526_33684 = G__33691;
i__32527_33685 = G__33692;
continue;
} else {
var G__33693 = seq__32522_33682;
var G__33694 = chunk__32525_33683;
var G__33695 = count__32526_33684;
var G__33696 = (i__32527_33685 + (1));
seq__32522_33682 = G__33693;
chunk__32525_33683 = G__33694;
count__32526_33684 = G__33695;
i__32527_33685 = G__33696;
continue;
}
} else {
var temp__5735__auto___33698__$1 = cljs.core.seq(seq__32522_33682);
if(temp__5735__auto___33698__$1){
var seq__32522_33699__$1 = temp__5735__auto___33698__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32522_33699__$1)){
var c__4556__auto___33701 = cljs.core.chunk_first(seq__32522_33699__$1);
var G__33702 = cljs.core.chunk_rest(seq__32522_33699__$1);
var G__33703 = c__4556__auto___33701;
var G__33704 = cljs.core.count(c__4556__auto___33701);
var G__33705 = (0);
seq__32522_33682 = G__33702;
chunk__32525_33683 = G__33703;
count__32526_33684 = G__33704;
i__32527_33685 = G__33705;
continue;
} else {
var child_33707 = cljs.core.first(seq__32522_33699__$1);
if(cljs.core.truth_(child_33707)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33707);


var G__33708 = cljs.core.next(seq__32522_33699__$1);
var G__33709 = null;
var G__33710 = (0);
var G__33711 = (0);
seq__32522_33682 = G__33708;
chunk__32525_33683 = G__33709;
count__32526_33684 = G__33710;
i__32527_33685 = G__33711;
continue;
} else {
var G__33713 = cljs.core.next(seq__32522_33699__$1);
var G__33714 = null;
var G__33715 = (0);
var G__33716 = (0);
seq__32522_33682 = G__33713;
chunk__32525_33683 = G__33714;
count__32526_33684 = G__33715;
i__32527_33685 = G__33716;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33681);
}


var G__33718 = cljs.core.next(seq__32423_33669__$1);
var G__33719 = null;
var G__33720 = (0);
var G__33721 = (0);
seq__32423_33611 = G__33718;
chunk__32424_33612 = G__33719;
count__32425_33613 = G__33720;
i__32426_33614 = G__33721;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32552 = cljs.core.seq(node);
var chunk__32553 = null;
var count__32554 = (0);
var i__32555 = (0);
while(true){
if((i__32555 < count__32554)){
var n = chunk__32553.cljs$core$IIndexed$_nth$arity$2(null,i__32555);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33731 = seq__32552;
var G__33732 = chunk__32553;
var G__33733 = count__32554;
var G__33734 = (i__32555 + (1));
seq__32552 = G__33731;
chunk__32553 = G__33732;
count__32554 = G__33733;
i__32555 = G__33734;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32552);
if(temp__5735__auto__){
var seq__32552__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32552__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32552__$1);
var G__33735 = cljs.core.chunk_rest(seq__32552__$1);
var G__33736 = c__4556__auto__;
var G__33737 = cljs.core.count(c__4556__auto__);
var G__33738 = (0);
seq__32552 = G__33735;
chunk__32553 = G__33736;
count__32554 = G__33737;
i__32555 = G__33738;
continue;
} else {
var n = cljs.core.first(seq__32552__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33747 = cljs.core.next(seq__32552__$1);
var G__33748 = null;
var G__33749 = (0);
var G__33750 = (0);
seq__32552 = G__33747;
chunk__32553 = G__33748;
count__32554 = G__33749;
i__32555 = G__33750;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32573 = arguments.length;
switch (G__32573) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32586 = arguments.length;
switch (G__32586) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32605 = arguments.length;
switch (G__32605) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33771 = arguments.length;
var i__4737__auto___33772 = (0);
while(true){
if((i__4737__auto___33772 < len__4736__auto___33771)){
args__4742__auto__.push((arguments[i__4737__auto___33772]));

var G__33773 = (i__4737__auto___33772 + (1));
i__4737__auto___33772 = G__33773;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32657_33776 = cljs.core.seq(nodes);
var chunk__32658_33777 = null;
var count__32659_33778 = (0);
var i__32660_33779 = (0);
while(true){
if((i__32660_33779 < count__32659_33778)){
var node_33781 = chunk__32658_33777.cljs$core$IIndexed$_nth$arity$2(null,i__32660_33779);
fragment.appendChild(shadow.dom._to_dom(node_33781));


var G__33786 = seq__32657_33776;
var G__33787 = chunk__32658_33777;
var G__33788 = count__32659_33778;
var G__33789 = (i__32660_33779 + (1));
seq__32657_33776 = G__33786;
chunk__32658_33777 = G__33787;
count__32659_33778 = G__33788;
i__32660_33779 = G__33789;
continue;
} else {
var temp__5735__auto___33791 = cljs.core.seq(seq__32657_33776);
if(temp__5735__auto___33791){
var seq__32657_33794__$1 = temp__5735__auto___33791;
if(cljs.core.chunked_seq_QMARK_(seq__32657_33794__$1)){
var c__4556__auto___33797 = cljs.core.chunk_first(seq__32657_33794__$1);
var G__33802 = cljs.core.chunk_rest(seq__32657_33794__$1);
var G__33803 = c__4556__auto___33797;
var G__33804 = cljs.core.count(c__4556__auto___33797);
var G__33805 = (0);
seq__32657_33776 = G__33802;
chunk__32658_33777 = G__33803;
count__32659_33778 = G__33804;
i__32660_33779 = G__33805;
continue;
} else {
var node_33807 = cljs.core.first(seq__32657_33794__$1);
fragment.appendChild(shadow.dom._to_dom(node_33807));


var G__33812 = cljs.core.next(seq__32657_33794__$1);
var G__33813 = null;
var G__33814 = (0);
var G__33815 = (0);
seq__32657_33776 = G__33812;
chunk__32658_33777 = G__33813;
count__32659_33778 = G__33814;
i__32660_33779 = G__33815;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32641){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32641));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32690_33822 = cljs.core.seq(scripts);
var chunk__32691_33823 = null;
var count__32692_33824 = (0);
var i__32693_33825 = (0);
while(true){
if((i__32693_33825 < count__32692_33824)){
var vec__32711_33827 = chunk__32691_33823.cljs$core$IIndexed$_nth$arity$2(null,i__32693_33825);
var script_tag_33828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32711_33827,(0),null);
var script_body_33829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32711_33827,(1),null);
eval(script_body_33829);


var G__33830 = seq__32690_33822;
var G__33831 = chunk__32691_33823;
var G__33832 = count__32692_33824;
var G__33833 = (i__32693_33825 + (1));
seq__32690_33822 = G__33830;
chunk__32691_33823 = G__33831;
count__32692_33824 = G__33832;
i__32693_33825 = G__33833;
continue;
} else {
var temp__5735__auto___33835 = cljs.core.seq(seq__32690_33822);
if(temp__5735__auto___33835){
var seq__32690_33836__$1 = temp__5735__auto___33835;
if(cljs.core.chunked_seq_QMARK_(seq__32690_33836__$1)){
var c__4556__auto___33837 = cljs.core.chunk_first(seq__32690_33836__$1);
var G__33838 = cljs.core.chunk_rest(seq__32690_33836__$1);
var G__33839 = c__4556__auto___33837;
var G__33840 = cljs.core.count(c__4556__auto___33837);
var G__33841 = (0);
seq__32690_33822 = G__33838;
chunk__32691_33823 = G__33839;
count__32692_33824 = G__33840;
i__32693_33825 = G__33841;
continue;
} else {
var vec__32722_33844 = cljs.core.first(seq__32690_33836__$1);
var script_tag_33845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722_33844,(0),null);
var script_body_33846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722_33844,(1),null);
eval(script_body_33846);


var G__33848 = cljs.core.next(seq__32690_33836__$1);
var G__33849 = null;
var G__33850 = (0);
var G__33851 = (0);
seq__32690_33822 = G__33848;
chunk__32691_33823 = G__33849;
count__32692_33824 = G__33850;
i__32693_33825 = G__33851;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32725){
var vec__32726 = p__32725;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32726,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32726,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32740 = arguments.length;
switch (G__32740) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32785 = cljs.core.seq(style_keys);
var chunk__32786 = null;
var count__32787 = (0);
var i__32788 = (0);
while(true){
if((i__32788 < count__32787)){
var it = chunk__32786.cljs$core$IIndexed$_nth$arity$2(null,i__32788);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33866 = seq__32785;
var G__33867 = chunk__32786;
var G__33868 = count__32787;
var G__33869 = (i__32788 + (1));
seq__32785 = G__33866;
chunk__32786 = G__33867;
count__32787 = G__33868;
i__32788 = G__33869;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32785);
if(temp__5735__auto__){
var seq__32785__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32785__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32785__$1);
var G__33874 = cljs.core.chunk_rest(seq__32785__$1);
var G__33875 = c__4556__auto__;
var G__33876 = cljs.core.count(c__4556__auto__);
var G__33877 = (0);
seq__32785 = G__33874;
chunk__32786 = G__33875;
count__32787 = G__33876;
i__32788 = G__33877;
continue;
} else {
var it = cljs.core.first(seq__32785__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33878 = cljs.core.next(seq__32785__$1);
var G__33879 = null;
var G__33880 = (0);
var G__33881 = (0);
seq__32785 = G__33878;
chunk__32786 = G__33879;
count__32787 = G__33880;
i__32788 = G__33881;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32792,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32798 = k32792;
var G__32798__$1 = (((G__32798 instanceof cljs.core.Keyword))?G__32798.fqn:null);
switch (G__32798__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32792,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32799){
var vec__32800 = p__32799;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32800,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32800,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32791){
var self__ = this;
var G__32791__$1 = this;
return (new cljs.core.RecordIter((0),G__32791__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32793,other32794){
var self__ = this;
var this32793__$1 = this;
return (((!((other32794 == null)))) && ((this32793__$1.constructor === other32794.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32793__$1.x,other32794.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32793__$1.y,other32794.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32793__$1.__extmap,other32794.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32791){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32829 = cljs.core.keyword_identical_QMARK_;
var expr__32830 = k__4388__auto__;
if(cljs.core.truth_((pred__32829.cljs$core$IFn$_invoke$arity$2 ? pred__32829.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32830) : pred__32829.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32830)))){
return (new shadow.dom.Coordinate(G__32791,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32829.cljs$core$IFn$_invoke$arity$2 ? pred__32829.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32830) : pred__32829.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32830)))){
return (new shadow.dom.Coordinate(self__.x,G__32791,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32791),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32791){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32791,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32795){
var extmap__4419__auto__ = (function (){var G__32847 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32795,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32795)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32847);
} else {
return G__32847;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32795),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32795),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32878,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32893 = k32878;
var G__32893__$1 = (((G__32893 instanceof cljs.core.Keyword))?G__32893.fqn:null);
switch (G__32893__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32878,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32898){
var vec__32899 = p__32898;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32899,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32899,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32877){
var self__ = this;
var G__32877__$1 = this;
return (new cljs.core.RecordIter((0),G__32877__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32879,other32880){
var self__ = this;
var this32879__$1 = this;
return (((!((other32880 == null)))) && ((this32879__$1.constructor === other32880.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32879__$1.w,other32880.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32879__$1.h,other32880.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32879__$1.__extmap,other32880.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32877){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32920 = cljs.core.keyword_identical_QMARK_;
var expr__32921 = k__4388__auto__;
if(cljs.core.truth_((pred__32920.cljs$core$IFn$_invoke$arity$2 ? pred__32920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32921) : pred__32920.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32921)))){
return (new shadow.dom.Size(G__32877,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32920.cljs$core$IFn$_invoke$arity$2 ? pred__32920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32921) : pred__32920.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32921)))){
return (new shadow.dom.Size(self__.w,G__32877,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32877),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32877){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32877,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32882){
var extmap__4419__auto__ = (function (){var G__32930 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32882,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32882)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32930);
} else {
return G__32930;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32882),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32882),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33934 = (i + (1));
var G__33935 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33934;
ret = G__33935;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32955){
var vec__32956 = p__32955;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32964 = arguments.length;
switch (G__32964) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33948 = ps;
var G__33949 = (i + (1));
el__$1 = G__33948;
i = G__33949;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33035 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33035,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33035,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33035,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33041_33951 = cljs.core.seq(props);
var chunk__33042_33952 = null;
var count__33043_33953 = (0);
var i__33044_33954 = (0);
while(true){
if((i__33044_33954 < count__33043_33953)){
var vec__33067_33955 = chunk__33042_33952.cljs$core$IIndexed$_nth$arity$2(null,i__33044_33954);
var k_33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33067_33955,(0),null);
var v_33957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33067_33955,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33956);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33956),v_33957);


var G__33958 = seq__33041_33951;
var G__33959 = chunk__33042_33952;
var G__33960 = count__33043_33953;
var G__33961 = (i__33044_33954 + (1));
seq__33041_33951 = G__33958;
chunk__33042_33952 = G__33959;
count__33043_33953 = G__33960;
i__33044_33954 = G__33961;
continue;
} else {
var temp__5735__auto___33962 = cljs.core.seq(seq__33041_33951);
if(temp__5735__auto___33962){
var seq__33041_33963__$1 = temp__5735__auto___33962;
if(cljs.core.chunked_seq_QMARK_(seq__33041_33963__$1)){
var c__4556__auto___33966 = cljs.core.chunk_first(seq__33041_33963__$1);
var G__33967 = cljs.core.chunk_rest(seq__33041_33963__$1);
var G__33968 = c__4556__auto___33966;
var G__33969 = cljs.core.count(c__4556__auto___33966);
var G__33970 = (0);
seq__33041_33951 = G__33967;
chunk__33042_33952 = G__33968;
count__33043_33953 = G__33969;
i__33044_33954 = G__33970;
continue;
} else {
var vec__33076_33971 = cljs.core.first(seq__33041_33963__$1);
var k_33972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33076_33971,(0),null);
var v_33973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33076_33971,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33972);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33972),v_33973);


var G__33977 = cljs.core.next(seq__33041_33963__$1);
var G__33978 = null;
var G__33979 = (0);
var G__33980 = (0);
seq__33041_33951 = G__33977;
chunk__33042_33952 = G__33978;
count__33043_33953 = G__33979;
i__33044_33954 = G__33980;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33096 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33096,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33096,(1),null);
var seq__33100_33982 = cljs.core.seq(node_children);
var chunk__33103_33983 = null;
var count__33104_33984 = (0);
var i__33105_33985 = (0);
while(true){
if((i__33105_33985 < count__33104_33984)){
var child_struct_33986 = chunk__33103_33983.cljs$core$IIndexed$_nth$arity$2(null,i__33105_33985);
if((!((child_struct_33986 == null)))){
if(typeof child_struct_33986 === 'string'){
var text_33990 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33990),child_struct_33986].join(''));
} else {
var children_33997 = shadow.dom.svg_node(child_struct_33986);
if(cljs.core.seq_QMARK_(children_33997)){
var seq__33185_33998 = cljs.core.seq(children_33997);
var chunk__33187_33999 = null;
var count__33188_34000 = (0);
var i__33189_34001 = (0);
while(true){
if((i__33189_34001 < count__33188_34000)){
var child_34002 = chunk__33187_33999.cljs$core$IIndexed$_nth$arity$2(null,i__33189_34001);
if(cljs.core.truth_(child_34002)){
node.appendChild(child_34002);


var G__34003 = seq__33185_33998;
var G__34004 = chunk__33187_33999;
var G__34005 = count__33188_34000;
var G__34006 = (i__33189_34001 + (1));
seq__33185_33998 = G__34003;
chunk__33187_33999 = G__34004;
count__33188_34000 = G__34005;
i__33189_34001 = G__34006;
continue;
} else {
var G__34008 = seq__33185_33998;
var G__34009 = chunk__33187_33999;
var G__34010 = count__33188_34000;
var G__34011 = (i__33189_34001 + (1));
seq__33185_33998 = G__34008;
chunk__33187_33999 = G__34009;
count__33188_34000 = G__34010;
i__33189_34001 = G__34011;
continue;
}
} else {
var temp__5735__auto___34012 = cljs.core.seq(seq__33185_33998);
if(temp__5735__auto___34012){
var seq__33185_34013__$1 = temp__5735__auto___34012;
if(cljs.core.chunked_seq_QMARK_(seq__33185_34013__$1)){
var c__4556__auto___34015 = cljs.core.chunk_first(seq__33185_34013__$1);
var G__34016 = cljs.core.chunk_rest(seq__33185_34013__$1);
var G__34017 = c__4556__auto___34015;
var G__34018 = cljs.core.count(c__4556__auto___34015);
var G__34019 = (0);
seq__33185_33998 = G__34016;
chunk__33187_33999 = G__34017;
count__33188_34000 = G__34018;
i__33189_34001 = G__34019;
continue;
} else {
var child_34020 = cljs.core.first(seq__33185_34013__$1);
if(cljs.core.truth_(child_34020)){
node.appendChild(child_34020);


var G__34021 = cljs.core.next(seq__33185_34013__$1);
var G__34022 = null;
var G__34023 = (0);
var G__34024 = (0);
seq__33185_33998 = G__34021;
chunk__33187_33999 = G__34022;
count__33188_34000 = G__34023;
i__33189_34001 = G__34024;
continue;
} else {
var G__34025 = cljs.core.next(seq__33185_34013__$1);
var G__34026 = null;
var G__34027 = (0);
var G__34028 = (0);
seq__33185_33998 = G__34025;
chunk__33187_33999 = G__34026;
count__33188_34000 = G__34027;
i__33189_34001 = G__34028;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33997);
}
}


var G__34030 = seq__33100_33982;
var G__34031 = chunk__33103_33983;
var G__34032 = count__33104_33984;
var G__34033 = (i__33105_33985 + (1));
seq__33100_33982 = G__34030;
chunk__33103_33983 = G__34031;
count__33104_33984 = G__34032;
i__33105_33985 = G__34033;
continue;
} else {
var G__34040 = seq__33100_33982;
var G__34041 = chunk__33103_33983;
var G__34042 = count__33104_33984;
var G__34043 = (i__33105_33985 + (1));
seq__33100_33982 = G__34040;
chunk__33103_33983 = G__34041;
count__33104_33984 = G__34042;
i__33105_33985 = G__34043;
continue;
}
} else {
var temp__5735__auto___34045 = cljs.core.seq(seq__33100_33982);
if(temp__5735__auto___34045){
var seq__33100_34046__$1 = temp__5735__auto___34045;
if(cljs.core.chunked_seq_QMARK_(seq__33100_34046__$1)){
var c__4556__auto___34049 = cljs.core.chunk_first(seq__33100_34046__$1);
var G__34050 = cljs.core.chunk_rest(seq__33100_34046__$1);
var G__34051 = c__4556__auto___34049;
var G__34052 = cljs.core.count(c__4556__auto___34049);
var G__34053 = (0);
seq__33100_33982 = G__34050;
chunk__33103_33983 = G__34051;
count__33104_33984 = G__34052;
i__33105_33985 = G__34053;
continue;
} else {
var child_struct_34055 = cljs.core.first(seq__33100_34046__$1);
if((!((child_struct_34055 == null)))){
if(typeof child_struct_34055 === 'string'){
var text_34056 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34056),child_struct_34055].join(''));
} else {
var children_34057 = shadow.dom.svg_node(child_struct_34055);
if(cljs.core.seq_QMARK_(children_34057)){
var seq__33209_34060 = cljs.core.seq(children_34057);
var chunk__33211_34061 = null;
var count__33212_34062 = (0);
var i__33213_34063 = (0);
while(true){
if((i__33213_34063 < count__33212_34062)){
var child_34067 = chunk__33211_34061.cljs$core$IIndexed$_nth$arity$2(null,i__33213_34063);
if(cljs.core.truth_(child_34067)){
node.appendChild(child_34067);


var G__34068 = seq__33209_34060;
var G__34069 = chunk__33211_34061;
var G__34070 = count__33212_34062;
var G__34071 = (i__33213_34063 + (1));
seq__33209_34060 = G__34068;
chunk__33211_34061 = G__34069;
count__33212_34062 = G__34070;
i__33213_34063 = G__34071;
continue;
} else {
var G__34072 = seq__33209_34060;
var G__34073 = chunk__33211_34061;
var G__34074 = count__33212_34062;
var G__34075 = (i__33213_34063 + (1));
seq__33209_34060 = G__34072;
chunk__33211_34061 = G__34073;
count__33212_34062 = G__34074;
i__33213_34063 = G__34075;
continue;
}
} else {
var temp__5735__auto___34076__$1 = cljs.core.seq(seq__33209_34060);
if(temp__5735__auto___34076__$1){
var seq__33209_34077__$1 = temp__5735__auto___34076__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33209_34077__$1)){
var c__4556__auto___34080 = cljs.core.chunk_first(seq__33209_34077__$1);
var G__34082 = cljs.core.chunk_rest(seq__33209_34077__$1);
var G__34083 = c__4556__auto___34080;
var G__34084 = cljs.core.count(c__4556__auto___34080);
var G__34085 = (0);
seq__33209_34060 = G__34082;
chunk__33211_34061 = G__34083;
count__33212_34062 = G__34084;
i__33213_34063 = G__34085;
continue;
} else {
var child_34087 = cljs.core.first(seq__33209_34077__$1);
if(cljs.core.truth_(child_34087)){
node.appendChild(child_34087);


var G__34088 = cljs.core.next(seq__33209_34077__$1);
var G__34089 = null;
var G__34090 = (0);
var G__34091 = (0);
seq__33209_34060 = G__34088;
chunk__33211_34061 = G__34089;
count__33212_34062 = G__34090;
i__33213_34063 = G__34091;
continue;
} else {
var G__34092 = cljs.core.next(seq__33209_34077__$1);
var G__34093 = null;
var G__34094 = (0);
var G__34095 = (0);
seq__33209_34060 = G__34092;
chunk__33211_34061 = G__34093;
count__33212_34062 = G__34094;
i__33213_34063 = G__34095;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34057);
}
}


var G__34096 = cljs.core.next(seq__33100_34046__$1);
var G__34097 = null;
var G__34098 = (0);
var G__34099 = (0);
seq__33100_33982 = G__34096;
chunk__33103_33983 = G__34097;
count__33104_33984 = G__34098;
i__33105_33985 = G__34099;
continue;
} else {
var G__34101 = cljs.core.next(seq__33100_34046__$1);
var G__34102 = null;
var G__34103 = (0);
var G__34104 = (0);
seq__33100_33982 = G__34101;
chunk__33103_33983 = G__34102;
count__33104_33984 = G__34103;
i__33105_33985 = G__34104;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34113 = arguments.length;
var i__4737__auto___34114 = (0);
while(true){
if((i__4737__auto___34114 < len__4736__auto___34113)){
args__4742__auto__.push((arguments[i__4737__auto___34114]));

var G__34117 = (i__4737__auto___34114 + (1));
i__4737__auto___34114 = G__34117;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33243){
var G__33244 = cljs.core.first(seq33243);
var seq33243__$1 = cljs.core.next(seq33243);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33244,seq33243__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33255 = arguments.length;
switch (G__33255) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__28476__auto___34129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28477__auto__ = (function (){var switch__28303__auto__ = (function (state_33276){
var state_val_33277 = (state_33276[(1)]);
if((state_val_33277 === (1))){
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33276__$1,(2),once_or_cleanup);
} else {
if((state_val_33277 === (2))){
var inst_33272 = (state_33276[(2)]);
var inst_33274 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33276__$1 = (function (){var statearr_33284 = state_33276;
(statearr_33284[(7)] = inst_33272);

return statearr_33284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33276__$1,inst_33274);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28304__auto__ = null;
var shadow$dom$state_machine__28304__auto____0 = (function (){
var statearr_33289 = [null,null,null,null,null,null,null,null];
(statearr_33289[(0)] = shadow$dom$state_machine__28304__auto__);

(statearr_33289[(1)] = (1));

return statearr_33289;
});
var shadow$dom$state_machine__28304__auto____1 = (function (state_33276){
while(true){
var ret_value__28305__auto__ = (function (){try{while(true){
var result__28306__auto__ = switch__28303__auto__(state_33276);
if(cljs.core.keyword_identical_QMARK_(result__28306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28306__auto__;
}
break;
}
}catch (e33294){var ex__28307__auto__ = e33294;
var statearr_33295_34134 = state_33276;
(statearr_33295_34134[(2)] = ex__28307__auto__);


if(cljs.core.seq((state_33276[(4)]))){
var statearr_33296_34135 = state_33276;
(statearr_33296_34135[(1)] = cljs.core.first((state_33276[(4)])));

} else {
throw ex__28307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34136 = state_33276;
state_33276 = G__34136;
continue;
} else {
return ret_value__28305__auto__;
}
break;
}
});
shadow$dom$state_machine__28304__auto__ = function(state_33276){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28304__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28304__auto____1.call(this,state_33276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28304__auto____0;
shadow$dom$state_machine__28304__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28304__auto____1;
return shadow$dom$state_machine__28304__auto__;
})()
})();
var state__28478__auto__ = (function (){var statearr_33298 = f__28477__auto__();
(statearr_33298[(6)] = c__28476__auto___34129);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28478__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
