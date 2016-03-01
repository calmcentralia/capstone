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
      actionType: "UPDDATE_ARTIST",
      artist: artist,
      songId: songId
    });
  }
};

module.exports = SongActions;
