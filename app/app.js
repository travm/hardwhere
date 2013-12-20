var hardwhere = angular.module('hardwhere', ['ngRoute', 'ngAnimate', 'ngResource']);

hardwhere.config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'app/views/index.html', controller: 'IndexController'});
    $routeProvider.when('/login', {templateUrl: 'app/views/login.html', controller: 'LoginController'});
    $routeProvider.when('/dashboard', {templateUrl: 'app/views/dashboard.html', controller: 'DashboardController'});
    $routeProvider.when('/dashboard/add', {templateUrl: 'app/views/add.html', controller: 'DashboardController'});
    $routeProvider.when('/dashboard/edit', {templateUrl: 'app/views/edit.html', controller: 'DashboardController'});
    $routeProvider.otherwise({redirectTo: '/'})
});
