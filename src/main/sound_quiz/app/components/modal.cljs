(ns sound-quiz.app.components.modal
  (:require [reagent.core :as core]
            [reagent.dom :as rdom]))

(defn modal-content []
  [:p "Угадайте, какой игре принадлежит мелодия и фраза. Введите название игры на английском, регистр не важен."])

(defn modal-button []
  [:div.fixed-bottom.mt-auto
   [:a.m-3.float-right
    {:href "#"
     :data-toggle "modal"
     :data-target "#infoModal"}
    [:i.far.fa-question-circle.fa-3x]]])

(defn render-modal []
  (do
    (rdom/render [modal-content] (.getElementById js/document "modal-body"))
    (rdom/render [modal-button] (.getElementById js/document "footer-id"))))
