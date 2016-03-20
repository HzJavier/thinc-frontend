var reviewApp = angular.module('reviewApp',[
  'ngRoute',
  'movieControllers'
]);

reviewApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/',{
      templateUrl: 'app/movies/homeView.html',
      controller: 'MovieHomeCtrl'
    })
    .when('/movies', {
      templateUrl: 'app/movies/listView.html',
      controller: 'MovieListCtrl'
    })
    .when('/movies/:id', {
      templateUrl: 'app/movies/detailView.html',
      controller: 'MovieDetailCtrl'
    })
    .otherwise({
      redirectTo: '/movies'
    });
  }
]);
