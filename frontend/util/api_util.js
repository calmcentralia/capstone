var ArtistActions = require('../actions/artist_actions');
// var SongActions = require('../actions/song_actions');
var ApiUtil = {
  createArtist: function(data, callback) {
    $.post('api/artists', { artist: data }, function(artist) {
      ArtistActions.receiveOne(artist);
    });
    $.ajax({
      url: "api/artists",
      method: "POST",
      data: { artist: data },
      success: function(artist) {
        ArtistActions.receiveOne(artist);
        callback && callback();
      },
      error: function(request, status, error) {
        ArtistActions.error();
      }
    });
  },
  createSong: function(data, callback) {
    $.ajax({
      url: "api/song",
      method: "POST",
      data: {song: data},
      success: function(song) {
        SongActions.receiveOne(song);
        callback && callback(song.id);
      },
      error: function(request, status, error) {
      }
    });
  }
};
module.exports = ApiUtil;
