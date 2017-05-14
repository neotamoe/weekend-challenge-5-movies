var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/pages/home.html',
    controller: 'SearchAndStoreController as sasc'
  }).when('/search', {
    templateUrl: '/views/pages/search.html',
    controller: 'SearchAndStoreController as sasc'
  }).when('/favorites', {
    templateUrl: '/views/pages/favorites.html',
    controller: 'SearchAndStoreController as sasc'
  }).when('/home', {
    templateUrl: '/views/pages/home.html',
    controller: 'SearchAndStoreController as sasc'
  }).otherwise({ redirectTo: '/'});

  $locationProvider.html5Mode(true);
});

myApp.controller('SearchAndStoreController', function($http, DatabaseDisplay){
  console.log('angular sourced');

  var vm =  this;

  vm.showFaves = function(){
    DatabaseDisplay.getFaves().then(function(data){
      console.log('data-->',data);
      console.log('showFaves-->', vm.showFaves);
      vm.favorites = data;
    });
  };

  vm.searchOMDB = function(){
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s='+ vm.searchIn,
    }).then(function(response){
      console.log('response.data.Search-->', response.data.Search);
      vm.display = response.data.Search;
      console.log('vm.display-->',vm.display);
      // return vm.display;
    });  // end then
  };  // end searchWord

  vm.addFavorite = function(title, year, poster){
    console.log('add favorite button clicked');
    console.log('title:', title, 'poster:', poster,'year:', year);
    var objectToSend = {
      title: title,
      year: year,
      poster: poster
    };
    console.log('objectToSend-->', objectToSend);
    $http({
      method: 'POST',
      url: '/savemovie/',
      data: objectToSend
    }).then(function(response){
      console.log('back from server with response-->', response);
      swal(title + " saved to favorites");
      vm.showFaves();
    });  // end $http
  };  // end addFavorite



}); // end controller
