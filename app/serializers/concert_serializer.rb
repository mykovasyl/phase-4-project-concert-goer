class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :name, :performer, :date, :time, :city, :state
end
