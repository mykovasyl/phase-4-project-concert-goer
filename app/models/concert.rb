class Concert < ApplicationRecord
  has_many :tickets
  has_many :users, through: :tickets

  validates :name, presence: true

  @total_available

  def available_tickets
    render json: @total_available
  end

  def tickets_sold
    sold = self.quantity - @total_available
    render json: sold, status: :ok
  end

  def available?(quantity)
    if(@total_available >= quantity)
      @total_available = @total_available - quantity
      render json: quantity, status: :ok
    else
      render json: { error: "Quantity of tickets is not available. Please select a quantity up to #{@total_available}."}, status: :unprocessable_entity
  end
end
