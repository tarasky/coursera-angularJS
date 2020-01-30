(function(){
	angular.module('myFirstModule', [])
		.controller('TestController', TestCtrl);
		
	TestCtrl.$inject = ['$scope'];
	
	function TestCtrl($scope){
		$scope.name = "Tara";
	}
	
	
})();