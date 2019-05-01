module Api
    module V1    
        class EventsController < ApplicationController

            def index
                if params[:user_id]
                    @user = User.find(params[:user_id].to_i)
                    @events = @user.events
                    render json: {
                            events: @events,
                            ok: true
                        }
                else
                    @events = Event.all
                    render json: {
                            event: @events,
                             ok: true   
                        }
                end
            end

            def create
                @user = User.find(params['user_id'].to_i)
                params
                binding.pry
               @event = @user.events.create(strong_params)
                if @event.save
                    render json: {
                        data: @event, 
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

            def destroy
                @event = Event.find_by(id: params[:id].to_i
                )
                @user = User.find_by(id: params['user_id'].to_i)  
                @event.destroy
                render json: {
                    status: 201                    
                }
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

