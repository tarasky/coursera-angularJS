(function(){

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['allcategories'];
function CategoriesController(allcategories){
	var myCategories = this;
	
	myCategories.category = allcategories;
}

})();