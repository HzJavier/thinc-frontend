var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('BookListCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('api/items')
  .success(function (data) {
    $scope.books = data;
  });

  var bestBook = "The martian";
  $scope.weeklyRecommendation = "Mastering Refactoring";
}]);

bookControllers.controller('BookDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
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

  $scope.updateRating = function (newRating) {
    $scope.book.rating = newRating;
  };
}]);
