var authServices = angular.module('authServices', []);

authServices.factory('AuthService', ['$http', 
  function ($http) {
    var authService = {};
    var isLoggedIn = false; 

    authService.userIsLogged = function () {
      return isLoggedIn;
    };

    authService.login = function (credentials) {
      return $http
      .post('/api/login', credentials)
      .then(function (response) {
        isLoggedIn = true;
      }, function (error) {
        isLoggedIn = false;
      }); 
    };

    return authService;
  }
]);
