class Api::ApplicationController < ActionController::API
        # include ActionController::MimeResponds
        include Knock::Authenticable

        
        def set_user
                @user = User.find_by(id: params[:id])
        end
end
