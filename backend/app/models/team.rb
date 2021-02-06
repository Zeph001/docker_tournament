class Team < ApplicationRecord
    enum level: [:beginner, :intermediate, :advanced]

    has_many :team_users, dependent: :destroy
    has_many :users, :through => :teams_users

    has_and_belongs_to_many :tournaments #, :dependent => :destroy

    validates_uniqueness_of :name
    validates_presence_of :name
end
