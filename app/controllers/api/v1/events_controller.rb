module Api
    module V1    
        class EventsController < ApplicationController

            def index
                @events = Event.all
                render json: @events
            end

            def create
                @user = User.find(params['user_id'].to_i)
               @event = @user.events.create(strong_params)
                if @event.save
                    render json: {
                        eventData: @event, 
                        ok: true
                    }
                else
                    render json: {
                        errors: @event.errors.messages,
                        ok: false
                    }
                end
            end

            def update

            end

            def delete

            end

            private

            def strong_params
                params.require(:event).permit(
                    :id, 
                    :name,
                    :venue_id,
                    :description,
                    :url,
                    :start,
                    :end,
                    :status,
                    :currency
                )
            end
        end
    end
end

