import {useEffect,useState} from "react";

import api from "../services/api";

import TheatreCard from "../components/TheatreCard";

import Loader from "../components/Loader";

import "../assets/css/Theatre.css";


function Theatres(){


    const [theatres,setTheatres]=useState([]);

    const [loading,setLoading]=useState(true);



    useEffect(()=>{


        api.get("/theatres")

        .then(res=>{

            setTheatres(res.data);

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

        <div className="theatre-page">


            <h1>
                Theatres
            </h1>


            <div className="theatre-container">


                {
                    theatres.map(theatre=>(

                        <TheatreCard

                            key={theatre.theatre_id}

                            theatre={theatre}

                        />

                    ))
                }


            </div>


        </div>

    )

}


export default Theatres;