(ns sound-quiz.app.components.volume
  (:require [reagent.core :as core]
            [reagent.cookies :as cookie]
            [goog.string :as gstr]
            [goog.string.format]))

(defn check-sound []
  (let [default-volume 0.5
        volume (cookie/get "volume")]
    (if (nil? volume)
      default-volume
      volume)))

(defonce volume-level-val (core/atom (check-sound)))

(defn proceed-elements-volume [volume]
  (do
    (-> js/document
        (.getElementById "ost-sound")
        (.-volume)
        (set! volume))
    (-> js/document
        (.getElementById "resp-sound")
        (.-volume)
        (set! volume))))

(defn update-sound [e]
  (let [volume (js/parseFloat (.-value (.-target e)))]
    (do
      (cookie/set! "volume" volume)
      (reset! volume-level-val volume)
      (proceed-elements-volume volume))))

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
      (proceed-elements-volume volume))))

(defn volume-control []
  [:div#volume-control.d-inline-block.justify-content-left
   (if (= 0 @volume-level-val)
     [:i.fas.fa-volume-mute.fa-2x.m-1 {:style {:color :black}}]
     [:i.fas.fa-volume-down.fa-2x.m-2 {:style {:color :black}}])
   [volume-slider]
   [:i.fas.fa-volume-up.fa-2x.d.m-2 {:style {:color :black}}]])
