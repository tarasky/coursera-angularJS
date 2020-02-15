(function(){
	
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);
	
	function FoundItemsDirective(){
		var ddo = {
			scope : {
				list : '=getList'
			},
			templateUrl : "list.html"
		};
		return ddo;
	}
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrowCtrl = this;
		
		//narrowCtrl.isClick = false;
		narrowCtrl.getMenuItems = function(){
			MenuSearchService.getMatchedMenuItems(narrowCtrl.searchDesc);
		};
		console.log(narrowCtrl.found);
		narrowCtrl.found = MenuSearchService.getReqdItems();
	}
	
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var menuSvc = this;
		
		var foundItems = [];
		
		menuSvc.getMatchedMenuItems = function(searchTerm){
			$http({
				url : "https://davids-restaurant.herokuapp.com/menu_items.json",
				method : "GET"
			})
			.then(function(response){
				angular.forEach(response.data.menu_items, function(value, key){
					if(value.description.indexOf(searchTerm) != -1){
						foundItems.push(value);
					}
				});
			})
		}
		
		menuSvc.getReqdItems = function(){
			return foundItems;
		}
		
	}
	
})();