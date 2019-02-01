module Api
    module V1    
        class EventsController < ApplicationController

            def index
                @events = Event.all
                render json: @events
            end

            def create
                @event = Event.new(strong_params)
                binding.pry
                if @event.save

                    render json: {
                        event: @event,
                        status: 201
                    }
                else
                    render json: {
                        event: @event,
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

