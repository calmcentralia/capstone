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

ArtistStore.all = function () {
  return _artists.slice();
};

ArtistStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArtistConstants.ARTIST_RECEIVED:
      addArtist(payload.artist);
      ArtistStore.__emitChange();
  }
};

module.exports = ArtistStore;
