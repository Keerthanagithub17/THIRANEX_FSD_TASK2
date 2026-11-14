import "../assets/css/Card.css";


function TheatreCard({theatre}){


    return(

        <div className="card">


            <h2>
                {theatre.theatre_name}
            </h2>


            <p>
                City : {theatre.city}
            </p>


            <p>
                Address : {theatre.address}
            </p>


        </div>

    )

}


export default TheatreCard;