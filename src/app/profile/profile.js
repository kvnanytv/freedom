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
    data:{ pageTitle: 'Profile', sidebarEnabled: true  }
  })
  ;
})

.controller( 'ProfileCtrl', function ProfileController( $scope, Restangular, $http, $state) { 
  var query = {userid:'0'};
  Restangular.one("user").get(query).then(function(user) {
    $scope.profile = user.data;
    $scope.badges = $scope.profile.freedom_data.badges;
  });
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

