class Event < ApplicationRecord
    validates :name,  presence: true
    validates :description,  presence: true
    validates :url,  presence: true
    validates :start,  presence: true
    validates :end,  presence: true

    mount_uploader :logo, LogoUploader

    belongs_to :user
end