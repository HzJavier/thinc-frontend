var profileControllers = angular.module('profileControllers', []);

beerControllers.controller('ProfileCtrl', ['$scope', '$http', function ($scope, $http) {

  $http.get('api/users/one')
  .success(function (data) {
    $scope.profile = data;
  });

}]);
