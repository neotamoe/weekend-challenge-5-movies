// requires
var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var mongoDB = require('./modules/db');


// globals
var port = process.env.PORT || 3579;

// uses
app.use( bodyParser.urlencoded ( { extended:true } ) );
app.use( bodyParser.json() );
app.use( express.static ('public') );

// base route
app.get('/', function(req,res){
  console.log('base route hit');
  res.sendFile(path.resolve('public/views/index.html'));
});

// server up
app.listen(port, function(){
  console.log('server up and listening on port:', port);
});
