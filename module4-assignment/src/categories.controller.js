(function(){

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['allcategories'];
function CategoriesController(allcategories){
	var catCtrl = this;
	
	catCtrl.category = allcategories;
}

})();