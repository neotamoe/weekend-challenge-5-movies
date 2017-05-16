myApp.controller('SearchController', function($http, SearchService, StoreService){
  console.log('in the search controller sourced');

  var vm =  this;

  vm.searchOMDB = function(searchString){
    console.log('searching for: ', searchString);
    SearchService.searchOMDB(searchString).then(function(data){
      vm.display = data;
    });
  };  // end searchOMDB


  vm.addFavorite = StoreService.addFavorite;

});  // end SearchController
