class AddTournamentAdminUser < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :tournaments, :users, column: :admin, on_delete: :restrict
  end
end
