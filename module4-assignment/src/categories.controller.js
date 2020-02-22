(function(){

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, allcategories){
	var myCategories = this;
	myCategories.category = allcategories;
}

})();