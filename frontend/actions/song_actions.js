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
  }
};

module.exports = SongActions;
