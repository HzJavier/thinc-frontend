var beerControllers = angular.module('beerControllers', []);

beerControllers.controller('BeerListCtrl', ['$scope', '$http', function ($scope, $http) {

  $http.get('api/items')
  .success(function (data) {
    $scope.beers = data;
  });

}]);

beerControllers.controller('BeerDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  var beerId = $routeParams.id;

  $http.get('api/items')
  .success(function (data) {
    $scope.beer = {};
    var beerIndex = _.findIndex(data, { id: beerId });

    if (beerIndex >= 0){
      $scope.beer = data[beerIndex];
    }
  });

  $scope.showRating = function () {
    console.log($scope.beer.rating);
  };
  $scope.number = 5;
  $scope.getNumber = function(num) {
      return new Array(num);
  }

  $scope.updateRating = function (newRating) {
    $scope.beer.rating = newRating;

    $http.put('api/items/' + $scope.beer.id, $scope.beer)
    .success(function (data) {
      console.log(data);
    });

  };
}]);
