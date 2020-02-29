(function () {

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['user'];
function InfoController(user) {
	var info = this;
	
	if(!user.length){
		info.error = true;
	}else{
		info.userInfo = user;
	}

}

})();
