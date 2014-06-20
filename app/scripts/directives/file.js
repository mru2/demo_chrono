angular.module('demoChronoApp').directive('fileSelect', function(){
	return {
		restrict: 'A',
    	link: function(scope ,element) {
        	var readURL = function(input) {
        		if (input.files && input.files.length) {
        			var reader = new FileReader();
        			reader.onload = function(e) {
        				scope.setClientLogo(e.target.result, angular.element('#preview-logo img'));
        			};
        			reader.readAsDataURL(input.files[0])
        		} else {
        			scope.setClientLogo(null);
        		}
        	};  
      		element.bind("change", function(e){
      			readURL(this);
      		});          
    	}
    }
});
