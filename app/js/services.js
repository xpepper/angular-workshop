'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', 'step2')
  .factory('User', ['$http', function($http) {

	  var user = {
			  "username": "",
			  "password": ""
	  };

	  user.setCredentials = function(credentials) {
		    user.username = credentials.username;
		    user.password = credentials.password;
        var token = CryptoJS.enc.Base64.stringify(
          CryptoJS.enc.Utf8.parse(user.username + ":" + user.password)
        );
        $http.defaults.headers.common.Authorization = "Basic " + token;
        console.log("Set " + token);
	  };

	  user.getUsername = function() {
		  return user.username;
	  };

	  user.getPassword = function() {
		  return user.password;
	  };

	  user.isConnected = function() {
		  if(user.username) {
			  return true;
		  }
		  else {
			  return false;
		  }
	  }

	  return user;

  }]);
