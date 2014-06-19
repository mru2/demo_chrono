'use strict';

angular.module('demoChronoApp')
  .controller('MenuCtrl', function ($scope, Client, Colors, Calendars, Services, ColorsStore, ServicesStore) {

    $scope.client = Client;

    $scope.calendars = Calendars;
    $scope.newCalendar = '';

    $scope.removeCalendar = function(calendar){
      Calendars.remove(calendar);
    }

    $scope.addCalendar = function(){
      Calendars.push($scope.newCalendar);
      $scope.newCalendar = '';
    }


    $scope.themes = ColorsStore;
    $scope.currentTheme = null;

    $scope.selectTheme = function(theme){
      console.log('selecting theme', theme);
      $scope.currentTheme = theme.name;
      Colors.set(theme.values);
    };

    $scope.businesses = ServicesStore;
    $scope.currentBusiness = null;

    $scope.selectBusiness = function(business){
      $scope.currentBusiness = business.name;
      Services.set(business.categories);
    }

  });
