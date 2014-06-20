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
        console.log('active service is now', $scope.activeService);
      };

      var _days = [
        Date.now(),
        Date.now() + 86400000,
        Date.now() + (86400000 * 2),
        Date.now() + (86400000 * 3),
        Date.now() + (86400000 * 4),
        Date.now() + (86400000 * 5),
        Date.now() + (86400000 * 6),
      ];

      var _weekDays = [
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi'
      ];

      var getWeekDay = function(ts){
        var date = new Date(ts);
        return _weekDays[date.getDay()];
      };

      var _hours = [
        '09h30',
        '10h00',
        '10h30',
        '11h00',
        '11h30',
        '12h00',
        '12h30',
        '13h00',
        '13h30',
        '14h00',
        '14h30',
        '15h00',
        '15h30',
        '16h00',
        '16h30',
        '17h00',
        '17h30',
        '18h00'
      ];


      var getHours = function(){
        return _.select(_hours, function(){
          return Math.random() > 0.2;
        });
      };

      $scope.days = _.map(_days, function(day){
        return {
          date: day,
          weekDay: getWeekDay(day),
          hours: getHours()
        };
      });
        

  });
