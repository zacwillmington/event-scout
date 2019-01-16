Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #Trim unnecessary routes after MPV is functioning
  
  namespace :api do 
    namespace :v1 do 
      get '/signin', to: 'sessions#new'
      post '/signin', to: 'sessions#create'

      post '/signup', to: 'users#new'
      
      post 'user_token', to: 'user_token#create'
      post 'find_user', to: 'users#find'

      resources :users
      resources :events
      resources :venues
      resources :ticket_classes
    end
  end

end

