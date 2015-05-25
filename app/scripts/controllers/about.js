'use strict';

/**
 * @ngdoc function
 * @name timelineAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the timelineAngularApp
 */
angular.module('timelineAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
