var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;

var EditArtist = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      description: ArtistStore.find()
    };
  },

  handleSubmit: function() {
    var that = this;
    ApiUtil.editArtist(this.props.params.artistId, this.state.description, function(){
      hashHistory.push("songs/" + that.props.params.songId);
    });
  },

  render: function() {
    return(
      <div className="edit-artist-box">
        <form onSumbmit={this.handleSubmit}>
        <textarea className="edit-artist" value={this.state} valueLink={this.linkState('description')}></textarea>
        </form>
      </div>
    )
  }

});


module.exports = EditArtist;
