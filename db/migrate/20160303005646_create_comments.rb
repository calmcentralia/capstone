class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :annotation_id, null: false
      t.integer :user_id, null: false
      t.string :image_url
      t.timestamps null: false
    end
  end
end
