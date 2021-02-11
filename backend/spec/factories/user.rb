FactoryBot.define do 
    factory :user do
        rank { 1 }
        created_at { DateTime.now }
    end
end