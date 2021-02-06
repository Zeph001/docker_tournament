class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.bigint :team_1, null: true
      t.bigint :team_2, null: true
      t.integer :team_1_score, default: 0
      t.integer :team_2_score, default: 0
      t.datetime :starttime, null: false
      t.timestamps
    end
  end
end
