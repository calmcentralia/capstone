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
    ApiUtil.createArtist(song, function(id){
      this.history.push({
        pathname: "/artist/" + id
    });

  });

  },

  render: function(){
    return (
      <div>
        <h3>Add a Song!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Artist</label>
          <input type="text" valueLink={this.linkState('artist')}/>
          <label>title</label>
          <input type="text"  valueLink={this.linkState('title')}/>
          <label>Album Name</label>
          <input type="text" valueLink={this.linkState('albumName')}/>
          <label>Lyrics</label>
          <textarea valueLink={this.linkState('lyrics')}></textarea>
          <input type="submit" value="Add Song!" />
        </form>
      </div>
    );
  }
});

module.exports = SongForm;
