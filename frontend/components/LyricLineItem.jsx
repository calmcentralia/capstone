React = require('react');
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

  handleLineClick: function() {
    if(this.state.isAnnotated) {
      hashHistory.push("annotations/" + this.state.annotation.id, {});
    } else {
      this.setState(newAnnotationButton: "button-on")
    }
  },

  handleButtonClick: function() {

  }

  render: function() {
    <div>
      <div className={this.state.isAnnotated + " song-line"} onClick={this.handleLineClick}>
      {this.props.line}
      </div>
      <img className={this.state.newAnnotationButton} onClick={this.handleButtonClick} src="">
      </img>
    </div>
  }
})


module.exports = LyricLineItem;
