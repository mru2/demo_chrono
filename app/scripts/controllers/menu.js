'use strict';

angular.module('demoChronoApp')
  .controller('MenuCtrl', function ($scope, Client, Colors, Calendars, Services, ColorsStore, ServicesStore) {

    $scope.client = Client;
    $scope.services = Services;

    $scope.calendars = Calendars;
    $scope.newCalendar = '';

    $scope.removeCalendar = function(calendar){
      Calendars.remove(calendar);
    }

    $scope.addCalendar = function(){
      if ($scope.newCalendar == '') { return; }
      Calendars.push($scope.newCalendar);
      $scope.newCalendar = '';
    }


    $scope.themes = ColorsStore;
    $scope.themeIsCustom = false;
    $scope.currentTheme = null;
    $scope.colors = Colors;

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

    $scope.log = function(data){
    	console.log(data)
    };

    $scope.setClientLogo = function(file, dom){
    	$scope.$apply(function(){
    		$scope.client.logo = file;
    		$scope.client.logoDom = dom[0];
    	});
    };

    var componentToHex = function(c) {
    	var hex = c.toString(16);
    	return hex.length == 1 ? "0" + hex : hex;
	};
	var rgbToHex = function(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	};

	var calcLuminance = function(r, g, b){
		return (r*0.299 + g*0.587 + b*0.114) / 3;
	}

    $scope.generateColors = function(){
    	var colorThief = new ColorThief();
    	var palette = colorThief.getPalette($scope.client.logoDom, 7);
    	var dominant = colorThief.getColor($scope.client.logoDom);
    	palette = palette.sort(function(a, b){
    		if (calcLuminance(a) < calcLuminance(b)) return -1;
    		if(calcLuminance(a) > calcLuminance(b)) return 1;
    		return 0;
    	}).map(function(c){
    		return rgbToHex(c[0], c[1], c[2]);
    	});
    	$scope.themeIsCustom = true;
    	$scope.colors.bodyBg = rgbToHex(dominant[0], dominant[1], dominant[2]);
    	$scope.colors.bodyText = palette[2];
    	$scope.colors.tabsBg =  palette[5];
    	$scope.colors.tabsText = palette[0];
    	$scope.colors.moduleBg = palette[4];
    	$scope.colors.moduleText = palette[1];
    	$scope.colors.moduleLink =  palette[3];
    };

  });
