var reviewApp = angular.module('reviewApp', [
  'ngRoute'
]);

reviewApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/books', {
        templateUrl: 'app/books/listView.html',
        controller: 'BookListCtrl'
    })
    .otherwise({
      redirectTo: '/books'
    });
  }
]);


reviewApp.controller('BookListCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('api/items')
  .success(function (data) {
    $scope.books = data;
  });

  var bestBook = "The martian";
  $scope.weeklyRecommendation = "Mastering Refactoring";
}]);
