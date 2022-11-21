class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :name, :city, :state
end
