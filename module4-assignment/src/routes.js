(function(){
	
	angular.module('MenuApp')
	.config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
		
		.state('home', {
			url : '/',
			templateUrl : 'src/home.html'
		});
		.state('categories', {
			url : '/categories',
			templateUrl : 'src/categories.html',
			controller : 'CategoriesController as catCtrl',
			resolve : {
				allcategories : ['MenuDataService', function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
			
		});
		/*.state('items', {
			url : '/items',
			templateUrl : 'items.html',
			controller : 'ItemsController as itemCtrl',
			resolve : {
				categories : ['MenuDataService', function(MenuDataService){
					return MenuDataService.getItemsForCategory();
				}]
			}
			
		});*/
		
	}
	
	
	
})();