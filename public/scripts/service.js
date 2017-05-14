myApp.service('DatabaseDisplay', function($http){
  this.getFaves = function(){
    return $http({
      type: 'GET',
      url: '/savefaves/'
    }).then(function(response){
      console.log('response.data-->', response.data);
      return response.data;
    });
  };  // end getFaves
});  // end Search service




// note to self:
// no module.exports needed for services
