var hardwhere = angular.module('hardwhere', ['ngRoute', 'ngAnimate']);

hardwhere.config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'app/views/index.html', controller: 'IndexController'});
    $routeProvider.when('/login', {templateUrl: 'app/views/login.html', controller: 'LoginController'});
    //$routeProvider.when('/register', {templateUrl: 'app/views/register.html', controller: 'RegisterController'});
    $routeProvider.when('/dashboard', {templateUrl: 'app/views/dashboard.html', controller: 'DashboardController'});
    $routeProvider.otherwise({redirectTo: '/'})
});
