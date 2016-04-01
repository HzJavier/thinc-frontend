var app = angular.module('dudesRatesApp',[
	'ngRoute',
	'dudeController',
]);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/dudes', {
			templateUrl: 'app/dudes/dudesList.html',
			controller: 'dudesList'
		})
		.when('/dudes/:id', {
			templateUrl: 'app/dudes/details.html',
			controller: 'dudesDetails'
		})
		.otherwise({ 
			redirectTo: '/dudes'
		});
	}
]);
