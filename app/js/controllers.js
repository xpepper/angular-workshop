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
		  $http.get("http://rest.test.croley.it/search/" + searchKey).success(function(data){
			  $scope.results = data;
		  });
	  };

  }])
  .controller('LoginCtrl', ['$scope', '$location', '$http', 'User', function($scope, $location, $http, User){
	  
	  $scope.login = function(credentials) {
		  $scope.loginError = false;
		  $http.post("http://rest.test.croley.it/login", credentials).success(function() {
			  User.setCredentials(credentials.username, credentials.password);
			  $location.path("/publish");
		  })
		  .error(function(error) {
			  $scope.loginError = error;
		  });
		  //do something
	  };
	  
  }])
  .controller('LogoutCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
	  User.voidCredentials();
	  $location.path("/");
  }])
  .controller('PublishCtrl', ['$scope', '$location', '$http', 'User', function($scope, $location, $http, User){

	  if(!User.isConnected()) {
		  $location.path("/login");
	  }
	  
	  $scope.publish = function(news) {
		  $http.post("http://rest.test.croley.it/news", news).success(function(data) {
			  $scope.newsPublished = "News " + data.id + " published!";
			  $scope.news = {};
		  });
	  }
	  
  }])
  ;
