(ns sound-quiz.app.components.button
  (:require [reagent.core :as core]
            [sound-quiz.app.tasks :as t]))

(defonce playing-first (core/atom false))
(defonce playing-second (core/atom false))

(defn play-first []
  (do
  (-> js/document
      (.getElementById "ost-sound")
      (. play))
  (swap! playing-first not)))

(defn pause-first []
  (do
  (-> js/document
      (.getElementById "ost-sound")
      (. pause))
  (swap! playing-first not)))

(defn play-second [elem-id]
  (do
    (-> js/document
        (.getElementById "resp-sound")
        (. play))
    (swap! playing-second not)))

(defn pause-second []
  (do
    (-> js/document
        (.getElementById "resp-sound")
        (. pause))
    (swap! playing-second not)))

(defn control-button-first [elem]
  (if (not @playing-first)
    [:a {:on-click play-first :href "#" :style {:color :black}}
     [:i {:class "fas fa-play-circle fa-2x"}]]
    [:a {:on-click pause-first :style {:color :black}}
     [:i {:class "fas fa-stop-circle fa-2x"}]]))

(defn control-button-second []
  (if (not @playing-second)
    [:a {:on-click play-second :href "#" :style {:color :black}}
     [:i {:class "fas fa-play-circle fa-2x"}]]
    [:a {:on-click pause-second :style {:color :black}}
     [:i {:class "fas fa-stop-circle fa-2x"}]]))

(defn end-play-first []
  (reset! playing-first false))

(defn end-play-second []
  (reset! playing-second false))
