const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find({})
    .then((films) => {
      res.render("movies", { films });
    })
    .catch((err) => console.error(err));
});

router.get("/movie/:id", (req, res) => {
  const selMovie = Movie.findById(req.params.id);
  res.render("detail", selMovie);
});

module.exports = router;
