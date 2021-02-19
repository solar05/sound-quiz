(ns sound-quiz.app.components.play-button
  (:require [reagent.core :as core]))

(defonce ost-playing (core/atom false))
(defonce response-playing (core/atom false))

(defn play-ost []
  (do
  (-> js/document
      (.getElementById "ost-sound")
      (. play))
  (swap! ost-playing not)))

(defn pause-ost []
  (do
  (-> js/document
      (.getElementById "ost-sound")
      (. pause))
  (swap! ost-playing not)))

(defn play-response []
  (do
    (-> js/document
        (.getElementById "resp-sound")
        (. play))
    (swap! response-playing not)))

(defn pause-response []
  (do
    (-> js/document
        (.getElementById "resp-sound")
        (. pause))
    (swap! response-playing not)))

(defn ost-control-button [elem]
  (if (not @ost-playing)
    [:a {:on-click play-ost :href "#" :style {:color :black}}
     [:i {:class "fas fa-play-circle fa-2x"}]]
    [:a {:on-click pause-ost :style {:color :black}}
     [:i {:class "fas fa-stop-circle fa-2x"}]]))

(defn response-control-button []
  (if (not @response-playing)
    [:a {:on-click play-response :href "#"}
     [:i.fas.fa-comment.fa-2x {:style {:color :black}}]]
    [:a {:on-click pause-response}
     [:i.fas.fa-comment-slash.fa-2x {:style {:color :black}}]]))

(defn ost-end-play []
  (reset! ost-playing false))

(defn response-end-play []
  (reset! response-playing false))
