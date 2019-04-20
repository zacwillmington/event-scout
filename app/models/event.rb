class Event < ApplicationRecord
    validates :name,  presence: true
    validates :description,  presence: true
    validates :url,  presence: true
    validates :start,  presence: true
    validates :end,  presence: true

    # has_and_belongs_to_many :users
    belongs_to :user
end