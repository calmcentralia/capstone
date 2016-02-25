json.extract! @song :lyrics, :title, :album_name
json.username @song.user.username
json.artist @song.artist.name
