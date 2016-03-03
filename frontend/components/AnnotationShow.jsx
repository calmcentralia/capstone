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
      <div className="created-by">
        {this.state.annotation.username}
      </div>
      <div className="annotation-body">
        {this.state.annotation.body}
        <div className="image">
        <img src={this.state.annotation.image_url} />
        </div>
      </div>
      {this.state.annotation.is_correct_user ?
      <button className="edit" onClick={this.edit}>
        Edit?
      </button> :
      <div></div>}
      {/*  <Comments /> */}
    </div>
    );
  }
}
});

module.exports = AnnotationShow;
