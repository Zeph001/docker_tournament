require 'rails_helper'
#rails g scaffold_controller <name>
RSpec.describe User, :type => :model do
  let(:user1) {create(:user, username: "tester2", email: "test@mail.com", password: "password")}
  
  before(:all) do
    #@user1 = create(:user, username: "tester", email: "test@mail.com", password: "password")
    #puts @user1.attributes
  end
  
  it "is valid with valid attributes" do
    expect(user1).to be_valid
  end
  
  it "has a unique username" do
    user2 = build(:user, email: "bob@gmail.com")
    expect(user2).to_not be_valid
  end
  
  it "has a unique email" do
    user2 = build(:user, username: "Bob")
    expect(user2).to_not be_valid
  end

  it "is not valid without a username" do 
    user2 = build(:user, username: nil)
    expect(user2).to_not be_valid
  end
  
  it "is not valid without an email" do
    user2 = build(:user, email: nil)
    expect(user2).to_not be_valid
  end

  it "is not valid without a password" do 
    user2 = build(:user, password: nil)
    expect(user2).to_not be_valid
  end

  it "has a valid rank"
end
