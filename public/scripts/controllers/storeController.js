myApp.controller('StoreController', function($http, StoreService){
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
});
