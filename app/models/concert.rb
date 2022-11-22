class Concert < ApplicationRecord
  has_many :tickets
  has_many :users, through: :tickets

  validates :name, presence: true

  @total_available

  def available?(quantity)
    if(@total_available >= quantity)
      @total_available = @total_available - quantity
    else
      render json: { error: "Quantity of tickets is not available. Please select a lower quantity."}, status: :unprocessable_entity
  end
end
