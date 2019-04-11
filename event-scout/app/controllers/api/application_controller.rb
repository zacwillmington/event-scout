class Api::ApplicationController < ActionController::API
        # include ActionController::MimeResponds
        include Knock::Authenticable
        include ::ActionController::Cookies
        
        def set_user
                @user = User.find_by(id: params[:id])
        end
end
