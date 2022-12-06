class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :name, :performer, :date, :time, :city, :state

  # has_many :users

  attribute :users do
    User.distinct.pluck(:username).uniq
  end

end
