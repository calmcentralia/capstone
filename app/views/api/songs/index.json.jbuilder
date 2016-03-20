
json.recently_added do

  json.array!(@recent_songs) do |song|
    json.title song.title
    json.artist song.artist.name
    json.id song.id
    json.image song.artist.image_url
    json.logged_in signed_in?
  end
end

json.recently_annotated do
  json.array!(@recently_annotated) do |song|
    json.title song[:title]
    json.artist song[:artist]
    json.id song[:id]
    json.image song[:image]
  end
end
