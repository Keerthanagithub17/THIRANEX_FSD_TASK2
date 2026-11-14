import {useEffect,useState} from "react";

import api from "../services/api";

import Loader from "../components/Loader";

import "../assets/css/Theatre.css";


function Screens(){


    const [screens,setScreens]=useState([]);

    const [loading,setLoading]=useState(true);



    useEffect(()=>{


        api.get("/screens")

        .then(res=>{

            setScreens(res.data);

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
                Screens
            </h1>


            <div className="theatre-container">


            {

                screens.map(screen=>(

                    <div 
                    className="card"
                    key={screen.screen_id}
                    >

                        <h2>
                            {screen.screen_name}
                        </h2>


                        <p>
                            Capacity : {screen.capacity}
                        </p>


                    </div>

                ))

            }


            </div>


        </div>

    )

}


export default Screens;