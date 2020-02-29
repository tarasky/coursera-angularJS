(function () {

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['user'];
function MenuController(user) {
  var info = this;
  info.userInfo = user;
  
  console.log(user);
}

})();
