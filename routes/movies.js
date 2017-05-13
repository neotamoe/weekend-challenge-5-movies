var express = require ('express');
var router = express.Router();
var mongoose = require ('mongoose');
var faveflicksModel = require ('../models/models');

router.post('/', function (req, res){
  console.log('in POST to add favorite movie');
  console.log('req.body-->', req.body);
  var newMovie = faveflicksModel.faveflicks(req.body);
  newMovie.save().then(function(){
    console.log('added movie '+ req.body.title + ' to database');
    res.sendStatus(200);
  });  // end newMovie save
});  // end POST

module.exports = router;
