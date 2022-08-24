(ns cbb.affiliates
  (:require
    [rum.core :as rum :refer-macros [defc]]))

(rum/defc goodreads-link [book]
  [:div#gr_add_to_books.ng-scope.goodreads-btn
   [:div.gr_custom_each_container_
    [:a {:target "_blank"
         :href   (str "https://www.goodreads.com/book/show/" (-> book :vendors ::goodreads :product-id))}
     [:img {:alt (-> book :vendors :title)
            :src "https://www.goodreads.com/images/atmb_add_book-70x25.png"}]]]])

; powells indibound book-depository

(def affiliates
  {::amazon    {:name           ::amazon
                :display        "buy from Amazon"
                :affiliate-code "cbb-mb-20"
                :affiliate-link #(str "https://www.amazon.com/" %2 "/?tag=" %1)}
   ::goodreads {:name           ::goodreads
                :display-fn     goodreads-link
                :affiliate-link (fn [code product]
                                  (str "https://www.goodreads.com/book/show/" product))}
   ::ban       {:name           ::ban
                :display        "buy from Barnes & Noble"
                :affiliate-link #(str "" %2)}
   ::harper    {:name           ::harper
                :display        "buy from Harper Collins"
                :affiliate-link #(str "https://www.harpercollins.com/" %2)}
   ::indi      {:name           ::indi
                :display        "buy from IndieBound"
                :affiliate-code "cbb"
                :affiliate-link #(str "https://www.indiebound.org/book/" %2 "?aff=" %1)}
   ::annie     {:name           ::annie
                :display        [:span "buy signed copies from" [:br] "\u00A0\u00A0\u00A0\u00A0Annie Bloom's Books "
                                 [:span.link-note "✱"]]
                :affiliate-link #(str " https://www.annieblooms.com/book/" %2)}})


(defn affiliate-link [affiliate book]
  (let [link-fn (-> affiliates affiliate :affiliate-link)]
    (when (and link-fn book)
      (link-fn (-> affiliates affiliate :affiliate-code) (get-in book [:vendors (-> affiliates affiliate :name) :product-id])))))

(rum/defc display-link [book affiliate display]
  [:div
   [:a {:href (affiliate-link affiliate book) :target "_blank"} display]])

(rum/defc affiliate-link-list [book]
  (js/console.error book)
  [:div
   (for [a [::goodreads ::annie ::indi ::amazon ::ban ::harper]]
     (when (get-in book [:vendors a])
       [:div {:key (str "link-" a)}
        (let [{:keys [display display-fn]} (a affiliates)]
          (if display-fn
            (display-fn book)
            (display-link book a display)))]))])
