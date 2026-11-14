const db = require("../db");

// GET ALL MOVIES
const getAllMovies = (req, res) => {
    db.query("SELECT * FROM Movies", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// GET MOVIE BY ID
const getMovieById = (req, res) => {
    const { id } = req.params;

    db.query(
        "SELECT * FROM Movies WHERE movie_id = ?",
        [id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Movie not found"
                });
            }

            res.json(result[0]);
        }
    );
};

// ADD MOVIE
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
    (title,genre,language,duration,release_date,rating,certificate)
    VALUES (?,?,?,?,?,?,?)
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

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Movie Added Successfully",
                movieId: result.insertId
            });

        }
    );

};

// UPDATE MOVIE
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
            release_date || null,
            rating || null,
            certificate || null,
            id
        ],
        (err, result) => {

            if (err) {
                console.error("UPDATE ERROR:", err);

                return res.status(500).json({
                    message: "Failed to update movie",
                    error: err.message
                });
            }

            res.json({
                message: "Movie Updated Successfully",
                affectedRows: result.affectedRows
            });

        }
    );

};

// DELETE MOVIE
const deleteMovie = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM Movies WHERE movie_id=?",
        [id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Movie Deleted Successfully"
            });

        }
    );

};

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
};