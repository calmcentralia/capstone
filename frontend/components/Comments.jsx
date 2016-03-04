var React = require('react');
var ApiUtil = require('../util/api_util');
var CommentStore = require('../stores/comment');
var hashHistory = require('react-router').hashHistory;

var Comments = React.createClass({

  getInitialState: function(){
    return{
    comments: CommentStore.all()
  };
  },

  _onChange: function(){
    this.setState({ comments: CommentStore.all()});
  },

  componentDidMount: function(){
    ApiUtil.fetchComments(this.props.songId, this.props.annotationId);
    this.commentTokens = CommentStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.commentTokens.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    CommentStore.clear();
    ApiUtil.fetchComments(nextProps.songId, nextProps.annotationId);
  },

  render: function() {

    var commentRows = this.state.comments.map(function(comment, idx) {
      return (
        <li key={idx}>
          <div className="comment-username">{comment.username}</div>
          <div className="comment-body">{comment.body}
          <div className="comment-image">
          <img src={comment.image_url} />
          </div>

        </div>
        </li>
      );
    });
    return(
      <ul className="comment-list">
        {commentRows}
      </ul>
    );
  }
});

module.exports = Comments;
