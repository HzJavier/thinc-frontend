var reviewApp = angular.module('reviewApp',[
  'ngRoute',
  'movieControllers',
  'userControllers',
  'authControllers',
  'authServices'
]);

reviewApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login',{
      templateUrl: 'app/login/loginView.html',
      controller: 'authControllers'
    })
    .when('/signup', {
        templateUrl: 'app/login/signUpView.html',
        controller: 'MovieSignupCtrl'
    })
    .when('/profile/:id', {
        templateUrl: 'app/user/profileView.html',
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
])
.run(function ($rootScope, AuthService, $location) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (!AuthService.userIsLogged()) {
      $location.path('/login');
    }
  });
});
