'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('paginate', [function() {
    return function(results, page, size) {
      if (!size || size < 1) {
        size = 1;
      }
      if (!page || page < 1) {
        page = 1;
      }
      return results.slice((page-1) * size, (page-1) * size + size);
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
