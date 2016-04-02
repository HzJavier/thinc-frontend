var homeController = angular.module('homeController', []);

homeController.controller('homeCtrl',['$scope','$http','$location',function ($scope, $http, $location) {
	$scope.success = true;
    $scope.goToUrl = function ( path ) {
      $location.path( path );
    };

}]);

homeController.controller('accountCtrl',['$scope','$http','$location',function ($scope, $http, $location) {

}]);