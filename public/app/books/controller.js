var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('BookListController', ['$scope', '$http', function($scope, $http){
  $http.get('api/items')
  .success(function(data){
    $scope.invoices = data;
  })

  $scope.highPriceInvoice = "Jesus Perez";
}]);


bookControllers.controller('BookDetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  var bookId = $routeParams.id;

  $http.get('api/items')
  .success(function(data){
    $scope.book = {};
    var bookIndex = _.findIndex(data, {id: bookId});
    console.log(bookIndex);
    if(bookIndex >= 0){

      $scope.book = data[bookIndex];
      console.log($scope.book);
    }
  })
}]);
