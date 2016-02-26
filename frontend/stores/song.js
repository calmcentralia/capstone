var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SongStore = new Store(AppDispatcher);
var _songs = [];


SongStore.__onDispatch = function(payload) {
  switch(payload.actionType){
  case "SONG RECEIVED":
    addSong(payload.song);
    break;
  case "SONGS RECEIVED":
    resetSongs(payload.songs);
    SongStore.__emitChange();
    break;
  }
};

var addSong = function(song) {
  _songs = [song];
};

var resetSongs = function(songs) {
  _songs = songs.slice();
};


SongStore.all = function() {
  return _songs.slice();
};

SongStore.find = function(id) {
  var song = {};
  if(_songs.indexOf(id) !== -1){
  song = _songs[_songs.indexOf(id)];
  }
  return song;
};

module.exports = SongStore;
