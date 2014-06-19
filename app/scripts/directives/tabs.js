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
				link.tab('show');
				scope.$apply(function(){
					scope.activeTab = links.index(link);
				});
			});
		}
	};
});