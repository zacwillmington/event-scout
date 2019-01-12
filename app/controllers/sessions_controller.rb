class SessionsController < ApplicationController
    def new 
        @user = User.all.first
        respond_to do |format|
            format.html
            format.json { render json: @events }
        end
    end

    def create
        
    end

end