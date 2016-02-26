var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var HistoryMixin = require('react-router').History;
var SongStore = require('../stores/song');

var Splash = React.createClass({

  getInitialState: function(){
    return {
    songs: SongStore.all()
    };
  },

  _onChange: function(){
    this.setState({ songs: SongStore.all()});
  },

  componentDidMount: function() {
    this.songToken = SongStore.addListener(this._onChange);
    ApiUtil.fetchSomeSongs();
  },

  componentWillUnmount: function() {
    this.songToken.remove();
  },

  render: function() {
    var songRows = [];
    for (var i = this.state.songs.length -1 ; i >= 0; i--) {
    songRows.push(<li key={i} className="individual-song"> <a href={"#/songs/" + this.state.songs[i].id}>
    {this.state.songs[i].title + " " + this.state.songs[i].artist}</a></li>)
  }
    return(
    <div className="form-box">
      <ul className="song-list">
        {songRows}
      </ul>
    </div>
    );
  }
});

module.exports = Splash;
