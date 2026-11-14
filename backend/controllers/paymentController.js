const db = require("../db");

// GET ALL PAYMENTS
const getAllPayments = (req, res) => {

    const sql = `
    SELECT
        p.payment_id,
        u.name,
        m.title,
        p.payment_method,
        p.payment_status,
        p.payment_date
    FROM Payments p
    INNER JOIN Bookings b
        ON p.booking_id = b.booking_id
    INNER JOIN Users u
        ON b.user_id = u.user_id
    INNER JOIN Shows s
        ON b.show_id = s.show_id
    INNER JOIN Movies m
        ON s.movie_id = m.movie_id
    `;

    db.query(sql, (err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json(result);

    });

};

// GET PAYMENT BY ID
const getPaymentById = (req, res) => {

    const { id } = req.params;

    db.query(
        "SELECT * FROM Payments WHERE payment_id=?",
        [id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Payment not found"
                });
            }

            res.json(result[0]);

        }
    );

};

// ADD PAYMENT
const addPayment = (req, res) => {

    const {
        booking_id,
        payment_method,
        payment_status,
        payment_date
    } = req.body;

    db.query(
        `INSERT INTO Payments
        (booking_id,payment_method,payment_status,payment_date)
        VALUES(?,?,?,?)`,
        [
            booking_id,
            payment_method,
            payment_status,
            payment_date
        ],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Payment Added Successfully",
                paymentId: result.insertId
            });

        }
    );

};

// UPDATE PAYMENT
const updatePayment = (req, res) => {

    const { id } = req.params;

    const {
        booking_id,
        payment_method,
        payment_status,
        payment_date
    } = req.body;

    db.query(
        `UPDATE Payments
         SET
         booking_id=?,
         payment_method=?,
         payment_status=?,
         payment_date=?
         WHERE payment_id=?`,
        [
            booking_id,
            payment_method,
            payment_status,
            payment_date,
            id
        ],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Payment Updated Successfully"
            });

        }
    );

};

// DELETE PAYMENT
const deletePayment = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM Payments WHERE payment_id=?",
        [id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Payment Deleted Successfully"
            });

        }
    );

};

module.exports = {
    getAllPayments,
    getPaymentById,
    addPayment,
    updatePayment,
    deletePayment
};