class Event < ApplicationRecord
    validates :name,  presence: true
    # validates :venue_id,  presence: true 
    validates :description,  presence: true
    validates :url,  presence: true
    validates :start,  presence: true
    validates :end,  presence: true
    validates :status,  presence: true
    validates :currency,  presence: true

    has_and_belongs_to_many :users
end