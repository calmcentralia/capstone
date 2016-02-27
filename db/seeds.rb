# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

kevin_gates = Artist.create(name: "Daft Punk")

10.times do
  Song.create(title: "Around the World", artist_id: kevin_gates.id, user_id: 1, lyrics: "Around the World")
end
