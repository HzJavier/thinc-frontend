var app = angular.module('dudesRatesApp',[]);


app.controller('dudesList',['$scope', '$http', function ($scope, $http){

	$http.get().success(function(data){
		$scope.dudes = data.Dudes;
	});

	$scope.dudes = [
		{id:0, name:'Burds'},
		{id:1, name:'demon'},
		{id:2, name:'noe'},
		{id:3, name:'goat face'}
	];

	$scope.drunks = "no drunk ppl";
}]);