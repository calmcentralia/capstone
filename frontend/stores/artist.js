var Store = require('flux/utils').Store;
var ArtistConstants = require('../constants/artist_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ArtistStore = new Store(AppDispatcher);
var _artists = [];

var resetArtists = function(artists) {
  _artists = artists.slice();
};

var addArtist = function(artist) {
  _artists.push(artist);
};

var updateArtist = function(artist) {
  for (var i = 0; i < _artists.length; i++) {
    if(_artists[i].id === artist.id) {
      _artists[i] = artist;
    }
  }
};

ArtistStore.all = function () {
  return _artists.slice();
};

ArtistStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArtistConstants.ARTIST_RECEIVED:
      addArtist(payload.artist);
      break;
    case "error":
      ArtistStore.__emitChange();
      break;
    case "UPDDATE_ARTIST":
      updateArtist(payload.artist);
  }
};

module.exports = ArtistStore;
