(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [sound-quiz.app.tasks :as t]))

(defn select-task []
  (let [tasks (t/shuffle-tasks)
        task (t/take-task tasks)
        updated-tasks (t/drop-task task tasks)
        path (t/build-path (task :title))]
    path))

(defn app []
  [:div.container
   [:div.jumbotron
    [:h1.text-center.display-4 "Game Sound Quiz!"]
    [:audio {:src (select-task) :controls :true :controlsList :nodownload :preload :auto}]
    ]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))

