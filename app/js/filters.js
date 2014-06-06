'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('paginate', [function() {
    return function(results, page) {
      var size = 3;
      if (!page) {
        page = 0;
      }
      return results.slice(page * size, page * size + size);
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
