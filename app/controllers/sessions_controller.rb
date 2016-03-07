class SessionsController < ApplicationController
  def new
 end

 def create
   user = User.find_by_credentials(
     params[:user][:username],
     params[:user][:password]
   )

   if user
     sign_in(user)
     redirect_to root_url
   else
     flash.now[:errors] = ["Invalid username or password"]
     render :new
   end
 end

 def destroy
   if current_user.username == "guest"
    current_user.annotations.destroy_all
    current_user.comments.destroy_all
    current_user.songs.destroy_all
   end
   sign_out
   redirect_to root_url
 end
end
