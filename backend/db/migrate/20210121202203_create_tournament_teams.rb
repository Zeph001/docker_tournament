class CreateTournamentTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams_tournaments, id: false do |t|
      t.belongs_to :team
      t.belongs_to :tournament
    end
  end
end
