import { Link } from "react-router-dom";

import "../assets/css/Card.css";


function MovieCard({movie}){


    return(

        <div className="card">


            <img

                src={
                    movie.poster_url ||
                    "https://via.placeholder.com/300x400"
                }

                alt={movie.title}

            />


            <h2>
                {movie.title}
            </h2>


            <p>
                Genre : {movie.genre}
            </p>


            <p>
                Language : {movie.language}
            </p>


            <p>
                ⭐ {movie.rating}
            </p>


            <Link to={`/movie/${movie.movie_id}`}>

                <button>
                    View Details
                </button>

            </Link>


        </div>

    )

}


export default MovieCard;