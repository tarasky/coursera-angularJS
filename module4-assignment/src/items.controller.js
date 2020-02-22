(function(){

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['allitems'];
function ItemsController(allitems){
	var itemCtrl = this;
	console.log(allitems);
	itemCtrl.item = allitems;
}

})();