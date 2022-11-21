class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.string :name
      t.string :performer
      t.date :date
      t.string :time
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
