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
  case "COMMENT_UPDATED":
    updateComment(payload.comment);
    CommentStore.__emitChange();
    break;
  case "COMMENT_DELETED":
    deleteComment(payload.comment);
    CommentStore.__emitChange();
    break;
  }
};

CommentStore.clear = function() {
  _comments = [];
};

CommentStore.find = function(id) {
  var comment = {};
  for (var i = 0; i < _comments.length; i++) {
    if(_comments[i].id === parseInt(id)) {
      comment = _comments[i];
    }
  }
  return comment;
};

var addComment = function(comment) {
  _comments.push(comment);
};

var resetComments = function(comments) {

  _comments = comments;
};

var updateComment = function(comment) {
  for (var i = 0; i < _comments.length; i++) {
    if(_comments[i].id === comment.id) {
      _comments[i] = comment;
    }
  }
};

var deleteComment = function(comment) {
  for (var i = 0; i < _comments.length; i++) {
    if(_comments[i].id === comment.id) {
      _comments.splice(i, 1);
      break;
    }
  }
};

module.exports = CommentStore;
