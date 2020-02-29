(function(){
	
	angular.module('signup')
	.config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
		
		.state('signupform', {
			url : '/signupform',
			templateUrl : 'src/signupform.html'
		});
		
	}
	
	
	
})();