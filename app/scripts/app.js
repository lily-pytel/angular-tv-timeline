'use strict';

angular.module('timelineAngularApp.constants', []);
angular.module('timelineAngularApp.services', ['timelineAngularApp.constants']);
angular.module('timelineAngularApp.directives', ['timelineAngularApp.services']);
angular.module('timelineAngularApp.controllers', ['timelineAngularApp.services']);

/**
 * @ngdoc overview
 * @name timelineAngularApp
 * @description
 * # timelineAngularApp
 *
 * Main module of the application.
 */
angular
  .module('timelineAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'timelineAngularApp.controllers',
    'timelineAngularApp.services',
    'timelineAngularApp.constants',
    'timelineAngularApp.directives',
    'toasty'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cards', {
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
