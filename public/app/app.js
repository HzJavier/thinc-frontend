
var reviewApp = angular.module('reviewApp', [
  'ngRoute',
  'restaurantControllers',
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
    .when('/home', {
        templateUrl: 'app/restaurants/home.html'
    })
    .when('/restaurants/list', {
        templateUrl: 'app/restaurants/listView.html',
        controller: 'RestaurantListCtrl'
    })
    .when('/restaurants/:id', {
        templateUrl: 'app/restaurants/detailView.html',
        controller: 'RestaurantDetailCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
  }
]);
