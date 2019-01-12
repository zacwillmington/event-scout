class ApplicationController < ActionController::API
    include ActionController::MimeResponds
    # protect_from_forgery with: :null_session
end
