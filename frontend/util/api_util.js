var ArtistActions = require('../actions/artist_actions');
var SongActions = require('../actions/song_actions');
var AnnotationActions = require('../actions/annotation_actions');
var CommentActions = require('../actions/comment_actions');
var ErrorActions = require('../actions/error_actions');
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
        ErrorActions.receiveArtistErrors(JSON.parse(request.responseText));
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
        ErrorActions.receiveSongErrors(JSON.parse(request.responseText));
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
  },

  getAllSearchOptions: function() {
    $.ajax({
      url: "api/songs",
      method: "GET",
      success: function(songs){
        SongActions.receiveAll(songs);
      }
    });
  },

  fetchComments: function(songId, annotationId) {
    $.ajax({
      url: "api/songs/" + songId + "/annotations/" + annotationId + "/comments",
      method: "GET",
      success: function(comments){

        CommentActions.receiveAll(comments);
      }
    });
  },

  createComment: function(data, songId, callback) {
    $.ajax({
      url: "api/songs/" + songId + "/annotations/" + data.annotatio_id + "/comments",
      method: "POST",
      data: {comment: data},
      success: function(comment){
        CommentActions.receiveOne(comment);
        callback && callback();
      }
    });
  },

  editComment: function(data, commentId, callback) {
    $.ajax({
      url: "api/comments/" + commentId,
      method: "PATCH",
      data: {comment: data},
      success: function(comment) {
        CommentActions.updateComment(comment);
        callback && callback();
      }
    });
  },

  deleteComment: function(commentId) {
    $.ajax({
    url: "api/comments/" + commentId,
    method: "DELETE",
    success: function(comment) {
      CommentActions.deleteComment(comment);
      }
    });
  },

  editAnnotation: function(data, annotationId, callback) {
    $.ajax({
      url: "api/annotations/" + annotationId,
      method: "PATCH",
      data: {annotation: data},
      success: function(annotation) {
        AnnotationActions.editAnnotation(annotation);
      }
    });
  }
};
module.exports = ApiUtil;
