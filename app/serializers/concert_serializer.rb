class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :name, :performer, :date, :time, :city, :state

  has_many :users
end
