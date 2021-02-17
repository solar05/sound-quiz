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
        path (t/build-path title)
        builded-path (str "/assets/" title ".mp3")]
    (is (= path builded-path))))
