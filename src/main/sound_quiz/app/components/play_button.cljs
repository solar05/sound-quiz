(ns sound-quiz.app.components.play-button
  (:require [reagent.core :as core]))

(defonce ost-playing (core/atom false))
(defonce response-playing (core/atom false))

(defn focus-answer []
  (-> js/document
      (.getElementById "answer")
      (. focus)))

(defn play [audio-element]
  (-> js/document
      (.getElementById audio-element)
      (. play)))

(defn stop [audio-element]
  (-> js/document
      (.getElementById audio-element)
      (. pause)))

(defn play-ost []
  (do
    (play "ost-sound")
    (focus-answer)
    (swap! ost-playing not)))

(defn pause-ost []
  (do
    (stop "ost-sound")
    (focus-answer)
    (swap! ost-playing not)))

(defn play-response []
  (do
    (play "resp-sound")
    (focus-answer)
    (swap! response-playing not)))

(defn pause-response []
  (do
    (stop "resp-sound")
    (focus-answer)
    (swap! response-playing not)))

(defn ost-control-button []
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
