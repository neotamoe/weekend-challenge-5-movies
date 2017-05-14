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
      console.log('vm.favorites/data-->',data);
      vm.favorites = data;
    });
  };

  vm.deleteFavorite = function(id){
    console.log('delete button clicked');
    console.log('id-->', id);
    DatabaseDisplay.deleteFave(id);
    vm.showFaves();
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

  vm.addFavorite = function(movie){
    console.log('add favorite button clicked');
    console.log('title:', movie.Title, 'poster:', movie.Poster,'year:', movie.Year,'imdbID:', movie.imdbID);
    var objectToSend = {
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbID: movie.imdbID
    };
    console.log('objectToSend-->', objectToSend);
    $http({
      method: 'POST',
      url: '/savemovie/',
      data: objectToSend
    }).then(function(response){
      console.log('back from server with response-->', response);
      swal(movie.Title + " saved to favorites");
      vm.showFaves();
    });  // end $http
  };  // end addFavorite
}); // end SearchAndStoreController
