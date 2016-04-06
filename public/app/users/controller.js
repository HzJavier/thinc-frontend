movieControllers.controller('UserLogIn', ['$scope', '$rootScope','$http', function ($scope, $rootScope,$http) {

  $scope.logged= false;
  $scope.showError= false;

  $scope.logIn= function(){
    $http({
      url:'api/users/login/',
      method: 'POST',
      data:{'user':$scope.login.name,'pass':$scope.login.pass}
    })
    .success(function (data) {
      if(data.response==='correcto'){
        $scope.logged= true;
        $scope.fullName= data.name;

        $rootScope.name= data.name;
        $rootScope.user= data.user;
        $rootScope.password= data.password;
        $rootScope.age= data.age;
        
        $scope.showError= false;
      }else{
        $scope.logged= false;
        $scope.showError= true;
      }
    });
  }

  // $scope.updateProfile= function(){
  //   $http.put('api/users/'+$scope.currentMoviePreview.id,$rootScope.user)
  //   .success(function (data) {
  //   });

  //   $scope.showModal= false;
  // }

}]);
