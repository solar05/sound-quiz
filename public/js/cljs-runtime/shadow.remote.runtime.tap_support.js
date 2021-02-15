goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__32022,p__32023){
var map__32024 = p__32022;
var map__32024__$1 = (((((!((map__32024 == null))))?(((((map__32024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32024):map__32024);
var svc = map__32024__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32024__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32024__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32024__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32025 = p__32023;
var map__32025__$1 = (((((!((map__32025 == null))))?(((((map__32025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32025):map__32025);
var msg = map__32025__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32025__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32025__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32025__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32025__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__32039,p__32040){
var map__32041 = p__32039;
var map__32041__$1 = (((((!((map__32041 == null))))?(((((map__32041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32041):map__32041);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32041__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__32042 = p__32040;
var map__32042__$1 = (((((!((map__32042 == null))))?(((((map__32042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32042):map__32042);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32042__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__32055,p__32056){
var map__32057 = p__32055;
var map__32057__$1 = (((((!((map__32057 == null))))?(((((map__32057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32057):map__32057);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32057__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32057__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32058 = p__32056;
var map__32058__$1 = (((((!((map__32058 == null))))?(((((map__32058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32058):map__32058);
var msg = map__32058__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32058__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__32071,tid){
var map__32072 = p__32071;
var map__32072__$1 = (((((!((map__32072 == null))))?(((((map__32072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32072):map__32072);
var svc = map__32072__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32072__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__32087 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__32088 = null;
var count__32089 = (0);
var i__32090 = (0);
while(true){
if((i__32090 < count__32089)){
var vec__32110 = chunk__32088.cljs$core$IIndexed$_nth$arity$2(null,i__32090);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32110,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32110,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32172 = seq__32087;
var G__32173 = chunk__32088;
var G__32174 = count__32089;
var G__32175 = (i__32090 + (1));
seq__32087 = G__32172;
chunk__32088 = G__32173;
count__32089 = G__32174;
i__32090 = G__32175;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32087);
if(temp__5735__auto__){
var seq__32087__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32087__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32087__$1);
var G__32177 = cljs.core.chunk_rest(seq__32087__$1);
var G__32178 = c__4556__auto__;
var G__32179 = cljs.core.count(c__4556__auto__);
var G__32180 = (0);
seq__32087 = G__32177;
chunk__32088 = G__32178;
count__32089 = G__32179;
i__32090 = G__32180;
continue;
} else {
var vec__32121 = cljs.core.first(seq__32087__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32121,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32121,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32185 = cljs.core.next(seq__32087__$1);
var G__32186 = null;
var G__32187 = (0);
var G__32188 = (0);
seq__32087 = G__32185;
chunk__32088 = G__32186;
count__32089 = G__32187;
i__32090 = G__32188;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__32079_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__32079_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__32080_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__32080_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__32081_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__32081_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__32082_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__32082_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__32133){
var map__32134 = p__32133;
var map__32134__$1 = (((((!((map__32134 == null))))?(((((map__32134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32134):map__32134);
var svc = map__32134__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32134__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32134__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
