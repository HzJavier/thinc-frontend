var homeController = angular.module('homeController', []);

homeController.controller('homeCtrl',['$scope','$http','$location',function ($scope, $http, $location) {
    $scope.goToUrl = function ( path ) {
      $location.path( path );
    };

}]);