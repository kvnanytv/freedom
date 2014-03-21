angular.module('templates-app', ['about/about.tpl.html', 'authcallback/authcallback.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html', 'profile/profile.tpl.html', 'signup/signup.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "About");
}]);

angular.module("authcallback/authcallback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("authcallback/authcallback.tpl.html",
    "authcallback");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"login-page\">\n" +
    "	<div class=\"wrapper\">\n" +
    "		<div class=\"login-form\">\n" +
    "			<h3>Welcome to Freedom! Dashboard</h3>\n" +
    "			<form>\n" +
    "				<div class=\"input-group input-group-lg\">\n" +
    "			      <span class=\"input-group-addon no-border-radius glyphicon glyphicon-user\"></span>\n" +
    "			      <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "			    </div>\n" +
    "			    <div class=\"input-group input-group-lg\">\n" +
    "			      <span class=\"input-group-addon no-border-radius glyphicon glyphicon-lock\"></span>\n" +
    "			      <input type=\"text\" class=\"form-control\" placeholder=\"Password\">\n" +
    "			    </div>\n" +
    "			    <a class=\"btn btn-default btn-lg btn-regular-signin\">Sign in</a>\n" +
    "			    <p>or</p>\n" +
    "			    <a href=\"//localhost:3000/googleauth\" class=\"btn btn-danger btn-lg btn-google-signin\">\n" +
    "			    	<i class=\"fa fa-google-plus-square\">&nbsp;</i> Sign in with Google\n" +
    "			    </a>\n" +
    "		    </form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div class=\"profile-page\">\n" +
    "	<div class=\"wrapper\">\n" +
    "		<div class=\"top-content\">\n" +
    "			<div class=\"user\">\n" +
    "				<div class=\"user-info\">\n" +
    "					<div class=\"info\">\n" +
    "						<a href=\"/{{profile.custom_url}}\">\n" +
    "							<img class=\"avatar\" ng-src=\"{{profile.avatar}}\"></img>\n" +
    "							<strong class=\"name\" ng-bind=\"profile.profile_info.fname+' '+profile.profile_info.lname\"></strong>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"badges\">\n" +
    "						<span class=\"text-muted\">Badges</span>\n" +
    "						<span class=\"badge\" title=\"{{badge.text}}\" ng-repeat=\"badge in badges\" ng-style=\"{'background-position-x':badge.sprite[0]+'px','background-position-y':badge.sprite[1]+'px'}\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"options\">\n" +
    "						<button type=\"button\" class=\"btn btn-default btn-sm\">Edit Profile</button>\n" +
    "						\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"misc\">\n" +
    "				<div class=\"earning muted\">\n" +
    "					<h1>Earnings: $1</h1>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"main-content\">\n" +
    "			<div id=\"header\" class=\"main-content-header\">\n" +
    "				<ul class=\"navigation\" ng-init=\"userSubmenu = 'channel'\">\n" +
    "					<li scrollto=\"header\" ng-repeat=\"submenu in submenus\" ng-class=\"{'active':submenu.id==selectedMenu}\">\n" +
    "						<a href=\"\" ng-click=\"selectMenu(submenu.id)\" ng-bind=\"submenu.text\"></a>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div class=\"main-content-body\">\n" +
    "				<pre>{{profile | json}}</pre>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("signup/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signup/signup.tpl.html",
    "<div class=\"signup-page\"><div class=\"wrapper\">\n" +
    "	<div class=\"container\">\n" +
    "		<h2>Basic Information!</h2>\n" +
    "	</div>\n" +
    "	<form class=\"form form-horizontal\" ng-submit=\"submitRegistration()\">\n" +
    "		<div class=\"container\">\n" +
    "	        <div class=\"form-group\">\n" +
    "	           <div class=\"col-md-6\">\n" +
    "		           <label>Username</label>\n" +
    "		           <input type=\"text\" ng-model=\"signupValues.displayName\" class=\"form-control input-lg\" placeholder=\"mcnfreedom\">\n" +
    "	           </div>\n" +
    "	           <div class=\"col-md-6\">\n" +
    "		           <label>Email Address</label>\n" +
    "		           <input type=\"email\" ng-model=\"signupValues.email.value\" class=\"form-control input-lg\" placeholder=\"email@freedom.tm\">\n" +
    "	           </div>\n" +
    "	        </div>\n" +
    "	        <div class=\"form-group\">\n" +
    "	           <div class=\"col-md-6\">\n" +
    "		           <label>Last Name</label>\n" +
    "		           <input type=\"text\" ng-model=\"signupValues.name.familyName\" class=\"form-control input-lg\" placeholder=\"Last Name\">\n" +
    "	           </div>\n" +
    "	           <div class=\"col-md-6\">\n" +
    "		           <label>First Name</label>\n" +
    "		           <input type=\"text\" ng-model=\"signupValues.name.givenName\" class=\"form-control input-lg\" placeholder=\"First Name\">\n" +
    "	           </div>\n" +
    "	        </div>\n" +
    "	        <div class=\"form-group\">\n" +
    "	           <div class=\"col-md-6\">\n" +
    "		           <label>Birthyear</label>\n" +
    "				    <div class=\"row\">\n" +
    "				        <div class=\"col-md-12\">\n" +
    "				            <p class=\"input-group\">\n" +
    "				              <input type=\"text\" class=\"form-control input-lg\" datepicker-popup=\"{{format}}\" ng-model=\"dt\" is-open=\"opened\" min=\"minDate\" max=\"'2015-06-22'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\" ng-disabled />\n" +
    "				              <span class=\"input-group-btn\">\n" +
    "				                <button class=\"btn btn-default btn-lg\" style=\"margin:0 0;padding-bottom:11px\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "				              </span>\n" +
    "				            </p>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "	           </div>\n" +
    "	           <div class=\"col-md-6\">\n" +
    "		           <label>YouTube Channel Category</label>\n" +
    "		           <select class=\"form-control input input-lg\" ng-model=\"signupValues.category\" ng-options=\"item.id as item.text for item in categories\"></select>\n" +
    "	           </div>\n" +
    "	        </div>\n" +
    "	        <div class=\"form-group\">\n" +
    "	           <div class=\"col-md-6\">\n" +
    "		           <label>Skype(optional)</label>\n" +
    "		           <input type=\"text\" ng-model=\"signupValues.skypeEmail\" class=\"form-control input-lg\" placeholder=\"Skype(optional)\">\n" +
    "	           </div>\n" +
    "	           <div class=\"col-md-6\">\n" +
    "		           <label>Who told you about us?(optional)</label>\n" +
    "		           <input type=\"text\" ng-model=\"signupValues.referrerDesc\" class=\"form-control input-lg\" placeholder=\"Friends, Family, George?\">\n" +
    "	           </div>\n" +
    "	        </div>\n" +
    "	        <div class=\"form-group\">\n" +
    "	           <div class=\"col-md-12 big-text\" style=\"text-align:center\">\n" +
    "		           <h3>Tell us a little about yourself (and why you chose us!)</h3>\n" +
    "		           <textarea type=\"email\" ng-model=\"signupValues.reason\" class=\"form-control input-lg\" placeholder=\"Tell us!\"></textarea>\n" +
    "	           </div>\n" +
    "	        </div>\n" +
    "	        <div class=\"col-md-12 big-text\" style=\"text-align:center\">\n" +
    "	           <button tyle=\"submit\" class=\"btn btn-lg btn-success\">Continue >></button>\n" +
    "           </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div></div>");
}]);
