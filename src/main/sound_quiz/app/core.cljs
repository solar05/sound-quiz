(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [reagent.cookies :as c]
            [reagent.core :as core]
            [sound-quiz.app.components.button :as btn]
            [sound-quiz.app.utils.main :as u]
            [sound-quiz.app.tasks :as t]
            [clojure.string :as s]))

(def default-volume 0.5)

(defn update-sound [e]
  (let [volume (js/parseFloat (.-value (.-target e)))]
    (do
      (c/set! "volume" volume)
      (-> js/document
          (.getElementById "sfx-sound")
          (.-volume)
          (set! volume)))))

(defn atom-input [value]
  [:input#answer {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn update-correct-counter []
  (let [elem  (-> js/document
                  (.getElementById "correct-counter"))
        val (js/parseInt (.-innerHTML elem))]
    (-> elem
        (.-innerHTML)
        (set! (inc val)))))

(def tasks (core/atom (t/shuffle-tasks)))
(def task (core/atom (t/take-task @tasks)))

(defn update-incorrect-counter []
  (let [elem  (-> js/document
                  (.getElementById "incorrect-counter"))
        val (js/parseInt (.-innerHTML elem))]
    (do
      (-> elem
          (.-innerHTML)
          (set! (inc val)))
      (reset! tasks (t/drop-task @task @tasks))
      (when (empty? @tasks)
        (reset! tasks (t/shuffle-tasks)))
      (reset! task (t/take-task @tasks))
      (btn/end-play))))

(defn game-logic []
  (let [input (core/atom "")]
    (fn []
      [:div
       (if (u/in? (@task :names) (s/lower-case @input))
         (do (update-correct-counter)
             (reset! tasks (t/drop-task @task @tasks))
             (when (empty? @tasks)
               (reset! tasks (t/shuffle-tasks)))
             (reset! task (t/take-task @tasks))
             (reset! input "")
             (btn/end-play)))
       [:p "Ответ: " [atom-input input]]])))

(defn task-selector []
  (let [path (t/build-path (@task :title))]
     [:div#task-selector
     [:h3 (@task :title)]
     [:audio#sfx-sound
      {:src path :controlsList :nodownload :preload :auto :on-ended btn/end-play}]
     [:input#volume-setting.form-range
      {:type :range :min 0 :max 1 :step 0.05 :onChange update-sound}]
     [btn/control-button]
     [game-logic]
]))

(defn check-sound []
  (when (nil? (c/get "volume")) (c/set! "volume" default-volume))
  (let [volume (c/get "volume")]
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
    [:p#correct-counter.badge.badge-success 0]
    [:p#incorrect-counter.badge.badge-danger 0]
    [:br]
    [:a#give-up.btn.btn-danger {:on-click update-incorrect-counter} "Сдаться"]
    [task-selector]
    ]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render)
  (check-sound))

(defn ^:dev/after-load reload! []
  (render)
  (check-sound))
