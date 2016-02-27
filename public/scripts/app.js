//create app and define default route
var app = angular.module('app', ['ngRoute']);

//$routeProvider comes from ngRoute
app.config(['$routeProvider', function($routeProvider) {

  //.otherwise creates a route in case no other routes match the url
  $routeProvider
    .otherwise({

      //templateUrl will load into the ng-View defined in the index.html
      templateUrl: '/views/templates/characters.html',

      //the characters controller will be loaded and will set up the $scope for the template to bind to
      controller: 'characters'
  });
}]);