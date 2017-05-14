var myApp = angular.module('myApp', []);

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
      // add function for displaying favorites on DOM (getFaves)
    });  // end $http
  };  // end addFavorite



}); // end controller
