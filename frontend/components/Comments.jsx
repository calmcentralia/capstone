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
    ApiUtil.fetchComments(nextProps.songId, nextProps.annotationId);
  },

  delete: function(commentId) {
    ApiUtil.deleteComment(commentId);
  },

  edit: function(commentId) {
    hashHistory.push("songs/" + this.props.songId + "/annotations/" + this.props.annotationId + "/comments/" + commentId + "/edit");
  },

  render: function() {

    var that = this;
    var commentRows = this.state.comments.map(function(comment, idx) {
      return (
        <li key={idx}>
          <div className="comment-username">{comment.username}</div>
          <div className="comment-body">{comment.body}
          <div className="comment-image">
          <img src={comment.image_url} />
          </div>
          {comment.is_correct_user ?
          <div>
          <button className="edit-annotation" onClick={that.edit.bind(null, comment.id)}>
            Edit?
          </button>
          <button className="delete" onClick={that.delete.bind(null, comment.id)}>
            Delete?
          </button> </div>:
          <div></div>}
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
