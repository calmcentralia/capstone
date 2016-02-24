var ArtistActions = require('../actions/artist_actions');
var ApiUtil = {
  createArtist: function(data) {
    $.post('api/artists', { artist: data }, function(artist) {
      ArtistActions.receiveOne(artist);
    });
  }
};
module.exports = ApiUtil;
