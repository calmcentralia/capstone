class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render :index
  end

  def create
    if signed_in
      @artist = Artist.find_by(name: params[:name])
      render json: {errors: "artist must exist"}, status: 422 unless @artist
      @song = @artist.songs.new(lyrics: params[:lyrics], title: params[:title], album_name: params[:album_name], user_id: current_user.id)
      if @song.save
        render :show
      else
        render json: {errors: @song.errors.full_messages}, status: 422
      end
    else
      render json: {errors: "must be logged in"} status: 422
    end
  end
private

def song_params
  params.require(:song).permit(:lyrics, :title, :album_name)
end
