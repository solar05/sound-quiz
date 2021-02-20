(ns sound-quiz.app.components.modal
  (:require [reagent.core :as core]
            [reagent.dom :as rdom]
            [sound-quiz.app.tasks :as t]))

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

(def history (core/atom []))

(defn update-history [history-element]
  (swap! history #(conj % history-element)))

(defn history-modal-tasks []
  (let [table [:tbody]]
    (reduce (fn [acc task]
              (let [name (t/task-name (task :task))
                    result (task :correct)]
                (into acc
                      (if result
                        [[:tr.text-center
                          [:td [:span name]]
                          [:td [:i.fas.fa-check {:style {:color "#28a745"}}]]]]
                        [[:tr.text-center
                          [:td [:span name]]
                          [:td [:i.fas.fa-times {:style {:color "#dc3545"}}]]]]
                        ))))
            table
            @history)))

(defn history-modal-content []
  [:div.modal-dialog.modal-dialog-centered
   {:role "document"}
   [:div.modal-content
    [:div.modal-header
     [:h5#historyModalLabel.modal-title
      "История игры"]]
    [:div.modal-body
     [:table.table
      [:thead
       [:tr.text-center
        [:td "Название"]
        [:td "Результат"]]]
      [history-modal-tasks]]]
    [:div.modal-footer
     [:button.btn.btn-secondary
      {:type "button"
       :data-dismiss "modal"}
      "Закрыть"]]]])

(defn history-modal-button []
  [:a.btn.btn-info.btn-lg.d-flex.d-inline-block.justify-content-center.m-2.border.border-dark
   {:href "#"
    :data-toggle "modal"
    :data-target "#historyModal"
    } "История"])

(defn render-history-modal []
  (rdom/render [history-modal-content]
               (.getElementById js/document "historyModal")))

(defn render-modal []
  (do
    (rdom/render [modal-content] (.getElementById js/document "infoModal"))
    (rdom/render [modal-button] (.getElementById js/document "footer-id"))))
