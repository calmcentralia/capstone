Rails.application.routes.draw do
  root  "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:index, :create, :destroy, :update, :show]
    resources :songs, only: [:index, :create, :destroy, :update, :show] do
      resources :annotations, only: [:index, :create, :show] do
        resources :comments, only: [:index, :create]
      end
    end
    resources :comments, only: :update
  end
end
