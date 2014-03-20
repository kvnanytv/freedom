angular.module( 'freedomDashboard.authcallback', [
  'restangular',
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider) {
  $stateProvider.state( 'authcallback', {
    url: '/authcallback?data',
    views: {
      "main": {
        controller: 'AuthcallbackCtrl'
      }
    },
    data:{ pageTitle: 'Authcallback', sidebarEnabled: true  }
  })
  ;
})

.controller( 'AuthcallbackCtrl', function ProfileController( $scope, tempValues, Restangular, $http, $state, $stateParams) { 
  // jsonUnstringify()
  $scope.passedData = $stateParams.data;
  $scope.passedData = $scope.passedData.replace("_","=");
  $scope.passedData = jsonUnstringify($scope.passedData);
  console.log($scope.passedData);
  tempValues.googleSignupValues = $scope.passedData;
  $state.go("signup");
})

;

