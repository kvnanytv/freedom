angular.module( 'freedomDashboard.profile', [
  'restangular',
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'profile', {
    url: '/profile',
    views: {
      "main": {
        controller: 'ProfileCtrl',
        templateUrl: 'profile/profile.tpl.html'
      }
    },
    data: { 
      pageTitle: 'Profile', 
      sidebarEnabled: true, 
      sidebarAllowed: true,
      contentClass: "content"
    }
  })
  ;
})

.controller( 'ProfileCtrl', function ProfileController( $scope, freedomValues, Restangular, $http, $state) { 
  var query = {userid:'0'};
  $scope.profile = freedomValues.profileValues.get();
  $scope.pageTitle = "";
  $scope.selectedMenu = "channel";
  $scope.submenus = [
    {'id':'channel', 'text':'Channels'},
    {'id':'recruit', 'text':'Recruits'},
    {'id':'analytic', 'text':'Analytics'}
  ];
  $scope.selectMenu = function(id) {
    $scope.selectedMenu = id;
    console.log($scope.selectedMenu);
  };
})

;

