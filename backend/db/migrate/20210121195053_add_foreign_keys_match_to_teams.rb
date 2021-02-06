class AddForeignKeysMatchToTeams < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :matches, :teams, column: :team_1, on_delete: :nullify #, primary_key: "id"
    add_foreign_key :matches, :teams, column: :team_2, on_delete: :nullify
  end
end
