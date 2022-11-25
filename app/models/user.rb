class User < ApplicationRecord
  has_secure_password

  has_many :tickets
  has_many :concerts, through: :tickets

  validates :name, presence: true
  # validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
end
