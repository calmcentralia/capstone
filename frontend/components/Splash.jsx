var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;
var SongStore = require('../stores/song');
var SearchBar = require('./SearchBar');

var Splash = React.createClass({

  getInitialState: function(){
    return {
    songs: [[], []]
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
    ApiUtil.fetchSomeSongs({flag: "For Splash"});
  },

  componentWillUnmount: function() {
    this.songToken.remove();
  },

  render: function() {
    var recentSongRows = [];
    for (var i = 0 ; i < this.state.songs[0].length; i++) {
    recentSongRows.push(<li key={i} className="individual-song-left" id={this.state.songs[0][i].id} onClick={this.handleClick}>
    <img className= "artist_icon" src={this.state.songs[0][i].image}>
    <a>{this.state.songs[0][i].title}<span className="break"></span>{this.state.songs[0][i].artist}</a></li>);
  }
    var recentAnnotatedSongs = [];
    for (var i = 0 ; i < this.state.songs[1].length; i++) {
    recentAnnotatedSongs.push(<li key={i} className="individual-song-right" id={this.state.songs[1][i].id} onClick={this.handleClick}> <a>
    {this.state.songs[1][i].title}<span className="break"></span>{this.state.songs[1][i].artist}</a></li>);
  }
    return(
    <div>

      <header className="welcome">Welcome to MusicGenius</header>
      <div className="explanation-box">
      <div className="annotate-the-world"> Share Your Lyrical Knowledge </div>
      </div>
      <SearchBar />
      <div className="splash-box">
        <div className= "recently-added-box">
        <header className="recently-added-header"> Recently Added Songs</header>
        <ul className="song-list">
          {recentSongRows}
        </ul>
        </div>
        <div className="recently-annotated-box">
        <header className="recently-annotated-header"> Recently Annotated Songs </header>
        <ul className="annotated-song-list">
          {recentAnnotatedSongs}
        </ul>
      </div>
      </div>
    </div>
    );
  }
});

module.exports = Splash;
