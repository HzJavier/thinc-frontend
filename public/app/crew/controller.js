var crewController = angular.module('crewController', []);

crewController.controller('crewListCtrl',['$scope','$http','$location',function ($scope, $http, $location) {
  
  $http.get('api/items')
  .success(function (data) {
    $scope.members = data;
  });

    $scope.goToUrl = function ( path ) {
      $location.path( path );
    };

}]);

crewController.controller('crewAddCtrl',['$scope','$http',function ($scope, $http) {
    
    $scope.member = {
      "id": 0,
      "raiting": 0
    };
    $scope.addMember = function(){
      
      $http.post('api/items', $scope.member)
      .success(function (data) {
        console.log(data);
      });
    }

}]);

crewController.controller('crewDetailsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  var memberId = $routeParams.id;
  
  $http.get('api/items')
  .success(function (data) {
    $scope.members = {};
    var memberIndex = _.findIndex(data, { id: memberId });

    if (memberIndex >= 0){
      $scope.member = data[memberIndex];
    }
  });

  $scope.showRating = function () {
    console.log($scope.member.rating); 
  };

  $scope.updateRating = function (newRating) {
    $scope.member.rating = newRating;
    
    $http.put('api/items/' + $scope.member.id, $scope.member)
    .success(function (data) {
      console.log(data);
    });

  };
}]);
