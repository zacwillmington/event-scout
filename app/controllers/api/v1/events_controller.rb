module Api
    module V1    
        class EventsController < ApplicationController

            def index
                binding.pry
                @events = Event.all
                render json: @events
            end

            def create
                debugger
                @user = User.find(params['user_id'].to_i)
               @event = @user.events.create(strong_params)
                if @event.save
                    binding.pry
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
                    :logo,
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

