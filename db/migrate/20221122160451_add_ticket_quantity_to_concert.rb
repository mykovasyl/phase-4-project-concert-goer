class AddTicketQuantityToConcert < ActiveRecord::Migration[6.1]
  def change
    add_column :concerts, :quantity, :integer
  end
end
