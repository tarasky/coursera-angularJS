(function(){

angular.module('MenuApp')
.component('meCategories', {
	templateUrl : 'src/categories.component.template.html',
	bindings: {
		catss : '<'
	}
});

})();