(function(){
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuyInst = this;

		toBuyInst.items = ShoppingListCheckOffService.getThings();
		
		toBuyInst.moveIt = function(Index){
			ShoppingListCheckOffService.removeItem(Index);
		};
	}
	
	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var alreadyBoughtInst = this;
		
		alreadyBoughtInst.boughtItems = ShoppingListCheckOffService.getBoughtItems();
		
	}
	
	function ShoppingListCheckOffService(){
		var service = this;
		
		var boughtThings = [];
		
		service.getThings = function(){
			return things = [{name: "Milk",quantity: 4},{name: "Carrots",quantity: 20},{name: "Chocolates",quantity: 10},{name: "Celery",quantity: 5},{name: "Broccoli", quantity: 5}];
		};
		
		service.removeItem = function(ItemIndex){
			boughtThings.push(things[ItemIndex]);
			return things.splice(ItemIndex, 1);
		};
		
		service.getBoughtItems = function(){
			return boughtThings;
		}
	
	}
	
})();