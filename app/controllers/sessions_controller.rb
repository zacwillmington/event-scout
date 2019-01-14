require 'pry'
class SessionsController < ApplicationController
    
    def new 
        binding.pry
    end

    def create 
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params['password'])
            session[:id] = @user.id
            respond_to do |format|
                format.json { render json: @user, status: 201 } 
                format.html
            end
        else

            if @user
                render json: { "errors": "Your password doesn't match." }
            else
            render :json => { "errors": "Your email isn't on record with us." }
            end
    
        end
    end

    def destroy
    end
end