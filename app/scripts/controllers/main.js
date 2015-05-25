'use strict';

/**
 * @ngdoc function
 * @name timelineAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timelineAngularApp
 */
angular.module('timelineAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
