import {useEffect,useState} from "react";

import api from "../services/api";

import ShowCard from "../components/ShowCard";

import Loader from "../components/Loader";

import "../assets/css/Shows.css";


function Shows(){


    const [shows,setShows]=useState([]);

    const [loading,setLoading]=useState(true);



    useEffect(()=>{


        api.get("/shows")

        .then(res=>{

            setShows(res.data);

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

        <div className="shows-page">


            <h1>
                Available Shows
            </h1>


            <div className="show-container">


                {
                    shows.map(show=>(

                        <ShowCard

                            key={show.show_id}

                            show={show}

                        />

                    ))
                }


            </div>


        </div>

    )

}


export default Shows;