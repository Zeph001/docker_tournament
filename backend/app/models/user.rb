class User < ApplicationRecord
  enum rank: [:default, :iron, :bronze, :silver, :gold, :platinum, :diamond, :master, :grandmaster, :challenger]
  
  has_secure_password
  has_many :team_users, dependent: :destroy
  has_many :teams, :through => :teams_users

  validates_presence_of :email
  validates_uniqueness_of :email
  validates_uniqueness_of :username

  after_initialize do |user|
    puts "You have initialized a User!"
  end
  
  before_destroy do |user|
    #check if user has dependant team or tournament
    #if user is admin of a team restrict deletion user needs to disconnect from team_admin first
    #if user is admin of tournament restrict deletion user needs to disconnect from tournament_admin first
  end

end
