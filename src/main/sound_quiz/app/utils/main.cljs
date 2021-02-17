(ns sound-quiz.app.utils.main)

(defn in? [coll elm]
  (some #(= elm %) coll))
