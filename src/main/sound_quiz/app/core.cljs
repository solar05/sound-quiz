(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [reagent.cookies :as cookie]
            [reagent.core :as core]
            [sound-quiz.app.components.play-button :as pb]
            [sound-quiz.app.utils.main :as u]
            [sound-quiz.app.tasks :as t]
            [goog.string :as gstr]
            [goog.string.format]
            [clojure.string :as s]))

(defn check-sound []
  (let [default-volume 0.5
        volume (cookie/get "volume")]
    (if (nil? volume)
      default-volume
      volume)))

(def volume-level-val (core/atom (check-sound)))

(defn volume-level []
    [:p (gstr/format "%d%" (* @volume-level-val 100))])

(defn update-sound [e]
  (let [volume (js/parseFloat (.-value (.-target e)))]
    (do
      (cookie/set! "volume" volume)
      (reset! volume-level-val volume)
      (-> js/document
          (.getElementById "ost-sound")
          (.-volume)
          (set! volume))
      (-> js/document
          (.getElementById "resp-sound")
          (.-volume)
          (set! volume)))))

(defn volume-slider []
  [:input#volume-setting.form-range
   {:type :range
    :min 0 :max 1
    :step 0.05
    :value @volume-level-val
    :onChange update-sound}])

(defn set-sound []
  (let [volume (check-sound)]
    (do
      (reset! volume-level-val volume)
      (-> js/document
          (.getElementById "ost-sound")
          (.-volume)
          (set! volume))
      (-> js/document
          (.getElementById "resp-sound")
          (.-volume)
          (set! volume)))))

(defn answer-input [value]
  [:input#answer.form-control
   {:type "text"
    :value @value
    :aria-label "Ответ"
    :aria-describedby "inputGroup-sizing-default"
    :on-change #(reset! value (-> % .-target .-value))}])

(def correct-answers (core/atom 0))
(def incorrect-answers (core/atom 0))

(defn correct-counter []
  [:span#correct-counter.btn.btn-success @correct-answers])

(defn incorrect-counter []
  [:span#incorrect-counter.btn.btn-danger @incorrect-answers])

(def tasks (core/atom (t/shuffle-tasks)))
(def task (core/atom (t/take-task @tasks)))

(defn game-logic []
  (let [input (core/atom "")]
    (fn []
      [:div
       (if (u/in? (@task :names) (s/lower-case @input))
         (do (swap! correct-answers inc)
             (reset! tasks (t/drop-task @task @tasks))
             (reset! task (t/take-task @tasks))
             (reset! input "")
             (pb/ost-end-play)
             (pb/response-end-play)))
       [:div.input-group.mb-3
        [:div.input-group-prepend
         [:span#inputGroup-sizing-default.input-group-text
          "Ответ"]]
        [answer-input input]]])))

(defn restart []
  (reset! tasks (t/shuffle-tasks))
  (reset! task (t/take-task @tasks))
  (reset! correct-answers 0)
  (reset! incorrect-answers 0)
  (check-sound))

(defn give-up []
  (do
    (swap! incorrect-answers inc)
    (reset! tasks (t/drop-task @task @tasks))
    (reset! task (t/take-task @tasks))
    (pb/ost-end-play)
    (pb/response-end-play)))

(defn task-selector []
  (if (not (empty? @tasks))
    (let [paths (t/build-path (@task :title))]
      [:div#task-selector
       [:div.container.btn-group {:role "group"}
        [correct-counter]
        [incorrect-counter]]
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
       [:div.container
        [volume-slider]
        [volume-level]]
       [game-logic]])
      [:div#gameover
       [:h1 "Результат."]
       [:div.container.btn-group {:role "group"}
        [correct-counter]
        [incorrect-counter]]
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

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render)
  (set-sound))

(defn ^:dev/after-load reload! []
  (render))
