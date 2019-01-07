class Events < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :venue_id
      t.text :description
      t.string :url
      t.datetime :start
      t.datetime :end
      t.string :status
      t.string :currency
      t.timestamps
    end
  end
end
