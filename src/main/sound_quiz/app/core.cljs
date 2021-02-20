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
    :aria-describedby "inputGroup-sizing-lg"
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
         [:div.input-group.input-group-lg.mb-3
          [:div.input-group-prepend
           [:span#inputGroup-sizing-lg.input-group-text.font-weight-bold
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
       [:div.container.btn-group.d-flex.d-inline-block.justify-content-center
        {:role "group"}
        [cnt/correct-counter]
        [cnt/incorrect-counter]]
       [:div.d-flex.d-inline-block.justify-content-center.m-2
        [:div#ost-container.p-4
         [:audio#ost-sound
          {:src (paths :ost) :controlsList :nodownload
           :preload :auto :on-ended pb/ost-end-play}]
         [pb/ost-control-button]]
        [:div#resp-container.p-4
         [:audio#resp-sound
          {:src (paths :resp)
           :preload :auto
           :on-ended pb/response-end-play}]
         [pb/response-control-button]]]
       [game-logic]
       [vol/volume-control]
       [:a#give-up.btn.btn-warning.btn-lg.border.border-dark.float-right
        {:on-click give-up} "Пропустить"]])
    [:div#gameover
     (when (cnt/all-correct?)
       [:h2.font-weight-bold.d-flex.justify-content-center.m-3.text-success.text-center
        "Вы все угадали!"])
     (when (cnt/all-incorrect?)
       [:h2.font-weight-bold.d-flex.justify-content-center.m-3.text-center
        "Вы ничего не угадали :( Попробуйте еще раз!"])
     [:div.container.btn-group.d-flex.d-inline-block.justify-content-center.mb-4
      {:role "group"}
      [cnt/correct-counter]
      [cnt/incorrect-counter]]
     [:div.container
      [:a.btn.btn-primary.btn-lg.d-flex.d-inline-block.justify-content-center.m-2
       {:href "/"
                                        ;:on-click restart
        } "Начать заново?"]]
     ]))

(defn app []
  [:di.d-flex.justify-content-center
   [:div.jumbotron {:style {:padding-bottom "0.6em" :padding-top "0.5em"}}
    [:h1.text-center.display-4.p-4 "Game Sound Quiz!"]
    [task-selector]
    [:div.text-center.text-muted.d-flex.justify-content-center "Powered by: @solar05"]]])

(defn render-game []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render-game)
  (vol/set-sound)
  (md/render-modal))

(defn ^:dev/after-load reload! []
  (render-game)
  (md/render-modal))

