var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;
var SearchStore = require('../stores/search');
var fuzzy = require('fuzzy');


var SearchBar = React.createClass({

  getInitialState: function(){
    return {
      query: "",
      allItems: SearchStore.all(),
      matches: []
    };
  },

  componentDidMount: function() {
    this.searchToken = SearchStore.addListener(this._onChange);
    ApiUtil.getAllSearchOptions();
  },

  _onChange: function() {
    this.setState({results: SearchStore.all});
  },

  componentWillUnmount: function() {
    this.searchToken.remove();
  },

  getResults: function() {
    var results = fuzzy.filter(this.state.query, this.state.allItems);
    this.setState({matches: results.map(function(el) {return el.string;})});
  },

  handleClick: function(e) {
    hashHistory.push("/songs/" + e.currentTarget.songId);
  },

  render: function() {
    var matchLines = this.state.matches.map(function(match, idx) {
      return (
        <li key={idx} className="matches" onClick={this.handleClick}>
          {match}
        </li>
      );
    });
    return(
    <div className="search-box">
      <input className="search-bar" type="search" placeholder="search songs and artists" valueLink={this.linkState('query')} onChange={this.getResults} >
      </input>
      <ul>
        {matchLines}
      </ul>
    </div>
  );
  }
});

module.exports = SearchBar;
