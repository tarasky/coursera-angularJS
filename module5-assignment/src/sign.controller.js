(function () {

angular.module('public')
.controller('SignController', SignController);

function SignController(menuCategories) {
  var signing = this;
  
  signing.submit = function () {
    console.log(signing.firstname);
	
  };
  
}


})();