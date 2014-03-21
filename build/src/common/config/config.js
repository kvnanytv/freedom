angular.module( 'freedomDashboard.config', [])
.provider('freedomConfig', function() {
 this.$get = angular.noop;
 this.getBaseUrl = "http://ec2-54-184-12-181.us-west-2.compute.amazonaws.com";
 this.getApikey = "665f627007666750b092f6a68396ed76";
})

;

