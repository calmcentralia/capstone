var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchStore = new Store(AppDispatcher);
var _searchOptions = [];

SearchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case "SEARCH RECEIVED":
  resetSearch(payload.songs);
  SearchStore.__emitChange();
  break;
  }
};

SearchStore.all = function() {
  return _searchOptions.slice();
};

SearchStore.titles = function(){
  var search = [];
  for (var i = 0; i < _searchOptions.length; i++) {
    search.push(_searchOptions[i].title);
  }
  return search;
};

var resetSearch = function(songs) {
  _searchOptions = songs;
};

SearchStore.findByTitle = function(titles) {
  var matches = [];
  for (var i = 0; i < titles.length; i++) {
    for (var j = 0; j < _searchOptions.length; j++) {
      if(titles[i] === _searchOptions[j].title) {
        matches.push(_searchOptions[j]);
      }
    }
  }
  return matches;
};

module.exports = SearchStore;
