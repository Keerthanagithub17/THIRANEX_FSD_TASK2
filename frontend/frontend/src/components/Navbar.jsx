import {Link} from "react-router-dom";

import "../assets/css/Navbar.css";


function Navbar(){

    return(

        <nav className="navbar">

            <h2 className="logo">
                🎬 Movie Booking
            </h2>


            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/movies">Movies</Link>

                <Link to="/theatres">Theatres</Link>

                <Link to="/shows">Shows</Link>

                <Link to="/bookings">Bookings</Link>

                <Link to="/admin">Admin</Link>

            </div>


        </nav>

    )

}


export default Navbar;