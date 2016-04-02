var signinController = angular.module('signinController', []);

signinController.controller('signinCtrl',['$scope','AuthService','$location',function ($scope, AuthService, $location) {

  $scope.checkCredentials = function(){
   	if($scope.user === undefined){
   		$scope.success = false;
   		$scope.message = "Please fill out all the information first!";
   	}else{
   		if(($scope.user.email !== '' && $scope.user.password !== '') && ($scope.user.email !== undefined && $scope.user.password !== undefined) ){
        AuthService.login({
            email: $scope.user.email,
            password: $scope.user.password
          });
          console.log(AuthService.isLoggedIn);
    			if(AuthService.isLoggedIn){
   	  			$scope.message = "Welcome";
   	  			$location.path('#/home');
     			}else{
   	  			$scope.message = "Wrong login information!";

     			}
   	}
   }
  }

}]);
