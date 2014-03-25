/*javascript external to angular applies to a scope*/
var currentVersion = currentVersion;

function tellAngular() {
    var domElt = document.getElementById('page-container');
    scope = angular.element(domElt).scope();
    if(scope) {
      scope.$apply(function() {
          scope.width = window.innerWidth;
          scope.height = window.innerHeight;
      });
    }
}
//first call of tellAngular when the dom is loaded
document.addEventListener("DOMContentLoaded", tellAngular, false);
//calling tellAngular on resize event
window.onresize = tellAngular;

/* main app */
angular.module( 'freedomDashboard', [
  'templates-app',
  'templates-common',

   //modules
  'freedomDashboard.home',
  'freedomDashboard.about',
  'freedomDashboard.profile',
  'freedomDashboard.login',
  'freedomDashboard.authcallback',
  'freedomDashboard.signup',

   //services
  'freedomDashboard.services',

   //configurations
  'freedomDashboard.config',

   //vendors
  'restangular',
  'LocalStorageModule',
  'directive.g+signin',
  // 'oc.lazyLoad',

  'ui.router',
  'ui.route'
])

.config( ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'RestangularProvider', 'freedomConfigProvider', function myAppConfig ( $stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider, freedomConfigProvider) {
  $urlRouterProvider.otherwise( '/overview' );

  /**** THIS CONFIG IS FOR REMOVING THE EXTRA HEADER ANGULAR SEND IN AJAX CALLS(HTTP) ***/ 
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  /*** END ****/
  console.log(freedomConfigProvider.getApikey);
  RestangularProvider.setDefaultRequestParams({
    apiKey: freedomConfigProvider.getApikey
  });
  RestangularProvider.setDefaultHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
  RestangularProvider.setBaseUrl(freedomConfigProvider.getBaseUrl);
  RestangularProvider.setResponseExtractor(function(response, operation) {
    if (operation === 'getList') {
        var newResponse = response.data;
        return newResponse;
    }
    return response;
  });
}])



.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $state, $stateParams, $rootScope, $location, Restangular, localStorageService, freedomValues, freedomFunctions) {
  $scope.currentAccount = {};
  $rootScope.isSignedin = false;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Freedom! Dashboard ' ;
    }
    $scope.sidebarActive = toState.data.sidebarEnabled;
    $scope.sidebarAllowed = toState.data.sidebarAllowed;
    if(!$scope.sidebarAllowed) {
      $scope.sidebarActive = false;
    }
    $scope.mainContentClass = toState.data.contentClass;
    $rootScope.isSignedin = freedomFunctions.isSignedin();
  });

  if(currentVersion) {
    console.log("Freedom! Dashboard v", currentVersion, "was loaded.");
    $scope.currentVersion = currentVersion;
  }
 
 
  $scope.search = function(searchText) {
    console.log(searchText);
  };
  $scope.showSidebar = function() {
    return $scope.sidebarAllowed;
  };
  $scope.sidebarToggle = function() {
    if($scope.sidebarAllowed) {
      $scope.sidebarActive = !$scope.sidebarActive;  
    }
  };
  $scope.reload = function () {
    var current = $state.current;
    var params = angular.copy($stateParams);
    $state.transitionTo(current, params, { reload: true, inherit: true, notify: true });
    console.log(123);
  };
  $scope.signOut = function() {
    freedomValues.signInValues.set({});
    $scope.reload();
  };



  $scope.clientId = "565529935553-brq9fde3svr8v2bmkal23o37t20hjfkj.apps.googleusercontent.com";
  $scope.$on('event:google-plus-signin-success', function (event,authResult) {
     console.log(authResult);
  });
  $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
     console.log(authResult);
  });
})
.directive('scrollto', function () {
  var linker = function(scope,element,attrs) {
    // console.log("element");
    element.bind('click', function() {
      $('html, body').animate({
        scrollTop: $( element.attr('scrollto') ).offset().top
      }, 1100);         
      return false;
    });
  };
  return {
    restrict:'A',
    link: linker
  };
})

;

function jsonUnstringify(val) {
  return jQuery.parseJSON(val);
}