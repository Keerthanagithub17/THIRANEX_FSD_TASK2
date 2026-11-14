const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database Connection
require("./db");

// Routes
const movieRoutes = require("./routes/movieRoutes");
const theatreRoutes = require("./routes/theatreRoutes");
const screenRoutes = require("./routes/screenRoutes");
const showRoutes = require("./routes/showRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const bookingSeatRoutes = require("./routes/bookingSeatRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
    res.send("🎬 Movie Ticket Booking API is Running...");
});

// API Routes
app.use("/movies", movieRoutes);
app.use("/theatres", theatreRoutes);
app.use("/screens", screenRoutes);
app.use("/shows", showRoutes);
app.use("/users", userRoutes);
app.use("/bookings", bookingRoutes);
app.use("/booking-seats", bookingSeatRoutes);
app.use("/payments", paymentRoutes);

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log("✅ Movie Ticket Booking Backend Started Successfully");
});