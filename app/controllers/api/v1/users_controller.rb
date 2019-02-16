module Api
    module V1
        class UsersController < ApplicationController
    
            def create
                @user = User.new(user_name: params['user']['user_name'], email: params['user']['email'], password_digest: params['user']['password'])
                if @user.save    
                    render json: { 
                        user: @user,
                        status: 201,
                        ok: true 
                }
                else
                    render json: {
                        errors: @user.errors.messages,
                         ok: false
                    }
                end
            end
            
            def show
                               
            end

            def update
                binding.pry
                @user = User.find(params[:id].to_i)
                @user.update(user_name: params['user_name'], email: params['email'], password_digest: params['password'])
                if @user.save
                    render json: {
                        user: @user, 
                        status: 201,
                        ok: true
                    }
                else
                    binding.pry
                    render json: { 
                        :user => @user, 
                        :errors => @user.errors,
                         :ok => false
                     }
                end
            end

            def destroy
                @user  = set_user
                if @user.destroy
                    render json: { 
                        message: 'Account has been deleted', ok: true 
                    }
                else 
                    render json: { 
                        message: @user.errors, 
                        ok: false 
                    }
                end
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
                params.require(:user).permit(:id, :user_name, :email, :password_digest)
            end


        end
    end
end
