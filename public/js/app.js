var reviewApp = angular.module("reviewApp", []);

reviewApp.controller('InvoiceListController', ['$scope', '$http', function($scope, $http){
  $http.get('data/data.json')
  .success(function(data){
    $scope.invoices = data.invoices;
  })

  $scope.highPriceInvoice = "Jesus Perez";
}]);
