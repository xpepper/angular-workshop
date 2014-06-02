'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ngCookies',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl1'});
	$routeProvider.when('/publish', {templateUrl: 'partials/publish.html', controller: 'PublishCtrl'});
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
	$routeProvider.when('/logout', {template:'', controller: 'LogoutCtrl'});
	$routeProvider.otherwise({redirectTo: '/home'});
	
}]);
