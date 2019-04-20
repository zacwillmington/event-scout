class EventSerializer < ActiveModel::Serializer
    attributes :id, :name, :venue_id, :description, :url, :start, :end, :status, :currency
    # has_and_belongs_to_many :users
    belongs_to :user

end