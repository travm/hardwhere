var hardwhere = angular.module('hardwhere', ['ngRoute', 'ngAnimate', 'ngResource']);

hardwhere.config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'app/views/index.html', controller: 'IndexController'});
    $routeProvider.when('/login', {templateUrl: 'app/views/login.html', controller: 'LoginController'});
    $routeProvider.when('/dashboard', {templateUrl: 'app/views/dashboard.html', controller: 'DashboardController'});
    $routeProvider.when('/dashboard/details/:id', {templateUrl: 'app/views/detail.html', controller: 'DetailController'});
    $routeProvider.when('/dashboard/add/', {templateUrl: 'app/views/add.html', controller: 'AddAssetController'});
    $routeProvider.when('/dashboard/add/:id', {templateUrl: 'app/views/create.html', controller: 'CreateAssetController'});
    $routeProvider.when('/dashboard/edit/:id', {templateUrl: 'app/views/edit.html', controller: 'EditAssetController'});
    $routeProvider.otherwise({redirectTo: '/'})
});
