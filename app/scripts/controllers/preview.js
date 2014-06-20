'use strict';

angular.module('demoChronoApp')
  .controller('PreviewCtrl', function ($scope, Client, Colors, Calendars, Services) {

  		$scope.colors = Colors;
  		$scope.client = Client;
  		$scope.services = Services;
      $scope.calendars = Calendars;

      $scope.activeTab = 0;

  		$scope.activeCategory = null;
  		$scope.setCategory = function(category){
  			$scope.activeCategory = category;
        $scope.activeService = null;
  		};

      $scope.activeService = null;
      $scope.setActiveService = function(serviceName){
        $scope.activeService = serviceName;
        $scope.activeTab = 1;
        console.log('active service is now', $scope.activeService);
      };

  });
