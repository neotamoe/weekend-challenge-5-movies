var myApp = angular.module('myApp', ['ngRoute']);

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

myApp.controller('HomeController', function(){
  console.log('angular sourced');
  var vm =  this;
  vm.welcome = "Welcome!";
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
    swal("Deleted!", "Your movie was deleted from Favorites.", "success");
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
    console.log('title:', movie.Title, 'poster:', movie.Poster,'year:', movie.Year);
    var objectToSend = {
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
    console.log('objectToSend-->', objectToSend);
    $http({
      method: 'POST',
      url: '/savemovie/',
      data: objectToSend
    }).then(function(response){
      console.log('back from server with response-->', response);
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
