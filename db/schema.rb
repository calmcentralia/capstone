# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160303005646) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "song_id",     null: false
    t.text     "body",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "line_number", null: false
    t.string   "image_url"
  end

  add_index "annotations", ["song_id"], name: "index_annotations_on_song_id", using: :btree
  add_index "annotations", ["user_id"], name: "index_annotations_on_user_id", using: :btree

  create_table "artists", force: :cascade do |t|
    t.string   "name",       null: false
    t.text     "decription"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "artists", ["name"], name: "index_artists_on_name", using: :btree

  create_table "comments", force: :cascade do |t|
    t.text     "body",          null: false
    t.integer  "annotation_id", null: false
    t.integer  "user_id",       null: false
    t.string   "image_url"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "songs", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "artist_id",  null: false
    t.string   "album_name"
    t.string   "title",      null: false
    t.text     "lyrics",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "songs", ["artist_id"], name: "index_songs_on_artist_id", using: :btree
  add_index "songs", ["title"], name: "index_songs_on_title", using: :btree
  add_index "songs", ["user_id"], name: "index_songs_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
