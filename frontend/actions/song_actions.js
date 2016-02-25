var AppDispatcher = require('../dispatcher/dispatcher');


var SongActions = {
  receiveOne: function(song) {
    AppDispatcher.dispatch({
      actionType: "SONG RECEIVED",
      song: song
    });
  }
};
