(ns sound-quiz.app.tasks)

(def tasks
  (list
   {:title "disciples"
    :names ["disciples"]}))

(def path "/assets/")

(defn shuffle-tasks []
  (shuffle tasks))

(defn build-path [title]
  (str path title ".mp3"))

(defn take-task [tasks]
  (rand-nth tasks))

(defn drop-task [task tasks]
  (remove task tasks))
