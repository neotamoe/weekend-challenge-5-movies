myApp.service('SearchService', function($http){
  var self = this;
  self.searchOMDB = function(searchString){
    return $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s='+ searchString,
    }).then(function(response){
      self.display = response.data.Search;
      return self.display;
    });
  };  // end searchOMDB

self.addFavorite = function(objectToSend){
  return $http({
    method: 'POST',
    url: '/savemovie/',
    data: objectToSend
  }).then(function(response){
      console.log('response-->', response);
      return response.data;
    });  // end then
  };  // end addFavorite

});  // end DatabaseDisplay service
