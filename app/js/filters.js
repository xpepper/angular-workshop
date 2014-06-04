'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('emphasize', [function() {
    return function(text, term) {
      return text.replace(term, "<span class='label label-info'>" + term + "</span>");
    };
  }]);
