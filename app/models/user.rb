class User < ApplicationRecord
    has_and_belongs_to_many :events
    has_secure_password

    validates :user_name, :email, :password, presence: true
    validates :password, length: { minimum: 6 }
    validates :user_name, :email, uniqueness: true

end