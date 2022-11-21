class Ticket < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :name, presence: true
end
