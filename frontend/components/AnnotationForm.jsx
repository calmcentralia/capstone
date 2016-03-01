var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;

var AnnotationForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {body: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var annotation = {body: this.state.body, song_id: this.props.params.songId, line_number: this.props.location.query.lineNumber};
    var that = this;
    ApiUtil.createAnnotation(annotation, function() {
      hashHistory.push({
        pathname: "/songs/" + that.props.params.songId
      });
    });
  },

  handleCancel: function(e) {
    e.preventDefault();
    hashHistory.push({
      pathname: "/songs/" + this.props.params.songId
    });
  },

  render: function(){
    return (
      <div className="annotations-form-box">
        <div className="annotation-header">
          What Does it Mean?
        </div>

        <form className="annotations-form" onSubmit={this.handleSubmit}>
          <textarea className="annotation-input" valueLink={this.linkState('body')}/>
          <button className="cancel-button" onClick={this.handleCancel}>x</button>
          <input id="add-annotation" type="submit" value="+"/>
        </form>
      </div>
    );
  }

});

module.exports = AnnotationForm;
