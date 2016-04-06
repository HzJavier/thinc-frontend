var reviewApp = angular.module('reviewApp', [
  'ngRoute',
  'movieControllers'
]);

reviewApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/movies', {
        templateUrl: 'app/movies/listView.html',
        controller: 'MovieListCtrl'
    })
    .when('/user', {
        templateUrl: 'app/users/userView.html',
        controller: 'UserLogIn'
    })
    .otherwise({
      redirectTo: '/movies'
    });
  }
]);
