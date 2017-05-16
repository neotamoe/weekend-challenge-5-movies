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

});  // end DatabaseDisplay service
