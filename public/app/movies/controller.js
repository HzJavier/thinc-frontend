var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('MovieListCtrl', ['$scope', '$http', function ($scope, $http) {

  $http.get('api/items'
  ).success(function (data) {
   $scope.movies = data;
  });

  $http.get('api/items/categories'
   ).success(function (data) {
     $scope.categories = data;
   });

  $scope.showModal= false;

  $scope.hoverStar= 0;

  $scope.logged= false;

   $scope.openPreview= function(movie){
    $scope.currentMoviePreview= movie;
    $scope.showModal= true;
  }

  $scope.closePreview= function(){
    $http.put('api/items/'+$scope.currentMoviePreview.id,$scope.currentMoviePreview)
    .success(function (data) {
    });

    $scope.showModal= false;
  }
}]);
