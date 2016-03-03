var React = require('react');
var ApiUtil = require('../util/api_util');
var CommentStore = require('../stores/song');
var hashHistory = require('react-router').hashHistory;

var Comments = React.createClass({

  getInitialState: function(){
    comments: CommentStore.all();
  },

  componentDidMount: function(){
    ApiUtil.fetchComments(this.props.songId, this.props.annotationId);
    this.commentTokens = CommentStore.addListener();
  },

  componentWillUnmount: function() {
    this.commentTokens.remove();
  },

  render: function() {
    var commentRows = this.state.comments.map(function(comment, idx) {
      return (
        <li>
          <div>{this.state.comment.username}</div>
          <div>{this.state.comment.body}</div>
        </li>
      );
    });
    return(
      <ul>
        {commentRows}
      </ul>
    );
  }
});
