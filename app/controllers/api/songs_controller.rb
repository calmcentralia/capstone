class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render :index
  end

  def create
    @artist = Artist.find_by(name: params[:name])
    render json: {errors: "artist must exist"}, status: 422 unless @artist
    @song = @artist.songs.new(song_params)
    if @song.save
      render :show
    else
      render json: {errors: @song.errors.full_messages}, status: 422
    end
  end
end
