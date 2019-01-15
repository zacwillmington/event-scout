Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #Trim unnecessary routes after MPV is functioning
  
  namespace :api do 
    namespace :v1 do 
      get '/signin', to: 'sessions#new'
      post '/signin', to: 'sessions#create' 

      resources :users
      resources :events
      resources :venues
      resources :ticket_classes
    end
  end

end
