class RemoveTotalTicketsColumnFromConcerts < ActiveRecord::Migration[6.1]
  def change
    remove_column :concerts, :total_tickets
  end
end
