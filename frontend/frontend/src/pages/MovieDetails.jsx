import {useEffect,useState} from "react";

import {useParams} from "react-router-dom";

import api from "../services/api";

import Loader from "../components/Loader";

import "../assets/css/Movies.css";


function MovieDetails(){

    const {id}=useParams();


    const [movie,setMovie]=useState(null);



    useEffect(()=>{


        api.get(`/movies/${id}`)

        .then(res=>{

            setMovie(res.data);

        })


    },[id]);



    if(!movie)
    {
        return <Loader/>
    }



    return(

        <div className="movie-details">


            <h1>
                {movie.title}
            </h1>


            <p>
                Genre : {movie.genre}
            </p>


            <p>
                Language : {movie.language}
            </p>


            <p>
                Duration : {movie.duration} minutes
            </p>


            <p>
                Rating : ⭐ {movie.rating}
            </p>


            <p>
                Certificate : {movie.certificate}
            </p>


        </div>

    )

}


export default MovieDetails;