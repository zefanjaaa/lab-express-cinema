const express = require("express");
const MoviesModel = require("../models/Movies.model");
const router = express.Router();
const MovieModel = require("../models/Movies.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));
router.get("/movies", (req, res) => {
  MovieModel.find().then((result) => {
    res.render("movies", { result });
  });
});

router.get("/movies/:id", (req, res, next) => {
  console.log(req.params);
  MovieModel.findById(req.params.id).then((result) => {
    res.render("moviedetailed", result);
  });
});

router.get("/moviesdetailed", (req, res) => {
  MoviesModel.find().then((result) => {
    res.render("movies", result);
  });
});

module.exports = router;
