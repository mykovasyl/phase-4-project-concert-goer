class Concert < ApplicationRecord
  has_many :tickets
  has_many :users, through: :tickets

  validates :name, presence: true
  validates :date, presence: true
  validates :time, presence: true
  
  # validates :total_tickets, numericality: { only_integer: true}

#   @total_available ??

#   def available_tickets
#     render json: @total_available
#   end

#   def tickets_sold
#     sold = self.total_tickets - @total_available
#     render json: sold, status: :ok
#   end

#   def available?(quantity)
#     if(@total_available >= quantity)
#       @total_available = @total_available - quantity
#       render json: quantity, status: :ok
#     else
#       render json: { error: "Quantity of tickets is not available. Please select a quantity up to #{@total_available}."}, status: :unprocessable_entity
#   end
# end

end
