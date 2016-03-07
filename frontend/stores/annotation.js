var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var AnnotationStore = new Store(AppDispatcher);
var _annotations = [];

AnnotationStore.all = function(){
return  _annotations.slice();
};

AnnotationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "ANNOTATION_RECEIVED":
      addAnnotation(payload.annotation);
      AnnotationStore.__emitChange();
      break;
    case "ANNOTATIONS_RECEIVED":
      resetAnnotations(payload.annotations);
      AnnotationStore.__emitChange();
      break;
    case "ANNOTATION_UPDATED":
      updateAnnotation(payload.annotation);
      AnnotationStore.__emitChange();
      break;

  }
};

AnnotationStore.doesExist = function (lineNumber) {
  for (var i = 0; i < _annotations.length; i++) {
    if (_annotations[i].line_number === lineNumber) {
      return true;
    }
  }
  return false;
};

AnnotationStore.find = function (lineNumber) {
  for (var i = 0; i < _annotations.length; i++) {
    if (_annotations[i].line_number === lineNumber) {
      return _annotations[i];
    }
  }
  return undefined;
};

AnnotationStore.findById = function (id) {
  var annotation = {};
  for (var i = 0; i < _annotations.length; i++) {
    if (_annotations[i].id === id) {
      annotation = _annotations[i];
    }
  }
  return annotation;
};

var addAnnotation = function(annotation){
  _annotations.push(annotation);
};

var resetAnnotations = function(annotations) {
  _annotations = annotations;
};

var updateAnnotation = function(annotation) {
  for (var i = 0; i < _annotations.length; i++) {
    if(_annotations[i].id === annotation.id) {
      _annotations[i] = annotation;
      }
    }
  };

module.exports = AnnotationStore;
