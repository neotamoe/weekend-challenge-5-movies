myApp.controller('SearchController', ['$http', 'SearchService', 'StoreService', function($http, SearchService, StoreService){
  console.log('in the search controller sourced');

  var vm =  this;

  vm.searchOMDB = function(searchString){
    console.log('searching for: ', searchString);
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
    StoreService.addFavorite(objectToSend).then(function(status){
      console.log('status:', status);
      swal({
        title: movie.Title,
        text: "saved to favorites",
        timer: 1500,
        showConfirmButton: false
      });
      vm.showFaves();
    });
  };

  vm.showFaves = function(){
    StoreService.getFaves().then(function(data){
      vm.favorites = data;
    });
  };  // end showFaves

}]);  // end SearchController
