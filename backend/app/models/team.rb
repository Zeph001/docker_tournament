class Team < ApplicationRecord
    enum level: [:beginner, :intermediate, :advanced]

    has_many :team_users, dependent: :destroy
    has_many :users, :through => :teams_users

    has_and_belongs_to_many :tournaments #, :dependent => :destroy

    
    validates(
        :name,
        presence: true,
        :uniqueness => { :case_sensitive => false },
        length: 6..20
    ) 
end
