'use strict';

describe('Service: cardGenerator', function () {

  // load the service's module
  beforeEach(module('timelineAngularApp'));

  // instantiate service
  var cardGenerator;
  beforeEach(inject(function (_cardGenerator_) {
    cardGenerator = _cardGenerator_;
  }));

  it('should do something', function () {
    expect(!!cardGenerator).toBe(true);
  });

});
