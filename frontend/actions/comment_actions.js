var AppDispatcher = require('../dispatcher/dispatcher');

var CommentActions = {
  receiveAll: function(comments) {
    AppDispatcher.dispatch({
      actionType: "COMMENTS_RECEIVED",
      comments: comments
    });
  },

  receiveOne: function(comment) {
    AppDispatcher.dispatch({
      actionType: "COMMENT_RECEIVED",
      comment: comment
    });
  },

  updateComment: function(comment) {
    AppDispatcher.dispatch({
      actionType: "COMMENT_UPDATED",
      comment: comment
    });
  },

  deleteComment: function(comment) {
    AppDispatcher.dispatch({
      actionType: "COMMENT_DELETED",
      comment: comment
    });
  }
};

module.exports = CommentActions;
