var dudeController = angular.module('dudeController',[]);
dudeController.controller('dudesList',['$scope', '$http', function ($scope, $http){
	$http.get('api/items').success(function(data){
		$scope.dudes = data.Dudes;
	});
}]);

dudeController.controller('dudesDetails',['$scope', '$http', '$routeParams',function ($scope, $http, $routeParams){
	var dudeId =$routeParams.id;
	$http.get('api/items').success(function(data){
		var data = data.Dudes;
		$scope.dude = {};
		var dudeIndex = _.findIndex(data, { id: dudeId });
		if(dudeIndex >= 0)
			$scope.dude = data[dudeIndex];
	});

	$scope.updateRate = function(rate){
		$http.put('api/items/' + $scope.dude.id, $scope.dude).success(function(){
			alert('dude beers updated');
		});
	}

}]);