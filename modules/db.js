// requires
var mongoose = require ('mongoose');

// var mongoDB = mongoose.connect('mongodb://localhost:27017/faveflicks').connection;
var mongoDB = mongoose.connect('mongodb://heroku_lq2rhd4r:d0842t40gdi95sjjpfnvhsqgn0@ds139761.mlab.com:39761/heroku_lq2rhd4r').connection;


mongoDB.on ('error', function(err){
  console.log('mongoDB error:', err);
}); // end on error

mongoDB.once('open', function(){
  console.log('mongoDB connection open');
});  // end once open

module.exports = mongoDB;
