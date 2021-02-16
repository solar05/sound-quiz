(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [reagent.cookies :as c]
            [sound-quiz.app.tasks :as t]))

(def default-volume 0.5)

(defn task-selector []
  (let [tasks (t/shuffle-tasks)
        task (t/take-task tasks)
        updated-tasks (t/drop-task task tasks)
        path (t/build-path (task :title))]
    [:div#task-selector
     [:h3 (task :title)]
     [:audio#sfx-sound {:src path :controlsList :nodownload :preload :auto}]]))

(defn update-sound [e]
  (let [volume (js/parseFloat (.-value (.-target e)))]
  (do
    (c/set! "volume" volume)
    (-> js/document
        (.getElementById "sfx-sound")
        (.-volume)
        (set! volume)))))

(defn check-sound []
  (when (nil? (c/get "volume")) (c/set! "volume" default-volume))
  (let [volume (c/get "volume")]
    (-> js/document
        (.getElementById "sfx-sound")
        (.-volume)
        (set! volume))
    (-> js/document
        (.getElementById "volume-setting")
        (.-value)
        (set! volume))))

(defn play []
  (-> js/document
  (.getElementById "sfx-sound")
  (. play)))

(defn pause []
  (-> js/document
  (.getElementById "sfx-sound")
  (. pause)))

(defn app []
  [:div.container
   [:div.jumbotron
    [:h1.text-center.display-4 "Game Sound Quiz!"]
    (task-selector)
    [:input#volume-setting.form-range {:type :range :min 0 :max 1 :step 0.05 :onChange update-sound}]
    [:div
     [:a {:onClick play :href "#" :style {:color :black}}
      [:i {:class "fas fa-play-circle fa-2x"}]]
     [:a {:onClick pause :style {:color :black}}
      [:i {:class "fas fa-stop-circle fa-2x"}]]
     ]
    ]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render)
  (check-sound))

(defn ^:dev/after-load reload! []
  (render)
  (check-sound))
