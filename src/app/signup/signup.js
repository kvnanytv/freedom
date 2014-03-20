angular.module( 'freedomDashboard.signup', [
  'restangular',
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider) {
  $stateProvider.state( 'signup', {
    url: '/signup',
    views: {
      "main": {
        controller: 'SignupCtrl',
        templateUrl: 'signup/signup.tpl.html'
      }
    },
    data:{ pageTitle: 'Signup', sidebarEnabled: false  }
  })
  ;
})

.controller( 'SignupCtrl', function ProfileController( $scope, tempValues, Restangular, $http, $state, $stateParams) { 
  $scope.signupValues = tempValues.googleSignupValues;
})

;

