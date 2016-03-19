var reviewApp = angular.module('reviewApp',[]);

reviewApp.controller('MovieListCtrl',['$scope', '$http', function($scope, $http){
  $http.get('data/data.json')
  .success(function(data) {
    $scope.movies = data.movies;
  });

  // $scope.movies = [
  //   {id: 0, name: 'Guardians of the Galaxy'},
  //   {id: 1, name: 'Deadpool'},
  //   {id: 2, name: 'Ant-Man'},
  //   {id: 3, name: 'Avengers: Age of Ultron'},
  //   {id: 4, name: 'Captain America: The Winter Soldier'},
  //   {id: 5, name: 'Thor: The Dark World'},
  //   {id: 6, name: 'Iron Man 3'},
  //   {id: 7, name: 'The Avengers'},
  //   {id: 8, name: 'Captain America: The First Avenger'},
  //   {id: 9, name: 'Thor'},
  //   {id: 10, name: 'Iron Man 2'},
  //   {id: 11, name: 'The Incredible Hulk'},
  //   {id: 12, name: 'Iron Man'}
  // ];

  var bestMovie = "Avengers: Age of Ultron";
  $scope.weeklyRecommendation = "X-men";

}]);
