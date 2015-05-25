'use strict';

/**
 * @ngdoc service
 * @name timelineAngularApp.toastyMessages
 * @description
 * # toastyMessages
 * Service in the timelineAngularApp.
 */
angular.module('timelineAngularApp')
  .service('toastyMessages', function (toasty) {
  	var toastyTimeout = 2000;

    this.successMessage = function() {
    	toasty.pop.success({
    		title: 'Great!',
            msg: 'You watch too much TV.',
            timeout: toastyTimeout,
            showClose: true,
        });
    }

    this.failMessage = function() {
    	toasty.pop.error({
    		title: 'You suck.',
            msg: 'Do you even television?',
            timeout: toastyTimeout,
            showClose: true,
        });
    }
  });
