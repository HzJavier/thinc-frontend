var authControllers = angular.module('authControllers', []);

authControllers.controller('LoginCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {
  $scope.username = "";
  $scope.password = "";

  $scope.error = false;

  $scope.login = function () {
    // Call the login on the backend
    AuthService.login({
      username: $scope.username,
      password: $scope.password
    }); 

  };
}]);
