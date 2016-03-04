var AppDispatcher = require('../dispatcher/dispatcher');


var SongActions = {
  receiveOne: function(song) {
    AppDispatcher.dispatch({
      actionType: "SONG RECEIVED",
      song: song
    });
  },

  receiveSome: function(songs) {
    AppDispatcher.dispatch({
      actionType: "SONGS RECEIVED",
      songs: songs
    });
  },
  updateArtist: function(songId, artist) {
    AppDispatcher.dispatch({
      actionType: "UPDATE_ARTIST",
      artist: artist,
      songId: songId
    });
  },

  receiveAll: function(songs) {
    AppDispatcher.dispatch({
      actionType: "SEARCH RECEIVED",
      songs: songs
    });
  }
};

module.exports = SongActions;
