var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;
var SongStore = require('../stores/song');

var Splash = React.createClass({

  getInitialState: function(){
    return {
    songs: []
    };
  },

  _onChange: function(){
    this.setState({ songs: SongStore.all()});
  },

  handleClick: function(e){
    hashHistory.push("/songs/" + e.currentTarget.id);
  },
  componentDidMount: function() {
    this.songToken = SongStore.addListener(this._onChange);
    ApiUtil.fetchSomeSongs({flag: "Recently Added"});
  },

  componentWillUnmount: function() {
    this.songToken.remove();
  },

  render: function() {
    var songRows = [];
    for (var i = 0 ; i < this.state.songs.length; i++) {
    songRows.push(<li key={i} className="individual-song" id={this.state.songs[i].id} onClick={this.handleClick}> <a>
    {this.state.songs[i].title + " " + this.state.songs[i].artist}</a></li>);
  }
    return(
    <div className="form-box">
      <header className="welcome">Welcome to MusicGenius</header>
      <header className="recently-added-header"> Recently Added Songs</header>
      <ul className="song-list">
        {songRows}
      </ul>
    </div>
    );
  }
});

module.exports = Splash;
