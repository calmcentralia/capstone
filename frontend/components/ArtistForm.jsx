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
      <div>
        <h3>Create an Artist!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" valueLink={this.linkState('name')}/><div className={this.state.error}>Artist already exists</div>
          <label>About the Artist</label>
          <textarea valueLink={this.linkState('description')}/>
          <input type="submit" value="Create Artist!" />
        </form>
      </div>
    );
  }
});

module.exports = ArtistForm;
