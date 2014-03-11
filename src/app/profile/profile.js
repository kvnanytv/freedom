/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'freedomDashboard.profile', [
  'restangular',
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'profile', {
    url: '/profile',
    views: {
      "main": {
        controller: 'ProfileCtrl',
        templateUrl: 'profile/profile.tpl.html'
      }
    },
    data:{ pageTitle: 'Profile' }
  });

})

/**
 * And of course we define a controller for our route.
 */
.controller( 'ProfileCtrl', function HomeController( $scope, Restangular, $http, $state) { 
      // var User = Restangular.all('user');  //user
      // var User = Restangular.one('user', '0'); // user/0
      var query = {userid:'0'};
      // var User = Restangular.one('user').get(query);
      Restangular.one("user").get(query).then(function(user) {
        $scope.profile = user.data;
        $scope.badges = $scope.profile.freedom_data.badges;
        console.log($scope.profile);
      });
      

      // $scope.badges = [
      //   {id:1, text:'Welcome Badge', sprite:[0,0]},
      //   {id:2, text:'Veteran Badge', sprite:[29,0]},
      //   {id:3, text:'Mr. Uploader Badge', sprite:[58,0]},
      //   {id:3, text:'Mr. Views Badge', sprite:[87,0]},
      //   {id:3, text:'Voice Badge', sprite:[116,0]},
      //   {id:3, text:'Epic Badge', sprite:[145,0]},
      //   {id:3, text:'Thunder Badge', sprite:[0,30.5]},
      //   {id:3, text:'Mr. Earner Badge', sprite:[29,30.5]},
      //   {id:3, text:'Let it go Badge', sprite:[58,30.5]},
      //   {id:3, text:'Troll Badge', sprite:[87,30.5]}
      // ];
})

;

