const db = require("../db");

// GET ALL SHOWS
const getAllShows = (req, res) => {

    const sql = `
    SELECT
        sh.show_id,
        m.title,
        t.theatre_name,
        sc.screen_name,
        sh.show_date,
        sh.show_time,
        sh.ticket_price
    FROM Shows sh
    INNER JOIN Movies m
        ON sh.movie_id = m.movie_id
    INNER JOIN Screens sc
        ON sh.screen_id = sc.screen_id
    INNER JOIN Theatres t
        ON sc.theatre_id = t.theatre_id
    `;

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });

};

// GET SHOW BY ID
const getShowById = (req, res) => {

    const { id } = req.params;

    db.query(
        "SELECT * FROM Shows WHERE show_id=?",
        [id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Show not found"
                });
            }

            res.json(result[0]);

        }
    );

};

// ADD SHOW
const addShow = (req, res) => {

    const {
        movie_id,
        screen_id,
        show_date,
        show_time,
        ticket_price
    } = req.body;

    const sql = `
    INSERT INTO Shows
    (movie_id,screen_id,show_date,show_time,ticket_price)
    VALUES (?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            movie_id,
            screen_id,
            show_date,
            show_time,
            ticket_price
        ],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Show Added Successfully",
                showId: result.insertId
            });

        }
    );

};

// UPDATE SHOW
const updateShow = (req, res) => {

    const { id } = req.params;

    const {
        movie_id,
        screen_id,
        show_date,
        show_time,
        ticket_price
    } = req.body;

    const sql = `
    UPDATE Shows
    SET
    movie_id=?,
    screen_id=?,
    show_date=?,
    show_time=?,
    ticket_price=?
    WHERE show_id=?
    `;

    db.query(
        sql,
        [
            movie_id,
            screen_id,
            show_date,
            show_time,
            ticket_price,
            id
        ],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Show Updated Successfully"
            });

        }
    );

};

// DELETE SHOW
const deleteShow = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM Shows WHERE show_id=?",
        [id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Show Deleted Successfully"
            });

        }
    );

};

module.exports = {
    getAllShows,
    getShowById,
    addShow,
    updateShow,
    deleteShow
};