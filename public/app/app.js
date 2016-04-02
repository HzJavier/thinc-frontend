var reviewApp = angular.module('reviewApp', [
  'ngRoute',
  'restaurantControllers'
]);

reviewApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/restaurants', {
        templateUrl: 'app/restaurants/MainPage.html',
        //controller: 'RestaurantListCtrl'
    })
    .when('/restaurants/:id', {
        templateUrl: 'app/restaurants/detailView.html',
        controller: 'RestaurantDetailCtrl'
    })
    .otherwise({
      redirectTo: '/restaurants'
    });
  }
]);
