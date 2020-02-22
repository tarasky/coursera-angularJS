(function(){

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['allcategories'];
function CategoriesController(allcategories){
	var myCategories = this;
	console.log(allcategories);
	myCategories.category = allcategories;
}

})();