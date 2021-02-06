class Tournament < ApplicationRecord
    enum format: [:single_knockout, :double_knockout]

    has_and_belongs_to_many :teams #research zu , :dependent => :destroy
    has_many :matches, :dependent => :destroy #wenn turnier gelöscht lösche alle matches und dann turnier

    validates_uniqueness_of :name
    validates_presence_of :name
end
