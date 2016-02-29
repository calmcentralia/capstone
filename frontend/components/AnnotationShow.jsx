var React = require('react');
var ApiUtil = require('../util/api_util');
var AnnotationStore = require('../stores/song');

var AnnotationShow = React.createClass( {
  getInitialState: function() {
    return {
      annotation: AnnotationStore.find(this.props.params.annotationId)
    };
  },

  componentDidMount: function() {
    if (this.state.annotation === undefined){
      ApiUtil.fetchAnnotation(this.props.params.songId, this.props.params.annotationId);
    }

    this.annotationToken = AnnotationStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.annotationToken.remove();
  },

  _onChange:  function() {
    this.setState({annotation: AnnotationStore.find(this.props.params.annotationId) });
  },

  render: function() {
    return(
    <div className="annotation-box">
      {this.state.annotation.body}
    </div>
    );
  }
});

module.exports = AnnotationShow;
