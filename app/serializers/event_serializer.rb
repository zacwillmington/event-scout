class EventSerializer < ActiveModel::Serializer
    attributes :id, :name, :venue_id, :description, :url, :start, :end, :status, :currency
    
end