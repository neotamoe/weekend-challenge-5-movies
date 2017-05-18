myApp.controller('StoreController', function($http, SearchService, StoreService){
  console.log('angular sourced');

  var vm =  this;

  vm.showFaves = function(){
    StoreService.getFaves().then(function(data){
      vm.favorites = data;
    });
  };  // end showFaves

  vm.showFaves();

  vm.deleteFavorite = function(id){
    // delete movie based on id clicked
    StoreService.deleteFave(id).then(function(status){
      console.log('back from server after delete; received status-->', status);
      swal("Deleted!", "Your movie was deleted from Favorites.", "success");
      // update DOM after delete
      vm.showFaves();
    });
  };  // end deleteFavorite

  // moved this function to searchController.js  
  // vm.addFavorite = function(movie){
  //   console.log('add favorite button clicked');
  //   console.log('title:', movie.Title, 'poster:', movie.Poster,'year:', movie.Year);
  //   var objectToSend = {
  //     title: movie.Title,
  //     year: movie.Year,
  //     poster: movie.Poster,
  //   };
  //   console.log('objectToSend:', objectToSend);
  //   StoreService.addFavorite(objectToSend).then(function(status){
  //     console.log('status:', status);
  //     swal({
  //       title: movie.Title,
  //       text: "saved to favorites",
  //       timer: 1500,
  //       showConfirmButton: false
  //     });
  //     showFaves();
  //   });
  // };  // end addFavorite

});
