class Event < ApplicationRecord
    validates :name, :venue_id, :description, :url, :start, :end, :status, :currency, presence: true
    has_and_belongs_to_many :users
end