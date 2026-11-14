import { Link } from "react-router-dom";

import "../assets/css/Home.css";


function Home(){

    return(

        <div className="home">

            <section className="hero">

                <h1>
                    Welcome to Movie Ticket Booking
                </h1>

                <p>
                    Book your favourite movies, choose seats and enjoy your show.
                </p>

                <Link to="/movies">

                    <button>
                        Explore Movies
                    </button>

                </Link>

            </section>


            <section className="features">

                <div className="feature-card">

                    <h2>
                        🎬 Movies
                    </h2>

                    <p>
                        Browse latest movies and ratings.
                    </p>

                </div>


                <div className="feature-card">

                    <h2>
                        🏢 Theatres
                    </h2>

                    <p>
                        Find theatres near you.
                    </p>

                </div>


                <div className="feature-card">

                    <h2>
                        🎫 Booking
                    </h2>

                    <p>
                        Select seats and confirm booking.
                    </p>

                </div>


            </section>


        </div>

    )

}


export default Home;