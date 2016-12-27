Rails.application.routes.draw do
  get 'home/index' => 'home#index'

  devise_for :users
  mount Ckeditor::Engine => '/ckeditor'
end
