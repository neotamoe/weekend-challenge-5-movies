myApp.service('StoreService', function($http){
  var self = this;

  self.getFaves = function(){
    return $http({
      method: 'GET',
      url: '/savefaves/'
    }).then(function(response){
      return response.data;
    });
  };  // end getFaves

  self.deleteFave = function(id){
    console.log('deleteFave id to remove-->', id);
    return $http({
      method: 'DELETE',
      url: '/deleteFave/' + id,
    }).then(function(response){
      return response.status;
    });
  };
});  // end DatabaseDisplay service
