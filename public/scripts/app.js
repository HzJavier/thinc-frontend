var reviewApp = angular.module('reviewApp', [
	'ngRoute',
	'bookControllers'
	]);

reviewApp.config(['$routeProvider'
	function ($routeProvider){
		$routeProvider
		.when('/books',{
			templateUrl: 'app/books/listView'
		})
	}])

reviewApp.controller('playerListCtrl', ['$scope', '$http',function($scope, $http){

$http.get('api/items')
.success(function (data){
	$scope.players = data;
});

$scope.weeklyRecomendation = "Chichadios";
}]);

