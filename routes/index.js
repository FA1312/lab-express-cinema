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

router.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  Movie.findById(id).then((film) => {
    res.render("detail", { film });
  });
});

module.exports = router;
