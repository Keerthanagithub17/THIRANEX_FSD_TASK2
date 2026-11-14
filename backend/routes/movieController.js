const db = require("../db");

// ==========================
// GET ALL MOVIES
// ==========================
const getAllMovies = (req, res) => {

    const sql = "SELECT * FROM Movies ORDER BY movie_id DESC";

    db.query(sql, (err, results) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to fetch movies"
            });
        }

        res.status(200).json(results);

    });

};

// ==========================
// GET MOVIE BY ID
// ==========================
const getMovieById = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM Movies WHERE movie_id = ?";

    db.query(sql, [id], (err, results) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Movie Not Found"
            });
        }

        res.status(200).json(results[0]);

    });

};

// ==========================
// ADD MOVIE
// ==========================
const addMovie = (req, res) => {

    const {

        title,
        genre,
        language,
        duration,
        release_date,
        rating,
        certificate

    } = req.body;

    const sql = `
        INSERT INTO Movies
        (title, genre, language, duration, release_date, rating, certificate)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(

        sql,

        [

            title,
            genre,
            language,
            duration,
            release_date,
            rating,
            certificate

        ],

        (err, result) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Failed to Add Movie"
                });
            }

            res.status(201).json({

                message: "Movie Added Successfully",

                movie_id: result.insertId

            });

        }

    );

};

// ==========================
// UPDATE MOVIE
// ==========================
const updateMovie = (req, res) => {

    const { id } = req.params;

    const {

        title,
        genre,
        language,
        duration,
        release_date,
        rating,
        certificate

    } = req.body;

    const sql = `
        UPDATE Movies
        SET
            title = ?,
            genre = ?,
            language = ?,
            duration = ?,
            release_date = ?,
            rating = ?,
            certificate = ?
        WHERE movie_id = ?
    `;

    db.query(

        sql,

        [

            title,
            genre,
            language,
            duration,
            release_date,
            rating,
            certificate,
            id

        ],

        (err) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Failed to Update Movie"
                });
            }

            res.status(200).json({
                message: "Movie Updated Successfully"
            });

        }

    );

};

// ==========================
// DELETE MOVIE
// ==========================
const deleteMovie = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM Movies WHERE movie_id = ?";

    db.query(sql, [id], (err) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to Delete Movie"
            });
        }

        res.status(200).json({
            message: "Movie Deleted Successfully"
        });

    });

};

module.exports = {

    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie

};