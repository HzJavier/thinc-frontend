var reviewApp = angular.module("reviewApp", [
  'ngRoute',
  'InvoiceListController'
]);
reviewApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : 'app/books/listView.html',
    controller :'InvoiceListController'
  })
  .when('/chavis', {

  })
  .otherwise({
    redirectTo: '/'
  });
}]);
