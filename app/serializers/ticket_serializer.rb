class TicketSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :city, :state
end
