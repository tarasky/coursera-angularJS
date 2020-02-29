(function () {

angular.module('public')
.controller('SignController', SignController);

SignController.$inject = ['MenuService'];
function SignController(MenuService) {
	var signing = this;
  
	signing.submit = function () {
		
		MenuService.getDish(signing.user.dish)
		.then(function(response){
			console.log(response.data);
		});
		
		
	};
  
}


})();