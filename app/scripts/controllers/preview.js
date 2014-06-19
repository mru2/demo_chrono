'use strict';

angular.module('demoChronoApp')
  .controller('PreviewCtrl', function ($scope, Client, Colors, Calendars, Services) {

  		$scope.colors = Colors;
  		$scope.client = Client;
  		$scope.categories = Services.all;

  });
