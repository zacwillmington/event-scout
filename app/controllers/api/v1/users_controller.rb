module Api
    module V1
        class UsersController < ApplicationController

            def new
                binding.pry
                @user = User.new(strong_params)
                if @user.save
                    render json: @user, status: 201
                else
                    render json: @user.errors, status: 400
                end

            end

            def create

            end

            def show

            end

            def update

            end

            def delete

            end

            private

            def find
                binding.pry
                @user = User.find_by(email: params['user']['email'])
                if @user 
                    render json: @user
                else
                    render json: { 'error': 'customise error message in find controller'}
                end
            end

            def strong_params
                params.require(:user).pertmit(:username, :email, :password)
            end


        end
    end
end
