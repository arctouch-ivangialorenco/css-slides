'use strict';

angular
  .module('css3SlidesApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
			.when('/display', {
				templateUrl: 'views/display.html',
				controller: 'MainCtrl'
			})
			.when('/centering', {
				templateUrl: 'views/centering.html',
				controller: 'MainCtrl'
			})
			.when('/centering-unknown', {
				templateUrl: 'views/centering-unknown.html',
				controller: 'MainCtrl'
			})
      .otherwise({
        redirectTo: '/'
      });
  });
