(ns sound-quiz.app.components.modal
  (:require [reagent.core :as core]
            [reagent.dom :as rdom]))

(defn modal-content []
  [:div.modal-dialog.modal-dialog-centered
   {:role "document"}
   [:div.modal-content
    [:div.modal-header
     [:h5#infoModalLabel.modal-title
      "Информация о проекте"]]
    [:div.modal-body
     [:p "Угадайте, какой игре принадлежит мелодия и фраза. Введите название игры на английском, регистр не важен."]]
    [:div.modal-footer
     [:button.btn.btn-secondary
      {:type "button"
       :data-dismiss "modal"}
      "Закрыть"]]]])

(defn modal-button []
  [:div.fixed-bottom.mt-auto
   [:a.m-3.float-right
    {:href "#"
     :data-toggle "modal"
     :data-target "#infoModal"}
    [:i.far.fa-question-circle.fa-3x]]])

(defn render-modal []
  (do
    (rdom/render [modal-content] (.getElementById js/document "infoModal"))
    (rdom/render [modal-button] (.getElementById js/document "footer-id"))))
