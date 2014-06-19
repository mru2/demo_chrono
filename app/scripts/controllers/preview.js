'use strict';

angular.module('demoChronoApp')
  .controller('PreviewCtrl', function ($scope, Client, Colors, Calendars, Services) {

  		$scope.colors = Colors;
  		$scope.client = Client;
  		$scope.services = Services;

  		$scope.activeCategory = null;
  		$scope.setCategory = function(category){
  			$scope.activeCategory = category;
  		};

  });
