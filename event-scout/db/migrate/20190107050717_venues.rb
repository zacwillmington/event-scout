class Venues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :address
      t.string :age_restriction
      t.integer :capacity
      t.timestamps
    end
  end
end
