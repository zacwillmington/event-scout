
class Api::UserTokenController < Knock::AuthTokenController
            # skip_before :verify_authenticity_token

            private

            def logged_in?
              !!current_user
            end
        end
