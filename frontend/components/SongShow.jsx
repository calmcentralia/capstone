var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var HistoryMixin = require('react-router').History;
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

  componentDidMount: function() {
    ApiUtil.fetchSong(this.props.params.songId);
    this.songToken = SongStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.songToken.remove();
  },

  render: function() {
    return(
    <div>{this.state.song.title}</div>
    );
  }
});

module.exports = SongShow;
