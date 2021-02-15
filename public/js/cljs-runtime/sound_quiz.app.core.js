goog.provide('sound_quiz.app.core');
if((typeof sound_quiz !== 'undefined') && (typeof sound_quiz.app !== 'undefined') && (typeof sound_quiz.app.core !== 'undefined') && (typeof sound_quiz.app.core.audio_context !== 'undefined')){
} else {
sound_quiz.app.core.audio_context = cljs_bach.synthesis.audio_context();
}
sound_quiz.app.core.playback_mp3 = (function sound_quiz$app$core$playback_mp3(url){
var mp3 = cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.sample(url),cljs_bach.synthesis.gain(0.5),cljs_bach.synthesis.destination], 0));
return cljs_bach.synthesis.run_with(mp3,sound_quiz.app.core.audio_context,cljs_bach.synthesis.current_time(sound_quiz.app.core.audio_context),3.0);
});
sound_quiz.app.core.preload_sound = (function sound_quiz$app$core$preload_sound(path){
return cljs_bach.synthesis.sample(path);
});
sound_quiz.app.core.run_sound = (function sound_quiz$app$core$run_sound(){
var tasks = sound_quiz.app.tasks.shuffle_tasks();
var task = sound_quiz.app.tasks.take_task(tasks);
var updated_tasks = sound_quiz.app.tasks.drop_task(task,tasks);
var path = sound_quiz.app.tasks.build_path((task.cljs$core$IFn$_invoke$arity$1 ? task.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : task.call(null,new cljs.core.Keyword(null,"title","title",636505583))));
sound_quiz.app.core.preload_sound(path);

return sound_quiz.app.core.playback_mp3(path);
});
sound_quiz.app.core.app = (function sound_quiz$app$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display-4"], null),"Game Sound Quiz!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-success","input.btn.btn-success",-1325058231),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),sound_quiz.app.core.run_sound], null)], null)], null)], null);
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
