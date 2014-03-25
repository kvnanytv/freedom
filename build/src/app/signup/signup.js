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
    data: { 
      pageTitle: 'Signup',
      sidebarEnabled: false,
      sidebarAllowed: false,
      contentClass: "content-fixed"
    }
  })
  ;
})

.controller( 'SignupCtrl', function ProfileController( $scope, freedomValues, $rootScope, freedomFunctions, Restangular, $http, $state, $stateParams, localStorageService ) { 
  $scope.signupValues = freedomValues.signInValues.get();
  if(!$rootScope.isSignedin) {
    $state.go('login');
  }
  /********DATE PICKER***********/
  var minYear = 1990, minMonth = 1, minDay = 1;
  var year = 1996, month = 1, day = 1;
  $scope.dt = new Date(year, month, day);
  $scope.minDate = new Date(minYear, minMonth, minDay);
  $scope.processBirthDate = function () {
      return $scope.dt.getMonth()+1+"/"+$scope.dt.getDate()+"/"+$scope.dt.getFullYear();
  };
  $scope.$watch('dt', function() {
    $scope.signupValues.birthdate = $scope.dt.getTime();
  }, true);
  $scope.disabled = function(date, mode) {
    // return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
  $scope.max = new Date();
  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 0
  };
  /********END - DATE PICKER***********/
  /********CATEGORIES***********/
  $scope.categories = [
    {id:'15', text:'Animation'},
    {id:'11', text:'Art'},
    {id:'10', text:'Comedy'},
    {id:'8', text:'Culinary'},
    {id:'16', text:'Dance'},
    {id:'18', text:'Education'},
    {id:'3', text:'Electronic Music'},
    {id:'4', text:'Fashion and Beauty'},
    {id:'14', text:'Film'},
    {id:'1', text:'Gaming'},
    {id:'5', text:'Mens Lifestyle'},
    {id:'2', text:'Music'},
    {id:'7', text:'Parenting'},
    {id:'12', text:'Pets'},
    {id:'13', text:'Science & Technology'},
    {id:'17', text:'Stunts and Action Sports'},
    {id:'9', text:'Vlogging'},
    {id:'6', text:'Womens Lifestyle'}
  ];
  $scope.category = "1";
  /********END - CATEGORIES***********/
  /********TRANSACTIONS***********/
  $scope.submitRegistration = function() {
    var userRegistration = Restangular.all('user/register');
    var passValue = {};
    console.log($scope.signupValues);

    passValue.email = $scope.signupValues.email.value;
    passValue.password = "asdasdasdasdasd";
    passValue.lname = $scope.signupValues.name.familyName;
    passValue.fname = $scope.signupValues.name.givenName;
    passValue.birthdate = $scope.signupValues.birthdate;
    passValue.app_id = "665f627007666750b092f6a68396ed76";
    passValue = jQuery.param(passValue); //convert to FORM DATA

    userRegistration.post(passValue).then(function(response) {
      console.log("signed up", response);
      $state.go('home');
    },function(error) {
      if(error.status==500) {
        console.log(error.status, error.data);
      }
      else if(error.status==400) {
        console.log(error.status, error.data);
      }
    });

    
    
    // email=rob%40any.tv&password=ASDSADASD&lname=Sambuena&fname=Robert&birthdate=823104000000&app_id=665f627007666750b092f6a68396ed76
    // {"email":"rob@any.tv","password":"ASDSADASD","lname":"Sambuena","fname":"Robert","birthdate":823104000000,"app_id":"665f627007666750b092f6a68396ed76"}
    
    // $http({method: 'POST', data:passValue, url: 'http://ec2-54-184-12-181.us-west-2.compute.amazonaws.com/user/register'}).
    // success(function(data, status, headers, config) {
    //   // this callback will be called asynchronously
    //   // when the response is available
    // }).
    // error(function(data, status, headers, config) {
    //   // called asynchronously if an error occurs
    //   // or server returns response with an error status.
    // });

    // $.ajax({
    //   type: "POST",
    //   url: "http://ec2-54-184-12-181.us-west-2.compute.amazonaws.com/user/register",
    //   data: passValue
    // })
    //   .done(function( msg ) {
    //     alert( "Data Saved: " + msg );
    //   });
    // console.log($scope.signupValues);
  };
})

;

