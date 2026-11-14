import {useEffect,useState} from "react";

import api from "../services/api";

import MovieCard from "../components/MovieCard";

import Loader from "../components/Loader";

import "../assets/css/Movies.css";


function Movies(){

    const [movies,setMovies]=useState([]);

    const [loading,setLoading]=useState(true);



    useEffect(()=>{


        api.get("/movies")

        .then(res=>{

            setMovies(res.data);

            setLoading(false);

        })

        .catch(err=>{

            console.log(err);

            setLoading(false);

        })


    },[]);



    if(loading)
    {
        return <Loader/>
    }



    return(

        <div className="movies-page">


            <h1>
                Available Movies
            </h1>


            <div className="movie-container">


                {
                    movies.map(movie=>(

                        <MovieCard

                            key={movie.movie_id}

                            movie={movie}

                        />

                    ))
                }


            </div>


        </div>

    )

}


export default Movies;