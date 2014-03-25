angular.module( 'freedomDashboard.services', ['LocalStorageModule','freedomDashboard.config'])
.config( ['freedomConfigProvider', function myAppConfig (freedomConfigProvider) {
	apikey = freedomConfigProvider.getApikey;
}])
.service( 'freedomValues', function (localStorageService, freedomConfig) {
	var tempSignupValues = {};
	var tempProfileValues = {};
	this.signInValues =  {
		get: function() {
			return tempSignupValues.id?tempSignupValues:localStorageService.get('sv'+apikey);
		},
		set: function(value) {
			localStorageService.add('sv'+apikey, value);
			tempSignupValues = value;
			return true;
		}
	};
	this.profileValues =  {
		get: function() {
			return tempSignupValues.id?tempSignupValues:localStorageService.get('pv'+apikey);
		},
		set: function(value) {
			localStorageService.add('pv'+apikey, value);
			tempProfileValues = value;
			return true;
		}
	};
	this.appId =  {
		get: function() {
			return apikey;
		}
	};
})
.service( 'freedomFunctions', function (localStorageService, freedomValues) {
	this.isSignedin = function () {
		if(freedomValues.signInValues.get().id) {
			return true;
		}
		return false;

	};
})

;

