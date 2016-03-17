var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;
var SearchStore = require('../stores/search');
var fuzzy = require('fuzzy');


var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return {
      allItems: SearchStore.titles(),
      matches: [],
      songs: SearchStore.all(),
      shouldAppear: "dont-appear"
    };
  },

  componentDidMount: function() {
    this.searchToken = SearchStore.addListener(this._onChange);
    ApiUtil.getAllSearchOptions();
  },

  _onChange: function() {
    this.setState({songs: SearchStore.all()});
    this.setState({allItems: SearchStore.titles()});
  },

  componentWillUnmount: function() {
    this.searchToken.remove();
  },

  getResults: function(e) {
    var results = fuzzy.filter(e.target.value, this.state.allItems);
    if(e.target.value === ""){
      this.setState({shouldAppear: "dont-appear", matches: []});
    } else {
    this.setState({matches: SearchStore.findByTitle(results.map(function(el) {return el.string;}))});
    if (this.state.matches.length !== 0)
      this.setState({shouldAppear: "appear"});
  }
  },

  handleClick: function(e) {
    hashHistory.push("/songs/" + e.currentTarget.id);
  },

  goToTopResult: function(e) {
    if(e.keyCode === 13 && this.state.matches.length !== 0){
    hashHistory.push("/songs/" + this.state.matches[0].id);
  }
  },

  render: function() {
    var that = this;
    var matchLines = [];
    for (var i = 0; (i < 5) && (i < this.state.matches.length); i++) {
      matchLines.push(<li id={this.state.matches[i].id} key={i} className="matches" onClick={that.handleClick}>
        <a>{this.state.matches[i].title}</a>
      </li>);
    }
    return(
    <div className="search-box">
      <input className="search-bar" type="search" placeholder="search song titles" onChange={this.getResults} onKeyDown={this.goToTopResult}>
      </input>
      <ul className={"search-results " + this.state.shouldAppear}>
        {matchLines}
      </ul>
    </div>
  );
  }
});

module.exports = SearchBar;
