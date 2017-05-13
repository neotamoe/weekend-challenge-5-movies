// requires
var mongoose = require ('mongoose');

var mongoDB = mongoose.connect('mongodb://localhost:27017/faveflicks').connection;

mongoDB.on ('error', function(err){
  console.log('mongoDB error:', err);
}); // end on error

mongoDB.once('open', function(){
  console.log('mongoDB connection open');
});  // end once open

module.exports = mongoDB;
