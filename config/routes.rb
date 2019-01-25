Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #Trim unnecessary routes after MPV is functioning
  
  namespace :api do 
    # Knock middleware route
    post '/user_token' => 'user_token#create'
    namespace :v1 do 

      post '/signin', to: 'sessions#create'
      post '/logout', to: 'sessions#destroy'

      post '/signup', to: 'users#create'
      post '/find_user', to: 'users#find_user'

      resources :users
      resources :events
      resources :venues
      resources :ticket_classes
    end
  end

end

