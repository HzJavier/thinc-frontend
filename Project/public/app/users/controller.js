var userControllers = angular.module('userControllers', []);

userControllers.controller('UserCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
	var userId = $routeParams.id;
  
 $http.get('api/users')
  .success(function (data) {
    $scope.user = {};
    var userIndex = _.findIndex(data, { id: userId });

    if (userIndex >= 0){
      $scope.user = data[userIndex];
    }
  }); 

}]);