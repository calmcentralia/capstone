var ArtistActions = require('../actions/artist_actions');
var SongActions = require('../actions/song_actions');
var AnnotationActions = require('../actions/annotation_actions');
var ApiUtil = {
  createArtist: function(data, callback) {
    $.ajax({
      url: "api/artists",
      method: "POST",
      data: { artist: data },
      success: function(artist) {
        ArtistActions.receiveOne(artist);
        callback && callback();
      },
      error: function(request, status, error) {
        ArtistActions.error();
      }
    });
  },
  createSong: function(data, callback) {
    $.ajax({
      url: "api/songs",
      method: "POST",
      data: {song: data},
      success: function(song) {
        SongActions.receiveOne(song);
        callback && callback(song.id);
      },
      error: function(request, status, error) {
      }
    });
  },

  fetchSomeSongs: function(flag) {
    $.ajax({
      url: "api/songs",
      method: "GET",
      data: flag,
      success: function(songs) {
        SongActions.receiveSome(songs);
      }
    });
  },

  fetchSong: function(id) {
    $.ajax({
      url: "api/songs/" + id,
      method: "GET",
      success: function(song) {
        SongActions.receiveOne(song);
      }
    });
  },

  createAnnotation: function(data, callback) {
    $.ajax({
      url: "api/songs/" + data.song_id + "/annotations",
      method: "POST",
      data: {annotation: data},
      success: function(annotation) {
        AnnotationActions.receiveOne(annotation);
        callback && callback();
      }
    });
  },

  fetchAnnotation: function(songId, id) {
    $.ajax({
      url: "api/songs/" + songId + "/annotations/" + id,
      method: "GET",
      success: function(annotation) {
        AnnotationActions.receiveOne(annotation);
      }
    });
  },

  fetchAnnotations: function(songId) {
    $.ajax({
      url: "api/songs/" + songId + "/annotations",
      method: "GET",
      data: { song_id : songId},
      success: function(annotations) {
        AnnotationActions.receiveAll(annotations);
      }
    });
  },

  editArtist: function(songId, artistId, description, callback) {
    $.ajax({
      url: "api/artists/" + artistId,
      method: "PATCH",
      data: {description: description},
      success: function(artist){

        SongActions.updateArtist(songId, artist);
        callback && callback();
      }
    });
  }
};
module.exports = ApiUtil;
