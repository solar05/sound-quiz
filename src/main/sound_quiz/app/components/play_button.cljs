(ns sound-quiz.app.components.play-button
  (:require [reagent.core :as core]))

(defonce ost-playing (core/atom false))
(defonce response-playing (core/atom false))

(defn focus-answer []
  (-> js/document
      (.getElementById "answer")
      (. focus (clj->js {:preventScroll true}))))

(defn play [audio-element]
  (-> js/document
      (.getElementById audio-element)
      (. play)))

(defn stop [audio-element]
  (-> js/document
      (.getElementById audio-element)
      (. pause)))

(defn play-ost []
  (play "ost-sound")
  (focus-answer)
  (swap! ost-playing not))

(defn pause-ost []
  (stop "ost-sound")
  (swap! ost-playing not))

(defn play-response []
  (play "resp-sound")
  (focus-answer)
  (swap! response-playing not))

(defn pause-response []
  (stop "resp-sound")
  (swap! response-playing not))

(defn ost-control-button []
  (if (not @ost-playing)
    [:a.m-1 {:on-click play-ost :href "#"}
     [:i.p-1.border.border-secondary.rounded-circle.fas.fa-play-circle.fa-3x
      {:style {:color :black}}]]
    [:a.m-1 {:on-click pause-ost :href "#"}
     [:i.p-1.border.border-secondary.rounded-circle.fas.fa-stop-circle.fa-3x
      {:style {:color :black}}]]))

(defn response-control-button []
  (if (not @response-playing)
    [:a.m-1 {:on-click play-response :href "#"}
     [:i.p-1.fas.fa-comment.fa-3x
      {:style {:color :black}}]]
    [:a {:on-click pause-response :href "#"}
     [:i.p-1.fas.fa-comment-slash.fa-3x
      {:style {:color :black}}]]))

(defn ost-end-play []
  (reset! ost-playing false))

(defn response-end-play []
  (reset! response-playing false))
