class Song < ActiveRecord::Base
  validates :user_id, :artist_id, :title, :lyrics, presence: true
  belongs_to :user
  belongs_to :artist
  has_many :annotations


  def Song.recenty_added
    Song.order(created_at: :desc).take(17)
  end


end
