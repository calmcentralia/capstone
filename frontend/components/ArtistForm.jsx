var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var HistoryMixin = require('react-router').History;
var ArtistStore = require('../stores/artist');

var ArtistForm = React.createClass({
  mixins: [LinkedStateMixin, HistoryMixin],

  getInitialState: function(){
    return {
      name: "",
      description: "",
      error: "no"
    };
  },

  componentDidMount: function() {
    ArtistStore.addListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ error: "error"});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var artist = {name: this.state.name, decription: this.state.description};
    var that = this;
    ApiUtil.createArtist(artist, function() {
      that.history.push({
        pathname: '/'
      });
    });


  },

  render: function(){
    return (
      <div className="form-box">
        <h3 className="form-header">Create an Artist!</h3>
        <form className="form" onSubmit={this.handleSubmit} >
          <label className="artist-name-label">Name
          <input className="artist-name-input" type="text" valueLink={this.linkState('name')}/><div className={this.state.error} >Artist already exists</div>
          </label>
          <label className="artist-description-label">About the Artist
          <textarea className="artist-description-input" valueLink={this.linkState('description')}/>

          <input type="submit" value="Create Artist!" className="artist-submit" />
          </label>
        </form>
      </div>
    );
  }
});

module.exports = ArtistForm;
