var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CommentStore = new Store(AppDispatcher);
var _comments = [];

CommentStore.all = function() {
  return _comments.slice();
};

CommentStore.__onDispatch = function(payload) {
  switch(payload.actionType){
  case "COMMENTS_RECEIVED":
    resetComments(payload.comments);
    CommentStore.__emitChange();
    break;
  case "COMMENT_RECEIVED":
    addComment(payload.comment);
    CommentStore.__emitChange();
    break;
  }
};

CommentStore.clear = function() {
  _comments = [];
}
var addComment = function(comment) {
  _comments.push(comment);
};

var resetComments = function(comments) {

  _comments = comments;
};

module.exports = CommentStore;
