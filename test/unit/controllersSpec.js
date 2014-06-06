'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should erase all results', inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    var testCtrl = $controller('HomeCtrl1', { $scope: scope });
    scope.results = [{some: "thing"}];

    scope.erase();
    expect(scope.results).toEqual([]);
  }));

  it('should erase search for news', inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    var testCtrl = $controller('HomeCtrl1', { $scope: scope });

    scope.search("something");
    expect(scope.results).toEqual([]);
  }));

});
