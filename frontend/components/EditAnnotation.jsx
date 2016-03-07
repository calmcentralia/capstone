var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;
var AnnotationStore = require('../stores/annotation');

var EditAnnotation = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    var annotation = AnnotationStore.findById(parseInt(this.props.params.annotationId));
    return {
      body: annotation.body,
      image_url: annotation.image_url
    };
  },

  handleSubmit: function() {
    var annotation = {
      body: this.state.body,
      image_url: this.state.image_url
    };
    var that = this;
    ApiUtil.editAnnotation(annotation, this.props.params.annotationId, function(){
      hashHistory.push("songs/" + that.props.params.songId + "/annotations/" + that.props.params.annotationId);
    });
  },

  _onChange: function() {
    this.setState({ body: this.state.body, image_url: this.state.image_url});
  },

  componentDidMount: function() {
    this.annotationToken = AnnotationStore.addListener(this._onChange);
    ApiUtil.fetchAnnotation(this.props.params.songId, this.props.params.annotationId);
  },

  componentWillUnmount: function() {
    this.annotationToken.remove();
  },

  render: function() {
    return(
      <div className="edit-artist-box">
        <div className="edit-header">Edit Annotation</div>
        <form onSubmit={this.handleSubmit}>
        <textarea className="edit-artist" valueLink={this.linkState('body')}></textarea>
        <label className="labels">Image Url (optional)</label>
        <input className="image-input" type="text" valueLink={this.linkState('image_url')}></input>
        <input type="submit" value="confirm changes"></input>
        </form>
      </div>
    );
  }

});


module.exports = EditAnnotation;
