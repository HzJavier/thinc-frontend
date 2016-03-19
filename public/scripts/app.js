var reviewApp = angular.module('reviewApp', []);

reviewApp.controller('BookListCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $scope.books = [
    { id: 0, name: 'Javsacript The Good Parts'},
    { id: 1, name: 'Clean Code'}
  ];

  var bestBook = "The martian";
  $scope.weeklyRecommendation = "Mastering Refactoring";
}]);
