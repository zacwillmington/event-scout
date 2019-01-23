require 'pry'
module Api
    module V1
        class SessionsController < ApplicationController
            before_action :authenticate_user, only: [:new, :create] 
            def new 
                # binding.pry
            end

            def create 
                @user = User.find_by(email: params[:email])
                if @user && @user.authenticate(params['password'])
                    session[:id] = @user.id
                    # binding.pry
                    render json: @user, status: 201 
                else

                    if @user
                        render json: { "errors": "Your password doesn't match." }
                    else
                    render :json => { "errors": "Your email isn't on record with us." }
                    end
            
                end
            end

            def destroy
                # binding.pry
                session[:id] = nil
                render json: {ok: true, status: 201, 'message': 'Successfully logged out.'}
            end
        end

    end
end         