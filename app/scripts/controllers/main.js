'use strict';

angular.module('demoChronoApp')
  .controller('MainCtrl', function ($scope, Colors, Calendars) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.colors = Colors;
    $scope.calendars = Calendars;

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
