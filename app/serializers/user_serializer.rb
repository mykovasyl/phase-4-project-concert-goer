class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :city, :state
end
