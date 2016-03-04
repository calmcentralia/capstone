var AppDispatcher = require('../dispatcher/dispatcher');

var ErrorActions = {
  receiveSongErrors: function(songErrors) {
    AppDispatcher.dispatch({
      actionType: "SONG ERRORS",
      errors: songErrors.errors
    });
  },

  receiveArtistErrors: function(artistErrors) {
    AppDispatcher.dispatch({
      actionType: "ARTIST ERRORS",
      errors: artistErrors.errors
    });
  }
};

module.exports = ErrorActions;
