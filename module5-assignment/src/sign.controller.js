(function () {

angular.module('public')
.controller('SignController', SignController);

SignController.$inject = ['MenuService'];
function SignController(MenuService) {
	var signing = this;
  
	signing.submit = function () {
		
		var message = MenuService.getDish(signing.user.dish);
		console.log(message);
		
	};
  
}


})();