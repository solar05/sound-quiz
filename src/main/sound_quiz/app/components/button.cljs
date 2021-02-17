(ns sound-quiz.app.components.button
  (:require [reagent.core :as core]
            [sound-quiz.app.tasks :as t]))

(defonce playing (core/atom false))

(defn play []
  (do
  (-> js/document
      (.getElementById "sfx-sound")
      (. play))
  (swap! playing not)))

(defn pause []
  (do
  (-> js/document
      (.getElementById "sfx-sound")
      (. pause))
  (swap! playing not)))

(defn control-button []
  (if (not @playing)
    [:a {:on-click play :href "#" :style {:color :black}}
     [:i {:class "fas fa-play-circle fa-2x"}]]
    [:a {:on-click pause :style {:color :black}}
     [:i {:class "fas fa-stop-circle fa-2x"}]]))

(defn end-play []
  (reset! playing false))
