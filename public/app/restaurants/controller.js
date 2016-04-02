var restaurantControllers = angular.module('restaurantControllers', []);

restaurantControllers.controller('RestaurantListCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('api/items')
  .success(function (data) {
    $scope.restaurants = data;
  });

}]);


restaurantControllers.controller('RestaurantDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  var restaurantId = $routeParams.id;

  $http.get('api/items')
  .success(function (data) {
    $scope.restaurant = {};
    var restaurantIndex = _.findIndex(data, { id: restaurantId });

    if (restaurantIndex >= 0){
      $scope.restaurant = data[restaurantIndex];
    }
  });

  $scope.showRating = function () {
    console.log($scope.restaurant.rating); 
  };

  $scope.updateRating = function (newRating) {
    $scope.restaurant.rating = newRating;
    
    $http.put('api/items/' + $scope.restaurant.id, $scope.restaurant)
    .success(function (data) {
      console.log(data);
    });

  };
}]);
