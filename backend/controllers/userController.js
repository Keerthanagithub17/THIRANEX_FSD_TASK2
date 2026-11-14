const db = require("../db");

// GET ALL USERS
const getAllUsers = (req, res) => {

    db.query("SELECT * FROM Users", (err, result) => {

        if (err)
            return res.status(500).json(err);

        res.json(result);

    });

};

// GET USER BY ID
const getUserById = (req, res) => {

    const { id } = req.params;

    db.query(
        "SELECT * FROM Users WHERE user_id=?",
        [id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            if (result.length === 0) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            res.json(result[0]);

        }
    );

};

// ADD USER
const addUser = (req, res) => {

    const {
        name,
        email,
        phone,
        password
    } = req.body;

    db.query(
        "INSERT INTO Users(name,email,phone,password) VALUES(?,?,?,?)",
        [name, email, phone, password],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "User Added Successfully",
                userId: result.insertId
            });

        }
    );

};

// UPDATE USER
const updateUser = (req, res) => {

    const { id } = req.params;

    const {
        name,
        email,
        phone,
        password
    } = req.body;

    db.query(
        `UPDATE Users
         SET
         name=?,
         email=?,
         phone=?,
         password=?
         WHERE user_id=?`,
        [name, email, phone, password, id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "User Updated Successfully"
            });

        }
    );

};

// DELETE USER
const deleteUser = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM Users WHERE user_id=?",
        [id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "User Deleted Successfully"
            });

        }
    );

};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};