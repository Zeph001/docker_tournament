require "rails_helper"

describe "Team API", type: :request do
    context "GET /teams" do
        it "returns all teams" do
            get "/teams"

            expect(response).to have_http_status(:success)
        end
    end
    # context "POST /teams" do
    #     it "create a new team" do
    #         expect{
    #             post "/teams", params: {name: {name: "The Martian"}}
    #         }.to change { Team.count }.from(0).to(1)
            
    #         expect(response).to have_http_status(:created)
    #         expect(response_body).to eq(
    #             { 
    #                 "name" => "The Martian"
    #             }
    #         )
    #     end
    # end
    
    # context "DELETE /team/:id" do
    #     let!(:team) { create(:team, name: "Tigers")}
        
    #     it "deletes a team" do
    #         expect{
    #             delete "//teams/#{team.id}"
    #         }.to change { team.count }.from(1).to(0)
            
    #         expect(response).to have_http_status(:no_content)
    #     end
    # end
end