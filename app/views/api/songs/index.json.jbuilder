
json.recently_added do

  json.array!(@recent_songs) do |song|
    json.title song.title
    json.artist song.artist.name
    json.id song.id
  end
end

json.recently_annotated do
  json.array!(@recently_annotated) do |song|
    json.title song[:title]
    json.artist song[:artist]
    json.id song[:id]
  end
end
