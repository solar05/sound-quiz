(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [cljs-bach.synthesis :as b]
            [sound-quiz.app.tasks :as t]))

(defonce audio-context (b/audio-context))

(defn playback-mp3
  [url duration]
  (let [mp3 (b/connect-> (b/sample url)  ; read file using js ajax, including caching
                         (b/gain 0.5)    ; you can chain optional effects here
                         b/destination)  ; loudspeakers
        ]
    (b/run-with mp3
                audio-context
                (b/current-time audio-context) 
                duration)))

(defn preload-sound [path]
  (b/sample path))

(defn run-sound []
  (let [tasks (t/shuffle-tasks)
        task (t/take-task tasks)
        updated-tasks (t/drop-task task tasks)
        path (t/build-path (task :title))
        duration (task :duration)]
    (do
      (preload-sound path)
      (playback-mp3 path duration))))

(defn app []
  [:div.container
   [:div.jumbotron
    [:h1.text-center.display-4 "Game Sound Quiz!"]
    [:a {:on-click run-sound :href "#" :style {:color :black}}
     [:i {:class "fas fa-play-circle fa-2x"}]]
    [:a {:href "#" :style {:color :black}}
     [:i {:class "fas fa-spin fa-cog"}] "Loading..."]
    [:a {:href "#" :style {:color :black :cursor :not-allowed :pointer-events :none}}
     [:i {:class "fas fa-stop-circle fa-2x"}]]
    ]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))

