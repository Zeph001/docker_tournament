class ApplicationController < ActionController::Base
  #verifiziert den Nutzer, verhindert Missbrauch
  skip_before_action :verify_authenticity_token
end
