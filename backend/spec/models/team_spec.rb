require 'rails_helper'
#rails g scaffold_controller <name>
RSpec.describe Team, type: :model do
  context "name" do

    it "is valid with valid attributes" do
      team = Team.new(name: "validname").save
      expect(team).to eq(true)
    end

    it "is required" do
      team = Team.new(name: "").save
      expect(team).to eq(false)
    end
    it "is required to have at least 6 characters" do
      team = Team.new(name: "dave").save
      expect(team).to eq(false)
    end
    it "is required to have less than 20 chars" do
      team = Team.new(name: "daveasgdaasdsgagsdgsa").save
      expect(team).to eq(false)
    end
    it "is not valid with characters other than numbers or letters"
    
  end
  context "validations for location"

  context "level" do
    let(:level) { [:beginner, :intermediate, :advanced]}
    it "ensure a valid level"
  end
end
