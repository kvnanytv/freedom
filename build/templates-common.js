angular.module('templates-common', ['footer.tpl.html', 'menu/sidebar.tpl.html', 'menu/topbar.tpl.html']);

angular.module("footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer.tpl.html",
    "<footer class=\"footer\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"footer-inner\">\n" +
    "      <ul class=\"social\">\n" +
    "        <li><a target=\"_blank\" href=\"http://gplus.to/joshdmiller\"><i class=\"icon-google-plus-sign\"></i></a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://twitter.com/joshdmiller\"><i class=\"icon-twitter-sign\"></i></a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://linkedin.com/in/joshdmiller\"><i class=\"icon-linkedin-sign\"></i></a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://github.com/joshdmiller/ng-boilerplate\"><i class=\"icon-github-sign\"></i></a></li>\n" +
    "      </ul>\n" +
    "      <p>\n" +
    "        (c) 2013 Josh David Miller. \n" +
    "        <a href=\"http://github.com/joshdmiller/ng-boilerplate/fork_select\">Fork this</a>\n" +
    "        to kickstart your next project.\n" +
    "        <br />\n" +
    "        ng-boilerplate is based on\n" +
    "        <a href=\"http://www.angularjs.org\">AngularJS</a>,\n" +
    "        <a href=\"http://getbootstrap.com\">Bootstrap</a>, \n" +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "        and \n" +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">Font Awesome</a>.        \n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</footer>");
}]);

angular.module("menu/sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu/sidebar.tpl.html",
    "<div>\n" +
    "  <ul class=\"nav nav-custom-freedom\">\n" +
    "    <li ui-route=\"/overview\" ng-class=\"{active:$uiRoute}\">\n" +
    "      <a href=\"#/overview\">\n" +
    "        <span class=\"glyphicon glyphicon-home\"></span>\n" +
    "        Overview\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li ui-route=\"/profile\" ng-class=\"{active:$uiRoute}\">\n" +
    "      <a href=\"#/profile\">\n" +
    "        <i class=\"fa fa-user\"></i>\n" +
    "        You\n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li ui-route=\"/about\" ng-class=\"{active:$uiRoute}\">\n" +
    "      <a href=\"#/about\">\n" +
    "        <i class=\"glyphicon glyphicon-info-sign\"></i>\n" +
    "        About\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "  <div class=\"footer text-muted\">\n" +
    "    <small>Freedom! Dashboard <span ng-bind=\"'v'+currentVersion\"></span></small>\n" +
    "  </div>");
}]);

angular.module("menu/topbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu/topbar.tpl.html",
    "<div class=\"topbar-container\">\n" +
    "  <div class=\"freedom-logo text-muted\">\n" +
    "    <img src=\"assets/Fredom!_logo_black.png\"></img>\n" +
    "    <!-- <h6>\n" +
    "        Dashboard - {{sidebarActive}}<br />\n" +
    "        <span ng-bind=\"'v '+currentVersion\"></span>\n" +
    "    </h6>  -->\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-show=\"showSidebar()\" ng-click=\"sidebarToggle()\">\n" +
    "      <span class=\"glyphicon glyphicon-align-justify\"></span>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "  <div class=\"account-box\" ng-switch on=\"isSignedin\">\n" +
    "    <!-- <google-plus-signin clientid=\"{{clientId}}\"></google-plus-signin> -->\n" +
    "    <div class=\"btn-group\" ng-show=\"isSignedin\" ng-switch=\"true\">\n" +
    "      <button type=\"button\" class=\"btn btn-default dropdown-toggle image-box\" data-toggle=\"dropdown\">\n" +
    "        <span class=\"small-img\" style=\"width:32px;height:32px;display:block;background-image: url(//lh5.googleusercontent.com/-qmWYcM0QXeY/AAAAAAAAAAI/AAAAAAAAAAA/yCwjkPLv8Eo/s32-c/photo.jpg);\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu account-drop\" role=\"menu\">\n" +
    "        <li><a href=\"#\">Action</a></li>\n" +
    "        <li><a href=\"#\">Another action</a></li>\n" +
    "        <li><a href=\"#\">Something else here</a></li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li><a href=\"\" ng-click=\"signOut()\">Sign out</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <a href=\"#/login\" ng-hide=\"isSignedin\" class=\"signin btn btn-default\" ng-switch=\"false\">\n" +
    "      Sign in\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div class=\"search-box\">\n" +
    "    <form ng-submit=\"search(searchText)\">\n" +
    "      <input type=\"text\" class=\"form-control\" ng-model=\"searchText\"></input><button type=\"submit\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "  <!-- <div style=\"clear:both;\">\n" +
    "    <p>viewport:({{width}}, {{height}})</p>\n" +
    "  </div> -->\n" +
    "</span>\n" +
    "</div>");
}]);
