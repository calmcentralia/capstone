class AddImageUrlToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotations, :image_url, :string
  end
end
