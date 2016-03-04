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
var AnnotationShow = require('./components/AnnotationShow');
var AnnotationForm = require('./components/AnnotationForm');
var EditArtist = require('./components/EditArtist');
var CommentForm = require('./components/CommentForm');
// var EditComment = require('./components/EditComment');

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
    <Route path="songs/:songId" component={SongShow}>
      <Route path="annotations/new" component={AnnotationForm} />
      <Route path="annotations/:annotationId" component={AnnotationShow}>
        <Route path="comments/new" component={CommentForm} />

      </Route>
      <Route path="artists/:artistId" component={EditArtist} />
    </Route>
  </Route>
);
document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById("content");
  ReactDOM.render(<Router>{routes}</Router>, root);
});
