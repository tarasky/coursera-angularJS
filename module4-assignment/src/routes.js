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
		})
		.state('categories', {
			url : '/categories',
			templateUrl : 'src/categories.controller.template.html',
			controller : 'CategoriesController as catCtrl',
			resolve : {
				allcategories : ['MenuDataService', function(MenuDataService){
					return MenuDataService.getAllCategories()
					.then(function(response){
						return response.data;
					});					
				}]
			}
			
		});
		.state('items', {
			url : '/items/{shortName}',
			templateUrl : 'src/items.controller.template.html',
			controller : 'ItemsController as itemCtrl',
			resolve : {
				allitems : ['$stateParams', 'MenuDataService', function(MenuDataService, $stateParams){
					return MenuDataService.getItemsForCategory[$stateParams.shortName]
					.then(function(response){
						return response.data;
					});	
				}]
			}
			
		});
		
	}
	
	
	
})();