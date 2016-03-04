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
    newAnnotationButton: this.props.newAnnotationButton,
    dontDoIt: false

    };
  },

  handleButtonClick: function(e) {
    e.preventDefault();
    this.setState({newAnnotationButton: "button-off", dontDoIt: true});
    hashHistory.push({
      pathname: "songs/" + this.props.songId + "/annotations/new",
       query: {lineNumber: this.props.lineNumber}
    });
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({isAnnotated: AnnotationStore.doesExist(nextProps.lineNumber),
      annotation: AnnotationStore.find(nextProps.lineNumber)
    });
    if(!this.state.dontDoIt){
    this.setState({newAnnotationButton: nextProps.newAnnotationButton});
    }
    this.setState({ dontDoIt: false});
  },

  render: function() {
    return(
    <div className="song-relative">
      <div onClick={this.props.handleLineClick} className={this.props.isAnnotated + " song-line"}>
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
