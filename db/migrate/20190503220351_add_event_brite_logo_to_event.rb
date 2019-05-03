class AddEventBriteLogoToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :eventbrite_logo, :string
  end
end
