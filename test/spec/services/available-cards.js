'use strict';

describe('Service: availableCards', function () {

  // load the service's module
  beforeEach(module('timelineAngularApp'));

  // instantiate service
  var availableCards;
  beforeEach(inject(function (_availableCards_) {
    availableCards = _availableCards_;
  }));

  it('should do something', function () {
    expect(!!availableCards).toBe(true);
  });

});
