var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var 

var ArtistForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      name: "",
      description: ""
    };
  },

  handleSubmit: function(e){
    e.preventDefault();
    var artist = {name: this.state.name, description: this.state.description};
    ApiUtil.createArtist(artist);

  },

  render: function(){
    return (
      <div>
        <h3>Create an Artist!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" valueLink={this.linkState('name')}/>
          <label>About the Artist</label>
          <textarea valueLink={this.linkState('description')}/>
          <input type="submit" value="Create Artist!" />
        </form>
      </div>
    );
  }
});
