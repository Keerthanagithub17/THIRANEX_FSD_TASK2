const express = require("express");
const router = express.Router();

const {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController");

// GET all movies
router.get("/", getAllMovies);

// GET movie by ID
router.get("/:id", getMovieById);

// POST add movie
router.post("/", addMovie);

// PUT update movie
router.put("/:id", updateMovie);


// DELETE movie
router.delete("/:id", deleteMovie);

module.exports = router;