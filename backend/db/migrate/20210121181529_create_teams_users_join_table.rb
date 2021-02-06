class CreateTeamsUsersJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_table :teams_users do |t|
      t.references :team, index: true, foreign_key: {on_delete: :cascade}
      t.references :user, index: true, foreign_key: {on_delete: :restrict}
      t.string :team_role
      t.timestamps
    end

  end
end
