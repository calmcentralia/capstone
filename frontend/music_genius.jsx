var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Splash = require('./components/Splash');
var ArtistForm = require('./components/ArtistForm');
var SongForm = require('./components/SongForm');
var SongShow = require('./components/SongShow');


var App = React.createClass({
  render: function() {
    return (
      <div className="page">
        <header>
         </header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="artists/new" component={ArtistForm}/>
    <Route path="songs/new" component={SongForm}/>
    <Route path="songs/:songId" component={SongShow}/>
  </Route>
);
$(document).ready( function() {
  var root = document.getElementById("content");
  ReactDOM.render(<Router>{routes}</Router>, root);
});
