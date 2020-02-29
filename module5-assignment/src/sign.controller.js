(function () {

angular.module('public')
.controller('SignController', SignController);

SignController.$inject = ['MenuService'];
function SignController(MenuService) {
	var signing = this;
  
	signing.submit = function () {
		console.log("hello");
		
	};
  
}


})();