const db = require("../db");

// GET ALL BOOKINGS
const getAllBookings = (req, res) => {

    const sql = `
    SELECT
        b.booking_id,
        u.name,
        m.title,
        t.theatre_name,
        sc.screen_name,
        sh.show_date,
        sh.show_time,
        b.booking_date,
        b.total_amount,
        b.booking_status
    FROM Bookings b
    INNER JOIN Users u
        ON b.user_id = u.user_id
    INNER JOIN Shows sh
        ON b.show_id = sh.show_id
    INNER JOIN Movies m
        ON sh.movie_id = m.movie_id
    INNER JOIN Screens sc
        ON sh.screen_id = sc.screen_id
    INNER JOIN Theatres t
        ON sc.theatre_id = t.theatre_id
    `;

    db.query(sql, (err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json(result);

    });

};

// GET BOOKING BY ID
const getBookingById = (req, res) => {

    const { id } = req.params;

    db.query(
        "SELECT * FROM Bookings WHERE booking_id=?",
        [id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Booking not found"
                });
            }

            res.json(result[0]);

        }
    );

};

// ADD BOOKING
const addBooking = (req, res) => {

    const {
        user_id,
        show_id,
        booking_date,
        total_amount,
        booking_status
    } = req.body;

    const sql = `
    INSERT INTO Bookings
    (user_id,show_id,booking_date,total_amount,booking_status)
    VALUES (?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            user_id,
            show_id,
            booking_date,
            total_amount,
            booking_status
        ],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Booking Added Successfully",
                bookingId: result.insertId
            });

        }
    );

};

// UPDATE BOOKING
const updateBooking = (req, res) => {

    const { id } = req.params;

    const {
        user_id,
        show_id,
        booking_date,
        total_amount,
        booking_status
    } = req.body;

    const sql = `
    UPDATE Bookings
    SET
    user_id=?,
    show_id=?,
    booking_date=?,
    total_amount=?,
    booking_status=?
    WHERE booking_id=?
    `;

    db.query(
        sql,
        [
            user_id,
            show_id,
            booking_date,
            total_amount,
            booking_status,
            id
        ],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Booking Updated Successfully"
            });

        }
    );

};

// DELETE BOOKING
const deleteBooking = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM Bookings WHERE booking_id=?",
        [id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Booking Deleted Successfully"
            });

        }
    );

};

module.exports = {
    getAllBookings,
    getBookingById,
    addBooking,
    updateBooking,
    deleteBooking
};