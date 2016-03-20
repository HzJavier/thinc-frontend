var movieControllers = angular.module('movieControllers',[]);

movieControllers.controller('MovieHomeCtrl',['$scope', '$http', '$location', function($scope, $http, $location){
  $scope.go = function ( path ) {
    $location.path( path );
  };

}]);

movieControllers.controller('MovieListCtrl',['$scope', '$http', '$location', function($scope, $http, $location){
  $('#header-txt').css('font-size','50px');

  $http.get('api/items')
  .success(function(data) {
    $scope.movies = data;
  })
  .error(function(error){
    console.log('error',error);
  });

  $scope.go = function ( path ) {
    $location.path('/movies/' + path );
  };

}]);

movieControllers.controller('MovieDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $('#header-txt').css('font-size','50px');

  var movieId = $routeParams.id;

  $http.get('api/items')
  .success(function(data) {
    $scope.movie = {};
    var movieIndex = _.findIndex(data, {id: movieId});

    if ( movieIndex >= 0){
      $scope.movie = data[movieIndex];
    }
  })
  .error(function(error){
    console.log('error',error);
  });

  $scope.showRating = function () {
    console.log($scope.movie.rating);
  };

  $scope.updateRating = function (newRating) {
    $scope.movie.rating=newRating;

    $http.put('api/items/' + $scope.movie.id, $scope.movie)
    .success(function(data) {
      console.log(data);
    });
  };
}]);
