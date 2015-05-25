'use strict';

/**
 * @ngdoc function
 * @name timelineAngularApp.controller:CardsCtrl
 * @description
 * # CardsCtrl
 * Controller of the timelineAngularApp
 */
angular.module('timelineAngularApp.controllers')
  .controller('CardsCtrl', function ($rootScope, $scope, cardGenerator) {
  	var self = this;

  	self.availableCards = cardGenerator.generateCards();
  });
