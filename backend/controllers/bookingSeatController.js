const db = require("../db");

// GET ALL BOOKING SEATS
const getAllBookingSeats = (req, res) => {

    const sql = `
    SELECT
        bs.booking_seat_id,
        bs.booking_id,
        u.name,
        m.title,
        se.seat_number,
        se.seat_type
    FROM Booking_Seats bs
    INNER JOIN Bookings b
        ON bs.booking_id = b.booking_id
    INNER JOIN Users u
        ON b.user_id = u.user_id
    INNER JOIN Shows sh
        ON b.show_id = sh.show_id
    INNER JOIN Movies m
        ON sh.movie_id = m.movie_id
    INNER JOIN Seats se
        ON bs.seat_id = se.seat_id
    `;

    db.query(sql, (err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json(result);

    });

};

// GET BOOKING SEAT BY ID
const getBookingSeatById = (req, res) => {

    const { id } = req.params;

    db.query(
        "SELECT * FROM Booking_Seats WHERE booking_seat_id=?",
        [id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Booking Seat not found"
                });
            }

            res.json(result[0]);

        }
    );

};

// ADD BOOKING SEAT
const addBookingSeat = (req, res) => {

    const {
        booking_id,
        seat_id
    } = req.body;

    db.query(
        "INSERT INTO Booking_Seats(booking_id,seat_id) VALUES(?,?)",
        [booking_id, seat_id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Seat Added To Booking Successfully",
                bookingSeatId: result.insertId
            });

        }
    );

};

// UPDATE BOOKING SEAT
const updateBookingSeat = (req, res) => {

    const { id } = req.params;

    const {
        booking_id,
        seat_id
    } = req.body;

    db.query(
        `UPDATE Booking_Seats
         SET
         booking_id=?,
         seat_id=?
         WHERE booking_seat_id=?`,
        [booking_id, seat_id, id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Booking Seat Updated Successfully"
            });

        }
    );

};

// DELETE BOOKING SEAT
const deleteBookingSeat = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM Booking_Seats WHERE booking_seat_id=?",
        [id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Booking Seat Deleted Successfully"
            });

        }
    );

};

module.exports = {
    getAllBookingSeats,
    getBookingSeatById,
    addBookingSeat,
    updateBookingSeat,
    deleteBookingSeat
};