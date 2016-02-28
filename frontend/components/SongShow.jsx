var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SongStore = require('../stores/song');

var SongShow = React.createClass( {
  getInitialState: function() {
    return {
      song: SongStore.find(this.props.params.songId)
    };
  },

  _songOnChange: function() {
    this.setState({song: SongStore.find(this.props.params.songId)});
  },
  _annotationOnChange: function() {
    this.setState({annotations: AnnotationStore.all()});
  }

  handleClick: function(e) {
  },

  componentDidMount: function() {
    ApiUtil.fetchSong(this.props.params.songId);
    ApiUtil.fetchAnnotations(this.props.params.songId);
    this.songToken = SongStore.addListener(this._songOnChange);
    this.annotationToken = AnnotationStore.addListener(this._annotationOnChange);
  },

  componentWillUnmount: function() {
    this.songToken.remove();
    this.annotationToken.remove();
  },

  render: function() {
    var that = this;
  var lines =  this.state.lyrics.split("/n").map(function(line, idx) {
      return <LyricLineItem key={idx} line={line} lineNumber={idx} annotations={that.state.annotations}/>
    })
    return(

    <div className="lyrics-box">
      <header className="song-header">{this.state.song.title}  {this.state.song.artist}</header>
      <header className="about-the-artist">About the Artist</header>
      <div className="song-lyrics">
        {lines}
      </div>

      <div className="artist-description"> {this.state.song.description}</div>
      {this.props.children}
    </div>
    );
  }
});

module.exports = SongShow;
