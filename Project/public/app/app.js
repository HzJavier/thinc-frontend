var reviewApp = angular.module('reviewApp', [
  'ngRoute',
  'playerControllers',
  'userControllers'
]);

reviewApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/players', {
        templateUrl: 'app/players/listView.html',
        controller: 'PlayerListCtrl'
    })
    .when('/players/:id', {
        templateUrl: 'app/players/detailView.html',
        controller: 'PlayerDetailCtrl'
    })
    .when('/user/:id', {
      templateUrl: 'app/users/userView.html',
      controller: 'UserCtrl'
    })
    .otherwise({
      redirectTo: '/players'
    });
  }
]);
