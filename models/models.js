// requires
var express = require ('express');
var mongoose = require ('mongoose');

// schema
var MovieSchema = mongoose.Schema({
  title: String,
  year: Number,
  poster: String,
});

// model
var faveflicks = mongoose.model ('faveflicks', MovieSchema);

module.exports = {
  faveflicks: faveflicks,
  MovieSchema: MovieSchema
};
