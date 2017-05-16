var myApp = angular.module('myApp', ['ngRoute']);

// config for angular-route
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/pages/home.html',
    controller: 'HomeController as hc'
  }).when('/search', {
    templateUrl: '/views/pages/search.html',
    controller: 'SearchController as sc'
  }).when('/favorites', {
    templateUrl: '/views/pages/favorites.html',
    controller: 'StoreController as stc'
  }).when('/home', {
    templateUrl: '/views/pages/home.html',
    controller: 'HomeController as hc'
  }).otherwise({ redirectTo: '/'});
  $locationProvider.html5Mode(true);
});
