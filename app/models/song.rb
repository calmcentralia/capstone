class Song < ActiveRecord::Base
  validates :user_id, :artist_id, :title, :lyrics, presence: true
  belongs_to :user
  belongs_to :artist
  has_many :annotations


  def Song.recently_added
    Song.order(created_at: :desc).take(17)
  end

  def Song.recently_annotated
    Song.joins(:annotations).order("annotations.created_at desc")
  end


end
