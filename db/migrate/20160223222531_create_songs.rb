class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.integer :user_id, null: false
      t.integer :artist_id, null: false
      t.string :album_name
      t.string :title, null: false
      t.text :lyrics, null: false
      t.timestamps null: false
    end
    add_index :songs, :title
    add_index :songs, :user_id
    add_index :songs, :artist_id
  end
end
