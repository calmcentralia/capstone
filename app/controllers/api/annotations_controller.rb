class Api::AnnotationsController < ApplicationController
  def index
    @annotations = Song.find_by_id(params[:song_id]).annotations
    render :index
  end


  def create
    if signed_in?
      @annotation = Annotation.new(
      body: params[:annotation][:body],
      line_number: params[:annotation][:line_number],
      user_id: current_user.id,
      song_id: params[:annotation][:song_id],
      image_url: params[:annotation][:image_url])
      if @annotation.save
        render :show
      else
        render json: {errors: @annotation.errors.full_messages}, status: 422
      end
    else
      render json: {errors: "must be logged in"}, status: 422
    end
  end

  def show
    @annotation = Annotation.find_by_id(params[:id])
    if @annotation
      render :show
    else
      render json: {errors: "annotation doesn't exist"}, status: 422
    end
  end

  def update
    @annotation = Annotation.find_by_id(params[:id])
    if @annotation.update(body: params[:annotation][:body], image_url: params[:annotation][:image_url])
      render json: @annotation
    else
      render json: {errors: @annotation.errors.full_messages}, status: 422
    end
  end
end
