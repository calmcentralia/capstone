var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SongStore = require('../stores/song');
var AnnotationStore = require("../stores/annotation");
var LyricLineItem = require("./LyricLineItem");
var hashHistory = require('react-router').hashHistory;
var SongShow = React.createClass( {
  getInitialState: function() {
    return {
      song: SongStore.find(this.props.params.songId),
      lineClicked: -1,
      annotations: AnnotationStore.all()
    };
  },

  _songOnChange: function() {
    this.setState({song: SongStore.find(this.props.params.songId)});
  },
  _annotationOnChange: function() {
    this.setState({annotations: AnnotationStore.all()});
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

  handleLineClick: function(idx, e) {
    e.stopPropagation();
    if(AnnotationStore.doesExist(idx)) {
      this.setState({lineClicked: -1});
      hashHistory.push("songs/" + this.props.params.songId + "/annotations/" + AnnotationStore.find(idx).id, {});
    }

    else if(!this.state.song.logged_in) {
      return;
    }

    else{
    if(location.hash.split("?")[0] !== ("#/songs/" + this.props.params.songId) {
      hashHistory.push("songs/" + this.props.params.songId);
        }
    this.setState({lineClicked: idx});
    }
  },

  cancelClick: function(e) {


    // if([].slice.call(e.target.classList,0).indexOf("song-line") === -1){
    this.setState({ lineClicked: -1});
  // }
  },

  editArtistDescription: function() {
    hashHistory.push("songs/" + this.props.params.songId + "/artists/" + this.state.song.artist_id);
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({annotations: AnnotationStore.all()});
    this.setState({song: SongStore.find(newProps.params.songId)});
  },

  render: function() {
    var that = this;
    if(this.state.song.lyrics !== undefined){
      var lines =  this.state.song.lyrics.split("\n").map(function(line, idx) {
        var buttonToggle = "button-off";
        if(that.state.lineClicked === idx){
          buttonToggle = "button-on";
          }
        return (<LyricLineItem handleLineClick={that.handleLineClick.bind(that, idx)}
                               key={idx}
                               newAnnotationButton={buttonToggle}
                               line={line}
                               lineNumber={idx}
                               annotations={that.state.annotations}
                               songId={that.props.params.songId}
                               isAnnotated={AnnotationStore.doesExist(idx)}
                             loggedIn={that.state.song.logged_in}/>);
      });


      var renderSelect = location.hash.split("?")[0] === ("#/songs/" + this.props.params.songId) ?
      <div className="about-the-artist-box"><header className="about-the-artist">About the Artist</header><div className="artist-description">
        {this.state.song.description}</div><button className="edit" type="button" onClick={this.editArtistDescription}>Edit?</button> </div> :
        this.props.children;
    }
    return(
    <div className="song-show" onClick={this.cancelClick}>
    <div className="lyrics-box">
      <header className="song-header">{this.state.song.title} <span className="break"> </span> {this.state.song.artist}</header>
      <div className="song-lyrics">
        {lines}
      </div>
    </div>
      {renderSelect}
    </div>
    );
  }
});

module.exports = SongShow;
