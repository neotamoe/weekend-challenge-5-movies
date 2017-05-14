var express = require ('express');
var router = express.Router();
var mongoose = require ('mongoose');
var faveflicksModel = require ('../models/models');

router.post('/', function (req, res){
  console.log('in POST to add favorite movie');
  console.log('req.body-->', req.body);
  var newMovie = faveflicksModel.faveflicks(req.body);
  newMovie.save().then(function(){
    console.log('added movie '+ req.body.title+ ' to database');
    res.sendStatus(200);
  });  // end newMovie save
});  // end POST

router.get('/', function(req,res){
  console.log('in GET to get favorites from db');
  faveflicksModel.faveflicks.find().then(function(data){
    // console.log('data-->', data);
    res.send(data);
  });
});

router.delete('/:id/', function(req,res){
  console.log('in DELETE to remove movie from DB: req.params.id-->', req.params.id);
  faveflicksModel.faveflicks.remove({_id: req.params.id}).then(function(){
    console.log('removed movie with id', req.params.id, 'from database');
    res.sendStatus(200);
  });
});

module.exports = router;
