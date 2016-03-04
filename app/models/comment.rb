class Comment < ActiveRecord::Base
  validates :body, :user_id, :annotation_id, presence: true
  belongs_to :annotation
  belongs_to :user
end
