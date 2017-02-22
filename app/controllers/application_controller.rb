class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def hello
    render template: "layouts/application.html.erb"
  end
end
