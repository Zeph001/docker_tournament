if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_authentication_app",
                                         domain: "http://localhost:3001" #insert web-server here
else
  Rails.application.config.session_store :cookie_store, key: "_authentication_app"

end
