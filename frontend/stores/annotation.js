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
  }
};

AnnotationStore.doesExist = function (lineNumber) {
  for (var i = 0; i < _annotations.length; i++) {
    if (_annotations[i].lineNumber === lineNumber) {
      return true;
    }
  }
  return false;
};

AnnotationStore.find = function (lineNumber) {
  for (var i = 0; i < _annotations.length; i++) {
    if (_annotations[i].lineNumber === lineNumber) {
      return _annotations[i];
    }
  }
  return undefined;
};

var addAnnotation = function(annotation){
  _annotations.push(annotation);
};

var resetAnnotations = function(annotations) {
  _annotations = annotations;
};

module.exports = AnnotationStore;
