Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #Trim unnecessary routes after MPV is functioning

  get '/signin', to: 'sessions#new'

  resources :users
  resources :events
  resources :venues
  resources :ticket_classes
  
end
