class TicketClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :ticket_classes do |t|
      t.string :name
      t.integer :event_id
      t.text :description
      t.decimal :cost
      t.decimal :fee
      t.boolean :free
      t.integer :maximum_quantity
    end
  end
end
