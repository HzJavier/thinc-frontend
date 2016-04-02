var signinController = angular.module('signinController', []);

signinController.controller('signinCtrl',['$scope','$http','$location',function ($scope, $http, $location) {

  $scope.checkCredentials = function(){
  
  	var username = "link_mx@live.com";
  	var password = "abc123";

  	

  	if($scope.user === undefined){
  		$scope.success = false;
  		$scope.message = "Please fill out all the information first!";
  	}else{
  		
  		if(($scope.user.email !== '' && $scope.user.password !== '') && ($scope.user.email !== undefined && $scope.user.password !== undefined) ){

          $http.post('api/login', $scope.user)
          .success(function (data) {
            console.log(data);
          

    			if(data == 'success'){
  	  			$scope.success = true;
  	  			$scope.message = "Welcome";
  	  			$location.path('#/home');

    			}else{
  	  			$scope.success = false;
  	  			$scope.message = "Wrong login information!";

    			}
        });
  		}else{
  			$scope.success = false;
  			$scope.message = "Please fill both! email and password!";
  		}
  	}
  }

    $scope.goToUrl = function ( path ) {
      $location.path( path );
    };

}]);
