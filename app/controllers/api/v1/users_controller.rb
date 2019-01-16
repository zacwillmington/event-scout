module Api
    module V1
        class UsersController < ApplicationController

            def new

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

            
        end
    end
end
