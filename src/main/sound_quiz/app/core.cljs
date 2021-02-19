(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as core]
            [sound-quiz.app.components.play-button :as pb]
            [sound-quiz.app.components.counters :as cnt]
            [sound-quiz.app.tasks :as t]
            [sound-quiz.app.components.modal :as md]
            [sound-quiz.app.components.volume :as vol]))

(defn answer-input [value]
  [:input#answer.form-control
   {:type "text"
    :value @value
    :aria-label "Ответ"
    :aria-describedby "inputGroup-sizing-default"
    :on-change #(reset! value (-> % .-target .-value))}])

(def tasks (core/atom (t/shuffle-tasks)))
(def task (core/atom (t/take-task @tasks)))

(defn proceed-next-quiz [result]
  (do
    (cnt/submit-result result)
    (reset! tasks (t/drop-task @task @tasks))
    (reset! task (t/take-task @tasks))
    (pb/ost-end-play)
    (pb/response-end-play)))

(defn game-logic []
  (let [input (core/atom "")]
    (fn []
      [:div
       (if (t/correct? @task @input)
         (do
           (reset! input "")
           (proceed-next-quiz true))
       [:div.input-group.mb-3
        [:div.input-group-prepend
         [:span#inputGroup-sizing-default.input-group-text
          "Ответ"]]
        [answer-input input]])])))

(defn restart []
  (do
    (reset! tasks (t/shuffle-tasks))
    (reset! task (t/take-task @tasks))
    (cnt/reset-counters)
    (vol/set-sound)))

(defn give-up []
  (proceed-next-quiz false))

(defn task-selector []
  (if (not (empty? @tasks))
    (let [paths (t/build-path (@task :title))]
      [:div#task-selector
       [:div.container.btn-group {:role "group"}
        [cnt/correct-counter]
        [cnt/incorrect-counter]]
       [:a#give-up.btn.btn-warning
        {:on-click give-up} "Сдаться"]
       [:h3 (@task :title)]
       (when (paths :ost)
         [:div#ost-container.container
          [:audio#ost-sound
          {:src (paths :ost) :controlsList :nodownload
           :preload :auto :on-ended pb/ost-end-play}]
          [pb/ost-control-button]])
       (when (paths :resp)
         [:div#resp-container.container
          [:audio#resp-sound
           {:src (paths :resp)
            :preload :auto
            :on-ended pb/response-end-play}]
          [pb/response-control-button]])
       [vol/volume-control]
       [game-logic]])
      [:div#gameover
       [:h1 "Результат."]
       [:div.container.btn-group {:role "group"}
        [cnt/correct-counter]
        [cnt/incorrect-counter]]
       [:div.container
        [:a.btn.btn-primary
         {:href "/"
          ;:on-click restart
          } "Начать заново!"]]
       ]))

(defn app []
  [:div.container
   [:div.jumbotron
    [:h1.text-center.display-4 "Game Sound Quiz!"]
    [task-selector]]])

(defn render-game []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render-game)
  (vol/set-sound)
  (md/render-modal))

(defn ^:dev/after-load reload! []
  (render-game)
  (md/render-modal))

