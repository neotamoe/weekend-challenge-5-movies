var myApp = angular.module('myApp', ['ngRoute']);

// config for angular-route
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/pages/home.html',
    controller: 'HomeController as hc'
  }).when('/search', {
    templateUrl: '/views/pages/search.html',
    controller: 'SearchAndStoreController as sasc'
  }).when('/favorites', {
    templateUrl: '/views/pages/favorites.html',
    controller: 'SearchAndStoreController as sasc'
  }).when('/home', {
    templateUrl: '/views/pages/home.html',
    controller: 'HomeController as hc'
  }).otherwise({ redirectTo: '/'});
  $locationProvider.html5Mode(true);
});

// HomeController for home/index page
myApp.controller('HomeController', function(){
  console.log('angular sourced');
  var vm =  this;
  vm.welcome = "Welcome!";
});

// main controller for search and favorites page
myApp.controller('SearchAndStoreController', function($http, DatabaseDisplay){
  console.log('angular sourced');

  var vm =  this;

  vm.showFaves = function(){
    DatabaseDisplay.getFaves().then(function(data){
      vm.favorites = data;
    });
  };  // end showFaves

  vm.deleteFavorite = function(id){
    // delete movie based on id clicked
    DatabaseDisplay.deleteFave(id);
    swal("Deleted!", "Your movie was deleted from Favorites.", "success");
    // update DOM after delete
    vm.showFaves();
  };  // end deleteFavorite

  vm.searchOMDB = function(){
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s='+ vm.searchIn,
    }).then(function(response){
      vm.display = response.data.Search;
    });
  };  // end searchOMDB

  vm.addFavorite = function(movie){
    console.log('add favorite button clicked');
    console.log('title:', movie.Title, 'poster:', movie.Poster,'year:', movie.Year);
    var objectToSend = {
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
    $http({
      method: 'POST',
      url: '/savemovie/',
      data: objectToSend
    }).then(function(response){
      swal({
        title: movie.Title,
        text: "saved to favorites",
        timer: 1500,
        showConfirmButton: false
      });
      vm.showFaves();
    });  // end $http
  };  // end addFavorite
}); // end SearchAndStoreController
