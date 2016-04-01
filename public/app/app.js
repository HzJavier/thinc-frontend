var reviewApp = angular.module('reviewApp', [
  'ngRoute',
  'beerControllers',
  'profileControllers'
]);

reviewApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/beers', {
        templateUrl: 'app/beers/listView.html',
        controller: 'BeerListCtrl'
    })
    .when('/beers/:id', {
        templateUrl: 'app/beers/detailView.html',
        controller: 'BeerDetailCtrl'
    })
    .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
    })
    .otherwise({
      redirectTo: '/beers'
    });
  }
]);
