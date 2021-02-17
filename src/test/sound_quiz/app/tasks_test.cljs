(ns sound-quiz.app.tasks-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [sound-quiz.app.tasks :as t]))

(deftest test-task-taking
  (let [tasks (t/shuffle-tasks)
        task (t/take-task tasks)
        updated-tasks (t/drop-task task tasks)]
    (is (not= (count tasks) (count updated-tasks)))))

(deftest test-path-building
  (let [tasks (t/shuffle-tasks)
        task (t/take-task tasks)
        title (task :title)
        paths (t/build-path title)
        builded-ost-path (str "/assets/ost/" title ".mp3")
        builded-resp-path (str "/assets/responses/" title ".mp3")]
    (is (= (paths :ost) builded-ost-path))
    (is (= (paths :resp) builded-resp-path))))
