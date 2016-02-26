var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var HistoryMixin = require('react-router').History;

var SongForm = React.createClass({
  mixins: [LinkedStateMixin, HistoryMixin],

  getInitialState: function(){
    return {
      artist: "",
      title: "",
      lyrics: "",
      albumName: ""
    };
  },

  handleSubmit: function(e){
    e.preventDefault();
    var song = {artist: this.state.artist, title: this.state.title, lyrics: this.state.lyrics, album_name: this.state.albumName};
    ApiUtil.createSong(song, function(id){
      this.history.push({
        pathname: "/songs/" + id
    });

  });

  },

  render: function(){
    return (
      <div className="form-box">
        <h3 className="form-header">Add a Song!</h3>
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
    );
  }
});

module.exports = SongForm;
