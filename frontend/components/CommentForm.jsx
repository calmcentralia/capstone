var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;

var CommentForm = React.createClass({
  mixins: [LinkedStateMixin]
  getInitialState: function(){
    return {
      body: ""
    };
  },

  handleSubmit: function() {
    var comment = {
      body: this.state.body,
      annotation_id: this.props.params.annotationId
    };
    ApiUtil.createComment(comment function(){
      hashHistory.push("/songs/" + this.props.params.songId + "/annotations/" + this.props.annotations.annotationId);
    });
  },

  render: function() {

    return (

      <form onSubmit={this.handleSubmit}>
      <input type="text" valueLink={linkState('body')} />
      </form>
    )
  }




});
