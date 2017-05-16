myApp.controller('SearchController', function($http, SearchService){
  console.log('angular sourced');

  var vm =  this;

  vm.searchOMDB = function(searchString){
    SearchService.searchOMDB(searchString).then(function(data){
      vm.display = data;
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
    console.log('objectToSend:', objectToSend);
    SearchService.addFavorite(objectToSend).then(function(status){
      console.log('status:', status);
    });
    // vm.showFaves();
  };  // end addFavorite

});  // end SearchController
