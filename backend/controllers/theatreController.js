const db = require("../db");

// GET ALL THEATRES
const getAllTheatres = (req, res) => {

    db.query("SELECT * FROM Theatres", (err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json(result);

    });

};

// GET THEATRE BY ID
const getTheatreById = (req, res) => {

    const { id } = req.params;

    db.query(
        "SELECT * FROM Theatres WHERE theatre_id = ?",
        [id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Theatre not found"
                });
            }

            res.json(result[0]);

        }
    );

};

// ADD THEATRE
const addTheatre = (req, res) => {

    const {
        theatre_name,
        city,
        address
    } = req.body;

    const sql = `
    INSERT INTO Theatres
    (theatre_name,city,address)
    VALUES(?,?,?)
    `;

    db.query(
        sql,
        [
            theatre_name,
            city,
            address
        ],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Theatre Added Successfully",
                theatreId: result.insertId
            });

        }
    );

};

// UPDATE THEATRE
const updateTheatre = (req, res) => {

    const { id } = req.params;

    const {
        theatre_name,
        city,
        address
    } = req.body;

    const sql = `
    UPDATE Theatres
    SET
    theatre_name=?,
    city=?,
    address=?
    WHERE theatre_id=?
    `;

    db.query(
        sql,
        [
            theatre_name,
            city,
            address,
            id
        ],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Theatre Updated Successfully"
            });

        }
    );

};

// DELETE THEATRE
const deleteTheatre = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM Theatres WHERE theatre_id=?",
        [id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Theatre Deleted Successfully"
            });

        }
    );

};

module.exports = {
    getAllTheatres,
    getTheatreById,
    addTheatre,
    updateTheatre,
    deleteTheatre
};