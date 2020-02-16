(function(){
	
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);
	
	function FoundItemsDirective(){
		var ddo = {
			templateUrl : 'list.html',
			scope : {
				list : '=getList',
				remove : '&removeItem'
			}
			
		};
		return ddo;
	}
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrowCtrl = this;
		
		narrowCtrl.getMenuItems = function(){
			try {
				MenuSearchService.getMatchedMenuItems(narrowCtrl.searchDesc);
			} catch (error) {
				narrowCtrl.errorMessage = error.message;
			}
		};
		
		narrowCtrl.found = MenuSearchService.getReqdItems();
		
		if(!narrowCtrl.found.length || narrowCtrl.errorMessage){
			narrowCtrl.realError = "ERROR!!!!!";
		}
		
		narrowCtrl.removeAs = function(itemIndex){
			MenuSearchService.removalOfItem(itemIndex);
		}
	}
	
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var menuSvc = this;
		
		var foundItems = [];
		
		menuSvc.getMatchedMenuItems = function(searchTerm){
			
			if(searchTerm !== undefined && searchTerm !== '' && searchTerm !== null){
				
				return $http({
					url : "https://davids-restaurant.herokuapp.com/menu_items.json",
					method : "GET"
				})
				.then(function(response){
					angular.forEach(response.data.menu_items, function(value, key){
						if(value.description.indexOf(searchTerm) != -1){
							foundItems.push(value);
						}
					});
					return foundItems;
				})
			}else{
				throw new Error("Nothing found");
			}
		}
		
		menuSvc.removalOfItem = function(itemOfIndex){
			return foundItems.splice(itemOfIndex, 1);
		}
		
		menuSvc.getReqdItems = function(){
			return foundItems;
		}
		
	}
	
})();