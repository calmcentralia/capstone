class Annotation < ActiveRecord::Base
  belongs_to :user
  belongs_to :song
  has_many :comments

end
