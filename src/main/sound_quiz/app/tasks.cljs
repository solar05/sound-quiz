(ns sound-quiz.app.tasks)

(def tasks
  (list
   {:title "disciples"
    :names ["disciples"]}
   {:title "disco_elysium"
    :names ["disco_elysium" "disco"]}
   {:title "wow"
    :names ["wow" "world of warcraft" "warcraft"]}))

(defonce task-count (count tasks))

(defn shuffle-tasks []
  (shuffle tasks))

(defn build-path [title]
  {:ost (str "/assets/ost/" title ".mp3")
   :resp (str "/assets/responses/" title ".mp3")})

(defn take-task [tasks]
  (first tasks))

(defn drop-task [task tasks]
  (filter #(not= % task) tasks))
