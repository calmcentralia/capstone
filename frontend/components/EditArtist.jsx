var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;
var SongStore = require('../stores/song');
var EditArtist = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      description: SongStore.find(this.props.params.songId).description
    };
  },

  handleSubmit: function() {
    var that = this;
    ApiUtil.editArtist(this.props.params.songId, this.props.params.artistId, this.state.description, function(){
      hashHistory.push("songs/" + that.props.params.songId);
    });
  },

  render: function() {
    return(
      <div className="edit-artist-box">
        <div className="edit-header">Edit Description</div>
        <form onSubmit={this.handleSubmit}>
        <textarea className="edit-artist" valueLink={this.linkState('description')}></textarea>
        <input type="submit" value="confirm changes"></input>
        </form>
      </div>
    );
  }

});


module.exports = EditArtist;
