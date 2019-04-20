class UserSerializer < ActiveModel::Serializer
    attributes :id, :user_name, :email, :password_digest
    # has_and_belongs_to_many :events
    has_many :events    
end