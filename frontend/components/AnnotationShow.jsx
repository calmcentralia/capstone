var React = require('react');
var ApiUtil = require('../util/api_util');
var AnnotationStore = require('../stores/annotation');

var AnnotationShow = React.createClass( {
  getInitialState: function() {
    return {
      annotation: AnnotationStore.findById(parseInt(this.props.params.annotationId))
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState( {annotation: AnnotationStore.findById(parseInt(nextProps.params.annotationId))});
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
    this.setState({annotation: AnnotationStore.findById(parseInt(this.props.params.annotationId)) });
  },

  render: function() {
    if(this.state.annotation === undefined) {
      return (
        <div>

        </div>
      );
    } else{
    return(
    <div className="annotation-box">
      {this.state.annotation.body}
    </div>
    );
  }
}
});

module.exports = AnnotationShow;
