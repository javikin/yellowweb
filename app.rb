# app.rb

require 'sinatra'
require 'sinatra/flash'
require 'sinatra/redirect_with_flash'
require 'pony'

enable :sessions

helpers do
  def title
    if @title
      "#{@title}"
    else
      "Yellowme"
    end
  end
end

get "/" do  
  @title = "Inicio"
  erb :"index"
end


post "/contacto" do
  Pony.mail({
  :from => params[:email],
    :to => 'contacto@yellowme.mx', #mail que recibira el correo    
    :subject => params[:email] + " " + params[:name] + " esta interesado",
    :body => params[:message],
    :via => :smtp,
    :via_options => {
     :address              => 'smtp.gmail.com',
     :port                 => '587',
     :enable_starttls_auto => true,
     :user_name            => 'humanitymx@gmail.com', #mail para usar como mailer
     :password             => 'Human123', #password del mismo mail
     :authentication       => :plain, 
     :domain               => "localhost.localdomain" 
    }
  })
  erb :"index"
end