(function(){

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['allitems'];
function ItemsController(allitems){
	var itemCtrl = this;
	
	itemCtrl.item = allitems.menu_items;
	itemCtrl.sel = allitems.category.short_name;
}

})();