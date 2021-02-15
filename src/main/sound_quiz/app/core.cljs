(ns sound-quiz.app.core
  (:require [reagent.dom :as rdom]
            [cljs-bach.synthesis :as b]
            [sound-quiz.app.tasks :as t]))

(defonce audio-context (b/audio-context))

(defn playback-mp3
  [url]
  (let [mp3 (b/connect-> (b/sample url)  ; read file using js ajax, including caching
                         (b/gain 0.5)    ; you can chain optional effects here
                         b/destination)  ; loudspeakers
        ]
    (b/run-with mp3
                audio-context
                (b/current-time audio-context) 
                3.0  ; play for 3 seconds
                )))

(defn preload-sound [path]
  (b/sample path))

(defn run-sound []
  (let [tasks (t/shuffle-tasks)
        task (t/take-task tasks)
        updated-tasks (t/drop-task task tasks)
        path (t/build-path (task :title))]
    (do
      (preload-sound path)
      (playback-mp3 path))))

(defn app []
  [:div {:class "container"}
   [:div {:class "jumbotron"}
    [:h1 {:class "display-4"} "Game Sound Quiz!"]
    [:input.btn.btn-success {:type "button" :value "Click me!" :on-click run-sound}]]
   ])


(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))

