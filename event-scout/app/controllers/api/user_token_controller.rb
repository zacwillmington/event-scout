
class Api::UserTokenController < Knock::AuthTokenController
            skip_before_action :verify_authenticity_token

            private

            def logged_in?
              !!current_user
            end
        end
