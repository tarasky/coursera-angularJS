(function(){
	
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);
	
	function FoundItemsDirective(){
		var ddo = {
			templateUrl : 'list.html',
			scope : {
				list : '<getList',
				remove : '&removeItem'
			},
			controller : ItemsDirectiveController,
			controllerAs: 'dirCtrl',
			bindToController: true
		};
		return ddo;
	}
	
	function ItemsDirectiveController(){
		var dirCtrl = this;
		
		dirCtrl.isEmpty = function(){
			//if(!dirCtrl.list.length){
			//	return true;
			//}
			
			return false;
		}
		
	}
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrowCtrl = this;
		
		//narrowCtrl.found = '';
		
		narrowCtrl.getMenuItems = function(){
			try {
				  MenuSearchService.getMatchedMenuItems(narrowCtrl.searchDesc);
			} catch (error) {
			  narrowCtrl.errorMessage = error.message;
			}
		};
		
		narrowCtrl.found = MenuSearchService.getReqdItems();
		
		narrowCtrl.removeAs = function(itemIndex){
			MenuSearchService.removalOfItem(itemIndex);
		}
	}
	
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var menuSvc = this;
		
		var foundItems = [];
		
		menuSvc.getMatchedMenuItems = function(searchTerm){
			console.log(searchTerm);
			if(searchTerm !== undefined){
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
			}else{
				throw new Error("Nothing foundd");
			}
			
		}
		
		menuSvc.removalOfItem = function(itemOfIndex){
			foundItems.splice(itemOfIndex, 1);
		}
		
		menuSvc.getReqdItems = function(){
			return foundItems;
		}
		
	}
	
})();