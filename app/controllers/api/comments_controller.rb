class Api::CommentsController < ApplicationController

  def index
    @commments = Annotation.find_by_id(params[:annotation_id]).comments
    render :index
  end

  def create
    if signed_in?
      @comment = Comment.new(
      body: params[:comment][:body],
      user_id: current_user.id,
      annotation_id: params[:comment][:annotation_id],
      image_url: params[:comment][:image_url]
      )
      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json: "you need to be logged in to leave a comment", status: 422
    end
  end


end
