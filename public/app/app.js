var reviewApp = angular.module('reviewApp',[
  'ngRoute',
  'movieControllers'
]);

reviewApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login',{
      templateUrl: 'app/movies/loginView.html',
      controller: 'MovieLoginCtrl'
    })
    .when('/signup', {
        templateUrl: 'app/movies/signUpView.html',
        controller: 'MovieSignupCtrl'
    })
    .when('/profile/:id', {
        templateUlr: 'app/user/profileView.html',
        controller: 'ProfileCtrl'
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
