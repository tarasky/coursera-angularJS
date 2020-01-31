(function(){
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);
		
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){
		
		$scope.checkLunch = function(lunchDetails){
			
			if(lunchDetails === undefined){
				$scope.lunchMessage = 'Please enter data first';
			}else{
				var lunchArr = lunchDetails.split(',');
				var lunchCount = lunchArr.length;
				if(lunchCount > 3 ){
					$scope.lunchMessage = 'Too much!';
				}else{
					$scope.lunchMessage = 'Enjoy!';
				}
			}
			
		};
	}
	
})();