var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SongStore = new Store(AppDispatcher);
var _songs = [];


SongStore.__onDispatch = function(payload) {
  switch(payload.actionType)
  case "SONG RECEIVED":
    addSong(payload.song)
    break;
};

var addSong = function(song) {
  _songs.push(song);
}
