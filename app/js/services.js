'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', 'step1')
  .factory('User', [function() {
	 
	  var user = {
			  "username": "",
			  "password": ""
	  };
	  
	  user.setCredentials = function(username, password) {
		user.username = username;
		user.password = password;
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
