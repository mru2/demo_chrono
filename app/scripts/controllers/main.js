'use strict';

angular.module('demoChronoApp')
  .controller('MainCtrl', function ($scope, Colors, Calendars) {

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
