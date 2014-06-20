angular.module('demoChronoApp').directive('tabNav', function(){
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs){
			scope.activeTab = 0;
			var links = element.find('a');
			links.click(function(e){
				e.preventDefault();
				var link = $(e.target);
				scope.$apply(function(){
					var tabIndex = links.index(link);
					scope.showTab(tabIndex);
				});
			});

			scope.showTab = function(index){
				console.log('showing tag', index);
				$(links[index]).tab('show');
				scope.activeTab = index;
			};
		}
	};
});