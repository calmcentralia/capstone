var AppDispatcher = require('../dispatcher/dispatcher');

var CommentActions = {
  receiveAll: function(comments) {
    AppDispatcher.dispatch({
      actionType: "COMMENTS_RECEIVED",
      comments: comments
    });
  }
};

module.exports = CommentActions;
