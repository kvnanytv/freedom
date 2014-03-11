angular.module( 'freedomDashboard.config', [])
.provider('freedomConfig', function() {
 this.$get = angular.noop;
 this.getBaseUrl = "http://localhost:3000";
 this.getApikey = "123456";
})
;

