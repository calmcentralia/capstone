var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;

var CommentForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return {
      body: "",
      image_url: ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var comment = {
      image_url: this.state.image_url,
      body: this.state.body,
      annotation_id: this.props.params.annotationId
    };
    var that = this;
    ApiUtil.createComment(comment, this.props.params.songId, function(){
      hashHistory.push("/songs/" + that.props.params.songId + "/annotations/" + that.props.params.annotationId);
    });
  },

  render: function() {

    return (

      <form onSubmit={this.handleSubmit}>
      <textarea valueLink={this.linkState('body')} />
      <input type="text" valueLink={this.linkState('image_url')} />
      </form>
    );
  }




});

module.exports = CommentForm;
