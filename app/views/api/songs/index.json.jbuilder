json.array!(@songs) do |song|
  json.title song.title
  json.artist song.artist.name
  json.id song.id
end
