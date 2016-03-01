
var AppDispatcher = require('../dispatcher/dispatcher');
var ArtistConstants = require('../constants/artist_constants');


var ArtistActions = {
  error: function() {
    AppDispatcher.dispatch({
      actionType: "error"
    });
  },
  receiveOne: function(artist) {
    AppDispatcher.dispatch({
      actionType: ArtistConstants.ARTIST_RECEIVED,
      artist: artist
    });
  },

  updateArtist: function(artist) {
    AppDispatcher.dispatch({
      actionType: "UPDDATE_ARTIST"
      artist: artist
    });
  }
};

module.exports = ArtistActions;
