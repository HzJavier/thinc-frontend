var reviewApp = angular.module('reviewApp', [
  'ngRoute',
  'bookControllers',
  'authControllers',
  'authServices'
]);

reviewApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'app/login/loginView.html',
        controller: 'LoginCtrl'
    })
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
])
.run(function ($rootScope, AuthService, $location) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (!AuthService.userIsLogged()) {
      $location.path('/login');
    }
  }); 
});
