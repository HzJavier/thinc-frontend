var userControllers = angular.module('userControllers',[]);

userControllers.controller('ProfileCtrl',['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

  var userId = $routeParams.id;

  $http.get('api/users')
    .success(function(data) {
      $scope.user = {};
      var userIndex = _.findIndex(data, {id: userId});

      if ( userIndex >= 0){
        $scope.user = data[userIndex];
      }

    })
    .error(function(error){
      console.log('error',error);
    });


}]);
