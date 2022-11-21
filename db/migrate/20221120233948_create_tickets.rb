class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :name
      t.date :date
      t.string :time
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
