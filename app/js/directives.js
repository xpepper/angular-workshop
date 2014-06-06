'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('myDatepicker', [function() {
    return {
      restrict: "A",
      replace: false,
      require: "ngModel",
      scope: {
        "date": "=ngModel"
      },
      link: function(scope, element, attibutes) {
        $(element).datepicker({
          format: "mm/dd/yyyy"
        }).on('changeDate', function(e) {
          return scope.$apply(function() {
            return scope.date = e.format();
          });
        });
        scope.$watch('date', function(changed){
          $(element).datepicker('update', changed);
        });
      }
    }
  }])
  .directive('myHeader', ['$location', 'User', function($location, User) {
    return {
      restrict: "EA",
      replace: true,
      templateUrl: "partials/my-header.html",
      link: function(scope, element, attributes) {
        scope.$watch(
          function() {
            return $location.path();
          },
          function(newPath) {
            scope.currentPath = newPath;
          }
        );

        scope.$watch(
          function() {
            return User.isConnected();
          },
          function(newStatus) {
            scope.userLogged = newStatus;
          }
        );
      }
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
