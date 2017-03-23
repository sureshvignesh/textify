Rails.application.routes.draw do
  get 'home/index' => 'home#index'
  root 'home#profile'
  devise_for :users
  mount Ckeditor::Engine => '/ckeditor'

  post '/home/autosave' => 'home#autosave'
  post '/home/merge' => 'home#merge'
  post 'submit' => 'home#submit',                                                                   :as => :submit
  get 'home/completed_docs' => 'home#completed_docs'
  get 'home/profile' => 'home#profile',                                                             :as => :profile
end
