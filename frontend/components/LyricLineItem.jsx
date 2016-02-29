var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var AnnotationStore = require('../stores/annotation');
var hashHistory = require('react-router').hashHistory;

var LyricLineItem= React.createClass( {
  getInitialState: function() {
    return{
    isAnnotated: AnnotationStore.doesExist(this.props.lineNumber),
    annotation: AnnotationStore.find(this.props.lineNumber),
    newAnnotationButton: "button-off"
    };
  },

  handleLineClick: function(e) {
    e.preventDefault();
    if(this.state.isAnnotated) {
      hashHistory.push("annotations/" + this.state.annotation.id, {});
    } else {
      this.setState({newAnnotationButton: "button-on"});
    }
  },

  handleButtonClick: function(e) {
    e.preventDefault();
    hashHistory.push({
      pathname: "songs/" + this.props.songId + "/annotations/new",
       query: {lineNumber: this.props.lineNumber}
    });
  },

  render: function() {
    return(
    <div>
      <div className={this.state.isAnnotated + " song-line"} onClick={this.handleLineClick}>
      {this.props.line}
      </div>
      <button type="button" className={this.state.newAnnotationButton} onClick={this.handleButtonClick}>
        Annotate This Line?
      </button>
    </div>
  );
}

});


module.exports = LyricLineItem;
