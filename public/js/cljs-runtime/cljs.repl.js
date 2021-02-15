goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36564){
var map__36565 = p__36564;
var map__36565__$1 = (((((!((map__36565 == null))))?(((((map__36565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36565):map__36565);
var m = map__36565__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36569_36780 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36570_36781 = null;
var count__36571_36782 = (0);
var i__36572_36783 = (0);
while(true){
if((i__36572_36783 < count__36571_36782)){
var f_36784 = chunk__36570_36781.cljs$core$IIndexed$_nth$arity$2(null,i__36572_36783);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36784], 0));


var G__36785 = seq__36569_36780;
var G__36786 = chunk__36570_36781;
var G__36787 = count__36571_36782;
var G__36788 = (i__36572_36783 + (1));
seq__36569_36780 = G__36785;
chunk__36570_36781 = G__36786;
count__36571_36782 = G__36787;
i__36572_36783 = G__36788;
continue;
} else {
var temp__5735__auto___36789 = cljs.core.seq(seq__36569_36780);
if(temp__5735__auto___36789){
var seq__36569_36790__$1 = temp__5735__auto___36789;
if(cljs.core.chunked_seq_QMARK_(seq__36569_36790__$1)){
var c__4556__auto___36791 = cljs.core.chunk_first(seq__36569_36790__$1);
var G__36792 = cljs.core.chunk_rest(seq__36569_36790__$1);
var G__36793 = c__4556__auto___36791;
var G__36794 = cljs.core.count(c__4556__auto___36791);
var G__36795 = (0);
seq__36569_36780 = G__36792;
chunk__36570_36781 = G__36793;
count__36571_36782 = G__36794;
i__36572_36783 = G__36795;
continue;
} else {
var f_36796 = cljs.core.first(seq__36569_36790__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36796], 0));


var G__36797 = cljs.core.next(seq__36569_36790__$1);
var G__36798 = null;
var G__36799 = (0);
var G__36800 = (0);
seq__36569_36780 = G__36797;
chunk__36570_36781 = G__36798;
count__36571_36782 = G__36799;
i__36572_36783 = G__36800;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36801 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36801], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36801)))?cljs.core.second(arglists_36801):arglists_36801)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36577_36803 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36578_36804 = null;
var count__36579_36805 = (0);
var i__36580_36806 = (0);
while(true){
if((i__36580_36806 < count__36579_36805)){
var vec__36592_36807 = chunk__36578_36804.cljs$core$IIndexed$_nth$arity$2(null,i__36580_36806);
var name_36808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36592_36807,(0),null);
var map__36595_36809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36592_36807,(1),null);
var map__36595_36810__$1 = (((((!((map__36595_36809 == null))))?(((((map__36595_36809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36595_36809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36595_36809):map__36595_36809);
var doc_36811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36595_36810__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36595_36810__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36808], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36812], 0));

if(cljs.core.truth_(doc_36811)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36811], 0));
} else {
}


var G__36813 = seq__36577_36803;
var G__36814 = chunk__36578_36804;
var G__36815 = count__36579_36805;
var G__36816 = (i__36580_36806 + (1));
seq__36577_36803 = G__36813;
chunk__36578_36804 = G__36814;
count__36579_36805 = G__36815;
i__36580_36806 = G__36816;
continue;
} else {
var temp__5735__auto___36817 = cljs.core.seq(seq__36577_36803);
if(temp__5735__auto___36817){
var seq__36577_36818__$1 = temp__5735__auto___36817;
if(cljs.core.chunked_seq_QMARK_(seq__36577_36818__$1)){
var c__4556__auto___36819 = cljs.core.chunk_first(seq__36577_36818__$1);
var G__36820 = cljs.core.chunk_rest(seq__36577_36818__$1);
var G__36821 = c__4556__auto___36819;
var G__36822 = cljs.core.count(c__4556__auto___36819);
var G__36823 = (0);
seq__36577_36803 = G__36820;
chunk__36578_36804 = G__36821;
count__36579_36805 = G__36822;
i__36580_36806 = G__36823;
continue;
} else {
var vec__36597_36824 = cljs.core.first(seq__36577_36818__$1);
var name_36825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36597_36824,(0),null);
var map__36600_36826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36597_36824,(1),null);
var map__36600_36827__$1 = (((((!((map__36600_36826 == null))))?(((((map__36600_36826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36600_36826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36600_36826):map__36600_36826);
var doc_36828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36600_36827__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36600_36827__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36825], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36829], 0));

if(cljs.core.truth_(doc_36828)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36828], 0));
} else {
}


var G__36830 = cljs.core.next(seq__36577_36818__$1);
var G__36831 = null;
var G__36832 = (0);
var G__36833 = (0);
seq__36577_36803 = G__36830;
chunk__36578_36804 = G__36831;
count__36579_36805 = G__36832;
i__36580_36806 = G__36833;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36604 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36605 = null;
var count__36606 = (0);
var i__36607 = (0);
while(true){
if((i__36607 < count__36606)){
var role = chunk__36605.cljs$core$IIndexed$_nth$arity$2(null,i__36607);
var temp__5735__auto___36834__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36834__$1)){
var spec_36835 = temp__5735__auto___36834__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36835)], 0));
} else {
}


var G__36836 = seq__36604;
var G__36837 = chunk__36605;
var G__36838 = count__36606;
var G__36839 = (i__36607 + (1));
seq__36604 = G__36836;
chunk__36605 = G__36837;
count__36606 = G__36838;
i__36607 = G__36839;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36604);
if(temp__5735__auto____$1){
var seq__36604__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36604__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36604__$1);
var G__36840 = cljs.core.chunk_rest(seq__36604__$1);
var G__36841 = c__4556__auto__;
var G__36842 = cljs.core.count(c__4556__auto__);
var G__36843 = (0);
seq__36604 = G__36840;
chunk__36605 = G__36841;
count__36606 = G__36842;
i__36607 = G__36843;
continue;
} else {
var role = cljs.core.first(seq__36604__$1);
var temp__5735__auto___36844__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36844__$2)){
var spec_36845 = temp__5735__auto___36844__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36845)], 0));
} else {
}


var G__36846 = cljs.core.next(seq__36604__$1);
var G__36847 = null;
var G__36848 = (0);
var G__36849 = (0);
seq__36604 = G__36846;
chunk__36605 = G__36847;
count__36606 = G__36848;
i__36607 = G__36849;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36854 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36855 = cljs.core.ex_cause(t);
via = G__36854;
t = G__36855;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36613 = datafied_throwable;
var map__36613__$1 = (((((!((map__36613 == null))))?(((((map__36613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36613):map__36613);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36613__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36613__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36613__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36614 = cljs.core.last(via);
var map__36614__$1 = (((((!((map__36614 == null))))?(((((map__36614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36614):map__36614);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36615 = data;
var map__36615__$1 = (((((!((map__36615 == null))))?(((((map__36615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36615):map__36615);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36615__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36615__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36615__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36620 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36620__$1 = (((((!((map__36620 == null))))?(((((map__36620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36620):map__36620);
var top_data = map__36620__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36645 = phase;
var G__36645__$1 = (((G__36645 instanceof cljs.core.Keyword))?G__36645.fqn:null);
switch (G__36645__$1) {
case "read-source":
var map__36646 = data;
var map__36646__$1 = (((((!((map__36646 == null))))?(((((map__36646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36646):map__36646);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36646__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36646__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36652 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36652__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36652,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36652);
var G__36652__$2 = (cljs.core.truth_((function (){var fexpr__36656 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36656.cljs$core$IFn$_invoke$arity$1 ? fexpr__36656.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36656.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36652__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36652__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36652__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36652__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36664 = top_data;
var G__36664__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36664,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36664);
var G__36664__$2 = (cljs.core.truth_((function (){var fexpr__36665 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36665.cljs$core$IFn$_invoke$arity$1 ? fexpr__36665.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36665.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36664__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36664__$1);
var G__36664__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36664__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36664__$2);
var G__36664__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36664__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36664__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36664__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36664__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36676 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36676,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36676,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36676,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36676,(3),null);
var G__36684 = top_data;
var G__36684__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36684,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36684);
var G__36684__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36684__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36684__$1);
var G__36684__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36684__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36684__$2);
var G__36684__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36684__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36684__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36684__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36684__$4;
}

break;
case "execution":
var vec__36694 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36612_SHARP_){
var or__4126__auto__ = (p1__36612_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36705 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36705.cljs$core$IFn$_invoke$arity$1 ? fexpr__36705.cljs$core$IFn$_invoke$arity$1(p1__36612_SHARP_) : fexpr__36705.call(null,p1__36612_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36706 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36706__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36706,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36706);
var G__36706__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36706__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36706__$1);
var G__36706__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36706__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36706__$2);
var G__36706__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36706__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36706__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36706__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36706__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36645__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36731){
var map__36732 = p__36731;
var map__36732__$1 = (((((!((map__36732 == null))))?(((((map__36732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36732):map__36732);
var triage_data = map__36732__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36739 = phase;
var G__36739__$1 = (((G__36739 instanceof cljs.core.Keyword))?G__36739.fqn:null);
switch (G__36739__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36740 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36741 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36742 = loc;
var G__36743 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36744_36863 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36745_36864 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36746_36865 = true;
var _STAR_print_fn_STAR__temp_val__36747_36866 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36746_36865);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36747_36866);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36725_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36725_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36745_36864);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36744_36863);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36740,G__36741,G__36742,G__36743) : format.call(null,G__36740,G__36741,G__36742,G__36743));

break;
case "macroexpansion":
var G__36749 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36750 = cause_type;
var G__36751 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36752 = loc;
var G__36753 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36749,G__36750,G__36751,G__36752,G__36753) : format.call(null,G__36749,G__36750,G__36751,G__36752,G__36753));

break;
case "compile-syntax-check":
var G__36754 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36755 = cause_type;
var G__36756 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36757 = loc;
var G__36758 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36754,G__36755,G__36756,G__36757,G__36758) : format.call(null,G__36754,G__36755,G__36756,G__36757,G__36758));

break;
case "compilation":
var G__36759 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36760 = cause_type;
var G__36761 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36762 = loc;
var G__36763 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36759,G__36760,G__36761,G__36762,G__36763) : format.call(null,G__36759,G__36760,G__36761,G__36762,G__36763));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36764 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36765 = symbol;
var G__36766 = loc;
var G__36767 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36768_36868 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36769_36869 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36770_36870 = true;
var _STAR_print_fn_STAR__temp_val__36771_36871 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36770_36870);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36771_36871);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36730_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36730_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36769_36869);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36768_36868);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36764,G__36765,G__36766,G__36767) : format.call(null,G__36764,G__36765,G__36766,G__36767));
} else {
var G__36773 = "Execution error%s at %s(%s).\n%s\n";
var G__36774 = cause_type;
var G__36775 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36776 = loc;
var G__36777 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36773,G__36774,G__36775,G__36776,G__36777) : format.call(null,G__36773,G__36774,G__36775,G__36776,G__36777));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36739__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
