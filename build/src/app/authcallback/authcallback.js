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

.controller( 'AuthcallbackCtrl', function ProfileController( $scope, freedomValues, freedomFunctions, Restangular, $http, $state, $stateParams) { 
  // jsonUnstringify()
  $scope.passedData = $stateParams.data;
  $scope.passedData = $scope.passedData.replace("_","=");
  $scope.passedData = jsonUnstringify($scope.passedData);
  freedomValues.signInValues.set($scope.passedData);
  
  passValue = {};
  passValue.email = $scope.passedData.email.value;
  passValue.password = "asdasdasdasdasd";
  passValue.source = "self";
  passValue.app_id = freedomValues.appId.get();
  passValue = jQuery.param(passValue);

  var userLogin = Restangular.all('auth/login');

  userLogin.post(passValue).then(function(response) {
    freedomValues.profileValues.set(response.user_data);
    $state.go("profile");
  },function(error) {
    if(error.status==500) {
      console.log(error.status, error.data);
    }
    else if(error.status==404) {
      $state.go("signup");
    }
    else if(error.status==400) {
      console.log(error.status, error.data);
    }
  });

  
})

;

