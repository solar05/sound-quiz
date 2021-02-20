(ns sound-quiz.app.components.counters
  (:require [reagent.core :as core]
            [sound-quiz.app.tasks :as t]))

(def correct-answers (core/atom 0))
(def incorrect-answers (core/atom 0))
(def task-count (t/task-count))

(defn correct-counter [type]
  (if (= type :text)
    [:span#correct-counter.bg-success.border.border-dark.w-25.text-center.text-light.rounded-bottom.p-1
     @correct-answers]
    [:span#correct-counter.btn.btn-success.btn-lg.border.border-dark.pl-5.pr-5
     (str "Правильно: " @correct-answers)]))

(defn incorrect-counter [type]
  (if (= type :text)
    [:span#incorrect-counter.bg-danger.border.border-dark.w-25.text-center.text-light.rounded-bottom.p-1
     @incorrect-answers]
    [:span#incorrect-counter.btn.btn-danger.btn-lg.border.border-dark.pl-5.pr-5
     (str "Неправильно: " @incorrect-answers)]))

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

(defn counters-with-round [step]
  [:div#counters.container
   [:div.container.btn-group.d-flex.d-inline-block.justify-content-center
    {:role "group"}
    [:span#round-counter.bg-primary.border.border-dark.w-50.text-center.text-light.rounded-top.p-1
     (str "Раунд " step " из " task-count)]]
   [:div.container.d-flex.d-inline-block.justify-content-center
    {:role "group"}
    [correct-counter :text]
    [incorrect-counter :text]]])

(defn counters-without-round []
  [:div#counters.container
   [:div.container.btn-group
    {:role "group"}
    [correct-counter :btn]
    [incorrect-counter :btn]]])

