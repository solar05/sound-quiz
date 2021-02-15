goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35611 = arguments.length;
var i__4737__auto___35612 = (0);
while(true){
if((i__4737__auto___35612 < len__4736__auto___35611)){
args__4742__auto__.push((arguments[i__4737__auto___35612]));

var G__35613 = (i__4737__auto___35612 + (1));
i__4737__auto___35612 = G__35613;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35421){
var G__35422 = cljs.core.first(seq35421);
var seq35421__$1 = cljs.core.next(seq35421);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35422,seq35421__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35435 = cljs.core.seq(sources);
var chunk__35436 = null;
var count__35437 = (0);
var i__35438 = (0);
while(true){
if((i__35438 < count__35437)){
var map__35445 = chunk__35436.cljs$core$IIndexed$_nth$arity$2(null,i__35438);
var map__35445__$1 = (((((!((map__35445 == null))))?(((((map__35445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35445):map__35445);
var src = map__35445__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35450){var e_35614 = e35450;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35614);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35614.message)].join('')));
}

var G__35615 = seq__35435;
var G__35616 = chunk__35436;
var G__35617 = count__35437;
var G__35618 = (i__35438 + (1));
seq__35435 = G__35615;
chunk__35436 = G__35616;
count__35437 = G__35617;
i__35438 = G__35618;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35435);
if(temp__5735__auto__){
var seq__35435__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35435__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35435__$1);
var G__35619 = cljs.core.chunk_rest(seq__35435__$1);
var G__35620 = c__4556__auto__;
var G__35621 = cljs.core.count(c__4556__auto__);
var G__35622 = (0);
seq__35435 = G__35619;
chunk__35436 = G__35620;
count__35437 = G__35621;
i__35438 = G__35622;
continue;
} else {
var map__35451 = cljs.core.first(seq__35435__$1);
var map__35451__$1 = (((((!((map__35451 == null))))?(((((map__35451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35451):map__35451);
var src = map__35451__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35455){var e_35623 = e35455;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35623);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35623.message)].join('')));
}

var G__35624 = cljs.core.next(seq__35435__$1);
var G__35625 = null;
var G__35626 = (0);
var G__35627 = (0);
seq__35435 = G__35624;
chunk__35436 = G__35625;
count__35437 = G__35626;
i__35438 = G__35627;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35456 = cljs.core.seq(js_requires);
var chunk__35457 = null;
var count__35458 = (0);
var i__35459 = (0);
while(true){
if((i__35459 < count__35458)){
var js_ns = chunk__35457.cljs$core$IIndexed$_nth$arity$2(null,i__35459);
var require_str_35628 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35628);


var G__35629 = seq__35456;
var G__35630 = chunk__35457;
var G__35631 = count__35458;
var G__35632 = (i__35459 + (1));
seq__35456 = G__35629;
chunk__35457 = G__35630;
count__35458 = G__35631;
i__35459 = G__35632;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35456);
if(temp__5735__auto__){
var seq__35456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35456__$1);
var G__35633 = cljs.core.chunk_rest(seq__35456__$1);
var G__35634 = c__4556__auto__;
var G__35635 = cljs.core.count(c__4556__auto__);
var G__35636 = (0);
seq__35456 = G__35633;
chunk__35457 = G__35634;
count__35458 = G__35635;
i__35459 = G__35636;
continue;
} else {
var js_ns = cljs.core.first(seq__35456__$1);
var require_str_35637 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35637);


var G__35638 = cljs.core.next(seq__35456__$1);
var G__35639 = null;
var G__35640 = (0);
var G__35641 = (0);
seq__35456 = G__35638;
chunk__35457 = G__35639;
count__35458 = G__35640;
i__35459 = G__35641;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35461){
var map__35462 = p__35461;
var map__35462__$1 = (((((!((map__35462 == null))))?(((((map__35462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35462):map__35462);
var msg = map__35462__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35462__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35462__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35464(s__35465){
return (new cljs.core.LazySeq(null,(function (){
var s__35465__$1 = s__35465;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35465__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35471 = cljs.core.first(xs__6292__auto__);
var map__35471__$1 = (((((!((map__35471 == null))))?(((((map__35471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35471):map__35471);
var src = map__35471__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35465__$1,map__35471,map__35471__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35462,map__35462__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35464_$_iter__35466(s__35467){
return (new cljs.core.LazySeq(null,((function (s__35465__$1,map__35471,map__35471__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35462,map__35462__$1,msg,info,reload_info){
return (function (){
var s__35467__$1 = s__35467;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35467__$1);
if(temp__5735__auto____$1){
var s__35467__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35467__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35467__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35469 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35468 = (0);
while(true){
if((i__35468 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35468);
cljs.core.chunk_append(b__35469,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35642 = (i__35468 + (1));
i__35468 = G__35642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35469),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35464_$_iter__35466(cljs.core.chunk_rest(s__35467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35469),null);
}
} else {
var warning = cljs.core.first(s__35467__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35464_$_iter__35466(cljs.core.rest(s__35467__$2)));
}
} else {
return null;
}
break;
}
});})(s__35465__$1,map__35471,map__35471__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35462,map__35462__$1,msg,info,reload_info))
,null,null));
});})(s__35465__$1,map__35471,map__35471__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35462,map__35462__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35464(cljs.core.rest(s__35465__$1)));
} else {
var G__35643 = cljs.core.rest(s__35465__$1);
s__35465__$1 = G__35643;
continue;
}
} else {
var G__35644 = cljs.core.rest(s__35465__$1);
s__35465__$1 = G__35644;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35474_35645 = cljs.core.seq(warnings);
var chunk__35475_35646 = null;
var count__35476_35647 = (0);
var i__35477_35648 = (0);
while(true){
if((i__35477_35648 < count__35476_35647)){
var map__35482_35649 = chunk__35475_35646.cljs$core$IIndexed$_nth$arity$2(null,i__35477_35648);
var map__35482_35650__$1 = (((((!((map__35482_35649 == null))))?(((((map__35482_35649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35482_35649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35482_35649):map__35482_35649);
var w_35651 = map__35482_35650__$1;
var msg_35652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482_35650__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482_35650__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482_35650__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35482_35650__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35655)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35653),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35654),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35652__$1)].join(''));


var G__35656 = seq__35474_35645;
var G__35657 = chunk__35475_35646;
var G__35658 = count__35476_35647;
var G__35659 = (i__35477_35648 + (1));
seq__35474_35645 = G__35656;
chunk__35475_35646 = G__35657;
count__35476_35647 = G__35658;
i__35477_35648 = G__35659;
continue;
} else {
var temp__5735__auto___35660 = cljs.core.seq(seq__35474_35645);
if(temp__5735__auto___35660){
var seq__35474_35661__$1 = temp__5735__auto___35660;
if(cljs.core.chunked_seq_QMARK_(seq__35474_35661__$1)){
var c__4556__auto___35662 = cljs.core.chunk_first(seq__35474_35661__$1);
var G__35663 = cljs.core.chunk_rest(seq__35474_35661__$1);
var G__35664 = c__4556__auto___35662;
var G__35665 = cljs.core.count(c__4556__auto___35662);
var G__35666 = (0);
seq__35474_35645 = G__35663;
chunk__35475_35646 = G__35664;
count__35476_35647 = G__35665;
i__35477_35648 = G__35666;
continue;
} else {
var map__35484_35667 = cljs.core.first(seq__35474_35661__$1);
var map__35484_35668__$1 = (((((!((map__35484_35667 == null))))?(((((map__35484_35667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35484_35667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35484_35667):map__35484_35667);
var w_35669 = map__35484_35668__$1;
var msg_35670__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35484_35668__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35484_35668__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35484_35668__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35484_35668__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35673)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35671),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35672),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35670__$1)].join(''));


var G__35674 = cljs.core.next(seq__35474_35661__$1);
var G__35675 = null;
var G__35676 = (0);
var G__35677 = (0);
seq__35474_35645 = G__35674;
chunk__35475_35646 = G__35675;
count__35476_35647 = G__35676;
i__35477_35648 = G__35677;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35460_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35460_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35486){
var map__35487 = p__35486;
var map__35487__$1 = (((((!((map__35487 == null))))?(((((map__35487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35487):map__35487);
var msg = map__35487__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35487__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35489 = cljs.core.seq(updates);
var chunk__35491 = null;
var count__35492 = (0);
var i__35493 = (0);
while(true){
if((i__35493 < count__35492)){
var path = chunk__35491.cljs$core$IIndexed$_nth$arity$2(null,i__35493);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35547_35678 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35551_35679 = null;
var count__35552_35680 = (0);
var i__35553_35681 = (0);
while(true){
if((i__35553_35681 < count__35552_35680)){
var node_35682 = chunk__35551_35679.cljs$core$IIndexed$_nth$arity$2(null,i__35553_35681);
if(cljs.core.not(node_35682.shadow$old)){
var path_match_35683 = shadow.cljs.devtools.client.browser.match_paths(node_35682.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35683)){
var new_link_35684 = (function (){var G__35563 = node_35682.cloneNode(true);
G__35563.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35683),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35563;
})();
(node_35682.shadow$old = true);

(new_link_35684.onload = ((function (seq__35547_35678,chunk__35551_35679,count__35552_35680,i__35553_35681,seq__35489,chunk__35491,count__35492,i__35493,new_link_35684,path_match_35683,node_35682,path,map__35487,map__35487__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35682);
});})(seq__35547_35678,chunk__35551_35679,count__35552_35680,i__35553_35681,seq__35489,chunk__35491,count__35492,i__35493,new_link_35684,path_match_35683,node_35682,path,map__35487,map__35487__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35683], 0));

goog.dom.insertSiblingAfter(new_link_35684,node_35682);


var G__35685 = seq__35547_35678;
var G__35686 = chunk__35551_35679;
var G__35687 = count__35552_35680;
var G__35688 = (i__35553_35681 + (1));
seq__35547_35678 = G__35685;
chunk__35551_35679 = G__35686;
count__35552_35680 = G__35687;
i__35553_35681 = G__35688;
continue;
} else {
var G__35689 = seq__35547_35678;
var G__35690 = chunk__35551_35679;
var G__35691 = count__35552_35680;
var G__35692 = (i__35553_35681 + (1));
seq__35547_35678 = G__35689;
chunk__35551_35679 = G__35690;
count__35552_35680 = G__35691;
i__35553_35681 = G__35692;
continue;
}
} else {
var G__35693 = seq__35547_35678;
var G__35694 = chunk__35551_35679;
var G__35695 = count__35552_35680;
var G__35696 = (i__35553_35681 + (1));
seq__35547_35678 = G__35693;
chunk__35551_35679 = G__35694;
count__35552_35680 = G__35695;
i__35553_35681 = G__35696;
continue;
}
} else {
var temp__5735__auto___35697 = cljs.core.seq(seq__35547_35678);
if(temp__5735__auto___35697){
var seq__35547_35698__$1 = temp__5735__auto___35697;
if(cljs.core.chunked_seq_QMARK_(seq__35547_35698__$1)){
var c__4556__auto___35699 = cljs.core.chunk_first(seq__35547_35698__$1);
var G__35700 = cljs.core.chunk_rest(seq__35547_35698__$1);
var G__35701 = c__4556__auto___35699;
var G__35702 = cljs.core.count(c__4556__auto___35699);
var G__35703 = (0);
seq__35547_35678 = G__35700;
chunk__35551_35679 = G__35701;
count__35552_35680 = G__35702;
i__35553_35681 = G__35703;
continue;
} else {
var node_35704 = cljs.core.first(seq__35547_35698__$1);
if(cljs.core.not(node_35704.shadow$old)){
var path_match_35705 = shadow.cljs.devtools.client.browser.match_paths(node_35704.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35705)){
var new_link_35706 = (function (){var G__35564 = node_35704.cloneNode(true);
G__35564.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35705),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35564;
})();
(node_35704.shadow$old = true);

(new_link_35706.onload = ((function (seq__35547_35678,chunk__35551_35679,count__35552_35680,i__35553_35681,seq__35489,chunk__35491,count__35492,i__35493,new_link_35706,path_match_35705,node_35704,seq__35547_35698__$1,temp__5735__auto___35697,path,map__35487,map__35487__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35704);
});})(seq__35547_35678,chunk__35551_35679,count__35552_35680,i__35553_35681,seq__35489,chunk__35491,count__35492,i__35493,new_link_35706,path_match_35705,node_35704,seq__35547_35698__$1,temp__5735__auto___35697,path,map__35487,map__35487__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35705], 0));

goog.dom.insertSiblingAfter(new_link_35706,node_35704);


var G__35707 = cljs.core.next(seq__35547_35698__$1);
var G__35708 = null;
var G__35709 = (0);
var G__35710 = (0);
seq__35547_35678 = G__35707;
chunk__35551_35679 = G__35708;
count__35552_35680 = G__35709;
i__35553_35681 = G__35710;
continue;
} else {
var G__35711 = cljs.core.next(seq__35547_35698__$1);
var G__35712 = null;
var G__35713 = (0);
var G__35714 = (0);
seq__35547_35678 = G__35711;
chunk__35551_35679 = G__35712;
count__35552_35680 = G__35713;
i__35553_35681 = G__35714;
continue;
}
} else {
var G__35715 = cljs.core.next(seq__35547_35698__$1);
var G__35716 = null;
var G__35717 = (0);
var G__35718 = (0);
seq__35547_35678 = G__35715;
chunk__35551_35679 = G__35716;
count__35552_35680 = G__35717;
i__35553_35681 = G__35718;
continue;
}
}
} else {
}
}
break;
}


var G__35719 = seq__35489;
var G__35720 = chunk__35491;
var G__35721 = count__35492;
var G__35722 = (i__35493 + (1));
seq__35489 = G__35719;
chunk__35491 = G__35720;
count__35492 = G__35721;
i__35493 = G__35722;
continue;
} else {
var G__35723 = seq__35489;
var G__35724 = chunk__35491;
var G__35725 = count__35492;
var G__35726 = (i__35493 + (1));
seq__35489 = G__35723;
chunk__35491 = G__35724;
count__35492 = G__35725;
i__35493 = G__35726;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35489);
if(temp__5735__auto__){
var seq__35489__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35489__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35489__$1);
var G__35727 = cljs.core.chunk_rest(seq__35489__$1);
var G__35728 = c__4556__auto__;
var G__35729 = cljs.core.count(c__4556__auto__);
var G__35730 = (0);
seq__35489 = G__35727;
chunk__35491 = G__35728;
count__35492 = G__35729;
i__35493 = G__35730;
continue;
} else {
var path = cljs.core.first(seq__35489__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35565_35731 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35569_35732 = null;
var count__35570_35733 = (0);
var i__35571_35734 = (0);
while(true){
if((i__35571_35734 < count__35570_35733)){
var node_35735 = chunk__35569_35732.cljs$core$IIndexed$_nth$arity$2(null,i__35571_35734);
if(cljs.core.not(node_35735.shadow$old)){
var path_match_35736 = shadow.cljs.devtools.client.browser.match_paths(node_35735.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35736)){
var new_link_35737 = (function (){var G__35577 = node_35735.cloneNode(true);
G__35577.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35736),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35577;
})();
(node_35735.shadow$old = true);

(new_link_35737.onload = ((function (seq__35565_35731,chunk__35569_35732,count__35570_35733,i__35571_35734,seq__35489,chunk__35491,count__35492,i__35493,new_link_35737,path_match_35736,node_35735,path,seq__35489__$1,temp__5735__auto__,map__35487,map__35487__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35735);
});})(seq__35565_35731,chunk__35569_35732,count__35570_35733,i__35571_35734,seq__35489,chunk__35491,count__35492,i__35493,new_link_35737,path_match_35736,node_35735,path,seq__35489__$1,temp__5735__auto__,map__35487,map__35487__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35736], 0));

goog.dom.insertSiblingAfter(new_link_35737,node_35735);


var G__35738 = seq__35565_35731;
var G__35739 = chunk__35569_35732;
var G__35740 = count__35570_35733;
var G__35741 = (i__35571_35734 + (1));
seq__35565_35731 = G__35738;
chunk__35569_35732 = G__35739;
count__35570_35733 = G__35740;
i__35571_35734 = G__35741;
continue;
} else {
var G__35742 = seq__35565_35731;
var G__35743 = chunk__35569_35732;
var G__35744 = count__35570_35733;
var G__35745 = (i__35571_35734 + (1));
seq__35565_35731 = G__35742;
chunk__35569_35732 = G__35743;
count__35570_35733 = G__35744;
i__35571_35734 = G__35745;
continue;
}
} else {
var G__35746 = seq__35565_35731;
var G__35747 = chunk__35569_35732;
var G__35748 = count__35570_35733;
var G__35749 = (i__35571_35734 + (1));
seq__35565_35731 = G__35746;
chunk__35569_35732 = G__35747;
count__35570_35733 = G__35748;
i__35571_35734 = G__35749;
continue;
}
} else {
var temp__5735__auto___35750__$1 = cljs.core.seq(seq__35565_35731);
if(temp__5735__auto___35750__$1){
var seq__35565_35751__$1 = temp__5735__auto___35750__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35565_35751__$1)){
var c__4556__auto___35752 = cljs.core.chunk_first(seq__35565_35751__$1);
var G__35753 = cljs.core.chunk_rest(seq__35565_35751__$1);
var G__35754 = c__4556__auto___35752;
var G__35755 = cljs.core.count(c__4556__auto___35752);
var G__35756 = (0);
seq__35565_35731 = G__35753;
chunk__35569_35732 = G__35754;
count__35570_35733 = G__35755;
i__35571_35734 = G__35756;
continue;
} else {
var node_35757 = cljs.core.first(seq__35565_35751__$1);
if(cljs.core.not(node_35757.shadow$old)){
var path_match_35758 = shadow.cljs.devtools.client.browser.match_paths(node_35757.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35758)){
var new_link_35759 = (function (){var G__35578 = node_35757.cloneNode(true);
G__35578.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35758),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35578;
})();
(node_35757.shadow$old = true);

(new_link_35759.onload = ((function (seq__35565_35731,chunk__35569_35732,count__35570_35733,i__35571_35734,seq__35489,chunk__35491,count__35492,i__35493,new_link_35759,path_match_35758,node_35757,seq__35565_35751__$1,temp__5735__auto___35750__$1,path,seq__35489__$1,temp__5735__auto__,map__35487,map__35487__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35757);
});})(seq__35565_35731,chunk__35569_35732,count__35570_35733,i__35571_35734,seq__35489,chunk__35491,count__35492,i__35493,new_link_35759,path_match_35758,node_35757,seq__35565_35751__$1,temp__5735__auto___35750__$1,path,seq__35489__$1,temp__5735__auto__,map__35487,map__35487__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35758], 0));

goog.dom.insertSiblingAfter(new_link_35759,node_35757);


var G__35760 = cljs.core.next(seq__35565_35751__$1);
var G__35761 = null;
var G__35762 = (0);
var G__35763 = (0);
seq__35565_35731 = G__35760;
chunk__35569_35732 = G__35761;
count__35570_35733 = G__35762;
i__35571_35734 = G__35763;
continue;
} else {
var G__35764 = cljs.core.next(seq__35565_35751__$1);
var G__35765 = null;
var G__35766 = (0);
var G__35767 = (0);
seq__35565_35731 = G__35764;
chunk__35569_35732 = G__35765;
count__35570_35733 = G__35766;
i__35571_35734 = G__35767;
continue;
}
} else {
var G__35768 = cljs.core.next(seq__35565_35751__$1);
var G__35769 = null;
var G__35770 = (0);
var G__35771 = (0);
seq__35565_35731 = G__35768;
chunk__35569_35732 = G__35769;
count__35570_35733 = G__35770;
i__35571_35734 = G__35771;
continue;
}
}
} else {
}
}
break;
}


var G__35772 = cljs.core.next(seq__35489__$1);
var G__35773 = null;
var G__35774 = (0);
var G__35775 = (0);
seq__35489 = G__35772;
chunk__35491 = G__35773;
count__35492 = G__35774;
i__35493 = G__35775;
continue;
} else {
var G__35776 = cljs.core.next(seq__35489__$1);
var G__35777 = null;
var G__35778 = (0);
var G__35779 = (0);
seq__35489 = G__35776;
chunk__35491 = G__35777;
count__35492 = G__35778;
i__35493 = G__35779;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35579){
var map__35580 = p__35579;
var map__35580__$1 = (((((!((map__35580 == null))))?(((((map__35580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35580):map__35580);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35580__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35582){
var map__35583 = p__35582;
var map__35583__$1 = (((((!((map__35583 == null))))?(((((map__35583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35583):map__35583);
var _ = map__35583__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35585,done,error){
var map__35586 = p__35585;
var map__35586__$1 = (((((!((map__35586 == null))))?(((((map__35586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35586):map__35586);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35586__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35588,done,error){
var map__35589 = p__35588;
var map__35589__$1 = (((((!((map__35589 == null))))?(((((map__35589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35589):map__35589);
var msg = map__35589__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35591){
var map__35592 = p__35591;
var map__35592__$1 = (((((!((map__35592 == null))))?(((((map__35592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35592):map__35592);
var src = map__35592__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35594 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35594) : done.call(null,G__35594));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35595){
var map__35596 = p__35595;
var map__35596__$1 = (((((!((map__35596 == null))))?(((((map__35596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35596):map__35596);
var msg__$1 = map__35596__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35598){var ex = e35598;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35599){
var map__35600 = p__35599;
var map__35600__$1 = (((((!((map__35600 == null))))?(((((map__35600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35600):map__35600);
var env = map__35600__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35602){
var map__35603 = p__35602;
var map__35603__$1 = (((((!((map__35603 == null))))?(((((map__35603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35603):map__35603);
var msg = map__35603__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35603__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35605){
var map__35606 = p__35605;
var map__35606__$1 = (((((!((map__35606 == null))))?(((((map__35606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35606):map__35606);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35608){
var map__35609 = p__35608;
var map__35609__$1 = (((((!((map__35609 == null))))?(((((map__35609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35609):map__35609);
var svc = map__35609__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
