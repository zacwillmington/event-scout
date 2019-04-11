class AddLogoToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :logo, :string
  end
end
