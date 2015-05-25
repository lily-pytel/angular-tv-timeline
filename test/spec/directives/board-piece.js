'use strict';

describe('Directive: boardPiece', function () {

  // load the directive's module
  beforeEach(module('timelineAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<board-piece></board-piece>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the boardPiece directive');
  }));
});
