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
    .otherwise({
      redirectTo: '/books'
    });
  }
]);
