angular.module( 'freedomDashboard', [
  'templates-app',
  'templates-common',
  'freedomDashboard.home',
  'freedomDashboard.about',
  'freedomDashboard.profile',

  'restangular',
  'freedomDashboard.config',
  
  'ui.router',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider, freedomConfigProvider) {
  $urlRouterProvider.otherwise( '/overview' );
  
  /**** THIS CONFIG IS FOR REMOVING THE EXTRA HEADER ANGULAR SEND IN AJAX CALLS(HTTP) ***/ 
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  /*** END ****/

  // console.log(freedomConfigProvider);
  RestangularProvider.setDefaultRequestParams({
    apiKey: freedomConfigProvider.getApikey
  });
  RestangularProvider.setBaseUrl(freedomConfigProvider.getBaseUrl);
  RestangularProvider.setResponseExtractor(function(response, operation) {
      if (operation === 'getList') {
          var newResponse = response.data;
          return newResponse;
      }
      return response;
  });
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, Restangular) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ' ;
    }
  });
  
})

;



      // $http({
      //       method: 'GET',
      //       url: 'http://localhost:3000/user'
      // })
      // .success(function(response){console.log(response);})
      // .error(function(response){console.log(response);});

      // $.ajax({
      //     type:       "GET",
      //     url:        'http://localhost:3000/user',
      //     async:      true,
      //     success: function (returndata, status, jqxhr) {
      //         console.log(returndata);
      //     },
      //     error: function (returndata, status, jqxhr) {
      //         console.log(returndata);
      //     }
      // });