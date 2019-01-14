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
                format.json { render json: @user, status: 201 } 
                format.html
            end
        else

            if @user
                respond_to do |format|
                    format.json { render json: {
                        status: "error",
                        code: 3000,
                        message: "Your password doesn't match."
                     }}
                    format.html
                end
            else
                respond_to do |format|
                    format.json { render json: {
                        errors: "Your email isn't on record with us."
                    }, status: "error"}
                    format.html
            end
           
           end

        end
    end

    def destroy
    end
end