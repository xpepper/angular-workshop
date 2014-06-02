'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', 'step4')
  .factory('User', ['$http', '$cookieStore', function($http, $cookieStore) {
	 
	  var user = {
			  "username": "",
			  "password": ""
	  };
	  
	  user.setCredentials = function(username, password) {
		user.username = username;
		user.password = password;
	    var hash64 = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(user.username + ":" + user.password));
		$http.defaults.headers.common.Authorization = 'Basic ' + hash64;
        $cookieStore.put("user.credentials", {"username": user.username, "password": user.password});
		
	  };
	  
	  user.voidCredentials = function() {
		  user.username = "";
		  user.password = "";
		  $cookieStore.remove("user.credentials");
		  delete $http.defaults.headers.common.Authorization;
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
	  
	  if($cookieStore.get("user.credentials")) {
		  var credentials = $cookieStore.get("user.credentials");
		  user.setCredentials(credentials.username, credentials.password);
	  }
	  
	  return user;
	  
  }]);
