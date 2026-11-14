const express = require("express");

const router = express.Router();

const {
    getAllBookingSeats,
    getBookingSeatById,
    addBookingSeat,
    updateBookingSeat,
    deleteBookingSeat
} = require("../controllers/bookingSeatController");

router.get("/", getAllBookingSeats);

router.get("/:id", getBookingSeatById);

router.post("/", addBookingSeat);

router.put("/:id", updateBookingSeat);

router.delete("/:id", deleteBookingSeat);

module.exports = router;