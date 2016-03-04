var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;
var CommentStore = require('../stores/comment');

var EditComment = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    var comment = CommentStore.find(this.props.params.commentId);
    return {
      body: comment.body,
      image_url: comment.image_url
    };
  },

  handleSubmit: function() {
    var comment = {
      body: this.state.body,
      image_url: this.state.image_url
    };
    var that = this;
    ApiUtil.editComment(comment, this.props.params.commentId, function(){
      hashHistory.push("songs/" + that.props.params.songId + "/annotations/" + that.props.params.annotationId);
    });
  },

  render: function() {
    return(
      <div className="edit-artist-box">
        <div className="edit-header">Edit Comment</div>
        <form onSubmit={this.handleSubmit}>
        <textarea className="edit-artist" valueLink={this.linkState('body')}></textarea>
        <input className="edit-image" type="text" valueLink={this.linkState('image_url')}></input> 
        <input type="submit" value="confirm changes"></input>
        </form>
      </div>
    );
  }

});


module.exports = EditArtist;
