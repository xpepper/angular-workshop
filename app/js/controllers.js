'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl1', ['$scope', '$http', function($scope, $http) {

    $scope.results = [];
    $scope.newsOrder = "title";

    $scope.erase = function() {
      $scope.results = [];
    };

    $scope.search = function(searchKey) {
      $http.get("http://rest.test.corley.it/search/" + searchKey)
        .success(function(data, status, headers, configurations) {
          $scope.results = data;
        });
    };

  }])
  .controller('LoginCtrl', ['$scope', '$location', '$http', 'User', function($scope, $location, $http, User){

    $scope.login = function(credentials) {
      $http.post("http://rest.test.corley.it/login", credentials)
        .error(function() { $scope.loginError = "invalid credentials" })
        .success(function() {
          User.setCredentials(credentials);
          $location.path("/publish");
        });
    };

  }])
  .controller('PublishCtrl', ['$scope', '$location', '$http', 'User', function($scope, $location, $http, User){

    console.log(User.isConnected());
    if (!User.isConnected()) {
      $location.path("/login");
    }

    $scope.publish = function(news) {
      console.log(news);
      $http.post("http://rest.test.corley.it/news", news)
        .success(function(){

        });

    }

  }])
  ;
