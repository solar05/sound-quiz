goog.provide('sound_quiz.app.core');
sound_quiz.app.core.app = (function sound_quiz$app$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Game Sound Quiz!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn-success","div.btn.btn-success",-141844111),"Run"], null)], null);
});
sound_quiz.app.core.render = (function sound_quiz$app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sound_quiz.app.core.app], null),document.getElementById("root"));
});
sound_quiz.app.core.main = (function sound_quiz$app$core$main(){
return sound_quiz.app.core.render();
});
goog.exportSymbol('sound_quiz.app.core.main', sound_quiz.app.core.main);
sound_quiz.app.core.reload_BANG_ = (function sound_quiz$app$core$reload_BANG_(){
return sound_quiz.app.core.render();
});

//# sourceMappingURL=sound_quiz.app.core.js.map
