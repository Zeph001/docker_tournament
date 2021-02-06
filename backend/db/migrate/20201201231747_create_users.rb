class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username, limit: 20, unique: true
      t.string :email
      t.string :password_digest
      t.integer :rank
      t.string :timezone, default: "UTC", null: true
      #add password reset
      t.timestamps
    end
  end
end
