var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var HistoryMixin = require('react-router').History;

var SongShow = React.createClass( {
  getInitialState: function() {
    return (
      song: SongStore.find()
    )
  }
}


}
