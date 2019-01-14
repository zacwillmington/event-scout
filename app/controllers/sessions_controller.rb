require 'pry'
class SessionsController < ApplicationController
    
    def new 
        binding.pry
    end

    def create 
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params['password'])
            # set session
            respond_to do |format|
                format.json { render json: @user }
                format.html
            end
        else
            #Your email doesn't seem to be on our records
            binding.pry
        end
    end

    def destroy
    end
end