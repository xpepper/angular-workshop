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
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){

	  $scope.login = function(credentials) {
		  console.log("logging...");
		  console.log(User.isConnected());
		  User.setCredentials(credentials);
		  console.log(User.isConnected());
		  $location.path("/publish");
		  //do something
	  };

  }])
  .controller('PublishCtrl', ['$scope', '$location', 'User', function($scope, $location, User){

	  console.log(User.isConnected());
	  if(!User.isConnected()) {
		  $location.path("/login");
	  }

	  $scope.publish = function(news) {
		  console.log(news);
	  }

  }])
  ;
