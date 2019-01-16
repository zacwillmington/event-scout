module Api
    module V1
        class UsersController < ApplicationController
            # before_action :authenticate_user
            before_action :set_user, only: [:show, :update]
            def new

            end

            def create
                @user = User.new(strong_params)
                if @user.save
                    
                    render json: @user, status: 201
                else
                    render json: @user.errors, status: 400
                end
            end

            def show

            end

            def update

            end

            def delete

            end

            def find
                binding.pry
                @user = User.find_by(email: params['user']['email'])
                if @user 
                    render json: @user
                else
                    render json: { 'error': 'customise error message in find controller'}
                end
            end

            private

            def set_user
                @user = User.find_by(id: params[:id])
              end

            def strong_params
                params.require(:user).permit(:id,:user_name, :email, :password)
            end


        end
    end
end
