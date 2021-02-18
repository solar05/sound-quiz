(ns sound-quiz.app.components.counters
  (:require [reagent.core :as core]))

(def correct-answers (core/atom 0))
(def incorrect-answers (core/atom 0))

(defn correct-counter []
  [:span#correct-counter.btn.btn-success @correct-answers])

(defn incorrect-counter []
  [:span#incorrect-counter.btn.btn-danger @incorrect-answers])

(defn submit-result [result]
  (if result
    (swap! correct-answers inc)
    (swap! incorrect-answers inc)))

(defn reset-counters []
  (do
    (reset! correct-answers 0)
    (reset! incorrect-answers 0)))
