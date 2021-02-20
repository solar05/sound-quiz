(ns sound-quiz.app.tasks
  (:require [clojure.string :as s]
            [sound-quiz.app.utils.main :as u]))

(def tasks
  (list
   {:title "disciples"
    :names ["disciples"]}
   {:title "disco_elysium"
    :names ["disco elysium"]}
   {:title "world_of_warcraft"
    :names ["wow" "world of warcraft"]}
   {:title "castlevania"
    :names ["castlevania"]}
   {:title "mortal_kombat"
    :names ["mortal kombat"]}
   {:title "rock_and_roll_racing"
    :names ["rock and roll racing" "rock n' roll racing"]}
   {:title "prince_of_persia"
    :names ["pop warrior within" "prince of persia"]}))

(defn task-name [task]
  (s/join " "
          (map s/capitalize
               (s/split (task :title)  #"_"))))

(defn task-count []
  (count tasks))

(defn shuffle-tasks []
  (shuffle tasks))

(defn build-path [title]
  {:ost (str "/assets/ost/" title ".mp3")
   :resp (str "/assets/responses/" title ".mp3")})

(defn take-task [tasks]
  (first tasks))

(defn drop-task [task tasks]
  (filter #(not= % task) tasks))

(defn correct? [task suggestion]
  (u/in? (task :names) (s/lower-case suggestion)))
