(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  
  var myuser = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  
	service.getDish = function (dish) {
		
		var response = $http({
			method: "GET",
			url: (ApiPath + '/menu_items/' + dish + '.json'),
		});

		return response;
	};
	
	service.saveInfo = function(userArr, detailsOfDish){
		myuser = [{firstname: userArr.firstname},{lastname: userArr.lastname},{email: userArr.email},{phone: userArr.phone},{dish: userArr.dish},{dishName: detailsOfDish.name},{dishDesc: detailsOfDish.description}];
	}
	
	service.getUser = function(){
		return myuser;
	}

}



})();
