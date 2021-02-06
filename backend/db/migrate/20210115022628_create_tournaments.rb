class CreateTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :tournaments do |t|
      t.string :name, null: false, unique: true
      t.text :description, limit: 300 #byte
      t.datetime :starttime, null: false
      t.integer :fee, default: 0
      t.integer :format
      t.bigint :admin, null: false
      t.timestamps
    end
  end
end
