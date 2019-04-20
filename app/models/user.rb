class User < ApplicationRecord
    # has_and_belongs_to_many :events
    has_many :events
    has_secure_password

    validates :user_name, :email, :password_digest, presence: true
    validates :email, uniqueness: true
end