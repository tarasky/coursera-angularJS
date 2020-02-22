(function(){

angular.module('data')
.component('categories', {
	templateUrl : 'src/categories.component.template.html',
	bindings: {
		ourCategories : '<'
	}
});

})();