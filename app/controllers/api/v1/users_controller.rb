module Api
    module V1
        class UsersController < ApplicationController
            # before_action :authenticate_user
            # before_action :set_user, only: [:show, :update]
            def new

            end

            def create
                binding.pry
                @user = User.new(strong_params)
                binding.pry

                if @user.save
                binding.pry

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

            def find_user
                @user = User.find_by(email: params['user']['email'])
                if @user 
                    session['id'] = @user.id
                    render json: @user, status: 201
                else
                    render json: { 'errors': 'customise error message in find controller'}
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