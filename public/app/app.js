var reviewApp = angular.module('reviewApp', [
  'ngRoute',
  'bookControllers'
]);

reviewApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/books', {
        templateUrl: 'app/books/listView.html',
        controller: 'BookListCtrl'
    })
    .when('/books/:id', {
        templateUrl: 'app/books/detailView.html',
        controller: 'BookDetailCtrl'
    })
    .otherwise({
      redirectTo: '/books'
    });
  }
]);
