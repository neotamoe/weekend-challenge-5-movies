var express = require ('express');
var mongoose = require ('mongoose');

var MovieSchema = mongoose.Schema({
  title: String,
  year: Number,
  poster: String,
});

var faveflicks = mongoose.model ('faveflicks', MovieSchema);

module.exports = {
  faveflicks: faveflicks,
  MovieSchema: MovieSchema
};
