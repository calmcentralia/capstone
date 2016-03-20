class Song < ActiveRecord::Base
  validates :user_id, :artist_id, :title, :lyrics, presence: true
  belongs_to :user
  belongs_to :artist
  has_many :annotations


  def self.recently_added
    Song.order(created_at: :desc).take(17)
  end

  def self.recently_annotated
    unique_songs = {}
    Song.joins(:annotations).order("annotations.created_at desc").each do |song|
      unique_songs[song.id] = {artist: song.artist.name, title: song.title, id: song.id, image: song.artist.image_url}
    end
    unique_songs.values


  end

  def self.fuzzy_search(search_string)
      search_string = "%" + search_string + "%"
      self.where("title LIKE ? or price LIKE ?", search_string, search_string)
  end

end
