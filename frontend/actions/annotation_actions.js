var AppDispatcher = require('../dispatcher/dispatcher');

var AnnotationActions = {
  receiveOne: function(annotation) {
    AppDispatcher.dispatch({
      actionType: "ANNOTATION_RECEIVED",
      annotation: annotation
    });
  },

  receiveAll: function(annotations) {
    AppDispatcher.dispatch({
      actionType: "ANNOTATIONS_RECEIVED",
      annotations: annotations
    });
  },

  editAnnotation: function(annotation) {
    AppDispatcher.dispatch({
      actionType: "ANNOTATION_UPDATED",
      annotation: annotation
    });
  }
};

module.exports = AnnotationActions;
