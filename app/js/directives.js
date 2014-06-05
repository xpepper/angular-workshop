'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('myHeader', [function(version) {
    return {
      restrict: "EA",
      replace: true,
      templateUrl: "partials/my-header.html"
    };
  }])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('myNews', [function(){
    return {
      replace: true,
      restrict: "EA",
      scope: {
        news: "=",
        term: "@"
      },
      templateUrl: "partials/my-news.html"
    };
  }])
  .directive('xpFooter', [function(){
    return {
      replace: true,
      restrict: "EA",
      templateUrl: "partials/my-footer.html"
    };
  }]);
