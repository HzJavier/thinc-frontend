var authControllers = angular.module('authControllers', []);

authControllers.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.username = "";
  $scope.password = "";

  $scope.error = false;

  $scope.login = function () {
    // Call the login on the backend
    $http.post('/api/login', {
      username: $scope.username,
      password: $scope.password
    })
    .success(function () {
      $scope.error = false;
    })
    .error(function () {
      $scope.error = true;
    });

  };
}]);
