const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movies.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
