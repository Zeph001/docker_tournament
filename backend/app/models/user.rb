class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors.add attribute, (options[:message] || "is not an email") unless
      value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  end
end

class User < ApplicationRecord
  include ActiveModel::Validations
  attr_accessor :username, :email

  enum rank: [:default, :iron, :bronze, :silver, :gold, :platinum, :diamond, :master, :grandmaster, :challenger]
  
  has_secure_password
  has_many :team_users, dependent: :destroy
  has_many :teams, :through => :teams_users

  #Validations
  validates :email, presence: true, email: true
  validates :username, presence: true, uniqueness: true, length: 4..20
  
  validates :password, length: 6..30

  after_initialize do |user|
    #puts "You have initialized a User!"
  end
  
  before_destroy do |user|
    #check if user has dependant team or tournament
    #if user is admin of a team restrict deletion user needs to disconnect from team_admin first
    #if user is admin of tournament restrict deletion user needs to disconnect from tournament_admin first
  end

end
