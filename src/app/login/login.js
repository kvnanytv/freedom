angular.module( 'freedomDashboard.login', [
  'restangular',
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ 
      pageTitle: 'Login', 
      sidebarEnabled: false, 
      sidebarAllowed: true,
      contentClass: "content-fixed" 
    }
  })
  ;
})

.controller( 'LoginCtrl', function LoginController( $scope, Restangular, $http, $state) { 
  
})

;

