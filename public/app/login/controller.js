var authControllers = angular.module('authControllers', []);

authControllers.controller('LoginCtrl', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {
  $scope.username = "mirycantero";
  $scope.password = "";


  $scope.error = false;

  $scope.login = function(){
  	AuthService.login({
  		username: $scope.username,
  		password: $scope.password
  	}).then(function(){
  		if(AuthService.userIslogged()){
  			$location.path('/home');
  		}else{
  			$scope.error = true;
  		};
  	});
  };
}]);
