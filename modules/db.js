// requires
var mongoose = require ('mongoose');

// database connection set up for heroku or localhost
var databaseURI = '';
// process.env.MONGODB_URI will only be defined if you are running on Heroku
if(process.env.MONGODB_URI !== undefined) {
    // use the string value of the environment variable
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/faveflicks';
}

// localhost connection
// var mongoDB = mongoose.connect('mongodb://localhost:27017/faveflicks').connection;
// heroku connection
// var mongoDB = mongoose.connect('mongodb://heroku_lq2rhd4r:d0842t40gdi95sjjpfnvhsqgn0@ds139761.mlab.com:39761/heroku_lq2rhd4r').connection;
var mongoDB = mongoose.connect(databaseURI);


mongoDB.on ('error', function(err){
  console.log('mongoDB error:', err);
}); // end on error

mongoDB.once('open', function(){
  console.log('mongoDB connection open');
});  // end once open

module.exports = mongoDB;
