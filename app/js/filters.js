'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('emphasize', function() {
	return function(text, search) {
    if (!text){
      text = "";
    }
    else {
		    return text.replace(search, "<span class='label label-info'>" + search + "</span>");
      }
	};
  });
