class Artist < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :songs;

  def self.fuzzy_search(search_string)
      search_string = "%" + search_string + "%"
      self.where("title LIKE ? or price LIKE ?", search_string, search_string)
  end
end
