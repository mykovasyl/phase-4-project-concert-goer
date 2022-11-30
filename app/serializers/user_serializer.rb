class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :city, :state

  has_many :tickets
end
