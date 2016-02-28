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

  _onChange: function() {
    this.setState({song: SongStore.find(this.props.params.songId)});
  },

  handleSelect: function(e) {
  },

  componentDidMount: function() {
    ApiUtil.fetchSong(this.props.params.songId);
    this.songToken = SongStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.songToken.remove();
  },

  render: function() {
    return(

    <div className="lyrics-box">
      <header className="song-header">{this.state.song.title}  {this.state.song.artist}</header>
      <header className="about-the-artist">About the Artist</header>
      <div className="song-lyrics" onMouseDown={this.handleSelect}>{this.state.song.lyrics}</div>

      <div className="artist-description"> {this.state.song.description}</div>
    </div>
    );
  }
});

module.exports = SongShow;
