var authServices = angular.module('authServices', []);

authServices.factory('AuthService', ['$http', 
  function ($http) {
    var authService = {};

    authService.login = function (credentials) {
      return $http
      .post('/api/login', credentials)
      .then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);  
      }); 
    };

    return authService;
  }
]);
