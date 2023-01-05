class ArticlesController < ApplicationController
  def index
    if params[:set_the_flash]
      flash[:message_via_cookie] = "A cookie has been set"
    end
  end
end
