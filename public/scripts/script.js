var myApp = angular.module('myApp', []);

myApp.controller('SearchAndStoreController', function($http){
  console.log('angular sourced');

  var vm =  this;

  vm.searchOMDB = function(){
    $http({
      type: 'GET',
      url: 'http://www.omdbapi.com/?s='+ vm.searchIn,
    }).then(function(response){
      console.log('response.data.Search-->', response.data.Search);
      vm.display = response.data.Search;
      console.log('vm.display-->',vm.display);
      return vm.display;
    });  // end then
  };  // end searchWord


});
