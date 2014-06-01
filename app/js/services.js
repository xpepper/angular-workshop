'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', 'step3')
  .factory('User', ['$http', function($http) {
	 
	  var user = {
			  "username": "",
			  "password": ""
	  };
	  
	  user.setCredentials = function(username, password) {
		user.username = username;
		user.password = password;
	    var hash64 = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(user.username + ":" + user.password));
		$http.defaults.headers.common.Authorization = 'Basic ' + hash64;
		
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
