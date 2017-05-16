// myApp.service('DatabaseDisplay', function($http){
//   this.getFaves = function(){
//     return $http({
//       method: 'GET',
//       url: '/savefaves/'
//     }).then(function(response){
//       return response.data;
//     });
//   };  // end getFaves
//
//   this.deleteFave = function(id){
//     console.log('deleteFave id to remove-->', id);
//     $http({
//       method: 'DELETE',
//       url: '/deleteFave/' + id,
//     }).then(function(response){
//       return response.status;
//     });
//   };
// });  // end DatabaseDisplay service
