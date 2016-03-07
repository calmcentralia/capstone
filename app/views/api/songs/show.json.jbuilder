
json.extract! @song, :lyrics, :title, :album_name, :id
json.username @song.user.username
json.artist @song.artist.name
json.description @song.artist.decription
json.artist_id @song.artist.id
json.logged_in signed_in?
json.annotations do
  json.array!(@song.annotations) do |annotation|
    json.body annotation.body
    json.line_number annotation.line_number
  end
end
