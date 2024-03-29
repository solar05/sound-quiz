(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as core]
            [clojure.string :as s]
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

(defonce tasks (core/atom (t/shuffle-tasks)))

(defonce task (core/atom (t/take-task @tasks)))

(defonce game-round (core/atom 1))

(defonce history (core/atom []))

(defn proceed-next-quiz [result]
  (cnt/submit-result result)
  (md/update-history {:task @task :correct result})
  (reset! tasks (t/drop-task @task @tasks))
  (reset! task (t/take-task @tasks))
  (swap! game-round inc)
  (pb/ost-end-play)
  (pb/response-end-play))

(defn game-logic []
  (let [input (core/atom "")]
    (fn []
      [:div
       (if (t/correct? @task (s/trim-newline (s/trim @input)))
         (do
           (reset! input "")
           (proceed-next-quiz true))
         [:div.input-group.input-group-lg.mb-3
          [:div.input-group-prepend
           [:span#inputGroup-sizing-lg.input-group-text.font-weight-bold
            "Ответ"]]
          [answer-input input]])])))

(defn restart []
  (reset! tasks (t/shuffle-tasks))
  (reset! task (t/take-task @tasks))
  (cnt/reset-counters)
  (vol/set-sound))

(defn give-up []
  (proceed-next-quiz false))

(defn task-selector []
  (if (not (empty? @tasks))
    (let [paths (t/build-path (@task :title))]
      [:div#task-selector
       [cnt/counters-with-round @game-round]
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
       [:div.container.mb-4.d-flex.justify-content-center
        [vol/volume-control]]
       [game-logic]
       [:a#give-up.btn.btn-warning.border.border-dark.d-flex.d-inline-block.justify-content-center.mb-2
        {:on-click give-up} "Пропустить"]])
    [:div#gameover
     (when (cnt/all-correct?)
       [:h2.font-weight-bold.d-flex.justify-content-center.m-3.text-success.text-center
        "Вы все угадали!"])
     (when (cnt/all-incorrect?)
       [:h2.font-weight-bold.d-flex.justify-content-center.m-5.text-center
        "Вы ничего не угадали :( Попробуйте еще раз!"])
     [:div.container.btn-group.d-flex.d-inline-block.justify-content-center.mb-4
      {:role "group"}
      [cnt/correct-counter]
      [cnt/incorrect-counter]]
     [:div.container
      [:a.btn.btn-primary.btn-lg.d-flex.d-inline-block.justify-content-center.m-2.border.border-dark
       {:href "/" } "Начать заново?"]
      (md/history-modal-button)]
     ]))

(defn app []
  [:div.container
   [:div.jumbotron {:style {:padding-bottom "0.5em" :padding-top "0.5em"}}
    [:h1.text-center.display-4.p-4 "Game Sound Quiz!"]
    [task-selector]
    [:div.text-center.text-muted "Powered by: @solar05"]]])

(defn render-game []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render-game)
  (vol/set-sound)
  (md/render-modal)
  (md/render-history-modal))

(defn ^:dev/after-load reload! []
  (render-game)
  (md/render-modal)
  (md/render-history-modal))

