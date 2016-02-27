
json.extract! @song, :lyrics, :title, :album_name, :id
json.username @song.user.username
json.artist @song.artist.name
json.description @song.artist.decription

json.annotations do
  json.array!(@song.annotations) do |json, annotation|
    json.body annotation.body
    json.start_idx annotation.start_idx
    json.end_idx annotation.end_idx
  end
end
