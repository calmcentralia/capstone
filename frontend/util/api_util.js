var ArtistActions = require('../actions/artist_actions');
var SongActions = require('../actions/song_actions');
var ApiUtil = {
  createArtist: function(data, callback) {
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
      url: "api/songs",
      method: "POST",
      data: {song: data},
      success: function(song) {
        debugger;
        SongActions.receiveOne(song);
        callback && callback(song.id);
      },
      error: function(request, status, error) {
      }
    });
  },

  fetchSomeSongs: function(flag) {
    $.ajax({
      url: "api/songs",
      method: "GET",
      data: flag,
      success: function(songs) {
        SongActions.receiveSome(songs);
      }
    });
  },

  fetchSong: function(id) {
    $.ajax({
      url: "api/songs/" + id,
      method: "GET",
      success: function(song) {
        SongActions.receiveOne(song);
      }
    });
  }
};
module.exports = ApiUtil;
