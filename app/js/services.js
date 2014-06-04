'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', 'baseapp').
  factory('User', [function(){
    var user = {
      'username' : "",
      'password' : ""
    };

    user.setCredentials = function(credentials) {
      user.username = credentials.username;
      user.password = credentials.password;
      console.log(user);
    };

    user.logout = function() {
      user.username = user.password = "";
    };

    user.getUsername = function() {
      return user.username;
    };
    
    user.isLogged = function() {
      return user.username;
    };

    return user;
  }]);
