(function () {

angular.module('public')
.controller('SignController', SignController);

SignController.$inject = ['MenuService'];
function SignController(MenuService) {
	var signing = this;
  
	signing.submit = function () {
		
		MenuService.getDish(signing.user.dish)
		.then(function(response){
			if(!response.data.length){
				signing.message = "No such menu number exists";
			}else{
				MenuService.saveInfo(signing.user);
				signing.message = "Your information has been saved";
			}
		});
		
		
	};
  
}


})();