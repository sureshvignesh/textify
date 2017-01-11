Rails.application.routes.draw do
  get 'home/index' => 'home#index'
  root 'home#index'
  devise_for :users
  mount Ckeditor::Engine => '/ckeditor'

  post 'autosave' => 'home#autosave'
  get 'home/completed_docs' => 'home#completed_docs'
end
