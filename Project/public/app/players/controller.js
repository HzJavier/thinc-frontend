var playerControllers = angular.module('playerControllers', []);

playerControllers.controller('PlayerListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
  
  $http.get('api/items')
  .success(function (data) {
    $scope.players = data;
  });

  $scope.weeklyRecommendation = "Hola";

  $scope.goTo = function ( id ) {
    $location.path('/players/' + id );
  };
}]);

playerControllers.controller('PlayerDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  var playerId = $routeParams.id;

  $http.get('api/items')
  .success(function (data) {
    $scope.player = {};
    var playerIndex = _.findIndex(data, { id: playerId });

    if (playerIndex >= 0){
      $scope.player = data[playerIndex];
    }
  });

  $scope.showRating = function () {
    console.log($scope.player.rating); 
  };

  $scope.updateRating = function (newRating) {
    $scope.player.rating = newRating;
    console.log($scope.player.rating);
    console.log($scope.player.id);
    $http.put('api/items/' + $scope.player.id, $scope.player)
    .success(function (data) {
      console.log(data);
    });

  };
}]);
