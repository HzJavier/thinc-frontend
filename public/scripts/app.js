var reviewApp = angular.module('reviewApp', []);

reviewApp.controller('BookListCtrl', ['$scope', function ($scope) {
  
  $scope.books = [
    { id: 0, name: 'Javsacript The Good Parts'},
    { id: 1, name: 'Clean Code'}
  ];
}]);
