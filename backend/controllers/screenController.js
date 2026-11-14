const db = require("../db");

// GET ALL SCREENS
const getAllScreens = (req, res) => {
    db.query(
        `SELECT s.screen_id, s.screen_name, s.capacity,
        t.theatre_name
        FROM Screens s
        INNER JOIN Theatres t
        ON s.theatre_id = t.theatre_id`,
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
};

// GET SCREEN BY ID
const getScreenById = (req, res) => {
    const { id } = req.params;

    db.query(
        "SELECT * FROM Screens WHERE screen_id = ?",
        [id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Screen not found"
                });
            }

            res.json(result[0]);
        }
    );
};

// ADD SCREEN
const addScreen = (req, res) => {

    const {
        theatre_id,
        screen_name,
        capacity
    } = req.body;

    db.query(
        "INSERT INTO Screens(theatre_id,screen_name,capacity) VALUES(?,?,?)",
        [theatre_id, screen_name, capacity],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Screen Added Successfully",
                screenId: result.insertId
            });

        }
    );

};

// UPDATE SCREEN
const updateScreen = (req, res) => {

    const { id } = req.params;

    const {
        theatre_id,
        screen_name,
        capacity
    } = req.body;

    db.query(
        `UPDATE Screens
        SET theatre_id=?, screen_name=?, capacity=?
        WHERE screen_id=?`,
        [theatre_id, screen_name, capacity, id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Screen Updated Successfully"
            });

        }
    );

};

// DELETE SCREEN
const deleteScreen = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM Screens WHERE screen_id=?",
        [id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Screen Deleted Successfully"
            });

        }
    );

};

module.exports = {
    getAllScreens,
    getScreenById,
    addScreen,
    updateScreen,
    deleteScreen
};