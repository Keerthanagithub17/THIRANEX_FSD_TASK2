const express = require("express");

const router = express.Router();

const {
    getAllTheatres,
    getTheatreById,
    addTheatre,
    updateTheatre,
    deleteTheatre
} = require("../controllers/theatreController");

router.get("/", getAllTheatres);

router.get("/:id", getTheatreById);

router.post("/", addTheatre);

router.put("/:id", updateTheatre);

router.delete("/:id", deleteTheatre);

module.exports = router;