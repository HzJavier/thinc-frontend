var authServices = angular.module('authServices',[]);


authServices.factory('AuthService',['$http',function($http){

	var authService = {};
	var isLogged = false;

	authService.isLoggedIn = function(){
		return isLogged;
	}

	authService.login = function(credentials){
		return $http
		.post('api/login',credentials)
		.then(function(data){
    			if(data == 'success'){
  	  				isLogged = true;
    			}else{
    				isLogged = false;
    			}	
    		});
	}


	return authService;

}]);