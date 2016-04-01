var beerControllers = angular.module('beerControllers', []);

beerControllers.controller('BeerListCtrl', ['$scope', '$http', function ($scope, $http) {

  $http.get('api/items')
  .success(function (data) {
    $scope.books = data;
  });

}]);

beerControllers.controller('BeerDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  var bookId = $routeParams.id;

  $http.get('api/items')
  .success(function (data) {
    $scope.book = {};
    var bookIndex = _.findIndex(data, { id: bookId });

    if (bookIndex >= 0){
      $scope.book = data[bookIndex];
    }
  });

  $scope.showRating = function () {
    console.log($scope.book.rating);
  };
  $scope.number = 5;
  $scope.getNumber = function(num) {
      return new Array(num);
  }

  $scope.updateRating = function (newRating) {
    $scope.book.rating = newRating;

    $http.put('api/items/' + $scope.book.id, $scope.book)
    .success(function (data) {
      console.log(data);
    });

  };
}]);
