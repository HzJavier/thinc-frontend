var reviewApp = angular.module('reviewApp', []);

reviewApp.controller('playerListCtrl', ['$scope', function($scope){

$scope.players = [
{id:0, name: 'Chichadios'},
{id:1, name: 'Maza'}
];

$scope.weeklyRecomendation = "Chichadios";
}]);

