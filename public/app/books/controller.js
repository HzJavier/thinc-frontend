reviewApp.controller('BookListCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('api/items')
  .success(function (data) {
    $scope.books = data;
  });

  var bestBook = "The martian";
  $scope.weeklyRecommendation = "Mastering Refactoring";
}]);
