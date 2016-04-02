var authControllers = angular.module('authControllers', []);

authControllers.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.username = "";
  $scope.password = "";

  $scope.login = function () {
    // Call the login on the backend
    $http.post('/api/login', {
      username: $scope.username,
      password: $scope.password
    });
  };
}]);
