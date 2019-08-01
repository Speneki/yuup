class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :business_name, null:false
      t.string :address, null:false
      t.float :longitude, null:false
      t.float :latitude, null:false
      t.string :number, null:false
      t.string :website, null:false
      t.string :price, null:false
      t.string :category, null:false

      t.timestamps
    end
  end
end
