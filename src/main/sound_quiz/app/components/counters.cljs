(ns sound-quiz.app.components.counters
  (:require [reagent.core :as core]
            [sound-quiz.app.tasks :as t]))

(def correct-answers (core/atom 0))
(def incorrect-answers (core/atom 0))
(def task-count (t/task-count))

(defn correct-counter []
  [:span#correct-counter.btn.btn-success.btn-lg.border.border-dark.pl-5.pr-5
   (str @correct-answers " / " task-count)])

(defn incorrect-counter []
  [:span#incorrect-counter.btn.btn-danger.btn-lg.border.border-dark.pl-5.pr-5
   (str @incorrect-answers  " / " task-count)])

(defn submit-result [result]
  (if result
    (swap! correct-answers inc)
    (swap! incorrect-answers inc)))

(defn reset-counters []
  (do
    (reset! correct-answers 0)
    (reset! incorrect-answers 0)))

(defn all-correct? []
  (= @correct-answers task-count))

(defn all-incorrect? []
  (= @incorrect-answers task-count))
