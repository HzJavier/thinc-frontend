var restaurantControllers = angular.module('restaurantControllers', []);

restaurantControllers.controller('RestaurantListCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('api/items')
  .success(function (data) {
    $scope.restaurants = data;
  });

  var bestBook = "The martian";
  $scope.weeklyRecommendation = "Mastering Refactoring";
}]);


