var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
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
      <div>
        <header> </header>
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

ReactDOM.render(<Router>{routes}</Router>, root);
