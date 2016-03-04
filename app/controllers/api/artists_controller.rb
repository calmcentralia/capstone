class Api::ArtistsController < ApplicationController
  def index
    if(params[:name])
      @artists = Artist.includes(:songs).find_by_name(params[:name])
      render :index
    end
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render json: @artist
    else
      render json: {errors: @artist.errors.full_messages}, status: 422
    end
  end

  def update
    @artist = Artist.find(params[:id])
      if @artist.update(decription: params[:description])
        render json: @artist
      else
        render json: {errors: @artist.errors.full_messages}, status: 422
      end
    end


  def destroy
    @artist = Artist.includes(:songs).find(params[:id])
    @artist.destroy
    render json: @artist
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :decription)
  end

end
