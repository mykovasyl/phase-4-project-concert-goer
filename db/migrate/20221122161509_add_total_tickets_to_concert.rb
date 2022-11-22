class AddTotalTicketsToConcert < ActiveRecord::Migration[6.1]
  def change
    add_column :concerts, :total_tickets, :integer
  end
end
