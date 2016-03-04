class Api::SongsController < ApplicationController
  def index
    if params[:flag] == "For Splash"
      @recent_songs = Song.recently_added
      @recently_annotated = Song.recently_annotated
      render :index
    else
      render json: Song.all
    end
  end

  def create
    if signed_in?
      @artist = Artist.find_by(name: params[:song][:artist])
      unless @artist
        render json: {errors: "Artist must Exist"}, status: 422
      else
        @song = Song.new(lyrics: params[:song][:lyrics], title: params[:song][:title], album_name: params[:song][:album_name], user_id: current_user.id, artist: @artist)
        if @song.save
          render :show
        else
          render json: {errors: @song.errors.full_messages}, status: 422
        end
      end
    else
      render json: {errors: "must be logged in"}, status: 422
    end
  end

  def show
    @song = Song.find_by_id(params[:id])
    if @song
      render :show
    else
      render json: {errors: "song doesn't exist" }, status: 422
    end
  end
  private

  def song_params
    params.require(:song).permit(:lyrics, :title, :album_name)
  end
end
