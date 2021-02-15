(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]))

(defn app []
  [:div
   [:h1 "Game Sound Quiz!"]
   [:div.btn.btn-success "Run"]
   ])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
