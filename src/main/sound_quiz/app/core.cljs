(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [reagent.cookies :as cookie]
            [reagent.core :as core]
            [sound-quiz.app.components.button :as btn]
            [sound-quiz.app.utils.main :as u]
            [sound-quiz.app.tasks :as t]
            [clojure.string :as s]))

(def default-volume 0.5)

(defn update-sound [e]
  (let [volume (js/parseFloat (.-value (.-target e)))]
    (do
      (cookie/set! "volume" volume)
      (-> js/document
          (.getElementById "sfx-sound")
          (.-volume)
          (set! volume)))))

(defn atom-input [value]
  [:input#answer {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(def correct-answers (core/atom 0))
(def incorrect-answers (core/atom 0))

(defn correct-counter []
  [:p#correct-counter.badge.badge-success @correct-answers])

(defn incorrect-counter []
  [:p#incorrect-counter.badge.badge-danger @incorrect-answers])


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
             (btn/end-play)))
       [:p "Ответ: " [atom-input input]]])))

(defn restart []
  (reset! tasks (t/shuffle-tasks))
  (reset! task (t/take-task @tasks))
  (reset! correct-answers 0)
  (reset! incorrect-answers 0))

(defn give-up []
  (do
    (swap! incorrect-answers inc)
    (reset! tasks (t/drop-task @task @tasks))
    (reset! task (t/take-task @tasks))
    (btn/end-play)))

(defn task-selector []
  (if (not (empty? @tasks))
    (let [path (t/build-path (@task :title))]
      [:div#task-selector
       [correct-counter]
       [incorrect-counter]
       [:a#give-up.btn.btn-danger
        {:on-click give-up} "Сдаться"]
       [:h3 (@task :title)]
       [:audio#sfx-sound
        {:src path :controlsList :nodownload
         :preload :auto :on-ended btn/end-play}]
       [:input#volume-setting.form-range
        {:type :range :min 0 :max 1 :step 0.05
         :onChange update-sound}]
       [btn/control-button]
       [game-logic]])
      [:div#gameover
       [:h1 "Результат."]
       [correct-counter]
       [incorrect-counter]
       [:a.btn.btn-primary {:href "#" :on-click restart}
        "Начать заново!"]])
    )

(defn check-sound []
  (when (nil? (cookie/get "volume")) (cookie/set! "volume" default-volume))
  (let [volume (cookie/get "volume")]
    (do
    (-> js/document
        (.getElementById "sfx-sound")
        (.-volume)
        (set! volume))
    (-> js/document
        (.getElementById "volume-setting")
        (.-value)
        (set! volume)))))

(defn app []
  [:div.container
   [:div.jumbotron
    [:h1.text-center.display-4 "Game Sound Quiz!"]
    [task-selector]]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render)
  (check-sound))

(defn ^:dev/after-load reload! []
  (render)
  (check-sound))
