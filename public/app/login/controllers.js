var authControllers = angular.module('authControllers', []);

authControllers.controller('LoginCtrl', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {
  $scope.username = "";
  $scope.password = "";

  $scope.error = false;

  $scope.login = function () {
    // Call the login on the backend
    AuthService.login({
      username: $scope.username,
      password: $scope.password
    }).then(function () {
      if(AuthService.userIsLogged()){
        // Redirect to /books  
        $location.path('/books');
      } else {
        $scope.error = true;  
      };
    }); 
    

  };
}]);
