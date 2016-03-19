var reviewApp = angular.module('reviewApp', []);

reviewApp.controller('BookListCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('data/data.json')
  .success(function (data) {
    $scope.books = data.books;
  });

  var bestBook = "The martian";
  $scope.weeklyRecommendation = "Mastering Refactoring";
}]);
