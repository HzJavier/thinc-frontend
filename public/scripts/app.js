var reviewApp = angular.module('reviewApp', []);

reviewApp.controller('BookListCtrl', ['$scope', '$http', function ($scope, $http) {

  $http.get('data/data.json')
  .sucess(function(data){
  $scope.books = data;
});

  $scope.books = [
    { id: 0, name: 'Javascript The Good Parts'},
    { id: 1, name: 'Clean Code'}
  ];

  var bestBook = "The Martian";
  $scope.weeklyRecommendation = "Mastering Refactoring";
}]);
