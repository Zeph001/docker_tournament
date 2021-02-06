class TeamUser < ApplicationRecord
    enum role: [:user, :admin]
    belongs_to :user
    belongs_to :team
    
    validates :role, inclusion: TeamUser.roles.keys # gefunden, mal testen
end
