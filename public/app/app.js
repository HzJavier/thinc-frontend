

var rtcApp = angular.module('rtcApp',[
	'ngRoute',
	'crewController',
	'homeController',
	'signinController',
]);


rtcApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl: 'app/home/index.html',
			controller: 'homeCtrl'
		})
		.when('/rate', {
			templateUrl: 'app/crew/listView.html',
			controller: 'crewListCtrl'
		})
		.when('/rate/:id', {
			templateUrl: 'app/crew/detailView.html',
			controller: 'crewDetailsCtrl'
		})		
		.when('/add', {
			templateUrl: 'app/crew/AddView.html',
			controller: 'crewAddCtrl'
		})
		.when('/account', {
			templateUrl: 'app/home/account.html',
			controller: 'accountCtrl'
		})		
		.when('/signin', {
			templateUrl: 'app/signin/signin.html',
			controller: 'signinCtrl'
		})
		.otherwise({ 
			redirectTo: '/home'
		});


	}
]);
