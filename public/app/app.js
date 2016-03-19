var reviewApp = angular.module("reviewApp", [
  'ngRoute',
  'bookControllers'
]);
reviewApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : 'app/books/listView.html',
    controller :'BookListController'
  })
  .when('/books', {
    templateUrl : 'app/books/listView.html',
    controller :'BookListController'
  })
  .when('/books/:id', {
    templateUrl : 'app/books/detailView.html',
    controller :'BookDetailController'
  })
  .when('/chavis', {

  })
  .otherwise({
    redirectTo: '/'
  });
}]);
