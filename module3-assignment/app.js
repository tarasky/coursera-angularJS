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
		console.log(dirCtrl.list.length);
		dirCtrl.isEmpty = function(){
			if(!dirCtrl.list.length){
				return true;
			}
			
			return false;
		}
		
	}
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrowCtrl = this;
		
		narrowCtrl.isClick = false;
		narrowCtrl.getMenuItems = function(){
			MenuSearchService.getMatchedMenuItems(narrowCtrl.searchDesc);
			narrowCtrl.isClick = true;
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
		
		menuSvc.removalOfItem = function(itemOfIndex){
			foundItems.splice(itemOfIndex, 1);
		}
		
		menuSvc.getReqdItems = function(){
			return foundItems;
		}
		
	}
	
})();