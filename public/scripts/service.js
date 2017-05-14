myApp.service('DatabaseDisplay', function($http){
  this.getFaves = function(){
    return $http({
      method: 'GET',
      url: '/savefaves/'
    }).then(function(response){
      console.log('response.data-->', response.data);
      return response.data;
    });
  };  // end getFaves

  this.deleteFave = function(id){
    console.log('deleteFave id to remove-->', id);
    $http({
      method: 'DELETE',
      url: '/deleteFave/' + id,
    }).then(function(response){
      console.log('$http delete response-->', response);
      return response.status;
    });
  };
});  // end DatabaseDisplay service



// note to self:
// no module.exports needed for services
