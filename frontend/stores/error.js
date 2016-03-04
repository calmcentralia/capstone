var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ErrorStore = new Store(AppDispatcher);
var _errors = [];


ErrorStore.clear = function() {
  _errors = [];
};

ErrorStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "SONG ERRORS":
    resetErrors(payload.errors);
    ErrorStore.__emitChange();
    case "ARTIST ERRORS":
    resetErrors(payload.errors);
    ErrorStore.__emitChange();

  }

};

ErrorStore.all = function() {
  return _errors.slice();
};

var resetErrors = function(errors) {
  if(!(errors instanceof Array)) {
    _errors = [errors]
  } else {

    _errors = errors;
  }
};


module.exports = ErrorStore;
