import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// User Pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Theatres from "./pages/Theatres";
import Screens from "./pages/Screens";
import Shows from "./pages/Shows";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";
import BookingSeats from "./pages/BookingSeats";
import Payments from "./pages/Payments";

// Admin Pages
import Admin from "./pages/Admin";
import AdminMovies from "./pages/AdminMovies";

// Error Page
import NotFound from "./pages/NotFound";

// CSS
import "./assets/css/App.css";

function App() {

    return (

        <>

            <Navbar />

            <Routes>

                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Movies */}
                <Route path="/movies" element={<Movies />} />
                <Route path="/movie/:id" element={<MovieDetails />} />

                {/* Theatre */}
                <Route path="/theatres" element={<Theatres />} />

                {/* Screens */}
                <Route path="/screens" element={<Screens />} />

                {/* Shows */}
                <Route path="/shows" element={<Shows />} />

                {/* Users */}
                <Route path="/users" element={<Users />} />

                {/* Bookings */}
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/booking-seats" element={<BookingSeats />} />

                {/* Payments */}
                <Route path="/payments" element={<Payments />} />

                {/* Admin */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/movies" element={<AdminMovies />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />

            </Routes>

            <Footer />

        </>

    );

}

export default App;