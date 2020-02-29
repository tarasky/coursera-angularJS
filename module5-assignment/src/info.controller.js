(function () {

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['user','ApiPath'];
function InfoController(user,ApiPath) {
	var info = this;
	
	info.basePath = ApiPath;
	
	if(!user.length){
		info.error = true;
	}else{
		info.userInfo = user;
		console.log(info.userInfo.firstname);
	}

}

})();