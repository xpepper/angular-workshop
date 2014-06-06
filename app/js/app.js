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
  $routeProvider.when('/allNews', {templateUrl: 'partials/listNews.html', controller: 'NewsController'});
	$routeProvider.when('/publish', {templateUrl: 'partials/publish.html', controller: 'NewsController'});
	$routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'});
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
	$routeProvider.when('/logout', {template:'', controller: 'LogoutCtrl'});
	$routeProvider.otherwise({redirectTo: '/home'});
}]);
