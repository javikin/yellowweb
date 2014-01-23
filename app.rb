# app.rb

require 'sinatra'
require 'sinatra/flash'
require 'sinatra/redirect_with_flash'

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