var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;
var ErrorStore = require('../stores/error');
var SongStore = require('../stores/song');

var SongForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      songs: SongStore.all(),
      artist: this.props.location.query.name,
      title: "",
      lyrics: "",
      albumName: "",
      errors: []
    };
  },

  _onError: function() {
    this.setState({errors: ErrorStore.all()});
  },

  componentDidMount: function() {
    ErrorStore.clear();
    this.errorToken = ErrorStore.addListener(this._onError);
    if(this.state.songs) {
      if (!this.state.songs[0][0].logged_in) {
        window.location.href= "/session/new";
      }
    }
  },

  componentWillUnmount: function() {
    this.errorToken.remove();
  },

  handleSubmit: function(e){
    e.preventDefault();
    var song = {artist: this.state.artist, title: this.state.title, lyrics: this.state.lyrics, album_name: this.state.albumName};
    var that = this;
    ApiUtil.createSong(song, function(id){
      hashHistory.push({
        pathname: "/songs/" + id
    });

  });

  },

  render: function(){
    var errors = this.state.errors.map(function(error, idx) {
      return <div key={idx}> {error} </div>
    })
    return (

      <div>
      <div className="form-header">Add a Song!</div>
      <div className="song-box">
        <div className="song-errors">{errors}</div>
        <form onSubmit={this.handleSubmit}>
          <label className="artist-name-label">Artist
          <input className="artist-name-input" type="text" valueLink={this.linkState('artist')}/>
          </label>
          <label className="song-label">Song Title
          <input className="song-input" type="text"  valueLink={this.linkState('title')}/>
          </label>
          <label className="album-label">Album Name
          <input type="text" className="album-input" valueLink={this.linkState('albumName')}/>
          </label>
          <label className="lyrics-label">Lyrics
          <textarea className="lyrics-input" valueLink={this.linkState('lyrics')}></textarea>
          <input type="submit" value="Add Song!" />
          </label>
        </form>
      </div>
    </div>
    );
  }
});

module.exports = SongForm;
