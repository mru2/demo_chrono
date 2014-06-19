'use strict';

angular.module('demoChronoApp')
  .controller('MainCtrl', function ($scope, Client, Colors, Calendars, Services) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.client = Client;
    $scope.colors = Colors;
    $scope.calendars = Calendars;
    $scope.services = Services;

    $scope.updateTheme = function(){

      Colors.set({
        moduleBg: '#FF0000'
      });

    };

    $scope.updateCalendars = function(){

      Calendars.set([
        'DUSSE Jean-Claude',
        'BARTHELEMY Maurice'
      ]);

    };


  });
