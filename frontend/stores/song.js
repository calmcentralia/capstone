var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SongStore = new Store(AppDispatcher);
var _songs = [];


SongStore.__onDispatch = function(payload) {
  switch(payload.actionType){
  case "SONG RECEIVED":
  SongStore.__emitChange();
    addSong(payload.song);
    break;
  case "SONGS RECEIVED":
    resetSongs(payload.songs);
    SongStore.__emitChange();
    break;
  case "UPDDATE_ARTIST":
    updateArtist(payload.artist, payload.songId);
    SongStore.__emitChange();
  }
};

var addSong = function(song) {
  _songs = [song];
};

var resetSongs = function(songs) {
  _songs = songs.slice();
};

var updateArtist = function(artist, songId) {
  for (var i = 0; i < _songs.length; i++) {
    if(_songs[i].id === parseInt(songId)) {

      _songs[i].description = artist.decription;

    }
  }
};
SongStore.all = function() {
  return _songs.slice();
};

SongStore.find = function(id) {
  var song = {};

  for (var i = 0; i < _songs.length; i++) {
    if (_songs[i].id === parseInt(id)) {
      song = _songs[i];
    }
  }
  return song;
};

module.exports = SongStore;
