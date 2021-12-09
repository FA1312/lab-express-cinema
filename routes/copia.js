const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.models");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  MovieModel.find({}).then((films) => {
    res.render("movies", { films });
  });
});
module.exports = router;
