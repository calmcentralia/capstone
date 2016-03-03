var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CommentStore = new Store(AppDispatcher);
var _comments = [];

CommentStore.all = function() {
  return _comments.slice();
};

CommentStore.__onDispatch = function(payload) {
  switch(payload.actionType){
  case "COMMENTS RECEIVED":
    resetComments(payload.comments);
    CommentStore.__emitChange();
    break;
  }
};


var resetComments = function(comments) {
  _comments = comments;
};
